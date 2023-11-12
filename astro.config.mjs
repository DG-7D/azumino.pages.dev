import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://azumino.pages.dev/",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      // theme: "css-variables",
      wrap: true
    }
  },
  integrations: [mdx()]
});