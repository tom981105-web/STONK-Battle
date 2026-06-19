(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var yo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Qa=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Du=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},fr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(h=64)),s.push(t[d],t[u],t[h],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qa(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Du(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||u==null)throw new xu;const h=r<<2|a>>4;if(s.push(h),l!==64){const p=a<<4&240|l>>2;if(s.push(p),u!==64){const m=l<<6&192|u;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ja=function(n){const e=Qa(n);return fr.encodeByteArray(e,!0)},as=function(n){return Ja(n).replace(/\./g,"")},cs=function(n){try{return fr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Uu=()=>Fu().__FIREBASE_DEFAULTS__,Bu=()=>{if(typeof process>"u"||typeof yo>"u")return;const n=yo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cs(n[1]);return e&&JSON.parse(e)},pr=()=>{try{return Uu()||Bu()||Hu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Za=n=>{var e,t;return(t=(e=pr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Wu=n=>{const e=Za(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ec=()=>{var n;return(n=pr())===null||n===void 0?void 0:n.config},tc=n=>{var e;return(e=pr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Vu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[as(JSON.stringify(t)),as(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function ju(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function nc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zu(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ku(){return Ya.NODE_ADMIN===!0}function qu(){try{return typeof indexedDB=="object"}catch{return!1}}function Yu(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="FirebaseError";class st extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Qu,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ju(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new st(i,a,s)}}function Ju(n,e){return n.replace(Xu,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Xu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const sc=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=wn(cs(r[0])||""),t=wn(cs(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Zu=function(n){const e=sc(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ed=function(n){const e=sc(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function mt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ls(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function us(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function ds(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(wo(r)&&wo(o)){if(!ds(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function wo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),d=1518500249):(l=r^o^a,d=1859775393):u<60?(l=r&o|a&(r|o),d=2400959708):(l=r^o^a,d=3395469782);const h=(i<<5|i>>>27)+l+c+d+s[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function nd(n,e){const t=new sd(n,e);return t.subscribe.bind(t)}class sd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");id(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=di),i.error===void 0&&(i.error=di),i.complete===void 0&&(i.complete=di);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function id(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function di(){}function $t(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ws=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function oe(n){return n&&n._delegate?n._delegate:n}class gt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ot="[DEFAULT]";/**
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
 */class od{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new me;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cd(e))try{this.getOrInitializeService({instanceIdentifier:ot})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ot){return this.instances.has(e)}getOptions(e=ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ad(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ot){return this.component?this.component.multipleInstances?e:ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ad(n){return n===ot?void 0:n}function cd(n){return n.instantiationMode==="EAGER"}/**
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
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const ud={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},dd=j.INFO,hd={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},fd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=hd[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gr{constructor(e){this.name=e,this._logLevel=dd,this._logHandler=fd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ud[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const pd=(n,e)=>e.some(t=>n instanceof t);let bo,Eo;function md(){return bo||(bo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gd(){return Eo||(Eo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ic=new WeakMap,$i=new WeakMap,rc=new WeakMap,hi=new WeakMap,_r=new WeakMap;function _d(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(qe(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ic.set(t,n)}).catch(()=>{}),_r.set(e,n),e}function vd(n){if($i.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});$i.set(n,e)}let Fi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $i.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yd(n){Fi=n(Fi)}function wd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(fi(this),e,...t);return rc.set(s,e.sort?e.sort():[e]),qe(s)}:gd().includes(n)?function(...e){return n.apply(fi(this),e),qe(ic.get(this))}:function(...e){return qe(n.apply(fi(this),e))}}function bd(n){return typeof n=="function"?wd(n):(n instanceof IDBTransaction&&vd(n),pd(n,md())?new Proxy(n,Fi):n)}function qe(n){if(n instanceof IDBRequest)return _d(n);if(hi.has(n))return hi.get(n);const e=bd(n);return e!==n&&(hi.set(n,e),_r.set(e,n)),e}const fi=n=>_r.get(n);function Ed(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=qe(o);return s&&o.addEventListener("upgradeneeded",c=>{s(qe(o.result),c.oldVersion,c.newVersion,qe(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Id=["get","getKey","getAll","getAllKeys","count"],Cd=["put","add","delete","clear"],pi=new Map;function Io(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(pi.get(e))return pi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Cd.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Id.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return pi.set(e,r),r}yd(n=>({...n,get:(e,t,s)=>Io(e,t)||n.get(e,t,s),has:(e,t)=>!!Io(e,t)||n.has(e,t)}));/**
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
 */class kd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Sd(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Sd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ui="@firebase/app",Co="0.10.13";/**
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
 */const Bi="[DEFAULT]",eh={[Ui]:"fire-core",[Td]:"fire-core-compat",[Nd]:"fire-analytics",[Rd]:"fire-analytics-compat",[Pd]:"fire-app-check",[Ad]:"fire-app-check-compat",[Md]:"fire-auth",[Od]:"fire-auth-compat",[Dd]:"fire-rtdb",[xd]:"fire-data-connect",[Ld]:"fire-rtdb-compat",[$d]:"fire-fn",[Fd]:"fire-fn-compat",[Ud]:"fire-iid",[Bd]:"fire-iid-compat",[Hd]:"fire-fcm",[Wd]:"fire-fcm-compat",[Vd]:"fire-perf",[jd]:"fire-perf-compat",[Gd]:"fire-rc",[zd]:"fire-rc-compat",[Kd]:"fire-gcs",[qd]:"fire-gcs-compat",[Yd]:"fire-fst",[Jd]:"fire-fst-compat",[Qd]:"fire-vertex","fire-js":"fire-js",[Xd]:"fire-js-all"};/**
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
 */const hs=new Map,th=new Map,Hi=new Map;function ko(n,e){try{n.container.addComponent(e)}catch(t){Oe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ft(n){const e=n.name;if(Hi.has(e))return Oe.debug(`There were multiple attempts to register component ${e}.`),!1;Hi.set(e,n);for(const t of hs.values())ko(t,n);for(const t of th.values())ko(t,n);return!0}function vr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ge(n){return n.settings!==void 0}/**
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
 */class sh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}}/**
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
 */const Yt=Zd;function oc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Bi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ye.create("bad-app-name",{appName:String(i)});if(t||(t=ec()),!t)throw Ye.create("no-options");const r=hs.get(i);if(r){if(ds(t,r.options)&&ds(s,r.config))return r;throw Ye.create("duplicate-app",{appName:i})}const o=new ld(i);for(const c of Hi.values())o.addComponent(c);const a=new sh(t,s,o);return hs.set(i,a),a}function ac(n=Bi){const e=hs.get(n);if(!e&&n===Bi&&ec())return oc();if(!e)throw Ye.create("no-app",{appName:n});return e}function Qe(n,e,t){var s;let i=(s=eh[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oe.warn(a.join(" "));return}Ft(new gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ih="firebase-heartbeat-database",rh=1,bn="firebase-heartbeat-store";let mi=null;function cc(){return mi||(mi=Ed(ih,rh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(bn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ye.create("idb-open",{originalErrorMessage:n.message})})),mi}async function oh(n){try{const t=(await cc()).transaction(bn),s=await t.objectStore(bn).get(lc(n));return await t.done,s}catch(e){if(e instanceof st)Oe.warn(e.message);else{const t=Ye.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oe.warn(t.message)}}}async function So(n,e){try{const s=(await cc()).transaction(bn,"readwrite");await s.objectStore(bn).put(e,lc(n)),await s.done}catch(t){if(t instanceof st)Oe.warn(t.message);else{const s=Ye.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Oe.warn(s.message)}}}function lc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ah=1024,ch=30*24*60*60*1e3;class lh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=To();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ch}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Oe.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=To(),{heartbeatsToSend:s,unsentEntries:i}=uh(this._heartbeatsCache.heartbeats),r=as(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Oe.warn(t),""}}}function To(){return new Date().toISOString().substring(0,10)}function uh(n,e=ah){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ro(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ro(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class dh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qu()?Yu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return So(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return So(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ro(n){return as(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function hh(n){Ft(new gt("platform-logger",e=>new kd(e),"PRIVATE")),Ft(new gt("heartbeat",e=>new lh(e),"PRIVATE")),Qe(Ui,Co,n),Qe(Ui,Co,"esm2017"),Qe("fire-js","")}hh("");var fh="firebase",ph="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(fh,ph,"app");function yr(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function uc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mh=uc,dc=new On("auth","Firebase",uc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new gr("@firebase/auth");function gh(n,...e){fs.logLevel<=j.WARN&&fs.warn(`Auth (${Yt}): ${n}`,...e)}function Jn(n,...e){fs.logLevel<=j.ERROR&&fs.error(`Auth (${Yt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n,...e){throw wr(n,...e)}function Ie(n,...e){return wr(n,...e)}function hc(n,e,t){const s=Object.assign(Object.assign({},mh()),{[e]:t});return new On("auth","Firebase",s).create(e,{appName:n.name})}function ht(n){return hc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wr(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return dc.create(n,...e)}function M(n,e,...t){if(!n)throw wr(e,...t)}function Te(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Jn(e),new Error(e)}function xe(n,e){n||Te(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function _h(){return No()==="http:"||No()==="https:"}function No(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fc{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const bh=new Dn(3e4,6e4);function Er(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Qt(n,e,t,s,i={}){return pc(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=qt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},r);return ju()||(l.referrerPolicy="no-referrer"),fc.fetch()(mc(n,n.config.apiHost,t,a),l)})}async function pc(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},wh),e);try{const i=new Ih(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Kn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Kn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Kn(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw hc(n,d,l);De(n,d)}}catch(i){if(i instanceof st)throw i;De(n,"network-request-failed",{message:String(i)})}}async function Eh(n,e,t,s,i={}){const r=await Qt(n,e,t,s,i);return"mfaPendingCredential"in r&&De(n,"multi-factor-auth-required",{_serverResponse:r}),r}function mc(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?br(n.config,i):`${n.config.apiScheme}://${i}`}class Ih{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ie(this.auth,"network-request-failed")),bh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Ie(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function dn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kh(n,e=!1){const t=oe(n),s=await t.getIdToken(e),i=Ir(s);M(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:dn(gi(i.auth_time)),issuedAtTime:dn(gi(i.iat)),expirationTime:dn(gi(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function gi(n){return Number(n)*1e3}function Ir(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Jn("JWT malformed, contained fewer than 3 sections"),null;try{const i=cs(t);return i?JSON.parse(i):(Jn("Failed to decode base64 JWT payload"),null)}catch(i){return Jn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ao(n){const e=Ir(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof st&&Sh(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Sh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=dn(this.lastLoginAt),this.creationTime=dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ps(n){var e;const t=n.auth,s=await n.getIdToken(),i=await En(n,gc(t,{idToken:s}));M(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?_c(r.providerUserInfo):[],a=Nh(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Vi(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function Rh(n){const e=oe(n);await ps(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nh(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function _c(n){return n.map(e=>{var{providerId:t}=e,s=yr(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(n,e){const t=await pc(n,{},async()=>{const s=qt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=mc(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ph(n,e){return Qt(n,"POST","/v2/accounts:revokeToken",Er(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ao(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Ao(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Ah(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Pt;return s&&(M(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(M(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pt,this.toJSON())}_performRefresh(){return Te("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Re{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=yr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Th(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Vi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await En(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kh(this,e)}reload(){return Rh(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ps(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(ht(this.auth));const e=await this.getIdToken();return await En(this,Ch(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,l,d;const u=(s=t.displayName)!==null&&s!==void 0?s:void 0,h=(i=t.email)!==null&&i!==void 0?i:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=t.createdAt)!==null&&l!==void 0?l:void 0,g=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:w,emailVerified:S,isAnonymous:b,providerData:k,stsTokenManager:P}=t;M(w&&P,e,"internal-error");const _=Pt.fromJSON(this.name,P);M(typeof w=="string",e,"internal-error"),Ue(u,e.name),Ue(h,e.name),M(typeof S=="boolean",e,"internal-error"),M(typeof b=="boolean",e,"internal-error"),Ue(p,e.name),Ue(m,e.name),Ue(v,e.name),Ue(C,e.name),Ue(I,e.name),Ue(g,e.name);const y=new Re({uid:w,auth:e,email:h,emailVerified:S,displayName:u,isAnonymous:b,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:_,createdAt:I,lastLoginAt:g});return k&&Array.isArray(k)&&(y.providerData=k.map(R=>Object.assign({},R))),C&&(y._redirectEventId=C),y}static async _fromIdTokenResponse(e,t,s=!1){const i=new Pt;i.updateFromServerResponse(t);const r=new Re({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ps(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];M(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?_c(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Pt;a.updateFromIdToken(s);const c=new Re({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Vi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Xn(n,e,t){return`firebase:${n}:${e}:${t}`}class Mt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Xn(this.userKey,i.apiKey,r),this.fullPersistenceKey=Xn("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Mt(Ne(Mo),e,s);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Ne(Mo);const o=Xn(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){const u=Re._fromJSON(e,d);l!==r&&(a=u),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Mt(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Mt(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ec(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cc(e))return"Blackberry";if(kc(e))return"Webos";if(wc(e))return"Safari";if((e.includes("chrome/")||bc(e))&&!e.includes("edge/"))return"Chrome";if(Ic(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function yc(n=le()){return/firefox\//i.test(n)}function wc(n=le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bc(n=le()){return/crios\//i.test(n)}function Ec(n=le()){return/iemobile/i.test(n)}function Ic(n=le()){return/android/i.test(n)}function Cc(n=le()){return/blackberry/i.test(n)}function kc(n=le()){return/webos/i.test(n)}function Cr(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Mh(n=le()){var e;return Cr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Oh(){return zu()&&document.documentMode===10}function Sc(n=le()){return Cr(n)||Ic(n)||kc(n)||Cc(n)||/windows phone/i.test(n)||Ec(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n,e=[]){let t;switch(n){case"Browser":t=Oo(le());break;case"Worker":t=`${Oo(le())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Yt}/${s}`}/**
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
 */class Dh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */const Lh=6;class $h{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Lh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Do(this),this.idTokenSubscription=new Do(this),this.beforeStateQueue=new Dh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ne(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Mt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gc(this,{idToken:e}),s=await Re._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ps(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(ht(this));const t=e?oe(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ne(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xh(this),t=new $h(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new On("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ph(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ne(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await Mt.create(this,[Ne(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gh(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function kr(n){return oe(n)}class Do{constructor(e){this.auth=e,this.observer=null,this.addObserver=nd(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Vh(n,e){const t=vr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(ds(r,e??{}))return i;De(i,"already-initialized")}return t.initialize({options:e})}function jh(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ne);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Gh(n,e,t){const s=kr(n);M(s._canInitEmulator,s,"emulator-config-failed"),M(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Rc(e),{host:o,port:a}=zh(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),Kh()}function Rc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zh(n){const e=Rc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:xo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:xo(o)}}}function xo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Kh(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qh="http://localhost";class _t extends Nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):De("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=yr(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new _t(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ot(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ot(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ot(e,t)}buildRequest(){const e={requestUri:qh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class He extends xn{constructor(){super("facebook.com")}static credential(e){return _t._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return He.credential(e.oauthAccessToken)}catch{return null}}}He.FACEBOOK_SIGN_IN_METHOD="facebook.com";He.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _t._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return We.credential(t,s)}catch{return null}}}We.GOOGLE_SIGN_IN_METHOD="google.com";We.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends xn{constructor(){super("github.com")}static credential(e){return _t._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.GITHUB_SIGN_IN_METHOD="github.com";Ve.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends xn{constructor(){super("twitter.com")}static credential(e,t){return _t._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return je.credential(t,s)}catch{return null}}}je.TWITTER_SIGN_IN_METHOD="twitter.com";je.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Re._fromIdTokenResponse(e,s,i),o=Lo(s);return new Ut({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Lo(s);return new Ut({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Lo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends st{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ms.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new ms(e,t,s,i)}}function Pc(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ms._fromErrorAndOperation(n,r,e,s):r})}async function Yh(n,e,t=!1){const s=await En(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ut._forOperation(n,"link",s)}/**
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
 */async function Qh(n,e,t=!1){const{auth:s}=n;if(Ge(s.app))return Promise.reject(ht(s));const i="reauthenticate";try{const r=await En(n,Pc(s,i,e,n),t);M(r.idToken,s,"internal-error");const o=Ir(r.idToken);M(o,s,"internal-error");const{sub:a}=o;return M(n.uid===a,s,"user-mismatch"),Ut._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&De(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(n,e,t=!1){if(Ge(n.app))return Promise.reject(ht(n));const s="signIn",i=await Pc(n,s,e),r=await Ut._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function Xh(n,e,t,s){return oe(n).onIdTokenChanged(e,t,s)}function Zh(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function ef(n,e,t,s){return oe(n).onAuthStateChanged(e,t,s)}const gs="__sak";/**
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
 */class Mc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gs,"1"),this.storage.removeItem(gs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=1e3,nf=10;class Oc extends Mc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Oh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nf):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},tf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oc.type="LOCAL";const sf=Oc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Vs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await rf(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class of{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Tr("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $c="firebaseLocalStorageDb",df=1,_s="firebaseLocalStorage",Fc="fbase_key";class Ln{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function js(n,e){return n.transaction([_s],e?"readwrite":"readonly").objectStore(_s)}function hf(){const n=indexedDB.deleteDatabase($c);return new Ln(n).toPromise()}function ji(){const n=indexedDB.open($c,df);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(_s,{keyPath:Fc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(_s)?e(s):(s.close(),await hf(),e(await ji()))})})}async function $o(n,e,t){const s=js(n,!0).put({[Fc]:e,value:t});return new Ln(s).toPromise()}async function ff(n,e){const t=js(n,!1).get(e),s=await new Ln(t).toPromise();return s===void 0?null:s.value}function Fo(n,e){const t=js(n,!0).delete(e);return new Ln(t).toPromise()}const pf=800,mf=3;class Uc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ji(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>mf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vs._getInstance(uf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await cf(),!this.activeServiceWorker)return;this.sender=new of(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ji();return await $o(e,gs,"1"),await Fo(e,gs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>$o(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ff(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=js(i,!1).getAll();return new Ln(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uc.type="LOCAL";const gf=Uc;new Dn(3e4,6e4);/**
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
 */class Bc{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vf;case"linkViaPopup":case"linkViaRedirect":return wf;case"reauthViaPopup":case"reauthViaRedirect":return yf;default:De(this.auth,"internal-error")}}resolve(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new Dn(2e3,1e4);class Tt extends Bc{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){xe(this.filter.length===1,"Popup operations only handle one event");const e=Tr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ie(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bf.get())};e()}}Tt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="pendingRedirect",Zn=new Map;class If extends Bc{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Zn.get(this.auth._key());if(!e){try{const s=await Cf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Zn.set(this.auth._key(),e)}return this.bypassAuthState||Zn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cf(n,e){const t=Tf(e),s=Sf(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function kf(n,e){Zn.set(n._key(),e)}function Sf(n){return Ne(n._redirectPersistence)}function Tf(n){return Xn(Ef,n.config.apiKey,n.name)}async function Rf(n,e,t=!1){if(Ge(n.app))return Promise.reject(ht(n));const s=kr(n),i=_f(s,e),o=await new If(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=10*60*1e3;class Af{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Hc(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ie(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uo(e))}saveEventToCache(e){this.cachedEventUids.add(Uo(e)),this.lastProcessedEventTime=Date.now()}}function Uo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Hc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Of=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Df=/^https?/;async function xf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Mf(n);for(const t of e)try{if(Lf(t))return}catch{}De(n,"unauthorized-domain")}function Lf(n){const e=Wi(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Df.test(t))return!1;if(Of.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const $f=new Dn(3e4,6e4);function Bo(){const n=Ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ff(n){return new Promise((e,t)=>{var s,i,r;function o(){Bo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bo(),t(Ie(n,"network-request-failed"))},timeout:$f.get()})}if(!((i=(s=Ce().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ce().gapi)===null||r===void 0)&&r.load)o();else{const a=Wh("iframefcb");return Ce()[a]=()=>{gapi.load?o():t(Ie(n,"network-request-failed"))},Bh(`${Hh()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw es=null,e})}let es=null;function Uf(n){return es=es||Ff(n),es}/**
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
 */const Bf=new Dn(5e3,15e3),Hf="__/auth/iframe",Wf="emulator/auth/iframe",Vf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gf(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?br(e,Wf):`https://${n.config.authDomain}/${Hf}`,s={apiKey:e.apiKey,appName:n.name,v:Yt},i=jf.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${qt(s).slice(1)}`}async function zf(n){const e=await Uf(n),t=Ce().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Gf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vf,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ie(n,"network-request-failed"),a=Ce().setTimeout(()=>{r(o)},Bf.get());function c(){Ce().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Kf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qf=500,Yf=600,Qf="_blank",Jf="http://localhost";class Ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xf(n,e,t,s=qf,i=Yf){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Kf),{width:s.toString(),height:i.toString(),top:r,left:o}),l=le().toLowerCase();t&&(a=bc(l)?Qf:t),yc(l)&&(e=e||Jf,c.scrollbars="yes");const d=Object.entries(c).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(Mh(l)&&a!=="_self")return Zf(e||"",a),new Ho(null);const u=window.open(e||"",a,d);M(u,n,"popup-blocked");try{u.focus()}catch{}return new Ho(u)}function Zf(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const ep="__/auth/handler",tp="emulator/auth/handler",np=encodeURIComponent("fac");async function Wo(n,e,t,s,i,r){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Yt,eventId:i};if(e instanceof Ac){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ls(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof xn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${np}=${encodeURIComponent(c)}`:"";return`${sp(n)}?${qt(a).slice(1)}${l}`}function sp({config:n}){return n.emulator?br(n,tp):`https://${n.authDomain}/${ep}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="webStorageSupport";class ip{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xc,this._completeRedirectFn=Rf,this._overrideRedirectResult=kf}async _openPopup(e,t,s,i){var r;xe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Wo(e,t,s,Wi(),i);return Xf(e,o,Tr())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Wo(e,t,s,Wi(),i);return af(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(xe(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await zf(e),s=new Af(e);return t.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_i,{type:_i},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[_i];o!==void 0&&t(!!o),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sc()||wc()||Cr()}}const rp=ip;var Vo="@firebase/auth",jo="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cp(n){Ft(new gt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tc(n)},l=new Fh(s,i,r,c);return jh(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ft(new gt("auth-internal",e=>{const t=kr(e.getProvider("auth").getImmediate());return(s=>new op(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Vo,jo,ap(n)),Qe(Vo,jo,"esm2017")}/**
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
 */const lp=5*60,up=tc("authIdTokenMaxAge")||lp;let Go=null;const dp=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>up)return;const i=t==null?void 0:t.token;Go!==i&&(Go=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hp(n=ac()){const e=vr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Vh(n,{popupRedirectResolver:rp,persistence:[gf,sf,xc]}),s=tc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=dp(r.toString());Zh(t,o,()=>o(t.currentUser)),Xh(t,a=>o(a))}}const i=Za("auth");return i&&Gh(t,`http://${i}`),t}function fp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Uh({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Ie("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",fp().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cp("Browser");var zo={};const Ko="@firebase/database",qo="1.0.8";/**
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
 */const Vc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mp(e)}}catch{}return new gp},lt=Vc("localStorage"),_p=Vc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new gr("@firebase/database"),jc=function(){let n=1;return function(){return n++}}(),Gc=function(n){const e=rd(n),t=new td;t.update(e);const s=t.digest();return fr.encodeByteArray(s)},$n=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=$n.apply(null,s):typeof s=="object"?e+=Z(s):e+=s,e+=" "}return e};let hn=null,Yo=!0;const vp=function(n,e){E(!0,"Can't turn on custom loggers persistently."),Dt.logLevel=j.VERBOSE,hn=Dt.log.bind(Dt)},ne=function(...n){if(Yo===!0&&(Yo=!1,hn===null&&_p.get("logging_enabled")===!0&&vp()),hn){const e=$n.apply(null,n);hn(e)}},Fn=function(n){return function(...e){ne(n,...e)}},Gi=function(...n){const e="FIREBASE INTERNAL ERROR: "+$n(...n);Dt.error(e)},Le=function(...n){const e=`FIREBASE FATAL ERROR: ${$n(...n)}`;throw Dt.error(e),new Error(e)},ce=function(...n){const e="FIREBASE WARNING: "+$n(...n);Dt.warn(e)},yp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Bt="[MIN_NAME]",vt="[MAX_NAME]",It=function(n,e){if(n===e)return 0;if(n===Bt||e===vt)return-1;if(e===Bt||n===vt)return 1;{const t=Qo(n),s=Qo(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},bp=function(n,e){return n===e?0:n<e?-1:1},sn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Z(e))},Nr=function(n){if(typeof n!="object"||n===null)return Z(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Z(e[s]),t+=":",t+=Nr(n[e[s]]);return t+="}",t},zc=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function se(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Kc=function(n){E(!Gs(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Ep=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ip=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Cp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const kp=new RegExp("^-?(0*)\\d{1,10}$"),Sp=-2147483648,Tp=2147483647,Qo=function(n){if(kp.test(n)){const e=Number(n);if(e>=Sp&&e<=Tp)return e}return null},Jt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ce("Exception was thrown by user callback.",t),e},Math.floor(0))}},Rp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Np{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class ts{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ts.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="5",qc="v",Yc="s",Qc="r",Jc="f",Xc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zc="ls",el="p",zi="ac",tl="websocket",nl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=lt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&lt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Pp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function il(n,e,t){E(typeof e=="string","typeof type must == string"),E(typeof t=="object","typeof params must == object");let s;if(e===tl)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===nl)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Pp(n)&&(t.ns=n.namespace);const i=[];return se(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const vi={},yi={};function Pr(n){const e=n.toString();return vi[e]||(vi[e]=new Mp),vi[e]}function Op(n,e){const t=n.toString();return yi[t]||(yi[t]=e()),yi[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Jt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="start",xp="close",Lp="pLPCommand",$p="pRTLPCB",rl="id",ol="pw",al="ser",Fp="cb",Up="seg",Bp="ts",Hp="d",Wp="dframe",cl=1870,ll=30,Vp=cl-ll,jp=25e3,Gp=3e4;class Rt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fn(e),this.stats_=Pr(t),this.urlFn=c=>(this.appCheckToken&&(c[zi]=this.appCheckToken),il(t,nl,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Dp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gp)),wp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mr((...r)=>{const[o,a,c,l,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jo)this.id=a,this.password=c;else if(o===xp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Jo]="t",s[al]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Fp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[qc]=Ar,this.transportSessionId&&(s[Yc]=this.transportSessionId),this.lastSessionId&&(s[Zc]=this.lastSessionId),this.applicationId&&(s[el]=this.applicationId),this.appCheckToken&&(s[zi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xc.test(location.hostname)&&(s[Qc]=Jc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rt.forceAllow_=!0}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){return Rt.forceAllow_?!0:!Rt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ep()&&!Ip()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ja(t),i=zc(s,Vp);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Wp]="t",s[rl]=e,s[ol]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Z(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Mr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jc(),window[Lp+this.uniqueCallbackIdentifier]=e,window[$p+this.uniqueCallbackIdentifier]=t,this.myIFrame=Mr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ne("frame writing exception"),a.stack&&ne(a.stack),ne(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[rl]=this.myID,e[ol]=this.myPW,e[al]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ll+s.length<=cl;){const o=this.pendingSegs.shift();s=s+"&"+Up+i+"="+o.seg+"&"+Bp+i+"="+o.ts+"&"+Hp+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(jp)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=16384,Kp=45e3;let vs=null;typeof MozWebSocket<"u"?vs=MozWebSocket:typeof WebSocket<"u"&&(vs=WebSocket);class ge{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fn(this.connId),this.stats_=Pr(t),this.connURL=ge.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[qc]=Ar,typeof location<"u"&&location.hostname&&Xc.test(location.hostname)&&(o[Qc]=Jc),t&&(o[Yc]=t),s&&(o[Zc]=s),i&&(o[zi]=i),r&&(o[el]=r),il(e,tl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,lt.set("previous_websocket_failure",!0);try{let s;Ku(),this.mySock=new vs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&vs!==null&&!ge.forceDisallow_}static previouslyFailed(){return lt.isInMemoryStorage||lt.get("previous_websocket_failure")===!0}markConnectionHealthy(){lt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=wn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=zc(t,zp);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Kp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ge.responsesRequiredToBeHealthy=2;ge.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rt,ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ge&&ge.isAvailable();let s=t&&!ge.previouslyFailed();if(e.webSocketOnly&&(t||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ge];else{const i=this.transports_=[];for(const r of In.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);In.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}In.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=6e4,Yp=5e3,Qp=10*1024,Jp=100*1024,wi="t",Xo="d",Xp="s",Zo="r",Zp="e",ea="o",ta="a",na="n",sa="p",em="h";class tm{constructor(e,t,s,i,r,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fn("c:"+this.id+":"),this.transportManager_=new In(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Qp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wi in e){const t=e[wi];t===ta?this.upgradeIfSecondaryHealthy_():t===Zo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ea&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=sn("t",e),s=sn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sa,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ta,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:na,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=sn("t",e),s=sn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=sn(wi,e);if(Xo in e){const s=e[Xo];if(t===em){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===na){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Xp?this.onConnectionShutdown_(s):t===Zo?this.onReset_(s):t===Zp?Gi("Server Error: "+s):t===ea?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ar!==s&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),fn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sa,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(lt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends dl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ys}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=32,ra=768;class V{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function H(){return new V("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ze(n){return n.pieces_.length-n.pieceNum_}function G(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new V(n.pieces_,e)}function Or(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function nm(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Cn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function hl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new V(e,0)}function Q(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof V)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new V(t,0)}function $(n){return n.pieceNum_>=n.pieces_.length}function ae(n,e){const t=x(n),s=x(e);if(t===null)return e;if(t===s)return ae(G(n),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function sm(n,e){const t=Cn(n,0),s=Cn(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=It(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Dr(n,e){if(Ze(n)!==Ze(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function fe(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ze(n)>Ze(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class im{constructor(e,t){this.errorPrefix_=t,this.parts_=Cn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ws(this.parts_[s]);fl(this)}}function rm(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ws(e),fl(n)}function om(n){const e=n.parts_.pop();n.byteLength_-=Ws(e),n.parts_.length>0&&(n.byteLength_-=1)}function fl(n){if(n.byteLength_>ra)throw new Error(n.errorPrefix_+"has a key path longer than "+ra+" bytes ("+n.byteLength_+").");if(n.parts_.length>ia)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ia+") or object contains a cycle "+at(n))}function at(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends dl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new xr}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=1e3,am=60*5*1e3,oa=30*1e3,cm=1.3,lm=3e4,um="server_kill",aa=3;class Pe extends ul{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Pe.nextPersistentConnectionId_++,this.log_=Fn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=rn,this.maxReconnectDelay_=am,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ys.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Z(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new me,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Pe.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&we(e,"w")){const s=mt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ed(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=oa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Zu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Z(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Gi("Unrecognized action received from server: "+Z(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=rn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=rn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lm&&(this.reconnectDelay_=rn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(u){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ne("getToken() completed but was canceled"):(ne("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new tm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{ce(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(um)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ce(u),c())}}}interrupt(e){ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ls(this.interruptReasons_)&&(this.reconnectDelay_=rn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Nr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new V(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ne("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=aa&&(this.reconnectDelay_=oa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ne("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=aa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Wc.replace(/\./g,"-")]=1,mr()?e["framework.cordova"]=1:nc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ys.getInstance().currentlyOnline();return ls(this.interruptReasons_)&&e}}Pe.nextPersistentConnectionId_=0;Pe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new F(Bt,e),i=new F(Bt,t);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn;class pl extends zs{static get __EMPTY_NODE(){return qn}static set __EMPTY_NODE(e){qn=e}compare(e,t){return It(e.name,t.name)}isDefinedOn(e){throw Kt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return F.MIN}maxPost(){return new F(vt,qn)}makePost(e,t){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,qn)}toString(){return".key"}}const xt=new pl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class te{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??te.RED,this.left=i??ue.EMPTY_NODE,this.right=r??ue.EMPTY_NODE}copy(e,t,s,i,r){return new te(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}te.RED=!0;te.BLACK=!1;class dm{copy(e,t,s,i,r){return this}insert(e,t,s){return new te(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ue{constructor(e,t=ue.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ue(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,te.BLACK,null,null))}remove(e){return new ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,te.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Yn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Yn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Yn(this.root_,null,this.comparator_,!0,e)}}ue.EMPTY_NODE=new dm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(n,e){return It(n.name,e.name)}function Lr(n,e){return It(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki;function fm(n){Ki=n}const ml=function(n){return typeof n=="number"?"number:"+Kc(n):"string:"+n},gl=function(n){if(n.isLeafNode()){const e=n.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&we(e,".sv"),"Priority must be a string or number.")}else E(n===Ki||n.isEmpty(),"priority of unexpected type.");E(n===Ki||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca;class ee{constructor(e,t=ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gl(this.priorityNode_)}static set __childrenNodeConstructor(e){ca=e}static get __childrenNodeConstructor(){return ca}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:x(e)===".priority"?this.priorityNode_:ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=x(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||Ze(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ml(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Kc(this.value_):e+=this.value_,this.lazyHash_=Gc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ee.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ee.VALUE_TYPE_ORDER.indexOf(t),r=ee.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+t),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l,vl;function pm(n){_l=n}function mm(n){vl=n}class gm extends zs{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?It(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return F.MIN}maxPost(){return new F(vt,new ee("[PRIORITY-POST]",vl))}makePost(e,t){const s=_l(e);return new F(t,new ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const q=new gm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=Math.log(2);class vm{constructor(e){const t=r=>parseInt(Math.log(r)/_m,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ws=function(n,e,t,s){n.sort(e);const i=function(c,l){const d=l-c;let u,h;if(d===0)return null;if(d===1)return u=n[c],h=t?t(u):u,new te(h,u.node,te.BLACK,null,null);{const p=parseInt(d/2,10)+c,m=i(c,p),v=i(p+1,l);return u=n[p],h=t?t(u):u,new te(h,u.node,te.BLACK,m,v)}},r=function(c){let l=null,d=null,u=n.length;const h=function(m,v){const C=u-m,I=u;u-=m;const g=i(C+1,I),w=n[C],S=t?t(w):w;p(new te(S,w.node,v,null,g))},p=function(m){l?(l.left=m,l=m):(d=m,l=m)};for(let m=0;m<c.count;++m){const v=c.nextBitIsOne(),C=Math.pow(2,c.count-(m+1));v?h(C,te.BLACK):(h(C,te.BLACK),h(C,te.RED))}return d},o=new vm(n.length),a=r(o);return new ue(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi;const St={};class Ae{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return E(St&&q,"ChildrenNode.ts has not been loaded"),bi=bi||new Ae({".priority":St},{".priority":q}),bi}get(e){const t=mt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ue?t:null}hasIndex(e){return we(this.indexSet_,e.toString())}addIndex(e,t){E(e!==xt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ws(s,e.getCompare()):a=St;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new Ae(d,l)}addToIndexes(e,t){const s=us(this.indexes_,(i,r)=>{const o=mt(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===St)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(F.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),ws(a,o.getCompare())}else return St;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new F(e.name,a))),c.insert(e,e.node)}});return new Ae(s,this.indexSet_)}removeFromIndexes(e,t){const s=us(this.indexes_,i=>{if(i===St)return i;{const r=t.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new Ae(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on;class A{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&gl(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return on||(on=new A(new ue(Lr),null,Ae.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||on}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?on:t}}getChild(e){const t=x(e);return t===null?this:this.getImmediateChild(t).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(E(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new F(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?on:this.priorityNode_;return new A(i,o,r)}}updateChild(e,t){const s=x(e);if(s===null)return t;{E(x(e)!==".priority"||Ze(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(G(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(q,(o,a)=>{t[o]=a.val(e),s++,r&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ml(this.getPriority().val())+":"),this.forEachChild(q,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Gc(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new F(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new F(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Un?-1:0}withIndex(e){if(e===xt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===xt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(q),i=t.getIterator(q);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xt?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ym extends A{constructor(){super(new ue(Lr),A.EMPTY_NODE,Ae.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Un=new ym;Object.defineProperties(F,{MIN:{value:new F(Bt,A.EMPTY_NODE)},MAX:{value:new F(vt,Un)}});pl.__EMPTY_NODE=A.EMPTY_NODE;ee.__childrenNodeConstructor=A;fm(Un);mm(Un);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=!0;function Y(n,e=null){if(n===null)return A.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ee(t,Y(e))}if(!(n instanceof Array)&&wm){const t=[];let s=!1;if(se(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=Y(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new F(o,c)))}}),t.length===0)return A.EMPTY_NODE;const r=ws(t,hm,o=>o.name,Lr);if(s){const o=ws(t,q.getCompare());return new A(r,Y(e),new Ae({".priority":o},{".priority":q}))}else return new A(r,Y(e),Ae.Default)}else{let t=A.EMPTY_NODE;return se(n,(s,i)=>{if(we(n,s)&&s.substring(0,1)!=="."){const r=Y(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Y(e))}}pm(Y);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends zs{constructor(e){super(),this.indexPath_=e,E(!$(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?It(e.name,t.name):r}makePost(e,t){const s=Y(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(t,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Un);return new F(vt,e)}toString(){return Cn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends zs{compare(e,t){const s=e.node.compareTo(t.node);return s===0?It(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,t){const s=Y(e);return new F(t,s)}toString(){return".value"}}const Im=new Em;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $r{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(kn(t,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ht(t,s)):o.trackChildChange(Sn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(q,(i,r)=>{t.hasChild(i)||s.trackChildChange(kn(i,r))}),t.isLeafNode()||t.forEachChild(q,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Sn(i,r,o))}else s.trackChildChange(Ht(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.indexedFilter_=new $r(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tn.getStartPost_(e),this.endPost_=Tn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new F(t,s))||(s=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=A.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const r=this;return t.forEachChild(q,(o,a)=>{r.matches(new F(o,a))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Tn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new F(t,s))||(s=A.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,p)=>u(p,h)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const c=new F(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,c);if(d&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Sn(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(kn(t,u));const v=a.updateImmediateChild(t,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ht(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return s.isEmpty()?e:d&&o(l,c)>=0?(r!=null&&(r.trackChildChange(kn(l.name,l.node)),r.trackChildChange(Ht(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Bt}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new Fr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sm(n){return n.loadsAllData()?new $r(n.getIndex()):n.hasLimit()?new km(n):new Tn(n)}function la(n){const e={};if(n.isDefault())return e;let t;if(n.index_===q?t="$priority":n.index_===Im?t="$value":n.index_===xt?t="$key":(E(n.index_ instanceof bm,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Z(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Z(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Z(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Z(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Z(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ua(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends ul{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Fn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=bs.getListenId_(e,s),a={};this.listens_[o]=a;const c=la(e._queryParams);this.restRequest_(r+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,s),mt(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",i(h,null)}})}unlisten(e,t){const s=bs.getListenId_(e,t);delete this.listens_[s]}get(e){const t=la(e._queryParams),s=e._path.toString(),i=new me;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=wn(a.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Es(){return{value:null,children:new Map}}function Xt(n,e,t){if($(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=x(e);n.children.has(s)||n.children.set(s,Es());const i=n.children.get(s);e=G(e),Xt(i,e,t)}}function qi(n,e){if($(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(q,(s,i)=>{Xt(n,new V(s),i)}),qi(n,e)}}else if(n.children.size>0){const t=x(e);return e=G(e),n.children.has(t)&&qi(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Yi(n,e,t){n.value!==null?t(e,n.value):Rm(n,(s,i)=>{const r=new V(e.toString()+"/"+s);Yi(i,r,t)})}function Rm(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&se(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=10*1e3,Am=30*1e3,Pm=5*60*1e3;class Mm{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Nm(e);const s=da+(Am-da)*Math.random();fn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;se(e,(i,r)=>{r>0&&we(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),fn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Is{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=_e.ACK_USER_WRITE,this.source=Ur()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new V(e));return new Is(H(),t,this.revert)}}else return E(x(this.path)===e,"operationForChild called for unrelated child."),new Is(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=_e.OVERWRITE}operationForChild(e){return $(this.path)?new yt(this.source,H(),this.snap.getImmediateChild(e)):new yt(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=_e.MERGE}operationForChild(e){if($(this.path)){const t=this.children.subtree(new V(e));return t.isEmpty()?null:t.value?new yt(this.source,H(),t.value):new Wt(this.source,H(),t)}else return E(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wt(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const t=x(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Dm(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Cm(o.childName,o.snapshotNode))}),an(n,i,"child_removed",e,s,t),an(n,i,"child_added",e,s,t),an(n,i,"child_moved",r,s,t),an(n,i,"child_changed",e,s,t),an(n,i,"value",e,s,t),i}function an(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>Lm(n,a,c)),o.forEach(a=>{const c=xm(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function xm(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Lm(n,e,t){if(e.childName==null||t.childName==null)throw Kt("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n,e){return{eventCache:n,serverCache:e}}function pn(n,e,t,s){return Ks(new et(e,t,s),n.serverCache)}function wl(n,e,t,s){return Ks(n.eventCache,new et(e,t,s))}function Cs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function wt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;const $m=()=>(Ei||(Ei=new ue(bp)),Ei);class z{constructor(e,t=$m()){this.value=e,this.children=t}static fromObject(e){let t=new z(null);return se(e,(s,i)=>{t=t.set(new V(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:H(),value:this.value};if($(e))return null;{const s=x(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(G(e),t);return r!=null?{path:Q(new V(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const t=x(e),s=this.children.get(t);return s!==null?s.subtree(G(e)):new z(null)}}set(e,t){if($(e))return new z(t,this.children);{const s=x(e),r=(this.children.get(s)||new z(null)).set(G(e),t),o=this.children.insert(s,r);return new z(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new z(null):new z(null,this.children);{const t=x(e),s=this.children.get(t);if(s){const i=s.remove(G(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new z(null):new z(this.value,r)}else return this}}get(e){if($(e))return this.value;{const t=x(e),s=this.children.get(t);return s?s.get(G(e)):null}}setTree(e,t){if($(e))return t;{const s=x(e),r=(this.children.get(s)||new z(null)).setTree(G(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new z(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Q(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,H(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if($(e))return null;{const r=x(e),o=this.children.get(r);return o?o.findOnPath_(G(e),Q(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,H(),t)}foreachOnPath_(e,t,s){if($(e))return this;{this.value&&s(t,this.value);const i=x(e),r=this.children.get(i);return r?r.foreachOnPath_(G(e),Q(t,i),s):new z(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(Q(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.writeTree_=e}static empty(){return new ve(new z(null))}}function mn(n,e,t){if($(e))return new ve(new z(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ae(i,e);return r=r.updateChild(o,t),new ve(n.writeTree_.set(i,r))}else{const i=new z(t),r=n.writeTree_.setTree(e,i);return new ve(r)}}}function Qi(n,e,t){let s=n;return se(t,(i,r)=>{s=mn(s,Q(e,i),r)}),s}function ha(n,e){if($(e))return ve.empty();{const t=n.writeTree_.setTree(e,new z(null));return new ve(t)}}function Ji(n,e){return Ct(n,e)!=null}function Ct(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ae(t.path,e)):null}function fa(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(q,(s,i)=>{e.push(new F(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function Je(n,e){if($(e))return n;{const t=Ct(n,e);return t!=null?new ve(new z(t)):new ve(n.writeTree_.subtree(e))}}function Xi(n){return n.writeTree_.isEmpty()}function Vt(n,e){return bl(H(),n.writeTree_,e)}function bl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=bl(Q(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Q(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n,e){return kl(e,n)}function Fm(n,e,t,s,i){E(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=mn(n.visibleWrites,e,t)),n.lastWriteId=s}function Um(n,e,t,s){E(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Qi(n.visibleWrites,e,t),n.lastWriteId=s}function Bm(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Hm(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);E(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Wm(a,s.path)?i=!1:fe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Vm(n),!0;if(s.snap)n.visibleWrites=ha(n.visibleWrites,s.path);else{const a=s.children;se(a,c=>{n.visibleWrites=ha(n.visibleWrites,Q(s.path,c))})}return!0}else return!1}function Wm(n,e){if(n.snap)return fe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&fe(Q(n.path,t),e))return!0;return!1}function Vm(n){n.visibleWrites=El(n.allWrites,jm,H()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function jm(n){return n.visible}function El(n,e,t){let s=ve.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)fe(t,o)?(a=ae(t,o),s=mn(s,a,r.snap)):fe(o,t)&&(a=ae(o,t),s=mn(s,H(),r.snap.getChild(a)));else if(r.children){if(fe(t,o))a=ae(t,o),s=Qi(s,a,r.children);else if(fe(o,t))if(a=ae(o,t),$(a))s=Qi(s,H(),r.children);else{const c=mt(r.children,x(a));if(c){const l=c.getChild(G(a));s=mn(s,H(),l)}}}else throw Kt("WriteRecord should have .snap or .children")}}return s}function Il(n,e,t,s,i){if(!s&&!i){const r=Ct(n.visibleWrites,e);if(r!=null)return r;{const o=Je(n.visibleWrites,e);if(Xi(o))return t;if(t==null&&!Ji(o,H()))return null;{const a=t||A.EMPTY_NODE;return Vt(o,a)}}}else{const r=Je(n.visibleWrites,e);if(!i&&Xi(r))return t;if(!i&&t==null&&!Ji(r,H()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(fe(l.path,e)||fe(e,l.path))},a=El(n.allWrites,o,e),c=t||A.EMPTY_NODE;return Vt(a,c)}}}function Gm(n,e,t){let s=A.EMPTY_NODE;const i=Ct(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(q,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Je(n.visibleWrites,e);return t.forEachChild(q,(o,a)=>{const c=Vt(Je(r,new V(o)),a);s=s.updateImmediateChild(o,c)}),fa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Je(n.visibleWrites,e);return fa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function zm(n,e,t,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Q(e,t);if(Ji(n.visibleWrites,r))return null;{const o=Je(n.visibleWrites,r);return Xi(o)?i.getChild(t):Vt(o,i.getChild(t))}}function Km(n,e,t,s){const i=Q(e,t),r=Ct(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Je(n.visibleWrites,i);return Vt(o,s.getNode().getImmediateChild(t))}else return null}function qm(n,e){return Ct(n.visibleWrites,e)}function Ym(n,e,t,s,i,r,o){let a;const c=Je(n.visibleWrites,e),l=Ct(c,H());if(l!=null)a=l;else if(t!=null)a=Vt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=h.getNext();for(;p&&d.length<i;)u(p,s)!==0&&d.push(p),p=h.getNext();return d}else return[]}function Qm(){return{visibleWrites:ve.empty(),allWrites:[],lastWriteId:-1}}function ks(n,e,t,s){return Il(n.writeTree,n.treePath,e,t,s)}function Wr(n,e){return Gm(n.writeTree,n.treePath,e)}function pa(n,e,t,s){return zm(n.writeTree,n.treePath,e,t,s)}function Ss(n,e){return qm(n.writeTree,Q(n.treePath,e))}function Jm(n,e,t,s,i,r){return Ym(n.writeTree,n.treePath,e,t,s,i,r)}function Vr(n,e,t){return Km(n.writeTree,n.treePath,e,t)}function Cl(n,e){return kl(Q(n.treePath,e),n.writeTree)}function kl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;E(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Sn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,kn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Ht(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Sn(s,e.snapshotNode,i.oldSnap));else throw Kt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Sl=new Zm;class jr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new et(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:wt(this.viewCache_),r=Jm(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n){return{filter:n}}function tg(n,e){E(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ng(n,e,t,s,i){const r=new Xm;let o,a;if(t.type===_e.OVERWRITE){const l=t;l.source.fromUser?o=Zi(n,e,l.path,l.snap,s,i,r):(E(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!$(l.path),o=Ts(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===_e.MERGE){const l=t;l.source.fromUser?o=ig(n,e,l.path,l.children,s,i,r):(E(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=er(n,e,l.path,l.children,s,i,a,r))}else if(t.type===_e.ACK_USER_WRITE){const l=t;l.revert?o=ag(n,e,l.path,s,i,r):o=rg(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===_e.LISTEN_COMPLETE)o=og(n,e,t.path,s,r);else throw Kt("Unknown operation type: "+t.type);const c=r.getChanges();return sg(e,o,c),{viewCache:o,changes:c}}function sg(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Cs(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(yl(Cs(e)))}}function Tl(n,e,t,s,i,r){const o=e.eventCache;if(Ss(s,t)!=null)return e;{let a,c;if($(t))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=wt(e),d=l instanceof A?l:A.EMPTY_NODE,u=Wr(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=ks(s,wt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=x(t);if(l===".priority"){E(Ze(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=pa(s,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=G(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=pa(s,t,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=Vr(s,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,i,r):a=o.getNode()}}return pn(e,a,o.isFullyInitialized()||$(t),n.filter.filtersNodes())}}function Ts(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if($(t))l=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,s);l=d.updateFullNode(c.getNode(),p,null)}else{const p=x(t);if(!c.isCompleteForPath(t)&&Ze(t)>1)return e;const m=G(t),C=c.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?l=d.updatePriority(c.getNode(),C):l=d.updateChild(c.getNode(),p,C,m,Sl,null)}const u=wl(e,l,c.isFullyInitialized()||$(t),d.filtersNodes()),h=new jr(i,u,r);return Tl(n,u,t,i,h,a)}function Zi(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const d=new jr(i,e,r);if($(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=pn(e,l,!0,n.filter.filtersNodes());else{const u=x(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=pn(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=G(t),p=a.getNode().getImmediateChild(u);let m;if($(h))m=s;else{const v=d.getCompleteChild(u);v!=null?Or(h)===".priority"&&v.getChild(hl(h)).isEmpty()?m=v:m=v.updateChild(h,s):m=A.EMPTY_NODE}if(p.equals(m))c=e;else{const v=n.filter.updateChild(a.getNode(),u,m,h,d,o);c=pn(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function ma(n,e){return n.eventCache.isCompleteForChild(e)}function ig(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const d=Q(t,c);ma(e,x(d))&&(a=Zi(n,a,d,l,i,r,o))}),s.foreach((c,l)=>{const d=Q(t,c);ma(e,x(d))||(a=Zi(n,a,d,l,i,r,o))}),a}function ga(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function er(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;$(t)?l=s:l=new z(null).setTree(t,s);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),m=ga(n,p,h);c=Ts(n,c,new V(u),m,i,r,o,a)}}),l.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!p){const m=e.serverCache.getNode().getImmediateChild(u),v=ga(n,m,h);c=Ts(n,c,new V(u),v,i,r,o,a)}}),c}function rg(n,e,t,s,i,r,o){if(Ss(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if($(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ts(n,e,t,c.getNode().getChild(t),i,r,a,o);if($(t)){let l=new z(null);return c.getNode().forEachChild(xt,(d,u)=>{l=l.set(new V(d),u)}),er(n,e,t,l,i,r,a,o)}else return e}else{let l=new z(null);return s.foreach((d,u)=>{const h=Q(t,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),er(n,e,t,l,i,r,a,o)}}function og(n,e,t,s,i){const r=e.serverCache,o=wl(e,r.getNode(),r.isFullyInitialized()||$(t),r.isFiltered());return Tl(n,o,t,s,Sl,i)}function ag(n,e,t,s,i,r){let o;if(Ss(s,t)!=null)return e;{const a=new jr(s,e,i),c=e.eventCache.getNode();let l;if($(t)||x(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ks(s,wt(e));else{const u=e.serverCache.getNode();E(u instanceof A,"serverChildren would be complete if leaf node"),d=Wr(s,u)}d=d,l=n.filter.updateFullNode(c,d,r)}else{const d=x(t);let u=Vr(s,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,G(t),a,r):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,A.EMPTY_NODE,G(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ks(s,wt(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Ss(s,H())!=null,pn(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new $r(s.getIndex()),r=Sm(s);this.processor_=eg(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(A.EMPTY_NODE,a.getNode(),null),d=new et(c,o.isFullyInitialized(),i.filtersNodes()),u=new et(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ks(u,d),this.eventGenerator_=new Om(this.query_)}get query(){return this.query_}}function lg(n){return n.viewCache_.serverCache.getNode()}function ug(n){return Cs(n.viewCache_)}function dg(n,e){const t=wt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!$(e)&&!t.getImmediateChild(x(e)).isEmpty())?t.getChild(e):null}function _a(n){return n.eventRegistrations_.length===0}function hg(n,e){n.eventRegistrations_.push(e)}function va(n,e,t){const s=[];if(t){E(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function ya(n,e,t,s){e.type===_e.MERGE&&e.source.queryId!==null&&(E(wt(n.viewCache_),"We should always have a full cache before handling merges"),E(Cs(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=ng(n.processor_,i,e,t,s);return tg(n.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Rl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function fg(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(q,(r,o)=>{s.push(Ht(r,o))}),t.isFullyInitialized()&&s.push(yl(t.getNode())),Rl(n,s,t.getNode(),e)}function Rl(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Dm(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs;class Nl{constructor(){this.views=new Map}}function pg(n){E(!Rs,"__referenceConstructor has already been defined"),Rs=n}function mg(){return E(Rs,"Reference.ts has not been loaded"),Rs}function gg(n){return n.views.size===0}function Gr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),ya(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(ya(o,e,t,s));return r}}function Al(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=ks(t,i?s:null),c=!1;a?c=!0:s instanceof A?(a=Wr(t,s),c=!1):(a=A.EMPTY_NODE,c=!1);const l=Ks(new et(a,c,!1),new et(s,i,!1));return new cg(e,l)}return o}function _g(n,e,t,s,i,r){const o=Al(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),hg(o,t),fg(o,t)}function vg(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=tt(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(va(l,t,s)),_a(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(va(c,t,s)),_a(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!tt(n)&&r.push(new(mg())(e._repo,e._path)),{removed:r,events:o}}function Pl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Xe(n,e){let t=null;for(const s of n.views.values())t=t||dg(s,e);return t}function Ml(n,e){if(e._queryParams.loadsAllData())return Ys(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Ol(n,e){return Ml(n,e)!=null}function tt(n){return Ys(n)!=null}function Ys(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;function yg(n){E(!Ns,"__referenceConstructor has already been defined"),Ns=n}function wg(){return E(Ns,"Reference.ts has not been loaded"),Ns}let bg=1;class wa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new z(null),this.pendingWriteTree_=Qm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zr(n,e,t,s,i){return Fm(n.pendingWriteTree_,e,t,s,i),i?Zt(n,new yt(Ur(),e,t)):[]}function Eg(n,e,t,s){Um(n.pendingWriteTree_,e,t,s);const i=z.fromObject(t);return Zt(n,new Wt(Ur(),e,i))}function ze(n,e,t=!1){const s=Bm(n.pendingWriteTree_,e);if(Hm(n.pendingWriteTree_,e)){let r=new z(null);return s.snap!=null?r=r.set(H(),!0):se(s.children,o=>{r=r.set(new V(o),!0)}),Zt(n,new Is(s.path,r,t))}else return[]}function Bn(n,e,t){return Zt(n,new yt(Br(),e,t))}function Ig(n,e,t){const s=z.fromObject(t);return Zt(n,new Wt(Br(),e,s))}function Cg(n,e){return Zt(n,new Rn(Br(),e))}function kg(n,e,t){const s=Kr(n,t);if(s){const i=qr(s),r=i.path,o=i.queryId,a=ae(r,e),c=new Rn(Hr(o),a);return Yr(n,r,c)}else return[]}function As(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Ol(o,e))){const c=vg(o,e,t,s);gg(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(h,p)=>tt(p));if(d&&!u){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=Rg(h);for(let m=0;m<p.length;++m){const v=p[m],C=v.query,I=$l(n,v);n.listenProvider_.startListening(gn(C),Nn(n,C),I.hashFn,I.onComplete)}}}!u&&l.length>0&&!s&&(d?n.listenProvider_.stopListening(gn(e),null):l.forEach(h=>{const p=n.queryToTagMap.get(Js(h));n.listenProvider_.stopListening(gn(h),p)}))}Ng(n,l)}return a}function Dl(n,e,t,s){const i=Kr(n,s);if(i!=null){const r=qr(i),o=r.path,a=r.queryId,c=ae(o,e),l=new yt(Hr(a),c,t);return Yr(n,o,l)}else return[]}function Sg(n,e,t,s){const i=Kr(n,s);if(i){const r=qr(i),o=r.path,a=r.queryId,c=ae(o,e),l=z.fromObject(t),d=new Wt(Hr(a),c,l);return Yr(n,o,d)}else return[]}function tr(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(h,p)=>{const m=ae(h,i);r=r||Xe(p,m),o=o||tt(p)});let a=n.syncPointTree_.get(i);a?(o=o||tt(a),r=r||Xe(a,H())):(a=new Nl,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=A.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,m)=>{const v=Xe(m,H());v&&(r=r.updateImmediateChild(p,v))}));const l=Ol(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=Js(e);E(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=Ag();n.queryToTagMap.set(h,p),n.tagToQueryMap.set(p,h)}const d=qs(n.pendingWriteTree_,i);let u=_g(a,e,t,d,r,c);if(!l&&!o&&!s){const h=Ml(a,e);u=u.concat(Pg(n,e,h))}return u}function Qs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=ae(o,e),l=Xe(a,c);if(l)return l});return Il(i,e,r,t,!0)}function Tg(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const u=ae(l,t);s=s||Xe(d,u)});let i=n.syncPointTree_.get(t);i?s=s||Xe(i,H()):(i=new Nl,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new et(s,!0,!1):null,a=qs(n.pendingWriteTree_,e._path),c=Al(i,e,a,r?o.getNode():A.EMPTY_NODE,r);return ug(c)}function Zt(n,e){return xl(e,n.syncPointTree_,null,qs(n.pendingWriteTree_,H()))}function xl(n,e,t,s){if($(n.path))return Ll(n,e,t,s);{const i=e.get(H());t==null&&i!=null&&(t=Xe(i,H()));let r=[];const o=x(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=Cl(s,o);r=r.concat(xl(a,c,l,d))}return i&&(r=r.concat(Gr(i,n,s,t))),r}}function Ll(n,e,t,s){const i=e.get(H());t==null&&i!=null&&(t=Xe(i,H()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Cl(s,o),d=n.operationForChild(o);d&&(r=r.concat(Ll(d,a,c,l)))}),i&&(r=r.concat(Gr(i,n,s,t))),r}function $l(n,e){const t=e.query,s=Nn(n,t);return{hashFn:()=>(lg(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?kg(n,t._path,s):Cg(n,t._path);{const r=Cp(i,t);return As(n,t,null,r)}}}}function Nn(n,e){const t=Js(e);return n.queryToTagMap.get(t)}function Js(n){return n._path.toString()+"$"+n._queryIdentifier}function Kr(n,e){return n.tagToQueryMap.get(e)}function qr(n){const e=n.indexOf("$");return E(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new V(n.substr(0,e))}}function Yr(n,e,t){const s=n.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=qs(n.pendingWriteTree_,e);return Gr(s,t,i,null)}function Rg(n){return n.fold((e,t,s)=>{if(t&&tt(t))return[Ys(t)];{let i=[];return t&&(i=Pl(t)),se(s,(r,o)=>{i=i.concat(o)}),i}})}function gn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(wg())(n._repo,n._path):n}function Ng(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Js(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Ag(){return bg++}function Pg(n,e,t){const s=e._path,i=Nn(n,e),r=$l(n,t),o=n.listenProvider_.startListening(gn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)E(!tt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!$(l)&&d&&tt(d))return[Ys(d).query];{let h=[];return d&&(h=h.concat(Pl(d).map(p=>p.query))),se(u,(p,m)=>{h=h.concat(m)}),h}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(gn(d),Nn(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qr(t)}node(){return this.node_}}class Jr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Q(this.path_,e);return new Jr(this.syncTree_,t)}node(){return Qs(this.syncTree_,this.path_)}}const Mg=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ba=function(n,e,t){if(!n||typeof n!="object")return n;if(E(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Og(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Dg(n[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Og=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:E(!1,"Unexpected server value: "+n)}},Dg=function(n,e,t){n.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Fl=function(n,e,t,s){return Zr(e,new Jr(t,n),s)},Xr=function(n,e,t){return Zr(n,new Qr(e),t)};function Zr(n,e,t){const s=n.getPriority().val(),i=ba(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ba(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ee(a,Y(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ee(i))),o.forEachChild(q,(a,c)=>{const l=Zr(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Xs(n,e){let t=e instanceof V?e:new V(e),s=n,i=x(t);for(;i!==null;){const r=mt(s.node.children,i)||{children:{},childCount:0};s=new eo(i,s,r),t=G(t),i=x(t)}return s}function kt(n){return n.node.value}function to(n,e){n.node.value=e,nr(n)}function Ul(n){return n.node.childCount>0}function xg(n){return kt(n)===void 0&&!Ul(n)}function Zs(n,e){se(n.node.children,(t,s)=>{e(new eo(t,n,s))})}function Bl(n,e,t,s){t&&e(n),Zs(n,i=>{Bl(i,e,!0)})}function Lg(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Hn(n){return new V(n.parent===null?n.name:Hn(n.parent)+"/"+n.name)}function nr(n){n.parent!==null&&$g(n.parent,n.name,n)}function $g(n,e,t){const s=xg(t),i=we(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,nr(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,nr(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=/[\[\].#$\/\u0000-\u001F\u007F]/,Ug=/[\[\].#$\u0000-\u001F\u007F]/,Ii=10*1024*1024,no=function(n){return typeof n=="string"&&n.length!==0&&!Fg.test(n)},Hl=function(n){return typeof n=="string"&&n.length!==0&&!Ug.test(n)},Bg=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hl(n)},so=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Gs(n)||n&&typeof n=="object"&&we(n,".sv")},Ps=function(n,e,t,s){s&&e===void 0||Wn($t(n,"value"),e,t)},Wn=function(n,e,t){const s=t instanceof V?new im(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+at(s));if(typeof e=="function")throw new Error(n+"contains a function "+at(s)+" with contents = "+e.toString());if(Gs(e))throw new Error(n+"contains "+e.toString()+" "+at(s));if(typeof e=="string"&&e.length>Ii/3&&Ws(e)>Ii)throw new Error(n+"contains a string greater than "+Ii+" utf8 bytes "+at(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(se(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!no(o)))throw new Error(n+" contains an invalid key ("+o+") "+at(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rm(s,o),Wn(n,a,s),om(s)}),i&&r)throw new Error(n+' contains ".value" child '+at(s)+" in addition to actual children.")}},Hg=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Cn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!no(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(sm);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&fe(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Wl=function(n,e,t,s){const i=$t(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];se(e,(o,a)=>{const c=new V(o);if(Wn(i,a,Q(t,c)),Or(c)===".priority"&&!so(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),Hg(i,r)},Wg=function(n,e,t){if(Gs(e))throw new Error($t(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!so(e))throw new Error($t(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Vl=function(n,e,t,s){if(!Hl(t))throw new Error($t(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Vg=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vl(n,e,t)},Ke=function(n,e){if(x(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},jg=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!no(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Bg(t))throw new Error($t(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ei(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Dr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function jl(n,e,t){ei(n,t),Gl(n,s=>Dr(s,e))}function de(n,e,t){ei(n,t),Gl(n,s=>fe(s,e)||fe(e,s))}function Gl(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(zg(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function zg(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();hn&&ne("event: "+t.toString()),Jt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="repo_interrupt",qg=25;class Yg{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Es(),this.transactionQueueTree_=new eo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qg(n,e,t){if(n.stats_=Pr(n.repoInfo_),n.forceRestClient_||Rp())n.server_=new bs(n.repoInfo_,(s,i,r,o)=>{Ea(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ia(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Z(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Pe(n.repoInfo_,e,(s,i,r,o)=>{Ea(n,s,i,r,o)},s=>{Ia(n,s)},s=>{Jg(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Op(n.repoInfo_,()=>new Mm(n.stats_,n.server_)),n.infoData_=new Tm,n.infoSyncTree_=new wa({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Bn(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),io(n,"connected",!1),n.serverSyncTree_=new wa({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);de(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function zl(n){const t=n.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Vn(n){return Mg({timestamp:zl(n)})}function Ea(n,e,t,s,i){n.dataUpdateCount++;const r=new V(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=us(t,l=>Y(l));o=Sg(n.serverSyncTree_,r,c,i)}else{const c=Y(t);o=Dl(n.serverSyncTree_,r,c,i)}else if(s){const c=us(t,l=>Y(l));o=Ig(n.serverSyncTree_,r,c)}else{const c=Y(t);o=Bn(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=jt(n,r)),de(n.eventQueue_,a,o)}function Ia(n,e){io(n,"connected",e),e===!1&&t_(n)}function Jg(n,e){se(e,(t,s)=>{io(n,t,s)})}function io(n,e,t){const s=new V("/.info/"+e),i=Y(t);n.infoData_.updateSnapshot(s,i);const r=Bn(n.infoSyncTree_,s,i);de(n.eventQueue_,s,r)}function ti(n){return n.nextWriteId_++}function Xg(n,e,t){const s=Tg(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=Y(i).withIndex(e._queryParams.getIndex());tr(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Bn(n.serverSyncTree_,e._path,r);else{const a=Nn(n.serverSyncTree_,e);o=Dl(n.serverSyncTree_,e._path,r,a)}return de(n.eventQueue_,e._path,o),As(n.serverSyncTree_,e,t,null,!0),r},i=>(en(n,"get for query "+Z(e)+" failed: "+i),Promise.reject(new Error(i))))}function Zg(n,e,t,s,i){en(n,"set",{path:e.toString(),value:t,priority:s});const r=Vn(n),o=Y(t,s),a=Qs(n.serverSyncTree_,e),c=Xr(o,a,r),l=ti(n),d=zr(n.serverSyncTree_,e,c,l,!0);ei(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,p)=>{const m=h==="ok";m||ce("set at "+e+" failed: "+h);const v=ze(n.serverSyncTree_,l,!m);de(n.eventQueue_,e,v),nt(n,i,h,p)});const u=oo(n,e);jt(n,u),de(n.eventQueue_,u,[])}function e_(n,e,t,s){en(n,"update",{path:e.toString(),value:t});let i=!0;const r=Vn(n),o={};if(se(t,(a,c)=>{i=!1,o[a]=Fl(Q(e,a),Y(c),n.serverSyncTree_,r)}),i)ne("update() called with empty data.  Don't do anything."),nt(n,s,"ok",void 0);else{const a=ti(n),c=Eg(n.serverSyncTree_,e,o,a);ei(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{const u=l==="ok";u||ce("update at "+e+" failed: "+l);const h=ze(n.serverSyncTree_,a,!u),p=h.length>0?jt(n,e):e;de(n.eventQueue_,p,h),nt(n,s,l,d)}),se(t,l=>{const d=oo(n,Q(e,l));jt(n,d)}),de(n.eventQueue_,e,[])}}function t_(n){en(n,"onDisconnectEvents");const e=Vn(n),t=Es();Yi(n.onDisconnect_,H(),(i,r)=>{const o=Fl(i,r,n.serverSyncTree_,e);Xt(t,i,o)});let s=[];Yi(t,H(),(i,r)=>{s=s.concat(Bn(n.serverSyncTree_,i,r));const o=oo(n,i);jt(n,o)}),n.onDisconnect_=Es(),de(n.eventQueue_,H(),s)}function n_(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&qi(n.onDisconnect_,e),nt(n,t,s,i)})}function Ca(n,e,t,s){const i=Y(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Xt(n.onDisconnect_,e,i),nt(n,s,r,o)})}function s_(n,e,t,s,i){const r=Y(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Xt(n.onDisconnect_,e,r),nt(n,i,o,a)})}function i_(n,e,t,s){if(ls(t)){ne("onDisconnect().update() called with empty data.  Don't do anything."),nt(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&se(t,(o,a)=>{const c=Y(a);Xt(n.onDisconnect_,Q(e,o),c)}),nt(n,s,i,r)})}function r_(n,e,t){let s;x(e._path)===".info"?s=tr(n.infoSyncTree_,e,t):s=tr(n.serverSyncTree_,e,t),jl(n.eventQueue_,e._path,s)}function sr(n,e,t){let s;x(e._path)===".info"?s=As(n.infoSyncTree_,e,t):s=As(n.serverSyncTree_,e,t),jl(n.eventQueue_,e._path,s)}function o_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Kg)}function en(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ne(t,...e)}function nt(n,e,t,s){e&&Jt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function a_(n,e,t,s,i,r){en(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:jc(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=ro(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Wn("transaction failed: Data returned ",c,o.path),o.status=0;const l=Xs(n.transactionQueueTree_,e),d=kt(l)||[];d.push(o),to(l,d);let u;typeof c=="object"&&c!==null&&we(c,".priority")?(u=mt(c,".priority"),E(so(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(Qs(n.serverSyncTree_,e)||A.EMPTY_NODE).getPriority().val();const h=Vn(n),p=Y(c,u),m=Xr(p,a,h);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=m,o.currentWriteId=ti(n);const v=zr(n.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);de(n.eventQueue_,e,v),ni(n,n.transactionQueueTree_)}}function ro(n,e,t){return Qs(n.serverSyncTree_,e,t)||A.EMPTY_NODE}function ni(n,e=n.transactionQueueTree_){if(e||si(n,e),kt(e)){const t=ql(n,e);E(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&c_(n,Hn(e),t)}else Ul(e)&&Zs(e,t=>{ni(n,t)})}function c_(n,e,t){const s=t.map(l=>l.currentWriteId),i=ro(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const d=t[l];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=ae(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{en(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(ze(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();si(n,Xs(n.transactionQueueTree_,e)),ni(n,n.transactionQueueTree_),de(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)Jt(u[h])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ce("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}jt(n,e)}},o)}function jt(n,e){const t=Kl(n,e),s=Hn(t),i=ql(n,t);return l_(n,i,s),s}function l_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ae(t,c.path);let d=!1,u;if(E(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,i=i.concat(ze(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=qg)d=!0,u="maxretry",i=i.concat(ze(n.serverSyncTree_,c.currentWriteId,!0));else{const h=ro(n,c.path,o);c.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){Wn("transaction failed: Data returned ",p,c.path);let m=Y(p);typeof p=="object"&&p!=null&&we(p,".priority")||(m=m.updatePriority(h.getPriority()));const C=c.currentWriteId,I=Vn(n),g=Xr(m,h,I);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=g,c.currentWriteId=ti(n),o.splice(o.indexOf(C),1),i=i.concat(zr(n.serverSyncTree_,c.path,g,c.currentWriteId,c.applyLocally)),i=i.concat(ze(n.serverSyncTree_,C,!0))}else d=!0,u="nodata",i=i.concat(ze(n.serverSyncTree_,c.currentWriteId,!0))}de(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}si(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Jt(s[a]);ni(n,n.transactionQueueTree_)}function Kl(n,e){let t,s=n.transactionQueueTree_;for(t=x(e);t!==null&&kt(s)===void 0;)s=Xs(s,t),e=G(e),t=x(e);return s}function ql(n,e){const t=[];return Yl(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Yl(n,e,t){const s=kt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Zs(e,i=>{Yl(n,i,t)})}function si(n,e){const t=kt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,to(e,t.length>0?t:void 0)}Zs(e,s=>{si(n,s)})}function oo(n,e){const t=Hn(Kl(n,e)),s=Xs(n.transactionQueueTree_,e);return Lg(s,i=>{Ci(n,i)}),Ci(n,s),Bl(s,i=>{Ci(n,i)}),t}function Ci(n,e){const t=kt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(E(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ze(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?to(e,void 0):t.length=r+1,de(n.eventQueue_,Hn(e),i);for(let o=0;o<s.length;o++)Jt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function d_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ce(`Invalid query segment '${t}' in query '${n}'`)}return e}const ka=function(n,e){const t=h_(n),s=t.namespace;t.domain==="firebase.com"&&Le(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Le("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||yp();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new sl(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new V(t.pathString)}},h_=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(i=u_(n.substring(d,u)));const h=d_(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",f_=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Sa.charAt(t%64),t=Math.floor(t/64);E(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Sa.charAt(e[i]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Z(this.snapshot.exportVal())}}class m_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class g_{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new me;return n_(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ke("OnDisconnect.remove",this._path);const e=new me;return Ca(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ke("OnDisconnect.set",this._path),Ps("OnDisconnect.set",e,this._path,!1);const t=new me;return Ca(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ke("OnDisconnect.setWithPriority",this._path),Ps("OnDisconnect.setWithPriority",e,this._path,!1),Wg("OnDisconnect.setWithPriority",t);const s=new me;return s_(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Ke("OnDisconnect.update",this._path),Wl("OnDisconnect.update",e,this._path);const t=new me;return i_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return $(this._path)?null:Or(this._path)}get ref(){return new ke(this._repo,this._path)}get _queryIdentifier(){const e=ua(this._queryParams),t=Nr(e);return t==="{}"?"default":t}get _queryObject(){return ua(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof ao))return!1;const t=this._repo===e._repo,s=Dr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+nm(this._path)}}class ke extends ao{constructor(e,t){super(e,t,new Fr,!1)}get parent(){const e=hl(this._path);return e===null?null:new ke(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new V(e),s=An(this.ref,e);return new Gt(this._node.getChild(t),s,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Gt(i,An(this.ref,s),q)))}hasChild(e){const t=new V(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function U(n,e){return n=oe(n),n._checkNotDeleted("ref"),e!==void 0?An(n._root,e):n._root}function An(n,e){return n=oe(n),x(n._path)===null?Vg("child","path",e):Vl("child","path",e),new ke(n._repo,Q(n._path,e))}function __(n){return n=oe(n),new g_(n._repo,n._path)}function Jl(n,e){n=oe(n),Ke("push",n._path),Ps("push",e,n._path,!0);const t=zl(n._repo),s=f_(t),i=An(n,s),r=An(n,s);let o;return e!=null?o=tn(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function cn(n){return Ke("remove",n._path),tn(n,null)}function tn(n,e){n=oe(n),Ke("set",n._path),Ps("set",e,n._path,!1);const t=new me;return Zg(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function bt(n,e){Wl("update",e,n._path);const t=new me;return e_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function co(n){n=oe(n);const e=new Ql(()=>{}),t=new ii(e);return Xg(n._repo,n,t).then(s=>new Gt(s,new ke(n._repo,n._path),n._queryParams.getIndex()))}class ii{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new p_("value",this,new Gt(e.snapshotNode,new ke(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new m_(this,e,t):null}matches(e){return e instanceof ii?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function v_(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(d,u)=>{sr(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new Ql(t,r||void 0),a=new ii(o);return r_(n._repo,n,a),()=>sr(n._repo,n,a)}function jn(n,e,t,s){return v_(n,"value",e,t,s)}function lo(n,e,t){sr(n._repo,n,null)}pg(ke);yg(ke);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="FIREBASE_DATABASE_EMULATOR_HOST",ir={};let w_=!1;function b_(n,e,t,s){n.repoInfo_=new sl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function E_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Le("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ne("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ka(r,i),a=o.repoInfo,c;typeof process<"u"&&zo&&(c=zo[y_]),c?(r=`http://${c}?ns=${a.namespace}`,o=ka(r,i),a=o.repoInfo):o.repoInfo.secure;const l=new Ap(n.name,n.options,e);jg("Invalid Firebase Database URL",o),$(o.path)||Le("Database URL must point to the root of a Firebase Database (not including a child path).");const d=C_(a,n,l,new Np(n.name,t));return new k_(d,n)}function I_(n,e){const t=ir[e];(!t||t[n.key]!==n)&&Le(`Database ${e}(${n.repoInfo_}) has already been deleted.`),o_(n),delete t[n.key]}function C_(n,e,t,s){let i=ir[e.name];i||(i={},ir[e.name]=i);let r=i[n.toURLString()];return r&&Le("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Yg(n,w_,t,s),i[n.toURLString()]=r,r}class k_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Qg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ke(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(I_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Le("Cannot call "+e+" on a deleted database.")}}function S_(n=ac(),e){const t=vr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Wu("database");s&&T_(t,...s)}return t}function T_(n,e,t,s={}){n=oe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Le("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Le('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ts(ts.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Vu(s.mockUserToken,n.app.options.projectId);r=new ts(o)}b_(i,e,t,r)}/**
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
 */function R_(n){pp(Yt),Ft(new gt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return E_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Qe(Ko,qo,n),Qe(Ko,qo,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function ye(n,e,t){var s;if(n=oe(n),Ke("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new me,o=(c,l,d)=>{let u=null;c?r.reject(c):(u=new Gt(d,new ke(n._repo,n._path),q),r.resolve(new N_(l,u)))},a=jn(n,()=>{});return a_(n._repo,n._path,e,o,a,i),r.promise}Pe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Pe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};R_();const ln={apiKey:"AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",authDomain:"market-6e66a.firebaseapp.com",databaseURL:"https://market-6e66a-default-rtdb.firebaseio.com",projectId:"market-6e66a",storageBucket:"market-6e66a.firebasestorage.app",messagingSenderId:"402312269082",appId:"1:402312269082:web:cf304afc54057ea162b0a3"},Xl=!!ln.apiKey&&!ln.apiKey.startsWith("여기에")&&!!ln.databaseURL&&!ln.databaseURL.startsWith("여기에");let ki=null,uo=null,L=null;try{Xl&&(ki=oc(ln),uo=hp(ki),L=S_(ki))}catch(n){console.error("[firebase] 초기화 실패:",n)}const Lt=1e7,$e=10,rr=4e3,A_=.008,Ta=3e4,P_=4e-5,Ra=.015,M_=.55,Zl=15e-5,O_=.0018,D_=3*60*1e3,x_=["달빛전자","구름소프트","번개모빌리티","바다식품","별빛바이오","한입게임즈","초록에너지","솜사탕유통","무지개항공","도토리금융","은하반도체","포근화학","두근로보틱스","새벽엔터","고래물산","민들레제약"],L_=["떡상테크","유니콘소프트","미래모빌","첫걸음바이오","샛별에너지","루키게임즈","신화엔터","퀀텀반도체"],Na=["개미부대","왕개미","큰손","수상한세력","외국인","기관","전설의단타","스캘퍼","장기투자자","물타기달인"];function ut(n,e){return Math.floor(Math.random()*(e-n+1))+n}function K(n,e){return Math.random()*(e-n)+n}function pe(n,e,t){return Math.max(e,Math.min(t,n))}function $_(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function F_(n,e,t={}){const s=t.type||"stock",i=t.role||null;e=Ee(Math.max($e,e));let r=1,o=1;return s==="stock"?i==="leader"?(r=K(.8,1.4),o=K(2,3)):i==="sub"?(r=K(.9,1.6),o=K(1.2,2.2)):i==="related"?(r=K(.7,2),o=K(.6,1.8)):(r=K(.5,2.4),o=K(.3,1.2)):s==="preferred"?(r=K(.4,.8),o=K(.5,1.1)):s==="etf"?(r=K(.5,.8),o=K(1.5,2.5)):s==="reit"?(r=K(.35,.7),o=K(.6,1.2)):s==="bond"?(r=K(.2,.45),o=K(.8,1.4)):s==="spac"?(r=K(.2,.5),o=K(.4,.9)):s==="commodity"?(r=K(.9,1.8),o=K(1,2)):(s==="inverse"||s==="leverage")&&(r=1,o=K(1.5,2.5)),{name:n,type:s,role:i||"",sector:t.sector||"",link:t.link||"",price:e,previousPrice:e,basePrice:e,open:e,high:e,low:e,changeRate:0,volume:0,value:0,pressure:0,trend:0,volat:+r.toFixed(2),activ:+o.toFixed(2),heat:0,news:""}}function ri(n){return{preferred:"우선주",etf:"ETF",reit:"리츠",spac:"SPAC",inverse:"인버스",leverage:"레버리지",bond:"채권ETF",commodity:"원자재"}[n]||""}function eu(n){return{leader:"대장주",sub:"부대장주",related:"관련주",normal:"일반주"}[n]||""}function Si(n){return!n||n==="stock"}function oi(n){return Math.round(n*1.3)}function ai(n){return Math.max($e,Math.round(n*.7))}function tu(n){return n<2e3?1:n<5e3?5:n<2e4?10:n<5e4?50:n<2e5?100:500}function Ee(n){const e=tu(n);return Math.round(n/e)*e}function Ti(n){return pe((n.pressure||0)*P_/(n.activ||1),-Ra,Ra)}async function U_(n,e){const t=e.stocks||{},s=Object.keys(t);if(s.length===0)return;let i=null,r=0,o="";const a=Date.now(),c={},l=[];function d(I){const g=(I.activ||1)*(1+(I.heat||0));let w=0,S=0;const b=pe(.35+g*.2,.25,.97);if(Math.random()<b){const k=ut(1,Math.max(2,Math.round(1+g*3)));for(let P=0;P<k;P++){const _=ut(10,Math.round(60+g*220)),y=.5+pe((I.trend||0)*15,-.3,.3),R=Math.random()<y;w+=R?_:-_,S+=_,l.push({nickname:Na[ut(0,Na.length-1)],type:R?"buy":"sell",stockName:I.name,qty:_,price:I.price,time:a})}}return S+=Math.round(ut(300,2500)*g),{botNet:w,botVolume:S}}function u(I,g,w,S,b={}){const k=g.basePrice||g.price,P=k?(g.price-k)/k:0;w+=pe(-P*.01,-.006,.006);let _=Ee(g.price*(1+w));_=pe(_,ai(k),oi(k)),_=Math.max($e,_);const y=`stocks/${I}/`;if(c[y+"previousPrice"]=g.price,c[y+"price"]=_,c[y+"changeRate"]=+((_-k)/k*100).toFixed(2),c[y+"volume"]=(g.volume||0)+S,c[y+"value"]=(g.value||0)+S*_,_>(g.high||g.price)&&(c[y+"high"]=_),_<(g.low||g.price)&&(c[y+"low"]=_),(g.pressure||0)!==0){const R=(g.pressure||0)*M_;c[y+"pressure"]=Math.abs(R)<1?0:+R.toFixed(2)}return b.trend!=null&&(c[y+"trend"]=+b.trend.toFixed(5)),b.heat!=null&&(b.heat>.001||(g.heat||0)>.001)&&(c[y+"heat"]=+b.heat.toFixed(3)),b.news!=null&&(c[y+"news"]=b.news),_/g.price-1}function h(I){const g=I.volat||1;let w=(I.heat||0)*.92;Math.random()<.006&&(w=pe(w+K(.3,1),0,1.6));const S=g*(1+w*.5),b=pe((I.trend||0)*.96+(Math.random()-.5)*8e-4*S,-.0025*(1+w*.5),.0025*(1+w*.5));let k=(Math.random()-.5)*.0016*S+b;return Math.random()<.005&&(k+=(Math.random()-.5)*.012*(1+w*.4)),{own:k,trend:b,heat:w}}const p={},m={},v=[];for(const I of s){const g=t[I];if(!Si(g.type)||g.role!=="leader")continue;const{own:w,trend:S,heat:b}=h(g),{botNet:k,botVolume:P}=d({...g,heat:b});let _=w+Ti(g)+pe(k*2e-4,-.008,.008);I===i&&(_+=r);const y=u(I,g,_,P,{trend:S,heat:b,news:I===i?o:null});p[I]=y,m[g.sector]=y,v.push(y)}for(const I of s){const g=t[I];if(!Si(g.type)||g.role==="leader")continue;const w=g.role==="related"?.7:g.role==="sub"?.45:.2,S=m[g.sector]||0,{own:b,trend:k,heat:P}=h(g),{botNet:_,botVolume:y}=d({...g,heat:P});let R=S*w+b*(1-w*.5);R+=Ti(g)+pe(_*2e-4,-.008,.008),I===i&&(R+=r);const N=u(I,g,R,y,{trend:k,heat:P,news:I===i?o:null});p[I]=N,v.push(N)}const C=v.length?v.reduce((I,g)=>I+g,0)/v.length:0;for(const I of s){const g=t[I];if(Si(g.type))continue;const{botNet:w,botVolume:S}=d(g),b=Math.random()-.5;let k=0;switch(g.type){case"etf":k=C+b*.0015;break;case"inverse":k=-C+b*.0015;break;case"leverage":k=2*C+b*.002;break;case"bond":k=-.25*C+2e-4+b*.0012;break;case"reit":k=.2*C+2e-4+b*.004*(g.volat||1);break;case"commodity":k=b*.011*(g.volat||1)+(Math.random()<.01?(Math.random()-.5)*.05:0);break;case"preferred":k=(m[g.sector]||p[g.link]||0)*.85+b*.002;break;case"spac":k=b*.003+(Math.random()<.008?(Math.random()<.7?1:-1)*K(.06,.2):0);break;default:k=b*.005}k+=Ti(g)+pe(w*3e-4,-.01,.01),u(I,g,k,S,{})}c.marketTick=a,$_(l),c.botFeed=l.slice(0,4),await bt(U(L,`rooms/${n}`),c)}function Ri(n){return Math.round(n||0).toLocaleString("ko-KR")}async function B_(n,e){const t=Date.now(),s=e.stocks||{},i=e.ipo;if(i&&i.status==="subscribing"){if(t<i.endsAt)return;const h=i.applies||{},p=Object.values(h).reduce((S,b)=>S+(b||0),0),m=(i.botDemand||0)+p,v=Math.max(1,m/i.totalShares),C=pe(.92+(v-1)*.1+K(-.1,.15),.9,2.3),I=Math.max($e,Ee(i.offerPrice*C)),g=F_(i.name,I,{type:"stock",role:"normal",sector:"신규상장"});g.ipo=!0;const w=((I-i.offerPrice)/i.offerPrice*100).toFixed(1);await bt(U(L,`rooms/${n}`),{[`stocks/${i.stockId}`]:g,ipo:null,latestNews:{text:`🎉 ${i.name} 상장! 공모가 ${Ri(i.offerPrice)} → 시초가 ${Ri(I)} (${w>=0?"+":""}${w}%) · 경쟁률 ${v.toFixed(1)}:1`,time:t}});for(const[S,b]of Object.entries(h)){const k=b||0,P=Math.floor(k/v),_=i.offerPrice*(k-P);await ye(U(L,`rooms/${n}/players/${S}`),y=>y&&(_>0&&(y.cash=(y.cash||0)+_),P>0&&(y.holdings=y.holdings||{},y.holdings[i.stockId]=(y.holdings[i.stockId]||0)+P),y))}return}if(i||Object.keys(s).length>=90||Math.random()>=A_)return;const r=Object.values(s).map(h=>h.name),o=[...x_,...L_].filter(h=>!r.includes(h));if(!o.length)return;const a=o[ut(0,o.length-1)],c=Ee(ut(5e3,6e4)),l=ut(5e4,2e5),d=Math.floor(l*K(.4,9)),u="ipo"+t.toString(36);await bt(U(L,`rooms/${n}`),{ipo:{stockId:u,name:a,offerPrice:c,totalShares:l,botDemand:d,status:"subscribing",startedAt:t,endsAt:t+Ta},latestNews:{text:`공모주 청약 시작! '${a}' 공모가 ${Ri(c)}원 · ${Math.round(Ta/1e3)}초 후 마감`,time:t}})}async function H_(n,e,t,s){const i=s.ipo;if(!i||i.status!=="subscribing")throw new Error("청약 가능한 공모주가 없습니다.");if(Date.now()>=i.endsAt)throw new Error("청약이 마감되었습니다.");if(t=Math.floor(t),!t||t<1)throw new Error("청약 수량을 확인하세요.");const r=i.offerPrice*t;if(!(await ye(U(L,`rooms/${n}/players/${e}/cash`),a=>{if(a==null)return a;if(!(a<r))return a-r})).committed)throw new Error("청약 증거금(현금)이 부족합니다.");await ye(U(L,`rooms/${n}/ipo/applies/${e}`),a=>(a||0)+t)}function W_(n){if(!n)return 0;const e=Object.values(n.applies||{}).reduce((t,s)=>t+(s||0),0);return((n.botDemand||0)+e)/n.totalShares}async function Ms(n,e,t,s,i,r,o,a){var v;const c=(v=a.stocks)==null?void 0:v[s];if(!c)throw new Error("종목을 선택하세요.");const l=i.side;if(l!=="buy"&&l!=="sell")throw new Error("주문 유형 오류");const d=i.trigger==="above"?"above":"below",u=["gtc","day","ioc"].includes(i.tif)?i.tif:"gtc";if(r=Math.floor(r),!r||r<1)throw new Error("수량을 확인하세요.");if(o=Ee(Number(o)),!o||o<$e)throw new Error("주문 가격을 확인하세요.");const h=Date.now(),p={uid:e,nickname:t,stockId:s,stockName:c.name,side:l,trigger:d,tif:u,label:i.label||"지정가",qty:r,target:o,createdAt:h,expiresAt:u==="day"?h+D_:null},m=Jl(U(L,`rooms/${n}/orders`)).key;return await tn(U(L,`rooms/${n}/orders/${m}`),p),m}async function V_(n,e){await cn(U(L,`rooms/${n}/orders/${e}`))}async function j_(n,e){var i;const t=e.orders;if(!t)return;const s=Date.now();for(const[r,o]of Object.entries(t)){const a=(i=e.stocks)==null?void 0:i[o.stockId];if(!a){await cn(U(L,`rooms/${n}/orders/${r}`));continue}const c=a.price;if((o.trigger||(o.side==="buy"?"below":"above"))==="below"?c<=o.target:c>=o.target){try{o.side==="buy"?await nu(n,o.uid,o.nickname,o.stockId,o.qty,e):await ho(n,o.uid,o.nickname,o.stockId,o.qty,e)}catch(u){console.warn("[order] 예약 체결 실패, 취소:",o,u==null?void 0:u.message)}await cn(U(L,`rooms/${n}/orders/${r}`));continue}o.tif==="ioc"?await cn(U(L,`rooms/${n}/orders/${r}`)):o.expiresAt&&s>o.expiresAt&&await cn(U(L,`rooms/${n}/orders/${r}`))}}function G_(n,e){const t=n.orders||{};return Object.entries(t).filter(([,s])=>s.uid===e).map(([s,i])=>({id:s,...i})).sort((s,i)=>(i.createdAt||0)-(s.createdAt||0))}async function nu(n,e,t,s,i,r){var d;const o=(d=r.stocks)==null?void 0:d[s];if(!o)throw new Error("종목을 선택하세요.");if(i=Math.floor(i),!i||i<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.ceil(a*i*(1+Zl));if(!(await ye(U(L,`rooms/${n}/players/${e}`),u=>{if(!u)return u;if((u.cash||0)<c)return;u.cash=(u.cash||0)-c,u.holdings=u.holdings||{};const h=u.holdings[s]||0;u.avgCost=u.avgCost||{};const p=u.avgCost[s]||0;return u.avgCost[s]=Math.round((h*p+i*a)/(h+i)),u.holdings[s]=h+i,u})).committed)throw new Error("현금(수수료 포함)이 부족합니다.");await su(n,s,i,+i,{type:"buy",nickname:t,stockName:o.name,qty:i,price:a,time:Date.now()})}async function ho(n,e,t,s,i,r){var d;const o=(d=r.stocks)==null?void 0:d[s];if(!o)throw new Error("종목을 선택하세요.");if(i=Math.floor(i),!i||i<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.floor(a*i*(1-Zl-O_));if(!(await ye(U(L,`rooms/${n}/players/${e}`),u=>{var p;if(!u)return u;const h=((p=u.holdings)==null?void 0:p[s])||0;if(!(h<i))return u.cash=(u.cash||0)+c,u.holdings[s]=h-i,u.holdings[s]===0&&(delete u.holdings[s],u.avgCost&&delete u.avgCost[s]),u})).committed)throw new Error("보유 수량이 부족합니다.");await su(n,s,i,-i,{type:"sell",nickname:t,stockName:o.name,qty:i,price:a,time:Date.now()})}async function z_(n,e,t,s,i){var o,a,c;const r=((c=(a=(o=i.players)==null?void 0:o[e])==null?void 0:a.holdings)==null?void 0:c[s])||0;if(r<1)throw new Error("보유 수량이 없습니다.");return ho(n,e,t,s,r,i)}async function su(n,e,t,s,i){await Promise.all([ye(U(L,`rooms/${n}/stocks/${e}/volume`),r=>(r||0)+t),ye(U(L,`rooms/${n}/stocks/${e}/value`),r=>(r||0)+t*i.price),ye(U(L,`rooms/${n}/stocks/${e}/pressure`),r=>(r||0)+s),Jl(U(L,`rooms/${n}/logs`),i)])}function fo(n,e){var i;let t=(n==null?void 0:n.cash)||0;const s=(n==null?void 0:n.holdings)||{};for(const[r,o]of Object.entries(s)){const a=((i=e==null?void 0:e[r])==null?void 0:i.price)||0;t+=a*o}return t}function iu(n,e){return Object.entries(n||{}).map(([t,s])=>({uid:t,nickname:s.nickname&&String(s.nickname).trim()||"플레이어-"+String(t).slice(-4),connected:s.connected!==!1,total:fo(s,e)})).sort((t,s)=>s.total-t.total)}const K_=1,Os=[{key:"candles1m",win:6e4,cap:240},{key:"candles5m",win:3e5,cap:288},{key:"candles15m",win:9e5,cap:192},{key:"candles1h",win:36e5,cap:168}],ru=2*6e4,q_=6e4,Y_=4500;function or(n,e){return Math.floor(n/e)*e}function ns(n,e,t){return Math.max(e,Math.min(t,n))}function Aa(){let n=0,e=0;for(;n===0;)n=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e)}function Pa(n,e){const t=n&&n[e]||null;return t?Object.values(t).filter(s=>s&&typeof s.t=="number").sort((s,i)=>s.t-i.t):[]}function Q_(n,e,t,s){const i=(t-e)/s,r=Math.max(1,i/4e3),o=n.volat||1,a=n.activ||1,c=n.basePrice||n.price||$e;let l=n.price||c,d=n.trend||0,u=n.heat||0;const h=!n.type||n.type==="stock",p=.0011*o*(h?1:.7),m=5,v=[];for(let C=0;C<s;C++){const I=e+i*C,g=l,w=r/m;let S=g,b=g,k=g;for(let N=0;N<m;N++){d=ns(d*Math.pow(.99,w)+Aa()*18e-5*o*Math.sqrt(w),-.0016,.0016),Math.random()<.005*w&&(u=ns(u+(.3+Math.random()*.7),0,1.6)),u*=Math.pow(.94,w);const X=p*(1+u*.5);let D=d*w+Aa()*X*Math.sqrt(w);Math.random()<.0025*w&&(D+=(Math.random()<.5?1:-1)*(.006+Math.random()*.018)*(h?1:.6)),k=k*(1+D),k=c+(k-c)*Math.exp(-.01*w),k=ns(k,ai(c),oi(c)),k=Math.max($e,k),S=Math.max(S,k),b=Math.min(b,k)}const P=Ee(k),_=g?Math.abs((P-g)/g):0,y=(400+Math.random()*1800)*a*(1+u*.8),R=Math.round(y*r*(1+_*8));v.push({t:I,o:Ee(g),h:Ee(S),l:Ee(b),c:P,v:R}),l=P}return{candles:v,finalPrice:l,finalBase:c}}function J_(n){const e={};for(const t of Os)e[t.key]={};for(const t of n)for(const s of Os){const i=or(t.t,s.win),r=e[s.key],o=r[i];o?(o.h=Math.max(o.h,t.h),o.l=Math.min(o.l,t.l),o.c=t.c,o.v+=t.v):r[i]={t:i,o:t.o,h:t.h,l:t.l,c:t.c,v:t.v}}return e}async function X_(n,e){const t=Date.now();return(await ye(U(L,`rooms/${n}/market/catchupLock`),i=>{if(!(i&&i.expiresAt&&i.expiresAt>t))return{by:e||"anon",at:t,expiresAt:t+q_}})).committed}async function Z_(n){try{await bt(U(L,`rooms/${n}/market`),{catchupLock:null})}catch{}}function ev(n){if(!n||n.status!=="playing")return!1;const e=n.market&&n.market.lastTickAt||n.marketTick||0;return e?Date.now()-e>=ru:!1}async function tv(n,e,t,s={}){if(!e||!e.stocks)return{applied:!1,reason:"no-stocks"};if(e.status!=="playing")return{applied:!1,reason:"not-playing"};const i=Date.now(),r=e.market&&e.market.lastTickAt||e.marketTick||0,o=i-r;if(!s.force&&o<ru)return{applied:!1,reason:"fresh",elapsed:o};if(!await X_(n,t)&&!s.force)return{applied:!1,reason:"locked"};try{let c=e.stocks||{};try{const v=await co(U(L,`rooms/${n}/stocks`));v.exists()&&(c=v.val())}catch{}const l=Object.keys(c);if(!l.length)return{applied:!1,reason:"no-stocks"};const d=ns(Math.round(Y_/l.length),30,480),u=Math.max(1,Math.round(o/6e4)),h=Math.min(d,u,480),p={};let m=0;for(const v of l){const C=c[v];if(!C||typeof C.price!="number")continue;const I=Q_(C,r,i,h),g=J_(I.candles),w=`stocks/${v}/`,S=C.history||{};for(const _ of Os){const R={...S[_.key]||{}};for(const[D,J]of Object.entries(g[_.key])){const ie=R[D];R[D]=ie?{t:J.t,o:ie.o,h:Math.max(ie.h,J.h),l:Math.min(ie.l,J.l),c:J.c,v:(ie.v||0)+J.v}:J}const N=Object.keys(R).map(Number).sort((D,J)=>D-J),X=N.length-_.cap;if(X>0)for(let D=0;D<X;D++)p[w+`history/${_.key}/${N[D]}`]=null;for(const[D,J]of Object.entries(g[_.key]))Number(D)<N[Math.max(0,X)]||(p[w+`history/${_.key}/${D}`]=R[D],m++)}const b=I.finalBase,k=Math.max($e,Ee(I.finalPrice)),P=I.candles.reduce((_,y)=>_+(y.v||0),0);p[w+"previousPrice"]=C.price,p[w+"price"]=k,p[w+"currentPrice"]=k,p[w+"changeRate"]=+((k-b)/b*100).toFixed(2),p[w+"volume"]=(C.volume||0)+P,p[w+"value"]=(C.value||0)+P*k,k>(C.high||C.price)&&(p[w+"high"]=k),k<(C.low||C.price)&&(p[w+"low"]=k),C.heat&&(p[w+"heat"]=0),C.pressure&&(p[w+"pressure"]=0)}return p["market/tickMs"]=4e3,p["market/lastTickAt"]=i,p["market/lastHistoryAt"]=i,p["market/lastCatchupAt"]=i,p["market/catchupVersion"]=K_,p["market/catchupBy"]=t||"anon",p["market/catchupLock"]=null,p.marketTick=i,await bt(U(L,`rooms/${n}`),p),{applied:!0,elapsed:o,numSteps:h,candlesWritten:m,stocks:l.length}}catch(c){return await Z_(n),console.error("[catchup] 실패:",c),{applied:!1,reason:"error",error:c==null?void 0:c.message}}}function nv(){return{cur:{},lastBucket:0,seeded:!1}}async function sv(n,e,t){const s=e.stocks||{},i=Date.now(),r=or(i,6e4);t.lastBucket||(t.lastBucket=r);for(const[d,u]of Object.entries(s)){if(!u||typeof u.price!="number")continue;let h=t.cur[d];(!h||h.t!==r)&&(h={t:r,o:u.price,h:u.price,l:u.price,c:u.price,v:0,_lastVol:u.volume||0},t.cur[d]=h),h.c=u.price,h.h=Math.max(h.h,u.price),h.l=Math.min(h.l,u.price);const p=Math.max(0,(u.volume||0)-(h._lastVol||0));h.v+=p,h._lastVol=u.volume||0}if(r===t.lastBucket)return;const o=t.lastBucket;let a=s;try{const d=await co(U(L,`rooms/${n}/stocks`));d.exists()&&(a=d.val())}catch{}const c={};let l=!1;for(const d of Object.keys(s)){const u=t.cur[d];if(!u)continue;const h={o:u.o,h:u.h,l:u.l,c:u.c,v:u.v},p=`stocks/${d}/`,m=a[d]&&a[d].history||{};for(const v of Os){const C=or(o,v.win),I=m[v.key]&&m[v.key][C]||null,g=I?{t:C,o:I.o,h:Math.max(I.h,h.h),l:Math.min(I.l,h.l),c:h.c,v:(I.v||0)+h.v}:{t:C,o:h.o,h:h.h,l:h.l,c:h.c,v:h.v};c[p+`history/${v.key}/${C}`]=g;const w=m[v.key]?Object.keys(m[v.key]).map(Number).sort((S,b)=>S-b):[];w.length>v.cap&&w[0]!==C&&(c[p+`history/${v.key}/${w[0]}`]=null)}l=!0}if(t.lastBucket=r,!!l){c["market/lastTickAt"]=i,c["market/lastHistoryAt"]=i,c["market/tickMs"]=4e3;try{await bt(U(L,`rooms/${n}`),c)}catch(d){console.warn("[history] 라이브 캔들 저장 실패:",d==null?void 0:d.message)}}}function ou(n,e){if(n&&String(n).startsWith("ipo"))return'<span class="tag tag-new">NEW</span>';const t=ri(e.type);return t?`<span class="tag ${e.type==="inverse"?"tag-inv":e.type==="leverage"?"tag-lev":"tag-etf"}">${t}</span>`:e.role==="leader"?'<span class="tag tag-leader">대장주</span>':e.role==="sub"?'<span class="tag tag-sub">부대장</span>':""}function T(n){return document.getElementById(n)}function _n(n){return Math.round(n??0).toLocaleString("ko-KR")+"원"}function O(n){return Math.round(n??0).toLocaleString("ko-KR")}function Et(n){return n=n||0,n>=1e12?(n/1e12).toFixed(2)+"조":n>=1e8?(n/1e8).toFixed(1)+"억":n>=1e4?Math.round(n/1e4).toLocaleString("ko-KR")+"만":O(n)}function iv(n){return O(n)+"주"}const rv=["screen-auth","screen-wait","screen-game","screen-result"];function po(n){rv.forEach(e=>{const t=T(e);t&&t.classList.toggle("hidden",e!==n)})}function ov(n,e,t=!0){const s=T(n);s&&(s.textContent="",s.classList.toggle("error",t))}function au(n){T("fbError").classList.remove("hidden"),n&&(T("fbErrorMsg").textContent=n)}const av=3,cv=120,Ma=60;let Se={},vn=[],Be={},Nt=0,Pn=null,ar={};function cu(){Se={},vn=[],Be={},Nt=0,Pn=null,ar={},$s="";for(const n in Ls)delete Ls[n]}function lv(){if(Pn)try{localStorage.setItem(Pn,JSON.stringify({candles:Se,lastVol:Be,tick:Nt}))}catch{}}function uv(n,e){const t=n.stocks||{},s=n.marketTick||0,i=`mb_candles_${e||"x"}_${n.startedAt||0}`;if(i!==Pn){Pn=i,Se={},Be={},Nt=0;try{const r=JSON.parse(localStorage.getItem(i)||"null");r&&r.candles&&(Se=r.candles,Be=r.lastVol||{},Nt=r.tick||0)}catch{}}for(const[r,o]of Object.entries(t))Se[r]||(Se[r]=[{t:Date.now(),o:o.price,h:o.price,l:o.price,c:o.price,v:0,_n:0}]),Be[r]==null&&(Be[r]=o.volume||0);if(s!==Nt){Nt=s;for(const[o,a]of Object.entries(t)){const c=Se[o]||(Se[o]=[]);let l=c[c.length-1];(!l||l._n>=av)&&(l={t:Date.now(),o:a.price,h:a.price,l:a.price,c:a.price,v:0,_n:0},c.push(l)),l.c=a.price,l.h=Math.max(l.h,a.price),l.l=Math.min(l.l,a.price);const d=Math.max(0,(a.volume||0)-(Be[o]||0));l.v+=d,Be[o]=a.volume||0,l._n++,c.length>cv&&c.shift()}const r=n.botFeed?Object.values(n.botFeed):[];for(const o of r)vn.unshift({...o,bot:!0});vn.length>Ma&&(vn.length=Ma),pv(t),Hv(t),lv()}}let At=new Set(JSON.parse(localStorage.getItem("mb_watch")||"[]")),ft=JSON.parse(localStorage.getItem("mb_alerts")||"{}");function dv(n){At.has(n)?At.delete(n):At.add(n),localStorage.setItem("mb_watch",JSON.stringify([...At]))}function hv(n,e){e>0?ft[n]=e:delete ft[n],localStorage.setItem("mb_alerts",JSON.stringify(ft))}function fv(n){return ft[n]||0}function pv(n){for(const e of Object.values(n)){const t=ft[e.name],s=ar[e.name];if(t&&s!=null){const i=s<t&&e.price>=t,r=s>t&&e.price<=t;if(i||r){B(`🔔 ${e.name} 알림가 ${O(t)}원 ${i?"돌파":"하향"}!`,i?"up":"down"),delete ft[e.name],localStorage.setItem("mb_alerts",JSON.stringify(ft));try{window.Notification&&Notification.permission==="granted"&&new Notification("STONK Battle",{body:`${e.name} ${O(t)}원 도달`})}catch{}}}ar[e.name]=e.price}}function mv(n){const{roomCode:e,roomData:t,uid:s,selectedStockId:i}=n,r=T("gameRoomCode");r&&(r.textContent=e),uv(t,e),gv(t,s),Dv(t,s),xv(t,s),$v(t),vv(t,s),lu(n),Lv(t);const o=Ev();o==="home"?(jv(t),kv(t)):o==="detail"?(Sv(t,i),Ov(t,i),_v(t,s)):o==="feed"?zv(t):o==="screener"?Kv(t):o==="account"&&qv(t,s)}function gv(n,e){var o;const t=(o=n.players)==null?void 0:o[e],s=t&&t.nickname||"나",i=T("navNick");i&&(i.textContent=s);const r=T("navAvatar");r&&(r.textContent=s.slice(0,1).toUpperCase())}function lu(n){const e=n.roomData,t=T("marketStatusChip"),s=T("msDot"),i=T("msLabel"),r=T("marketStatusPanel");if(!e||!t||!s||!i||!r)return;const o=e.market||{},a=o.lastTickAt||e.marketTick||0,c=o.lastCatchupAt||0,l=a?Math.max(0,Math.round((Date.now()-a)/6e4)):null,d=e.hostId===n.uid;let u=0,h=0,p=0,m=0;for(const w of Object.values(e.stocks||{})){const S=w.history;S&&(S.candles1m&&(u+=Object.keys(S.candles1m).length),S.candles5m&&(h+=Object.keys(S.candles5m).length),S.candles15m&&(p+=Object.keys(S.candles15m).length),S.candles1h&&(m+=Object.keys(S.candles1h).length))}const v=u+h+p+m>0,C=l!=null&&l<2;if(s.className="status-dot "+(C?"ok":l==null?"muted":"warn"),i.textContent=C?"시장 최신":l==null?"대기":`${l}분 전`,r.classList.contains("hidden"))return;const I=w=>w?`${pt(new Date(w).getHours())}:${pt(new Date(w).getMinutes())}`:"-",g=(w,S,b)=>`<div class="ms-row"><span>${w}</span><b class="${b||""}">${S}</b></div>`;r.innerHTML=g("방 코드",W(n.roomCode||"-"))+g("연결","연결됨","up")+g("권한",d?"보정 주체 (방장)":"읽기 전용",d?"":"muted")+g("마지막 tick",I(a))+g("마지막 보정",c?I(c):"없음")+g("시장",C?"최신 상태":l==null?"tick 기록 없음":`${l}분 전 데이터 · ${d?"재접속 시 자동 보정":"방장/관리자가 보정"}`,C?"up":"down")+g("캔들",v?`1m ${u} · 5m ${h} · 15m ${p} · 1h ${m}`:"아직 없음")}function _v(n,e){const t=T("orderList");if(!t)return;const s=G_(n,e);if(!s.length){t.innerHTML="";return}t.innerHTML=s.map(i=>{const r=i.side==="buy"?"up":"down",o=i.tif==="day"?" · 당일":i.tif==="ioc"?" · IOC":"",a=i.label||(i.side==="buy"?"매수":"매도");return`<li class="order-item">
        <span class="order-badge ${r}">${W(a)}</span>
        <span class="order-name">${W(i.stockName)}</span>
        <span class="order-detail">${O(i.target)}원 · ${O(i.qty)}주${o}</span>
        <button class="order-cancel" data-cancel="${i.id}" title="취소">✕</button>
      </li>`}).join("")}let Ds=0;function vv(n,e){var r;const t=T("ipoPanel");if(!t)return;const s=n.ipo;if(!s||s.status!=="subscribing"){t.classList.add("hidden"),Ds=0;return}Ds=s.endsAt,t.classList.remove("hidden"),T("ipoName").textContent=s.name,T("ipoPrice").textContent=O(s.offerPrice)+"원",T("ipoShares").textContent=O(s.totalShares)+"주",T("ipoRatio").textContent=W_(s).toFixed(1)+" : 1";const i=((r=s.applies)==null?void 0:r[e])||0;T("ipoMyApply").textContent=i?`내 청약 ${O(i)}주 (증거금 ${Et(i*s.offerPrice)}원)`:"아직 청약하지 않았어요",uu()}function uu(n){const e=T("ipoCountdown");if(!e||!Ds)return;const t=Math.max(0,Math.ceil((Ds-Date.now())/1e3));e.textContent=t+"초",e.classList.toggle("urgent",t<=5)}function it(n){return n>0?"up":n<0?"down":"flat"}function Gn(n){return n>0?"▲":n<0?"▼":"−"}let xs="";function Ni(n){xs=(n||"").trim().toLowerCase()}let du="all",hu="value",cr="rising",ss="asset";function yv(n){du=n||"all"}function Oa(n){hu=n||"value"}function wv(n){cr=n||"rising"}function bv(n){ss=n||"asset"}function Ev(){var n;return((n=document.getElementById("screen-game"))==null?void 0:n.dataset.tab)||"home"}function Iv(n,e){return xs?[e.name,n,e.ticker,e.sector,e.type,e.role,ri(e.type),eu(e.role),String(n).startsWith("ipo")?"신규상장 new":""].join(" ").toLowerCase().includes(xs):!0}function Cv(n){let e=0;const t=String(n);for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return 5e6+e%60*8e6}function fu(n){let e=0;const t=String(n||"");for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return`hsl(${e%360} 60% 47%)`}function pu(n,e){const t={value:(s,i)=>(i[1].value||0)-(s[1].value||0),volume:(s,i)=>(i[1].volume||0)-(s[1].volume||0),up:(s,i)=>(i[1].changeRate||0)-(s[1].changeRate||0),down:(s,i)=>(s[1].changeRate||0)-(i[1].changeRate||0)};return n.sort(t[e]||t.value)}function mu(n,e,t){const s=t.changeRate>0?"+":"",i=it(t.changeRate),r=At.has(t.name),o=t.price*Cv(e),a=t.sector||ri(t.type)||"종목";return`<li class="rank-item" data-id="${e}">
    <span class="rk-rank"><button class="star-btn ${r?"on":""}" data-star="${W(t.name)}" title="관심">${r?"★":"☆"}</button>${n}</span>
    <span class="rk-name"><span class="stk-ico" style="background:${fu(t.name)}">${W((t.name||"?").slice(0,1))}</span><span class="stk-meta"><span class="stk-nm">${W(t.name)} ${ou(e,t)}</span><span class="stk-sub">${W(a)}</span></span></span>
    <span class="rk-price ${i}">${O(t.price)}</span>
    <span class="rk-rate ${i}">${Gn(t.changeRate)} ${s}${(t.changeRate??0).toFixed(2)}%</span>
    <span class="rk-value">${Et(t.value)}</span>
    <span class="rk-cap">${Et(o)}</span>
    <span class="rk-sector"><span class="sec-pill">${W(t.sector||"-")}</span></span>
  </li>`}function kv(n){const e=T("stockList");if(!e)return;const t=e.scrollTop,s=n.stocks||{};let i=Object.entries(s).filter(([r,o])=>Iv(r,o));if(du==="watch"&&(i=i.filter(([,r])=>At.has(r.name))),i=pu(i,hu),!i.length){e.innerHTML=`<li class="stock-empty">${xs?"검색 결과 없음":"종목이 없습니다"}</li>`;return}e.innerHTML=i.map(([r,o],a)=>mu(a+1,r,o)).join(""),e.scrollTop=t}function Sv(n,e){const s=(n.stocks||{})[e];if(!s){T("chartStockName").textContent="-",T("selStockPrice").textContent="-",T("selStockChange").textContent="";return}const i=s.basePrice||s.price,r=s.price-i,o=it(s.changeRate),a=s.changeRate>0?"+":"";T("chartStockName").textContent=s.name;const c=T("detailTag");if(c){const h=ri(s.type),p=eu(s.role);let m,v="virtual-tag";h?(m=h,v+=s.type==="inverse"?" tag-inv":s.type==="leverage"?" tag-lev":" tag-etf"):String(e).startsWith("ipo")?(m="신규상장",v+=" tag-new"):s.sector?(m=p?`${s.sector}·${p}`:s.sector,s.role==="leader"&&(v+=" tag-leader")):m="가상",c.textContent=m,c.className=v}const l=T("selStockPrice"),d=Ls[e];if(l.textContent=O(s.price),l.className="big-price "+o,d!=null&&s.price!==d){const h=s.price>d?"flash-up":"flash-down";l.classList.remove("flash-up","flash-down"),l.offsetWidth,l.classList.add(h)}Ls[e]=s.price,T("selStockChange").className="change "+o,T("selStockChange").textContent=`${Gn(s.changeRate)} ${a}${O(r)} (${a}${(s.changeRate??0).toFixed(2)}%)`,Ai("ohlcOpen",s.open,i),Ai("ohlcHigh",s.high,i),Ai("ohlcLow",s.low,i),T("ohlcUpper").textContent=O(oi(i)),T("ohlcLower").textContent=O(ai(i)),T("ohlcVol").textContent=iv(s.volume),T("ohlcValue").textContent=Et(s.value)+"원";const u=T("selStockNews");u.textContent=s.news?`📰 ${s.news}`:"",u.className="news-line"+(s.news?" "+o:" muted"),_u(n,e,i,s)}const Ls={};function Ai(n,e,t){const s=T(n);s.textContent=O(e),s.className="ohlc-v "+it((e||0)-t)}function dt(n){return getComputedStyle(document.body).getPropertyValue(n).trim()||"#000"}const lr={tick:{win:30*6e4,tiers:["candles1m","candles5m"],count:16},"1d":{win:864e5,tiers:["candles5m","candles1m"],count:288},"3d":{win:2592e5,tiers:["candles1h","candles15m","candles5m"],count:216},"1w":{win:6048e5,tiers:["candles1h","candles15m"],count:224},"1m":{win:2592e6,tiers:["candles1h","candles15m","candles5m","candles1m"],count:360},all:{win:1/0,tiers:["candles1h","candles15m","candles5m","candles1m"],count:500}},Tv={tick:"1틱","1d":"1일","3d":"3일","1w":"1주","1m":"1달",all:"전체"};function Da(n){if(n<=0)return"0분";const e=Math.round(n/6e4);if(e<60)return e+"분";const t=Math.floor(e/60),s=e%60;if(t<24)return s?`${t}시간 ${s}분`:`${t}시간`;const i=Math.floor(t/24),r=t%24;return r?`${i}일 ${r}시간`:`${i}일`}function Rv(n,e){const t=Tv[n]||n;if(!e||!e.length)return t+" · 데이터 없음";if(n==="tick")return"1틱 · 최근 흐름";const s=e[0].t,i=e[e.length-1].t;if(!(s>1e11)||!(i>1e11))return t+" · 최근 흐름";const r=i-s,o=(lr[n]||{}).win;return o&&o!==1/0&&r<o*.9?`${t} · 아직 ${Da(r)} 데이터만 있음`:`${t} · 누적 ${Da(r)} 데이터`}function pt(n){return(n<10?"0":"")+n}function Nv(n,e){if(!(n>1e11))return"";const t=new Date(n),s=pt(t.getHours())+":"+pt(t.getMinutes()),i=t.getMonth()+1+"/"+t.getDate();return e==="tick"||e==="1d"?s:e==="3d"||e==="1w"?i+" "+s:i}function Av(n){if(!(n>1e11))return"";const e=new Date(n);return e.getMonth()+1+"/"+pt(e.getDate())+" "+pt(e.getHours())+":"+pt(e.getMinutes())}let yn="1d",is=-1,re=null,ct=null,xa=!1,$s="";function La(n,e){if(n.length&&e.price!=null&&n[n.length-1].c!==e.price){const t=n[n.length-1],s=t.t>1e11?t.t+1e3:t.t+1;n.push({t:s,o:t.c,h:Math.max(t.c,e.price),l:Math.min(t.c,e.price),c:e.price,v:0,_live:!0})}return n}function gu(n,e,t){const s=lr[t]||lr["1d"],i=n.history||null,r=Se[e]||[],o=Date.now(),a=s.win===1/0?-1/0:o-s.win;if(t==="tick"){let l=r.slice(-12).map((d,u)=>({t:d.t||o-(12-u)*6e3,o:d.o,h:d.h,l:d.l,c:d.c,v:d.v||0}));if(l.length<2&&i){const d=Pa(i,"candles1m");d.length&&(l=d.slice(-s.count).map(u=>({...u})))}return La(l,n)}let c=[];if(i)for(const l of s.tiers){let d=Pa(i,l);if(d.length){if(d=d.filter(u=>u.t>=a),d.length>=2){c=d.map(u=>({...u}));break}!c.length&&d.length&&(c=d.map(u=>({...u})))}}return!c.length&&r.length&&(c=r.map((l,d)=>({t:l.t||o-(r.length-d)*6e3,o:l.o,h:l.h,l:l.l,c:l.c,v:l.v||0})).filter(l=>l.t>=a)),c=La(c,n),c.length>s.count&&(c=c.slice(c.length-s.count)),c}function _u(n,e,t,s){ct={room:n,id:e,base:t};const i=gu(s,e,yn),r=i.length?i[i.length-1]:null,o=`${e}|${yn}|${i.length}|${r?r.c+":"+r.v:""}|${t}`;if(o===$s){$a();return}$s=o,is=-1,vu(),ur(T("priceChart"),i,t,-1);const a=T("chartRangeNote");a&&(a.textContent=Rv(yn,i)),$a()}function $a(){if(xa)return;xa=!0;const n=T("chartPeriods");n&&n.addEventListener("click",t=>{var i;const s=t.target.closest(".cp-btn");if(s&&(yn=s.dataset.period,n.querySelectorAll(".cp-btn").forEach(r=>r.classList.toggle("is-active",r===s)),ct)){const r=(i=ct.room.stocks)==null?void 0:i[ct.id];r&&_u(ct.room,ct.id,ct.base,r)}});const e=T("priceChart");if(e){const t=i=>{if(!re)return;const r=e.getBoundingClientRect(),o=(i.touches?i.touches[0].clientX:i.clientX)-r.left,a=Math.max(0,Math.min(re.candles.length-1,Math.floor(o/re.cw)));a!==is&&(is=a,ur(e,re.candles,re.base,a),Pv(a))},s=()=>{is=-1,re&&ur(e,re.candles,re.base,-1),vu()};e.addEventListener("mousemove",t),e.addEventListener("mouseleave",s),e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchmove",t,{passive:!0}),e.addEventListener("touchend",s)}}function Pv(n){const e=T("chartTip");if(!e||!re)return;const t=re.candles[n];if(!t)return;const s=t.o?(t.c-t.o)/t.o*100:0,i=s>0?"up":s<0?"down":"flat",r=Av(t.t)||`구간 ${n+1}`;e.innerHTML=`
    <div class="tip-when">${W(r)}</div>
    <div class="tip-row"><span>시작</span><b>${O(t.o)}</b></div>
    <div class="tip-row"><span>마지막</span><b>${O(t.c)}</b></div>
    <div class="tip-row"><span>최고</span><b class="up">${O(t.h)}</b></div>
    <div class="tip-row"><span>최저</span><b class="down">${O(t.l)}</b></div>
    <div class="tip-row"><span>거래량</span><b>${O(t.v)}</b></div>
    <div class="tip-row"><span>등락률</span><b class="${i}">${s>=0?"+":""}${s.toFixed(2)}%</b></div>`,e.classList.remove("hidden");const o=n*re.cw+re.cw/2,a=o>re.plotW*.6?"left":"right";e.style.left=a==="right"?`${o+10}px`:"",e.style.right=a==="left"?`${re.cssW-o+10}px`:"",e.style.top="8px"}function vu(){const n=T("chartTip");n&&n.classList.add("hidden")}function ur(n,e,t,s){if(!n)return;const i=window.devicePixelRatio||1,r=n.clientWidth||600,o=n.clientHeight||260;n.width=Math.round(r*i),n.height=Math.round(o*i);const a=n.getContext("2d");if(a.setTransform(i,0,0,i,0,0),a.clearRect(0,0,r,o),!e.length){re=null;return}const c=56,l=r-c,d=o*.18,u=o*.06,h=o-d-u;let p=-1/0,m=1/0,v=0;for(const N of e)p=Math.max(p,N.h),m=Math.min(m,N.l),v=Math.max(v,N.v||0);p===m&&(p+=1,m-=1);const C=(p-m)*.14;p+=C,m-=C;const I=dt("--up"),g=dt("--down"),w="rgba(255,255,255,0.07)",S=dt("--muted"),b=N=>h*(1-(N-m)/(p-m)),k=Math.max(e.length,14),P=l/k,_=Math.max(2.5,Math.min(14,P*.64));re={cw:P,plotW:l,priceH:h,volH:d,cssW:r,cssH:o,candles:e,base:t,lo:m,hi:p},a.font="11px Pretendard, sans-serif",a.textBaseline="middle";const y=4;for(let N=0;N<=y;N++){const X=h/y*N,D=p-(p-m)/y*N;a.strokeStyle=w,a.lineWidth=1,a.beginPath(),a.moveTo(0,Math.round(X)+.5),a.lineTo(l,Math.round(X)+.5),a.stroke(),a.fillStyle=S,a.textAlign="left",a.fillText(O(D),l+6,Math.min(h-6,Math.max(8,X)))}if(s>=0&&s<e.length){const N=s*P+P/2;a.strokeStyle="rgba(120,140,180,0.55)",a.lineWidth=1,a.setLineDash([3,3]),a.beginPath(),a.moveTo(Math.round(N)+.5,0),a.lineTo(Math.round(N)+.5,o),a.stroke(),a.setLineDash([])}e.forEach((N,X)=>{const D=X*P+P/2,ie=N.c>=N.o?I:g;a.strokeStyle=ie,a.fillStyle=ie,a.lineWidth=1,a.beginPath(),a.moveTo(Math.round(D)+.5,b(N.h)),a.lineTo(Math.round(D)+.5,b(N.l)),a.stroke();const Fe=b(N.o),nn=b(N.c),ui=Math.min(Fe,nn),zn=Math.max(1.5,Math.abs(nn-Fe));if(a.fillRect(D-_/2,ui,_,zn),v>0){const vo=(d-4)*((N.v||0)/v);a.globalAlpha=.4,a.fillRect(D-_/2,o-vo,_,vo),a.globalAlpha=1}});const R=e[e.length-1].c;if(R<=p&&R>=m){const N=b(R),D=R>=(t||R)?I:g;a.strokeStyle=D,a.lineWidth=1,a.setLineDash([4,3]),a.beginPath(),a.moveTo(0,Math.round(N)+.5),a.lineTo(l,Math.round(N)+.5),a.stroke(),a.setLineDash([]);const J=O(R);a.font="bold 11px Pretendard, sans-serif";const ie=a.measureText(J).width,Fe=Math.min(h-9,Math.max(9,N));a.fillStyle=D,a.beginPath();const nn=l+2,ui=Math.min(c-4,ie+10),zn=17;Mv(a,nn,Fe-zn/2,ui,zn,4),a.fill(),a.fillStyle="#fff",a.textAlign="left",a.fillText(J,nn+5,Fe)}if(e.length>=2){a.font="10px Pretendard, sans-serif",a.fillStyle=S;const N=[0,Math.floor((e.length-1)/2),e.length-1],X={};N.forEach(D=>{if(X[D])return;X[D]=1;const J=Nv(e[D].t,yn);if(!J)return;a.textAlign=D===0?"left":D===e.length-1?"right":"center";const ie=D===0?2:D===e.length-1?l-2:D*P+P/2;a.fillText(J,ie,o-2)})}}function Mv(n,e,t,s,i,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+s,t,e+s,t+i,r),n.arcTo(e+s,t+i,e,t+i,r),n.arcTo(e,t+i,e,t,r),n.arcTo(e,t,e+s,t,r),n.closePath()}function mo(){$s="";const n=T("priceChart");if(n){const e=n.getContext("2d");e&&e.clearRect(0,0,n.width,n.height)}}function Ov(n,e){var l;const t=T("orderbook");if(!t)return;const s=(l=n.stocks)==null?void 0:l[e];if(!s){t.innerHTML="";return}const i=tu(s.price),r=s.basePrice||s.price,o=5e4,a=()=>Math.floor((Math.random()*.9+.1)*12e3),c=[];for(let d=5;d>=1;d--){const u=Fa(s.price+d*i,r);c.push(Ua(u,a(),"ask",o,r))}c.push(`<div class="ob-current ${it(s.changeRate)}">${O(s.price)}</div>`);for(let d=1;d<=5;d++){const u=Fa(s.price-d*i,r);c.push(Ua(u,a(),"bid",o,r))}t.innerHTML=c.join("")}function Fa(n,e){return Math.max(ai(e),Math.min(oi(e),Math.max($e,n)))}function Ua(n,e,t,s,i){const r=it(n-i),o=Math.min(100,e/s*100);return t==="ask"?`<div class="ob-row ask">
      <span class="ob-qty"><span class="ob-bar" style="width:${o}%"></span><b>${O(e)}</b></span>
      <span class="ob-price ${r}">${O(n)}</span>
      <span></span>
    </div>`:`<div class="ob-row bid">
    <span></span>
    <span class="ob-price ${r}">${O(n)}</span>
    <span class="ob-qty"><b>${O(e)}</b><span class="ob-bar" style="width:${o}%"></span></span>
  </div>`}function Dv(n,e){var p;const t=(p=n.players)==null?void 0:p[e],s=n.stocks||{};if(!t)return;const i=fo(t,s);T("myCash").textContent=_n(t.cash),T("myAsset").textContent=_n(i);const r=T("myAssetTop");r&&(r.textContent=Et(i)+"원");const o=t.avgCost||{},a=t.holdings||{},c=Object.entries(a).filter(([,m])=>m>0);let l=0,d=0;c.forEach(([m,v])=>{const C=s[m];if(!C)return;const I=(o[m]||C.price)*v;l+=C.price*v-I,d+=I});const u=T("myPnl");if(u)if(c.length){const m=d?l/d*100:0,v=l>0?"up":l<0?"down":"flat";u.className="asset-pnl "+v,u.textContent=`평가손익 ${l>=0?"+":""}${O(l)}원 (${m>=0?"+":""}${m.toFixed(2)}%)`}else u.className="asset-pnl muted",u.textContent="평가손익 —";const h=T("holdingsList");if(h.innerHTML="",c.length===0){const m=document.createElement("li");m.className="muted",m.textContent="보유 종목이 없습니다",h.appendChild(m);return}for(const[m,v]of c){const C=s[m];if(!C)continue;const I=o[m]||0,g=I?(C.price-I)*v:0,w=I?(C.price-I)/I*100:0,S=g>0?"up":g<0?"down":"flat",b=document.createElement("li");b.className="holding-item",b.innerHTML=`
      <div class="hold-row1"><span class="hold-name">${W(C.name)}</span><b>${O(v)}주</b></div>
      <div class="hold-row2 muted">평단 ${I?O(I):"-"} · 평가 ${Et(C.price*v)}원</div>
      <div class="hold-row2 ${S}">${g>=0?"+":""}${O(g)}원 (${w>=0?"+":""}${w.toFixed(2)}%)</div>`,h.appendChild(b)}}let Ba=null;function B(n,e=""){const t=T("toast");t&&(t.textContent=n,t.className="toast show"+(e?" toast-"+e:""),clearTimeout(Ba),Ba=setTimeout(()=>{t.className="toast"+(e?" toast-"+e:"")},1800))}function xv(n,e){const t=T("rankingList");t.innerHTML="",iu(n.players,n.stocks).forEach(i=>{const r=document.createElement("li"),o=((i.total-Lt)/Lt*100).toFixed(2),a=i.total>=Lt?"up":"down";r.innerHTML=`<span>${W(i.nickname)}${i.uid===e?" (나)":""}</span> <b>${Et(i.total)}원</b> <span class="${a}">${o>=0?"+":""}${o}%</span>`,i.connected||r.classList.add("muted"),t.appendChild(r)})}function Lv(n){const e=T("logList");e.innerHTML="";const s=[...Object.values(n.logs||{}),...vn].sort((i,r)=>r.time-i.time).slice(0,40);for(const i of s){const r=document.createElement("li"),o=i.type==="buy"?"매수":"매도",a=i.type==="buy"?"up":"down",c=new Date(i.time).toLocaleTimeString("ko-KR",{hour12:!1}),l=i.bot?`<b class="bot-name">${W(i.nickname)}</b>`:`<b>${W(i.nickname)}</b>`;r.innerHTML=`<span class="muted">${c}</span> ${l} <span class="${a}">${o}</span> ${W(i.stockName)} ${O(i.qty)}주 @ ${O(i.price)}`,e.appendChild(r)}}function $v(n){const e=T("newsBar"),t=n.latestNews;if(!t||Date.now()-t.time>12e3){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent=`📢 ${t.text}`}function Fv(n){const e=[T("tickBar"),T("tickBarHome")],t=[T("tickCountdown"),T("tickCountdownHome")],s=n&&(n.marketTick||n.market&&n.market.lastTickAt)||0;if(!s){e.forEach(l=>{l&&(l.style.width="0%")}),t.forEach(l=>{l&&(l.textContent="")});return}const i=Date.now()-s,o=(Math.max(0,Math.min(1,i/rr))*100).toFixed(1)+"%";e.forEach(l=>{l&&(l.style.width=o)});const a=Math.max(0,Math.ceil((rr-i)/1e3)),c=a>0?a+"s":"곧";t.forEach(l=>{l&&(l.textContent=c)})}function Uv(n){const e=Math.max(0,Math.floor(n/1e3)),t=String(Math.floor(e/60)).padStart(2,"0"),s=String(e%60).padStart(2,"0");T("gameTimer").textContent=`${t}:${s}`}function W(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let dr={};const Bv=60;function yu(n){let e=0,t=0;const s={};for(const o of Object.values(n||{})){const a=(o.value||0)+1;e+=a,t+=a*(o.changeRate||0);const c=o.sector||"기타",l=s[c]||(s[c]={w:0,r:0});l.w+=a,l.r+=a*(o.changeRate||0)}const i=e?t/e:0,r=Object.entries(s).map(([o,a])=>({name:o,rate:a.w?a.r/a.w:0,w:a.w})).sort((o,a)=>a.w-o.w);return{comp:i,sectors:r}}function Ha(n,e){const t=dr[n]||(dr[n]=[]);t.push(e),t.length>Bv&&t.shift()}function Hv(n){const{comp:e,sectors:t}=yu(n);Ha("__comp__",1e3*(1+e/100)),t.forEach(s=>Ha("sec:"+s.name,1e3*(1+s.rate/100)))}function Wv(n,e){if(!n||n.length<2)return"";const t=140,s=28,i=Math.min(...n),r=Math.max(...n),o=r-i||1,a=n.map((l,d)=>`${(d/(n.length-1)*t).toFixed(1)},${(s-(l-i)/o*s).toFixed(1)}`).join(" "),c=e>=0?"var(--up)":"var(--down)";return`<svg viewBox="0 0 ${t} ${s}" preserveAspectRatio="none"><polyline points="${a}" fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function Vv(n,e,t,s,i=""){const r=it(t),o=t>0?"+":"";return`<div class="index-card ${i}"><span class="ix-name">${W(n)}</span><span class="ix-val">${e.toFixed(2)}</span><span class="ix-rate ${r}">${Gn(t)} ${o}${t.toFixed(2)}%</span><div class="ix-spark">${Wv(s,t)}</div></div>`}function Wa(n){const e=n.rate,t=it(e),s=e>0?"+":"",i=(1e3*(1+e/100)).toFixed(2);return`<div class="ixs-row"><span class="ixs-name">${W(n.name)}</span><span class="ixs-val">${i}</span><span class="ixs-rate ${t}">${Gn(e)} ${s}${e.toFixed(2)}%</span></div>`}function jv(n){const e=T("indexStrip");if(!e)return;const{comp:t,sectors:s}=yu(n.stocks||{}),i=s.slice(0,16),r=i.slice(0,8),o=i.slice(8,16),a=[Vv("STONK 종합",1e3*(1+t/100),t,dr.__comp__,"index-comp"),`<div class="index-card index-sectors">${r.map(Wa).join("")}</div>`,o.length?`<div class="index-card index-sectors">${o.map(Wa).join("")}</div>`:""];e.innerHTML=a.join("")}function Gv(n){const e=new Date(n.when).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"});return`<div class="feed-card"><div class="feed-card-head"><span class="feed-ava">${W((n.who||"S").slice(0,1))}</span><div><div class="feed-who">${W(n.who)}</div><div class="feed-when">${e}</div></div></div>${n.title?`<div class="feed-title">${W(n.title)}</div>`:""}<div class="feed-body">${W(n.body)}</div></div>`}function zv(n,e){const t=T("feedView");if(!t)return;const s=[],i=n.latestNews;i&&(i.text||i.title)&&s.push({who:"STONK 뉴스",when:i.time||Date.now(),title:i.title||"📢 시장 속보",body:i.text||i.body||""}),Object.values(n.botFeed||{}).slice(-10).reverse().forEach(c=>s.push({who:c.nickname||"트레이더",when:c.time||Date.now(),title:"",body:`${c.type==="buy"?"매수":"매도"} · ${c.stockName||"종목"} ${O(c.qty||0)}주 @ ${O(c.price||0)}`}));const r=iu(n.players,n.stocks).slice(0,5),o=[...new Set(Object.values(n.stocks||{}).map(c=>c.sector).filter(Boolean))].slice(0,8),a=r.map((c,l)=>{const d=(c.total-Lt)/Lt*100;return`<li><span class="fr-no">${l+1}</span><span class="fr-name">${W(c.nickname)}</span><span class="fr-val ${d>=0?"up":"down"}">${d>=0?"+":""}${d.toFixed(1)}%</span></li>`}).join("");t.innerHTML=`
    <aside class="feed-side"><button class="is-active">전체</button><button>팔로잉</button><button>뉴스</button></aside>
    <div class="feed-main">
      ${s.length?s.map(Gv).join(""):'<div class="feed-card"><div class="feed-body muted">아직 소식이 없습니다. 거래가 시작되면 시장 속보와 체결 소식이 올라옵니다.</div></div>'}
      <a class="feed-card" id="feedBoardLink" target="_blank" rel="noopener" style="text-decoration:none;color:var(--brand);font-weight:700">전체 소식 보기 → STONK Board ↗</a>
    </div>
    <aside class="feed-aside">
      <div class="feed-rank-card"><h4 class="rail-h">주간 프로필 랭킹</h4><ol class="feed-rank-list">${a||'<li class="muted">참가자 없음</li>'}</ol></div>
      <div class="feed-rank-card"><h4 class="rail-h">주제별 커뮤니티</h4><div class="feed-comm">${o.map(c=>`<span>＃ ${W(c)}</span>`).join("")||'<span class="muted">-</span>'}</div></div>
    </aside>`}const Pi=[{key:"rising",label:"연속 상승세",badge:"인기",fn:(n,e)=>(e.changeRate||0)>0,sort:"up"},{key:"value",label:"거래대금 상위",fn:()=>!0,sort:"value"},{key:"surge",label:"급등주",fn:(n,e)=>(e.changeRate||0)>=5,sort:"up"},{key:"plunge",label:"급락주",fn:(n,e)=>(e.changeRate||0)<=-5,sort:"down"},{key:"cheap",label:"저가주",fn:(n,e)=>(e.price||0)<2e3,sort:"value"},{key:"pricey",label:"고가주",fn:(n,e)=>(e.price||0)>=1e5,sort:"value"},{key:"lev",label:"레버리지·인버스",fn:(n,e)=>e.type==="leverage"||e.type==="inverse",sort:"value"},{key:"etf",label:"ETF·리츠",fn:(n,e)=>e.type==="etf"||e.type==="reit",sort:"value"},{key:"leader",label:"대장주",fn:(n,e)=>e.role==="leader",sort:"value"}];function Kv(n){const e=T("screenerPresets"),t=T("screenerHead"),s=T("screenerList");if(!e||!s)return;e.innerHTML='<div class="sa-title">주식 골라보기 목록</div>'+Pi.map(o=>`<button data-preset="${o.key}" class="${o.key===cr?"is-active":""}">${W(o.label)}${o.badge?` <span class="sa-badge">${o.badge}</span>`:""}</button>`).join("");const i=Pi.find(o=>o.key===cr)||Pi[0];t&&(t.innerHTML=`<h2>${W(i.label)}</h2><p>조건에 맞는 종목을 모았습니다 · 모두 가상 데이터</p>`);let r=Object.entries(n.stocks||{}).filter(([o,a])=>i.fn(o,a));r=pu(r,i.sort),s.innerHTML=r.length?r.map(([o,a],c)=>mu(c+1,o,a)).join(""):'<li class="stock-empty">조건에 맞는 종목이 없습니다</li>'}function qv(n,e){var g,w;const t=T("accountView");if(!t)return;const s=(g=n.players)==null?void 0:g[e];if(!s){t.innerHTML='<div class="acct-main"><div class="acct-section muted">계좌 정보를 불러오는 중…</div></div>';return}const i=n.stocks||{},r=fo(s,i),o=s.avgCost||{},a=Object.entries(s.holdings||{}).filter(([,S])=>S>0);let c=0,l=0,d=0;a.forEach(([S,b])=>{const k=i[S];if(!k)return;const P=(o[S]||k.price)*b;c+=k.price*b,l+=k.price*b-P,d+=P});const u=d?l/d*100:0,h=l>0?"up":l<0?"down":"flat",p=((w=T("gameRoomCode"))==null?void 0:w.textContent)||"-",m=Object.values(n.logs||{}).filter(S=>S.uid===e).sort((S,b)=>b.time-S.time).slice(0,20),v=Object.values(n.orders||{}).filter(S=>S.uid===e),C=["asset","tx","orders"].map(S=>{const b={asset:"자산",tx:"거래내역",orders:"주문내역"}[S];return`<button data-acct="${S}" class="${S===ss?"is-active":""}">${b}</button>`}).join("");let I="";if(ss==="asset"){const S=a.length?a.map(([b,k])=>{const P=i[b];if(!P)return"";const _=o[b]||0,y=_?(P.price-_)*k:0,R=_?(P.price-_)/_*100:0,N=y>0?"up":y<0?"down":"flat";return`<div class="acct-row"><div><div class="ar-name">${W(P.name)}</div><div class="ar-sub">${O(k)}주 · 평단 ${_?O(_):"-"}</div></div><div class="ar-val ${N}">${O(P.price*k)}원<br><small>${y>=0?"+":""}${R.toFixed(2)}%</small></div></div>`}).join(""):'<div class="acct-row muted">보유 종목이 없습니다</div>';I=`
      <div class="acct-hero">
        <div class="ah-no">기본계좌 · ${W(p)}</div>
        <div class="ah-asset">${_n(r)}</div>
        <div class="ah-pnl ${h}">평가손익 ${l>=0?"+":""}${O(l)}원 (${u>=0?"+":""}${u.toFixed(2)}%)</div>
        <div class="acct-actions"><button class="btn small" disabled>채우기</button><button class="btn small" disabled>보내기</button><button class="btn small" disabled>환전</button></div>
      </div>
      <div class="acct-grid">
        <div class="acct-stat"><div class="as-k">주문가능 현금</div><div class="as-v">${_n(s.cash)}</div></div>
        <div class="acct-stat"><div class="as-k">총 투자금액(평가)</div><div class="as-v">${_n(c)}</div></div>
        <div class="acct-stat"><div class="as-k">평가손익</div><div class="as-v ${h}">${l>=0?"+":""}${O(l)}</div></div>
      </div>
      <div class="acct-section"><h3>보유 종목</h3>${S}</div>`}else ss==="tx"?I=`<div class="acct-section"><h3>거래내역</h3>${m.length?m.map(b=>{const k=b.type==="buy"?"up":"down",P=new Date(b.time).toLocaleString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});return`<div class="acct-row"><div><div class="ar-name">${W(b.stockName)}</div><div class="ar-sub">${P}</div></div><div class="ar-val ${k}">${b.type==="buy"?"매수":"매도"} ${O(b.qty)}주<br><small>@ ${O(b.price)}</small></div></div>`}).join(""):'<div class="acct-row muted">거래내역이 없습니다</div>'}</div>`:I=`<div class="acct-section"><h3>주문내역(미체결)</h3>${v.length?v.map(b=>{const k=b.side==="buy"?"up":"down";return`<div class="acct-row"><div><div class="ar-name">${W(b.stockName||b.stockId||"")}</div><div class="ar-sub">${b.kind||"지정가"} · ${b.tif||""}</div></div><div class="ar-val ${k}">${b.side==="buy"?"매수":"매도"} ${O(b.qty)}주<br><small>${b.price?"@ "+O(b.price):""}</small></div></div>`}).join(""):'<div class="acct-row muted">미체결 주문이 없습니다</div>'}</div>`;t.innerHTML=`<aside class="acct-side">${C}</aside><div class="acct-main">${I}</div>`}function go(){const n=T("stockHover");n&&n.classList.add("hidden")}function Yv(n,e){const t=T("stockHover");if(!t)return;const s=n&&n.stocks&&n.stocks[e];if(!s){t.classList.add("hidden");return}const i=it(s.changeRate),r=s.changeRate>0?"+":"",o=(s.changeRate||0)>=0?"왜 올랐을까?":"왜 내렸을까?",a=s.news?W(s.news):"아직 특별한 소식은 없어요. 거래대금과 수급에 따라 움직이고 있어요.";t.innerHTML=`
    <div class="sh-head">
      <span class="sh-ico" style="background:${fu(s.name)}">${W((s.name||"?").slice(0,1))}</span>
      <div class="sh-meta">
        <b class="sh-name">${W(s.name)} ${ou(e,s)}</b>
        <span class="sh-price"><b>${O(s.price)}원</b> <span class="${i}">${Gn(s.changeRate)} ${r}${(s.changeRate??0).toFixed(2)}%</span></span>
      </div>
    </div>
    <div class="sh-chartwrap"><span class="sh-tf">일봉</span><canvas class="sh-chart"></canvas></div>
    <div class="sh-news"><b class="sh-why">${o}</b><p>${a}</p></div>`,t.classList.remove("hidden");const c=t.querySelector(".sh-chart");s.basePrice||s.previousPrice||s.price,Qv(c,gu(s,e,"1d"))}function Qv(n,e,t){if(!n)return;const s=window.devicePixelRatio||1,i=n.clientWidth||272,r=n.clientHeight||118;n.width=Math.round(i*s),n.height=Math.round(r*s);const o=n.getContext("2d");if(o.setTransform(s,0,0,s,0,0),o.clearRect(0,0,i,r),!e||e.length<2){o.fillStyle=dt("--muted"),o.font="12px Pretendard, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText("데이터 수집 중…",i/2,r/2);return}const a=r*.72,c=r-a-4;let l=-1/0,d=1/0,u=0;for(const w of e)l=Math.max(l,w.h),d=Math.min(d,w.l),u=Math.max(u,w.v||0);l===d&&(l+=1,d-=1);const h=(l-d)*.12;l+=h,d-=h;const p=w=>a*(1-(w-d)/(l-d));o.strokeStyle=dt("--chart-grid"),o.lineWidth=1;for(let w=1;w<=2;w++){const S=a/3*w;o.beginPath(),o.moveTo(0,Math.round(S)+.5),o.lineTo(i,Math.round(S)+.5),o.stroke()}const m=dt("--up"),v=dt("--down"),C=e.length,I=i/C,g=Math.max(1.5,Math.min(7,I*.62));e.forEach((w,S)=>{const b=S*I+I/2,k=w.c>=w.o?m:v;o.strokeStyle=k,o.fillStyle=k,o.lineWidth=1,o.beginPath(),o.moveTo(Math.round(b)+.5,p(w.h)),o.lineTo(Math.round(b)+.5,p(w.l)),o.stroke();const P=p(w.o),_=p(w.c),y=Math.min(P,_),R=Math.max(1,Math.abs(_-P));if(o.fillRect(b-g/2,y,g,R),u>0){const N=(c-2)*((w.v||0)/u);o.globalAlpha=.35,o.fillRect(b-g/2,r-N,g,N),o.globalAlpha=1}})}const wu={home:"https://tom981105-web.github.io/STONK-Home/",battle:"https://tom981105-web.github.io/STONK-Battle/",board:"https://tom981105-web.github.io/STONK-Board/",wiki:"https://tom981105-web.github.io/STONK-Wiki/",arcade:"https://tom981105-web.github.io/STONK-Arcade/",gacha:"https://tom981105-web.github.io/STONK-Gacha/",admin:"https://tom981105-web.github.io/STONK-Admin/market-admin.html"},Va={home:"../STONK-Home/index.html",battle:"../Market-battle/index.html",board:"../Market-Board/index.html",wiki:"../Market-Wiki/index.html",arcade:"../STONK-Arcade/index.html",gacha:"../STONK-Gacha/index.html",admin:"../Market-Admin/market-admin.html"},_o="stonk:lastRoomCode",Jv=["mb-board-room","wiki-room"];function bu(){return location.protocol==="file:"||/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)}function Xv(){return{urls:{...wu},local:bu()}}function zt(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function Eu(){try{const n=new URLSearchParams(location.search);return zt(n.get("room")||n.get("roomCode")||n.get("roomId")||"")}catch{return""}}function Iu(n){const e=zt(n);if(e)try{localStorage.setItem(_o,e)}catch{}}function Cu(){try{const n=zt(localStorage.getItem(_o));if(n)return n;for(const e of Jv){const t=zt(localStorage.getItem(e));if(t)return t}}catch{}return""}function Zv(){return Eu()||Cu()||"MAIN"}function ey(n){const e=wu[n];return bu()&&/github\.io/.test(e||"")?Va[n]:e||Va[n]}function rt(n,e){const t=ey(n),s=[],i=zt(e&&e.room);i&&s.push("room="+encodeURIComponent(i));const r=e&&(e.company||e.companyId);return r&&s.push("company="+encodeURIComponent(r)),s.length?t+(t.indexOf("?")>=0?"&":"?")+s.join("&"):t}function ku(n){return rt("home",{room:n})}function ty(n){return rt("battle",{room:n})}function Su(n){return rt("board",{room:n})}function Tu(n,e){return rt("wiki",{room:n,company:e})}function ny(n){return rt("arcade",{room:n})}function sy(n){return rt("gacha",{room:n})}function Ru(n){return rt("admin",{room:n})}const iy={VERSION:"1.4.1",getSiteConfig:Xv,normalizeRoomCode:zt,getUrlRoomCode:Eu,getCurrentRoomCode:Zv,setLastRoomCode:Iu,getLastRoomCode:Cu,buildSiteUrl:rt,buildHomeUrl:ku,buildBattleUrl:ty,buildBoardUrl:Su,buildWikiUrl:Tu,buildArcadeUrl:ny,buildGachaUrl:sy,buildAdminUrl:Ru,LAST_ROOM_KEY:_o};typeof window<"u"&&(window.SiteConfig=iy);const ry="../STONK-Home/index.html",Mi=2600;function oy(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function ay(){return/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||location.protocol==="file:"}function cy(n){const e=oy(n);return ry+(e?`?room=${encodeURIComponent(e)}`:"")}function ly({title:n="STONK Home에서 입장해 주세요",message:e="",roomCode:t="",auto:s=!0}={}){var c;const i=cy(t),r=document.getElementById("stonk-home-gate");r&&r.remove();const o=document.createElement("div");o.id="stonk-home-gate",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),Object.assign(o.style,{position:"fixed",inset:"0",zIndex:"99999",display:"grid",placeItems:"center",padding:"24px",background:"radial-gradient(120% 90% at 50% -10%, rgba(139,108,255,0.22), transparent 60%), rgba(5,6,10,0.94)",backdropFilter:"blur(8px)",color:"#f4f7ff",fontFamily:"Pretendard, Inter, 'Noto Sans KR', system-ui, sans-serif"});const a=s&&!ay();if(o.innerHTML=`
    <div style="width:min(460px,100%);text-align:center;padding:32px 26px;border:1px solid rgba(255,255,255,0.14);border-radius:18px;background:rgba(14,16,24,0.92);box-shadow:0 24px 70px rgba(0,0,0,0.5),0 0 60px rgba(139,108,255,0.16)">
      <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#8b6cff;margin-bottom:8px">STONK UNIVERSE</div>
      <h2 style="margin:0 0 10px;font-size:1.5rem">${n}</h2>
      <p style="margin:0 0 18px;color:#aab2c8;font-size:0.95rem;line-height:1.5">${e||"로그인 · 방 선택 · 닉네임 설정은 STONK Home에서 진행합니다."}</p>
      <a data-home-go href="${i}" style="display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 26px;border-radius:14px;font-weight:900;text-decoration:none;color:#0a0a12;background:linear-gradient(135deg,#a99bff,#8b6cff);box-shadow:0 10px 30px rgba(139,108,255,0.4)">STONK Home으로 이동</a>
      ${t?`<div style="margin-top:14px;font-size:0.82rem;color:#8a93a8">방 코드 <b style="color:#41e0ff;letter-spacing:2px">${t}</b> 유지</div>`:""}
      ${a?`<div style="margin-top:12px;font-size:0.8rem;color:#8a93a8"><span data-gate-count>${Math.ceil(Mi/1e3)}</span>초 후 자동 이동…</div>`:'<div style="margin-top:12px;font-size:0.78rem;color:#5f6678">개발 모드: 자동 이동 없음</div>'}
    </div>
  `,document.body.appendChild(o),(c=o.querySelector("[data-home-go]"))==null||c.addEventListener("click",l=>{l.preventDefault(),location.href=i}),a){let l=Math.ceil(Mi/1e3);const d=o.querySelector("[data-gate-count]"),u=setInterval(()=>{l-=1,d&&(d.textContent=String(Math.max(0,l))),l<=0&&clearInterval(u)},1e3);setTimeout(()=>{location.href=i},Mi)}return o}function uy(){var n;(n=document.getElementById("stonk-home-gate"))==null||n.remove()}const dy="https://tom981105-web.github.io/STONK-Gacha/backgrounds/";let rs,be=null;function hy(){return be||(be=document.createElement("div"),be.id="equip-bg",Object.assign(be.style,{position:"fixed",inset:"0",zIndex:"-1",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",pointerEvents:"none",opacity:"0",transition:"opacity 0.35s ease",transform:"translateZ(0)",backfaceVisibility:"hidden"}),document.body.appendChild(be),be)}function ja(){if(document.body.classList.remove("has-skin"),be){be.style.opacity="0";const n=be;setTimeout(()=>{rs===null&&n&&(n.style.backgroundImage="")},400)}}function fy(n,e){let t=0;const s=()=>{if(t>=n.length){e(null);return}const i=n[t++],r=new Image;r.decoding="async",r.onload=()=>e(i),r.onerror=s,r.src=i};s()}function py(n){const e=n||null;if(e===rs)return;if(rs=e,!e){ja();return}const t=["webp","jpg","png"].map(s=>`${dy}${e}.${s}`);fy(t,s=>{if(rs!==e)return;if(!s){ja();return}const i=hy();i.style.backgroundImage=`radial-gradient(120% 90% at 50% 12%, rgba(10,12,20,0.30) 0%, rgba(8,10,16,0.52) 55%, rgba(6,7,12,0.74) 100%), url("${s}")`,i.style.opacity="1",document.body.classList.add("has-skin")})}const my="yaV8N60yIiUggaWNpNF2VhkCwxb2",gy="tomem@naver.com",ci="MAIN",f={uid:null,email:null,nickname:localStorage.getItem("mb_nickname")||localStorage.getItem("stonk:lastNickname")||"",roomCode:null,roomData:null,selectedStockId:null,tickTimer:null,isDriver:!1,tickLeaseRenewAt:0,driverWatch:null,liveState:nv(),catchupDoneFor:null,clockTimer:null,roomRef:null,lastStatus:null,histRef:null,histStockId:null,selectedHistory:null,renderQueued:!1,joinReqRef:null,joinReqId:null,isDbAdmin:!1},_y=15e3,vy=5e3,yy=4e3;function wy(){return f.uid===my||(f.email||"").toLowerCase()===gy}!Xl||!uo||!L?au("src/firebase.js 에 본인의 Firebase 설정(firebaseConfig)을 붙여넣은 뒤 새로고침하세요."):by();function by(){let n=!1;const e=setTimeout(()=>{n||au("Firebase에 연결할 수 없습니다. 설정값과 네트워크, Database Rules를 확인하세요.")},5e3);jn(U(L,".info/connected"),t=>{t.val()===!0&&(n=!0,clearTimeout(e),document.getElementById("fbError").classList.add("hidden"))}),Ey()}let Qn=null;function Ey(){jn(U(L,`rooms/${ci}/broadcast/reloadAt`),n=>{const e=Number(n.val())||0;if(Qn===null){Qn=e;return}if(e>Qn){Qn=e;try{B==null||B("새 버전이 배포되어 새로고침합니다…","up")}catch{}setTimeout(()=>location.reload(),400)}}),ef(uo,n=>{if(n)uy(),f.uid=n.uid,f.email=n.email||null,localStorage.setItem("mb_playerId",n.uid),Iy(),Cy();else{f.uid=null,f.email=null,f.isDbAdmin=!1;const e=document.getElementById("navAdmin");e&&(e.hidden=!0),ly({message:"로그인은 STONK Home에서 진행합니다. Home에서 입장하면 자동으로 연결됩니다."})}})}async function Iy(){const n=document.getElementById("navAdmin");if(!n)return;let e=wy();if(!e&&f.uid&&L)try{e=(await co(U(L,"admins/"+f.uid))).val()===!0}catch{e=!1}f.isDbAdmin=e,n.hidden=!e}async function Cy(){if(!f.nickname){po("screen-auth");return}Au(ci)}let Oi=!1;async function ky(n){var s;if(!f.uid)return!1;if(n.players&&n.players[f.uid])return!0;if(Oi)return!1;Oi=!0;const e=Number((s=n.settings)==null?void 0:s.initialCash)||Lt,t=Date.now();try{await bt(U(L,`rooms/${ci}/players/${f.uid}`),{nickname:f.nickname&&f.nickname.trim()||"플레이어-"+String(f.uid).slice(-4),cash:e,holdings:null,totalAsset:e,joinedAt:t,connected:!0})}catch(i){return console.warn("[join] 자동 등록 실패:",i),!1}finally{Oi=!1}return!0}function Nu(){f.joinReqId=null}function Au(n){Nu(),f.roomCode=n,localStorage.setItem("mb_roomCode",n),Iu(n),Uy(n);const e=U(L,`rooms/${n}/players/${f.uid}/connected`);tn(e,!0).catch(()=>{}),__(e).set(!1).catch(()=>{}),f.roomRef&&lo(f.roomRef),f.roomRef=U(L,`rooms/${n}`),jn(f.roomRef,t=>My(Sy(t)),t=>{console.error("[room] 구독 오류:",t)})}function Sy(n){if(!n||!n.exists())return null;const e={};return n.forEach(t=>{if(t.key==="stocks"){const s={};t.forEach(i=>{const r={};i.forEach(o=>{o.key!=="history"&&(r[o.key]=o.val())}),s[i.key]=r}),e.stocks=s}else e[t.key]=t.val()}),e}function Ty(n){const e=f.selectedHistory;e&&e.id&&n&&n.stocks&&n.stocks[e.id]&&(n.stocks[e.id].history=e.data||null)}function Fs(n){n!==f.histStockId&&(f.histRef&&(lo(f.histRef),f.histRef=null),f.histStockId=n||null,f.selectedHistory=n?{id:n,data:null}:null,!(!n||!f.roomCode)&&(f.histRef=U(L,`rooms/${f.roomCode}/stocks/${n}/history`),jn(f.histRef,e=>{f.histStockId===n&&(f.selectedHistory={id:n,data:e.val()||null},f.roomData&&f.roomData.stocks&&f.roomData.stocks[n]&&(f.roomData.stocks[n].history=f.selectedHistory.data),he())},e=>console.error("[history] 구독 오류:",e))))}function he(){f.renderQueued||(f.renderQueued=!0,requestAnimationFrame(()=>{f.renderQueued=!1,f.roomData&&f.roomData.status==="playing"&&mv(f)}))}function Pu(n){const e=n==="dark"?"dark":"light";document.documentElement.dataset.theme=e;try{localStorage.setItem("stonk:theme",e)}catch{}const t=document.getElementById("themeToggle");t&&(t.textContent=e==="dark"?"☀️":"🌙")}function Ry(){let n="light";try{n=localStorage.getItem("stonk:theme")||"light"}catch{}Pu(n)}function Ny(){Pu(document.documentElement.dataset.theme==="dark"?"light":"dark")}function un(n){const e=document.getElementById("screen-game");e&&(e.dataset.tab=n,document.querySelectorAll(".tnav-tab").forEach(t=>t.classList.toggle("is-active",t.dataset.tab===n)),document.querySelectorAll(".tab-view").forEach(t=>t.classList.toggle("hidden",t.dataset.view!==n)),n==="detail"&&mo(),f.roomData&&he())}function Ay(n){n&&(go(),f.selectedStockId=n,Fs(n),By(n),un("detail"))}let Di=null,os=null;function Py(n){const e=document.getElementById("stockHover");if(!e)return;const t=e.offsetWidth||300,s=e.offsetHeight||240;let i=n.right+12;i+t>window.innerWidth-8&&(i=n.left-t-12),i<8&&(i=8);let r=n.top;r+s>window.innerHeight-8&&(r=window.innerHeight-s-8),r<8&&(r=8),e.style.left=i+"px",e.style.top=r+"px"}function Ga(n){const e=document.getElementById(n);e&&(e.addEventListener("mouseover",t=>{const s=t.target.closest(".rank-item");if(!s||!f.roomData)return;const i=s.dataset.id;i!==os&&(clearTimeout(Di),Di=setTimeout(()=>{os=i,Yv(f.roomData,i),Py(s.getBoundingClientRect())},90))}),e.addEventListener("mouseleave",()=>{clearTimeout(Di),os=null,go()}))}function My(n){if(!n){Me(),hr(),Bs(),f.roomData=null,f.lastStatus=null,za();return}if(f.roomData=n,Ty(n),py(n.players&&f.uid&&n.players[f.uid]?n.players[f.uid].equippedBackground:null),n.status==="playing"){if(f.uid&&!(n.players&&n.players[f.uid])){ky(n);return}if(f.lastStatus!=="playing"){po("screen-game"),cu(),Fy();const e=Object.keys(n.stocks||{});!f.selectedStockId&&e.length&&(f.selectedStockId=e[0])}f.selectedStockId!==f.histStockId&&Fs(f.selectedStockId),he(),Oy(n),Ou(n),$y()}else Me(),hr(),Bs(),Fs(null),mo(),za();f.lastStatus=n.status}function za(){po("screen-wait");const n=document.getElementById("waitNickname");n&&(n.textContent=f.nickname?`${f.nickname} 님`:"")}async function Oy(n){if(!n||n.status!=="playing"||!f.uid||f.catchupDoneFor===f.roomCode)return;if(!li(n)){f.catchupDoneFor=f.roomCode;return}const e=n.market&&n.market.lastTickAt||n.marketTick||0;if(e&&e<Dy(n)){f.catchupDoneFor=f.roomCode;try{await tn(U(L,`rooms/${f.roomCode}/market/lastTickAt`),Date.now())}catch{}return}if(!ev(n)){f.catchupDoneFor=f.roomCode;return}f.catchupDoneFor=f.roomCode;try{const t=await tv(f.roomCode,n,f.uid);t.applied&&(cu(),B(`시장 경과 보정 완료 (${Math.round(t.elapsed/6e4)}분, 캔들 ${t.candlesWritten}개)`,"up"))}catch(t){console.warn("[catchup] 보정 실패:",t)}}async function Mu(){if(!f.roomCode||!f.uid)return!1;const n=Date.now();try{return(await ye(U(L,`rooms/${f.roomCode}/market/tickLease`),t=>{if(!(t&&t.by!==f.uid&&(t.expiresAt||0)>n))return{by:f.uid,at:n,expiresAt:n+_y}})).committed}catch{return!1}}function Us(n){const e=n&&n.market||{};let t=Number.isFinite(e.openHour)?Math.round(e.openHour):18,s=Number.isFinite(e.closeHour)?Math.round(e.closeHour):24;return t=Math.max(0,Math.min(24,t)),s=Math.max(0,Math.min(24,s)),{oh:t,ch:s}}function li(n){const{oh:e,ch:t}=Us(n);if(e===t)return!0;const s=new Date().getHours();return t>e?s>=e&&s<t:s>=e||s<t}function Dy(n){const{oh:e,ch:t}=Us(n),s=new Date,i=new Date(s.getFullYear(),s.getMonth(),s.getDate(),e,0,0,0).getTime();return t>=e?i:s.getHours()<t?i-864e5:i}async function Ou(n){var a,c;if(n=n||f.roomData,!n||n.status!=="playing"){Me();return}if(!li(n)){Me();return}if(!f.uid)return;const e=Date.now(),t=n.market&&n.market.tickLease,s=t&&t.by!==f.uid&&(t.expiresAt||0)>e;if(f.isDriver){s&&Me();return}const i=n.hostId===f.uid,r=n.hostId&&((c=(a=n.players)==null?void 0:a[n.hostId])==null?void 0:c.connected)!==!1;if(s||!i&&r)return;await Mu()&&xy()}function xy(){f.tickTimer||(f.isDriver=!0,f.tickLeaseRenewAt=Date.now(),f.tickTimer=setInterval(async()=>{const n=f.roomData;if(!n||n.status!=="playing"){Me();return}if(!li(n)){Me();return}try{if(Date.now()-f.tickLeaseRenewAt>=vy){if(!await Mu()){Me();return}f.tickLeaseRenewAt=Date.now()}await U_(f.roomCode,n),await B_(f.roomCode,n),await j_(f.roomCode,n),await sv(f.roomCode,n,f.liveState)}catch(e){console.error("[tick] 시장 틱 오류:",e)}},rr))}function Me(){f.tickTimer&&(clearInterval(f.tickTimer),f.tickTimer=null),f.isDriver=!1}async function Ly(){if(!f.roomCode||!f.uid)return;const n=f.roomCode;try{await ye(U(L,`rooms/${n}/market/tickLease`),e=>e&&e.by===f.uid?null:e)}catch{}}function $y(){f.driverWatch||(f.driverWatch=setInterval(()=>{Ou(f.roomData)},yy))}function hr(){f.driverWatch&&(clearInterval(f.driverWatch),f.driverWatch=null)}function Fy(){Bs(),f.clockTimer=setInterval(()=>{const n=f.roomData;if(!n||n.status!=="playing")return;const e=!li(n),t=document.getElementById("marketClosed");t&&(t.classList.toggle("hidden",!e),e&&(t.textContent=`🌙 장 마감 — 매일 ${String(Us(n).oh).padStart(2,"0")}:00 개장 (${String(Us(n).ch%24).padStart(2,"0")}:00 마감)`)),!e&&(Uv(Date.now()-(n.startedAt||Date.now())),uu(),Fv(n))},250)}function Bs(){f.clockTimer&&(clearInterval(f.clockTimer),f.clockTimer=null)}function xi(){Ly(),Me(),hr(),Bs(),Nu(),mo(),f.roomRef&&(lo(f.roomRef),f.roomRef=null),Fs(null),location.href=ku()}function Uy(n){const e="",t=(s,i)=>{const r=document.getElementById(s);r&&(r.href=i)};t("navBoard",Su(n)),t("navWiki",Tu(n,e)),t("navAdmin",Ru(n))}async function Ka(){if(!f.roomCode||!f.roomData){B("복사할 시장 데이터가 없습니다","err");return}const n={roomCode:f.roomCode,status:f.roomData.status,startedAt:f.roomData.startedAt||null,marketTick:f.roomData.marketTick||Date.now(),latestNews:f.roomData.latestNews||null,botFeed:f.roomData.botFeed||[],stocks:f.roomData.stocks||{},players:f.roomData.players||{},logs:f.roomData.logs||{}},e=JSON.stringify(n,null,2);try{await navigator.clipboard.writeText(e),B("STONK Board에 가져올 시장 데이터를 복사했습니다")}catch{prompt("STONK Board 관리자 화면에 붙여넣을 시장 데이터입니다:",e)}}function Mn(){return Math.max(1,Math.floor(Number(document.getElementById("qtyInput").value)||1))}async function Li(n){var a,c;const{roomCode:e,roomData:t,uid:s,nickname:i,selectedStockId:r}=f;if(!t||t.status!=="playing")return;if(!r){B("종목을 먼저 선택하세요","err");return}const o=((c=(a=t.stocks)==null?void 0:a[r])==null?void 0:c.name)||"";try{n==="buy"?(await nu(e,s,i,r,Mn(),t),B(`${o} 매수 체결!`,"up")):n==="sell"?(await ho(e,s,i,r,Mn(),t),B(`${o} 매도 체결!`,"down")):n==="sellAll"&&(await z_(e,s,i,r,t),B(`${o} 전량 매도 체결!`,"down")),ov("tradeMsg","",!1)}catch(l){B(l.message,"err")}}function Hs(n){return Math.floor(Number(document.getElementById(n).value)||0)}function By(n){var s,i,r;const e=(r=(i=(s=f.roomData)==null?void 0:s.stocks)==null?void 0:i[n])==null?void 0:r.price;if(!e)return;const t=(o,a)=>{const c=document.getElementById(o);c&&(c.value=a)};t("limitPrice",e),t("stopLoss",Math.round(e*.95)),t("takeProfit",Math.round(e*1.1))}async function qa(n){var l,d;const{roomCode:e,roomData:t,uid:s,nickname:i,selectedStockId:r}=f;if(!t||t.status!=="playing")return;if(!r)return B("종목을 먼저 선택하세요","err");const o=Hs("limitPrice");if(!o)return B("지정가를 입력하세요","err");const a=document.getElementById("limitTif").value,c=((d=(l=t.stocks)==null?void 0:l[r])==null?void 0:d.name)||"";try{await Ms(e,s,i,r,{side:n,trigger:n==="buy"?"below":"above",tif:a,label:"지정가"},Mn(),o,t),B(`${c} 지정가 ${n==="buy"?"매수":"매도"} 등록!`,n==="buy"?"up":"down")}catch(u){B(u.message,"err")}}async function Hy(){var l,d,u,h,p;const{roomCode:n,roomData:e,uid:t,nickname:s,selectedStockId:i}=f;if(!e||e.status!=="playing")return;if(!i)return B("종목을 먼저 선택하세요","err");const r=((u=(d=(l=e.players)==null?void 0:l[t])==null?void 0:d.holdings)==null?void 0:u[i])||0;if(r<1)return B("보유한 종목에만 설정할 수 있어요","err");const o=Hs("stopLoss"),a=Hs("takeProfit");if(!o&&!a)return B("손절가 또는 익절가를 입력하세요","err");const c=((p=(h=e.stocks)==null?void 0:h[i])==null?void 0:p.name)||"";try{o&&await Ms(n,t,s,i,{side:"sell",trigger:"below",tif:"gtc",label:"손절"},r,o,e),a&&await Ms(n,t,s,i,{side:"sell",trigger:"above",tif:"gtc",label:"익절"},r,a,e),B(`${c} 손절·익절 설정 완료 (보유 ${r}주)`,"down")}catch(m){B(m.message,"err")}}async function Wy(){var d,u,h,p;const{roomCode:n,roomData:e,uid:t,nickname:s,selectedStockId:i}=f;if(!e||e.status!=="playing")return;if(!i)return B("종목을 먼저 선택하세요","err");const r=Mn(),o=Math.max(2,Math.min(10,Hs("splitCount")||3)),a=((u=(d=e.stocks)==null?void 0:d[i])==null?void 0:u.price)||0;if(!a)return;const c=Math.floor(r/o);if(c<1)return B(`분할하려면 수량이 최소 ${o}주 이상이어야 해요`,"err");const l=((p=(h=e.stocks)==null?void 0:h[i])==null?void 0:p.name)||"";try{for(let m=0;m<o;m++){const v=Math.round(a*(1-m*.015));await Ms(n,t,s,i,{side:"buy",trigger:"below",tif:"gtc",label:`분할${m+1}`},c,v,e)}B(`${l} ${o}회 분할매수 등록! (회당 ${c}주)`,"up")}catch(m){B(m.message,"err")}}async function Vy(n){try{await V_(f.roomCode,n),B("예약 주문 취소됨")}catch(e){B(e.message,"err")}}async function jy(){const{roomCode:n,roomData:e,uid:t}=f,s=e==null?void 0:e.ipo;if(!s||s.status!=="subscribing"){B("청약 가능한 공모주가 없습니다","err");return}const i=Math.max(1,Math.floor(Number(document.getElementById("ipoQty").value)||0));try{await H_(n,t,i,e),B(`${s.name} ${i.toLocaleString("ko-KR")}주 청약 완료!`,"up")}catch(r){B(r.message,"err")}}async function Gy(){const n=f.nickname||"",e=prompt("사용할 닉네임을 입력하세요 (최대 10자)",n);if(e===null)return;const t=e.trim().slice(0,10);if(!t){B("닉네임을 입력하세요","err");return}f.nickname=t;try{localStorage.setItem("mb_nickname",t),localStorage.setItem("stonk:lastNickname",t)}catch{}try{f.uid&&f.roomCode&&await tn(U(L,`rooms/${f.roomCode}/players/${f.uid}/nickname`),t)}catch(s){console.warn("[nickname] 저장 실패:",s)}B(`닉네임을 '${t}'(으)로 변경했습니다`,"up")}function zy(){var r,o,a,c,l,d,u,h,p,m,v,C,I,g,w,S,b,k,P;(r=document.querySelector(".tnav-acct"))==null||r.addEventListener("click",Gy),(o=document.getElementById("btnNickname"))==null||o.addEventListener("click",()=>{const _=document.getElementById("nicknameInput").value.trim();_&&(f.nickname=_,localStorage.setItem("mb_nickname",_),Au(ci))}),(a=document.getElementById("nicknameInput"))==null||a.addEventListener("keydown",_=>{_.key==="Enter"&&document.getElementById("btnNickname").click()}),(c=document.getElementById("btnWaitHome"))==null||c.addEventListener("click",xi),(l=document.getElementById("btnCopyCode2"))==null||l.addEventListener("click",Ka),(d=document.getElementById("btnCopyMarketBoard"))==null||d.addEventListener("click",Ka),(u=document.getElementById("btnLeaveGame"))==null||u.addEventListener("click",xi);const n=_=>{const y=_.target.closest("[data-star]");if(y){_.stopPropagation(),dv(y.dataset.star),he();return}const R=_.target.closest(".rank-item");R&&Ay(R.dataset.id)};(h=document.getElementById("stockList"))==null||h.addEventListener("click",n),(p=document.getElementById("screenerList"))==null||p.addEventListener("click",n),Ga("stockList"),Ga("screenerList"),window.addEventListener("scroll",()=>{os=null,go()},!0),Ry(),(m=document.getElementById("themeToggle"))==null||m.addEventListener("click",Ny),(v=document.querySelector(".tnav-brand"))==null||v.addEventListener("click",()=>un("home")),(C=document.getElementById("tnavTabs"))==null||C.addEventListener("click",_=>{const y=_.target.closest(".tnav-tab");y&&un(y.dataset.tab)}),(I=document.getElementById("btnDetailBack"))==null||I.addEventListener("click",()=>un("home"));const e=document.getElementById("globalSearch");e&&e.addEventListener("input",()=>{Ni(e.value);const _=document.getElementById("screen-game");_&&_.dataset.tab!=="home"&&un("home"),he()}),document.addEventListener("keydown",_=>{var R;if(_.key!=="/")return;const y=document.activeElement;y&&/^(input|textarea|select)$/i.test(y.tagName)||(R=document.getElementById("screen-game"))!=null&&R.classList.contains("hidden")||(_.preventDefault(),e==null||e.focus())}),(g=document.getElementById("homeSeg"))==null||g.addEventListener("click",_=>{const y=_.target.closest(".seg-btn");y&&(document.querySelectorAll("#homeSeg .seg-btn").forEach(R=>R.classList.toggle("is-active",R===y)),Oa(y.dataset.home==="sectors"?"up":"value"),he())}),(w=document.getElementById("homeFilters"))==null||w.addEventListener("click",_=>{const y=_.target.closest(".fchip");y&&(y.dataset.filter&&(document.querySelectorAll("#homeFilters [data-filter]").forEach(R=>R.classList.toggle("is-active",R===y)),yv(y.dataset.filter)),y.dataset.sort&&(document.querySelectorAll("#homeFilters [data-sort]").forEach(R=>R.classList.toggle("is-active",R===y)),Oa(y.dataset.sort)),he())}),(S=document.getElementById("screenerPresets"))==null||S.addEventListener("click",_=>{const y=_.target.closest("[data-preset]");y&&(wv(y.dataset.preset),he())}),(b=document.getElementById("accountView"))==null||b.addEventListener("click",_=>{const y=_.target.closest("[data-acct]");y&&(bv(y.dataset.acct),he())}),(k=document.getElementById("feedView"))==null||k.addEventListener("click",_=>{if(_.target.closest("#feedBoardLink")){const y=document.getElementById("navBoard");y&&y.href&&window.open(y.href,"_blank","noopener")}}),document.querySelectorAll(".qty-btn[data-qty]").forEach(_=>{_.addEventListener("click",()=>{const y=document.getElementById("qtyInput");y.value=Math.max(1,Mn()+Number(_.dataset.qty))})}),document.getElementById("btnMaxQty").addEventListener("click",()=>{var D,J,ie,Fe;const{roomData:_,uid:y,selectedStockId:R}=f,N=(J=(D=_==null?void 0:_.stocks)==null?void 0:D[R])==null?void 0:J.price,X=((Fe=(ie=_==null?void 0:_.players)==null?void 0:ie[y])==null?void 0:Fe.cash)||0;N&&(document.getElementById("qtyInput").value=Math.max(1,Math.floor(X/(N*1.0002))))}),document.getElementById("btnBuy").addEventListener("click",()=>Li("buy")),document.getElementById("btnSell").addEventListener("click",()=>Li("sell")),document.getElementById("btnSellAll").addEventListener("click",()=>Li("sellAll")),document.getElementById("orderTabs").addEventListener("click",_=>{const y=_.target.closest(".order-tab");if(!y)return;const R=y.dataset.tab;document.querySelectorAll(".order-tab").forEach(N=>N.classList.toggle("is-active",N===y)),document.querySelectorAll(".order-pane").forEach(N=>N.classList.toggle("hidden",N.dataset.pane!==R))}),document.getElementById("btnLimitBuy").addEventListener("click",()=>qa("buy")),document.getElementById("btnLimitSell").addEventListener("click",()=>qa("sell")),document.getElementById("btnSetStop").addEventListener("click",Hy),document.getElementById("btnSplitBuy").addEventListener("click",Wy),document.getElementById("orderList").addEventListener("click",_=>{const y=_.target.closest("[data-cancel]");y&&Vy(y.dataset.cancel)}),document.getElementById("btnAlert").addEventListener("click",()=>{var J;const{roomData:_,selectedStockId:y}=f,R=(J=_==null?void 0:_.stocks)==null?void 0:J[y];if(!R)return B("종목을 먼저 선택하세요","err");try{window.Notification&&Notification.permission==="default"&&Notification.requestPermission()}catch{}const N=fv(R.name),X=prompt(`${R.name} 가격 알림 설정
현재가 ${R.price.toLocaleString("ko-KR")}원
알림받을 가격을 입력하세요 (0 또는 빈칸 = 해제):`,N||R.price);if(X===null)return;const D=Math.floor(Number(X)||0);hv(R.name,D),B(D?`${R.name} ${D.toLocaleString("ko-KR")}원 알림 설정됨`:`${R.name} 알림 해제됨`),he()}),document.getElementById("btnApplyIpo").addEventListener("click",jy);const t=document.getElementById("stockSearch"),s=document.getElementById("stockSearchClear");t&&t.addEventListener("input",()=>{Ni(t.value),s&&(s.hidden=!t.value),he()}),s&&s.addEventListener("click",()=>{t.value="",Ni(""),s.hidden=!0,t.focus(),he()});const i=document.getElementById("marketStatusChip");i&&i.addEventListener("click",()=>{const _=document.getElementById("marketStatusPanel");if(!_)return;const y=_.classList.toggle("hidden");i.setAttribute("aria-expanded",y?"false":"true"),!y&&f.roomData&&lu(f)}),(P=document.getElementById("btnBackHome"))==null||P.addEventListener("click",xi)}zy();
