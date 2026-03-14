import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", title: "Answer", type: "array", of: [{ type: "block" }], validation: (rule) => rule.required() }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false })
  ]
});

