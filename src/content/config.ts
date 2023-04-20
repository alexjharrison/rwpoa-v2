import { defineCollection } from "astro:content";
import { postSchema, documentSchema } from "../schemas";

const postCollection = defineCollection({ schema: postSchema });
const documentCollection = defineCollection({ schema: documentSchema });

export const collections = {
  posts: postCollection,
  documents: documentCollection,
};
