import {
  consultationOptionsByType,
  type ConsultationRequestInput,
  type ConsultationRequestRecord,
  type ConsultationType
} from "@lawyers4visa/content";

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

const bookingFieldLimits = {
  caseSummary: 2000,
  fullName: 120,
  organization: 120,
  phone: 24
};

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
  typeof value === "string"
    ? value.replaceAll(/\s+/g, " ").replaceAll(/[\u0000-\u001f\u007f]/g, "").trim()
    : "";

const normalizeMultilineValue = (value: FormDataEntryValue | null) =>
  typeof value === "string"
    ? value
        .replaceAll(/\r\n/g, "\n")
        .replaceAll(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
        .trim()
    : "";

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
  caseSummary: normalizeMultilineValue(formData.get("caseSummary")),
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
  } else if (values.fullName.length < 2 || values.fullName.length > bookingFieldLimits.fullName) {
    errors.fullName = "Please enter a valid full name.";
  }

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone) {
    errors.phone = "Please enter your phone number.";
  } else if (
    values.phone.length > bookingFieldLimits.phone ||
    !/^[0-9+()\-\s]{7,24}$/.test(values.phone)
  ) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (values.organization.length > bookingFieldLimits.organization) {
    errors.organization = "Organization name is too long.";
  }

  if (values.caseSummary.length > bookingFieldLimits.caseSummary) {
    errors.caseSummary = "Case summary is too long.";
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

type ResendEmailPayload = {
  from: string;
  html: string;
  reply_to?: string;
  subject: string;
  text: string;
  to: string[];
};

const resendEmailsEndpoint = "https://api.resend.com/emails";

const getResendApiKey = () => {
  const apiKey = import.meta.env.RESEND_API_KEY?.trim();

  return apiKey ? apiKey : null;
};

const sendResendEmail = async (apiKey: string, payload: ResendEmailPayload) => {
  const response = await fetch(resendEmailsEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "lawyers4visa-booking"
    },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    return;
  }

  let details = response.statusText;

  try {
    const rawBody = await response.text();
    details = rawBody || details;
  } catch {
    // Ignore response body parsing failures and use the status text instead.
  }

  throw new Error(`Resend API request failed (${response.status}): ${details}`);
};

const getEmailConfig = () => {
  const sender =
    import.meta.env.RESEND_FROM_EMAIL || "Lawyers4Visa <bookings@mail.lawyersforvisas.com>";
  const notificationEmail =
    import.meta.env.CONSULTATION_NOTIFICATION_EMAIL || "hello@lawyersforvisas.com";
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || "https://www.lawyersforvisas.com";

  return { notificationEmail, sender, siteUrl };
};

const sendConsultationEmails = async (record: ConsultationRequestRecord) => {
  const resendApiKey = getResendApiKey();

  if (!resendApiKey) {
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
    sendResendEmail(resendApiKey, {
      from: sender,
      to: [record.email],
      reply_to: notificationEmail,
      subject: `Consultation request received - ${record.referenceNumber}`,
      text: userText,
      html: renderConsultationUserEmail(record, confirmationUrl)
    }),
    sendResendEmail(resendApiKey, {
      from: sender,
      to: [notificationEmail],
      reply_to: record.email,
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
