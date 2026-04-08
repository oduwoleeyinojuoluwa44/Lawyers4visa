import {
  consultationOptions,
  consultationOptionsByType,
  type ConsultationType
} from "@lawyersForvisa/content";

export const consultationTypeValues = consultationOptions.map((option) => option.type);

export const isConsultationType = (value: string | null | undefined): value is ConsultationType =>
  !!value && consultationTypeValues.includes(value as ConsultationType);

export const parseConsultationType = (value: string | null | undefined): ConsultationType | null =>
  isConsultationType(value) ? value : null;

export const getConsultationOption = (type: ConsultationType | null | undefined) =>
  type ? consultationOptionsByType[type] : null;
