if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,f)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=f(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"b0c5fa5a8132e748d3d68c7b54a45e5f"},{url:"article/index.html",revision:"a759944dae5b6d33589c842afb51abd8"},{url:"assets/css/0.styles.3b410339.css",revision:"8e7b328d12f4a26eeb97db60acea633d"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/102.9eb0bd0d.js",revision:"39ed92499d7839d657f38a8712eca220"},{url:"assets/js/app.7a4f1ff0.js",revision:"b5b5eeb92ce3871fe73fe66510ecabf4"},{url:"assets/js/layout-Blog.2d15941d.js",revision:"9697d18e221418f5425d7ec4bb411a97"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.6148bf35.js",revision:"6638f391383ef76fa8024842f4a93d84"},{url:"assets/js/layout-Layout.39638912.js",revision:"892e16c10dc570b3d5729f4eddaeb136"},{url:"assets/js/layout-NotFound.6e2e7c4e.js",revision:"6040745a6fc94d6a0b5cf35d4890ba2b"},{url:"assets/js/page--051692f2.575e3892.js",revision:"500129e0c0ca286e716c4e33d6eba870"},{url:"assets/js/page--0ab466d2.4a4c3305.js",revision:"f61c97bb43c0e15f0f14c81def073c12"},{url:"assets/js/page--1c9738b4.a2a9c850.js",revision:"2f6994096b3846c752445d0b675346de"},{url:"assets/js/page--5dafe67a.02514b77.js",revision:"c7ae6cd99e03d9fa6378fb0b2bd893c1"},{url:"assets/js/page--6426a252.8d030994.js",revision:"8d0cbe234621878567dd7148b664cc98"},{url:"assets/js/page--cde16ddc.0a0ce4e8.js",revision:"e05ee94c6598b4a7ad4ffea658c8d97b"},{url:"assets/js/page-About Vuepress.67675e76.js",revision:"168a2f0579c7fa1ebf263af7456c0bda"},{url:"assets/js/page-Basic.b18e020d.js",revision:"9420e82aebb755135c7b75589e0ecd93"},{url:"assets/js/page-Blog homepage.2eb07c8e.js",revision:"36d6d80f0b785dd270ba08625bdc7238"},{url:"assets/js/page-Blog related.626763e7.js",revision:"81fefdc4a6d4049195cfdecffb03478b"},{url:"assets/js/page-Comment Function.9bf2ea29.js",revision:"6e3a1b7e29718998cf127842ec6ad127"},{url:"assets/js/page-Common problems.04c2ec95.js",revision:"06c7ff842c38a2c292599ae0b3070eb5"},{url:"assets/js/page-Config Docs.61a257d9.js",revision:"4c78b0995efce4d8ad43095c7e0d2067"},{url:"assets/js/page-Custom alignment.cf5a52bc.js",revision:"daeae81e6bb82b360649e9f124f3cb58"},{url:"assets/js/page-Darkmode and Theme color.a8496c7c.js",revision:"b2af72c9c89ba70bea7f01ee2da1a506"},{url:"assets/js/page-Default Theme Config.f623cbf2.js",revision:"82c1cab26b98b6d8e38573aa3f0633fd"},{url:"assets/js/page-Demos.5fbf953b.js",revision:"747d9f2be2435870f75b75857a1f1fc8"},{url:"assets/js/page-Emoji List.1c968bf5.js",revision:"0301b49a35b6adcdec0e2db82b80283b"},{url:"assets/js/page-Emoji 列表.def1dcc5.js",revision:"b88d8ac2f19145fb4e4b66471d56a437"},{url:"assets/js/page-Encryption function.93162283.js",revision:"f37301d3aa9772d6f4f5b5c705288aeb"},{url:"assets/js/page-File Structure.49e3333e.js",revision:"6a812ee771dee66e9afea07115d8c739"},{url:"assets/js/page-Flowchart.27fd2cc2.js",revision:"a60c6a8cab24738b2e13626774b533f4"},{url:"assets/js/page-Footnote.313c0d83.js",revision:"d088a084c37e267375bf34bd51de9c55"},{url:"assets/js/page-Home Page.b61c8153.js",revision:"7d6999cdf70df03b7b05e8a3b19aa044"},{url:"assets/js/page-Home.20960ae6.js",revision:"edf7581111ae9aae10f338e939faafe5"},{url:"assets/js/page-Introduction.a7853141.js",revision:"5470de641d4a7fe97920948d4f7a4213"},{url:"assets/js/page-Layout.3bfc16a2.js",revision:"c6ec44470d4d0d302777602cdd85987d"},{url:"assets/js/page-Markdown DEMO.346df69f.js",revision:"9bec5a40c8383fde464589e9318bbefb"},{url:"assets/js/page-Markdown Introduction.aa3de142.js",revision:"af62e9f46d5fef50259f702011d3c3a6"},{url:"assets/js/page-Markdown 介绍.ac19dc23.js",revision:"4efb7caf46cab3b7103499479bfac655"},{url:"assets/js/page-Markdown 新语法.f85c637c.js",revision:"172becf755e6e1b2efcea958e1cf5e10"},{url:"assets/js/page-Markdown示例.1b230e1e.js",revision:"e5279e108e3030391abf007d3538f607"},{url:"assets/js/page-Markup.f3ff096b.js",revision:"d3b086850446eb5bc8b18ba6f18d3f3a"},{url:"assets/js/page-NavBar.681d1bf7.js",revision:"485126551d599dce8f2f75e43f65f4b6"},{url:"assets/js/page-New Component.06c91c2f.js",revision:"33e4ee7dd9710cac9978e6843f1275c8"},{url:"assets/js/page-New feature.3b04d1b4.js",revision:"1232d53c67da25cec76bb09e899a9b67"},{url:"assets/js/page-New syntax in Markdown.29dc802b.js",revision:"6d0b614a744dfd15e5541f4848d81101"},{url:"assets/js/page-Page Configuration.53fc6f31.js",revision:"d8b0d09ed44db5adfd1a617f96895ad4"},{url:"assets/js/page-Page information.a02f56aa.js",revision:"3070a0fbd082b9e314eb95d9234c3ec9"},{url:"assets/js/page-Page.189b1455.js",revision:"aeb31976e0e5d95cab6e0e872fb0f83e"},{url:"assets/js/page-Plugin Description.85aa8f04.js",revision:"003e49c5d0b96f98ba421b97d8861092"},{url:"assets/js/page-Plugins.dafce3db.js",revision:"b63722bf2b9bacc05a90f33ec02f74d6"},{url:"assets/js/page-Sidebar.6e11f338.js",revision:"5c945dd4c5936516673bad9c6c3568b1"},{url:"assets/js/page-stylus configuration.c2474fdb.js",revision:"165b0a1780e80acd867f62a4004a5d39"},{url:"assets/js/page-stylus 配置.abf05cde.js",revision:"9dabb4f09c6ba8afa85a46a6c0e78bbc"},{url:"assets/js/page-Superscript and Subscript.76213779.js",revision:"12bfc9ed250061dc42f7f5ba1bc90220"},{url:"assets/js/page-Tex Support.81c89ac3.js",revision:"c5ef2c37f40f626e885654043fa145f4"},{url:"assets/js/page-Tex 语法支持.39f9cb98.js",revision:"3e2612e850fcecd5b7d3def76caf386b"},{url:"assets/js/page-Theme Config.69c98075.js",revision:"79bf602317222df40adc0281a05768dd"},{url:"assets/js/page-TS support.7bcf5bb7.js",revision:"bb1834ae8c71a096b51e8c9f6a2bd8ac"},{url:"assets/js/page-TS 支持.bcb2c954.js",revision:"03b4a00691b12fe2240a9380e291d283"},{url:"assets/js/page-Vuepress Cases.57c0b7c6.js",revision:"7edbbc30ab3e5c97e8d32d0f0d3b459c"},{url:"assets/js/page-Vuepress commands.beeed5eb.js",revision:"4326d25ebd0eba5a85c6789ef7c66552"},{url:"assets/js/page-Vuepress 案例.54521e10.js",revision:"95b0ab103776ffd9b4f2d5c18c675a43"},{url:"assets/js/page-vuepress-plugin-container.4991b6aa.js",revision:"d35d6a93c0e88bc3d16bbffe84621c0f"},{url:"assets/js/page-vuepress-plugin-copyright.74c4f522.js",revision:"e7df66a680d83295673d005383d3db84"},{url:"assets/js/page-Vuepress.04ae138e.js",revision:"210fe63504f7e955443bf363735f63e1"},{url:"assets/js/page-Writing a theme.0f12b3f2.js",revision:"6ba3e41e65889eb2577e1e19af1f9ce9"},{url:"assets/js/page-上下角标.8d615baf.js",revision:"ba424a8982c66377b32d2fcef6b1a366"},{url:"assets/js/page-主题配置.a25cbafc.js",revision:"0cf32cd4f5c3a9e4c6975a0b5fca45a8"},{url:"assets/js/page-人物.88ce6fcb.js",revision:"0bf4da6978e05cb4fccddefff7351cef"},{url:"assets/js/page-介绍.a4d1967e.js",revision:"70579e904ca6ced1c17e68ba5afe013a"},{url:"assets/js/page-侧边栏.c862b0cb.js",revision:"e8376869ee3900f7a45749a4940ded2c"},{url:"assets/js/page-加密功能.df59dc2a.js",revision:"82f789581abdb3227ff38bddbb4b8a24"},{url:"assets/js/page-博客相关.4a542947.js",revision:"95fb0000257356cb1fe0b2a33167197c"},{url:"assets/js/page-博客首页.aa2fc9de.js",revision:"315fcf28d468dc44de4cbeb710f5e8a1"},{url:"assets/js/page-地点.cb525ba3.js",revision:"59b50daf8385fabfc1ca09513f301784"},{url:"assets/js/page-基础知识.58ec8448.js",revision:"ff9ab420fa4d38468f57d15e0d5ec1e4"},{url:"assets/js/page-对象.34a6ed86.js",revision:"fdaf9cfd8edcf4f36c95589c89f5f8ed"},{url:"assets/js/page-导航栏.a843f36b.js",revision:"b8f031ef382cced2ebd4ff6bad6c72b9"},{url:"assets/js/page-布局.480ed6f7.js",revision:"6ebcf006ad0586164ec11f5aadfbd89d"},{url:"assets/js/page-常见问题.3d2de089.js",revision:"6b958c31023e24f79c757a436aea01d1"},{url:"assets/js/page-开发主题.d99fbeb5.js",revision:"d2851a03a51c5510784f0c73d1a8d05d"},{url:"assets/js/page-插件.39f05f21.js",revision:"330315f0fd896d2a83a000b44047f4b9"},{url:"assets/js/page-插件说明.1fbf9949.js",revision:"cee0b11b708b645c0c32df6cf14564c7"},{url:"assets/js/page-文件结构介绍.1ae46f75.js",revision:"78655d3fe4c8a10062e40a5e858941e7"},{url:"assets/js/page-新增特性.6ee5d8ef.js",revision:"b28d74422e574a16246ec56046c3e506"},{url:"assets/js/page-新增组件.ee4e5626.js",revision:"e00ee98628f59df7833203cd59a58653"},{url:"assets/js/page-标记.d34c521a.js",revision:"4253ab54ea615b02aaeb33a36aa077d6"},{url:"assets/js/page-流程图支持.8a23f211.js",revision:"02b543452e58fe7eaa368d86794ac1b0"},{url:"assets/js/page-深色模式与主题色.1590c955.js",revision:"15ac66b01646c9bb0330892e70909bab"},{url:"assets/js/page-符号.957ed08f.js",revision:"de39c9cf56b0c7d886b226a94cedf972"},{url:"assets/js/page-脚注.a76f729b.js",revision:"7eee5731368bef2c1bae024479b039e1"},{url:"assets/js/page-自定义对齐.dc3373b0.js",revision:"c02acd97d08cd008c09a03fe7013b791"},{url:"assets/js/page-自然.480c264d.js",revision:"56e1c188194b280d35914afb6b6cfef3"},{url:"assets/js/page-评论功能.bf6407a4.js",revision:"c4ab539ff30be9610c10c96f33de93fd"},{url:"assets/js/page-配置文档.4d5784ee.js",revision:"301091f00fd64c56a54dc21b46254d1b"},{url:"assets/js/page-页面.766e1277.js",revision:"4e06733e3a62a43e22cc26b355117054"},{url:"assets/js/page-页面信息.4f88fdfe.js",revision:"c85a83109175750a0132d8325fc226c4"},{url:"assets/js/page-页面配置.81362cc5.js",revision:"92212d36d374da7fb4642a1684335c18"},{url:"assets/js/page-项目指令.f5a072c0.js",revision:"7a480623e66cb94634a780574874d838"},{url:"assets/js/page-项目案例.b8820b12.js",revision:"9a39d9bc32ef3158e9a45ad53a8d9eb5"},{url:"assets/js/page-首页.6bafc637.js",revision:"b32a76d729305c92be6288b568b282c1"},{url:"assets/js/page-默认主题配置.7547318c.js",revision:"e46b7219ac7ad39ab80f1090abb93bf4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.384195cf.js",revision:"4d5f4ce0c166cdb7dafcee3fad98aebf"},{url:"assets/js/vendors~layout-Layout.3a1a8abe.js",revision:"46d4e17418a55580e151ff8678f8d0fa"},{url:"basic/index.html",revision:"c2e2eabb40500bbff701888417bc3a5c"},{url:"basic/markdown/demo.html",revision:"86edbcda88d10806c2feb9e2255f2448"},{url:"basic/markdown/emoji/index.html",revision:"5034074df4b25a655143de03ae027609"},{url:"basic/markdown/emoji/locate.html",revision:"8837050c07fd662f35c2bd32adb94d3d"},{url:"basic/markdown/emoji/nature.html",revision:"9f537d231d9a5c7a5181f5c5778039c1"},{url:"basic/markdown/emoji/object.html",revision:"0835fe77f3f3f0811e764ad7bf26a73c"},{url:"basic/markdown/emoji/people.html",revision:"61423b589e612bbfc15c0ffe83d77442"},{url:"basic/markdown/emoji/symbol.html",revision:"1aaa8b084e2f367103348dcb79f0c274"},{url:"basic/markdown/index.html",revision:"4344794b454fbf4c53486735672f9873"},{url:"basic/vuepress/case.html",revision:"3244cfca79a2626695a84be3162d2406"},{url:"basic/vuepress/command.html",revision:"97cbf978e0bf43ad98a735119b3f446f"},{url:"basic/vuepress/file.html",revision:"9b520f2b297aab06623d4e1d3489b97c"},{url:"basic/vuepress/index.html",revision:"0564c9e301437a66bde8d7870e05235e"},{url:"basic/vuepress/plugin.html",revision:"439228e445a0e75178cb376dc6ab3dd2"},{url:"basic/vuepress/theme/config.html",revision:"e937ab895c5cbfe5cf79a6413e93acd8"},{url:"basic/vuepress/theme/dev.html",revision:"3bf10b4dd4f8b85eb5b0d6322ceef7e3"},{url:"basic/vuepress/theme/index.html",revision:"f7e23cd148123511027d3d770abc642c"},{url:"category/aconfigpi/index.html",revision:"79abe6564b5f5999b88d12872a539f95"},{url:"category/config/index.html",revision:"8d5d16b8fa0b1bd4648781b6394ca711"},{url:"category/config/page/2/index.html",revision:"6f81db3c6612c507cc143e02c3719d44"},{url:"category/FAQ/index.html",revision:"5ce0a3a6b9699c3d6c618619be153525"},{url:"category/feature/index.html",revision:"1e3892a5d5430144085680c7312683cb"},{url:"category/feature/page/2/index.html",revision:"9bbab9fa69a0db36dd32c70913153c86"},{url:"category/index.html",revision:"a3ba93ae3bf37ad5a9cc6486bff9ee9e"},{url:"category/instruction/index.html",revision:"269396915c4b391b63f28c522a3e5e19"},{url:"category/layout/index.html",revision:"4b94347281a4deb448bc514bfb870e82"},{url:"category/layout/page/2/index.html",revision:"490b8260d3fd71c2d9f1f4cf67c65b63"},{url:"category/markdown/index.html",revision:"f02fc1b88efa0a7ab6b43506ec136f8f"},{url:"config/index.html",revision:"cbf44c2229ceab8268803089fe485ba7"},{url:"config/page.html",revision:"49f4601a1aed015a2d3f25bdf957e07d"},{url:"config/plugin/container.html",revision:"87de3a4ecda3a6b501dec5cece159e4d"},{url:"config/plugin/copyright.html",revision:"6e6a49d6881ec5e6962c899e1bf466d8"},{url:"config/plugin/index.html",revision:"cfa703895918fd4792f380e6d2ba071d"},{url:"config/plugin/medium-zoom.html",revision:"4aa6eb566da014f76fcef764df8aa957"},{url:"config/plugin/pwa.html",revision:"c4536ec86da5ed7a264e926f74ac4f3d"},{url:"config/stylus.html",revision:"61b51daec91d55f21d5093cb95bcf851"},{url:"config/themeConfig.html",revision:"4891948745ac9cf2b697519ef1728016"},{url:"demo/index.html",revision:"32de31ca011f736ea559b0bdb57111ee"},{url:"en/basic/index.html",revision:"98346ee8cc4a90255e38debb4593bc2e"},{url:"en/basic/markdown/demo.html",revision:"20415072a547ce2e5bc4fc715630a478"},{url:"en/basic/markdown/emoji.html",revision:"8478bf84e7c201c37062508fbe87a063"},{url:"en/basic/markdown/index.html",revision:"cb173f3af4aa81ab3bb5a45067f88541"},{url:"en/basic/vuepress/case.html",revision:"4465b548a6e804e72b484789a6a3f0cb"},{url:"en/basic/vuepress/command.html",revision:"cc923e9f24b3b1476c93382f55b2c9e3"},{url:"en/basic/vuepress/file.html",revision:"c85bbf29a84100fbc865d0dd1143488d"},{url:"en/basic/vuepress/index.html",revision:"55978ba0bf675a2b2388291818bd8e66"},{url:"en/basic/vuepress/plugin.html",revision:"b58a7d9efd14b9cb3f52c14028f51c42"},{url:"en/basic/vuepress/theme/config.html",revision:"d2578115c9ab9aca3514951dcc6fd8a0"},{url:"en/basic/vuepress/theme/dev.html",revision:"0e226d457b7d2e218ee7d67612e225a3"},{url:"en/basic/vuepress/theme/index.html",revision:"ef34b0c49abd9161511e1f4b3068a6fb"},{url:"en/config/index.html",revision:"41fa4f2f923308d436eb7a5ec659aa72"},{url:"en/config/page.html",revision:"bdbf5bfda4a28b82430fa881fa753205"},{url:"en/config/plugin/container.html",revision:"a89d63978f78d43295249b86d180df1e"},{url:"en/config/plugin/copyright.html",revision:"faa1b1aea31fe4040ab296cd606a7277"},{url:"en/config/plugin/index.html",revision:"e59a58a7f5eb66e7d0cee7468726fcc0"},{url:"en/config/plugin/medium-zoom.html",revision:"93fb256d397916bcb206e0ee4e695d8e"},{url:"en/config/plugin/pwa.html",revision:"72b0b34dd655d8921ee1f0aada44ee19"},{url:"en/config/stylus.html",revision:"9c766238d03b627fbd991ffc0167a441"},{url:"en/config/themeConfig.html",revision:"947f5dd801f40aae5a20e1a41275ae6d"},{url:"en/demo/index.html",revision:"dd27e8d7d670fea73e9d351bde15d0a5"},{url:"en/FAQ/index.html",revision:"2557260897d332388015e3ab124e67ef"},{url:"en/guide/feature/blog.html",revision:"cb208eb732eeff3818ebccb44f45791c"},{url:"en/guide/feature/comment.html",revision:"65a2c902013798db23ad32f8648ce047"},{url:"en/guide/feature/component.html",revision:"c66b5e04a7fdb5bff7f30d2573c86f39"},{url:"en/guide/feature/encrypt.html",revision:"f915488a3a3ee05161aed29e066d8916"},{url:"en/guide/feature/index.html",revision:"cef2c6db7aac945ed37499a8b6651cc5"},{url:"en/guide/feature/markdown/align.html",revision:"3cf33c6a14e28d99abc4f750f4681155"},{url:"en/guide/feature/markdown/flowchart.html",revision:"2ccbd431cfcdaa6935799c085cc2af30"},{url:"en/guide/feature/markdown/footnote.html",revision:"47f6e8cd2e5c64d432b5e7561a15a6e3"},{url:"en/guide/feature/markdown/index.html",revision:"7bfad756ff277282f6c68a4638f49e19"},{url:"en/guide/feature/markdown/mark.html",revision:"6e1abbae8becdfa11975f2f5c06d6ed6"},{url:"en/guide/feature/markdown/sup-sub.html",revision:"e2f48b7bacbc8a6f800125fa5fe0c699"},{url:"en/guide/feature/markdown/tex.html",revision:"bdd53cba1b359754f91da07063aca0e0"},{url:"en/guide/feature/page-info.html",revision:"194c3a117666bbffeef8ab71ed81df6e"},{url:"en/guide/feature/theme.html",revision:"4afb6c26c6cb93da87bb996acbb02389"},{url:"en/guide/feature/typescript.html",revision:"f513ef772db9f92f8042ed80d2e1fc8c"},{url:"en/guide/index.html",revision:"df8399c314cec782c2ee55f628c9a9de"},{url:"en/guide/install.html",revision:"b42860153a43f6a863853692ac354df9"},{url:"en/guide/layout/blog.html",revision:"b3227ed44a02fbf6c5d91b905e238860"},{url:"en/guide/layout/home.html",revision:"61ed974e20fd5c66a3a6a88173c00ec2"},{url:"en/guide/layout/index.html",revision:"850275debb7d63f9f7f0fbd61ee1cc59"},{url:"en/guide/layout/navbar.html",revision:"a9fdb9c8e2fcaa37da1842a924a2f0f9"},{url:"en/guide/layout/page.html",revision:"7747355ece1e6daaf2ce11658e2c8b2b"},{url:"en/guide/layout/sidebar.html",revision:"e490f8f39064a972c097c533ee6470a7"},{url:"en/index.html",revision:"48f1de81162d72cdddac3d552c9583c5"},{url:"FAQ/index.html",revision:"19f5b491abab365aa5ec91f31fc21a78"},{url:"guide/feature/blog.html",revision:"de8cbb4ec7219edb09e849d8b543209b"},{url:"guide/feature/comment.html",revision:"b12386affec9d0be972337ece909bb09"},{url:"guide/feature/component.html",revision:"d49cc93114c7ea0aba0e8a77e4733a68"},{url:"guide/feature/encrypt.html",revision:"e70acfe62fbe4fbf2bcd355a0e49f52a"},{url:"guide/feature/index.html",revision:"2bb48954d9a04b2c750da827870ffc3e"},{url:"guide/feature/markdown/align.html",revision:"2e874689a84106c983f33897f3a8b3c7"},{url:"guide/feature/markdown/flowchart.html",revision:"719ab939d9eb68c0b3cbdd79a175d1e5"},{url:"guide/feature/markdown/footnote.html",revision:"02748f939d044b07770a1d28d496e42d"},{url:"guide/feature/markdown/index.html",revision:"dfab6a04f127b3a01ab1d1c411c8619b"},{url:"guide/feature/markdown/mark.html",revision:"b712d260791a42e4c523effca3efde60"},{url:"guide/feature/markdown/sup-sub.html",revision:"cd3208546574ef4e1e2edfc4d248fe2e"},{url:"guide/feature/markdown/tex.html",revision:"84f7ac4735558ba8d0f59410903af924"},{url:"guide/feature/page-info.html",revision:"40fc66ec0d0d6fe3b0548af4a4873bd0"},{url:"guide/feature/theme.html",revision:"444ff2ab12b0d3a096770e169fa92620"},{url:"guide/feature/typescript.html",revision:"9615176a370153e8dd7bce270d777f55"},{url:"guide/index.html",revision:"ec39d9d484d2ca7e44e20b9fd47f4afc"},{url:"guide/install.html",revision:"bfcc89ea0b657f3ccc4a89c12eb4c03e"},{url:"guide/layout/blog.html",revision:"91265db41e2f85c8bae5ac73a8788c08"},{url:"guide/layout/home.html",revision:"b654ed768cfbf8b7cad9049f278300b0"},{url:"guide/layout/index.html",revision:"72d3a5ac3b6f3b28322810d0f81bce06"},{url:"guide/layout/navbar.html",revision:"c68ff6aad4f447564706492e674e1a8b"},{url:"guide/layout/page.html",revision:"f2395bcd33f263f740a27e4038919d22"},{url:"guide/layout/sidebar.html",revision:"8c89fb241ece1a2d8cd01e0208c44af7"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"37b49e0d33f71f77059722f5c179795b"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/blog/index.html",revision:"155bca0cf9ac33d06f5e83ec58b4edd8"},{url:"tag/comment/index.html",revision:"e00a3d05663a8c00be5917da4e428cf6"},{url:"tag/components/index.html",revision:"ff343423bb2f89ca9e7f2620ce1cb8db"},{url:"tag/config/index.html",revision:"4f071a812ced7242ec009f39943a304d"},{url:"tag/config/page/2/index.html",revision:"6e7388083ab152e1d8f1d6ea02a545f0"},{url:"tag/emoji/index.html",revision:"4ce32457dba8c959364a9eef5a585ca5"},{url:"tag/encrypt/index.html",revision:"15eb6c67326432ef84b912e2556ca95c"},{url:"tag/feature/index.html",revision:"b44bf23ff8b5731e701cafb6d3e27969"},{url:"tag/feature/page/2/index.html",revision:"3ddea3f9242005c3bf31a236ffda02c1"},{url:"tag/frontmatter/index.html",revision:"81ac0568567d17e4e8f92b5930e6be20"},{url:"tag/function/index.html",revision:"6537d5e74af403d18c46f1141f672cba"},{url:"tag/function/page/2/index.html",revision:"12b1791f2705b42f3ed8b40a7854424c"},{url:"tag/home/index.html",revision:"0eb25ea753715643ece81b84b09a2340"},{url:"tag/index.html",revision:"f7b0bf107f304ddd611dcf0c46baa212"},{url:"tag/intro/index.html",revision:"f56d31491dca3f29fc345feebe9443fb"},{url:"tag/layout/index.html",revision:"c824dfa7639d20f37a11a06abe0222e9"},{url:"tag/layout/page/2/index.html",revision:"12db56bf3df38e117a112d1248bbcb35"},{url:"tag/markdown/index.html",revision:"0920feeb46b278ced24791cad76f6777"},{url:"tag/markdown/page/2/index.html",revision:"9803b83fd8976f20c8fd47c8a1c29bc7"},{url:"tag/markdown/page/3/index.html",revision:"6797bbc5cd2e9d151c3cde4f108a18d7"},{url:"tag/navbar/index.html",revision:"be63feb2bcae84d3c098a903487d4f54"},{url:"tag/page-info/index.html",revision:"05a2f6716fee1a230808f0cbdcc4d4c4"},{url:"tag/plugin/index.html",revision:"741225cc171cd754fbab6b5278e7e722"},{url:"tag/sidebar/index.html",revision:"48d90311e025404ac51d135f3cd7eed3"},{url:"tag/style/index.html",revision:"44638b01284f74b0d721d4a63907e8d6"},{url:"tag/themeConfig/index.html",revision:"5491bc67ce6aae493f665890ea622487"},{url:"tag/typescript/index.html",revision:"468c7c84d8492ac9c38cb8379c45e6bf"},{url:"tag/vuepress/index.html",revision:"f7b3a3885664723fc6b3b2ae6da61c34"},{url:"timeline/index.html",revision:"ba9ddcf5e079ac21d302176836c3ed6d"}],{})}));
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
