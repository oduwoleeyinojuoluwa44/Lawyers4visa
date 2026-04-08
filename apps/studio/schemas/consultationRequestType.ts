import { consultationOptions } from "@lawyersForvisas/content";
import { defineField, defineType } from "sanity";

export const consultationRequestType = defineType({
  name: "consultationRequest",
  title: "Consultation Request",
  type: "document",
  fields: [
    defineField({
      name: "referenceNumber",
      title: "Reference Number",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "consultationType",
      title: "Consultation Type",
      type: "string",
      options: {
        list: consultationOptions.map((option) => ({
          title: option.title,
          value: option.type
        }))
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required().email()
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "organization",
      title: "Organization",
      type: "string"
    }),
    defineField({
      name: "caseSummary",
      title: "Case Summary",
      type: "text",
      rows: 6
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "submitted",
      options: {
        list: [{ title: "Submitted", value: "submitted" }]
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      validation: (rule) => rule.required()
    })
  ],
  preview: {
    select: {
      title: "referenceNumber",
      subtitle: "fullName",
      status: "status"
    },
    prepare({ title, subtitle, status }) {
      return {
        title,
        subtitle: `${subtitle} - ${status}`
      };
    }
  }
});
