(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var No={};/**
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
 */const cc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(n,e){if(!n)throw en(e)},en=function(n){return new Error("Firebase Database ("+cc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const lc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ku=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},kr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(h=64)),s.push(t[d],t[u],t[h],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(lc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ku(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||u==null)throw new zu;const h=r<<2|a>>4;if(s.push(h),l!==64){const p=a<<4&240|l>>2;if(s.push(p),u!==64){const g=l<<6&192|u;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uc=function(n){const e=lc(n);return kr.encodeByteArray(e,!0)},ws=function(n){return uc(n).replace(/\./g,"")},Es=function(n){try{return kr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yu(n){return dc(void 0,n)}function dc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Qu(t)||(n[t]=dc(n[t],e[t]));return n}function Qu(n){return n!=="__proto__"}/**
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
 */const Xu=()=>Ju().__FIREBASE_DEFAULTS__,Zu=()=>{if(typeof process>"u"||typeof No>"u")return;const n=No.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ed=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Es(n[1]);return e&&JSON.parse(e)},Sr=()=>{try{return Xu()||Zu()||ed()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},hc=n=>{var e,t;return(t=(e=Sr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},td=n=>{const e=hc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},fc=()=>{var n;return(n=Sr())===null||n===void 0?void 0:n.config},pc=n=>{var e;return(e=Sr())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function nd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ws(JSON.stringify(t)),ws(JSON.stringify(o)),""].join(".")}/**
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
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function sd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function id(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rd(){const n=ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function od(){return cc.NODE_ADMIN===!0}function ad(){try{return typeof indexedDB=="object"}catch{return!1}}function cd(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const ld="FirebaseError";class at extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ld,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vn.prototype.create)}}class Vn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ud(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new at(i,a,s)}}function ud(n,e){return n.replace(dd,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const dd=/\{\$([^}]+)}/g;/**
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
 */function An(n){return JSON.parse(n)}function X(n){return JSON.stringify(n)}/**
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
 */const gc=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=An(Es(r[0])||""),t=An(Es(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},hd=function(n){const e=gc(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},fd=function(n){const e=gc(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ce(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function vt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function bs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Is(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Cs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Po(r)&&Po(o)){if(!Cs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Po(n){return n!==null&&typeof n=="object"}/**
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
 */function tn(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _n(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function vn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class pd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),d=1518500249):(l=r^o^a,d=1859775393):u<60?(l=r&o|a&(r|o),d=2400959708):(l=r^o^a,d=3395469782);const h=(i<<5|i>>>27)+l+c+d+s[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function md(n,e){const t=new gd(n,e);return t.subscribe.bind(t)}class gd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");_d(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Si),i.error===void 0&&(i.error=Si),i.complete===void 0&&(i.complete=Si);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _d(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Si(){}function Vt(n,e){return`${n} failed: ${e} argument `}/**
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
 */const vd=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ni=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function se(n){return n&&n._delegate?n._delegate:n}class yt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dt="[DEFAULT]";/**
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
 */class yd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ve;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ed(e))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dt){return this.instances.has(e)}getOptions(e=dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:wd(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=dt){return this.component?this.component.multipleInstances?e:dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wd(n){return n===dt?void 0:n}function Ed(n){return n.instantiationMode==="EAGER"}/**
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
 */class bd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Id={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Cd=H.INFO,kd={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Sd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=kd[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rr{constructor(e){this.name=e,this._logLevel=Cd,this._logHandler=Sd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Id[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Td=(n,e)=>e.some(t=>n instanceof t);let Oo,Mo;function Rd(){return Oo||(Oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ad(){return Mo||(Mo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _c=new WeakMap,Yi=new WeakMap,vc=new WeakMap,Ti=new WeakMap,Ar=new WeakMap;function Nd(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Xe(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_c.set(t,n)}).catch(()=>{}),Ar.set(e,n),e}function Pd(n){if(Yi.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Yi.set(n,e)}let Qi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Od(n){Qi=n(Qi)}function Md(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ri(this),e,...t);return vc.set(s,e.sort?e.sort():[e]),Xe(s)}:Ad().includes(n)?function(...e){return n.apply(Ri(this),e),Xe(_c.get(this))}:function(...e){return Xe(n.apply(Ri(this),e))}}function Ld(n){return typeof n=="function"?Md(n):(n instanceof IDBTransaction&&Pd(n),Td(n,Rd())?new Proxy(n,Qi):n)}function Xe(n){if(n instanceof IDBRequest)return Nd(n);if(Ti.has(n))return Ti.get(n);const e=Ld(n);return e!==n&&(Ti.set(n,e),Ar.set(e,n)),e}const Ri=n=>Ar.get(n);function Dd(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Xe(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Xe(o.result),c.oldVersion,c.newVersion,Xe(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const xd=["get","getKey","getAll","getAllKeys","count"],$d=["put","add","delete","clear"],Ai=new Map;function Lo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ai.get(e))return Ai.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=$d.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||xd.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Ai.set(e,r),r}Od(n=>({...n,get:(e,t,s)=>Lo(e,t)||n.get(e,t,s),has:(e,t)=>!!Lo(e,t)||n.has(e,t)}));/**
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
 */class Fd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ud(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ud(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ji="@firebase/app",Do="0.10.13";/**
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
 */const Fe=new Rr("@firebase/app"),Bd="@firebase/app-compat",Wd="@firebase/analytics-compat",Hd="@firebase/analytics",jd="@firebase/app-check-compat",Vd="@firebase/app-check",Gd="@firebase/auth",qd="@firebase/auth-compat",Kd="@firebase/database",zd="@firebase/data-connect",Yd="@firebase/database-compat",Qd="@firebase/functions",Jd="@firebase/functions-compat",Xd="@firebase/installations",Zd="@firebase/installations-compat",eh="@firebase/messaging",th="@firebase/messaging-compat",nh="@firebase/performance",sh="@firebase/performance-compat",ih="@firebase/remote-config",rh="@firebase/remote-config-compat",oh="@firebase/storage",ah="@firebase/storage-compat",ch="@firebase/firestore",lh="@firebase/vertexai-preview",uh="@firebase/firestore-compat",dh="firebase",hh="10.14.1";/**
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
 */const Xi="[DEFAULT]",fh={[Ji]:"fire-core",[Bd]:"fire-core-compat",[Hd]:"fire-analytics",[Wd]:"fire-analytics-compat",[Vd]:"fire-app-check",[jd]:"fire-app-check-compat",[Gd]:"fire-auth",[qd]:"fire-auth-compat",[Kd]:"fire-rtdb",[zd]:"fire-data-connect",[Yd]:"fire-rtdb-compat",[Qd]:"fire-fn",[Jd]:"fire-fn-compat",[Xd]:"fire-iid",[Zd]:"fire-iid-compat",[eh]:"fire-fcm",[th]:"fire-fcm-compat",[nh]:"fire-perf",[sh]:"fire-perf-compat",[ih]:"fire-rc",[rh]:"fire-rc-compat",[oh]:"fire-gcs",[ah]:"fire-gcs-compat",[ch]:"fire-fst",[uh]:"fire-fst-compat",[lh]:"fire-vertex","fire-js":"fire-js",[dh]:"fire-js-all"};/**
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
 */const ks=new Map,ph=new Map,Zi=new Map;function xo(n,e){try{n.container.addComponent(e)}catch(t){Fe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gt(n){const e=n.name;if(Zi.has(e))return Fe.debug(`There were multiple attempts to register component ${e}.`),!1;Zi.set(e,n);for(const t of ks.values())xo(t,n);for(const t of ph.values())xo(t,n);return!0}function Nr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Se(n){return n.settings!==void 0}/**
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
 */const mh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ze=new Vn("app","Firebase",mh);/**
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
 */class gh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}/**
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
 */const nn=hh;function yc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ze.create("bad-app-name",{appName:String(i)});if(t||(t=fc()),!t)throw Ze.create("no-options");const r=ks.get(i);if(r){if(Cs(t,r.options)&&Cs(s,r.config))return r;throw Ze.create("duplicate-app",{appName:i})}const o=new bd(i);for(const c of Zi.values())o.addComponent(c);const a=new gh(t,s,o);return ks.set(i,a),a}function wc(n=Xi){const e=ks.get(n);if(!e&&n===Xi&&fc())return yc();if(!e)throw Ze.create("no-app",{appName:n});return e}function et(n,e,t){var s;let i=(s=fh[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fe.warn(a.join(" "));return}Gt(new yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _h="firebase-heartbeat-database",vh=1,Nn="firebase-heartbeat-store";let Ni=null;function Ec(){return Ni||(Ni=Dd(_h,vh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ze.create("idb-open",{originalErrorMessage:n.message})})),Ni}async function yh(n){try{const t=(await Ec()).transaction(Nn),s=await t.objectStore(Nn).get(bc(n));return await t.done,s}catch(e){if(e instanceof at)Fe.warn(e.message);else{const t=Ze.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fe.warn(t.message)}}}async function $o(n,e){try{const s=(await Ec()).transaction(Nn,"readwrite");await s.objectStore(Nn).put(e,bc(n)),await s.done}catch(t){if(t instanceof at)Fe.warn(t.message);else{const s=Ze.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Fe.warn(s.message)}}}function bc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const wh=1024,Eh=30*24*60*60*1e3;class bh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ch(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Eh}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Fe.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fo(),{heartbeatsToSend:s,unsentEntries:i}=Ih(this._heartbeatsCache.heartbeats),r=ws(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Fe.warn(t),""}}}function Fo(){return new Date().toISOString().substring(0,10)}function Ih(n,e=wh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Uo(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Uo(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Ch{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ad()?cd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $o(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $o(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uo(n){return ws(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function kh(n){Gt(new yt("platform-logger",e=>new Fd(e),"PRIVATE")),Gt(new yt("heartbeat",e=>new bh(e),"PRIVATE")),et(Ji,Do,n),et(Ji,Do,"esm2017"),et("fire-js","")}kh("");var Sh="firebase",Th="10.14.1";/**
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
 */et(Sh,Th,"app");function Pr(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Ic(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rh=Ic,Cc=new Vn("auth","Firebase",Ic());/**
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
 */const Ss=new Rr("@firebase/auth");function Ah(n,...e){Ss.logLevel<=H.WARN&&Ss.warn(`Auth (${nn}): ${n}`,...e)}function us(n,...e){Ss.logLevel<=H.ERROR&&Ss.error(`Auth (${nn}): ${n}`,...e)}/**
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
 */function Ie(n,...e){throw Or(n,...e)}function Re(n,...e){return Or(n,...e)}function kc(n,e,t){const s=Object.assign(Object.assign({},Rh()),{[e]:t});return new Vn("auth","Firebase",s).create(e,{appName:n.name})}function xe(n){return kc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Or(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Cc.create(n,...e)}function N(n,e,...t){if(!n)throw Or(e,...t)}function Oe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw us(e),new Error(e)}function Ue(n,e){n||Oe(e)}/**
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
 */function er(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Nh(){return Bo()==="http:"||Bo()==="https:"}function Bo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Ph(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nh()||id()||"connection"in navigator)?navigator.onLine:!0}function Oh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Gn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ue(t>e,"Short delay should be less than long delay!"),this.isMobile=Tr()||mc()}get(){return Ph()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mr(n,e){Ue(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Sc{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Oe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Oe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Oe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Mh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Lh=new Gn(3e4,6e4);function ct(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function lt(n,e,t,s,i={}){return Tc(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=tn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},r);return sd()||(l.referrerPolicy="no-referrer"),Sc.fetch()(Rc(n,n.config.apiHost,t,a),l)})}async function Tc(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Mh),e);try{const i=new xh(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw rs(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rs(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rs(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw rs(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw kc(n,d,l);Ie(n,d)}}catch(i){if(i instanceof at)throw i;Ie(n,"network-request-failed",{message:String(i)})}}async function qn(n,e,t,s,i={}){const r=await lt(n,e,t,s,i);return"mfaPendingCredential"in r&&Ie(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Rc(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Mr(n.config,i):`${n.config.apiScheme}://${i}`}function Dh(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Re(this.auth,"network-request-failed")),Lh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rs(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Re(n,e,s);return i.customData._tokenResponse=t,i}function Wo(n){return n!==void 0&&n.enterprise!==void 0}class $h{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Dh(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Fh(n,e){return lt(n,"GET","/v2/recaptchaConfig",ct(n,e))}/**
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
 */async function Uh(n,e){return lt(n,"POST","/v1/accounts:delete",e)}async function Ac(n,e){return lt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function En(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bh(n,e=!1){const t=se(n),s=await t.getIdToken(e),i=Lr(s);N(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:En(Pi(i.auth_time)),issuedAtTime:En(Pi(i.iat)),expirationTime:En(Pi(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Pi(n){return Number(n)*1e3}function Lr(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return us("JWT malformed, contained fewer than 3 sections"),null;try{const i=Es(t);return i?JSON.parse(i):(us("Failed to decode base64 JWT payload"),null)}catch(i){return us("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ho(n){const e=Lr(n);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof at&&Wh(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Wh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Hh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=En(this.lastLoginAt),this.creationTime=En(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ts(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Pn(n,Ac(t,{idToken:s}));N(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Nc(r.providerUserInfo):[],a=Vh(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new tr(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function jh(n){const e=se(n);await Ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vh(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Nc(n){return n.map(e=>{var{providerId:t}=e,s=Pr(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Gh(n,e){const t=await Tc(n,{},async()=>{const s=tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Rc(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qh(n,e){return lt(n,"POST","/v2/accounts:revokeToken",ct(n,e))}/**
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
 */class Ft{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ho(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){N(e.length!==0,"internal-error");const t=Ho(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Gh(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Ft;return s&&(N(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(N(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ft,this.toJSON())}_performRefresh(){return Oe("not implemented")}}/**
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
 */function je(n,e){N(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Me{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=Pr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new tr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return N(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bh(this,e)}reload(){return jh(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Me(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ts(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Se(this.auth.app))return Promise.reject(xe(this.auth));const e=await this.getIdToken();return await Pn(this,Uh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,l,d;const u=(s=t.displayName)!==null&&s!==void 0?s:void 0,h=(i=t.email)!==null&&i!==void 0?i:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=t.createdAt)!==null&&l!==void 0?l:void 0,v=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:b,emailVerified:C,isAnonymous:w,providerData:I,stsTokenManager:k}=t;N(b&&k,e,"internal-error");const T=Ft.fromJSON(this.name,k);N(typeof b=="string",e,"internal-error"),je(u,e.name),je(h,e.name),N(typeof C=="boolean",e,"internal-error"),N(typeof w=="boolean",e,"internal-error"),je(p,e.name),je(g,e.name),je(y,e.name),je(m,e.name),je(_,e.name),je(v,e.name);const F=new Me({uid:b,auth:e,email:h,emailVerified:C,displayName:u,isAnonymous:w,photoURL:g,phoneNumber:p,tenantId:y,stsTokenManager:T,createdAt:_,lastLoginAt:v});return I&&Array.isArray(I)&&(F.providerData=I.map(z=>Object.assign({},z))),m&&(F._redirectEventId=m),F}static async _fromIdTokenResponse(e,t,s=!1){const i=new Ft;i.updateFromServerResponse(t);const r=new Me({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ts(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];N(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Nc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Ft;a.updateFromIdToken(s);const c=new Me({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new tr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const jo=new Map;function Le(n){Ue(n instanceof Function,"Expected a class definition");let e=jo.get(n);return e?(Ue(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jo.set(n,e),e)}/**
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
 */class Pc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pc.type="NONE";const Vo=Pc;/**
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
 */function ds(n,e,t){return`firebase:${n}:${e}:${t}`}class Ut{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ds(this.userKey,i.apiKey,r),this.fullPersistenceKey=ds("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Me._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ut(Le(Vo),e,s);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Le(Vo);const o=ds(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){const u=Me._fromJSON(e,d);l!==r&&(a=u),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ut(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ut(r,e,s))}}/**
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
 */function Go(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Oc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($c(e))return"Blackberry";if(Fc(e))return"Webos";if(Mc(e))return"Safari";if((e.includes("chrome/")||Lc(e))&&!e.includes("edge/"))return"Chrome";if(xc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Oc(n=ue()){return/firefox\//i.test(n)}function Mc(n=ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lc(n=ue()){return/crios\//i.test(n)}function Dc(n=ue()){return/iemobile/i.test(n)}function xc(n=ue()){return/android/i.test(n)}function $c(n=ue()){return/blackberry/i.test(n)}function Fc(n=ue()){return/webos/i.test(n)}function Dr(n=ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Kh(n=ue()){var e;return Dr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zh(){return rd()&&document.documentMode===10}function Uc(n=ue()){return Dr(n)||xc(n)||Fc(n)||$c(n)||/windows phone/i.test(n)||Dc(n)}/**
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
 */function Bc(n,e=[]){let t;switch(n){case"Browser":t=Go(ue());break;case"Worker":t=`${Go(ue())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${nn}/${s}`}/**
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
 */class Yh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Qh(n,e={}){return lt(n,"GET","/v2/passwordPolicy",ct(n,e))}/**
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
 */const Jh=6;class Xh{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Jh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Zh{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qo(this),this.idTokenSubscription=new qo(this),this.beforeStateQueue=new Yh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Le(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ut.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ac(this,{idToken:e}),s=await Me._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Se(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ts(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Oh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Se(this.app))return Promise.reject(xe(this));const t=e?se(e):null;return t&&N(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Se(this.app)?Promise.reject(xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Se(this.app)?Promise.reject(xe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Le(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qh(this),t=new Xh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await qh(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Le(e)||this._popupRedirectResolver;N(t,this,"argument-error"),this.redirectPersistenceManager=await Ut.create(this,[Le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ah(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rt(n){return se(n)}class qo{constructor(e){this.auth=e,this.observer=null,this.addObserver=md(t=>this.observer=t)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let si={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ef(n){si=n}function Wc(n){return si.loadJS(n)}function tf(){return si.recaptchaEnterpriseScript}function nf(){return si.gapiScript}function sf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const rf="recaptcha-enterprise",of="NO_RECAPTCHA";class af{constructor(e){this.type=rf,this.auth=Rt(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Fh(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new $h(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;Wo(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(of)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&Wo(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=tf();c.length!==0&&(c+=a),Wc(c).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ko(n,e,t,s=!1){const i=new af(n);let r;try{r=await i.verify(t)}catch{r=await i.verify(t,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function nr(n,e,t,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ko(n,e,t,t==="getOobCode");return s(n,r)}else return s(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ko(n,e,t,t==="getOobCode");return s(n,o)}else return Promise.reject(r)})}/**
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
 */function cf(n,e){const t=Nr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Cs(r,e??{}))return i;Ie(i,"already-initialized")}return t.initialize({options:e})}function lf(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Le);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function uf(n,e,t){const s=Rt(n);N(s._canInitEmulator,s,"emulator-config-failed"),N(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Hc(e),{host:o,port:a}=df(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),hf()}function Hc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function df(n){const e=Hc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:zo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:zo(o)}}}function zo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hf(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class xr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Oe("not implemented")}_getIdTokenResponse(e){return Oe("not implemented")}_linkToIdToken(e,t){return Oe("not implemented")}_getReauthenticationResolver(e){return Oe("not implemented")}}async function ff(n,e){return lt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function pf(n,e){return qn(n,"POST","/v1/accounts:signInWithPassword",ct(n,e))}/**
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
 */async function mf(n,e){return qn(n,"POST","/v1/accounts:signInWithEmailLink",ct(n,e))}async function gf(n,e){return qn(n,"POST","/v1/accounts:signInWithEmailLink",ct(n,e))}/**
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
 */class On extends xr{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new On(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new On(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nr(e,t,"signInWithPassword",pf);case"emailLink":return mf(e,{email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nr(e,s,"signUpPassword",ff);case"emailLink":return gf(e,{idToken:t,email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Bt(n,e){return qn(n,"POST","/v1/accounts:signInWithIdp",ct(n,e))}/**
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
 */const _f="http://localhost";class wt extends xr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ie("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=Pr(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new wt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Bt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Bt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bt(e,t)}buildRequest(){const e={requestUri:_f,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tn(t)}return e}}/**
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
 */function vf(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yf(n){const e=_n(vn(n)).link,t=e?_n(vn(e)).deep_link_id:null,s=_n(vn(n)).deep_link_id;return(s?_n(vn(s)).link:null)||s||t||e||n}class $r{constructor(e){var t,s,i,r,o,a;const c=_n(vn(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,u=vf((i=c.mode)!==null&&i!==void 0?i:null);N(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=yf(e);try{return new $r(t)}catch{return null}}}/**
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
 */class sn{constructor(){this.providerId=sn.PROVIDER_ID}static credential(e,t){return On._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=$r.parseLink(t);return N(s,"argument-error"),On._fromEmailAndCode(e,s.code,s.tenantId)}}sn.PROVIDER_ID="password";sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kn extends jc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ge extends Kn{constructor(){super("facebook.com")}static credential(e){return wt._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ge.credential(e.oauthAccessToken)}catch{return null}}}Ge.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ge.PROVIDER_ID="facebook.com";/**
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
 */class qe extends Kn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wt._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return qe.credential(t,s)}catch{return null}}}qe.GOOGLE_SIGN_IN_METHOD="google.com";qe.PROVIDER_ID="google.com";/**
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
 */class Ke extends Kn{constructor(){super("github.com")}static credential(e){return wt._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch{return null}}}Ke.GITHUB_SIGN_IN_METHOD="github.com";Ke.PROVIDER_ID="github.com";/**
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
 */class ze extends Kn{constructor(){super("twitter.com")}static credential(e,t){return wt._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ze.credential(t,s)}catch{return null}}}ze.TWITTER_SIGN_IN_METHOD="twitter.com";ze.PROVIDER_ID="twitter.com";/**
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
 */async function wf(n,e){return qn(n,"POST","/v1/accounts:signUp",ct(n,e))}/**
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
 */class Et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Me._fromIdTokenResponse(e,s,i),o=Yo(s);return new Et({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Yo(s);return new Et({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Yo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Rs extends at{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Rs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Rs(e,t,s,i)}}function Vc(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Rs._fromErrorAndOperation(n,r,e,s):r})}async function Ef(n,e,t=!1){const s=await Pn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Et._forOperation(n,"link",s)}/**
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
 */async function bf(n,e,t=!1){const{auth:s}=n;if(Se(s.app))return Promise.reject(xe(s));const i="reauthenticate";try{const r=await Pn(n,Vc(s,i,e,n),t);N(r.idToken,s,"internal-error");const o=Lr(r.idToken);N(o,s,"internal-error");const{sub:a}=o;return N(n.uid===a,s,"user-mismatch"),Et._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ie(s,"user-mismatch"),r}}/**
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
 */async function Gc(n,e,t=!1){if(Se(n.app))return Promise.reject(xe(n));const s="signIn",i=await Vc(n,s,e),r=await Et._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function If(n,e){return Gc(Rt(n),e)}/**
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
 */async function qc(n){const e=Rt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Cf(n,e,t){if(Se(n.app))return Promise.reject(xe(n));const s=Rt(n),o=await nr(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wf).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&qc(n),c}),a=await Et._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function kf(n,e,t){return Se(n.app)?Promise.reject(xe(n)):If(se(n),sn.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&qc(n),s})}function Sf(n,e,t,s){return se(n).onIdTokenChanged(e,t,s)}function Tf(n,e,t){return se(n).beforeAuthStateChanged(e,t)}function Rf(n,e,t,s){return se(n).onAuthStateChanged(e,t,s)}function Af(n){return se(n).signOut()}const As="__sak";/**
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
 */class Kc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(As,"1"),this.storage.removeItem(As),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Nf=1e3,Pf=10;class zc extends Kc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);zh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Pf):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Nf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zc.type="LOCAL";const Of=zc;/**
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
 */class Yc extends Kc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yc.type="SESSION";const Qc=Yc;/**
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
 */function Mf(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new ii(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await Mf(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ii.receivers=[];/**
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
 */function Fr(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Lf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Fr("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ae(){return window}function Df(n){Ae().location.href=n}/**
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
 */function Jc(){return typeof Ae().WorkerGlobalScope<"u"&&typeof Ae().importScripts=="function"}async function xf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $f(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ff(){return Jc()?self:null}/**
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
 */const Xc="firebaseLocalStorageDb",Uf=1,Ns="firebaseLocalStorage",Zc="fbase_key";class zn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ri(n,e){return n.transaction([Ns],e?"readwrite":"readonly").objectStore(Ns)}function Bf(){const n=indexedDB.deleteDatabase(Xc);return new zn(n).toPromise()}function sr(){const n=indexedDB.open(Xc,Uf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Ns,{keyPath:Zc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Ns)?e(s):(s.close(),await Bf(),e(await sr()))})})}async function Qo(n,e,t){const s=ri(n,!0).put({[Zc]:e,value:t});return new zn(s).toPromise()}async function Wf(n,e){const t=ri(n,!1).get(e),s=await new zn(t).toPromise();return s===void 0?null:s.value}function Jo(n,e){const t=ri(n,!0).delete(e);return new zn(t).toPromise()}const Hf=800,jf=3;class el{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>jf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ii._getInstance(Ff()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xf(),!this.activeServiceWorker)return;this.sender=new Lf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$f()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sr();return await Qo(e,As,"1"),await Jo(e,As),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Qo(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Wf(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ri(i,!1).getAll();return new zn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}el.type="LOCAL";const Vf=el;new Gn(3e4,6e4);/**
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
 */function Gf(n,e){return e?Le(e):(N(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ur extends xr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qf(n){return Gc(n.auth,new Ur(n),n.bypassAuthState)}function Kf(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),bf(t,new Ur(n),n.bypassAuthState)}async function zf(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),Ef(t,new Ur(n),n.bypassAuthState)}/**
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
 */class tl{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qf;case"linkViaPopup":case"linkViaRedirect":return zf;case"reauthViaPopup":case"reauthViaRedirect":return Kf;default:Ie(this.auth,"internal-error")}}resolve(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yf=new Gn(2e3,1e4);class Lt extends tl{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Ue(this.filter.length===1,"Popup operations only handle one event");const e=Fr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yf.get())};e()}}Lt.currentPopupAction=null;/**
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
 */const Qf="pendingRedirect",hs=new Map;class Jf extends tl{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=hs.get(this.auth._key());if(!e){try{const s=await Xf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}hs.set(this.auth._key(),e)}return this.bypassAuthState||hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xf(n,e){const t=tp(e),s=ep(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function Zf(n,e){hs.set(n._key(),e)}function ep(n){return Le(n._redirectPersistence)}function tp(n){return ds(Qf,n.config.apiKey,n.name)}async function np(n,e,t=!1){if(Se(n.app))return Promise.reject(xe(n));const s=Rt(n),i=Gf(s,e),o=await new Jf(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const sp=10*60*1e3;class ip{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!nl(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Re(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xo(e))}saveEventToCache(e){this.cachedEventUids.add(Xo(e)),this.lastProcessedEventTime=Date.now()}}function Xo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function nl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nl(n);default:return!1}}/**
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
 */async function op(n,e={}){return lt(n,"GET","/v1/projects",e)}/**
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
 */const ap=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cp=/^https?/;async function lp(n){if(n.config.emulator)return;const{authorizedDomains:e}=await op(n);for(const t of e)try{if(up(t))return}catch{}Ie(n,"unauthorized-domain")}function up(n){const e=er(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!cp.test(t))return!1;if(ap.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const dp=new Gn(3e4,6e4);function Zo(){const n=Ae().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function hp(n){return new Promise((e,t)=>{var s,i,r;function o(){Zo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zo(),t(Re(n,"network-request-failed"))},timeout:dp.get()})}if(!((i=(s=Ae().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ae().gapi)===null||r===void 0)&&r.load)o();else{const a=sf("iframefcb");return Ae()[a]=()=>{gapi.load?o():t(Re(n,"network-request-failed"))},Wc(`${nf()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw fs=null,e})}let fs=null;function fp(n){return fs=fs||hp(n),fs}/**
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
 */const pp=new Gn(5e3,15e3),mp="__/auth/iframe",gp="emulator/auth/iframe",_p={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yp(n){const e=n.config;N(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Mr(e,gp):`https://${n.config.authDomain}/${mp}`,s={apiKey:e.apiKey,appName:n.name,v:nn},i=vp.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${tn(s).slice(1)}`}async function wp(n){const e=await fp(n),t=Ae().gapi;return N(t,n,"internal-error"),e.open({where:document.body,url:yp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_p,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Re(n,"network-request-failed"),a=Ae().setTimeout(()=>{r(o)},pp.get());function c(){Ae().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Ep={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bp=500,Ip=600,Cp="_blank",kp="http://localhost";class ea{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sp(n,e,t,s=bp,i=Ip){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ep),{width:s.toString(),height:i.toString(),top:r,left:o}),l=ue().toLowerCase();t&&(a=Lc(l)?Cp:t),Oc(l)&&(e=e||kp,c.scrollbars="yes");const d=Object.entries(c).reduce((h,[p,g])=>`${h}${p}=${g},`,"");if(Kh(l)&&a!=="_self")return Tp(e||"",a),new ea(null);const u=window.open(e||"",a,d);N(u,n,"popup-blocked");try{u.focus()}catch{}return new ea(u)}function Tp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Rp="__/auth/handler",Ap="emulator/auth/handler",Np=encodeURIComponent("fac");async function ta(n,e,t,s,i,r){N(n.config.authDomain,n,"auth-domain-config-required"),N(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:nn,eventId:i};if(e instanceof jc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",bs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Kn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${Np}=${encodeURIComponent(c)}`:"";return`${Pp(n)}?${tn(a).slice(1)}${l}`}function Pp({config:n}){return n.emulator?Mr(n,Ap):`https://${n.authDomain}/${Rp}`}/**
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
 */const Oi="webStorageSupport";class Op{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qc,this._completeRedirectFn=np,this._overrideRedirectResult=Zf}async _openPopup(e,t,s,i){var r;Ue((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ta(e,t,s,er(),i);return Sp(e,o,Fr())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await ta(e,t,s,er(),i);return Df(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Ue(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await wp(e),s=new ip(e);return t.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oi,{type:Oi},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Oi];o!==void 0&&t(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Uc()||Mc()||Dr()}}const Mp=Op;var na="@firebase/auth",sa="1.7.9";/**
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
 */class Lp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Dp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xp(n){Gt(new yt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bc(n)},l=new Zh(s,i,r,c);return lf(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Gt(new yt("auth-internal",e=>{const t=Rt(e.getProvider("auth").getImmediate());return(s=>new Lp(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(na,sa,Dp(n)),et(na,sa,"esm2017")}/**
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
 */const $p=5*60,Fp=pc("authIdTokenMaxAge")||$p;let ia=null;const Up=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Fp)return;const i=t==null?void 0:t.token;ia!==i&&(ia=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bp(n=wc()){const e=Nr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=cf(n,{popupRedirectResolver:Mp,persistence:[Vf,Of,Qc]}),s=pc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Up(r.toString());Tf(t,o,()=>o(t.currentUser)),Sf(t,a=>o(a))}}const i=hc("auth");return i&&uf(t,`http://${i}`),t}function Wp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ef({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Re("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Wp().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xp("Browser");var ra={};const oa="@firebase/database",aa="1.0.8";/**
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
 */let sl="";function Hp(n){sl=n}/**
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
 */class jp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),X(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:An(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Vp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ce(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const il=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jp(e)}}catch{}return new Vp},pt=il("localStorage"),Gp=il("sessionStorage");/**
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
 */const Wt=new Rr("@firebase/database"),rl=function(){let n=1;return function(){return n++}}(),ol=function(n){const e=vd(n),t=new pd;t.update(e);const s=t.digest();return kr.encodeByteArray(s)},Yn=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Yn.apply(null,s):typeof s=="object"?e+=X(s):e+=s,e+=" "}return e};let bn=null,ca=!0;const qp=function(n,e){E(!0,"Can't turn on custom loggers persistently."),Wt.logLevel=H.VERBOSE,bn=Wt.log.bind(Wt)},te=function(...n){if(ca===!0&&(ca=!1,bn===null&&Gp.get("logging_enabled")===!0&&qp()),bn){const e=Yn.apply(null,n);bn(e)}},Qn=function(n){return function(...e){te(n,...e)}},ir=function(...n){const e="FIREBASE INTERNAL ERROR: "+Yn(...n);Wt.error(e)},Be=function(...n){const e=`FIREBASE FATAL ERROR: ${Yn(...n)}`;throw Wt.error(e),new Error(e)},le=function(...n){const e="FIREBASE WARNING: "+Yn(...n);Wt.warn(e)},Kp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},oi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},zp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},qt="[MIN_NAME]",bt="[MAX_NAME]",At=function(n,e){if(n===e)return 0;if(n===qt||e===bt)return-1;if(e===qt||n===bt)return 1;{const t=la(n),s=la(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Yp=function(n,e){return n===e?0:n<e?-1:1},fn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+X(e))},Br=function(n){if(typeof n!="object"||n===null)return X(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=X(e[s]),t+=":",t+=Br(n[e[s]]);return t+="}",t},al=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ne(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const cl=function(n){E(!oi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Qp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Jp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Xp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Zp=new RegExp("^-?(0*)\\d{1,10}$"),em=-2147483648,tm=2147483647,la=function(n){if(Zp.test(n)){const e=Number(n);if(e>=em&&e<=tm)return e}return null},rn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw le("Exception was thrown by user callback.",t),e},Math.floor(0))}},nm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},In=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class sm{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){le(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class im{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',le(e)}}class ps{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ps.OWNER="owner";/**
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
 */const Wr="5",ll="v",ul="s",dl="r",hl="f",fl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pl="ls",ml="p",rr="ac",gl="websocket",_l="long_polling";/**
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
 */class vl{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function rm(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function yl(n,e,t){E(typeof e=="string","typeof type must == string"),E(typeof t=="object","typeof params must == object");let s;if(e===gl)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===_l)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rm(n)&&(t.ns=n.namespace);const i=[];return ne(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class om{constructor(){this.counters_={}}incrementCounter(e,t=1){Ce(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Yu(this.counters_)}}/**
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
 */const Mi={},Li={};function Hr(n){const e=n.toString();return Mi[e]||(Mi[e]=new om),Mi[e]}function am(n,e){const t=n.toString();return Li[t]||(Li[t]=e()),Li[t]}/**
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
 */class cm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&rn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ua="start",lm="close",um="pLPCommand",dm="pRTLPCB",wl="id",El="pw",bl="ser",hm="cb",fm="seg",pm="ts",mm="d",gm="dframe",Il=1870,Cl=30,_m=Il-Cl,vm=25e3,ym=3e4;class Dt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qn(e),this.stats_=Hr(t),this.urlFn=c=>(this.appCheckToken&&(c[rr]=this.appCheckToken),yl(t,_l,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new cm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ym)),zp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jr((...r)=>{const[o,a,c,l,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ua)this.id=a,this.password=c;else if(o===lm)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ua]="t",s[bl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[hm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ll]=Wr,this.transportSessionId&&(s[ul]=this.transportSessionId),this.lastSessionId&&(s[pl]=this.lastSessionId),this.applicationId&&(s[ml]=this.applicationId),this.appCheckToken&&(s[rr]=this.appCheckToken),typeof location<"u"&&location.hostname&&fl.test(location.hostname)&&(s[dl]=hl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Dt.forceAllow_=!0}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){return Dt.forceAllow_?!0:!Dt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qp()&&!Jp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=X(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=uc(t),i=al(s,_m);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[gm]="t",s[wl]=e,s[El]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=X(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class jr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rl(),window[um+this.uniqueCallbackIdentifier]=e,window[dm+this.uniqueCallbackIdentifier]=t,this.myIFrame=jr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){te("frame writing exception"),a.stack&&te(a.stack),te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||te("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wl]=this.myID,e[El]=this.myPW,e[bl]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cl+s.length<=Il;){const o=this.pendingSegs.shift();s=s+"&"+fm+i+"="+o.seg+"&"+pm+i+"="+o.ts+"&"+mm+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(vm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const wm=16384,Em=45e3;let Ps=null;typeof MozWebSocket<"u"?Ps=MozWebSocket:typeof WebSocket<"u"&&(Ps=WebSocket);class ye{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qn(this.connId),this.stats_=Hr(t),this.connURL=ye.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[ll]=Wr,typeof location<"u"&&location.hostname&&fl.test(location.hostname)&&(o[dl]=hl),t&&(o[ul]=t),s&&(o[pl]=s),i&&(o[rr]=i),r&&(o[ml]=r),yl(e,gl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pt.set("previous_websocket_failure",!0);try{let s;od(),this.mySock=new Ps(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ps!==null&&!ye.forceDisallow_}static previouslyFailed(){return pt.isInMemoryStorage||pt.get("previous_websocket_failure")===!0}markConnectionHealthy(){pt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=An(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=X(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=al(t,wm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Em))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ye.responsesRequiredToBeHealthy=2;ye.healthyTimeout=3e4;/**
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
 */class Mn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Dt,ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ye&&ye.isAvailable();let s=t&&!ye.previouslyFailed();if(e.webSocketOnly&&(t||le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ye];else{const i=this.transports_=[];for(const r of Mn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Mn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mn.globalTransportInitialized_=!1;/**
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
 */const bm=6e4,Im=5e3,Cm=10*1024,km=100*1024,Di="t",da="d",Sm="s",ha="r",Tm="e",fa="o",pa="a",ma="n",ga="p",Rm="h";class Am{constructor(e,t,s,i,r,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qn("c:"+this.id+":"),this.transportManager_=new Mn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=In(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>km?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Di in e){const t=e[Di];t===pa?this.upgradeIfSecondaryHealthy_():t===ha?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===fa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=fn("t",e),s=fn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ga,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pa,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ma,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=fn("t",e),s=fn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=fn(Di,e);if(da in e){const s=e[da];if(t===Rm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ma){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Sm?this.onConnectionShutdown_(s):t===ha?this.onReset_(s):t===Tm?ir("Server Error: "+s):t===fa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ir("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Wr!==s&&le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),In(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):In(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Im))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ga,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class kl{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Sl{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Os extends Sl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Os}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _a=32,va=768;class W{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function B(){return new W("")}function L(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function st(n){return n.pieces_.length-n.pieceNum_}function G(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new W(n.pieces_,e)}function Vr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Nm(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ln(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Tl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new W(e,0)}function J(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof W)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new W(t,0)}function D(n){return n.pieceNum_>=n.pieces_.length}function ce(n,e){const t=L(n),s=L(e);if(t===null)return e;if(t===s)return ce(G(n),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Pm(n,e){const t=Ln(n,0),s=Ln(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=At(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Gr(n,e){if(st(n)!==st(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ge(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(st(n)>st(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Om{constructor(e,t){this.errorPrefix_=t,this.parts_=Ln(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ni(this.parts_[s]);Rl(this)}}function Mm(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ni(e),Rl(n)}function Lm(n){const e=n.parts_.pop();n.byteLength_-=ni(e),n.parts_.length>0&&(n.byteLength_-=1)}function Rl(n){if(n.byteLength_>va)throw new Error(n.errorPrefix_+"has a key path longer than "+va+" bytes ("+n.byteLength_+").");if(n.parts_.length>_a)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_a+") or object contains a cycle "+ht(n))}function ht(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class qr extends Sl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new qr}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const pn=1e3,Dm=60*5*1e3,ya=30*1e3,xm=1.3,$m=3e4,Fm="server_kill",wa=3;class $e extends kl{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=$e.nextPersistentConnectionId_++,this.log_=Qn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pn,this.maxReconnectDelay_=Dm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Os.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(X(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ve,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;$e.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ce(e,"w")){const s=vt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ya)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=hd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+X(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ir("Unrecognized action received from server: "+X(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$m&&(this.reconnectDelay_=pn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$e.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(u){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?te("getToken() completed but was canceled"):(te("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new Am(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{le(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Fm)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&le(u),c())}}}interrupt(e){te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bs(this.interruptReasons_)&&(this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Br(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new W(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){te("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wa&&(this.reconnectDelay_=ya,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){te("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+sl.replace(/\./g,"-")]=1,Tr()?e["framework.cordova"]=1:mc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Os.getInstance().currentlyOnline();return bs(this.interruptReasons_)&&e}}$e.nextPersistentConnectionId_=0;$e.nextConnectionId_=0;/**
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
 */class x{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new x(e,t)}}/**
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
 */class ai{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new x(qt,e),i=new x(qt,t);return this.compare(s,i)!==0}minPost(){return x.MIN}}/**
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
 */let os;class Al extends ai{static get __EMPTY_NODE(){return os}static set __EMPTY_NODE(e){os=e}compare(e,t){return At(e.name,t.name)}isDefinedOn(e){throw en("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return x.MIN}maxPost(){return new x(bt,os)}makePost(e,t){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new x(e,os)}toString(){return".key"}}const Ht=new Al;/**
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
 */class as{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ee{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ee.RED,this.left=i??de.EMPTY_NODE,this.right=r??de.EMPTY_NODE}copy(e,t,s,i,r){return new ee(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return de.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return de.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ee.RED=!0;ee.BLACK=!1;class Um{copy(e,t,s,i,r){return this}insert(e,t,s){return new ee(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class de{constructor(e,t=de.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new de(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ee.BLACK,null,null))}remove(e){return new de(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ee.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new as(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new as(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new as(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new as(this.root_,null,this.comparator_,!0,e)}}de.EMPTY_NODE=new Um;/**
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
 */function Bm(n,e){return At(n.name,e.name)}function Kr(n,e){return At(n,e)}/**
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
 */let or;function Wm(n){or=n}const Nl=function(n){return typeof n=="number"?"number:"+cl(n):"string:"+n},Pl=function(n){if(n.isLeafNode()){const e=n.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ce(e,".sv"),"Priority must be a string or number.")}else E(n===or||n.isEmpty(),"priority of unexpected type.");E(n===or||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ea;class Z{constructor(e,t=Z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Pl(this.priorityNode_)}static set __childrenNodeConstructor(e){Ea=e}static get __childrenNodeConstructor(){return Ea}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return D(e)?this:L(e)===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=L(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||st(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Z.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Nl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=cl(this.value_):e+=this.value_,this.lazyHash_=ol(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Z.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Z.VALUE_TYPE_ORDER.indexOf(t),r=Z.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+t),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ol,Ml;function Hm(n){Ol=n}function jm(n){Ml=n}class Vm extends ai{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?At(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return x.MIN}maxPost(){return new x(bt,new Z("[PRIORITY-POST]",Ml))}makePost(e,t){const s=Ol(e);return new x(t,new Z("[PRIORITY-POST]",s))}toString(){return".priority"}}const Y=new Vm;/**
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
 */const Gm=Math.log(2);class qm{constructor(e){const t=r=>parseInt(Math.log(r)/Gm,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ms=function(n,e,t,s){n.sort(e);const i=function(c,l){const d=l-c;let u,h;if(d===0)return null;if(d===1)return u=n[c],h=t?t(u):u,new ee(h,u.node,ee.BLACK,null,null);{const p=parseInt(d/2,10)+c,g=i(c,p),y=i(p+1,l);return u=n[p],h=t?t(u):u,new ee(h,u.node,ee.BLACK,g,y)}},r=function(c){let l=null,d=null,u=n.length;const h=function(g,y){const m=u-g,_=u;u-=g;const v=i(m+1,_),b=n[m],C=t?t(b):b;p(new ee(C,b.node,y,null,v))},p=function(g){l?(l.left=g,l=g):(d=g,l=g)};for(let g=0;g<c.count;++g){const y=c.nextBitIsOne(),m=Math.pow(2,c.count-(g+1));y?h(m,ee.BLACK):(h(m,ee.BLACK),h(m,ee.RED))}return d},o=new qm(n.length),a=r(o);return new de(s||e,a)};/**
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
 */let xi;const Mt={};class De{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return E(Mt&&Y,"ChildrenNode.ts has not been loaded"),xi=xi||new De({".priority":Mt},{".priority":Y}),xi}get(e){const t=vt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof de?t:null}hasIndex(e){return Ce(this.indexSet_,e.toString())}addIndex(e,t){E(e!==Ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(x.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ms(s,e.getCompare()):a=Mt;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new De(d,l)}addToIndexes(e,t){const s=Is(this.indexes_,(i,r)=>{const o=vt(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===Mt)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(x.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ms(a,o.getCompare())}else return Mt;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new x(e.name,a))),c.insert(e,e.node)}});return new De(s,this.indexSet_)}removeFromIndexes(e,t){const s=Is(this.indexes_,i=>{if(i===Mt)return i;{const r=t.get(e.name);return r?i.remove(new x(e.name,r)):i}});return new De(s,this.indexSet_)}}/**
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
 */let mn;class R{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Pl(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mn||(mn=new R(new de(Kr),null,De.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mn}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?mn:t}}getChild(e){const t=L(e);return t===null?this:this.getImmediateChild(t).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(E(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new x(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?mn:this.priorityNode_;return new R(i,o,r)}}updateChild(e,t){const s=L(e);if(s===null)return t;{E(L(e)!==".priority"||st(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(G(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Y,(o,a)=>{t[o]=a.val(e),s++,r&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Nl(this.getPriority().val())+":"),this.forEachChild(Y,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":ol(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new x(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new x(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new x(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,x.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,x.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jn?-1:0}withIndex(e){if(e===Ht||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ht||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Y),i=t.getIterator(Y);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ht?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Km extends R{constructor(){super(new de(Kr),R.EMPTY_NODE,De.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const Jn=new Km;Object.defineProperties(x,{MIN:{value:new x(qt,R.EMPTY_NODE)},MAX:{value:new x(bt,Jn)}});Al.__EMPTY_NODE=R.EMPTY_NODE;Z.__childrenNodeConstructor=R;Wm(Jn);jm(Jn);/**
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
 */const zm=!0;function Q(n,e=null){if(n===null)return R.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Z(t,Q(e))}if(!(n instanceof Array)&&zm){const t=[];let s=!1;if(ne(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=Q(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new x(o,c)))}}),t.length===0)return R.EMPTY_NODE;const r=Ms(t,Bm,o=>o.name,Kr);if(s){const o=Ms(t,Y.getCompare());return new R(r,Q(e),new De({".priority":o},{".priority":Y}))}else return new R(r,Q(e),De.Default)}else{let t=R.EMPTY_NODE;return ne(n,(s,i)=>{if(Ce(n,s)&&s.substring(0,1)!=="."){const r=Q(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Q(e))}}Hm(Q);/**
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
 */class Ym extends ai{constructor(e){super(),this.indexPath_=e,E(!D(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?At(e.name,t.name):r}makePost(e,t){const s=Q(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,s);return new x(t,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,Jn);return new x(bt,e)}toString(){return Ln(this.indexPath_,0).join("/")}}/**
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
 */class Qm extends ai{compare(e,t){const s=e.node.compareTo(t.node);return s===0?At(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return x.MIN}maxPost(){return x.MAX}makePost(e,t){const s=Q(e);return new x(t,s)}toString(){return".value"}}const Jm=new Qm;/**
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
 */function Ll(n){return{type:"value",snapshotNode:n}}function Kt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Dn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function xn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Xm(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class zr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Dn(t,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Kt(t,s)):o.trackChildChange(xn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Y,(i,r)=>{t.hasChild(i)||s.trackChildChange(Dn(i,r))}),t.isLeafNode()||t.forEachChild(Y,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(xn(i,r,o))}else s.trackChildChange(Kt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class $n{constructor(e){this.indexedFilter_=new zr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$n.getStartPost_(e),this.endPost_=$n.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new x(t,s))||(s=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=R.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const r=this;return t.forEachChild(Y,(o,a)=>{r.matches(new x(o,a))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Zm{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new $n(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new x(t,s))||(s=R.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,p)=>u(p,h)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const c=new x(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,c);if(d&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(xn(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Dn(t,u));const y=a.updateImmediateChild(t,R.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Kt(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return s.isEmpty()?e:d&&o(l,c)>=0?(r!=null&&(r.trackChildChange(Dn(l.name,l.node)),r.trackChildChange(Kt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,R.EMPTY_NODE)):e}}/**
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
 */class Yr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Y}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qt}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Y}copy(){const e=new Yr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eg(n){return n.loadsAllData()?new zr(n.getIndex()):n.hasLimit()?new Zm(n):new $n(n)}function ba(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Y?t="$priority":n.index_===Jm?t="$value":n.index_===Ht?t="$key":(E(n.index_ instanceof Ym,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=X(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=X(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+X(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=X(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+X(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ia(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Y&&(e.i=n.index_.toString()),e}/**
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
 */class Ls extends kl{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Qn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ls.getListenId_(e,s),a={};this.listens_[o]=a;const c=ba(e._queryParams);this.restRequest_(r+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,s),vt(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",i(h,null)}})}unlisten(e,t){const s=Ls.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ba(e._queryParams),s=e._path.toString(),i=new ve;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=An(a.responseText)}catch{le("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&le("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class tg{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ds(){return{value:null,children:new Map}}function on(n,e,t){if(D(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=L(e);n.children.has(s)||n.children.set(s,Ds());const i=n.children.get(s);e=G(e),on(i,e,t)}}function ar(n,e){if(D(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Y,(s,i)=>{on(n,new W(s),i)}),ar(n,e)}}else if(n.children.size>0){const t=L(e);return e=G(e),n.children.has(t)&&ar(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function cr(n,e,t){n.value!==null?t(e,n.value):ng(n,(s,i)=>{const r=new W(e.toString()+"/"+s);cr(i,r,t)})}function ng(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class sg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ne(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Ca=10*1e3,ig=30*1e3,rg=5*60*1e3;class og{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new sg(e);const s=Ca+(ig-Ca)*Math.random();In(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ne(e,(i,r)=>{r>0&&Ce(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),In(this.reportStats_.bind(this),Math.floor(Math.random()*2*rg))}}/**
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
 */var we;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(we||(we={}));function Qr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class xs{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=we.ACK_USER_WRITE,this.source=Qr()}operationForChild(e){if(D(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new W(e));return new xs(B(),t,this.revert)}}else return E(L(this.path)===e,"operationForChild called for unrelated child."),new xs(G(this.path),this.affectedTree,this.revert)}}/**
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
 */class Fn{constructor(e,t){this.source=e,this.path=t,this.type=we.LISTEN_COMPLETE}operationForChild(e){return D(this.path)?new Fn(this.source,B()):new Fn(this.source,G(this.path))}}/**
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
 */class It{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=we.OVERWRITE}operationForChild(e){return D(this.path)?new It(this.source,B(),this.snap.getImmediateChild(e)):new It(this.source,G(this.path),this.snap)}}/**
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
 */class zt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=we.MERGE}operationForChild(e){if(D(this.path)){const t=this.children.subtree(new W(e));return t.isEmpty()?null:t.value?new It(this.source,B(),t.value):new zt(this.source,B(),t)}else return E(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zt(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class it{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(D(e))return this.isFullyInitialized()&&!this.filtered_;const t=L(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class ag{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cg(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Xm(o.childName,o.snapshotNode))}),gn(n,i,"child_removed",e,s,t),gn(n,i,"child_added",e,s,t),gn(n,i,"child_moved",r,s,t),gn(n,i,"child_changed",e,s,t),gn(n,i,"value",e,s,t),i}function gn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>ug(n,a,c)),o.forEach(a=>{const c=lg(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function lg(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ug(n,e,t){if(e.childName==null||t.childName==null)throw en("Should only compare child_ events.");const s=new x(e.childName,e.snapshotNode),i=new x(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function ci(n,e){return{eventCache:n,serverCache:e}}function Cn(n,e,t,s){return ci(new it(e,t,s),n.serverCache)}function Dl(n,e,t,s){return ci(n.eventCache,new it(e,t,s))}function $s(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ct(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let $i;const dg=()=>($i||($i=new de(Yp)),$i);class K{constructor(e,t=dg()){this.value=e,this.children=t}static fromObject(e){let t=new K(null);return ne(e,(s,i)=>{t=t.set(new W(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:B(),value:this.value};if(D(e))return null;{const s=L(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(G(e),t);return r!=null?{path:J(new W(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(D(e))return this;{const t=L(e),s=this.children.get(t);return s!==null?s.subtree(G(e)):new K(null)}}set(e,t){if(D(e))return new K(t,this.children);{const s=L(e),r=(this.children.get(s)||new K(null)).set(G(e),t),o=this.children.insert(s,r);return new K(this.value,o)}}remove(e){if(D(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const t=L(e),s=this.children.get(t);if(s){const i=s.remove(G(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new K(null):new K(this.value,r)}else return this}}get(e){if(D(e))return this.value;{const t=L(e),s=this.children.get(t);return s?s.get(G(e)):null}}setTree(e,t){if(D(e))return t;{const s=L(e),r=(this.children.get(s)||new K(null)).setTree(G(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new K(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(J(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,B(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(D(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(G(e),J(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,B(),t)}foreachOnPath_(e,t,s){if(D(e))return this;{this.value&&s(t,this.value);const i=L(e),r=this.children.get(i);return r?r.foreachOnPath_(G(e),J(t,i),s):new K(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(J(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Ee{constructor(e){this.writeTree_=e}static empty(){return new Ee(new K(null))}}function kn(n,e,t){if(D(e))return new Ee(new K(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ce(i,e);return r=r.updateChild(o,t),new Ee(n.writeTree_.set(i,r))}else{const i=new K(t),r=n.writeTree_.setTree(e,i);return new Ee(r)}}}function lr(n,e,t){let s=n;return ne(t,(i,r)=>{s=kn(s,J(e,i),r)}),s}function ka(n,e){if(D(e))return Ee.empty();{const t=n.writeTree_.setTree(e,new K(null));return new Ee(t)}}function ur(n,e){return Nt(n,e)!=null}function Nt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ce(t.path,e)):null}function Sa(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Y,(s,i)=>{e.push(new x(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new x(s,i.value))}),e}function tt(n,e){if(D(e))return n;{const t=Nt(n,e);return t!=null?new Ee(new K(t)):new Ee(n.writeTree_.subtree(e))}}function dr(n){return n.writeTree_.isEmpty()}function Yt(n,e){return xl(B(),n.writeTree_,e)}function xl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=xl(J(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(J(n,".priority"),s)),t}}/**
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
 */function li(n,e){return Bl(e,n)}function hg(n,e,t,s,i){E(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=kn(n.visibleWrites,e,t)),n.lastWriteId=s}function fg(n,e,t,s){E(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=lr(n.visibleWrites,e,t),n.lastWriteId=s}function pg(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function mg(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);E(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&gg(a,s.path)?i=!1:ge(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return _g(n),!0;if(s.snap)n.visibleWrites=ka(n.visibleWrites,s.path);else{const a=s.children;ne(a,c=>{n.visibleWrites=ka(n.visibleWrites,J(s.path,c))})}return!0}else return!1}function gg(n,e){if(n.snap)return ge(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ge(J(n.path,t),e))return!0;return!1}function _g(n){n.visibleWrites=$l(n.allWrites,vg,B()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function vg(n){return n.visible}function $l(n,e,t){let s=Ee.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ge(t,o)?(a=ce(t,o),s=kn(s,a,r.snap)):ge(o,t)&&(a=ce(o,t),s=kn(s,B(),r.snap.getChild(a)));else if(r.children){if(ge(t,o))a=ce(t,o),s=lr(s,a,r.children);else if(ge(o,t))if(a=ce(o,t),D(a))s=lr(s,B(),r.children);else{const c=vt(r.children,L(a));if(c){const l=c.getChild(G(a));s=kn(s,B(),l)}}}else throw en("WriteRecord should have .snap or .children")}}return s}function Fl(n,e,t,s,i){if(!s&&!i){const r=Nt(n.visibleWrites,e);if(r!=null)return r;{const o=tt(n.visibleWrites,e);if(dr(o))return t;if(t==null&&!ur(o,B()))return null;{const a=t||R.EMPTY_NODE;return Yt(o,a)}}}else{const r=tt(n.visibleWrites,e);if(!i&&dr(r))return t;if(!i&&t==null&&!ur(r,B()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(ge(l.path,e)||ge(e,l.path))},a=$l(n.allWrites,o,e),c=t||R.EMPTY_NODE;return Yt(a,c)}}}function yg(n,e,t){let s=R.EMPTY_NODE;const i=Nt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Y,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=tt(n.visibleWrites,e);return t.forEachChild(Y,(o,a)=>{const c=Yt(tt(r,new W(o)),a);s=s.updateImmediateChild(o,c)}),Sa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=tt(n.visibleWrites,e);return Sa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function wg(n,e,t,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=J(e,t);if(ur(n.visibleWrites,r))return null;{const o=tt(n.visibleWrites,r);return dr(o)?i.getChild(t):Yt(o,i.getChild(t))}}function Eg(n,e,t,s){const i=J(e,t),r=Nt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=tt(n.visibleWrites,i);return Yt(o,s.getNode().getImmediateChild(t))}else return null}function bg(n,e){return Nt(n.visibleWrites,e)}function Ig(n,e,t,s,i,r,o){let a;const c=tt(n.visibleWrites,e),l=Nt(c,B());if(l!=null)a=l;else if(t!=null)a=Yt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=h.getNext();for(;p&&d.length<i;)u(p,s)!==0&&d.push(p),p=h.getNext();return d}else return[]}function Cg(){return{visibleWrites:Ee.empty(),allWrites:[],lastWriteId:-1}}function Fs(n,e,t,s){return Fl(n.writeTree,n.treePath,e,t,s)}function Zr(n,e){return yg(n.writeTree,n.treePath,e)}function Ta(n,e,t,s){return wg(n.writeTree,n.treePath,e,t,s)}function Us(n,e){return bg(n.writeTree,J(n.treePath,e))}function kg(n,e,t,s,i,r){return Ig(n.writeTree,n.treePath,e,t,s,i,r)}function eo(n,e,t){return Eg(n.writeTree,n.treePath,e,t)}function Ul(n,e){return Bl(J(n.treePath,e),n.writeTree)}function Bl(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Sg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;E(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,xn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Dn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Kt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,xn(s,e.snapshotNode,i.oldSnap));else throw en("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Tg{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Wl=new Tg;class to{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new it(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return eo(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ct(this.viewCache_),r=kg(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Rg(n){return{filter:n}}function Ag(n,e){E(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Ng(n,e,t,s,i){const r=new Sg;let o,a;if(t.type===we.OVERWRITE){const l=t;l.source.fromUser?o=hr(n,e,l.path,l.snap,s,i,r):(E(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!D(l.path),o=Bs(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===we.MERGE){const l=t;l.source.fromUser?o=Og(n,e,l.path,l.children,s,i,r):(E(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=fr(n,e,l.path,l.children,s,i,a,r))}else if(t.type===we.ACK_USER_WRITE){const l=t;l.revert?o=Dg(n,e,l.path,s,i,r):o=Mg(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===we.LISTEN_COMPLETE)o=Lg(n,e,t.path,s,r);else throw en("Unknown operation type: "+t.type);const c=r.getChanges();return Pg(e,o,c),{viewCache:o,changes:c}}function Pg(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=$s(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Ll($s(e)))}}function Hl(n,e,t,s,i,r){const o=e.eventCache;if(Us(s,t)!=null)return e;{let a,c;if(D(t))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Ct(e),d=l instanceof R?l:R.EMPTY_NODE,u=Zr(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=Fs(s,Ct(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=L(t);if(l===".priority"){E(st(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=Ta(s,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=G(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=Ta(s,t,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=eo(s,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,i,r):a=o.getNode()}}return Cn(e,a,o.isFullyInitialized()||D(t),n.filter.filtersNodes())}}function Bs(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if(D(t))l=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,s);l=d.updateFullNode(c.getNode(),p,null)}else{const p=L(t);if(!c.isCompleteForPath(t)&&st(t)>1)return e;const g=G(t),m=c.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?l=d.updatePriority(c.getNode(),m):l=d.updateChild(c.getNode(),p,m,g,Wl,null)}const u=Dl(e,l,c.isFullyInitialized()||D(t),d.filtersNodes()),h=new to(i,u,r);return Hl(n,u,t,i,h,a)}function hr(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const d=new to(i,e,r);if(D(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Cn(e,l,!0,n.filter.filtersNodes());else{const u=L(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=Cn(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=G(t),p=a.getNode().getImmediateChild(u);let g;if(D(h))g=s;else{const y=d.getCompleteChild(u);y!=null?Vr(h)===".priority"&&y.getChild(Tl(h)).isEmpty()?g=y:g=y.updateChild(h,s):g=R.EMPTY_NODE}if(p.equals(g))c=e;else{const y=n.filter.updateChild(a.getNode(),u,g,h,d,o);c=Cn(e,y,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Ra(n,e){return n.eventCache.isCompleteForChild(e)}function Og(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const d=J(t,c);Ra(e,L(d))&&(a=hr(n,a,d,l,i,r,o))}),s.foreach((c,l)=>{const d=J(t,c);Ra(e,L(d))||(a=hr(n,a,d,l,i,r,o))}),a}function Aa(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function fr(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;D(t)?l=s:l=new K(null).setTree(t,s);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),g=Aa(n,p,h);c=Bs(n,c,new W(u),g,i,r,o,a)}}),l.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!p){const g=e.serverCache.getNode().getImmediateChild(u),y=Aa(n,g,h);c=Bs(n,c,new W(u),y,i,r,o,a)}}),c}function Mg(n,e,t,s,i,r,o){if(Us(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(D(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Bs(n,e,t,c.getNode().getChild(t),i,r,a,o);if(D(t)){let l=new K(null);return c.getNode().forEachChild(Ht,(d,u)=>{l=l.set(new W(d),u)}),fr(n,e,t,l,i,r,a,o)}else return e}else{let l=new K(null);return s.foreach((d,u)=>{const h=J(t,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),fr(n,e,t,l,i,r,a,o)}}function Lg(n,e,t,s,i){const r=e.serverCache,o=Dl(e,r.getNode(),r.isFullyInitialized()||D(t),r.isFiltered());return Hl(n,o,t,s,Wl,i)}function Dg(n,e,t,s,i,r){let o;if(Us(s,t)!=null)return e;{const a=new to(s,e,i),c=e.eventCache.getNode();let l;if(D(t)||L(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Fs(s,Ct(e));else{const u=e.serverCache.getNode();E(u instanceof R,"serverChildren would be complete if leaf node"),d=Zr(s,u)}d=d,l=n.filter.updateFullNode(c,d,r)}else{const d=L(t);let u=eo(s,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,G(t),a,r):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,R.EMPTY_NODE,G(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fs(s,Ct(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Us(s,B())!=null,Cn(e,l,o,n.filter.filtersNodes())}}/**
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
 */class xg{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new zr(s.getIndex()),r=eg(s);this.processor_=Rg(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(R.EMPTY_NODE,a.getNode(),null),d=new it(c,o.isFullyInitialized(),i.filtersNodes()),u=new it(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ci(u,d),this.eventGenerator_=new ag(this.query_)}get query(){return this.query_}}function $g(n){return n.viewCache_.serverCache.getNode()}function Fg(n){return $s(n.viewCache_)}function Ug(n,e){const t=Ct(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!D(e)&&!t.getImmediateChild(L(e)).isEmpty())?t.getChild(e):null}function Na(n){return n.eventRegistrations_.length===0}function Bg(n,e){n.eventRegistrations_.push(e)}function Pa(n,e,t){const s=[];if(t){E(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Oa(n,e,t,s){e.type===we.MERGE&&e.source.queryId!==null&&(E(Ct(n.viewCache_),"We should always have a full cache before handling merges"),E($s(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Ng(n.processor_,i,e,t,s);return Ag(n.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,jl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Wg(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Y,(r,o)=>{s.push(Kt(r,o))}),t.isFullyInitialized()&&s.push(Ll(t.getNode())),jl(n,s,t.getNode(),e)}function jl(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return cg(n.eventGenerator_,e,t,i)}/**
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
 */let Ws;class Vl{constructor(){this.views=new Map}}function Hg(n){E(!Ws,"__referenceConstructor has already been defined"),Ws=n}function jg(){return E(Ws,"Reference.ts has not been loaded"),Ws}function Vg(n){return n.views.size===0}function no(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),Oa(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Oa(o,e,t,s));return r}}function Gl(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Fs(t,i?s:null),c=!1;a?c=!0:s instanceof R?(a=Zr(t,s),c=!1):(a=R.EMPTY_NODE,c=!1);const l=ci(new it(a,c,!1),new it(s,i,!1));return new xg(e,l)}return o}function Gg(n,e,t,s,i,r){const o=Gl(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Bg(o,t),Wg(o,t)}function qg(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=rt(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(Pa(l,t,s)),Na(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(Pa(c,t,s)),Na(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!rt(n)&&r.push(new(jg())(e._repo,e._path)),{removed:r,events:o}}function ql(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function nt(n,e){let t=null;for(const s of n.views.values())t=t||Ug(s,e);return t}function Kl(n,e){if(e._queryParams.loadsAllData())return ui(n);{const s=e._queryIdentifier;return n.views.get(s)}}function zl(n,e){return Kl(n,e)!=null}function rt(n){return ui(n)!=null}function ui(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Hs;function Kg(n){E(!Hs,"__referenceConstructor has already been defined"),Hs=n}function zg(){return E(Hs,"Reference.ts has not been loaded"),Hs}let Yg=1;class Ma{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=Cg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function so(n,e,t,s,i){return hg(n.pendingWriteTree_,e,t,s,i),i?an(n,new It(Qr(),e,t)):[]}function Qg(n,e,t,s){fg(n.pendingWriteTree_,e,t,s);const i=K.fromObject(t);return an(n,new zt(Qr(),e,i))}function Ye(n,e,t=!1){const s=pg(n.pendingWriteTree_,e);if(mg(n.pendingWriteTree_,e)){let r=new K(null);return s.snap!=null?r=r.set(B(),!0):ne(s.children,o=>{r=r.set(new W(o),!0)}),an(n,new xs(s.path,r,t))}else return[]}function Xn(n,e,t){return an(n,new It(Jr(),e,t))}function Jg(n,e,t){const s=K.fromObject(t);return an(n,new zt(Jr(),e,s))}function Xg(n,e){return an(n,new Fn(Jr(),e))}function Zg(n,e,t){const s=io(n,t);if(s){const i=ro(s),r=i.path,o=i.queryId,a=ce(r,e),c=new Fn(Xr(o),a);return oo(n,r,c)}else return[]}function js(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||zl(o,e))){const c=qg(o,e,t,s);Vg(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(h,p)=>rt(p));if(d&&!u){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=n_(h);for(let g=0;g<p.length;++g){const y=p[g],m=y.query,_=Xl(n,y);n.listenProvider_.startListening(Sn(m),Un(n,m),_.hashFn,_.onComplete)}}}!u&&l.length>0&&!s&&(d?n.listenProvider_.stopListening(Sn(e),null):l.forEach(h=>{const p=n.queryToTagMap.get(hi(h));n.listenProvider_.stopListening(Sn(h),p)}))}s_(n,l)}return a}function Yl(n,e,t,s){const i=io(n,s);if(i!=null){const r=ro(i),o=r.path,a=r.queryId,c=ce(o,e),l=new It(Xr(a),c,t);return oo(n,o,l)}else return[]}function e_(n,e,t,s){const i=io(n,s);if(i){const r=ro(i),o=r.path,a=r.queryId,c=ce(o,e),l=K.fromObject(t),d=new zt(Xr(a),c,l);return oo(n,o,d)}else return[]}function pr(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(h,p)=>{const g=ce(h,i);r=r||nt(p,g),o=o||rt(p)});let a=n.syncPointTree_.get(i);a?(o=o||rt(a),r=r||nt(a,B())):(a=new Vl,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=R.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,g)=>{const y=nt(g,B());y&&(r=r.updateImmediateChild(p,y))}));const l=zl(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=hi(e);E(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=i_();n.queryToTagMap.set(h,p),n.tagToQueryMap.set(p,h)}const d=li(n.pendingWriteTree_,i);let u=Gg(a,e,t,d,r,c);if(!l&&!o&&!s){const h=Kl(a,e);u=u.concat(r_(n,e,h))}return u}function di(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=ce(o,e),l=nt(a,c);if(l)return l});return Fl(i,e,r,t,!0)}function t_(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const u=ce(l,t);s=s||nt(d,u)});let i=n.syncPointTree_.get(t);i?s=s||nt(i,B()):(i=new Vl,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new it(s,!0,!1):null,a=li(n.pendingWriteTree_,e._path),c=Gl(i,e,a,r?o.getNode():R.EMPTY_NODE,r);return Fg(c)}function an(n,e){return Ql(e,n.syncPointTree_,null,li(n.pendingWriteTree_,B()))}function Ql(n,e,t,s){if(D(n.path))return Jl(n,e,t,s);{const i=e.get(B());t==null&&i!=null&&(t=nt(i,B()));let r=[];const o=L(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=Ul(s,o);r=r.concat(Ql(a,c,l,d))}return i&&(r=r.concat(no(i,n,s,t))),r}}function Jl(n,e,t,s){const i=e.get(B());t==null&&i!=null&&(t=nt(i,B()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Ul(s,o),d=n.operationForChild(o);d&&(r=r.concat(Jl(d,a,c,l)))}),i&&(r=r.concat(no(i,n,s,t))),r}function Xl(n,e){const t=e.query,s=Un(n,t);return{hashFn:()=>($g(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Zg(n,t._path,s):Xg(n,t._path);{const r=Xp(i,t);return js(n,t,null,r)}}}}function Un(n,e){const t=hi(e);return n.queryToTagMap.get(t)}function hi(n){return n._path.toString()+"$"+n._queryIdentifier}function io(n,e){return n.tagToQueryMap.get(e)}function ro(n){const e=n.indexOf("$");return E(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new W(n.substr(0,e))}}function oo(n,e,t){const s=n.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=li(n.pendingWriteTree_,e);return no(s,t,i,null)}function n_(n){return n.fold((e,t,s)=>{if(t&&rt(t))return[ui(t)];{let i=[];return t&&(i=ql(t)),ne(s,(r,o)=>{i=i.concat(o)}),i}})}function Sn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(zg())(n._repo,n._path):n}function s_(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=hi(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function i_(){return Yg++}function r_(n,e,t){const s=e._path,i=Un(n,e),r=Xl(n,t),o=n.listenProvider_.startListening(Sn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)E(!rt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!D(l)&&d&&rt(d))return[ui(d).query];{let h=[];return d&&(h=h.concat(ql(d).map(p=>p.query))),ne(u,(p,g)=>{h=h.concat(g)}),h}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(Sn(d),Un(n,d))}}return o}/**
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
 */class ao{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ao(t)}node(){return this.node_}}class co{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=J(this.path_,e);return new co(this.syncTree_,t)}node(){return di(this.syncTree_,this.path_)}}const o_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},La=function(n,e,t){if(!n||typeof n!="object")return n;if(E(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return a_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return c_(n[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},a_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:E(!1,"Unexpected server value: "+n)}},c_=function(n,e,t){n.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Zl=function(n,e,t,s){return uo(e,new co(t,n),s)},lo=function(n,e,t){return uo(n,new ao(e),t)};function uo(n,e,t){const s=n.getPriority().val(),i=La(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=La(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new Z(a,Q(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Z(i))),o.forEachChild(Y,(a,c)=>{const l=uo(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class ho{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function fi(n,e){let t=e instanceof W?e:new W(e),s=n,i=L(t);for(;i!==null;){const r=vt(s.node.children,i)||{children:{},childCount:0};s=new ho(i,s,r),t=G(t),i=L(t)}return s}function Pt(n){return n.node.value}function fo(n,e){n.node.value=e,mr(n)}function eu(n){return n.node.childCount>0}function l_(n){return Pt(n)===void 0&&!eu(n)}function pi(n,e){ne(n.node.children,(t,s)=>{e(new ho(t,n,s))})}function tu(n,e,t,s){t&&e(n),pi(n,i=>{tu(i,e,!0)})}function u_(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Zn(n){return new W(n.parent===null?n.name:Zn(n.parent)+"/"+n.name)}function mr(n){n.parent!==null&&d_(n.parent,n.name,n)}function d_(n,e,t){const s=l_(t),i=Ce(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,mr(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,mr(n))}/**
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
 */const h_=/[\[\].#$\/\u0000-\u001F\u007F]/,f_=/[\[\].#$\u0000-\u001F\u007F]/,Fi=10*1024*1024,po=function(n){return typeof n=="string"&&n.length!==0&&!h_.test(n)},nu=function(n){return typeof n=="string"&&n.length!==0&&!f_.test(n)},p_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nu(n)},mo=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!oi(n)||n&&typeof n=="object"&&Ce(n,".sv")},Vs=function(n,e,t,s){s&&e===void 0||es(Vt(n,"value"),e,t)},es=function(n,e,t){const s=t instanceof W?new Om(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ht(s));if(typeof e=="function")throw new Error(n+"contains a function "+ht(s)+" with contents = "+e.toString());if(oi(e))throw new Error(n+"contains "+e.toString()+" "+ht(s));if(typeof e=="string"&&e.length>Fi/3&&ni(e)>Fi)throw new Error(n+"contains a string greater than "+Fi+" utf8 bytes "+ht(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ne(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!po(o)))throw new Error(n+" contains an invalid key ("+o+") "+ht(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Mm(s,o),es(n,a,s),Lm(s)}),i&&r)throw new Error(n+' contains ".value" child '+ht(s)+" in addition to actual children.")}},m_=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Ln(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!po(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Pm);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&ge(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},su=function(n,e,t,s){const i=Vt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];ne(e,(o,a)=>{const c=new W(o);if(es(i,a,J(t,c)),Vr(c)===".priority"&&!mo(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),m_(i,r)},g_=function(n,e,t){if(oi(e))throw new Error(Vt(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!mo(e))throw new Error(Vt(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},iu=function(n,e,t,s){if(!nu(t))throw new Error(Vt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},__=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),iu(n,e,t)},Qe=function(n,e){if(L(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},v_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!po(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!p_(t))throw new Error(Vt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class y_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mi(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Gr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function ru(n,e,t){mi(n,t),ou(n,s=>Gr(s,e))}function he(n,e,t){mi(n,t),ou(n,s=>ge(s,e)||ge(e,s))}function ou(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(w_(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function w_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();bn&&te("event: "+t.toString()),rn(s)}}}/**
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
 */const E_="repo_interrupt",b_=25;class I_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new y_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ds(),this.transactionQueueTree_=new ho,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function C_(n,e,t){if(n.stats_=Hr(n.repoInfo_),n.forceRestClient_||nm())n.server_=new Ls(n.repoInfo_,(s,i,r,o)=>{Da(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>xa(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{X(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new $e(n.repoInfo_,e,(s,i,r,o)=>{Da(n,s,i,r,o)},s=>{xa(n,s)},s=>{k_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=am(n.repoInfo_,()=>new og(n.stats_,n.server_)),n.infoData_=new tg,n.infoSyncTree_=new Ma({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Xn(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),go(n,"connected",!1),n.serverSyncTree_=new Ma({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);he(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function au(n){const t=n.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ts(n){return o_({timestamp:au(n)})}function Da(n,e,t,s,i){n.dataUpdateCount++;const r=new W(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Is(t,l=>Q(l));o=e_(n.serverSyncTree_,r,c,i)}else{const c=Q(t);o=Yl(n.serverSyncTree_,r,c,i)}else if(s){const c=Is(t,l=>Q(l));o=Jg(n.serverSyncTree_,r,c)}else{const c=Q(t);o=Xn(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Qt(n,r)),he(n.eventQueue_,a,o)}function xa(n,e){go(n,"connected",e),e===!1&&A_(n)}function k_(n,e){ne(e,(t,s)=>{go(n,t,s)})}function go(n,e,t){const s=new W("/.info/"+e),i=Q(t);n.infoData_.updateSnapshot(s,i);const r=Xn(n.infoSyncTree_,s,i);he(n.eventQueue_,s,r)}function gi(n){return n.nextWriteId_++}function S_(n,e,t){const s=t_(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=Q(i).withIndex(e._queryParams.getIndex());pr(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Xn(n.serverSyncTree_,e._path,r);else{const a=Un(n.serverSyncTree_,e);o=Yl(n.serverSyncTree_,e._path,r,a)}return he(n.eventQueue_,e._path,o),js(n.serverSyncTree_,e,t,null,!0),r},i=>(cn(n,"get for query "+X(e)+" failed: "+i),Promise.reject(new Error(i))))}function T_(n,e,t,s,i){cn(n,"set",{path:e.toString(),value:t,priority:s});const r=ts(n),o=Q(t,s),a=di(n.serverSyncTree_,e),c=lo(o,a,r),l=gi(n),d=so(n.serverSyncTree_,e,c,l,!0);mi(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,p)=>{const g=h==="ok";g||le("set at "+e+" failed: "+h);const y=Ye(n.serverSyncTree_,l,!g);he(n.eventQueue_,e,y),ot(n,i,h,p)});const u=vo(n,e);Qt(n,u),he(n.eventQueue_,u,[])}function R_(n,e,t,s){cn(n,"update",{path:e.toString(),value:t});let i=!0;const r=ts(n),o={};if(ne(t,(a,c)=>{i=!1,o[a]=Zl(J(e,a),Q(c),n.serverSyncTree_,r)}),i)te("update() called with empty data.  Don't do anything."),ot(n,s,"ok",void 0);else{const a=gi(n),c=Qg(n.serverSyncTree_,e,o,a);mi(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{const u=l==="ok";u||le("update at "+e+" failed: "+l);const h=Ye(n.serverSyncTree_,a,!u),p=h.length>0?Qt(n,e):e;he(n.eventQueue_,p,h),ot(n,s,l,d)}),ne(t,l=>{const d=vo(n,J(e,l));Qt(n,d)}),he(n.eventQueue_,e,[])}}function A_(n){cn(n,"onDisconnectEvents");const e=ts(n),t=Ds();cr(n.onDisconnect_,B(),(i,r)=>{const o=Zl(i,r,n.serverSyncTree_,e);on(t,i,o)});let s=[];cr(t,B(),(i,r)=>{s=s.concat(Xn(n.serverSyncTree_,i,r));const o=vo(n,i);Qt(n,o)}),n.onDisconnect_=Ds(),he(n.eventQueue_,B(),s)}function N_(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&ar(n.onDisconnect_,e),ot(n,t,s,i)})}function $a(n,e,t,s){const i=Q(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&on(n.onDisconnect_,e,i),ot(n,s,r,o)})}function P_(n,e,t,s,i){const r=Q(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&on(n.onDisconnect_,e,r),ot(n,i,o,a)})}function O_(n,e,t,s){if(bs(t)){te("onDisconnect().update() called with empty data.  Don't do anything."),ot(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&ne(t,(o,a)=>{const c=Q(a);on(n.onDisconnect_,J(e,o),c)}),ot(n,s,i,r)})}function M_(n,e,t){let s;L(e._path)===".info"?s=pr(n.infoSyncTree_,e,t):s=pr(n.serverSyncTree_,e,t),ru(n.eventQueue_,e._path,s)}function gr(n,e,t){let s;L(e._path)===".info"?s=js(n.infoSyncTree_,e,t):s=js(n.serverSyncTree_,e,t),ru(n.eventQueue_,e._path,s)}function L_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(E_)}function cn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),te(t,...e)}function ot(n,e,t,s){e&&rn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function D_(n,e,t,s,i,r){cn(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:rl(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=_o(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{es("transaction failed: Data returned ",c,o.path),o.status=0;const l=fi(n.transactionQueueTree_,e),d=Pt(l)||[];d.push(o),fo(l,d);let u;typeof c=="object"&&c!==null&&Ce(c,".priority")?(u=vt(c,".priority"),E(mo(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(di(n.serverSyncTree_,e)||R.EMPTY_NODE).getPriority().val();const h=ts(n),p=Q(c,u),g=lo(p,a,h);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=g,o.currentWriteId=gi(n);const y=so(n.serverSyncTree_,e,g,o.currentWriteId,o.applyLocally);he(n.eventQueue_,e,y),_i(n,n.transactionQueueTree_)}}function _o(n,e,t){return di(n.serverSyncTree_,e,t)||R.EMPTY_NODE}function _i(n,e=n.transactionQueueTree_){if(e||vi(n,e),Pt(e)){const t=lu(n,e);E(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&x_(n,Zn(e),t)}else eu(e)&&pi(e,t=>{_i(n,t)})}function x_(n,e,t){const s=t.map(l=>l.currentWriteId),i=_o(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const d=t[l];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=ce(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{cn(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(Ye(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();vi(n,fi(n.transactionQueueTree_,e)),_i(n,n.transactionQueueTree_),he(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)rn(u[h])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{le("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}Qt(n,e)}},o)}function Qt(n,e){const t=cu(n,e),s=Zn(t),i=lu(n,t);return $_(n,i,s),s}function $_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ce(t,c.path);let d=!1,u;if(E(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,i=i.concat(Ye(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=b_)d=!0,u="maxretry",i=i.concat(Ye(n.serverSyncTree_,c.currentWriteId,!0));else{const h=_o(n,c.path,o);c.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){es("transaction failed: Data returned ",p,c.path);let g=Q(p);typeof p=="object"&&p!=null&&Ce(p,".priority")||(g=g.updatePriority(h.getPriority()));const m=c.currentWriteId,_=ts(n),v=lo(g,h,_);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=v,c.currentWriteId=gi(n),o.splice(o.indexOf(m),1),i=i.concat(so(n.serverSyncTree_,c.path,v,c.currentWriteId,c.applyLocally)),i=i.concat(Ye(n.serverSyncTree_,m,!0))}else d=!0,u="nodata",i=i.concat(Ye(n.serverSyncTree_,c.currentWriteId,!0))}he(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}vi(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)rn(s[a]);_i(n,n.transactionQueueTree_)}function cu(n,e){let t,s=n.transactionQueueTree_;for(t=L(e);t!==null&&Pt(s)===void 0;)s=fi(s,t),e=G(e),t=L(e);return s}function lu(n,e){const t=[];return uu(n,e,t),t.sort((s,i)=>s.order-i.order),t}function uu(n,e,t){const s=Pt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);pi(e,i=>{uu(n,i,t)})}function vi(n,e){const t=Pt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,fo(e,t.length>0?t:void 0)}pi(e,s=>{vi(n,s)})}function vo(n,e){const t=Zn(cu(n,e)),s=fi(n.transactionQueueTree_,e);return u_(s,i=>{Ui(n,i)}),Ui(n,s),tu(s,i=>{Ui(n,i)}),t}function Ui(n,e){const t=Pt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(E(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ye(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?fo(e,void 0):t.length=r+1,he(n.eventQueue_,Zn(e),i);for(let o=0;o<s.length;o++)rn(s[o])}}/**
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
 */function F_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function U_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):le(`Invalid query segment '${t}' in query '${n}'`)}return e}const Fa=function(n,e){const t=B_(n),s=t.namespace;t.domain==="firebase.com"&&Be(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Be("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Kp();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new vl(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new W(t.pathString)}},B_=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(i=F_(n.substring(d,u)));const h=U_(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Ua="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",W_=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Ua.charAt(t%64),t=Math.floor(t/64);E(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ua.charAt(e[i]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class H_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+X(this.snapshot.exportVal())}}class j_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class du{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class V_{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ve;return N_(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Qe("OnDisconnect.remove",this._path);const e=new ve;return $a(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Qe("OnDisconnect.set",this._path),Vs("OnDisconnect.set",e,this._path,!1);const t=new ve;return $a(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Qe("OnDisconnect.setWithPriority",this._path),Vs("OnDisconnect.setWithPriority",e,this._path,!1),g_("OnDisconnect.setWithPriority",t);const s=new ve;return P_(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Qe("OnDisconnect.update",this._path),su("OnDisconnect.update",e,this._path);const t=new ve;return O_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class yo{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return D(this._path)?null:Vr(this._path)}get ref(){return new Ne(this._repo,this._path)}get _queryIdentifier(){const e=Ia(this._queryParams),t=Br(e);return t==="{}"?"default":t}get _queryObject(){return Ia(this._queryParams)}isEqual(e){if(e=se(e),!(e instanceof yo))return!1;const t=this._repo===e._repo,s=Gr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Nm(this._path)}}class Ne extends yo{constructor(e,t){super(e,t,new Yr,!1)}get parent(){const e=Tl(this._path);return e===null?null:new Ne(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new W(e),s=Bn(this.ref,e);return new Jt(this._node.getChild(t),s,Y)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Jt(i,Bn(this.ref,s),Y)))}hasChild(e){const t=new W(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function P(n,e){return n=se(n),n._checkNotDeleted("ref"),e!==void 0?Bn(n._root,e):n._root}function Bn(n,e){return n=se(n),L(n._path)===null?__("child","path",e):iu("child","path",e),new Ne(n._repo,J(n._path,e))}function G_(n){return n=se(n),new V_(n._repo,n._path)}function wo(n,e){n=se(n),Qe("push",n._path),Vs("push",e,n._path,!0);const t=au(n._repo),s=W_(t),i=Bn(n,s),r=Bn(n,s);let o;return e!=null?o=ln(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Je(n){return Qe("remove",n._path),ln(n,null)}function ln(n,e){n=se(n),Qe("set",n._path),Vs("set",e,n._path,!1);const t=new ve;return T_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function We(n,e){su("update",e,n._path);const t=new ve;return R_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Ot(n){n=se(n);const e=new du(()=>{}),t=new yi(e);return S_(n._repo,n,t).then(s=>new Jt(s,new Ne(n._repo,n._path),n._queryParams.getIndex()))}class yi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new H_("value",this,new Jt(e.snapshotNode,new Ne(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new j_(this,e,t):null}matches(e){return e instanceof yi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function q_(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(d,u)=>{gr(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new du(t,r||void 0),a=new yi(o);return M_(n._repo,n,a),()=>gr(n._repo,n,a)}function ns(n,e,t,s){return q_(n,"value",e,t,s)}function ss(n,e,t){gr(n._repo,n,null)}Hg(Ne);Kg(Ne);/**
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
 */const K_="FIREBASE_DATABASE_EMULATOR_HOST",_r={};let z_=!1;function Y_(n,e,t,s){n.repoInfo_=new vl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Q_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Be("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),te("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Fa(r,i),a=o.repoInfo,c;typeof process<"u"&&ra&&(c=ra[K_]),c?(r=`http://${c}?ns=${a.namespace}`,o=Fa(r,i),a=o.repoInfo):o.repoInfo.secure;const l=new im(n.name,n.options,e);v_("Invalid Firebase Database URL",o),D(o.path)||Be("Database URL must point to the root of a Firebase Database (not including a child path).");const d=X_(a,n,l,new sm(n.name,t));return new Z_(d,n)}function J_(n,e){const t=_r[e];(!t||t[n.key]!==n)&&Be(`Database ${e}(${n.repoInfo_}) has already been deleted.`),L_(n),delete t[n.key]}function X_(n,e,t,s){let i=_r[e.name];i||(i={},_r[e.name]=i);let r=i[n.toURLString()];return r&&Be("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new I_(n,z_,t,s),i[n.toURLString()]=r,r}class Z_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(C_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ne(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(J_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Be("Cannot call "+e+" on a deleted database.")}}function ev(n=wc(),e){const t=Nr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=td("database");s&&tv(t,...s)}return t}function tv(n,e,t,s={}){n=se(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Be("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Be('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ps(ps.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:nd(s.mockUserToken,n.app.options.projectId);r=new ps(o)}Y_(i,e,t,r)}/**
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
 */function nv(n){Hp(nn),Gt(new yt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Q_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),et(oa,aa,n),et(oa,aa,"esm2017")}/**
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
 */const sv={".sv":"timestamp"};function hu(){return sv}/**
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
 */class iv{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function _e(n,e,t){var s;if(n=se(n),Qe("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new ve,o=(c,l,d)=>{let u=null;c?r.reject(c):(u=new Jt(d,new Ne(n._repo,n._path),Y),r.resolve(new iv(l,u)))},a=ns(n,()=>{});return D_(n._repo,n._path,e,o,a,i),r.promise}$e.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};$e.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};nv();const yn={apiKey:"AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",authDomain:"market-6e66a.firebaseapp.com",databaseURL:"https://market-6e66a-default-rtdb.firebaseio.com",projectId:"market-6e66a",storageBucket:"market-6e66a.firebasestorage.app",messagingSenderId:"402312269082",appId:"1:402312269082:web:cf304afc54057ea162b0a3"},fu=!!yn.apiKey&&!yn.apiKey.startsWith("여기에")&&!!yn.databaseURL&&!yn.databaseURL.startsWith("여기에");let Bi=null,Xt=null,A=null;try{fu&&(Bi=yc(yn),Xt=Bp(Bi),A=ev(Bi))}catch(n){console.error("[firebase] 초기화 실패:",n)}const be=1e7,He=10,vr=6,Ba=1,yr=4e3,rv=.035,ov=.008,Wa=3e4,pu=15e-5,av=.0018,cv=3*60*1e3,lv=["달빛전자","구름소프트","번개모빌리티","바다식품","별빛바이오","한입게임즈","초록에너지","솜사탕유통","무지개항공","도토리금융","은하반도체","포근화학","두근로보틱스","새벽엔터","고래물산","민들레제약"],uv=["떡상테크","유니콘소프트","미래모빌","첫걸음바이오","샛별에너지","루키게임즈","신화엔터","퀀텀반도체"],dv=[{key:"semi",name:"반도체",leader:"은하반도체",suffixes:["반도체","전자","소자","머티리얼즈","시스템","테크","세미콘"]},{key:"bio",name:"바이오",leader:"별빛바이오",suffixes:["바이오","제약","파마","셀","진단","메디","테라퓨틱스"]},{key:"battery",name:"2차전지",leader:"번개배터리",suffixes:["배터리","에너지","케미칼","머티리얼","파워","솔라","ESS"]},{key:"net",name:"인터넷·게임",leader:"구름소프트",suffixes:["소프트","게임즈","엔터","네트웍스","스튜디오","플랫폼","미디어"]}],cs=["별빛","달빛","은하","구름","번개","바다","초록","솜사탕","무지개","도토리","한입","포근","두근","새벽","고래","민들레","노을","단비","햇살","모래","안개","서리","물결","바람","이슬","구슬","파도","돌담","오름","나래","미르","해솔","가람","마루","아라","여울","보라","수풀","겨울","봄날"],Ha=["개미부대","왕개미","큰손","수상한세력","외국인","기관","전설의단타","스캘퍼","장기투자자","물타기달인"],ja=[{text:"{name}, 신제품 공개에 기대감 폭발",effect:[.05,.15]},{text:"{name}, 대형 계약 체결 소식",effect:[.08,.18]},{text:"{name}, 깜짝 실적 발표 소문 확산",effect:[.04,.12]},{text:"{name}, 신사업 진출 선언",effect:[.03,.1]},{text:"{name}, 해외 진출 성공 소식",effect:[.06,.14]},{text:"{name}, 핵심 인력 대거 이탈설",effect:[-.15,-.05]},{text:"{name}, 서비스 대규모 장애 발생",effect:[-.12,-.04]},{text:"{name}, 규제 이슈로 불확실성 확대",effect:[-.18,-.08]},{text:"{name}, 자금난 우려 제기",effect:[-.14,-.06]},{text:"{name}, 경쟁사 등장으로 점유율 하락 전망",effect:[-.1,-.03]}];function re(n,e){return Math.floor(Math.random()*(e-n+1))+n}function q(n,e){return Math.random()*(e-n)+n}function pe(n,e,t){return Math.max(e,Math.min(t,n))}function hv(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function mu(n,e,t={}){const s=t.type||"stock",i=t.role||null;e=Te(Math.max(He,e));let r=1,o=1;return s==="stock"?i==="leader"?(r=q(.8,1.4),o=q(2,3)):i==="sub"?(r=q(.9,1.6),o=q(1.2,2.2)):i==="related"?(r=q(.7,2),o=q(.6,1.8)):(r=q(.5,2.4),o=q(.3,1.2)):s==="preferred"?(r=q(.4,.8),o=q(.5,1.1)):s==="etf"?(r=q(.5,.8),o=q(1.5,2.5)):s==="reit"?(r=q(.35,.7),o=q(.6,1.2)):s==="bond"?(r=q(.2,.45),o=q(.8,1.4)):s==="spac"?(r=q(.2,.5),o=q(.4,.9)):s==="commodity"?(r=q(.9,1.8),o=q(1,2)):(s==="inverse"||s==="leverage")&&(r=1,o=q(1.5,2.5)),{name:n,type:s,role:i||"",sector:t.sector||"",link:t.link||"",price:e,previousPrice:e,basePrice:e,open:e,high:e,low:e,changeRate:0,volume:0,value:0,pressure:0,trend:0,volat:+r.toFixed(2),activ:+o.toFixed(2),heat:0,news:""}}function fv(){const n={},e=new Set,t=r=>{for(let o=0;o<50;o++){const a=cs[re(0,cs.length-1)]+r;if(!e.has(a))return e.add(a),a}return cs[re(0,cs.length-1)]+r+re(1,99)};let s=0;const i=(r,o)=>{const a="s"+s++;return n[a]=mu(o.name,r,o),a};return dv.forEach(r=>{e.add(r.leader);const o=()=>r.suffixes[re(0,r.suffixes.length-1)],a=i(re(6e4,13e4),{name:r.leader,type:"stock",role:"leader",sector:r.name});for(let c=0;c<2;c++)i(re(25e3,7e4),{name:t(r.suffixes[0]),type:"stock",role:"sub",sector:r.name});for(let c=0;c<7;c++)i(re(4e3,45e3),{name:t(o()),type:"stock",role:"related",sector:r.name});for(let c=0;c<3;c++)i(re(1500,22e3),{name:t(o()),type:"stock",role:"normal",sector:r.name});i(Math.round(n[a].price*.82),{name:r.leader+"우",type:"preferred",sector:r.name,link:a})}),i(1e4,{name:"조스피 지수 ETF",type:"etf",link:"index"}),i(1e4,{name:"마켓 인버스 ETF",type:"inverse",link:"index"}),i(1e4,{name:"마켓 레버리지2X ETF",type:"leverage",link:"index"}),i(1e4,{name:"국채 3년 채권 ETF",type:"bond"}),i(2e4,{name:"골드 원자재 ETF",type:"commodity"}),i(15e3,{name:"원유 원자재 ETF",type:"commodity"}),i(5e3,{name:"도심 리츠 REITs",type:"reit"}),i(5e3,{name:"물류 리츠 REITs",type:"reit"}),i(2e3,{name:"미래합병1호 SPAC",type:"spac"}),i(2e3,{name:"성장합병2호 SPAC",type:"spac"}),n}function wi(n){return{preferred:"우선주",etf:"ETF",reit:"리츠",spac:"SPAC",inverse:"인버스",leverage:"레버리지",bond:"채권ETF",commodity:"원자재"}[n]||""}function gu(n){return{leader:"대장주",sub:"부대장주",related:"관련주",normal:"일반주"}[n]||""}function ls(n){return!n||n==="stock"}function Ei(n){return Math.round(n*1.3)}function bi(n){return Math.max(He,Math.round(n*.7))}function _u(n){return n<2e3?1:n<5e3?5:n<2e4?10:n<5e4?50:n<2e5?100:500}function Te(n){const e=_u(n);return Math.round(n/e)*e}async function pv(n,e){const t=e.stocks||{},s=Object.keys(t);if(s.length===0)return;let i=null,r=0,o="";if(Math.random()<rv){const _=s.filter(k=>ls(t[k].type)),v=_.length?_:s,b=v.map(k=>1+(t[k].activ||1)+(t[k].heat||0)*2),C=b.reduce((k,T)=>k+T,0);let w=Math.random()*C;i=v[v.length-1];for(let k=0;k<v.length;k++)if(w-=b[k],w<=0){i=v[k];break}const I=ja[re(0,ja.length-1)];r=q(I.effect[0],I.effect[1])*.4,o=I.text.replace("{name}",t[i].name)}const a=Date.now(),c={},l=[];function d(_){const v=(_.activ||1)*(1+(_.heat||0));let b=0,C=0;const w=pe(.35+v*.2,.25,.97);if(Math.random()<w){const I=re(1,Math.max(2,Math.round(1+v*3)));for(let k=0;k<I;k++){const T=re(10,Math.round(60+v*220)),F=.5+pe((_.trend||0)*15,-.3,.3),z=Math.random()<F;b+=z?T:-T,C+=T,l.push({nickname:Ha[re(0,Ha.length-1)],type:z?"buy":"sell",stockName:_.name,qty:T,price:_.price,time:a})}}return C+=Math.round(re(300,2500)*v),{botNet:b,botVolume:C}}function u(_,v,b,C,w={}){const I=v.basePrice||v.price;let k=Te(v.price*(1+b));k=pe(k,bi(I),Ei(I)),k=Math.max(He,k);const T=`stocks/${_}/`;return c[T+"previousPrice"]=v.price,c[T+"price"]=k,c[T+"changeRate"]=+((k-I)/I*100).toFixed(2),c[T+"volume"]=(v.volume||0)+C,c[T+"value"]=(v.value||0)+C*k,k>(v.high||v.price)&&(c[T+"high"]=k),k<(v.low||v.price)&&(c[T+"low"]=k),(v.pressure||0)!==0&&(c[T+"pressure"]=0),w.trend!=null&&(c[T+"trend"]=+w.trend.toFixed(5)),w.heat!=null&&(w.heat>.001||(v.heat||0)>.001)&&(c[T+"heat"]=+w.heat.toFixed(3)),w.news!=null&&(c[T+"news"]=w.news),k/v.price-1}function h(_){const v=_.volat||1;let b=(_.heat||0)*.92;Math.random()<.008&&(b=pe(b+q(.4,1.2),0,2));const C=v*(1+b*.6),w=pe((_.trend||0)*.95+(Math.random()-.5)*.0015*C,-.006*(1+b*.5),.006*(1+b*.5));let I=(Math.random()-.5)*.0035*C+w;return Math.random()<.008&&(I+=(Math.random()-.5)*.02*(1+b*.5)),{own:I,trend:w,heat:b}}const p={},g={},y=[];for(const _ of s){const v=t[_];if(!ls(v.type)||v.role!=="leader")continue;const{own:b,trend:C,heat:w}=h(v),{botNet:I,botVolume:k}=d({...v,heat:w});let T=b+pe((v.pressure||0)*.002,-.02,.02)+pe(I*2e-4,-.008,.008);_===i&&(T+=r);const F=u(_,v,T,k,{trend:C,heat:w,news:_===i?o:null});p[_]=F,g[v.sector]=F,y.push(F)}for(const _ of s){const v=t[_];if(!ls(v.type)||v.role==="leader")continue;const b=v.role==="related"?.7:v.role==="sub"?.45:.2,C=g[v.sector]||0,{own:w,trend:I,heat:k}=h(v),{botNet:T,botVolume:F}=d({...v,heat:k});let z=C*b+w*(1-b*.5);z+=pe((v.pressure||0)*.002,-.02,.02)+pe(T*2e-4,-.008,.008),_===i&&(z+=r);const M=u(_,v,z,F,{trend:I,heat:k,news:_===i?o:null});p[_]=M,y.push(M)}const m=y.length?y.reduce((_,v)=>_+v,0)/y.length:0;for(const _ of s){const v=t[_];if(ls(v.type))continue;const{botNet:b,botVolume:C}=d(v),w=Math.random()-.5;let I=0;switch(v.type){case"etf":I=m+w*.0015;break;case"inverse":I=-m+w*.0015;break;case"leverage":I=2*m+w*.002;break;case"bond":I=-.25*m+2e-4+w*.0012;break;case"reit":I=.2*m+2e-4+w*.004*(v.volat||1);break;case"commodity":I=w*.011*(v.volat||1)+(Math.random()<.01?(Math.random()-.5)*.05:0);break;case"preferred":I=(g[v.sector]||p[v.link]||0)*.85+w*.002;break;case"spac":I=w*.003+(Math.random()<.008?(Math.random()<.7?1:-1)*q(.06,.2):0);break;default:I=w*.005}I+=pe((v.pressure||0)*.002,-.02,.02)+pe(b*3e-4,-.01,.01),u(_,v,I,C,{})}c.marketTick=a,hv(l),c.botFeed=l.slice(0,4),o&&!c.latestNews&&(c.latestNews={text:o,time:a}),await We(P(A,`rooms/${n}`),c)}function Wi(n){return Math.round(n||0).toLocaleString("ko-KR")}async function mv(n,e){const t=Date.now(),s=e.stocks||{},i=e.ipo;if(i&&i.status==="subscribing"){if(t<i.endsAt)return;const h=i.applies||{},p=Object.values(h).reduce((C,w)=>C+(w||0),0),g=(i.botDemand||0)+p,y=Math.max(1,g/i.totalShares),m=pe(.92+(y-1)*.1+q(-.1,.15),.9,2.3),_=Math.max(He,Te(i.offerPrice*m)),v=mu(i.name,_,{type:"stock",role:"normal",sector:"신규상장"});v.ipo=!0;const b=((_-i.offerPrice)/i.offerPrice*100).toFixed(1);await We(P(A,`rooms/${n}`),{[`stocks/${i.stockId}`]:v,ipo:null,latestNews:{text:`🎉 ${i.name} 상장! 공모가 ${Wi(i.offerPrice)} → 시초가 ${Wi(_)} (${b>=0?"+":""}${b}%) · 경쟁률 ${y.toFixed(1)}:1`,time:t}});for(const[C,w]of Object.entries(h)){const I=w||0,k=Math.floor(I/y),T=i.offerPrice*(I-k);await _e(P(A,`rooms/${n}/players/${C}`),F=>F&&(T>0&&(F.cash=(F.cash||0)+T),k>0&&(F.holdings=F.holdings||{},F.holdings[i.stockId]=(F.holdings[i.stockId]||0)+k),F))}return}if(i||Object.keys(s).length>=90||Math.random()>=ov)return;const r=Object.values(s).map(h=>h.name),o=[...lv,...uv].filter(h=>!r.includes(h));if(!o.length)return;const a=o[re(0,o.length-1)],c=Te(re(5e3,6e4)),l=re(5e4,2e5),d=Math.floor(l*q(.4,9)),u="ipo"+t.toString(36);await We(P(A,`rooms/${n}`),{ipo:{stockId:u,name:a,offerPrice:c,totalShares:l,botDemand:d,status:"subscribing",startedAt:t,endsAt:t+Wa},latestNews:{text:`공모주 청약 시작! '${a}' 공모가 ${Wi(c)}원 · ${Math.round(Wa/1e3)}초 후 마감`,time:t}})}async function gv(n,e,t,s){const i=s.ipo;if(!i||i.status!=="subscribing")throw new Error("청약 가능한 공모주가 없습니다.");if(Date.now()>=i.endsAt)throw new Error("청약이 마감되었습니다.");if(t=Math.floor(t),!t||t<1)throw new Error("청약 수량을 확인하세요.");const r=i.offerPrice*t;if(!(await _e(P(A,`rooms/${n}/players/${e}/cash`),a=>{if(a==null)return a;if(!(a<r))return a-r})).committed)throw new Error("청약 증거금(현금)이 부족합니다.");await _e(P(A,`rooms/${n}/ipo/applies/${e}`),a=>(a||0)+t)}function _v(n){if(!n)return 0;const e=Object.values(n.applies||{}).reduce((t,s)=>t+(s||0),0);return((n.botDemand||0)+e)/n.totalShares}async function Gs(n,e,t,s,i,r,o,a){var y;const c=(y=a.stocks)==null?void 0:y[s];if(!c)throw new Error("종목을 선택하세요.");const l=i.side;if(l!=="buy"&&l!=="sell")throw new Error("주문 유형 오류");const d=i.trigger==="above"?"above":"below",u=["gtc","day","ioc"].includes(i.tif)?i.tif:"gtc";if(r=Math.floor(r),!r||r<1)throw new Error("수량을 확인하세요.");if(o=Te(Number(o)),!o||o<He)throw new Error("주문 가격을 확인하세요.");const h=Date.now(),p={uid:e,nickname:t,stockId:s,stockName:c.name,side:l,trigger:d,tif:u,label:i.label||"지정가",qty:r,target:o,createdAt:h,expiresAt:u==="day"?h+cv:null},g=wo(P(A,`rooms/${n}/orders`)).key;return await ln(P(A,`rooms/${n}/orders/${g}`),p),g}async function vv(n,e){await Je(P(A,`rooms/${n}/orders/${e}`))}async function yv(n,e){var i;const t=e.orders;if(!t)return;const s=Date.now();for(const[r,o]of Object.entries(t)){const a=(i=e.stocks)==null?void 0:i[o.stockId];if(!a){await Je(P(A,`rooms/${n}/orders/${r}`));continue}const c=a.price;if((o.trigger||(o.side==="buy"?"below":"above"))==="below"?c<=o.target:c>=o.target){try{o.side==="buy"?await vu(n,o.uid,o.nickname,o.stockId,o.qty,e):await Eo(n,o.uid,o.nickname,o.stockId,o.qty,e)}catch(u){console.warn("[order] 예약 체결 실패, 취소:",o,u==null?void 0:u.message)}await Je(P(A,`rooms/${n}/orders/${r}`));continue}o.tif==="ioc"?await Je(P(A,`rooms/${n}/orders/${r}`)):o.expiresAt&&s>o.expiresAt&&await Je(P(A,`rooms/${n}/orders/${r}`))}}function wv(n,e){const t=n.orders||{};return Object.entries(t).filter(([,s])=>s.uid===e).map(([s,i])=>({id:s,...i})).sort((s,i)=>(i.createdAt||0)-(s.createdAt||0))}async function vu(n,e,t,s,i,r){var d;const o=(d=r.stocks)==null?void 0:d[s];if(!o)throw new Error("종목을 선택하세요.");if(i=Math.floor(i),!i||i<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.ceil(a*i*(1+pu));if(!(await _e(P(A,`rooms/${n}/players/${e}`),u=>{if(!u)return u;if((u.cash||0)<c)return;u.cash=(u.cash||0)-c,u.holdings=u.holdings||{};const h=u.holdings[s]||0;u.avgCost=u.avgCost||{};const p=u.avgCost[s]||0;return u.avgCost[s]=Math.round((h*p+i*a)/(h+i)),u.holdings[s]=h+i,u})).committed)throw new Error("현금(수수료 포함)이 부족합니다.");await yu(n,s,i,+i,{type:"buy",nickname:t,stockName:o.name,qty:i,price:a,time:Date.now()})}async function Eo(n,e,t,s,i,r){var d;const o=(d=r.stocks)==null?void 0:d[s];if(!o)throw new Error("종목을 선택하세요.");if(i=Math.floor(i),!i||i<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.floor(a*i*(1-pu-av));if(!(await _e(P(A,`rooms/${n}/players/${e}`),u=>{var p;if(!u)return u;const h=((p=u.holdings)==null?void 0:p[s])||0;if(!(h<i))return u.cash=(u.cash||0)+c,u.holdings[s]=h-i,u.holdings[s]===0&&(delete u.holdings[s],u.avgCost&&delete u.avgCost[s]),u})).committed)throw new Error("보유 수량이 부족합니다.");await yu(n,s,i,-i,{type:"sell",nickname:t,stockName:o.name,qty:i,price:a,time:Date.now()})}async function Ev(n,e,t,s,i){var o,a,c;const r=((c=(a=(o=i.players)==null?void 0:o[e])==null?void 0:a.holdings)==null?void 0:c[s])||0;if(r<1)throw new Error("보유 수량이 없습니다.");return Eo(n,e,t,s,r,i)}async function yu(n,e,t,s,i){await Promise.all([_e(P(A,`rooms/${n}/stocks/${e}/volume`),r=>(r||0)+t),_e(P(A,`rooms/${n}/stocks/${e}/value`),r=>(r||0)+t*i.price),_e(P(A,`rooms/${n}/stocks/${e}/pressure`),r=>(r||0)+s),wo(P(A,`rooms/${n}/logs`),i)])}function Ii(n,e){var i;let t=(n==null?void 0:n.cash)||0;const s=(n==null?void 0:n.holdings)||{};for(const[r,o]of Object.entries(s)){const a=((i=e==null?void 0:e[r])==null?void 0:i.price)||0;t+=a*o}return t}function bo(n,e){return Object.entries(n||{}).map(([t,s])=>({uid:t,nickname:s.nickname,connected:s.connected!==!1,total:Ii(s,e)})).sort((t,s)=>s.total-t.total)}async function bv(n,e){const t=e.players||{},s=Object.keys(t).length;if(s<Ba)throw new Error(`최소 ${Ba}명이 필요합니다.`);if(s>vr)throw new Error(`최대 ${vr}명까지 가능합니다.`);const i=Date.now(),r={status:"playing",startedAt:i,endsAt:null,stocks:fv(),logs:null,latestNews:null,botFeed:null,orders:null,ipo:null,marketTick:i};for(const o of Object.keys(t))r[`players/${o}/cash`]=be,r[`players/${o}/holdings`]=null,r[`players/${o}/totalAsset`]=be;await We(P(A,`rooms/${n}`),r)}async function Iv(n,e){const t={status:"ended",endedAt:Date.now()},s=e.players||{};for(const[i,r]of Object.entries(s))t[`players/${i}/totalAsset`]=Ii(r,e.stocks);await We(P(A,`rooms/${n}`),t)}async function Cv(){const n=await Ot(P(A,"rooms"));if(!n.exists())return 0;const e=n.val();let t=0;for(const[s,i]of Object.entries(e))i.status==="ended"&&(await Je(P(A,`rooms/${s}`)),t++);return t}const kv=1,qs=[{key:"candles1m",win:6e4,cap:240},{key:"candles5m",win:3e5,cap:288},{key:"candles15m",win:9e5,cap:192},{key:"candles1h",win:36e5,cap:168}],wu=2*6e4,Sv=6e4,Tv=4500;function wr(n,e){return Math.floor(n/e)*e}function ms(n,e,t){return Math.max(e,Math.min(t,n))}function Va(){let n=0,e=0;for(;n===0;)n=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e)}function Ga(n,e){const t=n&&n[e]||null;return t?Object.values(t).filter(s=>s&&typeof s.t=="number").sort((s,i)=>s.t-i.t):[]}function Rv(n,e,t,s){const i=(t-e)/s,r=Math.max(1,i/4e3),o=n.volat||1,a=n.activ||1,c=n.basePrice||n.price||He;let l=n.price||c,d=n.trend||0,u=n.heat||0;const h=!n.type||n.type==="stock",p=.00115*o*(h?1:.7),g=5,y=[];for(let m=0;m<s;m++){const _=e+i*m,v=l,b=r/g;let C=v,w=v,I=v;for(let M=0;M<g;M++){d=ms(d*Math.pow(.99,b)+Va()*28e-5*o*Math.sqrt(b),-.0022,.0022),Math.random()<.006*b&&(u=ms(u+(.3+Math.random()*.7),0,1.8)),u*=Math.pow(.94,b);const ae=p*(1+u*.6);let U=d*b+Va()*ae*Math.sqrt(b);Math.random()<.004*b&&(U+=(Math.random()<.5?1:-1)*(.008+Math.random()*.028)*(h?1:.6)),I=I*(1+U),I=ms(I,bi(c),Ei(c)),I=Math.max(He,I),C=Math.max(C,I),w=Math.min(w,I)}const k=Te(I),T=v?Math.abs((k-v)/v):0,F=(400+Math.random()*1800)*a*(1+u*.8),z=Math.round(F*r*(1+T*8));y.push({t:_,o:Te(v),h:Te(C),l:Te(w),c:k,v:z}),l=k}return{candles:y,finalPrice:l,finalBase:c}}function Av(n){const e={};for(const t of qs)e[t.key]={};for(const t of n)for(const s of qs){const i=wr(t.t,s.win),r=e[s.key],o=r[i];o?(o.h=Math.max(o.h,t.h),o.l=Math.min(o.l,t.l),o.c=t.c,o.v+=t.v):r[i]={t:i,o:t.o,h:t.h,l:t.l,c:t.c,v:t.v}}return e}async function Nv(n,e){const t=Date.now();return(await _e(P(A,`rooms/${n}/market/catchupLock`),i=>{if(!(i&&i.expiresAt&&i.expiresAt>t))return{by:e||"anon",at:t,expiresAt:t+Sv}})).committed}async function Pv(n){try{await We(P(A,`rooms/${n}/market`),{catchupLock:null})}catch{}}function Ov(n){if(!n||n.status!=="playing")return!1;const e=n.market&&n.market.lastTickAt||n.marketTick||0;return e?Date.now()-e>=wu:!1}async function Mv(n,e,t,s={}){if(!e||!e.stocks)return{applied:!1,reason:"no-stocks"};if(e.status!=="playing")return{applied:!1,reason:"not-playing"};const i=Date.now(),r=e.market&&e.market.lastTickAt||e.marketTick||0,o=i-r;if(!s.force&&o<wu)return{applied:!1,reason:"fresh",elapsed:o};if(!await Nv(n,t)&&!s.force)return{applied:!1,reason:"locked"};try{let c=e.stocks||{};try{const y=await Ot(P(A,`rooms/${n}/stocks`));y.exists()&&(c=y.val())}catch{}const l=Object.keys(c);if(!l.length)return{applied:!1,reason:"no-stocks"};const d=ms(Math.round(Tv/l.length),30,480),u=Math.max(1,Math.round(o/6e4)),h=Math.min(d,u,480),p={};let g=0;for(const y of l){const m=c[y];if(!m||typeof m.price!="number")continue;const _=Rv(m,r,i,h),v=Av(_.candles),b=`stocks/${y}/`,C=m.history||{};for(const T of qs){const z={...C[T.key]||{}};for(const[U,ie]of Object.entries(v[T.key])){const fe=z[U];z[U]=fe?{t:ie.t,o:fe.o,h:Math.max(fe.h,ie.h),l:Math.min(fe.l,ie.l),c:ie.c,v:(fe.v||0)+ie.v}:ie}const M=Object.keys(z).map(Number).sort((U,ie)=>U-ie),ae=M.length-T.cap;if(ae>0)for(let U=0;U<ae;U++)p[b+`history/${T.key}/${M[U]}`]=null;for(const[U,ie]of Object.entries(v[T.key]))Number(U)<M[Math.max(0,ae)]||(p[b+`history/${T.key}/${U}`]=z[U],g++)}const w=_.finalBase,I=Math.max(He,Te(_.finalPrice)),k=_.candles.reduce((T,F)=>T+(F.v||0),0);p[b+"previousPrice"]=m.price,p[b+"price"]=I,p[b+"currentPrice"]=I,p[b+"changeRate"]=+((I-w)/w*100).toFixed(2),p[b+"volume"]=(m.volume||0)+k,p[b+"value"]=(m.value||0)+k*I,I>(m.high||m.price)&&(p[b+"high"]=I),I<(m.low||m.price)&&(p[b+"low"]=I),m.heat&&(p[b+"heat"]=0),m.pressure&&(p[b+"pressure"]=0)}return p["market/tickMs"]=4e3,p["market/lastTickAt"]=i,p["market/lastHistoryAt"]=i,p["market/lastCatchupAt"]=i,p["market/catchupVersion"]=kv,p["market/catchupBy"]=t||"anon",p["market/catchupLock"]=null,p.marketTick=i,await We(P(A,`rooms/${n}`),p),{applied:!0,elapsed:o,numSteps:h,candlesWritten:g,stocks:l.length}}catch(c){return await Pv(n),console.error("[catchup] 실패:",c),{applied:!1,reason:"error",error:c==null?void 0:c.message}}}function Eu(){return{cur:{},lastBucket:0,seeded:!1}}async function Lv(n,e,t){const s=e.stocks||{},i=Date.now(),r=wr(i,6e4);t.lastBucket||(t.lastBucket=r);for(const[d,u]of Object.entries(s)){if(!u||typeof u.price!="number")continue;let h=t.cur[d];(!h||h.t!==r)&&(h={t:r,o:u.price,h:u.price,l:u.price,c:u.price,v:0,_lastVol:u.volume||0},t.cur[d]=h),h.c=u.price,h.h=Math.max(h.h,u.price),h.l=Math.min(h.l,u.price);const p=Math.max(0,(u.volume||0)-(h._lastVol||0));h.v+=p,h._lastVol=u.volume||0}if(r===t.lastBucket)return;const o=t.lastBucket;let a=s;try{const d=await Ot(P(A,`rooms/${n}/stocks`));d.exists()&&(a=d.val())}catch{}const c={};let l=!1;for(const d of Object.keys(s)){const u=t.cur[d];if(!u)continue;const h={o:u.o,h:u.h,l:u.l,c:u.c,v:u.v},p=`stocks/${d}/`,g=a[d]&&a[d].history||{};for(const y of qs){const m=wr(o,y.win),_=g[y.key]&&g[y.key][m]||null,v=_?{t:m,o:_.o,h:Math.max(_.h,h.h),l:Math.min(_.l,h.l),c:h.c,v:(_.v||0)+h.v}:{t:m,o:h.o,h:h.h,l:h.l,c:h.c,v:h.v};c[p+`history/${y.key}/${m}`]=v;const b=g[y.key]?Object.keys(g[y.key]).map(Number).sort((C,w)=>C-w):[];b.length>y.cap&&b[0]!==m&&(c[p+`history/${y.key}/${b[0]}`]=null)}l=!0}if(t.lastBucket=r,!!l){c["market/lastTickAt"]=i,c["market/lastHistoryAt"]=i,c["market/tickMs"]=4e3;try{await We(P(A,`rooms/${n}`),c)}catch(d){console.warn("[history] 라이브 캔들 저장 실패:",d==null?void 0:d.message)}}}function Dv(n,e){if(n&&String(n).startsWith("ipo"))return'<span class="tag tag-new">NEW</span>';const t=wi(e.type);return t?`<span class="tag ${e.type==="inverse"?"tag-inv":e.type==="leverage"?"tag-lev":"tag-etf"}">${t}</span>`:e.role==="leader"?'<span class="tag tag-leader">대장주</span>':e.role==="sub"?'<span class="tag tag-sub">부대장</span>':""}function S(n){return document.getElementById(n)}function jt(n){return Math.round(n??0).toLocaleString("ko-KR")+"원"}function O(n){return Math.round(n??0).toLocaleString("ko-KR")}function kt(n){return n=n||0,n>=1e12?(n/1e12).toFixed(2)+"조":n>=1e8?(n/1e8).toFixed(1)+"억":n>=1e4?Math.round(n/1e4).toLocaleString("ko-KR")+"만":O(n)}function xv(n){return O(n)+"주"}const $v=["screen-login","screen-auth","screen-home","screen-lobby","screen-game","screen-result"];function mt(n){$v.forEach(e=>S(e).classList.toggle("hidden",e!==n))}function j(n,e,t=!0){const s=S(n);s&&(s.textContent=e||"",s.classList.toggle("error",t))}function bu(n){S("fbError").classList.remove("hidden"),n&&(S("fbErrorMsg").textContent=n)}const Fv=3,Uv=120,qa=60;let Pe={},Tn=[],Ve={},xt=0,Wn=null,Er={};function Iu(){Pe={},Tn=[],Ve={},xt=0,Wn=null,Er={},Qs="";for(const n in Ys)delete Ys[n]}function Bv(){if(Wn)try{localStorage.setItem(Wn,JSON.stringify({candles:Pe,lastVol:Ve,tick:xt}))}catch{}}function Wv(n,e){const t=n.stocks||{},s=n.marketTick||0,i=`mb_candles_${e||"x"}_${n.startedAt||0}`;if(i!==Wn){Wn=i,Pe={},Ve={},xt=0;try{const r=JSON.parse(localStorage.getItem(i)||"null");r&&r.candles&&(Pe=r.candles,Ve=r.lastVol||{},xt=r.tick||0)}catch{}}for(const[r,o]of Object.entries(t))Pe[r]||(Pe[r]=[{t:Date.now(),o:o.price,h:o.price,l:o.price,c:o.price,v:0,_n:0}]),Ve[r]==null&&(Ve[r]=o.volume||0);if(s!==xt){xt=s;for(const[o,a]of Object.entries(t)){const c=Pe[o]||(Pe[o]=[]);let l=c[c.length-1];(!l||l._n>=Fv)&&(l={t:Date.now(),o:a.price,h:a.price,l:a.price,c:a.price,v:0,_n:0},c.push(l)),l.c=a.price,l.h=Math.max(l.h,a.price),l.l=Math.min(l.l,a.price);const d=Math.max(0,(a.volume||0)-(Ve[o]||0));l.v+=d,Ve[o]=a.volume||0,l._n++,c.length>Uv&&c.shift()}const r=n.botFeed?Object.values(n.botFeed):[];for(const o of r)Tn.unshift({...o,bot:!0});Tn.length>qa&&(Tn.length=qa),Gv(t),by(t),Bv()}}let $t=new Set(JSON.parse(localStorage.getItem("mb_watch")||"[]")),gt=JSON.parse(localStorage.getItem("mb_alerts")||"{}");function Hv(n){$t.has(n)?$t.delete(n):$t.add(n),localStorage.setItem("mb_watch",JSON.stringify([...$t]))}function jv(n,e){e>0?gt[n]=e:delete gt[n],localStorage.setItem("mb_alerts",JSON.stringify(gt))}function Vv(n){return gt[n]||0}function Gv(n){for(const e of Object.values(n)){const t=gt[e.name],s=Er[e.name];if(t&&s!=null){const i=s<t&&e.price>=t,r=s>t&&e.price<=t;if(i||r){$(`🔔 ${e.name} 알림가 ${O(t)}원 ${i?"돌파":"하향"}!`,i?"up":"down"),delete gt[e.name],localStorage.setItem("mb_alerts",JSON.stringify(gt));try{window.Notification&&Notification.permission==="granted"&&new Notification("STONK Battle",{body:`${e.name} ${O(t)}원 도달`})}catch{}}}Er[e.name]=e.price}}function qv(n,e,t){S("lobbyRoomCode").textContent=n;const s=e.players||{},i=S("lobbyPlayers");i.innerHTML="",Object.entries(s).forEach(([a,c])=>{const l=document.createElement("li"),d=a===e.hostId,u=c.connected===!1;l.textContent=`${c.nickname}${d?" (방장)":""}${a===t?" - 나":""}${u?" [오프라인]":""}`,u&&l.classList.add("muted"),i.appendChild(l)});const r=t===e.hostId,o=Object.keys(s).length;S("btnStartGame").classList.toggle("hidden",!r),S("lobbyWait").classList.toggle("hidden",r),S("btnStartGame").disabled=o<1,j("lobbyMsg",o<2?"혼자서도 테스트 시작이 가능합니다. (정식 대전은 친구를 초대하세요)":`${o}명 입장 완료`,!1)}function Kv(n){const{roomCode:e,roomData:t,uid:s,selectedStockId:i}=n,r=S("gameRoomCode");r&&(r.textContent=e),Wv(t,e),zv(t,s),py(t,s),my(t,s),_y(t),Qv(t,s),Cu(n),gy(t);const o=ey();o==="home"?(Cy(t),iy(t)):o==="detail"?(ry(t,i),fy(t,i),Yv(t,s)):o==="feed"?Sy(t):o==="screener"?Ty(t):o==="account"&&Ry(t,s)}function zv(n,e){var o;const t=(o=n.players)==null?void 0:o[e],s=t&&t.nickname||"나",i=S("navNick");i&&(i.textContent=s);const r=S("navAvatar");r&&(r.textContent=(s||"U").slice(0,1).toUpperCase())}function Cu(n){const e=n.roomData,t=S("marketStatusChip"),s=S("msDot"),i=S("msLabel"),r=S("marketStatusPanel");if(!e||!t||!s||!i||!r)return;const o=e.market||{},a=o.lastTickAt||e.marketTick||0,c=o.lastCatchupAt||0,l=a?Math.max(0,Math.round((Date.now()-a)/6e4)):null,d=e.hostId===n.uid;let u=0,h=0,p=0,g=0;for(const b of Object.values(e.stocks||{})){const C=b.history;C&&(C.candles1m&&(u+=Object.keys(C.candles1m).length),C.candles5m&&(h+=Object.keys(C.candles5m).length),C.candles15m&&(p+=Object.keys(C.candles15m).length),C.candles1h&&(g+=Object.keys(C.candles1h).length))}const y=u+h+p+g>0,m=l!=null&&l<2;if(s.className="status-dot "+(m?"ok":l==null?"muted":"warn"),i.textContent=m?"시장 최신":l==null?"대기":`${l}분 전`,r.classList.contains("hidden"))return;const _=b=>b?`${_t(new Date(b).getHours())}:${_t(new Date(b).getMinutes())}`:"-",v=(b,C,w)=>`<div class="ms-row"><span>${b}</span><b class="${w||""}">${C}</b></div>`;r.innerHTML=v("방 코드",V(n.roomCode||"-"))+v("연결","연결됨","up")+v("권한",d?"보정 주체 (방장)":"읽기 전용",d?"":"muted")+v("마지막 tick",_(a))+v("마지막 보정",c?_(c):"없음")+v("시장",m?"최신 상태":l==null?"tick 기록 없음":`${l}분 전 데이터 · ${d?"재접속 시 자동 보정":"방장/관리자가 보정"}`,m?"up":"down")+v("캔들",y?`1m ${u} · 5m ${h} · 15m ${p} · 1h ${g}`:"아직 없음")}function Yv(n,e){const t=S("orderList");if(!t)return;const s=wv(n,e);if(!s.length){t.innerHTML="";return}t.innerHTML=s.map(i=>{const r=i.side==="buy"?"up":"down",o=i.tif==="day"?" · 당일":i.tif==="ioc"?" · IOC":"",a=i.label||(i.side==="buy"?"매수":"매도");return`<li class="order-item">
        <span class="order-badge ${r}">${V(a)}</span>
        <span class="order-name">${V(i.stockName)}</span>
        <span class="order-detail">${O(i.target)}원 · ${O(i.qty)}주${o}</span>
        <button class="order-cancel" data-cancel="${i.id}" title="취소">✕</button>
      </li>`}).join("")}let Ks=0;function Qv(n,e){var r;const t=S("ipoPanel");if(!t)return;const s=n.ipo;if(!s||s.status!=="subscribing"){t.classList.add("hidden"),Ks=0;return}Ks=s.endsAt,t.classList.remove("hidden"),S("ipoName").textContent=s.name,S("ipoPrice").textContent=O(s.offerPrice)+"원",S("ipoShares").textContent=O(s.totalShares)+"주",S("ipoRatio").textContent=_v(s).toFixed(1)+" : 1";const i=((r=s.applies)==null?void 0:r[e])||0;S("ipoMyApply").textContent=i?`내 청약 ${O(i)}주 (증거금 ${kt(i*s.offerPrice)}원)`:"아직 청약하지 않았어요",ku()}function ku(n){const e=S("ipoCountdown");if(!e||!Ks)return;const t=Math.max(0,Math.ceil((Ks-Date.now())/1e3));e.textContent=t+"초",e.classList.toggle("urgent",t<=5)}function un(n){return n>0?"up":n<0?"down":"flat"}function Io(n){return n>0?"▲":n<0?"▼":"−"}let zs="";function Hi(n){zs=(n||"").trim().toLowerCase()}let Su="all",Tu="value",br="rising",gs="asset";function Jv(n){Su=n||"all"}function Ka(n){Tu=n||"value"}function Xv(n){br=n||"rising"}function Zv(n){gs=n||"asset"}function ey(){var n;return((n=document.getElementById("screen-game"))==null?void 0:n.dataset.tab)||"home"}function ty(n,e){return zs?[e.name,n,e.ticker,e.sector,e.type,e.role,wi(e.type),gu(e.role),String(n).startsWith("ipo")?"신규상장 new":""].join(" ").toLowerCase().includes(zs):!0}function ny(n){let e=0;const t=String(n);for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return 5e6+e%60*8e6}function sy(n){let e=0;const t=String(n||"");for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return`hsl(${e%360} 60% 47%)`}function Ru(n,e){const t={value:(s,i)=>(i[1].value||0)-(s[1].value||0),volume:(s,i)=>(i[1].volume||0)-(s[1].volume||0),up:(s,i)=>(i[1].changeRate||0)-(s[1].changeRate||0),down:(s,i)=>(s[1].changeRate||0)-(i[1].changeRate||0)};return n.sort(t[e]||t.value)}function Au(n,e,t){const s=t.changeRate>0?"+":"",i=un(t.changeRate),r=$t.has(t.name),o=t.price*ny(e),a=t.sector||wi(t.type)||"종목";return`<li class="rank-item" data-id="${e}">
    <span class="rk-rank"><button class="star-btn ${r?"on":""}" data-star="${V(t.name)}" title="관심">${r?"★":"☆"}</button>${n}</span>
    <span class="rk-name"><span class="stk-ico" style="background:${sy(t.name)}">${V((t.name||"?").slice(0,1))}</span><span class="stk-meta"><span class="stk-nm">${V(t.name)} ${Dv(e,t)}</span><span class="stk-sub">${V(a)}</span></span></span>
    <span class="rk-price ${i}">${O(t.price)}</span>
    <span class="rk-rate ${i}">${Io(t.changeRate)} ${s}${(t.changeRate??0).toFixed(2)}%</span>
    <span class="rk-value">${kt(t.value)}</span>
    <span class="rk-cap">${kt(o)}</span>
    <span class="rk-sector"><span class="sec-pill">${V(t.sector||"-")}</span></span>
  </li>`}function iy(n){const e=S("stockList");if(!e)return;const t=e.scrollTop,s=n.stocks||{};let i=Object.entries(s).filter(([r,o])=>ty(r,o));if(Su==="watch"&&(i=i.filter(([,r])=>$t.has(r.name))),i=Ru(i,Tu),!i.length){e.innerHTML=`<li class="stock-empty">${zs?"검색 결과 없음":"종목이 없습니다"}</li>`;return}e.innerHTML=i.map(([r,o],a)=>Au(a+1,r,o)).join(""),e.scrollTop=t}function ry(n,e){const s=(n.stocks||{})[e];if(!s){S("chartStockName").textContent="-",S("selStockPrice").textContent="-",S("selStockChange").textContent="";return}const i=s.basePrice||s.price,r=s.price-i,o=un(s.changeRate),a=s.changeRate>0?"+":"";S("chartStockName").textContent=s.name;const c=S("detailTag");if(c){const h=wi(s.type),p=gu(s.role);let g,y="virtual-tag";h?(g=h,y+=s.type==="inverse"?" tag-inv":s.type==="leverage"?" tag-lev":" tag-etf"):String(e).startsWith("ipo")?(g="신규상장",y+=" tag-new"):s.sector?(g=p?`${s.sector}·${p}`:s.sector,s.role==="leader"&&(y+=" tag-leader")):g="가상",c.textContent=g,c.className=y}const l=S("selStockPrice"),d=Ys[e];if(l.textContent=O(s.price),l.className="big-price "+o,d!=null&&s.price!==d){const h=s.price>d?"flash-up":"flash-down";l.classList.remove("flash-up","flash-down"),l.offsetWidth,l.classList.add(h)}Ys[e]=s.price,S("selStockChange").className="change "+o,S("selStockChange").textContent=`${Io(s.changeRate)} ${a}${O(r)} (${a}${(s.changeRate??0).toFixed(2)}%)`,ji("ohlcOpen",s.open,i),ji("ohlcHigh",s.high,i),ji("ohlcLow",s.low,i),S("ohlcUpper").textContent=O(Ei(i)),S("ohlcLower").textContent=O(bi(i)),S("ohlcVol").textContent=xv(s.volume),S("ohlcValue").textContent=kt(s.value)+"원";const u=S("selStockNews");u.textContent=s.news?`📰 ${s.news}`:"",u.className="news-line"+(s.news?" "+o:" muted"),Nu(n,e,i,s)}const Ys={};function ji(n,e,t){const s=S(n);s.textContent=O(e),s.className="ohlc-v "+un((e||0)-t)}function Vi(n){return getComputedStyle(document.body).getPropertyValue(n).trim()||"#000"}const Ir={tick:{win:30*6e4,tiers:["candles1m","candles5m"],count:16},"1d":{win:864e5,tiers:["candles5m","candles1m"],count:288},"3d":{win:2592e5,tiers:["candles1h","candles15m","candles5m"],count:216},"1w":{win:6048e5,tiers:["candles1h","candles15m"],count:224},"1m":{win:2592e6,tiers:["candles1h","candles15m","candles5m","candles1m"],count:360},all:{win:1/0,tiers:["candles1h","candles15m","candles5m","candles1m"],count:500}},oy={tick:"1틱","1d":"1일","3d":"3일","1w":"1주","1m":"1달",all:"전체"};function za(n){if(n<=0)return"0분";const e=Math.round(n/6e4);if(e<60)return e+"분";const t=Math.floor(e/60),s=e%60;if(t<24)return s?`${t}시간 ${s}분`:`${t}시간`;const i=Math.floor(t/24),r=t%24;return r?`${i}일 ${r}시간`:`${i}일`}function ay(n,e){const t=oy[n]||n;if(!e||!e.length)return t+" · 데이터 없음";if(n==="tick")return"1틱 · 최근 흐름";const s=e[0].t,i=e[e.length-1].t;if(!(s>1e11)||!(i>1e11))return t+" · 최근 흐름";const r=i-s,o=(Ir[n]||{}).win;return o&&o!==1/0&&r<o*.9?`${t} · 아직 ${za(r)} 데이터만 있음`:`${t} · 누적 ${za(r)} 데이터`}function _t(n){return(n<10?"0":"")+n}function cy(n,e){if(!(n>1e11))return"";const t=new Date(n),s=_t(t.getHours())+":"+_t(t.getMinutes()),i=t.getMonth()+1+"/"+t.getDate();return e==="tick"||e==="1d"?s:e==="3d"||e==="1w"?i+" "+s:i}function ly(n){if(!(n>1e11))return"";const e=new Date(n);return e.getMonth()+1+"/"+_t(e.getDate())+" "+_t(e.getHours())+":"+_t(e.getMinutes())}let Rn="1d",_s=-1,oe=null,ft=null,Ya=!1,Qs="";function Qa(n,e){if(n.length&&e.price!=null&&n[n.length-1].c!==e.price){const t=n[n.length-1],s=t.t>1e11?t.t+1e3:t.t+1;n.push({t:s,o:t.c,h:Math.max(t.c,e.price),l:Math.min(t.c,e.price),c:e.price,v:0,_live:!0})}return n}function uy(n,e,t){const s=Ir[t]||Ir["1d"],i=n.history||null,r=Pe[e]||[],o=Date.now(),a=s.win===1/0?-1/0:o-s.win;if(t==="tick"){let l=r.slice(-12).map((d,u)=>({t:d.t||o-(12-u)*6e3,o:d.o,h:d.h,l:d.l,c:d.c,v:d.v||0}));if(l.length<2&&i){const d=Ga(i,"candles1m");d.length&&(l=d.slice(-s.count).map(u=>({...u})))}return Qa(l,n)}let c=[];if(i)for(const l of s.tiers){let d=Ga(i,l);if(d.length){if(d=d.filter(u=>u.t>=a),d.length>=2){c=d.map(u=>({...u}));break}!c.length&&d.length&&(c=d.map(u=>({...u})))}}return!c.length&&r.length&&(c=r.map((l,d)=>({t:l.t||o-(r.length-d)*6e3,o:l.o,h:l.h,l:l.l,c:l.c,v:l.v||0})).filter(l=>l.t>=a)),c=Qa(c,n),c.length>s.count&&(c=c.slice(c.length-s.count)),c}function Nu(n,e,t,s){ft={room:n,id:e,base:t};const i=uy(s,e,Rn),r=i.length?i[i.length-1]:null,o=`${e}|${Rn}|${i.length}|${r?r.c+":"+r.v:""}|${t}`;if(o===Qs){Ja();return}Qs=o,_s=-1,Pu(),Cr(S("priceChart"),i,t,-1);const a=S("chartRangeNote");a&&(a.textContent=ay(Rn,i)),Ja()}function Ja(){if(Ya)return;Ya=!0;const n=S("chartPeriods");n&&n.addEventListener("click",t=>{var i;const s=t.target.closest(".cp-btn");if(s&&(Rn=s.dataset.period,n.querySelectorAll(".cp-btn").forEach(r=>r.classList.toggle("is-active",r===s)),ft)){const r=(i=ft.room.stocks)==null?void 0:i[ft.id];r&&Nu(ft.room,ft.id,ft.base,r)}});const e=S("priceChart");if(e){const t=i=>{if(!oe)return;const r=e.getBoundingClientRect(),o=(i.touches?i.touches[0].clientX:i.clientX)-r.left,a=Math.max(0,Math.min(oe.candles.length-1,Math.floor(o/oe.cw)));a!==_s&&(_s=a,Cr(e,oe.candles,oe.base,a),dy(a))},s=()=>{_s=-1,oe&&Cr(e,oe.candles,oe.base,-1),Pu()};e.addEventListener("mousemove",t),e.addEventListener("mouseleave",s),e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchmove",t,{passive:!0}),e.addEventListener("touchend",s)}}function dy(n){const e=S("chartTip");if(!e||!oe)return;const t=oe.candles[n];if(!t)return;const s=t.o?(t.c-t.o)/t.o*100:0,i=s>0?"up":s<0?"down":"flat",r=ly(t.t)||`구간 ${n+1}`;e.innerHTML=`
    <div class="tip-when">${V(r)}</div>
    <div class="tip-row"><span>시작</span><b>${O(t.o)}</b></div>
    <div class="tip-row"><span>마지막</span><b>${O(t.c)}</b></div>
    <div class="tip-row"><span>최고</span><b class="up">${O(t.h)}</b></div>
    <div class="tip-row"><span>최저</span><b class="down">${O(t.l)}</b></div>
    <div class="tip-row"><span>거래량</span><b>${O(t.v)}</b></div>
    <div class="tip-row"><span>등락률</span><b class="${i}">${s>=0?"+":""}${s.toFixed(2)}%</b></div>`,e.classList.remove("hidden");const o=n*oe.cw+oe.cw/2,a=o>oe.plotW*.6?"left":"right";e.style.left=a==="right"?`${o+10}px`:"",e.style.right=a==="left"?`${oe.cssW-o+10}px`:"",e.style.top="8px"}function Pu(){const n=S("chartTip");n&&n.classList.add("hidden")}function Cr(n,e,t,s){if(!n)return;const i=window.devicePixelRatio||1,r=n.clientWidth||600,o=n.clientHeight||260;n.width=Math.round(r*i),n.height=Math.round(o*i);const a=n.getContext("2d");if(a.setTransform(i,0,0,i,0,0),a.clearRect(0,0,r,o),!e.length){oe=null;return}const c=56,l=r-c,d=o*.18,u=o*.06,h=o-d-u;let p=-1/0,g=1/0,y=0;for(const M of e)p=Math.max(p,M.h),g=Math.min(g,M.l),y=Math.max(y,M.v||0);p===g&&(p+=1,g-=1);const m=(p-g)*.14;p+=m,g-=m;const _=Vi("--up"),v=Vi("--down"),b="rgba(255,255,255,0.07)",C=Vi("--muted"),w=M=>h*(1-(M-g)/(p-g)),I=Math.max(e.length,14),k=l/I,T=Math.max(2.5,Math.min(14,k*.64));oe={cw:k,plotW:l,priceH:h,volH:d,cssW:r,cssH:o,candles:e,base:t,lo:g,hi:p},a.font="11px Pretendard, sans-serif",a.textBaseline="middle";const F=4;for(let M=0;M<=F;M++){const ae=h/F*M,U=p-(p-g)/F*M;a.strokeStyle=b,a.lineWidth=1,a.beginPath(),a.moveTo(0,Math.round(ae)+.5),a.lineTo(l,Math.round(ae)+.5),a.stroke(),a.fillStyle=C,a.textAlign="left",a.fillText(O(U),l+6,Math.min(h-6,Math.max(8,ae)))}if(s>=0&&s<e.length){const M=s*k+k/2;a.strokeStyle="rgba(120,140,180,0.55)",a.lineWidth=1,a.setLineDash([3,3]),a.beginPath(),a.moveTo(Math.round(M)+.5,0),a.lineTo(Math.round(M)+.5,o),a.stroke(),a.setLineDash([])}e.forEach((M,ae)=>{const U=ae*k+k/2,fe=M.c>=M.o?_:v;a.strokeStyle=fe,a.fillStyle=fe,a.lineWidth=1,a.beginPath(),a.moveTo(Math.round(U)+.5,w(M.h)),a.lineTo(Math.round(U)+.5,w(M.l)),a.stroke();const dn=w(M.o),hn=w(M.c),ki=Math.min(dn,hn),is=Math.max(1.5,Math.abs(hn-dn));if(a.fillRect(U-T/2,ki,T,is),y>0){const Ao=(d-4)*((M.v||0)/y);a.globalAlpha=.4,a.fillRect(U-T/2,o-Ao,T,Ao),a.globalAlpha=1}});const z=e[e.length-1].c;if(z<=p&&z>=g){const M=w(z),U=z>=(t||z)?_:v;a.strokeStyle=U,a.lineWidth=1,a.setLineDash([4,3]),a.beginPath(),a.moveTo(0,Math.round(M)+.5),a.lineTo(l,Math.round(M)+.5),a.stroke(),a.setLineDash([]);const ie=O(z);a.font="bold 11px Pretendard, sans-serif";const fe=a.measureText(ie).width,dn=Math.min(h-9,Math.max(9,M));a.fillStyle=U,a.beginPath();const hn=l+2,ki=Math.min(c-4,fe+10),is=17;hy(a,hn,dn-is/2,ki,is,4),a.fill(),a.fillStyle="#fff",a.textAlign="left",a.fillText(ie,hn+5,dn)}if(e.length>=2){a.font="10px Pretendard, sans-serif",a.fillStyle=C;const M=[0,Math.floor((e.length-1)/2),e.length-1],ae={};M.forEach(U=>{if(ae[U])return;ae[U]=1;const ie=cy(e[U].t,Rn);if(!ie)return;a.textAlign=U===0?"left":U===e.length-1?"right":"center";const fe=U===0?2:U===e.length-1?l-2:U*k+k/2;a.fillText(ie,fe,o-2)})}}function hy(n,e,t,s,i,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+s,t,e+s,t+i,r),n.arcTo(e+s,t+i,e,t+i,r),n.arcTo(e,t+i,e,t,r),n.arcTo(e,t,e+s,t,r),n.closePath()}function Co(){Qs="";const n=S("priceChart");if(n){const e=n.getContext("2d");e&&e.clearRect(0,0,n.width,n.height)}}function fy(n,e){var l;const t=S("orderbook");if(!t)return;const s=(l=n.stocks)==null?void 0:l[e];if(!s){t.innerHTML="";return}const i=_u(s.price),r=s.basePrice||s.price,o=5e4,a=()=>Math.floor((Math.random()*.9+.1)*12e3),c=[];for(let d=5;d>=1;d--){const u=Xa(s.price+d*i,r);c.push(Za(u,a(),"ask",o,r))}c.push(`<div class="ob-current ${un(s.changeRate)}">${O(s.price)}</div>`);for(let d=1;d<=5;d++){const u=Xa(s.price-d*i,r);c.push(Za(u,a(),"bid",o,r))}t.innerHTML=c.join("")}function Xa(n,e){return Math.max(bi(e),Math.min(Ei(e),Math.max(He,n)))}function Za(n,e,t,s,i){const r=un(n-i),o=Math.min(100,e/s*100);return t==="ask"?`<div class="ob-row ask">
      <span class="ob-qty"><span class="ob-bar" style="width:${o}%"></span><b>${O(e)}</b></span>
      <span class="ob-price ${r}">${O(n)}</span>
      <span></span>
    </div>`:`<div class="ob-row bid">
    <span></span>
    <span class="ob-price ${r}">${O(n)}</span>
    <span class="ob-qty"><b>${O(e)}</b><span class="ob-bar" style="width:${o}%"></span></span>
  </div>`}function py(n,e){var p;const t=(p=n.players)==null?void 0:p[e],s=n.stocks||{};if(!t)return;const i=Ii(t,s);S("myCash").textContent=jt(t.cash),S("myAsset").textContent=jt(i);const r=S("myAssetTop");r&&(r.textContent=kt(i)+"원");const o=t.avgCost||{},a=t.holdings||{},c=Object.entries(a).filter(([,g])=>g>0);let l=0,d=0;c.forEach(([g,y])=>{const m=s[g];if(!m)return;const _=(o[g]||m.price)*y;l+=m.price*y-_,d+=_});const u=S("myPnl");if(u)if(c.length){const g=d?l/d*100:0,y=l>0?"up":l<0?"down":"flat";u.className="asset-pnl "+y,u.textContent=`평가손익 ${l>=0?"+":""}${O(l)}원 (${g>=0?"+":""}${g.toFixed(2)}%)`}else u.className="asset-pnl muted",u.textContent="평가손익 —";const h=S("holdingsList");if(h.innerHTML="",c.length===0){const g=document.createElement("li");g.className="muted",g.textContent="보유 종목이 없습니다",h.appendChild(g);return}for(const[g,y]of c){const m=s[g];if(!m)continue;const _=o[g]||0,v=_?(m.price-_)*y:0,b=_?(m.price-_)/_*100:0,C=v>0?"up":v<0?"down":"flat",w=document.createElement("li");w.className="holding-item",w.innerHTML=`
      <div class="hold-row1"><span class="hold-name">${V(m.name)}</span><b>${O(y)}주</b></div>
      <div class="hold-row2 muted">평단 ${_?O(_):"-"} · 평가 ${kt(m.price*y)}원</div>
      <div class="hold-row2 ${C}">${v>=0?"+":""}${O(v)}원 (${b>=0?"+":""}${b.toFixed(2)}%)</div>`,h.appendChild(w)}}let ec=null;function $(n,e=""){const t=S("toast");t&&(t.textContent=n,t.className="toast show"+(e?" toast-"+e:""),clearTimeout(ec),ec=setTimeout(()=>{t.className="toast"+(e?" toast-"+e:"")},1800))}function my(n,e){const t=S("rankingList");t.innerHTML="",bo(n.players,n.stocks).forEach(i=>{const r=document.createElement("li"),o=((i.total-be)/be*100).toFixed(2),a=i.total>=be?"up":"down";r.innerHTML=`<span>${V(i.nickname)}${i.uid===e?" (나)":""}</span> <b>${kt(i.total)}원</b> <span class="${a}">${o>=0?"+":""}${o}%</span>`,i.connected||r.classList.add("muted"),t.appendChild(r)})}function gy(n){const e=S("logList");e.innerHTML="";const s=[...Object.values(n.logs||{}),...Tn].sort((i,r)=>r.time-i.time).slice(0,40);for(const i of s){const r=document.createElement("li"),o=i.type==="buy"?"매수":"매도",a=i.type==="buy"?"up":"down",c=new Date(i.time).toLocaleTimeString("ko-KR",{hour12:!1}),l=i.bot?`<b class="bot-name">${V(i.nickname)}</b>`:`<b>${V(i.nickname)}</b>`;r.innerHTML=`<span class="muted">${c}</span> ${l} <span class="${a}">${o}</span> ${V(i.stockName)} ${O(i.qty)}주 @ ${O(i.price)}`,e.appendChild(r)}}function _y(n){const e=S("newsBar"),t=n.latestNews;if(!t||Date.now()-t.time>12e3){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent=`📢 ${t.text}`}function vy(n){const e=[S("tickBar"),S("tickBarHome")],t=[S("tickCountdown"),S("tickCountdownHome")],s=n&&(n.marketTick||n.market&&n.market.lastTickAt)||0;if(!s){e.forEach(l=>{l&&(l.style.width="0%")}),t.forEach(l=>{l&&(l.textContent="")});return}const i=Date.now()-s,o=(Math.max(0,Math.min(1,i/yr))*100).toFixed(1)+"%";e.forEach(l=>{l&&(l.style.width=o)});const a=Math.max(0,Math.ceil((yr-i)/1e3)),c=a>0?a+"s":"곧";t.forEach(l=>{l&&(l.textContent=c)})}function yy(n){const e=Math.max(0,Math.floor(n/1e3)),t=String(Math.floor(e/60)).padStart(2,"0"),s=String(e%60).padStart(2,"0");S("gameTimer").textContent=`${t}:${s}`}function wy(n,e){const t=S("resultList");t.innerHTML="",bo(n.players,n.stocks).forEach((i,r)=>{const o=document.createElement("li"),c=["🥇","🥈","🥉"][r]||`${r+1}.`,l=((i.total-be)/be*100).toFixed(2),d=i.total>=be?"up":"down";o.innerHTML=`<span class="rank-mark">${c}</span> <span>${V(i.nickname)}${i.uid===e?" (나)":""}</span> <b>${jt(i.total)}</b> <span class="${d}">${l>=0?"+":""}${l}%</span>`,t.appendChild(o)})}function V(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let Js={};const Ey=60;function Ou(n){let e=0,t=0;const s={};for(const o of Object.values(n||{})){const a=(o.value||0)+1;e+=a,t+=a*(o.changeRate||0);const c=o.sector||"기타",l=s[c]||(s[c]={w:0,r:0});l.w+=a,l.r+=a*(o.changeRate||0)}const i=e?t/e:0,r=Object.entries(s).map(([o,a])=>({name:o,rate:a.w?a.r/a.w:0,w:a.w})).sort((o,a)=>a.w-o.w);return{comp:i,sectors:r}}function tc(n,e){const t=Js[n]||(Js[n]=[]);t.push(e),t.length>Ey&&t.shift()}function by(n){const{comp:e,sectors:t}=Ou(n);tc("__comp__",1e3*(1+e/100)),t.forEach(s=>tc("sec:"+s.name,1e3*(1+s.rate/100)))}function Iy(n,e){if(!n||n.length<2)return"";const t=140,s=28,i=Math.min(...n),r=Math.max(...n),o=r-i||1,a=n.map((l,d)=>`${(d/(n.length-1)*t).toFixed(1)},${(s-(l-i)/o*s).toFixed(1)}`).join(" "),c=e>=0?"var(--up)":"var(--down)";return`<svg viewBox="0 0 ${t} ${s}" preserveAspectRatio="none"><polyline points="${a}" fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function nc(n,e,t,s){const i=un(t),r=t>0?"+":"";return`<div class="index-card"><span class="ix-name">${V(n)}</span><span class="ix-val">${e.toFixed(2)}</span><span class="ix-rate ${i}">${Io(t)} ${r}${t.toFixed(2)}%</span><div class="ix-spark">${Iy(s,t)}</div></div>`}function Cy(n){const e=S("indexStrip");if(!e)return;const{comp:t,sectors:s}=Ou(n.stocks||{}),i=[nc("STONK 종합",1e3*(1+t/100),t,Js.__comp__)];s.slice(0,6).forEach(r=>i.push(nc(r.name,1e3*(1+r.rate/100),r.rate,Js["sec:"+r.name]))),e.innerHTML=i.join("")}function ky(n){const e=new Date(n.when).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"});return`<div class="feed-card"><div class="feed-card-head"><span class="feed-ava">${V((n.who||"S").slice(0,1))}</span><div><div class="feed-who">${V(n.who)}</div><div class="feed-when">${e}</div></div></div>${n.title?`<div class="feed-title">${V(n.title)}</div>`:""}<div class="feed-body">${V(n.body)}</div></div>`}function Sy(n,e){const t=S("feedView");if(!t)return;const s=[],i=n.latestNews;i&&(i.text||i.title)&&s.push({who:"STONK 뉴스",when:i.time||Date.now(),title:i.title||"📢 시장 속보",body:i.text||i.body||""}),Object.values(n.botFeed||{}).slice(-10).reverse().forEach(c=>s.push({who:c.nickname||"트레이더",when:c.time||Date.now(),title:"",body:`${c.type==="buy"?"매수":"매도"} · ${c.stockName||"종목"} ${O(c.qty||0)}주 @ ${O(c.price||0)}`}));const r=bo(n.players,n.stocks).slice(0,5),o=[...new Set(Object.values(n.stocks||{}).map(c=>c.sector).filter(Boolean))].slice(0,8),a=r.map((c,l)=>{const d=(c.total-be)/be*100;return`<li><span class="fr-no">${l+1}</span><span class="fr-name">${V(c.nickname)}</span><span class="fr-val ${d>=0?"up":"down"}">${d>=0?"+":""}${d.toFixed(1)}%</span></li>`}).join("");t.innerHTML=`
    <aside class="feed-side"><button class="is-active">전체</button><button>팔로잉</button><button>뉴스</button></aside>
    <div class="feed-main">
      ${s.length?s.map(ky).join(""):'<div class="feed-card"><div class="feed-body muted">아직 소식이 없습니다. 거래가 시작되면 시장 속보와 체결 소식이 올라옵니다.</div></div>'}
      <a class="feed-card" id="feedBoardLink" target="_blank" rel="noopener" style="text-decoration:none;color:var(--brand);font-weight:700">전체 소식 보기 → STONK Board ↗</a>
    </div>
    <aside class="feed-aside">
      <div class="feed-rank-card"><h4 class="rail-h">주간 프로필 랭킹</h4><ol class="feed-rank-list">${a||'<li class="muted">참가자 없음</li>'}</ol></div>
      <div class="feed-rank-card"><h4 class="rail-h">주제별 커뮤니티</h4><div class="feed-comm">${o.map(c=>`<span>＃ ${V(c)}</span>`).join("")||'<span class="muted">-</span>'}</div></div>
    </aside>`}const Gi=[{key:"rising",label:"연속 상승세",badge:"인기",fn:(n,e)=>(e.changeRate||0)>0,sort:"up"},{key:"value",label:"거래대금 상위",fn:()=>!0,sort:"value"},{key:"surge",label:"급등주",fn:(n,e)=>(e.changeRate||0)>=5,sort:"up"},{key:"plunge",label:"급락주",fn:(n,e)=>(e.changeRate||0)<=-5,sort:"down"},{key:"cheap",label:"저가주",fn:(n,e)=>(e.price||0)<2e3,sort:"value"},{key:"pricey",label:"고가주",fn:(n,e)=>(e.price||0)>=1e5,sort:"value"},{key:"lev",label:"레버리지·인버스",fn:(n,e)=>e.type==="leverage"||e.type==="inverse",sort:"value"},{key:"etf",label:"ETF·리츠",fn:(n,e)=>e.type==="etf"||e.type==="reit",sort:"value"},{key:"leader",label:"대장주",fn:(n,e)=>e.role==="leader",sort:"value"}];function Ty(n){const e=S("screenerPresets"),t=S("screenerHead"),s=S("screenerList");if(!e||!s)return;e.innerHTML='<div class="sa-title">주식 골라보기 목록</div>'+Gi.map(o=>`<button data-preset="${o.key}" class="${o.key===br?"is-active":""}">${V(o.label)}${o.badge?` <span class="sa-badge">${o.badge}</span>`:""}</button>`).join("");const i=Gi.find(o=>o.key===br)||Gi[0];t&&(t.innerHTML=`<h2>${V(i.label)}</h2><p>조건에 맞는 종목을 모았습니다 · 모두 가상 데이터</p>`);let r=Object.entries(n.stocks||{}).filter(([o,a])=>i.fn(o,a));r=Ru(r,i.sort),s.innerHTML=r.length?r.map(([o,a],c)=>Au(c+1,o,a)).join(""):'<li class="stock-empty">조건에 맞는 종목이 없습니다</li>'}function Ry(n,e){var v,b;const t=S("accountView");if(!t)return;const s=(v=n.players)==null?void 0:v[e];if(!s){t.innerHTML='<div class="acct-main"><div class="acct-section muted">계좌 정보를 불러오는 중…</div></div>';return}const i=n.stocks||{},r=Ii(s,i),o=s.avgCost||{},a=Object.entries(s.holdings||{}).filter(([,C])=>C>0);let c=0,l=0,d=0;a.forEach(([C,w])=>{const I=i[C];if(!I)return;const k=(o[C]||I.price)*w;c+=I.price*w,l+=I.price*w-k,d+=k});const u=d?l/d*100:0,h=l>0?"up":l<0?"down":"flat",p=((b=S("gameRoomCode"))==null?void 0:b.textContent)||"-",g=Object.values(n.logs||{}).filter(C=>C.uid===e).sort((C,w)=>w.time-C.time).slice(0,20),y=Object.values(n.orders||{}).filter(C=>C.uid===e),m=["asset","tx","orders"].map(C=>{const w={asset:"자산",tx:"거래내역",orders:"주문내역"}[C];return`<button data-acct="${C}" class="${C===gs?"is-active":""}">${w}</button>`}).join("");let _="";if(gs==="asset"){const C=a.length?a.map(([w,I])=>{const k=i[w];if(!k)return"";const T=o[w]||0,F=T?(k.price-T)*I:0,z=T?(k.price-T)/T*100:0,M=F>0?"up":F<0?"down":"flat";return`<div class="acct-row"><div><div class="ar-name">${V(k.name)}</div><div class="ar-sub">${O(I)}주 · 평단 ${T?O(T):"-"}</div></div><div class="ar-val ${M}">${O(k.price*I)}원<br><small>${F>=0?"+":""}${z.toFixed(2)}%</small></div></div>`}).join(""):'<div class="acct-row muted">보유 종목이 없습니다</div>';_=`
      <div class="acct-hero">
        <div class="ah-no">기본계좌 · ${V(p)}</div>
        <div class="ah-asset">${jt(r)}</div>
        <div class="ah-pnl ${h}">평가손익 ${l>=0?"+":""}${O(l)}원 (${u>=0?"+":""}${u.toFixed(2)}%)</div>
        <div class="acct-actions"><button class="btn small" disabled>채우기</button><button class="btn small" disabled>보내기</button><button class="btn small" disabled>환전</button></div>
      </div>
      <div class="acct-grid">
        <div class="acct-stat"><div class="as-k">주문가능 현금</div><div class="as-v">${jt(s.cash)}</div></div>
        <div class="acct-stat"><div class="as-k">총 투자금액(평가)</div><div class="as-v">${jt(c)}</div></div>
        <div class="acct-stat"><div class="as-k">평가손익</div><div class="as-v ${h}">${l>=0?"+":""}${O(l)}</div></div>
      </div>
      <div class="acct-section"><h3>보유 종목</h3>${C}</div>`}else gs==="tx"?_=`<div class="acct-section"><h3>거래내역</h3>${g.length?g.map(w=>{const I=w.type==="buy"?"up":"down",k=new Date(w.time).toLocaleString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});return`<div class="acct-row"><div><div class="ar-name">${V(w.stockName)}</div><div class="ar-sub">${k}</div></div><div class="ar-val ${I}">${w.type==="buy"?"매수":"매도"} ${O(w.qty)}주<br><small>@ ${O(w.price)}</small></div></div>`}).join(""):'<div class="acct-row muted">거래내역이 없습니다</div>'}</div>`:_=`<div class="acct-section"><h3>주문내역(미체결)</h3>${y.length?y.map(w=>{const I=w.side==="buy"?"up":"down";return`<div class="acct-row"><div><div class="ar-name">${V(w.stockName||w.stockId||"")}</div><div class="ar-sub">${w.kind||"지정가"} · ${w.tif||""}</div></div><div class="ar-val ${I}">${w.side==="buy"?"매수":"매도"} ${O(w.qty)}주<br><small>${w.price?"@ "+O(w.price):""}</small></div></div>`}).join(""):'<div class="acct-row muted">미체결 주문이 없습니다</div>'}</div>`;t.innerHTML=`<aside class="acct-side">${m}</aside><div class="acct-main">${_}</div>`}const Mu={home:"https://tom981105-web.github.io/STONK-Home/",battle:"https://tom981105-web.github.io/STONK-Battle/",board:"https://tom981105-web.github.io/STONK-Board/",wiki:"https://tom981105-web.github.io/STONK-Wiki/",arcade:"https://tom981105-web.github.io/STONK-Arcade/",gacha:"https://tom981105-web.github.io/STONK-Gacha/",admin:"https://tom981105-web.github.io/STONK-Admin/market-admin.html"},sc={home:"../STONK-Home/index.html",battle:"../Market-battle/index.html",board:"../Market-Board/index.html",wiki:"../Market-Wiki/index.html",arcade:"../STONK-Arcade/index.html",gacha:"../STONK-Gacha/index.html",admin:"../Market-Admin/market-admin.html"},ko="stonk:lastRoomCode",Ay=["mb-board-room","wiki-room"];function Lu(){return location.protocol==="file:"||/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)}function Ny(){return{urls:{...Mu},local:Lu()}}function Zt(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function So(){try{const n=new URLSearchParams(location.search);return Zt(n.get("room")||n.get("roomCode")||n.get("roomId")||"")}catch{return""}}function Du(n){const e=Zt(n);if(e)try{localStorage.setItem(ko,e)}catch{}}function xu(){try{const n=Zt(localStorage.getItem(ko));if(n)return n;for(const e of Ay){const t=Zt(localStorage.getItem(e));if(t)return t}}catch{}return""}function Py(){return So()||xu()}function Oy(n){const e=Mu[n];return Lu()&&/github\.io/.test(e||"")?sc[n]:e||sc[n]}function ut(n,e){const t=Oy(n),s=[],i=Zt(e&&e.room);i&&s.push("room="+encodeURIComponent(i));const r=e&&(e.company||e.companyId);return r&&s.push("company="+encodeURIComponent(r)),s.length?t+(t.indexOf("?")>=0?"&":"?")+s.join("&"):t}function My(n){return ut("home",{room:n})}function Ly(n){return ut("battle",{room:n})}function $u(n){return ut("board",{room:n})}function Fu(n,e){return ut("wiki",{room:n,company:e})}function Dy(n){return ut("arcade",{room:n})}function xy(n){return ut("gacha",{room:n})}function Uu(n){return ut("admin",{room:n})}const $y={VERSION:"1.4.1",getSiteConfig:Ny,normalizeRoomCode:Zt,getUrlRoomCode:So,getCurrentRoomCode:Py,setLastRoomCode:Du,getLastRoomCode:xu,buildSiteUrl:ut,buildHomeUrl:My,buildBattleUrl:Ly,buildBoardUrl:$u,buildWikiUrl:Fu,buildArcadeUrl:Dy,buildGachaUrl:xy,buildAdminUrl:Uu,LAST_ROOM_KEY:ko};typeof window<"u"&&(window.SiteConfig=$y);const Fy="../STONK-Home/index.html",Uy="stonk:lastRoomCode",By=["mb_roomCode","mb-board-room","wiki-room","lastRoomCode","roomCode"],qi=2600;function vs(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function Wy(){try{const n=new URLSearchParams(location.search),e=vs(n.get("room")||n.get("roomCode")||n.get("roomId")||"");if(e)return e}catch{}try{const n=vs(localStorage.getItem(Uy)||"");if(n)return n;for(const e of By){const t=vs(localStorage.getItem(e)||"");if(t)return t}}catch{}return""}function To(){return/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||location.protocol==="file:"}function Hy(n){const e=vs(n);return Fy+(e?`?room=${encodeURIComponent(e)}`:"")}function Bu({title:n="STONK Home에서 입장해 주세요",message:e="",roomCode:t="",auto:s=!0}={}){var c;const i=Hy(t),r=document.getElementById("stonk-home-gate");r&&r.remove();const o=document.createElement("div");o.id="stonk-home-gate",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),Object.assign(o.style,{position:"fixed",inset:"0",zIndex:"99999",display:"grid",placeItems:"center",padding:"24px",background:"radial-gradient(120% 90% at 50% -10%, rgba(139,108,255,0.22), transparent 60%), rgba(5,6,10,0.94)",backdropFilter:"blur(8px)",color:"#f4f7ff",fontFamily:"Pretendard, Inter, 'Noto Sans KR', system-ui, sans-serif"});const a=s&&!To();if(o.innerHTML=`
    <div style="width:min(460px,100%);text-align:center;padding:32px 26px;border:1px solid rgba(255,255,255,0.14);border-radius:18px;background:rgba(14,16,24,0.92);box-shadow:0 24px 70px rgba(0,0,0,0.5),0 0 60px rgba(139,108,255,0.16)">
      <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#8b6cff;margin-bottom:8px">STONK UNIVERSE</div>
      <h2 style="margin:0 0 10px;font-size:1.5rem">${n}</h2>
      <p style="margin:0 0 18px;color:#aab2c8;font-size:0.95rem;line-height:1.5">${e||"로그인 · 방 선택 · 닉네임 설정은 STONK Home에서 진행합니다."}</p>
      <a data-home-go href="${i}" style="display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 26px;border-radius:14px;font-weight:900;text-decoration:none;color:#0a0a12;background:linear-gradient(135deg,#a99bff,#8b6cff);box-shadow:0 10px 30px rgba(139,108,255,0.4)">STONK Home으로 이동</a>
      ${t?`<div style="margin-top:14px;font-size:0.82rem;color:#8a93a8">방 코드 <b style="color:#41e0ff;letter-spacing:2px">${t}</b> 유지</div>`:""}
      ${a?`<div style="margin-top:12px;font-size:0.8rem;color:#8a93a8"><span data-gate-count>${Math.ceil(qi/1e3)}</span>초 후 자동 이동…</div>`:'<div style="margin-top:12px;font-size:0.78rem;color:#5f6678">개발 모드: 자동 이동 없음</div>'}
    </div>
  `,document.body.appendChild(o),(c=o.querySelector("[data-home-go]"))==null||c.addEventListener("click",l=>{l.preventDefault(),location.href=i}),a){let l=Math.ceil(qi/1e3);const d=o.querySelector("[data-gate-count]"),u=setInterval(()=>{l-=1,d&&(d.textContent=String(Math.max(0,l))),l<=0&&clearInterval(u)},1e3);setTimeout(()=>{location.href=i},qi)}return o}function jy(){var n;(n=document.getElementById("stonk-home-gate"))==null||n.remove()}const Vy="https://tom981105-web.github.io/STONK-Gacha/backgrounds/";let ys,ke=null;function Gy(){return ke||(ke=document.createElement("div"),ke.id="equip-bg",Object.assign(ke.style,{position:"fixed",inset:"0",zIndex:"-1",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",pointerEvents:"none",opacity:"0",transition:"opacity 0.35s ease",transform:"translateZ(0)",backfaceVisibility:"hidden"}),document.body.appendChild(ke),ke)}function ic(){if(ke){ke.style.opacity="0";const n=ke;setTimeout(()=>{ys===null&&n&&(n.style.backgroundImage="")},400)}}function qy(n,e){let t=0;const s=()=>{if(t>=n.length){e(null);return}const i=n[t++],r=new Image;r.decoding="async",r.onload=()=>e(i),r.onerror=s,r.src=i};s()}function Ky(n){const e=n||null;if(e===ys)return;if(ys=e,!e){ic();return}const t=["webp","jpg","png"].map(s=>`${Vy}${e}.${s}`);qy(t,s=>{if(ys!==e)return;if(!s){ic();return}const i=Gy();i.style.backgroundImage=`linear-gradient(rgba(8,10,16,0.72), rgba(8,10,16,0.85)), url("${s}")`,i.style.opacity="1"})}const zy="yaV8N60yIiUggaWNpNF2VhkCwxb2",Yy="tomem@naver.com",f={uid:null,email:null,nickname:localStorage.getItem("mb_nickname")||localStorage.getItem("stonk:lastNickname")||"",roomCode:null,roomData:null,selectedStockId:null,tickTimer:null,isDriver:!1,tickLeaseRenewAt:0,driverWatch:null,liveState:Eu(),catchupDoneFor:null,clockTimer:null,roomRef:null,lastStatus:null,histRef:null,histStockId:null,selectedHistory:null,renderQueued:!1,joinReqRef:null,joinReqId:null,isDbAdmin:!1},Qy=15e3,Jy=5e3,Xy=4e3,Zy=["ended","closed","finished"];function e0(n){return Zy.includes(n)}function Ci(){return f.uid===zy||(f.email||"").toLowerCase()===Yy}!fu||!Xt||!A?bu("src/firebase.js 에 본인의 Firebase 설정(firebaseConfig)을 붙여넣은 뒤 새로고침하세요."):t0();function t0(){let n=!1;const e=setTimeout(()=>{n||bu("Firebase에 연결할 수 없습니다. 설정값과 네트워크, Database Rules를 확인하세요.")},5e3);ns(P(A,".info/connected"),t=>{t.val()===!0&&(n=!0,clearTimeout(e),document.getElementById("fbError").classList.add("hidden"))}),Rf(Xt,t=>{if(t)jy(),f.uid=t.uid,f.email=t.email||null,localStorage.setItem("mb_playerId",t.uid),n0(),i0();else{f.uid=null,f.email=null,f.isDbAdmin=!1;const s=document.getElementById("navAdmin");s&&(s.hidden=!0),To()?mt("screen-login"):Bu({message:"로그인은 STONK Home에서 진행합니다. Home에서 방을 선택해 입장해 주세요.",roomCode:Wy()})}})}async function n0(){const n=document.getElementById("navAdmin");if(!n)return;let e=Ci();if(!e&&f.uid&&A)try{e=(await Ot(P(A,"admins/"+f.uid))).val()===!0}catch{e=!1}f.isDbAdmin=e,n.hidden=!e}function s0(n){const e=(n==null?void 0:n.code)||"";return{"auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/missing-password":"비밀번호를 입력하세요.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/email-already-in-use":"이미 가입된 이메일입니다. 로그인을 눌러주세요.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/user-not-found":"가입되지 않은 이메일입니다. 회원가입을 눌러주세요.","auth/wrong-password":"비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase 콘솔에서 이메일/비밀번호 로그인을 활성화했는지 확인하세요."}[e]||"오류: "+((n==null?void 0:n.message)||e)}async function Ki(n){const e=document.getElementById("emailInput").value.trim(),t=document.getElementById("passwordInput").value;if(!e||!t){j("loginMsg","이메일과 비밀번호를 입력하세요.");return}j("loginMsg",n==="signup"?"가입 중...":"로그인 중...",!1);try{n==="signup"?await Cf(Xt,e,t):await kf(Xt,e,t),j("loginMsg","",!1)}catch(s){console.error("[auth]",s),j("loginMsg",s0(s))}}async function i0(){var t;if(!f.nickname){mt("screen-auth");return}const n=So();if(n){Xs(),await Wu(n);return}const e=localStorage.getItem("mb_roomCode");if(e){try{const i=(await Ot(P(A,`rooms/${e}`))).val();if(i&&((t=i.players)!=null&&t[f.uid])&&i.status!=="ended"){St(e);return}}catch(s){console.warn("[rejoin] 재접속 실패:",s)}localStorage.removeItem("mb_roomCode")}To()?Xs():Bu({message:"입장할 방이 없습니다. STONK Home에서 방을 선택해 주세요."})}function Xs(){document.getElementById("homeNickname").textContent=`닉네임: ${f.nickname}`;const n=Ci(),e=document.getElementById("btnCreateRoom"),t=document.getElementById("btnCleanup"),s=document.getElementById("adminNote");e&&e.classList.toggle("hidden",!n),t&&t.classList.toggle("hidden",!n),s&&s.classList.toggle("hidden",n),mt("screen-home")}function r0(){const n="ABCDEFGHJKMNPQRSTUVWXYZ23456789";let e="";for(let t=0;t<6;t++)e+=n[Math.floor(Math.random()*n.length)];return e}function o0(n){return{nickname:n,cash:0,holdings:null,totalAsset:0,joinedAt:hu(),connected:!0}}async function a0(){if(j("homeMsg",""),!Ci()){j("homeMsg","방 생성은 관리자만 가능합니다. 방 코드로 입장하세요.");return}try{const n=r0();await ln(P(A,`rooms/${n}`),{status:"waiting",hostId:f.uid,createdAt:hu(),players:{[f.uid]:o0(f.nickname)}}),St(n)}catch(n){console.error(n),j("homeMsg","방 생성 실패: "+n.message)}}async function Wu(n){var t;j("homeMsg","");const e=(n||"").trim().toUpperCase();if(e.length!==6){j("homeMsg","방 코드 6자리를 입력하세요.");return}try{const s=await Ot(P(A,`rooms/${e}`));if(!s.exists()){j("homeMsg","존재하지 않는 방입니다.");return}const i=s.val(),r=i.status||"waiting";if(!!((t=i.players)!=null&&t[f.uid])){$("기존 플레이어로 재입장합니다."),St(e);return}if(e0(r)){j("homeMsg","종료된 방은 참여 신청을 할 수 없습니다.");return}if(r==="waiting"){if(!(await _e(P(A,`rooms/${e}/players`),c=>{if(c=c||{},c[f.uid])return c;if(!(Object.keys(c).length>=vr))return c[f.uid]={nickname:f.nickname,cash:0,totalAsset:0,joinedAt:Date.now(),connected:!0},c})).committed){j("homeMsg","방이 가득 찼습니다. (최대 6명)");return}St(e);return}await c0(e,i)}catch(s){console.error(s),j("homeMsg","입장 실패: "+s.message)}}async function c0(n,e){const t=e.joinRequests||{},s=Object.entries(t).map(([o,a])=>({id:o,...a})).filter(o=>o.uid===f.uid).sort((o,a)=>(a.requestedAt||0)-(o.requestedAt||0))[0];if(s){if(s.status==="approved"){await Hu(n,s.id,s);return}if(s.status==="joined"){St(n);return}if(s.status==="pending"){j("homeMsg","이미 참여 신청이 대기 중입니다. 관리자의 승인을 기다려주세요.",!1),rc(n,s.id);return}s.status==="rejected"&&j("homeMsg","참여가 거절되었습니다. 다시 신청하려면 잠시 후 시도하세요.")}const i=wo(P(A,`rooms/${n}/joinRequests`)).key,r={id:i,roomCode:n,playerId:f.uid,uid:f.uid,name:f.nickname,requestedAt:Date.now(),status:"pending",type:"lateJoin",requestedTurn:e.marketTick||null,approvedAt:null,approvedBy:null,rejectedAt:null,rejectedBy:null,joinedAt:null,message:""};try{await ln(P(A,`rooms/${n}/joinRequests/${i}`),r),j("homeMsg","진행 중인 방입니다. 참여 신청을 보냈습니다. 관리자의 승인을 기다려주세요.",!1),$("참여 신청을 보냈습니다. 승인을 기다려주세요."),rc(n,i)}catch(o){console.error("[lateJoin] 신청 실패:",o),j("homeMsg","참여 신청 실패: "+o.message)}}function rc(n,e){f.joinReqRef&&(ss(f.joinReqRef),f.joinReqRef=null),f.joinReqId=e,f.joinReqRef=P(A,`rooms/${n}/joinRequests/${e}`),ns(f.joinReqRef,async t=>{const s=t.val();s&&(s.status==="approved"?(Hn(),await Hu(n,e,s)):s.status==="rejected"&&(Hn(),j("homeMsg","참여가 거절되었습니다."),$("참여가 거절되었습니다.","err")))},t=>console.warn("[lateJoin] 구독 오류:",t))}function Hn(){f.joinReqRef&&(ss(f.joinReqRef),f.joinReqRef=null),f.joinReqId=null}async function Hu(n,e,t){var s,i;try{const o=(await Ot(P(A,`rooms/${n}`))).val();if(!o){j("homeMsg","방을 찾을 수 없습니다.");return}if((s=o.players)!=null&&s[f.uid]){Hn(),$("참여가 승인되었습니다. 입장합니다."),St(n);return}const a=Number((i=o.settings)==null?void 0:i.initialCash)||be,c=Date.now(),l={};l[`players/${f.uid}`]={nickname:f.nickname,cash:a,holdings:null,totalAsset:a,joinedAt:c,connected:!0,lateJoin:!0,joinedTurn:t.requestedTurn||o.marketTick||null},l[`joinRequests/${e}/status`]="joined",l[`joinRequests/${e}/joinedAt`]=c,l["meta/updatedAt"]=c,await We(P(A,`rooms/${n}`),l),$("참여가 승인되었습니다. 입장합니다.","up"),St(n)}catch(r){console.error("[lateJoin] 입장 실패:",r),j("homeMsg","승인 후 입장 실패: "+r.message)}}function St(n){Hn(),f.roomCode=n,localStorage.setItem("mb_roomCode",n),Du(n),E0(n);const e=P(A,`rooms/${n}/players/${f.uid}/connected`);ln(e,!0).catch(()=>{}),G_(e).set(!1).catch(()=>{}),f.roomRef&&ss(f.roomRef),f.roomRef=P(A,`rooms/${n}`),ns(f.roomRef,t=>p0(l0(t)),t=>{console.error("[room] 구독 오류:",t)})}function l0(n){if(!n||!n.exists())return null;const e={};return n.forEach(t=>{if(t.key==="stocks"){const s={};t.forEach(i=>{const r={};i.forEach(o=>{o.key!=="history"&&(r[o.key]=o.val())}),s[i.key]=r}),e.stocks=s}else e[t.key]=t.val()}),e}function u0(n){const e=f.selectedHistory;e&&e.id&&n&&n.stocks&&n.stocks[e.id]&&(n.stocks[e.id].history=e.data||null)}function Zs(n){n!==f.histStockId&&(f.histRef&&(ss(f.histRef),f.histRef=null),f.histStockId=n||null,f.selectedHistory=n?{id:n,data:null}:null,!(!n||!f.roomCode)&&(f.histRef=P(A,`rooms/${f.roomCode}/stocks/${n}/history`),ns(f.histRef,e=>{f.histStockId===n&&(f.selectedHistory={id:n,data:e.val()||null},f.roomData&&f.roomData.stocks&&f.roomData.stocks[n]&&(f.roomData.stocks[n].history=f.selectedHistory.data),me())},e=>console.error("[history] 구독 오류:",e))))}function me(){f.renderQueued||(f.renderQueued=!0,requestAnimationFrame(()=>{f.renderQueued=!1,f.roomData&&f.roomData.status==="playing"&&Kv(f)}))}function ju(n){const e=n==="dark"?"dark":"light";document.documentElement.dataset.theme=e;try{localStorage.setItem("stonk:theme",e)}catch{}const t=document.getElementById("themeToggle");t&&(t.textContent=e==="dark"?"☀️":"🌙")}function d0(){let n="light";try{n=localStorage.getItem("stonk:theme")||"light"}catch{}ju(n)}function h0(){ju(document.documentElement.dataset.theme==="dark"?"light":"dark")}function wn(n){const e=document.getElementById("screen-game");e&&(e.dataset.tab=n,document.querySelectorAll(".tnav-tab").forEach(t=>t.classList.toggle("is-active",t.dataset.tab===n)),document.querySelectorAll(".tab-view").forEach(t=>t.classList.toggle("hidden",t.dataset.view!==n)),n==="detail"&&Co(),f.roomData&&me())}function f0(n){n&&(f.selectedStockId=n,Zs(n),I0(n),wn("detail"))}function p0(n){if(!n){ei("방이 삭제되었습니다.");return}if(f.roomData=n,u0(n),Ky(n.players&&f.uid&&n.players[f.uid]?n.players[f.uid].equippedBackground:null),n.status==="waiting")mt("screen-lobby"),qv(f.roomCode,n,f.uid);else if(n.status==="playing"){if(f.lastStatus!=="playing"){mt("screen-game"),Iu(),y0();const e=Object.keys(n.stocks||{});!f.selectedStockId&&e.length&&(f.selectedStockId=e[0])}f.selectedStockId!==f.histStockId&&Zs(f.selectedStockId),me(),document.getElementById("btnEndGame").classList.toggle("hidden",n.hostId!==f.uid),m0(n),Gu(n),v0()}else n.status==="ended"&&(Tt(),qu(),Ro(),Zs(null),Co(),mt("screen-result"),wy(n,f.uid));f.lastStatus=n.status}async function m0(n){if(!(!n||n.status!=="playing")&&f.uid&&f.catchupDoneFor!==f.roomCode){if(!Ov(n)){f.catchupDoneFor=f.roomCode;return}f.catchupDoneFor=f.roomCode;try{const e=await Mv(f.roomCode,n,f.uid);e.applied&&(Iu(),$(`시장 경과 보정 완료 (${Math.round(e.elapsed/6e4)}분, 캔들 ${e.candlesWritten}개)`,"up"))}catch(e){console.warn("[catchup] 보정 실패:",e)}}}async function Vu(){if(!f.roomCode||!f.uid)return!1;const n=Date.now();try{return(await _e(P(A,`rooms/${f.roomCode}/market/tickLease`),t=>{if(!(t&&t.by!==f.uid&&(t.expiresAt||0)>n))return{by:f.uid,at:n,expiresAt:n+Qy}})).committed}catch{return!1}}async function Gu(n){var a,c;if(n=n||f.roomData,!n||n.status!=="playing"){Tt();return}if(!f.uid)return;const e=Date.now(),t=n.market&&n.market.tickLease,s=t&&t.by!==f.uid&&(t.expiresAt||0)>e;if(f.isDriver){s&&Tt();return}const i=n.hostId===f.uid,r=n.hostId&&((c=(a=n.players)==null?void 0:a[n.hostId])==null?void 0:c.connected)!==!1;if(s||!i&&r)return;await Vu()&&g0()}function g0(){f.tickTimer||(f.isDriver=!0,f.tickLeaseRenewAt=Date.now(),f.tickTimer=setInterval(async()=>{const n=f.roomData;if(!n||n.status!=="playing"){Tt();return}try{if(Date.now()-f.tickLeaseRenewAt>=Jy){if(!await Vu()){Tt();return}f.tickLeaseRenewAt=Date.now()}await pv(f.roomCode,n),await mv(f.roomCode,n),await yv(f.roomCode,n),await Lv(f.roomCode,n,f.liveState)}catch(e){console.error("[tick] 시장 틱 오류:",e)}},yr))}function Tt(){f.tickTimer&&(clearInterval(f.tickTimer),f.tickTimer=null),f.isDriver=!1}async function _0(){if(!f.roomCode||!f.uid)return;const n=f.roomCode;try{await _e(P(A,`rooms/${n}/market/tickLease`),e=>e&&e.by===f.uid?null:e)}catch{}}function v0(){f.driverWatch||(f.driverWatch=setInterval(()=>{Gu(f.roomData)},Xy))}function qu(){f.driverWatch&&(clearInterval(f.driverWatch),f.driverWatch=null)}function y0(){Ro(),f.clockTimer=setInterval(()=>{const n=f.roomData;!n||n.status!=="playing"||(yy(Date.now()-(n.startedAt||Date.now())),ku(),vy(n))},250)}function Ro(){f.clockTimer&&(clearInterval(f.clockTimer),f.clockTimer=null)}async function w0(){const{roomCode:n,roomData:e}=f;try{n&&(e==null?void 0:e.status)==="waiting"&&(e.hostId===f.uid?await Je(P(A,`rooms/${n}`)):await Je(P(A,`rooms/${n}/players/${f.uid}`)))}catch(t){console.warn(t)}ei()}function ei(n){_0(),Tt(),qu(),Ro(),Hn(),Co(),f.roomRef&&(ss(f.roomRef),f.roomRef=null),Zs(null),f.roomCode=null,f.roomData=null,f.selectedStockId=null,f.lastStatus=null,f.catchupDoneFor=null,f.liveState=Eu(),localStorage.removeItem("mb_roomCode"),Xs(),n&&j("homeMsg",n,!1)}function E0(n){const e="",t=(s,i)=>{const r=document.getElementById(s);r&&(r.href=i)};t("navBoard",$u(n)),t("navWiki",Fu(n,e)),t("navAdmin",Uu(n))}async function oc(){if(f.roomCode)try{await navigator.clipboard.writeText(f.roomCode),alert("방 코드가 복사되었습니다: "+f.roomCode)}catch{prompt("아래 방 코드를 복사하세요:",f.roomCode)}}async function b0(){if(!f.roomCode||!f.roomData){$("복사할 시장 데이터가 없습니다","err");return}const n={roomCode:f.roomCode,status:f.roomData.status,startedAt:f.roomData.startedAt||null,marketTick:f.roomData.marketTick||Date.now(),latestNews:f.roomData.latestNews||null,botFeed:f.roomData.botFeed||[],stocks:f.roomData.stocks||{},players:f.roomData.players||{},logs:f.roomData.logs||{}},e=JSON.stringify(n,null,2);try{await navigator.clipboard.writeText(e),$("STONK Board에 가져올 시장 데이터를 복사했습니다")}catch{prompt("STONK Board 관리자 화면에 붙여넣을 시장 데이터입니다:",e)}}function jn(){return Math.max(1,Math.floor(Number(document.getElementById("qtyInput").value)||1))}async function zi(n){var a,c;const{roomCode:e,roomData:t,uid:s,nickname:i,selectedStockId:r}=f;if(!t||t.status!=="playing")return;if(!r){$("종목을 먼저 선택하세요","err");return}const o=((c=(a=t.stocks)==null?void 0:a[r])==null?void 0:c.name)||"";try{n==="buy"?(await vu(e,s,i,r,jn(),t),$(`${o} 매수 체결!`,"up")):n==="sell"?(await Eo(e,s,i,r,jn(),t),$(`${o} 매도 체결!`,"down")):n==="sellAll"&&(await Ev(e,s,i,r,t),$(`${o} 전량 매도 체결!`,"down")),j("tradeMsg","",!1)}catch(l){$(l.message,"err")}}function ti(n){return Math.floor(Number(document.getElementById(n).value)||0)}function I0(n){var s,i,r;const e=(r=(i=(s=f.roomData)==null?void 0:s.stocks)==null?void 0:i[n])==null?void 0:r.price;if(!e)return;const t=(o,a)=>{const c=document.getElementById(o);c&&(c.value=a)};t("limitPrice",e),t("stopLoss",Math.round(e*.95)),t("takeProfit",Math.round(e*1.1))}async function ac(n){var l,d;const{roomCode:e,roomData:t,uid:s,nickname:i,selectedStockId:r}=f;if(!t||t.status!=="playing")return;if(!r)return $("종목을 먼저 선택하세요","err");const o=ti("limitPrice");if(!o)return $("지정가를 입력하세요","err");const a=document.getElementById("limitTif").value,c=((d=(l=t.stocks)==null?void 0:l[r])==null?void 0:d.name)||"";try{await Gs(e,s,i,r,{side:n,trigger:n==="buy"?"below":"above",tif:a,label:"지정가"},jn(),o,t),$(`${c} 지정가 ${n==="buy"?"매수":"매도"} 등록!`,n==="buy"?"up":"down")}catch(u){$(u.message,"err")}}async function C0(){var l,d,u,h,p;const{roomCode:n,roomData:e,uid:t,nickname:s,selectedStockId:i}=f;if(!e||e.status!=="playing")return;if(!i)return $("종목을 먼저 선택하세요","err");const r=((u=(d=(l=e.players)==null?void 0:l[t])==null?void 0:d.holdings)==null?void 0:u[i])||0;if(r<1)return $("보유한 종목에만 설정할 수 있어요","err");const o=ti("stopLoss"),a=ti("takeProfit");if(!o&&!a)return $("손절가 또는 익절가를 입력하세요","err");const c=((p=(h=e.stocks)==null?void 0:h[i])==null?void 0:p.name)||"";try{o&&await Gs(n,t,s,i,{side:"sell",trigger:"below",tif:"gtc",label:"손절"},r,o,e),a&&await Gs(n,t,s,i,{side:"sell",trigger:"above",tif:"gtc",label:"익절"},r,a,e),$(`${c} 손절·익절 설정 완료 (보유 ${r}주)`,"down")}catch(g){$(g.message,"err")}}async function k0(){var d,u,h,p;const{roomCode:n,roomData:e,uid:t,nickname:s,selectedStockId:i}=f;if(!e||e.status!=="playing")return;if(!i)return $("종목을 먼저 선택하세요","err");const r=jn(),o=Math.max(2,Math.min(10,ti("splitCount")||3)),a=((u=(d=e.stocks)==null?void 0:d[i])==null?void 0:u.price)||0;if(!a)return;const c=Math.floor(r/o);if(c<1)return $(`분할하려면 수량이 최소 ${o}주 이상이어야 해요`,"err");const l=((p=(h=e.stocks)==null?void 0:h[i])==null?void 0:p.name)||"";try{for(let g=0;g<o;g++){const y=Math.round(a*(1-g*.015));await Gs(n,t,s,i,{side:"buy",trigger:"below",tif:"gtc",label:`분할${g+1}`},c,y,e)}$(`${l} ${o}회 분할매수 등록! (회당 ${c}주)`,"up")}catch(g){$(g.message,"err")}}async function S0(n){try{await vv(f.roomCode,n),$("예약 주문 취소됨")}catch(e){$(e.message,"err")}}async function T0(){const{roomCode:n,roomData:e,uid:t}=f,s=e==null?void 0:e.ipo;if(!s||s.status!=="subscribing"){$("청약 가능한 공모주가 없습니다","err");return}const i=Math.max(1,Math.floor(Number(document.getElementById("ipoQty").value)||0));try{await gv(n,t,i,e),$(`${s.name} ${i.toLocaleString("ko-KR")}주 청약 완료!`,"up")}catch(r){$(r.message,"err")}}function R0(){var r,o,a,c,l,d,u,h,p,g,y;document.getElementById("btnLogin").addEventListener("click",()=>Ki("login")),document.getElementById("btnSignup").addEventListener("click",()=>Ki("signup")),document.getElementById("passwordInput").addEventListener("keydown",m=>{m.key==="Enter"&&Ki("login")}),document.getElementById("btnNickname").addEventListener("click",()=>{const m=document.getElementById("nicknameInput").value.trim();m&&(f.nickname=m,localStorage.setItem("mb_nickname",m),Xs())}),document.getElementById("nicknameInput").addEventListener("keydown",m=>{m.key==="Enter"&&document.getElementById("btnNickname").click()}),document.getElementById("btnCreateRoom").addEventListener("click",a0),document.getElementById("btnJoinRoom").addEventListener("click",()=>{Wu(document.getElementById("roomCodeInput").value)}),document.getElementById("roomCodeInput").addEventListener("keydown",m=>{m.key==="Enter"&&document.getElementById("btnJoinRoom").click()}),document.getElementById("btnChangeNick").addEventListener("click",()=>{mt("screen-auth")}),document.getElementById("btnLogout").addEventListener("click",async()=>{localStorage.removeItem("mb_roomCode");try{await Af(Xt)}catch(m){console.error("[auth] 로그아웃 실패:",m)}}),document.getElementById("btnCleanup").addEventListener("click",async()=>{if(!Ci()){j("homeMsg","권한이 없습니다.");return}j("homeMsg","정리 중...",!1);try{const m=await Cv();j("homeMsg",`오래된 방 ${m}개를 정리했습니다.`,!1)}catch(m){j("homeMsg","정리 실패: "+m.message)}}),document.getElementById("btnCopyCode").addEventListener("click",oc),document.getElementById("btnCopyCode2").addEventListener("click",oc),document.getElementById("btnCopyMarketBoard").addEventListener("click",b0),document.getElementById("btnLeaveRoom").addEventListener("click",w0),document.getElementById("btnLeaveGame").addEventListener("click",()=>{confirm("게임에서 나가시겠습니까? 홈으로 돌아갑니다.")&&ei()}),document.getElementById("btnEndGame").addEventListener("click",async()=>{if(confirm("게임을 종료하고 최종 순위를 발표할까요?"))try{Tt(),await Iv(f.roomCode,f.roomData)}catch(m){$("종료 실패: "+m.message,"err")}}),document.getElementById("btnStartGame").addEventListener("click",async()=>{try{await bv(f.roomCode,f.roomData)}catch(m){j("lobbyMsg",m.message)}});const n=m=>{const _=m.target.closest("[data-star]");if(_){m.stopPropagation(),Hv(_.dataset.star),me();return}const v=m.target.closest(".rank-item");v&&f0(v.dataset.id)};(r=document.getElementById("stockList"))==null||r.addEventListener("click",n),(o=document.getElementById("screenerList"))==null||o.addEventListener("click",n),d0(),(a=document.getElementById("themeToggle"))==null||a.addEventListener("click",h0),(c=document.querySelector(".tnav-brand"))==null||c.addEventListener("click",()=>wn("home")),(l=document.getElementById("tnavTabs"))==null||l.addEventListener("click",m=>{const _=m.target.closest(".tnav-tab");_&&wn(_.dataset.tab)}),(d=document.getElementById("btnDetailBack"))==null||d.addEventListener("click",()=>wn("home"));const e=document.getElementById("globalSearch");e&&e.addEventListener("input",()=>{Hi(e.value);const m=document.getElementById("screen-game");m&&m.dataset.tab!=="home"&&wn("home"),me()}),document.addEventListener("keydown",m=>{var v;if(m.key!=="/")return;const _=document.activeElement;_&&/^(input|textarea|select)$/i.test(_.tagName)||(v=document.getElementById("screen-game"))!=null&&v.classList.contains("hidden")||(m.preventDefault(),e==null||e.focus())}),(u=document.getElementById("homeSeg"))==null||u.addEventListener("click",m=>{const _=m.target.closest(".seg-btn");_&&(document.querySelectorAll("#homeSeg .seg-btn").forEach(v=>v.classList.toggle("is-active",v===_)),Ka(_.dataset.home==="sectors"?"up":"value"),me())}),(h=document.getElementById("homeFilters"))==null||h.addEventListener("click",m=>{const _=m.target.closest(".fchip");_&&(_.dataset.filter&&(document.querySelectorAll("#homeFilters [data-filter]").forEach(v=>v.classList.toggle("is-active",v===_)),Jv(_.dataset.filter)),_.dataset.sort&&(document.querySelectorAll("#homeFilters [data-sort]").forEach(v=>v.classList.toggle("is-active",v===_)),Ka(_.dataset.sort)),me())}),(p=document.getElementById("screenerPresets"))==null||p.addEventListener("click",m=>{const _=m.target.closest("[data-preset]");_&&(Xv(_.dataset.preset),me())}),(g=document.getElementById("accountView"))==null||g.addEventListener("click",m=>{const _=m.target.closest("[data-acct]");_&&(Zv(_.dataset.acct),me())}),(y=document.getElementById("feedView"))==null||y.addEventListener("click",m=>{if(m.target.closest("#feedBoardLink")){const _=document.getElementById("navBoard");_&&_.href&&window.open(_.href,"_blank","noopener")}}),document.querySelectorAll(".qty-btn[data-qty]").forEach(m=>{m.addEventListener("click",()=>{const _=document.getElementById("qtyInput");_.value=Math.max(1,jn()+Number(m.dataset.qty))})}),document.getElementById("btnMaxQty").addEventListener("click",()=>{var w,I,k,T;const{roomData:m,uid:_,selectedStockId:v}=f,b=(I=(w=m==null?void 0:m.stocks)==null?void 0:w[v])==null?void 0:I.price,C=((T=(k=m==null?void 0:m.players)==null?void 0:k[_])==null?void 0:T.cash)||0;b&&(document.getElementById("qtyInput").value=Math.max(1,Math.floor(C/(b*1.0002))))}),document.getElementById("btnBuy").addEventListener("click",()=>zi("buy")),document.getElementById("btnSell").addEventListener("click",()=>zi("sell")),document.getElementById("btnSellAll").addEventListener("click",()=>zi("sellAll")),document.getElementById("orderTabs").addEventListener("click",m=>{const _=m.target.closest(".order-tab");if(!_)return;const v=_.dataset.tab;document.querySelectorAll(".order-tab").forEach(b=>b.classList.toggle("is-active",b===_)),document.querySelectorAll(".order-pane").forEach(b=>b.classList.toggle("hidden",b.dataset.pane!==v))}),document.getElementById("btnLimitBuy").addEventListener("click",()=>ac("buy")),document.getElementById("btnLimitSell").addEventListener("click",()=>ac("sell")),document.getElementById("btnSetStop").addEventListener("click",C0),document.getElementById("btnSplitBuy").addEventListener("click",k0),document.getElementById("orderList").addEventListener("click",m=>{const _=m.target.closest("[data-cancel]");_&&S0(_.dataset.cancel)}),document.getElementById("btnAlert").addEventListener("click",()=>{var I;const{roomData:m,selectedStockId:_}=f,v=(I=m==null?void 0:m.stocks)==null?void 0:I[_];if(!v)return $("종목을 먼저 선택하세요","err");try{window.Notification&&Notification.permission==="default"&&Notification.requestPermission()}catch{}const b=Vv(v.name),C=prompt(`${v.name} 가격 알림 설정
현재가 ${v.price.toLocaleString("ko-KR")}원
알림받을 가격을 입력하세요 (0 또는 빈칸 = 해제):`,b||v.price);if(C===null)return;const w=Math.floor(Number(C)||0);jv(v.name,w),$(w?`${v.name} ${w.toLocaleString("ko-KR")}원 알림 설정됨`:`${v.name} 알림 해제됨`),me()}),document.getElementById("btnApplyIpo").addEventListener("click",T0);const t=document.getElementById("stockSearch"),s=document.getElementById("stockSearchClear");t&&t.addEventListener("input",()=>{Hi(t.value),s&&(s.hidden=!t.value),me()}),s&&s.addEventListener("click",()=>{t.value="",Hi(""),s.hidden=!0,t.focus(),me()});const i=document.getElementById("marketStatusChip");i&&i.addEventListener("click",()=>{const m=document.getElementById("marketStatusPanel");if(!m)return;const _=m.classList.toggle("hidden");i.setAttribute("aria-expanded",_?"false":"true"),!_&&f.roomData&&Cu(f)}),document.getElementById("btnBackHome").addEventListener("click",()=>ei())}R0();
