webpackJsonp([2],{223:function(e,n,t){var i=t(1)(t(275),t(348),null,null,null);e.exports=i.exports},275:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t(137),s=i(a),r=t(139),o=i(r),p=t(138),l=i(p);t(333);var c=[{url:"#",img:t(342)},{url:"#",img:t(343)},{url:"#",img:t(344)}];n.default={components:{Container:s.default,PageHeader:o.default,PageFooter:l.default},data:function(){return{ITEMS:c}},methods:{handleChangeStart:function(e){},handleChangeEnd:function(e){},onJumpTo:function(){this.$refs.swipe.onJumpTo(0)},onSlideTo:function(){this.$refs.swipe.onSlideTo(2)}}}},318:function(e,n,t){n=e.exports=t(201)(!0),n.push([e.i,".swipe-page .swipe-item{width:100vw;height:48vw}.swipe-page .swipe-item-pic img{width:100%;height:auto}.swipe-page .swipe-item-pic .test{width:100%;height:100%}.swipe-page .controls{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 15px}.swipe-page .controls .za-button{margin-right:10px}.swipe-page .controls .za-button:last-of-type{margin-right:0}","",{version:3,sources:["/Users/yezhanwang/Documents/githubRep/zarm-vue/example/styles/pages/SwipePage.scss","/Users/yezhanwang/Documents/githubRep/zarm-vue/example/styles/core/func.scss"],names:[],mappings:"AAEA,wBAEI,YAAY,AACZ,WAAY,CAYb,AAfH,gCAOQ,WAAW,AACX,WAAY,CACb,AATP,kCAWQ,WAAW,AACX,WAAY,CACb,AAbP,sBAkBI,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,iBCpBe,CD6BhB,AA5BH,iCAsBM,iBCvBa,CD4Bd,AA3BL,8CAyBQ,cAAe,CAChB",file:"SwipePage.scss",sourcesContent:['@import "../core/func";\n\n.swipe-page {\n  .swipe-item {\n    width: 100vw;\n    height: 48vw;\n\n    &-pic {\n      img {\n        width: 100%;\n        height: auto;\n      }\n      .test {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n\n  .controls {\n    display: flex;\n    padding: r(10) r(15);\n\n    .za-button {\n      margin-right: r(10);\n\n      &:last-of-type {\n        margin-right: 0;\n      }\n    }\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},333:function(e,n,t){var i=t(318);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(202)("3b8d235a",i,!0,{})},342:function(e,n,t){e.exports=t.p+"static/img/1.a365199.png"},343:function(e,n,t){e.exports=t.p+"static/img/2.97af865.png"},344:function(e,n,t){e.exports=t.p+"static/img/3.cbbc9ab.png"},348:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Container",{staticClass:"swipe-page"},[t("PageHeader",{attrs:{title:"图片轮播 swipe"}}),e._v(" "),t("main",[t("div",[t("za-panel",[t("za-panel-header",{attrs:{title:"基本"}}),e._v(" "),t("za-panel-body",[t("za-swipe",{attrs:{direction:"left"},on:{changeStart:e.handleChangeStart,changeEnd:e.handleChangeEnd}},e._l(e.ITEMS,function(e,n){return t("za-swipe-item",{key:"index"},[t("div",{staticClass:"swipe-item-pic"},[t("img",{attrs:{src:e.img,alt:""}})])])}))],1)],1),e._v(" "),t("za-panel",[t("za-panel-header",{attrs:{title:"纵向"}}),e._v(" "),t("za-panel-body",[t("za-swipe",{attrs:{direction:"bottom"},on:{changeStart:e.handleChangeStart,changeEnd:e.handleChangeEnd}},e._l(e.ITEMS,function(e,n){return t("za-swipe-item",{key:"index"},[t("div",{staticClass:"swipe-item-pic"},[t("img",{attrs:{src:e.img,alt:""}})])])}))],1)],1),e._v(" "),t("za-panel",[t("za-panel-header",{attrs:{title:"循环轮播"}}),e._v(" "),t("za-panel-body",[t("za-swipe",{ref:"swipe",attrs:{direction:"left",loop:""},on:{changeStart:e.handleChangeStart,changeEnd:e.handleChangeEnd}},e._l(e.ITEMS,function(e,n){return t("za-swipe-item",{key:"index"},[t("div",{staticClass:"swipe-item-pic"},[t("img",{attrs:{src:e.img,alt:""}})])])})),e._v(" "),t("div",{staticClass:"controls"},[t("za-button",{attrs:{block:"",size:"sm"},on:{click:e.onJumpTo}},[e._v("无动画切换指定页")]),e._v(" "),t("za-button",{attrs:{block:"",size:"sm"},on:{click:e.onSlideTo}},[e._v("滑动到指定页")])],1)],1)],1),e._v(" "),t("za-panel",[t("za-panel-header",{attrs:{title:"自动循环轮播"}}),e._v(" "),t("za-panel-body",[t("za-swipe",{attrs:{direction:"left",loop:"",autoPlay:""}},e._l(e.ITEMS,function(e,n){return t("za-swipe-item",{key:"index"},[t("div",{staticClass:"swipe-item-pic"},[t("img",{attrs:{src:e.img,alt:""}})])])}))],1)],1)],1)]),e._v(" "),t("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=2.24d490a612a786bfe9d0.js.map