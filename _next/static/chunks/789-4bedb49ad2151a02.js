(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{9749:function(t,e,o){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var o=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var r,n,i=[],l=!0,a=!1;try{for(o=o.call(t);!(l=(r=o.next()).done)&&(i.push(r.value),!e||i.length!==e);l=!0);}catch(c){a=!0,n=c}finally{try{l||null==o.return||o.return()}finally{if(a)throw n}}return i}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"===typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.src,o=t.sizes,r=t.unoptimized,a=void 0!==r&&r,c=t.priority,s=void 0!==c&&c,h=t.loading,y=t.lazyRoot,O=void 0===y?null:y,E=t.lazyBoundary,I=void 0===E?"200px":E,L=t.className,P=t.quality,R=t.width,_=t.height,C=t.style,T=t.objectFit,B=t.objectPosition,M=t.onLoadingComplete,q=(t.onError,t.placeholder),D=void 0===q?"empty":q,N=t.blurDataURL,W=b(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),X=u.useContext(g.ImageConfigContext),Y=u.useMemo((function(){var t=v||X||d.imageConfigDefault,e=l(t.deviceSizes).concat(l(t.imageSizes)).sort((function(t,e){return t-e})),o=t.deviceSizes.sort((function(t,e){return t-e}));return m({},t,{allSizes:e,deviceSizes:o})}),[X]),V=W,H=o?"responsive":"intrinsic";"layout"in V&&(V.layout&&(H=V.layout),delete V.layout);var F=x;if("loader"in V){if(V.loader){var U=V.loader;F=function(t){t.config;var e=b(t,["config"]);return U(e)}}delete V.loader}var G="";if(function(t){return"object"===typeof t&&(j(t)||function(t){return void 0!==t.src}(t))}(e)){var J=j(e)?e.default:e;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(N=N||J.blurDataURL,G=J.src,(!H||"fill"!==H)&&(_=_||J.height,R=R||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}e="string"===typeof e?e:G;var Q=A(R),$=A(_),K=A(P),Z=!s&&("lazy"===h||"undefined"===typeof h);(e.startsWith("data:")||e.startsWith("blob:"))&&(a=!0,Z=!1);w.has(e)&&(Z=!1);var tt,et=i(u.useState(!1),2),ot=et[0],rt=et[1],nt=i(p.useIntersection({rootRef:O,rootMargin:I,disabled:!Z}),3),it=nt[0],lt=nt[1],at=nt[2],ct=!Z||lt,st={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ut={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ft=!1,dt={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:T,objectPosition:B};0;0;var pt=Object.assign({},C,"raw"===H?{aspectRatio:"".concat(Q," / ").concat($)}:dt),gt="blur"!==D||ot?{}:{filter:"blur(20px)",backgroundSize:T||"cover",backgroundImage:'url("'.concat(N,'")'),backgroundPosition:B||"0% 0%"};if("fill"===H)st.display="block",st.position="absolute",st.top=0,st.left=0,st.bottom=0,st.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof $){var ht=$/Q,yt=isNaN(ht)?"100%":"".concat(100*ht,"%");"responsive"===H?(st.display="block",st.position="relative",ft=!0,ut.paddingTop=yt):"intrinsic"===H?(st.display="inline-block",st.position="relative",st.maxWidth="100%",ft=!0,ut.maxWidth="100%",tt="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===H&&(st.display="inline-block",st.position="relative",st.width=Q,st.height=$)}else 0;var mt={src:S,srcSet:void 0,sizes:void 0};ct&&(mt=z({config:Y,src:e,unoptimized:a,layout:H,width:Q,quality:K,sizes:o,loader:F}));var bt=e;0;var vt,wt="imagesrcset",St="imagesizes";wt="imageSrcSet",St="imageSizes";var Ot=(n(vt={},wt,mt.srcSet),n(vt,St,mt.sizes),vt),jt=u.default.useLayoutEffect,zt=u.useRef(M),At=u.useRef(e);u.useEffect((function(){zt.current=M}),[M]),jt((function(){At.current!==e&&(at(),At.current=e)}),[at,e]);var xt=m({isLazy:Z,imgAttributes:mt,heightInt:$,widthInt:Q,qualityInt:K,layout:H,className:L,imgStyle:pt,blurStyle:gt,loading:h,config:Y,unoptimized:a,placeholder:D,loader:F,srcString:bt,onLoadingCompleteRef:zt,setBlurComplete:rt,setIntersection:it,isVisible:ct},V);return u.default.createElement(u.default.Fragment,null,"raw"===H?u.default.createElement(k,Object.assign({},xt)):u.default.createElement("span",{style:st},ft?u.default.createElement("span",{style:ut},tt?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:tt}):null):null,u.default.createElement(k,Object.assign({},xt))),s?u.default.createElement(f.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+mt.src+mt.srcSet+mt.sizes,rel:"preload",as:"image",href:mt.srcSet?void 0:mt.src},Ot))):null)};var c,s,u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,o):{};r.get||r.set?Object.defineProperty(e,o,r):e[o]=t[o]}return e.default=t,e}(o(7294)),f=(c=o(3121))&&c.__esModule?c:{default:c},d=o(139),p=o(9246),g=o(8730),h=(o(670),o(2700));function y(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function m(t){for(var e=arguments,o=function(o){var r=null!=e[o]?e[o]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){y(t,e,r[e])}))},r=1;r<arguments.length;r++)o(r);return t}function b(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,S=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var O=new Map([["default",function(t){var e=t.config,o=t.src,r=t.width,n=t.quality;0;if(o.endsWith(".svg")&&!e.dangerouslyAllowSVG)return o;return"".concat(h.normalizePathTrailingSlash(e.path),"?url=").concat(encodeURIComponent(o),"&w=").concat(r,"&q=").concat(n||75)}],["imgix",function(t){var e=t.config,o=t.src,r=t.width,n=t.quality,i=new URL("".concat(e.path).concat(I(o))),l=i.searchParams;l.set("auto",l.get("auto")||"format"),l.set("fit",l.get("fit")||"max"),l.set("w",l.get("w")||r.toString()),n&&l.set("q",n.toString());return i.href}],["cloudinary",function(t){var e=t.config,o=t.src,r=t.width,n=t.quality,i=["f_auto","c_limit","w_"+r,"q_"+(n||"auto")].join(",")+"/";return"".concat(e.path).concat(i).concat(I(o))}],["akamai",function(t){var e=t.config,o=t.src,r=t.width;return"".concat(e.path).concat(I(o),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(t){return void 0!==t.default}function z(t){var e=t.config,o=t.src,r=t.unoptimized,n=t.layout,i=t.width,a=t.quality,c=t.sizes,s=t.loader;if(r)return{src:o,srcSet:void 0,sizes:void 0};var u=function(t,e,o,r){var n=t.deviceSizes,i=t.allSizes;if(r&&("fill"===o||"responsive"===o||"raw"===o)){for(var a,c=/(^|\s)(1?\d?\d)vw/g,s=[];a=c.exec(r);a)s.push(parseInt(a[2]));if(s.length){var u,f=.01*(u=Math).min.apply(u,l(s));return{widths:i.filter((function(t){return t>=n[0]*f})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof e||"fill"===o||"responsive"===o?{widths:n,kind:"w"}:{widths:l(new Set([e,2*e].map((function(t){return i.find((function(e){return e>=t}))||i[i.length-1]})))),kind:"x"}}(e,i,n,c),f=u.widths,d=u.kind,p=f.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:f.map((function(t,r){return"".concat(s({config:e,src:o,quality:a,width:t})," ").concat("w"===d?t:r+1).concat(d)})).join(", "),src:s({config:e,src:o,quality:a,width:f[p]})}}function A(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function x(t){var e,o=(null===(e=t.config)||void 0===e?void 0:e.loader)||"default",r=O.get(o);if(r)return r(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(o))}function E(t,e,o,r,n,i){t&&t.src!==S&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.parentNode&&(w.add(e),"blur"===r&&i(!0),null===n||void 0===n?void 0:n.current)){var o=t.naturalWidth,l=t.naturalHeight;n.current({naturalWidth:o,naturalHeight:l})}})))}var k=function(t){var e=t.imgAttributes,o=t.heightInt,r=t.widthInt,n=t.qualityInt,i=t.layout,l=t.className,a=t.imgStyle,c=t.blurStyle,s=t.isLazy,f=t.placeholder,d=t.loading,p=t.srcString,g=t.config,h=t.unoptimized,y=t.loader,v=t.onLoadingCompleteRef,w=t.setBlurComplete,S=t.setIntersection,O=t.onError,j=(t.isVisible,b(t,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},j,e,"raw"!==i||e.sizes?{}:{height:o,width:r},{decoding:"async","data-nimg":i,className:l,style:m({},a,c),ref:u.useCallback((function(t){S(t),(null===t||void 0===t?void 0:t.complete)&&E(t,p,0,f,v,w)}),[S,p,i,f,v,w]),onLoad:function(t){E(t.currentTarget,p,0,f,v,w)},onError:function(t){"blur"===f&&w(!0),O&&O(t)}})),(s||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},j,z({config:g,src:p,unoptimized:h,layout:i,width:r,quality:n,sizes:e.sizes,loader:y}),"raw"!==i||e.sizes?{}:{height:o,width:r},{decoding:"async","data-nimg":i,style:a,className:l,loading:d||"lazy"}))))};function I(t){return"/"===t[0]?t.slice(1):t}("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&(Object.assign(e.default,e),t.exports=e.default)},5675:function(t,e,o){t.exports=o(9749)},523:function(t){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,r=t.HTMLElement||t.Element,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||a,scrollIntoView:r.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?g.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):g.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;g.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof e?this.scrollTop:~~e)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var o=d(this),r=o.getBoundingClientRect(),i=this.getBoundingClientRect();o!==e.body?(g.call(this,o,o.scrollLeft+i.left-r.left,o.scrollTop+i.top-r.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function a(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!==typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"===typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function u(e,o){var r=t.getComputedStyle(e,null)["overflow"+o];return"auto"===r||"scroll"===r}function f(t){var e=s(t,"Y")&&u(t,"Y"),o=s(t,"X")&&u(t,"X");return e||o}function d(t){for(;t!==e.body&&!1===f(t);)t=t.parentNode||t.host;return t}function p(e){var o,r,n,l,a=(i()-e.startTime)/468;l=a=a>1?1:a,o=.5*(1-Math.cos(Math.PI*l)),r=e.startX+(e.x-e.startX)*o,n=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,r,n),r===e.x&&n===e.y||t.requestAnimationFrame(p.bind(t,e))}function g(o,r,l){var c,s,u,f,d=i();o===e.body?(c=t,s=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=n.scroll):(c=o,s=o.scrollLeft,u=o.scrollTop,f=a),p({scrollable:c,method:f,startTime:d,startX:s,startY:u,x:r,y:l})}}}}()},3194:function(t,e,o){t.exports=o(8773)},8773:function(t,e,o){"use strict";e.getMDXComponent=function(t,e){return c(t,e).default};var r=a(o(7294)),n=a(o(5893)),i=a(o(3935));function l(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,o=new WeakMap;return(l=function(t){return t?o:e})(t)}function a(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var o=l(e);if(o&&o.has(t))return o.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var a=n?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=t[i]}return r.default=t,o&&o.set(t,r),r}function c(t,e){const o={React:r,ReactDOM:i,_jsx_runtime:n,...e};return new Function(...Object.keys(o),t)(...Object.values(o))}}}]);