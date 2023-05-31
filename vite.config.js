import {sveltekit} from '@sveltejs/kit/vite';
import {SvelteKitPWA} from '@vite-pwa/sveltekit'
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [
        sveltekit(),
        SvelteKitPWA({
            devOptions: {
                enabled: true,
            },
            strategies: "injectManifest",
            srcDir: "src",
            filename: "service-worker.js",
            injectRegister: false,
            injectManifest: {injectionPoint: "DUMMY"},

            manifest: {
                name: "MAD PWA",
                short_name: "PWA",
                description: "University open day app",
                theme_color: "#C80F23",
                // start_url: "/",
                // scope: "/",
                display: "standalone",
                icons: [
                    {
                        src: "icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            },
        })
    ]
});