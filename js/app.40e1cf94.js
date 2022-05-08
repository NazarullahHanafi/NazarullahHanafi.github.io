(function(){"use strict";var n={8371:function(n,e,a){var t=a(9242),r=a(3396);const o={class:"wrapper"},i={class:"sidebar","data-color":"black","data-active-color":"danger"},l=(0,r.uE)('<div class="logo"><a class="simple-text logo-mini"><div class="logo-image-small"><img src="assets/img/logo-small.png"></div></a><a class="simple-text logo-normal" style="color:aquamarine;"> Nazarullah </a></div>',1),s={class:"main-panel"};function c(n,e,a,t,c,u){const d=(0,r.up)("SideView"),f=(0,r.up)("NavView"),p=(0,r.up)("router-view"),v=(0,r.up)("TableVie"),b=(0,r.up)("FooterView");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",i,[l,(0,r.Wm)(d)]),(0,r._)("div",s,[(0,r.Wm)(f),(0,r.Wm)(p),(0,r.Wm)(v),(0,r.Wm)(b)])])}const u={class:"footer footer-black footer-white"},d=(0,r.uE)('<div class="container-fluid"><div class="row"><nav class="footer-nav"></nav><div class="credits ml-auto"><span class="copyright"> made with by Nazarullah </span></div></div></div>',1),f=[d];function p(n,e){return(0,r.wg)(),(0,r.iD)("footer",u,f)}var v=a(89);const b={},m=(0,v.Z)(b,[["render",p]]);var g=m;const h={class:"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent"},w=(0,r.uE)('<div class="container-fluid"><div class="navbar-wrapper"><div class="navbar-toggle"><button type="button" class="navbar-toggler"><span class="navbar-toggler-bar bar1"></span><span class="navbar-toggler-bar bar2"></span><span class="navbar-toggler-bar bar3"></span></button></div><a class="navbar-brand" href="javascript:;">Al-Quran</a></div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-bar navbar-kebab"></span><span class="navbar-toggler-bar navbar-kebab"></span><span class="navbar-toggler-bar navbar-kebab"></span></button></div>',1),y=[w];function _(n,e){return(0,r.wg)(),(0,r.iD)("nav",h,y)}const k={},A=(0,v.Z)(k,[["render",_]]);var O=A;const P={class:"sidebar-wrapper"},V={class:"nav",id:"nav"},E=(0,r._)("i",{class:"nc-icon nc-bank"},null,-1),j=(0,r._)("p",{style:{color:"aqua"}},"An-Naba",-1),C=(0,r._)("i",{class:"nc-icon nc-pin-3"},null,-1),N=(0,r._)("p",{style:{color:"aqua"}},"An-Nash",-1),S=(0,r._)("i",{class:"nc-icon nc-single-02"},null,-1),T=(0,r._)("p",{style:{color:"aqua"}},"Al-Bayyinah",-1),W=(0,r._)("i",{class:"nc-icon nc-tile-56"},null,-1),x=(0,r._)("p",{style:{color:"aqua"}},"Ayat Kursi",-1),q=(0,r._)("i",{class:"nc-icon nc-caps-small"},null,-1),D=(0,r._)("p",{style:{color:"aqua"}},"Daftar Surah",-1),F=(0,r._)("i",{class:"nc-icon nc-diamond"},null,-1),L=(0,r._)("p",{style:{color:"aqua"}},"Al-Fatihah",-1),M=(0,r._)("i",{class:"nc-icon nc-bell-55"},null,-1),Z=(0,r._)("p",{style:{color:"aqua"}},"Ar-Rum",-1);function B(n,e){const a=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("ul",V,[(0,r._)("li",null,[(0,r.Wm)(a,{to:"/dash"},{default:(0,r.w5)((()=>[E,j])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(a,{to:"/map"},{default:(0,r.w5)((()=>[C,N])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(a,{to:"/user"},{default:(0,r.w5)((()=>[S,T])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(a,{to:"/me"},{default:(0,r.w5)((()=>[W,x])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(a,{to:"/forto"},{default:(0,r.w5)((()=>[q,D])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(a,{to:"/hobi"},{default:(0,r.w5)((()=>[F,L])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(a,{to:"/icon"},{default:(0,r.w5)((()=>[M,Z])),_:1})])])])}const I={},z=(0,v.Z)(I,[["render",B]]);var H=z,K={name:"App",components:{FooterView:g,NavView:O,SideView:H}};const U=(0,v.Z)(K,[["render",c]]);var Q=U,R=a(678);function G(n,e){return(0,r.wg)(),(0,r.iD)("div")}const J={},X=(0,v.Z)(J,[["render",G]]);var Y=X;const $=[{path:"/",name:"TableVie",component:Y},{path:"/user",name:"UserView",component:()=>Promise.all([a.e(265),a.e(183)]).then(a.bind(a,8183))},{path:"/map",name:"MapView",component:()=>Promise.all([a.e(265),a.e(77)]).then(a.bind(a,449))},{path:"/icon",name:"IconView",component:()=>Promise.all([a.e(265),a.e(685)]).then(a.bind(a,8685))},{path:"/dash",name:"DashView",component:()=>Promise.all([a.e(265),a.e(38)]).then(a.bind(a,38))},{path:"/forto",name:"FortoVIew",component:()=>Promise.all([a.e(265),a.e(561)]).then(a.bind(a,1561))},{path:"/me",name:"MeView",component:()=>Promise.all([a.e(265),a.e(133)]).then(a.bind(a,3133))},{path:"/hobi",name:"HobiView",component:()=>Promise.all([a.e(265),a.e(153)]).then(a.bind(a,4153))}],nn=(0,R.p7)({history:(0,R.PO)("/"),routes:$});var en=nn;(0,t.ri)(Q).use(en).mount("#app")}},e={};function a(t){var r=e[t];if(void 0!==r)return r.exports;var o=e[t]={exports:{}};return n[t](o,o.exports,a),o.exports}a.m=n,function(){var n=[];a.O=function(e,t,r,o){if(!t){var i=1/0;for(u=0;u<n.length;u++){t=n[u][0],r=n[u][1],o=n[u][2];for(var l=!0,s=0;s<t.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((function(n){return a.O[n](t[s])}))?t.splice(s--,1):(l=!1,o<i&&(i=o));if(l){n.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=n.length;u>0&&n[u-1][2]>o;u--)n[u]=n[u-1];n[u]=[t,r,o]}}(),function(){a.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(e,{a:e}),e}}(),function(){a.d=function(n,e){for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){a.f={},a.e=function(n){return Promise.all(Object.keys(a.f).reduce((function(e,t){return a.f[t](n,e),e}),[]))}}(),function(){a.u=function(n){return"js/"+n+"."+{38:"9a6c8129",77:"f8fb0be8",133:"5f8ad015",153:"70634a6c",183:"2682b23e",265:"c7461cd5",561:"67d96ba7",685:"e587129c"}[n]+".js"}}(),function(){a.miniCssF=function(n){return"css/"+n+"."+{38:"4b1e8a01",77:"314695b0",133:"6ad7e2c3",153:"f905e545",183:"2ee0c5f8",561:"52bad59a",685:"807325da"}[n]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="ku:";a.l=function(t,r,o,i){if(n[t])n[t].push(r);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==e+o){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",e+o),l.src=t),n[t]=[r];var f=function(e,a){l.onerror=l.onload=null,clearTimeout(p);var r=n[t];if(delete n[t],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(n){return n(a)})),e)return e(a)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){a.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var n=function(n,e,a,t){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)a();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||e,s=new Error("Loading CSS chunk "+n+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,r.parentNode.removeChild(r),t(s)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(n,e){for(var a=document.getElementsByTagName("link"),t=0;t<a.length;t++){var r=a[t],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===n||o===e))return r}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){r=i[t],o=r.getAttribute("data-href");if(o===n||o===e)return r}},t=function(t){return new Promise((function(r,o){var i=a.miniCssF(t),l=a.p+i;if(e(i,l))return r();n(t,l,r,o)}))},r={143:0};a.f.miniCss=function(n,e){var a={38:1,77:1,133:1,153:1,183:1,561:1,685:1};r[n]?e.push(r[n]):0!==r[n]&&a[n]&&e.push(r[n]=t(n).then((function(){r[n]=0}),(function(e){throw delete r[n],e})))}}(),function(){var n={143:0};a.f.j=function(e,t){var r=a.o(n,e)?n[e]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(a,t){r=n[e]=[a,t]}));t.push(r[2]=o);var i=a.p+a.u(e),l=new Error,s=function(t){if(a.o(n,e)&&(r=n[e],0!==r&&(n[e]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,r[1](l)}};a.l(i,s,"chunk-"+e,e)}},a.O.j=function(e){return 0===n[e]};var e=function(e,t){var r,o,i=t[0],l=t[1],s=t[2],c=0;if(i.some((function(e){return 0!==n[e]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var u=s(a)}for(e&&e(t);c<i.length;c++)o=i[c],a.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return a.O(u)},t=self["webpackChunkku"]=self["webpackChunkku"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=a.O(void 0,[998],(function(){return a(8371)}));t=a.O(t)})();
//# sourceMappingURL=app.40e1cf94.js.map