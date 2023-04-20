import { z } from "astro/zod";
import type { CmsField } from "netlify-cms-core";

export const postSchema = z.object({
  title: z.string(),
  date: z.date().transform(str => new Date(str)),
});

export const postFields: CmsField[] = [
  { label: "Title", name: "title", widget: "string" },
  { label: "Meeting Date", name: "date", widget: "datetime" },
  { label: "Body", name: "body", widget: "markdown" },
];
