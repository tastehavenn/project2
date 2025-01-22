import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    vite: {
        define: {
            'process.env.SVELTE_VERSION': '"5"'
        }
    },
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build",
            fallback: "index.html",
            precompress: false,
            strict: true
        }),
        paths: {
            base: "/project2",
        }
    }
};

export default config;