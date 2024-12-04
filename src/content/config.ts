// TODO: 新仕様にする
import { defineCollection, z } from "astro:content";

export const collections = {
    "blog": defineCollection({
        type: "content",
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
        type: "data",
        schema: z.any(),
    }),
    "ogp-cache": defineCollection({
        type: "data",
        schema: z.any(),
    }),
};