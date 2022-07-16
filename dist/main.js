(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),a=n.n(o),r=n(645),c=n.n(r),d=n(667),i=n.n(d),s=new URL(n(549),n.b),p=c()(a()),l=i()(s);p.push([e.id,'@font-face{font-family:"Alma";src:url('+l+')}*{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;padding:0;margin:0}.body h1,.body .top-row h3,.body .middle-row h3,.body .end-row h3,.header .title h1{font-family:"Alma","Courier New",Courier,monospace}body{padding:0;margin:0;background-color:azure}#content{display:flex;flex-direction:column}.header{display:grid;background-color:#14181a;height:10vh;color:#fff;grid-template-columns:1fr 4fr;padding:0 2.5vw}.header .title{font-size:4rem;align-self:center;justify-self:flex-start;display:flex}.header .title img{max-width:5vmin;max-height:5vmin}.header .title h1{font-size:clamp(5px,10px + 2rem,4rem)}.header .navigation{align-self:center;justify-content:flex-end;display:flex;gap:10px}.header .navigation button{background-color:rgba(0,0,0,0);border:rgba(0,0,0,0);color:#fff;font-size:calc(5px + 1rem);padding:10px;border-radius:10px}.header .navigation button:hover,.header .navigation button:focus{box-shadow:0px 0px 5px #c4bdbd;background-color:#212121}.header .navigation button:focus{font-weight:bold}.header .navigation .clicked-button{font-weight:bold;background-color:#212121;box-shadow:0px 0px 5px #c4bdbd}.body{height:90vh;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.body img{height:25vh}.body .top-row,.body .middle-row,.body .end-row{display:flex;flex-direction:column;background:#323232;color:#fff;width:clamp(200px,60vw,600px);padding:calc(1.5% + 10px);border-radius:30px;box-shadow:0 0 5px #161a1e}.body .top-row h3,.body .middle-row h3,.body .end-row h3{text-align:start;font-size:2rem;font-style:italic}.body .top-row p,.body .middle-row p,.body .end-row p{font-size:clamp(10px,5px + .6rem,2rem)}.body .middle-row{display:grid;grid-template-areas:"title title title title" "first second second second";align-content:start}.body .middle-row h3{grid-area:title}.body .middle-row .first-half{grid-area:first;height:100%;justify-self:start}.body .middle-row .second-half{grid-area:second;height:100%;justify-self:center}.body .actual-menu{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(3, 1fr);justify-content:space-evenly;gap:1vmin}.body .actual-menu p{text-align:start;font-weight:bold}.body .actual-menu img{max-width:fit-content}',""]);const u=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(c[i]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);o&&c[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},c=[],d=0;d<e.length;d++){var i=e[d],s=o.base?i[0]+o.base:i[0],p=r[s]||0,l="".concat(s," ").concat(p);r[s]=p+1;var u=n(l),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var b=a(m,o);o.byIndex=d,t.splice(d,0,{identifier:l,updater:b,references:1})}c.push(l)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var d=n(r[c]);t[d].references--}for(var i=o(e,a),s=0;s<r.length;s++){var p=n(r[s]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}r=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},549:(e,t,n)=>{e.exports=n.p+"940a37967490c8ed8525.otf"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),r=n(569),c=n.n(r),d=n(565),i=n.n(d),s=n(216),p=n.n(s),l=n(589),u=n.n(l),m=n(192),b={};b.styleTagTransform=u(),b.setAttributes=i(),b.insert=c().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),t()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals;const h=n.p+"82d4cfa730f451099dce.jpg",f=n.p+"71d8e4ac454123f2de70.jpg",g=n.p+"926a90b635db507a449c.jpg",y=n.p+"422051a84cda2e0f23fa.jpg",v=n.p+"a3b18c6867fe68753015.jpg",x=n.p+"64cebddb341a0a07b1fc.jpg",C=(e,t)=>{const n=document.createElement("div");n.className="menu-item";const o=document.createElement("img"),a=document.createElement("p");return o.src=e,a.textContent=t,n.appendChild(o),n.appendChild(a),n},w=n.p+"b9f888c384f63e9f26fe.jpg",E=()=>{const e=document.createDocumentFragment(),t=document.createElement("div");t.className="body",console.log(e);const n=document.createElement("div");n.className="top-image";const o=document.createElement("img");o.src=w,n.appendChild(o);const a=document.createElement("div");a.className="top-row";const r=document.createElement("h3");r.textContent="Review";const c=document.createElement("p");c.textContent=" Every time I want food, I think of Spicee. One day, I was going\n  to the mall and thought \"man, it would be great if there was a Spicee\n  here\". So I left and went to Spicee instead. It's gotten to the point\n  where I have my own card just for Spicee and I can't go two days\n  without having Spicee. So yes, I would recommend it!",a.appendChild(r),a.appendChild(c);const d=document.createElement("div");d.className="middle-row";const i=document.createElement("h3");i.textContent="Hours";const s=document.createElement("div");s.className="first-half",s.innerHTML="<p><b>Saturday:</b>&nbsp;&nbsp;&nbsp;12pm-3pm</p>\n  <p><b>Sunday:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9am-12am</p>\n  <p><b>Monday:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9am-9pm</p>\n  <p><b>Tuesday:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9am-9pm</p>";const p=document.createElement("div");p.className="second-half",p.innerHTML="<p><b>Wednesday:</b> &nbsp;&nbsp;&nbsp;12pm-3pm</p>\n  <p><b>Thursday:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9am-9pm</p>\n  <p><b>Friday:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8am-12am</p>",d.appendChild(i),d.appendChild(s),d.appendChild(p);const l=document.createElement("div");l.className="end-row";const u=document.createElement("h3");u.textContent="Location";const m=document.createElement("p");return m.textContent="234 Argonaut Drive, Santa Barbara, California",l.appendChild(u),l.appendChild(m),t.appendChild(n),t.appendChild(a),t.appendChild(d),t.appendChild(l),e.appendChild(t),e.cloneNode(!0)},S=n.p+"0de1f64eef78985660bb.svg",N=(e,t)=>{const n=document.createElement("div"),o=document.createElement("h1"),a=document.createElement("p");return o.textContent=e,a.textContent=t,n.appendChild(o),n.appendChild(a),n};(()=>{const e=document.getElementById("content"),t=(()=>{console.log("header");const e=document.createDocumentFragment(),t=document.createElement("div");t.className="header";const n=document.createElement("div");n.className="title";const o=document.createElement("img");o.src=S;const a=document.createElement("h1");a.innerText="Spicee",n.appendChild(o),n.appendChild(a);const r=document.createElement("div");r.className="navigation";const c=document.createElement("button");c.className="clicked-button",c.id="home-button",c.textContent="Home";const d=document.createElement("button");d.id="menu-button",d.textContent="Menu";const i=document.createElement("button");return i.textContent="About",i.id="contact-button",r.appendChild(c),r.appendChild(d),r.appendChild(i),t.appendChild(n),t.appendChild(r),e.appendChild(t),e.cloneNode(!0)})();let n=E();const o="clicked-button";let a="home-button";t.querySelectorAll("button").forEach((t=>t.addEventListener("click",(t=>{t.target.classList.add(o),document.getElementById(a).classList.remove(o),a=t.target.id,"home-button"===a?(n=E(),console.log(n)):n="menu-button"===a?(()=>{console.log("menu");const e=document.createDocumentFragment(),t=document.createElement("div");t.className="body";const n=document.createElement("h1");n.textContent="Spicee Menu";const o=document.createElement("div");o.className="actual-menu";const a=C(h,"Shrimp Dish");o.appendChild(a);const r=C(f,"Tikka Dish");o.appendChild(r);const c=C(g,"French Fries");o.appendChild(c);const d=C(y,"Spicee Tomato");o.appendChild(d);const i=C(v,"Spicee Curry");o.appendChild(i);const s=C(x,"Spicee Potato");return o.appendChild(s),t.appendChild(n),t.appendChild(o),e.appendChild(t),e.cloneNode(!0)})():(()=>{console.log("about");const e=document.createDocumentFragment(),t=document.createElement("div");t.className="body";const n=N("Billiam Jonas","+1 (123) - 445 - 9283");t.appendChild(n);const o=N("Jonas Doe","+1 (123) - 445 - 9281");return t.appendChild(o),e.appendChild(t),e.cloneNode(!0)})();const r=document.querySelector(".body");e.removeChild(r),e.append(n)})))),e.append(n),e.prepend(t)})()})()})();