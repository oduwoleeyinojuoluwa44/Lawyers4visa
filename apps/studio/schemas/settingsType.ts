import { defineField, defineType } from "sanity";

export const settingsType = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "siteDescription", title: "Site description", type: "text", rows: 3 }),
    defineField({ name: "ukOfficeAddress", title: "UK office address", type: "text", rows: 4 }),
    defineField({ name: "nigeriaOfficeAddress", title: "Nigeria office address", type: "text", rows: 4 }),
    defineField({ name: "consultationCta", title: "Consultation CTA", type: "string" })
  ]
});

