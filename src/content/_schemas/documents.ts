import { z } from "astro/zod";
import type { CmsField } from "netlify-cms-core";

export const documentSchema = z.object({
  title: z.string(),
  url: z.string().url(),
});

export const documentFields: CmsField[] = [
  { label: "Title", name: "title", widget: "string" },
  { label: "URL", name: "url", widget: "string" },
];
