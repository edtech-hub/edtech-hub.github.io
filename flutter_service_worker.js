'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e8639e06bbcbb48055082db169c9df10",
"favicon.png": "aa4a33832373ac69a7d3d03cfbce7945",
"icons/Icon-192.png": "50bf468b57cd00791cdd84655cfab7cb",
"icons/Icon-maskable-192.png": "cb19ed0082198589f02b0bcb2778ce51",
"icons/Icon-512.png": "78ff3c679e9362ce2a239825a8cd0d15",
"icons/Icon-maskable-512.png": "6adde40a953a898b3e160f98bd136a6c",
"version.json": "3a1ce95514fddd9a4aaae544eaedf897",
"CNAME": "baeea89da6d277c8813231f055adff75",
"main.dart.js": "af2c978b6eca5968825532fdfcaca978",
"assets/AssetManifest.json": "dbd59f47e3b505e78689b88dd56effcb",
"assets/NOTICES": "349c44c32876ea05b0326b871dbaeaf9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin": "ca22e237a0a85cf230d62022b3bb2cee",
"assets/AssetManifest.bin.json": "0fefd6208987f0db9bccda4ee6a90a90",
"assets/fonts/MaterialIcons-Regular.otf": "80968d6c3c8e477ed0b08b07c5419898",
"assets/assets/ed_astra_dkt.png": "0ac44f68e8e71fba058ea76e425603c7",
"assets/assets/default_banner.png": "97d66bb2a601e750fcb72df4e1ad74d9",
"assets/assets/pussy_cat.png": "2f92bdfbb0941b2028c588c5d5de7794",
"assets/assets/pussy_cat_lt.png": "de24aca68f943425b45f3dfc7aa53432",
"assets/assets/doggo.jpeg": "e6be094ad078e107c56fef0822075b0b",
"assets/assets/404.png": "046670ceac1b546e9e6e3d2a76221bce",
"assets/assets/ed_astra_lt.png": "302e7523b3b5a339b2000c8a3c6e5614",
"assets/assets/lady_outlined.png": "fa4e3c104e8612bcc9a90df2d5054ca3",
"assets/assets/person_outlined.png": "072166b07decc640cd88a428e3412513",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "a0bfc337e2160b6c809cac128dfeba57",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "fdc7a755fd52e7d30afc63d8eb0320c3",
".git/config": "50de052401ddd1f7008e50e6c8acbb56",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/remotes/origin/main": "3ffccb4e02f1df6778a694bb93b17c71",
".git/refs/heads/main": "3ffccb4e02f1df6778a694bb93b17c71",
".git/logs/HEAD": "4e4111c7fd33d89de9434215c7b3be86",
".git/logs/refs/remotes/origin/main": "bd302d194326f0116d16815e94c913fc",
".git/logs/refs/heads/main": "4e4111c7fd33d89de9434215c7b3be86",
".git/objects/97/446b680764dc15e081ffee497cb64edb140eb3": "1676ccc78f46ab5e538e3dc64839c254",
".git/objects/f9/068be1045188312a54ab09f1862e98e85a13bb": "d886fa57d0ca2c59b2cd5dec31974eb4",
".git/objects/2a/ccc0d1d0118e1e830aa47ef1383a5cbd2d39a5": "9400d615d17b3c2757411d85ab15551a",
".git/objects/19/e4d64ae1ac7e77e14b175f488df2d56a8115d9": "8f3971a8058df265022027d67f161dd3",
".git/objects/8a/7eebb45fd52e9b15c2098e5e61dae0f141074b": "c5db034aa9355cb33f8a3c0ad09aaa8b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ba/f599ea2b0bea7bf7163c6f1c4c048e57106820": "eb03e76221260cb0ddfecb1e3a47e3ae",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/69/716ab3bdf03bb65cd192fafd57a664293e131a": "834552fa4cf449d6da0f0b0974ecc913",
".git/objects/d4/3ef2596fbdb11a450ed1c8cb19b504784c56f6": "9f8c7f8f22d0e446546d86732a383607",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2c/cc1eb7f0b9c5ce76ad66f5b2e369952ed29fc7": "0144ae0548fa53907d94c2d908baa732",
".git/objects/31/db60c9d1128e9645603e7e7bc073402603da18": "d2876c183378bd952443b08ebb551bc2",
".git/objects/1e/0e86cc66b08f47abcbf3e2ac1c30088a2d7d26": "c0076e373d3f2d4f499bcab659646a2d",
".git/objects/1e/9340a6519555d22cb6c3efa1e257f33dadbcd4": "f3021c3e0791d1f0219d645a39a7c399",
".git/objects/86/a6d4b1bb60ca754dbe7bfd087a1fbdddaca5aa": "54dea7bcd20ca205ea870f86e91b52f7",
".git/objects/86/0005f3578f274286b9ac41298d161b8917ff40": "54d4401b5d7be05cc87ddc9a93fd9e57",
".git/objects/60/4238953f33da213d87dde8fddc49fa6d4e7f41": "5d9a8f148066e51d1b0009d9100199d7",
".git/objects/73/1c1e7c6cfaa3c7f177e8f6f6b96909082835aa": "a2514ce090c64ee83e39a751d91baa22",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/cc/42ac95c5b23d831f373f9697d67bbf6d82695f": "e9a0b2eb708103dadb352e663f9e8e47",
".git/objects/cc/8007e873d4d65d69b55875652498f472396c4b": "396692d72473d4135f1c48510a2f1e0e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/2e/34a8a3640d3b9314345f50cbf361b2bfc66cf7": "071e13543139eb40c697f81918c0ea1f",
".git/objects/2e/906ae58c0e4c7c06b14818a93426cf24e974bd": "17eef37640e99400931cc4345e42aa4a",
".git/objects/f7/14cacf605b77e0096af6ef167c39124ee981c1": "63e07b6881be5ff83633fa5688e66493",
".git/objects/6a/9f984f68c1acf8949b137b2025d013aa0074c7": "c8f58fd96775544309b2d69e8e467277",
".git/objects/14/f8a502fdd8fe314f617ca6bf0fb394aa5b7b2d": "6e524b8091592ded4df3b406f0bd76d6",
".git/objects/e6/513d0c4d5a4475c6d07ecb8738a5f4bf62f054": "71f89aee95a2846149e9ccb635714a96",
".git/objects/e6/1c61e24c303aac54e802c7f88b24d4ecd4db0f": "c1b77f877ffc16b7af0e0cb03ad7ab0a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/72/7c721d355e485f11b1318b161b895127409e77": "ab6adb937759e16696dfba8018bef04f",
".git/objects/28/3f89832e7c5c64216f7d188a7c7df855ead1ee": "63d0a963a57e1c289130c0213ad6174d",
".git/objects/28/f59099ad5a727887807c01c1b78db33b1c212b": "18c60ba63e0bdd0271dc1d7e9b6c52f0",
".git/objects/1d/1b5750af04484dbda9ca0ace2e8c2d2de1c0e1": "47fc328db91f4ce7ff91f42aa2cf9641",
".git/objects/1d/76e2820a739c03ec99d952ea2b83419be3ada2": "c3a330cb69d90a5b8bb56337b6510adc",
".git/objects/b7/1137baa70309a53a06dc739f6bfa348fbac528": "1c510796a0fe95a2b840c8652d6de975",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/67/67afc1f5053ab81a208cd20684d06e573be92d": "6ded2c6052b715fcf6d144916edd7a47",
".git/objects/ff/c1f7ca5dd0f685fe96ce7c9cd704d58f1c19a4": "2dffb504f32d678e7ba834d5422fc03f",
".git/objects/6f/d3836b8bf66abd326f49ccf5b8a4ddf8278322": "54938f9852ee3190dcd27897b85b42b5",
".git/objects/3f/a36d4782f8c21be701f3b6055174db4beb6e45": "53b586b06deed9bf5d38e6c794bacee1",
".git/objects/99/8cd216f1f57897f562225f233acf1f9693a209": "343abb100289207e636c831ddedf9069",
".git/objects/21/61afa7b3682329c424848ccc2ffe4f9356ccaf": "210ec912daa7f54dbeade1b8c35f2658",
".git/objects/b3/0bd8753b5619fce3076784bf9ead665d31103b": "da63d865246510953422327359b8dde4",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/e7/6b47b7ce229c8e4f1c924190a92fda8240bdb5": "dc887de5d7612f5b6cc4f6cbf7def141",
".git/objects/68/72783cf6a60d09e0f275a992f887f0981f041c": "4836a5a73cc31376a045594cf03e4d39",
".git/objects/c9/29c4ae625e763e2be679f4c538bca7cc9b489b": "57bc43ca578f2d47aaa77c6e63eac5b8",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/45/bf2728afd65f11b457ea3bb7ad62c70b27803e": "f30b4241c64927e3e797a16181d648f3",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/01/f72cdb69c7bac6aa41ebe38b826f0bd74edb79": "6403e199512f52591269a63a94c83b9f",
".git/objects/01/88088d6ab931e4017388d2f4d1493716f4f958": "38e1c96ad0afd5cf8606fdc5a5eabede",
".git/objects/22/1959d28491e2e7aa62577c3c1379f5caca4557": "2d4000f20bb8ae597ca4ecf259340655",
".git/objects/22/e81775dfbf6914c41f76ddfded25c0efd05cef": "a13947c139a377882740818e43e6b721",
".git/objects/22/96b193e2cc2daa3695c626cd51a004527659a3": "04b0b62827c1cb3320e63e3ff45e32f5",
".git/objects/27/0fa3897a7f82a99903f32b8070405d3c28ddde": "87deda21a96c3c0bcc8b66060855e80a",
".git/objects/a4/96d1b2bac520652d791e3eb562c7f69ec21199": "4b7be3edb0519fa9b2242774bdb92226",
".git/objects/79/0707310f97c5e38f5b1dab4a4ea09c802f4545": "8f476c3a008b18284edf98b85715baa2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/1bf2a1aeb5bb3d877026efb930a6fea08324d1": "fc5fef49acf48c5c15396c41274022e1",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/ee/8fb8eaaf596590d0e67cc52855b61e97aec8ee": "0672fbb1668a60503d0cc0f9dae80523",
".git/objects/88/3094e49f8f5f8a24e7b0895fb3cec4e457bd74": "70bd16ef66ecdfd89604c8ea75a58f53",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/86b568b8953e691aefac21b70d09e5eda4d568": "3a24213359e8506633edd304ea963ae0",
".git/objects/d5/c6c4a85b6c4c71e152693ec10cb1461c09af43": "18390b90071dcb93dd5dcdd6bda88553",
".git/objects/41/f325027941029f0fd10b6fc27fae7c378a2c31": "2d426b029b12902c876cdbddbafcde4f",
".git/objects/6d/789ed496330fd78d85bfe46615ce061034f1d8": "4d23c6d97d60c70a3633c6df8e0b5b43",
".git/objects/11/00a3f7952f8416d28201cbfbae5114c2221635": "46059dcadfa838d23ccd9c8b1dccdd4f",
".git/objects/42/0e2b00ce08358346cdecd7c4e23eaffbe6b207": "99495c0aaeace8b1e9c6a7d7081e5c91",
".git/objects/5a/22745e5698eed425242beb00949822a4607a58": "d3f39e9bce4fd557123f29a9dbc4d3c8",
".git/objects/9d/74f9841c8d0dc1af471aaffa4da03bd7ef4921": "94be76833d2787e3369d3e551e12ba32",
".git/objects/7b/c16bb861abca9563f12507529120cb68bed95e": "7590a3bc9995beb16003e8446a2d42e5",
".git/objects/7b/c95a1a45e54b7b4281f07323131a0c35a3a0ca": "f3cfbb86c89baad7e7beba9d53171657",
".git/objects/24/aadaa8d40e7b7ff585f11d67180e53457dbb4f": "b7f0919f37ea7e4391f64767714e7d0d",
".git/objects/c4/83d01e0daeca68083c96dabc2fd84024aab18c": "9c04ff3a158bdcf1bd9000bcc69fae05",
".git/objects/55/36b48db2e01090292f69353e57e6aec0badf5f": "5daa05b7434f42cd2cec0be55666554f",
".git/objects/d7/e90c111dbff79be229a7dc5adb917781a5afe3": "4db65732c35be7bba51251f13356c879",
".git/objects/d7/82f0019256542335719bf12fad718a21e636f7": "5e4a6228d5c69845efb96ebe5f6c9ccb",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/f1/ab469376ba2028e0099fbe48642557a3a5c7c7": "d9b80614a7bb9bab9d0b4d5fa7d1f71c",
".git/objects/50/be4bc78aeed581706e3577e94a4722f7540a54": "49437891d4e0cbba4b166ce19547382a",
".git/objects/8c/1a151eb29ef1e3cc57721419521a07eca18105": "96f72baa971bc97a0fb3f90049675846",
".git/objects/35/432ebcd4e69518a32471c67dab9ae88e38aab4": "b2172189ef50c00354b0dda917c00dde",
".git/objects/35/f866f914cb8e6d69392b9224ae241c257c8579": "859969727941951086616b38f403a893",
".git/objects/dc/086bfac465223450fa476fcad6c9138d4acbe2": "2b158831d7347d181145013d5a3db0cc",
".git/objects/8b/23505bae4fcb5658b5c2b29280a54b0e902e8b": "3056d7121cc6d394a8b83510d45ac470",
".git/objects/8b/554db7ef3c8519982d898768f104a1fa98b7ee": "1f50c9aa228a9d4a3ca77609a11cf4ce",
".git/objects/8b/c509211b66fa7b95023622f2c75f5114092593": "f3b43ff72fec2d4251da7eaca3b49a1e",
".git/objects/5e/37d56fea44957ce974d2b4796319e3c4088668": "150eee65c2ad6a3e05ef90398590d253",
".git/objects/5e/d8f25eb78a061f40541efabf53d75bdddffc7a": "e46ce37cf7040212a7d009a86abf6f0f",
".git/objects/e0/1a8fc9344ba9a1f891738fa51bdb183ddde913": "4e18e13e8f80e17921210248a435cc05",
".git/objects/da/4e54bbd8e6b7053d569bfc6218838217271ef0": "62d854527550d9eef13f61b8fba6441c",
".git/objects/16/a9aef4da1851c8033ac6b09bd5ea0f44032207": "d6c6371ff6e9770f2408fcfb37aa8157",
".git/objects/3a/0528427d5715ca88bae0d7e3f701671b6b4c96": "d6b0ad36aeb31159a49ac90638c06435",
".git/objects/83/d3216ccdf813b558e66a43a9c87a89167e041c": "420fa2074eed125994c7018cfddbe6ce",
".git/objects/83/59192e8fa0bd6cf4e74ecc235006fb17619d03": "19af39e4f7070248b6489fcc9af9b582",
".git/objects/b6/97f63ceb08acd63629dbcedc436beef034b12e": "d90f4e3994cb949e48a74389d631a6c3",
".git/objects/f4/37b3bbd207b8da4d3641391e6dd3eeca242fc9": "42b4c24c5a78aca8caafdda144e42116",
".git/objects/f4/24f8ad81c93ac2a43375d6384c18c9a215d329": "32878c3a1ec32ac48f4fea93b9c7bdb0",
".git/objects/98/1a1e349ff3e2e881bf5da60203db3a2d7e1304": "5e2800c9a7b617d9e9ce779d1a6aac4a",
".git/objects/98/3f2c8afcc62efcbf6edddeed42b3f3da068415": "8a165abc721310a66ffaf47a135c5cc6",
".git/objects/c8/c263b834b1cd5eceb299f6ca4121f640f77720": "c0cb35a80a55f10f6fdb5575af91d087",
".git/objects/c8/b05db41764843ea69ce4c8baa9b6f17e90a8a8": "c52da3586e2f7cc588e3ffe5ee11045e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/a9/6098b1a3cdc4b828ed7ccd3f92cd46be157d1c": "31d347fae32b57e4b884fb24aca0474a",
".git/objects/05/76c759dc89e8500c7c623c27abab59635fa9c4": "5927e073f925f70dac180ed2f4773d7a",
".git/objects/05/bd1e1f09fd375dffbd2c829bf1bbeff8f9fabc": "2ff9b00d0e0342a0e2a4ba654cfb08a7",
".git/objects/b0/623401ba03550254a3d998ea6488f7235f543e": "cc470fcc754f0d4ecd859b835ef4d05d",
".git/objects/a2/2d36dab9f0b1d8935141a022374a0a5e212719": "323da523f657e4b9cdac961822bb8700",
".git/objects/c1/444fe7af7d9a658bae09a9db9b628f50c7e9b8": "1b651b97dcce317dc0d868ebdc0637bb",
".git/objects/1c/577ea24f6012b596983fdf14b4f6b83f8a0005": "8aa7a60ed9cefdc2164339f22840ce08",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/4837520c22c609f8d75be07c6cb32bee642dd3": "2fae4e29bf279ce91ce6c2cf62bf761d",
".git/objects/3d/aa6978a90fce6fd575cbac2922f6cd639ebcb8": "f865764a3bc2611e31628e6251fb94be",
".git/objects/66/179f9141266b844ac0fc257779a705432379b1": "6e713941762e609cc47b64e1117a232a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/0664710b3402623882a3e0f1b62daca29cb610": "454ca3e254d3c40c6fe90b0b04a590a7",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"manifest.json": "2c0e9ac8311e0af565050017c1828fd2",
"index.html": "e9b217982f7bcdb19d8117058da178fe",
"/": "e9b217982f7bcdb19d8117058da178fe"};
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
