import { z } from "astro/zod";
import type { CmsField } from "netlify-cms-core";

export const introSchema = z.object({
  title: z.string(),
});

export const introFields: CmsField[] = [
  { label: "Title", name: "title", widget: "string" },
  { label: "Body", name: "body", widget: "markdown" },
];
