// خدمة بسيطة للتثبيت
self.addEventListener('install', (event) => {
  console.log('✅ نظام السوفعي مثبت');
});

self.addEventListener('fetch', (event) => {
  // تمرير جميع الطلبات كما هي
  event.respondWith(fetch(event.request));
});