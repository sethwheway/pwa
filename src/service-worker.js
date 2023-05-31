import {build, files} from "$service-worker";

const dummy = DUMMY;

const CACHE = "cache";
const ASSETS = [
    ...build,
    ...files,
    "https://raw.githubusercontent.com/sethwheway/pwa/data/events.json"
];


self.addEventListener("install", (event) => {
    async function addFilesToCache() {
        const cache = await caches.open(CACHE);
        await cache.addAll(ASSETS);
    }

    event.waitUntil(addFilesToCache());
});

self.addEventListener("activate", (event) => {
    async function delete_old() {
        for (const key of await caches.keys()) {
            if (key !== CACHE) await caches.delete(key);
        }
    }

    event.waitUntil(delete_old());
});

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return;

    async function respond() {
        const cache = await caches.open(CACHE);

        try {
            const response = await fetch(event.request);

            if (response.status === 200) {
                cache.put(event.request, response.clone());
            }

            return response;
        } catch {
            return cache.match(event.request);
        }
    }

    event.respondWith(respond());
})