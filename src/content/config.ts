import { defineCollection } from "astro:content";
import { postSchema } from "./_schemas/posts";
import { documentSchema } from "./_schemas/documents";

export const collections = {
  posts: defineCollection({ schema: postSchema }),
  documents: defineCollection({ schema: documentSchema }),
};
