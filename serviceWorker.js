// Can access the request and handle instanceof
// So PWAs run only on https

// Script - runs on background in separate thread

const staticPWATut = "pwa-tut-site-v1"

const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/app.js",
    "/Pictures/pic1.PNG",
    "/Pictures/pic2.PNG",
    "/Pictures/icon.PNG"
];


self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticPWATut), then(cache => {
            cache.addAll(assets)
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res=>{
            return res || fetch(fetchEvent.request)
        })
    );
});


