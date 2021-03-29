let CACHE_VERSION = 1.1;
let CURRENT_CACHE = {
  static: "static-cache-v" + CACHE_VERSION,
};
// install SW
self.addEventListener("install", (event) => {
  // console.log("installing SW", event);
  event.waitUntil(
    caches.open(CURRENT_CACHE["static"]).then((cache) => {
      cache.addAll(["/", "/index.html", "/offline.html", "assets/image/netError.png", "assets/image/corona-logo.ico", "assets/css/Style.css", "manifest.json", "assets/Js/main.js", "assets/Js/app.js", "https://kit.fontawesome.com/5d9e8b8f08.js", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css", "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"]);
    })
  );
});

// Active SW
self.addEventListener("activate", (event) => {
  // console.log("activating SW", event);
  let expectedCacheNames = Object.values(CURRENT_CACHE);

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.forEach((cacheName) => {
          if (!expectedCacheNames.includes(cacheName)) {
            // console.log("Deleting out of date cache:", cacheName);

            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// fetch

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(CURRENT_CACHE["static"]).then((cache) => {
      return cache.match(event.request).then((response) => {
        if (response) {
          // console.log("Found response in cache:", response);

          return response;
        }

        // console.log("Fetching request from the network");

        return fetch(event.request)
          .then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());

            return networkResponse;
          })
          .catch((err) => {
            return caches.open(CURRENT_CACHE["static"]).then((cache) => {
              return cache.match("/offline.html");
            });
          });
      });
    })
  );
});
