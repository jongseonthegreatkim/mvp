'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d0cf40dc196b45851a3be0c115e47465",
"version.json": "aa828cff826802b4c091e59b8809d622",
"index.html": "986ad5c93a4d29ee8c66cb95f4d114a6",
"/": "986ad5c93a4d29ee8c66cb95f4d114a6",
"main.dart.js": "969ce755c7ceb66ac8fb4c702a7f65c6",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "485702f242616683614cf422693e84f9",
"assets/AssetManifest.json": "b71fa44ce4b466c830adaa80e470bddc",
"assets/NOTICES": "9f6ab3ccb38716545120bd1431d1e2f5",
"assets/FontManifest.json": "6b6a53c1334ad8ab129e315e32e87739",
"assets/AssetManifest.bin.json": "4dc8f12371dff1562981948aee7ce08e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a284d12a62fc748855710623dec3e4ff",
"assets/fonts/MaterialIcons-Regular.otf": "dd4f75b3904c7147dfb6b2e3b90814ee",
"assets/assets/images/sub_character.png": "6a0c8d946c544d42d569e57fbb4a9766",
"assets/assets/images/representative_character.png": "d81d9fbda3f66a88b935123c9e768142",
"assets/assets/images/routine_explanation_water.png": "0366eee980133916d71c57a827924612",
"assets/assets/fonts/Pretendard/Pretendard-Medium.ttf": "6d045f83b15a4ce0108df8e96e53851e",
"assets/assets/fonts/Pretendard/Pretendard-Black.ttf": "15c7d1db3ba3f775e8c48e40f2744c2b",
"assets/assets/fonts/Pretendard/Pretendard-Regular.ttf": "f9574625d71019a3d7d8417e9ac35e7e",
"assets/assets/fonts/Pretendard/Pretendard-Thin.ttf": "1d54880fd193ab9ef9364c48ff968d63",
"assets/assets/fonts/Pretendard/Pretendard-ExtraLight.ttf": "27cb5c5e9993269e199efb199e24b244",
"assets/assets/fonts/Pretendard/Pretendard-SemiBold.ttf": "52e17b18a3a47c23bcdd626a3d8f163c",
"assets/assets/fonts/Pretendard/Pretendard-ExtraBold.ttf": "2101fb53456d23d685a5172792599214",
"assets/assets/fonts/Pretendard/Pretendard-Bold.ttf": "0e31c423b3971eecd79d2866b8ad65ac",
"assets/assets/fonts/Pretendard/Pretendard-Light.ttf": "1a9b52d0674840d80e8a60dd1270114f",
"assets/assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoH.ttf": "ee2dab186809a3df292bd2297739c6c3",
"assets/assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoM.ttf": "3a44ffb1539dbcfce07e73ce69ea55de",
"assets/assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoL.ttf": "b07ac29c8c063198e384a69bfe91c975",
"assets/assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoSB.ttf": "8683b84b58121f0dc4070ed892d02614",
"assets/assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoEB.ttf": "eaafc4677b0f252b3404c5268e0eb26d",
"assets/assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoUL.ttf": "fa20f8e0f9a1cce5284e24efbc1e6d14",
"assets/assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoB.ttf": "018066fbccbce3cc4bbba5d3ac4f1033",
"assets/assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoT.ttf": "c86faaf0dfc0eecd7d3fb29a684f9706",
"assets/assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoR.ttf": "85ba110e6b8d4c2e961f21ef648d27ea",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
