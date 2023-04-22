import { z } from "astro/zod";
import type { CmsField } from "netlify-cms-core";

export const postSchema = z.object({
  title: z.string(),
  date: z.date().transform(str => new Date(str)),
  author: z.string(),
});

export const postFields: CmsField[] = [
  { label: "Title", name: "title", widget: "string" },
  {
    label: "Author",
    name: "author",
    widget: "string",
    default: "Doug Harrison",
  },
  { label: "Meeting Date", name: "date", widget: "datetime" },
  { label: "Body", name: "body", widget: "markdown" },
];
