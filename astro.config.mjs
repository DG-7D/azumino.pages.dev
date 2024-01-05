import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";
import AutoImport from 'astro-auto-import';


// https://astro.build/config
export default defineConfig({
  site: "https://azumino.pages.dev/",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      // theme: "css-variables",
      wrap: true,
    },
    rehypePlugins: [[rehypeExternalLinks, {
      target: "_blank",
      rel: [],
    }]]
  },
  integrations: [
    AutoImport({
      imports: [
        "@/components/Img.astro",
        "@/components/OGPCard.astro",
        "@/components/TweetInit.astro",
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