// Plates service worker: makes the app work fully offline after the first visit.
const CACHE = 'plates-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Serve from cache first (instant + offline), refresh the cache in the background when online.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const cached = (await cache.match(e.request, { ignoreSearch: true })) ||
      (e.request.mode === 'navigate' ? await cache.match('./index.html') : undefined);
    const network = fetch(e.request)
      .then(res => { if (res && res.ok) cache.put(e.request, res.clone()); return res; })
      .catch(() => cached);
    return cached || network;
  }));
});
