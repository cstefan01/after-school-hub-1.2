const cacheIdentityName = "main-cache";
const static_files = [
    'index.html',
    '/images/32x32.png',
    '/images/512x512.png',
    'manifest.webmanifest'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheIdentityName)
            .then(cache => {
                return cache.addAll(static_files);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});