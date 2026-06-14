(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var Xr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(n,e){if(!n)throw Bt(e)},Bt=function(n){return new Error("Firebase Database ("+Ea.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},zl=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},zs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),i.push(t[h],t[u],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ia(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||u==null)throw new Kl;const d=r<<2|a>>4;if(i.push(d),l!==64){const f=a<<4&240|l>>2;if(i.push(f),u!==64){const m=l<<6&192|u;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ba=function(n){const e=Ia(n);return zs.encodeByteArray(e,!0)},ni=function(n){return ba(n).replace(/\./g,"")},ii=function(n){try{return zs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(n){return Ca(void 0,n)}function Ca(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ql(t)||(n[t]=Ca(n[t],e[t]));return n}function Ql(n){return n!=="__proto__"}/**
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
 */function Jl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xl=()=>Jl().__FIREBASE_DEFAULTS__,Zl=()=>{if(typeof process>"u"||typeof Xr>"u")return;const n=Xr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},eu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ii(n[1]);return e&&JSON.parse(e)},Ks=()=>{try{return Xl()||Zl()||eu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ta=n=>{var e,t;return(t=(e=Ks())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},tu=n=>{const e=Ta(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Sa=()=>{var n;return(n=Ks())===null||n===void 0?void 0:n.config},ka=n=>{var e;return(e=Ks())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function nu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ni(JSON.stringify(t)),ni(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ys(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function iu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function su(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ra(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ru(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ou(){return Ea.NODE_ADMIN===!0}function au(){try{return typeof indexedDB=="object"}catch{return!1}}function cu(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="FirebaseError";class Xe extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=lu,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nn.prototype.create)}}class Nn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?uu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Xe(s,a,i)}}function uu(n,e){return n.replace(hu,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const hu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n){return JSON.parse(n)}function Y(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=fn(ii(r[0])||""),t=fn(ii(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},du=function(n){const e=Na(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},fu=function(n){const e=Na(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function at(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function si(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ri(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function oi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Zr(r)&&Zr(o)){if(!oi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Zr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function nn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function sn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,h;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),h=1518500249):(l=r^o^a,h=1859775393):u<60?(l=r&o|a&(r|o),h=2400959708):(l=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+l+c+h+i[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function mu(n,e){const t=new _u(n,e);return t.subscribe.bind(t)}class _u{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");gu(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ts),s.error===void 0&&(s.error=ts),s.complete===void 0&&(s.complete=ts);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ts(){}function Rt(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,_(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Oi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ee(n){return n&&n._delegate?n._delegate:n}class ct{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tt="[DEFAULT]";/**
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
 */class vu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new le;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eu(e))try{this.getOrInitializeService({instanceIdentifier:tt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tt){return this.instances.has(e)}getOptions(e=tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:wu(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=tt){return this.component?this.component.multipleInstances?e:tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wu(n){return n===tt?void 0:n}function Eu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Iu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const bu={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Cu=B.INFO,Tu={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Su=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Tu[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qs{constructor(e){this.name=e,this._logLevel=Cu,this._logHandler=Su,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const ku=(n,e)=>e.some(t=>n instanceof t);let eo,to;function Ru(){return eo||(eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nu(){return to||(to=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Aa=new WeakMap,Es=new WeakMap,Pa=new WeakMap,ns=new WeakMap,Js=new WeakMap;function Au(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ve(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Aa.set(t,n)}).catch(()=>{}),Js.set(e,n),e}function Pu(n){if(Es.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Es.set(n,e)}let Is={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Es.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Pa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ve(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ou(n){Is=n(Is)}function Mu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(is(this),e,...t);return Pa.set(i,e.sort?e.sort():[e]),Ve(i)}:Nu().includes(n)?function(...e){return n.apply(is(this),e),Ve(Aa.get(this))}:function(...e){return Ve(n.apply(is(this),e))}}function Du(n){return typeof n=="function"?Mu(n):(n instanceof IDBTransaction&&Pu(n),ku(n,Ru())?new Proxy(n,Is):n)}function Ve(n){if(n instanceof IDBRequest)return Au(n);if(ns.has(n))return ns.get(n);const e=Du(n);return e!==n&&(ns.set(n,e),Js.set(e,n)),e}const is=n=>Js.get(n);function Lu(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Ve(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ve(o.result),c.oldVersion,c.newVersion,Ve(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const xu=["get","getKey","getAll","getAllKeys","count"],Fu=["put","add","delete","clear"],ss=new Map;function no(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ss.get(e))return ss.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Fu.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||xu.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return ss.set(e,r),r}Ou(n=>({...n,get:(e,t,i)=>no(e,t)||n.get(e,t,i),has:(e,t)=>!!no(e,t)||n.has(e,t)}));/**
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
 */class Uu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($u(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function $u(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bs="@firebase/app",io="0.10.13";/**
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
 */const Pe=new Qs("@firebase/app"),Bu="@firebase/app-compat",Wu="@firebase/analytics-compat",Hu="@firebase/analytics",Vu="@firebase/app-check-compat",ju="@firebase/app-check",Gu="@firebase/auth",qu="@firebase/auth-compat",zu="@firebase/database",Ku="@firebase/data-connect",Yu="@firebase/database-compat",Qu="@firebase/functions",Ju="@firebase/functions-compat",Xu="@firebase/installations",Zu="@firebase/installations-compat",eh="@firebase/messaging",th="@firebase/messaging-compat",nh="@firebase/performance",ih="@firebase/performance-compat",sh="@firebase/remote-config",rh="@firebase/remote-config-compat",oh="@firebase/storage",ah="@firebase/storage-compat",ch="@firebase/firestore",lh="@firebase/vertexai-preview",uh="@firebase/firestore-compat",hh="firebase",dh="10.14.1";/**
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
 */const Cs="[DEFAULT]",fh={[bs]:"fire-core",[Bu]:"fire-core-compat",[Hu]:"fire-analytics",[Wu]:"fire-analytics-compat",[ju]:"fire-app-check",[Vu]:"fire-app-check-compat",[Gu]:"fire-auth",[qu]:"fire-auth-compat",[zu]:"fire-rtdb",[Ku]:"fire-data-connect",[Yu]:"fire-rtdb-compat",[Qu]:"fire-fn",[Ju]:"fire-fn-compat",[Xu]:"fire-iid",[Zu]:"fire-iid-compat",[eh]:"fire-fcm",[th]:"fire-fcm-compat",[nh]:"fire-perf",[ih]:"fire-perf-compat",[sh]:"fire-rc",[rh]:"fire-rc-compat",[oh]:"fire-gcs",[ah]:"fire-gcs-compat",[ch]:"fire-fst",[uh]:"fire-fst-compat",[lh]:"fire-vertex","fire-js":"fire-js",[hh]:"fire-js-all"};/**
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
 */const ai=new Map,ph=new Map,Ts=new Map;function so(n,e){try{n.container.addComponent(e)}catch(t){Pe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nt(n){const e=n.name;if(Ts.has(e))return Pe.debug(`There were multiple attempts to register component ${e}.`),!1;Ts.set(e,n);for(const t of ai.values())so(t,n);for(const t of ph.values())so(t,n);return!0}function Xs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function me(n){return n.settings!==void 0}/**
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
 */const mh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},je=new Nn("app","Firebase",mh);/**
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
 */class _h{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}/**
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
 */const Ht=dh;function Oa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Cs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw je.create("bad-app-name",{appName:String(s)});if(t||(t=Sa()),!t)throw je.create("no-options");const r=ai.get(s);if(r){if(oi(t,r.options)&&oi(i,r.config))return r;throw je.create("duplicate-app",{appName:s})}const o=new Iu(s);for(const c of Ts.values())o.addComponent(c);const a=new _h(t,i,o);return ai.set(s,a),a}function Ma(n=Cs){const e=ai.get(n);if(!e&&n===Cs&&Sa())return Oa();if(!e)throw je.create("no-app",{appName:n});return e}function Ge(n,e,t){var i;let s=(i=fh[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pe.warn(a.join(" "));return}Nt(new ct(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const gh="firebase-heartbeat-database",yh=1,pn="firebase-heartbeat-store";let rs=null;function Da(){return rs||(rs=Lu(gh,yh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pn)}catch(t){console.warn(t)}}}}).catch(n=>{throw je.create("idb-open",{originalErrorMessage:n.message})})),rs}async function vh(n){try{const t=(await Da()).transaction(pn),i=await t.objectStore(pn).get(La(n));return await t.done,i}catch(e){if(e instanceof Xe)Pe.warn(e.message);else{const t=je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pe.warn(t.message)}}}async function ro(n,e){try{const i=(await Da()).transaction(pn,"readwrite");await i.objectStore(pn).put(e,La(n)),await i.done}catch(t){if(t instanceof Xe)Pe.warn(t.message);else{const i=je.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pe.warn(i.message)}}}function La(n){return`${n.name}!${n.options.appId}`}/**
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
 */const wh=1024,Eh=30*24*60*60*1e3;class Ih{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ch(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Eh}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Pe.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oo(),{heartbeatsToSend:i,unsentEntries:s}=bh(this._heartbeatsCache.heartbeats),r=ni(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Pe.warn(t),""}}}function oo(){return new Date().toISOString().substring(0,10)}function bh(n,e=wh){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ao(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ao(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Ch{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return au()?cu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ro(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ro(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ao(n){return ni(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Th(n){Nt(new ct("platform-logger",e=>new Uu(e),"PRIVATE")),Nt(new ct("heartbeat",e=>new Ih(e),"PRIVATE")),Ge(bs,io,n),Ge(bs,io,"esm2017"),Ge("fire-js","")}Th("");var Sh="firebase",kh="10.14.1";/**
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
 */Ge(Sh,kh,"app");function Zs(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function xa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rh=xa,Fa=new Nn("auth","Firebase",xa());/**
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
 */const ci=new Qs("@firebase/auth");function Nh(n,...e){ci.logLevel<=B.WARN&&ci.warn(`Auth (${Ht}): ${n}`,...e)}function Qn(n,...e){ci.logLevel<=B.ERROR&&ci.error(`Auth (${Ht}): ${n}`,...e)}/**
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
 */function fe(n,...e){throw er(n,...e)}function _e(n,...e){return er(n,...e)}function Ua(n,e,t){const i=Object.assign(Object.assign({},Rh()),{[e]:t});return new Nn("auth","Firebase",i).create(e,{appName:n.name})}function ke(n){return Ua(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function er(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Fa.create(n,...e)}function E(n,e,...t){if(!n)throw er(e,...t)}function be(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qn(e),new Error(e)}function Oe(n,e){n||be(e)}/**
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
 */function Ss(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ah(){return co()==="http:"||co()==="https:"}function co(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Ph(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ah()||su()||"connection"in navigator)?navigator.onLine:!0}function Oh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class An{constructor(e,t){this.shortDelay=e,this.longDelay=t,Oe(t>e,"Short delay should be less than long delay!"),this.isMobile=Ys()||Ra()}get(){return Ph()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tr(n,e){Oe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class $a{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Dh=new An(3e4,6e4);function Ze(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function et(n,e,t,i,s={}){return Ba(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Wt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},r);return iu()||(l.referrerPolicy="no-referrer"),$a.fetch()(Wa(n,n.config.apiHost,t,a),l)})}async function Ba(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Mh),e);try{const s=new xh(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Gn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gn(n,"user-disabled",o);const h=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ua(n,h,l);fe(n,h)}}catch(s){if(s instanceof Xe)throw s;fe(n,"network-request-failed",{message:String(s)})}}async function Pn(n,e,t,i,s={}){const r=await et(n,e,t,i,s);return"mfaPendingCredential"in r&&fe(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Wa(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?tr(n.config,s):`${n.config.apiScheme}://${s}`}function Lh(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(_e(this.auth,"network-request-failed")),Dh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=_e(n,e,i);return s.customData._tokenResponse=t,s}function lo(n){return n!==void 0&&n.enterprise!==void 0}class Fh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Lh(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Uh(n,e){return et(n,"GET","/v2/recaptchaConfig",Ze(n,e))}/**
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
 */async function $h(n,e){return et(n,"POST","/v1/accounts:delete",e)}async function Ha(n,e){return et(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function on(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bh(n,e=!1){const t=ee(n),i=await t.getIdToken(e),s=nr(i);E(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:on(os(s.auth_time)),issuedAtTime:on(os(s.iat)),expirationTime:on(os(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function os(n){return Number(n)*1e3}function nr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Qn("JWT malformed, contained fewer than 3 sections"),null;try{const s=ii(t);return s?JSON.parse(s):(Qn("Failed to decode base64 JWT payload"),null)}catch(s){return Qn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function uo(n){const e=nr(n);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Xe&&Wh(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Wh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Hh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ks{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=on(this.lastLoginAt),this.creationTime=on(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function li(n){var e;const t=n.auth,i=await n.getIdToken(),s=await mn(n,Ha(t,{idToken:i}));E(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Va(r.providerUserInfo):[],a=jh(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ks(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function Vh(n){const e=ee(n);await li(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jh(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Va(n){return n.map(e=>{var{providerId:t}=e,i=Zs(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Gh(n,e){const t=await Ba(n,{},async()=>{const i=Wt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Wa(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$a.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qh(n,e){return et(n,"POST","/v2/accounts:revokeToken",Ze(n,e))}/**
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
 */class bt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){E(e.length!==0,"internal-error");const t=uo(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(E(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Gh(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new bt;return i&&(E(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(E(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(E(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bt,this.toJSON())}_performRefresh(){return be("not implemented")}}/**
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
 */function De(n,e){E(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ce{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Zs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ks(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await mn(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bh(this,e)}reload(){return Vh(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await li(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(me(this.auth.app))return Promise.reject(ke(this.auth));const e=await this.getIdToken();return await mn(this,$h(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,c,l,h;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,T=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=t.createdAt)!==null&&l!==void 0?l:void 0,g=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:R,emailVerified:M,isAnonymous:b,providerData:N,stsTokenManager:C}=t;E(R&&C,e,"internal-error");const L=bt.fromJSON(this.name,C);E(typeof R=="string",e,"internal-error"),De(u,e.name),De(d,e.name),E(typeof M=="boolean",e,"internal-error"),E(typeof b=="boolean",e,"internal-error"),De(f,e.name),De(m,e.name),De(y,e.name),De(T,e.name),De(v,e.name),De(g,e.name);const $=new Ce({uid:R,auth:e,email:d,emailVerified:M,displayName:u,isAnonymous:b,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:L,createdAt:v,lastLoginAt:g});return N&&Array.isArray(N)&&($.providerData=N.map(F=>Object.assign({},F))),T&&($._redirectEventId=T),$}static async _fromIdTokenResponse(e,t,i=!1){const s=new bt;s.updateFromServerResponse(t);const r=new Ce({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await li(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];E(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Va(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new bt;a.updateFromIdToken(i);const c=new Ce({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new ks(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const ho=new Map;function Te(n){Oe(n instanceof Function,"Expected a class definition");let e=ho.get(n);return e?(Oe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ho.set(n,e),e)}/**
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
 */class ja{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ja.type="NONE";const fo=ja;/**
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
 */function Jn(n,e,t){return`firebase:${n}:${e}:${t}`}class Ct{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Jn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Jn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ct(Te(fo),e,i);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||Te(fo);const o=Jn(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const h=await l._get(o);if(h){const u=Ce._fromJSON(e,h);l!==r&&(a=u),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ct(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ct(r,e,i))}}/**
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
 */function po(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ka(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ga(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qa(e))return"Blackberry";if(Ja(e))return"Webos";if(qa(e))return"Safari";if((e.includes("chrome/")||za(e))&&!e.includes("edge/"))return"Chrome";if(Ya(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ga(n=se()){return/firefox\//i.test(n)}function qa(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function za(n=se()){return/crios\//i.test(n)}function Ka(n=se()){return/iemobile/i.test(n)}function Ya(n=se()){return/android/i.test(n)}function Qa(n=se()){return/blackberry/i.test(n)}function Ja(n=se()){return/webos/i.test(n)}function ir(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zh(n=se()){var e;return ir(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kh(){return ru()&&document.documentMode===10}function Xa(n=se()){return ir(n)||Ya(n)||Ja(n)||Qa(n)||/windows phone/i.test(n)||Ka(n)}/**
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
 */function Za(n,e=[]){let t;switch(n){case"Browser":t=po(se());break;case"Worker":t=`${po(se())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ht}/${i}`}/**
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
 */class Yh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Qh(n,e={}){return et(n,"GET","/v2/passwordPolicy",Ze(n,e))}/**
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
 */const Jh=6;class Xh{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Jh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Zh{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mo(this),this.idTokenSubscription=new mo(this),this.beforeStateQueue=new Yh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Te(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ct.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ha(this,{idToken:e}),i=await Ce._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await li(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Oh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(me(this.app))return Promise.reject(ke(this));const t=e?ee(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return me(this.app)?Promise.reject(ke(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return me(this.app)?Promise.reject(ke(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Te(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qh(this),t=new Xh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await qh(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Te(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await Ct.create(this,[Te(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Za(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Nh(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function mt(n){return ee(n)}class mo{constructor(e){this.auth=e,this.observer=null,this.addObserver=mu(t=>this.observer=t)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ed(n){Mi=n}function ec(n){return Mi.loadJS(n)}function td(){return Mi.recaptchaEnterpriseScript}function nd(){return Mi.gapiScript}function id(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const sd="recaptcha-enterprise",rd="NO_RECAPTCHA";class od{constructor(e){this.type=sd,this.auth=mt(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Uh(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Fh(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;lo(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(rd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&lo(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=td();c.length!==0&&(c+=a),ec(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function _o(n,e,t,i=!1){const s=new od(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Rs(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await _o(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _o(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
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
 */function ad(n,e){const t=Xs(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(oi(r,e??{}))return s;fe(s,"already-initialized")}return t.initialize({options:e})}function cd(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Te);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function ld(n,e,t){const i=mt(n);E(i._canInitEmulator,i,"emulator-config-failed"),E(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=tc(e),{host:o,port:a}=ud(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),hd()}function tc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ud(n){const e=tc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:go(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:go(o)}}}function go(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hd(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class sr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return be("not implemented")}_getIdTokenResponse(e){return be("not implemented")}_linkToIdToken(e,t){return be("not implemented")}_getReauthenticationResolver(e){return be("not implemented")}}async function dd(n,e){return et(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function fd(n,e){return Pn(n,"POST","/v1/accounts:signInWithPassword",Ze(n,e))}/**
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
 */async function pd(n,e){return Pn(n,"POST","/v1/accounts:signInWithEmailLink",Ze(n,e))}async function md(n,e){return Pn(n,"POST","/v1/accounts:signInWithEmailLink",Ze(n,e))}/**
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
 */class _n extends sr{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new _n(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new _n(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rs(e,t,"signInWithPassword",fd);case"emailLink":return pd(e,{email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rs(e,i,"signUpPassword",dd);case"emailLink":return md(e,{idToken:t,email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Tt(n,e){return Pn(n,"POST","/v1/accounts:signInWithIdp",Ze(n,e))}/**
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
 */const _d="http://localhost";class lt extends sr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Zs(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new lt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Tt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Tt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tt(e,t)}buildRequest(){const e={requestUri:_d,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wt(t)}return e}}/**
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
 */function gd(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yd(n){const e=nn(sn(n)).link,t=e?nn(sn(e)).deep_link_id:null,i=nn(sn(n)).deep_link_id;return(i?nn(sn(i)).link:null)||i||t||e||n}class rr{constructor(e){var t,i,s,r,o,a;const c=nn(sn(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(i=c.oobCode)!==null&&i!==void 0?i:null,u=gd((s=c.mode)!==null&&s!==void 0?s:null);E(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=yd(e);try{return new rr(t)}catch{return null}}}/**
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
 */class Vt{constructor(){this.providerId=Vt.PROVIDER_ID}static credential(e,t){return _n._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=rr.parseLink(t);return E(i,"argument-error"),_n._fromEmailAndCode(e,i.code,i.tenantId)}}Vt.PROVIDER_ID="password";Vt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class nc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class On extends nc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xe extends On{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xe.credential(e.oauthAccessToken)}catch{return null}}}xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";xe.PROVIDER_ID="facebook.com";/**
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
 */class Fe extends On{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lt._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Fe.credential(t,i)}catch{return null}}}Fe.GOOGLE_SIGN_IN_METHOD="google.com";Fe.PROVIDER_ID="google.com";/**
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
 */class Ue extends On{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.GITHUB_SIGN_IN_METHOD="github.com";Ue.PROVIDER_ID="github.com";/**
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
 */class $e extends On{constructor(){super("twitter.com")}static credential(e,t){return lt._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return $e.credential(t,i)}catch{return null}}}$e.TWITTER_SIGN_IN_METHOD="twitter.com";$e.PROVIDER_ID="twitter.com";/**
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
 */async function vd(n,e){return Pn(n,"POST","/v1/accounts:signUp",Ze(n,e))}/**
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
 */class ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Ce._fromIdTokenResponse(e,i,s),o=yo(i);return new ut({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=yo(i);return new ut({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function yo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ui extends Xe{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ui.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new ui(e,t,i,s)}}function ic(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ui._fromErrorAndOperation(n,r,e,i):r})}async function wd(n,e,t=!1){const i=await mn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ut._forOperation(n,"link",i)}/**
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
 */async function Ed(n,e,t=!1){const{auth:i}=n;if(me(i.app))return Promise.reject(ke(i));const s="reauthenticate";try{const r=await mn(n,ic(i,s,e,n),t);E(r.idToken,i,"internal-error");const o=nr(r.idToken);E(o,i,"internal-error");const{sub:a}=o;return E(n.uid===a,i,"user-mismatch"),ut._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&fe(i,"user-mismatch"),r}}/**
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
 */async function sc(n,e,t=!1){if(me(n.app))return Promise.reject(ke(n));const i="signIn",s=await ic(n,i,e),r=await ut._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Id(n,e){return sc(mt(n),e)}/**
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
 */async function rc(n){const e=mt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bd(n,e,t){if(me(n.app))return Promise.reject(ke(n));const i=mt(n),o=await Rs(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vd).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&rc(n),c}),a=await ut._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function Cd(n,e,t){return me(n.app)?Promise.reject(ke(n)):Id(ee(n),Vt.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&rc(n),i})}function Td(n,e,t,i){return ee(n).onIdTokenChanged(e,t,i)}function Sd(n,e,t){return ee(n).beforeAuthStateChanged(e,t)}function kd(n,e,t,i){return ee(n).onAuthStateChanged(e,t,i)}function Rd(n){return ee(n).signOut()}const hi="__sak";/**
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
 */class oc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hi,"1"),this.storage.removeItem(hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Nd=1e3,Ad=10;class ac extends oc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Kh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ad):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Nd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ac.type="LOCAL";const Pd=ac;/**
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
 */class cc extends oc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cc.type="SESSION";const lc=cc;/**
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
 */function Od(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Di(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await Od(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Di.receivers=[];/**
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
 */function or(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Md{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=or("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const d=u;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ge(){return window}function Dd(n){ge().location.href=n}/**
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
 */function uc(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function Ld(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xd(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Fd(){return uc()?self:null}/**
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
 */const hc="firebaseLocalStorageDb",Ud=1,di="firebaseLocalStorage",dc="fbase_key";class Mn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Li(n,e){return n.transaction([di],e?"readwrite":"readonly").objectStore(di)}function $d(){const n=indexedDB.deleteDatabase(hc);return new Mn(n).toPromise()}function Ns(){const n=indexedDB.open(hc,Ud);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(di,{keyPath:dc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(di)?e(i):(i.close(),await $d(),e(await Ns()))})})}async function vo(n,e,t){const i=Li(n,!0).put({[dc]:e,value:t});return new Mn(i).toPromise()}async function Bd(n,e){const t=Li(n,!1).get(e),i=await new Mn(t).toPromise();return i===void 0?null:i.value}function wo(n,e){const t=Li(n,!0).delete(e);return new Mn(t).toPromise()}const Wd=800,Hd=3;class fc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ns(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Hd)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(Fd()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ld(),!this.activeServiceWorker)return;this.sender=new Md(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ns();return await vo(e,hi,"1"),await wo(e,hi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>vo(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Bd(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Li(s,!1).getAll();return new Mn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fc.type="LOCAL";const Vd=fc;new An(3e4,6e4);/**
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
 */function jd(n,e){return e?Te(e):(E(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ar extends sr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Gd(n){return sc(n.auth,new ar(n),n.bypassAuthState)}function qd(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Ed(t,new ar(n),n.bypassAuthState)}async function zd(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),wd(t,new ar(n),n.bypassAuthState)}/**
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
 */class pc{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gd;case"linkViaPopup":case"linkViaRedirect":return zd;case"reauthViaPopup":case"reauthViaRedirect":return qd;default:fe(this.auth,"internal-error")}}resolve(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Kd=new An(2e3,1e4);class wt extends pc{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,wt.currentPopupAction&&wt.currentPopupAction.cancel(),wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");const e=or();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kd.get())};e()}}wt.currentPopupAction=null;/**
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
 */const Yd="pendingRedirect",Xn=new Map;class Qd extends pc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Xn.get(this.auth._key());if(!e){try{const i=await Jd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Xn.set(this.auth._key(),e)}return this.bypassAuthState||Xn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jd(n,e){const t=ef(e),i=Zd(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Xd(n,e){Xn.set(n._key(),e)}function Zd(n){return Te(n._redirectPersistence)}function ef(n){return Jn(Yd,n.config.apiKey,n.name)}async function tf(n,e,t=!1){if(me(n.app))return Promise.reject(ke(n));const i=mt(n),s=jd(i,e),o=await new Qd(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const nf=10*60*1e3;class sf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!mc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(_e(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eo(e))}saveEventToCache(e){this.cachedEventUids.add(Eo(e)),this.lastProcessedEventTime=Date.now()}}function Eo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function mc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mc(n);default:return!1}}/**
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
 */async function of(n,e={}){return et(n,"GET","/v1/projects",e)}/**
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
 */const af=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cf=/^https?/;async function lf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await of(n);for(const t of e)try{if(uf(t))return}catch{}fe(n,"unauthorized-domain")}function uf(n){const e=Ss(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!cf.test(t))return!1;if(af.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const hf=new An(3e4,6e4);function Io(){const n=ge().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function df(n){return new Promise((e,t)=>{var i,s,r;function o(){Io(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Io(),t(_e(n,"network-request-failed"))},timeout:hf.get()})}if(!((s=(i=ge().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ge().gapi)===null||r===void 0)&&r.load)o();else{const a=id("iframefcb");return ge()[a]=()=>{gapi.load?o():t(_e(n,"network-request-failed"))},ec(`${nd()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Zn=null,e})}let Zn=null;function ff(n){return Zn=Zn||df(n),Zn}/**
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
 */const pf=new An(5e3,15e3),mf="__/auth/iframe",_f="emulator/auth/iframe",gf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vf(n){const e=n.config;E(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?tr(e,_f):`https://${n.config.authDomain}/${mf}`,i={apiKey:e.apiKey,appName:n.name,v:Ht},s=yf.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Wt(i).slice(1)}`}async function wf(n){const e=await ff(n),t=ge().gapi;return E(t,n,"internal-error"),e.open({where:document.body,url:vf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gf,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=_e(n,"network-request-failed"),a=ge().setTimeout(()=>{r(o)},pf.get());function c(){ge().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Ef={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},If=500,bf=600,Cf="_blank",Tf="http://localhost";class bo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sf(n,e,t,i=If,s=bf){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ef),{width:i.toString(),height:s.toString(),top:r,left:o}),l=se().toLowerCase();t&&(a=za(l)?Cf:t),Ga(l)&&(e=e||Tf,c.scrollbars="yes");const h=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(zh(l)&&a!=="_self")return kf(e||"",a),new bo(null);const u=window.open(e||"",a,h);E(u,n,"popup-blocked");try{u.focus()}catch{}return new bo(u)}function kf(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Rf="__/auth/handler",Nf="emulator/auth/handler",Af=encodeURIComponent("fac");async function Co(n,e,t,i,s,r){E(n.config.authDomain,n,"auth-domain-config-required"),E(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ht,eventId:s};if(e instanceof nc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",si(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries({}))o[h]=u}if(e instanceof On){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),l=c?`#${Af}=${encodeURIComponent(c)}`:"";return`${Pf(n)}?${Wt(a).slice(1)}${l}`}function Pf({config:n}){return n.emulator?tr(n,Nf):`https://${n.authDomain}/${Rf}`}/**
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
 */const as="webStorageSupport";class Of{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lc,this._completeRedirectFn=tf,this._overrideRedirectResult=Xd}async _openPopup(e,t,i,s){var r;Oe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Co(e,t,i,Ss(),s);return Sf(e,o,or())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Co(e,t,i,Ss(),s);return Dd(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Oe(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await wf(e),i=new sf(e);return t.register("authEvent",s=>(E(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(as,{type:as},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[as];o!==void 0&&t(!!o),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xa()||qa()||ir()}}const Mf=Of;var To="@firebase/auth",So="1.7.9";/**
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
 */class Df{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lf(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xf(n){Nt(new ct("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Za(n)},l=new Zh(i,s,r,c);return cd(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Nt(new ct("auth-internal",e=>{const t=mt(e.getProvider("auth").getImmediate());return(i=>new Df(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(To,So,Lf(n)),Ge(To,So,"esm2017")}/**
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
 */const Ff=5*60,Uf=ka("authIdTokenMaxAge")||Ff;let ko=null;const $f=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Uf)return;const s=t==null?void 0:t.token;ko!==s&&(ko=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Bf(n=Ma()){const e=Xs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ad(n,{popupRedirectResolver:Mf,persistence:[Vd,Pd,lc]}),i=ka("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=$f(r.toString());Sd(t,o,()=>o(t.currentUser)),Td(t,a=>o(a))}}const s=Ta("auth");return s&&ld(t,`http://${s}`),t}function Wf(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ed({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=_e("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Wf().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xf("Browser");var Ro={};const No="@firebase/database",Ao="1.0.8";/**
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
 */let _c="";function Hf(n){_c=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Y(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:fn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return pe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Vf(e)}}catch{}return new jf},it=gc("localStorage"),Gf=gc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Qs("@firebase/database"),yc=function(){let n=1;return function(){return n++}}(),vc=function(n){const e=yu(n),t=new pu;t.update(e);const i=t.digest();return zs.encodeByteArray(i)},Dn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Dn.apply(null,i):typeof i=="object"?e+=Y(i):e+=i,e+=" "}return e};let an=null,Po=!0;const qf=function(n,e){_(!0,"Can't turn on custom loggers persistently."),St.logLevel=B.VERBOSE,an=St.log.bind(St)},X=function(...n){if(Po===!0&&(Po=!1,an===null&&Gf.get("logging_enabled")===!0&&qf()),an){const e=Dn.apply(null,n);an(e)}},Ln=function(n){return function(...e){X(n,...e)}},As=function(...n){const e="FIREBASE INTERNAL ERROR: "+Dn(...n);St.error(e)},Me=function(...n){const e=`FIREBASE FATAL ERROR: ${Dn(...n)}`;throw St.error(e),new Error(e)},ie=function(...n){const e="FIREBASE WARNING: "+Dn(...n);St.warn(e)},zf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ie("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Kf=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},At="[MIN_NAME]",ht="[MAX_NAME]",_t=function(n,e){if(n===e)return 0;if(n===At||e===ht)return-1;if(e===At||n===ht)return 1;{const t=Oo(n),i=Oo(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Yf=function(n,e){return n===e?0:n<e?-1:1},Xt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Y(e))},cr=function(n){if(typeof n!="object"||n===null)return Y(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Y(e[i]),t+=":",t+=cr(n[e[i]]);return t+="}",t},wc=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Z(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ec=function(n){_(!xi(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const h=l.join("");let u="";for(c=0;c<64;c+=8){let d=parseInt(h.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Qf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Jf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Xf(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Zf=new RegExp("^-?(0*)\\d{1,10}$"),ep=-2147483648,tp=2147483647,Oo=function(n){if(Zf.test(n)){const e=Number(n);if(e>=ep&&e<=tp)return e}return null},jt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ie("Exception was thrown by user callback.",t),e},Math.floor(0))}},np=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},cn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class ip{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ie(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(X("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ie(e)}}class ei{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ei.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="5",Ic="v",bc="s",Cc="r",Tc="f",Sc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kc="ls",Rc="p",Ps="ac",Nc="websocket",Ac="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t,i,s,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=it.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&it.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function rp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Oc(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let i;if(e===Nc)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ac)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rp(n)&&(t.ns=n.namespace);const s=[];return Z(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.counters_={}}incrementCounter(e,t=1){pe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Yl(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs={},ls={};function ur(n){const e=n.toString();return cs[e]||(cs[e]=new op),cs[e]}function ap(n,e){const t=n.toString();return ls[t]||(ls[t]=e()),ls[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&jt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="start",lp="close",up="pLPCommand",hp="pRTLPCB",Mc="id",Dc="pw",Lc="ser",dp="cb",fp="seg",pp="ts",mp="d",_p="dframe",xc=1870,Fc=30,gp=xc-Fc,yp=25e3,vp=3e4;class Et{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ln(e),this.stats_=ur(t),this.urlFn=c=>(this.appCheckToken&&(c[Ps]=this.appCheckToken),Oc(t,Ac,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new cp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vp)),Kf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hr((...r)=>{const[o,a,c,l,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mo)this.id=a,this.password=c;else if(o===lp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Mo]="t",i[Lc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[dp]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ic]=lr,this.transportSessionId&&(i[bc]=this.transportSessionId),this.lastSessionId&&(i[kc]=this.lastSessionId),this.applicationId&&(i[Rc]=this.applicationId),this.appCheckToken&&(i[Ps]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sc.test(location.hostname)&&(i[Cc]=Tc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Et.forceAllow_=!0}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){return Et.forceAllow_?!0:!Et.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qf()&&!Jf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Y(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ba(t),s=wc(i,gp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[_p]="t",i[Mc]=e,i[Dc]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Y(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class hr{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yc(),window[up+this.uniqueCallbackIdentifier]=e,window[hp+this.uniqueCallbackIdentifier]=t,this.myIFrame=hr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){X("frame writing exception"),a.stack&&X(a.stack),X(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||X("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mc]=this.myID,e[Dc]=this.myPW,e[Lc]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fc+i.length<=xc;){const o=this.pendingSegs.shift();i=i+"&"+fp+s+"="+o.seg+"&"+pp+s+"="+o.ts+"&"+mp+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(yp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{X("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=16384,Ep=45e3;let fi=null;typeof MozWebSocket<"u"?fi=MozWebSocket:typeof WebSocket<"u"&&(fi=WebSocket);class ue{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ln(this.connId),this.stats_=ur(t),this.connURL=ue.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Ic]=lr,typeof location<"u"&&location.hostname&&Sc.test(location.hostname)&&(o[Cc]=Tc),t&&(o[bc]=t),i&&(o[kc]=i),s&&(o[Ps]=s),r&&(o[Rc]=r),Oc(e,Nc,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,it.set("previous_websocket_failure",!0);try{let i;ou(),this.mySock=new fi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ue.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&fi!==null&&!ue.forceDisallow_}static previouslyFailed(){return it.isInMemoryStorage||it.get("previous_websocket_failure")===!0}markConnectionHealthy(){it.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=fn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Y(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=wc(t,wp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ep))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ue.responsesRequiredToBeHealthy=2;ue.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Et,ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ue&&ue.isAvailable();let i=t&&!ue.previouslyFailed();if(e.webSocketOnly&&(t||ie("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ue];else{const s=this.transports_=[];for(const r of gn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);gn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=6e4,bp=5e3,Cp=10*1024,Tp=100*1024,us="t",Do="d",Sp="s",Lo="r",kp="e",xo="o",Fo="a",Uo="n",$o="p",Rp="h";class Np{constructor(e,t,i,s,r,o,a,c,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ln("c:"+this.id+":"),this.transportManager_=new gn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=cn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Tp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(us in e){const t=e[us];t===Fo?this.upgradeIfSecondaryHealthy_():t===Lo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===xo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Xt("t",e),i=Xt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$o,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Uo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Xt("t",e),i=Xt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Xt(us,e);if(Do in e){const i=e[Do];if(t===Rp){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Uo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Sp?this.onConnectionShutdown_(i):t===Lo?this.onReset_(i):t===kp?As("Server Error: "+i):t===xo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):As("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),lr!==i&&ie("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),cn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ip))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):cn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$o,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(it.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends $c{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ys()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new pi}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=32,Wo=768;class U{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function x(){return new U("")}function S(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ke(n){return n.pieces_.length-n.pieceNum_}function V(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new U(n.pieces_,e)}function dr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Ap(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function yn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Bc(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new U(e,0)}function K(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof U)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new U(t,0)}function A(n){return n.pieceNum_>=n.pieces_.length}function ne(n,e){const t=S(n),i=S(e);if(t===null)return e;if(t===i)return ne(V(n),V(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Pp(n,e){const t=yn(n,0),i=yn(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=_t(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function fr(n,e){if(Ke(n)!==Ke(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ce(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ke(n)>Ke(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Op{constructor(e,t){this.errorPrefix_=t,this.parts_=yn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Oi(this.parts_[i]);Wc(this)}}function Mp(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Oi(e),Wc(n)}function Dp(n){const e=n.parts_.pop();n.byteLength_-=Oi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Wc(n){if(n.byteLength_>Wo)throw new Error(n.errorPrefix_+"has a key path longer than "+Wo+" bytes ("+n.byteLength_+").");if(n.parts_.length>Bo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bo+") or object contains a cycle "+nt(n))}function nt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends $c{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new pr}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=1e3,Lp=60*5*1e3,Ho=30*1e3,xp=1.3,Fp=3e4,Up="server_kill",Vo=3;class Re extends Uc{constructor(e,t,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Re.nextPersistentConnectionId_++,this.log_=Ln("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zt,this.maxReconnectDelay_=Lp,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Y(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new le,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Re.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&pe(e,"w")){const i=at(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ie(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ho)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=du(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Y(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):As("Unrecognized action received from server: "+Y(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Fp&&(this.reconnectDelay_=Zt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Re.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(u){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?X("getToken() completed but was canceled"):(X("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Np(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{ie(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Up)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ie(u),c())}}}interrupt(e){X("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){X("Resuming connection for reason: "+e),delete this.interruptReasons_[e],si(this.interruptReasons_)&&(this.reconnectDelay_=Zt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>cr(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new U(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){X("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vo&&(this.reconnectDelay_=Ho,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){X("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+_c.replace(/\./g,"-")]=1,Ys()?e["framework.cordova"]=1:Ra()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pi.getInstance().currentlyOnline();return si(this.interruptReasons_)&&e}}Re.nextPersistentConnectionId_=0;Re.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new P(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new P(At,e),s=new P(At,t);return this.compare(i,s)!==0}minPost(){return P.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn;class Hc extends Fi{static get __EMPTY_NODE(){return qn}static set __EMPTY_NODE(e){qn=e}compare(e,t){return _t(e.name,t.name)}isDefinedOn(e){throw Bt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return P.MIN}maxPost(){return new P(ht,qn)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new P(e,qn)}toString(){return".key"}}const kt=new Hc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class J{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??J.RED,this.left=s??re.EMPTY_NODE,this.right=r??re.EMPTY_NODE}copy(e,t,i,s,r){return new J(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return re.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}J.RED=!0;J.BLACK=!1;class $p{copy(e,t,i,s,r){return this}insert(e,t,i){return new J(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class re{constructor(e,t=re.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new re(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,J.BLACK,null,null))}remove(e){return new re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,J.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new zn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new zn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new zn(this.root_,null,this.comparator_,!0,e)}}re.EMPTY_NODE=new $p;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(n,e){return _t(n.name,e.name)}function mr(n,e){return _t(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;function Wp(n){Os=n}const Vc=function(n){return typeof n=="number"?"number:"+Ec(n):"string:"+n},jc=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pe(e,".sv"),"Priority must be a string or number.")}else _(n===Os||n.isEmpty(),"priority of unexpected type.");_(n===Os||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;class Q{constructor(e,t=Q.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jc(this.priorityNode_)}static set __childrenNodeConstructor(e){jo=e}static get __childrenNodeConstructor(){return jo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Q(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Q.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return A(e)?this:S(e)===".priority"?this.priorityNode_:Q.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Q.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=S(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(_(i!==".priority"||Ke(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Q.__childrenNodeConstructor.EMPTY_NODE.updateChild(V(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Vc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ec(this.value_):e+=this.value_,this.lazyHash_=vc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Q.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Q.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Q.VALUE_TYPE_ORDER.indexOf(t),r=Q.VALUE_TYPE_ORDER.indexOf(i);return _(s>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Q.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc,qc;function Hp(n){Gc=n}function Vp(n){qc=n}class jp extends Fi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?_t(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return P.MIN}maxPost(){return new P(ht,new Q("[PRIORITY-POST]",qc))}makePost(e,t){const i=Gc(e);return new P(t,new Q("[PRIORITY-POST]",i))}toString(){return".priority"}}const q=new jp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=Math.log(2);class qp{constructor(e){const t=r=>parseInt(Math.log(r)/Gp,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const mi=function(n,e,t,i){n.sort(e);const s=function(c,l){const h=l-c;let u,d;if(h===0)return null;if(h===1)return u=n[c],d=t?t(u):u,new J(d,u.node,J.BLACK,null,null);{const f=parseInt(h/2,10)+c,m=s(c,f),y=s(f+1,l);return u=n[f],d=t?t(u):u,new J(d,u.node,J.BLACK,m,y)}},r=function(c){let l=null,h=null,u=n.length;const d=function(m,y){const T=u-m,v=u;u-=m;const g=s(T+1,v),R=n[T],M=t?t(R):R;f(new J(M,R.node,y,null,g))},f=function(m){l?(l.left=m,l=m):(h=m,l=m)};for(let m=0;m<c.count;++m){const y=c.nextBitIsOne(),T=Math.pow(2,c.count-(m+1));y?d(T,J.BLACK):(d(T,J.BLACK),d(T,J.RED))}return h},o=new qp(n.length),a=r(o);return new re(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs;const vt={};class Se{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _(vt&&q,"ChildrenNode.ts has not been loaded"),hs=hs||new Se({".priority":vt},{".priority":q}),hs}get(e){const t=at(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof re?t:null}hasIndex(e){return pe(this.indexSet_,e.toString())}addIndex(e,t){_(e!==kt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(P.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=mi(i,e.getCompare()):a=vt;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new Se(h,l)}addToIndexes(e,t){const i=ri(this.indexes_,(s,r)=>{const o=at(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),s===vt)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(P.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),mi(a,o.getCompare())}else return vt;else{const a=t.get(e.name);let c=s;return a&&(c=c.remove(new P(e.name,a))),c.insert(e,e.node)}});return new Se(i,this.indexSet_)}removeFromIndexes(e,t){const i=ri(this.indexes_,s=>{if(s===vt)return s;{const r=t.get(e.name);return r?s.remove(new P(e.name,r)):s}});return new Se(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en;class w{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&jc(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return en||(en=new w(new re(mr),null,Se.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||en}updatePriority(e){return this.children_.isEmpty()?this:new w(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?en:t}}getChild(e){const t=S(e);return t===null?this:this.getImmediateChild(t).getChild(V(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new P(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?en:this.priorityNode_;return new w(s,o,r)}}updateChild(e,t){const i=S(e);if(i===null)return t;{_(S(e)!==".priority"||Ke(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(V(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(q,(o,a)=>{t[o]=a.val(e),i++,r&&w.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Vc(this.getPriority().val())+":"),this.forEachChild(q,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":vc(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new P(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new P(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new P(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,P.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,P.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xn?-1:0}withIndex(e){if(e===kt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new w(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===kt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(q),s=t.getIterator(q);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===kt?null:this.indexMap_.get(e.toString())}}w.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zp extends w{constructor(){super(new re(mr),w.EMPTY_NODE,Se.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return w.EMPTY_NODE}isEmpty(){return!1}}const xn=new zp;Object.defineProperties(P,{MIN:{value:new P(At,w.EMPTY_NODE)},MAX:{value:new P(ht,xn)}});Hc.__EMPTY_NODE=w.EMPTY_NODE;Q.__childrenNodeConstructor=w;Wp(xn);Vp(xn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=!0;function z(n,e=null){if(n===null)return w.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Q(t,z(e))}if(!(n instanceof Array)&&Kp){const t=[];let i=!1;if(Z(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=z(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new P(o,c)))}}),t.length===0)return w.EMPTY_NODE;const r=mi(t,Bp,o=>o.name,mr);if(i){const o=mi(t,q.getCompare());return new w(r,z(e),new Se({".priority":o},{".priority":q}))}else return new w(r,z(e),Se.Default)}else{let t=w.EMPTY_NODE;return Z(n,(i,s)=>{if(pe(n,i)&&i.substring(0,1)!=="."){const r=z(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(z(e))}}Hp(z);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp extends Fi{constructor(e){super(),this.indexPath_=e,_(!A(e)&&S(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?_t(e.name,t.name):r}makePost(e,t){const i=z(e),s=w.EMPTY_NODE.updateChild(this.indexPath_,i);return new P(t,s)}maxPost(){const e=w.EMPTY_NODE.updateChild(this.indexPath_,xn);return new P(ht,e)}toString(){return yn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp extends Fi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?_t(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return P.MIN}maxPost(){return P.MAX}makePost(e,t){const i=z(e);return new P(t,i)}toString(){return".value"}}const Jp=new Qp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n){return{type:"value",snapshotNode:n}}function Pt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function vn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function wn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Xp(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(vn(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Pt(t,i)):o.trackChildChange(wn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(q,(s,r)=>{t.hasChild(s)||i.trackChildChange(vn(s,r))}),t.isLeafNode()||t.forEachChild(q,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(wn(s,r,o))}else i.trackChildChange(Pt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?w.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.indexedFilter_=new _r(e.getIndex()),this.index_=e.getIndex(),this.startPost_=En.getStartPost_(e),this.endPost_=En.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new P(t,i))||(i=w.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=w.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(w.EMPTY_NODE);const r=this;return t.forEachChild(q,(o,a)=>{r.matches(new P(o,a))||(s=s.updateImmediateChild(o,w.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new En(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new P(t,i))||(i=w.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=w.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=w.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(w.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,w.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const c=new P(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(h&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(wn(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(vn(t,u));const y=a.updateImmediateChild(t,w.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Pt(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return i.isEmpty()?e:h&&o(l,c)>=0?(r!=null&&(r.trackChildChange(vn(l.name,l.node)),r.trackChildChange(Pt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,w.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:At}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ht}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new gr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function em(n){return n.loadsAllData()?new _r(n.getIndex()):n.hasLimit()?new Zp(n):new En(n)}function Go(n){const e={};if(n.isDefault())return e;let t;if(n.index_===q?t="$priority":n.index_===Jp?t="$value":n.index_===kt?t="$key":(_(n.index_ instanceof Yp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Y(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Y(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Y(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Y(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Y(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function qo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Uc{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ln("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=_i.getListenId_(e,i),a={};this.listens_[o]=a;const c=Go(e._queryParams);this.restRequest_(r+".json",c,(l,h)=>{let u=h;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,i),at(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,t){const i=_i.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Go(e._queryParams),i=e._path.toString(),s=new le;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=fn(a.responseText)}catch{ie("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&ie("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.rootNode_=w.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(){return{value:null,children:new Map}}function Gt(n,e,t){if(A(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=S(e);n.children.has(i)||n.children.set(i,gi());const s=n.children.get(i);e=V(e),Gt(s,e,t)}}function Ms(n,e){if(A(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(q,(i,s)=>{Gt(n,new U(i),s)}),Ms(n,e)}}else if(n.children.size>0){const t=S(e);return e=V(e),n.children.has(t)&&Ms(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Ds(n,e,t){n.value!==null?t(e,n.value):nm(n,(i,s)=>{const r=new U(e.toString()+"/"+i);Ds(s,r,t)})}function nm(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Z(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=10*1e3,sm=30*1e3,rm=5*60*1e3;class om{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new im(e);const i=zo+(sm-zo)*Math.random();cn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Z(e,(s,r)=>{r>0&&pe(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),cn(this.reportStats_.bind(this),Math.floor(Math.random()*2*rm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(he||(he={}));function yr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=he.ACK_USER_WRITE,this.source=yr()}operationForChild(e){if(A(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new U(e));return new yi(x(),t,this.revert)}}else return _(S(this.path)===e,"operationForChild called for unrelated child."),new yi(V(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t){this.source=e,this.path=t,this.type=he.LISTEN_COMPLETE}operationForChild(e){return A(this.path)?new In(this.source,x()):new In(this.source,V(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=he.OVERWRITE}operationForChild(e){return A(this.path)?new dt(this.source,x(),this.snap.getImmediateChild(e)):new dt(this.source,V(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=he.MERGE}operationForChild(e){if(A(this.path)){const t=this.children.subtree(new U(e));return t.isEmpty()?null:t.value?new dt(this.source,x(),t.value):new Ot(this.source,x(),t)}else return _(S(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ot(this.source,V(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(A(e))return this.isFullyInitialized()&&!this.filtered_;const t=S(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cm(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Xp(o.childName,o.snapshotNode))}),tn(n,s,"child_removed",e,i,t),tn(n,s,"child_added",e,i,t),tn(n,s,"child_moved",r,i,t),tn(n,s,"child_changed",e,i,t),tn(n,s,"value",e,i,t),s}function tn(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,c)=>um(n,a,c)),o.forEach(a=>{const c=lm(n,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function lm(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function um(n,e,t){if(e.childName==null||t.childName==null)throw Bt("Should only compare child_ events.");const i=new P(e.childName,e.snapshotNode),s=new P(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(n,e){return{eventCache:n,serverCache:e}}function ln(n,e,t,i){return Ui(new Ye(e,t,i),n.serverCache)}function Kc(n,e,t,i){return Ui(n.eventCache,new Ye(e,t,i))}function vi(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ft(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds;const hm=()=>(ds||(ds=new re(Yf)),ds);class G{constructor(e,t=hm()){this.value=e,this.children=t}static fromObject(e){let t=new G(null);return Z(e,(i,s)=>{t=t.set(new U(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:x(),value:this.value};if(A(e))return null;{const i=S(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(V(e),t);return r!=null?{path:K(new U(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(A(e))return this;{const t=S(e),i=this.children.get(t);return i!==null?i.subtree(V(e)):new G(null)}}set(e,t){if(A(e))return new G(t,this.children);{const i=S(e),r=(this.children.get(i)||new G(null)).set(V(e),t),o=this.children.insert(i,r);return new G(this.value,o)}}remove(e){if(A(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const t=S(e),i=this.children.get(t);if(i){const s=i.remove(V(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new G(null):new G(this.value,r)}else return this}}get(e){if(A(e))return this.value;{const t=S(e),i=this.children.get(t);return i?i.get(V(e)):null}}setTree(e,t){if(A(e))return t;{const i=S(e),r=(this.children.get(i)||new G(null)).setTree(V(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new G(this.value,o)}}fold(e){return this.fold_(x(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(K(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,x(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(A(e))return null;{const r=S(e),o=this.children.get(r);return o?o.findOnPath_(V(e),K(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,x(),t)}foreachOnPath_(e,t,i){if(A(e))return this;{this.value&&i(t,this.value);const s=S(e),r=this.children.get(s);return r?r.foreachOnPath_(V(e),K(t,s),i):new G(null)}}foreach(e){this.foreach_(x(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(K(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.writeTree_=e}static empty(){return new de(new G(null))}}function un(n,e,t){if(A(e))return new de(new G(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ne(s,e);return r=r.updateChild(o,t),new de(n.writeTree_.set(s,r))}else{const s=new G(t),r=n.writeTree_.setTree(e,s);return new de(r)}}}function Ls(n,e,t){let i=n;return Z(t,(s,r)=>{i=un(i,K(e,s),r)}),i}function Ko(n,e){if(A(e))return de.empty();{const t=n.writeTree_.setTree(e,new G(null));return new de(t)}}function xs(n,e){return gt(n,e)!=null}function gt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ne(t.path,e)):null}function Yo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(q,(i,s)=>{e.push(new P(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new P(i,s.value))}),e}function qe(n,e){if(A(e))return n;{const t=gt(n,e);return t!=null?new de(new G(t)):new de(n.writeTree_.subtree(e))}}function Fs(n){return n.writeTree_.isEmpty()}function Mt(n,e){return Yc(x(),n.writeTree_,e)}function Yc(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Yc(K(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(K(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n,e){return Zc(e,n)}function dm(n,e,t,i,s){_(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=un(n.visibleWrites,e,t)),n.lastWriteId=i}function fm(n,e,t,i){_(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Ls(n.visibleWrites,e,t),n.lastWriteId=i}function pm(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function mm(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&_m(a,i.path)?s=!1:ce(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return gm(n),!0;if(i.snap)n.visibleWrites=Ko(n.visibleWrites,i.path);else{const a=i.children;Z(a,c=>{n.visibleWrites=Ko(n.visibleWrites,K(i.path,c))})}return!0}else return!1}function _m(n,e){if(n.snap)return ce(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ce(K(n.path,t),e))return!0;return!1}function gm(n){n.visibleWrites=Qc(n.allWrites,ym,x()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function ym(n){return n.visible}function Qc(n,e,t){let i=de.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)ce(t,o)?(a=ne(t,o),i=un(i,a,r.snap)):ce(o,t)&&(a=ne(o,t),i=un(i,x(),r.snap.getChild(a)));else if(r.children){if(ce(t,o))a=ne(t,o),i=Ls(i,a,r.children);else if(ce(o,t))if(a=ne(o,t),A(a))i=Ls(i,x(),r.children);else{const c=at(r.children,S(a));if(c){const l=c.getChild(V(a));i=un(i,x(),l)}}}else throw Bt("WriteRecord should have .snap or .children")}}return i}function Jc(n,e,t,i,s){if(!i&&!s){const r=gt(n.visibleWrites,e);if(r!=null)return r;{const o=qe(n.visibleWrites,e);if(Fs(o))return t;if(t==null&&!xs(o,x()))return null;{const a=t||w.EMPTY_NODE;return Mt(o,a)}}}else{const r=qe(n.visibleWrites,e);if(!s&&Fs(r))return t;if(!s&&t==null&&!xs(r,x()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(ce(l.path,e)||ce(e,l.path))},a=Qc(n.allWrites,o,e),c=t||w.EMPTY_NODE;return Mt(a,c)}}}function vm(n,e,t){let i=w.EMPTY_NODE;const s=gt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(q,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=qe(n.visibleWrites,e);return t.forEachChild(q,(o,a)=>{const c=Mt(qe(r,new U(o)),a);i=i.updateImmediateChild(o,c)}),Yo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=qe(n.visibleWrites,e);return Yo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function wm(n,e,t,i,s){_(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=K(e,t);if(xs(n.visibleWrites,r))return null;{const o=qe(n.visibleWrites,r);return Fs(o)?s.getChild(t):Mt(o,s.getChild(t))}}function Em(n,e,t,i){const s=K(e,t),r=gt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=qe(n.visibleWrites,s);return Mt(o,i.getNode().getImmediateChild(t))}else return null}function Im(n,e){return gt(n.visibleWrites,e)}function bm(n,e,t,i,s,r,o){let a;const c=qe(n.visibleWrites,e),l=gt(c,x());if(l!=null)a=l;else if(t!=null)a=Mt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&h.length<s;)u(f,i)!==0&&h.push(f),f=d.getNext();return h}else return[]}function Cm(){return{visibleWrites:de.empty(),allWrites:[],lastWriteId:-1}}function wi(n,e,t,i){return Jc(n.writeTree,n.treePath,e,t,i)}function Er(n,e){return vm(n.writeTree,n.treePath,e)}function Qo(n,e,t,i){return wm(n.writeTree,n.treePath,e,t,i)}function Ei(n,e){return Im(n.writeTree,K(n.treePath,e))}function Tm(n,e,t,i,s,r){return bm(n.writeTree,n.treePath,e,t,i,s,r)}function Ir(n,e,t){return Em(n.writeTree,n.treePath,e,t)}function Xc(n,e){return Zc(K(n.treePath,e),n.writeTree)}function Zc(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,wn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,vn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Pt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,wn(i,e.snapshotNode,s.oldSnap));else throw Bt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const el=new km;class br{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ye(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ir(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ft(this.viewCache_),r=Tm(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(n){return{filter:n}}function Nm(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Am(n,e,t,i,s){const r=new Sm;let o,a;if(t.type===he.OVERWRITE){const l=t;l.source.fromUser?o=Us(n,e,l.path,l.snap,i,s,r):(_(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!A(l.path),o=Ii(n,e,l.path,l.snap,i,s,a,r))}else if(t.type===he.MERGE){const l=t;l.source.fromUser?o=Om(n,e,l.path,l.children,i,s,r):(_(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=$s(n,e,l.path,l.children,i,s,a,r))}else if(t.type===he.ACK_USER_WRITE){const l=t;l.revert?o=Lm(n,e,l.path,i,s,r):o=Mm(n,e,l.path,l.affectedTree,i,s,r)}else if(t.type===he.LISTEN_COMPLETE)o=Dm(n,e,t.path,i,r);else throw Bt("Unknown operation type: "+t.type);const c=r.getChanges();return Pm(e,o,c),{viewCache:o,changes:c}}function Pm(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=vi(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(zc(vi(e)))}}function tl(n,e,t,i,s,r){const o=e.eventCache;if(Ei(i,t)!=null)return e;{let a,c;if(A(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=ft(e),h=l instanceof w?l:w.EMPTY_NODE,u=Er(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=wi(i,ft(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=S(t);if(l===".priority"){_(Ke(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const u=Qo(i,t,h,c);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=V(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Qo(i,t,o.getNode(),c);d!=null?u=o.getNode().getImmediateChild(l).updateChild(h,d):u=o.getNode().getImmediateChild(l)}else u=Ir(i,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,h,s,r):a=o.getNode()}}return ln(e,a,o.isFullyInitialized()||A(t),n.filter.filtersNodes())}}function Ii(n,e,t,i,s,r,o,a){const c=e.serverCache;let l;const h=o?n.filter:n.filter.getIndexedFilter();if(A(t))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,i);l=h.updateFullNode(c.getNode(),f,null)}else{const f=S(t);if(!c.isCompleteForPath(t)&&Ke(t)>1)return e;const m=V(t),T=c.getNode().getImmediateChild(f).updateChild(m,i);f===".priority"?l=h.updatePriority(c.getNode(),T):l=h.updateChild(c.getNode(),f,T,m,el,null)}const u=Kc(e,l,c.isFullyInitialized()||A(t),h.filtersNodes()),d=new br(s,u,r);return tl(n,u,t,s,d,a)}function Us(n,e,t,i,s,r,o){const a=e.eventCache;let c,l;const h=new br(s,e,r);if(A(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=ln(e,l,!0,n.filter.filtersNodes());else{const u=S(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=ln(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=V(t),f=a.getNode().getImmediateChild(u);let m;if(A(d))m=i;else{const y=h.getCompleteChild(u);y!=null?dr(d)===".priority"&&y.getChild(Bc(d)).isEmpty()?m=y:m=y.updateChild(d,i):m=w.EMPTY_NODE}if(f.equals(m))c=e;else{const y=n.filter.updateChild(a.getNode(),u,m,d,h,o);c=ln(e,y,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Jo(n,e){return n.eventCache.isCompleteForChild(e)}function Om(n,e,t,i,s,r,o){let a=e;return i.foreach((c,l)=>{const h=K(t,c);Jo(e,S(h))&&(a=Us(n,a,h,l,s,r,o))}),i.foreach((c,l)=>{const h=K(t,c);Jo(e,S(h))||(a=Us(n,a,h,l,s,r,o))}),a}function Xo(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function $s(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;A(t)?l=i:l=new G(null).setTree(t,i);const h=e.serverCache.getNode();return l.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),m=Xo(n,f,d);c=Ii(n,c,new U(u),m,s,r,o,a)}}),l.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const m=e.serverCache.getNode().getImmediateChild(u),y=Xo(n,m,d);c=Ii(n,c,new U(u),y,s,r,o,a)}}),c}function Mm(n,e,t,i,s,r,o){if(Ei(s,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(A(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ii(n,e,t,c.getNode().getChild(t),s,r,a,o);if(A(t)){let l=new G(null);return c.getNode().forEachChild(kt,(h,u)=>{l=l.set(new U(h),u)}),$s(n,e,t,l,s,r,a,o)}else return e}else{let l=new G(null);return i.foreach((h,u)=>{const d=K(t,h);c.isCompleteForPath(d)&&(l=l.set(h,c.getNode().getChild(d)))}),$s(n,e,t,l,s,r,a,o)}}function Dm(n,e,t,i,s){const r=e.serverCache,o=Kc(e,r.getNode(),r.isFullyInitialized()||A(t),r.isFiltered());return tl(n,o,t,i,el,s)}function Lm(n,e,t,i,s,r){let o;if(Ei(i,t)!=null)return e;{const a=new br(i,e,s),c=e.eventCache.getNode();let l;if(A(t)||S(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=wi(i,ft(e));else{const u=e.serverCache.getNode();_(u instanceof w,"serverChildren would be complete if leaf node"),h=Er(i,u)}h=h,l=n.filter.updateFullNode(c,h,r)}else{const h=S(t);let u=Ir(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?l=n.filter.updateChild(c,h,u,V(t),a,r):e.eventCache.getNode().hasChild(h)?l=n.filter.updateChild(c,h,w.EMPTY_NODE,V(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=wi(i,ft(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Ei(i,x())!=null,ln(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new _r(i.getIndex()),r=em(i);this.processor_=Rm(r);const o=t.serverCache,a=t.eventCache,c=s.updateFullNode(w.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(w.EMPTY_NODE,a.getNode(),null),h=new Ye(c,o.isFullyInitialized(),s.filtersNodes()),u=new Ye(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ui(u,h),this.eventGenerator_=new am(this.query_)}get query(){return this.query_}}function Fm(n){return n.viewCache_.serverCache.getNode()}function Um(n){return vi(n.viewCache_)}function $m(n,e){const t=ft(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!A(e)&&!t.getImmediateChild(S(e)).isEmpty())?t.getChild(e):null}function Zo(n){return n.eventRegistrations_.length===0}function Bm(n,e){n.eventRegistrations_.push(e)}function ea(n,e,t){const i=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function ta(n,e,t,i){e.type===he.MERGE&&e.source.queryId!==null&&(_(ft(n.viewCache_),"We should always have a full cache before handling merges"),_(vi(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Am(n.processor_,s,e,t,i);return Nm(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,nl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Wm(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(q,(r,o)=>{i.push(Pt(r,o))}),t.isFullyInitialized()&&i.push(zc(t.getNode())),nl(n,i,t.getNode(),e)}function nl(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return cm(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi;class il{constructor(){this.views=new Map}}function Hm(n){_(!bi,"__referenceConstructor has already been defined"),bi=n}function Vm(){return _(bi,"Reference.ts has not been loaded"),bi}function jm(n){return n.views.size===0}function Cr(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return _(r!=null,"SyncTree gave us an op for an invalid query."),ta(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(ta(o,e,t,i));return r}}function sl(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=wi(t,s?i:null),c=!1;a?c=!0:i instanceof w?(a=Er(t,i),c=!1):(a=w.EMPTY_NODE,c=!1);const l=Ui(new Ye(a,c,!1),new Ye(i,s,!1));return new xm(e,l)}return o}function Gm(n,e,t,i,s,r){const o=sl(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Bm(o,t),Wm(o,t)}function qm(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Qe(n);if(s==="default")for(const[c,l]of n.views.entries())o=o.concat(ea(l,t,i)),Zo(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(s);c&&(o=o.concat(ea(c,t,i)),Zo(c)&&(n.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Qe(n)&&r.push(new(Vm())(e._repo,e._path)),{removed:r,events:o}}function rl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ze(n,e){let t=null;for(const i of n.views.values())t=t||$m(i,e);return t}function ol(n,e){if(e._queryParams.loadsAllData())return Bi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function al(n,e){return ol(n,e)!=null}function Qe(n){return Bi(n)!=null}function Bi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci;function zm(n){_(!Ci,"__referenceConstructor has already been defined"),Ci=n}function Km(){return _(Ci,"Reference.ts has not been loaded"),Ci}let Ym=1;class na{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=Cm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Tr(n,e,t,i,s){return dm(n.pendingWriteTree_,e,t,i,s),s?qt(n,new dt(yr(),e,t)):[]}function Qm(n,e,t,i){fm(n.pendingWriteTree_,e,t,i);const s=G.fromObject(t);return qt(n,new Ot(yr(),e,s))}function Be(n,e,t=!1){const i=pm(n.pendingWriteTree_,e);if(mm(n.pendingWriteTree_,e)){let r=new G(null);return i.snap!=null?r=r.set(x(),!0):Z(i.children,o=>{r=r.set(new U(o),!0)}),qt(n,new yi(i.path,r,t))}else return[]}function Fn(n,e,t){return qt(n,new dt(vr(),e,t))}function Jm(n,e,t){const i=G.fromObject(t);return qt(n,new Ot(vr(),e,i))}function Xm(n,e){return qt(n,new In(vr(),e))}function Zm(n,e,t){const i=Sr(n,t);if(i){const s=kr(i),r=s.path,o=s.queryId,a=ne(r,e),c=new In(wr(o),a);return Rr(n,r,c)}else return[]}function Ti(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||al(o,e))){const c=qm(o,e,t,i);jm(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const h=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>Qe(f));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=n_(d);for(let m=0;m<f.length;++m){const y=f[m],T=y.query,v=hl(n,y);n.listenProvider_.startListening(hn(T),bn(n,T),v.hashFn,v.onComplete)}}}!u&&l.length>0&&!i&&(h?n.listenProvider_.stopListening(hn(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(Hi(d));n.listenProvider_.stopListening(hn(d),f)}))}i_(n,l)}return a}function cl(n,e,t,i){const s=Sr(n,i);if(s!=null){const r=kr(s),o=r.path,a=r.queryId,c=ne(o,e),l=new dt(wr(a),c,t);return Rr(n,o,l)}else return[]}function e_(n,e,t,i){const s=Sr(n,i);if(s){const r=kr(s),o=r.path,a=r.queryId,c=ne(o,e),l=G.fromObject(t),h=new Ot(wr(a),c,l);return Rr(n,o,h)}else return[]}function Bs(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{const m=ne(d,s);r=r||ze(f,m),o=o||Qe(f)});let a=n.syncPointTree_.get(s);a?(o=o||Qe(a),r=r||ze(a,x())):(a=new il,n.syncPointTree_=n.syncPointTree_.set(s,a));let c;r!=null?c=!0:(c=!1,r=w.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,m)=>{const y=ze(m,x());y&&(r=r.updateImmediateChild(f,y))}));const l=al(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=Hi(e);_(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=s_();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=$i(n.pendingWriteTree_,s);let u=Gm(a,e,t,h,r,c);if(!l&&!o&&!i){const d=ol(a,e);u=u.concat(r_(n,e,d))}return u}function Wi(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=ne(o,e),l=ze(a,c);if(l)return l});return Jc(s,e,r,t,!0)}function t_(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(l,h)=>{const u=ne(l,t);i=i||ze(h,u)});let s=n.syncPointTree_.get(t);s?i=i||ze(s,x()):(s=new il,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Ye(i,!0,!1):null,a=$i(n.pendingWriteTree_,e._path),c=sl(s,e,a,r?o.getNode():w.EMPTY_NODE,r);return Um(c)}function qt(n,e){return ll(e,n.syncPointTree_,null,$i(n.pendingWriteTree_,x()))}function ll(n,e,t,i){if(A(n.path))return ul(n,e,t,i);{const s=e.get(x());t==null&&s!=null&&(t=ze(s,x()));let r=[];const o=S(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,h=Xc(i,o);r=r.concat(ll(a,c,l,h))}return s&&(r=r.concat(Cr(s,n,i,t))),r}}function ul(n,e,t,i){const s=e.get(x());t==null&&s!=null&&(t=ze(s,x()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Xc(i,o),h=n.operationForChild(o);h&&(r=r.concat(ul(h,a,c,l)))}),s&&(r=r.concat(Cr(s,n,i,t))),r}function hl(n,e){const t=e.query,i=bn(n,t);return{hashFn:()=>(Fm(e)||w.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Zm(n,t._path,i):Xm(n,t._path);{const r=Xf(s,t);return Ti(n,t,null,r)}}}}function bn(n,e){const t=Hi(e);return n.queryToTagMap.get(t)}function Hi(n){return n._path.toString()+"$"+n._queryIdentifier}function Sr(n,e){return n.tagToQueryMap.get(e)}function kr(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new U(n.substr(0,e))}}function Rr(n,e,t){const i=n.syncPointTree_.get(e);_(i,"Missing sync point for query tag that we're tracking");const s=$i(n.pendingWriteTree_,e);return Cr(i,t,s,null)}function n_(n){return n.fold((e,t,i)=>{if(t&&Qe(t))return[Bi(t)];{let s=[];return t&&(s=rl(t)),Z(i,(r,o)=>{s=s.concat(o)}),s}})}function hn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Km())(n._repo,n._path):n}function i_(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Hi(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function s_(){return Ym++}function r_(n,e,t){const i=e._path,s=bn(n,e),r=hl(n,t),o=n.listenProvider_.startListening(hn(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)_(!Qe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,h,u)=>{if(!A(l)&&h&&Qe(h))return[Bi(h).query];{let d=[];return h&&(d=d.concat(rl(h).map(f=>f.query))),Z(u,(f,m)=>{d=d.concat(m)}),d}});for(let l=0;l<c.length;++l){const h=c[l];n.listenProvider_.stopListening(hn(h),bn(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Nr(t)}node(){return this.node_}}class Ar{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=K(this.path_,e);return new Ar(this.syncTree_,t)}node(){return Wi(this.syncTree_,this.path_)}}const o_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ia=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return a_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return c_(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},a_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},c_=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&_(!1,"Unexpected increment value: "+i);const s=e.node();if(_(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},dl=function(n,e,t,i){return Or(e,new Ar(t,n),i)},Pr=function(n,e,t){return Or(n,new Nr(e),t)};function Or(n,e,t){const i=n.getPriority().val(),s=ia(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ia(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Q(a,z(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Q(s))),o.forEachChild(q,(a,c)=>{const l=Or(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Vi(n,e){let t=e instanceof U?e:new U(e),i=n,s=S(t);for(;s!==null;){const r=at(i.node.children,s)||{children:{},childCount:0};i=new Mr(s,i,r),t=V(t),s=S(t)}return i}function yt(n){return n.node.value}function Dr(n,e){n.node.value=e,Ws(n)}function fl(n){return n.node.childCount>0}function l_(n){return yt(n)===void 0&&!fl(n)}function ji(n,e){Z(n.node.children,(t,i)=>{e(new Mr(t,n,i))})}function pl(n,e,t,i){t&&e(n),ji(n,s=>{pl(s,e,!0)})}function u_(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Un(n){return new U(n.parent===null?n.name:Un(n.parent)+"/"+n.name)}function Ws(n){n.parent!==null&&h_(n.parent,n.name,n)}function h_(n,e,t){const i=l_(t),s=pe(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Ws(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Ws(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=/[\[\].#$\/\u0000-\u001F\u007F]/,f_=/[\[\].#$\u0000-\u001F\u007F]/,fs=10*1024*1024,Lr=function(n){return typeof n=="string"&&n.length!==0&&!d_.test(n)},ml=function(n){return typeof n=="string"&&n.length!==0&&!f_.test(n)},p_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ml(n)},xr=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!xi(n)||n&&typeof n=="object"&&pe(n,".sv")},Si=function(n,e,t,i){i&&e===void 0||$n(Rt(n,"value"),e,t)},$n=function(n,e,t){const i=t instanceof U?new Op(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+nt(i));if(typeof e=="function")throw new Error(n+"contains a function "+nt(i)+" with contents = "+e.toString());if(xi(e))throw new Error(n+"contains "+e.toString()+" "+nt(i));if(typeof e=="string"&&e.length>fs/3&&Oi(e)>fs)throw new Error(n+"contains a string greater than "+fs+" utf8 bytes "+nt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Z(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Lr(o)))throw new Error(n+" contains an invalid key ("+o+") "+nt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Mp(i,o),$n(n,a,i),Dp(i)}),s&&r)throw new Error(n+' contains ".value" child '+nt(i)+" in addition to actual children.")}},m_=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=yn(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Lr(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Pp);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&ce(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},_l=function(n,e,t,i){const s=Rt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Z(e,(o,a)=>{const c=new U(o);if($n(s,a,K(t,c)),dr(c)===".priority"&&!xr(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),m_(s,r)},__=function(n,e,t){if(xi(e))throw new Error(Rt(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!xr(e))throw new Error(Rt(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},gl=function(n,e,t,i){if(!ml(t))throw new Error(Rt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},g_=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gl(n,e,t)},We=function(n,e){if(S(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},y_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!p_(t))throw new Error(Rt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gi(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!fr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function yl(n,e,t){Gi(n,t),vl(n,i=>fr(i,e))}function oe(n,e,t){Gi(n,t),vl(n,i=>ce(i,e)||ce(e,i))}function vl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(w_(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function w_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();an&&X("event: "+t.toString()),jt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="repo_interrupt",I_=25;class b_{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new v_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gi(),this.transactionQueueTree_=new Mr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function C_(n,e,t){if(n.stats_=ur(n.repoInfo_),n.forceRestClient_||np())n.server_=new _i(n.repoInfo_,(i,s,r,o)=>{sa(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ra(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Y(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Re(n.repoInfo_,e,(i,s,r,o)=>{sa(n,i,s,r,o)},i=>{ra(n,i)},i=>{T_(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=ap(n.repoInfo_,()=>new om(n.stats_,n.server_)),n.infoData_=new tm,n.infoSyncTree_=new na({startListening:(i,s,r,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=Fn(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fr(n,"connected",!1),n.serverSyncTree_=new na({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);oe(n.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function wl(n){const t=n.infoData_.getNode(new U(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Bn(n){return o_({timestamp:wl(n)})}function sa(n,e,t,i,s){n.dataUpdateCount++;const r=new U(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=ri(t,l=>z(l));o=e_(n.serverSyncTree_,r,c,s)}else{const c=z(t);o=cl(n.serverSyncTree_,r,c,s)}else if(i){const c=ri(t,l=>z(l));o=Jm(n.serverSyncTree_,r,c)}else{const c=z(t);o=Fn(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Dt(n,r)),oe(n.eventQueue_,a,o)}function ra(n,e){Fr(n,"connected",e),e===!1&&N_(n)}function T_(n,e){Z(e,(t,i)=>{Fr(n,t,i)})}function Fr(n,e,t){const i=new U("/.info/"+e),s=z(t);n.infoData_.updateSnapshot(i,s);const r=Fn(n.infoSyncTree_,i,s);oe(n.eventQueue_,i,r)}function qi(n){return n.nextWriteId_++}function S_(n,e,t){const i=t_(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=z(s).withIndex(e._queryParams.getIndex());Bs(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Fn(n.serverSyncTree_,e._path,r);else{const a=bn(n.serverSyncTree_,e);o=cl(n.serverSyncTree_,e._path,r,a)}return oe(n.eventQueue_,e._path,o),Ti(n.serverSyncTree_,e,t,null,!0),r},s=>(zt(n,"get for query "+Y(e)+" failed: "+s),Promise.reject(new Error(s))))}function k_(n,e,t,i,s){zt(n,"set",{path:e.toString(),value:t,priority:i});const r=Bn(n),o=z(t,i),a=Wi(n.serverSyncTree_,e),c=Pr(o,a,r),l=qi(n),h=Tr(n.serverSyncTree_,e,c,l,!0);Gi(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const m=d==="ok";m||ie("set at "+e+" failed: "+d);const y=Be(n.serverSyncTree_,l,!m);oe(n.eventQueue_,e,y),Je(n,s,d,f)});const u=$r(n,e);Dt(n,u),oe(n.eventQueue_,u,[])}function R_(n,e,t,i){zt(n,"update",{path:e.toString(),value:t});let s=!0;const r=Bn(n),o={};if(Z(t,(a,c)=>{s=!1,o[a]=dl(K(e,a),z(c),n.serverSyncTree_,r)}),s)X("update() called with empty data.  Don't do anything."),Je(n,i,"ok",void 0);else{const a=qi(n),c=Qm(n.serverSyncTree_,e,o,a);Gi(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,h)=>{const u=l==="ok";u||ie("update at "+e+" failed: "+l);const d=Be(n.serverSyncTree_,a,!u),f=d.length>0?Dt(n,e):e;oe(n.eventQueue_,f,d),Je(n,i,l,h)}),Z(t,l=>{const h=$r(n,K(e,l));Dt(n,h)}),oe(n.eventQueue_,e,[])}}function N_(n){zt(n,"onDisconnectEvents");const e=Bn(n),t=gi();Ds(n.onDisconnect_,x(),(s,r)=>{const o=dl(s,r,n.serverSyncTree_,e);Gt(t,s,o)});let i=[];Ds(t,x(),(s,r)=>{i=i.concat(Fn(n.serverSyncTree_,s,r));const o=$r(n,s);Dt(n,o)}),n.onDisconnect_=gi(),oe(n.eventQueue_,x(),i)}function A_(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Ms(n.onDisconnect_,e),Je(n,t,i,s)})}function oa(n,e,t,i){const s=z(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&Gt(n.onDisconnect_,e,s),Je(n,i,r,o)})}function P_(n,e,t,i,s){const r=z(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Gt(n.onDisconnect_,e,r),Je(n,s,o,a)})}function O_(n,e,t,i){if(si(t)){X("onDisconnect().update() called with empty data.  Don't do anything."),Je(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&Z(t,(o,a)=>{const c=z(a);Gt(n.onDisconnect_,K(e,o),c)}),Je(n,i,s,r)})}function M_(n,e,t){let i;S(e._path)===".info"?i=Bs(n.infoSyncTree_,e,t):i=Bs(n.serverSyncTree_,e,t),yl(n.eventQueue_,e._path,i)}function Hs(n,e,t){let i;S(e._path)===".info"?i=Ti(n.infoSyncTree_,e,t):i=Ti(n.serverSyncTree_,e,t),yl(n.eventQueue_,e._path,i)}function D_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(E_)}function zt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),X(t,...e)}function Je(n,e,t,i){e&&jt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function L_(n,e,t,i,s,r){zt(n,"transaction on "+e);const o={path:e,update:t,onComplete:i,status:null,order:yc(),applyLocally:r,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Ur(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{$n("transaction failed: Data returned ",c,o.path),o.status=0;const l=Vi(n.transactionQueueTree_,e),h=yt(l)||[];h.push(o),Dr(l,h);let u;typeof c=="object"&&c!==null&&pe(c,".priority")?(u=at(c,".priority"),_(xr(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(Wi(n.serverSyncTree_,e)||w.EMPTY_NODE).getPriority().val();const d=Bn(n),f=z(c,u),m=Pr(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=m,o.currentWriteId=qi(n);const y=Tr(n.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);oe(n.eventQueue_,e,y),zi(n,n.transactionQueueTree_)}}function Ur(n,e,t){return Wi(n.serverSyncTree_,e,t)||w.EMPTY_NODE}function zi(n,e=n.transactionQueueTree_){if(e||Ki(n,e),yt(e)){const t=Il(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&x_(n,Un(e),t)}else fl(e)&&ji(e,t=>{zi(n,t)})}function x_(n,e,t){const i=t.map(l=>l.currentWriteId),s=Ur(n,e,i);let r=s;const o=s.hash();for(let l=0;l<t.length;l++){const h=t[l];_(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ne(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{zt(n,"transaction put response",{path:c.toString(),status:l});let h=[];if(l==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Be(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Ki(n,Vi(n.transactionQueueTree_,e)),zi(n,n.transactionQueueTree_),oe(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)jt(u[d])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ie("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}Dt(n,e)}},o)}function Dt(n,e){const t=El(n,e),i=Un(t),s=Il(n,t);return F_(n,s,i),i}function F_(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ne(t,c.path);let h=!1,u;if(_(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,s=s.concat(Be(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=I_)h=!0,u="maxretry",s=s.concat(Be(n.serverSyncTree_,c.currentWriteId,!0));else{const d=Ur(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){$n("transaction failed: Data returned ",f,c.path);let m=z(f);typeof f=="object"&&f!=null&&pe(f,".priority")||(m=m.updatePriority(d.getPriority()));const T=c.currentWriteId,v=Bn(n),g=Pr(m,d,v);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=g,c.currentWriteId=qi(n),o.splice(o.indexOf(T),1),s=s.concat(Tr(n.serverSyncTree_,c.path,g,c.currentWriteId,c.applyLocally)),s=s.concat(Be(n.serverSyncTree_,T,!0))}else h=!0,u="nodata",s=s.concat(Be(n.serverSyncTree_,c.currentWriteId,!0))}oe(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Ki(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)jt(i[a]);zi(n,n.transactionQueueTree_)}function El(n,e){let t,i=n.transactionQueueTree_;for(t=S(e);t!==null&&yt(i)===void 0;)i=Vi(i,t),e=V(e),t=S(e);return i}function Il(n,e){const t=[];return bl(n,e,t),t.sort((i,s)=>i.order-s.order),t}function bl(n,e,t){const i=yt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);ji(e,s=>{bl(n,s,t)})}function Ki(n,e){const t=yt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Dr(e,t.length>0?t:void 0)}ji(e,i=>{Ki(n,i)})}function $r(n,e){const t=Un(El(n,e)),i=Vi(n.transactionQueueTree_,e);return u_(i,s=>{ps(n,s)}),ps(n,i),pl(i,s=>{ps(n,s)}),t}function ps(n,e){const t=yt(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Be(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Dr(e,void 0):t.length=r+1,oe(n.eventQueue_,Un(e),s);for(let o=0;o<i.length;o++)jt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function $_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ie(`Invalid query segment '${t}' in query '${n}'`)}return e}const aa=function(n,e){const t=B_(n),i=t.namespace;t.domain==="firebase.com"&&Me(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Me("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||zf();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Pc(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new U(t.pathString)}},B_=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(s=U_(n.substring(h,u)));const d=$_(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",W_=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=ca.charAt(t%64),t=Math.floor(t/64);_(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=ca.charAt(e[s]);return _(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Y(this.snapshot.exportVal())}}class V_{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class j_{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new le;return A_(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){We("OnDisconnect.remove",this._path);const e=new le;return oa(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){We("OnDisconnect.set",this._path),Si("OnDisconnect.set",e,this._path,!1);const t=new le;return oa(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){We("OnDisconnect.setWithPriority",this._path),Si("OnDisconnect.setWithPriority",e,this._path,!1),__("OnDisconnect.setWithPriority",t);const i=new le;return P_(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){We("OnDisconnect.update",this._path),_l("OnDisconnect.update",e,this._path);const t=new le;return O_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class Br{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return A(this._path)?null:dr(this._path)}get ref(){return new ve(this._repo,this._path)}get _queryIdentifier(){const e=qo(this._queryParams),t=cr(e);return t==="{}"?"default":t}get _queryObject(){return qo(this._queryParams)}isEqual(e){if(e=ee(e),!(e instanceof Br))return!1;const t=this._repo===e._repo,i=fr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ap(this._path)}}class ve extends Br{constructor(e,t){super(e,t,new gr,!1)}get parent(){const e=Bc(this._path);return e===null?null:new ve(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Lt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new U(e),i=Cn(this.ref,e);return new Lt(this._node.getChild(t),i,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Lt(s,Cn(this.ref,i),q)))}hasChild(e){const t=new U(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function O(n,e){return n=ee(n),n._checkNotDeleted("ref"),e!==void 0?Cn(n._root,e):n._root}function Cn(n,e){return n=ee(n),S(n._path)===null?g_("child","path",e):gl("child","path",e),new ve(n._repo,K(n._path,e))}function G_(n){return n=ee(n),new j_(n._repo,n._path)}function Wr(n,e){n=ee(n),We("push",n._path),Si("push",e,n._path,!0);const t=wl(n._repo),i=W_(t),s=Cn(n,i),r=Cn(n,i);let o;return e!=null?o=Kt(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function He(n){return We("remove",n._path),Kt(n,null)}function Kt(n,e){n=ee(n),We("set",n._path),Si("set",e,n._path,!1);const t=new le;return k_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function xt(n,e){_l("update",e,n._path);const t=new le;return R_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Yi(n){n=ee(n);const e=new Cl(()=>{}),t=new Qi(e);return S_(n._repo,n,t).then(i=>new Lt(i,new ve(n._repo,n._path),n._queryParams.getIndex()))}class Qi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new H_("value",this,new Lt(e.snapshotNode,new ve(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new V_(this,e,t):null}matches(e){return e instanceof Qi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function q_(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const c=t,l=(h,u)=>{Hs(n._repo,n,a),c(h,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new Cl(t,r||void 0),a=new Qi(o);return M_(n._repo,n,a),()=>Hs(n._repo,n,a)}function Ji(n,e,t,i){return q_(n,"value",e,t,i)}function Xi(n,e,t){Hs(n._repo,n,null)}Hm(ve);zm(ve);/**
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
 */const z_="FIREBASE_DATABASE_EMULATOR_HOST",Vs={};let K_=!1;function Y_(n,e,t,i){n.repoInfo_=new Pc(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Q_(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Me("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),X("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=aa(r,s),a=o.repoInfo,c;typeof process<"u"&&Ro&&(c=Ro[z_]),c?(r=`http://${c}?ns=${a.namespace}`,o=aa(r,s),a=o.repoInfo):o.repoInfo.secure;const l=new sp(n.name,n.options,e);y_("Invalid Firebase Database URL",o),A(o.path)||Me("Database URL must point to the root of a Firebase Database (not including a child path).");const h=X_(a,n,l,new ip(n.name,t));return new Z_(h,n)}function J_(n,e){const t=Vs[e];(!t||t[n.key]!==n)&&Me(`Database ${e}(${n.repoInfo_}) has already been deleted.`),D_(n),delete t[n.key]}function X_(n,e,t,i){let s=Vs[e.name];s||(s={},Vs[e.name]=s);let r=s[n.toURLString()];return r&&Me("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new b_(n,K_,t,i),s[n.toURLString()]=r,r}class Z_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(C_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ve(this._repo,x())),this._rootInternal}_delete(){return this._rootInternal!==null&&(J_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Me("Cannot call "+e+" on a deleted database.")}}function eg(n=Ma(),e){const t=Xs(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=tu("database");i&&tg(t,...i)}return t}function tg(n,e,t,i={}){n=ee(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Me("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Me('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ei(ei.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:nu(i.mockUserToken,n.app.options.projectId);r=new ei(o)}Y_(s,e,t,r)}/**
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
 */function ng(n){Hf(Ht),Nt(new ct("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Q_(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ge(No,Ao,n),Ge(No,Ao,"esm2017")}/**
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
 */const ig={".sv":"timestamp"};function Tl(){return ig}/**
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
 */class sg{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Ne(n,e,t){var i;if(n=ee(n),We("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const s=(i=void 0)!==null&&i!==void 0?i:!0,r=new le,o=(c,l,h)=>{let u=null;c?r.reject(c):(u=new Lt(h,new ve(n._repo,n._path),q),r.resolve(new sg(l,u)))},a=Ji(n,()=>{});return L_(n._repo,n._path,e,o,a,s),r.promise}Re.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Re.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ng();const rn={apiKey:"AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",authDomain:"market-6e66a.firebaseapp.com",databaseURL:"https://market-6e66a-default-rtdb.firebaseio.com",projectId:"market-6e66a",storageBucket:"market-6e66a.firebasestorage.app",messagingSenderId:"402312269082",appId:"1:402312269082:web:cf304afc54057ea162b0a3"},Sl=!!rn.apiKey&&!rn.apiKey.startsWith("여기에")&&!!rn.databaseURL&&!rn.databaseURL.startsWith("여기에");let ms=null,Ft=null,k=null;try{Sl&&(ms=Oa(rn),Ft=Bf(ms),k=eg(ms))}catch(n){console.error("[firebase] 초기화 실패:",n)}const Ae=1e7,Yt=10,js=6,la=1,rg=4e3,og=.035,ag=.008,ua=3e4,kl=15e-5,cg=.0018,lg=3*60*1e3,ug=["달빛전자","구름소프트","번개모빌리티","바다식품","별빛바이오","한입게임즈","초록에너지","솜사탕유통","무지개항공","도토리금융","은하반도체","포근화학","두근로보틱스","새벽엔터","고래물산","민들레제약"],hg=["떡상테크","유니콘소프트","미래모빌","첫걸음바이오","샛별에너지","루키게임즈","신화엔터","퀀텀반도체"],dg=[{key:"semi",name:"반도체",leader:"은하반도체",suffixes:["반도체","전자","소자","머티리얼즈","시스템","테크","세미콘"]},{key:"bio",name:"바이오",leader:"별빛바이오",suffixes:["바이오","제약","파마","셀","진단","메디","테라퓨틱스"]},{key:"battery",name:"2차전지",leader:"번개배터리",suffixes:["배터리","에너지","케미칼","머티리얼","파워","솔라","ESS"]},{key:"net",name:"인터넷·게임",leader:"구름소프트",suffixes:["소프트","게임즈","엔터","네트웍스","스튜디오","플랫폼","미디어"]}],Kn=["별빛","달빛","은하","구름","번개","바다","초록","솜사탕","무지개","도토리","한입","포근","두근","새벽","고래","민들레","노을","단비","햇살","모래","안개","서리","물결","바람","이슬","구슬","파도","돌담","오름","나래","미르","해솔","가람","마루","아라","여울","보라","수풀","겨울","봄날"],ha=["개미부대","왕개미","큰손","수상한세력","외국인","기관","전설의단타","스캘퍼","장기투자자","물타기달인"],da=[{text:"{name}, 신제품 공개에 기대감 폭발",effect:[.05,.15]},{text:"{name}, 대형 계약 체결 소식",effect:[.08,.18]},{text:"{name}, 깜짝 실적 발표 소문 확산",effect:[.04,.12]},{text:"{name}, 신사업 진출 선언",effect:[.03,.1]},{text:"{name}, 해외 진출 성공 소식",effect:[.06,.14]},{text:"{name}, 핵심 인력 대거 이탈설",effect:[-.15,-.05]},{text:"{name}, 서비스 대규모 장애 발생",effect:[-.12,-.04]},{text:"{name}, 규제 이슈로 불확실성 확대",effect:[-.18,-.08]},{text:"{name}, 자금난 우려 제기",effect:[-.14,-.06]},{text:"{name}, 경쟁사 등장으로 점유율 하락 전망",effect:[-.1,-.03]}];function te(n,e){return Math.floor(Math.random()*(e-n+1))+n}function j(n,e){return Math.random()*(e-n)+n}function ae(n,e,t){return Math.max(e,Math.min(t,n))}function fg(n){const e=[...n];for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function Rl(n,e,t={}){const i=t.type||"stock",s=t.role||null;e=Tn(Math.max(Yt,e));let r=1,o=1;return i==="stock"?s==="leader"?(r=j(.8,1.4),o=j(2,3)):s==="sub"?(r=j(.9,1.6),o=j(1.2,2.2)):s==="related"?(r=j(.7,2),o=j(.6,1.8)):(r=j(.5,2.4),o=j(.3,1.2)):i==="preferred"?(r=j(.4,.8),o=j(.5,1.1)):i==="etf"?(r=j(.5,.8),o=j(1.5,2.5)):i==="reit"?(r=j(.35,.7),o=j(.6,1.2)):i==="bond"?(r=j(.2,.45),o=j(.8,1.4)):i==="spac"?(r=j(.2,.5),o=j(.4,.9)):i==="commodity"?(r=j(.9,1.8),o=j(1,2)):(i==="inverse"||i==="leverage")&&(r=1,o=j(1.5,2.5)),{name:n,type:i,role:s||"",sector:t.sector||"",link:t.link||"",price:e,previousPrice:e,basePrice:e,open:e,high:e,low:e,changeRate:0,volume:0,value:0,pressure:0,trend:0,volat:+r.toFixed(2),activ:+o.toFixed(2),heat:0,news:""}}function pg(){const n={},e=new Set,t=r=>{for(let o=0;o<50;o++){const a=Kn[te(0,Kn.length-1)]+r;if(!e.has(a))return e.add(a),a}return Kn[te(0,Kn.length-1)]+r+te(1,99)};let i=0;const s=(r,o)=>{const a="s"+i++;return n[a]=Rl(o.name,r,o),a};return dg.forEach(r=>{e.add(r.leader);const o=()=>r.suffixes[te(0,r.suffixes.length-1)],a=s(te(6e4,13e4),{name:r.leader,type:"stock",role:"leader",sector:r.name});for(let c=0;c<2;c++)s(te(25e3,7e4),{name:t(r.suffixes[0]),type:"stock",role:"sub",sector:r.name});for(let c=0;c<7;c++)s(te(4e3,45e3),{name:t(o()),type:"stock",role:"related",sector:r.name});for(let c=0;c<3;c++)s(te(1500,22e3),{name:t(o()),type:"stock",role:"normal",sector:r.name});s(Math.round(n[a].price*.82),{name:r.leader+"우",type:"preferred",sector:r.name,link:a})}),s(1e4,{name:"조스피 지수 ETF",type:"etf",link:"index"}),s(1e4,{name:"마켓 인버스 ETF",type:"inverse",link:"index"}),s(1e4,{name:"마켓 레버리지2X ETF",type:"leverage",link:"index"}),s(1e4,{name:"국채 3년 채권 ETF",type:"bond"}),s(2e4,{name:"골드 원자재 ETF",type:"commodity"}),s(15e3,{name:"원유 원자재 ETF",type:"commodity"}),s(5e3,{name:"도심 리츠 REITs",type:"reit"}),s(5e3,{name:"물류 리츠 REITs",type:"reit"}),s(2e3,{name:"미래합병1호 SPAC",type:"spac"}),s(2e3,{name:"성장합병2호 SPAC",type:"spac"}),n}function Nl(n){return{preferred:"우선주",etf:"ETF",reit:"리츠",spac:"SPAC",inverse:"인버스",leverage:"레버리지",bond:"채권ETF",commodity:"원자재"}[n]||""}function mg(n){return{leader:"대장주",sub:"부대장주",related:"관련주",normal:"일반주"}[n]||""}function Yn(n){return!n||n==="stock"}function Hr(n){return Math.round(n*1.3)}function Vr(n){return Math.max(Yt,Math.round(n*.7))}function Al(n){return n<2e3?1:n<5e3?5:n<2e4?10:n<5e4?50:n<2e5?100:500}function Tn(n){const e=Al(n);return Math.round(n/e)*e}async function _g(n,e){const t=e.stocks||{},i=Object.keys(t);if(i.length===0)return;let s=null,r=0,o="";if(Math.random()<og){const v=i.filter(C=>Yn(t[C].type)),g=v.length?v:i,R=g.map(C=>1+(t[C].activ||1)+(t[C].heat||0)*2),M=R.reduce((C,L)=>C+L,0);let b=Math.random()*M;s=g[g.length-1];for(let C=0;C<g.length;C++)if(b-=R[C],b<=0){s=g[C];break}const N=da[te(0,da.length-1)];r=j(N.effect[0],N.effect[1])*.4,o=N.text.replace("{name}",t[s].name)}const a=Date.now(),c={},l=[];function h(v){const g=(v.activ||1)*(1+(v.heat||0));let R=0,M=0;const b=ae(.35+g*.2,.25,.97);if(Math.random()<b){const N=te(1,Math.max(2,Math.round(1+g*3)));for(let C=0;C<N;C++){const L=te(10,Math.round(60+g*220)),$=.5+ae((v.trend||0)*15,-.3,.3),F=Math.random()<$;R+=F?L:-L,M+=L,l.push({nickname:ha[te(0,ha.length-1)],type:F?"buy":"sell",stockName:v.name,qty:L,price:v.price,time:a})}}return M+=Math.round(te(300,2500)*g),{botNet:R,botVolume:M}}function u(v,g,R,M,b={}){const N=g.basePrice||g.price;let C=Tn(g.price*(1+R));C=ae(C,Vr(N),Hr(N)),C=Math.max(Yt,C);const L=`stocks/${v}/`;return c[L+"previousPrice"]=g.price,c[L+"price"]=C,c[L+"changeRate"]=+((C-N)/N*100).toFixed(2),c[L+"volume"]=(g.volume||0)+M,c[L+"value"]=(g.value||0)+M*C,C>(g.high||g.price)&&(c[L+"high"]=C),C<(g.low||g.price)&&(c[L+"low"]=C),(g.pressure||0)!==0&&(c[L+"pressure"]=0),b.trend!=null&&(c[L+"trend"]=+b.trend.toFixed(5)),b.heat!=null&&(b.heat>.001||(g.heat||0)>.001)&&(c[L+"heat"]=+b.heat.toFixed(3)),b.news!=null&&(c[L+"news"]=b.news),C/g.price-1}function d(v){const g=v.volat||1;let R=(v.heat||0)*.92;Math.random()<.008&&(R=ae(R+j(.4,1.2),0,2));const M=g*(1+R*.6),b=ae((v.trend||0)*.95+(Math.random()-.5)*.0015*M,-.006*(1+R*.5),.006*(1+R*.5));let N=(Math.random()-.5)*.0035*M+b;return Math.random()<.008&&(N+=(Math.random()-.5)*.02*(1+R*.5)),{own:N,trend:b,heat:R}}const f={},m={},y=[];for(const v of i){const g=t[v];if(!Yn(g.type)||g.role!=="leader")continue;const{own:R,trend:M,heat:b}=d(g),{botNet:N,botVolume:C}=h({...g,heat:b});let L=R+ae((g.pressure||0)*.002,-.02,.02)+ae(N*2e-4,-.008,.008);v===s&&(L+=r);const $=u(v,g,L,C,{trend:M,heat:b,news:v===s?o:null});f[v]=$,m[g.sector]=$,y.push($)}for(const v of i){const g=t[v];if(!Yn(g.type)||g.role==="leader")continue;const R=g.role==="related"?.7:g.role==="sub"?.45:.2,M=m[g.sector]||0,{own:b,trend:N,heat:C}=d(g),{botNet:L,botVolume:$}=h({...g,heat:C});let F=M*R+b*(1-R*.5);F+=ae((g.pressure||0)*.002,-.02,.02)+ae(L*2e-4,-.008,.008),v===s&&(F+=r);const we=u(v,g,F,$,{trend:N,heat:C,news:v===s?o:null});f[v]=we,y.push(we)}const T=y.length?y.reduce((v,g)=>v+g,0)/y.length:0;for(const v of i){const g=t[v];if(Yn(g.type))continue;const{botNet:R,botVolume:M}=h(g),b=Math.random()-.5;let N=0;switch(g.type){case"etf":N=T+b*.0015;break;case"inverse":N=-T+b*.0015;break;case"leverage":N=2*T+b*.002;break;case"bond":N=-.25*T+2e-4+b*.0012;break;case"reit":N=.2*T+2e-4+b*.004*(g.volat||1);break;case"commodity":N=b*.011*(g.volat||1)+(Math.random()<.01?(Math.random()-.5)*.05:0);break;case"preferred":N=(m[g.sector]||f[g.link]||0)*.85+b*.002;break;case"spac":N=b*.003+(Math.random()<.008?(Math.random()<.7?1:-1)*j(.06,.2):0);break;default:N=b*.005}N+=ae((g.pressure||0)*.002,-.02,.02)+ae(R*3e-4,-.01,.01),u(v,g,N,M,{})}c.marketTick=a,fg(l),c.botFeed=l.slice(0,4),o&&!c.latestNews&&(c.latestNews={text:o,time:a}),await xt(O(k,`rooms/${n}`),c)}function _s(n){return Math.round(n||0).toLocaleString("ko-KR")}async function gg(n,e){const t=Date.now(),i=e.stocks||{},s=e.ipo;if(s&&s.status==="subscribing"){if(t<s.endsAt)return;const d=s.applies||{},f=Object.values(d).reduce((M,b)=>M+(b||0),0),m=(s.botDemand||0)+f,y=Math.max(1,m/s.totalShares),T=ae(.92+(y-1)*.1+j(-.1,.15),.9,2.3),v=Math.max(Yt,Tn(s.offerPrice*T)),g=Rl(s.name,v,{type:"stock",role:"normal",sector:"신규상장"});g.ipo=!0;const R=((v-s.offerPrice)/s.offerPrice*100).toFixed(1);await xt(O(k,`rooms/${n}`),{[`stocks/${s.stockId}`]:g,ipo:null,latestNews:{text:`🎉 ${s.name} 상장! 공모가 ${_s(s.offerPrice)} → 시초가 ${_s(v)} (${R>=0?"+":""}${R}%) · 경쟁률 ${y.toFixed(1)}:1`,time:t}});for(const[M,b]of Object.entries(d)){const N=b||0,C=Math.floor(N/y),L=s.offerPrice*(N-C);await Ne(O(k,`rooms/${n}/players/${M}`),$=>$&&(L>0&&($.cash=($.cash||0)+L),C>0&&($.holdings=$.holdings||{},$.holdings[s.stockId]=($.holdings[s.stockId]||0)+C),$))}return}if(s||Object.keys(i).length>=90||Math.random()>=ag)return;const r=Object.values(i).map(d=>d.name),o=[...ug,...hg].filter(d=>!r.includes(d));if(!o.length)return;const a=o[te(0,o.length-1)],c=Tn(te(5e3,6e4)),l=te(5e4,2e5),h=Math.floor(l*j(.4,9)),u="ipo"+t.toString(36);await xt(O(k,`rooms/${n}`),{ipo:{stockId:u,name:a,offerPrice:c,totalShares:l,botDemand:h,status:"subscribing",startedAt:t,endsAt:t+ua},latestNews:{text:`공모주 청약 시작! '${a}' 공모가 ${_s(c)}원 · ${Math.round(ua/1e3)}초 후 마감`,time:t}})}async function yg(n,e,t,i){const s=i.ipo;if(!s||s.status!=="subscribing")throw new Error("청약 가능한 공모주가 없습니다.");if(Date.now()>=s.endsAt)throw new Error("청약이 마감되었습니다.");if(t=Math.floor(t),!t||t<1)throw new Error("청약 수량을 확인하세요.");const r=s.offerPrice*t;if(!(await Ne(O(k,`rooms/${n}/players/${e}/cash`),a=>{if(a==null)return a;if(!(a<r))return a-r})).committed)throw new Error("청약 증거금(현금)이 부족합니다.");await Ne(O(k,`rooms/${n}/ipo/applies/${e}`),a=>(a||0)+t)}function vg(n){if(!n)return 0;const e=Object.values(n.applies||{}).reduce((t,i)=>t+(i||0),0);return((n.botDemand||0)+e)/n.totalShares}async function ki(n,e,t,i,s,r,o,a){var y;const c=(y=a.stocks)==null?void 0:y[i];if(!c)throw new Error("종목을 선택하세요.");const l=s.side;if(l!=="buy"&&l!=="sell")throw new Error("주문 유형 오류");const h=s.trigger==="above"?"above":"below",u=["gtc","day","ioc"].includes(s.tif)?s.tif:"gtc";if(r=Math.floor(r),!r||r<1)throw new Error("수량을 확인하세요.");if(o=Tn(Number(o)),!o||o<Yt)throw new Error("주문 가격을 확인하세요.");const d=Date.now(),f={uid:e,nickname:t,stockId:i,stockName:c.name,side:l,trigger:h,tif:u,label:s.label||"지정가",qty:r,target:o,createdAt:d,expiresAt:u==="day"?d+lg:null},m=Wr(O(k,`rooms/${n}/orders`)).key;return await Kt(O(k,`rooms/${n}/orders/${m}`),f),m}async function wg(n,e){await He(O(k,`rooms/${n}/orders/${e}`))}async function Eg(n,e){var s;const t=e.orders;if(!t)return;const i=Date.now();for(const[r,o]of Object.entries(t)){const a=(s=e.stocks)==null?void 0:s[o.stockId];if(!a){await He(O(k,`rooms/${n}/orders/${r}`));continue}const c=a.price;if((o.trigger||(o.side==="buy"?"below":"above"))==="below"?c<=o.target:c>=o.target){try{o.side==="buy"?await Pl(n,o.uid,o.nickname,o.stockId,o.qty,e):await jr(n,o.uid,o.nickname,o.stockId,o.qty,e)}catch(u){console.warn("[order] 예약 체결 실패, 취소:",o,u==null?void 0:u.message)}await He(O(k,`rooms/${n}/orders/${r}`));continue}o.tif==="ioc"?await He(O(k,`rooms/${n}/orders/${r}`)):o.expiresAt&&i>o.expiresAt&&await He(O(k,`rooms/${n}/orders/${r}`))}}function Ig(n,e){const t=n.orders||{};return Object.entries(t).filter(([,i])=>i.uid===e).map(([i,s])=>({id:i,...s})).sort((i,s)=>(s.createdAt||0)-(i.createdAt||0))}async function Pl(n,e,t,i,s,r){var h;const o=(h=r.stocks)==null?void 0:h[i];if(!o)throw new Error("종목을 선택하세요.");if(s=Math.floor(s),!s||s<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.ceil(a*s*(1+kl));if(!(await Ne(O(k,`rooms/${n}/players/${e}`),u=>{if(!u)return u;if((u.cash||0)<c)return;u.cash=(u.cash||0)-c,u.holdings=u.holdings||{};const d=u.holdings[i]||0;u.avgCost=u.avgCost||{};const f=u.avgCost[i]||0;return u.avgCost[i]=Math.round((d*f+s*a)/(d+s)),u.holdings[i]=d+s,u})).committed)throw new Error("현금(수수료 포함)이 부족합니다.");await Ol(n,i,s,+s,{type:"buy",nickname:t,stockName:o.name,qty:s,price:a,time:Date.now()})}async function jr(n,e,t,i,s,r){var h;const o=(h=r.stocks)==null?void 0:h[i];if(!o)throw new Error("종목을 선택하세요.");if(s=Math.floor(s),!s||s<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.floor(a*s*(1-kl-cg));if(!(await Ne(O(k,`rooms/${n}/players/${e}`),u=>{var f;if(!u)return u;const d=((f=u.holdings)==null?void 0:f[i])||0;if(!(d<s))return u.cash=(u.cash||0)+c,u.holdings[i]=d-s,u.holdings[i]===0&&(delete u.holdings[i],u.avgCost&&delete u.avgCost[i]),u})).committed)throw new Error("보유 수량이 부족합니다.");await Ol(n,i,s,-s,{type:"sell",nickname:t,stockName:o.name,qty:s,price:a,time:Date.now()})}async function bg(n,e,t,i,s){var o,a,c;const r=((c=(a=(o=s.players)==null?void 0:o[e])==null?void 0:a.holdings)==null?void 0:c[i])||0;if(r<1)throw new Error("보유 수량이 없습니다.");return jr(n,e,t,i,r,s)}async function Ol(n,e,t,i,s){await Promise.all([Ne(O(k,`rooms/${n}/stocks/${e}/volume`),r=>(r||0)+t),Ne(O(k,`rooms/${n}/stocks/${e}/value`),r=>(r||0)+t*s.price),Ne(O(k,`rooms/${n}/stocks/${e}/pressure`),r=>(r||0)+i),Wr(O(k,`rooms/${n}/logs`),s)])}function Gr(n,e){var s;let t=(n==null?void 0:n.cash)||0;const i=(n==null?void 0:n.holdings)||{};for(const[r,o]of Object.entries(i)){const a=((s=e==null?void 0:e[r])==null?void 0:s.price)||0;t+=a*o}return t}function Ml(n,e){return Object.entries(n||{}).map(([t,i])=>({uid:t,nickname:i.nickname,connected:i.connected!==!1,total:Gr(i,e)})).sort((t,i)=>i.total-t.total)}async function Cg(n,e){const t=e.players||{},i=Object.keys(t).length;if(i<la)throw new Error(`최소 ${la}명이 필요합니다.`);if(i>js)throw new Error(`최대 ${js}명까지 가능합니다.`);const s=Date.now(),r={status:"playing",startedAt:s,endsAt:null,stocks:pg(),logs:null,latestNews:null,botFeed:null,orders:null,ipo:null,marketTick:s};for(const o of Object.keys(t))r[`players/${o}/cash`]=Ae,r[`players/${o}/holdings`]=null,r[`players/${o}/totalAsset`]=Ae;await xt(O(k,`rooms/${n}`),r)}async function Tg(n,e){const t={status:"ended",endedAt:Date.now()},i=e.players||{};for(const[s,r]of Object.entries(i))t[`players/${s}/totalAsset`]=Gr(r,e.stocks);await xt(O(k,`rooms/${n}`),t)}async function Sg(){const n=await Yi(O(k,"rooms"));if(!n.exists())return 0;const e=n.val();let t=0;for(const[i,s]of Object.entries(e))s.status==="ended"&&(await He(O(k,`rooms/${i}`)),t++);return t}function kg(n,e){if(n&&String(n).startsWith("ipo"))return'<span class="tag tag-new">NEW</span>';const t=Nl(e.type);return t?`<span class="tag ${e.type==="inverse"?"tag-inv":e.type==="leverage"?"tag-lev":"tag-etf"}">${t}</span>`:e.role==="leader"?'<span class="tag tag-leader">대장주</span>':e.role==="sub"?'<span class="tag tag-sub">부대장</span>':""}function I(n){return document.getElementById(n)}function Gs(n){return Math.round(n??0).toLocaleString("ko-KR")+"원"}function H(n){return Math.round(n??0).toLocaleString("ko-KR")}function Ut(n){return n=n||0,n>=1e12?(n/1e12).toFixed(2)+"조":n>=1e8?(n/1e8).toFixed(1)+"억":n>=1e4?Math.round(n/1e4).toLocaleString("ko-KR")+"만":H(n)}function Rg(n){return H(n)+"주"}const Ng=["screen-login","screen-auth","screen-home","screen-lobby","screen-game","screen-result"];function rt(n){Ng.forEach(e=>I(e).classList.toggle("hidden",e!==n))}function W(n,e,t=!0){const i=I(n);i&&(i.textContent=e||"",i.classList.toggle("error",t))}function Dl(n){I("fbError").classList.remove("hidden"),n&&(I("fbErrorMsg").textContent=n)}const Ag=3,Pg=120,fa=60;let Ie={},dn=[],Le={},It=0,Sn=null,qs={};function Og(){Ie={},dn=[],Le={},It=0,Sn=null,qs={};for(const n in Ni)delete Ni[n]}function Mg(){if(Sn)try{localStorage.setItem(Sn,JSON.stringify({candles:Ie,lastVol:Le,tick:It}))}catch{}}function Dg(n,e){const t=n.stocks||{},i=n.marketTick||0,s=`mb_candles_${e||"x"}_${n.startedAt||0}`;if(s!==Sn){Sn=s,Ie={},Le={},It=0;try{const r=JSON.parse(localStorage.getItem(s)||"null");r&&r.candles&&(Ie=r.candles,Le=r.lastVol||{},It=r.tick||0)}catch{}}for(const[r,o]of Object.entries(t))Ie[r]||(Ie[r]=[{o:o.price,h:o.price,l:o.price,c:o.price,v:0,_n:0}]),Le[r]==null&&(Le[r]=o.volume||0);if(i!==It){It=i;for(const[o,a]of Object.entries(t)){const c=Ie[o]||(Ie[o]=[]);let l=c[c.length-1];(!l||l._n>=Ag)&&(l={o:a.price,h:a.price,l:a.price,c:a.price,v:0,_n:0},c.push(l)),l.c=a.price,l.h=Math.max(l.h,a.price),l.l=Math.min(l.l,a.price);const h=Math.max(0,(a.volume||0)-(Le[o]||0));l.v+=h,Le[o]=a.volume||0,l._n++,c.length>Pg&&c.shift()}const r=n.botFeed?Object.values(n.botFeed):[];for(const o of r)dn.unshift({...o,bot:!0});dn.length>fa&&(dn.length=fa),Ug(t),Mg()}}let st=new Set(JSON.parse(localStorage.getItem("mb_watch")||"[]")),ot=JSON.parse(localStorage.getItem("mb_alerts")||"{}");function Lg(n){st.has(n)?st.delete(n):st.add(n),localStorage.setItem("mb_watch",JSON.stringify([...st]))}function xg(n,e){e>0?ot[n]=e:delete ot[n],localStorage.setItem("mb_alerts",JSON.stringify(ot))}function Fg(n){return ot[n]||0}function Ug(n){for(const e of Object.values(n)){const t=ot[e.name],i=qs[e.name];if(t&&i!=null){const s=i<t&&e.price>=t,r=i>t&&e.price<=t;if(s||r){D(`🔔 ${e.name} 알림가 ${H(t)}원 ${s?"돌파":"하향"}!`,s?"up":"down"),delete ot[e.name],localStorage.setItem("mb_alerts",JSON.stringify(ot));try{window.Notification&&Notification.permission==="granted"&&new Notification("STONK Battle",{body:`${e.name} ${H(t)}원 도달`})}catch{}}}qs[e.name]=e.price}}function $g(n,e,t){I("lobbyRoomCode").textContent=n;const i=e.players||{},s=I("lobbyPlayers");s.innerHTML="",Object.entries(i).forEach(([a,c])=>{const l=document.createElement("li"),h=a===e.hostId,u=c.connected===!1;l.textContent=`${c.nickname}${h?" (방장)":""}${a===t?" - 나":""}${u?" [오프라인]":""}`,u&&l.classList.add("muted"),s.appendChild(l)});const r=t===e.hostId,o=Object.keys(i).length;I("btnStartGame").classList.toggle("hidden",!r),I("lobbyWait").classList.toggle("hidden",r),I("btnStartGame").disabled=o<1,W("lobbyMsg",o<2?"혼자서도 테스트 시작이 가능합니다. (정식 대전은 친구를 초대하세요)":`${o}명 입장 완료`,!1)}function ti(n){const{roomCode:e,roomData:t,uid:i,selectedStockId:s}=n;I("gameRoomCode").textContent=e,Dg(t,e),Hg(t,s),Vg(t,s),qg(t,s),zg(t,i),Kg(t,i),Yg(t),Qg(t),Wg(t,i),Bg(t,i)}function Bg(n,e){const t=I("orderList");if(!t)return;const i=Ig(n,e);if(!i.length){t.innerHTML="";return}t.innerHTML=i.map(s=>{const r=s.side==="buy"?"up":"down",o=s.tif==="day"?" · 당일":s.tif==="ioc"?" · IOC":"",a=s.label||(s.side==="buy"?"매수":"매도");return`<li class="order-item">
        <span class="order-badge ${r}">${ye(a)}</span>
        <span class="order-name">${ye(s.stockName)}</span>
        <span class="order-detail">${H(s.target)}원 · ${H(s.qty)}주${o}</span>
        <button class="order-cancel" data-cancel="${s.id}" title="취소">✕</button>
      </li>`}).join("")}let Ri=0;function Wg(n,e){var r;const t=I("ipoPanel");if(!t)return;const i=n.ipo;if(!i||i.status!=="subscribing"){t.classList.add("hidden"),Ri=0;return}Ri=i.endsAt,t.classList.remove("hidden"),I("ipoName").textContent=i.name,I("ipoPrice").textContent=H(i.offerPrice)+"원",I("ipoShares").textContent=H(i.totalShares)+"주",I("ipoRatio").textContent=vg(i).toFixed(1)+" : 1";const s=((r=i.applies)==null?void 0:r[e])||0;I("ipoMyApply").textContent=s?`내 청약 ${H(s)}주 (증거금 ${Ut(s*i.offerPrice)}원)`:"아직 청약하지 않았어요",Ll()}function Ll(n){const e=I("ipoCountdown");if(!e||!Ri)return;const t=Math.max(0,Math.ceil((Ri-Date.now())/1e3));e.textContent=t+"초",e.classList.toggle("urgent",t<=5)}function Wn(n){return n>0?"up":n<0?"down":"flat"}function xl(n){return n>0?"▲":n<0?"▼":"−"}function Hg(n,e){const t=I("stockList"),i=n.stocks||{};t.innerHTML="",Object.entries(i).sort((r,o)=>{const a=st.has(r[1].name)?0:1,c=st.has(o[1].name)?0:1;return a-c}).forEach(([r,o])=>{const a=document.createElement("li");a.className="stock-item"+(r===e?" selected":""),a.dataset.id=r;const c=o.changeRate>0?"+":"",l=Wn(o.changeRate),h=st.has(o.name);a.innerHTML=`
      <div class="stock-name"><button class="star-btn ${h?"on":""}" data-star="${ye(o.name)}" title="관심종목">${h?"★":"☆"}</button>${ye(o.name)} ${kg(r,o)}</div>
      <div class="stock-price ${l}">${H(o.price)}</div>
      <div class="stock-rate ${l}">${xl(o.changeRate)} ${c}${(o.changeRate??0).toFixed(2)}%</div>
      <div class="stock-vol muted">${Ut(o.value)}</div>
    `,t.appendChild(a)})}function Vg(n,e){const i=(n.stocks||{})[e];if(!i){I("chartStockName").textContent="-",I("selStockPrice").textContent="-",I("selStockChange").textContent="";return}const s=i.basePrice||i.price,r=i.price-s,o=Wn(i.changeRate),a=i.changeRate>0?"+":"";I("chartStockName").textContent=i.name;const c=I("detailTag");if(c){const d=Nl(i.type),f=mg(i.role);let m,y="virtual-tag";d?(m=d,y+=i.type==="inverse"?" tag-inv":i.type==="leverage"?" tag-lev":" tag-etf"):String(e).startsWith("ipo")?(m="신규상장",y+=" tag-new"):i.sector?(m=f?`${i.sector}·${f}`:i.sector,i.role==="leader"&&(y+=" tag-leader")):m="가상",c.textContent=m,c.className=y}const l=I("selStockPrice"),h=Ni[e];if(l.textContent=H(i.price),l.className="big-price "+o,h!=null&&i.price!==h){const d=i.price>h?"flash-up":"flash-down";l.classList.remove("flash-up","flash-down"),l.offsetWidth,l.classList.add(d)}Ni[e]=i.price,I("selStockChange").className="change "+o,I("selStockChange").textContent=`${xl(i.changeRate)} ${a}${H(r)} (${a}${(i.changeRate??0).toFixed(2)}%)`,gs("ohlcOpen",i.open,s),gs("ohlcHigh",i.high,s),gs("ohlcLow",i.low,s),I("ohlcUpper").textContent=H(Hr(s)),I("ohlcLower").textContent=H(Vr(s)),I("ohlcVol").textContent=Rg(i.volume),I("ohlcValue").textContent=Ut(i.value)+"원";const u=I("selStockNews");u.textContent=i.news?`📰 ${i.news}`:"",u.className="news-line"+(i.news?" "+o:" muted"),jg(I("priceChart"),Ie[e]||[],s)}const Ni={};function gs(n,e,t){const i=I(n);i.textContent=H(e),i.className="ohlc-v "+Wn((e||0)-t)}function ys(n){return getComputedStyle(document.body).getPropertyValue(n).trim()||"#000"}function jg(n,e,t){if(!n)return;const i=window.devicePixelRatio||1,s=n.clientWidth||600,r=n.clientHeight||260;n.width=Math.round(s*i),n.height=Math.round(r*i);const o=n.getContext("2d");if(o.setTransform(i,0,0,i,0,0),o.clearRect(0,0,s,r),!e.length)return;const a=56,c=s-a,l=r*.18,h=r*.06,u=r-l-h;let d=-1/0,f=1/0,m=0;for(const F of e)d=Math.max(d,F.h),f=Math.min(f,F.l),m=Math.max(m,F.v||0);d===f&&(d+=1,f-=1);const y=(d-f)*.14;d+=y,f-=y;const T=ys("--up"),v=ys("--down"),g="rgba(20,28,46,0.06)",R=ys("--muted"),M=F=>u*(1-(F-f)/(d-f));o.font="11px Pretendard, sans-serif",o.textBaseline="middle";const b=4;for(let F=0;F<=b;F++){const we=u/b*F,Ee=d-(d-f)/b*F;o.strokeStyle=g,o.lineWidth=1,o.beginPath(),o.moveTo(0,Math.round(we)+.5),o.lineTo(c,Math.round(we)+.5),o.stroke(),o.fillStyle=R,o.textAlign="left",o.fillText(H(Ee),c+6,Math.min(u-6,Math.max(8,we)))}const N=Math.max(e.length,14),C=c/N,L=Math.max(2.5,Math.min(14,C*.64));e.forEach((F,we)=>{const Ee=we*C+C/2,Vn=F.c>=F.o?T:v;o.strokeStyle=Vn,o.fillStyle=Vn,o.lineWidth=1,o.beginPath(),o.moveTo(Math.round(Ee)+.5,M(F.h)),o.lineTo(Math.round(Ee)+.5,M(F.l)),o.stroke();const Qt=M(F.o),Jt=M(F.c),es=Math.min(Qt,Jt),jn=Math.max(1.5,Math.abs(Jt-Qt));if(o.fillRect(Ee-L/2,es,L,jn),m>0){const Jr=(l-4)*((F.v||0)/m);o.globalAlpha=.4,o.fillRect(Ee-L/2,r-Jr,L,Jr),o.globalAlpha=1}});const $=e[e.length-1].c;if($<=d&&$>=f){const F=M($),Ee=$>=(t||$)?T:v;o.strokeStyle=Ee,o.lineWidth=1,o.setLineDash([4,3]),o.beginPath(),o.moveTo(0,Math.round(F)+.5),o.lineTo(c,Math.round(F)+.5),o.stroke(),o.setLineDash([]);const Zi=H($);o.font="bold 11px Pretendard, sans-serif";const Vn=o.measureText(Zi).width,Qt=Math.min(u-9,Math.max(9,F));o.fillStyle=Ee,o.beginPath();const Jt=c+2,es=Math.min(a-4,Vn+10),jn=17;Gg(o,Jt,Qt-jn/2,es,jn,4),o.fill(),o.fillStyle="#fff",o.textAlign="left",o.fillText(Zi,Jt+5,Qt)}}function Gg(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Fl(){const n=I("priceChart");if(n){const e=n.getContext("2d");e&&e.clearRect(0,0,n.width,n.height)}}function qg(n,e){var l;const t=I("orderbook");if(!t)return;const i=(l=n.stocks)==null?void 0:l[e];if(!i){t.innerHTML="";return}const s=Al(i.price),r=i.basePrice||i.price,o=5e4,a=()=>Math.floor((Math.random()*.9+.1)*12e3),c=[];for(let h=5;h>=1;h--){const u=pa(i.price+h*s,r);c.push(ma(u,a(),"ask",o,r))}c.push(`<div class="ob-current ${Wn(i.changeRate)}">${H(i.price)}</div>`);for(let h=1;h<=5;h++){const u=pa(i.price-h*s,r);c.push(ma(u,a(),"bid",o,r))}t.innerHTML=c.join("")}function pa(n,e){return Math.max(Vr(e),Math.min(Hr(e),Math.max(Yt,n)))}function ma(n,e,t,i,s){const r=Wn(n-s),o=Math.min(100,e/i*100);return t==="ask"?`<div class="ob-row ask">
      <span class="ob-qty"><span class="ob-bar" style="width:${o}%"></span><b>${H(e)}</b></span>
      <span class="ob-price ${r}">${H(n)}</span>
      <span></span>
    </div>`:`<div class="ob-row bid">
    <span></span>
    <span class="ob-price ${r}">${H(n)}</span>
    <span class="ob-qty"><b>${H(e)}</b><span class="ob-bar" style="width:${o}%"></span></span>
  </div>`}function zg(n,e){var f;const t=(f=n.players)==null?void 0:f[e],i=n.stocks||{};if(!t)return;const s=Gr(t,i);I("myCash").textContent=Gs(t.cash),I("myAsset").textContent=Gs(s);const r=I("myAssetTop");r&&(r.textContent=Ut(s)+"원");const o=t.avgCost||{},a=t.holdings||{},c=Object.entries(a).filter(([,m])=>m>0);let l=0,h=0;c.forEach(([m,y])=>{const T=i[m];if(!T)return;const v=(o[m]||T.price)*y;l+=T.price*y-v,h+=v});const u=I("myPnl");if(u)if(c.length){const m=h?l/h*100:0,y=l>0?"up":l<0?"down":"flat";u.className="asset-pnl "+y,u.textContent=`평가손익 ${l>=0?"+":""}${H(l)}원 (${m>=0?"+":""}${m.toFixed(2)}%)`}else u.className="asset-pnl muted",u.textContent="평가손익 —";const d=I("holdingsList");if(d.innerHTML="",c.length===0){const m=document.createElement("li");m.className="muted",m.textContent="보유 종목이 없습니다",d.appendChild(m);return}for(const[m,y]of c){const T=i[m];if(!T)continue;const v=o[m]||0,g=v?(T.price-v)*y:0,R=v?(T.price-v)/v*100:0,M=g>0?"up":g<0?"down":"flat",b=document.createElement("li");b.className="holding-item",b.innerHTML=`
      <div class="hold-row1"><span class="hold-name">${ye(T.name)}</span><b>${H(y)}주</b></div>
      <div class="hold-row2 muted">평단 ${v?H(v):"-"} · 평가 ${Ut(T.price*y)}원</div>
      <div class="hold-row2 ${M}">${g>=0?"+":""}${H(g)}원 (${R>=0?"+":""}${R.toFixed(2)}%)</div>`,d.appendChild(b)}}let _a=null;function D(n,e=""){const t=I("toast");t&&(t.textContent=n,t.className="toast show"+(e?" toast-"+e:""),clearTimeout(_a),_a=setTimeout(()=>{t.className="toast"+(e?" toast-"+e:"")},1800))}function Kg(n,e){const t=I("rankingList");t.innerHTML="",Ml(n.players,n.stocks).forEach(s=>{const r=document.createElement("li"),o=((s.total-Ae)/Ae*100).toFixed(2),a=s.total>=Ae?"up":"down";r.innerHTML=`<span>${ye(s.nickname)}${s.uid===e?" (나)":""}</span> <b>${Ut(s.total)}원</b> <span class="${a}">${o>=0?"+":""}${o}%</span>`,s.connected||r.classList.add("muted"),t.appendChild(r)})}function Yg(n){const e=I("logList");e.innerHTML="";const i=[...Object.values(n.logs||{}),...dn].sort((s,r)=>r.time-s.time).slice(0,40);for(const s of i){const r=document.createElement("li"),o=s.type==="buy"?"매수":"매도",a=s.type==="buy"?"up":"down",c=new Date(s.time).toLocaleTimeString("ko-KR",{hour12:!1}),l=s.bot?`<b class="bot-name">${ye(s.nickname)}</b>`:`<b>${ye(s.nickname)}</b>`;r.innerHTML=`<span class="muted">${c}</span> ${l} <span class="${a}">${o}</span> ${ye(s.stockName)} ${H(s.qty)}주 @ ${H(s.price)}`,e.appendChild(r)}}function Qg(n){const e=I("newsBar"),t=n.latestNews;if(!t||Date.now()-t.time>12e3){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent=`📢 ${t.text}`}function Jg(n){const e=Math.max(0,Math.floor(n/1e3)),t=String(Math.floor(e/60)).padStart(2,"0"),i=String(e%60).padStart(2,"0");I("gameTimer").textContent=`${t}:${i}`}function Xg(n,e){const t=I("resultList");t.innerHTML="",Ml(n.players,n.stocks).forEach((s,r)=>{const o=document.createElement("li"),c=["🥇","🥈","🥉"][r]||`${r+1}.`,l=((s.total-Ae)/Ae*100).toFixed(2),h=s.total>=Ae?"up":"down";o.innerHTML=`<span class="rank-mark">${c}</span> <span>${ye(s.nickname)}${s.uid===e?" (나)":""}</span> <b>${Gs(s.total)}</b> <span class="${h}">${l>=0?"+":""}${l}%</span>`,t.appendChild(o)})}function ye(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const Ul={battle:"https://tom981105-web.github.io/market-online/",board:"https://tom981105-web.github.io/Market-Board/",wiki:"https://tom981105-web.github.io/Market-Wiki/",admin:"https://tom981105-web.github.io/Market-Admin/"},ga={battle:"../Market-battle/index.html",board:"../Market-Board/index.html",wiki:"../Market-Wiki/index.html",admin:"../Market-Admin/market-admin.html"},qr="stonk:lastRoomCode",Zg=["mb-board-room","wiki-room"];function $l(){return location.protocol==="file:"||/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)}function ey(){return{urls:{...Ul},local:$l()}}function $t(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function Bl(){try{const n=new URLSearchParams(location.search);return $t(n.get("room")||n.get("roomCode")||n.get("roomId")||"")}catch{return""}}function Wl(n){const e=$t(n);if(e)try{localStorage.setItem(qr,e)}catch{}}function Hl(){try{const n=$t(localStorage.getItem(qr));if(n)return n;for(const e of Zg){const t=$t(localStorage.getItem(e));if(t)return t}}catch{}return""}function ty(){return Bl()||Hl()}function ny(n){const e=Ul[n];return $l()&&/github\.io/.test(e||"")?ga[n]:e||ga[n]}function Hn(n,e){const t=ny(n),i=[],s=$t(e&&e.room);s&&i.push("room="+encodeURIComponent(s));const r=e&&(e.company||e.companyId);return r&&i.push("company="+encodeURIComponent(r)),i.length?t+(t.indexOf("?")>=0?"&":"?")+i.join("&"):t}function iy(n){return Hn("battle",{room:n})}function Vl(n){return Hn("board",{room:n})}function jl(n,e){return Hn("wiki",{room:n,company:e})}function Gl(n){return Hn("admin",{room:n})}const sy={VERSION:"1.4.0",getSiteConfig:ey,normalizeRoomCode:$t,getUrlRoomCode:Bl,getCurrentRoomCode:ty,setLastRoomCode:Wl,getLastRoomCode:Hl,buildSiteUrl:Hn,buildBattleUrl:iy,buildBoardUrl:Vl,buildWikiUrl:jl,buildAdminUrl:Gl,LAST_ROOM_KEY:qr};typeof window<"u"&&(window.SiteConfig=sy);const ry="yaV8N60yIiUggaWNpNF2VhkCwxb2",oy="tomem@naver.com",p={uid:null,email:null,nickname:localStorage.getItem("mb_nickname")||"",roomCode:null,roomData:null,selectedStockId:null,tickTimer:null,clockTimer:null,roomRef:null,lastStatus:null,joinReqRef:null,joinReqId:null},ay=["ended","closed","finished"];function cy(n){return ay.includes(n)}function zr(){return p.uid===ry||(p.email||"").toLowerCase()===oy}!Sl||!Ft||!k?Dl("src/firebase.js 에 본인의 Firebase 설정(firebaseConfig)을 붙여넣은 뒤 새로고침하세요."):ly();function ly(){let n=!1;const e=setTimeout(()=>{n||Dl("Firebase에 연결할 수 없습니다. 설정값과 네트워크, Database Rules를 확인하세요.")},5e3);Ji(O(k,".info/connected"),t=>{t.val()===!0&&(n=!0,clearTimeout(e),document.getElementById("fbError").classList.add("hidden"))}),kd(Ft,t=>{t?(p.uid=t.uid,p.email=t.email||null,localStorage.setItem("mb_playerId",t.uid),hy()):(p.uid=null,p.email=null,rt("screen-login"))})}function uy(n){const e=(n==null?void 0:n.code)||"";return{"auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/missing-password":"비밀번호를 입력하세요.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/email-already-in-use":"이미 가입된 이메일입니다. 로그인을 눌러주세요.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/user-not-found":"가입되지 않은 이메일입니다. 회원가입을 눌러주세요.","auth/wrong-password":"비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase 콘솔에서 이메일/비밀번호 로그인을 활성화했는지 확인하세요."}[e]||"오류: "+((n==null?void 0:n.message)||e)}async function vs(n){const e=document.getElementById("emailInput").value.trim(),t=document.getElementById("passwordInput").value;if(!e||!t){W("loginMsg","이메일과 비밀번호를 입력하세요.");return}W("loginMsg",n==="signup"?"가입 중...":"로그인 중...",!1);try{n==="signup"?await bd(Ft,e,t):await Cd(Ft,e,t),W("loginMsg","",!1)}catch(i){console.error("[auth]",i),W("loginMsg",uy(i))}}async function hy(){var e;if(!p.nickname){rt("screen-auth");return}const n=localStorage.getItem("mb_roomCode");if(n){try{const i=(await Yi(O(k,`rooms/${n}`))).val();if(i&&((e=i.players)!=null&&e[p.uid])&&i.status!=="ended"){pt(n);return}}catch(t){console.warn("[rejoin] 재접속 실패:",t)}localStorage.removeItem("mb_roomCode")}Kr()}function Kr(){document.getElementById("homeNickname").textContent=`닉네임: ${p.nickname}`;const n=zr(),e=document.getElementById("btnCreateRoom"),t=document.getElementById("btnCleanup"),i=document.getElementById("adminNote");e&&e.classList.toggle("hidden",!n),t&&t.classList.toggle("hidden",!n),i&&i.classList.toggle("hidden",n),rt("screen-home")}function dy(){const n="ABCDEFGHJKMNPQRSTUVWXYZ23456789";let e="";for(let t=0;t<6;t++)e+=n[Math.floor(Math.random()*n.length)];return e}function fy(n){return{nickname:n,cash:0,holdings:null,totalAsset:0,joinedAt:Tl(),connected:!0}}async function py(){if(W("homeMsg",""),!zr()){W("homeMsg","방 생성은 관리자만 가능합니다. 방 코드로 입장하세요.");return}try{const n=dy();await Kt(O(k,`rooms/${n}`),{status:"waiting",hostId:p.uid,createdAt:Tl(),players:{[p.uid]:fy(p.nickname)}}),pt(n)}catch(n){console.error(n),W("homeMsg","방 생성 실패: "+n.message)}}async function my(n){var t;W("homeMsg","");const e=(n||"").trim().toUpperCase();if(e.length!==6){W("homeMsg","방 코드 6자리를 입력하세요.");return}try{const i=await Yi(O(k,`rooms/${e}`));if(!i.exists()){W("homeMsg","존재하지 않는 방입니다.");return}const s=i.val(),r=s.status||"waiting";if(!!((t=s.players)!=null&&t[p.uid])){D("기존 플레이어로 재입장합니다."),pt(e);return}if(cy(r)){W("homeMsg","종료된 방은 참여 신청을 할 수 없습니다.");return}if(r==="waiting"){if(!(await Ne(O(k,`rooms/${e}/players`),c=>{if(c=c||{},c[p.uid])return c;if(!(Object.keys(c).length>=js))return c[p.uid]={nickname:p.nickname,cash:0,totalAsset:0,joinedAt:Date.now(),connected:!0},c})).committed){W("homeMsg","방이 가득 찼습니다. (최대 6명)");return}pt(e);return}await _y(e,s)}catch(i){console.error(i),W("homeMsg","입장 실패: "+i.message)}}async function _y(n,e){const t=e.joinRequests||{},i=Object.entries(t).map(([o,a])=>({id:o,...a})).filter(o=>o.uid===p.uid).sort((o,a)=>(a.requestedAt||0)-(o.requestedAt||0))[0];if(i){if(i.status==="approved"){await ql(n,i.id,i);return}if(i.status==="joined"){pt(n);return}if(i.status==="pending"){W("homeMsg","이미 참여 신청이 대기 중입니다. 관리자의 승인을 기다려주세요.",!1),ya(n,i.id);return}i.status==="rejected"&&W("homeMsg","참여가 거절되었습니다. 다시 신청하려면 잠시 후 시도하세요.")}const s=Wr(O(k,`rooms/${n}/joinRequests`)).key,r={id:s,roomCode:n,playerId:p.uid,uid:p.uid,name:p.nickname,requestedAt:Date.now(),status:"pending",type:"lateJoin",requestedTurn:e.marketTick||null,approvedAt:null,approvedBy:null,rejectedAt:null,rejectedBy:null,joinedAt:null,message:""};try{await Kt(O(k,`rooms/${n}/joinRequests/${s}`),r),W("homeMsg","진행 중인 방입니다. 참여 신청을 보냈습니다. 관리자의 승인을 기다려주세요.",!1),D("참여 신청을 보냈습니다. 승인을 기다려주세요."),ya(n,s)}catch(o){console.error("[lateJoin] 신청 실패:",o),W("homeMsg","참여 신청 실패: "+o.message)}}function ya(n,e){p.joinReqRef&&(Xi(p.joinReqRef),p.joinReqRef=null),p.joinReqId=e,p.joinReqRef=O(k,`rooms/${n}/joinRequests/${e}`),Ji(p.joinReqRef,async t=>{const i=t.val();i&&(i.status==="approved"?(kn(),await ql(n,e,i)):i.status==="rejected"&&(kn(),W("homeMsg","참여가 거절되었습니다."),D("참여가 거절되었습니다.","err")))},t=>console.warn("[lateJoin] 구독 오류:",t))}function kn(){p.joinReqRef&&(Xi(p.joinReqRef),p.joinReqRef=null),p.joinReqId=null}async function ql(n,e,t){var i,s;try{const o=(await Yi(O(k,`rooms/${n}`))).val();if(!o){W("homeMsg","방을 찾을 수 없습니다.");return}if((i=o.players)!=null&&i[p.uid]){kn(),D("참여가 승인되었습니다. 입장합니다."),pt(n);return}const a=Number((s=o.settings)==null?void 0:s.initialCash)||Ae,c=Date.now(),l={};l[`players/${p.uid}`]={nickname:p.nickname,cash:a,holdings:null,totalAsset:a,joinedAt:c,connected:!0,lateJoin:!0,joinedTurn:t.requestedTurn||o.marketTick||null},l[`joinRequests/${e}/status`]="joined",l[`joinRequests/${e}/joinedAt`]=c,l["meta/updatedAt"]=c,await xt(O(k,`rooms/${n}`),l),D("참여가 승인되었습니다. 입장합니다.","up"),pt(n)}catch(r){console.error("[lateJoin] 입장 실패:",r),W("homeMsg","승인 후 입장 실패: "+r.message)}}function pt(n){kn(),p.roomCode=n,localStorage.setItem("mb_roomCode",n),Wl(n),Ey(n);const e=O(k,`rooms/${n}/players/${p.uid}/connected`);Kt(e,!0).catch(()=>{}),G_(e).set(!1).catch(()=>{}),p.roomRef&&Xi(p.roomRef),p.roomRef=O(k,`rooms/${n}`),Ji(p.roomRef,t=>gy(t.val()),t=>{console.error("[room] 구독 오류:",t)})}function gy(n){if(!n){Ai("방이 삭제되었습니다.");return}if(p.roomData=n,n.status==="waiting")rt("screen-lobby"),$g(p.roomCode,n,p.uid);else if(n.status==="playing"){if(p.lastStatus!=="playing"){rt("screen-game"),Og(),vy();const e=Object.keys(n.stocks||{});!p.selectedStockId&&e.length&&(p.selectedStockId=e[0])}ti(p),document.getElementById("btnEndGame").classList.toggle("hidden",n.hostId!==p.uid),n.hostId===p.uid&&yy()}else n.status==="ended"&&(Yr(),Qr(),Fl(),rt("screen-result"),Xg(n,p.uid));p.lastStatus=n.status}function yy(){p.tickTimer||(p.tickTimer=setInterval(async()=>{const n=p.roomData;if(!(!n||n.status!=="playing"))try{await _g(p.roomCode,n),await gg(p.roomCode,n),await Eg(p.roomCode,n)}catch(e){console.error("[tick] 시장 틱 오류:",e)}},rg))}function Yr(){p.tickTimer&&(clearInterval(p.tickTimer),p.tickTimer=null)}function vy(){Qr(),p.clockTimer=setInterval(()=>{const n=p.roomData;!n||n.status!=="playing"||(Jg(Date.now()-(n.startedAt||Date.now())),Ll())},250)}function Qr(){p.clockTimer&&(clearInterval(p.clockTimer),p.clockTimer=null)}async function wy(){const{roomCode:n,roomData:e}=p;try{n&&(e==null?void 0:e.status)==="waiting"&&(e.hostId===p.uid?await He(O(k,`rooms/${n}`)):await He(O(k,`rooms/${n}/players/${p.uid}`)))}catch(t){console.warn(t)}Ai()}function Ai(n){Yr(),Qr(),kn(),Fl(),p.roomRef&&(Xi(p.roomRef),p.roomRef=null),p.roomCode=null,p.roomData=null,p.selectedStockId=null,p.lastStatus=null,localStorage.removeItem("mb_roomCode"),Kr(),n&&W("homeMsg",n,!1)}function Ey(n){const e="",t=(i,s)=>{const r=document.getElementById(i);r&&(r.href=s)};t("navBoard",Vl(n)),t("navWiki",jl(n,e)),t("navAdmin",Gl(n))}async function va(){if(p.roomCode)try{await navigator.clipboard.writeText(p.roomCode),alert("방 코드가 복사되었습니다: "+p.roomCode)}catch{prompt("아래 방 코드를 복사하세요:",p.roomCode)}}async function Iy(){if(!p.roomCode||!p.roomData){D("복사할 시장 데이터가 없습니다","err");return}const n={roomCode:p.roomCode,status:p.roomData.status,startedAt:p.roomData.startedAt||null,marketTick:p.roomData.marketTick||Date.now(),latestNews:p.roomData.latestNews||null,botFeed:p.roomData.botFeed||[],stocks:p.roomData.stocks||{},players:p.roomData.players||{},logs:p.roomData.logs||{}},e=JSON.stringify(n,null,2);try{await navigator.clipboard.writeText(e),D("STONK Board에 가져올 시장 데이터를 복사했습니다")}catch{prompt("STONK Board 관리자 화면에 붙여넣을 시장 데이터입니다:",e)}}function Rn(){return Math.max(1,Math.floor(Number(document.getElementById("qtyInput").value)||1))}async function ws(n){var a,c;const{roomCode:e,roomData:t,uid:i,nickname:s,selectedStockId:r}=p;if(!t||t.status!=="playing")return;if(!r){D("종목을 먼저 선택하세요","err");return}const o=((c=(a=t.stocks)==null?void 0:a[r])==null?void 0:c.name)||"";try{n==="buy"?(await Pl(e,i,s,r,Rn(),t),D(`${o} 매수 체결!`,"up")):n==="sell"?(await jr(e,i,s,r,Rn(),t),D(`${o} 매도 체결!`,"down")):n==="sellAll"&&(await bg(e,i,s,r,t),D(`${o} 전량 매도 체결!`,"down")),W("tradeMsg","",!1)}catch(l){D(l.message,"err")}}function Pi(n){return Math.floor(Number(document.getElementById(n).value)||0)}function by(n){var i,s,r;const e=(r=(s=(i=p.roomData)==null?void 0:i.stocks)==null?void 0:s[n])==null?void 0:r.price;if(!e)return;const t=(o,a)=>{const c=document.getElementById(o);c&&(c.value=a)};t("limitPrice",e),t("stopLoss",Math.round(e*.95)),t("takeProfit",Math.round(e*1.1))}async function wa(n){var l,h;const{roomCode:e,roomData:t,uid:i,nickname:s,selectedStockId:r}=p;if(!t||t.status!=="playing")return;if(!r)return D("종목을 먼저 선택하세요","err");const o=Pi("limitPrice");if(!o)return D("지정가를 입력하세요","err");const a=document.getElementById("limitTif").value,c=((h=(l=t.stocks)==null?void 0:l[r])==null?void 0:h.name)||"";try{await ki(e,i,s,r,{side:n,trigger:n==="buy"?"below":"above",tif:a,label:"지정가"},Rn(),o,t),D(`${c} 지정가 ${n==="buy"?"매수":"매도"} 등록!`,n==="buy"?"up":"down")}catch(u){D(u.message,"err")}}async function Cy(){var l,h,u,d,f;const{roomCode:n,roomData:e,uid:t,nickname:i,selectedStockId:s}=p;if(!e||e.status!=="playing")return;if(!s)return D("종목을 먼저 선택하세요","err");const r=((u=(h=(l=e.players)==null?void 0:l[t])==null?void 0:h.holdings)==null?void 0:u[s])||0;if(r<1)return D("보유한 종목에만 설정할 수 있어요","err");const o=Pi("stopLoss"),a=Pi("takeProfit");if(!o&&!a)return D("손절가 또는 익절가를 입력하세요","err");const c=((f=(d=e.stocks)==null?void 0:d[s])==null?void 0:f.name)||"";try{o&&await ki(n,t,i,s,{side:"sell",trigger:"below",tif:"gtc",label:"손절"},r,o,e),a&&await ki(n,t,i,s,{side:"sell",trigger:"above",tif:"gtc",label:"익절"},r,a,e),D(`${c} 손절·익절 설정 완료 (보유 ${r}주)`,"down")}catch(m){D(m.message,"err")}}async function Ty(){var h,u,d,f;const{roomCode:n,roomData:e,uid:t,nickname:i,selectedStockId:s}=p;if(!e||e.status!=="playing")return;if(!s)return D("종목을 먼저 선택하세요","err");const r=Rn(),o=Math.max(2,Math.min(10,Pi("splitCount")||3)),a=((u=(h=e.stocks)==null?void 0:h[s])==null?void 0:u.price)||0;if(!a)return;const c=Math.floor(r/o);if(c<1)return D(`분할하려면 수량이 최소 ${o}주 이상이어야 해요`,"err");const l=((f=(d=e.stocks)==null?void 0:d[s])==null?void 0:f.name)||"";try{for(let m=0;m<o;m++){const y=Math.round(a*(1-m*.015));await ki(n,t,i,s,{side:"buy",trigger:"below",tif:"gtc",label:`분할${m+1}`},c,y,e)}D(`${l} ${o}회 분할매수 등록! (회당 ${c}주)`,"up")}catch(m){D(m.message,"err")}}async function Sy(n){try{await wg(p.roomCode,n),D("예약 주문 취소됨")}catch(e){D(e.message,"err")}}async function ky(){const{roomCode:n,roomData:e,uid:t}=p,i=e==null?void 0:e.ipo;if(!i||i.status!=="subscribing"){D("청약 가능한 공모주가 없습니다","err");return}const s=Math.max(1,Math.floor(Number(document.getElementById("ipoQty").value)||0));try{await yg(n,t,s,e),D(`${i.name} ${s.toLocaleString("ko-KR")}주 청약 완료!`,"up")}catch(r){D(r.message,"err")}}function Ry(){document.getElementById("btnLogin").addEventListener("click",()=>vs("login")),document.getElementById("btnSignup").addEventListener("click",()=>vs("signup")),document.getElementById("passwordInput").addEventListener("keydown",n=>{n.key==="Enter"&&vs("login")}),document.getElementById("btnNickname").addEventListener("click",()=>{const n=document.getElementById("nicknameInput").value.trim();n&&(p.nickname=n,localStorage.setItem("mb_nickname",n),Kr())}),document.getElementById("nicknameInput").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("btnNickname").click()}),document.getElementById("btnCreateRoom").addEventListener("click",py),document.getElementById("btnJoinRoom").addEventListener("click",()=>{my(document.getElementById("roomCodeInput").value)}),document.getElementById("roomCodeInput").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("btnJoinRoom").click()}),document.getElementById("btnChangeNick").addEventListener("click",()=>{rt("screen-auth")}),document.getElementById("btnLogout").addEventListener("click",async()=>{localStorage.removeItem("mb_roomCode");try{await Rd(Ft)}catch(n){console.error("[auth] 로그아웃 실패:",n)}}),document.getElementById("btnCleanup").addEventListener("click",async()=>{if(!zr()){W("homeMsg","권한이 없습니다.");return}W("homeMsg","정리 중...",!1);try{const n=await Sg();W("homeMsg",`오래된 방 ${n}개를 정리했습니다.`,!1)}catch(n){W("homeMsg","정리 실패: "+n.message)}}),document.getElementById("btnCopyCode").addEventListener("click",va),document.getElementById("btnCopyCode2").addEventListener("click",va),document.getElementById("btnCopyMarketBoard").addEventListener("click",Iy),document.getElementById("btnLeaveRoom").addEventListener("click",wy),document.getElementById("btnLeaveGame").addEventListener("click",()=>{confirm("게임에서 나가시겠습니까? 홈으로 돌아갑니다.")&&Ai()}),document.getElementById("btnEndGame").addEventListener("click",async()=>{if(confirm("게임을 종료하고 최종 순위를 발표할까요?"))try{Yr(),await Tg(p.roomCode,p.roomData)}catch(n){D("종료 실패: "+n.message,"err")}}),document.getElementById("btnStartGame").addEventListener("click",async()=>{try{await Cg(p.roomCode,p.roomData)}catch(n){W("lobbyMsg",n.message)}}),document.getElementById("stockList").addEventListener("click",n=>{const e=n.target.closest("[data-star]");if(e){n.stopPropagation(),Lg(e.dataset.star),p.roomData&&ti(p);return}const t=n.target.closest(".stock-item");t&&(p.selectedStockId=t.dataset.id,by(t.dataset.id),p.roomData&&ti(p))}),document.querySelectorAll(".qty-btn[data-qty]").forEach(n=>{n.addEventListener("click",()=>{const e=document.getElementById("qtyInput");e.value=Math.max(1,Rn()+Number(n.dataset.qty))})}),document.getElementById("btnMaxQty").addEventListener("click",()=>{var r,o,a,c;const{roomData:n,uid:e,selectedStockId:t}=p,i=(o=(r=n==null?void 0:n.stocks)==null?void 0:r[t])==null?void 0:o.price,s=((c=(a=n==null?void 0:n.players)==null?void 0:a[e])==null?void 0:c.cash)||0;i&&(document.getElementById("qtyInput").value=Math.max(1,Math.floor(s/(i*1.0002))))}),document.getElementById("btnBuy").addEventListener("click",()=>ws("buy")),document.getElementById("btnSell").addEventListener("click",()=>ws("sell")),document.getElementById("btnSellAll").addEventListener("click",()=>ws("sellAll")),document.getElementById("orderTabs").addEventListener("click",n=>{const e=n.target.closest(".order-tab");if(!e)return;const t=e.dataset.tab;document.querySelectorAll(".order-tab").forEach(i=>i.classList.toggle("is-active",i===e)),document.querySelectorAll(".order-pane").forEach(i=>i.classList.toggle("hidden",i.dataset.pane!==t))}),document.getElementById("btnLimitBuy").addEventListener("click",()=>wa("buy")),document.getElementById("btnLimitSell").addEventListener("click",()=>wa("sell")),document.getElementById("btnSetStop").addEventListener("click",Cy),document.getElementById("btnSplitBuy").addEventListener("click",Ty),document.getElementById("orderList").addEventListener("click",n=>{const e=n.target.closest("[data-cancel]");e&&Sy(e.dataset.cancel)}),document.getElementById("btnAlert").addEventListener("click",()=>{var o;const{roomData:n,selectedStockId:e}=p,t=(o=n==null?void 0:n.stocks)==null?void 0:o[e];if(!t)return D("종목을 먼저 선택하세요","err");try{window.Notification&&Notification.permission==="default"&&Notification.requestPermission()}catch{}const i=Fg(t.name),s=prompt(`${t.name} 가격 알림 설정
현재가 ${t.price.toLocaleString("ko-KR")}원
알림받을 가격을 입력하세요 (0 또는 빈칸 = 해제):`,i||t.price);if(s===null)return;const r=Math.floor(Number(s)||0);xg(t.name,r),D(r?`${t.name} ${r.toLocaleString("ko-KR")}원 알림 설정됨`:`${t.name} 알림 해제됨`),p.roomData&&ti(p)}),document.getElementById("btnApplyIpo").addEventListener("click",ky),document.getElementById("btnBackHome").addEventListener("click",()=>Ai())}Ry();
