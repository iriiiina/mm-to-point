self.addEventListener("install", function(e) {
 e.waitUntil(
   caches.open("mm-to-pt").then(function(cache) {
     return cache.addAll([
       "/",
       "/index.html",
       "/css/default.css",
       "/css/768px.css",
       "/js/functions.js"
     ]);
   })
 );
});

self.addEventListener("fetch", function(event) {
    console.log(event.request.url);
    });