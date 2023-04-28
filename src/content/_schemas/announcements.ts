import { z } from "astro/zod";
import type { CmsField } from "netlify-cms-core";

export const announcementSchema = z.object({
  title: z.string(),
  author: z.string(),
  date: z.date().transform(str => new Date(str)),
});

export const announcementFields: CmsField[] = [
  { label: "1-2 Sentence Home Page Summary", name: "title", widget: "string" },
  {
    label: "Author",
    name: "author",
    widget: "string",
    default: "Doug Harrison",
  },
  {
    label: "Announcement Date",
    name: "date",
    widget: "datetime",
  },
  { label: "Body", name: "body", widget: "markdown" },
];
