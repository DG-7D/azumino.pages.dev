import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

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
            [rehypeExternalLinks, { target: "_blank", rel: [] }]
        ]
    }
});
