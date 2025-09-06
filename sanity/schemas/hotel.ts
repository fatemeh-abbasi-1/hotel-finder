import { defineType, defineField } from "sanity";

export default defineType({
  name: "hotel",
  title: "Hotel",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "fullAddress",
      title: "Full Address",
      type: "text",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "starCount",
      title: "Star Count",
      type: "number",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "nightlyRate",
      title: "Nightly Rate",
      type: "number",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (r) => r.required(),
    }),
  ],
});
