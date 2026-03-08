const CACHE_NAME = 'moji-kanji-v1.02';
const urlsToCache = [
  'index.html',
  'index2.html',
  'list01.txt', 'list02.txt', 'list03.txt', 'list04.txt', 'list05.txt',
  'list06.txt', 'list07.txt', 'list08.txt', 'list09.txt', 'list10.txt',
  'kanji01.txt', 'kanji02.txt', 'kanji03.txt', 'kanji04.txt', 'kanji05.txt', 'kanji06.txt',
  'https://code.jquery.com/jquery-3.7.1.min.js'
];

// インストール時にファイルを保存
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// オフライン時は保存したファイルを返す
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});