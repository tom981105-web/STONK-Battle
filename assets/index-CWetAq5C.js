(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var Ao={};/**
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
 */const ac={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const w=function(n,e){if(!n)throw en(e)},en=function(n){return new Error("Firebase Database ("+ac.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const cc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ju=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ir={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(h=64)),s.push(t[d],t[u],t[h],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ju(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||u==null)throw new Xu;const h=r<<2|a>>4;if(s.push(h),l!==64){const p=a<<4&240|l>>2;if(s.push(p),u!==64){const m=l<<6&192|u;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Xu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lc=function(n){const e=cc(n);return Ir.encodeByteArray(e,!0)},gs=function(n){return lc(n).replace(/\./g,"")},_s=function(n){try{return Ir.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zu(n){return uc(void 0,n)}function uc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ed(t)||(n[t]=uc(n[t],e[t]));return n}function ed(n){return n!=="__proto__"}/**
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
 */function td(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nd=()=>td().__FIREBASE_DEFAULTS__,sd=()=>{if(typeof process>"u"||typeof Ao>"u")return;const n=Ao.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},id=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_s(n[1]);return e&&JSON.parse(e)},kr=()=>{try{return nd()||sd()||id()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dc=n=>{var e,t;return(t=(e=kr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},rd=n=>{const e=dc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},hc=()=>{var n;return(n=kr())===null||n===void 0?void 0:n.config},fc=n=>{var e;return(e=kr())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function od(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gs(JSON.stringify(t)),gs(JSON.stringify(o)),""].join(".")}/**
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
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function ad(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ld(){const n=ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ud(){return ac.NODE_ADMIN===!0}function dd(){try{return typeof indexedDB=="object"}catch{return!1}}function hd(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const fd="FirebaseError";class at extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=fd,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hn.prototype.create)}}class Hn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?pd(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new at(i,a,s)}}function pd(n,e){return n.replace(md,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const md=/\{\$([^}]+)}/g;/**
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
 */const mc=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Rn(_s(r[0])||""),t=Rn(_s(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},gd=function(n){const e=mc(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},_d=function(n){const e=mc(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ee(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function yt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function vs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ys(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function bs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Po(r)&&Po(o)){if(!bs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Po(n){return n!==null&&typeof n=="object"}/**
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
 */class vd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),d=1518500249):(l=r^o^a,d=1859775393):u<60?(l=r&o|a&(r|o),d=2400959708):(l=r^o^a,d=3395469782);const h=(i<<5|i>>>27)+l+c+d+s[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function yd(n,e){const t=new bd(n,e);return t.subscribe.bind(t)}class bd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");wd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Ei),i.error===void 0&&(i.error=Ei),i.complete===void 0&&(i.complete=Ei);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ei(){}function jt(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Ed=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,w(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xs=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function oe(n){return n&&n._delegate?n._delegate:n}class bt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ut="[DEFAULT]";/**
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
 */class Id{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ve;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cd(e))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ut){return this.instances.has(e)}getOptions(e=ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:kd(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ut){return this.component?this.component.multipleInstances?e:ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kd(n){return n===ut?void 0:n}function Cd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Sd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Id(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const Td={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Rd=G.INFO,Nd={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Ad=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Nd[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sr{constructor(e){this.name=e,this._logLevel=Rd,this._logHandler=Ad,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Td[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Pd=(n,e)=>e.some(t=>n instanceof t);let Mo,Oo;function Md(){return Mo||(Mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Od(){return Oo||(Oo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gc=new WeakMap,Ki=new WeakMap,_c=new WeakMap,Ii=new WeakMap,Tr=new WeakMap;function Dd(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Qe(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&gc.set(t,n)}).catch(()=>{}),Tr.set(e,n),e}function xd(n){if(Ki.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ki.set(n,e)}let Yi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ki.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_c.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Qe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ld(n){Yi=n(Yi)}function $d(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ki(this),e,...t);return _c.set(s,e.sort?e.sort():[e]),Qe(s)}:Od().includes(n)?function(...e){return n.apply(ki(this),e),Qe(gc.get(this))}:function(...e){return Qe(n.apply(ki(this),e))}}function Fd(n){return typeof n=="function"?$d(n):(n instanceof IDBTransaction&&xd(n),Pd(n,Md())?new Proxy(n,Yi):n)}function Qe(n){if(n instanceof IDBRequest)return Dd(n);if(Ii.has(n))return Ii.get(n);const e=Fd(n);return e!==n&&(Ii.set(n,e),Tr.set(e,n)),e}const ki=n=>Tr.get(n);function Ud(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Qe(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Qe(o.result),c.oldVersion,c.newVersion,Qe(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Bd=["get","getKey","getAll","getAllKeys","count"],Hd=["put","add","delete","clear"],Ci=new Map;function Do(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ci.get(e))return Ci.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Hd.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Bd.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Ci.set(e,r),r}Ld(n=>({...n,get:(e,t,s)=>Do(e,t)||n.get(e,t,s),has:(e,t)=>!!Do(e,t)||n.has(e,t)}));/**
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
 */class Wd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vd(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Vd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qi="@firebase/app",xo="0.10.13";/**
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
 */const xe=new Sr("@firebase/app"),jd="@firebase/app-compat",Gd="@firebase/analytics-compat",qd="@firebase/analytics",zd="@firebase/app-check-compat",Kd="@firebase/app-check",Yd="@firebase/auth",Qd="@firebase/auth-compat",Jd="@firebase/database",Xd="@firebase/data-connect",Zd="@firebase/database-compat",eh="@firebase/functions",th="@firebase/functions-compat",nh="@firebase/installations",sh="@firebase/installations-compat",ih="@firebase/messaging",rh="@firebase/messaging-compat",oh="@firebase/performance",ah="@firebase/performance-compat",ch="@firebase/remote-config",lh="@firebase/remote-config-compat",uh="@firebase/storage",dh="@firebase/storage-compat",hh="@firebase/firestore",fh="@firebase/vertexai-preview",ph="@firebase/firestore-compat",mh="firebase",gh="10.14.1";/**
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
 */const Ji="[DEFAULT]",_h={[Qi]:"fire-core",[jd]:"fire-core-compat",[qd]:"fire-analytics",[Gd]:"fire-analytics-compat",[Kd]:"fire-app-check",[zd]:"fire-app-check-compat",[Yd]:"fire-auth",[Qd]:"fire-auth-compat",[Jd]:"fire-rtdb",[Xd]:"fire-data-connect",[Zd]:"fire-rtdb-compat",[eh]:"fire-fn",[th]:"fire-fn-compat",[nh]:"fire-iid",[sh]:"fire-iid-compat",[ih]:"fire-fcm",[rh]:"fire-fcm-compat",[oh]:"fire-perf",[ah]:"fire-perf-compat",[ch]:"fire-rc",[lh]:"fire-rc-compat",[uh]:"fire-gcs",[dh]:"fire-gcs-compat",[hh]:"fire-fst",[ph]:"fire-fst-compat",[fh]:"fire-vertex","fire-js":"fire-js",[mh]:"fire-js-all"};/**
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
 */const ws=new Map,vh=new Map,Xi=new Map;function Lo(n,e){try{n.container.addComponent(e)}catch(t){xe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gt(n){const e=n.name;if(Xi.has(e))return xe.debug(`There were multiple attempts to register component ${e}.`),!1;Xi.set(e,n);for(const t of ws.values())Lo(t,n);for(const t of vh.values())Lo(t,n);return!0}function Rr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ze(n){return n.settings!==void 0}/**
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
 */const yh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Je=new Hn("app","Firebase",yh);/**
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
 */class bh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}}/**
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
 */const nn=gh;function vc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ji,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Je.create("bad-app-name",{appName:String(i)});if(t||(t=hc()),!t)throw Je.create("no-options");const r=ws.get(i);if(r){if(bs(t,r.options)&&bs(s,r.config))return r;throw Je.create("duplicate-app",{appName:i})}const o=new Sd(i);for(const c of Xi.values())o.addComponent(c);const a=new bh(t,s,o);return ws.set(i,a),a}function yc(n=Ji){const e=ws.get(n);if(!e&&n===Ji&&hc())return vc();if(!e)throw Je.create("no-app",{appName:n});return e}function Xe(n,e,t){var s;let i=(s=_h[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xe.warn(a.join(" "));return}Gt(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const wh="firebase-heartbeat-database",Eh=1,Nn="firebase-heartbeat-store";let Si=null;function bc(){return Si||(Si=Ud(wh,Eh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Je.create("idb-open",{originalErrorMessage:n.message})})),Si}async function Ih(n){try{const t=(await bc()).transaction(Nn),s=await t.objectStore(Nn).get(wc(n));return await t.done,s}catch(e){if(e instanceof at)xe.warn(e.message);else{const t=Je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xe.warn(t.message)}}}async function $o(n,e){try{const s=(await bc()).transaction(Nn,"readwrite");await s.objectStore(Nn).put(e,wc(n)),await s.done}catch(t){if(t instanceof at)xe.warn(t.message);else{const s=Je.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xe.warn(s.message)}}}function wc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const kh=1024,Ch=30*24*60*60*1e3;class Sh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Rh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ch}),this._storage.overwrite(this._heartbeatsCache))}catch(s){xe.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fo(),{heartbeatsToSend:s,unsentEntries:i}=Th(this._heartbeatsCache.heartbeats),r=gs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return xe.warn(t),""}}}function Fo(){return new Date().toISOString().substring(0,10)}function Th(n,e=kh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Uo(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Uo(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Rh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dd()?hd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ih(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $o(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $o(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uo(n){return gs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Nh(n){Gt(new bt("platform-logger",e=>new Wd(e),"PRIVATE")),Gt(new bt("heartbeat",e=>new Sh(e),"PRIVATE")),Xe(Qi,xo,n),Xe(Qi,xo,"esm2017"),Xe("fire-js","")}Nh("");var Ah="firebase",Ph="10.14.1";/**
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
 */Xe(Ah,Ph,"app");function Nr(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Ec(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mh=Ec,Ic=new Hn("auth","Firebase",Ec());/**
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
 */const Es=new Sr("@firebase/auth");function Oh(n,...e){Es.logLevel<=G.WARN&&Es.warn(`Auth (${nn}): ${n}`,...e)}function os(n,...e){Es.logLevel<=G.ERROR&&Es.error(`Auth (${nn}): ${n}`,...e)}/**
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
 */function Le(n,...e){throw Ar(n,...e)}function Ce(n,...e){return Ar(n,...e)}function kc(n,e,t){const s=Object.assign(Object.assign({},Mh()),{[e]:t});return new Hn("auth","Firebase",s).create(e,{appName:n.name})}function gt(n){return kc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ar(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Ic.create(n,...e)}function x(n,e,...t){if(!n)throw Ar(e,...t)}function Ne(n){const e="INTERNAL ASSERTION FAILED: "+n;throw os(e),new Error(e)}function $e(n,e){n||Ne(e)}/**
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
 */function Zi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Dh(){return Bo()==="http:"||Bo()==="https:"}function Bo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function xh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dh()||cd()||"connection"in navigator)?navigator.onLine:!0}function Lh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Wn{constructor(e,t){this.shortDelay=e,this.longDelay=t,$e(t>e,"Short delay should be less than long delay!"),this.isMobile=Cr()||pc()}get(){return xh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pr(n,e){$e(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Cc{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $h={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Fh=new Wn(3e4,6e4);function Mr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function sn(n,e,t,s,i={}){return Sc(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=tn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},r);return ad()||(l.referrerPolicy="no-referrer"),Cc.fetch()(Tc(n,n.config.apiHost,t,a),l)})}async function Sc(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},$h),e);try{const i=new Bh(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw es(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw es(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw es(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw kc(n,d,l);Le(n,d)}}catch(i){if(i instanceof at)throw i;Le(n,"network-request-failed",{message:String(i)})}}async function Uh(n,e,t,s,i={}){const r=await sn(n,e,t,s,i);return"mfaPendingCredential"in r&&Le(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Tc(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Pr(n.config,i):`${n.config.apiScheme}://${i}`}class Bh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ce(this.auth,"network-request-failed")),Fh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Ce(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function Hh(n,e){return sn(n,"POST","/v1/accounts:delete",e)}async function Rc(n,e){return sn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function bn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wh(n,e=!1){const t=oe(n),s=await t.getIdToken(e),i=Or(s);x(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:bn(Ti(i.auth_time)),issuedAtTime:bn(Ti(i.iat)),expirationTime:bn(Ti(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ti(n){return Number(n)*1e3}function Or(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return os("JWT malformed, contained fewer than 3 sections"),null;try{const i=_s(t);return i?JSON.parse(i):(os("Failed to decode base64 JWT payload"),null)}catch(i){return os("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ho(n){const e=Or(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function An(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof at&&Vh(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Vh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class jh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class er{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bn(this.lastLoginAt),this.creationTime=bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Is(n){var e;const t=n.auth,s=await n.getIdToken(),i=await An(n,Rc(t,{idToken:s}));x(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Nc(r.providerUserInfo):[],a=qh(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new er(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function Gh(n){const e=oe(n);await Is(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qh(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Nc(n){return n.map(e=>{var{providerId:t}=e,s=Nr(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function zh(n,e){const t=await Sc(n,{},async()=>{const s=tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Tc(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Kh(n,e){return sn(n,"POST","/v2/accounts:revokeToken",Mr(n,e))}/**
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
 */class $t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ho(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){x(e.length!==0,"internal-error");const t=Ho(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await zh(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new $t;return s&&(x(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(x(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $t,this.toJSON())}_performRefresh(){return Ne("not implemented")}}/**
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
 */function He(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ae{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=Nr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new er(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await An(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Wh(this,e)}reload(){return Gh(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Is(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(gt(this.auth));const e=await this.getIdToken();return await An(this,Hh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,l,d;const u=(s=t.displayName)!==null&&s!==void 0?s:void 0,h=(i=t.email)!==null&&i!==void 0?i:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,I=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=t.createdAt)!==null&&l!==void 0?l:void 0,_=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:y,emailVerified:T,isAnonymous:b,providerData:k,stsTokenManager:M}=t;x(y&&M,e,"internal-error");const N=$t.fromJSON(this.name,M);x(typeof y=="string",e,"internal-error"),He(u,e.name),He(h,e.name),x(typeof T=="boolean",e,"internal-error"),x(typeof b=="boolean",e,"internal-error"),He(p,e.name),He(m,e.name),He(v,e.name),He(I,e.name),He(E,e.name),He(_,e.name);const g=new Ae({uid:y,auth:e,email:h,emailVerified:T,displayName:u,isAnonymous:b,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:N,createdAt:E,lastLoginAt:_});return k&&Array.isArray(k)&&(g.providerData=k.map(C=>Object.assign({},C))),I&&(g._redirectEventId=I),g}static async _fromIdTokenResponse(e,t,s=!1){const i=new $t;i.updateFromServerResponse(t);const r=new Ae({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Is(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];x(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Nc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new $t;a.updateFromIdToken(s);const c=new Ae({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new er(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const Wo=new Map;function Pe(n){$e(n instanceof Function,"Expected a class definition");let e=Wo.get(n);return e?($e(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wo.set(n,e),e)}/**
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
 */class Ac{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ac.type="NONE";const Vo=Ac;/**
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
 */function as(n,e,t){return`firebase:${n}:${e}:${t}`}class Ft{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=as(this.userKey,i.apiKey,r),this.fullPersistenceKey=as("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ft(Pe(Vo),e,s);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Pe(Vo);const o=as(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){const u=Ae._fromJSON(e,d);l!==r&&(a=u),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ft(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ft(r,e,s))}}/**
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
 */function jo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lc(e))return"Blackberry";if($c(e))return"Webos";if(Mc(e))return"Safari";if((e.includes("chrome/")||Oc(e))&&!e.includes("edge/"))return"Chrome";if(xc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Pc(n=ue()){return/firefox\//i.test(n)}function Mc(n=ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oc(n=ue()){return/crios\//i.test(n)}function Dc(n=ue()){return/iemobile/i.test(n)}function xc(n=ue()){return/android/i.test(n)}function Lc(n=ue()){return/blackberry/i.test(n)}function $c(n=ue()){return/webos/i.test(n)}function Dr(n=ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Yh(n=ue()){var e;return Dr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qh(){return ld()&&document.documentMode===10}function Fc(n=ue()){return Dr(n)||xc(n)||$c(n)||Lc(n)||/windows phone/i.test(n)||Dc(n)}/**
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
 */function Uc(n,e=[]){let t;switch(n){case"Browser":t=jo(ue());break;case"Worker":t=`${jo(ue())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${nn}/${s}`}/**
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
 */class Jh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Xh(n,e={}){return sn(n,"GET","/v2/passwordPolicy",Mr(n,e))}/**
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
 */const Zh=6;class ef{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Zh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class tf{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Go(this),this.idTokenSubscription=new Go(this),this.beforeStateQueue=new Jh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ic,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pe(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ft.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Rc(this,{idToken:e}),s=await Ae._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Is(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ze(this.app))return Promise.reject(gt(this));const t=e?oe(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ze(this.app)?Promise.reject(gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xh(this),t=new ef(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Kh(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pe(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await Ft.create(this,[Pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Oh(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function xr(n){return oe(n)}class Go{constructor(e){this.auth=e,this.observer=null,this.addObserver=yd(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nf(n){Lr=n}function sf(n){return Lr.loadJS(n)}function rf(){return Lr.gapiScript}function of(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function af(n,e){const t=Rr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(bs(r,e??{}))return i;Le(i,"already-initialized")}return t.initialize({options:e})}function cf(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Pe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function lf(n,e,t){const s=xr(n);x(s._canInitEmulator,s,"emulator-config-failed"),x(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Bc(e),{host:o,port:a}=uf(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),df()}function Bc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function uf(n){const e=Bc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:qo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:qo(o)}}}function qo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function df(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Hc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ne("not implemented")}_getIdTokenResponse(e){return Ne("not implemented")}_linkToIdToken(e,t){return Ne("not implemented")}_getReauthenticationResolver(e){return Ne("not implemented")}}/**
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
 */async function Ut(n,e){return Uh(n,"POST","/v1/accounts:signInWithIdp",Mr(n,e))}/**
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
 */const hf="http://localhost";class wt extends Hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Le("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=Nr(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new wt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ut(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ut(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ut(e,t)}buildRequest(){const e={requestUri:hf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tn(t)}return e}}/**
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
 */class Wc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vn extends Wc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ve extends Vn{constructor(){super("facebook.com")}static credential(e){return wt._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ve.PROVIDER_ID="facebook.com";/**
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
 */class je extends Vn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return je.credential(t,s)}catch{return null}}}je.GOOGLE_SIGN_IN_METHOD="google.com";je.PROVIDER_ID="google.com";/**
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
 */class Ge extends Vn{constructor(){super("github.com")}static credential(e){return wt._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ge.credential(e.oauthAccessToken)}catch{return null}}}Ge.GITHUB_SIGN_IN_METHOD="github.com";Ge.PROVIDER_ID="github.com";/**
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
 */class qe extends Vn{constructor(){super("twitter.com")}static credential(e,t){return wt._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return qe.credential(t,s)}catch{return null}}}qe.TWITTER_SIGN_IN_METHOD="twitter.com";qe.PROVIDER_ID="twitter.com";/**
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
 */class qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Ae._fromIdTokenResponse(e,s,i),o=zo(s);return new qt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=zo(s);return new qt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function zo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ks extends at{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new ks(e,t,s,i)}}function Vc(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(n,r,e,s):r})}async function ff(n,e,t=!1){const s=await An(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qt._forOperation(n,"link",s)}/**
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
 */async function pf(n,e,t=!1){const{auth:s}=n;if(ze(s.app))return Promise.reject(gt(s));const i="reauthenticate";try{const r=await An(n,Vc(s,i,e,n),t);x(r.idToken,s,"internal-error");const o=Or(r.idToken);x(o,s,"internal-error");const{sub:a}=o;return x(n.uid===a,s,"user-mismatch"),qt._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Le(s,"user-mismatch"),r}}/**
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
 */async function mf(n,e,t=!1){if(ze(n.app))return Promise.reject(gt(n));const s="signIn",i=await Vc(n,s,e),r=await qt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function gf(n,e,t,s){return oe(n).onIdTokenChanged(e,t,s)}function _f(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function vf(n,e,t,s){return oe(n).onAuthStateChanged(e,t,s)}const Cs="__sak";/**
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
 */class jc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cs,"1"),this.storage.removeItem(Cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yf=1e3,bf=10;class Gc extends jc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Qh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bf):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},yf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gc.type="LOCAL";const wf=Gc;/**
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
 */class qc extends jc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qc.type="SESSION";const zc=qc;/**
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
 */function Ef(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Zs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Zs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await Ef(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zs.receivers=[];/**
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
 */function $r(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class If{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=$r("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Se(){return window}function kf(n){Se().location.href=n}/**
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
 */function Kc(){return typeof Se().WorkerGlobalScope<"u"&&typeof Se().importScripts=="function"}async function Cf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Tf(){return Kc()?self:null}/**
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
 */const Yc="firebaseLocalStorageDb",Rf=1,Ss="firebaseLocalStorage",Qc="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ei(n,e){return n.transaction([Ss],e?"readwrite":"readonly").objectStore(Ss)}function Nf(){const n=indexedDB.deleteDatabase(Yc);return new jn(n).toPromise()}function tr(){const n=indexedDB.open(Yc,Rf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Ss,{keyPath:Qc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Ss)?e(s):(s.close(),await Nf(),e(await tr()))})})}async function Ko(n,e,t){const s=ei(n,!0).put({[Qc]:e,value:t});return new jn(s).toPromise()}async function Af(n,e){const t=ei(n,!1).get(e),s=await new jn(t).toPromise();return s===void 0?null:s.value}function Yo(n,e){const t=ei(n,!0).delete(e);return new jn(t).toPromise()}const Pf=800,Mf=3;class Jc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Mf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zs._getInstance(Tf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Cf(),!this.activeServiceWorker)return;this.sender=new If(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tr();return await Ko(e,Cs,"1"),await Yo(e,Cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ko(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Af(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ei(i,!1).getAll();return new jn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jc.type="LOCAL";const Of=Jc;new Wn(3e4,6e4);/**
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
 */function Df(n,e){return e?Pe(e):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Fr extends Hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ut(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ut(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ut(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xf(n){return mf(n.auth,new Fr(n),n.bypassAuthState)}function Lf(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),pf(t,new Fr(n),n.bypassAuthState)}async function $f(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),ff(t,new Fr(n),n.bypassAuthState)}/**
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
 */class Xc{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xf;case"linkViaPopup":case"linkViaRedirect":return $f;case"reauthViaPopup":case"reauthViaRedirect":return Lf;default:Le(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ff=new Wn(2e3,1e4);class Pt extends Xc{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Pt.currentPopupAction&&Pt.currentPopupAction.cancel(),Pt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=$r();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ff.get())};e()}}Pt.currentPopupAction=null;/**
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
 */const Uf="pendingRedirect",cs=new Map;class Bf extends Xc{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=cs.get(this.auth._key());if(!e){try{const s=await Hf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}cs.set(this.auth._key(),e)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hf(n,e){const t=jf(e),s=Vf(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function Wf(n,e){cs.set(n._key(),e)}function Vf(n){return Pe(n._redirectPersistence)}function jf(n){return as(Uf,n.config.apiKey,n.name)}async function Gf(n,e,t=!1){if(ze(n.app))return Promise.reject(gt(n));const s=xr(n),i=Df(s,e),o=await new Bf(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const qf=10*60*1e3;class zf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Zc(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ce(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qo(e))}saveEventToCache(e){this.cachedEventUids.add(Qo(e)),this.lastProcessedEventTime=Date.now()}}function Qo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Zc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zc(n);default:return!1}}/**
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
 */async function Yf(n,e={}){return sn(n,"GET","/v1/projects",e)}/**
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
 */const Qf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jf=/^https?/;async function Xf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Yf(n);for(const t of e)try{if(Zf(t))return}catch{}Le(n,"unauthorized-domain")}function Zf(n){const e=Zi(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Jf.test(t))return!1;if(Qf.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const ep=new Wn(3e4,6e4);function Jo(){const n=Se().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tp(n){return new Promise((e,t)=>{var s,i,r;function o(){Jo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jo(),t(Ce(n,"network-request-failed"))},timeout:ep.get()})}if(!((i=(s=Se().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Se().gapi)===null||r===void 0)&&r.load)o();else{const a=of("iframefcb");return Se()[a]=()=>{gapi.load?o():t(Ce(n,"network-request-failed"))},sf(`${rf()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ls=null,e})}let ls=null;function np(n){return ls=ls||tp(n),ls}/**
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
 */const sp=new Wn(5e3,15e3),ip="__/auth/iframe",rp="emulator/auth/iframe",op={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ap=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cp(n){const e=n.config;x(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pr(e,rp):`https://${n.config.authDomain}/${ip}`,s={apiKey:e.apiKey,appName:n.name,v:nn},i=ap.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${tn(s).slice(1)}`}async function lp(n){const e=await np(n),t=Se().gapi;return x(t,n,"internal-error"),e.open({where:document.body,url:cp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:op,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ce(n,"network-request-failed"),a=Se().setTimeout(()=>{r(o)},sp.get());function c(){Se().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const up={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dp=500,hp=600,fp="_blank",pp="http://localhost";class Xo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mp(n,e,t,s=dp,i=hp){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},up),{width:s.toString(),height:i.toString(),top:r,left:o}),l=ue().toLowerCase();t&&(a=Oc(l)?fp:t),Pc(l)&&(e=e||pp,c.scrollbars="yes");const d=Object.entries(c).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(Yh(l)&&a!=="_self")return gp(e||"",a),new Xo(null);const u=window.open(e||"",a,d);x(u,n,"popup-blocked");try{u.focus()}catch{}return new Xo(u)}function gp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const _p="__/auth/handler",vp="emulator/auth/handler",yp=encodeURIComponent("fac");async function Zo(n,e,t,s,i,r){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:nn,eventId:i};if(e instanceof Wc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",vs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Vn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${yp}=${encodeURIComponent(c)}`:"";return`${bp(n)}?${tn(a).slice(1)}${l}`}function bp({config:n}){return n.emulator?Pr(n,vp):`https://${n.authDomain}/${_p}`}/**
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
 */const Ri="webStorageSupport";class wp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zc,this._completeRedirectFn=Gf,this._overrideRedirectResult=Wf}async _openPopup(e,t,s,i){var r;$e((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Zo(e,t,s,Zi(),i);return mp(e,o,$r())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Zo(e,t,s,Zi(),i);return kf(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):($e(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await lp(e),s=new zf(e);return t.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ri,{type:Ri},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ri];o!==void 0&&t(!!o),Le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fc()||Mc()||Dr()}}const Ep=wp;var ea="@firebase/auth",ta="1.7.9";/**
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
 */class Ip{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cp(n){Gt(new bt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uc(n)},l=new tf(s,i,r,c);return cf(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Gt(new bt("auth-internal",e=>{const t=xr(e.getProvider("auth").getImmediate());return(s=>new Ip(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(ea,ta,kp(n)),Xe(ea,ta,"esm2017")}/**
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
 */const Sp=5*60,Tp=fc("authIdTokenMaxAge")||Sp;let na=null;const Rp=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Tp)return;const i=t==null?void 0:t.token;na!==i&&(na=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Np(n=yc()){const e=Rr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=af(n,{popupRedirectResolver:Ep,persistence:[Of,wf,zc]}),s=fc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Rp(r.toString());_f(t,o,()=>o(t.currentUser)),gf(t,a=>o(a))}}const i=dc("auth");return i&&lf(t,`http://${i}`),t}function Ap(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}nf({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Ce("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Ap().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cp("Browser");var sa={};const ia="@firebase/database",ra="1.0.8";/**
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
 */let el="";function Pp(n){el=n}/**
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
 */class Mp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ee(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Rn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Op{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ee(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const tl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mp(e)}}catch{}return new Op},ft=tl("localStorage"),Dp=tl("sessionStorage");/**
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
 */const Bt=new Sr("@firebase/database"),nl=function(){let n=1;return function(){return n++}}(),sl=function(n){const e=Ed(n),t=new vd;t.update(e);const s=t.digest();return Ir.encodeByteArray(s)},Gn=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Gn.apply(null,s):typeof s=="object"?e+=ee(s):e+=s,e+=" "}return e};let wn=null,oa=!0;const xp=function(n,e){w(!0,"Can't turn on custom loggers persistently."),Bt.logLevel=G.VERBOSE,wn=Bt.log.bind(Bt)},se=function(...n){if(oa===!0&&(oa=!1,wn===null&&Dp.get("logging_enabled")===!0&&xp()),wn){const e=Gn.apply(null,n);wn(e)}},qn=function(n){return function(...e){se(n,...e)}},nr=function(...n){const e="FIREBASE INTERNAL ERROR: "+Gn(...n);Bt.error(e)},Fe=function(...n){const e=`FIREBASE FATAL ERROR: ${Gn(...n)}`;throw Bt.error(e),new Error(e)},ce=function(...n){const e="FIREBASE WARNING: "+Gn(...n);Bt.warn(e)},Lp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ti=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},$p=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},zt="[MIN_NAME]",Et="[MAX_NAME]",St=function(n,e){if(n===e)return 0;if(n===zt||e===Et)return-1;if(e===zt||n===Et)return 1;{const t=aa(n),s=aa(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Fp=function(n,e){return n===e?0:n<e?-1:1},fn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ee(e))},Ur=function(n){if(typeof n!="object"||n===null)return ee(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ee(e[s]),t+=":",t+=Ur(n[e[s]]);return t+="}",t},il=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ie(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const rl=function(n){w(!ti(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Up=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Wp=new RegExp("^-?(0*)\\d{1,10}$"),Vp=-2147483648,jp=2147483647,aa=function(n){if(Wp.test(n)){const e=Number(n);if(e>=Vp&&e<=jp)return e}return null},rn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ce("Exception was thrown by user callback.",t),e},Math.floor(0))}},Gp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},En=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class qp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class zp{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class us{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}us.OWNER="owner";/**
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
 */const Br="5",ol="v",al="s",cl="r",ll="f",ul=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dl="ls",hl="p",sr="ac",fl="websocket",pl="long_polling";/**
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
 */class ml{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ft.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ft.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Kp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function gl(n,e,t){w(typeof e=="string","typeof type must == string"),w(typeof t=="object","typeof params must == object");let s;if(e===fl)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===pl)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Kp(n)&&(t.ns=n.namespace);const i=[];return ie(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Yp{constructor(){this.counters_={}}incrementCounter(e,t=1){Ee(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Zu(this.counters_)}}/**
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
 */const Ni={},Ai={};function Hr(n){const e=n.toString();return Ni[e]||(Ni[e]=new Yp),Ni[e]}function Qp(n,e){const t=n.toString();return Ai[t]||(Ai[t]=e()),Ai[t]}/**
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
 */class Jp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&rn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ca="start",Xp="close",Zp="pLPCommand",em="pRTLPCB",_l="id",vl="pw",yl="ser",tm="cb",nm="seg",sm="ts",im="d",rm="dframe",bl=1870,wl=30,om=bl-wl,am=25e3,cm=3e4;class Mt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qn(e),this.stats_=Hr(t),this.urlFn=c=>(this.appCheckToken&&(c[sr]=this.appCheckToken),gl(t,pl,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Jp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cm)),$p(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wr((...r)=>{const[o,a,c,l,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ca)this.id=a,this.password=c;else if(o===Xp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ca]="t",s[yl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[tm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ol]=Br,this.transportSessionId&&(s[al]=this.transportSessionId),this.lastSessionId&&(s[dl]=this.lastSessionId),this.applicationId&&(s[hl]=this.applicationId),this.appCheckToken&&(s[sr]=this.appCheckToken),typeof location<"u"&&location.hostname&&ul.test(location.hostname)&&(s[cl]=ll);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mt.forceAllow_=!0}static forceDisallow(){Mt.forceDisallow_=!0}static isAvailable(){return Mt.forceAllow_?!0:!Mt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Up()&&!Bp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=lc(t),i=il(s,om);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[rm]="t",s[_l]=e,s[vl]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ee(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Wr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nl(),window[Zp+this.uniqueCallbackIdentifier]=e,window[em+this.uniqueCallbackIdentifier]=t,this.myIFrame=Wr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){se("frame writing exception"),a.stack&&se(a.stack),se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||se("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_l]=this.myID,e[vl]=this.myPW,e[yl]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wl+s.length<=bl;){const o=this.pendingSegs.shift();s=s+"&"+nm+i+"="+o.seg+"&"+sm+i+"="+o.ts+"&"+im+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(am)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const lm=16384,um=45e3;let Ts=null;typeof MozWebSocket<"u"?Ts=MozWebSocket:typeof WebSocket<"u"&&(Ts=WebSocket);class ye{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qn(this.connId),this.stats_=Hr(t),this.connURL=ye.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[ol]=Br,typeof location<"u"&&location.hostname&&ul.test(location.hostname)&&(o[cl]=ll),t&&(o[al]=t),s&&(o[dl]=s),i&&(o[sr]=i),r&&(o[hl]=r),gl(e,fl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ft.set("previous_websocket_failure",!0);try{let s;ud(),this.mySock=new Ts(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ts!==null&&!ye.forceDisallow_}static previouslyFailed(){return ft.isInMemoryStorage||ft.get("previous_websocket_failure")===!0}markConnectionHealthy(){ft.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Rn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=il(t,lm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(um))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ye.responsesRequiredToBeHealthy=2;ye.healthyTimeout=3e4;/**
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
 */class Pn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Mt,ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ye&&ye.isAvailable();let s=t&&!ye.previouslyFailed();if(e.webSocketOnly&&(t||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ye];else{const i=this.transports_=[];for(const r of Pn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Pn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Pn.globalTransportInitialized_=!1;/**
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
 */const dm=6e4,hm=5e3,fm=10*1024,pm=100*1024,Pi="t",la="d",mm="s",ua="r",gm="e",da="o",ha="a",fa="n",pa="p",_m="h";class vm{constructor(e,t,s,i,r,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qn("c:"+this.id+":"),this.transportManager_=new Pn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=En(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pi in e){const t=e[Pi];t===ha?this.upgradeIfSecondaryHealthy_():t===ua?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===da&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=fn("t",e),s=fn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pa,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ha,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fa,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=fn("t",e),s=fn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=fn(Pi,e);if(la in e){const s=e[la];if(t===_m){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===fa){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===mm?this.onConnectionShutdown_(s):t===ua?this.onReset_(s):t===gm?nr("Server Error: "+s):t===da?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Br!==s&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),En(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):En(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pa,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ft.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class El{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Il{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Rs extends Il{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Rs}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ma=32,ga=768;class j{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function W(){return new j("")}function F(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function nt(n){return n.pieces_.length-n.pieceNum_}function q(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new j(n.pieces_,e)}function Vr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ym(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Mn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function kl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new j(e,0)}function X(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof j)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new j(t,0)}function U(n){return n.pieceNum_>=n.pieces_.length}function ae(n,e){const t=F(n),s=F(e);if(t===null)return e;if(t===s)return ae(q(n),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function bm(n,e){const t=Mn(n,0),s=Mn(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=St(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function jr(n,e){if(nt(n)!==nt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function me(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(nt(n)>nt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class wm{constructor(e,t){this.errorPrefix_=t,this.parts_=Mn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xs(this.parts_[s]);Cl(this)}}function Em(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Xs(e),Cl(n)}function Im(n){const e=n.parts_.pop();n.byteLength_-=Xs(e),n.parts_.length>0&&(n.byteLength_-=1)}function Cl(n){if(n.byteLength_>ga)throw new Error(n.errorPrefix_+"has a key path longer than "+ga+" bytes ("+n.byteLength_+").");if(n.parts_.length>ma)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ma+") or object contains a cycle "+dt(n))}function dt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Gr extends Il{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Gr}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const pn=1e3,km=60*5*1e3,_a=30*1e3,Cm=1.3,Sm=3e4,Tm="server_kill",va=3;class Oe extends El{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Oe.nextPersistentConnectionId_++,this.log_=qn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pn,this.maxReconnectDelay_=km,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Gr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Rs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ee(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ve,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Oe.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ee(e,"w")){const s=yt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_d(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_a)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=gd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ee(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):nr("Unrecognized action received from server: "+ee(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Sm&&(this.reconnectDelay_=pn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Cm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(u){w(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?se("getToken() completed but was canceled"):(se("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new vm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{ce(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Tm)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ce(u),c())}}}interrupt(e){se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vs(this.interruptReasons_)&&(this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ur(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new j(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){se("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=va&&(this.reconnectDelay_=_a,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){se("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=va&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+el.replace(/\./g,"-")]=1,Cr()?e["framework.cordova"]=1:pc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rs.getInstance().currentlyOnline();return vs(this.interruptReasons_)&&e}}Oe.nextPersistentConnectionId_=0;Oe.nextConnectionId_=0;/**
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
 */let ts;class Sl extends ni{static get __EMPTY_NODE(){return ts}static set __EMPTY_NODE(e){ts=e}compare(e,t){return St(e.name,t.name)}isDefinedOn(e){throw en("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return B.MIN}maxPost(){return new B(Et,ts)}makePost(e,t){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,ts)}toString(){return".key"}}const Ht=new Sl;/**
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
 */class ns{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ne{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ne.RED,this.left=i??he.EMPTY_NODE,this.right=r??he.EMPTY_NODE}copy(e,t,s,i,r){return new ne(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return he.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return he.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ne.RED=!0;ne.BLACK=!1;class Rm{copy(e,t,s,i,r){return this}insert(e,t,s){return new ne(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class he{constructor(e,t=he.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new he(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ne.BLACK,null,null))}remove(e){return new he(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ne.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ns(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ns(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ns(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ns(this.root_,null,this.comparator_,!0,e)}}he.EMPTY_NODE=new Rm;/**
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
 */function Nm(n,e){return St(n.name,e.name)}function qr(n,e){return St(n,e)}/**
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
 */let ir;function Am(n){ir=n}const Tl=function(n){return typeof n=="number"?"number:"+rl(n):"string:"+n},Rl=function(n){if(n.isLeafNode()){const e=n.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ee(e,".sv"),"Priority must be a string or number.")}else w(n===ir||n.isEmpty(),"priority of unexpected type.");w(n===ir||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ya;class te{constructor(e,t=te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rl(this.priorityNode_)}static set __childrenNodeConstructor(e){ya=e}static get __childrenNodeConstructor(){return ya}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=F(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||nt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,te.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=rl(this.value_):e+=this.value_,this.lazyHash_=sl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof te.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=te.VALUE_TYPE_ORDER.indexOf(t),r=te.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+t),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Nl,Al;function Pm(n){Nl=n}function Mm(n){Al=n}class Om extends ni{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?St(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return B.MIN}maxPost(){return new B(Et,new te("[PRIORITY-POST]",Al))}makePost(e,t){const s=Nl(e);return new B(t,new te("[PRIORITY-POST]",s))}toString(){return".priority"}}const Q=new Om;/**
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
 */const Dm=Math.log(2);class xm{constructor(e){const t=r=>parseInt(Math.log(r)/Dm,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ns=function(n,e,t,s){n.sort(e);const i=function(c,l){const d=l-c;let u,h;if(d===0)return null;if(d===1)return u=n[c],h=t?t(u):u,new ne(h,u.node,ne.BLACK,null,null);{const p=parseInt(d/2,10)+c,m=i(c,p),v=i(p+1,l);return u=n[p],h=t?t(u):u,new ne(h,u.node,ne.BLACK,m,v)}},r=function(c){let l=null,d=null,u=n.length;const h=function(m,v){const I=u-m,E=u;u-=m;const _=i(I+1,E),y=n[I],T=t?t(y):y;p(new ne(T,y.node,v,null,_))},p=function(m){l?(l.left=m,l=m):(d=m,l=m)};for(let m=0;m<c.count;++m){const v=c.nextBitIsOne(),I=Math.pow(2,c.count-(m+1));v?h(I,ne.BLACK):(h(I,ne.BLACK),h(I,ne.RED))}return d},o=new xm(n.length),a=r(o);return new he(s||e,a)};/**
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
 */let Mi;const At={};class Me{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return w(At&&Q,"ChildrenNode.ts has not been loaded"),Mi=Mi||new Me({".priority":At},{".priority":Q}),Mi}get(e){const t=yt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof he?t:null}hasIndex(e){return Ee(this.indexSet_,e.toString())}addIndex(e,t){w(e!==Ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(B.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ns(s,e.getCompare()):a=At;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new Me(d,l)}addToIndexes(e,t){const s=ys(this.indexes_,(i,r)=>{const o=yt(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===At)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(B.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ns(a,o.getCompare())}else return At;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new B(e.name,a))),c.insert(e,e.node)}});return new Me(s,this.indexSet_)}removeFromIndexes(e,t){const s=ys(this.indexes_,i=>{if(i===At)return i;{const r=t.get(e.name);return r?i.remove(new B(e.name,r)):i}});return new Me(s,this.indexSet_)}}/**
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
 */let mn;class P{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Rl(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mn||(mn=new P(new he(qr),null,Me.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mn}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?mn:t}}getChild(e){const t=F(e);return t===null?this:this.getImmediateChild(t).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(w(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new B(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?mn:this.priorityNode_;return new P(i,o,r)}}updateChild(e,t){const s=F(e);if(s===null)return t;{w(F(e)!==".priority"||nt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(q(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Q,(o,a)=>{t[o]=a.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tl(this.getPriority().val())+":"),this.forEachChild(Q,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":sl(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new B(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new B(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new B(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zn?-1:0}withIndex(e){if(e===Ht||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ht||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Q),i=t.getIterator(Q);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ht?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Lm extends P{constructor(){super(new he(qr),P.EMPTY_NODE,Me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const zn=new Lm;Object.defineProperties(B,{MIN:{value:new B(zt,P.EMPTY_NODE)},MAX:{value:new B(Et,zn)}});Sl.__EMPTY_NODE=P.EMPTY_NODE;te.__childrenNodeConstructor=P;Am(zn);Mm(zn);/**
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
 */const $m=!0;function J(n,e=null){if(n===null)return P.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new te(t,J(e))}if(!(n instanceof Array)&&$m){const t=[];let s=!1;if(ie(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=J(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new B(o,c)))}}),t.length===0)return P.EMPTY_NODE;const r=Ns(t,Nm,o=>o.name,qr);if(s){const o=Ns(t,Q.getCompare());return new P(r,J(e),new Me({".priority":o},{".priority":Q}))}else return new P(r,J(e),Me.Default)}else{let t=P.EMPTY_NODE;return ie(n,(s,i)=>{if(Ee(n,s)&&s.substring(0,1)!=="."){const r=J(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(J(e))}}Pm(J);/**
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
 */class Fm extends ni{constructor(e){super(),this.indexPath_=e,w(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?St(e.name,t.name):r}makePost(e,t){const s=J(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new B(t,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,zn);return new B(Et,e)}toString(){return Mn(this.indexPath_,0).join("/")}}/**
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
 */class Um extends ni{compare(e,t){const s=e.node.compareTo(t.node);return s===0?St(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,t){const s=J(e);return new B(t,s)}toString(){return".value"}}const Bm=new Um;/**
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
 */function Pl(n){return{type:"value",snapshotNode:n}}function Kt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function On(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Dn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Hm(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class zr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(On(t,a)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Kt(t,s)):o.trackChildChange(Dn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Q,(i,r)=>{t.hasChild(i)||s.trackChildChange(On(i,r))}),t.isLeafNode()||t.forEachChild(Q,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Dn(i,r,o))}else s.trackChildChange(Kt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class xn{constructor(e){this.indexedFilter_=new zr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xn.getStartPost_(e),this.endPost_=xn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new B(t,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=P.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return t.forEachChild(Q,(o,a)=>{r.matches(new B(o,a))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Wm{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new xn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new B(t,s))||(s=P.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,p)=>u(p,h)}else o=this.index_.getCompare();const a=e;w(a.numChildren()===this.limit_,"");const c=new B(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,c);if(d&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Dn(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(On(t,u));const v=a.updateImmediateChild(t,P.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Kt(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return s.isEmpty()?e:d&&o(l,c)>=0?(r!=null&&(r.trackChildChange(On(l.name,l.node)),r.trackChildChange(Kt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,P.EMPTY_NODE)):e}}/**
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
 */class Kr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zt}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Et}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Q}copy(){const e=new Kr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Vm(n){return n.loadsAllData()?new zr(n.getIndex()):n.hasLimit()?new Wm(n):new xn(n)}function ba(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Q?t="$priority":n.index_===Bm?t="$value":n.index_===Ht?t="$key":(w(n.index_ instanceof Fm,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ee(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ee(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ee(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ee(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ee(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function wa(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Q&&(e.i=n.index_.toString()),e}/**
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
 */class As extends El{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=qn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=As.getListenId_(e,s),a={};this.listens_[o]=a;const c=ba(e._queryParams);this.restRequest_(r+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,s),yt(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",i(h,null)}})}unlisten(e,t){const s=As.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ba(e._queryParams),s=e._path.toString(),i=new ve;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Rn(a.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class jm{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ps(){return{value:null,children:new Map}}function on(n,e,t){if(U(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=F(e);n.children.has(s)||n.children.set(s,Ps());const i=n.children.get(s);e=q(e),on(i,e,t)}}function rr(n,e){if(U(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Q,(s,i)=>{on(n,new j(s),i)}),rr(n,e)}}else if(n.children.size>0){const t=F(e);return e=q(e),n.children.has(t)&&rr(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function or(n,e,t){n.value!==null?t(e,n.value):Gm(n,(s,i)=>{const r=new j(e.toString()+"/"+s);or(i,r,t)})}function Gm(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class qm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ie(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Ea=10*1e3,zm=30*1e3,Km=5*60*1e3;class Ym{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qm(e);const s=Ea+(zm-Ea)*Math.random();En(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ie(e,(i,r)=>{r>0&&Ee(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),En(this.reportStats_.bind(this),Math.floor(Math.random()*2*Km))}}/**
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
 */var be;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(be||(be={}));function Yr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Ms{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=be.ACK_USER_WRITE,this.source=Yr()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new j(e));return new Ms(W(),t,this.revert)}}else return w(F(this.path)===e,"operationForChild called for unrelated child."),new Ms(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ln{constructor(e,t){this.source=e,this.path=t,this.type=be.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new Ln(this.source,W()):new Ln(this.source,q(this.path))}}/**
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
 */class It{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=be.OVERWRITE}operationForChild(e){return U(this.path)?new It(this.source,W(),this.snap.getImmediateChild(e)):new It(this.source,q(this.path),this.snap)}}/**
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
 */class Yt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=be.MERGE}operationForChild(e){if(U(this.path)){const t=this.children.subtree(new j(e));return t.isEmpty()?null:t.value?new It(this.source,W(),t.value):new Yt(this.source,W(),t)}else return w(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yt(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class st{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const t=F(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Qm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Jm(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Hm(o.childName,o.snapshotNode))}),gn(n,i,"child_removed",e,s,t),gn(n,i,"child_added",e,s,t),gn(n,i,"child_moved",r,s,t),gn(n,i,"child_changed",e,s,t),gn(n,i,"value",e,s,t),i}function gn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>Zm(n,a,c)),o.forEach(a=>{const c=Xm(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function Xm(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Zm(n,e,t){if(e.childName==null||t.childName==null)throw en("Should only compare child_ events.");const s=new B(e.childName,e.snapshotNode),i=new B(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function si(n,e){return{eventCache:n,serverCache:e}}function In(n,e,t,s){return si(new st(e,t,s),n.serverCache)}function Ml(n,e,t,s){return si(n.eventCache,new st(e,t,s))}function Os(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function kt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Oi;const eg=()=>(Oi||(Oi=new he(Fp)),Oi);class K{constructor(e,t=eg()){this.value=e,this.children=t}static fromObject(e){let t=new K(null);return ie(e,(s,i)=>{t=t.set(new j(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:W(),value:this.value};if(U(e))return null;{const s=F(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(q(e),t);return r!=null?{path:X(new j(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const t=F(e),s=this.children.get(t);return s!==null?s.subtree(q(e)):new K(null)}}set(e,t){if(U(e))return new K(t,this.children);{const s=F(e),r=(this.children.get(s)||new K(null)).set(q(e),t),o=this.children.insert(s,r);return new K(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const t=F(e),s=this.children.get(t);if(s){const i=s.remove(q(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new K(null):new K(this.value,r)}else return this}}get(e){if(U(e))return this.value;{const t=F(e),s=this.children.get(t);return s?s.get(q(e)):null}}setTree(e,t){if(U(e))return t;{const s=F(e),r=(this.children.get(s)||new K(null)).setTree(q(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new K(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(X(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,W(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(U(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_(q(e),X(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,W(),t)}foreachOnPath_(e,t,s){if(U(e))return this;{this.value&&s(t,this.value);const i=F(e),r=this.children.get(i);return r?r.foreachOnPath_(q(e),X(t,i),s):new K(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(X(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class we{constructor(e){this.writeTree_=e}static empty(){return new we(new K(null))}}function kn(n,e,t){if(U(e))return new we(new K(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ae(i,e);return r=r.updateChild(o,t),new we(n.writeTree_.set(i,r))}else{const i=new K(t),r=n.writeTree_.setTree(e,i);return new we(r)}}}function ar(n,e,t){let s=n;return ie(t,(i,r)=>{s=kn(s,X(e,i),r)}),s}function Ia(n,e){if(U(e))return we.empty();{const t=n.writeTree_.setTree(e,new K(null));return new we(t)}}function cr(n,e){return Tt(n,e)!=null}function Tt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ae(t.path,e)):null}function ka(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Q,(s,i)=>{e.push(new B(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new B(s,i.value))}),e}function Ze(n,e){if(U(e))return n;{const t=Tt(n,e);return t!=null?new we(new K(t)):new we(n.writeTree_.subtree(e))}}function lr(n){return n.writeTree_.isEmpty()}function Qt(n,e){return Ol(W(),n.writeTree_,e)}function Ol(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Ol(X(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(X(n,".priority"),s)),t}}/**
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
 */function ii(n,e){return $l(e,n)}function tg(n,e,t,s,i){w(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=kn(n.visibleWrites,e,t)),n.lastWriteId=s}function ng(n,e,t,s){w(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=ar(n.visibleWrites,e,t),n.lastWriteId=s}function sg(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function ig(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);w(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&rg(a,s.path)?i=!1:me(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return og(n),!0;if(s.snap)n.visibleWrites=Ia(n.visibleWrites,s.path);else{const a=s.children;ie(a,c=>{n.visibleWrites=Ia(n.visibleWrites,X(s.path,c))})}return!0}else return!1}function rg(n,e){if(n.snap)return me(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&me(X(n.path,t),e))return!0;return!1}function og(n){n.visibleWrites=Dl(n.allWrites,ag,W()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function ag(n){return n.visible}function Dl(n,e,t){let s=we.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)me(t,o)?(a=ae(t,o),s=kn(s,a,r.snap)):me(o,t)&&(a=ae(o,t),s=kn(s,W(),r.snap.getChild(a)));else if(r.children){if(me(t,o))a=ae(t,o),s=ar(s,a,r.children);else if(me(o,t))if(a=ae(o,t),U(a))s=ar(s,W(),r.children);else{const c=yt(r.children,F(a));if(c){const l=c.getChild(q(a));s=kn(s,W(),l)}}}else throw en("WriteRecord should have .snap or .children")}}return s}function xl(n,e,t,s,i){if(!s&&!i){const r=Tt(n.visibleWrites,e);if(r!=null)return r;{const o=Ze(n.visibleWrites,e);if(lr(o))return t;if(t==null&&!cr(o,W()))return null;{const a=t||P.EMPTY_NODE;return Qt(o,a)}}}else{const r=Ze(n.visibleWrites,e);if(!i&&lr(r))return t;if(!i&&t==null&&!cr(r,W()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(me(l.path,e)||me(e,l.path))},a=Dl(n.allWrites,o,e),c=t||P.EMPTY_NODE;return Qt(a,c)}}}function cg(n,e,t){let s=P.EMPTY_NODE;const i=Tt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Q,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ze(n.visibleWrites,e);return t.forEachChild(Q,(o,a)=>{const c=Qt(Ze(r,new j(o)),a);s=s.updateImmediateChild(o,c)}),ka(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ze(n.visibleWrites,e);return ka(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function lg(n,e,t,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=X(e,t);if(cr(n.visibleWrites,r))return null;{const o=Ze(n.visibleWrites,r);return lr(o)?i.getChild(t):Qt(o,i.getChild(t))}}function ug(n,e,t,s){const i=X(e,t),r=Tt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ze(n.visibleWrites,i);return Qt(o,s.getNode().getImmediateChild(t))}else return null}function dg(n,e){return Tt(n.visibleWrites,e)}function hg(n,e,t,s,i,r,o){let a;const c=Ze(n.visibleWrites,e),l=Tt(c,W());if(l!=null)a=l;else if(t!=null)a=Qt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=h.getNext();for(;p&&d.length<i;)u(p,s)!==0&&d.push(p),p=h.getNext();return d}else return[]}function fg(){return{visibleWrites:we.empty(),allWrites:[],lastWriteId:-1}}function Ds(n,e,t,s){return xl(n.writeTree,n.treePath,e,t,s)}function Xr(n,e){return cg(n.writeTree,n.treePath,e)}function Ca(n,e,t,s){return lg(n.writeTree,n.treePath,e,t,s)}function xs(n,e){return dg(n.writeTree,X(n.treePath,e))}function pg(n,e,t,s,i,r){return hg(n.writeTree,n.treePath,e,t,s,i,r)}function Zr(n,e,t){return ug(n.writeTree,n.treePath,e,t)}function Ll(n,e){return $l(X(n.treePath,e),n.writeTree)}function $l(n,e){return{treePath:n,writeTree:e}}/**
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
 */class mg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;w(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Dn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,On(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Kt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Dn(s,e.snapshotNode,i.oldSnap));else throw en("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class gg{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Fl=new gg;class eo{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new st(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kt(this.viewCache_),r=pg(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function _g(n){return{filter:n}}function vg(n,e){w(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function yg(n,e,t,s,i){const r=new mg;let o,a;if(t.type===be.OVERWRITE){const l=t;l.source.fromUser?o=ur(n,e,l.path,l.snap,s,i,r):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!U(l.path),o=Ls(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===be.MERGE){const l=t;l.source.fromUser?o=wg(n,e,l.path,l.children,s,i,r):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=dr(n,e,l.path,l.children,s,i,a,r))}else if(t.type===be.ACK_USER_WRITE){const l=t;l.revert?o=kg(n,e,l.path,s,i,r):o=Eg(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===be.LISTEN_COMPLETE)o=Ig(n,e,t.path,s,r);else throw en("Unknown operation type: "+t.type);const c=r.getChanges();return bg(e,o,c),{viewCache:o,changes:c}}function bg(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Os(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Pl(Os(e)))}}function Ul(n,e,t,s,i,r){const o=e.eventCache;if(xs(s,t)!=null)return e;{let a,c;if(U(t))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=kt(e),d=l instanceof P?l:P.EMPTY_NODE,u=Xr(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=Ds(s,kt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=F(t);if(l===".priority"){w(nt(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=Ca(s,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=q(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=Ca(s,t,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=Zr(s,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,i,r):a=o.getNode()}}return In(e,a,o.isFullyInitialized()||U(t),n.filter.filtersNodes())}}function Ls(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if(U(t))l=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,s);l=d.updateFullNode(c.getNode(),p,null)}else{const p=F(t);if(!c.isCompleteForPath(t)&&nt(t)>1)return e;const m=q(t),I=c.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?l=d.updatePriority(c.getNode(),I):l=d.updateChild(c.getNode(),p,I,m,Fl,null)}const u=Ml(e,l,c.isFullyInitialized()||U(t),d.filtersNodes()),h=new eo(i,u,r);return Ul(n,u,t,i,h,a)}function ur(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const d=new eo(i,e,r);if(U(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=In(e,l,!0,n.filter.filtersNodes());else{const u=F(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=In(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=q(t),p=a.getNode().getImmediateChild(u);let m;if(U(h))m=s;else{const v=d.getCompleteChild(u);v!=null?Vr(h)===".priority"&&v.getChild(kl(h)).isEmpty()?m=v:m=v.updateChild(h,s):m=P.EMPTY_NODE}if(p.equals(m))c=e;else{const v=n.filter.updateChild(a.getNode(),u,m,h,d,o);c=In(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Sa(n,e){return n.eventCache.isCompleteForChild(e)}function wg(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const d=X(t,c);Sa(e,F(d))&&(a=ur(n,a,d,l,i,r,o))}),s.foreach((c,l)=>{const d=X(t,c);Sa(e,F(d))||(a=ur(n,a,d,l,i,r,o))}),a}function Ta(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function dr(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;U(t)?l=s:l=new K(null).setTree(t,s);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),m=Ta(n,p,h);c=Ls(n,c,new j(u),m,i,r,o,a)}}),l.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!p){const m=e.serverCache.getNode().getImmediateChild(u),v=Ta(n,m,h);c=Ls(n,c,new j(u),v,i,r,o,a)}}),c}function Eg(n,e,t,s,i,r,o){if(xs(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(U(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ls(n,e,t,c.getNode().getChild(t),i,r,a,o);if(U(t)){let l=new K(null);return c.getNode().forEachChild(Ht,(d,u)=>{l=l.set(new j(d),u)}),dr(n,e,t,l,i,r,a,o)}else return e}else{let l=new K(null);return s.foreach((d,u)=>{const h=X(t,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),dr(n,e,t,l,i,r,a,o)}}function Ig(n,e,t,s,i){const r=e.serverCache,o=Ml(e,r.getNode(),r.isFullyInitialized()||U(t),r.isFiltered());return Ul(n,o,t,s,Fl,i)}function kg(n,e,t,s,i,r){let o;if(xs(s,t)!=null)return e;{const a=new eo(s,e,i),c=e.eventCache.getNode();let l;if(U(t)||F(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ds(s,kt(e));else{const u=e.serverCache.getNode();w(u instanceof P,"serverChildren would be complete if leaf node"),d=Xr(s,u)}d=d,l=n.filter.updateFullNode(c,d,r)}else{const d=F(t);let u=Zr(s,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,q(t),a,r):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,P.EMPTY_NODE,q(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ds(s,kt(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||xs(s,W())!=null,In(e,l,o,n.filter.filtersNodes())}}/**
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
 */class Cg{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new zr(s.getIndex()),r=Vm(s);this.processor_=_g(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(P.EMPTY_NODE,a.getNode(),null),d=new st(c,o.isFullyInitialized(),i.filtersNodes()),u=new st(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=si(u,d),this.eventGenerator_=new Qm(this.query_)}get query(){return this.query_}}function Sg(n){return n.viewCache_.serverCache.getNode()}function Tg(n){return Os(n.viewCache_)}function Rg(n,e){const t=kt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!U(e)&&!t.getImmediateChild(F(e)).isEmpty())?t.getChild(e):null}function Ra(n){return n.eventRegistrations_.length===0}function Ng(n,e){n.eventRegistrations_.push(e)}function Na(n,e,t){const s=[];if(t){w(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Aa(n,e,t,s){e.type===be.MERGE&&e.source.queryId!==null&&(w(kt(n.viewCache_),"We should always have a full cache before handling merges"),w(Os(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=yg(n.processor_,i,e,t,s);return vg(n.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Bl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Ag(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Q,(r,o)=>{s.push(Kt(r,o))}),t.isFullyInitialized()&&s.push(Pl(t.getNode())),Bl(n,s,t.getNode(),e)}function Bl(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Jm(n.eventGenerator_,e,t,i)}/**
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
 */let $s;class Hl{constructor(){this.views=new Map}}function Pg(n){w(!$s,"__referenceConstructor has already been defined"),$s=n}function Mg(){return w($s,"Reference.ts has not been loaded"),$s}function Og(n){return n.views.size===0}function to(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),Aa(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Aa(o,e,t,s));return r}}function Wl(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Ds(t,i?s:null),c=!1;a?c=!0:s instanceof P?(a=Xr(t,s),c=!1):(a=P.EMPTY_NODE,c=!1);const l=si(new st(a,c,!1),new st(s,i,!1));return new Cg(e,l)}return o}function Dg(n,e,t,s,i,r){const o=Wl(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Ng(o,t),Ag(o,t)}function xg(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=it(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(Na(l,t,s)),Ra(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(Na(c,t,s)),Ra(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!it(n)&&r.push(new(Mg())(e._repo,e._path)),{removed:r,events:o}}function Vl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function et(n,e){let t=null;for(const s of n.views.values())t=t||Rg(s,e);return t}function jl(n,e){if(e._queryParams.loadsAllData())return ri(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Gl(n,e){return jl(n,e)!=null}function it(n){return ri(n)!=null}function ri(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Fs;function Lg(n){w(!Fs,"__referenceConstructor has already been defined"),Fs=n}function $g(){return w(Fs,"Reference.ts has not been loaded"),Fs}let Fg=1;class Pa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=fg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function no(n,e,t,s,i){return tg(n.pendingWriteTree_,e,t,s,i),i?an(n,new It(Yr(),e,t)):[]}function Ug(n,e,t,s){ng(n.pendingWriteTree_,e,t,s);const i=K.fromObject(t);return an(n,new Yt(Yr(),e,i))}function Ke(n,e,t=!1){const s=sg(n.pendingWriteTree_,e);if(ig(n.pendingWriteTree_,e)){let r=new K(null);return s.snap!=null?r=r.set(W(),!0):ie(s.children,o=>{r=r.set(new j(o),!0)}),an(n,new Ms(s.path,r,t))}else return[]}function Kn(n,e,t){return an(n,new It(Qr(),e,t))}function Bg(n,e,t){const s=K.fromObject(t);return an(n,new Yt(Qr(),e,s))}function Hg(n,e){return an(n,new Ln(Qr(),e))}function Wg(n,e,t){const s=so(n,t);if(s){const i=io(s),r=i.path,o=i.queryId,a=ae(r,e),c=new Ln(Jr(o),a);return ro(n,r,c)}else return[]}function Us(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Gl(o,e))){const c=xg(o,e,t,s);Og(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(h,p)=>it(p));if(d&&!u){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=Gg(h);for(let m=0;m<p.length;++m){const v=p[m],I=v.query,E=Yl(n,v);n.listenProvider_.startListening(Cn(I),$n(n,I),E.hashFn,E.onComplete)}}}!u&&l.length>0&&!s&&(d?n.listenProvider_.stopListening(Cn(e),null):l.forEach(h=>{const p=n.queryToTagMap.get(ai(h));n.listenProvider_.stopListening(Cn(h),p)}))}qg(n,l)}return a}function ql(n,e,t,s){const i=so(n,s);if(i!=null){const r=io(i),o=r.path,a=r.queryId,c=ae(o,e),l=new It(Jr(a),c,t);return ro(n,o,l)}else return[]}function Vg(n,e,t,s){const i=so(n,s);if(i){const r=io(i),o=r.path,a=r.queryId,c=ae(o,e),l=K.fromObject(t),d=new Yt(Jr(a),c,l);return ro(n,o,d)}else return[]}function hr(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(h,p)=>{const m=ae(h,i);r=r||et(p,m),o=o||it(p)});let a=n.syncPointTree_.get(i);a?(o=o||it(a),r=r||et(a,W())):(a=new Hl,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=P.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,m)=>{const v=et(m,W());v&&(r=r.updateImmediateChild(p,v))}));const l=Gl(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=ai(e);w(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=zg();n.queryToTagMap.set(h,p),n.tagToQueryMap.set(p,h)}const d=ii(n.pendingWriteTree_,i);let u=Dg(a,e,t,d,r,c);if(!l&&!o&&!s){const h=jl(a,e);u=u.concat(Kg(n,e,h))}return u}function oi(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=ae(o,e),l=et(a,c);if(l)return l});return xl(i,e,r,t,!0)}function jg(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const u=ae(l,t);s=s||et(d,u)});let i=n.syncPointTree_.get(t);i?s=s||et(i,W()):(i=new Hl,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new st(s,!0,!1):null,a=ii(n.pendingWriteTree_,e._path),c=Wl(i,e,a,r?o.getNode():P.EMPTY_NODE,r);return Tg(c)}function an(n,e){return zl(e,n.syncPointTree_,null,ii(n.pendingWriteTree_,W()))}function zl(n,e,t,s){if(U(n.path))return Kl(n,e,t,s);{const i=e.get(W());t==null&&i!=null&&(t=et(i,W()));let r=[];const o=F(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=Ll(s,o);r=r.concat(zl(a,c,l,d))}return i&&(r=r.concat(to(i,n,s,t))),r}}function Kl(n,e,t,s){const i=e.get(W());t==null&&i!=null&&(t=et(i,W()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Ll(s,o),d=n.operationForChild(o);d&&(r=r.concat(Kl(d,a,c,l)))}),i&&(r=r.concat(to(i,n,s,t))),r}function Yl(n,e){const t=e.query,s=$n(n,t);return{hashFn:()=>(Sg(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Wg(n,t._path,s):Hg(n,t._path);{const r=Hp(i,t);return Us(n,t,null,r)}}}}function $n(n,e){const t=ai(e);return n.queryToTagMap.get(t)}function ai(n){return n._path.toString()+"$"+n._queryIdentifier}function so(n,e){return n.tagToQueryMap.get(e)}function io(n){const e=n.indexOf("$");return w(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new j(n.substr(0,e))}}function ro(n,e,t){const s=n.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=ii(n.pendingWriteTree_,e);return to(s,t,i,null)}function Gg(n){return n.fold((e,t,s)=>{if(t&&it(t))return[ri(t)];{let i=[];return t&&(i=Vl(t)),ie(s,(r,o)=>{i=i.concat(o)}),i}})}function Cn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new($g())(n._repo,n._path):n}function qg(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=ai(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function zg(){return Fg++}function Kg(n,e,t){const s=e._path,i=$n(n,e),r=Yl(n,t),o=n.listenProvider_.startListening(Cn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)w(!it(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!U(l)&&d&&it(d))return[ri(d).query];{let h=[];return d&&(h=h.concat(Vl(d).map(p=>p.query))),ie(u,(p,m)=>{h=h.concat(m)}),h}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(Cn(d),$n(n,d))}}return o}/**
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
 */class oo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new oo(t)}node(){return this.node_}}class ao{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=X(this.path_,e);return new ao(this.syncTree_,t)}node(){return oi(this.syncTree_,this.path_)}}const Yg=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ma=function(n,e,t){if(!n||typeof n!="object")return n;if(w(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Qg(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Jg(n[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Qg=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:w(!1,"Unexpected server value: "+n)}},Jg=function(n,e,t){n.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ql=function(n,e,t,s){return lo(e,new ao(t,n),s)},co=function(n,e,t){return lo(n,new oo(e),t)};function lo(n,e,t){const s=n.getPriority().val(),i=Ma(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ma(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new te(a,J(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new te(i))),o.forEachChild(Q,(a,c)=>{const l=lo(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class uo{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ci(n,e){let t=e instanceof j?e:new j(e),s=n,i=F(t);for(;i!==null;){const r=yt(s.node.children,i)||{children:{},childCount:0};s=new uo(i,s,r),t=q(t),i=F(t)}return s}function Rt(n){return n.node.value}function ho(n,e){n.node.value=e,fr(n)}function Jl(n){return n.node.childCount>0}function Xg(n){return Rt(n)===void 0&&!Jl(n)}function li(n,e){ie(n.node.children,(t,s)=>{e(new uo(t,n,s))})}function Xl(n,e,t,s){t&&e(n),li(n,i=>{Xl(i,e,!0)})}function Zg(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Yn(n){return new j(n.parent===null?n.name:Yn(n.parent)+"/"+n.name)}function fr(n){n.parent!==null&&e_(n.parent,n.name,n)}function e_(n,e,t){const s=Xg(t),i=Ee(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,fr(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,fr(n))}/**
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
 */const t_=/[\[\].#$\/\u0000-\u001F\u007F]/,n_=/[\[\].#$\u0000-\u001F\u007F]/,Di=10*1024*1024,fo=function(n){return typeof n=="string"&&n.length!==0&&!t_.test(n)},Zl=function(n){return typeof n=="string"&&n.length!==0&&!n_.test(n)},s_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zl(n)},po=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ti(n)||n&&typeof n=="object"&&Ee(n,".sv")},Bs=function(n,e,t,s){s&&e===void 0||Qn(jt(n,"value"),e,t)},Qn=function(n,e,t){const s=t instanceof j?new wm(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+dt(s));if(typeof e=="function")throw new Error(n+"contains a function "+dt(s)+" with contents = "+e.toString());if(ti(e))throw new Error(n+"contains "+e.toString()+" "+dt(s));if(typeof e=="string"&&e.length>Di/3&&Xs(e)>Di)throw new Error(n+"contains a string greater than "+Di+" utf8 bytes "+dt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ie(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!fo(o)))throw new Error(n+" contains an invalid key ("+o+") "+dt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Em(s,o),Qn(n,a,s),Im(s)}),i&&r)throw new Error(n+' contains ".value" child '+dt(s)+" in addition to actual children.")}},i_=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Mn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!fo(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(bm);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&me(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},eu=function(n,e,t,s){const i=jt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];ie(e,(o,a)=>{const c=new j(o);if(Qn(i,a,X(t,c)),Vr(c)===".priority"&&!po(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),i_(i,r)},r_=function(n,e,t){if(ti(e))throw new Error(jt(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!po(e))throw new Error(jt(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},tu=function(n,e,t,s){if(!Zl(t))throw new Error(jt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},o_=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tu(n,e,t)},Ye=function(n,e){if(F(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},a_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!s_(t))throw new Error(jt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class c_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ui(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!jr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function nu(n,e,t){ui(n,t),su(n,s=>jr(s,e))}function fe(n,e,t){ui(n,t),su(n,s=>me(s,e)||me(e,s))}function su(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(l_(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function l_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();wn&&se("event: "+t.toString()),rn(s)}}}/**
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
 */const u_="repo_interrupt",d_=25;class h_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new c_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ps(),this.transactionQueueTree_=new uo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function f_(n,e,t){if(n.stats_=Hr(n.repoInfo_),n.forceRestClient_||Gp())n.server_=new As(n.repoInfo_,(s,i,r,o)=>{Oa(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Da(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ee(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Oe(n.repoInfo_,e,(s,i,r,o)=>{Oa(n,s,i,r,o)},s=>{Da(n,s)},s=>{p_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Qp(n.repoInfo_,()=>new Ym(n.stats_,n.server_)),n.infoData_=new jm,n.infoSyncTree_=new Pa({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Kn(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),mo(n,"connected",!1),n.serverSyncTree_=new Pa({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);fe(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function iu(n){const t=n.infoData_.getNode(new j(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Jn(n){return Yg({timestamp:iu(n)})}function Oa(n,e,t,s,i){n.dataUpdateCount++;const r=new j(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=ys(t,l=>J(l));o=Vg(n.serverSyncTree_,r,c,i)}else{const c=J(t);o=ql(n.serverSyncTree_,r,c,i)}else if(s){const c=ys(t,l=>J(l));o=Bg(n.serverSyncTree_,r,c)}else{const c=J(t);o=Kn(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Jt(n,r)),fe(n.eventQueue_,a,o)}function Da(n,e){mo(n,"connected",e),e===!1&&v_(n)}function p_(n,e){ie(e,(t,s)=>{mo(n,t,s)})}function mo(n,e,t){const s=new j("/.info/"+e),i=J(t);n.infoData_.updateSnapshot(s,i);const r=Kn(n.infoSyncTree_,s,i);fe(n.eventQueue_,s,r)}function di(n){return n.nextWriteId_++}function m_(n,e,t){const s=jg(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=J(i).withIndex(e._queryParams.getIndex());hr(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Kn(n.serverSyncTree_,e._path,r);else{const a=$n(n.serverSyncTree_,e);o=ql(n.serverSyncTree_,e._path,r,a)}return fe(n.eventQueue_,e._path,o),Us(n.serverSyncTree_,e,t,null,!0),r},i=>(cn(n,"get for query "+ee(e)+" failed: "+i),Promise.reject(new Error(i))))}function g_(n,e,t,s,i){cn(n,"set",{path:e.toString(),value:t,priority:s});const r=Jn(n),o=J(t,s),a=oi(n.serverSyncTree_,e),c=co(o,a,r),l=di(n),d=no(n.serverSyncTree_,e,c,l,!0);ui(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,p)=>{const m=h==="ok";m||ce("set at "+e+" failed: "+h);const v=Ke(n.serverSyncTree_,l,!m);fe(n.eventQueue_,e,v),rt(n,i,h,p)});const u=_o(n,e);Jt(n,u),fe(n.eventQueue_,u,[])}function __(n,e,t,s){cn(n,"update",{path:e.toString(),value:t});let i=!0;const r=Jn(n),o={};if(ie(t,(a,c)=>{i=!1,o[a]=Ql(X(e,a),J(c),n.serverSyncTree_,r)}),i)se("update() called with empty data.  Don't do anything."),rt(n,s,"ok",void 0);else{const a=di(n),c=Ug(n.serverSyncTree_,e,o,a);ui(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{const u=l==="ok";u||ce("update at "+e+" failed: "+l);const h=Ke(n.serverSyncTree_,a,!u),p=h.length>0?Jt(n,e):e;fe(n.eventQueue_,p,h),rt(n,s,l,d)}),ie(t,l=>{const d=_o(n,X(e,l));Jt(n,d)}),fe(n.eventQueue_,e,[])}}function v_(n){cn(n,"onDisconnectEvents");const e=Jn(n),t=Ps();or(n.onDisconnect_,W(),(i,r)=>{const o=Ql(i,r,n.serverSyncTree_,e);on(t,i,o)});let s=[];or(t,W(),(i,r)=>{s=s.concat(Kn(n.serverSyncTree_,i,r));const o=_o(n,i);Jt(n,o)}),n.onDisconnect_=Ps(),fe(n.eventQueue_,W(),s)}function y_(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&rr(n.onDisconnect_,e),rt(n,t,s,i)})}function xa(n,e,t,s){const i=J(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&on(n.onDisconnect_,e,i),rt(n,s,r,o)})}function b_(n,e,t,s,i){const r=J(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&on(n.onDisconnect_,e,r),rt(n,i,o,a)})}function w_(n,e,t,s){if(vs(t)){se("onDisconnect().update() called with empty data.  Don't do anything."),rt(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&ie(t,(o,a)=>{const c=J(a);on(n.onDisconnect_,X(e,o),c)}),rt(n,s,i,r)})}function E_(n,e,t){let s;F(e._path)===".info"?s=hr(n.infoSyncTree_,e,t):s=hr(n.serverSyncTree_,e,t),nu(n.eventQueue_,e._path,s)}function pr(n,e,t){let s;F(e._path)===".info"?s=Us(n.infoSyncTree_,e,t):s=Us(n.serverSyncTree_,e,t),nu(n.eventQueue_,e._path,s)}function I_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(u_)}function cn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),se(t,...e)}function rt(n,e,t,s){e&&rn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function k_(n,e,t,s,i,r){cn(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:nl(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=go(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Qn("transaction failed: Data returned ",c,o.path),o.status=0;const l=ci(n.transactionQueueTree_,e),d=Rt(l)||[];d.push(o),ho(l,d);let u;typeof c=="object"&&c!==null&&Ee(c,".priority")?(u=yt(c,".priority"),w(po(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(oi(n.serverSyncTree_,e)||P.EMPTY_NODE).getPriority().val();const h=Jn(n),p=J(c,u),m=co(p,a,h);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=m,o.currentWriteId=di(n);const v=no(n.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);fe(n.eventQueue_,e,v),hi(n,n.transactionQueueTree_)}}function go(n,e,t){return oi(n.serverSyncTree_,e,t)||P.EMPTY_NODE}function hi(n,e=n.transactionQueueTree_){if(e||fi(n,e),Rt(e)){const t=ou(n,e);w(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&C_(n,Yn(e),t)}else Jl(e)&&li(e,t=>{hi(n,t)})}function C_(n,e,t){const s=t.map(l=>l.currentWriteId),i=go(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const d=t[l];w(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=ae(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{cn(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(Ke(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();fi(n,ci(n.transactionQueueTree_,e)),hi(n,n.transactionQueueTree_),fe(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)rn(u[h])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ce("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}Jt(n,e)}},o)}function Jt(n,e){const t=ru(n,e),s=Yn(t),i=ou(n,t);return S_(n,i,s),s}function S_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ae(t,c.path);let d=!1,u;if(w(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,i=i.concat(Ke(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=d_)d=!0,u="maxretry",i=i.concat(Ke(n.serverSyncTree_,c.currentWriteId,!0));else{const h=go(n,c.path,o);c.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){Qn("transaction failed: Data returned ",p,c.path);let m=J(p);typeof p=="object"&&p!=null&&Ee(p,".priority")||(m=m.updatePriority(h.getPriority()));const I=c.currentWriteId,E=Jn(n),_=co(m,h,E);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=_,c.currentWriteId=di(n),o.splice(o.indexOf(I),1),i=i.concat(no(n.serverSyncTree_,c.path,_,c.currentWriteId,c.applyLocally)),i=i.concat(Ke(n.serverSyncTree_,I,!0))}else d=!0,u="nodata",i=i.concat(Ke(n.serverSyncTree_,c.currentWriteId,!0))}fe(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}fi(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)rn(s[a]);hi(n,n.transactionQueueTree_)}function ru(n,e){let t,s=n.transactionQueueTree_;for(t=F(e);t!==null&&Rt(s)===void 0;)s=ci(s,t),e=q(e),t=F(e);return s}function ou(n,e){const t=[];return au(n,e,t),t.sort((s,i)=>s.order-i.order),t}function au(n,e,t){const s=Rt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);li(e,i=>{au(n,i,t)})}function fi(n,e){const t=Rt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ho(e,t.length>0?t:void 0)}li(e,s=>{fi(n,s)})}function _o(n,e){const t=Yn(ru(n,e)),s=ci(n.transactionQueueTree_,e);return Zg(s,i=>{xi(n,i)}),xi(n,s),Xl(s,i=>{xi(n,i)}),t}function xi(n,e){const t=Rt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(w(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ke(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ho(e,void 0):t.length=r+1,fe(n.eventQueue_,Yn(e),i);for(let o=0;o<s.length;o++)rn(s[o])}}/**
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
 */function T_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function R_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ce(`Invalid query segment '${t}' in query '${n}'`)}return e}const La=function(n,e){const t=N_(n),s=t.namespace;t.domain==="firebase.com"&&Fe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Fe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Lp();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ml(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new j(t.pathString)}},N_=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(i=T_(n.substring(d,u)));const h=R_(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const $a="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",A_=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=$a.charAt(t%64),t=Math.floor(t/64);w(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=$a.charAt(e[i]);return w(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class P_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ee(this.snapshot.exportVal())}}class M_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class cu{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class O_{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ve;return y_(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ye("OnDisconnect.remove",this._path);const e=new ve;return xa(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ye("OnDisconnect.set",this._path),Bs("OnDisconnect.set",e,this._path,!1);const t=new ve;return xa(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ye("OnDisconnect.setWithPriority",this._path),Bs("OnDisconnect.setWithPriority",e,this._path,!1),r_("OnDisconnect.setWithPriority",t);const s=new ve;return b_(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Ye("OnDisconnect.update",this._path),eu("OnDisconnect.update",e,this._path);const t=new ve;return w_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class vo{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return U(this._path)?null:Vr(this._path)}get ref(){return new Te(this._repo,this._path)}get _queryIdentifier(){const e=wa(this._queryParams),t=Ur(e);return t==="{}"?"default":t}get _queryObject(){return wa(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof vo))return!1;const t=this._repo===e._repo,s=jr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ym(this._path)}}class Te extends vo{constructor(e,t){super(e,t,new Kr,!1)}get parent(){const e=kl(this._path);return e===null?null:new Te(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new j(e),s=Fn(this.ref,e);return new Xt(this._node.getChild(t),s,Q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Xt(i,Fn(this.ref,s),Q)))}hasChild(e){const t=new j(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $(n,e){return n=oe(n),n._checkNotDeleted("ref"),e!==void 0?Fn(n._root,e):n._root}function Fn(n,e){return n=oe(n),F(n._path)===null?o_("child","path",e):tu("child","path",e),new Te(n._repo,X(n._path,e))}function D_(n){return n=oe(n),new O_(n._repo,n._path)}function lu(n,e){n=oe(n),Ye("push",n._path),Bs("push",e,n._path,!0);const t=iu(n._repo),s=A_(t),i=Fn(n,s),r=Fn(n,s);let o;return e!=null?o=ln(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function _n(n){return Ye("remove",n._path),ln(n,null)}function ln(n,e){n=oe(n),Ye("set",n._path),Bs("set",e,n._path,!1);const t=new ve;return g_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ot(n,e){eu("update",e,n._path);const t=new ve;return __(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function pi(n){n=oe(n);const e=new cu(()=>{}),t=new mi(e);return m_(n._repo,n,t).then(s=>new Xt(s,new Te(n._repo,n._path),n._queryParams.getIndex()))}class mi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new P_("value",this,new Xt(e.snapshotNode,new Te(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new M_(this,e,t):null}matches(e){return e instanceof mi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function x_(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(d,u)=>{pr(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new cu(t,r||void 0),a=new mi(o);return E_(n._repo,n,a),()=>pr(n._repo,n,a)}function un(n,e,t,s){return x_(n,"value",e,t,s)}function gi(n,e,t){pr(n._repo,n,null)}Pg(Te);Lg(Te);/**
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
 */const L_="FIREBASE_DATABASE_EMULATOR_HOST",mr={};let $_=!1;function F_(n,e,t,s){n.repoInfo_=new ml(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function U_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Fe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),se("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=La(r,i),a=o.repoInfo,c;typeof process<"u"&&sa&&(c=sa[L_]),c?(r=`http://${c}?ns=${a.namespace}`,o=La(r,i),a=o.repoInfo):o.repoInfo.secure;const l=new zp(n.name,n.options,e);a_("Invalid Firebase Database URL",o),U(o.path)||Fe("Database URL must point to the root of a Firebase Database (not including a child path).");const d=H_(a,n,l,new qp(n.name,t));return new W_(d,n)}function B_(n,e){const t=mr[e];(!t||t[n.key]!==n)&&Fe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),I_(n),delete t[n.key]}function H_(n,e,t,s){let i=mr[e.name];i||(i={},mr[e.name]=i);let r=i[n.toURLString()];return r&&Fe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new h_(n,$_,t,s),i[n.toURLString()]=r,r}class W_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(f_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Te(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(B_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fe("Cannot call "+e+" on a deleted database.")}}function V_(n=yc(),e){const t=Rr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=rd("database");s&&j_(t,...s)}return t}function j_(n,e,t,s={}){n=oe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Fe("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Fe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new us(us.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:od(s.mockUserToken,n.app.options.projectId);r=new us(o)}F_(i,e,t,r)}/**
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
 */function G_(n){Pp(nn),Gt(new bt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return U_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Xe(ia,ra,n),Xe(ia,ra,"esm2017")}/**
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
 */class q_{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function le(n,e,t){var s;if(n=oe(n),Ye("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new ve,o=(c,l,d)=>{let u=null;c?r.reject(c):(u=new Xt(d,new Te(n._repo,n._path),Q),r.resolve(new q_(l,u)))},a=un(n,()=>{});return k_(n._repo,n._path,e,o,a,i),r.promise}Oe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Oe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};G_();const vn={apiKey:"AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",authDomain:"market-6e66a.firebaseapp.com",databaseURL:"https://market-6e66a-default-rtdb.firebaseio.com",projectId:"market-6e66a",storageBucket:"market-6e66a.firebasestorage.app",messagingSenderId:"402312269082",appId:"1:402312269082:web:cf304afc54057ea162b0a3"},uu=!!vn.apiKey&&!vn.apiKey.startsWith("여기에")&&!!vn.databaseURL&&!vn.databaseURL.startsWith("여기에");let Li=null,yo=null,L=null;try{uu&&(Li=vc(vn),yo=Np(Li),L=V_(Li))}catch(n){console.error("[firebase] 초기화 실패:",n)}const Wt=5e6,Ue=10,gr=4e3,z_=.008,Fa=3e4,K_=4e-5,Ua=.015,Y_=.55,du=15e-5,Q_=.0018,J_=3*60*1e3,X_=["달빛전자","구름소프트","번개모빌리티","바다식품","별빛바이오","한입게임즈","초록에너지","솜사탕유통","무지개항공","도토리금융","은하반도체","포근화학","두근로보틱스","새벽엔터","고래물산","민들레제약"],Z_=["떡상테크","유니콘소프트","미래모빌","첫걸음바이오","샛별에너지","루키게임즈","신화엔터","퀀텀반도체"],Ba=["개미부대","왕개미","큰손","수상한세력","외국인","기관","전설의단타","스캘퍼","장기투자자","물타기달인"];function pt(n,e){return Math.floor(Math.random()*(e-n+1))+n}function Y(n,e){return Math.random()*(e-n)+n}function _e(n,e,t){return Math.max(e,Math.min(t,n))}function ev(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function tv(n,e,t={}){const s=t.type||"stock",i=t.role||null;e=ke(Math.max(Ue,e));let r=1,o=1;return s==="stock"?i==="leader"?(r=Y(.8,1.4),o=Y(2,3)):i==="sub"?(r=Y(.9,1.6),o=Y(1.2,2.2)):i==="related"?(r=Y(.7,2),o=Y(.6,1.8)):(r=Y(.5,2.4),o=Y(.3,1.2)):s==="preferred"?(r=Y(.4,.8),o=Y(.5,1.1)):s==="etf"?(r=Y(.5,.8),o=Y(1.5,2.5)):s==="reit"?(r=Y(.35,.7),o=Y(.6,1.2)):s==="bond"?(r=Y(.2,.45),o=Y(.8,1.4)):s==="spac"?(r=Y(.2,.5),o=Y(.4,.9)):s==="commodity"?(r=Y(.9,1.8),o=Y(1,2)):(s==="inverse"||s==="leverage")&&(r=1,o=Y(1.5,2.5)),{name:n,type:s,role:i||"",sector:t.sector||"",link:t.link||"",price:e,previousPrice:e,basePrice:e,open:e,high:e,low:e,changeRate:0,volume:0,value:0,pressure:0,trend:0,volat:+r.toFixed(2),activ:+o.toFixed(2),heat:0,news:""}}function _i(n){return{preferred:"우선주",etf:"ETF",reit:"리츠",spac:"SPAC",inverse:"인버스",leverage:"레버리지",bond:"채권ETF",commodity:"원자재"}[n]||""}function hu(n){return{leader:"대장주",sub:"부대장주",related:"관련주",normal:"일반주"}[n]||""}function $i(n){return!n||n==="stock"}function vi(n){return Math.round(n*1.3)}function yi(n){return Math.max(Ue,Math.round(n*.7))}function fu(n){return n<2e3?1:n<5e3?5:n<2e4?10:n<5e4?50:n<2e5?100:500}function ke(n){const e=fu(n);return Math.round(n/e)*e}function Fi(n){return _e((n.pressure||0)*K_/(n.activ||1),-Ua,Ua)}async function nv(n,e){const t=e.stocks||{},s=Object.keys(t);if(s.length===0)return;let i=null,r=0,o="";const a=Date.now(),c={},l=[];function d(E){const _=(E.activ||1)*(1+(E.heat||0));let y=0,T=0;const b=_e(.35+_*.2,.25,.97);if(Math.random()<b){const k=pt(1,Math.max(2,Math.round(1+_*3)));for(let M=0;M<k;M++){const N=pt(10,Math.round(60+_*220)),g=.5+_e((E.trend||0)*15,-.3,.3),C=Math.random()<g;y+=C?N:-N,T+=N,l.push({nickname:Ba[pt(0,Ba.length-1)],type:C?"buy":"sell",stockName:E.name,qty:N,price:E.price,time:a})}}return T+=Math.round(pt(300,2500)*_),{botNet:y,botVolume:T}}function u(E,_,y,T,b={}){const k=_.basePrice||_.price,M=k?(_.price-k)/k:0;y+=_e(-M*.01,-.006,.006);let N=ke(_.price*(1+y));N=_e(N,yi(k),vi(k)),N=Math.max(Ue,N);const g=`stocks/${E}/`;if(c[g+"previousPrice"]=_.price,c[g+"price"]=N,c[g+"changeRate"]=+((N-k)/k*100).toFixed(2),c[g+"volume"]=(_.volume||0)+T,c[g+"value"]=(_.value||0)+T*N,N>(_.high||_.price)&&(c[g+"high"]=N),N<(_.low||_.price)&&(c[g+"low"]=N),(_.pressure||0)!==0){const C=(_.pressure||0)*Y_;c[g+"pressure"]=Math.abs(C)<1?0:+C.toFixed(2)}return b.trend!=null&&(c[g+"trend"]=+b.trend.toFixed(5)),b.heat!=null&&(b.heat>.001||(_.heat||0)>.001)&&(c[g+"heat"]=+b.heat.toFixed(3)),b.news!=null&&(c[g+"news"]=b.news),N/_.price-1}function h(E){const _=E.volat||1;let y=(E.heat||0)*.92;Math.random()<.006&&(y=_e(y+Y(.3,1),0,1.6));const T=_*(1+y*.5),b=_e((E.trend||0)*.96+(Math.random()-.5)*8e-4*T,-.0025*(1+y*.5),.0025*(1+y*.5));let k=(Math.random()-.5)*.0016*T+b;return Math.random()<.005&&(k+=(Math.random()-.5)*.012*(1+y*.4)),{own:k,trend:b,heat:y}}const p={},m={},v=[];for(const E of s){const _=t[E];if(!$i(_.type)||_.role!=="leader")continue;const{own:y,trend:T,heat:b}=h(_),{botNet:k,botVolume:M}=d({..._,heat:b});let N=y+Fi(_)+_e(k*2e-4,-.008,.008);E===i&&(N+=r);const g=u(E,_,N,M,{trend:T,heat:b,news:E===i?o:null});p[E]=g,m[_.sector]=g,v.push(g)}for(const E of s){const _=t[E];if(!$i(_.type)||_.role==="leader")continue;const y=_.role==="related"?.7:_.role==="sub"?.45:.2,T=m[_.sector]||0,{own:b,trend:k,heat:M}=h(_),{botNet:N,botVolume:g}=d({..._,heat:M});let C=T*y+b*(1-y*.5);C+=Fi(_)+_e(N*2e-4,-.008,.008),E===i&&(C+=r);const S=u(E,_,C,g,{trend:k,heat:M,news:E===i?o:null});p[E]=S,v.push(S)}const I=v.length?v.reduce((E,_)=>E+_,0)/v.length:0;for(const E of s){const _=t[E];if($i(_.type))continue;const{botNet:y,botVolume:T}=d(_),b=Math.random()-.5;let k=0;switch(_.type){case"etf":k=I+b*.0015;break;case"inverse":k=-I+b*.0015;break;case"leverage":k=2*I+b*.002;break;case"bond":k=-.25*I+2e-4+b*.0012;break;case"reit":k=.2*I+2e-4+b*.004*(_.volat||1);break;case"commodity":k=b*.011*(_.volat||1)+(Math.random()<.01?(Math.random()-.5)*.05:0);break;case"preferred":k=(m[_.sector]||p[_.link]||0)*.85+b*.002;break;case"spac":k=b*.003+(Math.random()<.008?(Math.random()<.7?1:-1)*Y(.06,.2):0);break;default:k=b*.005}k+=Fi(_)+_e(y*3e-4,-.01,.01),u(E,_,k,T,{})}c.marketTick=a,ev(l),c.botFeed=l.slice(0,4),await ot($(L,`rooms/${n}`),c)}function Ui(n){return Math.round(n||0).toLocaleString("ko-KR")}async function sv(n,e){const t=Date.now(),s=e.stocks||{},i=e.ipo;if(i&&i.status==="subscribing"){if(t<i.endsAt)return;const h=i.applies||{},p=Object.values(h).reduce((T,b)=>T+(b||0),0),m=(i.botDemand||0)+p,v=Math.max(1,m/i.totalShares),I=_e(.92+(v-1)*.1+Y(-.1,.15),.9,2.3),E=Math.max(Ue,ke(i.offerPrice*I)),_=tv(i.name,E,{type:"stock",role:"normal",sector:"신규상장"});_.ipo=!0;const y=((E-i.offerPrice)/i.offerPrice*100).toFixed(1);await ot($(L,`rooms/${n}`),{[`stocks/${i.stockId}`]:_,ipo:null,latestNews:{text:`🎉 ${i.name} 상장! 공모가 ${Ui(i.offerPrice)} → 시초가 ${Ui(E)} (${y>=0?"+":""}${y}%) · 경쟁률 ${v.toFixed(1)}:1`,time:t}});for(const[T,b]of Object.entries(h)){const k=b||0,M=Math.floor(k/v),N=i.offerPrice*(k-M);await le($(L,`rooms/${n}/players/${T}`),g=>g&&(N>0&&(g.cash=(g.cash||0)+N),M>0&&(g.holdings=g.holdings||{},g.holdings[i.stockId]=(g.holdings[i.stockId]||0)+M),g))}return}if(i||Object.keys(s).length>=90||Math.random()>=z_)return;const r=Object.values(s).map(h=>h.name),o=[...X_,...Z_].filter(h=>!r.includes(h));if(!o.length)return;const a=o[pt(0,o.length-1)],c=ke(pt(5e3,6e4)),l=pt(5e4,2e5),d=Math.floor(l*Y(.4,9)),u="ipo"+t.toString(36);await ot($(L,`rooms/${n}`),{ipo:{stockId:u,name:a,offerPrice:c,totalShares:l,botDemand:d,status:"subscribing",startedAt:t,endsAt:t+Fa},latestNews:{text:`공모주 청약 시작! '${a}' 공모가 ${Ui(c)}원 · ${Math.round(Fa/1e3)}초 후 마감`,time:t}})}async function iv(n,e,t,s){const i=s.ipo;if(!i||i.status!=="subscribing")throw new Error("청약 가능한 공모주가 없습니다.");if(Date.now()>=i.endsAt)throw new Error("청약이 마감되었습니다.");if(t=Math.floor(t),!t||t<1)throw new Error("청약 수량을 확인하세요.");const r=i.offerPrice*t;if(!(await le($(L,`rooms/${n}/players/${e}/cash`),a=>{if(a==null)return a;if(!(a<r))return a-r})).committed)throw new Error("청약 증거금(현금)이 부족합니다.");await le($(L,`rooms/${n}/ipo/applies/${e}`),a=>(a||0)+t)}function rv(n){if(!n)return 0;const e=Object.values(n.applies||{}).reduce((t,s)=>t+(s||0),0);return((n.botDemand||0)+e)/n.totalShares}async function Hs(n,e,t,s,i,r,o,a){var v;const c=(v=a.stocks)==null?void 0:v[s];if(!c)throw new Error("종목을 선택하세요.");const l=i.side;if(l!=="buy"&&l!=="sell")throw new Error("주문 유형 오류");const d=i.trigger==="above"?"above":"below",u=["gtc","day","ioc"].includes(i.tif)?i.tif:"gtc";if(r=Math.floor(r),!r||r<1)throw new Error("수량을 확인하세요.");if(o=ke(Number(o)),!o||o<Ue)throw new Error("주문 가격을 확인하세요.");const h=Date.now(),p={uid:e,nickname:t,stockId:s,stockName:c.name,side:l,trigger:d,tif:u,label:i.label||"지정가",qty:r,target:o,createdAt:h,expiresAt:u==="day"?h+J_:null},m=lu($(L,`rooms/${n}/orders`)).key;return await ln($(L,`rooms/${n}/orders/${m}`),p),m}async function ov(n,e){await _n($(L,`rooms/${n}/orders/${e}`))}async function av(n,e){var i;const t=e.orders;if(!t)return;const s=Date.now();for(const[r,o]of Object.entries(t)){const a=(i=e.stocks)==null?void 0:i[o.stockId];if(!a){await _n($(L,`rooms/${n}/orders/${r}`));continue}const c=a.price;if((o.trigger||(o.side==="buy"?"below":"above"))==="below"?c<=o.target:c>=o.target){try{o.side==="buy"?await bo(n,o.uid,o.nickname,o.stockId,o.qty,e):await bi(n,o.uid,o.nickname,o.stockId,o.qty,e)}catch(u){console.warn("[order] 예약 체결 실패, 취소:",o,u==null?void 0:u.message)}await _n($(L,`rooms/${n}/orders/${r}`));continue}o.tif==="ioc"?await _n($(L,`rooms/${n}/orders/${r}`)):o.expiresAt&&s>o.expiresAt&&await _n($(L,`rooms/${n}/orders/${r}`))}}function cv(n,e){const t=n.orders||{};return Object.entries(t).filter(([,s])=>s.uid===e).map(([s,i])=>({id:s,...i})).sort((s,i)=>(i.createdAt||0)-(s.createdAt||0))}async function bo(n,e,t,s,i,r){var d;const o=(d=r.stocks)==null?void 0:d[s];if(!o)throw new Error("종목을 선택하세요.");if(i=Math.floor(i),!i||i<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.ceil(a*i*(1+du));if(!(await le($(L,`rooms/${n}/players/${e}`),u=>{if(!u)return u;if((u.cash||0)<c)return;u.cash=(u.cash||0)-c,u.holdings=u.holdings||{};const h=u.holdings[s]||0;u.avgCost=u.avgCost||{};const p=u.avgCost[s]||0;return u.avgCost[s]=Math.round((h*p+i*a)/(h+i)),u.holdings[s]=h+i,u})).committed)throw new Error("현금(수수료 포함)이 부족합니다.");await mu(n,s,i,+i,{type:"buy",nickname:t,stockName:o.name,qty:i,price:a,time:Date.now()})}async function bi(n,e,t,s,i,r){var d;const o=(d=r.stocks)==null?void 0:d[s];if(!o)throw new Error("종목을 선택하세요.");if(i=Math.floor(i),!i||i<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.floor(a*i*(1-du-Q_));if(!(await le($(L,`rooms/${n}/players/${e}`),u=>{var p;if(!u)return u;const h=((p=u.holdings)==null?void 0:p[s])||0;if(!(h<i))return u.cash=(u.cash||0)+c,u.holdings[s]=h-i,u.holdings[s]===0&&(delete u.holdings[s],u.avgCost&&delete u.avgCost[s]),u})).committed)throw new Error("보유 수량이 부족합니다.");await mu(n,s,i,-i,{type:"sell",nickname:t,stockName:o.name,qty:i,price:a,time:Date.now()})}async function pu(n,e,t,s,i){var o,a,c;const r=((c=(a=(o=i.players)==null?void 0:o[e])==null?void 0:a.holdings)==null?void 0:c[s])||0;if(r<1)throw new Error("보유 수량이 없습니다.");return bi(n,e,t,s,r,i)}async function mu(n,e,t,s,i){await Promise.all([le($(L,`rooms/${n}/stocks/${e}/volume`),r=>(r||0)+t),le($(L,`rooms/${n}/stocks/${e}/value`),r=>(r||0)+t*i.price),le($(L,`rooms/${n}/stocks/${e}/pressure`),r=>(r||0)+s),lu($(L,`rooms/${n}/logs`),i)])}function wo(n,e){var i;let t=(n==null?void 0:n.cash)||0;const s=(n==null?void 0:n.holdings)||{};for(const[r,o]of Object.entries(s)){const a=((i=e==null?void 0:e[r])==null?void 0:i.price)||0;t+=a*o}return t}function gu(n,e){return Object.entries(n||{}).map(([t,s])=>({uid:t,nickname:s.nickname&&String(s.nickname).trim()||"플레이어-"+String(t).slice(-4),connected:s.connected!==!1,total:wo(s,e)})).sort((t,s)=>s.total-t.total)}const lv=1,Ws=[{key:"candles1m",win:6e4,cap:240},{key:"candles5m",win:3e5,cap:288},{key:"candles15m",win:9e5,cap:192},{key:"candles1h",win:36e5,cap:168}],_u=2*6e4,uv=6e4,dv=4500;function _r(n,e){return Math.floor(n/e)*e}function ds(n,e,t){return Math.max(e,Math.min(t,n))}function Ha(){let n=0,e=0;for(;n===0;)n=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e)}function Wa(n,e){const t=n&&n[e]||null;return t?Object.values(t).filter(s=>s&&typeof s.t=="number").sort((s,i)=>s.t-i.t):[]}function hv(n,e,t,s){const i=(t-e)/s,r=Math.max(1,i/4e3),o=n.volat||1,a=n.activ||1,c=n.basePrice||n.price||Ue;let l=n.price||c,d=n.trend||0,u=n.heat||0;const h=!n.type||n.type==="stock",p=.0011*o*(h?1:.7),m=5,v=[];for(let I=0;I<s;I++){const E=e+i*I,_=l,y=r/m;let T=_,b=_,k=_;for(let S=0;S<m;S++){d=ds(d*Math.pow(.99,y)+Ha()*18e-5*o*Math.sqrt(y),-.0016,.0016),Math.random()<.005*y&&(u=ds(u+(.3+Math.random()*.7),0,1.6)),u*=Math.pow(.94,y);const H=p*(1+u*.5);let A=d*y+Ha()*H*Math.sqrt(y);Math.random()<.0025*y&&(A+=(Math.random()<.5?1:-1)*(.006+Math.random()*.018)*(h?1:.6)),k=k*(1+A),k=c+(k-c)*Math.exp(-.01*y),k=ds(k,yi(c),vi(c)),k=Math.max(Ue,k),T=Math.max(T,k),b=Math.min(b,k)}const M=ke(k),N=_?Math.abs((M-_)/_):0,g=(400+Math.random()*1800)*a*(1+u*.8),C=Math.round(g*r*(1+N*8));v.push({t:E,o:ke(_),h:ke(T),l:ke(b),c:M,v:C}),l=M}return{candles:v,finalPrice:l,finalBase:c}}function fv(n){const e={};for(const t of Ws)e[t.key]={};for(const t of n)for(const s of Ws){const i=_r(t.t,s.win),r=e[s.key],o=r[i];o?(o.h=Math.max(o.h,t.h),o.l=Math.min(o.l,t.l),o.c=t.c,o.v+=t.v):r[i]={t:i,o:t.o,h:t.h,l:t.l,c:t.c,v:t.v}}return e}async function pv(n,e){const t=Date.now();return(await le($(L,`rooms/${n}/market/catchupLock`),i=>{if(!(i&&i.expiresAt&&i.expiresAt>t))return{by:e||"anon",at:t,expiresAt:t+uv}})).committed}async function mv(n){try{await ot($(L,`rooms/${n}/market`),{catchupLock:null})}catch{}}function gv(n){if(!n||n.status!=="playing")return!1;const e=n.market&&n.market.lastTickAt||n.marketTick||0;return e?Date.now()-e>=_u:!1}async function _v(n,e,t,s={}){if(!e||!e.stocks)return{applied:!1,reason:"no-stocks"};if(e.status!=="playing")return{applied:!1,reason:"not-playing"};const i=Date.now(),r=e.market&&e.market.lastTickAt||e.marketTick||0,o=i-r;if(!s.force&&o<_u)return{applied:!1,reason:"fresh",elapsed:o};if(!await pv(n,t)&&!s.force)return{applied:!1,reason:"locked"};try{let c=e.stocks||{};try{const v=await pi($(L,`rooms/${n}/stocks`));v.exists()&&(c=v.val())}catch{}const l=Object.keys(c);if(!l.length)return{applied:!1,reason:"no-stocks"};const d=ds(Math.round(dv/l.length),30,480),u=Math.max(1,Math.round(o/6e4)),h=Math.min(d,u,480),p={};let m=0;for(const v of l){const I=c[v];if(!I||typeof I.price!="number")continue;const E=hv(I,r,i,h),_=fv(E.candles),y=`stocks/${v}/`,T=I.history||{};for(const N of Ws){const C={...T[N.key]||{}};for(const[A,z]of Object.entries(_[N.key])){const Z=C[A];C[A]=Z?{t:z.t,o:Z.o,h:Math.max(Z.h,z.h),l:Math.min(Z.l,z.l),c:z.c,v:(Z.v||0)+z.v}:z}const S=Object.keys(C).map(Number).sort((A,z)=>A-z),H=S.length-N.cap;if(H>0)for(let A=0;A<H;A++)p[y+`history/${N.key}/${S[A]}`]=null;for(const[A,z]of Object.entries(_[N.key]))Number(A)<S[Math.max(0,H)]||(p[y+`history/${N.key}/${A}`]=C[A],m++)}const b=E.finalBase,k=Math.max(Ue,ke(E.finalPrice)),M=E.candles.reduce((N,g)=>N+(g.v||0),0);p[y+"previousPrice"]=I.price,p[y+"price"]=k,p[y+"currentPrice"]=k,p[y+"changeRate"]=+((k-b)/b*100).toFixed(2),p[y+"volume"]=(I.volume||0)+M,p[y+"value"]=(I.value||0)+M*k,k>(I.high||I.price)&&(p[y+"high"]=k),k<(I.low||I.price)&&(p[y+"low"]=k),I.heat&&(p[y+"heat"]=0),I.pressure&&(p[y+"pressure"]=0)}return p["market/tickMs"]=4e3,p["market/lastTickAt"]=i,p["market/lastHistoryAt"]=i,p["market/lastCatchupAt"]=i,p["market/catchupVersion"]=lv,p["market/catchupBy"]=t||"anon",p["market/catchupLock"]=null,p.marketTick=i,await ot($(L,`rooms/${n}`),p),{applied:!0,elapsed:o,numSteps:h,candlesWritten:m,stocks:l.length}}catch(c){return await mv(n),console.error("[catchup] 실패:",c),{applied:!1,reason:"error",error:c==null?void 0:c.message}}}function vv(){return{cur:{},lastBucket:0,seeded:!1}}async function yv(n,e,t){const s=e.stocks||{},i=Date.now(),r=_r(i,6e4);t.lastBucket||(t.lastBucket=r);for(const[d,u]of Object.entries(s)){if(!u||typeof u.price!="number")continue;let h=t.cur[d];(!h||h.t!==r)&&(h={t:r,o:u.price,h:u.price,l:u.price,c:u.price,v:0,_lastVol:u.volume||0},t.cur[d]=h),h.c=u.price,h.h=Math.max(h.h,u.price),h.l=Math.min(h.l,u.price);const p=Math.max(0,(u.volume||0)-(h._lastVol||0));h.v+=p,h._lastVol=u.volume||0}if(r===t.lastBucket)return;const o=t.lastBucket;let a=s;try{const d=await pi($(L,`rooms/${n}/stocks`));d.exists()&&(a=d.val())}catch{}const c={};let l=!1;for(const d of Object.keys(s)){const u=t.cur[d];if(!u)continue;const h={o:u.o,h:u.h,l:u.l,c:u.c,v:u.v},p=`stocks/${d}/`,m=a[d]&&a[d].history||{};for(const v of Ws){const I=_r(o,v.win),E=m[v.key]&&m[v.key][I]||null,_=E?{t:I,o:E.o,h:Math.max(E.h,h.h),l:Math.min(E.l,h.l),c:h.c,v:(E.v||0)+h.v}:{t:I,o:h.o,h:h.h,l:h.l,c:h.c,v:h.v};c[p+`history/${v.key}/${I}`]=_;const y=m[v.key]?Object.keys(m[v.key]).map(Number).sort((T,b)=>T-b):[];y.length>v.cap&&y[0]!==I&&(c[p+`history/${v.key}/${y[0]}`]=null)}l=!0}if(t.lastBucket=r,!!l){c["market/lastTickAt"]=i,c["market/lastHistoryAt"]=i,c["market/tickMs"]=4e3;try{await ot($(L,`rooms/${n}`),c)}catch(d){console.warn("[history] 라이브 캔들 저장 실패:",d==null?void 0:d.message)}}}function vu(n,e){if(n&&String(n).startsWith("ipo"))return'<span class="tag tag-new">NEW</span>';const t=_i(e.type);return t?`<span class="tag ${e.type==="inverse"?"tag-inv":e.type==="leverage"?"tag-lev":"tag-etf"}">${t}</span>`:e.role==="leader"?'<span class="tag tag-leader">대장주</span>':e.role==="sub"?'<span class="tag tag-sub">부대장</span>':""}function R(n){return document.getElementById(n)}function Ot(n){return Math.round(n??0).toLocaleString("ko-KR")+"원"}function D(n){return Math.round(n??0).toLocaleString("ko-KR")}function Ct(n){return n=n||0,n>=1e12?(n/1e12).toFixed(2)+"조":n>=1e8?(n/1e8).toFixed(1)+"억":n>=1e4?Math.round(n/1e4).toLocaleString("ko-KR")+"만":D(n)}function bv(n){return D(n)+"주"}const wv=["screen-auth","screen-wait","screen-game","screen-result"];function Eo(n){wv.forEach(e=>{const t=R(e);t&&t.classList.toggle("hidden",e!==n)})}function Ev(n,e,t=!0){const s=R(n);s&&(s.textContent="",s.classList.toggle("error",t))}function yu(n){R("fbError").classList.remove("hidden"),n&&(R("fbErrorMsg").textContent=n)}const Iv=3,kv=120,Va=60;let Re={},Sn=[],We={},Dt=0,Un=null,vr={};function bu(){Re={},Sn=[],We={},Dt=0,Un=null,vr={},qs="";for(const n in Gs)delete Gs[n]}function Cv(){if(Un)try{localStorage.setItem(Un,JSON.stringify({candles:Re,lastVol:We,tick:Dt}))}catch{}}function Sv(n,e){const t=n.stocks||{},s=n.marketTick||0,i=`mb_candles_${e||"x"}_${n.startedAt||0}`;if(i!==Un){Un=i,Re={},We={},Dt=0;try{const r=JSON.parse(localStorage.getItem(i)||"null");r&&r.candles&&(Re=r.candles,We=r.lastVol||{},Dt=r.tick||0)}catch{}}for(const[r,o]of Object.entries(t))Re[r]||(Re[r]=[{t:Date.now(),o:o.price,h:o.price,l:o.price,c:o.price,v:0,_n:0}]),We[r]==null&&(We[r]=o.volume||0);if(s!==Dt){Dt=s;for(const[o,a]of Object.entries(t)){const c=Re[o]||(Re[o]=[]);let l=c[c.length-1];(!l||l._n>=Iv)&&(l={t:Date.now(),o:a.price,h:a.price,l:a.price,c:a.price,v:0,_n:0},c.push(l)),l.c=a.price,l.h=Math.max(l.h,a.price),l.l=Math.min(l.l,a.price);const d=Math.max(0,(a.volume||0)-(We[o]||0));l.v+=d,We[o]=a.volume||0,l._n++,c.length>kv&&c.shift()}const r=n.botFeed?Object.values(n.botFeed):[];for(const o of r)Sn.unshift({...o,bot:!0});Sn.length>Va&&(Sn.length=Va),Av(t),ay(t),Cv()}}let xt=new Set(JSON.parse(localStorage.getItem("mb_watch")||"[]")),_t=JSON.parse(localStorage.getItem("mb_alerts")||"{}");function Tv(n){xt.has(n)?xt.delete(n):xt.add(n),localStorage.setItem("mb_watch",JSON.stringify([...xt]))}function Rv(n,e){e>0?_t[n]=e:delete _t[n],localStorage.setItem("mb_alerts",JSON.stringify(_t))}function Nv(n){return _t[n]||0}function Av(n){for(const e of Object.values(n)){const t=_t[e.name],s=vr[e.name];if(t&&s!=null){const i=s<t&&e.price>=t,r=s>t&&e.price<=t;if(i||r){O(`🔔 ${e.name} 알림가 ${D(t)}원 ${i?"돌파":"하향"}!`,i?"up":"down"),delete _t[e.name],localStorage.setItem("mb_alerts",JSON.stringify(_t));try{window.Notification&&Notification.permission==="granted"&&new Notification("STONK Battle",{body:`${e.name} ${D(t)}원 도달`})}catch{}}}vr[e.name]=e.price}}function Pv(n){const{roomCode:e,roomData:t,uid:s,selectedStockId:i}=n,r=R("gameRoomCode");r&&(r.textContent=e),Sv(t,e),Mv(t,s),Jv(t,s),ey(t,s),ny(t),Dv(t,s),wu(n),ty(t);const o=Fv();o==="home"?(cy(t),Hv(t)):o==="detail"?(Wv(t,i),Yv(t,i),Ov(t,s)):o==="feed"?uy(t):o==="screener"?dy(t):o==="account"&&hy(t,s)}function Mv(n,e){var o;const t=(o=n.players)==null?void 0:o[e],s=t&&t.nickname||"나",i=R("navNick");i&&(i.textContent=s);const r=R("navAvatar");r&&(r.textContent=s.slice(0,1).toUpperCase())}function wu(n){const e=n.roomData,t=R("marketStatusChip"),s=R("msDot"),i=R("msLabel"),r=R("marketStatusPanel");if(!e||!t||!s||!i||!r)return;const o=e.market||{},a=o.lastTickAt||e.marketTick||0,c=o.lastCatchupAt||0,l=a?Math.max(0,Math.round((Date.now()-a)/6e4)):null,d=e.hostId===n.uid;let u=0,h=0,p=0,m=0;for(const y of Object.values(e.stocks||{})){const T=y.history;T&&(T.candles1m&&(u+=Object.keys(T.candles1m).length),T.candles5m&&(h+=Object.keys(T.candles5m).length),T.candles15m&&(p+=Object.keys(T.candles15m).length),T.candles1h&&(m+=Object.keys(T.candles1h).length))}const v=u+h+p+m>0,I=l!=null&&l<2;if(s.className="status-dot "+(I?"ok":l==null?"muted":"warn"),i.textContent=I?"시장 최신":l==null?"대기":`${l}분 전`,r.classList.contains("hidden"))return;const E=y=>y?`${vt(new Date(y).getHours())}:${vt(new Date(y).getMinutes())}`:"-",_=(y,T,b)=>`<div class="ms-row"><span>${y}</span><b class="${b||""}">${T}</b></div>`;r.innerHTML=_("방 코드",V(n.roomCode||"-"))+_("연결","연결됨","up")+_("권한",d?"보정 주체 (방장)":"읽기 전용",d?"":"muted")+_("마지막 tick",E(a))+_("마지막 보정",c?E(c):"없음")+_("시장",I?"최신 상태":l==null?"tick 기록 없음":`${l}분 전 데이터 · ${d?"재접속 시 자동 보정":"방장/관리자가 보정"}`,I?"up":"down")+_("캔들",v?`1m ${u} · 5m ${h} · 15m ${p} · 1h ${m}`:"아직 없음")}function Ov(n,e){const t=R("orderList");if(!t)return;const s=cv(n,e);if(!s.length){t.innerHTML="";return}t.innerHTML=s.map(i=>{const r=i.side==="buy"?"up":"down",o=i.tif==="day"?" · 당일":i.tif==="ioc"?" · IOC":"",a=i.label||(i.side==="buy"?"매수":"매도");return`<li class="order-item">
        <span class="order-badge ${r}">${V(a)}</span>
        <span class="order-name">${V(i.stockName)}</span>
        <span class="order-detail">${D(i.target)}원 · ${D(i.qty)}주${o}</span>
        <button class="order-cancel" data-cancel="${i.id}" title="취소">✕</button>
      </li>`}).join("")}let Vs=0;function Dv(n,e){var r;const t=R("ipoPanel");if(!t)return;const s=n.ipo;if(!s||s.status!=="subscribing"){t.classList.add("hidden"),Vs=0;return}Vs=s.endsAt,t.classList.remove("hidden"),R("ipoName").textContent=s.name,R("ipoPrice").textContent=D(s.offerPrice)+"원",R("ipoShares").textContent=D(s.totalShares)+"주",R("ipoRatio").textContent=rv(s).toFixed(1)+" : 1";const i=((r=s.applies)==null?void 0:r[e])||0;R("ipoMyApply").textContent=i?`내 청약 ${D(i)}주 (증거금 ${Ct(i*s.offerPrice)}원)`:"아직 청약하지 않았어요",Eu()}function Eu(n){const e=R("ipoCountdown");if(!e||!Vs)return;const t=Math.max(0,Math.ceil((Vs-Date.now())/1e3));e.textContent=t+"초",e.classList.toggle("urgent",t<=5)}function ct(n){return n>0?"up":n<0?"down":"flat"}function Xn(n){return n>0?"▲":n<0?"▼":"−"}let js="";function Bi(n){js=(n||"").trim().toLowerCase()}let Iu="all",ku="value",yr="rising",hs="asset";function xv(n){Iu=n||"all"}function ja(n){ku=n||"value"}function Lv(n){yr=n||"rising"}function $v(n){hs=n||"asset"}function Fv(){var n;return((n=document.getElementById("screen-game"))==null?void 0:n.dataset.tab)||"home"}function Uv(n,e){return js?[e.name,n,e.ticker,e.sector,e.type,e.role,_i(e.type),hu(e.role),String(n).startsWith("ipo")?"신규상장 new":""].join(" ").toLowerCase().includes(js):!0}function Bv(n){let e=0;const t=String(n);for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return 5e6+e%60*8e6}function Cu(n){let e=0;const t=String(n||"");for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return`hsl(${e%360} 60% 47%)`}function Su(n,e){const t={value:(s,i)=>(i[1].value||0)-(s[1].value||0),volume:(s,i)=>(i[1].volume||0)-(s[1].volume||0),up:(s,i)=>(i[1].changeRate||0)-(s[1].changeRate||0),down:(s,i)=>(s[1].changeRate||0)-(i[1].changeRate||0)};return n.sort(t[e]||t.value)}function Tu(n,e,t){const s=t.changeRate>0?"+":"",i=ct(t.changeRate),r=xt.has(t.name),o=t.price*Bv(e),a=t.sector||_i(t.type)||"종목";return`<li class="rank-item" data-id="${e}">
    <span class="rk-rank"><button class="star-btn ${r?"on":""}" data-star="${V(t.name)}" title="관심">${r?"★":"☆"}</button>${n}</span>
    <span class="rk-name"><span class="stk-ico" style="background:${Cu(t.name)}">${V((t.name||"?").slice(0,1))}</span><span class="stk-meta"><span class="stk-nm">${V(t.name)} ${vu(e,t)}</span><span class="stk-sub">${V(a)}</span></span></span>
    <span class="rk-price ${i}">${D(t.price)}</span>
    <span class="rk-rate ${i}">${Xn(t.changeRate)} ${s}${(t.changeRate??0).toFixed(2)}%</span>
    <span class="rk-value">${Ct(t.value)}</span>
    <span class="rk-cap">${Ct(o)}</span>
    <span class="rk-sector"><span class="sec-pill">${V(t.sector||"-")}</span></span>
  </li>`}function Hv(n){const e=R("stockList");if(!e)return;const t=e.scrollTop,s=n.stocks||{};let i=Object.entries(s).filter(([r,o])=>Uv(r,o));if(Iu==="watch"&&(i=i.filter(([,r])=>xt.has(r.name))),i=Su(i,ku),!i.length){e.innerHTML=`<li class="stock-empty">${js?"검색 결과 없음":"종목이 없습니다"}</li>`;return}e.innerHTML=i.map(([r,o],a)=>Tu(a+1,r,o)).join(""),e.scrollTop=t}function Wv(n,e){const s=(n.stocks||{})[e];if(!s){R("chartStockName").textContent="-",R("selStockPrice").textContent="-",R("selStockChange").textContent="";return}const i=s.basePrice||s.price,r=s.price-i,o=ct(s.changeRate),a=s.changeRate>0?"+":"";R("chartStockName").textContent=s.name;const c=R("detailTag");if(c){const h=_i(s.type),p=hu(s.role);let m,v="virtual-tag";h?(m=h,v+=s.type==="inverse"?" tag-inv":s.type==="leverage"?" tag-lev":" tag-etf"):String(e).startsWith("ipo")?(m="신규상장",v+=" tag-new"):s.sector?(m=p?`${s.sector}·${p}`:s.sector,s.role==="leader"&&(v+=" tag-leader")):m="가상",c.textContent=m,c.className=v}const l=R("selStockPrice"),d=Gs[e];if(l.textContent=D(s.price),l.className="big-price "+o,d!=null&&s.price!==d){const h=s.price>d?"flash-up":"flash-down";l.classList.remove("flash-up","flash-down"),l.offsetWidth,l.classList.add(h)}Gs[e]=s.price,R("selStockChange").className="change "+o,R("selStockChange").textContent=`${Xn(s.changeRate)} ${a}${D(r)} (${a}${(s.changeRate??0).toFixed(2)}%)`,Hi("ohlcOpen",s.open,i),Hi("ohlcHigh",s.high,i),Hi("ohlcLow",s.low,i),R("ohlcUpper").textContent=D(vi(i)),R("ohlcLower").textContent=D(yi(i)),R("ohlcVol").textContent=bv(s.volume),R("ohlcValue").textContent=Ct(s.value)+"원";const u=R("selStockNews");u.textContent=s.news?`📰 ${s.news}`:"",u.className="news-line"+(s.news?" "+o:" muted"),Nu(n,e,i,s)}const Gs={};function Hi(n,e,t){const s=R(n);s.textContent=D(e),s.className="ohlc-v "+ct((e||0)-t)}function mt(n){return getComputedStyle(document.body).getPropertyValue(n).trim()||"#000"}const br={tick:{win:30*6e4,tiers:["candles1m","candles5m"],count:16},"1d":{win:864e5,tiers:["candles5m","candles1m"],count:288},"3d":{win:2592e5,tiers:["candles1h","candles15m","candles5m"],count:216},"1w":{win:6048e5,tiers:["candles1h","candles15m"],count:224},"1m":{win:2592e6,tiers:["candles1h","candles15m","candles5m","candles1m"],count:360},all:{win:1/0,tiers:["candles1h","candles15m","candles5m","candles1m"],count:500}},Vv={tick:"1틱","1d":"1일","3d":"3일","1w":"1주","1m":"1달",all:"전체"};function Ga(n){if(n<=0)return"0분";const e=Math.round(n/6e4);if(e<60)return e+"분";const t=Math.floor(e/60),s=e%60;if(t<24)return s?`${t}시간 ${s}분`:`${t}시간`;const i=Math.floor(t/24),r=t%24;return r?`${i}일 ${r}시간`:`${i}일`}function jv(n,e){const t=Vv[n]||n;if(!e||!e.length)return t+" · 데이터 없음";if(n==="tick")return"1틱 · 최근 흐름";const s=e[0].t,i=e[e.length-1].t;if(!(s>1e11)||!(i>1e11))return t+" · 최근 흐름";const r=i-s,o=(br[n]||{}).win;return o&&o!==1/0&&r<o*.9?`${t} · 아직 ${Ga(r)} 데이터만 있음`:`${t} · 누적 ${Ga(r)} 데이터`}function vt(n){return(n<10?"0":"")+n}function Gv(n,e){if(!(n>1e11))return"";const t=new Date(n),s=vt(t.getHours())+":"+vt(t.getMinutes()),i=t.getMonth()+1+"/"+t.getDate();return e==="tick"||e==="1d"?s:e==="3d"||e==="1w"?i+" "+s:i}function qv(n){if(!(n>1e11))return"";const e=new Date(n);return e.getMonth()+1+"/"+vt(e.getDate())+" "+vt(e.getHours())+":"+vt(e.getMinutes())}let Tn="1d",fs=-1,re=null,ht=null,qa=!1,qs="";function za(n,e){if(n.length&&e.price!=null&&n[n.length-1].c!==e.price){const t=n[n.length-1],s=t.t>1e11?t.t+1e3:t.t+1;n.push({t:s,o:t.c,h:Math.max(t.c,e.price),l:Math.min(t.c,e.price),c:e.price,v:0,_live:!0})}return n}function Ru(n,e,t){const s=br[t]||br["1d"],i=n.history||null,r=Re[e]||[],o=Date.now(),a=s.win===1/0?-1/0:o-s.win;if(t==="tick"){let l=r.slice(-12).map((d,u)=>({t:d.t||o-(12-u)*6e3,o:d.o,h:d.h,l:d.l,c:d.c,v:d.v||0}));if(l.length<2&&i){const d=Wa(i,"candles1m");d.length&&(l=d.slice(-s.count).map(u=>({...u})))}return za(l,n)}let c=[];if(i)for(const l of s.tiers){let d=Wa(i,l);if(d.length){if(d=d.filter(u=>u.t>=a),d.length>=2){c=d.map(u=>({...u}));break}!c.length&&d.length&&(c=d.map(u=>({...u})))}}return!c.length&&r.length&&(c=r.map((l,d)=>({t:l.t||o-(r.length-d)*6e3,o:l.o,h:l.h,l:l.l,c:l.c,v:l.v||0})).filter(l=>l.t>=a)),c=za(c,n),c.length>s.count&&(c=c.slice(c.length-s.count)),c}function Nu(n,e,t,s){ht={room:n,id:e,base:t};const i=Ru(s,e,Tn),r=i.length?i[i.length-1]:null,o=`${e}|${Tn}|${i.length}|${r?r.c+":"+r.v:""}|${t}`;if(o===qs){Ka();return}qs=o,fs=-1,Au(),wr(R("priceChart"),i,t,-1);const a=R("chartRangeNote");a&&(a.textContent=jv(Tn,i)),Ka()}function Ka(){if(qa)return;qa=!0;const n=R("chartPeriods");n&&n.addEventListener("click",t=>{var i;const s=t.target.closest(".cp-btn");if(s&&(Tn=s.dataset.period,n.querySelectorAll(".cp-btn").forEach(r=>r.classList.toggle("is-active",r===s)),ht)){const r=(i=ht.room.stocks)==null?void 0:i[ht.id];r&&Nu(ht.room,ht.id,ht.base,r)}});const e=R("priceChart");if(e){const t=i=>{if(!re)return;const r=e.getBoundingClientRect(),o=(i.touches?i.touches[0].clientX:i.clientX)-r.left,a=Math.max(0,Math.min(re.candles.length-1,Math.floor(o/re.cw)));a!==fs&&(fs=a,wr(e,re.candles,re.base,a),zv(a))},s=()=>{fs=-1,re&&wr(e,re.candles,re.base,-1),Au()};e.addEventListener("mousemove",t),e.addEventListener("mouseleave",s),e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchmove",t,{passive:!0}),e.addEventListener("touchend",s)}}function zv(n){const e=R("chartTip");if(!e||!re)return;const t=re.candles[n];if(!t)return;const s=t.o?(t.c-t.o)/t.o*100:0,i=s>0?"up":s<0?"down":"flat",r=qv(t.t)||`구간 ${n+1}`;e.innerHTML=`
    <div class="tip-when">${V(r)}</div>
    <div class="tip-row"><span>시작</span><b>${D(t.o)}</b></div>
    <div class="tip-row"><span>마지막</span><b>${D(t.c)}</b></div>
    <div class="tip-row"><span>최고</span><b class="up">${D(t.h)}</b></div>
    <div class="tip-row"><span>최저</span><b class="down">${D(t.l)}</b></div>
    <div class="tip-row"><span>거래량</span><b>${D(t.v)}</b></div>
    <div class="tip-row"><span>등락률</span><b class="${i}">${s>=0?"+":""}${s.toFixed(2)}%</b></div>`,e.classList.remove("hidden");const o=n*re.cw+re.cw/2,a=o>re.plotW*.6?"left":"right";e.style.left=a==="right"?`${o+10}px`:"",e.style.right=a==="left"?`${re.cssW-o+10}px`:"",e.style.top="8px"}function Au(){const n=R("chartTip");n&&n.classList.add("hidden")}function wr(n,e,t,s){if(!n)return;const i=window.devicePixelRatio||1,r=n.clientWidth||600,o=n.clientHeight||260;n.width=Math.round(r*i),n.height=Math.round(o*i);const a=n.getContext("2d");if(a.setTransform(i,0,0,i,0,0),a.clearRect(0,0,r,o),!e.length){re=null;return}const c=56,l=r-c,d=o*.18,u=o*.06,h=o-d-u;let p=-1/0,m=1/0,v=0;for(const S of e)p=Math.max(p,S.h),m=Math.min(m,S.l),v=Math.max(v,S.v||0);p===m&&(p+=1,m-=1);const I=(p-m)*.14;p+=I,m-=I;const E=mt("--up"),_=mt("--down"),y="rgba(255,255,255,0.07)",T=mt("--muted"),b=S=>h*(1-(S-m)/(p-m)),k=Math.max(e.length,14),M=l/k,N=Math.max(2.5,Math.min(14,M*.64));re={cw:M,plotW:l,priceH:h,volH:d,cssW:r,cssH:o,candles:e,base:t,lo:m,hi:p},a.font="11px Pretendard, sans-serif",a.textBaseline="middle";const g=4;for(let S=0;S<=g;S++){const H=h/g*S,A=p-(p-m)/g*S;a.strokeStyle=y,a.lineWidth=1,a.beginPath(),a.moveTo(0,Math.round(H)+.5),a.lineTo(l,Math.round(H)+.5),a.stroke(),a.fillStyle=T,a.textAlign="left",a.fillText(D(A),l+6,Math.min(h-6,Math.max(8,H)))}if(s>=0&&s<e.length){const S=s*M+M/2;a.strokeStyle="rgba(120,140,180,0.55)",a.lineWidth=1,a.setLineDash([3,3]),a.beginPath(),a.moveTo(Math.round(S)+.5,0),a.lineTo(Math.round(S)+.5,o),a.stroke(),a.setLineDash([])}e.forEach((S,H)=>{const A=H*M+M/2,Z=S.c>=S.o?E:_;a.strokeStyle=Z,a.fillStyle=Z,a.lineWidth=1,a.beginPath(),a.moveTo(Math.round(A)+.5,b(S.h)),a.lineTo(Math.round(A)+.5,b(S.l)),a.stroke();const pe=b(S.o),ge=b(S.c),Nt=Math.min(pe,ge),lt=Math.max(1.5,Math.abs(ge-pe));if(a.fillRect(A-N/2,Nt,N,lt),v>0){const dn=(d-4)*((S.v||0)/v);a.globalAlpha=.4,a.fillRect(A-N/2,o-dn,N,dn),a.globalAlpha=1}});const C=e[e.length-1].c;if(C<=p&&C>=m){const S=b(C),A=C>=(t||C)?E:_;a.strokeStyle=A,a.lineWidth=1,a.setLineDash([4,3]),a.beginPath(),a.moveTo(0,Math.round(S)+.5),a.lineTo(l,Math.round(S)+.5),a.stroke(),a.setLineDash([]);const z=D(C);a.font="bold 11px Pretendard, sans-serif";const Z=a.measureText(z).width,pe=Math.min(h-9,Math.max(9,S));a.fillStyle=A,a.beginPath();const ge=l+2,Nt=Math.min(c-4,Z+10),lt=17;Kv(a,ge,pe-lt/2,Nt,lt,4),a.fill(),a.fillStyle="#fff",a.textAlign="left",a.fillText(z,ge+5,pe)}if(e.length>=2){a.font="10px Pretendard, sans-serif",a.fillStyle=T;const S=[0,Math.floor((e.length-1)/2),e.length-1],H={};S.forEach(A=>{if(H[A])return;H[A]=1;const z=Gv(e[A].t,Tn);if(!z)return;a.textAlign=A===0?"left":A===e.length-1?"right":"center";const Z=A===0?2:A===e.length-1?l-2:A*M+M/2;a.fillText(z,Z,o-2)})}}function Kv(n,e,t,s,i,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+s,t,e+s,t+i,r),n.arcTo(e+s,t+i,e,t+i,r),n.arcTo(e,t+i,e,t,r),n.arcTo(e,t,e+s,t,r),n.closePath()}function Io(){qs="";const n=R("priceChart");if(n){const e=n.getContext("2d");e&&e.clearRect(0,0,n.width,n.height)}}function Yv(n,e){var l;const t=R("orderbook");if(!t)return;const s=(l=n.stocks)==null?void 0:l[e];if(!s){t.innerHTML="";return}const i=fu(s.price),r=s.basePrice||s.price,o=5e4,a=()=>Math.floor((Math.random()*.9+.1)*12e3),c=[];for(let d=5;d>=1;d--){const u=Ya(s.price+d*i,r);c.push(Qa(u,a(),"ask",o,r))}c.push(`<div class="ob-current ${ct(s.changeRate)}">${D(s.price)}</div>`);for(let d=1;d<=5;d++){const u=Ya(s.price-d*i,r);c.push(Qa(u,a(),"bid",o,r))}t.innerHTML=c.join("")}function Ya(n,e){return Math.max(yi(e),Math.min(vi(e),Math.max(Ue,n)))}function Qa(n,e,t,s,i){const r=ct(n-i),o=Math.min(100,e/s*100);return t==="ask"?`<div class="ob-row ask">
      <span class="ob-qty"><span class="ob-bar" style="width:${o}%"></span><b>${D(e)}</b></span>
      <span class="ob-price ${r}">${D(n)}</span>
      <span></span>
    </div>`:`<div class="ob-row bid">
    <span></span>
    <span class="ob-price ${r}">${D(n)}</span>
    <span class="ob-qty"><b>${D(e)}</b><span class="ob-bar" style="width:${o}%"></span></span>
  </div>`}let Lt=null,Pu=1,Mu=0;function Qv(n){Mu=Number(n)||0}function Jv(n,e){var p;const t=(p=n.players)==null?void 0:p[e],s=n.stocks||{};if(!t)return;const i=wo(t,s);R("myCash").textContent=Ot(t.cash),R("myAsset").textContent=Ot(i);const r=R("myAssetTop");r&&(r.textContent=Ct(i)+"원");const o=t.avgCost||{},a=t.holdings||{},c=Object.entries(a).filter(([,m])=>m>0);let l=0,d=0;c.forEach(([m,v])=>{const I=s[m];if(!I)return;const E=(o[m]||I.price)*v;l+=I.price*v-E,d+=E});const u=R("myPnl");if(u)if(c.length){const m=d?l/d*100:0,v=l>0?"up":l<0?"down":"flat";u.className="asset-pnl "+v,u.textContent=`평가손익 ${l>=0?"+":""}${D(l)}원 (${m>=0?"+":""}${m.toFixed(2)}%)`}else u.className="asset-pnl muted",u.textContent="평가손익 —";const h=R("holdingsList");if(h.innerHTML="",c.length===0){const m=document.createElement("li");m.className="muted",m.textContent="보유 종목이 없습니다",h.appendChild(m);return}Lt&&!c.some(([m])=>m===Lt)&&(Lt=null);for(const[m,v]of c){const I=s[m];if(!I)continue;const E=o[m]||0,_=E?(I.price-E)*v:0,y=E?(I.price-E)/E*100:0,T=_>0?"up":_<0?"down":"flat",b=Lt===m,k=document.createElement("li");k.className="holding-item"+(b?" is-open":""),k.dataset.hold=m,k.innerHTML=`
      <button class="hold-main" type="button" data-holdtoggle="${m}">
        <div class="hold-row1"><span class="hold-name">${V(I.name)}</span><b>${D(v)}주</b></div>
        <div class="hold-row2 muted">평단 ${E?D(E):"-"} · 평가 ${Ct(I.price*v)}원</div>
        <div class="hold-row2 ${T}">${_>=0?"+":""}${D(_)}원 (${y>=0?"+":""}${y.toFixed(2)}%)</div>
      </button>
      ${b?Xv(m,I):""}`,h.appendChild(k)}}function Xv(n,e){return`
    <div class="hold-trade" data-trade="${n}">
      <div class="ht-price">현재가 <b>${D(e.price)}원</b></div>
      <div class="ht-qtyrow">
        <button type="button" data-htq="-10">-10</button>
        <button type="button" data-htq="-1">-1</button>
        <input class="ht-input" type="number" min="1" value="${Pu}" inputmode="numeric" />
        <button type="button" data-htq="1">+1</button>
        <button type="button" data-htq="10">+10</button>
        <button type="button" data-htq="max">최대</button>
      </div>
      <div class="ht-btns">
        <button type="button" class="btn buy" data-ht="buy">매수</button>
        <button type="button" class="btn sell" data-ht="sell">매도</button>
        <button type="button" class="btn sell-all" data-ht="all">전량매도</button>
      </div>
    </div>`}function Zv(n){Lt=Lt===n?null:n}function Wi(n){Pu=Math.max(1,Math.floor(Number(n)||1))}let Ja=null;function O(n,e=""){const t=R("toast");t&&(t.textContent=n,t.className="toast show"+(e?" toast-"+e:""),clearTimeout(Ja),Ja=setTimeout(()=>{t.className="toast"+(e?" toast-"+e:"")},1800))}function ey(n,e){const t=R("rankingList");t.innerHTML="",gu(n.players,n.stocks).forEach(i=>{const r=document.createElement("li"),o=((i.total-Wt)/Wt*100).toFixed(2),a=i.total>=Wt?"up":"down";r.innerHTML=`<span>${V(i.nickname)}${i.uid===e?" (나)":""}</span> <b>${Ct(i.total)}원</b> <span class="${a}">${o>=0?"+":""}${o}%</span>`,i.connected||r.classList.add("muted"),t.appendChild(r)})}function ty(n){const e=R("logList");e.innerHTML="";const s=[...Object.values(n.logs||{}),...Sn].sort((i,r)=>r.time-i.time).slice(0,40);for(const i of s){const r=document.createElement("li"),o=i.type==="buy"?"매수":"매도",a=i.type==="buy"?"up":"down",c=new Date(i.time).toLocaleTimeString("ko-KR",{hour12:!1}),l=i.bot?`<b class="bot-name">${V(i.nickname)}</b>`:`<b>${V(i.nickname)}</b>`;r.innerHTML=`<span class="muted">${c}</span> ${l} <span class="${a}">${o}</span> ${V(i.stockName)} ${D(i.qty)}주 @ ${D(i.price)}`,e.appendChild(r)}}function ny(n){const e=R("newsBar"),t=n.latestNews;if(!t||Date.now()-t.time>12e3){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent=`📢 ${t.text}`}function sy(n){const e=[R("tickBar"),R("tickBarHome")],t=[R("tickCountdown"),R("tickCountdownHome")],s=n&&(n.marketTick||n.market&&n.market.lastTickAt)||0;if(!s){e.forEach(l=>{l&&(l.style.width="0%")}),t.forEach(l=>{l&&(l.textContent="")});return}const i=Date.now()-s,o=(Math.max(0,Math.min(1,i/gr))*100).toFixed(1)+"%";e.forEach(l=>{l&&(l.style.width=o)});const a=Math.max(0,Math.ceil((gr-i)/1e3)),c=a>0?a+"s":"곧";t.forEach(l=>{l&&(l.textContent=c)})}function iy(n){const e=Math.max(0,Math.floor(n/1e3)),t=String(Math.floor(e/60)).padStart(2,"0"),s=String(e%60).padStart(2,"0");R("gameTimer").textContent=`${t}:${s}`}function V(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let Xa={};const ry=60;function oy(n){const e=n.role,t=n.type;return e==="leader"||e==="sub"||t==="preferred"||t==="etf"||t==="leverage"||t==="inverse"||t==="bond"}function Ou(n){let e=0,t=0,s=0,i=0,r=0,o=0;const a={};for(const h of Object.values(n||{})){const p=(h.value||0)+1,m=p*(h.changeRate||0);e+=p,t+=m;const v=h.sector||"기타",I=a[v]||(a[v]={w:0,r:0});I.w+=p,I.r+=m,oy(h)?(s+=p,i+=m):(r+=p,o+=m)}const c=e?t/e:0,l=s?i/s:0,d=r?o/r:0,u=Object.entries(a).map(([h,p])=>({name:h,rate:p.w?p.r/p.w:0,w:p.w})).sort((h,p)=>p.w-h.w);return{comp:c,kospi:l,kosdaq:d,sectors:u}}function ss(n,e){const t=Xa[n]||(Xa[n]=[]);t.push(e),t.length>ry&&t.shift()}function ay(n){const{comp:e,kospi:t,kosdaq:s,sectors:i}=Ou(n);ss("__comp__",1e3*(1+e/100)),ss("__kospi__",1e3*(1+t/100)),ss("__kosdaq__",1e3*(1+s/100)),i.forEach(r=>ss("sec:"+r.name,1e3*(1+r.rate/100)))}function Za(n){const e=n.rate,t=ct(e),s=e>0?"+":"",i=(1e3*(1+e/100)).toFixed(2);return`<div class="ixs-row"><span class="ixs-name">${V(n.name)}</span><span class="ixs-val">${i}</span><span class="ixs-rate ${t}">${Xn(e)} ${s}${e.toFixed(2)}%</span></div>`}function ec(n,e){const t=ct(e),s=e>0?"+":"",i=(1e3*(1+e/100)).toFixed(2);return`<div class="ixm-row"><span class="ixm-name">${V(n)}</span><b class="ixm-val">${i}</b><span class="ixm-rate ${t}">${Xn(e)} ${s}${e.toFixed(2)}%</span></div>`}function cy(n){const e=R("indexStrip");if(!e)return;const{kospi:t,kosdaq:s,sectors:i}=Ou(n.stocks||{}),r=i.slice(0,16),o=r.slice(0,8),a=r.slice(8,16),l=[`<div class="index-card index-market">
    ${ec("코스피",t)}
    ${ec("코스닥",s)}
  </div>`,`<div class="index-card index-sectors">${o.map(Za).join("")}</div>`,a.length?`<div class="index-card index-sectors">${a.map(Za).join("")}</div>`:""];e.innerHTML=l.join("")}function ly(n){const e=new Date(n.when).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"});return`<div class="feed-card"><div class="feed-card-head"><span class="feed-ava">${V((n.who||"S").slice(0,1))}</span><div><div class="feed-who">${V(n.who)}</div><div class="feed-when">${e}</div></div></div>${n.title?`<div class="feed-title">${V(n.title)}</div>`:""}<div class="feed-body">${V(n.body)}</div></div>`}function uy(n,e){const t=R("feedView");if(!t)return;const s=[],i=n.latestNews;i&&(i.text||i.title)&&s.push({who:"STONK 뉴스",when:i.time||Date.now(),title:i.title||"📢 시장 속보",body:i.text||i.body||""}),Object.values(n.botFeed||{}).slice(-10).reverse().forEach(c=>s.push({who:c.nickname||"트레이더",when:c.time||Date.now(),title:"",body:`${c.type==="buy"?"매수":"매도"} · ${c.stockName||"종목"} ${D(c.qty||0)}주 @ ${D(c.price||0)}`}));const r=gu(n.players,n.stocks).slice(0,5),o=[...new Set(Object.values(n.stocks||{}).map(c=>c.sector).filter(Boolean))].slice(0,8),a=r.map((c,l)=>{const d=(c.total-Wt)/Wt*100;return`<li><span class="fr-no">${l+1}</span><span class="fr-name">${V(c.nickname)}</span><span class="fr-val ${d>=0?"up":"down"}">${d>=0?"+":""}${d.toFixed(1)}%</span></li>`}).join("");t.innerHTML=`
    <aside class="feed-side"><button class="is-active">전체</button><button>팔로잉</button><button>뉴스</button></aside>
    <div class="feed-main">
      ${s.length?s.map(ly).join(""):'<div class="feed-card"><div class="feed-body muted">아직 소식이 없습니다. 거래가 시작되면 시장 속보와 체결 소식이 올라옵니다.</div></div>'}
      <a class="feed-card" id="feedBoardLink" target="_blank" rel="noopener" style="text-decoration:none;color:var(--brand);font-weight:700">전체 소식 보기 → STONK Board ↗</a>
    </div>
    <aside class="feed-aside">
      <div class="feed-rank-card"><h4 class="rail-h">주간 프로필 랭킹</h4><ol class="feed-rank-list">${a||'<li class="muted">참가자 없음</li>'}</ol></div>
      <div class="feed-rank-card"><h4 class="rail-h">주제별 커뮤니티</h4><div class="feed-comm">${o.map(c=>`<span>＃ ${V(c)}</span>`).join("")||'<span class="muted">-</span>'}</div></div>
    </aside>`}const Vi=[{key:"rising",label:"연속 상승세",badge:"인기",fn:(n,e)=>(e.changeRate||0)>0,sort:"up"},{key:"value",label:"거래대금 상위",fn:()=>!0,sort:"value"},{key:"surge",label:"급등주",fn:(n,e)=>(e.changeRate||0)>=5,sort:"up"},{key:"plunge",label:"급락주",fn:(n,e)=>(e.changeRate||0)<=-5,sort:"down"},{key:"cheap",label:"저가주",fn:(n,e)=>(e.price||0)<2e3,sort:"value"},{key:"pricey",label:"고가주",fn:(n,e)=>(e.price||0)>=1e5,sort:"value"},{key:"lev",label:"레버리지·인버스",fn:(n,e)=>e.type==="leverage"||e.type==="inverse",sort:"value"},{key:"etf",label:"ETF·리츠",fn:(n,e)=>e.type==="etf"||e.type==="reit",sort:"value"},{key:"leader",label:"대장주",fn:(n,e)=>e.role==="leader",sort:"value"}];function dy(n){const e=R("screenerPresets"),t=R("screenerHead"),s=R("screenerList");if(!e||!s)return;e.innerHTML='<div class="sa-title">주식 골라보기 목록</div>'+Vi.map(o=>`<button data-preset="${o.key}" class="${o.key===yr?"is-active":""}">${V(o.label)}${o.badge?` <span class="sa-badge">${o.badge}</span>`:""}</button>`).join("");const i=Vi.find(o=>o.key===yr)||Vi[0];t&&(t.innerHTML=`<h2>${V(i.label)}</h2><p>조건에 맞는 종목을 모았습니다 · 모두 가상 데이터</p>`);let r=Object.entries(n.stocks||{}).filter(([o,a])=>i.fn(o,a));r=Su(r,i.sort),s.innerHTML=r.length?r.map(([o,a],c)=>Tu(c+1,o,a)).join(""):'<li class="stock-empty">조건에 맞는 종목이 없습니다</li>'}function hy(n,e){var _,y;const t=R("accountView");if(!t)return;const s=(_=n.players)==null?void 0:_[e];if(!s){t.innerHTML='<div class="acct-main"><div class="acct-section muted">계좌 정보를 불러오는 중…</div></div>';return}const i=n.stocks||{},r=wo(s,i),o=s.avgCost||{},a=Object.entries(s.holdings||{}).filter(([,T])=>T>0);let c=0,l=0,d=0;a.forEach(([T,b])=>{const k=i[T];if(!k)return;const M=(o[T]||k.price)*b;c+=k.price*b,l+=k.price*b-M,d+=M});const u=d?l/d*100:0,h=l>0?"up":l<0?"down":"flat",p=((y=R("gameRoomCode"))==null?void 0:y.textContent)||"-",m=Object.values(n.logs||{}).filter(T=>T.uid===e).sort((T,b)=>b.time-T.time).slice(0,20),v=Object.values(n.orders||{}).filter(T=>T.uid===e),I=["asset","tx","orders"].map(T=>{const b={asset:"자산",tx:"거래내역",orders:"주문내역"}[T];return`<button data-acct="${T}" class="${T===hs?"is-active":""}">${b}</button>`}).join("");let E="";if(hs==="asset"){const T=a.length?a.map(([b,k])=>{const M=i[b];if(!M)return"";const N=o[b]||0,g=N?(M.price-N)*k:0,C=N?(M.price-N)/N*100:0,S=g>0?"up":g<0?"down":"flat";return`<div class="acct-row"><div><div class="ar-name">${V(M.name)}</div><div class="ar-sub">${D(k)}주 · 평단 ${N?D(N):"-"}</div></div><div class="ar-val ${S}">${D(M.price*k)}원<br><small>${g>=0?"+":""}${C.toFixed(2)}%</small></div></div>`}).join(""):'<div class="acct-row muted">보유 종목이 없습니다</div>';E=`
      <div class="acct-hero">
        <div class="ah-no">기본계좌 · ${V(p)}</div>
        <div class="ah-asset">${Ot(r)}</div>
        <div class="ah-pnl ${h}">평가손익 ${l>=0?"+":""}${D(l)}원 (${u>=0?"+":""}${u.toFixed(2)}%)</div>
        <div class="acct-actions"><button class="btn small" data-acctact="tobank">채우기(넣기)</button><button class="btn small" data-acctact="send">보내기</button><button class="btn small" data-acctact="tomarket">환전(빼기)</button></div>
      </div>
      <div class="acct-grid">
        <div class="acct-stat"><div class="as-k">🏦 STONK 금고(영구)</div><div class="as-v">${Ot(Mu)}</div></div>
        <div class="acct-stat"><div class="as-k">주문가능 현금</div><div class="as-v">${Ot(s.cash)}</div></div>
        <div class="acct-stat"><div class="as-k">총 투자금액(평가)</div><div class="as-v">${Ot(c)}</div></div>
        <div class="acct-stat"><div class="as-k">평가손익</div><div class="as-v ${h}">${l>=0?"+":""}${D(l)}</div></div>
      </div>
      <div class="acct-section"><h3>보유 종목</h3>${T}</div>`}else hs==="tx"?E=`<div class="acct-section"><h3>거래내역</h3>${m.length?m.map(b=>{const k=b.type==="buy"?"up":"down",M=new Date(b.time).toLocaleString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});return`<div class="acct-row"><div><div class="ar-name">${V(b.stockName)}</div><div class="ar-sub">${M}</div></div><div class="ar-val ${k}">${b.type==="buy"?"매수":"매도"} ${D(b.qty)}주<br><small>@ ${D(b.price)}</small></div></div>`}).join(""):'<div class="acct-row muted">거래내역이 없습니다</div>'}</div>`:E=`<div class="acct-section"><h3>주문내역(미체결)</h3>${v.length?v.map(b=>{const k=b.side==="buy"?"up":"down";return`<div class="acct-row"><div><div class="ar-name">${V(b.stockName||b.stockId||"")}</div><div class="ar-sub">${b.kind||"지정가"} · ${b.tif||""}</div></div><div class="ar-val ${k}">${b.side==="buy"?"매수":"매도"} ${D(b.qty)}주<br><small>${b.price?"@ "+D(b.price):""}</small></div></div>`}).join(""):'<div class="acct-row muted">미체결 주문이 없습니다</div>'}</div>`;t.innerHTML=`<aside class="acct-side">${I}</aside><div class="acct-main">${E}</div>`}function ko(){const n=R("stockHover");n&&n.classList.add("hidden")}function fy(n,e){const t=R("stockHover");if(!t)return;const s=n&&n.stocks&&n.stocks[e];if(!s){t.classList.add("hidden");return}const i=ct(s.changeRate),r=s.changeRate>0?"+":"",o=(s.changeRate||0)>=0?"왜 올랐을까?":"왜 내렸을까?",a=s.news?V(s.news):"아직 특별한 소식은 없어요. 거래대금과 수급에 따라 움직이고 있어요.";t.innerHTML=`
    <div class="sh-head">
      <span class="sh-ico" style="background:${Cu(s.name)}">${V((s.name||"?").slice(0,1))}</span>
      <div class="sh-meta">
        <b class="sh-name">${V(s.name)} ${vu(e,s)}</b>
        <span class="sh-price"><b>${D(s.price)}원</b> <span class="${i}">${Xn(s.changeRate)} ${r}${(s.changeRate??0).toFixed(2)}%</span></span>
      </div>
    </div>
    <div class="sh-chartwrap"><span class="sh-tf">일봉</span><canvas class="sh-chart"></canvas></div>
    <div class="sh-news"><b class="sh-why">${o}</b><p>${a}</p></div>`,t.classList.remove("hidden");const c=t.querySelector(".sh-chart");s.basePrice||s.previousPrice||s.price,py(c,Ru(s,e,"1d"))}function py(n,e,t){if(!n)return;const s=window.devicePixelRatio||1,i=n.clientWidth||272,r=n.clientHeight||118;n.width=Math.round(i*s),n.height=Math.round(r*s);const o=n.getContext("2d");if(o.setTransform(s,0,0,s,0,0),o.clearRect(0,0,i,r),!e||e.length<2){o.fillStyle=mt("--muted"),o.font="12px Pretendard, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText("데이터 수집 중…",i/2,r/2);return}const a=r*.72,c=r-a-4;let l=-1/0,d=1/0,u=0;for(const y of e)l=Math.max(l,y.h),d=Math.min(d,y.l),u=Math.max(u,y.v||0);l===d&&(l+=1,d-=1);const h=(l-d)*.12;l+=h,d-=h;const p=y=>a*(1-(y-d)/(l-d));o.strokeStyle=mt("--chart-grid"),o.lineWidth=1;for(let y=1;y<=2;y++){const T=a/3*y;o.beginPath(),o.moveTo(0,Math.round(T)+.5),o.lineTo(i,Math.round(T)+.5),o.stroke()}const m=mt("--up"),v=mt("--down"),I=e.length,E=i/I,_=Math.max(1.5,Math.min(7,E*.62));e.forEach((y,T)=>{const b=T*E+E/2,k=y.c>=y.o?m:v;o.strokeStyle=k,o.fillStyle=k,o.lineWidth=1,o.beginPath(),o.moveTo(Math.round(b)+.5,p(y.h)),o.lineTo(Math.round(b)+.5,p(y.l)),o.stroke();const M=p(y.o),N=p(y.c),g=Math.min(M,N),C=Math.max(1,Math.abs(N-M));if(o.fillRect(b-_/2,g,_,C),u>0){const S=(c-2)*((y.v||0)/u);o.globalAlpha=.35,o.fillRect(b-_/2,r-S,_,S),o.globalAlpha=1}})}const Du={home:"https://tom981105-web.github.io/STONK-Home/",battle:"https://tom981105-web.github.io/STONK-Battle/",board:"https://tom981105-web.github.io/STONK-Board/",wiki:"https://tom981105-web.github.io/STONK-Wiki/",arcade:"https://tom981105-web.github.io/STONK-Arcade/",gacha:"https://tom981105-web.github.io/STONK-Gacha/",bank:"https://tom981105-web.github.io/STONK-Bank/",admin:"https://tom981105-web.github.io/STONK-Admin/market-admin.html"},tc={home:"../STONK-Home/index.html",battle:"../Market-battle/index.html",board:"../Market-Board/index.html",wiki:"../Market-Wiki/index.html",arcade:"../STONK-Arcade/index.html",gacha:"../STONK-Gacha/index.html",bank:"../STONK-Bank/index.html",admin:"../Market-Admin/market-admin.html"},Co="stonk:lastRoomCode",my=["mb-board-room","wiki-room"];function xu(){return location.protocol==="file:"||/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)}function gy(){return{urls:{...Du},local:xu()}}function Zt(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function Lu(){try{const n=new URLSearchParams(location.search);return Zt(n.get("room")||n.get("roomCode")||n.get("roomId")||"")}catch{return""}}function $u(n){const e=Zt(n);if(e)try{localStorage.setItem(Co,e)}catch{}}function Fu(){try{const n=Zt(localStorage.getItem(Co));if(n)return n;for(const e of my){const t=Zt(localStorage.getItem(e));if(t)return t}}catch{}return""}function _y(){return Lu()||Fu()||"MAIN"}function vy(n){const e=Du[n];return xu()&&/github\.io/.test(e||"")?tc[n]:e||tc[n]}function Be(n,e){const t=vy(n),s=[],i=Zt(e&&e.room);i&&s.push("room="+encodeURIComponent(i));const r=e&&(e.company||e.companyId);return r&&s.push("company="+encodeURIComponent(r)),s.length?t+(t.indexOf("?")>=0?"&":"?")+s.join("&"):t}function So(n){return Be("home",{room:n})}function yy(n){return Be("battle",{room:n})}function Uu(n){return Be("board",{room:n})}function Bu(n,e){return Be("wiki",{room:n,company:e})}function Hu(n){return Be("arcade",{room:n})}function Wu(n){return Be("gacha",{room:n})}function To(n){return Be("bank",{room:n})}function Vu(n){return Be("admin",{room:n})}const by={VERSION:"1.4.1",getSiteConfig:gy,normalizeRoomCode:Zt,getUrlRoomCode:Lu,getCurrentRoomCode:_y,setLastRoomCode:$u,getLastRoomCode:Fu,buildSiteUrl:Be,buildHomeUrl:So,buildBattleUrl:yy,buildBoardUrl:Uu,buildWikiUrl:Bu,buildArcadeUrl:Hu,buildGachaUrl:Wu,buildBankUrl:To,buildAdminUrl:Vu,LAST_ROOM_KEY:Co};typeof window<"u"&&(window.SiteConfig=by);const wy="../STONK-Home/index.html",ji=2600;function Ey(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function Iy(){return/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||location.protocol==="file:"}function ky(n){const e=Ey(n);return wy+(e?`?room=${encodeURIComponent(e)}`:"")}function Cy({title:n="STONK Home에서 입장해 주세요",message:e="",roomCode:t="",auto:s=!0}={}){var c;const i=ky(t),r=document.getElementById("stonk-home-gate");r&&r.remove();const o=document.createElement("div");o.id="stonk-home-gate",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),Object.assign(o.style,{position:"fixed",inset:"0",zIndex:"99999",display:"grid",placeItems:"center",padding:"24px",background:"radial-gradient(120% 90% at 50% -10%, rgba(139,108,255,0.22), transparent 60%), rgba(5,6,10,0.94)",backdropFilter:"blur(8px)",color:"#f4f7ff",fontFamily:"Pretendard, Inter, 'Noto Sans KR', system-ui, sans-serif"});const a=s&&!Iy();if(o.innerHTML=`
    <div style="width:min(460px,100%);text-align:center;padding:32px 26px;border:1px solid rgba(255,255,255,0.14);border-radius:18px;background:rgba(14,16,24,0.92);box-shadow:0 24px 70px rgba(0,0,0,0.5),0 0 60px rgba(139,108,255,0.16)">
      <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#8b6cff;margin-bottom:8px">STONK UNIVERSE</div>
      <h2 style="margin:0 0 10px;font-size:1.5rem">${n}</h2>
      <p style="margin:0 0 18px;color:#aab2c8;font-size:0.95rem;line-height:1.5">${e||"로그인 · 방 선택 · 닉네임 설정은 STONK Home에서 진행합니다."}</p>
      <a data-home-go href="${i}" style="display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 26px;border-radius:14px;font-weight:900;text-decoration:none;color:#0a0a12;background:linear-gradient(135deg,#a99bff,#8b6cff);box-shadow:0 10px 30px rgba(139,108,255,0.4)">STONK Home으로 이동</a>
      ${t?`<div style="margin-top:14px;font-size:0.82rem;color:#8a93a8">방 코드 <b style="color:#41e0ff;letter-spacing:2px">${t}</b> 유지</div>`:""}
      ${a?`<div style="margin-top:12px;font-size:0.8rem;color:#8a93a8"><span data-gate-count>${Math.ceil(ji/1e3)}</span>초 후 자동 이동…</div>`:'<div style="margin-top:12px;font-size:0.78rem;color:#5f6678">개발 모드: 자동 이동 없음</div>'}
    </div>
  `,document.body.appendChild(o),(c=o.querySelector("[data-home-go]"))==null||c.addEventListener("click",l=>{l.preventDefault(),location.href=i}),a){let l=Math.ceil(ji/1e3);const d=o.querySelector("[data-gate-count]"),u=setInterval(()=>{l-=1,d&&(d.textContent=String(Math.max(0,l))),l<=0&&clearInterval(u)},1e3);setTimeout(()=>{location.href=i},ji)}return o}function Sy(){var n;(n=document.getElementById("stonk-home-gate"))==null||n.remove()}const Ty="https://tom981105-web.github.io/STONK-Gacha/backgrounds/";let ps,Ie=null;function Ry(){return Ie||(Ie=document.createElement("div"),Ie.id="equip-bg",Object.assign(Ie.style,{position:"fixed",inset:"0",zIndex:"-1",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",pointerEvents:"none",opacity:"0",transition:"opacity 0.35s ease",transform:"translateZ(0)",backfaceVisibility:"hidden"}),document.body.appendChild(Ie),Ie)}function nc(){if(document.body.classList.remove("has-skin"),Ie){Ie.style.opacity="0";const n=Ie;setTimeout(()=>{ps===null&&n&&(n.style.backgroundImage="")},400)}}function Ny(n,e){let t=0;const s=()=>{if(t>=n.length){e(null);return}const i=n[t++],r=new Image;r.decoding="async",r.onload=()=>e(i),r.onerror=s,r.src=i};s()}function Ay(n){const e=n||null;if(e===ps)return;if(ps=e,!e){nc();return}const t=["webp","jpg","png"].map(s=>`${Ty}${e}.${s}`);Ny(t,s=>{if(ps!==e)return;if(!s){nc();return}const i=Ry();i.style.backgroundImage=`radial-gradient(120% 90% at 50% 12%, rgba(10,12,20,0.30) 0%, rgba(8,10,16,0.52) 55%, rgba(6,7,12,0.74) 100%), url("${s}")`,i.style.opacity="1",document.body.classList.add("has-skin")})}const Py="yaV8N60yIiUggaWNpNF2VhkCwxb2",My="tomem@naver.com",tt="MAIN",f={uid:null,email:null,nickname:localStorage.getItem("mb_nickname")||localStorage.getItem("stonk:lastNickname")||"",roomCode:null,roomData:null,selectedStockId:null,tickTimer:null,isDriver:!1,tickLeaseRenewAt:0,driverWatch:null,liveState:vv(),catchupDoneFor:null,clockTimer:null,roomRef:null,lastStatus:null,histRef:null,histStockId:null,selectedHistory:null,renderQueued:!1,joinReqRef:null,joinReqId:null,isDbAdmin:!1,bank:0,bankRef:null},zs=.05,Oy=15e3,Dy=5e3,xy=4e3;function Ly(){return f.uid===Py||(f.email||"").toLowerCase()===My}!uu||!yo||!L?yu("src/firebase.js 에 본인의 Firebase 설정(firebaseConfig)을 붙여넣은 뒤 새로고침하세요."):$y();function $y(){let n=!1;const e=setTimeout(()=>{n||yu("Firebase에 연결할 수 없습니다. 설정값과 네트워크, Database Rules를 확인하세요.")},5e3);un($(L,".info/connected"),t=>{t.val()===!0&&(n=!0,clearTimeout(e),document.getElementById("fbError").classList.add("hidden"))}),Fy()}let is=null;function Fy(){un($(L,`rooms/${tt}/broadcast/reloadAt`),n=>{const e=Number(n.val())||0;if(is===null){is=e;return}if(e>is){is=e;try{O==null||O("새 버전이 배포되어 새로고침합니다…","up")}catch{}setTimeout(()=>location.reload(),400)}}),vf(yo,n=>{if(n)Sy(),f.uid=n.uid,f.email=n.email||null,localStorage.setItem("mb_playerId",n.uid),Uy(),By();else{f.uid=null,f.email=null,f.isDbAdmin=!1;const e=document.getElementById("navAdmin");e&&(e.hidden=!0),Cy({message:"로그인은 STONK Home에서 진행합니다. Home에서 입장하면 자동으로 연결됩니다."})}})}async function Uy(){const n=document.getElementById("navAdmin");if(!n)return;let e=Ly();if(!e&&f.uid&&L)try{e=(await pi($(L,"admins/"+f.uid))).val()===!0}catch{e=!1}f.isDbAdmin=e,n.hidden=!e}async function By(){if(!f.nickname){Eo("screen-auth");return}Gu(tt)}let Gi=!1;async function Hy(n){var i;if(!f.uid)return!1;const e=n.players&&n.players[f.uid];if(e&&e.cash!=null)return!0;if(Gi)return!1;Gi=!0;const t=Number((i=n.settings)==null?void 0:i.initialCash)||Wt,s=Date.now();try{await ot($(L,`rooms/${tt}/players/${f.uid}`),{nickname:f.nickname&&f.nickname.trim()||"플레이어-"+String(f.uid).slice(-4),cash:t,holdings:null,totalAsset:t,joinedAt:s,connected:!0})}catch(r){return console.warn("[join] 자동 등록 실패:",r),!1}finally{Gi=!1}return!0}function ju(){f.joinReqId=null}function Gu(n){ju(),f.roomCode=n,localStorage.setItem("mb_roomCode",n),$u(n),r0(n);const e=$(L,`rooms/${n}/players/${f.uid}/connected`);ln(e,!0).catch(()=>{}),D_(e).set(!1).catch(()=>{}),f.roomRef&&gi(f.roomRef),f.roomRef=$(L,`rooms/${n}`),un(f.roomRef,t=>Xy(qy(t)),t=>{console.error("[room] 구독 오류:",t)}),Wy()}function Wy(){f.uid&&(f.bankRef&&gi(f.bankRef),f.bankRef=$(L,`rooms/${tt}/bank/${f.uid}/balance`),ot($(L,`rooms/${tt}/bank/${f.uid}`),{nickname:f.nickname||"플레이어-"+String(f.uid).slice(-4)}).catch(()=>{}),un(f.bankRef,n=>{f.bank=Number(n.val()||0),Qv(f.bank),de()},()=>{}),pi($(L,`rooms/${tt}/bank/${f.uid}`)).then(n=>{const e=n.val()||{};Gy(Number(e.creditScore),Number(e.loanPrincipal||0)+Number(e.loanInterest||0),e.vipTier||"NORMAL")}).catch(()=>{}))}function Vy(n){return n=Math.max(0,Math.min(100,Math.round(isFinite(n)?n:60))),n>=90?"S":n>=75?"A":n>=55?"B":n>=35?"C":n>=15?"D":"F"}const jy={NORMAL:"일반",SILVER:"실버",GOLD:"골드",PLATINUM:"플래티넘",BLACK:"블랙"};function Gy(n,e,t){const s=document.getElementById("bankBadge");if(!s)return;const i=Vy(n);e=Math.max(0,Math.round(e||0));const r=e>5e6,o=t==="BLACK";s.hidden=!1,s.className="bank-badge"+(e>0?" danger":"")+(r?" danger-strong":"")+(o?" black":""),s.innerHTML=`<span class="bb-grade g-${i}">신용 ${i}</span>`+(t!=="NORMAL"?`<span class="bb-vip v-${t}">VIP ${jy[t]||t}</span>`:"")+(e>0?`<span class="bb-loan">대출 ${e.toLocaleString("ko-KR")}원${r?" · 상환 시급!":" · 상환 필요"}</span>`:'<span class="bb-ok">대출 없음</span>'),s.onclick=()=>{location.href=To(tt)}}function qy(n){if(!n||!n.exists())return null;const e={};return n.forEach(t=>{if(t.key==="stocks"){const s={};t.forEach(i=>{const r={};i.forEach(o=>{o.key!=="history"&&(r[o.key]=o.val())}),s[i.key]=r}),e.stocks=s}else e[t.key]=t.val()}),e}function zy(n){const e=f.selectedHistory;e&&e.id&&n&&n.stocks&&n.stocks[e.id]&&(n.stocks[e.id].history=e.data||null)}function Ks(n){n!==f.histStockId&&(f.histRef&&(gi(f.histRef),f.histRef=null),f.histStockId=n||null,f.selectedHistory=n?{id:n,data:null}:null,!(!n||!f.roomCode)&&(f.histRef=$(L,`rooms/${f.roomCode}/stocks/${n}/history`),un(f.histRef,e=>{f.histStockId===n&&(f.selectedHistory={id:n,data:e.val()||null},f.roomData&&f.roomData.stocks&&f.roomData.stocks[n]&&(f.roomData.stocks[n].history=f.selectedHistory.data),de())},e=>console.error("[history] 구독 오류:",e))))}function de(){f.renderQueued||(f.renderQueued=!0,requestAnimationFrame(()=>{f.renderQueued=!1,f.roomData&&f.roomData.status==="playing"&&Pv(f)}))}function qu(n){const e=n==="dark"?"dark":"light";document.documentElement.dataset.theme=e;try{localStorage.setItem("stonk:theme",e)}catch{}const t=document.getElementById("themeToggle");t&&(t.textContent=e==="dark"?"☀️":"🌙")}function Ky(){let n="light";try{n=localStorage.getItem("stonk:theme")||"light"}catch{}qu(n)}function Yy(){qu(document.documentElement.dataset.theme==="dark"?"light":"dark")}function yn(n){const e=document.getElementById("screen-game");e&&(e.dataset.tab=n,document.querySelectorAll(".tnav-tab").forEach(t=>t.classList.toggle("is-active",t.dataset.tab===n)),document.querySelectorAll(".tab-view").forEach(t=>t.classList.toggle("hidden",t.dataset.view!==n)),n==="detail"&&Io(),f.roomData&&de())}function Qy(n){n&&(ko(),f.selectedStockId=n,Ks(n),o0(n),yn("detail"))}let qi=null,ms=null;function Jy(n){const e=document.getElementById("stockHover");if(!e)return;const t=e.offsetWidth||300,s=e.offsetHeight||240;let i=n.right+12;i+t>window.innerWidth-8&&(i=n.left-t-12),i<8&&(i=8);let r=n.top;r+s>window.innerHeight-8&&(r=window.innerHeight-s-8),r<8&&(r=8),e.style.left=i+"px",e.style.top=r+"px"}function sc(n){const e=document.getElementById(n);e&&(e.addEventListener("mouseover",t=>{const s=t.target.closest(".rank-item");if(!s||!f.roomData)return;const i=s.dataset.id;i!==ms&&(clearTimeout(qi),qi=setTimeout(()=>{ms=i,fy(f.roomData,i),Jy(s.getBoundingClientRect())},90))}),e.addEventListener("mouseleave",()=>{clearTimeout(qi),ms=null,ko()}))}function Xy(n){if(!n){De(),Er(),Qs(),f.roomData=null,f.lastStatus=null,ic();return}if(f.roomData=n,zy(n),Ay(n.players&&f.uid&&n.players[f.uid]?n.players[f.uid].equippedBackground:null),n.status==="playing"){if(f.uid&&!(n.players&&n.players[f.uid])){Hy(n);return}if(f.lastStatus!=="playing"){Eo("screen-game"),bu(),i0();const e=Object.keys(n.stocks||{});!f.selectedStockId&&e.length&&(f.selectedStockId=e[0])}f.selectedStockId!==f.histStockId&&Ks(f.selectedStockId),de(),Zy(n),Ku(n),s0()}else De(),Er(),Qs(),Ks(null),Io(),ic();f.lastStatus=n.status}function ic(){Eo("screen-wait");const n=document.getElementById("waitNickname");n&&(n.textContent=f.nickname?`${f.nickname} 님`:"")}async function Zy(n){if(!n||n.status!=="playing"||!f.uid||f.catchupDoneFor===f.roomCode)return;if(!wi(n)){f.catchupDoneFor=f.roomCode;return}const e=n.market&&n.market.lastTickAt||n.marketTick||0;if(e&&e<e0(n)){f.catchupDoneFor=f.roomCode;try{await ln($(L,`rooms/${f.roomCode}/market/lastTickAt`),Date.now())}catch{}return}if(!gv(n)){f.catchupDoneFor=f.roomCode;return}f.catchupDoneFor=f.roomCode;try{const t=await _v(f.roomCode,n,f.uid);t.applied&&(bu(),O(`시장 경과 보정 완료 (${Math.round(t.elapsed/6e4)}분, 캔들 ${t.candlesWritten}개)`,"up"))}catch(t){console.warn("[catchup] 보정 실패:",t)}}async function zu(){if(!f.roomCode||!f.uid)return!1;const n=Date.now();try{return(await le($(L,`rooms/${f.roomCode}/market/tickLease`),t=>{if(!(t&&t.by!==f.uid&&(t.expiresAt||0)>n))return{by:f.uid,at:n,expiresAt:n+Oy}})).committed}catch{return!1}}function Ys(n){const e=n&&n.market||{};let t=Number.isFinite(e.openHour)?Math.round(e.openHour):18,s=Number.isFinite(e.closeHour)?Math.round(e.closeHour):24;return t=Math.max(0,Math.min(24,t)),s=Math.max(0,Math.min(24,s)),{oh:t,ch:s}}function wi(n){const{oh:e,ch:t}=Ys(n);if(e===t)return!0;const s=new Date().getHours();return t>e?s>=e&&s<t:s>=e||s<t}function e0(n){const{oh:e,ch:t}=Ys(n),s=new Date,i=new Date(s.getFullYear(),s.getMonth(),s.getDate(),e,0,0,0).getTime();return t>=e?i:s.getHours()<t?i-864e5:i}async function Ku(n){if(n=n||f.roomData,!n||n.status!=="playing"){De();return}if(!wi(n)){De();return}if(!f.uid)return;const e=Date.now(),t=n.market&&n.market.tickLease,s=t&&t.by!==f.uid&&(t.expiresAt||0)>e;if(f.isDriver){s&&De();return}if(s)return;await zu()&&t0()}function t0(){f.tickTimer||(f.isDriver=!0,f.tickLeaseRenewAt=Date.now(),f.tickTimer=setInterval(async()=>{const n=f.roomData;if(!n||n.status!=="playing"){De();return}if(!wi(n)){De();return}try{if(Date.now()-f.tickLeaseRenewAt>=Dy){if(!await zu()){De();return}f.tickLeaseRenewAt=Date.now()}await nv(f.roomCode,n),await sv(f.roomCode,n),await av(f.roomCode,n),await yv(f.roomCode,n,f.liveState)}catch(e){console.error("[tick] 시장 틱 오류:",e)}},gr))}function De(){f.tickTimer&&(clearInterval(f.tickTimer),f.tickTimer=null),f.isDriver=!1}async function n0(){if(!f.roomCode||!f.uid)return;const n=f.roomCode;try{await le($(L,`rooms/${n}/market/tickLease`),e=>e&&e.by===f.uid?null:e)}catch{}}function s0(){f.driverWatch||(f.driverWatch=setInterval(()=>{Ku(f.roomData)},xy))}function Er(){f.driverWatch&&(clearInterval(f.driverWatch),f.driverWatch=null)}function i0(){Qs(),f.clockTimer=setInterval(()=>{const n=f.roomData;if(!n||n.status!=="playing")return;const e=!wi(n),t=document.getElementById("marketClosed");t&&(t.classList.toggle("hidden",!e),e&&(t.textContent=`🌙 장 마감 — 매일 ${String(Ys(n).oh).padStart(2,"0")}:00 개장 (${String(Ys(n).ch%24).padStart(2,"0")}:00 마감)`)),!e&&(iy(Date.now()-(n.startedAt||Date.now())),Eu(),sy(n))},250)}function Qs(){f.clockTimer&&(clearInterval(f.clockTimer),f.clockTimer=null)}function rs(){n0(),De(),Er(),Qs(),ju(),Io(),f.roomRef&&(gi(f.roomRef),f.roomRef=null),Ks(null),location.href=So()}function r0(n){const e="",t=(s,i)=>{const r=document.getElementById(s);r&&(r.href=i)};t("navHome",So(n)),t("navBoard",Uu(n)),t("navWiki",Bu(n,e)),t("navArcade",Hu(n)),t("navGacha",Wu(n)),t("navBank",To(n)),t("navAdmin",Vu(n))}async function rc(){if(!f.roomCode||!f.roomData){O("복사할 시장 데이터가 없습니다","err");return}const n={roomCode:f.roomCode,status:f.roomData.status,startedAt:f.roomData.startedAt||null,marketTick:f.roomData.marketTick||Date.now(),latestNews:f.roomData.latestNews||null,botFeed:f.roomData.botFeed||[],stocks:f.roomData.stocks||{},players:f.roomData.players||{},logs:f.roomData.logs||{}},e=JSON.stringify(n,null,2);try{await navigator.clipboard.writeText(e),O("STONK Board에 가져올 시장 데이터를 복사했습니다")}catch{prompt("STONK Board 관리자 화면에 붙여넣을 시장 데이터입니다:",e)}}function Bn(){return Math.max(1,Math.floor(Number(document.getElementById("qtyInput").value)||1))}async function zi(n){var a,c;const{roomCode:e,roomData:t,uid:s,nickname:i,selectedStockId:r}=f;if(!t||t.status!=="playing")return;if(!r){O("종목을 먼저 선택하세요","err");return}const o=((c=(a=t.stocks)==null?void 0:a[r])==null?void 0:c.name)||"";try{n==="buy"?(await bo(e,s,i,r,Bn(),t),O(`${o} 매수 체결!`,"up")):n==="sell"?(await bi(e,s,i,r,Bn(),t),O(`${o} 매도 체결!`,"down")):n==="sellAll"&&(await pu(e,s,i,r,t),O(`${o} 전량 매도 체결!`,"down")),Ev("tradeMsg","",!1)}catch(l){O(l.message,"err")}}function Js(n){return Math.floor(Number(document.getElementById(n).value)||0)}function o0(n){var s,i,r;const e=(r=(i=(s=f.roomData)==null?void 0:s.stocks)==null?void 0:i[n])==null?void 0:r.price;if(!e)return;const t=(o,a)=>{const c=document.getElementById(o);c&&(c.value=a)};t("limitPrice",e),t("stopLoss",Math.round(e*.95)),t("takeProfit",Math.round(e*1.1))}async function oc(n){var l,d;const{roomCode:e,roomData:t,uid:s,nickname:i,selectedStockId:r}=f;if(!t||t.status!=="playing")return;if(!r)return O("종목을 먼저 선택하세요","err");const o=Js("limitPrice");if(!o)return O("지정가를 입력하세요","err");const a=document.getElementById("limitTif").value,c=((d=(l=t.stocks)==null?void 0:l[r])==null?void 0:d.name)||"";try{await Hs(e,s,i,r,{side:n,trigger:n==="buy"?"below":"above",tif:a,label:"지정가"},Bn(),o,t),O(`${c} 지정가 ${n==="buy"?"매수":"매도"} 등록!`,n==="buy"?"up":"down")}catch(u){O(u.message,"err")}}async function a0(){var l,d,u,h,p;const{roomCode:n,roomData:e,uid:t,nickname:s,selectedStockId:i}=f;if(!e||e.status!=="playing")return;if(!i)return O("종목을 먼저 선택하세요","err");const r=((u=(d=(l=e.players)==null?void 0:l[t])==null?void 0:d.holdings)==null?void 0:u[i])||0;if(r<1)return O("보유한 종목에만 설정할 수 있어요","err");const o=Js("stopLoss"),a=Js("takeProfit");if(!o&&!a)return O("손절가 또는 익절가를 입력하세요","err");const c=((p=(h=e.stocks)==null?void 0:h[i])==null?void 0:p.name)||"";try{o&&await Hs(n,t,s,i,{side:"sell",trigger:"below",tif:"gtc",label:"손절"},r,o,e),a&&await Hs(n,t,s,i,{side:"sell",trigger:"above",tif:"gtc",label:"익절"},r,a,e),O(`${c} 손절·익절 설정 완료 (보유 ${r}주)`,"down")}catch(m){O(m.message,"err")}}async function c0(){var d,u,h,p;const{roomCode:n,roomData:e,uid:t,nickname:s,selectedStockId:i}=f;if(!e||e.status!=="playing")return;if(!i)return O("종목을 먼저 선택하세요","err");const r=Bn(),o=Math.max(2,Math.min(10,Js("splitCount")||3)),a=((u=(d=e.stocks)==null?void 0:d[i])==null?void 0:u.price)||0;if(!a)return;const c=Math.floor(r/o);if(c<1)return O(`분할하려면 수량이 최소 ${o}주 이상이어야 해요`,"err");const l=((p=(h=e.stocks)==null?void 0:h[i])==null?void 0:p.name)||"";try{for(let m=0;m<o;m++){const v=Math.round(a*(1-m*.015));await Hs(n,t,s,i,{side:"buy",trigger:"below",tif:"gtc",label:`분할${m+1}`},c,v,e)}O(`${l} ${o}회 분할매수 등록! (회당 ${c}주)`,"up")}catch(m){O(m.message,"err")}}async function l0(n){try{await ov(f.roomCode,n),O("예약 주문 취소됨")}catch(e){O(e.message,"err")}}async function u0(){const{roomCode:n,roomData:e,uid:t}=f,s=e==null?void 0:e.ipo;if(!s||s.status!=="subscribing"){O("청약 가능한 공모주가 없습니다","err");return}const i=Math.max(1,Math.floor(Number(document.getElementById("ipoQty").value)||0));try{await iv(n,t,i,e),O(`${s.name} ${i.toLocaleString("ko-KR")}주 청약 완료!`,"up")}catch(r){O(r.message,"err")}}async function d0(){const n=f.nickname||"",e=prompt("사용할 닉네임을 입력하세요 (최대 10자)",n);if(e===null)return;const t=e.trim().slice(0,10);if(!t){O("닉네임을 입력하세요","err");return}f.nickname=t;try{localStorage.setItem("mb_nickname",t),localStorage.setItem("stonk:lastNickname",t)}catch{}try{f.uid&&f.roomCode&&await ln($(L,`rooms/${f.roomCode}/players/${f.uid}/nickname`),t)}catch(s){console.warn("[nickname] 저장 실패:",s)}O(`닉네임을 '${t}'(으)로 변경했습니다`,"up")}async function h0(n,e,t){var c,l;const{roomCode:s,roomData:i,uid:r,nickname:o}=f;if(!i||i.status!=="playing")return;const a=((l=(c=i.stocks)==null?void 0:c[n])==null?void 0:l.name)||"";try{e==="buy"?(await bo(s,r,o,n,t,i),O(`${a} ${t}주 매수 체결!`,"up")):e==="sell"?(await bi(s,r,o,n,t,i),O(`${a} ${t}주 매도 체결!`,"down")):e==="all"&&(await pu(s,r,o,n,i),O(`${a} 전량 매도 체결!`,"down"))}catch(d){O(d.message,"err")}}function Yu({title:n,desc:e,value:t,confirm:s="확인",icon:i}){return new Promise(r=>{const o=document.createElement("div");o.className="bt-modal",o.innerHTML=`
      <div class="bt-modal-dim"></div>
      <div class="bt-modal-card" role="dialog" aria-modal="true">
        <div class="bt-modal-head">${i?`<span class="bt-modal-icon">${i}</span>`:""}<h3>${n||""}</h3></div>
        ${e?`<p class="bt-modal-desc">${e}</p>`:""}
        <div class="bt-modal-inwrap">
          <input class="bt-modal-input" type="number" inputmode="numeric" value="${t??""}" />
          <span class="bt-modal-suffix">원</span>
        </div>
        <div class="bt-modal-actions">
          <button class="btn" type="button" data-cancel>취소</button>
          <button class="btn primary" type="button" data-ok>${s}</button>
        </div>
      </div>`,document.body.appendChild(o);const a=o.querySelector(".bt-modal-input");setTimeout(()=>{a.focus(),a.select()},30);const c=l=>{o.remove(),r(l)};o.querySelector("[data-cancel]").addEventListener("click",()=>c(null)),o.querySelector(".bt-modal-dim").addEventListener("click",()=>c(null)),o.querySelector("[data-ok]").addEventListener("click",()=>c(a.value)),o.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),c(a.value)):l.key==="Escape"&&c(null)})})}const Vt=n=>Math.round(Number(n)||0).toLocaleString("ko-KR");async function f0(){var o,a;const{roomCode:n,roomData:e,uid:t}=f;if(!e||!t)return;const s=((a=(o=e.players)==null?void 0:o[t])==null?void 0:a.cash)||0;if(s<1){O("환전할 현금이 없습니다","err");return}const i=await Yu({title:"채우기 (시장 → 금고)",icon:"🏦",desc:`시장 현금을 금고에 넣습니다. 수수료 ${zs*100}% · 보유 현금 ${Vt(s)}원`,value:s,confirm:"넣기"});if(i==null)return;const r=Math.floor(Number(i)||0);if(!r||r<1){O("금액을 확인하세요","err");return}try{if(!(await le($(L,`rooms/${n}/players/${t}/cash`),d=>{if(d=Number(d)||0,!(d<r))return d-r})).committed){O("현금이 부족합니다","err");return}const l=Math.floor(r*(1-zs));await le($(L,`rooms/${n}/bank/${t}/balance`),d=>(Number(d)||0)+l),O(`금고로 ${Vt(l)}원 환전 완료 (수수료 ${Vt(r-l)}원)`,"up")}catch(c){O("환전 실패: "+c.message,"err")}}async function p0(){const{roomCode:n,uid:e}=f;if(!e)return;const t=f.bank||0;if(t<1){O("금고 잔액이 없습니다. 먼저 환전(빼오기) 하세요","err");return}const s=await Yu({title:"환전 (금고 → 시장)",icon:"💵",desc:`금고에서 빼서 시장 현금으로 넣습니다. 수수료 ${zs*100}% · 금고 잔액 ${Vt(t)}원`,value:t,confirm:"빼기"});if(s==null)return;const i=Math.floor(Number(s)||0);if(!i||i<1){O("금액을 확인하세요","err");return}try{if(!(await le($(L,`rooms/${n}/bank/${e}/balance`),a=>{if(a=Number(a)||0,!(a<i))return a-i})).committed){O("금고 잔액이 부족합니다","err");return}const o=Math.floor(i*(1-zs));await le($(L,`rooms/${n}/players/${e}/cash`),a=>(Number(a)||0)+o),O(`시장 현금 ${Vt(o)}원 충전 완료 (수수료 ${Vt(i-o)}원)`,"up")}catch(r){O("채우기 실패: "+r.message,"err")}}function m0(){var o,a,c,l,d,u,h,p,m,v,I,E,_,y,T,b,k,M,N;(o=document.querySelector(".tnav-acct"))==null||o.addEventListener("click",d0);const n=document.getElementById("holdingsList");n&&(n.addEventListener("click",g=>{var pe,ge,Nt,lt,dn,Ro;const C=g.target.closest("[data-holdtoggle]");if(C){Zv(C.dataset.holdtoggle),de();return}const S=g.target.closest(".hold-trade");if(!S)return;const H=S.dataset.trade,A=S.querySelector(".ht-input"),z=g.target.closest("[data-htq]");if(z){const Zn=z.dataset.htq;if(Zn==="max"){const hn=(Nt=(ge=(pe=f.roomData)==null?void 0:pe.stocks)==null?void 0:ge[H])==null?void 0:Nt.price,Qu=((Ro=(dn=(lt=f.roomData)==null?void 0:lt.players)==null?void 0:dn[f.uid])==null?void 0:Ro.cash)||0;if(hn){const No=Math.max(1,Math.floor(Qu/(hn*1.0002)));Wi(No),A&&(A.value=No)}}else{const hn=Math.max(1,Math.floor(Number(A==null?void 0:A.value)||1)+Number(Zn));Wi(hn),A&&(A.value=hn)}return}const Z=g.target.closest("[data-ht]");if(Z){const Zn=Math.max(1,Math.floor(Number(A==null?void 0:A.value)||1));h0(H,Z.dataset.ht,Zn)}}),n.addEventListener("input",g=>{g.target.classList.contains("ht-input")&&Wi(g.target.value)})),(a=document.getElementById("btnNickname"))==null||a.addEventListener("click",()=>{const g=document.getElementById("nicknameInput").value.trim();g&&(f.nickname=g,localStorage.setItem("mb_nickname",g),Gu(tt))}),(c=document.getElementById("nicknameInput"))==null||c.addEventListener("keydown",g=>{g.key==="Enter"&&document.getElementById("btnNickname").click()}),(l=document.getElementById("btnWaitHome"))==null||l.addEventListener("click",rs),(d=document.getElementById("btnCopyCode2"))==null||d.addEventListener("click",rc),(u=document.getElementById("btnCopyMarketBoard"))==null||u.addEventListener("click",rc),(h=document.getElementById("btnLeaveGame"))==null||h.addEventListener("click",rs);const e=g=>{const C=g.target.closest("[data-star]");if(C){g.stopPropagation(),Tv(C.dataset.star),de();return}const S=g.target.closest(".rank-item");S&&Qy(S.dataset.id)};(p=document.getElementById("stockList"))==null||p.addEventListener("click",e),(m=document.getElementById("screenerList"))==null||m.addEventListener("click",e),sc("stockList"),sc("screenerList"),window.addEventListener("scroll",()=>{ms=null,ko()},!0),Ky(),(v=document.getElementById("themeToggle"))==null||v.addEventListener("click",Yy),(I=document.querySelector(".tnav-brand"))==null||I.addEventListener("click",()=>yn("home")),(E=document.getElementById("tnavTabs"))==null||E.addEventListener("click",g=>{const C=g.target.closest(".tnav-tab");C&&yn(C.dataset.tab)}),(_=document.getElementById("btnDetailBack"))==null||_.addEventListener("click",()=>yn("home"));const t=document.getElementById("globalSearch");t&&t.addEventListener("input",()=>{Bi(t.value);const g=document.getElementById("screen-game");g&&g.dataset.tab!=="home"&&yn("home"),de()}),document.addEventListener("keydown",g=>{var S;if(g.key!=="/")return;const C=document.activeElement;C&&/^(input|textarea|select)$/i.test(C.tagName)||(S=document.getElementById("screen-game"))!=null&&S.classList.contains("hidden")||(g.preventDefault(),t==null||t.focus())}),(y=document.getElementById("homeSeg"))==null||y.addEventListener("click",g=>{const C=g.target.closest(".seg-btn");C&&(document.querySelectorAll("#homeSeg .seg-btn").forEach(S=>S.classList.toggle("is-active",S===C)),ja(C.dataset.home==="sectors"?"up":"value"),de())}),(T=document.getElementById("homeFilters"))==null||T.addEventListener("click",g=>{const C=g.target.closest(".fchip");C&&(C.dataset.filter&&(document.querySelectorAll("#homeFilters [data-filter]").forEach(S=>S.classList.toggle("is-active",S===C)),xv(C.dataset.filter)),C.dataset.sort&&(document.querySelectorAll("#homeFilters [data-sort]").forEach(S=>S.classList.toggle("is-active",S===C)),ja(C.dataset.sort)),de())}),(b=document.getElementById("screenerPresets"))==null||b.addEventListener("click",g=>{const C=g.target.closest("[data-preset]");C&&(Lv(C.dataset.preset),de())}),(k=document.getElementById("accountView"))==null||k.addEventListener("click",g=>{const C=g.target.closest("[data-acctact]");if(C){const H=C.dataset.acctact;H==="tobank"?f0():H==="tomarket"?p0():H==="send"&&rs();return}const S=g.target.closest("[data-acct]");S&&($v(S.dataset.acct),de())}),(M=document.getElementById("feedView"))==null||M.addEventListener("click",g=>{if(g.target.closest("#feedBoardLink")){const C=document.getElementById("navBoard");C&&C.href&&window.open(C.href,"_blank","noopener")}}),document.querySelectorAll(".qty-btn[data-qty]").forEach(g=>{g.addEventListener("click",()=>{const C=document.getElementById("qtyInput");C.value=Math.max(1,Bn()+Number(g.dataset.qty))})}),document.getElementById("btnMaxQty").addEventListener("click",()=>{var z,Z,pe,ge;const{roomData:g,uid:C,selectedStockId:S}=f,H=(Z=(z=g==null?void 0:g.stocks)==null?void 0:z[S])==null?void 0:Z.price,A=((ge=(pe=g==null?void 0:g.players)==null?void 0:pe[C])==null?void 0:ge.cash)||0;H&&(document.getElementById("qtyInput").value=Math.max(1,Math.floor(A/(H*1.0002))))}),document.getElementById("btnBuy").addEventListener("click",()=>zi("buy")),document.getElementById("btnSell").addEventListener("click",()=>zi("sell")),document.getElementById("btnSellAll").addEventListener("click",()=>zi("sellAll")),document.getElementById("orderTabs").addEventListener("click",g=>{const C=g.target.closest(".order-tab");if(!C)return;const S=C.dataset.tab;document.querySelectorAll(".order-tab").forEach(H=>H.classList.toggle("is-active",H===C)),document.querySelectorAll(".order-pane").forEach(H=>H.classList.toggle("hidden",H.dataset.pane!==S))}),document.getElementById("btnLimitBuy").addEventListener("click",()=>oc("buy")),document.getElementById("btnLimitSell").addEventListener("click",()=>oc("sell")),document.getElementById("btnSetStop").addEventListener("click",a0),document.getElementById("btnSplitBuy").addEventListener("click",c0),document.getElementById("orderList").addEventListener("click",g=>{const C=g.target.closest("[data-cancel]");C&&l0(C.dataset.cancel)}),document.getElementById("btnAlert").addEventListener("click",()=>{var Z;const{roomData:g,selectedStockId:C}=f,S=(Z=g==null?void 0:g.stocks)==null?void 0:Z[C];if(!S)return O("종목을 먼저 선택하세요","err");try{window.Notification&&Notification.permission==="default"&&Notification.requestPermission()}catch{}const H=Nv(S.name),A=prompt(`${S.name} 가격 알림 설정
현재가 ${S.price.toLocaleString("ko-KR")}원
알림받을 가격을 입력하세요 (0 또는 빈칸 = 해제):`,H||S.price);if(A===null)return;const z=Math.floor(Number(A)||0);Rv(S.name,z),O(z?`${S.name} ${z.toLocaleString("ko-KR")}원 알림 설정됨`:`${S.name} 알림 해제됨`),de()}),document.getElementById("btnApplyIpo").addEventListener("click",u0);const s=document.getElementById("stockSearch"),i=document.getElementById("stockSearchClear");s&&s.addEventListener("input",()=>{Bi(s.value),i&&(i.hidden=!s.value),de()}),i&&i.addEventListener("click",()=>{s.value="",Bi(""),i.hidden=!0,s.focus(),de()});const r=document.getElementById("marketStatusChip");r&&r.addEventListener("click",()=>{const g=document.getElementById("marketStatusPanel");if(!g)return;const C=g.classList.toggle("hidden");r.setAttribute("aria-expanded",C?"false":"true"),!C&&f.roomData&&wu(f)}),(N=document.getElementById("btnBackHome"))==null||N.addEventListener("click",rs)}m0();
