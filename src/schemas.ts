import { z } from "astro:content";

export const postSchema = z.object({
  title: z.string(),
  date: z.date().transform(str => new Date(str)),
  thumbnail: z.string(),
  rating: z.number(),
});

export const documentSchema = z.object({
  title: z.string(),
  url: z.string().url(),
});
