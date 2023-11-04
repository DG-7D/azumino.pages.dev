import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://azumino.pages.dev/",
    markdown: {
        shikiConfig: {
            theme: "github-dark",
            // theme: "css-variables",
            wrap: true,
        }
    }
});
