(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{9671:function(u,t,e){const D=e(1701);u.exports=r;const o=Object.hasOwnProperty;function r(){if(!(this instanceof r))return new r;this.reset()}function n(u,t){return"string"!==typeof u?"":(t||(u=u.toLowerCase()),u.replace(D,"").replace(/ /g,"-"))}r.prototype.slug=function(u,t){const e=this;let D=n(u,!0===t);const r=D;for(;o.call(e.occurrences,D);)e.occurrences[r]++,D=r+"-"+e.occurrences[r];return e.occurrences[D]=0,D},r.prototype.reset=function(){this.occurrences=Object.create(null)},r.slug=n},1701:function(u){u.exports=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08BE-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D04\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31BB-\u31EF\u3200-\u33FF\u4DB6-\u4DFF\u9FF0-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7C7-\uA7F6\uA828-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB68-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD47-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD-\uDDCF\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC60-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD00-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D-\uD83F\uD87B-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g},9749:function(u,t,e){"use strict";function D(u,t){(null==t||t>u.length)&&(t=u.length);for(var e=0,D=new Array(t);e<t;e++)D[e]=u[e];return D}function o(u,t,e){return t in u?Object.defineProperty(u,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):u[t]=e,u}function r(u,t){return function(u){if(Array.isArray(u))return u}(u)||function(u,t){var e=null==u?null:"undefined"!==typeof Symbol&&u[Symbol.iterator]||u["@@iterator"];if(null!=e){var D,o,r=[],n=!0,F=!1;try{for(e=e.call(u);!(n=(D=e.next()).done)&&(r.push(D.value),!t||r.length!==t);n=!0);}catch(i){F=!0,o=i}finally{try{n||null==e.return||e.return()}finally{if(F)throw o}}return r}}(u,t)||F(u,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(u){return function(u){if(Array.isArray(u))return D(u)}(u)||function(u){if("undefined"!==typeof Symbol&&null!=u[Symbol.iterator]||null!=u["@@iterator"])return Array.from(u)}(u)||F(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(u,t){if(u){if("string"===typeof u)return D(u,t);var e=Object.prototype.toString.call(u).slice(8,-1);return"Object"===e&&u.constructor&&(e=u.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?D(u,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(u){var t=u.src,e=u.sizes,D=u.unoptimized,F=void 0!==D&&D,i=u.priority,l=void 0!==i&&i,C=u.loading,f=u.lazyRoot,y=void 0===f?null:f,S=u.lazyBoundary,j=void 0===S?"200px":S,x=u.className,z=u.quality,k=u.width,I=u.height,L=u.style,P=u.objectFit,R=u.objectPosition,_=u.onLoadingComplete,T=(u.onError,u.placeholder),M=void 0===T?"empty":T,q=u.blurDataURL,N=B(u,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),W=a.useContext(A.ImageConfigContext),X=a.useMemo((function(){var u=p||W||s.imageConfigDefault,t=n(u.deviceSizes).concat(n(u.imageSizes)).sort((function(u,t){return u-t})),e=u.deviceSizes.sort((function(u,t){return u-t}));return d({},u,{allSizes:t,deviceSizes:e})}),[W]),Y=N,V=e?"responsive":"intrinsic";"layout"in Y&&(Y.layout&&(V=Y.layout),delete Y.layout);var H=w;if("loader"in Y){if(Y.loader){var U=Y.loader;H=function(u){u.config;var t=B(u,["config"]);return U(t)}}delete Y.loader}var G="";if(function(u){return"object"===typeof u&&(m(u)||function(u){return void 0!==u.src}(u))}(t)){var J=m(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(q=q||J.blurDataURL,G=J.src,(!V||"fill"!==V)&&(I=I||J.height,k=k||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:G;var Q=v(k),$=v(I),K=v(z),Z=!l&&("lazy"===C||"undefined"===typeof C);(t.startsWith("data:")||t.startsWith("blob:"))&&(F=!0,Z=!1);g.has(t)&&(Z=!1);var uu,tu=r(a.useState(!1),2),eu=tu[0],Du=tu[1],ou=r(E.useIntersection({rootRef:y,rootMargin:j,disabled:!Z}),3),ru=ou[0],nu=ou[1],Fu=ou[2],iu=!Z||nu,lu={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},au={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},cu=!1,su={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:R};0;0;var Eu=Object.assign({},L,"raw"===V?{aspectRatio:"".concat(Q," / ").concat($)}:su),Au="blur"!==M||eu?{}:{filter:"blur(20px)",backgroundSize:P||"cover",backgroundImage:'url("'.concat(q,'")'),backgroundPosition:R||"0% 0%"};if("fill"===V)lu.display="block",lu.position="absolute",lu.top=0,lu.left=0,lu.bottom=0,lu.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof $){var Cu=$/Q,fu=isNaN(Cu)?"100%":"".concat(100*Cu,"%");"responsive"===V?(lu.display="block",lu.position="relative",cu=!0,au.paddingTop=fu):"intrinsic"===V?(lu.display="inline-block",lu.position="relative",lu.maxWidth="100%",cu=!0,au.maxWidth="100%",uu="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===V&&(lu.display="inline-block",lu.position="relative",lu.width=Q,lu.height=$)}else 0;var du={src:h,srcSet:void 0,sizes:void 0};iu&&(du=b({config:X,src:t,unoptimized:F,layout:V,width:Q,quality:K,sizes:e,loader:H}));var Bu=t;0;var pu,gu="imagesrcset",hu="imagesizes";gu="imageSrcSet",hu="imageSizes";var yu=(o(pu={},gu,du.srcSet),o(pu,hu,du.sizes),pu),mu=a.default.useLayoutEffect,bu=a.useRef(_),vu=a.useRef(t);a.useEffect((function(){bu.current=_}),[_]),mu((function(){vu.current!==t&&(Fu(),vu.current=t)}),[Fu,t]);var wu=d({isLazy:Z,imgAttributes:du,heightInt:$,widthInt:Q,qualityInt:K,layout:V,className:x,imgStyle:Eu,blurStyle:Au,loading:C,config:X,unoptimized:F,placeholder:M,loader:H,srcString:Bu,onLoadingCompleteRef:bu,setBlurComplete:Du,setIntersection:ru,isVisible:iu},Y);return a.default.createElement(a.default.Fragment,null,"raw"===V?a.default.createElement(O,Object.assign({},wu)):a.default.createElement("span",{style:lu},cu?a.default.createElement("span",{style:au},uu?a.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:uu}):null):null,a.default.createElement(O,Object.assign({},wu))),l?a.default.createElement(c.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+du.src+du.srcSet+du.sizes,rel:"preload",as:"image",href:du.srcSet?void 0:du.src},yu))):null)};var i,l,a=function(u){if(u&&u.__esModule)return u;var t={};if(null!=u)for(var e in u)if(Object.prototype.hasOwnProperty.call(u,e)){var D=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(u,e):{};D.get||D.set?Object.defineProperty(t,e,D):t[e]=u[e]}return t.default=u,t}(e(7294)),c=(i=e(3121))&&i.__esModule?i:{default:i},s=e(139),E=e(9246),A=e(8730),C=(e(670),e(2700));function f(u,t,e){return t in u?Object.defineProperty(u,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):u[t]=e,u}function d(u){for(var t=arguments,e=function(e){var D=null!=t[e]?t[e]:{},o=Object.keys(D);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(D).filter((function(u){return Object.getOwnPropertyDescriptor(D,u).enumerable})))),o.forEach((function(t){f(u,t,D[t])}))},D=1;D<arguments.length;D++)e(D);return u}function B(u,t){if(null==u)return{};var e,D,o=function(u,t){if(null==u)return{};var e,D,o={},r=Object.keys(u);for(D=0;D<r.length;D++)e=r[D],t.indexOf(e)>=0||(o[e]=u[e]);return o}(u,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(u);for(D=0;D<r.length;D++)e=r[D],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(u,e)&&(o[e]=u[e])}return o}l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},g=new Set,h=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(u){var t=u.config,e=u.src,D=u.width,o=u.quality;0;if(e.endsWith(".svg")&&!t.dangerouslyAllowSVG)return e;return"".concat(C.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(e),"&w=").concat(D,"&q=").concat(o||75)}],["imgix",function(u){var t=u.config,e=u.src,D=u.width,o=u.quality,r=new URL("".concat(t.path).concat(j(e))),n=r.searchParams;n.set("auto",n.get("auto")||"format"),n.set("fit",n.get("fit")||"max"),n.set("w",n.get("w")||D.toString()),o&&n.set("q",o.toString());return r.href}],["cloudinary",function(u){var t=u.config,e=u.src,D=u.width,o=u.quality,r=["f_auto","c_limit","w_"+D,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(j(e))}],["akamai",function(u){var t=u.config,e=u.src,D=u.width;return"".concat(t.path).concat(j(e),"?imwidth=").concat(D)}],["custom",function(u){var t=u.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function m(u){return void 0!==u.default}function b(u){var t=u.config,e=u.src,D=u.unoptimized,o=u.layout,r=u.width,F=u.quality,i=u.sizes,l=u.loader;if(D)return{src:e,srcSet:void 0,sizes:void 0};var a=function(u,t,e,D){var o=u.deviceSizes,r=u.allSizes;if(D&&("fill"===e||"responsive"===e||"raw"===e)){for(var F,i=/(^|\s)(1?\d?\d)vw/g,l=[];F=i.exec(D);F)l.push(parseInt(F[2]));if(l.length){var a,c=.01*(a=Math).min.apply(a,n(l));return{widths:r.filter((function(u){return u>=o[0]*c})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:o,kind:"w"}:{widths:n(new Set([t,2*t].map((function(u){return r.find((function(t){return t>=u}))||r[r.length-1]})))),kind:"x"}}(t,r,o,i),c=a.widths,s=a.kind,E=c.length-1;return{sizes:i||"w"!==s?i:"100vw",srcSet:c.map((function(u,D){return"".concat(l({config:t,src:e,quality:F,width:u})," ").concat("w"===s?u:D+1).concat(s)})).join(", "),src:l({config:t,src:e,quality:F,width:c[E]})}}function v(u){return"number"===typeof u?u:"string"===typeof u?parseInt(u,10):void 0}function w(u){var t,e=(null===(t=u.config)||void 0===t?void 0:t.loader)||"default",D=y.get(e);if(D)return D(u);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(e))}function S(u,t,e,D,o,r){u&&u.src!==h&&u["data-loaded-src"]!==t&&(u["data-loaded-src"]=t,("decode"in u?u.decode():Promise.resolve()).catch((function(){})).then((function(){if(u.parentNode&&(g.add(t),"blur"===D&&r(!0),null===o||void 0===o?void 0:o.current)){var e=u.naturalWidth,n=u.naturalHeight;o.current({naturalWidth:e,naturalHeight:n})}})))}var O=function(u){var t=u.imgAttributes,e=u.heightInt,D=u.widthInt,o=u.qualityInt,r=u.layout,n=u.className,F=u.imgStyle,i=u.blurStyle,l=u.isLazy,c=u.placeholder,s=u.loading,E=u.srcString,A=u.config,C=u.unoptimized,f=u.loader,p=u.onLoadingCompleteRef,g=u.setBlurComplete,h=u.setIntersection,y=u.onError,m=(u.isVisible,B(u,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},m,t,"raw"!==r||t.sizes?{}:{height:e,width:D},{decoding:"async","data-nimg":r,className:n,style:d({},F,i),ref:a.useCallback((function(u){h(u),(null===u||void 0===u?void 0:u.complete)&&S(u,E,0,c,p,g)}),[h,E,r,c,p,g]),onLoad:function(u){S(u.currentTarget,E,0,c,p,g)},onError:function(u){"blur"===c&&g(!0),y&&y(u)}})),(l||"blur"===c)&&a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},m,b({config:A,src:E,unoptimized:C,layout:r,width:D,quality:o,sizes:t.sizes,loader:f}),"raw"!==r||t.sizes?{}:{height:e,width:D},{decoding:"async","data-nimg":r,style:F,className:n,loading:s||"lazy"}))))};function j(u){return"/"===u[0]?u.slice(1):u}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),u.exports=t.default)},5675:function(u,t,e){u.exports=e(9749)},523:function(u){!function(){"use strict";u.exports={polyfill:function(){var u=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===u.__forceSmoothScrollPolyfill__){var e,D=u.HTMLElement||u.Element,o={scroll:u.scroll||u.scrollTo,scrollBy:u.scrollBy,elementScroll:D.prototype.scroll||F,scrollIntoView:D.prototype.scrollIntoView},r=u.performance&&u.performance.now?u.performance.now.bind(u.performance):Date.now,n=(e=u.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(e)?1:0);u.scroll=u.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?A.call(u,t.body,void 0!==arguments[0].left?~~arguments[0].left:u.scrollX||u.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:u.scrollY||u.pageYOffset):o.scroll.call(u,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:u.scrollX||u.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:u.scrollY||u.pageYOffset))},u.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?o.scrollBy.call(u,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):A.call(u,t.body,~~arguments[0].left+(u.scrollX||u.pageXOffset),~~arguments[0].top+(u.scrollY||u.pageYOffset)))},D.prototype.scroll=D.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var u=arguments[0].left,t=arguments[0].top;A.call(this,this,"undefined"===typeof u?this.scrollLeft:~~u,"undefined"===typeof t?this.scrollTop:~~t)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},D.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},D.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var e=s(this),D=e.getBoundingClientRect(),r=this.getBoundingClientRect();e!==t.body?(A.call(this,e,e.scrollLeft+r.left-D.left,e.scrollTop+r.top-D.top),"fixed"!==u.getComputedStyle(e).position&&u.scrollBy({left:D.left,top:D.top,behavior:"smooth"})):u.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function F(u,t){this.scrollLeft=u,this.scrollTop=t}function i(u){if(null===u||"object"!==typeof u||void 0===u.behavior||"auto"===u.behavior||"instant"===u.behavior)return!0;if("object"===typeof u&&"smooth"===u.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+u.behavior+" is not a valid value for enumeration ScrollBehavior.")}function l(u,t){return"Y"===t?u.clientHeight+n<u.scrollHeight:"X"===t?u.clientWidth+n<u.scrollWidth:void 0}function a(t,e){var D=u.getComputedStyle(t,null)["overflow"+e];return"auto"===D||"scroll"===D}function c(u){var t=l(u,"Y")&&a(u,"Y"),e=l(u,"X")&&a(u,"X");return t||e}function s(u){for(;u!==t.body&&!1===c(u);)u=u.parentNode||u.host;return u}function E(t){var e,D,o,n,F=(r()-t.startTime)/468;n=F=F>1?1:F,e=.5*(1-Math.cos(Math.PI*n)),D=t.startX+(t.x-t.startX)*e,o=t.startY+(t.y-t.startY)*e,t.method.call(t.scrollable,D,o),D===t.x&&o===t.y||u.requestAnimationFrame(E.bind(u,t))}function A(e,D,n){var i,l,a,c,s=r();e===t.body?(i=u,l=u.scrollX||u.pageXOffset,a=u.scrollY||u.pageYOffset,c=o.scroll):(i=e,l=e.scrollLeft,a=e.scrollTop,c=F),E({scrollable:i,method:c,startTime:s,startX:l,startY:a,x:D,y:n})}}}}()},3194:function(u,t,e){u.exports=e(8773)},8773:function(u,t,e){"use strict";t.getMDXComponent=function(u,t){return i(u,t).default};var D=F(e(7294)),o=F(e(5893)),r=F(e(3935));function n(u){if("function"!==typeof WeakMap)return null;var t=new WeakMap,e=new WeakMap;return(n=function(u){return u?e:t})(u)}function F(u,t){if(!t&&u&&u.__esModule)return u;if(null===u||"object"!==typeof u&&"function"!==typeof u)return{default:u};var e=n(t);if(e&&e.has(u))return e.get(u);var D={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in u)if("default"!==r&&Object.prototype.hasOwnProperty.call(u,r)){var F=o?Object.getOwnPropertyDescriptor(u,r):null;F&&(F.get||F.set)?Object.defineProperty(D,r,F):D[r]=u[r]}return D.default=u,e&&e.set(u,D),D}function i(u,t){const e={React:D,ReactDOM:r,_jsx_runtime:o,...t};return new Function(...Object.keys(e),u)(...Object.values(e))}}}]);