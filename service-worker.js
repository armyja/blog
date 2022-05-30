try{self["workbox:core:5.1.4"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.4"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class i extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const a=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class c{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:i}=this.findMatchingRoute({url:s,request:e,event:t});let a,c=i&&i.handler;if(!c&&this.s&&(c=this.s),c){try{a=c.handle({url:s,request:e,event:t,params:n})}catch(e){a=Promise.reject(e)}return a instanceof Promise&&this.i&&(a=a.catch(n=>this.i.handle({url:s,request:e,event:t}))),a}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const i of n){let n;const a=i.match({url:e,request:t,event:s});if(a)return n=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let r;const o=()=>(r||(r=new c,r.addFetchListener(),r.addCacheListener()),r);const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},h=e=>[u.prefix,e,u.suffix].filter(e=>e&&e.length>0).join("-"),l=e=>e||h(u.precache),f=e=>e||h(u.runtime);function d(e){e.then(()=>{})}const w=new Set;class p{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.u=e,this.h=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.u,this.h);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:i,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",(c,r)=>{const o=c.objectStore(e),u=t?o.index(t):o,h=[],l=u.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(h.push(a?e:e.value),i&&h.length>=i?r(h):e.continue()):r(h)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,i)=>{const a=this.o.transaction(e,t);a.onabort=()=>i(a.error),a.oncomplete=()=>n(),s(a,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,i)=>{const a=s.objectStore(t),c=a[e].apply(a,n);c.onsuccess=()=>i(c.result)})}close(){this.o&&(this.o.close(),this.o=null)}}p.prototype.OPEN_TIMEOUT=2e3;const g={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(g))for(const s of t)s in IDBObjectStore.prototype&&(p.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}const b=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class y{constructor(e){this.m=e,this.o=new p("workbox-expiration",1,{onupgradeneeded:e=>this.v(e)})}v(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.m)}async setTimestamp(e,t){const s={url:e=b(e),timestamp:t,cacheName:this.m,id:this._(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this._(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),a=[];let c=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.m&&(e&&n.timestamp<e||t&&c>=t?a.push(s.value):c++),s.continue()}else n(a)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}_(e){return this.m+"|"+b(e)}}class m{constructor(e,t={}){this.q=!1,this.R=!1,this.j=t.maxEntries,this.k=t.maxAgeSeconds,this.m=e,this.U=new y(e)}async expireEntries(){if(this.q)return void(this.R=!0);this.q=!0;const e=this.k?Date.now()-1e3*this.k:0,t=await this.U.expireEntries(e,this.j),s=await self.caches.open(this.m);for(const e of t)await s.delete(e);this.q=!1,this.R&&(this.R=!1,d(this.expireEntries()))}async updateTimestamp(e){await this.U.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.k){return await this.U.getTimestamp(e)<Date.now()-1e3*this.k}return!1}async delete(){this.R=!1,await this.U.expireEntries(1/0)}}try{self["workbox:cacheable-response:5.1.4"]&&_()}catch(e){}class v{constructor(e={}){this.L=e.statuses,this.N=e.headers}isResponseCacheable(e){let t=!0;return this.L&&(t=this.L.includes(e.status)),this.N&&t&&(t=Object.keys(this.N).some(t=>e.headers.get(t)===this.N[t])),t}}const x=(e,t)=>e.filter(e=>t in e),q=async({request:e,mode:t,plugins:s=[]})=>{const n=x(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},R=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const a=await self.caches.open(e),c=await q({plugins:i,request:t,mode:"read"});let r=await a.match(c,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;r=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:r,request:c})}return r},j=async({cacheName:e,request:s,response:n,event:i,plugins:c=[],matchOptions:r})=>{const o=await q({plugins:c,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:a(o.url)});const u=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,a=!1;for(const t of n)if("cacheWillUpdate"in t){a=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return a||(i=i&&200===i.status?i:void 0),i||null})({event:i,plugins:c,response:n,request:o});if(!u)return;const h=await self.caches.open(e),l=x(c,"cacheDidUpdate"),f=l.length>0?await R({cacheName:e,matchOptions:r,request:o}):null;try{await h.put(o,u)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const t of l)await t.cacheDidUpdate.call(t,{cacheName:e,event:i,oldResponse:f,newResponse:u,request:o})},k=R,U=async({request:e,fetchOptions:s,event:n,plugins:i=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const a=x(i,"fetchDidFail"),c=a.length>0?e.clone():null;try{for(const t of i)if("requestWillFetch"in t){const s=t.requestWillFetch,i=e.clone();e=await s.call(t,{request:i,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of i)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:r,response:t}));return t}catch(e){for(const t of a)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:c.clone(),request:r.clone()});throw e}};try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}const L={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let N;async function M(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=t?t(n):n,a=function(){if(void 0===N){const e=new Response("");if("body"in e)try{new Response(e.body),N=!0}catch(e){N=!1}N=!1}return N}()?s.body:await s.blob();return new Response(a,i)}try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}function T(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),a=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:a.href}}class E{constructor(e){this.m=l(e),this.M=new Map,this.T=new Map,this.K=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=T(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this.M.has(i)&&this.M.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.M.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.K.has(e)&&this.K.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.K.set(e,n.integrity)}if(this.M.set(i,e),this.T.set(i,a),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],i=await self.caches.open(this.m),a=await i.keys(),c=new Set(a.map(e=>e.url));for(const[e,t]of this.M)c.has(t)?n.push(e):s.push({cacheKey:t,url:e});const r=s.map(({cacheKey:s,url:n})=>{const i=this.K.get(s),a=this.T.get(n);return this.O({cacheKey:s,cacheMode:a,event:e,integrity:i,plugins:t,url:n})});await Promise.all(r);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.m),t=await e.keys(),s=new Set(this.M.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}async O({cacheKey:e,url:s,cacheMode:n,event:i,plugins:a,integrity:c}){const r=new Request(s,{integrity:c,cache:n,credentials:"same-origin"});let o,u=await U({event:i,plugins:a,request:r});for(const e of a||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:i,request:r,response:u}):u.status<400))throw new t("bad-precaching-response",{url:s,status:u.status});u.redirected&&(u=await M(u)),await j({event:i,plugins:a,response:u,request:e===s?r:new Request(e),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.M}getCachedURLs(){return[...this.M.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.M.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.m,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),i=new Request(e);return()=>n({request:i})}}let K;const O=()=>(K||(K=new E),K);const P=(e,t)=>{const s=O().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const c=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(a,t);if(yield c.href,s&&c.pathname.endsWith("/")){const e=new URL(c.href);e.pathname+=s,yield e.href}if(n){const e=new URL(c.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:a});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let A=!1;function D(e){A||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=l();self.addEventListener("fetch",a=>{const c=P(a.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!c)return;let r=self.caches.open(i).then(e=>e.match(c)).then(e=>e||fetch(c));a.respondWith(r)})})(e),A=!0)}const I=[],C={get:()=>I,add(e){I.push(...e)}},S=e=>{const t=O(),s=C.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},W=e=>{const t=O();e.waitUntil(t.activate())};var B;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),B={},function(e){O().addToCacheList(e),e.length>0&&(self.addEventListener("install",S),self.addEventListener("activate",W))}([{url:"/_next/server/middleware-build-manifest.js",revision:"e13af99ac9e238a6ec428ab32fad4aab"},{url:"/_next/server/middleware-manifest.json",revision:"4f5ca87a6870c96ad6fb0f65adfdac9b"},{url:"/_next/server/middleware-react-loadable-manifest.js",revision:"9cb03a777d15d804777de97f69e84690"},{url:"/_next/static/ccXeI_MiQA0m_ffjTW1fw/_buildManifest.js",revision:"f7b17eb08a43819e0808c582047b8cc5"},{url:"/_next/static/ccXeI_MiQA0m_ffjTW1fw/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/ccXeI_MiQA0m_ffjTW1fw/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/253-94a251e32c72ea84.js",revision:"3c914e74446a5744d26e3e1d0768814a"},{url:"/_next/static/chunks/506.42523dc7869c3041.js",revision:"44eabf55cc4a52be25475ce4e8f0779d"},{url:"/_next/static/chunks/765.2846cbde22883716.js",revision:"7562f66a710fa572b811a75367bef0d9"},{url:"/_next/static/chunks/789-4bedb49ad2151a02.js",revision:"2d97d6d5787704721e78ac58638eaab4"},{url:"/_next/static/chunks/804-8ef0009183f9747c.js",revision:"6a7e990765628b27b65b14096e7c4816"},{url:"/_next/static/chunks/83.ae48488ba363c977.js",revision:"8734e234abc07ce5eab39b0fa7f8fc4d"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"c53f07f31313b389b89993a3f36abdec"},{url:"/_next/static/chunks/main-ee5d5a2fd99a0519.js",revision:"2cb031a3f2a4c00c8713d7a575633d9d"},{url:"/_next/static/chunks/pages/404-a8d8c366a6b1fdec.js",revision:"8a297ed7821b5eb4e307aada8a344056"},{url:"/_next/static/chunks/pages/[locale]-e2079b4ca9565443.js",revision:"6215808920b572db71c22439c01df5f5"},{url:"/_next/static/chunks/pages/[locale]/404-8f6e7bdd45e96660.js",revision:"b8f8013075325d48ff2ae47a36adf8f6"},{url:"/_next/static/chunks/pages/[locale]/about-60377a7b052f84bb.js",revision:"f4a0012c4f85240470bef910e5e686a3"},{url:"/_next/static/chunks/pages/[locale]/blog-f488d316a246d275.js",revision:"ada9a8f482dca44e6b91a0424380d8ae"},{url:"/_next/static/chunks/pages/[locale]/blog/[...slug]-fb0b893a81617c06.js",revision:"583b9df59e85ae6a748c099701995587"},{url:"/_next/static/chunks/pages/[locale]/blog/page/[page]-653e8054978874f6.js",revision:"881cff78e7a818033362603ab50d214e"},{url:"/_next/static/chunks/pages/[locale]/tags-a47e8207b912beb8.js",revision:"5396432bf1369b503186bfe4cecf37e4"},{url:"/_next/static/chunks/pages/_app-075a31ccc190937f.js",revision:"9803f025e83fe3b21f845a3238eaf89e"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"ef4f0cf72a09cf216936987a3c5393e6"},{url:"/_next/static/chunks/pages/about-cb0453be16850bd5.js",revision:"85da4ec35132bd63da9d27c152baf5ad"},{url:"/_next/static/chunks/pages/blog-fb762480d6387066.js",revision:"330095be1e5b9de793ba38bf34021fe9"},{url:"/_next/static/chunks/pages/blog/[...slug]-f7aa9d5083ac69ce.js",revision:"c4b9b9c154f59d05b6122085524ac3cd"},{url:"/_next/static/chunks/pages/blog/page/[page]-99cdcb43a0d2d997.js",revision:"0f8f0953dd16ebb0921efe22989e985c"},{url:"/_next/static/chunks/pages/index-5ac7cfc61686b747.js",revision:"b7512ba348567175ee39a8609c538c45"},{url:"/_next/static/chunks/pages/tags-543494f735f7c487.js",revision:"bad9b52d1fe464488c21db3b9f1431a1"},{url:"/_next/static/chunks/pages/tags/[tag]-91920c6a2901467e.js",revision:"631ef89ec83cad1727d179e3441f33f0"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-b4d9d1d68d191ed2.js",revision:"7a7ee0cb38e7410c6f910ec329575c02"},{url:"/_next/static/css/7c22d30f60c141bf.css",revision:"ebe03e7846606c581249a89c8e36d3e1"},{url:"/_next/static/css/7e32120c0da244b5.css",revision:"a45f5ca18606c4f8ce70f131f41dd003"}]),D(B),function(e,s,a){let c;if("string"==typeof e){const t=new URL(e,location.href);c=new n(({url:e})=>e.href===t.href,s,a)}else if(e instanceof RegExp)c=new i(e,s,a);else if("function"==typeof e)c=new n(e,s,a);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=e}o().registerRoute(c)}(/^https?.*/,new class{constructor(e={}){if(this.m=f(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this.P=t?e.plugins:[L,...e.plugins]}else this.P=[L];this.A=e.networkTimeoutSeconds||0,this.D=e.fetchOptions,this.I=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const i=[];let a;if(this.A){const{id:t,promise:c}=this.C({request:s,event:e,logs:n});a=t,i.push(c)}const c=this.S({timeoutId:a,request:s,event:e,logs:n});i.push(c);let r=await Promise.race(i);if(r||(r=await c),!r)throw new t("no-response",{url:s.url});return r}C({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.W({request:e,event:s}))},1e3*this.A)}),id:n}}async S({timeoutId:e,request:t,logs:s,event:n}){let i,a;try{a=await U({request:t,event:n,fetchOptions:this.D,plugins:this.P})}catch(e){i=e}if(e&&clearTimeout(e),i||!a)a=await this.W({request:t,event:n});else{const e=a.clone(),s=j({cacheName:this.m,request:t,response:e,event:n,plugins:this.P});if(n)try{n.waitUntil(s)}catch(e){}}return a}W({event:e,request:t}){return k({cacheName:this.m,request:t,event:e,matchOptions:this.I,plugins:this.P})}}({cacheName:"https-calls",networkTimeoutSeconds:15,plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.B(n),a=this.F(s);d(a.expireEntries());const c=a.updateTimestamp(t.url);if(e)try{e.waitUntil(c)}catch(e){}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.F(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.H=e,this.k=e.maxAgeSeconds,this.G=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),w.add(t))}F(e){if(e===f())throw new t("expire-custom-caches-only");let s=this.G.get(e);return s||(s=new m(e,this.H),this.G.set(e,s)),s}B(e){if(!this.k)return!0;const t=this.X(e);if(null===t)return!0;return t>=Date.now()-1e3*this.k}X(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.G)await self.caches.delete(e),await t.delete();this.G=new Map}}({maxEntries:150,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new class{constructor(e){this.cacheWillUpdate=async({response:e})=>this.J.isResponseCacheable(e)?e:null,this.J=new v(e)}}({statuses:[0,200]})]}),"GET");
