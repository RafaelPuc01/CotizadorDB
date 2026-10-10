const CACHE_NAME = 'dulce-bocado-v1';

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activación
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Estrategia de red predeterminada (no bloquea conexiones a Supabase)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
