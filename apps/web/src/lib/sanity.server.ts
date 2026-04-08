import {
  type ConsultationRequestRecord,
  type ConsultationType
} from "@lawyersForvisas/content";

const apiVersion = "2026-03-16";

type ConsultationRequestDocument = ConsultationRequestRecord & {
  _id: string;
  _type: "consultationRequest";
};

type SanityMutationResponse = {
  results?: Array<{
    document?: ConsultationRequestDocument;
  }>;
};

type SanityQueryResponse<T> = {
  result: T;
};

const getSanityConfig = () => {
  const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID;
  const dataset = import.meta.env.SANITY_STUDIO_DATASET;
  const token = import.meta.env.SANITY_API_TOKEN;

  if (!projectId || !dataset || !token) {
    throw new Error(
      "Sanity is not fully configured. Set SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, and SANITY_API_TOKEN."
    );
  }

  return { projectId, dataset, token };
};

const getSanityApiUrl = (path: string) => {
  const { projectId } = getSanityConfig();
  return `https://${projectId}.api.sanity.io/v${apiVersion}${path}`;
};

const sanityRequest = async <T>(
  path: string,
  init?: RequestInit
): Promise<T> => {
  const { token } = getSanityConfig();
  const response = await fetch(getSanityApiUrl(path), {
    ...init,
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
      ...(init?.headers ?? {})
    }
  });

  if (!response.ok) {
    console.error("Sanity API request failed", {
      path,
      status: response.status,
      statusText: response.statusText
    });
    throw new Error("The consultation request could not be saved. Please try again.");
  }

  return (await response.json()) as T;
};

const toConsultationRequestRecord = (
  document: ConsultationRequestRecord | ConsultationRequestDocument
): ConsultationRequestRecord => ({
  caseSummary: document.caseSummary ?? "",
  consultationType: document.consultationType as ConsultationType,
  email: document.email,
  fullName: document.fullName,
  organization: document.organization ?? "",
  phone: document.phone,
  referenceNumber: document.referenceNumber,
  status: document.status,
  submittedAt: document.submittedAt
});

export const createConsultationRequest = async (
  record: ConsultationRequestRecord
): Promise<ConsultationRequestRecord> => {
  const { dataset } = getSanityConfig();
  const document: ConsultationRequestDocument = {
    _id: `consultationRequest.${record.referenceNumber}`,
    _type: "consultationRequest",
    ...record
  };

  const result = await sanityRequest<SanityMutationResponse>(
    `/data/mutate/${dataset}?returnIds=true&returnDocuments=true`,
    {
      method: "POST",
      body: JSON.stringify({
        mutations: [{ createOrReplace: document }]
      })
    }
  );

  const created = result.results?.[0]?.document;

  if (!created) {
    throw new Error("The consultation request could not be saved. Please try again.");
  }

  return toConsultationRequestRecord(created);
};

export const getConsultationRequestByReference = async (
  referenceNumber: string
): Promise<ConsultationRequestRecord | null> => {
  const { dataset } = getSanityConfig();
  const normalizedReference = referenceNumber.trim().toUpperCase();

  if (!/^[A-Z0-9-]{5,32}$/.test(normalizedReference)) {
    return null;
  }

  const query = `*[_type == "consultationRequest" && referenceNumber == ${JSON.stringify(normalizedReference)}][0]{
    referenceNumber,
    consultationType,
    fullName,
    email,
    phone,
    organization,
    caseSummary,
    status,
    submittedAt
  }`;
  const params = new URLSearchParams({ query });
  const result = await sanityRequest<SanityQueryResponse<ConsultationRequestRecord | null>>(
    `/data/query/${dataset}?${params.toString()}`,
    {
      method: "GET",
      headers: {}
    }
  );

  if (!result.result) {
    return null;
  }

  return toConsultationRequestRecord(result.result);
};
