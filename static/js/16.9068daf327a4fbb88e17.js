webpackJsonp([16],{211:function(e,n,a){var s=a(1)(a(263),a(362),null,null,null);e.exports=s.exports},263:function(e,n,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var t=a(137),o=s(t),r=a(139),i=s(r),l=a(138),c=s(l);a(325),n.default={components:{Container:o.default,PageHeader:i.default,PageFooter:c.default},data:function(){return{visible:!0}},methods:{handleClick:function(e){alert("click this message!")}}}},310:function(e,n,a){n=e.exports=a(201)(!0),n.push([e.i,".message-page .za-panel-body{padding:15px}.message-page .za-message{margin-bottom:15px}.message-page .za-message:last-of-type{margin-bottom:0}","",{version:3,sources:["/Users/yezhanwang/Documents/githubRep/zarm-vue/example/styles/pages/MessagePage.scss","/Users/yezhanwang/Documents/githubRep/zarm-vue/example/styles/core/func.scss"],names:[],mappings:"AAEA,6BAEI,YCHe,CDIhB,AAHH,0BAMI,kBCPe,CDYhB,AAXH,uCASM,eAAgB,CACjB",file:"MessagePage.scss",sourcesContent:['@import "../core/func";\n\n.message-page {\n  .za-panel-body {\n    padding: r(15);\n  }\n\n  .za-message {\n    margin-bottom: r(15);\n\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},325:function(e,n,a){var s=a(310);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(202)("0a0e4500",s,!0,{})},362:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("Container",{staticClass:"message-page"},[a("PageHeader",{attrs:{title:"消息 Message"}}),e._v(" "),a("main",[a("div",[a("za-panel",[a("za-panel-header",{attrs:{title:"基本"}}),e._v(" "),a("za-panel-body",[a("za-message",[e._v("primary")]),e._v(" "),a("za-message",{attrs:{theme:"info"}},[a("za-icon",{staticClass:"icon",attrs:{slot:"icon",type:"info-round"},slot:"icon"}),e._v(" "),a("span",[e._v("info")])],1),e._v(" "),a("za-message",{attrs:{theme:"success",icon:"right-round"}},[a("span",[e._v("success")])]),e._v(" "),a("za-message",{attrs:{theme:"warning"}},[a("za-icon",{staticClass:"icon",attrs:{slot:"icon",type:"info-round"},slot:"icon"}),e._v(" "),a("span",[e._v("warning")])],1),e._v(" "),a("za-message",{attrs:{theme:"error"}},[a("za-icon",{staticClass:"icon",attrs:{slot:"icon",type:"wrong-round"},slot:"icon"}),e._v(" "),a("span",[e._v("error")])],1)],1)],1),e._v(" "),a("za-panel",[a("za-panel-header",{attrs:{title:"可操作"}}),e._v(" "),a("za-panel-body",[a("za-message",{attrs:{theme:"warning",hasArrow:""},on:{click:e.handleClick}},[e._v("链接样式的")]),e._v(" "),a("za-message",{attrs:{theme:"error",closable:"",visible:e.visible},on:{"update:visible":function(n){e.visible=n}}},[e._v("链接样式的")])],1)],1)],1)]),e._v(" "),a("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=16.9068daf327a4fbb88e17.js.map