import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        publish: z.boolean(),
        publishDate: z.date(),
        title: z.string(),
        description: z.string(),
        // tags: z.array(z.string()),
    })
})

export const collections = {
    "blog": blogCollection,
};