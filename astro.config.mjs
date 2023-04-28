import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";
import { postFields } from "./src/content/_schemas/posts";
import { documentFields } from "./src/content/_schemas/documents";
import { announcementFields } from "./src/content/_schemas/announcements";
import { introFields } from "./src/content/_schemas/intros";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "master",
        },
        media_folder: "public/images/uploads",
        public_folder: "/images/uploads",
        collections: [
          {
            name: "post",
            label: "Post",
            folder: "src/content/posts",
            create: false,
            slug: "{{year}}{{month}}{{day}}{{hour}}{{minute}}{{second}}-{{slug}}",
            fields: postFields,
          },
          {
            name: "documents",
            label: "Documents",
            folder: "src/content/documents",
            create: true,
            slug: "{{year}}{{month}}{{day}}{{hour}}{{minute}}{{second}}-{{slug}}",
            fields: documentFields,
          },
          {
            name: "intros",
            label: "Site Introduction",
            folder: "src/content/intros",
            create: false,
            slug: "{{slug}}",
            fields: introFields,
          },
          {
            name: "announcements",
            label: "Announcements",
            folder: "src/content/announcements",
            create: true,
            slug: "{{year}}{{month}}{{day}}{{hour}}{{minute}}{{second}}-{{slug}}",
            fields: announcementFields,
          },
        ],
      },
    }),
  ],
});
