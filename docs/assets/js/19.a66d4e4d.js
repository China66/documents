(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{239:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return b}));n(89);const r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,o=/^[a-z]+:/i;function u(t){return decodeURI(t).replace(r,"").replace(i,"")}function a(t){return o.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(a(t))return t;const e=t.match(r),n=e?e[0]:"",i=u(t);return s.test(i)?t:i+".html"+n}function h(t,e){const n=decodeURIComponent(t.hash),i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return u(t.path)===u(e)}function p(t,e,n){if(a(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=u(e);for(let e=0;e<t.length;e++)if(u(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:s}=n,o=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const u=o.sidebar||s.sidebar;if(u){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,u);return n?n.map(e=>function t(e,n,r,i=1){if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(e,i,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},241:function(t,e,n){"use strict";n.r(e);var r=n(239),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(r.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction(){this.$emit("focusout")}}},s=n(14),o=Object(s.a)(i,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=o.exports}}]);