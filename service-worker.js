if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,f)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=f(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"af79003196bbf3f5880a1a394c2ed228"},{url:"article/index.html",revision:"1df528603d05b33369b62a3299d73630"},{url:"assets/css/0.styles.4e6cee54.css",revision:"1219e8b96036d5dd8b9923102035d0f8"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/103.95e07f74.js",revision:"29aba9b6e500cef586d4477cb95236f9"},{url:"assets/js/app.d9c8e977.js",revision:"762b8c7000f6430c26bc5a39bb6fff69"},{url:"assets/js/layout-Blog.a40a3c71.js",revision:"4aaf8b1a9e143fe928e32337f3820508"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.710c7389.js",revision:"6b5ee25b4dd90d38a02b4cb047e5a30d"},{url:"assets/js/layout-Layout.000e0349.js",revision:"9beb4120eefaa98428b5318a183a24ea"},{url:"assets/js/layout-NotFound.e86d7fb9.js",revision:"6040745a6fc94d6a0b5cf35d4890ba2b"},{url:"assets/js/page--051692f2.cb025f12.js",revision:"3226bbc9b178249cb320f5e941ea38d3"},{url:"assets/js/page--0ab466d2.412c9a41.js",revision:"43875c5eb89eace6120fe88964ebea8e"},{url:"assets/js/page--1c9738b4.ec360708.js",revision:"90f439b72a46884146db8717acda605c"},{url:"assets/js/page--5dafe67a.5c689d21.js",revision:"0adbb01094e57887ae0a8dcb2ec06ad4"},{url:"assets/js/page--6426a252.776a26cc.js",revision:"5d6d8989806578f6a5be2c1c36851ecb"},{url:"assets/js/page--cde16ddc.6399752d.js",revision:"c59780336a94ca54813b7f862da95baf"},{url:"assets/js/page-About Vuepress.b1688f72.js",revision:"3d49970481f7473cd27353b310b83ca8"},{url:"assets/js/page-Basic.68ef8ff3.js",revision:"6681863dd4323ea2ad17dd5f219b9bd1"},{url:"assets/js/page-Blog homepage.9fbe41b5.js",revision:"a06e4a1ff3741cc4702caa1c0241e442"},{url:"assets/js/page-Blog related.82f7821d.js",revision:"d8356decde94d3b661824b650809fc3e"},{url:"assets/js/page-Comment Function.d3733324.js",revision:"065fffeb685ba09343f4a8598a5feeb5"},{url:"assets/js/page-Common problems.d1eaf0f9.js",revision:"0d0d80851f3582173cfd943c32af7a6b"},{url:"assets/js/page-Config Docs.28f30040.js",revision:"6b4c86e3546898f32f995eb2926d1005"},{url:"assets/js/page-Custom alignment.7cee677a.js",revision:"5a9384e46715a990c09190517da0fdf9"},{url:"assets/js/page-Darkmode and Theme color.19dd87be.js",revision:"757ebbdce83d6e1cbc7f5b8f56143db7"},{url:"assets/js/page-Demos.8d23c592.js",revision:"3985fb5ad64ec63a1148d4eb97635ff3"},{url:"assets/js/page-Emoji List.a33d7707.js",revision:"69b8a821447ad2c2f1ebb08f1f953258"},{url:"assets/js/page-Emoji 列表.54efb087.js",revision:"944f4960672ed0b4c6002d45bec92cc4"},{url:"assets/js/page-Encryption function.0691510f.js",revision:"0ef8b0e2baed4731a2237dfbc2239595"},{url:"assets/js/page-File Structure.552225ad.js",revision:"c44b1f284955455e764f9f03e368583b"},{url:"assets/js/page-Flowchart.e624efb6.js",revision:"9ca066fbb1fa9cbc5f0b98c0b50e6c1f"},{url:"assets/js/page-Footnote.0c1dee2a.js",revision:"f62bd73b923cf50f83c18ec3f4bc05f6"},{url:"assets/js/page-Home Page.b7a65ce6.js",revision:"71b08eede1a092d635d3d66075a034f9"},{url:"assets/js/page-Home.b05ae55f.js",revision:"f706a42d1d0719c6cc3a820a4d01985e"},{url:"assets/js/page-Introduction.dcd24240.js",revision:"1a0b63276af5a03bbe3ae64d145aad1e"},{url:"assets/js/page-Layout.a22fa6e9.js",revision:"87c8a6bd8cd95c719355f27354a8a8f1"},{url:"assets/js/page-Markdown DEMO.c8da45b6.js",revision:"6a0013dc7202ea128d8cebb39fc912db"},{url:"assets/js/page-Markdown Introduction.c9cc1ec9.js",revision:"22392c317f64b396b7cb76746a1a99b7"},{url:"assets/js/page-Markdown 介绍.7342d3a0.js",revision:"6082841dfe9495adeef3759587d165ca"},{url:"assets/js/page-Markdown 新语法.f40b7caf.js",revision:"896da997247f6c3be74174eeb0517e2a"},{url:"assets/js/page-Markdown示例.5aa20659.js",revision:"4994f37a4faadf3eb96c3ad021231c1d"},{url:"assets/js/page-Markup.27b3e822.js",revision:"47810b025bf4f435a70292b1cd98f576"},{url:"assets/js/page-Nature.d721e7d4.js",revision:"714c54fa4eed059a16566680bd4fd9c8"},{url:"assets/js/page-NavBar.41af0085.js",revision:"00084539cba4203e27d2e83df009109c"},{url:"assets/js/page-New Component.3d5377f2.js",revision:"30b5542842e7218cfc29211ef37b54e2"},{url:"assets/js/page-New feature.c0589b76.js",revision:"3de28f419a09feff4688622cbcbb07a8"},{url:"assets/js/page-New syntax in Markdown.eea30bd9.js",revision:"2b30225f3eff9381020b653d548edd80"},{url:"assets/js/page-Object.01102520.js",revision:"236ab455bec50c0649df5aada889f418"},{url:"assets/js/page-Page Configuration.10ee1e99.js",revision:"48f78c3020a106d7fe10b6ebb7446830"},{url:"assets/js/page-Page information.f1a03ac2.js",revision:"5b4b6460a5b2ed1f497a3c98486a907b"},{url:"assets/js/page-Page.2594536e.js",revision:"67aedb7dea665c983521bf4351990177"},{url:"assets/js/page-People.d0a466d6.js",revision:"5096fefb6287a66e007a81cbe6059402"},{url:"assets/js/page-Place.21c1f116.js",revision:"c2c95e001402aefbd87622e524f09aaf"},{url:"assets/js/page-Plugin Description.7dde6e32.js",revision:"a56e2b5a3d20d36498895918b7ed5b61"},{url:"assets/js/page-Plugins.a5066726.js",revision:"dccfce84a715e0b9b5cc5001f23acb0c"},{url:"assets/js/page-Sidebar.cb9efdcd.js",revision:"484bf2633d1c71804163a008f518b37c"},{url:"assets/js/page-stylus configuration.15979c4d.js",revision:"cec0f3d48dff78ee3b4c487bde2beb43"},{url:"assets/js/page-stylus 配置.83eb8fbe.js",revision:"c311509b778ec6f561450b1ebbad9a8e"},{url:"assets/js/page-Superscript and Subscript.91446aaa.js",revision:"e0d2216fe288dacd8fd77607fe366933"},{url:"assets/js/page-Symbol.94eab16f.js",revision:"bc32a6bd6d94c7bd4a002a37e648c8bd"},{url:"assets/js/page-Tex Support.6a7bc2fb.js",revision:"d2a727ad913eff8b7f933989c11dceb2"},{url:"assets/js/page-Tex 语法支持.67cba682.js",revision:"620b28e4be3b62f7c459d2a62c7e4144"},{url:"assets/js/page-Theme Config.a309cb07.js",revision:"9709d34e339fec935dcf4e4a1eae0bd1"},{url:"assets/js/page-TS support.b9c523ce.js",revision:"05f9f26a765077c2559688c1c98bbbe4"},{url:"assets/js/page-TS 支持.2c6e7827.js",revision:"c8efa137279b5c11dd7f35c2350c6f71"},{url:"assets/js/page-Vuepress Cases.acbd62a8.js",revision:"dfeab36d9e46c82bfc5eee89b16b6deb"},{url:"assets/js/page-Vuepress commands.15c14f25.js",revision:"2678c7528e64cfb92448c959d8029043"},{url:"assets/js/page-Vuepress 案例.8ce6c170.js",revision:"cdfbeee55336217d6911658d35081baf"},{url:"assets/js/page-vuepress-plugin-container.df6a2b9f.js",revision:"c4574dc069ea7a7a39764304f9ca8ea2"},{url:"assets/js/page-vuepress-plugin-copyright.2882cd6f.js",revision:"1dac0f3620028602c332949657d70356"},{url:"assets/js/page-Vuepress.9dfc0fc2.js",revision:"93b531d675c440d744fce2fdfa56fbc4"},{url:"assets/js/page-上下角标.4977aff2.js",revision:"47ff7bd0f9c35d97d366cb8ea63be9ec"},{url:"assets/js/page-主题配置.49e9eae4.js",revision:"c29107aaca9f4e92649a6f91f85a38d0"},{url:"assets/js/page-人物.93ddd12f.js",revision:"b52a7748904b77f4804031c10a9cc8b8"},{url:"assets/js/page-介绍.bed13ea2.js",revision:"3428d14b57dcb7023018e5539704c2a9"},{url:"assets/js/page-侧边栏.f742b9ea.js",revision:"e77bb499772b9a9c267fbf3547571249"},{url:"assets/js/page-加密功能.9c69bceb.js",revision:"24e2b88735cb690a0e24055e1acca41f"},{url:"assets/js/page-博客相关.60cd218a.js",revision:"22c10b4209ebe62535b2272efa90d442"},{url:"assets/js/page-博客首页.03762aca.js",revision:"8cec78f8e958fff32910480970a4a1be"},{url:"assets/js/page-地点.adde2d00.js",revision:"8d54131592255566f765d089f3de1c75"},{url:"assets/js/page-基础知识.c50c982e.js",revision:"e21dbf5fea49a424541fb698c9a5ade1"},{url:"assets/js/page-对象.feedb4fc.js",revision:"d3e64c36591e96631dbd94c8be1b2653"},{url:"assets/js/page-导航栏.bc488045.js",revision:"47e905794743688c31adde3f62109527"},{url:"assets/js/page-布局.d11d2981.js",revision:"193fb880d70d35fa7edae2ed69567d18"},{url:"assets/js/page-常见问题.375d6f1c.js",revision:"a2a83f23c5bdcfb569913ab8214cb42d"},{url:"assets/js/page-插件.ede62bbe.js",revision:"5da032d9e84236a34e3c02bab1290cc3"},{url:"assets/js/page-插件说明.1d19f920.js",revision:"727c7d2797328800e2b685452953eaf5"},{url:"assets/js/page-文件结构介绍.5c4ec7b0.js",revision:"51c3fc6a703834947465b08d4058e3fb"},{url:"assets/js/page-新增特性.c6272a79.js",revision:"947606fca05df0baaaf731f4b8094310"},{url:"assets/js/page-新增组件.b3e440fc.js",revision:"98a79ef9a28f44cf2cd6e790ec1dc252"},{url:"assets/js/page-标记.d5082ac6.js",revision:"f6480ec17dd1cbbd34b43ddf13294dc4"},{url:"assets/js/page-流程图支持.7e837573.js",revision:"9dd64e32b0a50dd1e5d1eb7b12143904"},{url:"assets/js/page-深色模式与主题色.4be4355f.js",revision:"f4464b12bca6a0f76854e20b99b540d8"},{url:"assets/js/page-符号.6b1e29ca.js",revision:"732aac063ecef3086d5e592d94ec6982"},{url:"assets/js/page-脚注.82c21190.js",revision:"fa57660e828bf298e80a7b14bc3daffd"},{url:"assets/js/page-自定义对齐.d57c7a1e.js",revision:"dcf28583cd611062533e1520334943a5"},{url:"assets/js/page-自然.3251d58e.js",revision:"a4f14651500ac392f45ee37b06b25f07"},{url:"assets/js/page-评论功能.6f26eb47.js",revision:"19b0ab3cfa4459198e53b187957e2b5e"},{url:"assets/js/page-配置文档.ee093de4.js",revision:"0cc14cf8f9ce13e92bf98da1d53ba162"},{url:"assets/js/page-页面.e053ba70.js",revision:"7fa06a81c22fe484650eef309bddabd2"},{url:"assets/js/page-页面信息.a97acf7b.js",revision:"00c5bef2cbb3a67f4d6c976949235c8a"},{url:"assets/js/page-页面配置.c63993db.js",revision:"12f50956ff4957ecb44544d4b9645229"},{url:"assets/js/page-项目指令.62596b5a.js",revision:"e7088002a51aa28a0e5ff40ee2cca423"},{url:"assets/js/page-项目案例.33014aa1.js",revision:"9db23794c5f0c46d900dcb8cd74fe6b8"},{url:"assets/js/page-首页.a5a5ab3c.js",revision:"8ec78616fa607b4deb857db1cda40080"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.78faace7.js",revision:"444207a472ac1080efe4d829d2897462"},{url:"assets/js/vendors~layout-Layout.f8062c59.js",revision:"ab9a0bb91afdd6475a1e797b9e007f8f"},{url:"basic/index.html",revision:"bf157325c9dbd2232bd672b59786c75b"},{url:"basic/markdown/demo.html",revision:"67005096bf94099164f18ca825d0e2ee"},{url:"basic/markdown/emoji/index.html",revision:"cb633a04bb5464dd907d192aaa7b9793"},{url:"basic/markdown/emoji/nature.html",revision:"da82a0ea68eb385f04681243c0586b90"},{url:"basic/markdown/emoji/object.html",revision:"e3171d065dbf0d2a2179125f7c97d897"},{url:"basic/markdown/emoji/people.html",revision:"50df4fc0cc267c46225055f90ae4cbca"},{url:"basic/markdown/emoji/place.html",revision:"1114af987675ea5d00f3dc32746e66f8"},{url:"basic/markdown/emoji/symbol.html",revision:"7c0f64633d7dbd91a7faeae21599fa94"},{url:"basic/markdown/index.html",revision:"4036131980cd321d702a080551d40533"},{url:"basic/vuepress/case.html",revision:"f2f2879fc0224c405380565ab0d7a77c"},{url:"basic/vuepress/command.html",revision:"65d619dbec6494f6b427cc44fabfa376"},{url:"basic/vuepress/file.html",revision:"294ebb7b379ec560159317a84db21c3e"},{url:"basic/vuepress/index.html",revision:"a9a4c54d4cca5039f44c8fcec22a5393"},{url:"basic/vuepress/plugin.html",revision:"8b9f2c0d3091e11e8d9178ee556e272e"},{url:"basic/vuepress/theme.html",revision:"aa23acc8c72bb2000a71cc7f9dcaa3ad"},{url:"category/aconfigpi/index.html",revision:"7d222ba390ec11addeb97e85d93d58c5"},{url:"category/config/index.html",revision:"9307a10e15e19231bf9935dc5de1f599"},{url:"category/config/page/2/index.html",revision:"032c1cee79ae57fed53ca9332a45db6a"},{url:"category/FAQ/index.html",revision:"4e149bd44362cb07501e45bc804cdf82"},{url:"category/feature/index.html",revision:"18e15dcf372c2a4d1608604ac103e50e"},{url:"category/feature/page/2/index.html",revision:"0b6ccf1d27038a0fdb25264cdc14524e"},{url:"category/index.html",revision:"87b6948869381a3248a91577db16c1fb"},{url:"category/instruction/index.html",revision:"16f7467a0a179f2c7a03bafc0be73163"},{url:"category/layout/index.html",revision:"ec4bdeed5f99a82c33d126d59a1beeda"},{url:"category/layout/page/2/index.html",revision:"8cda1b0ffa7652ab9d0bfae43b37ff54"},{url:"category/markdown/index.html",revision:"d6bf70d9ba772995f2eba0876d4b1427"},{url:"config/index.html",revision:"34fcb1cc80dd5bbf80153cee35174153"},{url:"config/page.html",revision:"4603374138681f7858cdbf85ea5081c3"},{url:"config/plugin/container.html",revision:"544ff56cd145e4386b265df58c3c697b"},{url:"config/plugin/copyright.html",revision:"c93e853626875bd4a524f6304042393c"},{url:"config/plugin/index.html",revision:"bf87e148c2b2156de76ac8ec2d095870"},{url:"config/plugin/medium-zoom.html",revision:"1179b87c05719b6c2d763b6bd06acf51"},{url:"config/plugin/pwa.html",revision:"af4ba5496026adf7a882e4ee373389a6"},{url:"config/stylus.html",revision:"24f09245312f925c095bc2a468836225"},{url:"config/themeConfig.html",revision:"85dd056ee0c03670eaaea8177fc77054"},{url:"demo/index.html",revision:"f6602879ecd2990f6bf36756b7064944"},{url:"en/basic/index.html",revision:"4c06a701c835b1f280ba128a42ad5d6f"},{url:"en/basic/markdown/demo.html",revision:"230ae6eca6fe0e201c715edc3d3fbf9c"},{url:"en/basic/markdown/emoji/index.html",revision:"aba6797980c163da5090c8ac95ced2db"},{url:"en/basic/markdown/emoji/nature.html",revision:"f8a39722597a4205d36023038952e91a"},{url:"en/basic/markdown/emoji/object.html",revision:"ba48a5a72cc45dde873c7f49e761fed1"},{url:"en/basic/markdown/emoji/people.html",revision:"e30e61e59c523762e489ceb9b7e01ddc"},{url:"en/basic/markdown/emoji/place.html",revision:"b8814b5eb0d1b3a06068cae0dd983d88"},{url:"en/basic/markdown/emoji/symbol.html",revision:"275660de06fb36fbfba602f1c5bde699"},{url:"en/basic/markdown/index.html",revision:"f2846aae86dbd082c8215a0968f98fea"},{url:"en/basic/vuepress/case.html",revision:"1219507c98fb194e57e2e37783deb327"},{url:"en/basic/vuepress/command.html",revision:"90e8a97fb1b1daf05735dd6397cf5664"},{url:"en/basic/vuepress/file.html",revision:"0e434851147752c45450081a3c9de525"},{url:"en/basic/vuepress/index.html",revision:"5c948732f5ceb1bb773b353db8f1ec15"},{url:"en/basic/vuepress/plugin.html",revision:"6aae1c37d020578ee8a2f63ff5f9f7cb"},{url:"en/basic/vuepress/theme.html",revision:"179f64dddc562915caab84c436840a8a"},{url:"en/config/index.html",revision:"8a48553443c8992ef341a5f3d0069a2a"},{url:"en/config/page.html",revision:"2d4b8abcaec802839f8a621893bc2dd8"},{url:"en/config/plugin/container.html",revision:"c2692ebcfbd4acf17cab81b3e980dc31"},{url:"en/config/plugin/copyright.html",revision:"76eda9ced2594c1d39cfed5776ceb4de"},{url:"en/config/plugin/index.html",revision:"d823fc9900a4e903f74e69fca35f60c4"},{url:"en/config/plugin/medium-zoom.html",revision:"5924793e88808ba9f2d36b220b082090"},{url:"en/config/plugin/pwa.html",revision:"90cda767f6cd0e09fad6e4f07e52e9a7"},{url:"en/config/stylus.html",revision:"490ece9d5143744877f474ffe51febac"},{url:"en/config/themeConfig.html",revision:"8a0310dc6faab0dfc27c0971042831fb"},{url:"en/demo/index.html",revision:"26f097895604159e1427461191b23654"},{url:"en/FAQ/index.html",revision:"8e68a3d73b4dc71a9b2a9398d5c51873"},{url:"en/guide/feature/blog.html",revision:"0ee8e0cd3fb9f98e7d753f283fbe4a26"},{url:"en/guide/feature/comment.html",revision:"6de307e20953862c67db55c8195b6e63"},{url:"en/guide/feature/component.html",revision:"e91303c5271f5585c90b43f2fb3e4113"},{url:"en/guide/feature/encrypt.html",revision:"9e48dae86ad93755776c1554384d6f1b"},{url:"en/guide/feature/index.html",revision:"c3fd1b4ad7b985ba7170e89d301bf4dc"},{url:"en/guide/feature/markdown/align.html",revision:"b99b10b68d78d126dbdcfa693a350887"},{url:"en/guide/feature/markdown/flowchart.html",revision:"5f44c671935bb0cf81c277fa6e6f2d84"},{url:"en/guide/feature/markdown/footnote.html",revision:"99e3ca685ad39c642926b60038e33ef1"},{url:"en/guide/feature/markdown/index.html",revision:"1804fe38ec588099d9270700c1ba7cc3"},{url:"en/guide/feature/markdown/mark.html",revision:"7585be38665be09373cc9b126ec465df"},{url:"en/guide/feature/markdown/sup-sub.html",revision:"fa44dafcafe1d05f22fbca23cf98e0e3"},{url:"en/guide/feature/markdown/tex.html",revision:"b82bfd95f7b7212da86a6bcf1de40d3f"},{url:"en/guide/feature/page-info.html",revision:"b00631416f138e8dcc0bcbf3c9b066b1"},{url:"en/guide/feature/theme.html",revision:"5a1ec5b9f5c8b0fb10cbc434d7ff06f5"},{url:"en/guide/feature/typescript.html",revision:"ee5ed9b776750c0b58d798dc2543c07e"},{url:"en/guide/index.html",revision:"fc8147bba8790ab7745d98d883527fb9"},{url:"en/guide/install.html",revision:"d5319266549cf41cd72eb5e3af1e9baf"},{url:"en/guide/layout/blog.html",revision:"53fff3fac88cc3394a9205297dc6b4d6"},{url:"en/guide/layout/home.html",revision:"8ceff4df7d6416867036e4f1939bacdb"},{url:"en/guide/layout/index.html",revision:"4dee5ab73b86d54845a144c6030d334c"},{url:"en/guide/layout/navbar.html",revision:"cfbe2a64d9cbd65420cd537e0c9a5bac"},{url:"en/guide/layout/page.html",revision:"38432aa6e11478d3914b08302486d9aa"},{url:"en/guide/layout/sidebar.html",revision:"75ef19aa74bf3db6acbd4f140bd1e646"},{url:"en/index.html",revision:"797b51036eee5956090d68da6eb9e81f"},{url:"FAQ/index.html",revision:"dae2e76259e8cdef9bf30cdfdc068d6e"},{url:"guide/feature/blog.html",revision:"eea073450b75193b8ca7a1e0262074fe"},{url:"guide/feature/comment.html",revision:"d85f145deb7d19c3243fffa996d842e0"},{url:"guide/feature/component.html",revision:"ef8c29a1ee6bb75245765bd73d49a3b1"},{url:"guide/feature/encrypt.html",revision:"f0e67a044891a6af8a8e73e0d881882d"},{url:"guide/feature/index.html",revision:"7694d8732495d89ac47474ea25964b95"},{url:"guide/feature/markdown/align.html",revision:"2b9e6a1510653655857e322fd48ae3f5"},{url:"guide/feature/markdown/flowchart.html",revision:"933ca134fff9fbeddb632aab0e59f88f"},{url:"guide/feature/markdown/footnote.html",revision:"39879426906b6fae11c5b02345e4a6b0"},{url:"guide/feature/markdown/index.html",revision:"e3c5203fc8314da9425b28d5aecc260b"},{url:"guide/feature/markdown/mark.html",revision:"a695bb3f831525de97c8ae82eebaf2a6"},{url:"guide/feature/markdown/sup-sub.html",revision:"68471c80b5c47c3a30c0aac99e20b59f"},{url:"guide/feature/markdown/tex.html",revision:"0a6433914885c73cbff88dd938958058"},{url:"guide/feature/page-info.html",revision:"f0183951f674bed6b4ba2a0f753d29c2"},{url:"guide/feature/theme.html",revision:"cbfc4365b60606962f2c4f29a86ba9ae"},{url:"guide/feature/typescript.html",revision:"4c652d46b15e3925d3ff69cbd10493c7"},{url:"guide/index.html",revision:"e32fabd7a6250313457e38a4f5e7b6d5"},{url:"guide/install.html",revision:"992a4720c040c77aea02c887dec15b81"},{url:"guide/layout/blog.html",revision:"10eafe96d0aa3fdd2d901694ed983a15"},{url:"guide/layout/home.html",revision:"42ab67deaf0672a60807d2c4f8d030eb"},{url:"guide/layout/index.html",revision:"4486f05ac7822a1b3b4bbf5d2f966e18"},{url:"guide/layout/navbar.html",revision:"6845eec2f55a167219af2d68e0202a1c"},{url:"guide/layout/page.html",revision:"bfe6682327042047102cf2a8be73d687"},{url:"guide/layout/sidebar.html",revision:"c58a36064e230b1ce04459096e9566b3"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"f0c7c58b7a5e78ce20e35f0f29a213fc"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/blog/index.html",revision:"812b41b0cb5afa6ccd04ae62886c7738"},{url:"tag/comment/index.html",revision:"5fb092d6a3379807e7afa4dc0c2916a7"},{url:"tag/components/index.html",revision:"5df046bb098af639efeb6bd1016af2eb"},{url:"tag/config/index.html",revision:"e8935a5775212426ecf0574f28c55180"},{url:"tag/config/page/2/index.html",revision:"5b19ceabae13393aa89a0661bd0856a1"},{url:"tag/emoji/index.html",revision:"f96a4264527c68cb45bc62f386e406ab"},{url:"tag/emoji/page/2/index.html",revision:"ad720de2cab609c5e92f2bb25e0abe14"},{url:"tag/encrypt/index.html",revision:"def4c2f7d117df871732fa2865f04749"},{url:"tag/feature/index.html",revision:"a8f2b0cceeefe9af2953bd4c82232281"},{url:"tag/feature/page/2/index.html",revision:"8ba63d59aaf535f2d3a8ab004d0c051c"},{url:"tag/frontmatter/index.html",revision:"f461199bdd9bc38dc03a9ef2b27258c9"},{url:"tag/function/index.html",revision:"dc9892840e60387349a13adc353da241"},{url:"tag/function/page/2/index.html",revision:"85c382ec12a30a92bd7240a78e43e36b"},{url:"tag/home/index.html",revision:"5bc6b9764979d8fabae2f57b954230cf"},{url:"tag/index.html",revision:"8e35a130f7d3967d7b36beffea6e0e12"},{url:"tag/intro/index.html",revision:"c284ea92a8923af9dba536359ede2e56"},{url:"tag/layout/index.html",revision:"8d118d37679d54b527a4c23044dd157f"},{url:"tag/layout/page/2/index.html",revision:"3f4612f38e10e2fc367f1faa435a8af4"},{url:"tag/markdown/index.html",revision:"34513ac58799fdb03f7a3f4e551c2c15"},{url:"tag/markdown/page/2/index.html",revision:"fc1ede2d7afa029a2d66ae0ddbc1a351"},{url:"tag/markdown/page/3/index.html",revision:"b42d5173e10779c54fc59b94ab008a16"},{url:"tag/navbar/index.html",revision:"d4426264373776d73116520f998e14eb"},{url:"tag/page-info/index.html",revision:"ca2ecfdd531c65bb92fe5e91208cd2af"},{url:"tag/plugin/index.html",revision:"1f76ef4e3795423476176db9b41051fd"},{url:"tag/sidebar/index.html",revision:"925eeea05b2318712aa6e26dc45e7239"},{url:"tag/style/index.html",revision:"99210e78e5d37cb1b68d74dfcc58f919"},{url:"tag/themeConfig/index.html",revision:"8bab5813092db86ececad6c6c58e5269"},{url:"tag/typescript/index.html",revision:"3e979085f6516d30558c93fc6b084e9c"},{url:"tag/vuepress/index.html",revision:"42c8c1f97b5f339d012323b7fbc76ba5"},{url:"timeline/index.html",revision:"bbda902b1427b1ecffca73fc0628efd2"}],{})}));
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
