webpackJsonp([12],{217:function(e,n,t){var r=t(1)(t(269),t(347),null,null,null);e.exports=r.exports},269:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t(137),s=r(a),o=t(139),l=r(o),p=t(138),i=r(p);t(328),n.default={components:{Container:s.default,PageHeader:l.default,PageFooter:i.default},data:function(){return{percent:10,theme:"primary",dataSource:[{value:"default",label:"default"},{value:"primary",label:"primary"},{value:"info",label:"info"},{value:"warning",label:"warning"},{value:"error",label:"error"}]}},methods:{handleStepChange:function(e){},handleOk:function(e){this.theme=e.value}}}},313:function(e,n,t){n=e.exports=t(201)(!0),n.push([e.i,".progress-page .progress{margin:15px;text-align:center}.progress-page .progress-percent{font-size:14px}","",{version:3,sources:["/Users/yezhanwang/Documents/githubRep/zarm-vue/example/styles/pages/ProgressPage.scss","/Users/yezhanwang/Documents/githubRep/zarm-vue/example/styles/core/func.scss"],names:[],mappings:"AAEA,yBAEI,YCHe,ADIf,iBAAkB,CAKnB,AARH,iCAMM,cCPa,CDQd",file:"ProgressPage.scss",sourcesContent:['@import "../core/func";\n\n.progress-page {\n  .progress {\n    margin: r(15);\n    text-align: center;\n\n    &-percent {\n      font-size: r(14);\n    }\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},328:function(e,n,t){var r=t(313);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(202)("964c5b24",r,!0,{})},347:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Container",{staticClass:"progress-page"},[t("PageHeader",{attrs:{title:"进度条 Progress"}}),e._v(" "),t("main",[t("div",{staticClass:"progress"},[t("za-progress",{attrs:{percent:e.percent,theme:e.theme}},[e._v("\n        "+e._s(e.percent+"%")+"\n      ")])],1),e._v(" "),t("div",{staticClass:"progress"},[t("za-progress",{attrs:{type:"circle",percent:e.percent,theme:e.theme}},[t("div",{staticClass:"progress-content"},[t("span",{staticClass:"progress-text"},[e._v(e._s(e.percent))]),e._v(" "),t("span",{staticClass:"progress-percent"},[e._v("%")])])])],1),e._v(" "),t("za-panel",[t("za-panel-header",{attrs:{title:"基本"}}),e._v(" "),t("za-panel-body",[t("za-cell",{attrs:{title:"进度"}},[t("za-stepper",{attrs:{shape:"radius",step:10,min:0,max:100},on:{"step-change":e.handleStepChange},model:{value:e.percent,callback:function(n){e.percent=n},expression:"percent"}})],1),e._v(" "),t("za-cell",{attrs:{title:"主题"}},[t("za-picker",{attrs:{defaultValue:e.theme,dataSource:e.dataSource},on:{ok:e.handleOk}})],1)],1)],1)],1),e._v(" "),t("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=12.18332b3b89090fbcfbea.js.map