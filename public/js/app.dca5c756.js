(function(e){function t(t){for(var n,c,s=t[0],u=t[1],i=t[2],l=0,f=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var p=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("PostComponent",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Latest Post")]),r("div",{staticClass:"create-post"},[r("label",{attrs:{for:"create-post"}},[e._v("Say Something...")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"create a post"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),r("button",{on:{click:e.createPost}},[e._v("Post!")])]),r("hr"),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),r("div",{staticClass:"post-container"},e._l(e.posts,(function(t,n){return r("div",{key:t._id,staticClass:"post",attrs:{item:t,index:n},on:{dblclick:function(r){return e.deletePost(t._id)}}},[e._v(" "+e._s(t.createdAt.getDate()+"/"+t.createdAt.getMonth()+"/"+t.createdAt.getFullYear()+" ")+" "),r("p",{staticClass:"text"},[e._v(e._s(t.text))])])})),0)])},s=[],u=(r("96cf"),r("1da1")),i=(r("a4d3"),r("4de4"),r("4160"),r("d81d"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("ade3")),p=r("d4ec"),l=r("bee2"),f=r("bc3a"),d=r.n(f);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g="api/posts/",m=function(){function e(){Object(p["a"])(this,e)}return Object(l["a"])(e,null,[{key:"getPosts",value:function(){return new Promise(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get(g);case 3:n=e.sent,o=n.data,t(o.map((function(e){return b({},e,{createdAt:new Date(e.createdAt)})}))),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),r(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}())}},{key:"insertPost",value:function(e){return d.a.post(g,{text:e})}},{key:"deletePost",value:function(e){return d.a.delete("".concat(g).concat(e))}}]),e}(),h=m,O={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.getPosts();case 3:e.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{createPost:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.insertPost(e.text);case 2:return t.next=4,h.getPosts();case 4:e.posts=t.sent;case 5:case"end":return t.stop()}}),t)})))()},deletePost:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,h.deletePost(e);case 2:return r.next=4,h.getPosts();case 4:t.posts=r.sent;case 5:case"end":return r.stop()}}),r)})))()}}},y=O,P=(r("6436"),r("2877")),x=Object(P["a"])(y,c,s,!1,null,"5da13dfa",null),w=x.exports,j={name:"app",components:{PostComponent:w}},_=j,k=(r("034f"),Object(P["a"])(_,o,a,!1,null,null,null)),C=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(C)}}).$mount("#app")},6436:function(e,t,r){"use strict";var n=r("fe79"),o=r.n(n);o.a},"85ec":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},fe79:function(e,t,r){}});
//# sourceMappingURL=app.dca5c756.js.map