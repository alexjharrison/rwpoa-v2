import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";
import { postFields } from "./src/content/schemas/posts";
import { documentFields } from "./src/content/schemas/documents";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
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
            create: true,
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
        ],
      },
    }),
  ],
});
