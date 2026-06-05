import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categoryTag",
      title: "Category Tag",
      type: "string",
      options: {
        list: [
          { title: "Fundamentals", value: "Fundamentals" },
          { title: "Models", value: "Models" },
          { title: "Practice", value: "Practice" },
          { title: "LLMs", value: "llms" },
          { title: "Agents", value: "agents" },
          { title: "Prompt Engineering", value: "prompt-engineering" },
          { title: "Fine-Tuning", value: "fine-tuning" },
          { title: "AI Tools", value: "ai-tools" },
          { title: "Research", value: "research" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().min(20).max(300),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "AI Guide",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainContent",
      title: "Main Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Open in new tab",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
        {
          type: "object",
          name: "codeBlock",
          title: "Code Block",
          fields: [
            {
              name: "language",
              type: "string",
              title: "Language",
              options: {
                list: ["javascript", "typescript", "python", "bash", "json", "css", "html"],
              },
            },
            {
              name: "code",
              type: "text",
              title: "Code",
            },
          ],
          preview: {
            select: { language: "language", code: "code" },
            prepare(selection: { language?: string; code?: string }) {
              return {
                title: `Code: ${selection.language ?? "unknown"}`,
                subtitle: selection.code?.slice(0, 60),
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "readTime",
      title: "Read Time (minutes)",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(60).integer(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "categoryTag",
      author: "author",
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
