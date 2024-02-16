'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "3a1ce95514fddd9a4aaae544eaedf897",
"main.dart.js": "da12d114aadc4ff9003166d525b4e3fe",
"assets/AssetManifest.json": "856996488fc3d804077d1057e8fed5df",
"assets/NOTICES": "14062aa7f64d5e0ecd266baffb1cb730",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin": "17e27d6582cd8cfbace748deae98078c",
"assets/AssetManifest.bin.json": "f14d8a9132afd29d8860863277518512",
"assets/fonts/MaterialIcons-Regular.otf": "7b49fbc45b0346bf94122e1577b0d0ec",
"assets/assets/images/404.png": "112d5af6363ba91b67e49ae6c334cb57",
"assets/assets/images/Ed-Tech_Hub.png": "1534c36b42b0f64f7eb750bda95fc73b",
"assets/assets/images/lady_outlined.png": "fa4e3c104e8612bcc9a90df2d5054ca3",
"assets/assets/images/person_outlined.png": "072166b07decc640cd88a428e3412513",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "50ff45f73ba19d554f2f535dec031530",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "881ed013e0f51b6f1b9d4742a2f1f6d0",
".git/config": "893102fe4e599912575cce31215f55c9",
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
".git/refs/remotes/origin/main": "7ef6ea698cd9a66dcfcf610da6d4e186",
".git/refs/heads/main": "7ef6ea698cd9a66dcfcf610da6d4e186",
".git/logs/HEAD": "88a90055581c0086cf06e3b557ba296f",
".git/logs/refs/remotes/origin/main": "6dca1c55821a0cf6383a14934e3871fe",
".git/logs/refs/heads/main": "39f752d91f8f582589a10acc5142a255",
".git/objects/97/c31fe9277f3e84702de3e3300d94b27ab192bd": "4278d836bcb3b4a9aa6b3bb73c49fc65",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/e5/04f90098bf5116580c6f303a8e026711d9a6b1": "5e3cf47004788a5e26bca1d8cda4005a",
".git/objects/2a/e6eeb94188cbc2fdb88b433c2d5fd7836c86bb": "11a716cc0e11890a4e5dff794617cdc7",
".git/objects/8a/c7e88fc15be63b335fab95f25df45e75094c10": "8765e57bdbcf80969015768a72763cf7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/2f/42f6806076212d6f5fdfbf65f4c885b3a65de2": "331a78c61b901d489e2f24a707940199",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/ac/e64a7c1ed503e017c27f6dbbcb74a77d6c666e": "e64ed0b8f21ece0f4cd5832839a5589f",
".git/objects/e9/6b7616da34c3cddecc34cb17d6eea9999bd230": "843c62104527f75006e54d89e37b61ef",
".git/objects/cb/c323759012263af1cf393470a853c47a8f41d6": "2a211f056bc3db5ef4892c024eef6d77",
".git/objects/dd/1da7c2e9d11b4935358f2e3480f2ffb62ce602": "aea724198fdb3a5dcee2d968d95699c2",
".git/objects/0a/6cc6fdc4281c29e17688d018696a3fcb9f5704": "401e145ecf6cb0d4a84baf0202b7cffa",
".git/objects/e1/7b4e16d695758441b6197ed29de2e338fb57c9": "686d7cd25a9c18c5a03b1d6ecdf36d24",
".git/objects/73/23bb4aa6505791442523c75b36ea4f1ae65067": "2f9c99f254d2d8d8d68aa935de57091a",
".git/objects/70/c04829180ed28d448ea4fb8a6d2c1a3eaf866c": "1ef393598082b1c243708153961a25e9",
".git/objects/70/a1260cf15fc183f877159228aff7331b49cf67": "2ca62ed695962bcb937282d5d0f4e9c4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/fb/c9aa39be951fa8167a0a084ce15f70aebe6e8a": "b034ec8558d9f6a0ec2ce2c409a0f76b",
".git/objects/58/28c96b2ccb5b51f2b89a8f54f13cf41f49d06b": "bc3bfbba9495cfaacd727ad1f0cfb3d4",
".git/objects/58/4b118bbb1cf316dc9f7775825e3dbdde7f6222": "a15cdcc9e46cd66b245086c41d320840",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/2e/906ae58c0e4c7c06b14818a93426cf24e974bd": "17eef37640e99400931cc4345e42aa4a",
".git/objects/ae/b57da36bd65314d213871de6a32fef77000be1": "729225aba0d8c163452f9cc575e12916",
".git/objects/63/e9fd02c4f64f09c091916ba6dd40897d1debfc": "a95c7246537939b8d2ebf3e7d9d50524",
".git/objects/aa/381f1e8abf5e8049eb594e9e1400f0d40194be": "66713ca838d49547ff636f48ed71b3bf",
".git/objects/3c/3695ea681a64c4231c315d8dff240af77232aa": "0c0ff549c632b92916e7686bcf6c85d6",
".git/objects/56/913d4637c3e494eefcc6c9c6d10d62d185e24d": "33724a79bd0b1a7b2dcc9aca4973a2ca",
".git/objects/7f/b4be24d35d404162fee8c5d6200a5bb90e84cc": "28bdeba252c5c606b27b11368606a86f",
".git/objects/76/ba2e21bac4287c0a12325a3a8813b20b737095": "b2e8204178213945bced7ceb0e4a34c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/29/81c8f8e87d2d8d2e7ed3163a3d7a3c25918526": "4ebd8db6cd34b2a45595d39856fdf83e",
".git/objects/72/c1dbe630c6d0f830caac95771bafcc1aee05e2": "824d817c739e3d2a6614a9691e169a71",
".git/objects/28/d9c54721db39734c43a76f2f048489d9570f4b": "ad23819e2c924f8542e0b6c40d184424",
".git/objects/1d/e8e043552e26a168810401373ed08bd59220cc": "6414a224275916d23c744c939f55553c",
".git/objects/1d/ab4f6d21b62e463c4670700aef2f51a2d762bb": "b8a1a5fb1799649895a2a96d16e6e2b1",
".git/objects/78/ee5e112cb0e7071434a6fc1c2e13eaec1ab804": "c7c6b7c378c0c96bd1584a88087deb33",
".git/objects/b7/4374c5d717e15914d4a871ff73f1a42d3c04ed": "7e73bb440131654b2041b303fde75720",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/eb9c90e0242d914fb6c85dc8d96a2dd92eb70f": "77b2d6c42768c03da4ebec5c4613c9ff",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/f5/ffedc15e8d814c32eaee1b6a2684e81fac4a9d": "36a1dbbfb4c870553047472fbafac185",
".git/objects/f5/a352b13050193f93eedd10816f03d57636b8a5": "fa10508267b289d0a505e7338e651c86",
".git/objects/b1/51377a7d6a4fc899f6b66bc1cad4d506df6d9a": "5096d0ed8b9bd778983236c3940a00fd",
".git/objects/b1/6caba1d43abe5af6af18977716fbedf2bcc1f5": "c01e1d7d31f09343605bbe8a71894cfc",
".git/objects/08/c5efd99b7b700f97a882d9ef9d834dabb51df6": "c344f1c97a84f811a1a3df86712e3ad9",
".git/objects/5b/7d0c8a2c40d54349ef60d4dc2ca50596da5da0": "9e4be1cd4b12b49fd0f0c09b4b8b6e0d",
".git/objects/5b/b60ce55c1d9901e3dbba70d3d94006435aff1f": "dbcf094cb2ace6bf38a13faf06025269",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/3f/0e17c742e9a367ee131042b58dbde54bc0f61a": "7154da46a7251b21bc86d3286947933d",
".git/objects/f3/f38a3056c3a2e39e8f9931864b05477011d81b": "3a52dab1b8472a3f950e84f11ed1d768",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/3fb7eec26f8cb9796d2f079e414c5e929f15f4": "940c447bd51620aaf1e890413eefbb09",
".git/objects/21/dff3370a392d488c54cedb90c9b4e527cd50a7": "14c6c63ad05762f585e60e7d5a06b5ac",
".git/objects/1f/790bdc8fe94fda3b6c3cd08f78d2d47e3254c8": "0424b7990e9d23f25c79680cdf77b966",
".git/objects/89/b3f6c5581712d931c41a9648ffd89b93382e5b": "83003efc21ededc614ecd6da9d679a23",
".git/objects/4e/47a8b89e43018226f953c2a94f86e7272454cd": "80c08cbe289b6f521d98c59dea11917d",
".git/objects/c9/e2bccbe4fbb1f71156c352203ce3d3fc3c4122": "be04802b6fe495dbd0e5e2a74b669d30",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/ab/f73689b36a6ae162f654c2bfa845bf19fd474e": "93dff7579009f95af17f5a4a0bd41fbd",
".git/objects/ab/abc127cd94a7f84e0a5d45537862bb8780e4cd": "59a6a108287e9f910665681c7d86ee23",
".git/objects/b4/191418f5847037d0fdab0d8888eb23129e6f0d": "32d88ea102f1a95e2641778237220fe0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/22/96b193e2cc2daa3695c626cd51a004527659a3": "04b0b62827c1cb3320e63e3ff45e32f5",
".git/objects/38/516f444d60103253a3b7723919f799fdfa5927": "348542e63dcbeb7503a598347669821f",
".git/objects/d8/c063d89321bec03ad738a27a329277c901ecc3": "160d7318b7304fc92e87b40ce993089a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/9b/e8387e127ac22572c9109132260d891a715356": "b3c44779837ee829cad10996f3477128",
".git/objects/b2/fc24f45380bfc833740b60f85690594c619698": "99da044026d627559292b4841f0a4b8b",
".git/objects/b2/515c6be9cba2b091f88b8fb05c697c969a8c03": "f4cebb04b6c2e7f410da24153fafd90d",
".git/objects/b2/8cd2ccfa6c10be334dedf9d08c163f5d27ef0c": "42f712ef7316381ae687614eeff672e7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/af7be869daefcf7ca096fa47844268aa56c97b": "f9dbe47bbaef4c9d6461872b4aec260a",
".git/objects/33/283be1885ed7eb84c523b9a634e0da65270ce0": "8f952ac8ab72647040acacbb84aa1677",
".git/objects/0b/7f61325b5239e8313a884050ba6f74894cb52c": "de22563126fa19f5e88ac92ee156eb3b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/18/d59e2091dd38e8f3273ead62a3aca3ddfc066f": "473a3219fb01b9c54e5426f837103bcc",
".git/objects/ee/3d6528e19af3c311b5923062ecae176a478dea": "e5ed465e21dcacc09af85c916490c24a",
".git/objects/ee/212f3a80df3f74002da2391a2c6e2bfe567b34": "b245b15e8c2eb46c7b51e77def1fd777",
".git/objects/ee/e47b5cad0461a14ab1ad8c6358ec1d87701238": "847b6ecc1e000a2f7085680996ee368f",
".git/objects/92/ec3d5ffc494f057c434f508f2996d4d4dc5af0": "b57bc080f8824133ef9b9f723fd4da2d",
".git/objects/88/3094e49f8f5f8a24e7b0895fb3cec4e457bd74": "70bd16ef66ecdfd89604c8ea75a58f53",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a7/31d1f53812e00aceeb4360c0a0e72ef5f1a30f": "3427a171cc9d39cabee632c18e685083",
".git/objects/7e/b77546ffebc09bedafa366a602b03b0112919d": "26c4f0dfcad9a1ec1e75b52f8bcc1b6f",
".git/objects/5a/f49ab697f03c3fd50f0b6a3266c013be5a6a10": "99a6cddb12e169ed19d3be02f065ee27",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/f0/bd212c6b4c527b989f9c4cbaffc3fbc5fc9e27": "e0725d2b28a04bde549a6e708f35d135",
".git/objects/23/6995a95c76e71f65e3d1a9c8e3380046173acb": "57ff4631daec430c7ca539029e925204",
".git/objects/9d/26ee6bce980f1ca74efc53b3170313be191321": "9f093df30a2a0e664f2e9093937f0e53",
".git/objects/8e/f27cb41e6e5bdbea6bffe91df30172e0bb9c9c": "00500a7518193d9f38b2bd4d466e932c",
".git/objects/8e/e0ae0af6f1b91f9bb4e34353eff2ba68fe9397": "16134088710e0c8a6cd29ef2a2b15481",
".git/objects/74/c310e9392aaac67433356375c891fcd069999b": "54ea02b993634ca704aa2751957c7482",
".git/objects/24/cdde7227e64d695325322f812a179ca72fde67": "85cf3c2815e2c4b697eca0e7eb7008b5",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/bf/e3a052af4edf9b8dd501cdd139427f07e29bbc": "55f1ab643026dab33506e93482980fb7",
".git/objects/4c/75b15ac7e25b0f30a9fbff42ebf839ea84643b": "e39b5746f0fc9007c786cb98a8f2fe6b",
".git/objects/4c/f4dd0db0324a7d7db28fabfaa9eeff89c66a78": "fabcfe248373bedbd11a643f4a95f496",
".git/objects/4c/f35a33569f6bb8817bf7cec2f0c21a668d69d3": "10fb57bf5fee820111bab9088c092fd1",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/f1/fa9b755096ad20056cc5e7deced6ae6e0b494b": "93152ed3ab1246344c5fd6de03084b83",
".git/objects/50/9f57361879f608ec141e73666b5a603150eb06": "76d0d93088980a72ea978adc87ed636e",
".git/objects/13/2ecf0ab06d6ea7176b892fcd3fb0c724702ea1": "3fe74be8991b1a4ec997bcd5adaa205e",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/8c/9d588565061ab9b02965eb8ecdbfaf4ee14a33": "5f2cd62ec703158deeb6e5fb1488968c",
".git/objects/35/a4d0d309039fb56423d03dafccb2da5c546466": "d978b62815610aceb957f3c48c9e09a0",
".git/objects/dc/9fcbb39b5ac910adeba8401fd81a06ddd6c95a": "5a082d7821df83a796a38a719b31dddc",
".git/objects/ef/dcc02e696d7453dccac3a0bed6572bb597f828": "e4407bafc10857301973937f7de57bde",
".git/objects/bd/e725b5852600a72c1e7ba8731201c5a07176a3": "49224a8ade71d916af7b9d0a670495fb",
".git/objects/57/27b2ce317dbce4a609984d3a30c807e0137cfd": "306de68e88d1d97ac8ee62bb196c5b99",
".git/objects/c3/0db9138717d7da3e5bd50a696367480604c58b": "fc2dbf8b4dfd0f92afe4bbd74f60eea1",
".git/objects/1b/bb3d087894cd8ccffa20f506fea83546dad783": "f43e420efdd33a0818a10ecf2589287a",
".git/objects/16/4d3fdaff04a6a1deff4bf5bd0c56c98836fd79": "09ce92959dfb5413700e3e71f7f0b418",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/1f485a1300c5e33838422fb7ea09b4e03fa5f9": "9849e6cd6f5211d751cf428d62895405",
".git/objects/80/e039aa899e8f49ef2dc2a40b80317642616947": "851f255a7515f89de1c307c433540f8d",
".git/objects/b6/afbe4915b01ad4bfcc150797ca8b3086956954": "ce1dbcc1a2a13c4369ccaee3a4f0a1e6",
".git/objects/f4/37b3bbd207b8da4d3641391e6dd3eeca242fc9": "42b4c24c5a78aca8caafdda144e42116",
".git/objects/f4/8239d0342224de03e7879927ccf06a57eb7847": "259f7ea8da27e4976e6b6f69941a26ec",
".git/objects/c8/4849e093d8689d8c26384669a9c00f67e93703": "e74a2814dc818fdcc782f772e5a54f05",
".git/objects/c8/b5f43c6f77a5c00b19bfea2678091e8e75bfcf": "a9279f637964b1c2db6a4c1740bbf828",
".git/objects/9e/0006424306cdbf21df38415cdadb760c3241b8": "973e0976bc2897ede99af87556434cc3",
".git/objects/e2/60e50d37bced71abc1e7e892be5142fb8a5c49": "de8a49af068d83ee29b4c3116cbc5ae4",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/66cad36ca63bcc069a9cdf6b9996e9b945b419": "9f0adb3c523c2aa37a579a545500f296",
".git/objects/84/44afdddd1131577fd72ebe02feef6db45c52a0": "19b9b32dcf42be056a157e34da2c84cd",
".git/objects/7a/0630e5d19659e0dedf9718d3d25660364a521c": "c946ea530dab870a083a3c24ab64695d",
".git/objects/7a/1e934c4e32e1fc981c44f8c672039b553b40b9": "8bc8ddd5d6c88a5a95a02a708cd8515e",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/1f15b443aea74a17adadb3ae8888dd5d3a41a0": "088cf4273659287902178a24e446f97c",
".git/objects/17/0846968615679b09793dc79febd1bc354b7e19": "8f723ed9dc77579f52a930931e1e9f26",
".git/objects/20/451ba3fe3a34e52f5c77632ea2281317baf6bc": "b60edf811f0689201d963a159a2e3b35",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/d1/a05ff08475613078e5fe837d943679c1c0d9c3": "cb7515a9c0ac59b1adeb10a257299bda",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"manifest.json": "2c0e9ac8311e0af565050017c1828fd2",
"index.html": "f086c2752013e085f9caf5578877fd8f",
"/": "f086c2752013e085f9caf5578877fd8f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
