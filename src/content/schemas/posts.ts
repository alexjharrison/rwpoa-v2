import { z } from "astro/zod";
import type { CmsField } from "netlify-cms-core";

export const postSchema = z.object({
  title: z.string(),
  date: z.date().transform(str => new Date(str)),
  thumbnail: z.string(),
  rating: z.number(),
});

export const postFields: CmsField[] = [
  { label: "Title", name: "title", widget: "string" },
  { label: "Publish Date", name: "date", widget: "datetime" },
  { label: "Featured Image", name: "thumbnail", widget: "image" },
  {
    label: "Rating (scale of 1-5)",
    name: "rating",
    widget: "number",
  },
  { label: "Body", name: "body", widget: "markdown" },
];
