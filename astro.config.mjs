import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://azumino.pages.dev/",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      // theme: "css-variables",
      wrap: true
    },
    rehypePlugins: [[rehypeExternalLinks, {
      target: "_blank",
      rel: []
    }]]
  },
  integrations: [mdx(), sitemap(), robotsTxt()]
});