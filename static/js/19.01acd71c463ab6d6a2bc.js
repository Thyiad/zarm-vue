webpackJsonp([19],{205:function(t,e,a){var n=a(1)(a(257),a(360),null,null,null);t.exports=n.exports},257:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(137),o=n(r),s=a(139),i=n(s),u=a(138),l=n(u);a(322),e.default={components:{Container:o.default,PageHeader:i.default,PageFooter:l.default},data:function(){return{}},methods:{}}},307:function(t,e,a){e=t.exports=a(201)(!0),e.push([t.i,".button-page .za-panel-body{overflow:hidden;padding:10px 10px 0;background:#fff}.button-page .za-button{margin-bottom:10px;margin-right:10px}","",{version:3,sources:["/Users/yezhanwang/Documents/githubRep/zarm-vue/example/styles/pages/ButtonPage.scss","/Users/yezhanwang/Documents/githubRep/zarm-vue/example/styles/core/func.scss"],names:[],mappings:"AAEA,4BAEI,gBAAgB,AAChB,oBCJe,ADKf,eAAgB,CACjB,AALH,wBAQI,mBCTe,ADUf,iBCVe,CDWhB",file:"ButtonPage.scss",sourcesContent:['@import "../core/func";\n\n.button-page {\n  .za-panel-body {\n    overflow: hidden;\n    padding: r(10) r(10) 0 r(10);\n    background: #fff;\n  }\n\n  .za-button {\n    margin-bottom: r(10);\n    margin-right: r(10);\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},322:function(t,e,a){var n=a(307);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(202)("73c2ae4e",n,!0,{})},360:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Container",{staticClass:"button-page"},[a("PageHeader",{attrs:{title:"按钮 Button"}}),t._v(" "),a("main",[a("div",[a("za-panel",[a("za-panel-header",{attrs:{title:"基本"}}),t._v(" "),a("za-panel-body",[a("za-button",{attrs:{theme:"primary"}},[t._v("普通按钮")]),t._v(" "),a("za-button",{attrs:{theme:"primary",block:""}},[t._v("块级按钮")]),t._v(" "),a("za-button",{attrs:{theme:"primary",block:"",active:""}},[t._v("激活状态的按钮")]),t._v(" "),a("za-button",{attrs:{theme:"primary",block:"",disabled:""}},[t._v("禁用状态的按钮")])],1)],1),t._v(" "),a("za-panel",[a("za-panel-header",{attrs:{title:"幽灵按钮"}}),t._v(" "),a("za-panel-body",[a("za-button",{attrs:{block:"",bordered:""}},[t._v("幽灵按钮")]),t._v(" "),a("za-button",{attrs:{block:"",bordered:"",active:""}},[t._v("激活状态的按钮")]),t._v(" "),a("za-button",{attrs:{block:"",bordered:"",disabled:""}},[t._v("禁用状态的按钮")]),t._v(" "),a("za-button",{attrs:{theme:"primary",block:"",bordered:""}},[t._v("幽灵按钮")]),t._v(" "),a("za-button",{attrs:{theme:"primary",block:"",bordered:"",active:""}},[t._v("激活状态的按钮")]),t._v(" "),a("za-button",{attrs:{theme:"primary",block:"",bordered:"",disabled:""}},[t._v("禁用状态的按钮")])],1)],1),t._v(" "),a("za-panel",[a("za-panel-header",{attrs:{title:"多主题"}}),t._v(" "),a("za-panel-body",[a("za-button",[t._v("Default")]),t._v(" "),a("za-button",{attrs:{theme:"primary"}},[t._v("primary")]),t._v(" "),a("za-button",{attrs:{theme:"info"}},[t._v("info")]),t._v(" "),a("za-button",{attrs:{theme:"success"}},[t._v("success")]),t._v(" "),a("za-button",{attrs:{theme:"warning"}},[t._v("warning")]),t._v(" "),a("za-button",{attrs:{theme:"error"}},[t._v("error")])],1)],1),t._v(" "),a("za-panel",[a("za-panel-header",{attrs:{title:"按钮大小"}}),t._v(" "),a("za-panel-body",[a("za-button",{attrs:{theme:"primary",size:"xl"}},[t._v("xl")]),t._v(" "),a("za-button",{attrs:{theme:"primary",size:"lg"}},[t._v("lg")]),t._v(" "),a("za-button",{attrs:{theme:"primary"}},[t._v("md")]),t._v(" "),a("za-button",{attrs:{theme:"primary",size:"sm"}},[t._v("sm")]),t._v(" "),a("za-button",{attrs:{theme:"primary",size:"xs"}},[t._v("xs")])],1)],1),t._v(" "),a("za-panel",[a("za-panel-header",{attrs:{title:"多形状"}}),t._v(" "),a("za-panel-body",[a("za-button",{attrs:{bordered:"",shape:"radius"}},[t._v("圆角按钮")]),t._v(" "),a("za-button",{attrs:{bordered:"",shape:"round"}},[t._v("椭圆角按钮")]),t._v(" "),a("za-button",{attrs:{bordered:"",shape:"circle"}},[t._v("GO")]),t._v(" "),a("za-button",{attrs:{bordered:"",shape:"circle"}},[a("za-icon",{attrs:{slot:"icon",type:"right"},slot:"icon"})],1)],1)],1),t._v(" "),a("za-panel",[a("za-panel-header",{attrs:{title:"带icon的按钮"}}),t._v(" "),a("za-panel-body",[a("za-button",{attrs:{bordered:"",shape:"radius"}},[a("za-icon",{attrs:{slot:"icon",type:"right-round",theme:"success"},slot:"icon"}),t._v("\n            正确\n          ")],1),t._v(" "),a("za-button",{attrs:{bordered:"",shape:"radius"}},[a("za-icon",{attrs:{slot:"icon",type:"wrong-round",theme:"error"},slot:"icon"}),t._v("\n            错误\n          ")],1),t._v(" "),a("za-button",{attrs:{bordered:"",loading:"",shape:"radius"}},[t._v("\n            加载中\n          ")])],1)],1)],1)]),t._v(" "),a("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=19.01acd71c463ab6d6a2bc.js.map