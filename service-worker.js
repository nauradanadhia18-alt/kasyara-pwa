const CACHE_NAME = "kasyara-v1";

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
    );
});

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return;

    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});