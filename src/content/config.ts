import { defineCollection } from "astro:content";
import { postSchema } from "./schemas/posts";
import { documentSchema } from "./schemas/documents";

export const collections = {
  posts: defineCollection({ schema: postSchema }),
  documents: defineCollection({ schema: documentSchema }),
};
