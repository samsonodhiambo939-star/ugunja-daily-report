import { defineType, defineField } from "sanity";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 120 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "story",
      title: "Story",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "publishDate",
      title: "Publish Date",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Publish Date",
      name: "publishDateDesc",
      by: [{ field: "publishDate", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "excerpt" },
  },
});
