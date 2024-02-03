import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";
import AutoImport from 'astro-auto-import';
import rehypeWrapAll from 'rehype-wrap-all';

// https://astro.build/config
export default defineConfig({
  site: "https://azumino.pages.dev/",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      // theme: "css-variables",
      wrap: true,
    },
    rehypePlugins: [
      [rehypeWrapAll, { selector: "table", wrap: "div" }],
    ],
  },
  integrations: [
    AutoImport({
      imports: [
        "@/components/OGPCard.astro",
        "@/components/Tweet.astro",
      ]
    }),
    mdx(),
    sitemap(),
    robotsTxt(),
  ],
  prefetch: {
    prefetchAll: true,
  },
});