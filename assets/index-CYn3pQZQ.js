(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var Ro={};/**
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
 */const rc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(n,e){if(!n)throw en(e)},en=function(n){return new Error("Firebase Database ("+rc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const oc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},qu=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Er={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(h=64)),s.push(t[d],t[u],t[h],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(oc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||u==null)throw new Ku;const h=r<<2|a>>4;if(s.push(h),l!==64){const p=a<<4&240|l>>2;if(s.push(p),u!==64){const m=l<<6&192|u;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ku extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ac=function(n){const e=oc(n);return Er.encodeByteArray(e,!0)},gs=function(n){return ac(n).replace(/\./g,"")},_s=function(n){try{return Er.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yu(n){return cc(void 0,n)}function cc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Qu(t)||(n[t]=cc(n[t],e[t]));return n}function Qu(n){return n!=="__proto__"}/**
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
 */function Ju(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xu=()=>Ju().__FIREBASE_DEFAULTS__,Zu=()=>{if(typeof process>"u"||typeof Ro>"u")return;const n=Ro.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ed=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_s(n[1]);return e&&JSON.parse(e)},Ir=()=>{try{return Xu()||Zu()||ed()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lc=n=>{var e,t;return(t=(e=Ir())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},td=n=>{const e=lc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},uc=()=>{var n;return(n=Ir())===null||n===void 0?void 0:n.config},dc=n=>{var e;return(e=Ir())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ve{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function nd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gs(JSON.stringify(t)),gs(JSON.stringify(o)),""].join(".")}/**
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
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function sd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function id(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rd(){const n=ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function od(){return rc.NODE_ADMIN===!0}function ad(){try{return typeof indexedDB=="object"}catch{return!1}}function cd(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const ld="FirebaseError";class rt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ld,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hn.prototype.create)}}class Hn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ud(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rt(i,a,s)}}function ud(n,e){return n.replace(dd,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const dd=/\{\$([^}]+)}/g;/**
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
 */function Rn(n){return JSON.parse(n)}function ee(n){return JSON.stringify(n)}/**
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
 */const fc=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Rn(_s(r[0])||""),t=Rn(_s(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},hd=function(n){const e=fc(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},fd=function(n){const e=fc(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ee(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function vt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function vs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ys(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function ws(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(No(r)&&No(o)){if(!ws(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function No(n){return n!==null&&typeof n=="object"}/**
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
 */function tn(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class pd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),d=1518500249):(l=r^o^a,d=1859775393):u<60?(l=r&o|a&(r|o),d=2400959708):(l=r^o^a,d=3395469782);const h=(i<<5|i>>>27)+l+c+d+s[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function md(n,e){const t=new gd(n,e);return t.subscribe.bind(t)}class gd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");_d(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=bi),i.error===void 0&&(i.error=bi),i.complete===void 0&&(i.complete=bi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _d(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bi(){}function Vt(n,e){return`${n} failed: ${e} argument `}/**
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
 */const vd=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xs=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function oe(n){return n&&n._delegate?n._delegate:n}class yt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const lt="[DEFAULT]";/**
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
 */class yd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ve;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bd(e))try{this.getOrInitializeService({instanceIdentifier:lt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lt){return this.instances.has(e)}getOptions(e=lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:wd(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=lt){return this.component?this.component.multipleInstances?e:lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wd(n){return n===lt?void 0:n}function bd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ed{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const Id={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Cd=G.INFO,kd={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Sd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=kd[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kr{constructor(e){this.name=e,this._logLevel=Cd,this._logHandler=Sd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Id[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Td=(n,e)=>e.some(t=>n instanceof t);let Ao,Po;function Rd(){return Ao||(Ao=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nd(){return Po||(Po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pc=new WeakMap,qi=new WeakMap,mc=new WeakMap,Ei=new WeakMap,Sr=new WeakMap;function Ad(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ye(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pc.set(t,n)}).catch(()=>{}),Sr.set(e,n),e}function Pd(n){if(qi.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});qi.set(n,e)}let Ki={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ye(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Md(n){Ki=n(Ki)}function Od(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ii(this),e,...t);return mc.set(s,e.sort?e.sort():[e]),Ye(s)}:Nd().includes(n)?function(...e){return n.apply(Ii(this),e),Ye(pc.get(this))}:function(...e){return Ye(n.apply(Ii(this),e))}}function xd(n){return typeof n=="function"?Od(n):(n instanceof IDBTransaction&&Pd(n),Td(n,Rd())?new Proxy(n,Ki):n)}function Ye(n){if(n instanceof IDBRequest)return Ad(n);if(Ei.has(n))return Ei.get(n);const e=xd(n);return e!==n&&(Ei.set(n,e),Sr.set(e,n)),e}const Ii=n=>Sr.get(n);function Dd(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Ye(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ye(o.result),c.oldVersion,c.newVersion,Ye(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ld=["get","getKey","getAll","getAllKeys","count"],$d=["put","add","delete","clear"],Ci=new Map;function Mo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ci.get(e))return Ci.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=$d.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ld.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Ci.set(e,r),r}Md(n=>({...n,get:(e,t,s)=>Mo(e,t)||n.get(e,t,s),has:(e,t)=>!!Mo(e,t)||n.has(e,t)}));/**
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
 */class Fd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ud(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ud(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yi="@firebase/app",Oo="0.10.13";/**
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
 */const De=new kr("@firebase/app"),Bd="@firebase/app-compat",Hd="@firebase/analytics-compat",Wd="@firebase/analytics",Vd="@firebase/app-check-compat",jd="@firebase/app-check",Gd="@firebase/auth",zd="@firebase/auth-compat",qd="@firebase/database",Kd="@firebase/data-connect",Yd="@firebase/database-compat",Qd="@firebase/functions",Jd="@firebase/functions-compat",Xd="@firebase/installations",Zd="@firebase/installations-compat",eh="@firebase/messaging",th="@firebase/messaging-compat",nh="@firebase/performance",sh="@firebase/performance-compat",ih="@firebase/remote-config",rh="@firebase/remote-config-compat",oh="@firebase/storage",ah="@firebase/storage-compat",ch="@firebase/firestore",lh="@firebase/vertexai-preview",uh="@firebase/firestore-compat",dh="firebase",hh="10.14.1";/**
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
 */const Qi="[DEFAULT]",fh={[Yi]:"fire-core",[Bd]:"fire-core-compat",[Wd]:"fire-analytics",[Hd]:"fire-analytics-compat",[jd]:"fire-app-check",[Vd]:"fire-app-check-compat",[Gd]:"fire-auth",[zd]:"fire-auth-compat",[qd]:"fire-rtdb",[Kd]:"fire-data-connect",[Yd]:"fire-rtdb-compat",[Qd]:"fire-fn",[Jd]:"fire-fn-compat",[Xd]:"fire-iid",[Zd]:"fire-iid-compat",[eh]:"fire-fcm",[th]:"fire-fcm-compat",[nh]:"fire-perf",[sh]:"fire-perf-compat",[ih]:"fire-rc",[rh]:"fire-rc-compat",[oh]:"fire-gcs",[ah]:"fire-gcs-compat",[ch]:"fire-fst",[uh]:"fire-fst-compat",[lh]:"fire-vertex","fire-js":"fire-js",[dh]:"fire-js-all"};/**
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
 */const bs=new Map,ph=new Map,Ji=new Map;function xo(n,e){try{n.container.addComponent(e)}catch(t){De.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function jt(n){const e=n.name;if(Ji.has(e))return De.debug(`There were multiple attempts to register component ${e}.`),!1;Ji.set(e,n);for(const t of bs.values())xo(t,n);for(const t of ph.values())xo(t,n);return!0}function Tr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ze(n){return n.settings!==void 0}/**
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
 */const mh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qe=new Hn("app","Firebase",mh);/**
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
 */class gh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}/**
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
 */const nn=hh;function gc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Qe.create("bad-app-name",{appName:String(i)});if(t||(t=uc()),!t)throw Qe.create("no-options");const r=bs.get(i);if(r){if(ws(t,r.options)&&ws(s,r.config))return r;throw Qe.create("duplicate-app",{appName:i})}const o=new Ed(i);for(const c of Ji.values())o.addComponent(c);const a=new gh(t,s,o);return bs.set(i,a),a}function _c(n=Qi){const e=bs.get(n);if(!e&&n===Qi&&uc())return gc();if(!e)throw Qe.create("no-app",{appName:n});return e}function Je(n,e,t){var s;let i=(s=fh[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),De.warn(a.join(" "));return}jt(new yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _h="firebase-heartbeat-database",vh=1,Nn="firebase-heartbeat-store";let ki=null;function vc(){return ki||(ki=Dd(_h,vh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Qe.create("idb-open",{originalErrorMessage:n.message})})),ki}async function yh(n){try{const t=(await vc()).transaction(Nn),s=await t.objectStore(Nn).get(yc(n));return await t.done,s}catch(e){if(e instanceof rt)De.warn(e.message);else{const t=Qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});De.warn(t.message)}}}async function Do(n,e){try{const s=(await vc()).transaction(Nn,"readwrite");await s.objectStore(Nn).put(e,yc(n)),await s.done}catch(t){if(t instanceof rt)De.warn(t.message);else{const s=Qe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});De.warn(s.message)}}}function yc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const wh=1024,bh=30*24*60*60*1e3;class Eh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ch(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bh}),this._storage.overwrite(this._heartbeatsCache))}catch(s){De.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lo(),{heartbeatsToSend:s,unsentEntries:i}=Ih(this._heartbeatsCache.heartbeats),r=gs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return De.warn(t),""}}}function Lo(){return new Date().toISOString().substring(0,10)}function Ih(n,e=wh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),$o(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),$o(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Ch{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ad()?cd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Do(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Do(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $o(n){return gs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function kh(n){jt(new yt("platform-logger",e=>new Fd(e),"PRIVATE")),jt(new yt("heartbeat",e=>new Eh(e),"PRIVATE")),Je(Yi,Oo,n),Je(Yi,Oo,"esm2017"),Je("fire-js","")}kh("");var Sh="firebase",Th="10.14.1";/**
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
 */Je(Sh,Th,"app");function Rr(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function wc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rh=wc,bc=new Hn("auth","Firebase",wc());/**
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
 */const Es=new kr("@firebase/auth");function Nh(n,...e){Es.logLevel<=G.WARN&&Es.warn(`Auth (${nn}): ${n}`,...e)}function os(n,...e){Es.logLevel<=G.ERROR&&Es.error(`Auth (${nn}): ${n}`,...e)}/**
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
 */function Le(n,...e){throw Nr(n,...e)}function ke(n,...e){return Nr(n,...e)}function Ec(n,e,t){const s=Object.assign(Object.assign({},Rh()),{[e]:t});return new Hn("auth","Firebase",s).create(e,{appName:n.name})}function mt(n){return Ec(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nr(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return bc.create(n,...e)}function D(n,e,...t){if(!n)throw Nr(e,...t)}function Ne(n){const e="INTERNAL ASSERTION FAILED: "+n;throw os(e),new Error(e)}function $e(n,e){n||Ne(e)}/**
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
 */function Xi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ah(){return Fo()==="http:"||Fo()==="https:"}function Fo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Ph(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ah()||id()||"connection"in navigator)?navigator.onLine:!0}function Mh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Wn{constructor(e,t){this.shortDelay=e,this.longDelay=t,$e(t>e,"Short delay should be less than long delay!"),this.isMobile=Cr()||hc()}get(){return Ph()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ar(n,e){$e(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ic{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Oh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xh=new Wn(3e4,6e4);function Pr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function sn(n,e,t,s,i={}){return Cc(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=tn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},r);return sd()||(l.referrerPolicy="no-referrer"),Ic.fetch()(kc(n,n.config.apiHost,t,a),l)})}async function Cc(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Oh),e);try{const i=new Lh(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw es(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw es(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw es(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ec(n,d,l);Le(n,d)}}catch(i){if(i instanceof rt)throw i;Le(n,"network-request-failed",{message:String(i)})}}async function Dh(n,e,t,s,i={}){const r=await sn(n,e,t,s,i);return"mfaPendingCredential"in r&&Le(n,"multi-factor-auth-required",{_serverResponse:r}),r}function kc(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Ar(n.config,i):`${n.config.apiScheme}://${i}`}class Lh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ke(this.auth,"network-request-failed")),xh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=ke(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function $h(n,e){return sn(n,"POST","/v1/accounts:delete",e)}async function Sc(n,e){return sn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function wn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fh(n,e=!1){const t=oe(n),s=await t.getIdToken(e),i=Mr(s);D(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:wn(Si(i.auth_time)),issuedAtTime:wn(Si(i.iat)),expirationTime:wn(Si(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Si(n){return Number(n)*1e3}function Mr(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return os("JWT malformed, contained fewer than 3 sections"),null;try{const i=_s(t);return i?JSON.parse(i):(os("Failed to decode base64 JWT payload"),null)}catch(i){return os("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Uo(n){const e=Mr(n);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function An(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof rt&&Uh(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Uh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Bh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wn(this.lastLoginAt),this.creationTime=wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Is(n){var e;const t=n.auth,s=await n.getIdToken(),i=await An(n,Sc(t,{idToken:s}));D(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Tc(r.providerUserInfo):[],a=Wh(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Zi(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function Hh(n){const e=oe(n);await Is(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wh(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Tc(n){return n.map(e=>{var{providerId:t}=e,s=Rr(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Vh(n,e){const t=await Cc(n,{},async()=>{const s=tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=kc(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ic.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jh(n,e){return sn(n,"POST","/v2/accounts:revokeToken",Pr(n,e))}/**
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
 */class Lt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){D(e.length!==0,"internal-error");const t=Uo(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Vh(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Lt;return s&&(D(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(D(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lt,this.toJSON())}_performRefresh(){return Ne("not implemented")}}/**
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
 */function Be(n,e){D(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ae{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=Rr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Zi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await An(this,this.stsTokenManager.getToken(this.auth,e));return D(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fh(this,e)}reload(){return Hh(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Is(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(mt(this.auth));const e=await this.getIdToken();return await An(this,$h(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,l,d;const u=(s=t.displayName)!==null&&s!==void 0?s:void 0,h=(i=t.email)!==null&&i!==void 0?i:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,I=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=t.createdAt)!==null&&l!==void 0?l:void 0,_=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:y,emailVerified:T,isAnonymous:w,providerData:C,stsTokenManager:M}=t;D(y&&M,e,"internal-error");const N=Lt.fromJSON(this.name,M);D(typeof y=="string",e,"internal-error"),Be(u,e.name),Be(h,e.name),D(typeof T=="boolean",e,"internal-error"),D(typeof w=="boolean",e,"internal-error"),Be(p,e.name),Be(m,e.name),Be(v,e.name),Be(I,e.name),Be(E,e.name),Be(_,e.name);const g=new Ae({uid:y,auth:e,email:h,emailVerified:T,displayName:u,isAnonymous:w,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:N,createdAt:E,lastLoginAt:_});return C&&Array.isArray(C)&&(g.providerData=C.map(k=>Object.assign({},k))),I&&(g._redirectEventId=I),g}static async _fromIdTokenResponse(e,t,s=!1){const i=new Lt;i.updateFromServerResponse(t);const r=new Ae({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Is(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];D(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Tc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Lt;a.updateFromIdToken(s);const c=new Ae({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Zi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const Bo=new Map;function Pe(n){$e(n instanceof Function,"Expected a class definition");let e=Bo.get(n);return e?($e(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Bo.set(n,e),e)}/**
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
 */class Rc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rc.type="NONE";const Ho=Rc;/**
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
 */function as(n,e,t){return`firebase:${n}:${e}:${t}`}class $t{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=as(this.userKey,i.apiKey,r),this.fullPersistenceKey=as("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new $t(Pe(Ho),e,s);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Pe(Ho);const o=as(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){const u=Ae._fromJSON(e,d);l!==r&&(a=u),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new $t(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new $t(r,e,s))}}/**
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
 */function Wo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xc(e))return"Blackberry";if(Dc(e))return"Webos";if(Ac(e))return"Safari";if((e.includes("chrome/")||Pc(e))&&!e.includes("edge/"))return"Chrome";if(Oc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Nc(n=ue()){return/firefox\//i.test(n)}function Ac(n=ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pc(n=ue()){return/crios\//i.test(n)}function Mc(n=ue()){return/iemobile/i.test(n)}function Oc(n=ue()){return/android/i.test(n)}function xc(n=ue()){return/blackberry/i.test(n)}function Dc(n=ue()){return/webos/i.test(n)}function Or(n=ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Gh(n=ue()){var e;return Or(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zh(){return rd()&&document.documentMode===10}function Lc(n=ue()){return Or(n)||Oc(n)||Dc(n)||xc(n)||/windows phone/i.test(n)||Mc(n)}/**
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
 */function $c(n,e=[]){let t;switch(n){case"Browser":t=Wo(ue());break;case"Worker":t=`${Wo(ue())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${nn}/${s}`}/**
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
 */class qh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Kh(n,e={}){return sn(n,"GET","/v2/passwordPolicy",Pr(n,e))}/**
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
 */const Yh=6;class Qh{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Yh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Jh{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vo(this),this.idTokenSubscription=new Vo(this),this.beforeStateQueue=new qh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pe(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await $t.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Sc(this,{idToken:e}),s=await Ae._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Is(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ze(this.app))return Promise.reject(mt(this));const t=e?oe(e):null;return t&&D(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ze(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kh(this),t=new Qh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await jh(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pe(e)||this._popupRedirectResolver;D(t,this,"argument-error"),this.redirectPersistenceManager=await $t.create(this,[Pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$c(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Nh(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function xr(n){return oe(n)}class Vo{constructor(e){this.auth=e,this.observer=null,this.addObserver=md(t=>this.observer=t)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Xh(n){Dr=n}function Zh(n){return Dr.loadJS(n)}function ef(){return Dr.gapiScript}function tf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function nf(n,e){const t=Tr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(ws(r,e??{}))return i;Le(i,"already-initialized")}return t.initialize({options:e})}function sf(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Pe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function rf(n,e,t){const s=xr(n);D(s._canInitEmulator,s,"emulator-config-failed"),D(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Fc(e),{host:o,port:a}=of(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),af()}function Fc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function of(n){const e=Fc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:jo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:jo(o)}}}function jo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function af(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Uc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ne("not implemented")}_getIdTokenResponse(e){return Ne("not implemented")}_linkToIdToken(e,t){return Ne("not implemented")}_getReauthenticationResolver(e){return Ne("not implemented")}}/**
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
 */async function Ft(n,e){return Dh(n,"POST","/v1/accounts:signInWithIdp",Pr(n,e))}/**
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
 */const cf="http://localhost";class wt extends Uc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Le("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=Rr(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new wt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ft(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ft(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ft(e,t)}buildRequest(){const e={requestUri:cf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tn(t)}return e}}/**
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
 */class Bc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vn extends Bc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class We extends Vn{constructor(){super("facebook.com")}static credential(e){return wt._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com";We.PROVIDER_ID="facebook.com";/**
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
 */class Ve extends Vn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wt._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ve.credential(t,s)}catch{return null}}}Ve.GOOGLE_SIGN_IN_METHOD="google.com";Ve.PROVIDER_ID="google.com";/**
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
 */class je extends Vn{constructor(){super("github.com")}static credential(e){return wt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.GITHUB_SIGN_IN_METHOD="github.com";je.PROVIDER_ID="github.com";/**
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
 */class Ge extends Vn{constructor(){super("twitter.com")}static credential(e,t){return wt._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ge.credential(t,s)}catch{return null}}}Ge.TWITTER_SIGN_IN_METHOD="twitter.com";Ge.PROVIDER_ID="twitter.com";/**
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
 */class Gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Ae._fromIdTokenResponse(e,s,i),o=Go(s);return new Gt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Go(s);return new Gt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Go(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Cs extends rt{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Cs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Cs(e,t,s,i)}}function Hc(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Cs._fromErrorAndOperation(n,r,e,s):r})}async function lf(n,e,t=!1){const s=await An(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Gt._forOperation(n,"link",s)}/**
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
 */async function uf(n,e,t=!1){const{auth:s}=n;if(ze(s.app))return Promise.reject(mt(s));const i="reauthenticate";try{const r=await An(n,Hc(s,i,e,n),t);D(r.idToken,s,"internal-error");const o=Mr(r.idToken);D(o,s,"internal-error");const{sub:a}=o;return D(n.uid===a,s,"user-mismatch"),Gt._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Le(s,"user-mismatch"),r}}/**
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
 */async function df(n,e,t=!1){if(ze(n.app))return Promise.reject(mt(n));const s="signIn",i=await Hc(n,s,e),r=await Gt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function hf(n,e,t,s){return oe(n).onIdTokenChanged(e,t,s)}function ff(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function pf(n,e,t,s){return oe(n).onAuthStateChanged(e,t,s)}const ks="__sak";/**
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
 */class Wc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ks,"1"),this.storage.removeItem(ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mf=1e3,gf=10;class Vc extends Wc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);zh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gf):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},mf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vc.type="LOCAL";const _f=Vc;/**
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
 */class jc extends Wc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jc.type="SESSION";const Gc=jc;/**
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
 */function vf(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Zs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Zs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await vf(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zs.receivers=[];/**
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
 */function Lr(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class yf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Lr("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Se(){return window}function wf(n){Se().location.href=n}/**
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
 */function zc(){return typeof Se().WorkerGlobalScope<"u"&&typeof Se().importScripts=="function"}async function bf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ef(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function If(){return zc()?self:null}/**
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
 */const qc="firebaseLocalStorageDb",Cf=1,Ss="firebaseLocalStorage",Kc="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ei(n,e){return n.transaction([Ss],e?"readwrite":"readonly").objectStore(Ss)}function kf(){const n=indexedDB.deleteDatabase(qc);return new jn(n).toPromise()}function er(){const n=indexedDB.open(qc,Cf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Ss,{keyPath:Kc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Ss)?e(s):(s.close(),await kf(),e(await er()))})})}async function zo(n,e,t){const s=ei(n,!0).put({[Kc]:e,value:t});return new jn(s).toPromise()}async function Sf(n,e){const t=ei(n,!1).get(e),s=await new jn(t).toPromise();return s===void 0?null:s.value}function qo(n,e){const t=ei(n,!0).delete(e);return new jn(t).toPromise()}const Tf=800,Rf=3;class Yc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await er(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Rf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zs._getInstance(If()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bf(),!this.activeServiceWorker)return;this.sender=new yf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ef()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await er();return await zo(e,ks,"1"),await qo(e,ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>zo(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Sf(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ei(i,!1).getAll();return new jn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yc.type="LOCAL";const Nf=Yc;new Wn(3e4,6e4);/**
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
 */function Af(n,e){return e?Pe(e):(D(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class $r extends Uc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pf(n){return df(n.auth,new $r(n),n.bypassAuthState)}function Mf(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),uf(t,new $r(n),n.bypassAuthState)}async function Of(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),lf(t,new $r(n),n.bypassAuthState)}/**
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
 */class Qc{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pf;case"linkViaPopup":case"linkViaRedirect":return Of;case"reauthViaPopup":case"reauthViaRedirect":return Mf;default:Le(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xf=new Wn(2e3,1e4);class At extends Qc{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=Lr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xf.get())};e()}}At.currentPopupAction=null;/**
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
 */const Df="pendingRedirect",cs=new Map;class Lf extends Qc{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=cs.get(this.auth._key());if(!e){try{const s=await $f(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}cs.set(this.auth._key(),e)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $f(n,e){const t=Bf(e),s=Uf(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function Ff(n,e){cs.set(n._key(),e)}function Uf(n){return Pe(n._redirectPersistence)}function Bf(n){return as(Df,n.config.apiKey,n.name)}async function Hf(n,e,t=!1){if(ze(n.app))return Promise.reject(mt(n));const s=xr(n),i=Af(s,e),o=await new Lf(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Wf=10*60*1e3;class Vf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Jc(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ke(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ko(e))}saveEventToCache(e){this.cachedEventUids.add(Ko(e)),this.lastProcessedEventTime=Date.now()}}function Ko(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Jc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jc(n);default:return!1}}/**
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
 */async function Gf(n,e={}){return sn(n,"GET","/v1/projects",e)}/**
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
 */const zf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qf=/^https?/;async function Kf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Gf(n);for(const t of e)try{if(Yf(t))return}catch{}Le(n,"unauthorized-domain")}function Yf(n){const e=Xi(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!qf.test(t))return!1;if(zf.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Qf=new Wn(3e4,6e4);function Yo(){const n=Se().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jf(n){return new Promise((e,t)=>{var s,i,r;function o(){Yo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yo(),t(ke(n,"network-request-failed"))},timeout:Qf.get()})}if(!((i=(s=Se().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Se().gapi)===null||r===void 0)&&r.load)o();else{const a=tf("iframefcb");return Se()[a]=()=>{gapi.load?o():t(ke(n,"network-request-failed"))},Zh(`${ef()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ls=null,e})}let ls=null;function Xf(n){return ls=ls||Jf(n),ls}/**
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
 */const Zf=new Wn(5e3,15e3),ep="__/auth/iframe",tp="emulator/auth/iframe",np={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ip(n){const e=n.config;D(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ar(e,tp):`https://${n.config.authDomain}/${ep}`,s={apiKey:e.apiKey,appName:n.name,v:nn},i=sp.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${tn(s).slice(1)}`}async function rp(n){const e=await Xf(n),t=Se().gapi;return D(t,n,"internal-error"),e.open({where:document.body,url:ip(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:np,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=ke(n,"network-request-failed"),a=Se().setTimeout(()=>{r(o)},Zf.get());function c(){Se().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const op={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ap=500,cp=600,lp="_blank",up="http://localhost";class Qo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dp(n,e,t,s=ap,i=cp){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},op),{width:s.toString(),height:i.toString(),top:r,left:o}),l=ue().toLowerCase();t&&(a=Pc(l)?lp:t),Nc(l)&&(e=e||up,c.scrollbars="yes");const d=Object.entries(c).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(Gh(l)&&a!=="_self")return hp(e||"",a),new Qo(null);const u=window.open(e||"",a,d);D(u,n,"popup-blocked");try{u.focus()}catch{}return new Qo(u)}function hp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const fp="__/auth/handler",pp="emulator/auth/handler",mp=encodeURIComponent("fac");async function Jo(n,e,t,s,i,r){D(n.config.authDomain,n,"auth-domain-config-required"),D(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:nn,eventId:i};if(e instanceof Bc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",vs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Vn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${mp}=${encodeURIComponent(c)}`:"";return`${gp(n)}?${tn(a).slice(1)}${l}`}function gp({config:n}){return n.emulator?Ar(n,pp):`https://${n.authDomain}/${fp}`}/**
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
 */const Ti="webStorageSupport";class _p{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gc,this._completeRedirectFn=Hf,this._overrideRedirectResult=Ff}async _openPopup(e,t,s,i){var r;$e((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Jo(e,t,s,Xi(),i);return dp(e,o,Lr())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Jo(e,t,s,Xi(),i);return wf(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):($e(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await rp(e),s=new Vf(e);return t.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ti,{type:Ti},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ti];o!==void 0&&t(!!o),Le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lc()||Ac()||Or()}}const vp=_p;var Xo="@firebase/auth",Zo="1.7.9";/**
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
 */class yp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bp(n){jt(new yt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$c(n)},l=new Jh(s,i,r,c);return sf(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),jt(new yt("auth-internal",e=>{const t=xr(e.getProvider("auth").getImmediate());return(s=>new yp(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(Xo,Zo,wp(n)),Je(Xo,Zo,"esm2017")}/**
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
 */const Ep=5*60,Ip=dc("authIdTokenMaxAge")||Ep;let ea=null;const Cp=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Ip)return;const i=t==null?void 0:t.token;ea!==i&&(ea=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kp(n=_c()){const e=Tr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=nf(n,{popupRedirectResolver:vp,persistence:[Nf,_f,Gc]}),s=dc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Cp(r.toString());ff(t,o,()=>o(t.currentUser)),hf(t,a=>o(a))}}const i=lc("auth");return i&&rf(t,`http://${i}`),t}function Sp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Xh({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=ke("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Sp().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bp("Browser");var ta={};const na="@firebase/database",sa="1.0.8";/**
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
 */let Xc="";function Tp(n){Xc=n}/**
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
 */class Rp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ee(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Rn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Np{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ee(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Zc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Rp(e)}}catch{}return new Np},ht=Zc("localStorage"),Ap=Zc("sessionStorage");/**
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
 */const Ut=new kr("@firebase/database"),el=function(){let n=1;return function(){return n++}}(),tl=function(n){const e=vd(n),t=new pd;t.update(e);const s=t.digest();return Er.encodeByteArray(s)},Gn=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Gn.apply(null,s):typeof s=="object"?e+=ee(s):e+=s,e+=" "}return e};let bn=null,ia=!0;const Pp=function(n,e){b(!0,"Can't turn on custom loggers persistently."),Ut.logLevel=G.VERBOSE,bn=Ut.log.bind(Ut)},se=function(...n){if(ia===!0&&(ia=!1,bn===null&&Ap.get("logging_enabled")===!0&&Pp()),bn){const e=Gn.apply(null,n);bn(e)}},zn=function(n){return function(...e){se(n,...e)}},tr=function(...n){const e="FIREBASE INTERNAL ERROR: "+Gn(...n);Ut.error(e)},Fe=function(...n){const e=`FIREBASE FATAL ERROR: ${Gn(...n)}`;throw Ut.error(e),new Error(e)},ce=function(...n){const e="FIREBASE WARNING: "+Gn(...n);Ut.warn(e)},Mp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ti=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Op=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},zt="[MIN_NAME]",bt="[MAX_NAME]",kt=function(n,e){if(n===e)return 0;if(n===zt||e===bt)return-1;if(e===zt||n===bt)return 1;{const t=ra(n),s=ra(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},xp=function(n,e){return n===e?0:n<e?-1:1},fn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ee(e))},Fr=function(n){if(typeof n!="object"||n===null)return ee(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ee(e[s]),t+=":",t+=Fr(n[e[s]]);return t+="}",t},nl=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ie(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const sl=function(n){b(!ti(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Dp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Lp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $p(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Fp=new RegExp("^-?(0*)\\d{1,10}$"),Up=-2147483648,Bp=2147483647,ra=function(n){if(Fp.test(n)){const e=Number(n);if(e>=Up&&e<=Bp)return e}return null},rn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ce("Exception was thrown by user callback.",t),e},Math.floor(0))}},Hp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},En=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Wp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Vp{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class us{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}us.OWNER="owner";/**
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
 */const Ur="5",il="v",rl="s",ol="r",al="f",cl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ll="ls",ul="p",nr="ac",dl="websocket",hl="long_polling";/**
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
 */class fl{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ht.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ht.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function jp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function pl(n,e,t){b(typeof e=="string","typeof type must == string"),b(typeof t=="object","typeof params must == object");let s;if(e===dl)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===hl)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jp(n)&&(t.ns=n.namespace);const i=[];return ie(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Gp{constructor(){this.counters_={}}incrementCounter(e,t=1){Ee(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Yu(this.counters_)}}/**
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
 */const Ri={},Ni={};function Br(n){const e=n.toString();return Ri[e]||(Ri[e]=new Gp),Ri[e]}function zp(n,e){const t=n.toString();return Ni[t]||(Ni[t]=e()),Ni[t]}/**
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
 */class qp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&rn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const oa="start",Kp="close",Yp="pLPCommand",Qp="pRTLPCB",ml="id",gl="pw",_l="ser",Jp="cb",Xp="seg",Zp="ts",em="d",tm="dframe",vl=1870,yl=30,nm=vl-yl,sm=25e3,im=3e4;class Pt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zn(e),this.stats_=Br(t),this.urlFn=c=>(this.appCheckToken&&(c[nr]=this.appCheckToken),pl(t,hl,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new qp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(im)),Op(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hr((...r)=>{const[o,a,c,l,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===oa)this.id=a,this.password=c;else if(o===Kp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[oa]="t",s[_l]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Jp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[il]=Ur,this.transportSessionId&&(s[rl]=this.transportSessionId),this.lastSessionId&&(s[ll]=this.lastSessionId),this.applicationId&&(s[ul]=this.applicationId),this.appCheckToken&&(s[nr]=this.appCheckToken),typeof location<"u"&&location.hostname&&cl.test(location.hostname)&&(s[ol]=al);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pt.forceAllow_=!0}static forceDisallow(){Pt.forceDisallow_=!0}static isAvailable(){return Pt.forceAllow_?!0:!Pt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Dp()&&!Lp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ac(t),i=nl(s,nm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[tm]="t",s[ml]=e,s[gl]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ee(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Hr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=el(),window[Yp+this.uniqueCallbackIdentifier]=e,window[Qp+this.uniqueCallbackIdentifier]=t,this.myIFrame=Hr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){se("frame writing exception"),a.stack&&se(a.stack),se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||se("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ml]=this.myID,e[gl]=this.myPW,e[_l]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yl+s.length<=vl;){const o=this.pendingSegs.shift();s=s+"&"+Xp+i+"="+o.seg+"&"+Zp+i+"="+o.ts+"&"+em+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(sm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const rm=16384,om=45e3;let Ts=null;typeof MozWebSocket<"u"?Ts=MozWebSocket:typeof WebSocket<"u"&&(Ts=WebSocket);class ye{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zn(this.connId),this.stats_=Br(t),this.connURL=ye.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[il]=Ur,typeof location<"u"&&location.hostname&&cl.test(location.hostname)&&(o[ol]=al),t&&(o[rl]=t),s&&(o[ll]=s),i&&(o[nr]=i),r&&(o[ul]=r),pl(e,dl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ht.set("previous_websocket_failure",!0);try{let s;od(),this.mySock=new Ts(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ts!==null&&!ye.forceDisallow_}static previouslyFailed(){return ht.isInMemoryStorage||ht.get("previous_websocket_failure")===!0}markConnectionHealthy(){ht.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Rn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=nl(t,rm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(om))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ye.responsesRequiredToBeHealthy=2;ye.healthyTimeout=3e4;/**
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
 */class Pn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Pt,ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ye&&ye.isAvailable();let s=t&&!ye.previouslyFailed();if(e.webSocketOnly&&(t||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ye];else{const i=this.transports_=[];for(const r of Pn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Pn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Pn.globalTransportInitialized_=!1;/**
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
 */const am=6e4,cm=5e3,lm=10*1024,um=100*1024,Ai="t",aa="d",dm="s",ca="r",hm="e",la="o",ua="a",da="n",ha="p",fm="h";class pm{constructor(e,t,s,i,r,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zn("c:"+this.id+":"),this.transportManager_=new Pn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=En(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>um?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ai in e){const t=e[Ai];t===ua?this.upgradeIfSecondaryHealthy_():t===ca?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===la&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=fn("t",e),s=fn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ha,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ua,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:da,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=fn("t",e),s=fn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=fn(Ai,e);if(aa in e){const s=e[aa];if(t===fm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===da){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===dm?this.onConnectionShutdown_(s):t===ca?this.onReset_(s):t===hm?tr("Server Error: "+s):t===la?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ur!==s&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),En(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(am))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):En(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ha,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ht.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class wl{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class bl{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Rs extends bl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Rs}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const fa=32,pa=768;class j{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function W(){return new j("")}function F(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function et(n){return n.pieces_.length-n.pieceNum_}function z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new j(n.pieces_,e)}function Wr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function mm(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Mn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function El(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new j(e,0)}function X(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof j)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new j(t,0)}function U(n){return n.pieceNum_>=n.pieces_.length}function ae(n,e){const t=F(n),s=F(e);if(t===null)return e;if(t===s)return ae(z(n),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function gm(n,e){const t=Mn(n,0),s=Mn(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=kt(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Vr(n,e){if(et(n)!==et(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function me(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(et(n)>et(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class _m{constructor(e,t){this.errorPrefix_=t,this.parts_=Mn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xs(this.parts_[s]);Il(this)}}function vm(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Xs(e),Il(n)}function ym(n){const e=n.parts_.pop();n.byteLength_-=Xs(e),n.parts_.length>0&&(n.byteLength_-=1)}function Il(n){if(n.byteLength_>pa)throw new Error(n.errorPrefix_+"has a key path longer than "+pa+" bytes ("+n.byteLength_+").");if(n.parts_.length>fa)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fa+") or object contains a cycle "+ut(n))}function ut(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class jr extends bl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new jr}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const pn=1e3,wm=60*5*1e3,ma=30*1e3,bm=1.3,Em=3e4,Im="server_kill",ga=3;class Oe extends wl{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Oe.nextPersistentConnectionId_++,this.log_=zn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pn,this.maxReconnectDelay_=wm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Rs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ee(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ve,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Oe.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ee(e,"w")){const s=vt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ma)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=hd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ee(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):tr("Unrecognized action received from server: "+ee(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Em&&(this.reconnectDelay_=pn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(u){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?se("getToken() completed but was canceled"):(se("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new pm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{ce(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Im)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ce(u),c())}}}interrupt(e){se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vs(this.interruptReasons_)&&(this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Fr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new j(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){se("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ga&&(this.reconnectDelay_=ma,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){se("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ga&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Xc.replace(/\./g,"-")]=1,Cr()?e["framework.cordova"]=1:hc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rs.getInstance().currentlyOnline();return vs(this.interruptReasons_)&&e}}Oe.nextPersistentConnectionId_=0;Oe.nextConnectionId_=0;/**
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
 */class B{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new B(e,t)}}/**
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
 */class ni{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new B(zt,e),i=new B(zt,t);return this.compare(s,i)!==0}minPost(){return B.MIN}}/**
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
 */let ts;class Cl extends ni{static get __EMPTY_NODE(){return ts}static set __EMPTY_NODE(e){ts=e}compare(e,t){return kt(e.name,t.name)}isDefinedOn(e){throw en("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return B.MIN}maxPost(){return new B(bt,ts)}makePost(e,t){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,ts)}toString(){return".key"}}const Bt=new Cl;/**
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
 */class ns{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ne{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ne.RED,this.left=i??he.EMPTY_NODE,this.right=r??he.EMPTY_NODE}copy(e,t,s,i,r){return new ne(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return he.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return he.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ne.RED=!0;ne.BLACK=!1;class Cm{copy(e,t,s,i,r){return this}insert(e,t,s){return new ne(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class he{constructor(e,t=he.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new he(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ne.BLACK,null,null))}remove(e){return new he(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ne.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ns(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ns(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ns(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ns(this.root_,null,this.comparator_,!0,e)}}he.EMPTY_NODE=new Cm;/**
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
 */function km(n,e){return kt(n.name,e.name)}function Gr(n,e){return kt(n,e)}/**
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
 */let sr;function Sm(n){sr=n}const kl=function(n){return typeof n=="number"?"number:"+sl(n):"string:"+n},Sl=function(n){if(n.isLeafNode()){const e=n.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ee(e,".sv"),"Priority must be a string or number.")}else b(n===sr||n.isEmpty(),"priority of unexpected type.");b(n===sr||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let _a;class te{constructor(e,t=te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sl(this.priorityNode_)}static set __childrenNodeConstructor(e){_a=e}static get __childrenNodeConstructor(){return _a}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=F(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||et(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,te.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=sl(this.value_):e+=this.value_,this.lazyHash_=tl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof te.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=te.VALUE_TYPE_ORDER.indexOf(t),r=te.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+t),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Tl,Rl;function Tm(n){Tl=n}function Rm(n){Rl=n}class Nm extends ni{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?kt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return B.MIN}maxPost(){return new B(bt,new te("[PRIORITY-POST]",Rl))}makePost(e,t){const s=Tl(e);return new B(t,new te("[PRIORITY-POST]",s))}toString(){return".priority"}}const Q=new Nm;/**
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
 */const Am=Math.log(2);class Pm{constructor(e){const t=r=>parseInt(Math.log(r)/Am,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ns=function(n,e,t,s){n.sort(e);const i=function(c,l){const d=l-c;let u,h;if(d===0)return null;if(d===1)return u=n[c],h=t?t(u):u,new ne(h,u.node,ne.BLACK,null,null);{const p=parseInt(d/2,10)+c,m=i(c,p),v=i(p+1,l);return u=n[p],h=t?t(u):u,new ne(h,u.node,ne.BLACK,m,v)}},r=function(c){let l=null,d=null,u=n.length;const h=function(m,v){const I=u-m,E=u;u-=m;const _=i(I+1,E),y=n[I],T=t?t(y):y;p(new ne(T,y.node,v,null,_))},p=function(m){l?(l.left=m,l=m):(d=m,l=m)};for(let m=0;m<c.count;++m){const v=c.nextBitIsOne(),I=Math.pow(2,c.count-(m+1));v?h(I,ne.BLACK):(h(I,ne.BLACK),h(I,ne.RED))}return d},o=new Pm(n.length),a=r(o);return new he(s||e,a)};/**
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
 */let Pi;const Nt={};class Me{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return b(Nt&&Q,"ChildrenNode.ts has not been loaded"),Pi=Pi||new Me({".priority":Nt},{".priority":Q}),Pi}get(e){const t=vt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof he?t:null}hasIndex(e){return Ee(this.indexSet_,e.toString())}addIndex(e,t){b(e!==Bt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(B.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ns(s,e.getCompare()):a=Nt;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new Me(d,l)}addToIndexes(e,t){const s=ys(this.indexes_,(i,r)=>{const o=vt(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===Nt)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(B.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ns(a,o.getCompare())}else return Nt;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new B(e.name,a))),c.insert(e,e.node)}});return new Me(s,this.indexSet_)}removeFromIndexes(e,t){const s=ys(this.indexes_,i=>{if(i===Nt)return i;{const r=t.get(e.name);return r?i.remove(new B(e.name,r)):i}});return new Me(s,this.indexSet_)}}/**
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
 */let mn;class P{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Sl(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mn||(mn=new P(new he(Gr),null,Me.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mn}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?mn:t}}getChild(e){const t=F(e);return t===null?this:this.getImmediateChild(t).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(b(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new B(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?mn:this.priorityNode_;return new P(i,o,r)}}updateChild(e,t){const s=F(e);if(s===null)return t;{b(F(e)!==".priority"||et(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(z(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Q,(o,a)=>{t[o]=a.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kl(this.getPriority().val())+":"),this.forEachChild(Q,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":tl(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new B(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new B(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new B(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qn?-1:0}withIndex(e){if(e===Bt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Bt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Q),i=t.getIterator(Q);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Bt?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Mm extends P{constructor(){super(new he(Gr),P.EMPTY_NODE,Me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const qn=new Mm;Object.defineProperties(B,{MIN:{value:new B(zt,P.EMPTY_NODE)},MAX:{value:new B(bt,qn)}});Cl.__EMPTY_NODE=P.EMPTY_NODE;te.__childrenNodeConstructor=P;Sm(qn);Rm(qn);/**
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
 */const Om=!0;function J(n,e=null){if(n===null)return P.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new te(t,J(e))}if(!(n instanceof Array)&&Om){const t=[];let s=!1;if(ie(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=J(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new B(o,c)))}}),t.length===0)return P.EMPTY_NODE;const r=Ns(t,km,o=>o.name,Gr);if(s){const o=Ns(t,Q.getCompare());return new P(r,J(e),new Me({".priority":o},{".priority":Q}))}else return new P(r,J(e),Me.Default)}else{let t=P.EMPTY_NODE;return ie(n,(s,i)=>{if(Ee(n,s)&&s.substring(0,1)!=="."){const r=J(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(J(e))}}Tm(J);/**
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
 */class xm extends ni{constructor(e){super(),this.indexPath_=e,b(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?kt(e.name,t.name):r}makePost(e,t){const s=J(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new B(t,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,qn);return new B(bt,e)}toString(){return Mn(this.indexPath_,0).join("/")}}/**
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
 */class Dm extends ni{compare(e,t){const s=e.node.compareTo(t.node);return s===0?kt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,t){const s=J(e);return new B(t,s)}toString(){return".value"}}const Lm=new Dm;/**
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
 */function Nl(n){return{type:"value",snapshotNode:n}}function qt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function On(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function xn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function $m(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class zr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(On(t,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(qt(t,s)):o.trackChildChange(xn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Q,(i,r)=>{t.hasChild(i)||s.trackChildChange(On(i,r))}),t.isLeafNode()||t.forEachChild(Q,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(xn(i,r,o))}else s.trackChildChange(qt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Dn{constructor(e){this.indexedFilter_=new zr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Dn.getStartPost_(e),this.endPost_=Dn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new B(t,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=P.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return t.forEachChild(Q,(o,a)=>{r.matches(new B(o,a))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Fm{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Dn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new B(t,s))||(s=P.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,p)=>u(p,h)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const c=new B(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,c);if(d&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(xn(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(On(t,u));const v=a.updateImmediateChild(t,P.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(qt(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return s.isEmpty()?e:d&&o(l,c)>=0?(r!=null&&(r.trackChildChange(On(l.name,l.node)),r.trackChildChange(qt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,P.EMPTY_NODE)):e}}/**
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
 */class qr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zt}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Q}copy(){const e=new qr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Um(n){return n.loadsAllData()?new zr(n.getIndex()):n.hasLimit()?new Fm(n):new Dn(n)}function va(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Q?t="$priority":n.index_===Lm?t="$value":n.index_===Bt?t="$key":(b(n.index_ instanceof xm,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ee(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ee(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ee(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ee(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ee(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ya(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Q&&(e.i=n.index_.toString()),e}/**
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
 */class As extends wl{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=zn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=As.getListenId_(e,s),a={};this.listens_[o]=a;const c=va(e._queryParams);this.restRequest_(r+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,s),vt(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",i(h,null)}})}unlisten(e,t){const s=As.getListenId_(e,t);delete this.listens_[s]}get(e){const t=va(e._queryParams),s=e._path.toString(),i=new ve;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Rn(a.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Bm{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ps(){return{value:null,children:new Map}}function on(n,e,t){if(U(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=F(e);n.children.has(s)||n.children.set(s,Ps());const i=n.children.get(s);e=z(e),on(i,e,t)}}function ir(n,e){if(U(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Q,(s,i)=>{on(n,new j(s),i)}),ir(n,e)}}else if(n.children.size>0){const t=F(e);return e=z(e),n.children.has(t)&&ir(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function rr(n,e,t){n.value!==null?t(e,n.value):Hm(n,(s,i)=>{const r=new j(e.toString()+"/"+s);rr(i,r,t)})}function Hm(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Wm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ie(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const wa=10*1e3,Vm=30*1e3,jm=5*60*1e3;class Gm{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Wm(e);const s=wa+(Vm-wa)*Math.random();En(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ie(e,(i,r)=>{r>0&&Ee(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),En(this.reportStats_.bind(this),Math.floor(Math.random()*2*jm))}}/**
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
 */var we;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(we||(we={}));function Kr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Ms{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=we.ACK_USER_WRITE,this.source=Kr()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new j(e));return new Ms(W(),t,this.revert)}}else return b(F(this.path)===e,"operationForChild called for unrelated child."),new Ms(z(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ln{constructor(e,t){this.source=e,this.path=t,this.type=we.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new Ln(this.source,W()):new Ln(this.source,z(this.path))}}/**
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
 */class Et{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=we.OVERWRITE}operationForChild(e){return U(this.path)?new Et(this.source,W(),this.snap.getImmediateChild(e)):new Et(this.source,z(this.path),this.snap)}}/**
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
 */class Kt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=we.MERGE}operationForChild(e){if(U(this.path)){const t=this.children.subtree(new j(e));return t.isEmpty()?null:t.value?new Et(this.source,W(),t.value):new Kt(this.source,W(),t)}else return b(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Kt(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class tt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const t=F(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class zm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qm(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push($m(o.childName,o.snapshotNode))}),gn(n,i,"child_removed",e,s,t),gn(n,i,"child_added",e,s,t),gn(n,i,"child_moved",r,s,t),gn(n,i,"child_changed",e,s,t),gn(n,i,"value",e,s,t),i}function gn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>Ym(n,a,c)),o.forEach(a=>{const c=Km(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function Km(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Ym(n,e,t){if(e.childName==null||t.childName==null)throw en("Should only compare child_ events.");const s=new B(e.childName,e.snapshotNode),i=new B(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function si(n,e){return{eventCache:n,serverCache:e}}function In(n,e,t,s){return si(new tt(e,t,s),n.serverCache)}function Al(n,e,t,s){return si(n.eventCache,new tt(e,t,s))}function Os(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function It(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Mi;const Qm=()=>(Mi||(Mi=new he(xp)),Mi);class K{constructor(e,t=Qm()){this.value=e,this.children=t}static fromObject(e){let t=new K(null);return ie(e,(s,i)=>{t=t.set(new j(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:W(),value:this.value};if(U(e))return null;{const s=F(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(z(e),t);return r!=null?{path:X(new j(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const t=F(e),s=this.children.get(t);return s!==null?s.subtree(z(e)):new K(null)}}set(e,t){if(U(e))return new K(t,this.children);{const s=F(e),r=(this.children.get(s)||new K(null)).set(z(e),t),o=this.children.insert(s,r);return new K(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const t=F(e),s=this.children.get(t);if(s){const i=s.remove(z(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new K(null):new K(this.value,r)}else return this}}get(e){if(U(e))return this.value;{const t=F(e),s=this.children.get(t);return s?s.get(z(e)):null}}setTree(e,t){if(U(e))return t;{const s=F(e),r=(this.children.get(s)||new K(null)).setTree(z(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new K(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(X(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,W(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(U(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_(z(e),X(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,W(),t)}foreachOnPath_(e,t,s){if(U(e))return this;{this.value&&s(t,this.value);const i=F(e),r=this.children.get(i);return r?r.foreachOnPath_(z(e),X(t,i),s):new K(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(X(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class be{constructor(e){this.writeTree_=e}static empty(){return new be(new K(null))}}function Cn(n,e,t){if(U(e))return new be(new K(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ae(i,e);return r=r.updateChild(o,t),new be(n.writeTree_.set(i,r))}else{const i=new K(t),r=n.writeTree_.setTree(e,i);return new be(r)}}}function or(n,e,t){let s=n;return ie(t,(i,r)=>{s=Cn(s,X(e,i),r)}),s}function ba(n,e){if(U(e))return be.empty();{const t=n.writeTree_.setTree(e,new K(null));return new be(t)}}function ar(n,e){return St(n,e)!=null}function St(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ae(t.path,e)):null}function Ea(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Q,(s,i)=>{e.push(new B(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new B(s,i.value))}),e}function Xe(n,e){if(U(e))return n;{const t=St(n,e);return t!=null?new be(new K(t)):new be(n.writeTree_.subtree(e))}}function cr(n){return n.writeTree_.isEmpty()}function Yt(n,e){return Pl(W(),n.writeTree_,e)}function Pl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Pl(X(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(X(n,".priority"),s)),t}}/**
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
 */function ii(n,e){return Dl(e,n)}function Jm(n,e,t,s,i){b(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Cn(n.visibleWrites,e,t)),n.lastWriteId=s}function Xm(n,e,t,s){b(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=or(n.visibleWrites,e,t),n.lastWriteId=s}function Zm(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function eg(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);b(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&tg(a,s.path)?i=!1:me(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return ng(n),!0;if(s.snap)n.visibleWrites=ba(n.visibleWrites,s.path);else{const a=s.children;ie(a,c=>{n.visibleWrites=ba(n.visibleWrites,X(s.path,c))})}return!0}else return!1}function tg(n,e){if(n.snap)return me(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&me(X(n.path,t),e))return!0;return!1}function ng(n){n.visibleWrites=Ml(n.allWrites,sg,W()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function sg(n){return n.visible}function Ml(n,e,t){let s=be.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)me(t,o)?(a=ae(t,o),s=Cn(s,a,r.snap)):me(o,t)&&(a=ae(o,t),s=Cn(s,W(),r.snap.getChild(a)));else if(r.children){if(me(t,o))a=ae(t,o),s=or(s,a,r.children);else if(me(o,t))if(a=ae(o,t),U(a))s=or(s,W(),r.children);else{const c=vt(r.children,F(a));if(c){const l=c.getChild(z(a));s=Cn(s,W(),l)}}}else throw en("WriteRecord should have .snap or .children")}}return s}function Ol(n,e,t,s,i){if(!s&&!i){const r=St(n.visibleWrites,e);if(r!=null)return r;{const o=Xe(n.visibleWrites,e);if(cr(o))return t;if(t==null&&!ar(o,W()))return null;{const a=t||P.EMPTY_NODE;return Yt(o,a)}}}else{const r=Xe(n.visibleWrites,e);if(!i&&cr(r))return t;if(!i&&t==null&&!ar(r,W()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(me(l.path,e)||me(e,l.path))},a=Ml(n.allWrites,o,e),c=t||P.EMPTY_NODE;return Yt(a,c)}}}function ig(n,e,t){let s=P.EMPTY_NODE;const i=St(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Q,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Xe(n.visibleWrites,e);return t.forEachChild(Q,(o,a)=>{const c=Yt(Xe(r,new j(o)),a);s=s.updateImmediateChild(o,c)}),Ea(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Xe(n.visibleWrites,e);return Ea(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function rg(n,e,t,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=X(e,t);if(ar(n.visibleWrites,r))return null;{const o=Xe(n.visibleWrites,r);return cr(o)?i.getChild(t):Yt(o,i.getChild(t))}}function og(n,e,t,s){const i=X(e,t),r=St(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Xe(n.visibleWrites,i);return Yt(o,s.getNode().getImmediateChild(t))}else return null}function ag(n,e){return St(n.visibleWrites,e)}function cg(n,e,t,s,i,r,o){let a;const c=Xe(n.visibleWrites,e),l=St(c,W());if(l!=null)a=l;else if(t!=null)a=Yt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=h.getNext();for(;p&&d.length<i;)u(p,s)!==0&&d.push(p),p=h.getNext();return d}else return[]}function lg(){return{visibleWrites:be.empty(),allWrites:[],lastWriteId:-1}}function xs(n,e,t,s){return Ol(n.writeTree,n.treePath,e,t,s)}function Jr(n,e){return ig(n.writeTree,n.treePath,e)}function Ia(n,e,t,s){return rg(n.writeTree,n.treePath,e,t,s)}function Ds(n,e){return ag(n.writeTree,X(n.treePath,e))}function ug(n,e,t,s,i,r){return cg(n.writeTree,n.treePath,e,t,s,i,r)}function Xr(n,e,t){return og(n.writeTree,n.treePath,e,t)}function xl(n,e){return Dl(X(n.treePath,e),n.writeTree)}function Dl(n,e){return{treePath:n,writeTree:e}}/**
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
 */class dg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;b(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,xn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,On(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,qt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,xn(s,e.snapshotNode,i.oldSnap));else throw en("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class hg{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Ll=new hg;class Zr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new tt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:It(this.viewCache_),r=ug(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function fg(n){return{filter:n}}function pg(n,e){b(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function mg(n,e,t,s,i){const r=new dg;let o,a;if(t.type===we.OVERWRITE){const l=t;l.source.fromUser?o=lr(n,e,l.path,l.snap,s,i,r):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!U(l.path),o=Ls(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===we.MERGE){const l=t;l.source.fromUser?o=_g(n,e,l.path,l.children,s,i,r):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ur(n,e,l.path,l.children,s,i,a,r))}else if(t.type===we.ACK_USER_WRITE){const l=t;l.revert?o=wg(n,e,l.path,s,i,r):o=vg(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===we.LISTEN_COMPLETE)o=yg(n,e,t.path,s,r);else throw en("Unknown operation type: "+t.type);const c=r.getChanges();return gg(e,o,c),{viewCache:o,changes:c}}function gg(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Os(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Nl(Os(e)))}}function $l(n,e,t,s,i,r){const o=e.eventCache;if(Ds(s,t)!=null)return e;{let a,c;if(U(t))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=It(e),d=l instanceof P?l:P.EMPTY_NODE,u=Jr(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=xs(s,It(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=F(t);if(l===".priority"){b(et(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=Ia(s,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=z(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=Ia(s,t,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=Xr(s,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,i,r):a=o.getNode()}}return In(e,a,o.isFullyInitialized()||U(t),n.filter.filtersNodes())}}function Ls(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if(U(t))l=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,s);l=d.updateFullNode(c.getNode(),p,null)}else{const p=F(t);if(!c.isCompleteForPath(t)&&et(t)>1)return e;const m=z(t),I=c.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?l=d.updatePriority(c.getNode(),I):l=d.updateChild(c.getNode(),p,I,m,Ll,null)}const u=Al(e,l,c.isFullyInitialized()||U(t),d.filtersNodes()),h=new Zr(i,u,r);return $l(n,u,t,i,h,a)}function lr(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const d=new Zr(i,e,r);if(U(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=In(e,l,!0,n.filter.filtersNodes());else{const u=F(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=In(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=z(t),p=a.getNode().getImmediateChild(u);let m;if(U(h))m=s;else{const v=d.getCompleteChild(u);v!=null?Wr(h)===".priority"&&v.getChild(El(h)).isEmpty()?m=v:m=v.updateChild(h,s):m=P.EMPTY_NODE}if(p.equals(m))c=e;else{const v=n.filter.updateChild(a.getNode(),u,m,h,d,o);c=In(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Ca(n,e){return n.eventCache.isCompleteForChild(e)}function _g(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const d=X(t,c);Ca(e,F(d))&&(a=lr(n,a,d,l,i,r,o))}),s.foreach((c,l)=>{const d=X(t,c);Ca(e,F(d))||(a=lr(n,a,d,l,i,r,o))}),a}function ka(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ur(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;U(t)?l=s:l=new K(null).setTree(t,s);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),m=ka(n,p,h);c=Ls(n,c,new j(u),m,i,r,o,a)}}),l.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!p){const m=e.serverCache.getNode().getImmediateChild(u),v=ka(n,m,h);c=Ls(n,c,new j(u),v,i,r,o,a)}}),c}function vg(n,e,t,s,i,r,o){if(Ds(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(U(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ls(n,e,t,c.getNode().getChild(t),i,r,a,o);if(U(t)){let l=new K(null);return c.getNode().forEachChild(Bt,(d,u)=>{l=l.set(new j(d),u)}),ur(n,e,t,l,i,r,a,o)}else return e}else{let l=new K(null);return s.foreach((d,u)=>{const h=X(t,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),ur(n,e,t,l,i,r,a,o)}}function yg(n,e,t,s,i){const r=e.serverCache,o=Al(e,r.getNode(),r.isFullyInitialized()||U(t),r.isFiltered());return $l(n,o,t,s,Ll,i)}function wg(n,e,t,s,i,r){let o;if(Ds(s,t)!=null)return e;{const a=new Zr(s,e,i),c=e.eventCache.getNode();let l;if(U(t)||F(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=xs(s,It(e));else{const u=e.serverCache.getNode();b(u instanceof P,"serverChildren would be complete if leaf node"),d=Jr(s,u)}d=d,l=n.filter.updateFullNode(c,d,r)}else{const d=F(t);let u=Xr(s,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,z(t),a,r):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,P.EMPTY_NODE,z(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xs(s,It(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Ds(s,W())!=null,In(e,l,o,n.filter.filtersNodes())}}/**
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
 */class bg{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new zr(s.getIndex()),r=Um(s);this.processor_=fg(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(P.EMPTY_NODE,a.getNode(),null),d=new tt(c,o.isFullyInitialized(),i.filtersNodes()),u=new tt(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=si(u,d),this.eventGenerator_=new zm(this.query_)}get query(){return this.query_}}function Eg(n){return n.viewCache_.serverCache.getNode()}function Ig(n){return Os(n.viewCache_)}function Cg(n,e){const t=It(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!U(e)&&!t.getImmediateChild(F(e)).isEmpty())?t.getChild(e):null}function Sa(n){return n.eventRegistrations_.length===0}function kg(n,e){n.eventRegistrations_.push(e)}function Ta(n,e,t){const s=[];if(t){b(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Ra(n,e,t,s){e.type===we.MERGE&&e.source.queryId!==null&&(b(It(n.viewCache_),"We should always have a full cache before handling merges"),b(Os(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=mg(n.processor_,i,e,t,s);return pg(n.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Fl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Sg(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Q,(r,o)=>{s.push(qt(r,o))}),t.isFullyInitialized()&&s.push(Nl(t.getNode())),Fl(n,s,t.getNode(),e)}function Fl(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return qm(n.eventGenerator_,e,t,i)}/**
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
 */let $s;class Ul{constructor(){this.views=new Map}}function Tg(n){b(!$s,"__referenceConstructor has already been defined"),$s=n}function Rg(){return b($s,"Reference.ts has not been loaded"),$s}function Ng(n){return n.views.size===0}function eo(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Ra(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Ra(o,e,t,s));return r}}function Bl(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=xs(t,i?s:null),c=!1;a?c=!0:s instanceof P?(a=Jr(t,s),c=!1):(a=P.EMPTY_NODE,c=!1);const l=si(new tt(a,c,!1),new tt(s,i,!1));return new bg(e,l)}return o}function Ag(n,e,t,s,i,r){const o=Bl(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),kg(o,t),Sg(o,t)}function Pg(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=nt(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(Ta(l,t,s)),Sa(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(Ta(c,t,s)),Sa(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!nt(n)&&r.push(new(Rg())(e._repo,e._path)),{removed:r,events:o}}function Hl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ze(n,e){let t=null;for(const s of n.views.values())t=t||Cg(s,e);return t}function Wl(n,e){if(e._queryParams.loadsAllData())return ri(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Vl(n,e){return Wl(n,e)!=null}function nt(n){return ri(n)!=null}function ri(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Fs;function Mg(n){b(!Fs,"__referenceConstructor has already been defined"),Fs=n}function Og(){return b(Fs,"Reference.ts has not been loaded"),Fs}let xg=1;class Na{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=lg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function to(n,e,t,s,i){return Jm(n.pendingWriteTree_,e,t,s,i),i?an(n,new Et(Kr(),e,t)):[]}function Dg(n,e,t,s){Xm(n.pendingWriteTree_,e,t,s);const i=K.fromObject(t);return an(n,new Kt(Kr(),e,i))}function qe(n,e,t=!1){const s=Zm(n.pendingWriteTree_,e);if(eg(n.pendingWriteTree_,e)){let r=new K(null);return s.snap!=null?r=r.set(W(),!0):ie(s.children,o=>{r=r.set(new j(o),!0)}),an(n,new Ms(s.path,r,t))}else return[]}function Kn(n,e,t){return an(n,new Et(Yr(),e,t))}function Lg(n,e,t){const s=K.fromObject(t);return an(n,new Kt(Yr(),e,s))}function $g(n,e){return an(n,new Ln(Yr(),e))}function Fg(n,e,t){const s=no(n,t);if(s){const i=so(s),r=i.path,o=i.queryId,a=ae(r,e),c=new Ln(Qr(o),a);return io(n,r,c)}else return[]}function Us(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Vl(o,e))){const c=Pg(o,e,t,s);Ng(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(h,p)=>nt(p));if(d&&!u){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=Hg(h);for(let m=0;m<p.length;++m){const v=p[m],I=v.query,E=ql(n,v);n.listenProvider_.startListening(kn(I),$n(n,I),E.hashFn,E.onComplete)}}}!u&&l.length>0&&!s&&(d?n.listenProvider_.stopListening(kn(e),null):l.forEach(h=>{const p=n.queryToTagMap.get(ai(h));n.listenProvider_.stopListening(kn(h),p)}))}Wg(n,l)}return a}function jl(n,e,t,s){const i=no(n,s);if(i!=null){const r=so(i),o=r.path,a=r.queryId,c=ae(o,e),l=new Et(Qr(a),c,t);return io(n,o,l)}else return[]}function Ug(n,e,t,s){const i=no(n,s);if(i){const r=so(i),o=r.path,a=r.queryId,c=ae(o,e),l=K.fromObject(t),d=new Kt(Qr(a),c,l);return io(n,o,d)}else return[]}function dr(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(h,p)=>{const m=ae(h,i);r=r||Ze(p,m),o=o||nt(p)});let a=n.syncPointTree_.get(i);a?(o=o||nt(a),r=r||Ze(a,W())):(a=new Ul,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=P.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,m)=>{const v=Ze(m,W());v&&(r=r.updateImmediateChild(p,v))}));const l=Vl(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=ai(e);b(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=Vg();n.queryToTagMap.set(h,p),n.tagToQueryMap.set(p,h)}const d=ii(n.pendingWriteTree_,i);let u=Ag(a,e,t,d,r,c);if(!l&&!o&&!s){const h=Wl(a,e);u=u.concat(jg(n,e,h))}return u}function oi(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=ae(o,e),l=Ze(a,c);if(l)return l});return Ol(i,e,r,t,!0)}function Bg(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const u=ae(l,t);s=s||Ze(d,u)});let i=n.syncPointTree_.get(t);i?s=s||Ze(i,W()):(i=new Ul,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new tt(s,!0,!1):null,a=ii(n.pendingWriteTree_,e._path),c=Bl(i,e,a,r?o.getNode():P.EMPTY_NODE,r);return Ig(c)}function an(n,e){return Gl(e,n.syncPointTree_,null,ii(n.pendingWriteTree_,W()))}function Gl(n,e,t,s){if(U(n.path))return zl(n,e,t,s);{const i=e.get(W());t==null&&i!=null&&(t=Ze(i,W()));let r=[];const o=F(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=xl(s,o);r=r.concat(Gl(a,c,l,d))}return i&&(r=r.concat(eo(i,n,s,t))),r}}function zl(n,e,t,s){const i=e.get(W());t==null&&i!=null&&(t=Ze(i,W()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=xl(s,o),d=n.operationForChild(o);d&&(r=r.concat(zl(d,a,c,l)))}),i&&(r=r.concat(eo(i,n,s,t))),r}function ql(n,e){const t=e.query,s=$n(n,t);return{hashFn:()=>(Eg(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Fg(n,t._path,s):$g(n,t._path);{const r=$p(i,t);return Us(n,t,null,r)}}}}function $n(n,e){const t=ai(e);return n.queryToTagMap.get(t)}function ai(n){return n._path.toString()+"$"+n._queryIdentifier}function no(n,e){return n.tagToQueryMap.get(e)}function so(n){const e=n.indexOf("$");return b(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new j(n.substr(0,e))}}function io(n,e,t){const s=n.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=ii(n.pendingWriteTree_,e);return eo(s,t,i,null)}function Hg(n){return n.fold((e,t,s)=>{if(t&&nt(t))return[ri(t)];{let i=[];return t&&(i=Hl(t)),ie(s,(r,o)=>{i=i.concat(o)}),i}})}function kn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Og())(n._repo,n._path):n}function Wg(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=ai(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Vg(){return xg++}function jg(n,e,t){const s=e._path,i=$n(n,e),r=ql(n,t),o=n.listenProvider_.startListening(kn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)b(!nt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!U(l)&&d&&nt(d))return[ri(d).query];{let h=[];return d&&(h=h.concat(Hl(d).map(p=>p.query))),ie(u,(p,m)=>{h=h.concat(m)}),h}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(kn(d),$n(n,d))}}return o}/**
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
 */class ro{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ro(t)}node(){return this.node_}}class oo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=X(this.path_,e);return new oo(this.syncTree_,t)}node(){return oi(this.syncTree_,this.path_)}}const Gg=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Aa=function(n,e,t){if(!n||typeof n!="object")return n;if(b(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return zg(n[".sv"],e,t);if(typeof n[".sv"]=="object")return qg(n[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},zg=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:b(!1,"Unexpected server value: "+n)}},qg=function(n,e,t){n.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Kl=function(n,e,t,s){return co(e,new oo(t,n),s)},ao=function(n,e,t){return co(n,new ro(e),t)};function co(n,e,t){const s=n.getPriority().val(),i=Aa(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Aa(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new te(a,J(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new te(i))),o.forEachChild(Q,(a,c)=>{const l=co(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class lo{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ci(n,e){let t=e instanceof j?e:new j(e),s=n,i=F(t);for(;i!==null;){const r=vt(s.node.children,i)||{children:{},childCount:0};s=new lo(i,s,r),t=z(t),i=F(t)}return s}function Tt(n){return n.node.value}function uo(n,e){n.node.value=e,hr(n)}function Yl(n){return n.node.childCount>0}function Kg(n){return Tt(n)===void 0&&!Yl(n)}function li(n,e){ie(n.node.children,(t,s)=>{e(new lo(t,n,s))})}function Ql(n,e,t,s){t&&e(n),li(n,i=>{Ql(i,e,!0)})}function Yg(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Yn(n){return new j(n.parent===null?n.name:Yn(n.parent)+"/"+n.name)}function hr(n){n.parent!==null&&Qg(n.parent,n.name,n)}function Qg(n,e,t){const s=Kg(t),i=Ee(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,hr(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,hr(n))}/**
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
 */const Jg=/[\[\].#$\/\u0000-\u001F\u007F]/,Xg=/[\[\].#$\u0000-\u001F\u007F]/,Oi=10*1024*1024,ho=function(n){return typeof n=="string"&&n.length!==0&&!Jg.test(n)},Jl=function(n){return typeof n=="string"&&n.length!==0&&!Xg.test(n)},Zg=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Jl(n)},fo=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ti(n)||n&&typeof n=="object"&&Ee(n,".sv")},Bs=function(n,e,t,s){s&&e===void 0||Qn(Vt(n,"value"),e,t)},Qn=function(n,e,t){const s=t instanceof j?new _m(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ut(s));if(typeof e=="function")throw new Error(n+"contains a function "+ut(s)+" with contents = "+e.toString());if(ti(e))throw new Error(n+"contains "+e.toString()+" "+ut(s));if(typeof e=="string"&&e.length>Oi/3&&Xs(e)>Oi)throw new Error(n+"contains a string greater than "+Oi+" utf8 bytes "+ut(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ie(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ho(o)))throw new Error(n+" contains an invalid key ("+o+") "+ut(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vm(s,o),Qn(n,a,s),ym(s)}),i&&r)throw new Error(n+' contains ".value" child '+ut(s)+" in addition to actual children.")}},e_=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Mn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ho(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gm);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&me(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Xl=function(n,e,t,s){const i=Vt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];ie(e,(o,a)=>{const c=new j(o);if(Qn(i,a,X(t,c)),Wr(c)===".priority"&&!fo(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),e_(i,r)},t_=function(n,e,t){if(ti(e))throw new Error(Vt(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!fo(e))throw new Error(Vt(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Zl=function(n,e,t,s){if(!Jl(t))throw new Error(Vt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},n_=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zl(n,e,t)},Ke=function(n,e){if(F(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},s_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ho(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Zg(t))throw new Error(Vt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class i_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ui(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Vr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function eu(n,e,t){ui(n,t),tu(n,s=>Vr(s,e))}function fe(n,e,t){ui(n,t),tu(n,s=>me(s,e)||me(e,s))}function tu(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(r_(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function r_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();bn&&se("event: "+t.toString()),rn(s)}}}/**
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
 */const o_="repo_interrupt",a_=25;class c_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new i_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ps(),this.transactionQueueTree_=new lo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function l_(n,e,t){if(n.stats_=Br(n.repoInfo_),n.forceRestClient_||Hp())n.server_=new As(n.repoInfo_,(s,i,r,o)=>{Pa(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ma(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ee(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Oe(n.repoInfo_,e,(s,i,r,o)=>{Pa(n,s,i,r,o)},s=>{Ma(n,s)},s=>{u_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=zp(n.repoInfo_,()=>new Gm(n.stats_,n.server_)),n.infoData_=new Bm,n.infoSyncTree_=new Na({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Kn(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),po(n,"connected",!1),n.serverSyncTree_=new Na({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);fe(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function nu(n){const t=n.infoData_.getNode(new j(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Jn(n){return Gg({timestamp:nu(n)})}function Pa(n,e,t,s,i){n.dataUpdateCount++;const r=new j(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=ys(t,l=>J(l));o=Ug(n.serverSyncTree_,r,c,i)}else{const c=J(t);o=jl(n.serverSyncTree_,r,c,i)}else if(s){const c=ys(t,l=>J(l));o=Lg(n.serverSyncTree_,r,c)}else{const c=J(t);o=Kn(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Qt(n,r)),fe(n.eventQueue_,a,o)}function Ma(n,e){po(n,"connected",e),e===!1&&p_(n)}function u_(n,e){ie(e,(t,s)=>{po(n,t,s)})}function po(n,e,t){const s=new j("/.info/"+e),i=J(t);n.infoData_.updateSnapshot(s,i);const r=Kn(n.infoSyncTree_,s,i);fe(n.eventQueue_,s,r)}function di(n){return n.nextWriteId_++}function d_(n,e,t){const s=Bg(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=J(i).withIndex(e._queryParams.getIndex());dr(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Kn(n.serverSyncTree_,e._path,r);else{const a=$n(n.serverSyncTree_,e);o=jl(n.serverSyncTree_,e._path,r,a)}return fe(n.eventQueue_,e._path,o),Us(n.serverSyncTree_,e,t,null,!0),r},i=>(cn(n,"get for query "+ee(e)+" failed: "+i),Promise.reject(new Error(i))))}function h_(n,e,t,s,i){cn(n,"set",{path:e.toString(),value:t,priority:s});const r=Jn(n),o=J(t,s),a=oi(n.serverSyncTree_,e),c=ao(o,a,r),l=di(n),d=to(n.serverSyncTree_,e,c,l,!0);ui(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,p)=>{const m=h==="ok";m||ce("set at "+e+" failed: "+h);const v=qe(n.serverSyncTree_,l,!m);fe(n.eventQueue_,e,v),st(n,i,h,p)});const u=go(n,e);Qt(n,u),fe(n.eventQueue_,u,[])}function f_(n,e,t,s){cn(n,"update",{path:e.toString(),value:t});let i=!0;const r=Jn(n),o={};if(ie(t,(a,c)=>{i=!1,o[a]=Kl(X(e,a),J(c),n.serverSyncTree_,r)}),i)se("update() called with empty data.  Don't do anything."),st(n,s,"ok",void 0);else{const a=di(n),c=Dg(n.serverSyncTree_,e,o,a);ui(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{const u=l==="ok";u||ce("update at "+e+" failed: "+l);const h=qe(n.serverSyncTree_,a,!u),p=h.length>0?Qt(n,e):e;fe(n.eventQueue_,p,h),st(n,s,l,d)}),ie(t,l=>{const d=go(n,X(e,l));Qt(n,d)}),fe(n.eventQueue_,e,[])}}function p_(n){cn(n,"onDisconnectEvents");const e=Jn(n),t=Ps();rr(n.onDisconnect_,W(),(i,r)=>{const o=Kl(i,r,n.serverSyncTree_,e);on(t,i,o)});let s=[];rr(t,W(),(i,r)=>{s=s.concat(Kn(n.serverSyncTree_,i,r));const o=go(n,i);Qt(n,o)}),n.onDisconnect_=Ps(),fe(n.eventQueue_,W(),s)}function m_(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&ir(n.onDisconnect_,e),st(n,t,s,i)})}function Oa(n,e,t,s){const i=J(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&on(n.onDisconnect_,e,i),st(n,s,r,o)})}function g_(n,e,t,s,i){const r=J(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&on(n.onDisconnect_,e,r),st(n,i,o,a)})}function __(n,e,t,s){if(vs(t)){se("onDisconnect().update() called with empty data.  Don't do anything."),st(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&ie(t,(o,a)=>{const c=J(a);on(n.onDisconnect_,X(e,o),c)}),st(n,s,i,r)})}function v_(n,e,t){let s;F(e._path)===".info"?s=dr(n.infoSyncTree_,e,t):s=dr(n.serverSyncTree_,e,t),eu(n.eventQueue_,e._path,s)}function fr(n,e,t){let s;F(e._path)===".info"?s=Us(n.infoSyncTree_,e,t):s=Us(n.serverSyncTree_,e,t),eu(n.eventQueue_,e._path,s)}function y_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(o_)}function cn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),se(t,...e)}function st(n,e,t,s){e&&rn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function w_(n,e,t,s,i,r){cn(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:el(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=mo(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Qn("transaction failed: Data returned ",c,o.path),o.status=0;const l=ci(n.transactionQueueTree_,e),d=Tt(l)||[];d.push(o),uo(l,d);let u;typeof c=="object"&&c!==null&&Ee(c,".priority")?(u=vt(c,".priority"),b(fo(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(oi(n.serverSyncTree_,e)||P.EMPTY_NODE).getPriority().val();const h=Jn(n),p=J(c,u),m=ao(p,a,h);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=m,o.currentWriteId=di(n);const v=to(n.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);fe(n.eventQueue_,e,v),hi(n,n.transactionQueueTree_)}}function mo(n,e,t){return oi(n.serverSyncTree_,e,t)||P.EMPTY_NODE}function hi(n,e=n.transactionQueueTree_){if(e||fi(n,e),Tt(e)){const t=iu(n,e);b(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&b_(n,Yn(e),t)}else Yl(e)&&li(e,t=>{hi(n,t)})}function b_(n,e,t){const s=t.map(l=>l.currentWriteId),i=mo(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const d=t[l];b(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=ae(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{cn(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(qe(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();fi(n,ci(n.transactionQueueTree_,e)),hi(n,n.transactionQueueTree_),fe(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)rn(u[h])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ce("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}Qt(n,e)}},o)}function Qt(n,e){const t=su(n,e),s=Yn(t),i=iu(n,t);return E_(n,i,s),s}function E_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ae(t,c.path);let d=!1,u;if(b(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,i=i.concat(qe(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=a_)d=!0,u="maxretry",i=i.concat(qe(n.serverSyncTree_,c.currentWriteId,!0));else{const h=mo(n,c.path,o);c.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){Qn("transaction failed: Data returned ",p,c.path);let m=J(p);typeof p=="object"&&p!=null&&Ee(p,".priority")||(m=m.updatePriority(h.getPriority()));const I=c.currentWriteId,E=Jn(n),_=ao(m,h,E);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=_,c.currentWriteId=di(n),o.splice(o.indexOf(I),1),i=i.concat(to(n.serverSyncTree_,c.path,_,c.currentWriteId,c.applyLocally)),i=i.concat(qe(n.serverSyncTree_,I,!0))}else d=!0,u="nodata",i=i.concat(qe(n.serverSyncTree_,c.currentWriteId,!0))}fe(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}fi(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)rn(s[a]);hi(n,n.transactionQueueTree_)}function su(n,e){let t,s=n.transactionQueueTree_;for(t=F(e);t!==null&&Tt(s)===void 0;)s=ci(s,t),e=z(e),t=F(e);return s}function iu(n,e){const t=[];return ru(n,e,t),t.sort((s,i)=>s.order-i.order),t}function ru(n,e,t){const s=Tt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);li(e,i=>{ru(n,i,t)})}function fi(n,e){const t=Tt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,uo(e,t.length>0?t:void 0)}li(e,s=>{fi(n,s)})}function go(n,e){const t=Yn(su(n,e)),s=ci(n.transactionQueueTree_,e);return Yg(s,i=>{xi(n,i)}),xi(n,s),Ql(s,i=>{xi(n,i)}),t}function xi(n,e){const t=Tt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(b(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(qe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?uo(e,void 0):t.length=r+1,fe(n.eventQueue_,Yn(e),i);for(let o=0;o<s.length;o++)rn(s[o])}}/**
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
 */function I_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function C_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ce(`Invalid query segment '${t}' in query '${n}'`)}return e}const xa=function(n,e){const t=k_(n),s=t.namespace;t.domain==="firebase.com"&&Fe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Fe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Mp();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new fl(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new j(t.pathString)}},k_=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(i=I_(n.substring(d,u)));const h=C_(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Da="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",S_=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Da.charAt(t%64),t=Math.floor(t/64);b(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Da.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class T_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ee(this.snapshot.exportVal())}}class R_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ou{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class N_{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ve;return m_(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ke("OnDisconnect.remove",this._path);const e=new ve;return Oa(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ke("OnDisconnect.set",this._path),Bs("OnDisconnect.set",e,this._path,!1);const t=new ve;return Oa(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ke("OnDisconnect.setWithPriority",this._path),Bs("OnDisconnect.setWithPriority",e,this._path,!1),t_("OnDisconnect.setWithPriority",t);const s=new ve;return g_(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Ke("OnDisconnect.update",this._path),Xl("OnDisconnect.update",e,this._path);const t=new ve;return __(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class _o{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return U(this._path)?null:Wr(this._path)}get ref(){return new Te(this._repo,this._path)}get _queryIdentifier(){const e=ya(this._queryParams),t=Fr(e);return t==="{}"?"default":t}get _queryObject(){return ya(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof _o))return!1;const t=this._repo===e._repo,s=Vr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mm(this._path)}}class Te extends _o{constructor(e,t){super(e,t,new qr,!1)}get parent(){const e=El(this._path);return e===null?null:new Te(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new j(e),s=Fn(this.ref,e);return new Jt(this._node.getChild(t),s,Q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Jt(i,Fn(this.ref,s),Q)))}hasChild(e){const t=new j(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $(n,e){return n=oe(n),n._checkNotDeleted("ref"),e!==void 0?Fn(n._root,e):n._root}function Fn(n,e){return n=oe(n),F(n._path)===null?n_("child","path",e):Zl("child","path",e),new Te(n._repo,X(n._path,e))}function A_(n){return n=oe(n),new N_(n._repo,n._path)}function au(n,e){n=oe(n),Ke("push",n._path),Bs("push",e,n._path,!0);const t=nu(n._repo),s=S_(t),i=Fn(n,s),r=Fn(n,s);let o;return e!=null?o=ln(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function _n(n){return Ke("remove",n._path),ln(n,null)}function ln(n,e){n=oe(n),Ke("set",n._path),Bs("set",e,n._path,!1);const t=new ve;return h_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function it(n,e){Xl("update",e,n._path);const t=new ve;return f_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function vo(n){n=oe(n);const e=new ou(()=>{}),t=new pi(e);return d_(n._repo,n,t).then(s=>new Jt(s,new Te(n._repo,n._path),n._queryParams.getIndex()))}class pi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new T_("value",this,new Jt(e.snapshotNode,new Te(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new R_(this,e,t):null}matches(e){return e instanceof pi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function P_(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(d,u)=>{fr(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new ou(t,r||void 0),a=new pi(o);return v_(n._repo,n,a),()=>fr(n._repo,n,a)}function un(n,e,t,s){return P_(n,"value",e,t,s)}function mi(n,e,t){fr(n._repo,n,null)}Tg(Te);Mg(Te);/**
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
 */const M_="FIREBASE_DATABASE_EMULATOR_HOST",pr={};let O_=!1;function x_(n,e,t,s){n.repoInfo_=new fl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function D_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Fe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),se("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=xa(r,i),a=o.repoInfo,c;typeof process<"u"&&ta&&(c=ta[M_]),c?(r=`http://${c}?ns=${a.namespace}`,o=xa(r,i),a=o.repoInfo):o.repoInfo.secure;const l=new Vp(n.name,n.options,e);s_("Invalid Firebase Database URL",o),U(o.path)||Fe("Database URL must point to the root of a Firebase Database (not including a child path).");const d=$_(a,n,l,new Wp(n.name,t));return new F_(d,n)}function L_(n,e){const t=pr[e];(!t||t[n.key]!==n)&&Fe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),y_(n),delete t[n.key]}function $_(n,e,t,s){let i=pr[e.name];i||(i={},pr[e.name]=i);let r=i[n.toURLString()];return r&&Fe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new c_(n,O_,t,s),i[n.toURLString()]=r,r}class F_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(l_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Te(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(L_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fe("Cannot call "+e+" on a deleted database.")}}function U_(n=_c(),e){const t=Tr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=td("database");s&&B_(t,...s)}return t}function B_(n,e,t,s={}){n=oe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Fe("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Fe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new us(us.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:nd(s.mockUserToken,n.app.options.projectId);r=new us(o)}x_(i,e,t,r)}/**
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
 */function H_(n){Tp(nn),jt(new yt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return D_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Je(na,sa,n),Je(na,sa,"esm2017")}/**
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
 */class W_{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function le(n,e,t){var s;if(n=oe(n),Ke("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new ve,o=(c,l,d)=>{let u=null;c?r.reject(c):(u=new Jt(d,new Te(n._repo,n._path),Q),r.resolve(new W_(l,u)))},a=un(n,()=>{});return w_(n._repo,n._path,e,o,a,i),r.promise}Oe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Oe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};H_();const vn={apiKey:"AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",authDomain:"market-6e66a.firebaseapp.com",databaseURL:"https://market-6e66a-default-rtdb.firebaseio.com",projectId:"market-6e66a",storageBucket:"market-6e66a.firebasestorage.app",messagingSenderId:"402312269082",appId:"1:402312269082:web:cf304afc54057ea162b0a3"},cu=!!vn.apiKey&&!vn.apiKey.startsWith("여기에")&&!!vn.databaseURL&&!vn.databaseURL.startsWith("여기에");let Di=null,yo=null,L=null;try{cu&&(Di=gc(vn),yo=kp(Di),L=U_(Di))}catch(n){console.error("[firebase] 초기화 실패:",n)}const Ht=1e7,Ue=10,mr=4e3,V_=.008,La=3e4,j_=4e-5,$a=.015,G_=.55,lu=15e-5,z_=.0018,q_=3*60*1e3,K_=["달빛전자","구름소프트","번개모빌리티","바다식품","별빛바이오","한입게임즈","초록에너지","솜사탕유통","무지개항공","도토리금융","은하반도체","포근화학","두근로보틱스","새벽엔터","고래물산","민들레제약"],Y_=["떡상테크","유니콘소프트","미래모빌","첫걸음바이오","샛별에너지","루키게임즈","신화엔터","퀀텀반도체"],Fa=["개미부대","왕개미","큰손","수상한세력","외국인","기관","전설의단타","스캘퍼","장기투자자","물타기달인"];function ft(n,e){return Math.floor(Math.random()*(e-n+1))+n}function Y(n,e){return Math.random()*(e-n)+n}function _e(n,e,t){return Math.max(e,Math.min(t,n))}function Q_(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function J_(n,e,t={}){const s=t.type||"stock",i=t.role||null;e=Ce(Math.max(Ue,e));let r=1,o=1;return s==="stock"?i==="leader"?(r=Y(.8,1.4),o=Y(2,3)):i==="sub"?(r=Y(.9,1.6),o=Y(1.2,2.2)):i==="related"?(r=Y(.7,2),o=Y(.6,1.8)):(r=Y(.5,2.4),o=Y(.3,1.2)):s==="preferred"?(r=Y(.4,.8),o=Y(.5,1.1)):s==="etf"?(r=Y(.5,.8),o=Y(1.5,2.5)):s==="reit"?(r=Y(.35,.7),o=Y(.6,1.2)):s==="bond"?(r=Y(.2,.45),o=Y(.8,1.4)):s==="spac"?(r=Y(.2,.5),o=Y(.4,.9)):s==="commodity"?(r=Y(.9,1.8),o=Y(1,2)):(s==="inverse"||s==="leverage")&&(r=1,o=Y(1.5,2.5)),{name:n,type:s,role:i||"",sector:t.sector||"",link:t.link||"",price:e,previousPrice:e,basePrice:e,open:e,high:e,low:e,changeRate:0,volume:0,value:0,pressure:0,trend:0,volat:+r.toFixed(2),activ:+o.toFixed(2),heat:0,news:""}}function gi(n){return{preferred:"우선주",etf:"ETF",reit:"리츠",spac:"SPAC",inverse:"인버스",leverage:"레버리지",bond:"채권ETF",commodity:"원자재"}[n]||""}function uu(n){return{leader:"대장주",sub:"부대장주",related:"관련주",normal:"일반주"}[n]||""}function Li(n){return!n||n==="stock"}function _i(n){return Math.round(n*1.3)}function vi(n){return Math.max(Ue,Math.round(n*.7))}function du(n){return n<2e3?1:n<5e3?5:n<2e4?10:n<5e4?50:n<2e5?100:500}function Ce(n){const e=du(n);return Math.round(n/e)*e}function $i(n){return _e((n.pressure||0)*j_/(n.activ||1),-$a,$a)}async function X_(n,e){const t=e.stocks||{},s=Object.keys(t);if(s.length===0)return;let i=null,r=0,o="";const a=Date.now(),c={},l=[];function d(E){const _=(E.activ||1)*(1+(E.heat||0));let y=0,T=0;const w=_e(.35+_*.2,.25,.97);if(Math.random()<w){const C=ft(1,Math.max(2,Math.round(1+_*3)));for(let M=0;M<C;M++){const N=ft(10,Math.round(60+_*220)),g=.5+_e((E.trend||0)*15,-.3,.3),k=Math.random()<g;y+=k?N:-N,T+=N,l.push({nickname:Fa[ft(0,Fa.length-1)],type:k?"buy":"sell",stockName:E.name,qty:N,price:E.price,time:a})}}return T+=Math.round(ft(300,2500)*_),{botNet:y,botVolume:T}}function u(E,_,y,T,w={}){const C=_.basePrice||_.price,M=C?(_.price-C)/C:0;y+=_e(-M*.01,-.006,.006);let N=Ce(_.price*(1+y));N=_e(N,vi(C),_i(C)),N=Math.max(Ue,N);const g=`stocks/${E}/`;if(c[g+"previousPrice"]=_.price,c[g+"price"]=N,c[g+"changeRate"]=+((N-C)/C*100).toFixed(2),c[g+"volume"]=(_.volume||0)+T,c[g+"value"]=(_.value||0)+T*N,N>(_.high||_.price)&&(c[g+"high"]=N),N<(_.low||_.price)&&(c[g+"low"]=N),(_.pressure||0)!==0){const k=(_.pressure||0)*G_;c[g+"pressure"]=Math.abs(k)<1?0:+k.toFixed(2)}return w.trend!=null&&(c[g+"trend"]=+w.trend.toFixed(5)),w.heat!=null&&(w.heat>.001||(_.heat||0)>.001)&&(c[g+"heat"]=+w.heat.toFixed(3)),w.news!=null&&(c[g+"news"]=w.news),N/_.price-1}function h(E){const _=E.volat||1;let y=(E.heat||0)*.92;Math.random()<.006&&(y=_e(y+Y(.3,1),0,1.6));const T=_*(1+y*.5),w=_e((E.trend||0)*.96+(Math.random()-.5)*8e-4*T,-.0025*(1+y*.5),.0025*(1+y*.5));let C=(Math.random()-.5)*.0016*T+w;return Math.random()<.005&&(C+=(Math.random()-.5)*.012*(1+y*.4)),{own:C,trend:w,heat:y}}const p={},m={},v=[];for(const E of s){const _=t[E];if(!Li(_.type)||_.role!=="leader")continue;const{own:y,trend:T,heat:w}=h(_),{botNet:C,botVolume:M}=d({..._,heat:w});let N=y+$i(_)+_e(C*2e-4,-.008,.008);E===i&&(N+=r);const g=u(E,_,N,M,{trend:T,heat:w,news:E===i?o:null});p[E]=g,m[_.sector]=g,v.push(g)}for(const E of s){const _=t[E];if(!Li(_.type)||_.role==="leader")continue;const y=_.role==="related"?.7:_.role==="sub"?.45:.2,T=m[_.sector]||0,{own:w,trend:C,heat:M}=h(_),{botNet:N,botVolume:g}=d({..._,heat:M});let k=T*y+w*(1-y*.5);k+=$i(_)+_e(N*2e-4,-.008,.008),E===i&&(k+=r);const S=u(E,_,k,g,{trend:C,heat:M,news:E===i?o:null});p[E]=S,v.push(S)}const I=v.length?v.reduce((E,_)=>E+_,0)/v.length:0;for(const E of s){const _=t[E];if(Li(_.type))continue;const{botNet:y,botVolume:T}=d(_),w=Math.random()-.5;let C=0;switch(_.type){case"etf":C=I+w*.0015;break;case"inverse":C=-I+w*.0015;break;case"leverage":C=2*I+w*.002;break;case"bond":C=-.25*I+2e-4+w*.0012;break;case"reit":C=.2*I+2e-4+w*.004*(_.volat||1);break;case"commodity":C=w*.011*(_.volat||1)+(Math.random()<.01?(Math.random()-.5)*.05:0);break;case"preferred":C=(m[_.sector]||p[_.link]||0)*.85+w*.002;break;case"spac":C=w*.003+(Math.random()<.008?(Math.random()<.7?1:-1)*Y(.06,.2):0);break;default:C=w*.005}C+=$i(_)+_e(y*3e-4,-.01,.01),u(E,_,C,T,{})}c.marketTick=a,Q_(l),c.botFeed=l.slice(0,4),await it($(L,`rooms/${n}`),c)}function Fi(n){return Math.round(n||0).toLocaleString("ko-KR")}async function Z_(n,e){const t=Date.now(),s=e.stocks||{},i=e.ipo;if(i&&i.status==="subscribing"){if(t<i.endsAt)return;const h=i.applies||{},p=Object.values(h).reduce((T,w)=>T+(w||0),0),m=(i.botDemand||0)+p,v=Math.max(1,m/i.totalShares),I=_e(.92+(v-1)*.1+Y(-.1,.15),.9,2.3),E=Math.max(Ue,Ce(i.offerPrice*I)),_=J_(i.name,E,{type:"stock",role:"normal",sector:"신규상장"});_.ipo=!0;const y=((E-i.offerPrice)/i.offerPrice*100).toFixed(1);await it($(L,`rooms/${n}`),{[`stocks/${i.stockId}`]:_,ipo:null,latestNews:{text:`🎉 ${i.name} 상장! 공모가 ${Fi(i.offerPrice)} → 시초가 ${Fi(E)} (${y>=0?"+":""}${y}%) · 경쟁률 ${v.toFixed(1)}:1`,time:t}});for(const[T,w]of Object.entries(h)){const C=w||0,M=Math.floor(C/v),N=i.offerPrice*(C-M);await le($(L,`rooms/${n}/players/${T}`),g=>g&&(N>0&&(g.cash=(g.cash||0)+N),M>0&&(g.holdings=g.holdings||{},g.holdings[i.stockId]=(g.holdings[i.stockId]||0)+M),g))}return}if(i||Object.keys(s).length>=90||Math.random()>=V_)return;const r=Object.values(s).map(h=>h.name),o=[...K_,...Y_].filter(h=>!r.includes(h));if(!o.length)return;const a=o[ft(0,o.length-1)],c=Ce(ft(5e3,6e4)),l=ft(5e4,2e5),d=Math.floor(l*Y(.4,9)),u="ipo"+t.toString(36);await it($(L,`rooms/${n}`),{ipo:{stockId:u,name:a,offerPrice:c,totalShares:l,botDemand:d,status:"subscribing",startedAt:t,endsAt:t+La},latestNews:{text:`공모주 청약 시작! '${a}' 공모가 ${Fi(c)}원 · ${Math.round(La/1e3)}초 후 마감`,time:t}})}async function ev(n,e,t,s){const i=s.ipo;if(!i||i.status!=="subscribing")throw new Error("청약 가능한 공모주가 없습니다.");if(Date.now()>=i.endsAt)throw new Error("청약이 마감되었습니다.");if(t=Math.floor(t),!t||t<1)throw new Error("청약 수량을 확인하세요.");const r=i.offerPrice*t;if(!(await le($(L,`rooms/${n}/players/${e}/cash`),a=>{if(a==null)return a;if(!(a<r))return a-r})).committed)throw new Error("청약 증거금(현금)이 부족합니다.");await le($(L,`rooms/${n}/ipo/applies/${e}`),a=>(a||0)+t)}function tv(n){if(!n)return 0;const e=Object.values(n.applies||{}).reduce((t,s)=>t+(s||0),0);return((n.botDemand||0)+e)/n.totalShares}async function Hs(n,e,t,s,i,r,o,a){var v;const c=(v=a.stocks)==null?void 0:v[s];if(!c)throw new Error("종목을 선택하세요.");const l=i.side;if(l!=="buy"&&l!=="sell")throw new Error("주문 유형 오류");const d=i.trigger==="above"?"above":"below",u=["gtc","day","ioc"].includes(i.tif)?i.tif:"gtc";if(r=Math.floor(r),!r||r<1)throw new Error("수량을 확인하세요.");if(o=Ce(Number(o)),!o||o<Ue)throw new Error("주문 가격을 확인하세요.");const h=Date.now(),p={uid:e,nickname:t,stockId:s,stockName:c.name,side:l,trigger:d,tif:u,label:i.label||"지정가",qty:r,target:o,createdAt:h,expiresAt:u==="day"?h+q_:null},m=au($(L,`rooms/${n}/orders`)).key;return await ln($(L,`rooms/${n}/orders/${m}`),p),m}async function nv(n,e){await _n($(L,`rooms/${n}/orders/${e}`))}async function sv(n,e){var i;const t=e.orders;if(!t)return;const s=Date.now();for(const[r,o]of Object.entries(t)){const a=(i=e.stocks)==null?void 0:i[o.stockId];if(!a){await _n($(L,`rooms/${n}/orders/${r}`));continue}const c=a.price;if((o.trigger||(o.side==="buy"?"below":"above"))==="below"?c<=o.target:c>=o.target){try{o.side==="buy"?await wo(n,o.uid,o.nickname,o.stockId,o.qty,e):await yi(n,o.uid,o.nickname,o.stockId,o.qty,e)}catch(u){console.warn("[order] 예약 체결 실패, 취소:",o,u==null?void 0:u.message)}await _n($(L,`rooms/${n}/orders/${r}`));continue}o.tif==="ioc"?await _n($(L,`rooms/${n}/orders/${r}`)):o.expiresAt&&s>o.expiresAt&&await _n($(L,`rooms/${n}/orders/${r}`))}}function iv(n,e){const t=n.orders||{};return Object.entries(t).filter(([,s])=>s.uid===e).map(([s,i])=>({id:s,...i})).sort((s,i)=>(i.createdAt||0)-(s.createdAt||0))}async function wo(n,e,t,s,i,r){var d;const o=(d=r.stocks)==null?void 0:d[s];if(!o)throw new Error("종목을 선택하세요.");if(i=Math.floor(i),!i||i<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.ceil(a*i*(1+lu));if(!(await le($(L,`rooms/${n}/players/${e}`),u=>{if(!u)return u;if((u.cash||0)<c)return;u.cash=(u.cash||0)-c,u.holdings=u.holdings||{};const h=u.holdings[s]||0;u.avgCost=u.avgCost||{};const p=u.avgCost[s]||0;return u.avgCost[s]=Math.round((h*p+i*a)/(h+i)),u.holdings[s]=h+i,u})).committed)throw new Error("현금(수수료 포함)이 부족합니다.");await fu(n,s,i,+i,{type:"buy",nickname:t,stockName:o.name,qty:i,price:a,time:Date.now()})}async function yi(n,e,t,s,i,r){var d;const o=(d=r.stocks)==null?void 0:d[s];if(!o)throw new Error("종목을 선택하세요.");if(i=Math.floor(i),!i||i<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.floor(a*i*(1-lu-z_));if(!(await le($(L,`rooms/${n}/players/${e}`),u=>{var p;if(!u)return u;const h=((p=u.holdings)==null?void 0:p[s])||0;if(!(h<i))return u.cash=(u.cash||0)+c,u.holdings[s]=h-i,u.holdings[s]===0&&(delete u.holdings[s],u.avgCost&&delete u.avgCost[s]),u})).committed)throw new Error("보유 수량이 부족합니다.");await fu(n,s,i,-i,{type:"sell",nickname:t,stockName:o.name,qty:i,price:a,time:Date.now()})}async function hu(n,e,t,s,i){var o,a,c;const r=((c=(a=(o=i.players)==null?void 0:o[e])==null?void 0:a.holdings)==null?void 0:c[s])||0;if(r<1)throw new Error("보유 수량이 없습니다.");return yi(n,e,t,s,r,i)}async function fu(n,e,t,s,i){await Promise.all([le($(L,`rooms/${n}/stocks/${e}/volume`),r=>(r||0)+t),le($(L,`rooms/${n}/stocks/${e}/value`),r=>(r||0)+t*i.price),le($(L,`rooms/${n}/stocks/${e}/pressure`),r=>(r||0)+s),au($(L,`rooms/${n}/logs`),i)])}function bo(n,e){var i;let t=(n==null?void 0:n.cash)||0;const s=(n==null?void 0:n.holdings)||{};for(const[r,o]of Object.entries(s)){const a=((i=e==null?void 0:e[r])==null?void 0:i.price)||0;t+=a*o}return t}function pu(n,e){return Object.entries(n||{}).map(([t,s])=>({uid:t,nickname:s.nickname&&String(s.nickname).trim()||"플레이어-"+String(t).slice(-4),connected:s.connected!==!1,total:bo(s,e)})).sort((t,s)=>s.total-t.total)}const rv=1,Ws=[{key:"candles1m",win:6e4,cap:240},{key:"candles5m",win:3e5,cap:288},{key:"candles15m",win:9e5,cap:192},{key:"candles1h",win:36e5,cap:168}],mu=2*6e4,ov=6e4,av=4500;function gr(n,e){return Math.floor(n/e)*e}function ds(n,e,t){return Math.max(e,Math.min(t,n))}function Ua(){let n=0,e=0;for(;n===0;)n=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e)}function Ba(n,e){const t=n&&n[e]||null;return t?Object.values(t).filter(s=>s&&typeof s.t=="number").sort((s,i)=>s.t-i.t):[]}function cv(n,e,t,s){const i=(t-e)/s,r=Math.max(1,i/4e3),o=n.volat||1,a=n.activ||1,c=n.basePrice||n.price||Ue;let l=n.price||c,d=n.trend||0,u=n.heat||0;const h=!n.type||n.type==="stock",p=.0011*o*(h?1:.7),m=5,v=[];for(let I=0;I<s;I++){const E=e+i*I,_=l,y=r/m;let T=_,w=_,C=_;for(let S=0;S<m;S++){d=ds(d*Math.pow(.99,y)+Ua()*18e-5*o*Math.sqrt(y),-.0016,.0016),Math.random()<.005*y&&(u=ds(u+(.3+Math.random()*.7),0,1.6)),u*=Math.pow(.94,y);const H=p*(1+u*.5);let A=d*y+Ua()*H*Math.sqrt(y);Math.random()<.0025*y&&(A+=(Math.random()<.5?1:-1)*(.006+Math.random()*.018)*(h?1:.6)),C=C*(1+A),C=c+(C-c)*Math.exp(-.01*y),C=ds(C,vi(c),_i(c)),C=Math.max(Ue,C),T=Math.max(T,C),w=Math.min(w,C)}const M=Ce(C),N=_?Math.abs((M-_)/_):0,g=(400+Math.random()*1800)*a*(1+u*.8),k=Math.round(g*r*(1+N*8));v.push({t:E,o:Ce(_),h:Ce(T),l:Ce(w),c:M,v:k}),l=M}return{candles:v,finalPrice:l,finalBase:c}}function lv(n){const e={};for(const t of Ws)e[t.key]={};for(const t of n)for(const s of Ws){const i=gr(t.t,s.win),r=e[s.key],o=r[i];o?(o.h=Math.max(o.h,t.h),o.l=Math.min(o.l,t.l),o.c=t.c,o.v+=t.v):r[i]={t:i,o:t.o,h:t.h,l:t.l,c:t.c,v:t.v}}return e}async function uv(n,e){const t=Date.now();return(await le($(L,`rooms/${n}/market/catchupLock`),i=>{if(!(i&&i.expiresAt&&i.expiresAt>t))return{by:e||"anon",at:t,expiresAt:t+ov}})).committed}async function dv(n){try{await it($(L,`rooms/${n}/market`),{catchupLock:null})}catch{}}function hv(n){if(!n||n.status!=="playing")return!1;const e=n.market&&n.market.lastTickAt||n.marketTick||0;return e?Date.now()-e>=mu:!1}async function fv(n,e,t,s={}){if(!e||!e.stocks)return{applied:!1,reason:"no-stocks"};if(e.status!=="playing")return{applied:!1,reason:"not-playing"};const i=Date.now(),r=e.market&&e.market.lastTickAt||e.marketTick||0,o=i-r;if(!s.force&&o<mu)return{applied:!1,reason:"fresh",elapsed:o};if(!await uv(n,t)&&!s.force)return{applied:!1,reason:"locked"};try{let c=e.stocks||{};try{const v=await vo($(L,`rooms/${n}/stocks`));v.exists()&&(c=v.val())}catch{}const l=Object.keys(c);if(!l.length)return{applied:!1,reason:"no-stocks"};const d=ds(Math.round(av/l.length),30,480),u=Math.max(1,Math.round(o/6e4)),h=Math.min(d,u,480),p={};let m=0;for(const v of l){const I=c[v];if(!I||typeof I.price!="number")continue;const E=cv(I,r,i,h),_=lv(E.candles),y=`stocks/${v}/`,T=I.history||{};for(const N of Ws){const k={...T[N.key]||{}};for(const[A,q]of Object.entries(_[N.key])){const Z=k[A];k[A]=Z?{t:q.t,o:Z.o,h:Math.max(Z.h,q.h),l:Math.min(Z.l,q.l),c:q.c,v:(Z.v||0)+q.v}:q}const S=Object.keys(k).map(Number).sort((A,q)=>A-q),H=S.length-N.cap;if(H>0)for(let A=0;A<H;A++)p[y+`history/${N.key}/${S[A]}`]=null;for(const[A,q]of Object.entries(_[N.key]))Number(A)<S[Math.max(0,H)]||(p[y+`history/${N.key}/${A}`]=k[A],m++)}const w=E.finalBase,C=Math.max(Ue,Ce(E.finalPrice)),M=E.candles.reduce((N,g)=>N+(g.v||0),0);p[y+"previousPrice"]=I.price,p[y+"price"]=C,p[y+"currentPrice"]=C,p[y+"changeRate"]=+((C-w)/w*100).toFixed(2),p[y+"volume"]=(I.volume||0)+M,p[y+"value"]=(I.value||0)+M*C,C>(I.high||I.price)&&(p[y+"high"]=C),C<(I.low||I.price)&&(p[y+"low"]=C),I.heat&&(p[y+"heat"]=0),I.pressure&&(p[y+"pressure"]=0)}return p["market/tickMs"]=4e3,p["market/lastTickAt"]=i,p["market/lastHistoryAt"]=i,p["market/lastCatchupAt"]=i,p["market/catchupVersion"]=rv,p["market/catchupBy"]=t||"anon",p["market/catchupLock"]=null,p.marketTick=i,await it($(L,`rooms/${n}`),p),{applied:!0,elapsed:o,numSteps:h,candlesWritten:m,stocks:l.length}}catch(c){return await dv(n),console.error("[catchup] 실패:",c),{applied:!1,reason:"error",error:c==null?void 0:c.message}}}function pv(){return{cur:{},lastBucket:0,seeded:!1}}async function mv(n,e,t){const s=e.stocks||{},i=Date.now(),r=gr(i,6e4);t.lastBucket||(t.lastBucket=r);for(const[d,u]of Object.entries(s)){if(!u||typeof u.price!="number")continue;let h=t.cur[d];(!h||h.t!==r)&&(h={t:r,o:u.price,h:u.price,l:u.price,c:u.price,v:0,_lastVol:u.volume||0},t.cur[d]=h),h.c=u.price,h.h=Math.max(h.h,u.price),h.l=Math.min(h.l,u.price);const p=Math.max(0,(u.volume||0)-(h._lastVol||0));h.v+=p,h._lastVol=u.volume||0}if(r===t.lastBucket)return;const o=t.lastBucket;let a=s;try{const d=await vo($(L,`rooms/${n}/stocks`));d.exists()&&(a=d.val())}catch{}const c={};let l=!1;for(const d of Object.keys(s)){const u=t.cur[d];if(!u)continue;const h={o:u.o,h:u.h,l:u.l,c:u.c,v:u.v},p=`stocks/${d}/`,m=a[d]&&a[d].history||{};for(const v of Ws){const I=gr(o,v.win),E=m[v.key]&&m[v.key][I]||null,_=E?{t:I,o:E.o,h:Math.max(E.h,h.h),l:Math.min(E.l,h.l),c:h.c,v:(E.v||0)+h.v}:{t:I,o:h.o,h:h.h,l:h.l,c:h.c,v:h.v};c[p+`history/${v.key}/${I}`]=_;const y=m[v.key]?Object.keys(m[v.key]).map(Number).sort((T,w)=>T-w):[];y.length>v.cap&&y[0]!==I&&(c[p+`history/${v.key}/${y[0]}`]=null)}l=!0}if(t.lastBucket=r,!!l){c["market/lastTickAt"]=i,c["market/lastHistoryAt"]=i,c["market/tickMs"]=4e3;try{await it($(L,`rooms/${n}`),c)}catch(d){console.warn("[history] 라이브 캔들 저장 실패:",d==null?void 0:d.message)}}}function gu(n,e){if(n&&String(n).startsWith("ipo"))return'<span class="tag tag-new">NEW</span>';const t=gi(e.type);return t?`<span class="tag ${e.type==="inverse"?"tag-inv":e.type==="leverage"?"tag-lev":"tag-etf"}">${t}</span>`:e.role==="leader"?'<span class="tag tag-leader">대장주</span>':e.role==="sub"?'<span class="tag tag-sub">부대장</span>':""}function R(n){return document.getElementById(n)}function Mt(n){return Math.round(n??0).toLocaleString("ko-KR")+"원"}function x(n){return Math.round(n??0).toLocaleString("ko-KR")}function Ct(n){return n=n||0,n>=1e12?(n/1e12).toFixed(2)+"조":n>=1e8?(n/1e8).toFixed(1)+"억":n>=1e4?Math.round(n/1e4).toLocaleString("ko-KR")+"만":x(n)}function gv(n){return x(n)+"주"}const _v=["screen-auth","screen-wait","screen-game","screen-result"];function Eo(n){_v.forEach(e=>{const t=R(e);t&&t.classList.toggle("hidden",e!==n)})}function vv(n,e,t=!0){const s=R(n);s&&(s.textContent="",s.classList.toggle("error",t))}function _u(n){R("fbError").classList.remove("hidden"),n&&(R("fbErrorMsg").textContent=n)}const yv=3,wv=120,Ha=60;let Re={},Sn=[],He={},Ot=0,Un=null,_r={};function vu(){Re={},Sn=[],He={},Ot=0,Un=null,_r={},zs="";for(const n in Gs)delete Gs[n]}function bv(){if(Un)try{localStorage.setItem(Un,JSON.stringify({candles:Re,lastVol:He,tick:Ot}))}catch{}}function Ev(n,e){const t=n.stocks||{},s=n.marketTick||0,i=`mb_candles_${e||"x"}_${n.startedAt||0}`;if(i!==Un){Un=i,Re={},He={},Ot=0;try{const r=JSON.parse(localStorage.getItem(i)||"null");r&&r.candles&&(Re=r.candles,He=r.lastVol||{},Ot=r.tick||0)}catch{}}for(const[r,o]of Object.entries(t))Re[r]||(Re[r]=[{t:Date.now(),o:o.price,h:o.price,l:o.price,c:o.price,v:0,_n:0}]),He[r]==null&&(He[r]=o.volume||0);if(s!==Ot){Ot=s;for(const[o,a]of Object.entries(t)){const c=Re[o]||(Re[o]=[]);let l=c[c.length-1];(!l||l._n>=yv)&&(l={t:Date.now(),o:a.price,h:a.price,l:a.price,c:a.price,v:0,_n:0},c.push(l)),l.c=a.price,l.h=Math.max(l.h,a.price),l.l=Math.min(l.l,a.price);const d=Math.max(0,(a.volume||0)-(He[o]||0));l.v+=d,He[o]=a.volume||0,l._n++,c.length>wv&&c.shift()}const r=n.botFeed?Object.values(n.botFeed):[];for(const o of r)Sn.unshift({...o,bot:!0});Sn.length>Ha&&(Sn.length=Ha),Sv(t),sy(t),bv()}}let xt=new Set(JSON.parse(localStorage.getItem("mb_watch")||"[]")),gt=JSON.parse(localStorage.getItem("mb_alerts")||"{}");function Iv(n){xt.has(n)?xt.delete(n):xt.add(n),localStorage.setItem("mb_watch",JSON.stringify([...xt]))}function Cv(n,e){e>0?gt[n]=e:delete gt[n],localStorage.setItem("mb_alerts",JSON.stringify(gt))}function kv(n){return gt[n]||0}function Sv(n){for(const e of Object.values(n)){const t=gt[e.name],s=_r[e.name];if(t&&s!=null){const i=s<t&&e.price>=t,r=s>t&&e.price<=t;if(i||r){O(`🔔 ${e.name} 알림가 ${x(t)}원 ${i?"돌파":"하향"}!`,i?"up":"down"),delete gt[e.name],localStorage.setItem("mb_alerts",JSON.stringify(gt));try{window.Notification&&Notification.permission==="granted"&&new Notification("STONK Battle",{body:`${e.name} ${x(t)}원 도달`})}catch{}}}_r[e.name]=e.price}}function Tv(n){const{roomCode:e,roomData:t,uid:s,selectedStockId:i}=n,r=R("gameRoomCode");r&&(r.textContent=e),Ev(t,e),Rv(t,s),qv(t,s),Qv(t,s),Xv(t),Av(t,s),yu(n),Jv(t);const o=xv();o==="home"?(iy(t),$v(t)):o==="detail"?(Fv(t,i),Gv(t,i),Nv(t,s)):o==="feed"?oy(t):o==="screener"?ay(t):o==="account"&&cy(t,s)}function Rv(n,e){var o;const t=(o=n.players)==null?void 0:o[e],s=t&&t.nickname||"나",i=R("navNick");i&&(i.textContent=s);const r=R("navAvatar");r&&(r.textContent=s.slice(0,1).toUpperCase())}function yu(n){const e=n.roomData,t=R("marketStatusChip"),s=R("msDot"),i=R("msLabel"),r=R("marketStatusPanel");if(!e||!t||!s||!i||!r)return;const o=e.market||{},a=o.lastTickAt||e.marketTick||0,c=o.lastCatchupAt||0,l=a?Math.max(0,Math.round((Date.now()-a)/6e4)):null,d=e.hostId===n.uid;let u=0,h=0,p=0,m=0;for(const y of Object.values(e.stocks||{})){const T=y.history;T&&(T.candles1m&&(u+=Object.keys(T.candles1m).length),T.candles5m&&(h+=Object.keys(T.candles5m).length),T.candles15m&&(p+=Object.keys(T.candles15m).length),T.candles1h&&(m+=Object.keys(T.candles1h).length))}const v=u+h+p+m>0,I=l!=null&&l<2;if(s.className="status-dot "+(I?"ok":l==null?"muted":"warn"),i.textContent=I?"시장 최신":l==null?"대기":`${l}분 전`,r.classList.contains("hidden"))return;const E=y=>y?`${_t(new Date(y).getHours())}:${_t(new Date(y).getMinutes())}`:"-",_=(y,T,w)=>`<div class="ms-row"><span>${y}</span><b class="${w||""}">${T}</b></div>`;r.innerHTML=_("방 코드",V(n.roomCode||"-"))+_("연결","연결됨","up")+_("권한",d?"보정 주체 (방장)":"읽기 전용",d?"":"muted")+_("마지막 tick",E(a))+_("마지막 보정",c?E(c):"없음")+_("시장",I?"최신 상태":l==null?"tick 기록 없음":`${l}분 전 데이터 · ${d?"재접속 시 자동 보정":"방장/관리자가 보정"}`,I?"up":"down")+_("캔들",v?`1m ${u} · 5m ${h} · 15m ${p} · 1h ${m}`:"아직 없음")}function Nv(n,e){const t=R("orderList");if(!t)return;const s=iv(n,e);if(!s.length){t.innerHTML="";return}t.innerHTML=s.map(i=>{const r=i.side==="buy"?"up":"down",o=i.tif==="day"?" · 당일":i.tif==="ioc"?" · IOC":"",a=i.label||(i.side==="buy"?"매수":"매도");return`<li class="order-item">
        <span class="order-badge ${r}">${V(a)}</span>
        <span class="order-name">${V(i.stockName)}</span>
        <span class="order-detail">${x(i.target)}원 · ${x(i.qty)}주${o}</span>
        <button class="order-cancel" data-cancel="${i.id}" title="취소">✕</button>
      </li>`}).join("")}let Vs=0;function Av(n,e){var r;const t=R("ipoPanel");if(!t)return;const s=n.ipo;if(!s||s.status!=="subscribing"){t.classList.add("hidden"),Vs=0;return}Vs=s.endsAt,t.classList.remove("hidden"),R("ipoName").textContent=s.name,R("ipoPrice").textContent=x(s.offerPrice)+"원",R("ipoShares").textContent=x(s.totalShares)+"주",R("ipoRatio").textContent=tv(s).toFixed(1)+" : 1";const i=((r=s.applies)==null?void 0:r[e])||0;R("ipoMyApply").textContent=i?`내 청약 ${x(i)}주 (증거금 ${Ct(i*s.offerPrice)}원)`:"아직 청약하지 않았어요",wu()}function wu(n){const e=R("ipoCountdown");if(!e||!Vs)return;const t=Math.max(0,Math.ceil((Vs-Date.now())/1e3));e.textContent=t+"초",e.classList.toggle("urgent",t<=5)}function ot(n){return n>0?"up":n<0?"down":"flat"}function Xn(n){return n>0?"▲":n<0?"▼":"−"}let js="";function Ui(n){js=(n||"").trim().toLowerCase()}let bu="all",Eu="value",vr="rising",hs="asset";function Pv(n){bu=n||"all"}function Wa(n){Eu=n||"value"}function Mv(n){vr=n||"rising"}function Ov(n){hs=n||"asset"}function xv(){var n;return((n=document.getElementById("screen-game"))==null?void 0:n.dataset.tab)||"home"}function Dv(n,e){return js?[e.name,n,e.ticker,e.sector,e.type,e.role,gi(e.type),uu(e.role),String(n).startsWith("ipo")?"신규상장 new":""].join(" ").toLowerCase().includes(js):!0}function Lv(n){let e=0;const t=String(n);for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return 5e6+e%60*8e6}function Iu(n){let e=0;const t=String(n||"");for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return`hsl(${e%360} 60% 47%)`}function Cu(n,e){const t={value:(s,i)=>(i[1].value||0)-(s[1].value||0),volume:(s,i)=>(i[1].volume||0)-(s[1].volume||0),up:(s,i)=>(i[1].changeRate||0)-(s[1].changeRate||0),down:(s,i)=>(s[1].changeRate||0)-(i[1].changeRate||0)};return n.sort(t[e]||t.value)}function ku(n,e,t){const s=t.changeRate>0?"+":"",i=ot(t.changeRate),r=xt.has(t.name),o=t.price*Lv(e),a=t.sector||gi(t.type)||"종목";return`<li class="rank-item" data-id="${e}">
    <span class="rk-rank"><button class="star-btn ${r?"on":""}" data-star="${V(t.name)}" title="관심">${r?"★":"☆"}</button>${n}</span>
    <span class="rk-name"><span class="stk-ico" style="background:${Iu(t.name)}">${V((t.name||"?").slice(0,1))}</span><span class="stk-meta"><span class="stk-nm">${V(t.name)} ${gu(e,t)}</span><span class="stk-sub">${V(a)}</span></span></span>
    <span class="rk-price ${i}">${x(t.price)}</span>
    <span class="rk-rate ${i}">${Xn(t.changeRate)} ${s}${(t.changeRate??0).toFixed(2)}%</span>
    <span class="rk-value">${Ct(t.value)}</span>
    <span class="rk-cap">${Ct(o)}</span>
    <span class="rk-sector"><span class="sec-pill">${V(t.sector||"-")}</span></span>
  </li>`}function $v(n){const e=R("stockList");if(!e)return;const t=e.scrollTop,s=n.stocks||{};let i=Object.entries(s).filter(([r,o])=>Dv(r,o));if(bu==="watch"&&(i=i.filter(([,r])=>xt.has(r.name))),i=Cu(i,Eu),!i.length){e.innerHTML=`<li class="stock-empty">${js?"검색 결과 없음":"종목이 없습니다"}</li>`;return}e.innerHTML=i.map(([r,o],a)=>ku(a+1,r,o)).join(""),e.scrollTop=t}function Fv(n,e){const s=(n.stocks||{})[e];if(!s){R("chartStockName").textContent="-",R("selStockPrice").textContent="-",R("selStockChange").textContent="";return}const i=s.basePrice||s.price,r=s.price-i,o=ot(s.changeRate),a=s.changeRate>0?"+":"";R("chartStockName").textContent=s.name;const c=R("detailTag");if(c){const h=gi(s.type),p=uu(s.role);let m,v="virtual-tag";h?(m=h,v+=s.type==="inverse"?" tag-inv":s.type==="leverage"?" tag-lev":" tag-etf"):String(e).startsWith("ipo")?(m="신규상장",v+=" tag-new"):s.sector?(m=p?`${s.sector}·${p}`:s.sector,s.role==="leader"&&(v+=" tag-leader")):m="가상",c.textContent=m,c.className=v}const l=R("selStockPrice"),d=Gs[e];if(l.textContent=x(s.price),l.className="big-price "+o,d!=null&&s.price!==d){const h=s.price>d?"flash-up":"flash-down";l.classList.remove("flash-up","flash-down"),l.offsetWidth,l.classList.add(h)}Gs[e]=s.price,R("selStockChange").className="change "+o,R("selStockChange").textContent=`${Xn(s.changeRate)} ${a}${x(r)} (${a}${(s.changeRate??0).toFixed(2)}%)`,Bi("ohlcOpen",s.open,i),Bi("ohlcHigh",s.high,i),Bi("ohlcLow",s.low,i),R("ohlcUpper").textContent=x(_i(i)),R("ohlcLower").textContent=x(vi(i)),R("ohlcVol").textContent=gv(s.volume),R("ohlcValue").textContent=Ct(s.value)+"원";const u=R("selStockNews");u.textContent=s.news?`📰 ${s.news}`:"",u.className="news-line"+(s.news?" "+o:" muted"),Tu(n,e,i,s)}const Gs={};function Bi(n,e,t){const s=R(n);s.textContent=x(e),s.className="ohlc-v "+ot((e||0)-t)}function pt(n){return getComputedStyle(document.body).getPropertyValue(n).trim()||"#000"}const yr={tick:{win:30*6e4,tiers:["candles1m","candles5m"],count:16},"1d":{win:864e5,tiers:["candles5m","candles1m"],count:288},"3d":{win:2592e5,tiers:["candles1h","candles15m","candles5m"],count:216},"1w":{win:6048e5,tiers:["candles1h","candles15m"],count:224},"1m":{win:2592e6,tiers:["candles1h","candles15m","candles5m","candles1m"],count:360},all:{win:1/0,tiers:["candles1h","candles15m","candles5m","candles1m"],count:500}},Uv={tick:"1틱","1d":"1일","3d":"3일","1w":"1주","1m":"1달",all:"전체"};function Va(n){if(n<=0)return"0분";const e=Math.round(n/6e4);if(e<60)return e+"분";const t=Math.floor(e/60),s=e%60;if(t<24)return s?`${t}시간 ${s}분`:`${t}시간`;const i=Math.floor(t/24),r=t%24;return r?`${i}일 ${r}시간`:`${i}일`}function Bv(n,e){const t=Uv[n]||n;if(!e||!e.length)return t+" · 데이터 없음";if(n==="tick")return"1틱 · 최근 흐름";const s=e[0].t,i=e[e.length-1].t;if(!(s>1e11)||!(i>1e11))return t+" · 최근 흐름";const r=i-s,o=(yr[n]||{}).win;return o&&o!==1/0&&r<o*.9?`${t} · 아직 ${Va(r)} 데이터만 있음`:`${t} · 누적 ${Va(r)} 데이터`}function _t(n){return(n<10?"0":"")+n}function Hv(n,e){if(!(n>1e11))return"";const t=new Date(n),s=_t(t.getHours())+":"+_t(t.getMinutes()),i=t.getMonth()+1+"/"+t.getDate();return e==="tick"||e==="1d"?s:e==="3d"||e==="1w"?i+" "+s:i}function Wv(n){if(!(n>1e11))return"";const e=new Date(n);return e.getMonth()+1+"/"+_t(e.getDate())+" "+_t(e.getHours())+":"+_t(e.getMinutes())}let Tn="1d",fs=-1,re=null,dt=null,ja=!1,zs="";function Ga(n,e){if(n.length&&e.price!=null&&n[n.length-1].c!==e.price){const t=n[n.length-1],s=t.t>1e11?t.t+1e3:t.t+1;n.push({t:s,o:t.c,h:Math.max(t.c,e.price),l:Math.min(t.c,e.price),c:e.price,v:0,_live:!0})}return n}function Su(n,e,t){const s=yr[t]||yr["1d"],i=n.history||null,r=Re[e]||[],o=Date.now(),a=s.win===1/0?-1/0:o-s.win;if(t==="tick"){let l=r.slice(-12).map((d,u)=>({t:d.t||o-(12-u)*6e3,o:d.o,h:d.h,l:d.l,c:d.c,v:d.v||0}));if(l.length<2&&i){const d=Ba(i,"candles1m");d.length&&(l=d.slice(-s.count).map(u=>({...u})))}return Ga(l,n)}let c=[];if(i)for(const l of s.tiers){let d=Ba(i,l);if(d.length){if(d=d.filter(u=>u.t>=a),d.length>=2){c=d.map(u=>({...u}));break}!c.length&&d.length&&(c=d.map(u=>({...u})))}}return!c.length&&r.length&&(c=r.map((l,d)=>({t:l.t||o-(r.length-d)*6e3,o:l.o,h:l.h,l:l.l,c:l.c,v:l.v||0})).filter(l=>l.t>=a)),c=Ga(c,n),c.length>s.count&&(c=c.slice(c.length-s.count)),c}function Tu(n,e,t,s){dt={room:n,id:e,base:t};const i=Su(s,e,Tn),r=i.length?i[i.length-1]:null,o=`${e}|${Tn}|${i.length}|${r?r.c+":"+r.v:""}|${t}`;if(o===zs){za();return}zs=o,fs=-1,Ru(),wr(R("priceChart"),i,t,-1);const a=R("chartRangeNote");a&&(a.textContent=Bv(Tn,i)),za()}function za(){if(ja)return;ja=!0;const n=R("chartPeriods");n&&n.addEventListener("click",t=>{var i;const s=t.target.closest(".cp-btn");if(s&&(Tn=s.dataset.period,n.querySelectorAll(".cp-btn").forEach(r=>r.classList.toggle("is-active",r===s)),dt)){const r=(i=dt.room.stocks)==null?void 0:i[dt.id];r&&Tu(dt.room,dt.id,dt.base,r)}});const e=R("priceChart");if(e){const t=i=>{if(!re)return;const r=e.getBoundingClientRect(),o=(i.touches?i.touches[0].clientX:i.clientX)-r.left,a=Math.max(0,Math.min(re.candles.length-1,Math.floor(o/re.cw)));a!==fs&&(fs=a,wr(e,re.candles,re.base,a),Vv(a))},s=()=>{fs=-1,re&&wr(e,re.candles,re.base,-1),Ru()};e.addEventListener("mousemove",t),e.addEventListener("mouseleave",s),e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchmove",t,{passive:!0}),e.addEventListener("touchend",s)}}function Vv(n){const e=R("chartTip");if(!e||!re)return;const t=re.candles[n];if(!t)return;const s=t.o?(t.c-t.o)/t.o*100:0,i=s>0?"up":s<0?"down":"flat",r=Wv(t.t)||`구간 ${n+1}`;e.innerHTML=`
    <div class="tip-when">${V(r)}</div>
    <div class="tip-row"><span>시작</span><b>${x(t.o)}</b></div>
    <div class="tip-row"><span>마지막</span><b>${x(t.c)}</b></div>
    <div class="tip-row"><span>최고</span><b class="up">${x(t.h)}</b></div>
    <div class="tip-row"><span>최저</span><b class="down">${x(t.l)}</b></div>
    <div class="tip-row"><span>거래량</span><b>${x(t.v)}</b></div>
    <div class="tip-row"><span>등락률</span><b class="${i}">${s>=0?"+":""}${s.toFixed(2)}%</b></div>`,e.classList.remove("hidden");const o=n*re.cw+re.cw/2,a=o>re.plotW*.6?"left":"right";e.style.left=a==="right"?`${o+10}px`:"",e.style.right=a==="left"?`${re.cssW-o+10}px`:"",e.style.top="8px"}function Ru(){const n=R("chartTip");n&&n.classList.add("hidden")}function wr(n,e,t,s){if(!n)return;const i=window.devicePixelRatio||1,r=n.clientWidth||600,o=n.clientHeight||260;n.width=Math.round(r*i),n.height=Math.round(o*i);const a=n.getContext("2d");if(a.setTransform(i,0,0,i,0,0),a.clearRect(0,0,r,o),!e.length){re=null;return}const c=56,l=r-c,d=o*.18,u=o*.06,h=o-d-u;let p=-1/0,m=1/0,v=0;for(const S of e)p=Math.max(p,S.h),m=Math.min(m,S.l),v=Math.max(v,S.v||0);p===m&&(p+=1,m-=1);const I=(p-m)*.14;p+=I,m-=I;const E=pt("--up"),_=pt("--down"),y="rgba(255,255,255,0.07)",T=pt("--muted"),w=S=>h*(1-(S-m)/(p-m)),C=Math.max(e.length,14),M=l/C,N=Math.max(2.5,Math.min(14,M*.64));re={cw:M,plotW:l,priceH:h,volH:d,cssW:r,cssH:o,candles:e,base:t,lo:m,hi:p},a.font="11px Pretendard, sans-serif",a.textBaseline="middle";const g=4;for(let S=0;S<=g;S++){const H=h/g*S,A=p-(p-m)/g*S;a.strokeStyle=y,a.lineWidth=1,a.beginPath(),a.moveTo(0,Math.round(H)+.5),a.lineTo(l,Math.round(H)+.5),a.stroke(),a.fillStyle=T,a.textAlign="left",a.fillText(x(A),l+6,Math.min(h-6,Math.max(8,H)))}if(s>=0&&s<e.length){const S=s*M+M/2;a.strokeStyle="rgba(120,140,180,0.55)",a.lineWidth=1,a.setLineDash([3,3]),a.beginPath(),a.moveTo(Math.round(S)+.5,0),a.lineTo(Math.round(S)+.5,o),a.stroke(),a.setLineDash([])}e.forEach((S,H)=>{const A=H*M+M/2,Z=S.c>=S.o?E:_;a.strokeStyle=Z,a.fillStyle=Z,a.lineWidth=1,a.beginPath(),a.moveTo(Math.round(A)+.5,w(S.h)),a.lineTo(Math.round(A)+.5,w(S.l)),a.stroke();const pe=w(S.o),ge=w(S.c),Rt=Math.min(pe,ge),ct=Math.max(1.5,Math.abs(ge-pe));if(a.fillRect(A-N/2,Rt,N,ct),v>0){const dn=(d-4)*((S.v||0)/v);a.globalAlpha=.4,a.fillRect(A-N/2,o-dn,N,dn),a.globalAlpha=1}});const k=e[e.length-1].c;if(k<=p&&k>=m){const S=w(k),A=k>=(t||k)?E:_;a.strokeStyle=A,a.lineWidth=1,a.setLineDash([4,3]),a.beginPath(),a.moveTo(0,Math.round(S)+.5),a.lineTo(l,Math.round(S)+.5),a.stroke(),a.setLineDash([]);const q=x(k);a.font="bold 11px Pretendard, sans-serif";const Z=a.measureText(q).width,pe=Math.min(h-9,Math.max(9,S));a.fillStyle=A,a.beginPath();const ge=l+2,Rt=Math.min(c-4,Z+10),ct=17;jv(a,ge,pe-ct/2,Rt,ct,4),a.fill(),a.fillStyle="#fff",a.textAlign="left",a.fillText(q,ge+5,pe)}if(e.length>=2){a.font="10px Pretendard, sans-serif",a.fillStyle=T;const S=[0,Math.floor((e.length-1)/2),e.length-1],H={};S.forEach(A=>{if(H[A])return;H[A]=1;const q=Hv(e[A].t,Tn);if(!q)return;a.textAlign=A===0?"left":A===e.length-1?"right":"center";const Z=A===0?2:A===e.length-1?l-2:A*M+M/2;a.fillText(q,Z,o-2)})}}function jv(n,e,t,s,i,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+s,t,e+s,t+i,r),n.arcTo(e+s,t+i,e,t+i,r),n.arcTo(e,t+i,e,t,r),n.arcTo(e,t,e+s,t,r),n.closePath()}function Io(){zs="";const n=R("priceChart");if(n){const e=n.getContext("2d");e&&e.clearRect(0,0,n.width,n.height)}}function Gv(n,e){var l;const t=R("orderbook");if(!t)return;const s=(l=n.stocks)==null?void 0:l[e];if(!s){t.innerHTML="";return}const i=du(s.price),r=s.basePrice||s.price,o=5e4,a=()=>Math.floor((Math.random()*.9+.1)*12e3),c=[];for(let d=5;d>=1;d--){const u=qa(s.price+d*i,r);c.push(Ka(u,a(),"ask",o,r))}c.push(`<div class="ob-current ${ot(s.changeRate)}">${x(s.price)}</div>`);for(let d=1;d<=5;d++){const u=qa(s.price-d*i,r);c.push(Ka(u,a(),"bid",o,r))}t.innerHTML=c.join("")}function qa(n,e){return Math.max(vi(e),Math.min(_i(e),Math.max(Ue,n)))}function Ka(n,e,t,s,i){const r=ot(n-i),o=Math.min(100,e/s*100);return t==="ask"?`<div class="ob-row ask">
      <span class="ob-qty"><span class="ob-bar" style="width:${o}%"></span><b>${x(e)}</b></span>
      <span class="ob-price ${r}">${x(n)}</span>
      <span></span>
    </div>`:`<div class="ob-row bid">
    <span></span>
    <span class="ob-price ${r}">${x(n)}</span>
    <span class="ob-qty"><b>${x(e)}</b><span class="ob-bar" style="width:${o}%"></span></span>
  </div>`}let Dt=null,Nu=1,Au=0;function zv(n){Au=Number(n)||0}function qv(n,e){var p;const t=(p=n.players)==null?void 0:p[e],s=n.stocks||{};if(!t)return;const i=bo(t,s);R("myCash").textContent=Mt(t.cash),R("myAsset").textContent=Mt(i);const r=R("myAssetTop");r&&(r.textContent=Ct(i)+"원");const o=t.avgCost||{},a=t.holdings||{},c=Object.entries(a).filter(([,m])=>m>0);let l=0,d=0;c.forEach(([m,v])=>{const I=s[m];if(!I)return;const E=(o[m]||I.price)*v;l+=I.price*v-E,d+=E});const u=R("myPnl");if(u)if(c.length){const m=d?l/d*100:0,v=l>0?"up":l<0?"down":"flat";u.className="asset-pnl "+v,u.textContent=`평가손익 ${l>=0?"+":""}${x(l)}원 (${m>=0?"+":""}${m.toFixed(2)}%)`}else u.className="asset-pnl muted",u.textContent="평가손익 —";const h=R("holdingsList");if(h.innerHTML="",c.length===0){const m=document.createElement("li");m.className="muted",m.textContent="보유 종목이 없습니다",h.appendChild(m);return}Dt&&!c.some(([m])=>m===Dt)&&(Dt=null);for(const[m,v]of c){const I=s[m];if(!I)continue;const E=o[m]||0,_=E?(I.price-E)*v:0,y=E?(I.price-E)/E*100:0,T=_>0?"up":_<0?"down":"flat",w=Dt===m,C=document.createElement("li");C.className="holding-item"+(w?" is-open":""),C.dataset.hold=m,C.innerHTML=`
      <button class="hold-main" type="button" data-holdtoggle="${m}">
        <div class="hold-row1"><span class="hold-name">${V(I.name)}</span><b>${x(v)}주</b></div>
        <div class="hold-row2 muted">평단 ${E?x(E):"-"} · 평가 ${Ct(I.price*v)}원</div>
        <div class="hold-row2 ${T}">${_>=0?"+":""}${x(_)}원 (${y>=0?"+":""}${y.toFixed(2)}%)</div>
      </button>
      ${w?Kv(m,I):""}`,h.appendChild(C)}}function Kv(n,e){return`
    <div class="hold-trade" data-trade="${n}">
      <div class="ht-price">현재가 <b>${x(e.price)}원</b></div>
      <div class="ht-qtyrow">
        <button type="button" data-htq="-10">-10</button>
        <button type="button" data-htq="-1">-1</button>
        <input class="ht-input" type="number" min="1" value="${Nu}" inputmode="numeric" />
        <button type="button" data-htq="1">+1</button>
        <button type="button" data-htq="10">+10</button>
        <button type="button" data-htq="max">최대</button>
      </div>
      <div class="ht-btns">
        <button type="button" class="btn buy" data-ht="buy">매수</button>
        <button type="button" class="btn sell" data-ht="sell">매도</button>
        <button type="button" class="btn sell-all" data-ht="all">전량매도</button>
      </div>
    </div>`}function Yv(n){Dt=Dt===n?null:n}function Hi(n){Nu=Math.max(1,Math.floor(Number(n)||1))}let Ya=null;function O(n,e=""){const t=R("toast");t&&(t.textContent=n,t.className="toast show"+(e?" toast-"+e:""),clearTimeout(Ya),Ya=setTimeout(()=>{t.className="toast"+(e?" toast-"+e:"")},1800))}function Qv(n,e){const t=R("rankingList");t.innerHTML="",pu(n.players,n.stocks).forEach(i=>{const r=document.createElement("li"),o=((i.total-Ht)/Ht*100).toFixed(2),a=i.total>=Ht?"up":"down";r.innerHTML=`<span>${V(i.nickname)}${i.uid===e?" (나)":""}</span> <b>${Ct(i.total)}원</b> <span class="${a}">${o>=0?"+":""}${o}%</span>`,i.connected||r.classList.add("muted"),t.appendChild(r)})}function Jv(n){const e=R("logList");e.innerHTML="";const s=[...Object.values(n.logs||{}),...Sn].sort((i,r)=>r.time-i.time).slice(0,40);for(const i of s){const r=document.createElement("li"),o=i.type==="buy"?"매수":"매도",a=i.type==="buy"?"up":"down",c=new Date(i.time).toLocaleTimeString("ko-KR",{hour12:!1}),l=i.bot?`<b class="bot-name">${V(i.nickname)}</b>`:`<b>${V(i.nickname)}</b>`;r.innerHTML=`<span class="muted">${c}</span> ${l} <span class="${a}">${o}</span> ${V(i.stockName)} ${x(i.qty)}주 @ ${x(i.price)}`,e.appendChild(r)}}function Xv(n){const e=R("newsBar"),t=n.latestNews;if(!t||Date.now()-t.time>12e3){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent=`📢 ${t.text}`}function Zv(n){const e=[R("tickBar"),R("tickBarHome")],t=[R("tickCountdown"),R("tickCountdownHome")],s=n&&(n.marketTick||n.market&&n.market.lastTickAt)||0;if(!s){e.forEach(l=>{l&&(l.style.width="0%")}),t.forEach(l=>{l&&(l.textContent="")});return}const i=Date.now()-s,o=(Math.max(0,Math.min(1,i/mr))*100).toFixed(1)+"%";e.forEach(l=>{l&&(l.style.width=o)});const a=Math.max(0,Math.ceil((mr-i)/1e3)),c=a>0?a+"s":"곧";t.forEach(l=>{l&&(l.textContent=c)})}function ey(n){const e=Math.max(0,Math.floor(n/1e3)),t=String(Math.floor(e/60)).padStart(2,"0"),s=String(e%60).padStart(2,"0");R("gameTimer").textContent=`${t}:${s}`}function V(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let Qa={};const ty=60;function ny(n){const e=n.role,t=n.type;return e==="leader"||e==="sub"||t==="preferred"||t==="etf"||t==="leverage"||t==="inverse"||t==="bond"}function Pu(n){let e=0,t=0,s=0,i=0,r=0,o=0;const a={};for(const h of Object.values(n||{})){const p=(h.value||0)+1,m=p*(h.changeRate||0);e+=p,t+=m;const v=h.sector||"기타",I=a[v]||(a[v]={w:0,r:0});I.w+=p,I.r+=m,ny(h)?(s+=p,i+=m):(r+=p,o+=m)}const c=e?t/e:0,l=s?i/s:0,d=r?o/r:0,u=Object.entries(a).map(([h,p])=>({name:h,rate:p.w?p.r/p.w:0,w:p.w})).sort((h,p)=>p.w-h.w);return{comp:c,kospi:l,kosdaq:d,sectors:u}}function ss(n,e){const t=Qa[n]||(Qa[n]=[]);t.push(e),t.length>ty&&t.shift()}function sy(n){const{comp:e,kospi:t,kosdaq:s,sectors:i}=Pu(n);ss("__comp__",1e3*(1+e/100)),ss("__kospi__",1e3*(1+t/100)),ss("__kosdaq__",1e3*(1+s/100)),i.forEach(r=>ss("sec:"+r.name,1e3*(1+r.rate/100)))}function Ja(n){const e=n.rate,t=ot(e),s=e>0?"+":"",i=(1e3*(1+e/100)).toFixed(2);return`<div class="ixs-row"><span class="ixs-name">${V(n.name)}</span><span class="ixs-val">${i}</span><span class="ixs-rate ${t}">${Xn(e)} ${s}${e.toFixed(2)}%</span></div>`}function Xa(n,e){const t=ot(e),s=e>0?"+":"",i=(1e3*(1+e/100)).toFixed(2);return`<div class="ixm-row"><span class="ixm-name">${V(n)}</span><b class="ixm-val">${i}</b><span class="ixm-rate ${t}">${Xn(e)} ${s}${e.toFixed(2)}%</span></div>`}function iy(n){const e=R("indexStrip");if(!e)return;const{kospi:t,kosdaq:s,sectors:i}=Pu(n.stocks||{}),r=i.slice(0,16),o=r.slice(0,8),a=r.slice(8,16),l=[`<div class="index-card index-market">
    ${Xa("코스피",t)}
    ${Xa("코스닥",s)}
  </div>`,`<div class="index-card index-sectors">${o.map(Ja).join("")}</div>`,a.length?`<div class="index-card index-sectors">${a.map(Ja).join("")}</div>`:""];e.innerHTML=l.join("")}function ry(n){const e=new Date(n.when).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"});return`<div class="feed-card"><div class="feed-card-head"><span class="feed-ava">${V((n.who||"S").slice(0,1))}</span><div><div class="feed-who">${V(n.who)}</div><div class="feed-when">${e}</div></div></div>${n.title?`<div class="feed-title">${V(n.title)}</div>`:""}<div class="feed-body">${V(n.body)}</div></div>`}function oy(n,e){const t=R("feedView");if(!t)return;const s=[],i=n.latestNews;i&&(i.text||i.title)&&s.push({who:"STONK 뉴스",when:i.time||Date.now(),title:i.title||"📢 시장 속보",body:i.text||i.body||""}),Object.values(n.botFeed||{}).slice(-10).reverse().forEach(c=>s.push({who:c.nickname||"트레이더",when:c.time||Date.now(),title:"",body:`${c.type==="buy"?"매수":"매도"} · ${c.stockName||"종목"} ${x(c.qty||0)}주 @ ${x(c.price||0)}`}));const r=pu(n.players,n.stocks).slice(0,5),o=[...new Set(Object.values(n.stocks||{}).map(c=>c.sector).filter(Boolean))].slice(0,8),a=r.map((c,l)=>{const d=(c.total-Ht)/Ht*100;return`<li><span class="fr-no">${l+1}</span><span class="fr-name">${V(c.nickname)}</span><span class="fr-val ${d>=0?"up":"down"}">${d>=0?"+":""}${d.toFixed(1)}%</span></li>`}).join("");t.innerHTML=`
    <aside class="feed-side"><button class="is-active">전체</button><button>팔로잉</button><button>뉴스</button></aside>
    <div class="feed-main">
      ${s.length?s.map(ry).join(""):'<div class="feed-card"><div class="feed-body muted">아직 소식이 없습니다. 거래가 시작되면 시장 속보와 체결 소식이 올라옵니다.</div></div>'}
      <a class="feed-card" id="feedBoardLink" target="_blank" rel="noopener" style="text-decoration:none;color:var(--brand);font-weight:700">전체 소식 보기 → STONK Board ↗</a>
    </div>
    <aside class="feed-aside">
      <div class="feed-rank-card"><h4 class="rail-h">주간 프로필 랭킹</h4><ol class="feed-rank-list">${a||'<li class="muted">참가자 없음</li>'}</ol></div>
      <div class="feed-rank-card"><h4 class="rail-h">주제별 커뮤니티</h4><div class="feed-comm">${o.map(c=>`<span>＃ ${V(c)}</span>`).join("")||'<span class="muted">-</span>'}</div></div>
    </aside>`}const Wi=[{key:"rising",label:"연속 상승세",badge:"인기",fn:(n,e)=>(e.changeRate||0)>0,sort:"up"},{key:"value",label:"거래대금 상위",fn:()=>!0,sort:"value"},{key:"surge",label:"급등주",fn:(n,e)=>(e.changeRate||0)>=5,sort:"up"},{key:"plunge",label:"급락주",fn:(n,e)=>(e.changeRate||0)<=-5,sort:"down"},{key:"cheap",label:"저가주",fn:(n,e)=>(e.price||0)<2e3,sort:"value"},{key:"pricey",label:"고가주",fn:(n,e)=>(e.price||0)>=1e5,sort:"value"},{key:"lev",label:"레버리지·인버스",fn:(n,e)=>e.type==="leverage"||e.type==="inverse",sort:"value"},{key:"etf",label:"ETF·리츠",fn:(n,e)=>e.type==="etf"||e.type==="reit",sort:"value"},{key:"leader",label:"대장주",fn:(n,e)=>e.role==="leader",sort:"value"}];function ay(n){const e=R("screenerPresets"),t=R("screenerHead"),s=R("screenerList");if(!e||!s)return;e.innerHTML='<div class="sa-title">주식 골라보기 목록</div>'+Wi.map(o=>`<button data-preset="${o.key}" class="${o.key===vr?"is-active":""}">${V(o.label)}${o.badge?` <span class="sa-badge">${o.badge}</span>`:""}</button>`).join("");const i=Wi.find(o=>o.key===vr)||Wi[0];t&&(t.innerHTML=`<h2>${V(i.label)}</h2><p>조건에 맞는 종목을 모았습니다 · 모두 가상 데이터</p>`);let r=Object.entries(n.stocks||{}).filter(([o,a])=>i.fn(o,a));r=Cu(r,i.sort),s.innerHTML=r.length?r.map(([o,a],c)=>ku(c+1,o,a)).join(""):'<li class="stock-empty">조건에 맞는 종목이 없습니다</li>'}function cy(n,e){var _,y;const t=R("accountView");if(!t)return;const s=(_=n.players)==null?void 0:_[e];if(!s){t.innerHTML='<div class="acct-main"><div class="acct-section muted">계좌 정보를 불러오는 중…</div></div>';return}const i=n.stocks||{},r=bo(s,i),o=s.avgCost||{},a=Object.entries(s.holdings||{}).filter(([,T])=>T>0);let c=0,l=0,d=0;a.forEach(([T,w])=>{const C=i[T];if(!C)return;const M=(o[T]||C.price)*w;c+=C.price*w,l+=C.price*w-M,d+=M});const u=d?l/d*100:0,h=l>0?"up":l<0?"down":"flat",p=((y=R("gameRoomCode"))==null?void 0:y.textContent)||"-",m=Object.values(n.logs||{}).filter(T=>T.uid===e).sort((T,w)=>w.time-T.time).slice(0,20),v=Object.values(n.orders||{}).filter(T=>T.uid===e),I=["asset","tx","orders"].map(T=>{const w={asset:"자산",tx:"거래내역",orders:"주문내역"}[T];return`<button data-acct="${T}" class="${T===hs?"is-active":""}">${w}</button>`}).join("");let E="";if(hs==="asset"){const T=a.length?a.map(([w,C])=>{const M=i[w];if(!M)return"";const N=o[w]||0,g=N?(M.price-N)*C:0,k=N?(M.price-N)/N*100:0,S=g>0?"up":g<0?"down":"flat";return`<div class="acct-row"><div><div class="ar-name">${V(M.name)}</div><div class="ar-sub">${x(C)}주 · 평단 ${N?x(N):"-"}</div></div><div class="ar-val ${S}">${x(M.price*C)}원<br><small>${g>=0?"+":""}${k.toFixed(2)}%</small></div></div>`}).join(""):'<div class="acct-row muted">보유 종목이 없습니다</div>';E=`
      <div class="acct-hero">
        <div class="ah-no">기본계좌 · ${V(p)}</div>
        <div class="ah-asset">${Mt(r)}</div>
        <div class="ah-pnl ${h}">평가손익 ${l>=0?"+":""}${x(l)}원 (${u>=0?"+":""}${u.toFixed(2)}%)</div>
        <div class="acct-actions"><button class="btn small" data-acctact="fill">채우기</button><button class="btn small" data-acctact="send">보내기</button><button class="btn small" data-acctact="exchange">환전(빼오기)</button></div>
      </div>
      <div class="acct-grid">
        <div class="acct-stat"><div class="as-k">🏦 STONK 금고(영구)</div><div class="as-v">${Mt(Au)}</div></div>
        <div class="acct-stat"><div class="as-k">주문가능 현금</div><div class="as-v">${Mt(s.cash)}</div></div>
        <div class="acct-stat"><div class="as-k">총 투자금액(평가)</div><div class="as-v">${Mt(c)}</div></div>
        <div class="acct-stat"><div class="as-k">평가손익</div><div class="as-v ${h}">${l>=0?"+":""}${x(l)}</div></div>
      </div>
      <div class="acct-section"><h3>보유 종목</h3>${T}</div>`}else hs==="tx"?E=`<div class="acct-section"><h3>거래내역</h3>${m.length?m.map(w=>{const C=w.type==="buy"?"up":"down",M=new Date(w.time).toLocaleString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});return`<div class="acct-row"><div><div class="ar-name">${V(w.stockName)}</div><div class="ar-sub">${M}</div></div><div class="ar-val ${C}">${w.type==="buy"?"매수":"매도"} ${x(w.qty)}주<br><small>@ ${x(w.price)}</small></div></div>`}).join(""):'<div class="acct-row muted">거래내역이 없습니다</div>'}</div>`:E=`<div class="acct-section"><h3>주문내역(미체결)</h3>${v.length?v.map(w=>{const C=w.side==="buy"?"up":"down";return`<div class="acct-row"><div><div class="ar-name">${V(w.stockName||w.stockId||"")}</div><div class="ar-sub">${w.kind||"지정가"} · ${w.tif||""}</div></div><div class="ar-val ${C}">${w.side==="buy"?"매수":"매도"} ${x(w.qty)}주<br><small>${w.price?"@ "+x(w.price):""}</small></div></div>`}).join(""):'<div class="acct-row muted">미체결 주문이 없습니다</div>'}</div>`;t.innerHTML=`<aside class="acct-side">${I}</aside><div class="acct-main">${E}</div>`}function Co(){const n=R("stockHover");n&&n.classList.add("hidden")}function ly(n,e){const t=R("stockHover");if(!t)return;const s=n&&n.stocks&&n.stocks[e];if(!s){t.classList.add("hidden");return}const i=ot(s.changeRate),r=s.changeRate>0?"+":"",o=(s.changeRate||0)>=0?"왜 올랐을까?":"왜 내렸을까?",a=s.news?V(s.news):"아직 특별한 소식은 없어요. 거래대금과 수급에 따라 움직이고 있어요.";t.innerHTML=`
    <div class="sh-head">
      <span class="sh-ico" style="background:${Iu(s.name)}">${V((s.name||"?").slice(0,1))}</span>
      <div class="sh-meta">
        <b class="sh-name">${V(s.name)} ${gu(e,s)}</b>
        <span class="sh-price"><b>${x(s.price)}원</b> <span class="${i}">${Xn(s.changeRate)} ${r}${(s.changeRate??0).toFixed(2)}%</span></span>
      </div>
    </div>
    <div class="sh-chartwrap"><span class="sh-tf">일봉</span><canvas class="sh-chart"></canvas></div>
    <div class="sh-news"><b class="sh-why">${o}</b><p>${a}</p></div>`,t.classList.remove("hidden");const c=t.querySelector(".sh-chart");s.basePrice||s.previousPrice||s.price,uy(c,Su(s,e,"1d"))}function uy(n,e,t){if(!n)return;const s=window.devicePixelRatio||1,i=n.clientWidth||272,r=n.clientHeight||118;n.width=Math.round(i*s),n.height=Math.round(r*s);const o=n.getContext("2d");if(o.setTransform(s,0,0,s,0,0),o.clearRect(0,0,i,r),!e||e.length<2){o.fillStyle=pt("--muted"),o.font="12px Pretendard, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText("데이터 수집 중…",i/2,r/2);return}const a=r*.72,c=r-a-4;let l=-1/0,d=1/0,u=0;for(const y of e)l=Math.max(l,y.h),d=Math.min(d,y.l),u=Math.max(u,y.v||0);l===d&&(l+=1,d-=1);const h=(l-d)*.12;l+=h,d-=h;const p=y=>a*(1-(y-d)/(l-d));o.strokeStyle=pt("--chart-grid"),o.lineWidth=1;for(let y=1;y<=2;y++){const T=a/3*y;o.beginPath(),o.moveTo(0,Math.round(T)+.5),o.lineTo(i,Math.round(T)+.5),o.stroke()}const m=pt("--up"),v=pt("--down"),I=e.length,E=i/I,_=Math.max(1.5,Math.min(7,E*.62));e.forEach((y,T)=>{const w=T*E+E/2,C=y.c>=y.o?m:v;o.strokeStyle=C,o.fillStyle=C,o.lineWidth=1,o.beginPath(),o.moveTo(Math.round(w)+.5,p(y.h)),o.lineTo(Math.round(w)+.5,p(y.l)),o.stroke();const M=p(y.o),N=p(y.c),g=Math.min(M,N),k=Math.max(1,Math.abs(N-M));if(o.fillRect(w-_/2,g,_,k),u>0){const S=(c-2)*((y.v||0)/u);o.globalAlpha=.35,o.fillRect(w-_/2,r-S,_,S),o.globalAlpha=1}})}const Mu={home:"https://tom981105-web.github.io/STONK-Home/",battle:"https://tom981105-web.github.io/STONK-Battle/",board:"https://tom981105-web.github.io/STONK-Board/",wiki:"https://tom981105-web.github.io/STONK-Wiki/",arcade:"https://tom981105-web.github.io/STONK-Arcade/",gacha:"https://tom981105-web.github.io/STONK-Gacha/",admin:"https://tom981105-web.github.io/STONK-Admin/market-admin.html"},Za={home:"../STONK-Home/index.html",battle:"../Market-battle/index.html",board:"../Market-Board/index.html",wiki:"../Market-Wiki/index.html",arcade:"../STONK-Arcade/index.html",gacha:"../STONK-Gacha/index.html",admin:"../Market-Admin/market-admin.html"},ko="stonk:lastRoomCode",dy=["mb-board-room","wiki-room"];function Ou(){return location.protocol==="file:"||/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)}function hy(){return{urls:{...Mu},local:Ou()}}function Xt(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function xu(){try{const n=new URLSearchParams(location.search);return Xt(n.get("room")||n.get("roomCode")||n.get("roomId")||"")}catch{return""}}function Du(n){const e=Xt(n);if(e)try{localStorage.setItem(ko,e)}catch{}}function Lu(){try{const n=Xt(localStorage.getItem(ko));if(n)return n;for(const e of dy){const t=Xt(localStorage.getItem(e));if(t)return t}}catch{}return""}function fy(){return xu()||Lu()||"MAIN"}function py(n){const e=Mu[n];return Ou()&&/github\.io/.test(e||"")?Za[n]:e||Za[n]}function at(n,e){const t=py(n),s=[],i=Xt(e&&e.room);i&&s.push("room="+encodeURIComponent(i));const r=e&&(e.company||e.companyId);return r&&s.push("company="+encodeURIComponent(r)),s.length?t+(t.indexOf("?")>=0?"&":"?")+s.join("&"):t}function $u(n){return at("home",{room:n})}function my(n){return at("battle",{room:n})}function Fu(n){return at("board",{room:n})}function Uu(n,e){return at("wiki",{room:n,company:e})}function gy(n){return at("arcade",{room:n})}function _y(n){return at("gacha",{room:n})}function Bu(n){return at("admin",{room:n})}const vy={VERSION:"1.4.1",getSiteConfig:hy,normalizeRoomCode:Xt,getUrlRoomCode:xu,getCurrentRoomCode:fy,setLastRoomCode:Du,getLastRoomCode:Lu,buildSiteUrl:at,buildHomeUrl:$u,buildBattleUrl:my,buildBoardUrl:Fu,buildWikiUrl:Uu,buildArcadeUrl:gy,buildGachaUrl:_y,buildAdminUrl:Bu,LAST_ROOM_KEY:ko};typeof window<"u"&&(window.SiteConfig=vy);const yy="../STONK-Home/index.html",Vi=2600;function wy(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function by(){return/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||location.protocol==="file:"}function Ey(n){const e=wy(n);return yy+(e?`?room=${encodeURIComponent(e)}`:"")}function Iy({title:n="STONK Home에서 입장해 주세요",message:e="",roomCode:t="",auto:s=!0}={}){var c;const i=Ey(t),r=document.getElementById("stonk-home-gate");r&&r.remove();const o=document.createElement("div");o.id="stonk-home-gate",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),Object.assign(o.style,{position:"fixed",inset:"0",zIndex:"99999",display:"grid",placeItems:"center",padding:"24px",background:"radial-gradient(120% 90% at 50% -10%, rgba(139,108,255,0.22), transparent 60%), rgba(5,6,10,0.94)",backdropFilter:"blur(8px)",color:"#f4f7ff",fontFamily:"Pretendard, Inter, 'Noto Sans KR', system-ui, sans-serif"});const a=s&&!by();if(o.innerHTML=`
    <div style="width:min(460px,100%);text-align:center;padding:32px 26px;border:1px solid rgba(255,255,255,0.14);border-radius:18px;background:rgba(14,16,24,0.92);box-shadow:0 24px 70px rgba(0,0,0,0.5),0 0 60px rgba(139,108,255,0.16)">
      <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#8b6cff;margin-bottom:8px">STONK UNIVERSE</div>
      <h2 style="margin:0 0 10px;font-size:1.5rem">${n}</h2>
      <p style="margin:0 0 18px;color:#aab2c8;font-size:0.95rem;line-height:1.5">${e||"로그인 · 방 선택 · 닉네임 설정은 STONK Home에서 진행합니다."}</p>
      <a data-home-go href="${i}" style="display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 26px;border-radius:14px;font-weight:900;text-decoration:none;color:#0a0a12;background:linear-gradient(135deg,#a99bff,#8b6cff);box-shadow:0 10px 30px rgba(139,108,255,0.4)">STONK Home으로 이동</a>
      ${t?`<div style="margin-top:14px;font-size:0.82rem;color:#8a93a8">방 코드 <b style="color:#41e0ff;letter-spacing:2px">${t}</b> 유지</div>`:""}
      ${a?`<div style="margin-top:12px;font-size:0.8rem;color:#8a93a8"><span data-gate-count>${Math.ceil(Vi/1e3)}</span>초 후 자동 이동…</div>`:'<div style="margin-top:12px;font-size:0.78rem;color:#5f6678">개발 모드: 자동 이동 없음</div>'}
    </div>
  `,document.body.appendChild(o),(c=o.querySelector("[data-home-go]"))==null||c.addEventListener("click",l=>{l.preventDefault(),location.href=i}),a){let l=Math.ceil(Vi/1e3);const d=o.querySelector("[data-gate-count]"),u=setInterval(()=>{l-=1,d&&(d.textContent=String(Math.max(0,l))),l<=0&&clearInterval(u)},1e3);setTimeout(()=>{location.href=i},Vi)}return o}function Cy(){var n;(n=document.getElementById("stonk-home-gate"))==null||n.remove()}const ky="https://tom981105-web.github.io/STONK-Gacha/backgrounds/";let ps,Ie=null;function Sy(){return Ie||(Ie=document.createElement("div"),Ie.id="equip-bg",Object.assign(Ie.style,{position:"fixed",inset:"0",zIndex:"-1",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",pointerEvents:"none",opacity:"0",transition:"opacity 0.35s ease",transform:"translateZ(0)",backfaceVisibility:"hidden"}),document.body.appendChild(Ie),Ie)}function ec(){if(document.body.classList.remove("has-skin"),Ie){Ie.style.opacity="0";const n=Ie;setTimeout(()=>{ps===null&&n&&(n.style.backgroundImage="")},400)}}function Ty(n,e){let t=0;const s=()=>{if(t>=n.length){e(null);return}const i=n[t++],r=new Image;r.decoding="async",r.onload=()=>e(i),r.onerror=s,r.src=i};s()}function Ry(n){const e=n||null;if(e===ps)return;if(ps=e,!e){ec();return}const t=["webp","jpg","png"].map(s=>`${ky}${e}.${s}`);Ty(t,s=>{if(ps!==e)return;if(!s){ec();return}const i=Sy();i.style.backgroundImage=`radial-gradient(120% 90% at 50% 12%, rgba(10,12,20,0.30) 0%, rgba(8,10,16,0.52) 55%, rgba(6,7,12,0.74) 100%), url("${s}")`,i.style.opacity="1",document.body.classList.add("has-skin")})}const Ny="yaV8N60yIiUggaWNpNF2VhkCwxb2",Ay="tomem@naver.com",Zt="MAIN",f={uid:null,email:null,nickname:localStorage.getItem("mb_nickname")||localStorage.getItem("stonk:lastNickname")||"",roomCode:null,roomData:null,selectedStockId:null,tickTimer:null,isDriver:!1,tickLeaseRenewAt:0,driverWatch:null,liveState:pv(),catchupDoneFor:null,clockTimer:null,roomRef:null,lastStatus:null,histRef:null,histStockId:null,selectedHistory:null,renderQueued:!1,joinReqRef:null,joinReqId:null,isDbAdmin:!1,bank:0,bankRef:null},qs=.05,Py=15e3,My=5e3,Oy=4e3;function xy(){return f.uid===Ny||(f.email||"").toLowerCase()===Ay}!cu||!yo||!L?_u("src/firebase.js 에 본인의 Firebase 설정(firebaseConfig)을 붙여넣은 뒤 새로고침하세요."):Dy();function Dy(){let n=!1;const e=setTimeout(()=>{n||_u("Firebase에 연결할 수 없습니다. 설정값과 네트워크, Database Rules를 확인하세요.")},5e3);un($(L,".info/connected"),t=>{t.val()===!0&&(n=!0,clearTimeout(e),document.getElementById("fbError").classList.add("hidden"))}),Ly()}let is=null;function Ly(){un($(L,`rooms/${Zt}/broadcast/reloadAt`),n=>{const e=Number(n.val())||0;if(is===null){is=e;return}if(e>is){is=e;try{O==null||O("새 버전이 배포되어 새로고침합니다…","up")}catch{}setTimeout(()=>location.reload(),400)}}),pf(yo,n=>{if(n)Cy(),f.uid=n.uid,f.email=n.email||null,localStorage.setItem("mb_playerId",n.uid),$y(),Fy();else{f.uid=null,f.email=null,f.isDbAdmin=!1;const e=document.getElementById("navAdmin");e&&(e.hidden=!0),Iy({message:"로그인은 STONK Home에서 진행합니다. Home에서 입장하면 자동으로 연결됩니다."})}})}async function $y(){const n=document.getElementById("navAdmin");if(!n)return;let e=xy();if(!e&&f.uid&&L)try{e=(await vo($(L,"admins/"+f.uid))).val()===!0}catch{e=!1}f.isDbAdmin=e,n.hidden=!e}async function Fy(){if(!f.nickname){Eo("screen-auth");return}Wu(Zt)}let ji=!1;async function Uy(n){var s;if(!f.uid)return!1;if(n.players&&n.players[f.uid])return!0;if(ji)return!1;ji=!0;const e=Number((s=n.settings)==null?void 0:s.initialCash)||Ht,t=Date.now();try{await it($(L,`rooms/${Zt}/players/${f.uid}`),{nickname:f.nickname&&f.nickname.trim()||"플레이어-"+String(f.uid).slice(-4),cash:e,holdings:null,totalAsset:e,joinedAt:t,connected:!0})}catch(i){return console.warn("[join] 자동 등록 실패:",i),!1}finally{ji=!1}return!0}function Hu(){f.joinReqId=null}function Wu(n){Hu(),f.roomCode=n,localStorage.setItem("mb_roomCode",n),Du(n),e0(n);const e=$(L,`rooms/${n}/players/${f.uid}/connected`);ln(e,!0).catch(()=>{}),A_(e).set(!1).catch(()=>{}),f.roomRef&&mi(f.roomRef),f.roomRef=$(L,`rooms/${n}`),un(f.roomRef,t=>qy(Hy(t)),t=>{console.error("[room] 구독 오류:",t)}),By()}function By(){f.uid&&(f.bankRef&&mi(f.bankRef),f.bankRef=$(L,`rooms/${Zt}/bank/${f.uid}/balance`),it($(L,`rooms/${Zt}/bank/${f.uid}`),{nickname:f.nickname||"플레이어-"+String(f.uid).slice(-4)}).catch(()=>{}),un(f.bankRef,n=>{f.bank=Number(n.val()||0),zv(f.bank),de()},()=>{}))}function Hy(n){if(!n||!n.exists())return null;const e={};return n.forEach(t=>{if(t.key==="stocks"){const s={};t.forEach(i=>{const r={};i.forEach(o=>{o.key!=="history"&&(r[o.key]=o.val())}),s[i.key]=r}),e.stocks=s}else e[t.key]=t.val()}),e}function Wy(n){const e=f.selectedHistory;e&&e.id&&n&&n.stocks&&n.stocks[e.id]&&(n.stocks[e.id].history=e.data||null)}function Ks(n){n!==f.histStockId&&(f.histRef&&(mi(f.histRef),f.histRef=null),f.histStockId=n||null,f.selectedHistory=n?{id:n,data:null}:null,!(!n||!f.roomCode)&&(f.histRef=$(L,`rooms/${f.roomCode}/stocks/${n}/history`),un(f.histRef,e=>{f.histStockId===n&&(f.selectedHistory={id:n,data:e.val()||null},f.roomData&&f.roomData.stocks&&f.roomData.stocks[n]&&(f.roomData.stocks[n].history=f.selectedHistory.data),de())},e=>console.error("[history] 구독 오류:",e))))}function de(){f.renderQueued||(f.renderQueued=!0,requestAnimationFrame(()=>{f.renderQueued=!1,f.roomData&&f.roomData.status==="playing"&&Tv(f)}))}function Vu(n){const e=n==="dark"?"dark":"light";document.documentElement.dataset.theme=e;try{localStorage.setItem("stonk:theme",e)}catch{}const t=document.getElementById("themeToggle");t&&(t.textContent=e==="dark"?"☀️":"🌙")}function Vy(){let n="light";try{n=localStorage.getItem("stonk:theme")||"light"}catch{}Vu(n)}function jy(){Vu(document.documentElement.dataset.theme==="dark"?"light":"dark")}function yn(n){const e=document.getElementById("screen-game");e&&(e.dataset.tab=n,document.querySelectorAll(".tnav-tab").forEach(t=>t.classList.toggle("is-active",t.dataset.tab===n)),document.querySelectorAll(".tab-view").forEach(t=>t.classList.toggle("hidden",t.dataset.view!==n)),n==="detail"&&Io(),f.roomData&&de())}function Gy(n){n&&(Co(),f.selectedStockId=n,Ks(n),t0(n),yn("detail"))}let Gi=null,ms=null;function zy(n){const e=document.getElementById("stockHover");if(!e)return;const t=e.offsetWidth||300,s=e.offsetHeight||240;let i=n.right+12;i+t>window.innerWidth-8&&(i=n.left-t-12),i<8&&(i=8);let r=n.top;r+s>window.innerHeight-8&&(r=window.innerHeight-s-8),r<8&&(r=8),e.style.left=i+"px",e.style.top=r+"px"}function tc(n){const e=document.getElementById(n);e&&(e.addEventListener("mouseover",t=>{const s=t.target.closest(".rank-item");if(!s||!f.roomData)return;const i=s.dataset.id;i!==ms&&(clearTimeout(Gi),Gi=setTimeout(()=>{ms=i,ly(f.roomData,i),zy(s.getBoundingClientRect())},90))}),e.addEventListener("mouseleave",()=>{clearTimeout(Gi),ms=null,Co()}))}function qy(n){if(!n){xe(),br(),Qs(),f.roomData=null,f.lastStatus=null,nc();return}if(f.roomData=n,Wy(n),Ry(n.players&&f.uid&&n.players[f.uid]?n.players[f.uid].equippedBackground:null),n.status==="playing"){if(f.uid&&!(n.players&&n.players[f.uid])){Uy(n);return}if(f.lastStatus!=="playing"){Eo("screen-game"),vu(),Zy();const e=Object.keys(n.stocks||{});!f.selectedStockId&&e.length&&(f.selectedStockId=e[0])}f.selectedStockId!==f.histStockId&&Ks(f.selectedStockId),de(),Ky(n),Gu(n),Xy()}else xe(),br(),Qs(),Ks(null),Io(),nc();f.lastStatus=n.status}function nc(){Eo("screen-wait");const n=document.getElementById("waitNickname");n&&(n.textContent=f.nickname?`${f.nickname} 님`:"")}async function Ky(n){if(!n||n.status!=="playing"||!f.uid||f.catchupDoneFor===f.roomCode)return;if(!wi(n)){f.catchupDoneFor=f.roomCode;return}const e=n.market&&n.market.lastTickAt||n.marketTick||0;if(e&&e<Yy(n)){f.catchupDoneFor=f.roomCode;try{await ln($(L,`rooms/${f.roomCode}/market/lastTickAt`),Date.now())}catch{}return}if(!hv(n)){f.catchupDoneFor=f.roomCode;return}f.catchupDoneFor=f.roomCode;try{const t=await fv(f.roomCode,n,f.uid);t.applied&&(vu(),O(`시장 경과 보정 완료 (${Math.round(t.elapsed/6e4)}분, 캔들 ${t.candlesWritten}개)`,"up"))}catch(t){console.warn("[catchup] 보정 실패:",t)}}async function ju(){if(!f.roomCode||!f.uid)return!1;const n=Date.now();try{return(await le($(L,`rooms/${f.roomCode}/market/tickLease`),t=>{if(!(t&&t.by!==f.uid&&(t.expiresAt||0)>n))return{by:f.uid,at:n,expiresAt:n+Py}})).committed}catch{return!1}}function Ys(n){const e=n&&n.market||{};let t=Number.isFinite(e.openHour)?Math.round(e.openHour):18,s=Number.isFinite(e.closeHour)?Math.round(e.closeHour):24;return t=Math.max(0,Math.min(24,t)),s=Math.max(0,Math.min(24,s)),{oh:t,ch:s}}function wi(n){const{oh:e,ch:t}=Ys(n);if(e===t)return!0;const s=new Date().getHours();return t>e?s>=e&&s<t:s>=e||s<t}function Yy(n){const{oh:e,ch:t}=Ys(n),s=new Date,i=new Date(s.getFullYear(),s.getMonth(),s.getDate(),e,0,0,0).getTime();return t>=e?i:s.getHours()<t?i-864e5:i}async function Gu(n){var a,c;if(n=n||f.roomData,!n||n.status!=="playing"){xe();return}if(!wi(n)){xe();return}if(!f.uid)return;const e=Date.now(),t=n.market&&n.market.tickLease,s=t&&t.by!==f.uid&&(t.expiresAt||0)>e;if(f.isDriver){s&&xe();return}const i=n.hostId===f.uid,r=n.hostId&&((c=(a=n.players)==null?void 0:a[n.hostId])==null?void 0:c.connected)!==!1;if(s||!i&&r)return;await ju()&&Qy()}function Qy(){f.tickTimer||(f.isDriver=!0,f.tickLeaseRenewAt=Date.now(),f.tickTimer=setInterval(async()=>{const n=f.roomData;if(!n||n.status!=="playing"){xe();return}if(!wi(n)){xe();return}try{if(Date.now()-f.tickLeaseRenewAt>=My){if(!await ju()){xe();return}f.tickLeaseRenewAt=Date.now()}await X_(f.roomCode,n),await Z_(f.roomCode,n),await sv(f.roomCode,n),await mv(f.roomCode,n,f.liveState)}catch(e){console.error("[tick] 시장 틱 오류:",e)}},mr))}function xe(){f.tickTimer&&(clearInterval(f.tickTimer),f.tickTimer=null),f.isDriver=!1}async function Jy(){if(!f.roomCode||!f.uid)return;const n=f.roomCode;try{await le($(L,`rooms/${n}/market/tickLease`),e=>e&&e.by===f.uid?null:e)}catch{}}function Xy(){f.driverWatch||(f.driverWatch=setInterval(()=>{Gu(f.roomData)},Oy))}function br(){f.driverWatch&&(clearInterval(f.driverWatch),f.driverWatch=null)}function Zy(){Qs(),f.clockTimer=setInterval(()=>{const n=f.roomData;if(!n||n.status!=="playing")return;const e=!wi(n),t=document.getElementById("marketClosed");t&&(t.classList.toggle("hidden",!e),e&&(t.textContent=`🌙 장 마감 — 매일 ${String(Ys(n).oh).padStart(2,"0")}:00 개장 (${String(Ys(n).ch%24).padStart(2,"0")}:00 마감)`)),!e&&(ey(Date.now()-(n.startedAt||Date.now())),wu(),Zv(n))},250)}function Qs(){f.clockTimer&&(clearInterval(f.clockTimer),f.clockTimer=null)}function rs(){Jy(),xe(),br(),Qs(),Hu(),Io(),f.roomRef&&(mi(f.roomRef),f.roomRef=null),Ks(null),location.href=$u()}function e0(n){const e="",t=(s,i)=>{const r=document.getElementById(s);r&&(r.href=i)};t("navBoard",Fu(n)),t("navWiki",Uu(n,e)),t("navAdmin",Bu(n))}async function sc(){if(!f.roomCode||!f.roomData){O("복사할 시장 데이터가 없습니다","err");return}const n={roomCode:f.roomCode,status:f.roomData.status,startedAt:f.roomData.startedAt||null,marketTick:f.roomData.marketTick||Date.now(),latestNews:f.roomData.latestNews||null,botFeed:f.roomData.botFeed||[],stocks:f.roomData.stocks||{},players:f.roomData.players||{},logs:f.roomData.logs||{}},e=JSON.stringify(n,null,2);try{await navigator.clipboard.writeText(e),O("STONK Board에 가져올 시장 데이터를 복사했습니다")}catch{prompt("STONK Board 관리자 화면에 붙여넣을 시장 데이터입니다:",e)}}function Bn(){return Math.max(1,Math.floor(Number(document.getElementById("qtyInput").value)||1))}async function zi(n){var a,c;const{roomCode:e,roomData:t,uid:s,nickname:i,selectedStockId:r}=f;if(!t||t.status!=="playing")return;if(!r){O("종목을 먼저 선택하세요","err");return}const o=((c=(a=t.stocks)==null?void 0:a[r])==null?void 0:c.name)||"";try{n==="buy"?(await wo(e,s,i,r,Bn(),t),O(`${o} 매수 체결!`,"up")):n==="sell"?(await yi(e,s,i,r,Bn(),t),O(`${o} 매도 체결!`,"down")):n==="sellAll"&&(await hu(e,s,i,r,t),O(`${o} 전량 매도 체결!`,"down")),vv("tradeMsg","",!1)}catch(l){O(l.message,"err")}}function Js(n){return Math.floor(Number(document.getElementById(n).value)||0)}function t0(n){var s,i,r;const e=(r=(i=(s=f.roomData)==null?void 0:s.stocks)==null?void 0:i[n])==null?void 0:r.price;if(!e)return;const t=(o,a)=>{const c=document.getElementById(o);c&&(c.value=a)};t("limitPrice",e),t("stopLoss",Math.round(e*.95)),t("takeProfit",Math.round(e*1.1))}async function ic(n){var l,d;const{roomCode:e,roomData:t,uid:s,nickname:i,selectedStockId:r}=f;if(!t||t.status!=="playing")return;if(!r)return O("종목을 먼저 선택하세요","err");const o=Js("limitPrice");if(!o)return O("지정가를 입력하세요","err");const a=document.getElementById("limitTif").value,c=((d=(l=t.stocks)==null?void 0:l[r])==null?void 0:d.name)||"";try{await Hs(e,s,i,r,{side:n,trigger:n==="buy"?"below":"above",tif:a,label:"지정가"},Bn(),o,t),O(`${c} 지정가 ${n==="buy"?"매수":"매도"} 등록!`,n==="buy"?"up":"down")}catch(u){O(u.message,"err")}}async function n0(){var l,d,u,h,p;const{roomCode:n,roomData:e,uid:t,nickname:s,selectedStockId:i}=f;if(!e||e.status!=="playing")return;if(!i)return O("종목을 먼저 선택하세요","err");const r=((u=(d=(l=e.players)==null?void 0:l[t])==null?void 0:d.holdings)==null?void 0:u[i])||0;if(r<1)return O("보유한 종목에만 설정할 수 있어요","err");const o=Js("stopLoss"),a=Js("takeProfit");if(!o&&!a)return O("손절가 또는 익절가를 입력하세요","err");const c=((p=(h=e.stocks)==null?void 0:h[i])==null?void 0:p.name)||"";try{o&&await Hs(n,t,s,i,{side:"sell",trigger:"below",tif:"gtc",label:"손절"},r,o,e),a&&await Hs(n,t,s,i,{side:"sell",trigger:"above",tif:"gtc",label:"익절"},r,a,e),O(`${c} 손절·익절 설정 완료 (보유 ${r}주)`,"down")}catch(m){O(m.message,"err")}}async function s0(){var d,u,h,p;const{roomCode:n,roomData:e,uid:t,nickname:s,selectedStockId:i}=f;if(!e||e.status!=="playing")return;if(!i)return O("종목을 먼저 선택하세요","err");const r=Bn(),o=Math.max(2,Math.min(10,Js("splitCount")||3)),a=((u=(d=e.stocks)==null?void 0:d[i])==null?void 0:u.price)||0;if(!a)return;const c=Math.floor(r/o);if(c<1)return O(`분할하려면 수량이 최소 ${o}주 이상이어야 해요`,"err");const l=((p=(h=e.stocks)==null?void 0:h[i])==null?void 0:p.name)||"";try{for(let m=0;m<o;m++){const v=Math.round(a*(1-m*.015));await Hs(n,t,s,i,{side:"buy",trigger:"below",tif:"gtc",label:`분할${m+1}`},c,v,e)}O(`${l} ${o}회 분할매수 등록! (회당 ${c}주)`,"up")}catch(m){O(m.message,"err")}}async function i0(n){try{await nv(f.roomCode,n),O("예약 주문 취소됨")}catch(e){O(e.message,"err")}}async function r0(){const{roomCode:n,roomData:e,uid:t}=f,s=e==null?void 0:e.ipo;if(!s||s.status!=="subscribing"){O("청약 가능한 공모주가 없습니다","err");return}const i=Math.max(1,Math.floor(Number(document.getElementById("ipoQty").value)||0));try{await ev(n,t,i,e),O(`${s.name} ${i.toLocaleString("ko-KR")}주 청약 완료!`,"up")}catch(r){O(r.message,"err")}}async function o0(){const n=f.nickname||"",e=prompt("사용할 닉네임을 입력하세요 (최대 10자)",n);if(e===null)return;const t=e.trim().slice(0,10);if(!t){O("닉네임을 입력하세요","err");return}f.nickname=t;try{localStorage.setItem("mb_nickname",t),localStorage.setItem("stonk:lastNickname",t)}catch{}try{f.uid&&f.roomCode&&await ln($(L,`rooms/${f.roomCode}/players/${f.uid}/nickname`),t)}catch(s){console.warn("[nickname] 저장 실패:",s)}O(`닉네임을 '${t}'(으)로 변경했습니다`,"up")}async function a0(n,e,t){var c,l;const{roomCode:s,roomData:i,uid:r,nickname:o}=f;if(!i||i.status!=="playing")return;const a=((l=(c=i.stocks)==null?void 0:c[n])==null?void 0:l.name)||"";try{e==="buy"?(await wo(s,r,o,n,t,i),O(`${a} ${t}주 매수 체결!`,"up")):e==="sell"?(await yi(s,r,o,n,t,i),O(`${a} ${t}주 매도 체결!`,"down")):e==="all"&&(await hu(s,r,o,n,i),O(`${a} 전량 매도 체결!`,"down"))}catch(d){O(d.message,"err")}}const Wt=n=>Math.round(Number(n)||0).toLocaleString("ko-KR");async function c0(){var o,a;const{roomCode:n,roomData:e,uid:t}=f;if(!e||!t)return;const s=((a=(o=e.players)==null?void 0:o[t])==null?void 0:a.cash)||0;if(s<1){O("환전할 현금이 없습니다","err");return}const i=prompt(`환전(빼오기): 시장 현금을 금고로 옮깁니다. 수수료 ${qs*100}%
보유 현금 ${Wt(s)}원
옮길 금액을 입력하세요:`,String(s));if(i===null)return;const r=Math.floor(Number(i)||0);if(!r||r<1){O("금액을 확인하세요","err");return}try{if(!(await le($(L,`rooms/${n}/players/${t}/cash`),d=>{if(d=Number(d)||0,!(d<r))return d-r})).committed){O("현금이 부족합니다","err");return}const l=Math.floor(r*(1-qs));await le($(L,`rooms/${n}/bank/${t}/balance`),d=>(Number(d)||0)+l),O(`금고로 ${Wt(l)}원 환전 완료 (수수료 ${Wt(r-l)}원)`,"up")}catch(c){O("환전 실패: "+c.message,"err")}}async function l0(){const{roomCode:n,uid:e}=f;if(!e)return;const t=f.bank||0;if(t<1){O("금고 잔액이 없습니다. 먼저 환전(빼오기) 하세요","err");return}const s=prompt(`채우기: 금고 잔액을 시장 현금으로 넣습니다. 수수료 ${qs*100}%
금고 잔액 ${Wt(t)}원
넣을 금액을 입력하세요:`,String(t));if(s===null)return;const i=Math.floor(Number(s)||0);if(!i||i<1){O("금액을 확인하세요","err");return}try{if(!(await le($(L,`rooms/${n}/bank/${e}/balance`),a=>{if(a=Number(a)||0,!(a<i))return a-i})).committed){O("금고 잔액이 부족합니다","err");return}const o=Math.floor(i*(1-qs));await le($(L,`rooms/${n}/players/${e}/cash`),a=>(Number(a)||0)+o),O(`시장 현금 ${Wt(o)}원 충전 완료 (수수료 ${Wt(i-o)}원)`,"up")}catch(r){O("채우기 실패: "+r.message,"err")}}function u0(){var o,a,c,l,d,u,h,p,m,v,I,E,_,y,T,w,C,M,N;(o=document.querySelector(".tnav-acct"))==null||o.addEventListener("click",o0);const n=document.getElementById("holdingsList");n&&(n.addEventListener("click",g=>{var pe,ge,Rt,ct,dn,So;const k=g.target.closest("[data-holdtoggle]");if(k){Yv(k.dataset.holdtoggle),de();return}const S=g.target.closest(".hold-trade");if(!S)return;const H=S.dataset.trade,A=S.querySelector(".ht-input"),q=g.target.closest("[data-htq]");if(q){const Zn=q.dataset.htq;if(Zn==="max"){const hn=(Rt=(ge=(pe=f.roomData)==null?void 0:pe.stocks)==null?void 0:ge[H])==null?void 0:Rt.price,zu=((So=(dn=(ct=f.roomData)==null?void 0:ct.players)==null?void 0:dn[f.uid])==null?void 0:So.cash)||0;if(hn){const To=Math.max(1,Math.floor(zu/(hn*1.0002)));Hi(To),A&&(A.value=To)}}else{const hn=Math.max(1,Math.floor(Number(A==null?void 0:A.value)||1)+Number(Zn));Hi(hn),A&&(A.value=hn)}return}const Z=g.target.closest("[data-ht]");if(Z){const Zn=Math.max(1,Math.floor(Number(A==null?void 0:A.value)||1));a0(H,Z.dataset.ht,Zn)}}),n.addEventListener("input",g=>{g.target.classList.contains("ht-input")&&Hi(g.target.value)})),(a=document.getElementById("btnNickname"))==null||a.addEventListener("click",()=>{const g=document.getElementById("nicknameInput").value.trim();g&&(f.nickname=g,localStorage.setItem("mb_nickname",g),Wu(Zt))}),(c=document.getElementById("nicknameInput"))==null||c.addEventListener("keydown",g=>{g.key==="Enter"&&document.getElementById("btnNickname").click()}),(l=document.getElementById("btnWaitHome"))==null||l.addEventListener("click",rs),(d=document.getElementById("btnCopyCode2"))==null||d.addEventListener("click",sc),(u=document.getElementById("btnCopyMarketBoard"))==null||u.addEventListener("click",sc),(h=document.getElementById("btnLeaveGame"))==null||h.addEventListener("click",rs);const e=g=>{const k=g.target.closest("[data-star]");if(k){g.stopPropagation(),Iv(k.dataset.star),de();return}const S=g.target.closest(".rank-item");S&&Gy(S.dataset.id)};(p=document.getElementById("stockList"))==null||p.addEventListener("click",e),(m=document.getElementById("screenerList"))==null||m.addEventListener("click",e),tc("stockList"),tc("screenerList"),window.addEventListener("scroll",()=>{ms=null,Co()},!0),Vy(),(v=document.getElementById("themeToggle"))==null||v.addEventListener("click",jy),(I=document.querySelector(".tnav-brand"))==null||I.addEventListener("click",()=>yn("home")),(E=document.getElementById("tnavTabs"))==null||E.addEventListener("click",g=>{const k=g.target.closest(".tnav-tab");k&&yn(k.dataset.tab)}),(_=document.getElementById("btnDetailBack"))==null||_.addEventListener("click",()=>yn("home"));const t=document.getElementById("globalSearch");t&&t.addEventListener("input",()=>{Ui(t.value);const g=document.getElementById("screen-game");g&&g.dataset.tab!=="home"&&yn("home"),de()}),document.addEventListener("keydown",g=>{var S;if(g.key!=="/")return;const k=document.activeElement;k&&/^(input|textarea|select)$/i.test(k.tagName)||(S=document.getElementById("screen-game"))!=null&&S.classList.contains("hidden")||(g.preventDefault(),t==null||t.focus())}),(y=document.getElementById("homeSeg"))==null||y.addEventListener("click",g=>{const k=g.target.closest(".seg-btn");k&&(document.querySelectorAll("#homeSeg .seg-btn").forEach(S=>S.classList.toggle("is-active",S===k)),Wa(k.dataset.home==="sectors"?"up":"value"),de())}),(T=document.getElementById("homeFilters"))==null||T.addEventListener("click",g=>{const k=g.target.closest(".fchip");k&&(k.dataset.filter&&(document.querySelectorAll("#homeFilters [data-filter]").forEach(S=>S.classList.toggle("is-active",S===k)),Pv(k.dataset.filter)),k.dataset.sort&&(document.querySelectorAll("#homeFilters [data-sort]").forEach(S=>S.classList.toggle("is-active",S===k)),Wa(k.dataset.sort)),de())}),(w=document.getElementById("screenerPresets"))==null||w.addEventListener("click",g=>{const k=g.target.closest("[data-preset]");k&&(Mv(k.dataset.preset),de())}),(C=document.getElementById("accountView"))==null||C.addEventListener("click",g=>{const k=g.target.closest("[data-acctact]");if(k){const H=k.dataset.acctact;H==="fill"?l0():H==="exchange"?c0():H==="send"&&rs();return}const S=g.target.closest("[data-acct]");S&&(Ov(S.dataset.acct),de())}),(M=document.getElementById("feedView"))==null||M.addEventListener("click",g=>{if(g.target.closest("#feedBoardLink")){const k=document.getElementById("navBoard");k&&k.href&&window.open(k.href,"_blank","noopener")}}),document.querySelectorAll(".qty-btn[data-qty]").forEach(g=>{g.addEventListener("click",()=>{const k=document.getElementById("qtyInput");k.value=Math.max(1,Bn()+Number(g.dataset.qty))})}),document.getElementById("btnMaxQty").addEventListener("click",()=>{var q,Z,pe,ge;const{roomData:g,uid:k,selectedStockId:S}=f,H=(Z=(q=g==null?void 0:g.stocks)==null?void 0:q[S])==null?void 0:Z.price,A=((ge=(pe=g==null?void 0:g.players)==null?void 0:pe[k])==null?void 0:ge.cash)||0;H&&(document.getElementById("qtyInput").value=Math.max(1,Math.floor(A/(H*1.0002))))}),document.getElementById("btnBuy").addEventListener("click",()=>zi("buy")),document.getElementById("btnSell").addEventListener("click",()=>zi("sell")),document.getElementById("btnSellAll").addEventListener("click",()=>zi("sellAll")),document.getElementById("orderTabs").addEventListener("click",g=>{const k=g.target.closest(".order-tab");if(!k)return;const S=k.dataset.tab;document.querySelectorAll(".order-tab").forEach(H=>H.classList.toggle("is-active",H===k)),document.querySelectorAll(".order-pane").forEach(H=>H.classList.toggle("hidden",H.dataset.pane!==S))}),document.getElementById("btnLimitBuy").addEventListener("click",()=>ic("buy")),document.getElementById("btnLimitSell").addEventListener("click",()=>ic("sell")),document.getElementById("btnSetStop").addEventListener("click",n0),document.getElementById("btnSplitBuy").addEventListener("click",s0),document.getElementById("orderList").addEventListener("click",g=>{const k=g.target.closest("[data-cancel]");k&&i0(k.dataset.cancel)}),document.getElementById("btnAlert").addEventListener("click",()=>{var Z;const{roomData:g,selectedStockId:k}=f,S=(Z=g==null?void 0:g.stocks)==null?void 0:Z[k];if(!S)return O("종목을 먼저 선택하세요","err");try{window.Notification&&Notification.permission==="default"&&Notification.requestPermission()}catch{}const H=kv(S.name),A=prompt(`${S.name} 가격 알림 설정
현재가 ${S.price.toLocaleString("ko-KR")}원
알림받을 가격을 입력하세요 (0 또는 빈칸 = 해제):`,H||S.price);if(A===null)return;const q=Math.floor(Number(A)||0);Cv(S.name,q),O(q?`${S.name} ${q.toLocaleString("ko-KR")}원 알림 설정됨`:`${S.name} 알림 해제됨`),de()}),document.getElementById("btnApplyIpo").addEventListener("click",r0);const s=document.getElementById("stockSearch"),i=document.getElementById("stockSearchClear");s&&s.addEventListener("input",()=>{Ui(s.value),i&&(i.hidden=!s.value),de()}),i&&i.addEventListener("click",()=>{s.value="",Ui(""),i.hidden=!0,s.focus(),de()});const r=document.getElementById("marketStatusChip");r&&r.addEventListener("click",()=>{const g=document.getElementById("marketStatusPanel");if(!g)return;const k=g.classList.toggle("hidden");r.setAttribute("aria-expanded",k?"false":"true"),!k&&f.roomData&&yu(f)}),(N=document.getElementById("btnBackHome"))==null||N.addEventListener("click",rs)}u0();
