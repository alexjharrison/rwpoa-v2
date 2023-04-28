import { defineCollection } from "astro:content";
import { postSchema } from "./_schemas/posts";
import { documentSchema } from "./_schemas/documents";
import { introSchema } from "./_schemas/intros";
import { announcementSchema } from "./_schemas/announcements";

export const collections = {
  posts: defineCollection({ schema: postSchema }),
  documents: defineCollection({ schema: documentSchema }),
  intros: defineCollection({ schema: introSchema }),
  announcements: defineCollection({ schema: announcementSchema }),
};
