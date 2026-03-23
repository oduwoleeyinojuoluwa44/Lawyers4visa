import {
  type ConsultationRequestRecord,
  type ConsultationType
} from "@lawyers4visa/content";
import "get-it";

const apiVersion = "2026-03-16";

type ConsultationRequestDocument = ConsultationRequestRecord & {
  _id: string;
  _type: "consultationRequest";
};

type ConsultationRequestQueryResult = ConsultationRequestRecord;

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

const getSanityClient = async () => {
  const { projectId, dataset, token } = getSanityConfig();
  const { createClient } = await import("@sanity/client");

  return createClient({
    apiVersion,
    dataset,
    projectId,
    token,
    useCdn: false
  });
};

export const createConsultationRequest = async (
  record: ConsultationRequestRecord
): Promise<ConsultationRequestRecord> => {
  const client = await getSanityClient();
  const document: ConsultationRequestDocument = {
    _id: `consultationRequest.${record.referenceNumber}`,
    _type: "consultationRequest",
    ...record
  };

  const created = await client.createOrReplace(document);

  return {
    caseSummary: created.caseSummary ?? "",
    consultationType: created.consultationType as ConsultationType,
    email: created.email,
    fullName: created.fullName,
    organization: created.organization ?? "",
    phone: created.phone,
    referenceNumber: created.referenceNumber,
    status: created.status,
    submittedAt: created.submittedAt
  };
};

export const getConsultationRequestByReference = async (
  referenceNumber: string
): Promise<ConsultationRequestRecord | null> => {
  const client = await getSanityClient();

  const result = await client.fetch<ConsultationRequestQueryResult | null>(
    `*[_type == "consultationRequest" && referenceNumber == $referenceNumber][0]{
      referenceNumber,
      consultationType,
      fullName,
      email,
      phone,
      organization,
      caseSummary,
      status,
      submittedAt
    }`,
    { referenceNumber }
  );

  if (!result) {
    return null;
  }

  return {
    caseSummary: result.caseSummary ?? "",
    consultationType: result.consultationType as ConsultationType,
    email: result.email,
    fullName: result.fullName,
    organization: result.organization ?? "",
    phone: result.phone,
    referenceNumber: result.referenceNumber,
    status: result.status,
    submittedAt: result.submittedAt
  };
};
