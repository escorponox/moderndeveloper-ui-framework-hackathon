!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/scripts/",e(e.s=10)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(8),s=i.n(n),r=i(7),o=(i.n(r),i(2)),a=i(4),u=i(1);s.a.load({google:{families:["Roboto:100,300,400,500,700,900:latin","Source+Sans+Pro:200,300,400,600,700,900"]}});for(var c=function(){var t=Array.from(document.querySelectorAll(".c-tab__panel"));t.forEach(function(t,e){var i=document.querySelector(".js-tab__template").content.cloneNode(!0);i.firstElementChild.children[1].children[1].innerHTML="Paint on a Brick "+e,t.appendChild(i)})},l=0;l<5;l++){var f=[{id:"topic--1",title:"SECTION 1"},{id:"topic--2",title:"SECTION 2"},{id:"topic--3",title:"SECTION 3"},{id:"topic--4",title:"SECTION 4"},{id:"topic--5",title:"SECTION 5"}],d=[{id:"link--1",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mauris ut ligula euismod rhoncus. Nulla facilisi. Duis a lacus cursus, euismod velit ornare, ultricies lectus. Integer semper facilisis velit et dignissim. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tristique mauris lacus. Ut diam velit, aliquam vel nibh eu, consequat sodales diam. Nunc rutrum nisi nunc, eu efficitur eros blandit vel. Vestibulum cursus elit vel risus egestas, dictum sollicitudin risus fermentum."},{id:"link--2",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mauris ut ligula euismod rhoncus. Nulla facilisi. Duis a lacus cursus, euismod velit ornare, ultricies lectus. Integer semper facilisis velit et dignissim. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tristique mauris lacus. Ut diam velit, aliquam vel nibh eu, consequat sodales diam. Nunc rutrum nisi nunc, eu efficitur eros blandit vel. Vestibulum cursus elit vel risus egestas, dictum sollicitudin risus fermentum."},{id:"link--3",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mauris ut ligula euismod rhoncus. Nulla facilisi. Duis a lacus cursus, euismod velit ornare, ultricies lectus. Integer semper facilisis velit et dignissim. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tristique mauris lacus. Ut diam velit, aliquam vel nibh eu, consequat sodales diam. Nunc rutrum nisi nunc, eu efficitur eros blandit vel. Vestibulum cursus elit vel risus egestas, dictum sollicitudin risus fermentum."},{id:"link--4",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mauris ut ligula euismod rhoncus. Nulla facilisi. Duis a lacus cursus, euismod velit ornare, ultricies lectus. Integer semper facilisis velit et dignissim. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tristique mauris lacus. Ut diam velit, aliquam vel nibh eu, consequat sodales diam. Nunc rutrum nisi nunc, eu efficitur eros blandit vel. Vestibulum cursus elit vel risus egestas, dictum sollicitudin risus fermentum."},{id:"link--5",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mauris ut ligula euismod rhoncus. Nulla facilisi. Duis a lacus cursus, euismod velit ornare, ultricies lectus. Integer semper facilisis velit et dignissim. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tristique mauris lacus. Ut diam velit, aliquam vel nibh eu, consequat sodales diam. Nunc rutrum nisi nunc, eu efficitur eros blandit vel. Vestibulum cursus elit vel risus egestas, dictum sollicitudin risus fermentum."}],h=document.querySelector(".js-topic-template").content.cloneNode(!0);h.querySelector(".js-topic__input").setAttribute("id",f[l].id),h.querySelector(".js-topic__overview").setAttribute("for",f[l].id),h.querySelector(".js-topic__title").innerHTML=f[l].title;var p=document.querySelector(".js-link-template").content.cloneNode(!0);p.querySelector(".js-link__title").innerHTML=d[l].title,h.querySelector(".js-topic__content").appendChild(p),document.querySelector(".js-card").appendChild(h)}i.i(o.a)(u.a),i.i(o.a)(a.a),i.i(o.a)(c)},function(t,e,i){"use strict";e.a=function(){var t=document.querySelector(".c-carousel__canvas"),e=document.querySelectorAll(".c-carousel__seat"),i=function(t){var e=void 0;return e=t.nextElementSibling?t.nextElementSibling:t.parentNode.firstElementChild},n=function(t){var e=void 0;return e=t.previousElementSibling?t.previousElementSibling:t.parentNode.lastElementChild},s=function(s){s.preventDefault();var r=document.querySelector(".c-carousel .is-reference");r.classList.remove("is-reference");var o=void 0;s.currentTarget.classList.contains("js-carousel__controls--next")?(o=i(r),t.classList.remove("is-reversing")):(o=n(r),t.classList.add("is-reversing")),o.classList.add("is-reference"),o.style.order=1;for(var a=2,u=2,c=e.length;2<=c?u<=c:u>=c;a=2<=c?++u:--u)o=i(o),o.style.order=a;t.classList.remove("is-set"),setTimeout(function(){return t.classList.add("is-set")},50)},r=document.querySelector(".js-carousel__controls--next");r.addEventListener("click",s,!1);var o=document.querySelector(".js-carousel__controls--prev");o.addEventListener("click",s,!1)}},function(t,e,i){"use strict";var n=function(t){"interactive"===document.readyState||"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)};e.a=n},function(t,e,i){"use strict";e.a=function(t){var e=Array.from(t).reverse().find(function(t){return t.getBoundingClientRect().top+window.pageYOffset<window.pageYOffset+window.innerHeight/2})||t[0];return e.getAttribute("id")}},function(t,e,i){"use strict";var n=i(5),s=i(6),r=i.n(s),o=i(3);e.a=function(){var t=document.querySelector("header"),e=document.getElementById("main-content"),s=document.getElementById("side-menu"),a=document.querySelectorAll(".c-article"),u=document.querySelectorAll(".c-side-menu__link"),c=r()(function(){var i=t.offsetHeight+e.offsetTop,n=t.offsetLeft+s.offsetLeft;window.pageYOffset>i?(e.style.paddingLeft=s.offsetWidth+"px",s.classList.add("is-fixed"),s.style.left=n):(e.style.paddingLeft="",s.classList.remove("is-fixed"),s.style.left="")},100),l=r()(function(){var t=i.i(o.a)(a);u.forEach(function(e){e.getAttribute("href").slice(1)===t?e.classList.add("is-active"):e.classList.remove("is-active")})},100);window.addEventListener("scroll",c),window.addEventListener("scroll",l),Array.from(u).forEach(function(t){t.addEventListener("click",function(t){t.stopPropagation(),t.preventDefault();var e=t.currentTarget.getAttribute("href").slice(1),s=document.getElementById(e).getBoundingClientRect().top+window.pageYOffset;i.i(n.a)(500,s)})})}},function(t,e,i){"use strict";e.a=function(t,e){function i(u){o||(o=u);var c=u-o;window.scrollTo(0,n(c,a,e-r-a,t)),c<t?window.requestAnimationFrame(i):s()}function n(t,e,i,n){return i*(t/=n)*t*t+e}function s(){window.scrollTo(0,e-r)}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=null,a=window.pageYOffset;r=e-a<0?r:0,window.requestAnimationFrame(i)}},function(t,e,i){(function(e){function i(t,e,i){function n(e){var i=m,n=v;return m=v=void 0,j=e,y=t.apply(n,i)}function r(t){return j=t,w=setTimeout(l,e),T?n(t):y}function o(t){var i=t-b,n=t-j,s=e-i;return N?S(s,g-n):s}function c(t){var i=t-b,n=t-j;return void 0===b||i>=e||i<0||N&&n>=g}function l(){var t=_();return c(t)?f(t):void(w=setTimeout(l,o(t)))}function f(t){return w=void 0,q&&m?n(t):(m=v=void 0,y)}function d(){void 0!==w&&clearTimeout(w),j=0,m=b=v=w=void 0}function h(){return void 0===w?y:f(_())}function p(){var t=_(),i=c(t);if(m=arguments,v=this,b=t,i){if(void 0===w)return r(b);if(N)return w=setTimeout(l,e),n(b)}return void 0===w&&(w=setTimeout(l,e)),y}var m,v,g,y,w,b,j=0,T=!1,N=!1,q=!0;if("function"!=typeof t)throw new TypeError(u);return e=a(e)||0,s(i)&&(T=!!i.leading,N="maxWait"in i,g=N?x(a(i.maxWait)||0,e):g,q="trailing"in i?!!i.trailing:q),p.cancel=d,p.flush=h,p}function n(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(u);return s(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),i(t,e,{leading:r,maxWait:e,trailing:o})}function s(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function r(t){return!!t&&"object"==typeof t}function o(t){return"symbol"==typeof t||r(t)&&b.call(t)==l}function a(t){if("number"==typeof t)return t;if(o(t))return c;if(s(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var i=h.test(t);return i||p.test(t)?m(t.slice(2),i?2:8):d.test(t)?c:+t}var u="Expected a function",c=NaN,l="[object Symbol]",f=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,y=v||g||Function("return this")(),w=Object.prototype,b=w.toString,x=Math.max,S=Math.min,_=function(){return y.Date.now()};t.exports=n}).call(e,i(9))},function(t,e,i){var n,s,r;!function(i,o){s=[e],n=o,r="function"==typeof n?n.apply(e,s):n,!(void 0!==r&&(t.exports=r))}(this,function(t){var e,i,n,s=window,r=document,o="appendChild",a="test",u=";text-shadow:",c="opacity:.",l=" 0px 0px ",f="3px 0px 5",d=")",h=function(t){for(i=r.getElementsByClassName(t||"microlight"),e=0;n=i[e++];)for(var h,p,m,v,g,y=n.textContent,w=0,b=y[0],x=1,S=n.innerHTML="",_=0,j=/(\d*\, \d*\, \d*)(, ([.\d]*))?/g.exec(s.getComputedStyle(n).color),T="px rgba("+j[1]+",",N=j[3]||1;p=h,h=7>_&&"\\"==h?1:x;){if(x=b,b=y[++w],v=S.length>1,!x||_>8&&"\n"==x||[/\S/[a](x),1,1,!/[$\w]/[a](x),("/"==h||"\n"==h)&&v,'"'==h&&v,"'"==h&&v,y[w-4]+p+h=="-->",p+h=="*/"][_])for(S&&(n[o](g=r.createElement("span")).setAttribute("style",["",u+l+9+T+.7*N+"),"+l+2+T+.4*N+d,c+6+u+l+7+T+N/4+"),"+l+3+T+N/4+d,c+7+u+f+T+N/5+"),-"+f+T+N/5+d,"font-style:italic;"+c+5+u+f+T+N/4+"),-"+f+T+N/4+d][_?3>_?2:_>6?4:_>3?3:+/^(a(bstract|lias|nd|rguments|rray|s(m|sert)?|uto)|b(ase|egin|ool(ean)?|reak|yte)|c(ase|atch|har|hecked|lass|lone|ompl|onst|ontinue)|de(bugger|cimal|clare|f(ault|er)?|init|l(egate|ete)?)|do|double|e(cho|ls?if|lse(if)?|nd|nsure|num|vent|x(cept|ec|p(licit|ort)|te(nds|nsion|rn)))|f(allthrough|alse|inal(ly)?|ixed|loat|or(each)?|riend|rom|unc(tion)?)|global|goto|guard|i(f|mp(lements|licit|ort)|n(it|clude(_once)?|line|out|stanceof|t(erface|ernal)?)?|s)|l(ambda|et|ock|ong)|m(icrolight|odule|utable)|NaN|n(amespace|ative|ext|ew|il|ot|ull)|o(bject|perator|r|ut|verride)|p(ackage|arams|rivate|rotected|rotocol|ublic)|r(aise|e(adonly|do|f|gister|peat|quire(_once)?|scue|strict|try|turn))|s(byte|ealed|elf|hort|igned|izeof|tatic|tring|truct|ubscript|uper|ynchronized|witch)|t(emplate|hen|his|hrows?|ransient|rue|ry|ype(alias|def|id|name|of))|u(n(checked|def(ined)?|ion|less|signed|til)|se|sing)|v(ar|irtual|oid|olatile)|w(char_t|hen|here|hile|ith)|xor|yield)$/[a](S):0]),g[o](r.createTextNode(S))),m=_&&7>_?_:m,S="",_=11;![1,/[\/{}[(\-+*=<>:;|\\.,?!&@~]/[a](x),/[\])]/[a](x),/[$\w]/[a](x),"/"==x&&2>m&&"<"!=h,'"'==x,"'"==x,x+b+y[w+1]+y[w+2]=="<!--",x+b=="/*",x+b=="//","#"==x][--_];);S+=x}};t.reset=h,"complete"==r.readyState?h():s.addEventListener("load",function(){h()},0)})},function(t,e,i){var n;!function(){function s(t,e,i){return t.call.apply(t.bind,arguments)}function r(t,e,i){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function o(t,e,i){return o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?s:r,o.apply(null,arguments)}function a(t,e){this.a=t,this.m=e||t,this.c=this.m.document}function u(t,e,i,n){if(e=t.c.createElement(e),i)for(var s in i)i.hasOwnProperty(s)&&("style"==s?e.style.cssText=i[s]:e.setAttribute(s,i[s]));return n&&e.appendChild(t.c.createTextNode(n)),e}function c(t,e,i){t=t.c.getElementsByTagName(e)[0],t||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t,e,i){e=e||[],i=i||[];for(var n=t.className.split(/\s+/),s=0;s<e.length;s+=1){for(var r=!1,o=0;o<n.length;o+=1)if(e[s]===n[o]){r=!0;break}r||n.push(e[s])}for(e=[],s=0;s<n.length;s+=1){for(r=!1,o=0;o<i.length;o+=1)if(n[s]===i[o]){r=!0;break}r||e.push(n[s])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(t,e){for(var i=t.className.split(/\s+/),n=0,s=i.length;n<s;n++)if(i[n]==e)return!0;return!1}function h(t){if("string"==typeof t.f)return t.f;var e=t.m.location.protocol;return"about:"==e&&(e=t.a.location.protocol),"https:"==e?"https:":"http:"}function p(t){return t.m.location.hostname||t.a.location.hostname}function m(t,e,i){function n(){a&&s&&r&&(a(o),a=null)}e=u(t,"link",{rel:"stylesheet",href:e,media:"all"});var s=!1,r=!0,o=null,a=i||null;at?(e.onload=function(){s=!0,n()},e.onerror=function(){s=!0,o=Error("Stylesheet failed to load"),n()}):setTimeout(function(){s=!0,n()},0),c(t,"head",e)}function v(t,e,i,n){var s=t.c.getElementsByTagName("head")[0];if(s){var r=u(t,"script",{src:e}),o=!1;return r.onload=r.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,i&&i(null),r.onload=r.onreadystatechange=null,"HEAD"==r.parentNode.tagName&&s.removeChild(r))},s.appendChild(r),setTimeout(function(){o||(o=!0,i&&i(Error("Script load timeout")))},n||5e3),r}return null}function g(){this.a=0,this.c=null}function y(t){return t.a++,function(){t.a--,b(t)}}function w(t,e){t.c=e,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function x(t){this.a=t||"-"}function S(t,e){this.c=t,this.f=4,this.a="n";var i=(e||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function _(t){return N(t)+" "+(t.f+"00")+" 300px "+j(t.c)}function j(t){var e=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var n=t[i].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?e.push("'"+n+"'"):e.push(n)}return e.join(",")}function T(t){return t.a+t.f}function N(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function q(t){var e=4,i="n",n=null;return t&&((n=t.match(/(normal|oblique|italic)/i))&&n[1]&&(i=n[1].substr(0,1).toLowerCase()),(n=t.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?e=7:/[1-9]00/.test(n[1])&&(e=parseInt(n[1].substr(0,1),10)))),i+e}function E(t,e){this.c=t,this.f=t.m.document.documentElement,this.h=e,this.a=new x("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function k(t){t.g&&f(t.f,[t.a.c("wf","loading")]),L(t,"loading")}function C(t){if(t.g){var e=d(t.f,t.a.c("wf","active")),i=[],n=[t.a.c("wf","loading")];e||i.push(t.a.c("wf","inactive")),f(t.f,i,n)}L(t,"inactive")}function L(t,e,i){t.j&&t.h[e]&&(i?t.h[e](i.c,T(i)):t.h[e]())}function O(){this.c={}}function A(t,e,i){var n,s=[];for(n in e)if(e.hasOwnProperty(n)){var r=t.c[n];r&&s.push(r(e[n],i))}return s}function I(t,e){this.c=t,this.f=e,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function B(t){c(t.c,"body",t.a)}function P(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(t.c)+";"+("font-style:"+N(t)+";font-weight:"+(t.f+"00")+";")}function D(t,e,i,n,s,r){this.g=t,this.j=e,this.a=n,this.c=i,this.f=s||3e3,this.h=r||void 0}function W(t,e,i,n,s,r,o){this.v=t,this.B=e,this.c=i,this.a=n,this.s=o||"BESbswy",this.f={},this.w=s||3e3,this.u=r||null,this.o=this.j=this.h=this.g=null,this.g=new I(this.c,this.s),this.h=new I(this.c,this.s),this.j=new I(this.c,this.s),this.o=new I(this.c,this.s),t=new S(this.a.c+",serif",T(this.a)),t=P(t),this.g.a.style.cssText=t,t=new S(this.a.c+",sans-serif",T(this.a)),t=P(t),this.h.a.style.cssText=t,t=new S("serif",T(this.a)),t=P(t),this.j.a.style.cssText=t,t=new S("sans-serif",T(this.a)),t=P(t),this.o.a.style.cssText=t,B(this.g),B(this.h),B(this.j),B(this.o)}function F(){if(null===ct){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);ct=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return ct}function M(t,e,i){for(var n in ut)if(ut.hasOwnProperty(n)&&e===t.f[ut[n]]&&i===t.f[ut[n]])return!0;return!1}function $(t){var e,i=t.g.a.offsetWidth,n=t.h.a.offsetWidth;(e=i===t.f.serif&&n===t.f["sans-serif"])||(e=F()&&M(t,i,n)),e?ot()-t.A>=t.w?F()&&M(t,i,n)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?U(t,t.v):U(t,t.B):H(t):U(t,t.v)}function H(t){setTimeout(o(function(){$(this)},t),50)}function U(t,e){setTimeout(o(function(){l(this.g.a),l(this.h.a),l(this.j.a),l(this.o.a),e(this.a)},t),0)}function V(t,e,i){this.c=t,this.a=e,this.f=0,this.o=this.j=!1,this.s=i}function Y(t){0==--t.f&&t.j&&(t.o?(t=t.a,t.g&&f(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),L(t,"active")):C(t.a))}function R(t){this.j=t,this.a=new O,this.h=0,this.f=this.g=!0}function z(t,e,i,n,s){var r=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=s||null,a=n||null||{};if(0===i.length&&r)C(e.a);else{e.f+=i.length,r&&(e.j=r);var u,c=[];for(u=0;u<i.length;u++){var l=i[u],d=a[l.c],h=e.a,p=l;if(h.g&&f(h.f,[h.a.c("wf",p.c,T(p).toString(),"loading")]),L(h,"fontloading",p),h=null,null===lt)if(window.FontFace){var p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),m=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);lt=p?42<parseInt(p[1],10):!m}else lt=!1;h=lt?new D(o(e.g,e),o(e.h,e),e.c,l,e.s,d):new W(o(e.g,e),o(e.h,e),e.c,l,e.s,t,d),c.push(h)}for(u=0;u<c.length;u++)c[u].start()}},0)}function G(t,e,i){var n=[],s=i.timeout;k(e);var n=A(t.a,i,t.c),r=new V(t.c,e,s);for(t.h=n.length,e=0,i=n.length;e<i;e++)n[e].load(function(e,i,n){z(t,r,e,i,n)})}function K(t,e){this.c=t,this.a=e}function X(t,e,i){var n=h(t.c);return t=(t.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,""),n+"//"+t+"/"+e+".js"+(i?"?v="+i:"")}function J(t,e){this.c=t,this.a=e}function Q(t,e,i){t?this.c=t:this.c=e+ft,this.a=[],this.f=[],this.g=i||""}function Z(t,e){for(var i=e.length,n=0;n<i;n++){var s=e[n].split(":");3==s.length&&t.f.push(s.pop());var r="";2==s.length&&""!=s[1]&&(r=":"),t.a.push(s.join(r))}}function tt(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,i=[],n=0;n<e;n++)i.push(t.a[n].replace(/ /g,"+"));return e=t.c+"?family="+i.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}function et(t){this.f=t,this.a=[],this.c={}}function it(t){for(var e=t.f.length,i=0;i<e;i++){var n=t.f[i].split(":"),s=n[0].replace(/\+/g," "),r=["n4"];if(2<=n.length){var o,a=n[1];if(o=[],a)for(var a=a.split(","),u=a.length,c=0;c<u;c++){var l;if(l=a[c],l.match(/^[\w-]+$/)){var f=mt.exec(l.toLowerCase());if(null==f)l="";else{if(l=f[2],l=null==l||""==l?"n":pt[l],f=f[1],null==f||""==f)f="4";else var d=ht[f],f=d?d:isNaN(f)?"4":f.substr(0,1);l=[l,f].join("")}}else l="";l&&o.push(l)}0<o.length&&(r=o),3==n.length&&(n=n[2],o=[],n=n?n.split(","):o,0<n.length&&(n=dt[n[0]])&&(t.c[s]=n))}for(t.c[s]||(n=dt[s])&&(t.c[s]=n),n=0;n<r.length;n+=1)t.a.push(new S(s,r[n]))}}function nt(t,e){this.c=t,this.a=e}function st(t,e){this.c=t,this.a=e}function rt(t,e){this.c=t,this.f=e,this.a=[]}var ot=Date.now||function(){return+new Date},at=!!window.FontFace;x.prototype.c=function(t){for(var e=[],i=0;i<arguments.length;i++)e.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},D.prototype.start=function(){var t=this.c.m.document,e=this,i=ot(),n=new Promise(function(n,s){function r(){ot()-i>=e.f?s():t.fonts.load(_(e.a),e.h).then(function(t){1<=t.length?n():setTimeout(r,25)},function(){s()})}r()}),s=new Promise(function(t,i){setTimeout(i,e.f)});Promise.race([s,n]).then(function(){e.g(e.a)},function(){e.j(e.a)})};var ut={D:"serif",C:"sans-serif"},ct=null;W.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=ot(),$(this)};var lt=null;V.prototype.g=function(t){var e=this.a;e.g&&f(e.f,[e.a.c("wf",t.c,T(t).toString(),"active")],[e.a.c("wf",t.c,T(t).toString(),"loading"),e.a.c("wf",t.c,T(t).toString(),"inactive")]),L(e,"fontactive",t),this.o=!0,Y(this)},V.prototype.h=function(t){var e=this.a;if(e.g){var i=d(e.f,e.a.c("wf",t.c,T(t).toString(),"active")),n=[],s=[e.a.c("wf",t.c,T(t).toString(),"loading")];i||n.push(e.a.c("wf",t.c,T(t).toString(),"inactive")),f(e.f,n,s)}L(e,"fontinactive",t),Y(this)},R.prototype.load=function(t){this.c=new a(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,G(this,new E(this.c,t),t)},K.prototype.load=function(t){function e(){if(r["__mti_fntLst"+n]){var i,s=r["__mti_fntLst"+n](),o=[];if(s)for(var a=0;a<s.length;a++){var u=s[a].fontfamily;void 0!=s[a].fontStyle&&void 0!=s[a].fontWeight?(i=s[a].fontStyle+s[a].fontWeight,o.push(new S(u,i))):o.push(new S(u))}t(o)}else setTimeout(function(){e()},50)}var i=this,n=i.a.projectId,s=i.a.version;if(n){var r=i.c.m;v(this.c,X(i,n,s),function(s){s?t([]):(r["__MonotypeConfiguration__"+n]=function(){return i.a},e())}).id="__MonotypeAPIScript__"+n}else t([])},J.prototype.load=function(t){var e,i,n=this.a.urls||[],s=this.a.families||[],r=this.a.testStrings||{},o=new g;for(e=0,i=n.length;e<i;e++)m(this.c,n[e],y(o));var a=[];for(e=0,i=s.length;e<i;e++)if(n=s[e].split(":"),n[1])for(var u=n[1].split(","),c=0;c<u.length;c+=1)a.push(new S(n[0],u[c]));else a.push(new S(n[0]));w(o,function(){t(a,r)})};var ft="//fonts.googleapis.com/css",dt={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},ht={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},pt={i:"i",italic:"i",n:"n",normal:"n"},mt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,vt={Arimo:!0,Cousine:!0,Tinos:!0};nt.prototype.load=function(t){var e=new g,i=this.c,n=new Q(this.a.api,h(i),this.a.text),s=this.a.families;Z(n,s);var r=new et(s);it(r),m(i,tt(n),y(e)),w(e,function(){t(r.a,r.c,vt)})},st.prototype.load=function(t){var e=this.a.id,i=this.c.m;e?v(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",function(e){if(e)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){e=i.Typekit.config.fn;for(var n=[],s=0;s<e.length;s+=2)for(var r=e[s],o=e[s+1],a=0;a<o.length;a++)n.push(new S(r,o[a]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(n)}},2e3):t([])},rt.prototype.load=function(t){var e=this.f.id,i=this.c.m,n=this;e?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[e]=function(e,i){for(var s=0,r=i.fonts.length;s<r;++s){var o=i.fonts[s];n.a.push(new S(o.name,q("font-weight:"+o.weight+";font-style:"+o.style)))}t(n.a)},v(this.c,h(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+p(this.c)+"/"+e+".js",function(e){e&&t([])})):t([])};var gt=new R(window);gt.a.c.custom=function(t,e){return new J(e,t)},gt.a.c.fontdeck=function(t,e){return new rt(e,t)},gt.a.c.monotype=function(t,e){return new K(e,t)},gt.a.c.typekit=function(t,e){return new st(e,t)},gt.a.c.google=function(t,e){return new nt(e,t)};var yt={load:o(gt.load,gt)};n=function(){return yt}.call(e,i,e,t),!(void 0!==n&&(t.exports=n))}()},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){t.exports=i(0)}]);
//# sourceMappingURL=app-47e81e2a6a.js.map