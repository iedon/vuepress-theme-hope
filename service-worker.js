if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-452119c2"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"api/index.html",revision:"eb92e0f11716f6c36a6997a55ed40bc3"},{url:"api/page.html",revision:"1ccc045c17c1a49713915c21c6c370dd"},{url:"api/plugin/container.html",revision:"fb0d30af84c613973942bbc5cbf0597b"},{url:"api/plugin/copyright.html",revision:"6546da3e2d02c712d031057a64655aaa"},{url:"api/plugin/index.html",revision:"35a5531c857168d7170264307061da0c"},{url:"api/plugin/md-enhance.html",revision:"27a2c6336c95160d471ca175f1c8934c"},{url:"api/plugin/medium-zoom.html",revision:"49d27b8fe8f8bab407a48348373f1096"},{url:"api/plugin/pwa.html",revision:"6075ef4badd95c5596efc071161226c0"},{url:"api/stylus.html",revision:"fb903799f356e4421faaeaac003c47ed"},{url:"api/themeConfig.html",revision:"d4517339a53e15aeea69797af63f12a7"},{url:"article/index.html",revision:"c5b63956008eccd0569886512fa51321"},{url:"assets/css/0.styles.6f0e6373.css",revision:"4de7a3027645ab66c00fd42215240954"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/94.1093f436.js",revision:"47720b7adcad76475a2f1806281c0300"},{url:"assets/js/app.0aa738f4.js",revision:"4d4dd3d9138f076c71b1f4b24ab7b686"},{url:"assets/js/layout-BlogEntry.b6e39f23.js",revision:"01b4d355afae56bd0eca6c1bef282faf"},{url:"assets/js/layout-BlogEntry~layout-Layout.978a45ab.js",revision:"7cbf996bae7f414fcaec00e37f63e70d"},{url:"assets/js/layout-Layout.8b1fb44b.js",revision:"0fa61e3fcf71de0751f80f22a04a8c9c"},{url:"assets/js/layout-NotFound.d08ee183.js",revision:"2ee03fad48af520bf74359dc531d1a73"},{url:"assets/js/page--1b278726.113f4ac2.js",revision:"f204e2e92a466c28da46a59b86f3ff61"},{url:"assets/js/page--24b68849.36a6be63.js",revision:"6aec704ed5a12797db83a9dc1157a61f"},{url:"assets/js/page--298eb4e9.8129d8d7.js",revision:"f5a66dc130aa6e65ab234fb73d1da746"},{url:"assets/js/page--33732ef1.0271251d.js",revision:"67f61966602d9a14c82d8583d005c95e"},{url:"assets/js/page--608d80cf.7fa3bc9a.js",revision:"5619d5e1c6e88263ed518d2fe0a3fbdc"},{url:"assets/js/page--b64dd6ee.100c55e0.js",revision:"29edf1e01fd45971d0a078f5b94bacbd"},{url:"assets/js/page-About Vuepress.49d28913.js",revision:"e602d493a73fb5c330f59a783ff31a62"},{url:"assets/js/page-API Docs.bf38b026.js",revision:"93aba1027ec900c70e7662452cfd427f"},{url:"assets/js/page-API 文档.4ddd4419.js",revision:"c8ac64e19ecdb5a320094e2987b2b0b9"},{url:"assets/js/page-Basic.b6ff0a68.js",revision:"600ca112cece810a7291f2817c6c7217"},{url:"assets/js/page-Breadcrumb.846a655c.js",revision:"a40121b4e69623ac8f4e8d3f325db58d"},{url:"assets/js/page-Comment Function.d484e7c5.js",revision:"1e545372cf9b4049fb2334eb97e2a327"},{url:"assets/js/page-Default Theme Config.afb063f7.js",revision:"a07eacff54507a52b7996ddbbf0b5e75"},{url:"assets/js/page-Emoji List.e9f82f29.js",revision:"ad13d512aedfca40b4e2ce31cef025e1"},{url:"assets/js/page-Emoji列表.ce8aac79.js",revision:"a8ba048da655818b3e6804f605dd94ef"},{url:"assets/js/page-File Structure.fd5e2d95.js",revision:"b8557b34cc44550f76236075ebef0f03"},{url:"assets/js/page-flowchart.83b5f9be.js",revision:"49236180934bfc690322682f3064b12d"},{url:"assets/js/page-Footnote.0bcbb399.js",revision:"8709b85fdb7f25288c782a64c097da2e"},{url:"assets/js/page-Fullscreen Button.2f53a436.js",revision:"d5474efab2e3ae9e1315a72270cf9240"},{url:"assets/js/page-Home Page.a7c30edf.js",revision:"9599b85ff859e799a4a23e61a166d401"},{url:"assets/js/page-Home.e833f9d3.js",revision:"ba3eff5963cc051c741e00396b1287cb"},{url:"assets/js/page-Introduction.b0fe0c0f.js",revision:"77e3e4218aad8c476204f6ed28077a33"},{url:"assets/js/page-Markdown DEMO.ab9f0d0c.js",revision:"32e4a9b8bb5803d16636b407510cc617"},{url:"assets/js/page-Markdown Introduction.6899dab9.js",revision:"b3c10ce1e37a3d1dcc4a1dc87b543f88"},{url:"assets/js/page-Markdown 新语法.d7cde2c3.js",revision:"2d0ae97e5ad55abb13e03a465f34bc66"},{url:"assets/js/page-Markdown介绍.10b16f86.js",revision:"57a5531e4f3692b57df00f391feecad4"},{url:"assets/js/page-Markdown示例.995288a1.js",revision:"a2253fd49c0e69d599b44c72242207b0"},{url:"assets/js/page-NavBar.e8064db5.js",revision:"56ec05ed7e2f0119f86c2566250611df"},{url:"assets/js/page-New Component.11a83f21.js",revision:"babffb1e8fcbc834272c01341df70cf1"},{url:"assets/js/page-New syntax in Markdown.e9b97636.js",revision:"b942b738a00509f683529da60c019edc"},{url:"assets/js/page-Page Configuration.b16ce8e0.js",revision:"b57c480c40b2cb768a799bb1e45b6813"},{url:"assets/js/page-Page.04d5eb43.js",revision:"3c9fd47c8e94e0a911e1209dc31d0ad8"},{url:"assets/js/page-Plugin Description.f964dda4.js",revision:"388db53ffdcc1bba2e4b456a7ee35513"},{url:"assets/js/page-Plugins.0f96fc19.js",revision:"346c2421b95685b151900bdcb357f313"},{url:"assets/js/page-Sidebar.696f7001.js",revision:"94fb9cefadf6af2501b58e1b7612a5de"},{url:"assets/js/page-stylus configuration.8039135f.js",revision:"1d11f2457e458f0695a5a6cdab0e698c"},{url:"assets/js/page-stylus 配置.77f7a2f3.js",revision:"2bda04635927b6299cabdeeeac8b5648"},{url:"assets/js/page-Superscript and Subscript.0b50aeba.js",revision:"8f92dee2aefb5342e1111ac324942a1e"},{url:"assets/js/page-Tex Support.47a048fa.js",revision:"2cba8db31a79551817245860db233385"},{url:"assets/js/page-Tex 语法支持.aa1a2179.js",revision:"6af532527118ac05152f42c15f3eddad"},{url:"assets/js/page-Theme color and Night mode.711f73c0.js",revision:"37e9d7288ce61a7dfb60786e429fd0dd"},{url:"assets/js/page-Theme Config.1c76951d.js",revision:"b797db87da2bca4373487df239e4d88d"},{url:"assets/js/page-TS 支持.80a317e3.js",revision:"007230153a3d1db5757cec9c3366c34e"},{url:"assets/js/page-Vuepress Cases.c2b8302c.js",revision:"fe1c9f73c1f7b657ca39e509cf1ce3ff"},{url:"assets/js/page-Vuepress commands.b90b6708.js",revision:"e05428b0233fcf0fb14d7de093ffbf05"},{url:"assets/js/page-Vuepress 案例.39daf2bf.js",revision:"0736439f94cfe0cbe043e3d550c6b1dc"},{url:"assets/js/page-vuepress-plugin-container.00a3701c.js",revision:"5fda54099599d788160df5d3d95cb2d1"},{url:"assets/js/page-vuepress-plugin-copyright.1c421a7b.js",revision:"326ba971bac13b041fc9913347a9ace2"},{url:"assets/js/page-vuepress-plugin-md-enhance.9adac05e.js",revision:"0984eee75b73dbac63e119c57d94efdd"},{url:"assets/js/page-vuepress-plugin-name-chunks.ff877b3e.js",revision:"93170849393905d21c3af120425ae78e"},{url:"assets/js/page-Vuepress.3500021c.js",revision:"9bf404801805ebb7840df8e6f8d10671"},{url:"assets/js/page-Writing a theme.82aadfeb.js",revision:"a3f0a603118f228257bc6ed44ad80d6f"},{url:"assets/js/page-上下角标.f86cf032.js",revision:"b32b8768ab7a7bf0750863cefb59bb7b"},{url:"assets/js/page-主页.c9667ff5.js",revision:"8bb014129a5d88b5010094fcad73f981"},{url:"assets/js/page-主题色与夜间模式.3b821d1a.js",revision:"77c40e562bf305bd6e99f049614cc7b3"},{url:"assets/js/page-主题配置.409d46f1.js",revision:"84989bf17458cb79459a808325e58553"},{url:"assets/js/page-人物.620b9835.js",revision:"c96b2e888b6e8343da2233e6f171b0d2"},{url:"assets/js/page-介绍.da948911.js",revision:"5f6d6d87f383772619303f348a6a87df"},{url:"assets/js/page-侧边栏.58d66d8d.js",revision:"d6638cfa29e21777a7223864bece6c82"},{url:"assets/js/page-全屏按钮.b9ce2f58.js",revision:"d2dde247884b60ed1c78fcca911bdee8"},{url:"assets/js/page-加密功能.aea82a8e.js",revision:"e6bce4d236a424a7010e44db1d397c72"},{url:"assets/js/page-博客相关.b123f4bb.js",revision:"e678012c038d707305875aec82cabf1c"},{url:"assets/js/page-图标支持.c09a9cb6.js",revision:"783af79590a659027d22f9879ba6aecc"},{url:"assets/js/page-地点.c84c8afd.js",revision:"0b3bc3c58e8238de2cccf5bd10333b2d"},{url:"assets/js/page-基础知识.d3b63df0.js",revision:"cc97d82aa17446b8829ba1f266bdc37c"},{url:"assets/js/page-对象.38b0d946.js",revision:"58910c5c83782549820e4481455afaa7"},{url:"assets/js/page-导航栏.df31ba2f.js",revision:"027080ea46dc0ab396350331e4d38573"},{url:"assets/js/page-布局.d00096b0.js",revision:"716df43df8ca6fdb9ba0c3c7d4771028"},{url:"assets/js/page-常见问题.a69f62c2.js",revision:"ec1174354d7e7c8ff98464829707980e"},{url:"assets/js/page-开发主题.624b7e8a.js",revision:"bc2f5f7bd4d721e90a06e25f3b18eeba"},{url:"assets/js/page-插件.d00ee2ac.js",revision:"2a60a8a27c2356e46770c06079e5e50d"},{url:"assets/js/page-插件说明.a9c5f4a3.js",revision:"095d8f980a0db65f761d0683f2f0181d"},{url:"assets/js/page-文件结构介绍.a7b43114.js",revision:"9dbe7e778c0b087b2bce395e4de73c30"},{url:"assets/js/page-新增特性.ee26151e.js",revision:"543a5ecc3411f0c39677c1b621966f8a"},{url:"assets/js/page-新增组件.ad6ef2df.js",revision:"b6e6fe44646603b32e6a709245388f98"},{url:"assets/js/page-流程图支持.424915ad.js",revision:"5dc90d4790d1743153144766fd084e27"},{url:"assets/js/page-符号.6830bb07.js",revision:"bfc2c7e4d7f0d4b286de1b31b5881568"},{url:"assets/js/page-脚注.5e6edd1e.js",revision:"d0b9bf6ab6c2af0a1bb9a6788ac3c230"},{url:"assets/js/page-自定义对齐.9898080b.js",revision:"d3b0f55fa301fd4f727366f63b1dbf7e"},{url:"assets/js/page-自然.8488da7b.js",revision:"9b6f590826b41f2470f0d1199ea2bb69"},{url:"assets/js/page-评论功能.b951a5a1.js",revision:"dec9c29cd7d462f2c80e6b0af919e2e6"},{url:"assets/js/page-路径导航.c3f30433.js",revision:"b0b13599f87341dc48f2109077f0dabf"},{url:"assets/js/page-页面.276d6a62.js",revision:"c6469abe0c8c12a3925d220f6cb95a0e"},{url:"assets/js/page-页面配置.32642ebb.js",revision:"2bc19e3cb15b5d8826b51c4e7963e612"},{url:"assets/js/page-项目指令.12ef948b.js",revision:"f6d4025ec9d4650769befa05700a51cb"},{url:"assets/js/page-默认主题配置.ba0b6e31.js",revision:"f06959a0d2f558d423d361b765838763"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.156bbd71.js",revision:"9ec1d011c1db034203408be301921b34"},{url:"assets/js/vendors~layout-Layout.6b06051e.js",revision:"0c35cdd9f1adb5473adc6fb11594d284"},{url:"basic/index.html",revision:"b7fb49ea1bc9f6b45fa6fd9a5c18c1e3"},{url:"basic/markdown/demo.html",revision:"f6e93f8fe83328ff719e8ced474aa6b1"},{url:"basic/markdown/emoji/index.html",revision:"8ec86e6cd49393df30abce3d30357a4c"},{url:"basic/markdown/emoji/locate.html",revision:"9b3ae83fa73615e92804d9f2cd95dece"},{url:"basic/markdown/emoji/nature.html",revision:"25fb7199c15679e7a8490cc3a457c7ef"},{url:"basic/markdown/emoji/object.html",revision:"d39805f10b9d9b26650249b6e18514bc"},{url:"basic/markdown/emoji/people.html",revision:"6080e8928bbb7c7d2f3c6455a26c6709"},{url:"basic/markdown/emoji/symbol.html",revision:"359ba0e009745f566a0c3237fc23b653"},{url:"basic/markdown/index.html",revision:"75c0c88009da1a1d1576d7a938803cfb"},{url:"basic/vuepress/case.html",revision:"fb9bbec114c77a4119de7766e8b74ab9"},{url:"basic/vuepress/command.html",revision:"e9e04b7550d5f441f04d45395651b6c8"},{url:"basic/vuepress/file.html",revision:"8b335dcf4d8bb47ad4aa39927464157e"},{url:"basic/vuepress/index.html",revision:"08b9a2a11f4bdce91dace8ffa703d337"},{url:"basic/vuepress/plugin.html",revision:"ba2ee7b28c0feb6d840d23b00a442e63"},{url:"basic/vuepress/theme/config.html",revision:"0cf4561b3e1b9a351d8c12908a4fa81a"},{url:"basic/vuepress/theme/dev.html",revision:"5937ecd92d6c4631887382382185f99d"},{url:"basic/vuepress/theme/index.html",revision:"8a246a0549b46106a195d6cee19740f4"},{url:"category/api/index.html",revision:"77d73a6c1e81a0622e948efb6afc1503"},{url:"category/function/index.html",revision:"6b25a74b1fd2d9d220913aa592876d88"},{url:"category/index.html",revision:"25786e52d076a245179e7ab06957b5af"},{url:"category/instruction/index.html",revision:"c0535c8b8a8a75185e8a8b7460abdee0"},{url:"category/layout/index.html",revision:"1d22a1e739ca39a7702f2fb94817a41a"},{url:"category/markdown/index.html",revision:"e4f5b70696b739cd02e1153f08ce722c"},{url:"category/style/index.html",revision:"c18463a376aa7ccd8bf8e29f09507c99"},{url:"en/api/index.html",revision:"83a25fdc18798607713f9821e0a19023"},{url:"en/api/page.html",revision:"240a788978b8e391c94cdddee17c7c67"},{url:"en/api/plugin/container.html",revision:"9420d218cfdaa00b76d508f91f8c52e2"},{url:"en/api/plugin/copyright.html",revision:"5b2b81c675822fd40e49cf56e3637262"},{url:"en/api/plugin/index.html",revision:"b809fa51f1ecc0108d07fc78ca4abda3"},{url:"en/api/plugin/medium-zoom.html",revision:"4fdfe71e9a0ba6a09ccfba1b3a1b77ce"},{url:"en/api/plugin/name-chunks..html",revision:"f0c0e1cfaf92836c45e08c783435b02d"},{url:"en/api/plugin/pwa.html",revision:"407346a13392229dd8ba505131a81f5a"},{url:"en/api/stylus.html",revision:"6d3e16b812e4eeb451e867473d700dd1"},{url:"en/api/themeConfig.html",revision:"23f720a4b72012035094dd1f02e1dd13"},{url:"en/basic/index.html",revision:"e7125849499338ade9b4165de3b0cc97"},{url:"en/basic/markdown/demo.html",revision:"47770ff05d9e9cbaa4595d33282c8af2"},{url:"en/basic/markdown/emoji.html",revision:"9311ad1889b4bb13414a5adedd12d5a7"},{url:"en/basic/markdown/index.html",revision:"f954c8a85c344e47230eadba3696ed06"},{url:"en/basic/vuepress/case.html",revision:"fdace73faeda67c18430725b9b49aa52"},{url:"en/basic/vuepress/command.html",revision:"d79c6d9915a4af44439e20a719e0705e"},{url:"en/basic/vuepress/file.html",revision:"ef54a9be2525838452bdc81c81e3f793"},{url:"en/basic/vuepress/index.html",revision:"b48672bee46b291a0b6ff7da0513211c"},{url:"en/basic/vuepress/plugin.html",revision:"357e672c5eeeaf8d190c9da43ec8ad5d"},{url:"en/basic/vuepress/theme/config.html",revision:"e93336df3f0b402ad0df786ed0788017"},{url:"en/basic/vuepress/theme/dev.html",revision:"6a800fdac06e954a70ee67bca33ac96e"},{url:"en/basic/vuepress/theme/index.html",revision:"10cc0054810113306e709f66560d5aac"},{url:"en/guide/breadcrumb.html",revision:"ab9e47bb4c554a3c63908f30bae2b824"},{url:"en/guide/comment.html",revision:"d3607d2790235609637de969cff859be"},{url:"en/guide/component.html",revision:"21af30f24c8f82d52c0d04165d04f43b"},{url:"en/guide/fullscreen.html",revision:"fd3b540535a5b25685e7d03e81090506"},{url:"en/guide/home.html",revision:"4a93ebdb672e694fb3df9beb9d741b3a"},{url:"en/guide/index.html",revision:"655b1a82a141d411004e1f43547a815e"},{url:"en/guide/install.html",revision:"4595650601f4e1079e697a87b40dc2b6"},{url:"en/guide/markdown/flowchart.html",revision:"3446cc82472a253dc5cbd9bcab62018d"},{url:"en/guide/markdown/footnote.html",revision:"390ff1028ec006de28632358dc0b8a32"},{url:"en/guide/markdown/index.html",revision:"29e011eeb7a0a2016e9aff75fab5c949"},{url:"en/guide/markdown/sup-sub.html",revision:"f49a89ddbd4e6726905eb94e106b1954"},{url:"en/guide/markdown/tex.html",revision:"4c805d4a850569448e620133b55ab709"},{url:"en/guide/navbar.html",revision:"54ac48e39d69cf3b0bf79d804818b6a8"},{url:"en/guide/page.html",revision:"6042a00ba5cd0acd303bdf43d68a06fb"},{url:"en/guide/sidebar.html",revision:"771bf4f5cb0958651fc2340aade77418"},{url:"en/guide/themecolor.html",revision:"7484c42f4aed0566fef8b175455d33bd"},{url:"en/index.html",revision:"4f2989775ca558f34b00e917eba31f1f"},{url:"FAQ/index.html",revision:"84c23fc9bc94a8505290b11164568758"},{url:"guide/feature/blog.html",revision:"4b5200bb54be306881022f524275d89a"},{url:"guide/feature/comment.html",revision:"5bde2f5e305a3f0eb8266a227073b81e"},{url:"guide/feature/component.html",revision:"c65957bd9472de20d79b725869c7bf26"},{url:"guide/feature/encrypt.html",revision:"aaf7430ce2e76bc565f8760d326d8061"},{url:"guide/feature/fullscreen.html",revision:"6b47bb0ad814054cc38c9889c757a825"},{url:"guide/feature/icon.html",revision:"c79236f4f0f9b132181a5d67983148f2"},{url:"guide/feature/index.html",revision:"0dac23a8fead914f41804b7ccd603c94"},{url:"guide/feature/themecolor.html",revision:"153dc970826d486241e54b9381330fc8"},{url:"guide/feature/typescript.html",revision:"cde6a56e92201b7489a1b0feced2caf9"},{url:"guide/index.html",revision:"061cb3e8f474cdcad16e629254cacffd"},{url:"guide/install.html",revision:"40f40150e41f41f6c9e19a62a719ddce"},{url:"guide/layout/breadcrumb.html",revision:"032124d1e99edaf8b7bd3333b6425a5c"},{url:"guide/layout/home.html",revision:"7e0c504b9504212a93244a47c8b3bcf8"},{url:"guide/layout/index.html",revision:"46352858cf75cd1bd2ab457312cba562"},{url:"guide/layout/navbar.html",revision:"5f46fcd3626621f0232143f4c26cdfbc"},{url:"guide/layout/page.html",revision:"9137c5552280a04d1bc7004f797089fa"},{url:"guide/layout/sidebar.html",revision:"70e5966bc6d661c0fd954f32f3daf950"},{url:"guide/markdown/align.html",revision:"56a1c25fded1b50c97d1be385b98ffaa"},{url:"guide/markdown/flowchart.html",revision:"08150d42428a4495d246c42e2bb89895"},{url:"guide/markdown/footnote.html",revision:"79e380508d00d304d206e4f3831f1426"},{url:"guide/markdown/index.html",revision:"63c40f3cb12165b3fa08080112673c0f"},{url:"guide/markdown/sup-sub.html",revision:"d8e86beb5a62375ed021899ec1e47cec"},{url:"guide/markdown/tex.html",revision:"d2675be389d15669faaf170f1af1256c"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"ebc4808b44a6f5703327d8552072ab86"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"e76e24594df4a402da990304656126e1"},{url:"tag/comment/index.html",revision:"039d4cfc215ccdbbce6aa21317212f75"},{url:"tag/component/index.html",revision:"55c70300646cde620152169b756eb2c7"},{url:"tag/components/index.html",revision:"039fd19c3e5020fb5dc7eaed80a17084"},{url:"tag/emoji/index.html",revision:"d28402864b9ac833a44b3a40fab860eb"},{url:"tag/encrypt/index.html",revision:"571b9430e5a19805fc195af24fc4539a"},{url:"tag/enhance/index.html",revision:"ff3f4ac33267b278c3743557d33f09a2"},{url:"tag/frontmatter/index.html",revision:"422a0bb676472c8fa322d50e27120a82"},{url:"tag/fullscreen/index.html",revision:"6fe820cc57a82cfb74d6af7510aa11d6"},{url:"tag/function/index.html",revision:"ed58b909af666b6aab978b8b8c8b7bd8"},{url:"tag/home/index.html",revision:"ff7553f2958b170d5cb4e8fb6c5ce6df"},{url:"tag/icon/index.html",revision:"609ba59586a08c7f3b3a3069e9761857"},{url:"tag/index.html",revision:"8dcdd322ab365cc920af99d8cd79ba9f"},{url:"tag/intro/index.html",revision:"24b3b7ee71f8fbb94444032ea94318a2"},{url:"tag/layout/index.html",revision:"b2e0355778d6acfc06265d2af2205221"},{url:"tag/markdown/index.html",revision:"ac6225ea37b7c023f15662438fe7927d"},{url:"tag/plugin/index.html",revision:"7b4bcb836908c5c11c107d3461732ef0"},{url:"tag/style/index.html",revision:"41495bc81c1459bb976a7f76a5a68673"},{url:"tag/themeConfig/index.html",revision:"7a7f3cbbaaa64ee0133b2507154dd3cc"},{url:"tag/typescript/index.html",revision:"0fd80fd7c6ffd42897cd2d69162259f9"},{url:"tag/vuepress/index.html",revision:"3f8f4ceea71d3a8d52ccb28bc1f3b2fb"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
