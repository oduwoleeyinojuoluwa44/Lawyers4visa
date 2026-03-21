import {
  consultationOptionsByType,
  type ConsultationRequestInput,
  type ConsultationRequestRecord,
  type ConsultationType
} from "@lawyers4visa/content";
import { Resend } from "resend";

import {
  renderConsultationAdminEmail,
  renderConsultationUserEmail
} from "./consultation-email";
import { parseConsultationType } from "./consultation";
import {
  createConsultationRequest,
  getConsultationRequestByReference
} from "./sanity.server";
import { verifyTurnstileToken } from "./turnstile.server";

export type BookingFormValues = {
  consultationType: string;
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  caseSummary: string;
  turnstileToken: string;
};

export type BookingFormErrors = Partial<
  Record<keyof BookingFormValues | "form", string>
>;

export const emptyBookingFormValues = (
  consultationType: ConsultationType | null = null
): BookingFormValues => ({
  consultationType: consultationType ?? "",
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  caseSummary: "",
  turnstileToken: ""
});

const normalizeValue = (value: FormDataEntryValue | null) =>
  typeof value === "string" ? value.trim() : "";

export const getRequestIpAddress = (headers: Headers) => {
  const forwardedFor = headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "";
  }

  return headers.get("cf-connecting-ip") ?? "";
};

export const getBookingFormValues = (
  formData: FormData,
  fallbackConsultationType: ConsultationType | null = null
): BookingFormValues => ({
  consultationType:
    normalizeValue(formData.get("consultationType")) || fallbackConsultationType || "",
  fullName: normalizeValue(formData.get("fullName")),
  email: normalizeValue(formData.get("email")),
  phone: normalizeValue(formData.get("phone")),
  organization: normalizeValue(formData.get("organization")),
  caseSummary: normalizeValue(formData.get("caseSummary")),
  turnstileToken: normalizeValue(formData.get("cf-turnstile-response"))
});

export const validateBookingForm = (
  values: BookingFormValues
): {
  errors: BookingFormErrors;
  input: ConsultationRequestInput | null;
} => {
  const errors: BookingFormErrors = {};
  const consultationType = parseConsultationType(values.consultationType);

  if (!consultationType) {
    errors.consultationType = "Please select a consultation type.";
  }

  if (!values.fullName) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone) {
    errors.phone = "Please enter your phone number.";
  }

  if (!values.turnstileToken) {
    errors.turnstileToken = "Please complete the anti-spam check before submitting.";
  }

  if (Object.keys(errors).length > 0 || !consultationType) {
    return {
      errors,
      input: null
    };
  }

  return {
    errors,
    input: {
      consultationType,
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      organization: values.organization,
      caseSummary: values.caseSummary
    }
  };
};

export const createReferenceNumber = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomValues = crypto.getRandomValues(new Uint8Array(6));
  const token = Array.from(randomValues, (value) => alphabet[value % alphabet.length]).join("");

  return `L4V-${token}`;
};

const getResendClient = () => {
  const apiKey = import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
};

const getEmailConfig = () => {
  const sender = import.meta.env.RESEND_FROM_EMAIL || "LawyerForVisa <onboarding@resend.dev>";
  const notificationEmail =
    import.meta.env.CONSULTATION_NOTIFICATION_EMAIL || "hello@lawyersforvisas.com";
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || "http://localhost:4321";

  return { notificationEmail, sender, siteUrl };
};

const sendConsultationEmails = async (record: ConsultationRequestRecord) => {
  const resend = getResendClient();

  if (!resend) {
    return;
  }

  const option = consultationOptionsByType[record.consultationType];
  const { notificationEmail, sender, siteUrl } = getEmailConfig();
  const confirmationUrl = `${siteUrl.replace(/\/$/, "")}/book-consultation/confirmed/?reference=${encodeURIComponent(record.referenceNumber)}`;

  const userText = [
    `Hello ${record.fullName},`,
    "",
    "Your consultation request has been received successfully.",
    `Reference number: ${record.referenceNumber}`,
    `Consultation type: ${option.summaryLabel}`,
    "Date & Time: To be confirmed by email",
    "",
    "Our secretary will review your request and contact you manually",
    "to confirm a suitable consultation date and time.",
    "",
    confirmationUrl
  ].join("\n");

  const adminText = [
    "A new consultation request has been submitted.",
    "Please contact the client manually to arrange the consultation time.",
    "",
    `Reference number: ${record.referenceNumber}`,
    `Consultation type: ${option.summaryLabel}`,
    `Full name: ${record.fullName}`,
    `Email: ${record.email}`,
    `Phone: ${record.phone}`,
    `Organization: ${record.organization || "N/A"}`,
    `Case summary: ${record.caseSummary || "N/A"}`,
    `Submitted at: ${record.submittedAt}`
  ].join("\n");

  const emailJobs = [
    resend.emails.send({
      from: sender,
      to: record.email,
      replyTo: notificationEmail,
      subject: `Consultation request received - ${record.referenceNumber}`,
      text: userText,
      html: renderConsultationUserEmail(record, confirmationUrl)
    }),
    resend.emails.send({
      from: sender,
      to: notificationEmail,
      replyTo: record.email,
      subject: `Manual scheduling required - ${record.referenceNumber}`,
      text: adminText,
      html: renderConsultationAdminEmail(record, confirmationUrl)
    })
  ];

  const results = await Promise.allSettled(emailJobs);

  results.forEach((result) => {
    if (result.status === "rejected") {
      console.error("Failed to send consultation email", result.reason);
    }
  });
};

export const submitConsultationBooking = async (
  input: ConsultationRequestInput,
  turnstileToken: string,
  remoteIp?: string
): Promise<{
  errors: BookingFormErrors;
  record: ConsultationRequestRecord | null;
}> => {
  const verification = await verifyTurnstileToken(turnstileToken, remoteIp);

  if (!verification.success) {
    return {
      errors: {
        turnstileToken: verification.message
      },
      record: null
    };
  }

  const record: ConsultationRequestRecord = {
    ...input,
    referenceNumber: createReferenceNumber(),
    status: "submitted",
    submittedAt: new Date().toISOString()
  };

  const created = await createConsultationRequest(record);
  await sendConsultationEmails(created);

  return {
    errors: {},
    record: created
  };
};

export const loadConsultationBooking = async (referenceNumber: string) => {
  if (!referenceNumber) {
    return null;
  }

  return getConsultationRequestByReference(referenceNumber);
};
