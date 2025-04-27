'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1ce4ef8863fb3939aafae8d0592d25ce",
"version.json": "aa828cff826802b4c091e59b8809d622",
"index.html": "d5949b96bc2d7a18b49e49746709ae26",
"/": "d5949b96bc2d7a18b49e49746709ae26",
"main.dart.js": "1f1378b80e45d79e2d43ea8c4dd6c266",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "485702f242616683614cf422693e84f9",
".git/config": "33a9604a60fd505cdca5d1d7380a7a1b",
".git/objects/0d/8e16079389f0167235ca52569805d460790f81": "7af19bea12e6cd0a4c7721c0577cec6a",
".git/objects/0d/9b491b071e734d6f1b6e8f2806c7b055645959": "9ff992df45cf072fcf4e00d974b9363c",
".git/objects/92/0f500af625171276ca32f886808b125b71cb3c": "061e1daa13908d7a6de7405b9a6362ae",
".git/objects/50/17814ed77afe9406ec83b27250e148ed8f2289": "d7dd54ee7fc65131b52e452faf015e3e",
".git/objects/57/1f50444c5cafc6a59dc883c4ae8458bf36c523": "33a241b5448db2667436ce4b77bc1df7",
".git/objects/57/77533d20e806ddd1f45a8a375231d0c282fc2d": "c72fae44fad477f6862689ffab6bc00d",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9b/162ae3fe5959c07585a1d8e288383d9f579308": "2cd185688ea5ae01426393169dabfab1",
".git/objects/9b/137fd478ef8d8c89722233838f488bc1646507": "82901a6ff27976a73ecbfadfb0e46536",
".git/objects/32/d9d7854b0a1962e0935cd82e46965378451c7c": "eb5de0b6a53a0d81a84ce404ed89e2c0",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/58/7556dea40a5ec023195dfd9a73e3f4fff886f4": "583655c8d7285ea6c99dc0ea826e09b1",
".git/objects/93/9fc344ed71fbba2d4b7e2353356df647194988": "5da56b10b97423c769a8e9e0fc1cdcac",
".git/objects/94/905f4cfd01df831f37880faad0b9df95dcb294": "8ae174f915d18446220d925b63f1812f",
".git/objects/0e/24213c8c0b81e8dd39e66e497589c89a1033d7": "a57c9ec9e57a263a9b5a8b3598ad19f5",
".git/objects/60/1860a37a23c1e52cb52878a53988ad1a22afa3": "69bb9612458027f2ec5479672779b171",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/b5/7f17ab8f152209988068741c5970671549b82f": "80a2d0c4ad07705c6f7dfca3cfca8332",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/8f2411498d117a1a11c5f7ab203ad998a8607e": "f765f21359088f3ce350033b1fe3e041",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/3108849c74a3736b31ad8c89c43a3433665799": "31305317e2250a9fa4391bf0ddc25287",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a5/78d33f229795a26795b3921ea91826c50acc72": "7055e1183199c7796eb6683bb79b71d2",
".git/objects/a5/7362490861b6c89a3c532370254e02e55c6b94": "c4d49325b9dc6075c63b5e46dc0e79a3",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/2a6f7ee1a740a41681689a398b869cb0749aab": "51e8abf9e97fb445a06c1a4d1a3305c3",
".git/objects/e5/2a6248f78007ce6d9b95fb33d0317fc7d3aa33": "192432efb0338d4a8d9bcc650104d25f",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/8017ea92c0d2aad31025a25f281513f8c87e48": "f761166448d750735dee0e7f13dd4942",
".git/objects/eb/d50e298c10ebf71e50597725200350d579a6a9": "dd4c3aa5c71c17b0cf393a8492c2a50d",
".git/objects/fc/485031f72e921c413fadc607a57d30352f867f": "690c20684c60a075916a9d84a523a832",
".git/objects/f2/a09345c03fe9dde6dee5ce906bf39c6bbe5606": "7ef51af31b427f7544cf23a4c57985e3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ec/189fb83ed12095287fe2058072c3a56674d96a": "1a0f3398487672a24ed8a4c897bb9eb9",
".git/objects/20/8b418f26235a82b4ed510a071e84ce3a3527a0": "0ced7c66eb70ba666329a39f6fefa279",
".git/objects/7c/346519fca68ec7c35c9dc86407165567382d32": "0f13e63565ad5492661cd2d6278ee2f5",
".git/objects/8f/36dcc0ffe8cb8e55f227d24eb7731de281021a": "c96ca53ea32eec79ce9e6b44b467613e",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c7c19c120a8a2014e7c03e25cb3e420c29df4a": "131d552227dfae75d16e2f8c76a3d7ca",
".git/objects/26/c66ef30c90f7f86ed6a377fb98c2b13f7ee6f8": "ca28310e6cbe7404ecd1c722e7e4940d",
".git/objects/75/76e3d6675694d8b0ffeaf3cd3af7659d037a8d": "69c4b7f188b646ab4ed787bc6f97e8de",
".git/objects/75/46e736bb8774e5fdec1caeffb8ee2007f344cd": "70688a4d15036635a9004ae2ac5cee08",
".git/objects/81/f2170ad224cb4877e69ba2f3effa9531f5022e": "6188019ce76a158151c8836080237a84",
".git/objects/72/2aba0ea35bd12042e1d864f3719509aabc42c2": "4ed87617d9555e7be8ce9c559124b792",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/9a/438b2b3b588c90aa0351d3db5308c193b0d9cf": "07d453f3d6d257756e2575c8fa6e9379",
".git/objects/31/a523580d759b218e53203d3c335d680d384dc5": "f5ac2b1a4085426b28a5fab9ea875ddf",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/53/467f55d01e150027ae9acc53c1a4e74b92f1c1": "cc8421d33165db09da6f5ff4cfa06da1",
".git/objects/5e/3f0ee91feb260c69007e6df748417281be9045": "01f96f6c9282eeb7ac577f50c2cd26ac",
".git/objects/08/52372739a48766af7628a0ede3ea636f849c1e": "c7622497cf071c7f1a728f095b7af765",
".git/objects/55/3373b459f9d416f5df75b07292727ce9400648": "f0d5a25aa924fb69c8f096fcb876bb08",
".git/objects/97/76f321c488647ffad16cbcd9412ee141c642b3": "9cafbb2d34a87046eb5aa4efe33f6530",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b6/eed02a9ce359eccb25fc5841b5fa1937eecf25": "fca8f8a3f165d82c0c33dd0d1951d3bb",
".git/objects/a9/c230960640cee3c9d2c5b493a13febc310141d": "428f20d4e0724daad1d56628b0dd29b5",
".git/objects/d2/93d595ab22eda5bfb1271b95cdd228ecd5a51d": "88996d64389f37a8ea8c63935b8bbdf9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/ea47d9e86e06d3e5a2250c1b6002236b80ee7b": "f5e3a6be7a04b3dab62e122424ef5f8b",
".git/objects/46/93dc66631d35afbf2efa1c5c820e4006e14409": "df549df184ad35f58b559809794d7ae9",
".git/objects/41/075c725cf0e476c5c4f365c051c66aa6edca2b": "8d8cc7a10b35c7e9dc6d24c680b0390d",
".git/objects/4a/70bb0b0d2dafe67244d7addcabe8cefcc1efe8": "78892aca0200f80ddfd50bc3dffec6f2",
".git/objects/4a/b04daae1b93ed4c6b2272df50153a71995a63d": "9f823b417737abc6c824ba0393b7d4c0",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/1d/672c119621ac3020c6800101e5f30789ffde6b": "309e7c50b193353137074c90e95e352c",
".git/objects/1d/ba423fc3d000607a901430039c4162750babd8": "ccd01717e45ed6ec70331767265619f1",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/78/61461876d6708a6bbe662e496bfe0847af3b68": "30bbdbf211b0cca0f36aadc76a5d2868",
".git/objects/7f/8a04a88b7f077f931ca241b757ae9624adb28f": "d456d2ac3ff034fc52081ce2dd1471fb",
".git/objects/8e/30f7bf319d1fdd4236776e51ba2adb2bcc2d59": "e99ca83c62b02dea526fa3a309a1ba95",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "98be808cdb205226169bea2d4436abe1",
".git/logs/refs/heads/main": "eac1c1f88aa56f37d74d19583f4f3855",
".git/logs/refs/remotes/origin/main": "6adb8bda6f9227dbcd1e1fc5d7d5064d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "557cc0b278991335a4c1b20f55d195bb",
".git/refs/remotes/origin/main": "557cc0b278991335a4c1b20f55d195bb",
".git/index": "a81c7fbf20c45440f4ee1b8f2cc32850",
".git/COMMIT_EDITMSG": "a8e343905da342f31281e0a07c166060",
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
