!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/scripts/",e(e.s=13)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),o=n.n(i),r=n(10),a=(n.n(r),n(3)),s=n(6),c=n(1),u=n(4),l=n(2);o.a.load({google:{families:["Roboto:100,300,400,500,700,900:latin","Source+Sans+Pro:200,300,400,600,700,900"]}}),n.i(a.a)(c.a),n.i(a.a)(s.a),n.i(a.a)(u.a),n.i(a.a)(l.a)},function(t,e,n){"use strict";e.a=function(){var t=document.querySelector(".c-carousel__canvas"),e=document.querySelectorAll(".c-carousel__seat"),n=function(t){var e=void 0;return e=t.nextElementSibling?t.nextElementSibling:t.parentNode.firstElementChild},i=function(t){var e=void 0;return e=t.previousElementSibling?t.previousElementSibling:t.parentNode.lastElementChild},o=function(o){o.preventDefault();var r=document.querySelector(".c-carousel .is-reference");r.classList.remove("is-reference");var a=void 0;o.currentTarget.classList.contains("js-carousel__controls--next")?(a=n(r),t.classList.remove("is-reversing")):(a=i(r),t.classList.add("is-reversing")),a.classList.add("is-reference"),a.style.order=1;for(var s=2,c=2,u=e.length;2<=u?c<=u:c>=u;s=2<=u?++c:--c)a=n(a),a.style.order=s;t.classList.remove("is-set"),setTimeout(function(){return t.classList.add("is-set")},50)},r=document.querySelector(".js-carousel__controls--next");r.addEventListener("click",o,!1);var a=document.querySelector(".js-carousel__controls--prev");a.addEventListener("click",o,!1)}},function(t,e,n){"use strict";var i=function(){var t=document.querySelector(".c-curtain"),e=Number(t.getAttribute("data-timeout"));console.log(e),t.classList.add("c-curtain--js-animate","c-curtain--show"),setTimeout(function(){t.classList.remove("c-curtain--show"),setTimeout(function(){t.classList.add("c-curtain--js-animate")},1e3)},e)};e.a=function(){document.getElementById("show-curtain").addEventListener("click",i)}},function(t,e,n){"use strict";var i=function(t){"interactive"===document.readyState||"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)};e.a=i},function(t,e,n){"use strict";e.a=function(){var t=Array.from(document.querySelectorAll(".c-tab__panel"));t.forEach(function(t,e){var n=document.querySelector(".js-tab__template").content.cloneNode(!0);n.firstElementChild.children[1].children[1].innerHTML="Paint on a Brick "+e,t.appendChild(n)});for(var e=document.createDocumentFragment(),n=1;n<6;n++){var i=document.querySelector(".js-topic-template").content.cloneNode(!0),o=document.querySelector(".js-link-template").content.cloneNode(!0);i.querySelector(".js-topic__input").setAttribute("id","topic--"+n),i.querySelector(".js-topic__overview").setAttribute("for","topic--"+n),i.querySelector(".js-topic__title").innerHTML="SECTION "+n,o.querySelector(".js-link__title").innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mauris ut ligula euismod rhoncus. Nulla facilisi. Duis a lacus cursus, euismod velit ornare, ultricies lectus. Integer semper facilisis velit et dignissim. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tristique mauris lacus. Ut diam velit, aliquam vel nibh eu, consequat sodales diam. Nunc rutrum nisi nunc, eu efficitur eros blandit vel. Vestibulum cursus elit vel risus egestas, dictum sollicitudin risus fermentum.",i.querySelector(".js-topic__content").appendChild(o),e.appendChild(i)}document.querySelector(".js-card").appendChild(e)}},function(t,e,n){"use strict";e.a=function(t){var e=Array.from(t).reverse().find(function(t){return t.getBoundingClientRect().top+window.pageYOffset<window.pageYOffset+window.innerHeight/2})||t[0];return e.getAttribute("id")}},function(t,e,n){"use strict";var i=n(8),o=n(9),r=n.n(o),a=n(5),s=n(7);e.a=function(){var t=document.getElementById("main-content"),e=document.getElementById("side-menu"),o=document.querySelectorAll(".c-article"),c=document.querySelectorAll(".c-side-menu__link"),u=document.querySelector(".c-scrollspy"),l=r()(function(){var n=t.offsetTop;window.pageYOffset>n?e.classList.add("is-fixed"):e.classList.remove("is-fixed")},100),f=r()(function(){var t=n.i(a.a)(o);c.forEach(function(e){e.getAttribute("href").slice(1)===t?e.classList.add("is-active"):e.classList.remove("is-active")})},100);window.addEventListener("scroll",l),window.addEventListener("scroll",f),window.addEventListener("scroll",s.a),Array.from(c).forEach(function(t){t.addEventListener("click",function(t){t.stopPropagation(),t.preventDefault();var e=t.currentTarget.getAttribute("href").slice(1),o=document.getElementById(e).getBoundingClientRect().top+window.pageYOffset;n.i(i.a)(500,o,u.offsetHeight)})}),n.i(s.a)()}},function(t,e,n){"use strict";var i=document.getElementById("scrollspy-indicator");e.a=function(){i.style.width=100*window.pageYOffset/(document.body.offsetHeight-window.innerHeight)+"vw"}},function(t,e,n){"use strict";e.a=function(t,e){function n(c){a||(a=c);var u=c-a;window.scrollTo(0,i(u,s,e-r-s,t)),u<t?window.requestAnimationFrame(n):o()}function i(t,e,n,i){return n*(t/=i)*t*t+e}function o(){window.scrollTo(0,e-r)}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=null,s=window.pageYOffset;window.requestAnimationFrame(n)}},function(t,e,n){(function(e){function n(t,e,n){function i(e){var n=m,i=v;return m=v=void 0,S=e,y=t.apply(i,n)}function r(t){return S=t,w=setTimeout(l,e),T?i(t):y}function a(t){var n=t-b,i=t-S,o=e-n;return E?_(o,g-i):o}function u(t){var n=t-b,i=t-S;return void 0===b||n>=e||n<0||E&&i>=g}function l(){var t=j();return u(t)?f(t):void(w=setTimeout(l,a(t)))}function f(t){return w=void 0,k&&m?i(t):(m=v=void 0,y)}function h(){void 0!==w&&clearTimeout(w),S=0,m=b=v=w=void 0}function d(){return void 0===w?y:f(j())}function p(){var t=j(),n=u(t);if(m=arguments,v=this,b=t,n){if(void 0===w)return r(b);if(E)return w=setTimeout(l,e),i(b)}return void 0===w&&(w=setTimeout(l,e)),y}var m,v,g,y,w,b,S=0,T=!1,E=!1,k=!0;if("function"!=typeof t)throw new TypeError(c);return e=s(e)||0,o(n)&&(T=!!n.leading,E="maxWait"in n,g=E?x(s(n.maxWait)||0,e):g,k="trailing"in n?!!n.trailing:k),p.cancel=h,p.flush=d,p}function i(t,e,i){var r=!0,a=!0;if("function"!=typeof t)throw new TypeError(c);return o(i)&&(r="leading"in i?!!i.leading:r,a="trailing"in i?!!i.trailing:a),n(t,e,{leading:r,maxWait:e,trailing:a})}function o(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function r(t){return!!t&&"object"==typeof t}function a(t){return"symbol"==typeof t||r(t)&&b.call(t)==l}function s(t){if("number"==typeof t)return t;if(a(t))return u;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var n=d.test(t);return n||p.test(t)?m(t.slice(2),n?2:8):h.test(t)?u:+t}var c="Expected a function",u=NaN,l="[object Symbol]",f=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,y=v||g||Function("return this")(),w=Object.prototype,b=w.toString,x=Math.max,_=Math.min,j=function(){return y.Date.now()};t.exports=i}).call(e,n(12))},function(t,e,n){var i,o,r;!function(n,a){o=[e],i=a,r="function"==typeof i?i.apply(e,o):i,!(void 0!==r&&(t.exports=r))}(this,function(t){var e,n,i,o=window,r=document,a="appendChild",s="test",c=";text-shadow:",u="opacity:.",l=" 0px 0px ",f="3px 0px 5",h=")",d=function(t){for(n=r.getElementsByClassName(t||"microlight"),e=0;i=n[e++];)for(var d,p,m,v,g,y=i.textContent,w=0,b=y[0],x=1,_=i.innerHTML="",j=0,S=/(\d*\, \d*\, \d*)(, ([.\d]*))?/g.exec(o.getComputedStyle(i).color),T="px rgba("+S[1]+",",E=S[3]||1;p=d,d=7>j&&"\\"==d?1:x;){if(x=b,b=y[++w],v=_.length>1,!x||j>8&&"\n"==x||[/\S/[s](x),1,1,!/[$\w]/[s](x),("/"==d||"\n"==d)&&v,'"'==d&&v,"'"==d&&v,y[w-4]+p+d=="-->",p+d=="*/"][j])for(_&&(i[a](g=r.createElement("span")).setAttribute("style",["",c+l+9+T+.7*E+"),"+l+2+T+.4*E+h,u+6+c+l+7+T+E/4+"),"+l+3+T+E/4+h,u+7+c+f+T+E/5+"),-"+f+T+E/5+h,"font-style:italic;"+u+5+c+f+T+E/4+"),-"+f+T+E/4+h][j?3>j?2:j>6?4:j>3?3:+/^(a(bstract|lias|nd|rguments|rray|s(m|sert)?|uto)|b(ase|egin|ool(ean)?|reak|yte)|c(ase|atch|har|hecked|lass|lone|ompl|onst|ontinue)|de(bugger|cimal|clare|f(ault|er)?|init|l(egate|ete)?)|do|double|e(cho|ls?if|lse(if)?|nd|nsure|num|vent|x(cept|ec|p(licit|ort)|te(nds|nsion|rn)))|f(allthrough|alse|inal(ly)?|ixed|loat|or(each)?|riend|rom|unc(tion)?)|global|goto|guard|i(f|mp(lements|licit|ort)|n(it|clude(_once)?|line|out|stanceof|t(erface|ernal)?)?|s)|l(ambda|et|ock|ong)|m(icrolight|odule|utable)|NaN|n(amespace|ative|ext|ew|il|ot|ull)|o(bject|perator|r|ut|verride)|p(ackage|arams|rivate|rotected|rotocol|ublic)|r(aise|e(adonly|do|f|gister|peat|quire(_once)?|scue|strict|try|turn))|s(byte|ealed|elf|hort|igned|izeof|tatic|tring|truct|ubscript|uper|ynchronized|witch)|t(emplate|hen|his|hrows?|ransient|rue|ry|ype(alias|def|id|name|of))|u(n(checked|def(ined)?|ion|less|signed|til)|se|sing)|v(ar|irtual|oid|olatile)|w(char_t|hen|here|hile|ith)|xor|yield)$/[s](_):0]),g[a](r.createTextNode(_))),m=j&&7>j?j:m,_="",j=11;![1,/[\/{}[(\-+*=<>:;|\\.,?!&@~]/[s](x),/[\])]/[s](x),/[$\w]/[s](x),"/"==x&&2>m&&"<"!=d,'"'==x,"'"==x,x+b+y[w+1]+y[w+2]=="<!--",x+b=="/*",x+b=="//","#"==x][--j];);_+=x}};t.reset=d,"complete"==r.readyState?d():o.addEventListener("load",function(){d()},0)})},function(t,e,n){var i;!function(){function o(t,e,n){return t.call.apply(t.bind,arguments)}function r(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function a(t,e,n){return a=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:r,a.apply(null,arguments)}function s(t,e){this.a=t,this.m=e||t,this.c=this.m.document}function c(t,e,n,i){if(e=t.c.createElement(e),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?e.style.cssText=n[o]:e.setAttribute(o,n[o]));return i&&e.appendChild(t.c.createTextNode(i)),e}function u(t,e,n){t=t.c.getElementsByTagName(e)[0],t||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t,e,n){e=e||[],n=n||[];for(var i=t.className.split(/\s+/),o=0;o<e.length;o+=1){for(var r=!1,a=0;a<i.length;a+=1)if(e[o]===i[a]){r=!0;break}r||i.push(e[o])}for(e=[],o=0;o<i.length;o+=1){for(r=!1,a=0;a<n.length;a+=1)if(i[o]===n[a]){r=!0;break}r||e.push(i[o])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(t,e){for(var n=t.className.split(/\s+/),i=0,o=n.length;i<o;i++)if(n[i]==e)return!0;return!1}function d(t){if("string"==typeof t.f)return t.f;var e=t.m.location.protocol;return"about:"==e&&(e=t.a.location.protocol),"https:"==e?"https:":"http:"}function p(t){return t.m.location.hostname||t.a.location.hostname}function m(t,e,n){function i(){s&&o&&r&&(s(a),s=null)}e=c(t,"link",{rel:"stylesheet",href:e,media:"all"});var o=!1,r=!0,a=null,s=n||null;st?(e.onload=function(){o=!0,i()},e.onerror=function(){o=!0,a=Error("Stylesheet failed to load"),i()}):setTimeout(function(){o=!0,i()},0),u(t,"head",e)}function v(t,e,n,i){var o=t.c.getElementsByTagName("head")[0];if(o){var r=c(t,"script",{src:e}),a=!1;return r.onload=r.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,n&&n(null),r.onload=r.onreadystatechange=null,"HEAD"==r.parentNode.tagName&&o.removeChild(r))},o.appendChild(r),setTimeout(function(){a||(a=!0,n&&n(Error("Script load timeout")))},i||5e3),r}return null}function g(){this.a=0,this.c=null}function y(t){return t.a++,function(){t.a--,b(t)}}function w(t,e){t.c=e,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function x(t){this.a=t||"-"}function _(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function j(t){return E(t)+" "+(t.f+"00")+" 300px "+S(t.c)}function S(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var i=t[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?e.push("'"+i+"'"):e.push(i)}return e.join(",")}function T(t){return t.a+t.f}function E(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function k(t){var e=4,n="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?e=7:/[1-9]00/.test(i[1])&&(e=parseInt(i[1].substr(0,1),10)))),n+e}function L(t,e){this.c=t,this.f=t.m.document.documentElement,this.h=e,this.a=new x("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function A(t){t.g&&f(t.f,[t.a.c("wf","loading")]),N(t,"loading")}function C(t){if(t.g){var e=h(t.f,t.a.c("wf","active")),n=[],i=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),f(t.f,n,i)}N(t,"inactive")}function N(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,T(n)):t.h[e]())}function q(){this.c={}}function O(t,e,n){var i,o=[];for(i in e)if(e.hasOwnProperty(i)){var r=t.c[i];r&&o.push(r(e[i],n))}return o}function I(t,e){this.c=t,this.f=e,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function B(t){u(t.c,"body",t.a)}function P(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+S(t.c)+";"+("font-style:"+E(t)+";font-weight:"+(t.f+"00")+";")}function F(t,e,n,i,o,r){this.g=t,this.j=e,this.a=i,this.c=n,this.f=o||3e3,this.h=r||void 0}function M(t,e,n,i,o,r,a){this.v=t,this.B=e,this.c=n,this.a=i,this.s=a||"BESbswy",this.f={},this.w=o||3e3,this.u=r||null,this.o=this.j=this.h=this.g=null,this.g=new I(this.c,this.s),this.h=new I(this.c,this.s),this.j=new I(this.c,this.s),this.o=new I(this.c,this.s),t=new _(this.a.c+",serif",T(this.a)),t=P(t),this.g.a.style.cssText=t,t=new _(this.a.c+",sans-serif",T(this.a)),t=P(t),this.h.a.style.cssText=t,t=new _("serif",T(this.a)),t=P(t),this.j.a.style.cssText=t,t=new _("sans-serif",T(this.a)),t=P(t),this.o.a.style.cssText=t,B(this.g),B(this.h),B(this.j),B(this.o)}function W(){if(null===ut){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);ut=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return ut}function $(t,e,n){for(var i in ct)if(ct.hasOwnProperty(i)&&e===t.f[ct[i]]&&n===t.f[ct[i]])return!0;return!1}function D(t){var e,n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(e=n===t.f.serif&&i===t.f["sans-serif"])||(e=W()&&$(t,n,i)),e?at()-t.A>=t.w?W()&&$(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?Y(t,t.v):Y(t,t.B):H(t):Y(t,t.v)}function H(t){setTimeout(a(function(){D(this)},t),50)}function Y(t,e){setTimeout(a(function(){l(this.g.a),l(this.h.a),l(this.j.a),l(this.o.a),e(this.a)},t),0)}function R(t,e,n){this.c=t,this.a=e,this.f=0,this.o=this.j=!1,this.s=n}function z(t){0==--t.f&&t.j&&(t.o?(t=t.a,t.g&&f(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),N(t,"active")):C(t.a))}function U(t){this.j=t,this.a=new q,this.h=0,this.f=this.g=!0}function V(t,e,n,i,o){var r=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=o||null,s=i||null||{};if(0===n.length&&r)C(e.a);else{e.f+=n.length,r&&(e.j=r);var c,u=[];for(c=0;c<n.length;c++){var l=n[c],h=s[l.c],d=e.a,p=l;if(d.g&&f(d.f,[d.a.c("wf",p.c,T(p).toString(),"loading")]),N(d,"fontloading",p),d=null,null===lt)if(window.FontFace){var p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),m=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);lt=p?42<parseInt(p[1],10):!m}else lt=!1;d=lt?new F(a(e.g,e),a(e.h,e),e.c,l,e.s,h):new M(a(e.g,e),a(e.h,e),e.c,l,e.s,t,h),u.push(d)}for(c=0;c<u.length;c++)u[c].start()}},0)}function G(t,e,n){var i=[],o=n.timeout;A(e);var i=O(t.a,n,t.c),r=new R(t.c,e,o);for(t.h=i.length,e=0,n=i.length;e<n;e++)i[e].load(function(e,n,i){V(t,r,e,n,i)})}function K(t,e){this.c=t,this.a=e}function X(t,e,n){var i=d(t.c);return t=(t.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,""),i+"//"+t+"/"+e+".js"+(n?"?v="+n:"")}function J(t,e){this.c=t,this.a=e}function Q(t,e,n){t?this.c=t:this.c=e+ft,this.a=[],this.f=[],this.g=n||""}function Z(t,e){for(var n=e.length,i=0;i<n;i++){var o=e[i].split(":");3==o.length&&t.f.push(o.pop());var r="";2==o.length&&""!=o[1]&&(r=":"),t.a.push(o.join(r))}}function tt(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],i=0;i<e;i++)n.push(t.a[i].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}function et(t){this.f=t,this.a=[],this.c={}}function nt(t){for(var e=t.f.length,n=0;n<e;n++){var i=t.f[n].split(":"),o=i[0].replace(/\+/g," "),r=["n4"];if(2<=i.length){var a,s=i[1];if(a=[],s)for(var s=s.split(","),c=s.length,u=0;u<c;u++){var l;if(l=s[u],l.match(/^[\w-]+$/)){var f=mt.exec(l.toLowerCase());if(null==f)l="";else{if(l=f[2],l=null==l||""==l?"n":pt[l],f=f[1],null==f||""==f)f="4";else var h=dt[f],f=h?h:isNaN(f)?"4":f.substr(0,1);l=[l,f].join("")}}else l="";l&&a.push(l)}0<a.length&&(r=a),3==i.length&&(i=i[2],a=[],i=i?i.split(","):a,0<i.length&&(i=ht[i[0]])&&(t.c[o]=i))}for(t.c[o]||(i=ht[o])&&(t.c[o]=i),i=0;i<r.length;i+=1)t.a.push(new _(o,r[i]))}}function it(t,e){this.c=t,this.a=e}function ot(t,e){this.c=t,this.a=e}function rt(t,e){this.c=t,this.f=e,this.a=[]}var at=Date.now||function(){return+new Date},st=!!window.FontFace;x.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},F.prototype.start=function(){var t=this.c.m.document,e=this,n=at(),i=new Promise(function(i,o){function r(){at()-n>=e.f?o():t.fonts.load(j(e.a),e.h).then(function(t){1<=t.length?i():setTimeout(r,25)},function(){o()})}r()}),o=new Promise(function(t,n){setTimeout(n,e.f)});Promise.race([o,i]).then(function(){e.g(e.a)},function(){e.j(e.a)})};var ct={D:"serif",C:"sans-serif"},ut=null;M.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=at(),D(this)};var lt=null;R.prototype.g=function(t){var e=this.a;e.g&&f(e.f,[e.a.c("wf",t.c,T(t).toString(),"active")],[e.a.c("wf",t.c,T(t).toString(),"loading"),e.a.c("wf",t.c,T(t).toString(),"inactive")]),N(e,"fontactive",t),this.o=!0,z(this)},R.prototype.h=function(t){var e=this.a;if(e.g){var n=h(e.f,e.a.c("wf",t.c,T(t).toString(),"active")),i=[],o=[e.a.c("wf",t.c,T(t).toString(),"loading")];n||i.push(e.a.c("wf",t.c,T(t).toString(),"inactive")),f(e.f,i,o)}N(e,"fontinactive",t),z(this)},U.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,G(this,new L(this.c,t),t)},K.prototype.load=function(t){function e(){if(r["__mti_fntLst"+i]){var n,o=r["__mti_fntLst"+i](),a=[];if(o)for(var s=0;s<o.length;s++){var c=o[s].fontfamily;void 0!=o[s].fontStyle&&void 0!=o[s].fontWeight?(n=o[s].fontStyle+o[s].fontWeight,a.push(new _(c,n))):a.push(new _(c))}t(a)}else setTimeout(function(){e()},50)}var n=this,i=n.a.projectId,o=n.a.version;if(i){var r=n.c.m;v(this.c,X(n,i,o),function(o){o?t([]):(r["__MonotypeConfiguration__"+i]=function(){return n.a},e())}).id="__MonotypeAPIScript__"+i}else t([])},J.prototype.load=function(t){var e,n,i=this.a.urls||[],o=this.a.families||[],r=this.a.testStrings||{},a=new g;for(e=0,n=i.length;e<n;e++)m(this.c,i[e],y(a));var s=[];for(e=0,n=o.length;e<n;e++)if(i=o[e].split(":"),i[1])for(var c=i[1].split(","),u=0;u<c.length;u+=1)s.push(new _(i[0],c[u]));else s.push(new _(i[0]));w(a,function(){t(s,r)})};var ft="//fonts.googleapis.com/css",ht={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},dt={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},pt={i:"i",italic:"i",n:"n",normal:"n"},mt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,vt={Arimo:!0,Cousine:!0,Tinos:!0};it.prototype.load=function(t){var e=new g,n=this.c,i=new Q(this.a.api,d(n),this.a.text),o=this.a.families;Z(i,o);var r=new et(o);nt(r),m(n,tt(i),y(e)),w(e,function(){t(r.a,r.c,vt)})},ot.prototype.load=function(t){var e=this.a.id,n=this.c.m;e?v(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var i=[],o=0;o<e.length;o+=2)for(var r=e[o],a=e[o+1],s=0;s<a.length;s++)i.push(new _(r,a[s]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(i)}},2e3):t([])},rt.prototype.load=function(t){var e=this.f.id,n=this.c.m,i=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var o=0,r=n.fonts.length;o<r;++o){var a=n.fonts[o];i.a.push(new _(a.name,k("font-weight:"+a.weight+";font-style:"+a.style)))}t(i.a)},v(this.c,d(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+p(this.c)+"/"+e+".js",function(e){e&&t([])})):t([])};var gt=new U(window);gt.a.c.custom=function(t,e){return new J(e,t)},gt.a.c.fontdeck=function(t,e){return new rt(e,t)},gt.a.c.monotype=function(t,e){return new K(e,t)},gt.a.c.typekit=function(t,e){return new ot(e,t)},gt.a.c.google=function(t,e){return new it(e,t)};var yt={load:a(gt.load,gt)};i=function(){return yt}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))}()},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){t.exports=n(0)}]);
//# sourceMappingURL=app-993415c447.js.map