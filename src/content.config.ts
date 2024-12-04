// TODO: 新仕様にする
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
    "blog": defineCollection({
        loader: glob({ pattern: "**\/[^_]*.{md,mdx}", base: "./src/content/blog" }),
        schema: z.object({
            publish: z.boolean(),
            publishDate: z.date(),
            title: z.string(),
            description: z.string(),
            // tags: z.array(z.string()),
        })
    }),
    // TODO: anyをどうにかする
    "tweet-cache": defineCollection({
        loader: glob({ pattern: "**/*.json", base: "./src/content/tweet-cache" }),
        schema: z.any(),
    }),
    "ogp-cache": defineCollection({
        loader: glob({ pattern: "**/*.json", base: "./src/content/ogp-cache" }),
        schema: z.any(),
    }),
};