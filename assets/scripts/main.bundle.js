!function(t){function n(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var i={};n.m=t,n.c=i,n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,i){"use strict";i(1);var e=i(3);window.addEventListener("load",function(){(0,e.checkExternalLinks)(document),(0,e.startProgressBar)(document)},!1)},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(2),o=function(t){return t&&t.__esModule?t:{default:t}}(e);o.default.load({google:{families:["Source Serif Pro","Fira Mono"]},custom:{families:["Sofia Pro:n3,n4,n6,n9,i3,i4,i6,i9"],urls:["/assets/styles/fonts.css"]},active:function(){sessionStorage.fonts=!0},timeout:1e3}),n.default=o.default},function(t,n,i){var e;!function(){function o(t,n,i){return t.call.apply(t.bind,arguments)}function s(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function a(t,n,i){return a=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:s,a.apply(null,arguments)}function r(t,n){this.a=t,this.o=n||t,this.c=this.o.document}function c(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function f(t,n,i){t=t.c.getElementsByTagName(n)[0],t||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var s=!1,a=0;a<e.length;a+=1)if(n[o]===e[a]){s=!0;break}s||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(s=!1,a=0;a<i.length;a+=1)if(e[o]===i[a]){s=!0;break}s||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function u(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function p(t){return t.o.location.hostname||t.a.location.hostname}function d(t,n,i){function e(){r&&o&&s&&(r(a),r=null)}n=c(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,s=!0,a=null,r=i||null;st?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,a=Error("Stylesheet failed to load"),e()}):setTimeout(function(){o=!0,e()},0),f(t,"head",n)}function g(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var s=c(t,"script",{src:n}),a=!1;return s.onload=s.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,i&&i(null),s.onload=s.onreadystatechange=null,"HEAD"==s.parentNode.tagName&&o.removeChild(s))},o.appendChild(s),setTimeout(function(){a||(a=!0,i&&i(Error("Script load timeout")))},e||5e3),s}return null}function v(){this.a=0,this.c=null}function m(t){return t.a++,function(){t.a--,y(t)}}function w(t,n){t.c=n,y(t)}function y(t){0==t.a&&t.c&&(t.c(),t.c=null)}function b(t){this.a=t||"-"}function _(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function x(t){return S(t)+" "+t.f+"00 300px "+j(t.c)}function j(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function k(t){return t.a+t.f}function S(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function T(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function E(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new b("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function P(t){t.g&&h(t.f,[t.a.c("wf","loading")]),C(t,"loading")}function A(t){if(t.g){var n=u(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),h(t.f,i,e)}C(t,"inactive")}function C(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,k(i)):t.h[n]())}function N(){this.c={}}function O(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var s=t.c[e];s&&o.push(s(n[e],i))}return o}function B(t,n){this.c=t,this.f=n,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function I(t){f(t.c,"body",t.a)}function L(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(t.c)+";font-style:"+S(t)+";font-weight:"+t.f+"00;"}function F(t,n,i,e,o,s){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=s||void 0}function W(t,n,i,e,o,s,a){this.v=t,this.B=n,this.c=i,this.a=e,this.s=a||"BESbswy",this.f={},this.w=o||3e3,this.u=s||null,this.m=this.j=this.h=this.g=null,this.g=new B(this.c,this.s),this.h=new B(this.c,this.s),this.j=new B(this.c,this.s),this.m=new B(this.c,this.s),t=new _(this.a.c+",serif",k(this.a)),t=L(t),this.g.a.style.cssText=t,t=new _(this.a.c+",sans-serif",k(this.a)),t=L(t),this.h.a.style.cssText=t,t=new _("serif",k(this.a)),t=L(t),this.j.a.style.cssText=t,t=new _("sans-serif",k(this.a)),t=L(t),this.m.a.style.cssText=t,I(this.g),I(this.h),I(this.j),I(this.m)}function M(){if(null===rt){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);rt=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return rt}function q(t,n,i){for(var e in at)if(at.hasOwnProperty(e)&&n===t.f[at[e]]&&i===t.f[at[e]])return!0;return!1}function D(t){var n,i=t.g.a.offsetWidth,e=t.h.a.offsetWidth;(n=i===t.f.serif&&e===t.f["sans-serif"])||(n=M()&&q(t,i,e)),n?ot()-t.A>=t.w?M()&&q(t,i,e)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?$(t,t.v):$(t,t.B):H(t):$(t,t.v)}function H(t){setTimeout(a(function(){D(this)},t),50)}function $(t,n){setTimeout(a(function(){l(this.g.a),l(this.h.a),l(this.j.a),l(this.m.a),n(this.a)},t),0)}function z(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}function G(t){0==--t.f&&t.j&&(t.m?(t=t.a,t.g&&h(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),C(t,"active")):A(t.a))}function K(t){this.j=t,this.a=new N,this.h=0,this.f=this.g=!0}function R(t,n,i,e,o){var s=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=o||null,r=e||null||{};if(0===i.length&&s)A(n.a);else{n.f+=i.length,s&&(n.j=s);var c,f=[];for(c=0;c<i.length;c++){var l=i[c],u=r[l.c],p=n.a,d=l;if(p.g&&h(p.f,[p.a.c("wf",d.c,k(d).toString(),"loading")]),C(p,"fontloading",d),p=null,null===ct)if(window.FontFace){var d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);ct=d?42<parseInt(d[1],10):!g}else ct=!1;p=ct?new F(a(n.g,n),a(n.h,n),n.c,l,n.s,u):new W(a(n.g,n),a(n.h,n),n.c,l,n.s,t,u),f.push(p)}for(c=0;c<f.length;c++)f[c].start()}},0)}function U(t,n,i){var e=[],o=i.timeout;P(n);var e=O(t.a,i,t.c),s=new z(t.c,n,o);for(t.h=e.length,n=0,i=e.length;n<i;n++)e[n].load(function(n,i,e){R(t,s,n,i,e)})}function V(t,n){this.c=t,this.a=n}function X(t,n){this.c=t,this.a=n}function J(t,n){this.c=t||ft,this.a=[],this.f=[],this.g=n||""}function Q(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var s="";2==o.length&&""!=o[1]&&(s=":"),t.a.push(o.join(s))}}function Y(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}function Z(t){this.f=t,this.a=[],this.c={}}function tt(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),s=["n4"];if(2<=e.length){var a,r=e[1];if(a=[],r)for(var r=r.split(","),c=r.length,f=0;f<c;f++){var l;if(l=r[f],l.match(/^[\w-]+$/)){var h=pt.exec(l.toLowerCase());if(null==h)l="";else{if(l=h[2],l=null==l||""==l?"n":ut[l],null==(h=h[1])||""==h)h="4";else var u=ht[h],h=u||(isNaN(h)?"4":h.substr(0,1));l=[l,h].join("")}}else l="";l&&a.push(l)}0<a.length&&(s=a),3==e.length&&(e=e[2],a=[],e=e?e.split(","):a,0<e.length&&(e=lt[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=lt[o])&&(t.c[o]=e),e=0;e<s.length;e+=1)t.a.push(new _(o,s[e]))}}function nt(t,n){this.c=t,this.a=n}function it(t,n){this.c=t,this.a=n}function et(t,n){this.c=t,this.f=n,this.a=[]}var ot=Date.now||function(){return+new Date},st=!!window.FontFace;b.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},F.prototype.start=function(){var t=this.c.o.document,n=this,i=ot(),e=new Promise(function(e,o){function s(){ot()-i>=n.f?o():t.fonts.load(x(n.a),n.h).then(function(t){1<=t.length?e():setTimeout(s,25)},function(){o()})}s()}),o=null,s=new Promise(function(t,i){o=setTimeout(i,n.f)});Promise.race([s,e]).then(function(){o&&(clearTimeout(o),o=null),n.g(n.a)},function(){n.j(n.a)})};var at={D:"serif",C:"sans-serif"},rt=null;W.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=ot(),D(this)};var ct=null;z.prototype.g=function(t){var n=this.a;n.g&&h(n.f,[n.a.c("wf",t.c,k(t).toString(),"active")],[n.a.c("wf",t.c,k(t).toString(),"loading"),n.a.c("wf",t.c,k(t).toString(),"inactive")]),C(n,"fontactive",t),this.m=!0,G(this)},z.prototype.h=function(t){var n=this.a;if(n.g){var i=u(n.f,n.a.c("wf",t.c,k(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,k(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,k(t).toString(),"inactive")),h(n.f,e,o)}C(n,"fontinactive",t),G(this)},K.prototype.load=function(t){this.c=new r(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,U(this,new E(this.c,t),t)},V.prototype.load=function(t){function n(){if(s["__mti_fntLst"+e]){var i,o=s["__mti_fntLst"+e](),a=[];if(o)for(var r=0;r<o.length;r++){var c=o[r].fontfamily;void 0!=o[r].fontStyle&&void 0!=o[r].fontWeight?(i=o[r].fontStyle+o[r].fontWeight,a.push(new _(c,i))):a.push(new _(c))}t(a)}else setTimeout(function(){n()},50)}var i=this,e=i.a.projectId,o=i.a.version;if(e){var s=i.c.o;g(this.c,(i.a.api||"https://fast.fonts.net/jsapi")+"/"+e+".js"+(o?"?v="+o:""),function(o){o?t([]):(s["__MonotypeConfiguration__"+e]=function(){return i.a},n())}).id="__MonotypeAPIScript__"+e}else t([])},X.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],s=this.a.testStrings||{},a=new v;for(n=0,i=e.length;n<i;n++)d(this.c,e[n],m(a));var r=[];for(n=0,i=o.length;n<i;n++)if(e=o[n].split(":"),e[1])for(var c=e[1].split(","),f=0;f<c.length;f+=1)r.push(new _(e[0],c[f]));else r.push(new _(e[0]));w(a,function(){t(r,s)})};var ft="https://fonts.googleapis.com/css",lt={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},ht={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ut={i:"i",italic:"i",n:"n",normal:"n"},pt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,dt={Arimo:!0,Cousine:!0,Tinos:!0};nt.prototype.load=function(t){var n=new v,i=this.c,e=new J(this.a.api,this.a.text),o=this.a.families;Q(e,o);var s=new Z(o);tt(s),d(i,Y(e),m(n)),w(n,function(){t(s.a,s.c,dt)})},it.prototype.load=function(t){var n=this.a.id,i=this.c.o;n?g(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var s=n[o],a=n[o+1],r=0;r<a.length;r++)e.push(new _(s,a[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(e)}},2e3):t([])},et.prototype.load=function(t){var n=this.f.id,i=this.c.o,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(n,i){for(var o=0,s=i.fonts.length;o<s;++o){var a=i.fonts[o];e.a.push(new _(a.name,T("font-weight:"+a.weight+";font-style:"+a.style)))}t(e.a)},g(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+p(this.c)+"/"+n+".js",function(n){n&&t([])})):t([])};var gt=new K(window);gt.a.c.custom=function(t,n){return new X(n,t)},gt.a.c.fontdeck=function(t,n){return new et(n,t)},gt.a.c.monotype=function(t,n){return new V(n,t)},gt.a.c.typekit=function(t,n){return new it(n,t)},gt.a.c.google=function(t,n){return new nt(n,t)};var vt={load:a(gt.load,gt)};void 0!==(e=function(){return vt}.call(n,i,n,t))&&(t.exports=e)}()},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=function(t){t.querySelectorAll("a").forEach(function(t){if(t.host!=window.location.host)return t.target="_blank"})},o=function(t){var n=t.querySelector(".post__progress");if(n){var i=t.body,e=t.documentElement,o="scrollTop",s="scrollHeight",a=void 0;t.addEventListener("scroll",function(){a=(e[o]||i[o])/((e[s]||i[s])-e.clientHeight)*100,n.style.setProperty("--progress",a+"%")})}};n.checkExternalLinks=e,n.startProgressBar=o}]);