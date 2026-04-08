export type ConsultationType =
  | "individual-immigration"
  | "appeal-refusal"
  | "corporate-immigration";

export type ConsultationStatus = "submitted";

export type ConsultationOption = {
  type: ConsultationType;
  title: string;
  description: string;
  duration: string;
  summaryLabel: string;
};

export type ConsultationRequestInput = {
  consultationType: ConsultationType;
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  caseSummary?: string;
};

export type ConsultationRequestRecord = ConsultationRequestInput & {
  referenceNumber: string;
  status: ConsultationStatus;
  submittedAt: string;
};

export const consultationOptions: ConsultationOption[] = [
  {
    type: "individual-immigration",
    title: "Individual Immigration Consultation",
    description:
      "A comprehensive consultation for individuals seeking advice on visa applications, status queries, or general immigration matters in the United Kingdom.",
    duration: "30Min",
    summaryLabel: "Individual Immigration Consultation"
  },
  {
    type: "appeal-refusal",
    title: "Appeal / Refusal Consultation",
    description:
      "Specialist advice for clients who have received a visa refusal or wish to explore appeal options before the Immigration Tribunal.",
    duration: "30Min",
    summaryLabel: "Appeal / Refusal Consultation"
  },
  {
    type: "corporate-immigration",
    title: "Corporate Immigration Consultation",
    description:
      "Tailored advice for corporate organisations managing workforce mobility, sponsor licence obligations, or business expansion into the UK.",
    duration: "30Min",
    summaryLabel: "Corporate Immigration Consultation"
  }
];

export const consultationOptionsByType = Object.fromEntries(
  consultationOptions.map((option) => [option.type, option])
) as Record<ConsultationType, ConsultationOption>;

export const consultationOffer = {
  label: "Book Consultation",
  duration: "30 minutes",
  description:
    "Initial consultation to assess the immigration matter, explain the likely legal route, and provide a structured preliminary view of case prospects."
};
