(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{485:function(a,t,s){"use strict";s.r(t);var e=s(1),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"主题配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题配置"}},[a._v("#")]),a._v(" 主题配置")]),a._v(" "),s("p",[a._v("除了查看本指南，您也可以直接查看源代码中的 "),s("a",{attrs:{href:"https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/packages/theme/types/hopeConfig.d.ts",target:"_blank",rel:"noopener noreferrer"}},[a._v("types 文件"),s("OutboundLink")],1),a._v(" 或本文档的 "),s("a",{attrs:{href:"https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/docs/theme/src/.vuepress/config.js",target:"_blank",rel:"noopener noreferrer"}},[a._v("配置文件"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("通过注入，vuepress-theme-hope 改变了默认主题一些配置的默认值。")]),a._v(" "),s("p",[a._v("虽然一般情况下，它们影响不大，但是还是需要着重提示这可能造成与默认文档预期不符的结果。")]),a._v(" "),s("p",[a._v("文档下方仔细的列出了所有配置项的改变。")])]),a._v(" "),s("p",[s("code",[a._v(".vuepress/config.js")]),a._v(" 中的 themeConfig 字段(主题字段)新增以下配置：")]),a._v(" "),s("h2",{attrs:{id:"基本选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本选项"}},[a._v("#")]),a._v(" 基本选项")]),a._v(" "),s("p",[a._v("这些选项需要您正确配置。")]),a._v(" "),s("h3",{attrs:{id:"baselang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#baselang"}},[a._v("#")]),a._v(" baseLang")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("'zh-CN'")])])]),a._v(" "),s("p",[a._v("主目录所对应的语言。")]),a._v(" "),s("p",[a._v("这个选项会保证主目录页面中主题文字使用正确的语言显示。你可以根据自己的需要将其改为其他语言。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("目前多语言仅适配了 "),s("strong",[a._v("简体中文")]),a._v(" (zh-CN) 与 "),s("strong",[a._v("英文(美国)")]),a._v(" (en-US)。")]),a._v(" "),s("p",[a._v("如果您需要其它语言的多语言支持，你可以 "),s("a",{attrs:{href:"https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/packages/shared-utils/src/i18n/config.ts",target:"_blank",rel:"noopener noreferrer"}},[a._v("向此文件提交一个 PR"),s("OutboundLink")],1)])]),a._v(" "),s("h3",{attrs:{id:"author"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[a._v("#")]),a._v(" author")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("必填: 否")])]),a._v(" "),s("p",[a._v("文章显示的默认作者")]),a._v(" "),s("h3",{attrs:{id:"nav"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nav"}},[a._v("#")]),a._v(" nav "),s("MyBadge",{attrs:{text:"改进",type:"warn"}})],1),a._v(" "),s("p",[a._v("NavBarItem 新增")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("icon")]),a._v(" 字段来支持图标显示。")]),a._v(" "),s("li",[s("code",[a._v("prefix")]),a._v(" 字段来自动添加分组前缀")])]),a._v(" "),s("h3",{attrs:{id:"sidebar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[a._v("#")]),a._v(" sidebar "),s("MyBadge",{attrs:{text:"改进",type:"warn"}})],1),a._v(" "),s("p",[a._v("SideBarItem 新增")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("icon")]),a._v(" 字段来支持图标显示。")]),a._v(" "),s("li",[s("code",[a._v("prefix")]),a._v(" 字段来自动添加分组前缀")])]),a._v(" "),s("h2",{attrs:{id:"页脚设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页脚设置"}},[a._v("#")]),a._v(" 页脚设置")]),a._v(" "),s("p",[a._v("页脚设置选项")]),a._v(" "),s("h3",{attrs:{id:"footer-text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#footer-text"}},[a._v("#")]),a._v(" footer.text")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("'Copyright © 2020-present <作者>'")])])]),a._v(" "),s("p",[a._v("页脚的默认文字。")]),a._v(" "),s("h3",{attrs:{id:"footer-displaydefault"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#footer-displaydefault"}},[a._v("#")]),a._v(" footer.displayDefault")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("false")])])]),a._v(" "),s("p",[a._v("是否显示默认页脚")]),a._v(" "),s("h2",{attrs:{id:"主题色与深色模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题色与深色模式"}},[a._v("#")]),a._v(" 主题色与深色模式")]),a._v(" "),s("p",[a._v("主题色和深色模式设置选项配置。")]),a._v(" "),s("h3",{attrs:{id:"darkmode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#darkmode"}},[a._v("#")]),a._v(" darkmode")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("'auto' | 'switch' | 'disable'")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("'auto'")])])]),a._v(" "),s("p",[a._v("是否开启深色模式支持")]),a._v(" "),s("h3",{attrs:{id:"themecolor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#themecolor"}},[a._v("#")]),a._v(" themeColor")]),a._v(" "),s("p",[a._v("主题色选项配置。")]),a._v(" "),s("p",[a._v("如果您不需要这项功能，请设置 "),s("code",[a._v("themeColor: false")]),a._v(" 将其禁用。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("类型: "),s("code",[a._v("Record<string, string>")])])]),a._v(" "),s("li",[s("p",[a._v("默认值:")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  blue"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'#2196f3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  red"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'#f26d6d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  green"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'#3eaf7c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  orange"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'#fb9b5f'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])])]),a._v(" "),s("h2",{attrs:{id:"markdown-增强"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-增强"}},[a._v("#")]),a._v(" Markdown 增强")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("themeConfig.markdown")]),a._v(" 进行Markdown 增强配置。")]),a._v(" "),s("p",[a._v("如果您不需要任何 Markdown 增强，请设置为 "),s("code",[a._v("false")]),a._v(" 将其禁用。")]),a._v(" "),s("h3",{attrs:{id:"markdown-enableall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-enableall"}},[a._v("#")]),a._v(" markdown.enableAll")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("false")])])]),a._v(" "),s("p",[a._v("启用全部功能。")]),a._v(" "),s("h3",{attrs:{id:"markdown-linenumbers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-linenumbers"}},[a._v("#")]),a._v(" markdown.lineNumbers "),s("MyBadge",{attrs:{text:"改变默认值",type:"error"}})],1),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("true")])])]),a._v(" "),s("p",[a._v("是否在每个代码块的左侧显示行号")]),a._v(" "),s("h3",{attrs:{id:"markdown-sup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-sup"}},[a._v("#")]),a._v(" markdown.sup")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("false")])])]),a._v(" "),s("p",[a._v("是否启用上角标格式支持")]),a._v(" "),s("h3",{attrs:{id:"markdown-sub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-sub"}},[a._v("#")]),a._v(" markdown.sub")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("false")])])]),a._v(" "),s("p",[a._v("是否启用下角标格式支持")]),a._v(" "),s("h3",{attrs:{id:"markdown-footnote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-footnote"}},[a._v("#")]),a._v(" markdown.footnote")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("false")])])]),a._v(" "),s("p",[a._v("是否启用脚注格式支持")]),a._v(" "),s("h3",{attrs:{id:"markdown-tex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-tex"}},[a._v("#")]),a._v(" markdown.tex")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("false")])])]),a._v(" "),s("p",[a._v("是否启用 TeX 语法支持")]),a._v(" "),s("h3",{attrs:{id:"markdown-flowchart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-flowchart"}},[a._v("#")]),a._v(" markdown.flowchart")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("false")])])]),a._v(" "),s("p",[a._v("是否启用 流程图 语法支持")]),a._v(" "),s("h2",{attrs:{id:"评论设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#评论设置"}},[a._v("#")]),a._v(" 评论设置")]),a._v(" "),s("p",[a._v("具体配配置请见　"),s("a",{attrs:{href:"http://comment.mrhope.site/api/",target:"_blank",rel:"noopener noreferrer"}},[a._v("@mr-hope/vuepress-plugin-comment 文档"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("可以直接设置为 "),s("code",[a._v("false")]),a._v(" 来禁用评论功能")]),a._v(" "),s("h2",{attrs:{id:"pwa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwa"}},[a._v("#")]),a._v(" PWA")]),a._v(" "),s("p",[a._v("PWA 设置选项")]),a._v(" "),s("h2",{attrs:{id:"加密设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密设置"}},[a._v("#")]),a._v(" 加密设置")]),a._v(" "),s("p",[a._v("加密设置选项")]),a._v(" "),s("h3",{attrs:{id:"encrypt-global"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-global"}},[a._v("#")]),a._v(" encrypt.global")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("string | string[]")])]),a._v(" "),s("li",[a._v("必填: 否")])]),a._v(" "),s("p",[a._v("最高权限密码，可以以数组的形式设置多个")]),a._v(" "),s("h3",{attrs:{id:"encrypt-globalencrypt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-globalencrypt"}},[a._v("#")]),a._v(" encrypt.globalEncrypt")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("false")])])]),a._v(" "),s("p",[a._v("是否全局加密")]),a._v(" "),s("h3",{attrs:{id:"encrypt-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-config"}},[a._v("#")]),a._v(" encrypt.config")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("Record<string, string | string[]>")])]),a._v(" "),s("li",[a._v("必填: 否")])]),a._v(" "),s("p",[a._v("加密配置，为一个对象，键名为匹配的路径，键值为对应的密码，接受字符串或字符串数组。")]),a._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[a._v("例子")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 这会加密整个 guide 目录，并且两个密码都是可用的")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/guide/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"5678"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 这只会加密 api/page.html")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/api/page.html"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1234"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])]),a._v(" "),s("h2",{attrs:{id:"博客配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#博客配置"}},[a._v("#")]),a._v(" 博客配置")]),a._v(" "),s("p",[a._v("博客配置。可以直接设置 "),s("code",[a._v("blog: false")]),a._v(" 来禁用相关功能。")]),a._v(" "),s("h3",{attrs:{id:"blog-blogger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blog-blogger"}},[a._v("#")]),a._v(" blog.blogger")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("必填: 否")])]),a._v(" "),s("p",[a._v("博主姓名，默认为 "),s("code",[a._v("themeConfig.author")])]),a._v(" "),s("h3",{attrs:{id:"blog-avatar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blog-avatar"}},[a._v("#")]),a._v(" blog.avatar")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("必填: 否")])]),a._v(" "),s("p",[a._v("博主头像，默认为 "),s("code",[a._v("themeConfig.logo")])]),a._v(" "),s("h3",{attrs:{id:"blog-sidebardisplay"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blog-sidebardisplay"}},[a._v("#")]),a._v(" blog.sidebarDisplay")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("'mobile' | 'none' | 'always'")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("'none'")])])]),a._v(" "),s("p",[a._v("是否在侧边栏展示博主信息")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("mobile")]),a._v(": 在移动视图中显示在侧边栏中")]),a._v(" "),s("li",[s("code",[a._v("'always'")]),a._v(": 总是展示在侧边栏中")]),a._v(" "),s("li",[s("code",[a._v("'none'")]),a._v(": 永远不在侧边栏展示")])]),a._v(" "),s("h3",{attrs:{id:"blog-intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blog-intro"}},[a._v("#")]),a._v(" blog.intro")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("必填: 否")])]),a._v(" "),s("p",[a._v("博主的个人介绍地址。")]),a._v(" "),s("p",[a._v("填写后将允许点击“博主信息”中的头像或姓名进入个人介绍页。")]),a._v(" "),s("h2",{attrs:{id:"其他配置选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他配置选项"}},[a._v("#")]),a._v(" 其他配置选项")]),a._v(" "),s("p",[a._v("以下是主题提供的其他配置选项，一般情况下您无需改动他们，但是主题也向你提供了更多有关主题的配置项。")]),a._v(" "),s("h3",{attrs:{id:"iconprefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iconprefix"}},[a._v("#")]),a._v(" iconPrefix")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("'icon-'")])])]),a._v(" "),s("p",[a._v("设置 iconfont 的图标前缀")]),a._v(" "),s("h3",{attrs:{id:"sidebaricon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sidebaricon"}},[a._v("#")]),a._v(" sidebarIcon")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("true")])])]),a._v(" "),s("p",[a._v("是否在侧边栏显示图标")]),a._v(" "),s("h3",{attrs:{id:"breadcrumb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumb"}},[a._v("#")]),a._v(" breadcrumb")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("true")])])]),a._v(" "),s("p",[a._v("是否全局启用路径导航")]),a._v(" "),s("h3",{attrs:{id:"breadcrumbicon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbicon"}},[a._v("#")]),a._v(" breadcrumbIcon")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("true")])])]),a._v(" "),s("p",[a._v("是否在路径导航显示图标")]),a._v(" "),s("h3",{attrs:{id:"smoothscroll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#smoothscroll"}},[a._v("#")]),a._v(" smoothScroll "),s("MyBadge",{attrs:{text:"改变默认值",type:"error"}})],1),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("true")])])]),a._v(" "),s("p",[a._v("是否启用平滑滚动功能")]),a._v(" "),s("h3",{attrs:{id:"backtotop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backtotop"}},[a._v("#")]),a._v(" backToTop")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean | Number")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("true")])])]),a._v(" "),s("p",[a._v("返回顶部按钮的配置。默认的触发距离为 300px，填入数字时可改变这一触发距离。填入 "),s("code",[a._v("false")]),a._v(" 会禁用返回顶部按钮。")]),a._v(" "),s("h3",{attrs:{id:"repodisplay"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repodisplay"}},[a._v("#")]),a._v(" repoDisplay")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("true")])])]),a._v(" "),s("p",[a._v("是否在导航栏显示仓库链接")]),a._v(" "),s("h3",{attrs:{id:"fullscreen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fullscreen"}},[a._v("#")]),a._v(" fullscreen")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("true")])])]),a._v(" "),s("p",[a._v("是否显示 ”全屏“ 按钮")])])}),[],!1,null,null,null);t.default=r.exports},502:function(a,t,s){"use strict";s.r(t);var e=s(1),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"使用主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用主题"}},[a._v("#")]),a._v(" 使用主题")]),a._v(" "),s("p",[a._v("使用一个主题和使用一个插件的方式几乎一致。")]),a._v(" "),s("h3",{attrs:{id:"使用来自依赖的主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用来自依赖的主题"}},[a._v("#")]),a._v(" 使用来自依赖的主题")]),a._v(" "),s("p",[a._v("一个主题可以在以 "),s("code",[a._v("vuepress-theme-xxx")]),a._v(" 的形式发布到 npm，你可以这样使用它：")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'vuepress-theme-xx'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"主题的缩写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题的缩写"}},[a._v("#")]),a._v(" 主题的缩写")]),a._v(" "),s("p",[a._v("如果你的主题名以 "),s("code",[a._v("vuepress-theme-")]),a._v(" 开头，你可以使用缩写来省略这个前缀：")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'xxx'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("和下面等价：")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'vuepress-theme-xxx'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("这也适用于 "),s("a",{attrs:{href:"https://docs.npmjs.com/misc/scope",target:"_blank",rel:"noopener noreferrer"}},[a._v("Scoped Packages"),s("OutboundLink")],1),a._v(":")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@org/vuepress-theme-xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 或者一个官方主题: '@vuepress/theme-xxx'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("缩写:")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@org/xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 或者一个官方主题: '@vuepress/xxx'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("以 "),s("code",[a._v("@vuepress/theme-")]),a._v(" 开头的主题是官方维护的主题。")])]),a._v(" "),s("h2",{attrs:{id:"开发主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发主题"}},[a._v("#")]),a._v(" 开发主题")]),a._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[a._v("警告")]),a._v(" "),s("p",[a._v("此部分只面向熟练掌握Vue相关库的人，如果您对Vue不熟悉，则无需阅读此章节。")]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/basic/vuepress/theme/dev.html"}},[a._v("点击前往")])],1)]),a._v(" "),s("h2",{attrs:{id:"优秀第三方主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优秀第三方主题"}},[a._v("#")]),a._v(" 优秀第三方主题")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("vuepress-theme-reco"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);