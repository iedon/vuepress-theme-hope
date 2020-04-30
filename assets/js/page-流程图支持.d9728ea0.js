(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{570:function(t,s,n){"use strict";n.r(s);var a=n(1),e=function(t){t.options.__data__block__={flowchart_382ee185:"st=>start: Start|past:><http://www.google.com[blank]>\ne=>end: End|future:><http://www.google.com>\nop1=>operation: My Operation|past\nop2=>operation: Stuff|current\nsub1=>subroutine: My Subroutine|invalid\ncond=>condition: Yes\nor No?|approved:><http://www.google.com>\nc2=>condition: Good idea|rejected\nio=>inputoutput: catch something...|future\n\nst->op1(right)->cond\ncond(yes, right)->c2\ncond(no)->sub1(left)->op1\nc2(yes)->io->e\nc2(no)->op2->e"}},r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"流程图支持"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流程图支持"}},[t._v("#")]),t._v(" 流程图支持")]),t._v(" "),n("p",[t._v("让你的 VuePress 站点中的 Markdown 文件支持流程图。")]),t._v(" "),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    markdown"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用流程图功能")]),t._v("\n      flowchart"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("h2",{attrs:{id:"语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),n("div",{staticClass:"language-md line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v("@flowstart [preset]\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 放置你的流程图代码 --\x3e")]),t._v("\n\n@flowend\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("目前可用的预设：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("vue")]),t._v("（默认）")]),t._v(" "),n("li",[n("code",[t._v("ant")])])]),t._v(" "),n("h2",{attrs:{id:"演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#演示"}},[t._v("#")]),t._v(" 演示")]),t._v(" "),n("FlowChart",{attrs:{id:"flowchart_382ee185",code:t.$dataBlock.flowchart_382ee185,preset:"vue"}}),n("div",{staticClass:"language-md line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v("@flowstart\nst=>start: Start|past:>http://www.google.com[blank]\ne=>end: End|future:>http://www.google.com\nop1=>operation: My Operation|past\nop2=>operation: Stuff|current\nsub1=>subroutine: My Subroutine|invalid\ncond=>condition: Yes\nor No?|approved:>http://www.google.com\nc2=>condition: Good idea|rejected\nio=>inputoutput: catch something...|future\n\nst->op1(right)->cond\ncond(yes, right)->c2\ncond(no)->sub1(left)->op1\nc2(yes)->io->e\nc2(no)->op2->e\n@flowend\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("h2",{attrs:{id:"流程图介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流程图介绍"}},[t._v("#")]),t._v(" 流程图介绍")]),t._v(" "),n("p",[t._v("详见 "),n("a",{attrs:{href:"https://vuepress-md-enhance.mrhope.site/guide/flowchart.html#%E6%B5%81%E7%A8%8B%E5%9B%BE%E4%BB%8B%E7%BB%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("流程图介绍"),n("OutboundLink")],1),t._v("。")])],1)}),[],!1,null,null,null);"function"==typeof e&&e(r);s.default=r.exports}}]);