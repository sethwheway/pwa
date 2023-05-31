import adapter from "@sveltejs/adapter-static";
import {vitePreprocess} from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),

        serviceWorker: {
            register: true,
        },

        paths: {
            base: process.argv.includes("dev") ? "" : "/pwa",
        }
    }
};
export default config;