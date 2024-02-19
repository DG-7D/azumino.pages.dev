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
};