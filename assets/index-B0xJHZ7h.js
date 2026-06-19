(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var yo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(n,e){if(!n)throw Kt(e)},Kt=function(n){return new Error("Firebase Database ("+Ya.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Du=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},fr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(h=64)),i.push(t[d],t[u],t[h],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qa(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Du(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||u==null)throw new xu;const h=r<<2|a>>4;if(i.push(h),l!==64){const p=a<<4&240|l>>2;if(i.push(p),u!==64){const m=l<<6&192|u;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ja=function(n){const e=Qa(n);return fr.encodeByteArray(e,!0)},oi=function(n){return Ja(n).replace(/\./g,"")},ai=function(n){try{return fr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n){return Xa(void 0,n)}function Xa(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!$u(t)||(n[t]=Xa(n[t],e[t]));return n}function $u(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=()=>Fu().__FIREBASE_DEFAULTS__,Bu=()=>{if(typeof process>"u"||typeof yo>"u")return;const n=yo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ai(n[1]);return e&&JSON.parse(e)},pr=()=>{try{return Uu()||Bu()||Hu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Za=n=>{var e,t;return(t=(e=pr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Wu=n=>{const e=Za(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ec=()=>{var n;return(n=pr())===null||n===void 0?void 0:n.config},tc=n=>{var e;return(e=pr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[oi(JSON.stringify(t)),oi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function ju(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function nc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zu(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ku(){return Ya.NODE_ADMIN===!0}function qu(){try{return typeof indexedDB=="object"}catch{return!1}}function Yu(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="FirebaseError";class it extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Qu,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ju(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new it(s,a,i)}}function Ju(n,e){return n.replace(Xu,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Xu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(n){return JSON.parse(n)}function Z(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=wn(ai(r[0])||""),t=wn(ai(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Zu=function(n){const e=ic(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ed=function(n){const e=ic(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function pt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ci(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function li(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ui(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(wo(r)&&wo(o)){if(!ui(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function wo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),d=1518500249):(l=r^o^a,d=1859775393):u<60?(l=r&o|a&(r|o),d=2400959708):(l=r^o^a,d=3395469782);const h=(s<<5|s>>>27)+l+c+d+i[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function nd(n,e){const t=new id(n,e);return t.subscribe.bind(t)}class id{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");sd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=hs),s.error===void 0&&(s.error=hs),s.complete===void 0&&(s.complete=hs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function hs(){}function $t(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,E(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Wi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n){return n&&n._delegate?n._delegate:n}class mt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new me;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cd(e))try{this.getOrInitializeService({instanceIdentifier:rt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rt){return this.instances.has(e)}getOptions(e=rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ad(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=rt){return this.component?this.component.multipleInstances?e:rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ad(n){return n===rt?void 0:n}function cd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new od(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const ud={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},dd=j.INFO,hd={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},fd=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=hd[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gr{constructor(e){this.name=e,this._logLevel=dd,this._logHandler=fd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ud[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const pd=(n,e)=>e.some(t=>n instanceof t);let bo,Eo;function md(){return bo||(bo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gd(){return Eo||(Eo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sc=new WeakMap,Fs=new WeakMap,rc=new WeakMap,fs=new WeakMap,_r=new WeakMap;function _d(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(qe(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&sc.set(t,n)}).catch(()=>{}),_r.set(e,n),e}function vd(n){if(Fs.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Fs.set(n,e)}let Us={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yd(n){Us=n(Us)}function wd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ps(this),e,...t);return rc.set(i,e.sort?e.sort():[e]),qe(i)}:gd().includes(n)?function(...e){return n.apply(ps(this),e),qe(sc.get(this))}:function(...e){return qe(n.apply(ps(this),e))}}function bd(n){return typeof n=="function"?wd(n):(n instanceof IDBTransaction&&vd(n),pd(n,md())?new Proxy(n,Us):n)}function qe(n){if(n instanceof IDBRequest)return _d(n);if(fs.has(n))return fs.get(n);const e=bd(n);return e!==n&&(fs.set(n,e),_r.set(e,n)),e}const ps=n=>_r.get(n);function Ed(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=qe(o);return i&&o.addEventListener("upgradeneeded",c=>{i(qe(o.result),c.oldVersion,c.newVersion,qe(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Id=["get","getKey","getAll","getAllKeys","count"],Cd=["put","add","delete","clear"],ms=new Map;function Io(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ms.get(e))return ms.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Cd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Id.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return ms.set(e,r),r}yd(n=>({...n,get:(e,t,i)=>Io(e,t)||n.get(e,t,i),has:(e,t)=>!!Io(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Sd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Sd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bs="@firebase/app",Co="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new gr("@firebase/app"),Td="@firebase/app-compat",Rd="@firebase/analytics-compat",Nd="@firebase/analytics",Ad="@firebase/app-check-compat",Pd="@firebase/app-check",Md="@firebase/auth",Od="@firebase/auth-compat",Dd="@firebase/database",xd="@firebase/data-connect",Ld="@firebase/database-compat",$d="@firebase/functions",Fd="@firebase/functions-compat",Ud="@firebase/installations",Bd="@firebase/installations-compat",Hd="@firebase/messaging",Wd="@firebase/messaging-compat",Vd="@firebase/performance",jd="@firebase/performance-compat",Gd="@firebase/remote-config",zd="@firebase/remote-config-compat",Kd="@firebase/storage",qd="@firebase/storage-compat",Yd="@firebase/firestore",Qd="@firebase/vertexai-preview",Jd="@firebase/firestore-compat",Xd="firebase",Zd="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="[DEFAULT]",eh={[Bs]:"fire-core",[Td]:"fire-core-compat",[Nd]:"fire-analytics",[Rd]:"fire-analytics-compat",[Pd]:"fire-app-check",[Ad]:"fire-app-check-compat",[Md]:"fire-auth",[Od]:"fire-auth-compat",[Dd]:"fire-rtdb",[xd]:"fire-data-connect",[Ld]:"fire-rtdb-compat",[$d]:"fire-fn",[Fd]:"fire-fn-compat",[Ud]:"fire-iid",[Bd]:"fire-iid-compat",[Hd]:"fire-fcm",[Wd]:"fire-fcm-compat",[Vd]:"fire-perf",[jd]:"fire-perf-compat",[Gd]:"fire-rc",[zd]:"fire-rc-compat",[Kd]:"fire-gcs",[qd]:"fire-gcs-compat",[Yd]:"fire-fst",[Jd]:"fire-fst-compat",[Qd]:"fire-vertex","fire-js":"fire-js",[Xd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Map,th=new Map,Ws=new Map;function ko(n,e){try{n.container.addComponent(e)}catch(t){Oe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ft(n){const e=n.name;if(Ws.has(e))return Oe.debug(`There were multiple attempts to register component ${e}.`),!1;Ws.set(e,n);for(const t of di.values())ko(t,n);for(const t of th.values())ko(t,n);return!0}function vr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ge(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ye=new On("app","Firebase",nh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=Zd;function oc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Hs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ye.create("bad-app-name",{appName:String(s)});if(t||(t=ec()),!t)throw Ye.create("no-options");const r=di.get(s);if(r){if(ui(t,r.options)&&ui(i,r.config))return r;throw Ye.create("duplicate-app",{appName:s})}const o=new ld(s);for(const c of Ws.values())o.addComponent(c);const a=new ih(t,i,o);return di.set(s,a),a}function ac(n=Hs){const e=di.get(n);if(!e&&n===Hs&&ec())return oc();if(!e)throw Ye.create("no-app",{appName:n});return e}function Qe(n,e,t){var i;let s=(i=eh[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oe.warn(a.join(" "));return}Ft(new mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="firebase-heartbeat-database",rh=1,bn="firebase-heartbeat-store";let gs=null;function cc(){return gs||(gs=Ed(sh,rh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(bn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ye.create("idb-open",{originalErrorMessage:n.message})})),gs}async function oh(n){try{const t=(await cc()).transaction(bn),i=await t.objectStore(bn).get(lc(n));return await t.done,i}catch(e){if(e instanceof it)Oe.warn(e.message);else{const t=Ye.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oe.warn(t.message)}}}async function So(n,e){try{const i=(await cc()).transaction(bn,"readwrite");await i.objectStore(bn).put(e,lc(n)),await i.done}catch(t){if(t instanceof it)Oe.warn(t.message);else{const i=Ye.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Oe.warn(i.message)}}}function lc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=1024,ch=30*24*60*60*1e3;class lh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dh(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=To();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ch}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Oe.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=To(),{heartbeatsToSend:i,unsentEntries:s}=uh(this._heartbeatsCache.heartbeats),r=oi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Oe.warn(t),""}}}function To(){return new Date().toISOString().substring(0,10)}function uh(n,e=ah){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ro(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ro(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class dh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qu()?Yu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return So(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return So(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ro(n){return oi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n){Ft(new mt("platform-logger",e=>new kd(e),"PRIVATE")),Ft(new mt("heartbeat",e=>new lh(e),"PRIVATE")),Qe(Bs,Co,n),Qe(Bs,Co,"esm2017"),Qe("fire-js","")}hh("");var fh="firebase",ph="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(fh,ph,"app");function yr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function uc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mh=uc,dc=new On("auth","Firebase",uc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new gr("@firebase/auth");function gh(n,...e){hi.logLevel<=j.WARN&&hi.warn(`Auth (${Yt}): ${n}`,...e)}function Qn(n,...e){hi.logLevel<=j.ERROR&&hi.error(`Auth (${Yt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n,...e){throw wr(n,...e)}function Ie(n,...e){return wr(n,...e)}function hc(n,e,t){const i=Object.assign(Object.assign({},mh()),{[e]:t});return new On("auth","Firebase",i).create(e,{appName:n.name})}function dt(n){return hc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return dc.create(n,...e)}function M(n,e,...t){if(!n)throw wr(e,...t)}function Te(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qn(e),new Error(e)}function xe(n,e){n||Te(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function _h(){return No()==="http:"||No()==="https:"}function No(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_h()||Gu()||"connection"in navigator)?navigator.onLine:!0}function yh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.shortDelay=e,this.longDelay=t,xe(t>e,"Short delay should be less than long delay!"),this.isMobile=mr()||nc()}get(){return vh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n,e){xe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=new Dn(3e4,6e4);function Er(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Qt(n,e,t,i,s={}){return pc(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=qt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},r);return ju()||(l.referrerPolicy="no-referrer"),fc.fetch()(mc(n,n.config.apiHost,t,a),l)})}async function pc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},wh),e);try{const s=new Ih(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw zn(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw hc(n,d,l);De(n,d)}}catch(s){if(s instanceof it)throw s;De(n,"network-request-failed",{message:String(s)})}}async function Eh(n,e,t,i,s={}){const r=await Qt(n,e,t,i,s);return"mfaPendingCredential"in r&&De(n,"multi-factor-auth-required",{_serverResponse:r}),r}function mc(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?br(n.config,s):`${n.config.apiScheme}://${s}`}class Ih{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ie(this.auth,"network-request-failed")),bh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ie(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ch(n,e){return Qt(n,"POST","/v1/accounts:delete",e)}async function gc(n,e){return Qt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kh(n,e=!1){const t=oe(n),i=await t.getIdToken(e),s=Ir(i);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:dn(_s(s.auth_time)),issuedAtTime:dn(_s(s.iat)),expirationTime:dn(_s(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function _s(n){return Number(n)*1e3}function Ir(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Qn("JWT malformed, contained fewer than 3 sections"),null;try{const s=ai(t);return s?JSON.parse(s):(Qn("Failed to decode base64 JWT payload"),null)}catch(s){return Qn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ao(n){const e=Ir(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof it&&Sh(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Sh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=dn(this.lastLoginAt),this.creationTime=dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(n){var e;const t=n.auth,i=await n.getIdToken(),s=await En(n,gc(t,{idToken:i}));M(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?_c(r.providerUserInfo):[],a=Nh(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new js(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function Rh(n){const e=oe(n);await fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nh(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function _c(n){return n.map(e=>{var{providerId:t}=e,i=yr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(n,e){const t=await pc(n,{},async()=>{const i=qt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=mc(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fc.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ph(n,e){return Qt(n,"POST","/v2/accounts:revokeToken",Er(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ao(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Ao(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Ah(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Pt;return i&&(M(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(M(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(M(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pt,this.toJSON())}_performRefresh(){return Te("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Re{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=yr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Th(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new js(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await En(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kh(this,e)}reload(){return Rh(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await fi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(dt(this.auth));const e=await this.getIdToken();return await En(this,Ch(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,c,l,d;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=t.createdAt)!==null&&l!==void 0?l:void 0,g=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:w,emailVerified:S,isAnonymous:b,providerData:k,stsTokenManager:P}=t;M(w&&P,e,"internal-error");const _=Pt.fromJSON(this.name,P);M(typeof w=="string",e,"internal-error"),Ue(u,e.name),Ue(h,e.name),M(typeof S=="boolean",e,"internal-error"),M(typeof b=="boolean",e,"internal-error"),Ue(p,e.name),Ue(m,e.name),Ue(v,e.name),Ue(C,e.name),Ue(I,e.name),Ue(g,e.name);const y=new Re({uid:w,auth:e,email:h,emailVerified:S,displayName:u,isAnonymous:b,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:_,createdAt:I,lastLoginAt:g});return k&&Array.isArray(k)&&(y.providerData=k.map(R=>Object.assign({},R))),C&&(y._redirectEventId=C),y}static async _fromIdTokenResponse(e,t,i=!1){const s=new Pt;s.updateFromServerResponse(t);const r=new Re({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await fi(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];M(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?_c(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new Pt;a.updateFromIdToken(i);const c=new Re({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new js(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map;function Ne(n){xe(n instanceof Function,"Expected a class definition");let e=Po.get(n);return e?(xe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Po.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vc.type="NONE";const Mo=vc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(n,e,t){return`firebase:${n}:${e}:${t}`}class Mt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Jn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Jn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Mt(Ne(Mo),e,i);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||Ne(Mo);const o=Jn(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){const u=Re._fromJSON(e,d);l!==r&&(a=u),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Mt(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Mt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ec(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cc(e))return"Blackberry";if(kc(e))return"Webos";if(wc(e))return"Safari";if((e.includes("chrome/")||bc(e))&&!e.includes("edge/"))return"Chrome";if(Ic(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function yc(n=le()){return/firefox\//i.test(n)}function wc(n=le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bc(n=le()){return/crios\//i.test(n)}function Ec(n=le()){return/iemobile/i.test(n)}function Ic(n=le()){return/android/i.test(n)}function Cc(n=le()){return/blackberry/i.test(n)}function kc(n=le()){return/webos/i.test(n)}function Cr(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Mh(n=le()){var e;return Cr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Oh(){return zu()&&document.documentMode===10}function Sc(n=le()){return Cr(n)||Ic(n)||kc(n)||Cc(n)||/windows phone/i.test(n)||Ec(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n,e=[]){let t;switch(n){case"Browser":t=Oo(le());break;case"Worker":t=`${Oo(le())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Yt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xh(n,e={}){return Qt(n,"GET","/v2/passwordPolicy",Er(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=6;class $h{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Lh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Do(this),this.idTokenSubscription=new Do(this),this.beforeStateQueue=new Dh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ne(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Mt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gc(this,{idToken:e}),i=await Re._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(dt(this));const t=e?oe(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ne(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xh(this),t=new $h(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new On("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Ph(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ne(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await Mt.create(this,[Ne(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gh(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function kr(n){return oe(n)}class Do{constructor(e){this.auth=e,this.observer=null,this.addObserver=nd(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uh(n){Sr=n}function Bh(n){return Sr.loadJS(n)}function Hh(){return Sr.gapiScript}function Wh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n,e){const t=vr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(ui(r,e??{}))return s;De(s,"already-initialized")}return t.initialize({options:e})}function jh(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ne);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Gh(n,e,t){const i=kr(n);M(i._canInitEmulator,i,"emulator-config-failed"),M(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Rc(e),{host:o,port:a}=zh(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Kh()}function Rc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zh(n){const e=Rc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:xo(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:xo(o)}}}function xo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Kh(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Te("not implemented")}_getIdTokenResponse(e){return Te("not implemented")}_linkToIdToken(e,t){return Te("not implemented")}_getReauthenticationResolver(e){return Te("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(n,e){return Eh(n,"POST","/v1/accounts:signInWithIdp",Er(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="http://localhost";class gt extends Nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):De("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=yr(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new gt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ot(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ot(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ot(e,t)}buildRequest(){const e={requestUri:qh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Ac{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends xn{constructor(){super("facebook.com")}static credential(e){return gt._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return He.credential(e.oauthAccessToken)}catch{return null}}}He.FACEBOOK_SIGN_IN_METHOD="facebook.com";He.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gt._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return We.credential(t,i)}catch{return null}}}We.GOOGLE_SIGN_IN_METHOD="google.com";We.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends xn{constructor(){super("github.com")}static credential(e){return gt._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.GITHUB_SIGN_IN_METHOD="github.com";Ve.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends xn{constructor(){super("twitter.com")}static credential(e,t){return gt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return je.credential(t,i)}catch{return null}}}je.TWITTER_SIGN_IN_METHOD="twitter.com";je.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Re._fromIdTokenResponse(e,i,s),o=Lo(i);return new Ut({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Lo(i);return new Ut({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Lo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends it{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,pi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new pi(e,t,i,s)}}function Pc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?pi._fromErrorAndOperation(n,r,e,i):r})}async function Yh(n,e,t=!1){const i=await En(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ut._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh(n,e,t=!1){const{auth:i}=n;if(Ge(i.app))return Promise.reject(dt(i));const s="reauthenticate";try{const r=await En(n,Pc(i,s,e,n),t);M(r.idToken,i,"internal-error");const o=Ir(r.idToken);M(o,i,"internal-error");const{sub:a}=o;return M(n.uid===a,i,"user-mismatch"),Ut._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&De(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(n,e,t=!1){if(Ge(n.app))return Promise.reject(dt(n));const i="signIn",s=await Pc(n,i,e),r=await Ut._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function Xh(n,e,t,i){return oe(n).onIdTokenChanged(e,t,i)}function Zh(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function ef(n,e,t,i){return oe(n).onAuthStateChanged(e,t,i)}const mi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mi,"1"),this.storage.removeItem(mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=1e3,nf=10;class Oc extends Mc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Oh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nf):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},tf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oc.type="LOCAL";const sf=Oc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Mc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dc.type="SESSION";const xc=Dc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Vi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await rf(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Tr("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function af(n){Ce().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function cf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function uf(){return Lc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="firebaseLocalStorageDb",df=1,gi="firebaseLocalStorage",Fc="fbase_key";class Ln{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ji(n,e){return n.transaction([gi],e?"readwrite":"readonly").objectStore(gi)}function hf(){const n=indexedDB.deleteDatabase($c);return new Ln(n).toPromise()}function Gs(){const n=indexedDB.open($c,df);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(gi,{keyPath:Fc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(gi)?e(i):(i.close(),await hf(),e(await Gs()))})})}async function $o(n,e,t){const i=ji(n,!0).put({[Fc]:e,value:t});return new Ln(i).toPromise()}async function ff(n,e){const t=ji(n,!1).get(e),i=await new Ln(t).toPromise();return i===void 0?null:i.value}function Fo(n,e){const t=ji(n,!0).delete(e);return new Ln(t).toPromise()}const pf=800,mf=3;class Uc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>mf)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vi._getInstance(uf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await cf(),!this.activeServiceWorker)return;this.sender=new of(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gs();return await $o(e,mi,"1"),await Fo(e,mi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>$o(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>ff(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ji(s,!1).getAll();return new Ln(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uc.type="LOCAL";const gf=Uc;new Dn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(n,e){return e?Ne(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vf(n){return Jh(n.auth,new Rr(n),n.bypassAuthState)}function yf(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Qh(t,new Rr(n),n.bypassAuthState)}async function wf(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Yh(t,new Rr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vf;case"linkViaPopup":case"linkViaRedirect":return wf;case"reauthViaPopup":case"reauthViaRedirect":return yf;default:De(this.auth,"internal-error")}}resolve(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new Dn(2e3,1e4);class Tt extends Bc{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){xe(this.filter.length===1,"Popup operations only handle one event");const e=Tr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ie(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bf.get())};e()}}Tt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="pendingRedirect",Xn=new Map;class If extends Bc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Xn.get(this.auth._key());if(!e){try{const i=await Cf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Xn.set(this.auth._key(),e)}return this.bypassAuthState||Xn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cf(n,e){const t=Tf(e),i=Sf(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function kf(n,e){Xn.set(n._key(),e)}function Sf(n){return Ne(n._redirectPersistence)}function Tf(n){return Jn(Ef,n.config.apiKey,n.name)}async function Rf(n,e,t=!1){if(Ge(n.app))return Promise.reject(dt(n));const i=kr(n),s=_f(i,e),o=await new If(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=10*60*1e3;class Af{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Hc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ie(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uo(e))}saveEventToCache(e){this.cachedEventUids.add(Uo(e)),this.lastProcessedEventTime=Date.now()}}function Uo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Hc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(n,e={}){return Qt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Df=/^https?/;async function xf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Mf(n);for(const t of e)try{if(Lf(t))return}catch{}De(n,"unauthorized-domain")}function Lf(n){const e=Vs(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Df.test(t))return!1;if(Of.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new Dn(3e4,6e4);function Bo(){const n=Ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ff(n){return new Promise((e,t)=>{var i,s,r;function o(){Bo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bo(),t(Ie(n,"network-request-failed"))},timeout:$f.get()})}if(!((s=(i=Ce().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ce().gapi)===null||r===void 0)&&r.load)o();else{const a=Wh("iframefcb");return Ce()[a]=()=>{gapi.load?o():t(Ie(n,"network-request-failed"))},Bh(`${Hh()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Zn=null,e})}let Zn=null;function Uf(n){return Zn=Zn||Ff(n),Zn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=new Dn(5e3,15e3),Hf="__/auth/iframe",Wf="emulator/auth/iframe",Vf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gf(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?br(e,Wf):`https://${n.config.authDomain}/${Hf}`,i={apiKey:e.apiKey,appName:n.name,v:Yt},s=jf.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${qt(i).slice(1)}`}async function zf(n){const e=await Uf(n),t=Ce().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Gf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vf,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ie(n,"network-request-failed"),a=Ce().setTimeout(()=>{r(o)},Bf.get());function c(){Ce().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qf=500,Yf=600,Qf="_blank",Jf="http://localhost";class Ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xf(n,e,t,i=qf,s=Yf){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Kf),{width:i.toString(),height:s.toString(),top:r,left:o}),l=le().toLowerCase();t&&(a=bc(l)?Qf:t),yc(l)&&(e=e||Jf,c.scrollbars="yes");const d=Object.entries(c).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(Mh(l)&&a!=="_self")return Zf(e||"",a),new Ho(null);const u=window.open(e||"",a,d);M(u,n,"popup-blocked");try{u.focus()}catch{}return new Ho(u)}function Zf(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="__/auth/handler",tp="emulator/auth/handler",np=encodeURIComponent("fac");async function Wo(n,e,t,i,s,r){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Yt,eventId:s};if(e instanceof Ac){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ci(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof xn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${np}=${encodeURIComponent(c)}`:"";return`${ip(n)}?${qt(a).slice(1)}${l}`}function ip({config:n}){return n.emulator?br(n,tp):`https://${n.authDomain}/${ep}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="webStorageSupport";class sp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xc,this._completeRedirectFn=Rf,this._overrideRedirectResult=kf}async _openPopup(e,t,i,s){var r;xe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Wo(e,t,i,Vs(),s);return Xf(e,o,Tr())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Wo(e,t,i,Vs(),s);return af(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(xe(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await zf(e),i=new Af(e);return t.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vs,{type:vs},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[vs];o!==void 0&&t(!!o),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sc()||wc()||Cr()}}const rp=sp;var Vo="@firebase/auth",jo="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cp(n){Ft(new mt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tc(n)},l=new Fh(i,s,r,c);return jh(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ft(new mt("auth-internal",e=>{const t=kr(e.getProvider("auth").getImmediate());return(i=>new op(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Vo,jo,ap(n)),Qe(Vo,jo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=5*60,up=tc("authIdTokenMaxAge")||lp;let Go=null;const dp=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>up)return;const s=t==null?void 0:t.token;Go!==s&&(Go=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hp(n=ac()){const e=vr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Vh(n,{popupRedirectResolver:rp,persistence:[gf,sf,xc]}),i=tc("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=dp(r.toString());Zh(t,o,()=>o(t.currentUser)),Xh(t,a=>o(a))}}const s=Za("auth");return s&&Gh(t,`http://${s}`),t}function fp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Uh({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Ie("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",fp().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cp("Browser");var zo={};const Ko="@firebase/database",qo="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc="";function pp(n){Wc=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Z(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:wn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return we(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mp(e)}}catch{}return new gp},ct=Vc("localStorage"),_p=Vc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new gr("@firebase/database"),jc=function(){let n=1;return function(){return n++}}(),Gc=function(n){const e=rd(n),t=new td;t.update(e);const i=t.digest();return fr.encodeByteArray(i)},$n=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=$n.apply(null,i):typeof i=="object"?e+=Z(i):e+=i,e+=" "}return e};let hn=null,Yo=!0;const vp=function(n,e){E(!0,"Can't turn on custom loggers persistently."),Dt.logLevel=j.VERBOSE,hn=Dt.log.bind(Dt)},ne=function(...n){if(Yo===!0&&(Yo=!1,hn===null&&_p.get("logging_enabled")===!0&&vp()),hn){const e=$n.apply(null,n);hn(e)}},Fn=function(n){return function(...e){ne(n,...e)}},zs=function(...n){const e="FIREBASE INTERNAL ERROR: "+$n(...n);Dt.error(e)},Le=function(...n){const e=`FIREBASE FATAL ERROR: ${$n(...n)}`;throw Dt.error(e),new Error(e)},ce=function(...n){const e="FIREBASE WARNING: "+$n(...n);Dt.warn(e)},yp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Bt="[MIN_NAME]",_t="[MAX_NAME]",Et=function(n,e){if(n===e)return 0;if(n===Bt||e===_t)return-1;if(e===Bt||n===_t)return 1;{const t=Qo(n),i=Qo(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},bp=function(n,e){return n===e?0:n<e?-1:1},sn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Z(e))},Nr=function(n){if(typeof n!="object"||n===null)return Z(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Z(e[i]),t+=":",t+=Nr(n[e[i]]);return t+="}",t},zc=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ie(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Kc=function(n){E(!Gi(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Ep=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ip=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Cp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const kp=new RegExp("^-?(0*)\\d{1,10}$"),Sp=-2147483648,Tp=2147483647,Qo=function(n){if(kp.test(n)){const e=Number(n);if(e>=Sp&&e<=Tp)return e}return null},Jt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ce("Exception was thrown by user callback.",t),e},Math.floor(0))}},Rp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class ei{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ei.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="5",qc="v",Yc="s",Qc="r",Jc="f",Xc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zc="ls",el="p",Ks="ac",tl="websocket",nl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,i,s,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ct.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ct.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Pp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function sl(n,e,t){E(typeof e=="string","typeof type must == string"),E(typeof t=="object","typeof params must == object");let i;if(e===tl)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===nl)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Pp(n)&&(t.ns=n.namespace);const s=[];return ie(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.counters_={}}incrementCounter(e,t=1){we(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Lu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys={},ws={};function Pr(n){const e=n.toString();return ys[e]||(ys[e]=new Mp),ys[e]}function Op(n,e){const t=n.toString();return ws[t]||(ws[t]=e()),ws[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Jt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="start",xp="close",Lp="pLPCommand",$p="pRTLPCB",rl="id",ol="pw",al="ser",Fp="cb",Up="seg",Bp="ts",Hp="d",Wp="dframe",cl=1870,ll=30,Vp=cl-ll,jp=25e3,Gp=3e4;class Rt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fn(e),this.stats_=Pr(t),this.urlFn=c=>(this.appCheckToken&&(c[Ks]=this.appCheckToken),sl(t,nl,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Dp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gp)),wp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mr((...r)=>{const[o,a,c,l,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jo)this.id=a,this.password=c;else if(o===xp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Jo]="t",i[al]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Fp]=this.scriptTagHolder.uniqueCallbackIdentifier),i[qc]=Ar,this.transportSessionId&&(i[Yc]=this.transportSessionId),this.lastSessionId&&(i[Zc]=this.lastSessionId),this.applicationId&&(i[el]=this.applicationId),this.appCheckToken&&(i[Ks]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xc.test(location.hostname)&&(i[Qc]=Jc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rt.forceAllow_=!0}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){return Rt.forceAllow_?!0:!Rt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ep()&&!Ip()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ja(t),s=zc(i,Vp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Wp]="t",i[rl]=e,i[ol]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Z(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Mr{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jc(),window[Lp+this.uniqueCallbackIdentifier]=e,window[$p+this.uniqueCallbackIdentifier]=t,this.myIFrame=Mr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ne("frame writing exception"),a.stack&&ne(a.stack),ne(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ne("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[rl]=this.myID,e[ol]=this.myPW,e[al]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ll+i.length<=cl;){const o=this.pendingSegs.shift();i=i+"&"+Up+s+"="+o.seg+"&"+Bp+s+"="+o.ts+"&"+Hp+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(jp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=16384,Kp=45e3;let _i=null;typeof MozWebSocket<"u"?_i=MozWebSocket:typeof WebSocket<"u"&&(_i=WebSocket);class ge{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fn(this.connId),this.stats_=Pr(t),this.connURL=ge.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[qc]=Ar,typeof location<"u"&&location.hostname&&Xc.test(location.hostname)&&(o[Qc]=Jc),t&&(o[Yc]=t),i&&(o[Zc]=i),s&&(o[Ks]=s),r&&(o[el]=r),sl(e,tl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ct.set("previous_websocket_failure",!0);try{let i;Ku(),this.mySock=new _i(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&_i!==null&&!ge.forceDisallow_}static previouslyFailed(){return ct.isInMemoryStorage||ct.get("previous_websocket_failure")===!0}markConnectionHealthy(){ct.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=wn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=zc(t,zp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Kp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ge.responsesRequiredToBeHealthy=2;ge.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rt,ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ge&&ge.isAvailable();let i=t&&!ge.previouslyFailed();if(e.webSocketOnly&&(t||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ge];else{const s=this.transports_=[];for(const r of In.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);In.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}In.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=6e4,Yp=5e3,Qp=10*1024,Jp=100*1024,bs="t",Xo="d",Xp="s",Zo="r",Zp="e",ea="o",ta="a",na="n",ia="p",em="h";class tm{constructor(e,t,i,s,r,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fn("c:"+this.id+":"),this.transportManager_=new In(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=fn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Qp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bs in e){const t=e[bs];t===ta?this.upgradeIfSecondaryHealthy_():t===Zo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ea&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=sn("t",e),i=sn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ia,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ta,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:na,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=sn("t",e),i=sn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=sn(bs,e);if(Xo in e){const i=e[Xo];if(t===em){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===na){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Xp?this.onConnectionShutdown_(i):t===Zo?this.onReset_(i):t===Zp?zs("Server Error: "+i):t===ea?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ar!==i&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),fn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ia,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ct.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends dl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vi}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=32,ra=768;class V{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function H(){return new V("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ze(n){return n.pieces_.length-n.pieceNum_}function G(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new V(n.pieces_,e)}function Or(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function nm(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Cn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function hl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new V(e,0)}function Q(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof V)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new V(t,0)}function $(n){return n.pieceNum_>=n.pieces_.length}function ae(n,e){const t=x(n),i=x(e);if(t===null)return e;if(t===i)return ae(G(n),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function im(n,e){const t=Cn(n,0),i=Cn(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=Et(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function Dr(n,e){if(Ze(n)!==Ze(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function fe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ze(n)>Ze(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class sm{constructor(e,t){this.errorPrefix_=t,this.parts_=Cn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Wi(this.parts_[i]);fl(this)}}function rm(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Wi(e),fl(n)}function om(n){const e=n.parts_.pop();n.byteLength_-=Wi(e),n.parts_.length>0&&(n.byteLength_-=1)}function fl(n){if(n.byteLength_>ra)throw new Error(n.errorPrefix_+"has a key path longer than "+ra+" bytes ("+n.byteLength_+").");if(n.parts_.length>sa)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sa+") or object contains a cycle "+ot(n))}function ot(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends dl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new xr}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=1e3,am=60*5*1e3,oa=30*1e3,cm=1.3,lm=3e4,um="server_kill",aa=3;class Pe extends ul{constructor(e,t,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Pe.nextPersistentConnectionId_++,this.log_=Fn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=rn,this.maxReconnectDelay_=am,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Z(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new me,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Pe.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&we(e,"w")){const i=pt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ed(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=oa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Zu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Z(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):zs("Unrecognized action received from server: "+Z(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=rn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=rn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lm&&(this.reconnectDelay_=rn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(u){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ne("getToken() completed but was canceled"):(ne("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new tm(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{ce(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(um)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ce(u),c())}}}interrupt(e){ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ci(this.interruptReasons_)&&(this.reconnectDelay_=rn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Nr(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new V(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){ne("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=aa&&(this.reconnectDelay_=oa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ne("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=aa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Wc.replace(/\./g,"-")]=1,mr()?e["framework.cordova"]=1:nc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vi.getInstance().currentlyOnline();return ci(this.interruptReasons_)&&e}}Pe.nextPersistentConnectionId_=0;Pe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new F(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new F(Bt,e),s=new F(Bt,t);return this.compare(i,s)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn;class pl extends zi{static get __EMPTY_NODE(){return Kn}static set __EMPTY_NODE(e){Kn=e}compare(e,t){return Et(e.name,t.name)}isDefinedOn(e){throw Kt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return F.MIN}maxPost(){return new F(_t,Kn)}makePost(e,t){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Kn)}toString(){return".key"}}const xt=new pl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class te{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??te.RED,this.left=s??ue.EMPTY_NODE,this.right=r??ue.EMPTY_NODE}copy(e,t,i,s,r){return new te(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}te.RED=!0;te.BLACK=!1;class dm{copy(e,t,i,s,r){return this}insert(e,t,i){return new te(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ue{constructor(e,t=ue.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ue(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,te.BLACK,null,null))}remove(e){return new ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,te.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qn(this.root_,null,this.comparator_,!0,e)}}ue.EMPTY_NODE=new dm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(n,e){return Et(n.name,e.name)}function Lr(n,e){return Et(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs;function fm(n){qs=n}const ml=function(n){return typeof n=="number"?"number:"+Kc(n):"string:"+n},gl=function(n){if(n.isLeafNode()){const e=n.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&we(e,".sv"),"Priority must be a string or number.")}else E(n===qs||n.isEmpty(),"priority of unexpected type.");E(n===qs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca;class ee{constructor(e,t=ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gl(this.priorityNode_)}static set __childrenNodeConstructor(e){ca=e}static get __childrenNodeConstructor(){return ca}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:x(e)===".priority"?this.priorityNode_:ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=x(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(E(i!==".priority"||Ze(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ml(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Kc(this.value_):e+=this.value_,this.lazyHash_=Gc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ee.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ee.VALUE_TYPE_ORDER.indexOf(t),r=ee.VALUE_TYPE_ORDER.indexOf(i);return E(s>=0,"Unknown leaf type: "+t),E(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l,vl;function pm(n){_l=n}function mm(n){vl=n}class gm extends zi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Et(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return F.MIN}maxPost(){return new F(_t,new ee("[PRIORITY-POST]",vl))}makePost(e,t){const i=_l(e);return new F(t,new ee("[PRIORITY-POST]",i))}toString(){return".priority"}}const q=new gm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=Math.log(2);class vm{constructor(e){const t=r=>parseInt(Math.log(r)/_m,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yi=function(n,e,t,i){n.sort(e);const s=function(c,l){const d=l-c;let u,h;if(d===0)return null;if(d===1)return u=n[c],h=t?t(u):u,new te(h,u.node,te.BLACK,null,null);{const p=parseInt(d/2,10)+c,m=s(c,p),v=s(p+1,l);return u=n[p],h=t?t(u):u,new te(h,u.node,te.BLACK,m,v)}},r=function(c){let l=null,d=null,u=n.length;const h=function(m,v){const C=u-m,I=u;u-=m;const g=s(C+1,I),w=n[C],S=t?t(w):w;p(new te(S,w.node,v,null,g))},p=function(m){l?(l.left=m,l=m):(d=m,l=m)};for(let m=0;m<c.count;++m){const v=c.nextBitIsOne(),C=Math.pow(2,c.count-(m+1));v?h(C,te.BLACK):(h(C,te.BLACK),h(C,te.RED))}return d},o=new vm(n.length),a=r(o);return new ue(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;const St={};class Ae{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return E(St&&q,"ChildrenNode.ts has not been loaded"),Es=Es||new Ae({".priority":St},{".priority":q}),Es}get(e){const t=pt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ue?t:null}hasIndex(e){return we(this.indexSet_,e.toString())}addIndex(e,t){E(e!==xt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(F.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=yi(i,e.getCompare()):a=St;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new Ae(d,l)}addToIndexes(e,t){const i=li(this.indexes_,(s,r)=>{const o=pt(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),s===St)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(F.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),yi(a,o.getCompare())}else return St;else{const a=t.get(e.name);let c=s;return a&&(c=c.remove(new F(e.name,a))),c.insert(e,e.node)}});return new Ae(i,this.indexSet_)}removeFromIndexes(e,t){const i=li(this.indexes_,s=>{if(s===St)return s;{const r=t.get(e.name);return r?s.remove(new F(e.name,r)):s}});return new Ae(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on;class A{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&gl(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return on||(on=new A(new ue(Lr),null,Ae.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||on}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?on:t}}getChild(e){const t=x(e);return t===null?this:this.getImmediateChild(t).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(E(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new F(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?on:this.priorityNode_;return new A(s,o,r)}}updateChild(e,t){const i=x(e);if(i===null)return t;{E(x(e)!==".priority"||Ze(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(G(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(q,(o,a)=>{t[o]=a.val(e),i++,r&&A.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ml(this.getPriority().val())+":"),this.forEachChild(q,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Gc(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new F(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new F(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new F(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,F.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Un?-1:0}withIndex(e){if(e===xt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===xt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(q),s=t.getIterator(q);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xt?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ym extends A{constructor(){super(new ue(Lr),A.EMPTY_NODE,Ae.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Un=new ym;Object.defineProperties(F,{MIN:{value:new F(Bt,A.EMPTY_NODE)},MAX:{value:new F(_t,Un)}});pl.__EMPTY_NODE=A.EMPTY_NODE;ee.__childrenNodeConstructor=A;fm(Un);mm(Un);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=!0;function Y(n,e=null){if(n===null)return A.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ee(t,Y(e))}if(!(n instanceof Array)&&wm){const t=[];let i=!1;if(ie(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=Y(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new F(o,c)))}}),t.length===0)return A.EMPTY_NODE;const r=yi(t,hm,o=>o.name,Lr);if(i){const o=yi(t,q.getCompare());return new A(r,Y(e),new Ae({".priority":o},{".priority":q}))}else return new A(r,Y(e),Ae.Default)}else{let t=A.EMPTY_NODE;return ie(n,(i,s)=>{if(we(n,i)&&i.substring(0,1)!=="."){const r=Y(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Y(e))}}pm(Y);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends zi{constructor(e){super(),this.indexPath_=e,E(!$(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Et(e.name,t.name):r}makePost(e,t){const i=Y(e),s=A.EMPTY_NODE.updateChild(this.indexPath_,i);return new F(t,s)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Un);return new F(_t,e)}toString(){return Cn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends zi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Et(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,t){const i=Y(e);return new F(t,i)}toString(){return".value"}}const Im=new Em;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(n){return{type:"value",snapshotNode:n}}function Ht(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function kn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Sn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Cm(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(kn(t,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ht(t,i)):o.trackChildChange(Sn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(q,(s,r)=>{t.hasChild(s)||i.trackChildChange(kn(s,r))}),t.isLeafNode()||t.forEachChild(q,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Sn(s,r,o))}else i.trackChildChange(Ht(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.indexedFilter_=new $r(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tn.getStartPost_(e),this.endPost_=Tn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new F(t,i))||(i=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=A.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(A.EMPTY_NODE);const r=this;return t.forEachChild(q,(o,a)=>{r.matches(new F(o,a))||(s=s.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Tn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new F(t,i))||(i=A.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=A.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(A.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,p)=>u(p,h)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const c=new F(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,c);if(d&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Sn(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(kn(t,u));const v=a.updateImmediateChild(t,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ht(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return i.isEmpty()?e:d&&o(l,c)>=0?(r!=null&&(r.trackChildChange(kn(l.name,l.node)),r.trackChildChange(Ht(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Bt}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_t}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new Fr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sm(n){return n.loadsAllData()?new $r(n.getIndex()):n.hasLimit()?new km(n):new Tn(n)}function la(n){const e={};if(n.isDefault())return e;let t;if(n.index_===q?t="$priority":n.index_===Im?t="$value":n.index_===xt?t="$key":(E(n.index_ instanceof bm,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Z(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Z(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Z(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Z(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Z(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ua(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends ul{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Fn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=wi.getListenId_(e,i),a={};this.listens_[o]=a;const c=la(e._queryParams);this.restRequest_(r+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,i),pt(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",s(h,null)}})}unlisten(e,t){const i=wi.getListenId_(e,t);delete this.listens_[i]}get(e){const t=la(e._queryParams),i=e._path.toString(),s=new me;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=wn(a.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(){return{value:null,children:new Map}}function Xt(n,e,t){if($(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=x(e);n.children.has(i)||n.children.set(i,bi());const s=n.children.get(i);e=G(e),Xt(s,e,t)}}function Ys(n,e){if($(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(q,(i,s)=>{Xt(n,new V(i),s)}),Ys(n,e)}}else if(n.children.size>0){const t=x(e);return e=G(e),n.children.has(t)&&Ys(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Qs(n,e,t){n.value!==null?t(e,n.value):Rm(n,(i,s)=>{const r=new V(e.toString()+"/"+i);Qs(s,r,t)})}function Rm(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ie(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=10*1e3,Am=30*1e3,Pm=5*60*1e3;class Mm{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Nm(e);const i=da+(Am-da)*Math.random();fn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ie(e,(s,r)=>{r>0&&we(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),fn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_e||(_e={}));function Ur(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Br(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=_e.ACK_USER_WRITE,this.source=Ur()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new V(e));return new Ei(H(),t,this.revert)}}else return E(x(this.path)===e,"operationForChild called for unrelated child."),new Ei(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this.source=e,this.path=t,this.type=_e.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new Rn(this.source,H()):new Rn(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=_e.OVERWRITE}operationForChild(e){return $(this.path)?new vt(this.source,H(),this.snap.getImmediateChild(e)):new vt(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=_e.MERGE}operationForChild(e){if($(this.path)){const t=this.children.subtree(new V(e));return t.isEmpty()?null:t.value?new vt(this.source,H(),t.value):new Wt(this.source,H(),t)}else return E(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wt(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const t=x(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Dm(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Cm(o.childName,o.snapshotNode))}),an(n,s,"child_removed",e,i,t),an(n,s,"child_added",e,i,t),an(n,s,"child_moved",r,i,t),an(n,s,"child_changed",e,i,t),an(n,s,"value",e,i,t),s}function an(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,c)=>Lm(n,a,c)),o.forEach(a=>{const c=xm(n,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function xm(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Lm(n,e,t){if(e.childName==null||t.childName==null)throw Kt("Should only compare child_ events.");const i=new F(e.childName,e.snapshotNode),s=new F(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n,e){return{eventCache:n,serverCache:e}}function pn(n,e,t,i){return Ki(new et(e,t,i),n.serverCache)}function wl(n,e,t,i){return Ki(n.eventCache,new et(e,t,i))}function Ii(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function yt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is;const $m=()=>(Is||(Is=new ue(bp)),Is);class z{constructor(e,t=$m()){this.value=e,this.children=t}static fromObject(e){let t=new z(null);return ie(e,(i,s)=>{t=t.set(new V(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:H(),value:this.value};if($(e))return null;{const i=x(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(G(e),t);return r!=null?{path:Q(new V(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const t=x(e),i=this.children.get(t);return i!==null?i.subtree(G(e)):new z(null)}}set(e,t){if($(e))return new z(t,this.children);{const i=x(e),r=(this.children.get(i)||new z(null)).set(G(e),t),o=this.children.insert(i,r);return new z(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new z(null):new z(null,this.children);{const t=x(e),i=this.children.get(t);if(i){const s=i.remove(G(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new z(null):new z(this.value,r)}else return this}}get(e){if($(e))return this.value;{const t=x(e),i=this.children.get(t);return i?i.get(G(e)):null}}setTree(e,t){if($(e))return t;{const i=x(e),r=(this.children.get(i)||new z(null)).setTree(G(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new z(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Q(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,H(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if($(e))return null;{const r=x(e),o=this.children.get(r);return o?o.findOnPath_(G(e),Q(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,H(),t)}foreachOnPath_(e,t,i){if($(e))return this;{this.value&&i(t,this.value);const s=x(e),r=this.children.get(s);return r?r.foreachOnPath_(G(e),Q(t,s),i):new z(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Q(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.writeTree_=e}static empty(){return new ve(new z(null))}}function mn(n,e,t){if($(e))return new ve(new z(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ae(s,e);return r=r.updateChild(o,t),new ve(n.writeTree_.set(s,r))}else{const s=new z(t),r=n.writeTree_.setTree(e,s);return new ve(r)}}}function Js(n,e,t){let i=n;return ie(t,(s,r)=>{i=mn(i,Q(e,s),r)}),i}function ha(n,e){if($(e))return ve.empty();{const t=n.writeTree_.setTree(e,new z(null));return new ve(t)}}function Xs(n,e){return It(n,e)!=null}function It(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ae(t.path,e)):null}function fa(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(q,(i,s)=>{e.push(new F(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new F(i,s.value))}),e}function Je(n,e){if($(e))return n;{const t=It(n,e);return t!=null?new ve(new z(t)):new ve(n.writeTree_.subtree(e))}}function Zs(n){return n.writeTree_.isEmpty()}function Vt(n,e){return bl(H(),n.writeTree_,e)}function bl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=bl(Q(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Q(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n,e){return kl(e,n)}function Fm(n,e,t,i,s){E(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=mn(n.visibleWrites,e,t)),n.lastWriteId=i}function Um(n,e,t,i){E(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Js(n.visibleWrites,e,t),n.lastWriteId=i}function Bm(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Hm(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);E(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Wm(a,i.path)?s=!1:fe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Vm(n),!0;if(i.snap)n.visibleWrites=ha(n.visibleWrites,i.path);else{const a=i.children;ie(a,c=>{n.visibleWrites=ha(n.visibleWrites,Q(i.path,c))})}return!0}else return!1}function Wm(n,e){if(n.snap)return fe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&fe(Q(n.path,t),e))return!0;return!1}function Vm(n){n.visibleWrites=El(n.allWrites,jm,H()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function jm(n){return n.visible}function El(n,e,t){let i=ve.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)fe(t,o)?(a=ae(t,o),i=mn(i,a,r.snap)):fe(o,t)&&(a=ae(o,t),i=mn(i,H(),r.snap.getChild(a)));else if(r.children){if(fe(t,o))a=ae(t,o),i=Js(i,a,r.children);else if(fe(o,t))if(a=ae(o,t),$(a))i=Js(i,H(),r.children);else{const c=pt(r.children,x(a));if(c){const l=c.getChild(G(a));i=mn(i,H(),l)}}}else throw Kt("WriteRecord should have .snap or .children")}}return i}function Il(n,e,t,i,s){if(!i&&!s){const r=It(n.visibleWrites,e);if(r!=null)return r;{const o=Je(n.visibleWrites,e);if(Zs(o))return t;if(t==null&&!Xs(o,H()))return null;{const a=t||A.EMPTY_NODE;return Vt(o,a)}}}else{const r=Je(n.visibleWrites,e);if(!s&&Zs(r))return t;if(!s&&t==null&&!Xs(r,H()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(fe(l.path,e)||fe(e,l.path))},a=El(n.allWrites,o,e),c=t||A.EMPTY_NODE;return Vt(a,c)}}}function Gm(n,e,t){let i=A.EMPTY_NODE;const s=It(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(q,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Je(n.visibleWrites,e);return t.forEachChild(q,(o,a)=>{const c=Vt(Je(r,new V(o)),a);i=i.updateImmediateChild(o,c)}),fa(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Je(n.visibleWrites,e);return fa(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function zm(n,e,t,i,s){E(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Q(e,t);if(Xs(n.visibleWrites,r))return null;{const o=Je(n.visibleWrites,r);return Zs(o)?s.getChild(t):Vt(o,s.getChild(t))}}function Km(n,e,t,i){const s=Q(e,t),r=It(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Je(n.visibleWrites,s);return Vt(o,i.getNode().getImmediateChild(t))}else return null}function qm(n,e){return It(n.visibleWrites,e)}function Ym(n,e,t,i,s,r,o){let a;const c=Je(n.visibleWrites,e),l=It(c,H());if(l!=null)a=l;else if(t!=null)a=Vt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=h.getNext();for(;p&&d.length<s;)u(p,i)!==0&&d.push(p),p=h.getNext();return d}else return[]}function Qm(){return{visibleWrites:ve.empty(),allWrites:[],lastWriteId:-1}}function Ci(n,e,t,i){return Il(n.writeTree,n.treePath,e,t,i)}function Wr(n,e){return Gm(n.writeTree,n.treePath,e)}function pa(n,e,t,i){return zm(n.writeTree,n.treePath,e,t,i)}function ki(n,e){return qm(n.writeTree,Q(n.treePath,e))}function Jm(n,e,t,i,s,r){return Ym(n.writeTree,n.treePath,e,t,i,s,r)}function Vr(n,e,t){return Km(n.writeTree,n.treePath,e,t)}function Cl(n,e){return kl(Q(n.treePath,e),n.writeTree)}function kl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;E(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),E(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Sn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,kn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Ht(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Sn(i,e.snapshotNode,s.oldSnap));else throw Kt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Sl=new Zm;class jr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new et(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yt(this.viewCache_),r=Jm(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n){return{filter:n}}function tg(n,e){E(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ng(n,e,t,i,s){const r=new Xm;let o,a;if(t.type===_e.OVERWRITE){const l=t;l.source.fromUser?o=er(n,e,l.path,l.snap,i,s,r):(E(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!$(l.path),o=Si(n,e,l.path,l.snap,i,s,a,r))}else if(t.type===_e.MERGE){const l=t;l.source.fromUser?o=sg(n,e,l.path,l.children,i,s,r):(E(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=tr(n,e,l.path,l.children,i,s,a,r))}else if(t.type===_e.ACK_USER_WRITE){const l=t;l.revert?o=ag(n,e,l.path,i,s,r):o=rg(n,e,l.path,l.affectedTree,i,s,r)}else if(t.type===_e.LISTEN_COMPLETE)o=og(n,e,t.path,i,r);else throw Kt("Unknown operation type: "+t.type);const c=r.getChanges();return ig(e,o,c),{viewCache:o,changes:c}}function ig(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ii(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(yl(Ii(e)))}}function Tl(n,e,t,i,s,r){const o=e.eventCache;if(ki(i,t)!=null)return e;{let a,c;if($(t))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=yt(e),d=l instanceof A?l:A.EMPTY_NODE,u=Wr(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=Ci(i,yt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=x(t);if(l===".priority"){E(Ze(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=pa(i,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=G(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=pa(i,t,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=Vr(i,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,s,r):a=o.getNode()}}return pn(e,a,o.isFullyInitialized()||$(t),n.filter.filtersNodes())}}function Si(n,e,t,i,s,r,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if($(t))l=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,i);l=d.updateFullNode(c.getNode(),p,null)}else{const p=x(t);if(!c.isCompleteForPath(t)&&Ze(t)>1)return e;const m=G(t),C=c.getNode().getImmediateChild(p).updateChild(m,i);p===".priority"?l=d.updatePriority(c.getNode(),C):l=d.updateChild(c.getNode(),p,C,m,Sl,null)}const u=wl(e,l,c.isFullyInitialized()||$(t),d.filtersNodes()),h=new jr(s,u,r);return Tl(n,u,t,s,h,a)}function er(n,e,t,i,s,r,o){const a=e.eventCache;let c,l;const d=new jr(s,e,r);if($(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=pn(e,l,!0,n.filter.filtersNodes());else{const u=x(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=pn(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=G(t),p=a.getNode().getImmediateChild(u);let m;if($(h))m=i;else{const v=d.getCompleteChild(u);v!=null?Or(h)===".priority"&&v.getChild(hl(h)).isEmpty()?m=v:m=v.updateChild(h,i):m=A.EMPTY_NODE}if(p.equals(m))c=e;else{const v=n.filter.updateChild(a.getNode(),u,m,h,d,o);c=pn(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function ma(n,e){return n.eventCache.isCompleteForChild(e)}function sg(n,e,t,i,s,r,o){let a=e;return i.foreach((c,l)=>{const d=Q(t,c);ma(e,x(d))&&(a=er(n,a,d,l,s,r,o))}),i.foreach((c,l)=>{const d=Q(t,c);ma(e,x(d))||(a=er(n,a,d,l,s,r,o))}),a}function ga(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function tr(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;$(t)?l=i:l=new z(null).setTree(t,i);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),m=ga(n,p,h);c=Si(n,c,new V(u),m,s,r,o,a)}}),l.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!p){const m=e.serverCache.getNode().getImmediateChild(u),v=ga(n,m,h);c=Si(n,c,new V(u),v,s,r,o,a)}}),c}function rg(n,e,t,i,s,r,o){if(ki(s,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if($(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Si(n,e,t,c.getNode().getChild(t),s,r,a,o);if($(t)){let l=new z(null);return c.getNode().forEachChild(xt,(d,u)=>{l=l.set(new V(d),u)}),tr(n,e,t,l,s,r,a,o)}else return e}else{let l=new z(null);return i.foreach((d,u)=>{const h=Q(t,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),tr(n,e,t,l,s,r,a,o)}}function og(n,e,t,i,s){const r=e.serverCache,o=wl(e,r.getNode(),r.isFullyInitialized()||$(t),r.isFiltered());return Tl(n,o,t,i,Sl,s)}function ag(n,e,t,i,s,r){let o;if(ki(i,t)!=null)return e;{const a=new jr(i,e,s),c=e.eventCache.getNode();let l;if($(t)||x(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ci(i,yt(e));else{const u=e.serverCache.getNode();E(u instanceof A,"serverChildren would be complete if leaf node"),d=Wr(i,u)}d=d,l=n.filter.updateFullNode(c,d,r)}else{const d=x(t);let u=Vr(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,G(t),a,r):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,A.EMPTY_NODE,G(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ci(i,yt(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||ki(i,H())!=null,pn(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new $r(i.getIndex()),r=Sm(i);this.processor_=eg(r);const o=t.serverCache,a=t.eventCache,c=s.updateFullNode(A.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(A.EMPTY_NODE,a.getNode(),null),d=new et(c,o.isFullyInitialized(),s.filtersNodes()),u=new et(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ki(u,d),this.eventGenerator_=new Om(this.query_)}get query(){return this.query_}}function lg(n){return n.viewCache_.serverCache.getNode()}function ug(n){return Ii(n.viewCache_)}function dg(n,e){const t=yt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!$(e)&&!t.getImmediateChild(x(e)).isEmpty())?t.getChild(e):null}function _a(n){return n.eventRegistrations_.length===0}function hg(n,e){n.eventRegistrations_.push(e)}function va(n,e,t){const i=[];if(t){E(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function ya(n,e,t,i){e.type===_e.MERGE&&e.source.queryId!==null&&(E(yt(n.viewCache_),"We should always have a full cache before handling merges"),E(Ii(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=ng(n.processor_,s,e,t,i);return tg(n.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Rl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function fg(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(q,(r,o)=>{i.push(Ht(r,o))}),t.isFullyInitialized()&&i.push(yl(t.getNode())),Rl(n,i,t.getNode(),e)}function Rl(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Dm(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;class Nl{constructor(){this.views=new Map}}function pg(n){E(!Ti,"__referenceConstructor has already been defined"),Ti=n}function mg(){return E(Ti,"Reference.ts has not been loaded"),Ti}function gg(n){return n.views.size===0}function Gr(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return E(r!=null,"SyncTree gave us an op for an invalid query."),ya(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(ya(o,e,t,i));return r}}function Al(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Ci(t,s?i:null),c=!1;a?c=!0:i instanceof A?(a=Wr(t,i),c=!1):(a=A.EMPTY_NODE,c=!1);const l=Ki(new et(a,c,!1),new et(i,s,!1));return new cg(e,l)}return o}function _g(n,e,t,i,s,r){const o=Al(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),hg(o,t),fg(o,t)}function vg(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=tt(n);if(s==="default")for(const[c,l]of n.views.entries())o=o.concat(va(l,t,i)),_a(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(s);c&&(o=o.concat(va(c,t,i)),_a(c)&&(n.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!tt(n)&&r.push(new(mg())(e._repo,e._path)),{removed:r,events:o}}function Pl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Xe(n,e){let t=null;for(const i of n.views.values())t=t||dg(i,e);return t}function Ml(n,e){if(e._queryParams.loadsAllData())return Yi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Ol(n,e){return Ml(n,e)!=null}function tt(n){return Yi(n)!=null}function Yi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri;function yg(n){E(!Ri,"__referenceConstructor has already been defined"),Ri=n}function wg(){return E(Ri,"Reference.ts has not been loaded"),Ri}let bg=1;class wa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new z(null),this.pendingWriteTree_=Qm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zr(n,e,t,i,s){return Fm(n.pendingWriteTree_,e,t,i,s),s?Zt(n,new vt(Ur(),e,t)):[]}function Eg(n,e,t,i){Um(n.pendingWriteTree_,e,t,i);const s=z.fromObject(t);return Zt(n,new Wt(Ur(),e,s))}function ze(n,e,t=!1){const i=Bm(n.pendingWriteTree_,e);if(Hm(n.pendingWriteTree_,e)){let r=new z(null);return i.snap!=null?r=r.set(H(),!0):ie(i.children,o=>{r=r.set(new V(o),!0)}),Zt(n,new Ei(i.path,r,t))}else return[]}function Bn(n,e,t){return Zt(n,new vt(Br(),e,t))}function Ig(n,e,t){const i=z.fromObject(t);return Zt(n,new Wt(Br(),e,i))}function Cg(n,e){return Zt(n,new Rn(Br(),e))}function kg(n,e,t){const i=Kr(n,t);if(i){const s=qr(i),r=s.path,o=s.queryId,a=ae(r,e),c=new Rn(Hr(o),a);return Yr(n,r,c)}else return[]}function Ni(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Ol(o,e))){const c=vg(o,e,t,i);gg(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(h,p)=>tt(p));if(d&&!u){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=Rg(h);for(let m=0;m<p.length;++m){const v=p[m],C=v.query,I=$l(n,v);n.listenProvider_.startListening(gn(C),Nn(n,C),I.hashFn,I.onComplete)}}}!u&&l.length>0&&!i&&(d?n.listenProvider_.stopListening(gn(e),null):l.forEach(h=>{const p=n.queryToTagMap.get(Ji(h));n.listenProvider_.stopListening(gn(h),p)}))}Ng(n,l)}return a}function Dl(n,e,t,i){const s=Kr(n,i);if(s!=null){const r=qr(s),o=r.path,a=r.queryId,c=ae(o,e),l=new vt(Hr(a),c,t);return Yr(n,o,l)}else return[]}function Sg(n,e,t,i){const s=Kr(n,i);if(s){const r=qr(s),o=r.path,a=r.queryId,c=ae(o,e),l=z.fromObject(t),d=new Wt(Hr(a),c,l);return Yr(n,o,d)}else return[]}function nr(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,p)=>{const m=ae(h,s);r=r||Xe(p,m),o=o||tt(p)});let a=n.syncPointTree_.get(s);a?(o=o||tt(a),r=r||Xe(a,H())):(a=new Nl,n.syncPointTree_=n.syncPointTree_.set(s,a));let c;r!=null?c=!0:(c=!1,r=A.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,m)=>{const v=Xe(m,H());v&&(r=r.updateImmediateChild(p,v))}));const l=Ol(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=Ji(e);E(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=Ag();n.queryToTagMap.set(h,p),n.tagToQueryMap.set(p,h)}const d=qi(n.pendingWriteTree_,s);let u=_g(a,e,t,d,r,c);if(!l&&!o&&!i){const h=Ml(a,e);u=u.concat(Pg(n,e,h))}return u}function Qi(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=ae(o,e),l=Xe(a,c);if(l)return l});return Il(s,e,r,t,!0)}function Tg(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const u=ae(l,t);i=i||Xe(d,u)});let s=n.syncPointTree_.get(t);s?i=i||Xe(s,H()):(s=new Nl,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new et(i,!0,!1):null,a=qi(n.pendingWriteTree_,e._path),c=Al(s,e,a,r?o.getNode():A.EMPTY_NODE,r);return ug(c)}function Zt(n,e){return xl(e,n.syncPointTree_,null,qi(n.pendingWriteTree_,H()))}function xl(n,e,t,i){if($(n.path))return Ll(n,e,t,i);{const s=e.get(H());t==null&&s!=null&&(t=Xe(s,H()));let r=[];const o=x(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=Cl(i,o);r=r.concat(xl(a,c,l,d))}return s&&(r=r.concat(Gr(s,n,i,t))),r}}function Ll(n,e,t,i){const s=e.get(H());t==null&&s!=null&&(t=Xe(s,H()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Cl(i,o),d=n.operationForChild(o);d&&(r=r.concat(Ll(d,a,c,l)))}),s&&(r=r.concat(Gr(s,n,i,t))),r}function $l(n,e){const t=e.query,i=Nn(n,t);return{hashFn:()=>(lg(e)||A.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?kg(n,t._path,i):Cg(n,t._path);{const r=Cp(s,t);return Ni(n,t,null,r)}}}}function Nn(n,e){const t=Ji(e);return n.queryToTagMap.get(t)}function Ji(n){return n._path.toString()+"$"+n._queryIdentifier}function Kr(n,e){return n.tagToQueryMap.get(e)}function qr(n){const e=n.indexOf("$");return E(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new V(n.substr(0,e))}}function Yr(n,e,t){const i=n.syncPointTree_.get(e);E(i,"Missing sync point for query tag that we're tracking");const s=qi(n.pendingWriteTree_,e);return Gr(i,t,s,null)}function Rg(n){return n.fold((e,t,i)=>{if(t&&tt(t))return[Yi(t)];{let s=[];return t&&(s=Pl(t)),ie(i,(r,o)=>{s=s.concat(o)}),s}})}function gn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(wg())(n._repo,n._path):n}function Ng(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Ji(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Ag(){return bg++}function Pg(n,e,t){const i=e._path,s=Nn(n,e),r=$l(n,t),o=n.listenProvider_.startListening(gn(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)E(!tt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!$(l)&&d&&tt(d))return[Yi(d).query];{let h=[];return d&&(h=h.concat(Pl(d).map(p=>p.query))),ie(u,(p,m)=>{h=h.concat(m)}),h}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(gn(d),Nn(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qr(t)}node(){return this.node_}}class Jr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Q(this.path_,e);return new Jr(this.syncTree_,t)}node(){return Qi(this.syncTree_,this.path_)}}const Mg=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ba=function(n,e,t){if(!n||typeof n!="object")return n;if(E(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Og(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Dg(n[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Og=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:E(!1,"Unexpected server value: "+n)}},Dg=function(n,e,t){n.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&E(!1,"Unexpected increment value: "+i);const s=e.node();if(E(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Fl=function(n,e,t,i){return Zr(e,new Jr(t,n),i)},Xr=function(n,e,t){return Zr(n,new Qr(e),t)};function Zr(n,e,t){const i=n.getPriority().val(),s=ba(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ba(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ee(a,Y(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ee(s))),o.forEachChild(q,(a,c)=>{const l=Zr(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Xi(n,e){let t=e instanceof V?e:new V(e),i=n,s=x(t);for(;s!==null;){const r=pt(i.node.children,s)||{children:{},childCount:0};i=new eo(s,i,r),t=G(t),s=x(t)}return i}function Ct(n){return n.node.value}function to(n,e){n.node.value=e,ir(n)}function Ul(n){return n.node.childCount>0}function xg(n){return Ct(n)===void 0&&!Ul(n)}function Zi(n,e){ie(n.node.children,(t,i)=>{e(new eo(t,n,i))})}function Bl(n,e,t,i){t&&e(n),Zi(n,s=>{Bl(s,e,!0)})}function Lg(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Hn(n){return new V(n.parent===null?n.name:Hn(n.parent)+"/"+n.name)}function ir(n){n.parent!==null&&$g(n.parent,n.name,n)}function $g(n,e,t){const i=xg(t),s=we(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ir(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ir(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=/[\[\].#$\/\u0000-\u001F\u007F]/,Ug=/[\[\].#$\u0000-\u001F\u007F]/,Cs=10*1024*1024,no=function(n){return typeof n=="string"&&n.length!==0&&!Fg.test(n)},Hl=function(n){return typeof n=="string"&&n.length!==0&&!Ug.test(n)},Bg=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hl(n)},io=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Gi(n)||n&&typeof n=="object"&&we(n,".sv")},Ai=function(n,e,t,i){i&&e===void 0||Wn($t(n,"value"),e,t)},Wn=function(n,e,t){const i=t instanceof V?new sm(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ot(i));if(typeof e=="function")throw new Error(n+"contains a function "+ot(i)+" with contents = "+e.toString());if(Gi(e))throw new Error(n+"contains "+e.toString()+" "+ot(i));if(typeof e=="string"&&e.length>Cs/3&&Wi(e)>Cs)throw new Error(n+"contains a string greater than "+Cs+" utf8 bytes "+ot(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ie(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!no(o)))throw new Error(n+" contains an invalid key ("+o+") "+ot(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rm(i,o),Wn(n,a,i),om(i)}),s&&r)throw new Error(n+' contains ".value" child '+ot(i)+" in addition to actual children.")}},Hg=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=Cn(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!no(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(im);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&fe(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Wl=function(n,e,t,i){const s=$t(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];ie(e,(o,a)=>{const c=new V(o);if(Wn(s,a,Q(t,c)),Or(c)===".priority"&&!io(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),Hg(s,r)},Wg=function(n,e,t){if(Gi(e))throw new Error($t(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!io(e))throw new Error($t(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Vl=function(n,e,t,i){if(!Hl(t))throw new Error($t(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Vg=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vl(n,e,t)},Ke=function(n,e){if(x(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},jg=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!no(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Bg(t))throw new Error($t(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function es(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Dr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function jl(n,e,t){es(n,t),Gl(n,i=>Dr(i,e))}function de(n,e,t){es(n,t),Gl(n,i=>fe(i,e)||fe(e,i))}function Gl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(zg(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function zg(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();hn&&ne("event: "+t.toString()),Jt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="repo_interrupt",qg=25;class Yg{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bi(),this.transactionQueueTree_=new eo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qg(n,e,t){if(n.stats_=Pr(n.repoInfo_),n.forceRestClient_||Rp())n.server_=new wi(n.repoInfo_,(i,s,r,o)=>{Ea(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ia(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Z(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Pe(n.repoInfo_,e,(i,s,r,o)=>{Ea(n,i,s,r,o)},i=>{Ia(n,i)},i=>{Jg(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Op(n.repoInfo_,()=>new Mm(n.stats_,n.server_)),n.infoData_=new Tm,n.infoSyncTree_=new wa({startListening:(i,s,r,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=Bn(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),so(n,"connected",!1),n.serverSyncTree_=new wa({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);de(n.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function zl(n){const t=n.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Vn(n){return Mg({timestamp:zl(n)})}function Ea(n,e,t,i,s){n.dataUpdateCount++;const r=new V(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=li(t,l=>Y(l));o=Sg(n.serverSyncTree_,r,c,s)}else{const c=Y(t);o=Dl(n.serverSyncTree_,r,c,s)}else if(i){const c=li(t,l=>Y(l));o=Ig(n.serverSyncTree_,r,c)}else{const c=Y(t);o=Bn(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=jt(n,r)),de(n.eventQueue_,a,o)}function Ia(n,e){so(n,"connected",e),e===!1&&t_(n)}function Jg(n,e){ie(e,(t,i)=>{so(n,t,i)})}function so(n,e,t){const i=new V("/.info/"+e),s=Y(t);n.infoData_.updateSnapshot(i,s);const r=Bn(n.infoSyncTree_,i,s);de(n.eventQueue_,i,r)}function ts(n){return n.nextWriteId_++}function Xg(n,e,t){const i=Tg(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=Y(s).withIndex(e._queryParams.getIndex());nr(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Bn(n.serverSyncTree_,e._path,r);else{const a=Nn(n.serverSyncTree_,e);o=Dl(n.serverSyncTree_,e._path,r,a)}return de(n.eventQueue_,e._path,o),Ni(n.serverSyncTree_,e,t,null,!0),r},s=>(en(n,"get for query "+Z(e)+" failed: "+s),Promise.reject(new Error(s))))}function Zg(n,e,t,i,s){en(n,"set",{path:e.toString(),value:t,priority:i});const r=Vn(n),o=Y(t,i),a=Qi(n.serverSyncTree_,e),c=Xr(o,a,r),l=ts(n),d=zr(n.serverSyncTree_,e,c,l,!0);es(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,p)=>{const m=h==="ok";m||ce("set at "+e+" failed: "+h);const v=ze(n.serverSyncTree_,l,!m);de(n.eventQueue_,e,v),nt(n,s,h,p)});const u=oo(n,e);jt(n,u),de(n.eventQueue_,u,[])}function e_(n,e,t,i){en(n,"update",{path:e.toString(),value:t});let s=!0;const r=Vn(n),o={};if(ie(t,(a,c)=>{s=!1,o[a]=Fl(Q(e,a),Y(c),n.serverSyncTree_,r)}),s)ne("update() called with empty data.  Don't do anything."),nt(n,i,"ok",void 0);else{const a=ts(n),c=Eg(n.serverSyncTree_,e,o,a);es(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{const u=l==="ok";u||ce("update at "+e+" failed: "+l);const h=ze(n.serverSyncTree_,a,!u),p=h.length>0?jt(n,e):e;de(n.eventQueue_,p,h),nt(n,i,l,d)}),ie(t,l=>{const d=oo(n,Q(e,l));jt(n,d)}),de(n.eventQueue_,e,[])}}function t_(n){en(n,"onDisconnectEvents");const e=Vn(n),t=bi();Qs(n.onDisconnect_,H(),(s,r)=>{const o=Fl(s,r,n.serverSyncTree_,e);Xt(t,s,o)});let i=[];Qs(t,H(),(s,r)=>{i=i.concat(Bn(n.serverSyncTree_,s,r));const o=oo(n,s);jt(n,o)}),n.onDisconnect_=bi(),de(n.eventQueue_,H(),i)}function n_(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Ys(n.onDisconnect_,e),nt(n,t,i,s)})}function Ca(n,e,t,i){const s=Y(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&Xt(n.onDisconnect_,e,s),nt(n,i,r,o)})}function i_(n,e,t,i,s){const r=Y(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Xt(n.onDisconnect_,e,r),nt(n,s,o,a)})}function s_(n,e,t,i){if(ci(t)){ne("onDisconnect().update() called with empty data.  Don't do anything."),nt(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&ie(t,(o,a)=>{const c=Y(a);Xt(n.onDisconnect_,Q(e,o),c)}),nt(n,i,s,r)})}function r_(n,e,t){let i;x(e._path)===".info"?i=nr(n.infoSyncTree_,e,t):i=nr(n.serverSyncTree_,e,t),jl(n.eventQueue_,e._path,i)}function sr(n,e,t){let i;x(e._path)===".info"?i=Ni(n.infoSyncTree_,e,t):i=Ni(n.serverSyncTree_,e,t),jl(n.eventQueue_,e._path,i)}function o_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Kg)}function en(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ne(t,...e)}function nt(n,e,t,i){e&&Jt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function a_(n,e,t,i,s,r){en(n,"transaction on "+e);const o={path:e,update:t,onComplete:i,status:null,order:jc(),applyLocally:r,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=ro(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Wn("transaction failed: Data returned ",c,o.path),o.status=0;const l=Xi(n.transactionQueueTree_,e),d=Ct(l)||[];d.push(o),to(l,d);let u;typeof c=="object"&&c!==null&&we(c,".priority")?(u=pt(c,".priority"),E(io(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(Qi(n.serverSyncTree_,e)||A.EMPTY_NODE).getPriority().val();const h=Vn(n),p=Y(c,u),m=Xr(p,a,h);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=m,o.currentWriteId=ts(n);const v=zr(n.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);de(n.eventQueue_,e,v),ns(n,n.transactionQueueTree_)}}function ro(n,e,t){return Qi(n.serverSyncTree_,e,t)||A.EMPTY_NODE}function ns(n,e=n.transactionQueueTree_){if(e||is(n,e),Ct(e)){const t=ql(n,e);E(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&c_(n,Hn(e),t)}else Ul(e)&&Zi(e,t=>{ns(n,t)})}function c_(n,e,t){const i=t.map(l=>l.currentWriteId),s=ro(n,e,i);let r=s;const o=s.hash();for(let l=0;l<t.length;l++){const d=t[l];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=ae(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{en(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(ze(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();is(n,Xi(n.transactionQueueTree_,e)),ns(n,n.transactionQueueTree_),de(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)Jt(u[h])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ce("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}jt(n,e)}},o)}function jt(n,e){const t=Kl(n,e),i=Hn(t),s=ql(n,t);return l_(n,s,i),i}function l_(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ae(t,c.path);let d=!1,u;if(E(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,s=s.concat(ze(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=qg)d=!0,u="maxretry",s=s.concat(ze(n.serverSyncTree_,c.currentWriteId,!0));else{const h=ro(n,c.path,o);c.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){Wn("transaction failed: Data returned ",p,c.path);let m=Y(p);typeof p=="object"&&p!=null&&we(p,".priority")||(m=m.updatePriority(h.getPriority()));const C=c.currentWriteId,I=Vn(n),g=Xr(m,h,I);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=g,c.currentWriteId=ts(n),o.splice(o.indexOf(C),1),s=s.concat(zr(n.serverSyncTree_,c.path,g,c.currentWriteId,c.applyLocally)),s=s.concat(ze(n.serverSyncTree_,C,!0))}else d=!0,u="nodata",s=s.concat(ze(n.serverSyncTree_,c.currentWriteId,!0))}de(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}is(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Jt(i[a]);ns(n,n.transactionQueueTree_)}function Kl(n,e){let t,i=n.transactionQueueTree_;for(t=x(e);t!==null&&Ct(i)===void 0;)i=Xi(i,t),e=G(e),t=x(e);return i}function ql(n,e){const t=[];return Yl(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Yl(n,e,t){const i=Ct(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Zi(e,s=>{Yl(n,s,t)})}function is(n,e){const t=Ct(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,to(e,t.length>0?t:void 0)}Zi(e,i=>{is(n,i)})}function oo(n,e){const t=Hn(Kl(n,e)),i=Xi(n.transactionQueueTree_,e);return Lg(i,s=>{ks(n,s)}),ks(n,i),Bl(i,s=>{ks(n,s)}),t}function ks(n,e){const t=Ct(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(E(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(ze(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?to(e,void 0):t.length=r+1,de(n.eventQueue_,Hn(e),s);for(let o=0;o<i.length;o++)Jt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function d_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ce(`Invalid query segment '${t}' in query '${n}'`)}return e}const ka=function(n,e){const t=h_(n),i=t.namespace;t.domain==="firebase.com"&&Le(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Le("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||yp();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new il(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new V(t.pathString)}},h_=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(s=u_(n.substring(d,u)));const h=d_(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",f_=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Sa.charAt(t%64),t=Math.floor(t/64);E(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Sa.charAt(e[s]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Z(this.snapshot.exportVal())}}class m_{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new me;return n_(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ke("OnDisconnect.remove",this._path);const e=new me;return Ca(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ke("OnDisconnect.set",this._path),Ai("OnDisconnect.set",e,this._path,!1);const t=new me;return Ca(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ke("OnDisconnect.setWithPriority",this._path),Ai("OnDisconnect.setWithPriority",e,this._path,!1),Wg("OnDisconnect.setWithPriority",t);const i=new me;return i_(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){Ke("OnDisconnect.update",this._path),Wl("OnDisconnect.update",e,this._path);const t=new me;return s_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return $(this._path)?null:Or(this._path)}get ref(){return new ke(this._repo,this._path)}get _queryIdentifier(){const e=ua(this._queryParams),t=Nr(e);return t==="{}"?"default":t}get _queryObject(){return ua(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof ao))return!1;const t=this._repo===e._repo,i=Dr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+nm(this._path)}}class ke extends ao{constructor(e,t){super(e,t,new Fr,!1)}get parent(){const e=hl(this._path);return e===null?null:new ke(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new V(e),i=An(this.ref,e);return new Gt(this._node.getChild(t),i,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Gt(s,An(this.ref,i),q)))}hasChild(e){const t=new V(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function U(n,e){return n=oe(n),n._checkNotDeleted("ref"),e!==void 0?An(n._root,e):n._root}function An(n,e){return n=oe(n),x(n._path)===null?Vg("child","path",e):Vl("child","path",e),new ke(n._repo,Q(n._path,e))}function __(n){return n=oe(n),new g_(n._repo,n._path)}function Jl(n,e){n=oe(n),Ke("push",n._path),Ai("push",e,n._path,!0);const t=zl(n._repo),i=f_(t),s=An(n,i),r=An(n,i);let o;return e!=null?o=tn(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function cn(n){return Ke("remove",n._path),tn(n,null)}function tn(n,e){n=oe(n),Ke("set",n._path),Ai("set",e,n._path,!1);const t=new me;return Zg(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function wt(n,e){Wl("update",e,n._path);const t=new me;return e_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function co(n){n=oe(n);const e=new Ql(()=>{}),t=new ss(e);return Xg(n._repo,n,t).then(i=>new Gt(i,new ke(n._repo,n._path),n._queryParams.getIndex()))}class ss{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new p_("value",this,new Gt(e.snapshotNode,new ke(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new m_(this,e,t):null}matches(e){return e instanceof ss?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function v_(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const c=t,l=(d,u)=>{sr(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new Ql(t,r||void 0),a=new ss(o);return r_(n._repo,n,a),()=>sr(n._repo,n,a)}function jn(n,e,t,i){return v_(n,"value",e,t,i)}function lo(n,e,t){sr(n._repo,n,null)}pg(ke);yg(ke);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="FIREBASE_DATABASE_EMULATOR_HOST",rr={};let w_=!1;function b_(n,e,t,i){n.repoInfo_=new il(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function E_(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Le("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ne("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ka(r,s),a=o.repoInfo,c;typeof process<"u"&&zo&&(c=zo[y_]),c?(r=`http://${c}?ns=${a.namespace}`,o=ka(r,s),a=o.repoInfo):o.repoInfo.secure;const l=new Ap(n.name,n.options,e);jg("Invalid Firebase Database URL",o),$(o.path)||Le("Database URL must point to the root of a Firebase Database (not including a child path).");const d=C_(a,n,l,new Np(n.name,t));return new k_(d,n)}function I_(n,e){const t=rr[e];(!t||t[n.key]!==n)&&Le(`Database ${e}(${n.repoInfo_}) has already been deleted.`),o_(n),delete t[n.key]}function C_(n,e,t,i){let s=rr[e.name];s||(s={},rr[e.name]=s);let r=s[n.toURLString()];return r&&Le("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Yg(n,w_,t,i),s[n.toURLString()]=r,r}class k_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Qg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ke(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(I_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Le("Cannot call "+e+" on a deleted database.")}}function S_(n=ac(),e){const t=vr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Wu("database");i&&T_(t,...i)}return t}function T_(n,e,t,i={}){n=oe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Le("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Le('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ei(ei.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Vu(i.mockUserToken,n.app.options.projectId);r=new ei(o)}b_(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(n){pp(Yt),Ft(new mt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return E_(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Qe(Ko,qo,n),Qe(Ko,qo,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function ye(n,e,t){var i;if(n=oe(n),Ke("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const s=(i=void 0)!==null&&i!==void 0?i:!0,r=new me,o=(c,l,d)=>{let u=null;c?r.reject(c):(u=new Gt(d,new ke(n._repo,n._path),q),r.resolve(new N_(l,u)))},a=jn(n,()=>{});return a_(n._repo,n._path,e,o,a,s),r.promise}Pe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Pe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};R_();const ln={apiKey:"AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",authDomain:"market-6e66a.firebaseapp.com",databaseURL:"https://market-6e66a-default-rtdb.firebaseio.com",projectId:"market-6e66a",storageBucket:"market-6e66a.firebasestorage.app",messagingSenderId:"402312269082",appId:"1:402312269082:web:cf304afc54057ea162b0a3"},Xl=!!ln.apiKey&&!ln.apiKey.startsWith("여기에")&&!!ln.databaseURL&&!ln.databaseURL.startsWith("여기에");let Ss=null,uo=null,L=null;try{Xl&&(Ss=oc(ln),uo=hp(Ss),L=S_(Ss))}catch(n){console.error("[firebase] 초기화 실패:",n)}const Lt=1e7,$e=10,or=4e3,A_=.008,Ta=3e4,P_=4e-5,Ra=.015,M_=.55,Zl=15e-5,O_=.0018,D_=3*60*1e3,x_=["달빛전자","구름소프트","번개모빌리티","바다식품","별빛바이오","한입게임즈","초록에너지","솜사탕유통","무지개항공","도토리금융","은하반도체","포근화학","두근로보틱스","새벽엔터","고래물산","민들레제약"],L_=["떡상테크","유니콘소프트","미래모빌","첫걸음바이오","샛별에너지","루키게임즈","신화엔터","퀀텀반도체"],Na=["개미부대","왕개미","큰손","수상한세력","외국인","기관","전설의단타","스캘퍼","장기투자자","물타기달인"];function lt(n,e){return Math.floor(Math.random()*(e-n+1))+n}function K(n,e){return Math.random()*(e-n)+n}function pe(n,e,t){return Math.max(e,Math.min(t,n))}function $_(n){const e=[...n];for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function F_(n,e,t={}){const i=t.type||"stock",s=t.role||null;e=Ee(Math.max($e,e));let r=1,o=1;return i==="stock"?s==="leader"?(r=K(.8,1.4),o=K(2,3)):s==="sub"?(r=K(.9,1.6),o=K(1.2,2.2)):s==="related"?(r=K(.7,2),o=K(.6,1.8)):(r=K(.5,2.4),o=K(.3,1.2)):i==="preferred"?(r=K(.4,.8),o=K(.5,1.1)):i==="etf"?(r=K(.5,.8),o=K(1.5,2.5)):i==="reit"?(r=K(.35,.7),o=K(.6,1.2)):i==="bond"?(r=K(.2,.45),o=K(.8,1.4)):i==="spac"?(r=K(.2,.5),o=K(.4,.9)):i==="commodity"?(r=K(.9,1.8),o=K(1,2)):(i==="inverse"||i==="leverage")&&(r=1,o=K(1.5,2.5)),{name:n,type:i,role:s||"",sector:t.sector||"",link:t.link||"",price:e,previousPrice:e,basePrice:e,open:e,high:e,low:e,changeRate:0,volume:0,value:0,pressure:0,trend:0,volat:+r.toFixed(2),activ:+o.toFixed(2),heat:0,news:""}}function rs(n){return{preferred:"우선주",etf:"ETF",reit:"리츠",spac:"SPAC",inverse:"인버스",leverage:"레버리지",bond:"채권ETF",commodity:"원자재"}[n]||""}function eu(n){return{leader:"대장주",sub:"부대장주",related:"관련주",normal:"일반주"}[n]||""}function Ts(n){return!n||n==="stock"}function os(n){return Math.round(n*1.3)}function as(n){return Math.max($e,Math.round(n*.7))}function tu(n){return n<2e3?1:n<5e3?5:n<2e4?10:n<5e4?50:n<2e5?100:500}function Ee(n){const e=tu(n);return Math.round(n/e)*e}function Rs(n){return pe((n.pressure||0)*P_/(n.activ||1),-Ra,Ra)}async function U_(n,e){const t=e.stocks||{},i=Object.keys(t);if(i.length===0)return;let s=null,r=0,o="";const a=Date.now(),c={},l=[];function d(I){const g=(I.activ||1)*(1+(I.heat||0));let w=0,S=0;const b=pe(.35+g*.2,.25,.97);if(Math.random()<b){const k=lt(1,Math.max(2,Math.round(1+g*3)));for(let P=0;P<k;P++){const _=lt(10,Math.round(60+g*220)),y=.5+pe((I.trend||0)*15,-.3,.3),R=Math.random()<y;w+=R?_:-_,S+=_,l.push({nickname:Na[lt(0,Na.length-1)],type:R?"buy":"sell",stockName:I.name,qty:_,price:I.price,time:a})}}return S+=Math.round(lt(300,2500)*g),{botNet:w,botVolume:S}}function u(I,g,w,S,b={}){const k=g.basePrice||g.price,P=k?(g.price-k)/k:0;w+=pe(-P*.01,-.006,.006);let _=Ee(g.price*(1+w));_=pe(_,as(k),os(k)),_=Math.max($e,_);const y=`stocks/${I}/`;if(c[y+"previousPrice"]=g.price,c[y+"price"]=_,c[y+"changeRate"]=+((_-k)/k*100).toFixed(2),c[y+"volume"]=(g.volume||0)+S,c[y+"value"]=(g.value||0)+S*_,_>(g.high||g.price)&&(c[y+"high"]=_),_<(g.low||g.price)&&(c[y+"low"]=_),(g.pressure||0)!==0){const R=(g.pressure||0)*M_;c[y+"pressure"]=Math.abs(R)<1?0:+R.toFixed(2)}return b.trend!=null&&(c[y+"trend"]=+b.trend.toFixed(5)),b.heat!=null&&(b.heat>.001||(g.heat||0)>.001)&&(c[y+"heat"]=+b.heat.toFixed(3)),b.news!=null&&(c[y+"news"]=b.news),_/g.price-1}function h(I){const g=I.volat||1;let w=(I.heat||0)*.92;Math.random()<.006&&(w=pe(w+K(.3,1),0,1.6));const S=g*(1+w*.5),b=pe((I.trend||0)*.96+(Math.random()-.5)*8e-4*S,-.0025*(1+w*.5),.0025*(1+w*.5));let k=(Math.random()-.5)*.0016*S+b;return Math.random()<.005&&(k+=(Math.random()-.5)*.012*(1+w*.4)),{own:k,trend:b,heat:w}}const p={},m={},v=[];for(const I of i){const g=t[I];if(!Ts(g.type)||g.role!=="leader")continue;const{own:w,trend:S,heat:b}=h(g),{botNet:k,botVolume:P}=d({...g,heat:b});let _=w+Rs(g)+pe(k*2e-4,-.008,.008);I===s&&(_+=r);const y=u(I,g,_,P,{trend:S,heat:b,news:I===s?o:null});p[I]=y,m[g.sector]=y,v.push(y)}for(const I of i){const g=t[I];if(!Ts(g.type)||g.role==="leader")continue;const w=g.role==="related"?.7:g.role==="sub"?.45:.2,S=m[g.sector]||0,{own:b,trend:k,heat:P}=h(g),{botNet:_,botVolume:y}=d({...g,heat:P});let R=S*w+b*(1-w*.5);R+=Rs(g)+pe(_*2e-4,-.008,.008),I===s&&(R+=r);const N=u(I,g,R,y,{trend:k,heat:P,news:I===s?o:null});p[I]=N,v.push(N)}const C=v.length?v.reduce((I,g)=>I+g,0)/v.length:0;for(const I of i){const g=t[I];if(Ts(g.type))continue;const{botNet:w,botVolume:S}=d(g),b=Math.random()-.5;let k=0;switch(g.type){case"etf":k=C+b*.0015;break;case"inverse":k=-C+b*.0015;break;case"leverage":k=2*C+b*.002;break;case"bond":k=-.25*C+2e-4+b*.0012;break;case"reit":k=.2*C+2e-4+b*.004*(g.volat||1);break;case"commodity":k=b*.011*(g.volat||1)+(Math.random()<.01?(Math.random()-.5)*.05:0);break;case"preferred":k=(m[g.sector]||p[g.link]||0)*.85+b*.002;break;case"spac":k=b*.003+(Math.random()<.008?(Math.random()<.7?1:-1)*K(.06,.2):0);break;default:k=b*.005}k+=Rs(g)+pe(w*3e-4,-.01,.01),u(I,g,k,S,{})}c.marketTick=a,$_(l),c.botFeed=l.slice(0,4),await wt(U(L,`rooms/${n}`),c)}function Ns(n){return Math.round(n||0).toLocaleString("ko-KR")}async function B_(n,e){const t=Date.now(),i=e.stocks||{},s=e.ipo;if(s&&s.status==="subscribing"){if(t<s.endsAt)return;const h=s.applies||{},p=Object.values(h).reduce((S,b)=>S+(b||0),0),m=(s.botDemand||0)+p,v=Math.max(1,m/s.totalShares),C=pe(.92+(v-1)*.1+K(-.1,.15),.9,2.3),I=Math.max($e,Ee(s.offerPrice*C)),g=F_(s.name,I,{type:"stock",role:"normal",sector:"신규상장"});g.ipo=!0;const w=((I-s.offerPrice)/s.offerPrice*100).toFixed(1);await wt(U(L,`rooms/${n}`),{[`stocks/${s.stockId}`]:g,ipo:null,latestNews:{text:`🎉 ${s.name} 상장! 공모가 ${Ns(s.offerPrice)} → 시초가 ${Ns(I)} (${w>=0?"+":""}${w}%) · 경쟁률 ${v.toFixed(1)}:1`,time:t}});for(const[S,b]of Object.entries(h)){const k=b||0,P=Math.floor(k/v),_=s.offerPrice*(k-P);await ye(U(L,`rooms/${n}/players/${S}`),y=>y&&(_>0&&(y.cash=(y.cash||0)+_),P>0&&(y.holdings=y.holdings||{},y.holdings[s.stockId]=(y.holdings[s.stockId]||0)+P),y))}return}if(s||Object.keys(i).length>=90||Math.random()>=A_)return;const r=Object.values(i).map(h=>h.name),o=[...x_,...L_].filter(h=>!r.includes(h));if(!o.length)return;const a=o[lt(0,o.length-1)],c=Ee(lt(5e3,6e4)),l=lt(5e4,2e5),d=Math.floor(l*K(.4,9)),u="ipo"+t.toString(36);await wt(U(L,`rooms/${n}`),{ipo:{stockId:u,name:a,offerPrice:c,totalShares:l,botDemand:d,status:"subscribing",startedAt:t,endsAt:t+Ta},latestNews:{text:`공모주 청약 시작! '${a}' 공모가 ${Ns(c)}원 · ${Math.round(Ta/1e3)}초 후 마감`,time:t}})}async function H_(n,e,t,i){const s=i.ipo;if(!s||s.status!=="subscribing")throw new Error("청약 가능한 공모주가 없습니다.");if(Date.now()>=s.endsAt)throw new Error("청약이 마감되었습니다.");if(t=Math.floor(t),!t||t<1)throw new Error("청약 수량을 확인하세요.");const r=s.offerPrice*t;if(!(await ye(U(L,`rooms/${n}/players/${e}/cash`),a=>{if(a==null)return a;if(!(a<r))return a-r})).committed)throw new Error("청약 증거금(현금)이 부족합니다.");await ye(U(L,`rooms/${n}/ipo/applies/${e}`),a=>(a||0)+t)}function W_(n){if(!n)return 0;const e=Object.values(n.applies||{}).reduce((t,i)=>t+(i||0),0);return((n.botDemand||0)+e)/n.totalShares}async function Pi(n,e,t,i,s,r,o,a){var v;const c=(v=a.stocks)==null?void 0:v[i];if(!c)throw new Error("종목을 선택하세요.");const l=s.side;if(l!=="buy"&&l!=="sell")throw new Error("주문 유형 오류");const d=s.trigger==="above"?"above":"below",u=["gtc","day","ioc"].includes(s.tif)?s.tif:"gtc";if(r=Math.floor(r),!r||r<1)throw new Error("수량을 확인하세요.");if(o=Ee(Number(o)),!o||o<$e)throw new Error("주문 가격을 확인하세요.");const h=Date.now(),p={uid:e,nickname:t,stockId:i,stockName:c.name,side:l,trigger:d,tif:u,label:s.label||"지정가",qty:r,target:o,createdAt:h,expiresAt:u==="day"?h+D_:null},m=Jl(U(L,`rooms/${n}/orders`)).key;return await tn(U(L,`rooms/${n}/orders/${m}`),p),m}async function V_(n,e){await cn(U(L,`rooms/${n}/orders/${e}`))}async function j_(n,e){var s;const t=e.orders;if(!t)return;const i=Date.now();for(const[r,o]of Object.entries(t)){const a=(s=e.stocks)==null?void 0:s[o.stockId];if(!a){await cn(U(L,`rooms/${n}/orders/${r}`));continue}const c=a.price;if((o.trigger||(o.side==="buy"?"below":"above"))==="below"?c<=o.target:c>=o.target){try{o.side==="buy"?await nu(n,o.uid,o.nickname,o.stockId,o.qty,e):await ho(n,o.uid,o.nickname,o.stockId,o.qty,e)}catch(u){console.warn("[order] 예약 체결 실패, 취소:",o,u==null?void 0:u.message)}await cn(U(L,`rooms/${n}/orders/${r}`));continue}o.tif==="ioc"?await cn(U(L,`rooms/${n}/orders/${r}`)):o.expiresAt&&i>o.expiresAt&&await cn(U(L,`rooms/${n}/orders/${r}`))}}function G_(n,e){const t=n.orders||{};return Object.entries(t).filter(([,i])=>i.uid===e).map(([i,s])=>({id:i,...s})).sort((i,s)=>(s.createdAt||0)-(i.createdAt||0))}async function nu(n,e,t,i,s,r){var d;const o=(d=r.stocks)==null?void 0:d[i];if(!o)throw new Error("종목을 선택하세요.");if(s=Math.floor(s),!s||s<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.ceil(a*s*(1+Zl));if(!(await ye(U(L,`rooms/${n}/players/${e}`),u=>{if(!u)return u;if((u.cash||0)<c)return;u.cash=(u.cash||0)-c,u.holdings=u.holdings||{};const h=u.holdings[i]||0;u.avgCost=u.avgCost||{};const p=u.avgCost[i]||0;return u.avgCost[i]=Math.round((h*p+s*a)/(h+s)),u.holdings[i]=h+s,u})).committed)throw new Error("현금(수수료 포함)이 부족합니다.");await iu(n,i,s,+s,{type:"buy",nickname:t,stockName:o.name,qty:s,price:a,time:Date.now()})}async function ho(n,e,t,i,s,r){var d;const o=(d=r.stocks)==null?void 0:d[i];if(!o)throw new Error("종목을 선택하세요.");if(s=Math.floor(s),!s||s<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.floor(a*s*(1-Zl-O_));if(!(await ye(U(L,`rooms/${n}/players/${e}`),u=>{var p;if(!u)return u;const h=((p=u.holdings)==null?void 0:p[i])||0;if(!(h<s))return u.cash=(u.cash||0)+c,u.holdings[i]=h-s,u.holdings[i]===0&&(delete u.holdings[i],u.avgCost&&delete u.avgCost[i]),u})).committed)throw new Error("보유 수량이 부족합니다.");await iu(n,i,s,-s,{type:"sell",nickname:t,stockName:o.name,qty:s,price:a,time:Date.now()})}async function z_(n,e,t,i,s){var o,a,c;const r=((c=(a=(o=s.players)==null?void 0:o[e])==null?void 0:a.holdings)==null?void 0:c[i])||0;if(r<1)throw new Error("보유 수량이 없습니다.");return ho(n,e,t,i,r,s)}async function iu(n,e,t,i,s){await Promise.all([ye(U(L,`rooms/${n}/stocks/${e}/volume`),r=>(r||0)+t),ye(U(L,`rooms/${n}/stocks/${e}/value`),r=>(r||0)+t*s.price),ye(U(L,`rooms/${n}/stocks/${e}/pressure`),r=>(r||0)+i),Jl(U(L,`rooms/${n}/logs`),s)])}function fo(n,e){var s;let t=(n==null?void 0:n.cash)||0;const i=(n==null?void 0:n.holdings)||{};for(const[r,o]of Object.entries(i)){const a=((s=e==null?void 0:e[r])==null?void 0:s.price)||0;t+=a*o}return t}function su(n,e){return Object.entries(n||{}).map(([t,i])=>({uid:t,nickname:i.nickname&&String(i.nickname).trim()||"플레이어-"+String(t).slice(-4),connected:i.connected!==!1,total:fo(i,e)})).sort((t,i)=>i.total-t.total)}const K_=1,Mi=[{key:"candles1m",win:6e4,cap:240},{key:"candles5m",win:3e5,cap:288},{key:"candles15m",win:9e5,cap:192},{key:"candles1h",win:36e5,cap:168}],ru=2*6e4,q_=6e4,Y_=4500;function ar(n,e){return Math.floor(n/e)*e}function ti(n,e,t){return Math.max(e,Math.min(t,n))}function Aa(){let n=0,e=0;for(;n===0;)n=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e)}function Pa(n,e){const t=n&&n[e]||null;return t?Object.values(t).filter(i=>i&&typeof i.t=="number").sort((i,s)=>i.t-s.t):[]}function Q_(n,e,t,i){const s=(t-e)/i,r=Math.max(1,s/4e3),o=n.volat||1,a=n.activ||1,c=n.basePrice||n.price||$e;let l=n.price||c,d=n.trend||0,u=n.heat||0;const h=!n.type||n.type==="stock",p=.0011*o*(h?1:.7),m=5,v=[];for(let C=0;C<i;C++){const I=e+s*C,g=l,w=r/m;let S=g,b=g,k=g;for(let N=0;N<m;N++){d=ti(d*Math.pow(.99,w)+Aa()*18e-5*o*Math.sqrt(w),-.0016,.0016),Math.random()<.005*w&&(u=ti(u+(.3+Math.random()*.7),0,1.6)),u*=Math.pow(.94,w);const X=p*(1+u*.5);let D=d*w+Aa()*X*Math.sqrt(w);Math.random()<.0025*w&&(D+=(Math.random()<.5?1:-1)*(.006+Math.random()*.018)*(h?1:.6)),k=k*(1+D),k=c+(k-c)*Math.exp(-.01*w),k=ti(k,as(c),os(c)),k=Math.max($e,k),S=Math.max(S,k),b=Math.min(b,k)}const P=Ee(k),_=g?Math.abs((P-g)/g):0,y=(400+Math.random()*1800)*a*(1+u*.8),R=Math.round(y*r*(1+_*8));v.push({t:I,o:Ee(g),h:Ee(S),l:Ee(b),c:P,v:R}),l=P}return{candles:v,finalPrice:l,finalBase:c}}function J_(n){const e={};for(const t of Mi)e[t.key]={};for(const t of n)for(const i of Mi){const s=ar(t.t,i.win),r=e[i.key],o=r[s];o?(o.h=Math.max(o.h,t.h),o.l=Math.min(o.l,t.l),o.c=t.c,o.v+=t.v):r[s]={t:s,o:t.o,h:t.h,l:t.l,c:t.c,v:t.v}}return e}async function X_(n,e){const t=Date.now();return(await ye(U(L,`rooms/${n}/market/catchupLock`),s=>{if(!(s&&s.expiresAt&&s.expiresAt>t))return{by:e||"anon",at:t,expiresAt:t+q_}})).committed}async function Z_(n){try{await wt(U(L,`rooms/${n}/market`),{catchupLock:null})}catch{}}function ev(n){if(!n||n.status!=="playing")return!1;const e=n.market&&n.market.lastTickAt||n.marketTick||0;return e?Date.now()-e>=ru:!1}async function tv(n,e,t,i={}){if(!e||!e.stocks)return{applied:!1,reason:"no-stocks"};if(e.status!=="playing")return{applied:!1,reason:"not-playing"};const s=Date.now(),r=e.market&&e.market.lastTickAt||e.marketTick||0,o=s-r;if(!i.force&&o<ru)return{applied:!1,reason:"fresh",elapsed:o};if(!await X_(n,t)&&!i.force)return{applied:!1,reason:"locked"};try{let c=e.stocks||{};try{const v=await co(U(L,`rooms/${n}/stocks`));v.exists()&&(c=v.val())}catch{}const l=Object.keys(c);if(!l.length)return{applied:!1,reason:"no-stocks"};const d=ti(Math.round(Y_/l.length),30,480),u=Math.max(1,Math.round(o/6e4)),h=Math.min(d,u,480),p={};let m=0;for(const v of l){const C=c[v];if(!C||typeof C.price!="number")continue;const I=Q_(C,r,s,h),g=J_(I.candles),w=`stocks/${v}/`,S=C.history||{};for(const _ of Mi){const R={...S[_.key]||{}};for(const[D,J]of Object.entries(g[_.key])){const se=R[D];R[D]=se?{t:J.t,o:se.o,h:Math.max(se.h,J.h),l:Math.min(se.l,J.l),c:J.c,v:(se.v||0)+J.v}:J}const N=Object.keys(R).map(Number).sort((D,J)=>D-J),X=N.length-_.cap;if(X>0)for(let D=0;D<X;D++)p[w+`history/${_.key}/${N[D]}`]=null;for(const[D,J]of Object.entries(g[_.key]))Number(D)<N[Math.max(0,X)]||(p[w+`history/${_.key}/${D}`]=R[D],m++)}const b=I.finalBase,k=Math.max($e,Ee(I.finalPrice)),P=I.candles.reduce((_,y)=>_+(y.v||0),0);p[w+"previousPrice"]=C.price,p[w+"price"]=k,p[w+"currentPrice"]=k,p[w+"changeRate"]=+((k-b)/b*100).toFixed(2),p[w+"volume"]=(C.volume||0)+P,p[w+"value"]=(C.value||0)+P*k,k>(C.high||C.price)&&(p[w+"high"]=k),k<(C.low||C.price)&&(p[w+"low"]=k),C.heat&&(p[w+"heat"]=0),C.pressure&&(p[w+"pressure"]=0)}return p["market/tickMs"]=4e3,p["market/lastTickAt"]=s,p["market/lastHistoryAt"]=s,p["market/lastCatchupAt"]=s,p["market/catchupVersion"]=K_,p["market/catchupBy"]=t||"anon",p["market/catchupLock"]=null,p.marketTick=s,await wt(U(L,`rooms/${n}`),p),{applied:!0,elapsed:o,numSteps:h,candlesWritten:m,stocks:l.length}}catch(c){return await Z_(n),console.error("[catchup] 실패:",c),{applied:!1,reason:"error",error:c==null?void 0:c.message}}}function nv(){return{cur:{},lastBucket:0,seeded:!1}}async function iv(n,e,t){const i=e.stocks||{},s=Date.now(),r=ar(s,6e4);t.lastBucket||(t.lastBucket=r);for(const[d,u]of Object.entries(i)){if(!u||typeof u.price!="number")continue;let h=t.cur[d];(!h||h.t!==r)&&(h={t:r,o:u.price,h:u.price,l:u.price,c:u.price,v:0,_lastVol:u.volume||0},t.cur[d]=h),h.c=u.price,h.h=Math.max(h.h,u.price),h.l=Math.min(h.l,u.price);const p=Math.max(0,(u.volume||0)-(h._lastVol||0));h.v+=p,h._lastVol=u.volume||0}if(r===t.lastBucket)return;const o=t.lastBucket;let a=i;try{const d=await co(U(L,`rooms/${n}/stocks`));d.exists()&&(a=d.val())}catch{}const c={};let l=!1;for(const d of Object.keys(i)){const u=t.cur[d];if(!u)continue;const h={o:u.o,h:u.h,l:u.l,c:u.c,v:u.v},p=`stocks/${d}/`,m=a[d]&&a[d].history||{};for(const v of Mi){const C=ar(o,v.win),I=m[v.key]&&m[v.key][C]||null,g=I?{t:C,o:I.o,h:Math.max(I.h,h.h),l:Math.min(I.l,h.l),c:h.c,v:(I.v||0)+h.v}:{t:C,o:h.o,h:h.h,l:h.l,c:h.c,v:h.v};c[p+`history/${v.key}/${C}`]=g;const w=m[v.key]?Object.keys(m[v.key]).map(Number).sort((S,b)=>S-b):[];w.length>v.cap&&w[0]!==C&&(c[p+`history/${v.key}/${w[0]}`]=null)}l=!0}if(t.lastBucket=r,!!l){c["market/lastTickAt"]=s,c["market/lastHistoryAt"]=s,c["market/tickMs"]=4e3;try{await wt(U(L,`rooms/${n}`),c)}catch(d){console.warn("[history] 라이브 캔들 저장 실패:",d==null?void 0:d.message)}}}function ou(n,e){if(n&&String(n).startsWith("ipo"))return'<span class="tag tag-new">NEW</span>';const t=rs(e.type);return t?`<span class="tag ${e.type==="inverse"?"tag-inv":e.type==="leverage"?"tag-lev":"tag-etf"}">${t}</span>`:e.role==="leader"?'<span class="tag tag-leader">대장주</span>':e.role==="sub"?'<span class="tag tag-sub">부대장</span>':""}function T(n){return document.getElementById(n)}function _n(n){return Math.round(n??0).toLocaleString("ko-KR")+"원"}function O(n){return Math.round(n??0).toLocaleString("ko-KR")}function bt(n){return n=n||0,n>=1e12?(n/1e12).toFixed(2)+"조":n>=1e8?(n/1e8).toFixed(1)+"억":n>=1e4?Math.round(n/1e4).toLocaleString("ko-KR")+"만":O(n)}function sv(n){return O(n)+"주"}const rv=["screen-auth","screen-wait","screen-game","screen-result"];function po(n){rv.forEach(e=>{const t=T(e);t&&t.classList.toggle("hidden",e!==n)})}function ov(n,e,t=!0){const i=T(n);i&&(i.textContent="",i.classList.toggle("error",t))}function au(n){T("fbError").classList.remove("hidden"),n&&(T("fbErrorMsg").textContent=n)}const av=3,cv=120,Ma=60;let Se={},vn=[],Be={},Nt=0,Pn=null,cr={};function cu(){Se={},vn=[],Be={},Nt=0,Pn=null,cr={},Li="";for(const n in xi)delete xi[n]}function lv(){if(Pn)try{localStorage.setItem(Pn,JSON.stringify({candles:Se,lastVol:Be,tick:Nt}))}catch{}}function uv(n,e){const t=n.stocks||{},i=n.marketTick||0,s=`mb_candles_${e||"x"}_${n.startedAt||0}`;if(s!==Pn){Pn=s,Se={},Be={},Nt=0;try{const r=JSON.parse(localStorage.getItem(s)||"null");r&&r.candles&&(Se=r.candles,Be=r.lastVol||{},Nt=r.tick||0)}catch{}}for(const[r,o]of Object.entries(t))Se[r]||(Se[r]=[{t:Date.now(),o:o.price,h:o.price,l:o.price,c:o.price,v:0,_n:0}]),Be[r]==null&&(Be[r]=o.volume||0);if(i!==Nt){Nt=i;for(const[o,a]of Object.entries(t)){const c=Se[o]||(Se[o]=[]);let l=c[c.length-1];(!l||l._n>=av)&&(l={t:Date.now(),o:a.price,h:a.price,l:a.price,c:a.price,v:0,_n:0},c.push(l)),l.c=a.price,l.h=Math.max(l.h,a.price),l.l=Math.min(l.l,a.price);const d=Math.max(0,(a.volume||0)-(Be[o]||0));l.v+=d,Be[o]=a.volume||0,l._n++,c.length>cv&&c.shift()}const r=n.botFeed?Object.values(n.botFeed):[];for(const o of r)vn.unshift({...o,bot:!0});vn.length>Ma&&(vn.length=Ma),pv(t),Hv(t),lv()}}let At=new Set(JSON.parse(localStorage.getItem("mb_watch")||"[]")),ht=JSON.parse(localStorage.getItem("mb_alerts")||"{}");function dv(n){At.has(n)?At.delete(n):At.add(n),localStorage.setItem("mb_watch",JSON.stringify([...At]))}function hv(n,e){e>0?ht[n]=e:delete ht[n],localStorage.setItem("mb_alerts",JSON.stringify(ht))}function fv(n){return ht[n]||0}function pv(n){for(const e of Object.values(n)){const t=ht[e.name],i=cr[e.name];if(t&&i!=null){const s=i<t&&e.price>=t,r=i>t&&e.price<=t;if(s||r){B(`🔔 ${e.name} 알림가 ${O(t)}원 ${s?"돌파":"하향"}!`,s?"up":"down"),delete ht[e.name],localStorage.setItem("mb_alerts",JSON.stringify(ht));try{window.Notification&&Notification.permission==="granted"&&new Notification("STONK Battle",{body:`${e.name} ${O(t)}원 도달`})}catch{}}}cr[e.name]=e.price}}function mv(n){const{roomCode:e,roomData:t,uid:i,selectedStockId:s}=n,r=T("gameRoomCode");r&&(r.textContent=e),uv(t,e),gv(t,i),Dv(t,i),xv(t,i),$v(t),vv(t,i),lu(n),Lv(t);const o=Ev();o==="home"?(Vv(t),kv(t)):o==="detail"?(Sv(t,s),Ov(t,s),_v(t,i)):o==="feed"?Gv(t):o==="screener"?zv(t):o==="account"&&Kv(t,i)}function gv(n,e){var o;const t=(o=n.players)==null?void 0:o[e],i=t&&t.nickname||"나",s=T("navNick");s&&(s.textContent=i);const r=T("navAvatar");r&&(r.textContent=i.slice(0,1).toUpperCase())}function lu(n){const e=n.roomData,t=T("marketStatusChip"),i=T("msDot"),s=T("msLabel"),r=T("marketStatusPanel");if(!e||!t||!i||!s||!r)return;const o=e.market||{},a=o.lastTickAt||e.marketTick||0,c=o.lastCatchupAt||0,l=a?Math.max(0,Math.round((Date.now()-a)/6e4)):null,d=e.hostId===n.uid;let u=0,h=0,p=0,m=0;for(const w of Object.values(e.stocks||{})){const S=w.history;S&&(S.candles1m&&(u+=Object.keys(S.candles1m).length),S.candles5m&&(h+=Object.keys(S.candles5m).length),S.candles15m&&(p+=Object.keys(S.candles15m).length),S.candles1h&&(m+=Object.keys(S.candles1h).length))}const v=u+h+p+m>0,C=l!=null&&l<2;if(i.className="status-dot "+(C?"ok":l==null?"muted":"warn"),s.textContent=C?"시장 최신":l==null?"대기":`${l}분 전`,r.classList.contains("hidden"))return;const I=w=>w?`${ft(new Date(w).getHours())}:${ft(new Date(w).getMinutes())}`:"-",g=(w,S,b)=>`<div class="ms-row"><span>${w}</span><b class="${b||""}">${S}</b></div>`;r.innerHTML=g("방 코드",W(n.roomCode||"-"))+g("연결","연결됨","up")+g("권한",d?"보정 주체 (방장)":"읽기 전용",d?"":"muted")+g("마지막 tick",I(a))+g("마지막 보정",c?I(c):"없음")+g("시장",C?"최신 상태":l==null?"tick 기록 없음":`${l}분 전 데이터 · ${d?"재접속 시 자동 보정":"방장/관리자가 보정"}`,C?"up":"down")+g("캔들",v?`1m ${u} · 5m ${h} · 15m ${p} · 1h ${m}`:"아직 없음")}function _v(n,e){const t=T("orderList");if(!t)return;const i=G_(n,e);if(!i.length){t.innerHTML="";return}t.innerHTML=i.map(s=>{const r=s.side==="buy"?"up":"down",o=s.tif==="day"?" · 당일":s.tif==="ioc"?" · IOC":"",a=s.label||(s.side==="buy"?"매수":"매도");return`<li class="order-item">
        <span class="order-badge ${r}">${W(a)}</span>
        <span class="order-name">${W(s.stockName)}</span>
        <span class="order-detail">${O(s.target)}원 · ${O(s.qty)}주${o}</span>
        <button class="order-cancel" data-cancel="${s.id}" title="취소">✕</button>
      </li>`}).join("")}let Oi=0;function vv(n,e){var r;const t=T("ipoPanel");if(!t)return;const i=n.ipo;if(!i||i.status!=="subscribing"){t.classList.add("hidden"),Oi=0;return}Oi=i.endsAt,t.classList.remove("hidden"),T("ipoName").textContent=i.name,T("ipoPrice").textContent=O(i.offerPrice)+"원",T("ipoShares").textContent=O(i.totalShares)+"주",T("ipoRatio").textContent=W_(i).toFixed(1)+" : 1";const s=((r=i.applies)==null?void 0:r[e])||0;T("ipoMyApply").textContent=s?`내 청약 ${O(s)}주 (증거금 ${bt(s*i.offerPrice)}원)`:"아직 청약하지 않았어요",uu()}function uu(n){const e=T("ipoCountdown");if(!e||!Oi)return;const t=Math.max(0,Math.ceil((Oi-Date.now())/1e3));e.textContent=t+"초",e.classList.toggle("urgent",t<=5)}function kt(n){return n>0?"up":n<0?"down":"flat"}function cs(n){return n>0?"▲":n<0?"▼":"−"}let Di="";function As(n){Di=(n||"").trim().toLowerCase()}let du="all",hu="value",lr="rising",ni="asset";function yv(n){du=n||"all"}function Oa(n){hu=n||"value"}function wv(n){lr=n||"rising"}function bv(n){ni=n||"asset"}function Ev(){var n;return((n=document.getElementById("screen-game"))==null?void 0:n.dataset.tab)||"home"}function Iv(n,e){return Di?[e.name,n,e.ticker,e.sector,e.type,e.role,rs(e.type),eu(e.role),String(n).startsWith("ipo")?"신규상장 new":""].join(" ").toLowerCase().includes(Di):!0}function Cv(n){let e=0;const t=String(n);for(let i=0;i<t.length;i++)e=e*31+t.charCodeAt(i)>>>0;return 5e6+e%60*8e6}function fu(n){let e=0;const t=String(n||"");for(let i=0;i<t.length;i++)e=e*31+t.charCodeAt(i)>>>0;return`hsl(${e%360} 60% 47%)`}function pu(n,e){const t={value:(i,s)=>(s[1].value||0)-(i[1].value||0),volume:(i,s)=>(s[1].volume||0)-(i[1].volume||0),up:(i,s)=>(s[1].changeRate||0)-(i[1].changeRate||0),down:(i,s)=>(i[1].changeRate||0)-(s[1].changeRate||0)};return n.sort(t[e]||t.value)}function mu(n,e,t){const i=t.changeRate>0?"+":"",s=kt(t.changeRate),r=At.has(t.name),o=t.price*Cv(e),a=t.sector||rs(t.type)||"종목";return`<li class="rank-item" data-id="${e}">
    <span class="rk-rank"><button class="star-btn ${r?"on":""}" data-star="${W(t.name)}" title="관심">${r?"★":"☆"}</button>${n}</span>
    <span class="rk-name"><span class="stk-ico" style="background:${fu(t.name)}">${W((t.name||"?").slice(0,1))}</span><span class="stk-meta"><span class="stk-nm">${W(t.name)} ${ou(e,t)}</span><span class="stk-sub">${W(a)}</span></span></span>
    <span class="rk-price ${s}">${O(t.price)}</span>
    <span class="rk-rate ${s}">${cs(t.changeRate)} ${i}${(t.changeRate??0).toFixed(2)}%</span>
    <span class="rk-value">${bt(t.value)}</span>
    <span class="rk-cap">${bt(o)}</span>
    <span class="rk-sector"><span class="sec-pill">${W(t.sector||"-")}</span></span>
  </li>`}function kv(n){const e=T("stockList");if(!e)return;const t=e.scrollTop,i=n.stocks||{};let s=Object.entries(i).filter(([r,o])=>Iv(r,o));if(du==="watch"&&(s=s.filter(([,r])=>At.has(r.name))),s=pu(s,hu),!s.length){e.innerHTML=`<li class="stock-empty">${Di?"검색 결과 없음":"종목이 없습니다"}</li>`;return}e.innerHTML=s.map(([r,o],a)=>mu(a+1,r,o)).join(""),e.scrollTop=t}function Sv(n,e){const i=(n.stocks||{})[e];if(!i){T("chartStockName").textContent="-",T("selStockPrice").textContent="-",T("selStockChange").textContent="";return}const s=i.basePrice||i.price,r=i.price-s,o=kt(i.changeRate),a=i.changeRate>0?"+":"";T("chartStockName").textContent=i.name;const c=T("detailTag");if(c){const h=rs(i.type),p=eu(i.role);let m,v="virtual-tag";h?(m=h,v+=i.type==="inverse"?" tag-inv":i.type==="leverage"?" tag-lev":" tag-etf"):String(e).startsWith("ipo")?(m="신규상장",v+=" tag-new"):i.sector?(m=p?`${i.sector}·${p}`:i.sector,i.role==="leader"&&(v+=" tag-leader")):m="가상",c.textContent=m,c.className=v}const l=T("selStockPrice"),d=xi[e];if(l.textContent=O(i.price),l.className="big-price "+o,d!=null&&i.price!==d){const h=i.price>d?"flash-up":"flash-down";l.classList.remove("flash-up","flash-down"),l.offsetWidth,l.classList.add(h)}xi[e]=i.price,T("selStockChange").className="change "+o,T("selStockChange").textContent=`${cs(i.changeRate)} ${a}${O(r)} (${a}${(i.changeRate??0).toFixed(2)}%)`,Ps("ohlcOpen",i.open,s),Ps("ohlcHigh",i.high,s),Ps("ohlcLow",i.low,s),T("ohlcUpper").textContent=O(os(s)),T("ohlcLower").textContent=O(as(s)),T("ohlcVol").textContent=sv(i.volume),T("ohlcValue").textContent=bt(i.value)+"원";const u=T("selStockNews");u.textContent=i.news?`📰 ${i.news}`:"",u.className="news-line"+(i.news?" "+o:" muted"),_u(n,e,s,i)}const xi={};function Ps(n,e,t){const i=T(n);i.textContent=O(e),i.className="ohlc-v "+kt((e||0)-t)}function ut(n){return getComputedStyle(document.body).getPropertyValue(n).trim()||"#000"}const ur={tick:{win:30*6e4,tiers:["candles1m","candles5m"],count:16},"1d":{win:864e5,tiers:["candles5m","candles1m"],count:288},"3d":{win:2592e5,tiers:["candles1h","candles15m","candles5m"],count:216},"1w":{win:6048e5,tiers:["candles1h","candles15m"],count:224},"1m":{win:2592e6,tiers:["candles1h","candles15m","candles5m","candles1m"],count:360},all:{win:1/0,tiers:["candles1h","candles15m","candles5m","candles1m"],count:500}},Tv={tick:"1틱","1d":"1일","3d":"3일","1w":"1주","1m":"1달",all:"전체"};function Da(n){if(n<=0)return"0분";const e=Math.round(n/6e4);if(e<60)return e+"분";const t=Math.floor(e/60),i=e%60;if(t<24)return i?`${t}시간 ${i}분`:`${t}시간`;const s=Math.floor(t/24),r=t%24;return r?`${s}일 ${r}시간`:`${s}일`}function Rv(n,e){const t=Tv[n]||n;if(!e||!e.length)return t+" · 데이터 없음";if(n==="tick")return"1틱 · 최근 흐름";const i=e[0].t,s=e[e.length-1].t;if(!(i>1e11)||!(s>1e11))return t+" · 최근 흐름";const r=s-i,o=(ur[n]||{}).win;return o&&o!==1/0&&r<o*.9?`${t} · 아직 ${Da(r)} 데이터만 있음`:`${t} · 누적 ${Da(r)} 데이터`}function ft(n){return(n<10?"0":"")+n}function Nv(n,e){if(!(n>1e11))return"";const t=new Date(n),i=ft(t.getHours())+":"+ft(t.getMinutes()),s=t.getMonth()+1+"/"+t.getDate();return e==="tick"||e==="1d"?i:e==="3d"||e==="1w"?s+" "+i:s}function Av(n){if(!(n>1e11))return"";const e=new Date(n);return e.getMonth()+1+"/"+ft(e.getDate())+" "+ft(e.getHours())+":"+ft(e.getMinutes())}let yn="1d",ii=-1,re=null,at=null,xa=!1,Li="";function La(n,e){if(n.length&&e.price!=null&&n[n.length-1].c!==e.price){const t=n[n.length-1],i=t.t>1e11?t.t+1e3:t.t+1;n.push({t:i,o:t.c,h:Math.max(t.c,e.price),l:Math.min(t.c,e.price),c:e.price,v:0,_live:!0})}return n}function gu(n,e,t){const i=ur[t]||ur["1d"],s=n.history||null,r=Se[e]||[],o=Date.now(),a=i.win===1/0?-1/0:o-i.win;if(t==="tick"){let l=r.slice(-12).map((d,u)=>({t:d.t||o-(12-u)*6e3,o:d.o,h:d.h,l:d.l,c:d.c,v:d.v||0}));if(l.length<2&&s){const d=Pa(s,"candles1m");d.length&&(l=d.slice(-i.count).map(u=>({...u})))}return La(l,n)}let c=[];if(s)for(const l of i.tiers){let d=Pa(s,l);if(d.length){if(d=d.filter(u=>u.t>=a),d.length>=2){c=d.map(u=>({...u}));break}!c.length&&d.length&&(c=d.map(u=>({...u})))}}return!c.length&&r.length&&(c=r.map((l,d)=>({t:l.t||o-(r.length-d)*6e3,o:l.o,h:l.h,l:l.l,c:l.c,v:l.v||0})).filter(l=>l.t>=a)),c=La(c,n),c.length>i.count&&(c=c.slice(c.length-i.count)),c}function _u(n,e,t,i){at={room:n,id:e,base:t};const s=gu(i,e,yn),r=s.length?s[s.length-1]:null,o=`${e}|${yn}|${s.length}|${r?r.c+":"+r.v:""}|${t}`;if(o===Li){$a();return}Li=o,ii=-1,vu(),dr(T("priceChart"),s,t,-1);const a=T("chartRangeNote");a&&(a.textContent=Rv(yn,s)),$a()}function $a(){if(xa)return;xa=!0;const n=T("chartPeriods");n&&n.addEventListener("click",t=>{var s;const i=t.target.closest(".cp-btn");if(i&&(yn=i.dataset.period,n.querySelectorAll(".cp-btn").forEach(r=>r.classList.toggle("is-active",r===i)),at)){const r=(s=at.room.stocks)==null?void 0:s[at.id];r&&_u(at.room,at.id,at.base,r)}});const e=T("priceChart");if(e){const t=s=>{if(!re)return;const r=e.getBoundingClientRect(),o=(s.touches?s.touches[0].clientX:s.clientX)-r.left,a=Math.max(0,Math.min(re.candles.length-1,Math.floor(o/re.cw)));a!==ii&&(ii=a,dr(e,re.candles,re.base,a),Pv(a))},i=()=>{ii=-1,re&&dr(e,re.candles,re.base,-1),vu()};e.addEventListener("mousemove",t),e.addEventListener("mouseleave",i),e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchmove",t,{passive:!0}),e.addEventListener("touchend",i)}}function Pv(n){const e=T("chartTip");if(!e||!re)return;const t=re.candles[n];if(!t)return;const i=t.o?(t.c-t.o)/t.o*100:0,s=i>0?"up":i<0?"down":"flat",r=Av(t.t)||`구간 ${n+1}`;e.innerHTML=`
    <div class="tip-when">${W(r)}</div>
    <div class="tip-row"><span>시작</span><b>${O(t.o)}</b></div>
    <div class="tip-row"><span>마지막</span><b>${O(t.c)}</b></div>
    <div class="tip-row"><span>최고</span><b class="up">${O(t.h)}</b></div>
    <div class="tip-row"><span>최저</span><b class="down">${O(t.l)}</b></div>
    <div class="tip-row"><span>거래량</span><b>${O(t.v)}</b></div>
    <div class="tip-row"><span>등락률</span><b class="${s}">${i>=0?"+":""}${i.toFixed(2)}%</b></div>`,e.classList.remove("hidden");const o=n*re.cw+re.cw/2,a=o>re.plotW*.6?"left":"right";e.style.left=a==="right"?`${o+10}px`:"",e.style.right=a==="left"?`${re.cssW-o+10}px`:"",e.style.top="8px"}function vu(){const n=T("chartTip");n&&n.classList.add("hidden")}function dr(n,e,t,i){if(!n)return;const s=window.devicePixelRatio||1,r=n.clientWidth||600,o=n.clientHeight||260;n.width=Math.round(r*s),n.height=Math.round(o*s);const a=n.getContext("2d");if(a.setTransform(s,0,0,s,0,0),a.clearRect(0,0,r,o),!e.length){re=null;return}const c=56,l=r-c,d=o*.18,u=o*.06,h=o-d-u;let p=-1/0,m=1/0,v=0;for(const N of e)p=Math.max(p,N.h),m=Math.min(m,N.l),v=Math.max(v,N.v||0);p===m&&(p+=1,m-=1);const C=(p-m)*.14;p+=C,m-=C;const I=ut("--up"),g=ut("--down"),w="rgba(255,255,255,0.07)",S=ut("--muted"),b=N=>h*(1-(N-m)/(p-m)),k=Math.max(e.length,14),P=l/k,_=Math.max(2.5,Math.min(14,P*.64));re={cw:P,plotW:l,priceH:h,volH:d,cssW:r,cssH:o,candles:e,base:t,lo:m,hi:p},a.font="11px Pretendard, sans-serif",a.textBaseline="middle";const y=4;for(let N=0;N<=y;N++){const X=h/y*N,D=p-(p-m)/y*N;a.strokeStyle=w,a.lineWidth=1,a.beginPath(),a.moveTo(0,Math.round(X)+.5),a.lineTo(l,Math.round(X)+.5),a.stroke(),a.fillStyle=S,a.textAlign="left",a.fillText(O(D),l+6,Math.min(h-6,Math.max(8,X)))}if(i>=0&&i<e.length){const N=i*P+P/2;a.strokeStyle="rgba(120,140,180,0.55)",a.lineWidth=1,a.setLineDash([3,3]),a.beginPath(),a.moveTo(Math.round(N)+.5,0),a.lineTo(Math.round(N)+.5,o),a.stroke(),a.setLineDash([])}e.forEach((N,X)=>{const D=X*P+P/2,se=N.c>=N.o?I:g;a.strokeStyle=se,a.fillStyle=se,a.lineWidth=1,a.beginPath(),a.moveTo(Math.round(D)+.5,b(N.h)),a.lineTo(Math.round(D)+.5,b(N.l)),a.stroke();const Fe=b(N.o),nn=b(N.c),ds=Math.min(Fe,nn),Gn=Math.max(1.5,Math.abs(nn-Fe));if(a.fillRect(D-_/2,ds,_,Gn),v>0){const vo=(d-4)*((N.v||0)/v);a.globalAlpha=.4,a.fillRect(D-_/2,o-vo,_,vo),a.globalAlpha=1}});const R=e[e.length-1].c;if(R<=p&&R>=m){const N=b(R),D=R>=(t||R)?I:g;a.strokeStyle=D,a.lineWidth=1,a.setLineDash([4,3]),a.beginPath(),a.moveTo(0,Math.round(N)+.5),a.lineTo(l,Math.round(N)+.5),a.stroke(),a.setLineDash([]);const J=O(R);a.font="bold 11px Pretendard, sans-serif";const se=a.measureText(J).width,Fe=Math.min(h-9,Math.max(9,N));a.fillStyle=D,a.beginPath();const nn=l+2,ds=Math.min(c-4,se+10),Gn=17;Mv(a,nn,Fe-Gn/2,ds,Gn,4),a.fill(),a.fillStyle="#fff",a.textAlign="left",a.fillText(J,nn+5,Fe)}if(e.length>=2){a.font="10px Pretendard, sans-serif",a.fillStyle=S;const N=[0,Math.floor((e.length-1)/2),e.length-1],X={};N.forEach(D=>{if(X[D])return;X[D]=1;const J=Nv(e[D].t,yn);if(!J)return;a.textAlign=D===0?"left":D===e.length-1?"right":"center";const se=D===0?2:D===e.length-1?l-2:D*P+P/2;a.fillText(J,se,o-2)})}}function Mv(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function mo(){Li="";const n=T("priceChart");if(n){const e=n.getContext("2d");e&&e.clearRect(0,0,n.width,n.height)}}function Ov(n,e){var l;const t=T("orderbook");if(!t)return;const i=(l=n.stocks)==null?void 0:l[e];if(!i){t.innerHTML="";return}const s=tu(i.price),r=i.basePrice||i.price,o=5e4,a=()=>Math.floor((Math.random()*.9+.1)*12e3),c=[];for(let d=5;d>=1;d--){const u=Fa(i.price+d*s,r);c.push(Ua(u,a(),"ask",o,r))}c.push(`<div class="ob-current ${kt(i.changeRate)}">${O(i.price)}</div>`);for(let d=1;d<=5;d++){const u=Fa(i.price-d*s,r);c.push(Ua(u,a(),"bid",o,r))}t.innerHTML=c.join("")}function Fa(n,e){return Math.max(as(e),Math.min(os(e),Math.max($e,n)))}function Ua(n,e,t,i,s){const r=kt(n-s),o=Math.min(100,e/i*100);return t==="ask"?`<div class="ob-row ask">
      <span class="ob-qty"><span class="ob-bar" style="width:${o}%"></span><b>${O(e)}</b></span>
      <span class="ob-price ${r}">${O(n)}</span>
      <span></span>
    </div>`:`<div class="ob-row bid">
    <span></span>
    <span class="ob-price ${r}">${O(n)}</span>
    <span class="ob-qty"><b>${O(e)}</b><span class="ob-bar" style="width:${o}%"></span></span>
  </div>`}function Dv(n,e){var p;const t=(p=n.players)==null?void 0:p[e],i=n.stocks||{};if(!t)return;const s=fo(t,i);T("myCash").textContent=_n(t.cash),T("myAsset").textContent=_n(s);const r=T("myAssetTop");r&&(r.textContent=bt(s)+"원");const o=t.avgCost||{},a=t.holdings||{},c=Object.entries(a).filter(([,m])=>m>0);let l=0,d=0;c.forEach(([m,v])=>{const C=i[m];if(!C)return;const I=(o[m]||C.price)*v;l+=C.price*v-I,d+=I});const u=T("myPnl");if(u)if(c.length){const m=d?l/d*100:0,v=l>0?"up":l<0?"down":"flat";u.className="asset-pnl "+v,u.textContent=`평가손익 ${l>=0?"+":""}${O(l)}원 (${m>=0?"+":""}${m.toFixed(2)}%)`}else u.className="asset-pnl muted",u.textContent="평가손익 —";const h=T("holdingsList");if(h.innerHTML="",c.length===0){const m=document.createElement("li");m.className="muted",m.textContent="보유 종목이 없습니다",h.appendChild(m);return}for(const[m,v]of c){const C=i[m];if(!C)continue;const I=o[m]||0,g=I?(C.price-I)*v:0,w=I?(C.price-I)/I*100:0,S=g>0?"up":g<0?"down":"flat",b=document.createElement("li");b.className="holding-item",b.innerHTML=`
      <div class="hold-row1"><span class="hold-name">${W(C.name)}</span><b>${O(v)}주</b></div>
      <div class="hold-row2 muted">평단 ${I?O(I):"-"} · 평가 ${bt(C.price*v)}원</div>
      <div class="hold-row2 ${S}">${g>=0?"+":""}${O(g)}원 (${w>=0?"+":""}${w.toFixed(2)}%)</div>`,h.appendChild(b)}}let Ba=null;function B(n,e=""){const t=T("toast");t&&(t.textContent=n,t.className="toast show"+(e?" toast-"+e:""),clearTimeout(Ba),Ba=setTimeout(()=>{t.className="toast"+(e?" toast-"+e:"")},1800))}function xv(n,e){const t=T("rankingList");t.innerHTML="",su(n.players,n.stocks).forEach(s=>{const r=document.createElement("li"),o=((s.total-Lt)/Lt*100).toFixed(2),a=s.total>=Lt?"up":"down";r.innerHTML=`<span>${W(s.nickname)}${s.uid===e?" (나)":""}</span> <b>${bt(s.total)}원</b> <span class="${a}">${o>=0?"+":""}${o}%</span>`,s.connected||r.classList.add("muted"),t.appendChild(r)})}function Lv(n){const e=T("logList");e.innerHTML="";const i=[...Object.values(n.logs||{}),...vn].sort((s,r)=>r.time-s.time).slice(0,40);for(const s of i){const r=document.createElement("li"),o=s.type==="buy"?"매수":"매도",a=s.type==="buy"?"up":"down",c=new Date(s.time).toLocaleTimeString("ko-KR",{hour12:!1}),l=s.bot?`<b class="bot-name">${W(s.nickname)}</b>`:`<b>${W(s.nickname)}</b>`;r.innerHTML=`<span class="muted">${c}</span> ${l} <span class="${a}">${o}</span> ${W(s.stockName)} ${O(s.qty)}주 @ ${O(s.price)}`,e.appendChild(r)}}function $v(n){const e=T("newsBar"),t=n.latestNews;if(!t||Date.now()-t.time>12e3){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent=`📢 ${t.text}`}function Fv(n){const e=[T("tickBar"),T("tickBarHome")],t=[T("tickCountdown"),T("tickCountdownHome")],i=n&&(n.marketTick||n.market&&n.market.lastTickAt)||0;if(!i){e.forEach(l=>{l&&(l.style.width="0%")}),t.forEach(l=>{l&&(l.textContent="")});return}const s=Date.now()-i,o=(Math.max(0,Math.min(1,s/or))*100).toFixed(1)+"%";e.forEach(l=>{l&&(l.style.width=o)});const a=Math.max(0,Math.ceil((or-s)/1e3)),c=a>0?a+"s":"곧";t.forEach(l=>{l&&(l.textContent=c)})}function Uv(n){const e=Math.max(0,Math.floor(n/1e3)),t=String(Math.floor(e/60)).padStart(2,"0"),i=String(e%60).padStart(2,"0");T("gameTimer").textContent=`${t}:${i}`}function W(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let $i={};const Bv=60;function yu(n){let e=0,t=0;const i={};for(const o of Object.values(n||{})){const a=(o.value||0)+1;e+=a,t+=a*(o.changeRate||0);const c=o.sector||"기타",l=i[c]||(i[c]={w:0,r:0});l.w+=a,l.r+=a*(o.changeRate||0)}const s=e?t/e:0,r=Object.entries(i).map(([o,a])=>({name:o,rate:a.w?a.r/a.w:0,w:a.w})).sort((o,a)=>a.w-o.w);return{comp:s,sectors:r}}function Ha(n,e){const t=$i[n]||($i[n]=[]);t.push(e),t.length>Bv&&t.shift()}function Hv(n){const{comp:e,sectors:t}=yu(n);Ha("__comp__",1e3*(1+e/100)),t.forEach(i=>Ha("sec:"+i.name,1e3*(1+i.rate/100)))}function Wv(n,e){if(!n||n.length<2)return"";const t=140,i=28,s=Math.min(...n),r=Math.max(...n),o=r-s||1,a=n.map((l,d)=>`${(d/(n.length-1)*t).toFixed(1)},${(i-(l-s)/o*i).toFixed(1)}`).join(" "),c=e>=0?"var(--up)":"var(--down)";return`<svg viewBox="0 0 ${t} ${i}" preserveAspectRatio="none"><polyline points="${a}" fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function Wa(n,e,t,i){const s=kt(t),r=t>0?"+":"";return`<div class="index-card"><span class="ix-name">${W(n)}</span><span class="ix-val">${e.toFixed(2)}</span><span class="ix-rate ${s}">${cs(t)} ${r}${t.toFixed(2)}%</span><div class="ix-spark">${Wv(i,t)}</div></div>`}function Vv(n){const e=T("indexStrip");if(!e)return;const{comp:t,sectors:i}=yu(n.stocks||{}),s=[Wa("STONK 종합",1e3*(1+t/100),t,$i.__comp__)];i.slice(0,6).forEach(r=>s.push(Wa(r.name,1e3*(1+r.rate/100),r.rate,$i["sec:"+r.name]))),e.innerHTML=s.join("")}function jv(n){const e=new Date(n.when).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"});return`<div class="feed-card"><div class="feed-card-head"><span class="feed-ava">${W((n.who||"S").slice(0,1))}</span><div><div class="feed-who">${W(n.who)}</div><div class="feed-when">${e}</div></div></div>${n.title?`<div class="feed-title">${W(n.title)}</div>`:""}<div class="feed-body">${W(n.body)}</div></div>`}function Gv(n,e){const t=T("feedView");if(!t)return;const i=[],s=n.latestNews;s&&(s.text||s.title)&&i.push({who:"STONK 뉴스",when:s.time||Date.now(),title:s.title||"📢 시장 속보",body:s.text||s.body||""}),Object.values(n.botFeed||{}).slice(-10).reverse().forEach(c=>i.push({who:c.nickname||"트레이더",when:c.time||Date.now(),title:"",body:`${c.type==="buy"?"매수":"매도"} · ${c.stockName||"종목"} ${O(c.qty||0)}주 @ ${O(c.price||0)}`}));const r=su(n.players,n.stocks).slice(0,5),o=[...new Set(Object.values(n.stocks||{}).map(c=>c.sector).filter(Boolean))].slice(0,8),a=r.map((c,l)=>{const d=(c.total-Lt)/Lt*100;return`<li><span class="fr-no">${l+1}</span><span class="fr-name">${W(c.nickname)}</span><span class="fr-val ${d>=0?"up":"down"}">${d>=0?"+":""}${d.toFixed(1)}%</span></li>`}).join("");t.innerHTML=`
    <aside class="feed-side"><button class="is-active">전체</button><button>팔로잉</button><button>뉴스</button></aside>
    <div class="feed-main">
      ${i.length?i.map(jv).join(""):'<div class="feed-card"><div class="feed-body muted">아직 소식이 없습니다. 거래가 시작되면 시장 속보와 체결 소식이 올라옵니다.</div></div>'}
      <a class="feed-card" id="feedBoardLink" target="_blank" rel="noopener" style="text-decoration:none;color:var(--brand);font-weight:700">전체 소식 보기 → STONK Board ↗</a>
    </div>
    <aside class="feed-aside">
      <div class="feed-rank-card"><h4 class="rail-h">주간 프로필 랭킹</h4><ol class="feed-rank-list">${a||'<li class="muted">참가자 없음</li>'}</ol></div>
      <div class="feed-rank-card"><h4 class="rail-h">주제별 커뮤니티</h4><div class="feed-comm">${o.map(c=>`<span>＃ ${W(c)}</span>`).join("")||'<span class="muted">-</span>'}</div></div>
    </aside>`}const Ms=[{key:"rising",label:"연속 상승세",badge:"인기",fn:(n,e)=>(e.changeRate||0)>0,sort:"up"},{key:"value",label:"거래대금 상위",fn:()=>!0,sort:"value"},{key:"surge",label:"급등주",fn:(n,e)=>(e.changeRate||0)>=5,sort:"up"},{key:"plunge",label:"급락주",fn:(n,e)=>(e.changeRate||0)<=-5,sort:"down"},{key:"cheap",label:"저가주",fn:(n,e)=>(e.price||0)<2e3,sort:"value"},{key:"pricey",label:"고가주",fn:(n,e)=>(e.price||0)>=1e5,sort:"value"},{key:"lev",label:"레버리지·인버스",fn:(n,e)=>e.type==="leverage"||e.type==="inverse",sort:"value"},{key:"etf",label:"ETF·리츠",fn:(n,e)=>e.type==="etf"||e.type==="reit",sort:"value"},{key:"leader",label:"대장주",fn:(n,e)=>e.role==="leader",sort:"value"}];function zv(n){const e=T("screenerPresets"),t=T("screenerHead"),i=T("screenerList");if(!e||!i)return;e.innerHTML='<div class="sa-title">주식 골라보기 목록</div>'+Ms.map(o=>`<button data-preset="${o.key}" class="${o.key===lr?"is-active":""}">${W(o.label)}${o.badge?` <span class="sa-badge">${o.badge}</span>`:""}</button>`).join("");const s=Ms.find(o=>o.key===lr)||Ms[0];t&&(t.innerHTML=`<h2>${W(s.label)}</h2><p>조건에 맞는 종목을 모았습니다 · 모두 가상 데이터</p>`);let r=Object.entries(n.stocks||{}).filter(([o,a])=>s.fn(o,a));r=pu(r,s.sort),i.innerHTML=r.length?r.map(([o,a],c)=>mu(c+1,o,a)).join(""):'<li class="stock-empty">조건에 맞는 종목이 없습니다</li>'}function Kv(n,e){var g,w;const t=T("accountView");if(!t)return;const i=(g=n.players)==null?void 0:g[e];if(!i){t.innerHTML='<div class="acct-main"><div class="acct-section muted">계좌 정보를 불러오는 중…</div></div>';return}const s=n.stocks||{},r=fo(i,s),o=i.avgCost||{},a=Object.entries(i.holdings||{}).filter(([,S])=>S>0);let c=0,l=0,d=0;a.forEach(([S,b])=>{const k=s[S];if(!k)return;const P=(o[S]||k.price)*b;c+=k.price*b,l+=k.price*b-P,d+=P});const u=d?l/d*100:0,h=l>0?"up":l<0?"down":"flat",p=((w=T("gameRoomCode"))==null?void 0:w.textContent)||"-",m=Object.values(n.logs||{}).filter(S=>S.uid===e).sort((S,b)=>b.time-S.time).slice(0,20),v=Object.values(n.orders||{}).filter(S=>S.uid===e),C=["asset","tx","orders"].map(S=>{const b={asset:"자산",tx:"거래내역",orders:"주문내역"}[S];return`<button data-acct="${S}" class="${S===ni?"is-active":""}">${b}</button>`}).join("");let I="";if(ni==="asset"){const S=a.length?a.map(([b,k])=>{const P=s[b];if(!P)return"";const _=o[b]||0,y=_?(P.price-_)*k:0,R=_?(P.price-_)/_*100:0,N=y>0?"up":y<0?"down":"flat";return`<div class="acct-row"><div><div class="ar-name">${W(P.name)}</div><div class="ar-sub">${O(k)}주 · 평단 ${_?O(_):"-"}</div></div><div class="ar-val ${N}">${O(P.price*k)}원<br><small>${y>=0?"+":""}${R.toFixed(2)}%</small></div></div>`}).join(""):'<div class="acct-row muted">보유 종목이 없습니다</div>';I=`
      <div class="acct-hero">
        <div class="ah-no">기본계좌 · ${W(p)}</div>
        <div class="ah-asset">${_n(r)}</div>
        <div class="ah-pnl ${h}">평가손익 ${l>=0?"+":""}${O(l)}원 (${u>=0?"+":""}${u.toFixed(2)}%)</div>
        <div class="acct-actions"><button class="btn small" disabled>채우기</button><button class="btn small" disabled>보내기</button><button class="btn small" disabled>환전</button></div>
      </div>
      <div class="acct-grid">
        <div class="acct-stat"><div class="as-k">주문가능 현금</div><div class="as-v">${_n(i.cash)}</div></div>
        <div class="acct-stat"><div class="as-k">총 투자금액(평가)</div><div class="as-v">${_n(c)}</div></div>
        <div class="acct-stat"><div class="as-k">평가손익</div><div class="as-v ${h}">${l>=0?"+":""}${O(l)}</div></div>
      </div>
      <div class="acct-section"><h3>보유 종목</h3>${S}</div>`}else ni==="tx"?I=`<div class="acct-section"><h3>거래내역</h3>${m.length?m.map(b=>{const k=b.type==="buy"?"up":"down",P=new Date(b.time).toLocaleString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});return`<div class="acct-row"><div><div class="ar-name">${W(b.stockName)}</div><div class="ar-sub">${P}</div></div><div class="ar-val ${k}">${b.type==="buy"?"매수":"매도"} ${O(b.qty)}주<br><small>@ ${O(b.price)}</small></div></div>`}).join(""):'<div class="acct-row muted">거래내역이 없습니다</div>'}</div>`:I=`<div class="acct-section"><h3>주문내역(미체결)</h3>${v.length?v.map(b=>{const k=b.side==="buy"?"up":"down";return`<div class="acct-row"><div><div class="ar-name">${W(b.stockName||b.stockId||"")}</div><div class="ar-sub">${b.kind||"지정가"} · ${b.tif||""}</div></div><div class="ar-val ${k}">${b.side==="buy"?"매수":"매도"} ${O(b.qty)}주<br><small>${b.price?"@ "+O(b.price):""}</small></div></div>`}).join(""):'<div class="acct-row muted">미체결 주문이 없습니다</div>'}</div>`;t.innerHTML=`<aside class="acct-side">${C}</aside><div class="acct-main">${I}</div>`}function go(){const n=T("stockHover");n&&n.classList.add("hidden")}function qv(n,e){const t=T("stockHover");if(!t)return;const i=n&&n.stocks&&n.stocks[e];if(!i){t.classList.add("hidden");return}const s=kt(i.changeRate),r=i.changeRate>0?"+":"",o=(i.changeRate||0)>=0?"왜 올랐을까?":"왜 내렸을까?",a=i.news?W(i.news):"아직 특별한 소식은 없어요. 거래대금과 수급에 따라 움직이고 있어요.";t.innerHTML=`
    <div class="sh-head">
      <span class="sh-ico" style="background:${fu(i.name)}">${W((i.name||"?").slice(0,1))}</span>
      <div class="sh-meta">
        <b class="sh-name">${W(i.name)} ${ou(e,i)}</b>
        <span class="sh-price"><b>${O(i.price)}원</b> <span class="${s}">${cs(i.changeRate)} ${r}${(i.changeRate??0).toFixed(2)}%</span></span>
      </div>
    </div>
    <div class="sh-chartwrap"><span class="sh-tf">일봉</span><canvas class="sh-chart"></canvas></div>
    <div class="sh-news"><b class="sh-why">${o}</b><p>${a}</p></div>`,t.classList.remove("hidden");const c=t.querySelector(".sh-chart");i.basePrice||i.previousPrice||i.price,Yv(c,gu(i,e,"1d"))}function Yv(n,e,t){if(!n)return;const i=window.devicePixelRatio||1,s=n.clientWidth||272,r=n.clientHeight||118;n.width=Math.round(s*i),n.height=Math.round(r*i);const o=n.getContext("2d");if(o.setTransform(i,0,0,i,0,0),o.clearRect(0,0,s,r),!e||e.length<2){o.fillStyle=ut("--muted"),o.font="12px Pretendard, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText("데이터 수집 중…",s/2,r/2);return}const a=r*.72,c=r-a-4;let l=-1/0,d=1/0,u=0;for(const w of e)l=Math.max(l,w.h),d=Math.min(d,w.l),u=Math.max(u,w.v||0);l===d&&(l+=1,d-=1);const h=(l-d)*.12;l+=h,d-=h;const p=w=>a*(1-(w-d)/(l-d));o.strokeStyle=ut("--chart-grid"),o.lineWidth=1;for(let w=1;w<=2;w++){const S=a/3*w;o.beginPath(),o.moveTo(0,Math.round(S)+.5),o.lineTo(s,Math.round(S)+.5),o.stroke()}const m=ut("--up"),v=ut("--down"),C=e.length,I=s/C,g=Math.max(1.5,Math.min(7,I*.62));e.forEach((w,S)=>{const b=S*I+I/2,k=w.c>=w.o?m:v;o.strokeStyle=k,o.fillStyle=k,o.lineWidth=1,o.beginPath(),o.moveTo(Math.round(b)+.5,p(w.h)),o.lineTo(Math.round(b)+.5,p(w.l)),o.stroke();const P=p(w.o),_=p(w.c),y=Math.min(P,_),R=Math.max(1,Math.abs(_-P));if(o.fillRect(b-g/2,y,g,R),u>0){const N=(c-2)*((w.v||0)/u);o.globalAlpha=.35,o.fillRect(b-g/2,r-N,g,N),o.globalAlpha=1}})}const wu={home:"https://tom981105-web.github.io/STONK-Home/",battle:"https://tom981105-web.github.io/STONK-Battle/",board:"https://tom981105-web.github.io/STONK-Board/",wiki:"https://tom981105-web.github.io/STONK-Wiki/",arcade:"https://tom981105-web.github.io/STONK-Arcade/",gacha:"https://tom981105-web.github.io/STONK-Gacha/",admin:"https://tom981105-web.github.io/STONK-Admin/market-admin.html"},Va={home:"../STONK-Home/index.html",battle:"../Market-battle/index.html",board:"../Market-Board/index.html",wiki:"../Market-Wiki/index.html",arcade:"../STONK-Arcade/index.html",gacha:"../STONK-Gacha/index.html",admin:"../Market-Admin/market-admin.html"},_o="stonk:lastRoomCode",Qv=["mb-board-room","wiki-room"];function bu(){return location.protocol==="file:"||/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)}function Jv(){return{urls:{...wu},local:bu()}}function zt(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function Eu(){try{const n=new URLSearchParams(location.search);return zt(n.get("room")||n.get("roomCode")||n.get("roomId")||"")}catch{return""}}function Iu(n){const e=zt(n);if(e)try{localStorage.setItem(_o,e)}catch{}}function Cu(){try{const n=zt(localStorage.getItem(_o));if(n)return n;for(const e of Qv){const t=zt(localStorage.getItem(e));if(t)return t}}catch{}return""}function Xv(){return Eu()||Cu()||"MAIN"}function Zv(n){const e=wu[n];return bu()&&/github\.io/.test(e||"")?Va[n]:e||Va[n]}function st(n,e){const t=Zv(n),i=[],s=zt(e&&e.room);s&&i.push("room="+encodeURIComponent(s));const r=e&&(e.company||e.companyId);return r&&i.push("company="+encodeURIComponent(r)),i.length?t+(t.indexOf("?")>=0?"&":"?")+i.join("&"):t}function ku(n){return st("home",{room:n})}function ey(n){return st("battle",{room:n})}function Su(n){return st("board",{room:n})}function Tu(n,e){return st("wiki",{room:n,company:e})}function ty(n){return st("arcade",{room:n})}function ny(n){return st("gacha",{room:n})}function Ru(n){return st("admin",{room:n})}const iy={VERSION:"1.4.1",getSiteConfig:Jv,normalizeRoomCode:zt,getUrlRoomCode:Eu,getCurrentRoomCode:Xv,setLastRoomCode:Iu,getLastRoomCode:Cu,buildSiteUrl:st,buildHomeUrl:ku,buildBattleUrl:ey,buildBoardUrl:Su,buildWikiUrl:Tu,buildArcadeUrl:ty,buildGachaUrl:ny,buildAdminUrl:Ru,LAST_ROOM_KEY:_o};typeof window<"u"&&(window.SiteConfig=iy);const sy="../STONK-Home/index.html",Os=2600;function ry(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function oy(){return/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||location.protocol==="file:"}function ay(n){const e=ry(n);return sy+(e?`?room=${encodeURIComponent(e)}`:"")}function cy({title:n="STONK Home에서 입장해 주세요",message:e="",roomCode:t="",auto:i=!0}={}){var c;const s=ay(t),r=document.getElementById("stonk-home-gate");r&&r.remove();const o=document.createElement("div");o.id="stonk-home-gate",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),Object.assign(o.style,{position:"fixed",inset:"0",zIndex:"99999",display:"grid",placeItems:"center",padding:"24px",background:"radial-gradient(120% 90% at 50% -10%, rgba(139,108,255,0.22), transparent 60%), rgba(5,6,10,0.94)",backdropFilter:"blur(8px)",color:"#f4f7ff",fontFamily:"Pretendard, Inter, 'Noto Sans KR', system-ui, sans-serif"});const a=i&&!oy();if(o.innerHTML=`
    <div style="width:min(460px,100%);text-align:center;padding:32px 26px;border:1px solid rgba(255,255,255,0.14);border-radius:18px;background:rgba(14,16,24,0.92);box-shadow:0 24px 70px rgba(0,0,0,0.5),0 0 60px rgba(139,108,255,0.16)">
      <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#8b6cff;margin-bottom:8px">STONK UNIVERSE</div>
      <h2 style="margin:0 0 10px;font-size:1.5rem">${n}</h2>
      <p style="margin:0 0 18px;color:#aab2c8;font-size:0.95rem;line-height:1.5">${e||"로그인 · 방 선택 · 닉네임 설정은 STONK Home에서 진행합니다."}</p>
      <a data-home-go href="${s}" style="display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 26px;border-radius:14px;font-weight:900;text-decoration:none;color:#0a0a12;background:linear-gradient(135deg,#a99bff,#8b6cff);box-shadow:0 10px 30px rgba(139,108,255,0.4)">STONK Home으로 이동</a>
      ${t?`<div style="margin-top:14px;font-size:0.82rem;color:#8a93a8">방 코드 <b style="color:#41e0ff;letter-spacing:2px">${t}</b> 유지</div>`:""}
      ${a?`<div style="margin-top:12px;font-size:0.8rem;color:#8a93a8"><span data-gate-count>${Math.ceil(Os/1e3)}</span>초 후 자동 이동…</div>`:'<div style="margin-top:12px;font-size:0.78rem;color:#5f6678">개발 모드: 자동 이동 없음</div>'}
    </div>
  `,document.body.appendChild(o),(c=o.querySelector("[data-home-go]"))==null||c.addEventListener("click",l=>{l.preventDefault(),location.href=s}),a){let l=Math.ceil(Os/1e3);const d=o.querySelector("[data-gate-count]"),u=setInterval(()=>{l-=1,d&&(d.textContent=String(Math.max(0,l))),l<=0&&clearInterval(u)},1e3);setTimeout(()=>{location.href=s},Os)}return o}function ly(){var n;(n=document.getElementById("stonk-home-gate"))==null||n.remove()}const uy="https://tom981105-web.github.io/STONK-Gacha/backgrounds/";let si,be=null;function dy(){return be||(be=document.createElement("div"),be.id="equip-bg",Object.assign(be.style,{position:"fixed",inset:"0",zIndex:"-1",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",pointerEvents:"none",opacity:"0",transition:"opacity 0.35s ease",transform:"translateZ(0)",backfaceVisibility:"hidden"}),document.body.appendChild(be),be)}function ja(){if(document.body.classList.remove("has-skin"),be){be.style.opacity="0";const n=be;setTimeout(()=>{si===null&&n&&(n.style.backgroundImage="")},400)}}function hy(n,e){let t=0;const i=()=>{if(t>=n.length){e(null);return}const s=n[t++],r=new Image;r.decoding="async",r.onload=()=>e(s),r.onerror=i,r.src=s};i()}function fy(n){const e=n||null;if(e===si)return;if(si=e,!e){ja();return}const t=["webp","jpg","png"].map(i=>`${uy}${e}.${i}`);hy(t,i=>{if(si!==e)return;if(!i){ja();return}const s=dy();s.style.backgroundImage=`radial-gradient(120% 90% at 50% 12%, rgba(10,12,20,0.30) 0%, rgba(8,10,16,0.52) 55%, rgba(6,7,12,0.74) 100%), url("${i}")`,s.style.opacity="1",document.body.classList.add("has-skin")})}const py="yaV8N60yIiUggaWNpNF2VhkCwxb2",my="tomem@naver.com",ls="MAIN",f={uid:null,email:null,nickname:localStorage.getItem("mb_nickname")||localStorage.getItem("stonk:lastNickname")||"",roomCode:null,roomData:null,selectedStockId:null,tickTimer:null,isDriver:!1,tickLeaseRenewAt:0,driverWatch:null,liveState:nv(),catchupDoneFor:null,clockTimer:null,roomRef:null,lastStatus:null,histRef:null,histStockId:null,selectedHistory:null,renderQueued:!1,joinReqRef:null,joinReqId:null,isDbAdmin:!1},gy=15e3,_y=5e3,vy=4e3;function yy(){return f.uid===py||(f.email||"").toLowerCase()===my}!Xl||!uo||!L?au("src/firebase.js 에 본인의 Firebase 설정(firebaseConfig)을 붙여넣은 뒤 새로고침하세요."):wy();function wy(){let n=!1;const e=setTimeout(()=>{n||au("Firebase에 연결할 수 없습니다. 설정값과 네트워크, Database Rules를 확인하세요.")},5e3);jn(U(L,".info/connected"),t=>{t.val()===!0&&(n=!0,clearTimeout(e),document.getElementById("fbError").classList.add("hidden"))}),by()}let Yn=null;function by(){jn(U(L,`rooms/${ls}/broadcast/reloadAt`),n=>{const e=Number(n.val())||0;if(Yn===null){Yn=e;return}if(e>Yn){Yn=e;try{B==null||B("새 버전이 배포되어 새로고침합니다…","up")}catch{}setTimeout(()=>location.reload(),400)}}),ef(uo,n=>{if(n)ly(),f.uid=n.uid,f.email=n.email||null,localStorage.setItem("mb_playerId",n.uid),Ey(),Iy();else{f.uid=null,f.email=null,f.isDbAdmin=!1;const e=document.getElementById("navAdmin");e&&(e.hidden=!0),cy({message:"로그인은 STONK Home에서 진행합니다. Home에서 입장하면 자동으로 연결됩니다."})}})}async function Ey(){const n=document.getElementById("navAdmin");if(!n)return;let e=yy();if(!e&&f.uid&&L)try{e=(await co(U(L,"admins/"+f.uid))).val()===!0}catch{e=!1}f.isDbAdmin=e,n.hidden=!e}async function Iy(){if(!f.nickname){po("screen-auth");return}Au(ls)}let Ds=!1;async function Cy(n){var i;if(!f.uid)return!1;if(n.players&&n.players[f.uid])return!0;if(Ds)return!1;Ds=!0;const e=Number((i=n.settings)==null?void 0:i.initialCash)||Lt,t=Date.now();try{await wt(U(L,`rooms/${ls}/players/${f.uid}`),{nickname:f.nickname&&f.nickname.trim()||"플레이어-"+String(f.uid).slice(-4),cash:e,holdings:null,totalAsset:e,joinedAt:t,connected:!0})}catch(s){return console.warn("[join] 자동 등록 실패:",s),!1}finally{Ds=!1}return!0}function Nu(){f.joinReqId=null}function Au(n){Nu(),f.roomCode=n,localStorage.setItem("mb_roomCode",n),Iu(n),Fy(n);const e=U(L,`rooms/${n}/players/${f.uid}/connected`);tn(e,!0).catch(()=>{}),__(e).set(!1).catch(()=>{}),f.roomRef&&lo(f.roomRef),f.roomRef=U(L,`rooms/${n}`),jn(f.roomRef,t=>Py(ky(t)),t=>{console.error("[room] 구독 오류:",t)})}function ky(n){if(!n||!n.exists())return null;const e={};return n.forEach(t=>{if(t.key==="stocks"){const i={};t.forEach(s=>{const r={};s.forEach(o=>{o.key!=="history"&&(r[o.key]=o.val())}),i[s.key]=r}),e.stocks=i}else e[t.key]=t.val()}),e}function Sy(n){const e=f.selectedHistory;e&&e.id&&n&&n.stocks&&n.stocks[e.id]&&(n.stocks[e.id].history=e.data||null)}function Fi(n){n!==f.histStockId&&(f.histRef&&(lo(f.histRef),f.histRef=null),f.histStockId=n||null,f.selectedHistory=n?{id:n,data:null}:null,!(!n||!f.roomCode)&&(f.histRef=U(L,`rooms/${f.roomCode}/stocks/${n}/history`),jn(f.histRef,e=>{f.histStockId===n&&(f.selectedHistory={id:n,data:e.val()||null},f.roomData&&f.roomData.stocks&&f.roomData.stocks[n]&&(f.roomData.stocks[n].history=f.selectedHistory.data),he())},e=>console.error("[history] 구독 오류:",e))))}function he(){f.renderQueued||(f.renderQueued=!0,requestAnimationFrame(()=>{f.renderQueued=!1,f.roomData&&f.roomData.status==="playing"&&mv(f)}))}function Pu(n){const e=n==="dark"?"dark":"light";document.documentElement.dataset.theme=e;try{localStorage.setItem("stonk:theme",e)}catch{}const t=document.getElementById("themeToggle");t&&(t.textContent=e==="dark"?"☀️":"🌙")}function Ty(){let n="light";try{n=localStorage.getItem("stonk:theme")||"light"}catch{}Pu(n)}function Ry(){Pu(document.documentElement.dataset.theme==="dark"?"light":"dark")}function un(n){const e=document.getElementById("screen-game");e&&(e.dataset.tab=n,document.querySelectorAll(".tnav-tab").forEach(t=>t.classList.toggle("is-active",t.dataset.tab===n)),document.querySelectorAll(".tab-view").forEach(t=>t.classList.toggle("hidden",t.dataset.view!==n)),n==="detail"&&mo(),f.roomData&&he())}function Ny(n){n&&(go(),f.selectedStockId=n,Fi(n),Uy(n),un("detail"))}let xs=null,ri=null;function Ay(n){const e=document.getElementById("stockHover");if(!e)return;const t=e.offsetWidth||300,i=e.offsetHeight||240;let s=n.right+12;s+t>window.innerWidth-8&&(s=n.left-t-12),s<8&&(s=8);let r=n.top;r+i>window.innerHeight-8&&(r=window.innerHeight-i-8),r<8&&(r=8),e.style.left=s+"px",e.style.top=r+"px"}function Ga(n){const e=document.getElementById(n);e&&(e.addEventListener("mouseover",t=>{const i=t.target.closest(".rank-item");if(!i||!f.roomData)return;const s=i.dataset.id;s!==ri&&(clearTimeout(xs),xs=setTimeout(()=>{ri=s,qv(f.roomData,s),Ay(i.getBoundingClientRect())},90))}),e.addEventListener("mouseleave",()=>{clearTimeout(xs),ri=null,go()}))}function Py(n){if(!n){Me(),hr(),Bi(),f.roomData=null,f.lastStatus=null,za();return}if(f.roomData=n,Sy(n),fy(n.players&&f.uid&&n.players[f.uid]?n.players[f.uid].equippedBackground:null),n.status==="playing"){if(f.uid&&!(n.players&&n.players[f.uid])){Cy(n);return}if(f.lastStatus!=="playing"){po("screen-game"),cu(),$y();const e=Object.keys(n.stocks||{});!f.selectedStockId&&e.length&&(f.selectedStockId=e[0])}f.selectedStockId!==f.histStockId&&Fi(f.selectedStockId),he(),My(n),Ou(n),Ly()}else Me(),hr(),Bi(),Fi(null),mo(),za();f.lastStatus=n.status}function za(){po("screen-wait");const n=document.getElementById("waitNickname");n&&(n.textContent=f.nickname?`${f.nickname} 님`:"")}async function My(n){if(!n||n.status!=="playing"||!f.uid||f.catchupDoneFor===f.roomCode)return;if(!us(n)){f.catchupDoneFor=f.roomCode;return}const e=n.market&&n.market.lastTickAt||n.marketTick||0;if(e&&e<Oy(n)){f.catchupDoneFor=f.roomCode;try{await tn(U(L,`rooms/${f.roomCode}/market/lastTickAt`),Date.now())}catch{}return}if(!ev(n)){f.catchupDoneFor=f.roomCode;return}f.catchupDoneFor=f.roomCode;try{const t=await tv(f.roomCode,n,f.uid);t.applied&&(cu(),B(`시장 경과 보정 완료 (${Math.round(t.elapsed/6e4)}분, 캔들 ${t.candlesWritten}개)`,"up"))}catch(t){console.warn("[catchup] 보정 실패:",t)}}async function Mu(){if(!f.roomCode||!f.uid)return!1;const n=Date.now();try{return(await ye(U(L,`rooms/${f.roomCode}/market/tickLease`),t=>{if(!(t&&t.by!==f.uid&&(t.expiresAt||0)>n))return{by:f.uid,at:n,expiresAt:n+gy}})).committed}catch{return!1}}function Ui(n){const e=n&&n.market||{};let t=Number.isFinite(e.openHour)?Math.round(e.openHour):18,i=Number.isFinite(e.closeHour)?Math.round(e.closeHour):24;return t=Math.max(0,Math.min(24,t)),i=Math.max(0,Math.min(24,i)),{oh:t,ch:i}}function us(n){const{oh:e,ch:t}=Ui(n);if(e===t)return!0;const i=new Date().getHours();return t>e?i>=e&&i<t:i>=e||i<t}function Oy(n){const{oh:e,ch:t}=Ui(n),i=new Date,s=new Date(i.getFullYear(),i.getMonth(),i.getDate(),e,0,0,0).getTime();return t>=e?s:i.getHours()<t?s-864e5:s}async function Ou(n){var a,c;if(n=n||f.roomData,!n||n.status!=="playing"){Me();return}if(!us(n)){Me();return}if(!f.uid)return;const e=Date.now(),t=n.market&&n.market.tickLease,i=t&&t.by!==f.uid&&(t.expiresAt||0)>e;if(f.isDriver){i&&Me();return}const s=n.hostId===f.uid,r=n.hostId&&((c=(a=n.players)==null?void 0:a[n.hostId])==null?void 0:c.connected)!==!1;if(i||!s&&r)return;await Mu()&&Dy()}function Dy(){f.tickTimer||(f.isDriver=!0,f.tickLeaseRenewAt=Date.now(),f.tickTimer=setInterval(async()=>{const n=f.roomData;if(!n||n.status!=="playing"){Me();return}if(!us(n)){Me();return}try{if(Date.now()-f.tickLeaseRenewAt>=_y){if(!await Mu()){Me();return}f.tickLeaseRenewAt=Date.now()}await U_(f.roomCode,n),await B_(f.roomCode,n),await j_(f.roomCode,n),await iv(f.roomCode,n,f.liveState)}catch(e){console.error("[tick] 시장 틱 오류:",e)}},or))}function Me(){f.tickTimer&&(clearInterval(f.tickTimer),f.tickTimer=null),f.isDriver=!1}async function xy(){if(!f.roomCode||!f.uid)return;const n=f.roomCode;try{await ye(U(L,`rooms/${n}/market/tickLease`),e=>e&&e.by===f.uid?null:e)}catch{}}function Ly(){f.driverWatch||(f.driverWatch=setInterval(()=>{Ou(f.roomData)},vy))}function hr(){f.driverWatch&&(clearInterval(f.driverWatch),f.driverWatch=null)}function $y(){Bi(),f.clockTimer=setInterval(()=>{const n=f.roomData;if(!n||n.status!=="playing")return;const e=!us(n),t=document.getElementById("marketClosed");t&&(t.classList.toggle("hidden",!e),e&&(t.textContent=`🌙 장 마감 — 매일 ${String(Ui(n).oh).padStart(2,"0")}:00 개장 (${String(Ui(n).ch%24).padStart(2,"0")}:00 마감)`)),!e&&(Uv(Date.now()-(n.startedAt||Date.now())),uu(),Fv(n))},250)}function Bi(){f.clockTimer&&(clearInterval(f.clockTimer),f.clockTimer=null)}function Ls(){xy(),Me(),hr(),Bi(),Nu(),mo(),f.roomRef&&(lo(f.roomRef),f.roomRef=null),Fi(null),location.href=ku()}function Fy(n){const e="",t=(i,s)=>{const r=document.getElementById(i);r&&(r.href=s)};t("navBoard",Su(n)),t("navWiki",Tu(n,e)),t("navAdmin",Ru(n))}async function Ka(){if(!f.roomCode||!f.roomData){B("복사할 시장 데이터가 없습니다","err");return}const n={roomCode:f.roomCode,status:f.roomData.status,startedAt:f.roomData.startedAt||null,marketTick:f.roomData.marketTick||Date.now(),latestNews:f.roomData.latestNews||null,botFeed:f.roomData.botFeed||[],stocks:f.roomData.stocks||{},players:f.roomData.players||{},logs:f.roomData.logs||{}},e=JSON.stringify(n,null,2);try{await navigator.clipboard.writeText(e),B("STONK Board에 가져올 시장 데이터를 복사했습니다")}catch{prompt("STONK Board 관리자 화면에 붙여넣을 시장 데이터입니다:",e)}}function Mn(){return Math.max(1,Math.floor(Number(document.getElementById("qtyInput").value)||1))}async function $s(n){var a,c;const{roomCode:e,roomData:t,uid:i,nickname:s,selectedStockId:r}=f;if(!t||t.status!=="playing")return;if(!r){B("종목을 먼저 선택하세요","err");return}const o=((c=(a=t.stocks)==null?void 0:a[r])==null?void 0:c.name)||"";try{n==="buy"?(await nu(e,i,s,r,Mn(),t),B(`${o} 매수 체결!`,"up")):n==="sell"?(await ho(e,i,s,r,Mn(),t),B(`${o} 매도 체결!`,"down")):n==="sellAll"&&(await z_(e,i,s,r,t),B(`${o} 전량 매도 체결!`,"down")),ov("tradeMsg","",!1)}catch(l){B(l.message,"err")}}function Hi(n){return Math.floor(Number(document.getElementById(n).value)||0)}function Uy(n){var i,s,r;const e=(r=(s=(i=f.roomData)==null?void 0:i.stocks)==null?void 0:s[n])==null?void 0:r.price;if(!e)return;const t=(o,a)=>{const c=document.getElementById(o);c&&(c.value=a)};t("limitPrice",e),t("stopLoss",Math.round(e*.95)),t("takeProfit",Math.round(e*1.1))}async function qa(n){var l,d;const{roomCode:e,roomData:t,uid:i,nickname:s,selectedStockId:r}=f;if(!t||t.status!=="playing")return;if(!r)return B("종목을 먼저 선택하세요","err");const o=Hi("limitPrice");if(!o)return B("지정가를 입력하세요","err");const a=document.getElementById("limitTif").value,c=((d=(l=t.stocks)==null?void 0:l[r])==null?void 0:d.name)||"";try{await Pi(e,i,s,r,{side:n,trigger:n==="buy"?"below":"above",tif:a,label:"지정가"},Mn(),o,t),B(`${c} 지정가 ${n==="buy"?"매수":"매도"} 등록!`,n==="buy"?"up":"down")}catch(u){B(u.message,"err")}}async function By(){var l,d,u,h,p;const{roomCode:n,roomData:e,uid:t,nickname:i,selectedStockId:s}=f;if(!e||e.status!=="playing")return;if(!s)return B("종목을 먼저 선택하세요","err");const r=((u=(d=(l=e.players)==null?void 0:l[t])==null?void 0:d.holdings)==null?void 0:u[s])||0;if(r<1)return B("보유한 종목에만 설정할 수 있어요","err");const o=Hi("stopLoss"),a=Hi("takeProfit");if(!o&&!a)return B("손절가 또는 익절가를 입력하세요","err");const c=((p=(h=e.stocks)==null?void 0:h[s])==null?void 0:p.name)||"";try{o&&await Pi(n,t,i,s,{side:"sell",trigger:"below",tif:"gtc",label:"손절"},r,o,e),a&&await Pi(n,t,i,s,{side:"sell",trigger:"above",tif:"gtc",label:"익절"},r,a,e),B(`${c} 손절·익절 설정 완료 (보유 ${r}주)`,"down")}catch(m){B(m.message,"err")}}async function Hy(){var d,u,h,p;const{roomCode:n,roomData:e,uid:t,nickname:i,selectedStockId:s}=f;if(!e||e.status!=="playing")return;if(!s)return B("종목을 먼저 선택하세요","err");const r=Mn(),o=Math.max(2,Math.min(10,Hi("splitCount")||3)),a=((u=(d=e.stocks)==null?void 0:d[s])==null?void 0:u.price)||0;if(!a)return;const c=Math.floor(r/o);if(c<1)return B(`분할하려면 수량이 최소 ${o}주 이상이어야 해요`,"err");const l=((p=(h=e.stocks)==null?void 0:h[s])==null?void 0:p.name)||"";try{for(let m=0;m<o;m++){const v=Math.round(a*(1-m*.015));await Pi(n,t,i,s,{side:"buy",trigger:"below",tif:"gtc",label:`분할${m+1}`},c,v,e)}B(`${l} ${o}회 분할매수 등록! (회당 ${c}주)`,"up")}catch(m){B(m.message,"err")}}async function Wy(n){try{await V_(f.roomCode,n),B("예약 주문 취소됨")}catch(e){B(e.message,"err")}}async function Vy(){const{roomCode:n,roomData:e,uid:t}=f,i=e==null?void 0:e.ipo;if(!i||i.status!=="subscribing"){B("청약 가능한 공모주가 없습니다","err");return}const s=Math.max(1,Math.floor(Number(document.getElementById("ipoQty").value)||0));try{await H_(n,t,s,e),B(`${i.name} ${s.toLocaleString("ko-KR")}주 청약 완료!`,"up")}catch(r){B(r.message,"err")}}async function jy(){const n=f.nickname||"",e=prompt("사용할 닉네임을 입력하세요 (최대 10자)",n);if(e===null)return;const t=e.trim().slice(0,10);if(!t){B("닉네임을 입력하세요","err");return}f.nickname=t;try{localStorage.setItem("mb_nickname",t),localStorage.setItem("stonk:lastNickname",t)}catch{}try{f.uid&&f.roomCode&&await tn(U(L,`rooms/${f.roomCode}/players/${f.uid}/nickname`),t)}catch(i){console.warn("[nickname] 저장 실패:",i)}B(`닉네임을 '${t}'(으)로 변경했습니다`,"up")}function Gy(){var r,o,a,c,l,d,u,h,p,m,v,C,I,g,w,S,b,k,P;(r=document.querySelector(".tnav-acct"))==null||r.addEventListener("click",jy),(o=document.getElementById("btnNickname"))==null||o.addEventListener("click",()=>{const _=document.getElementById("nicknameInput").value.trim();_&&(f.nickname=_,localStorage.setItem("mb_nickname",_),Au(ls))}),(a=document.getElementById("nicknameInput"))==null||a.addEventListener("keydown",_=>{_.key==="Enter"&&document.getElementById("btnNickname").click()}),(c=document.getElementById("btnWaitHome"))==null||c.addEventListener("click",Ls),(l=document.getElementById("btnCopyCode2"))==null||l.addEventListener("click",Ka),(d=document.getElementById("btnCopyMarketBoard"))==null||d.addEventListener("click",Ka),(u=document.getElementById("btnLeaveGame"))==null||u.addEventListener("click",Ls);const n=_=>{const y=_.target.closest("[data-star]");if(y){_.stopPropagation(),dv(y.dataset.star),he();return}const R=_.target.closest(".rank-item");R&&Ny(R.dataset.id)};(h=document.getElementById("stockList"))==null||h.addEventListener("click",n),(p=document.getElementById("screenerList"))==null||p.addEventListener("click",n),Ga("stockList"),Ga("screenerList"),window.addEventListener("scroll",()=>{ri=null,go()},!0),Ty(),(m=document.getElementById("themeToggle"))==null||m.addEventListener("click",Ry),(v=document.querySelector(".tnav-brand"))==null||v.addEventListener("click",()=>un("home")),(C=document.getElementById("tnavTabs"))==null||C.addEventListener("click",_=>{const y=_.target.closest(".tnav-tab");y&&un(y.dataset.tab)}),(I=document.getElementById("btnDetailBack"))==null||I.addEventListener("click",()=>un("home"));const e=document.getElementById("globalSearch");e&&e.addEventListener("input",()=>{As(e.value);const _=document.getElementById("screen-game");_&&_.dataset.tab!=="home"&&un("home"),he()}),document.addEventListener("keydown",_=>{var R;if(_.key!=="/")return;const y=document.activeElement;y&&/^(input|textarea|select)$/i.test(y.tagName)||(R=document.getElementById("screen-game"))!=null&&R.classList.contains("hidden")||(_.preventDefault(),e==null||e.focus())}),(g=document.getElementById("homeSeg"))==null||g.addEventListener("click",_=>{const y=_.target.closest(".seg-btn");y&&(document.querySelectorAll("#homeSeg .seg-btn").forEach(R=>R.classList.toggle("is-active",R===y)),Oa(y.dataset.home==="sectors"?"up":"value"),he())}),(w=document.getElementById("homeFilters"))==null||w.addEventListener("click",_=>{const y=_.target.closest(".fchip");y&&(y.dataset.filter&&(document.querySelectorAll("#homeFilters [data-filter]").forEach(R=>R.classList.toggle("is-active",R===y)),yv(y.dataset.filter)),y.dataset.sort&&(document.querySelectorAll("#homeFilters [data-sort]").forEach(R=>R.classList.toggle("is-active",R===y)),Oa(y.dataset.sort)),he())}),(S=document.getElementById("screenerPresets"))==null||S.addEventListener("click",_=>{const y=_.target.closest("[data-preset]");y&&(wv(y.dataset.preset),he())}),(b=document.getElementById("accountView"))==null||b.addEventListener("click",_=>{const y=_.target.closest("[data-acct]");y&&(bv(y.dataset.acct),he())}),(k=document.getElementById("feedView"))==null||k.addEventListener("click",_=>{if(_.target.closest("#feedBoardLink")){const y=document.getElementById("navBoard");y&&y.href&&window.open(y.href,"_blank","noopener")}}),document.querySelectorAll(".qty-btn[data-qty]").forEach(_=>{_.addEventListener("click",()=>{const y=document.getElementById("qtyInput");y.value=Math.max(1,Mn()+Number(_.dataset.qty))})}),document.getElementById("btnMaxQty").addEventListener("click",()=>{var D,J,se,Fe;const{roomData:_,uid:y,selectedStockId:R}=f,N=(J=(D=_==null?void 0:_.stocks)==null?void 0:D[R])==null?void 0:J.price,X=((Fe=(se=_==null?void 0:_.players)==null?void 0:se[y])==null?void 0:Fe.cash)||0;N&&(document.getElementById("qtyInput").value=Math.max(1,Math.floor(X/(N*1.0002))))}),document.getElementById("btnBuy").addEventListener("click",()=>$s("buy")),document.getElementById("btnSell").addEventListener("click",()=>$s("sell")),document.getElementById("btnSellAll").addEventListener("click",()=>$s("sellAll")),document.getElementById("orderTabs").addEventListener("click",_=>{const y=_.target.closest(".order-tab");if(!y)return;const R=y.dataset.tab;document.querySelectorAll(".order-tab").forEach(N=>N.classList.toggle("is-active",N===y)),document.querySelectorAll(".order-pane").forEach(N=>N.classList.toggle("hidden",N.dataset.pane!==R))}),document.getElementById("btnLimitBuy").addEventListener("click",()=>qa("buy")),document.getElementById("btnLimitSell").addEventListener("click",()=>qa("sell")),document.getElementById("btnSetStop").addEventListener("click",By),document.getElementById("btnSplitBuy").addEventListener("click",Hy),document.getElementById("orderList").addEventListener("click",_=>{const y=_.target.closest("[data-cancel]");y&&Wy(y.dataset.cancel)}),document.getElementById("btnAlert").addEventListener("click",()=>{var J;const{roomData:_,selectedStockId:y}=f,R=(J=_==null?void 0:_.stocks)==null?void 0:J[y];if(!R)return B("종목을 먼저 선택하세요","err");try{window.Notification&&Notification.permission==="default"&&Notification.requestPermission()}catch{}const N=fv(R.name),X=prompt(`${R.name} 가격 알림 설정
현재가 ${R.price.toLocaleString("ko-KR")}원
알림받을 가격을 입력하세요 (0 또는 빈칸 = 해제):`,N||R.price);if(X===null)return;const D=Math.floor(Number(X)||0);hv(R.name,D),B(D?`${R.name} ${D.toLocaleString("ko-KR")}원 알림 설정됨`:`${R.name} 알림 해제됨`),he()}),document.getElementById("btnApplyIpo").addEventListener("click",Vy);const t=document.getElementById("stockSearch"),i=document.getElementById("stockSearchClear");t&&t.addEventListener("input",()=>{As(t.value),i&&(i.hidden=!t.value),he()}),i&&i.addEventListener("click",()=>{t.value="",As(""),i.hidden=!0,t.focus(),he()});const s=document.getElementById("marketStatusChip");s&&s.addEventListener("click",()=>{const _=document.getElementById("marketStatusPanel");if(!_)return;const y=_.classList.toggle("hidden");s.setAttribute("aria-expanded",y?"false":"true"),!y&&f.roomData&&lu(f)}),(P=document.getElementById("btnBackHome"))==null||P.addEventListener("click",Ls)}Gy();
