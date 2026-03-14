import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 4 }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "audience",
      title: "Audience",
      type: "string",
      options: {
        list: ["Corporate Organisations", "Private Clients", "High-Net-Worth Individuals"]
      }
    })
  ]
});

