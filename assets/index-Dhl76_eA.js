(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var mo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(n,e){if(!n)throw zt(e)},zt=function(n){return new Error("Firebase Database ("+Ga.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Au=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},cr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),s.push(t[h],t[u],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(za(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Au(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||u==null)throw new Pu;const d=r<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),u!==64){const m=l<<6&192|u;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ka=function(n){const e=za(n);return cr.encodeByteArray(e,!0)},is=function(n){return Ka(n).replace(/\./g,"")},rs=function(n){try{return cr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n){return qa(void 0,n)}function qa(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ou(t)||(n[t]=qa(n[t],e[t]));return n}function Ou(n){return n!=="__proto__"}/**
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
 */function xu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Du=()=>xu().__FIREBASE_DEFAULTS__,Lu=()=>{if(typeof process>"u"||typeof mo>"u")return;const n=mo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$u=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&rs(n[1]);return e&&JSON.parse(e)},lr=()=>{try{return Du()||Lu()||$u()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ya=n=>{var e,t;return(t=(e=lr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Fu=n=>{const e=Ya(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Qa=()=>{var n;return(n=lr())===null||n===void 0?void 0:n.config},Ja=n=>{var e;return(e=lr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Uu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[is(JSON.stringify(t)),is(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ur(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function Bu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Xa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hu(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Vu(){return Ga.NODE_ADMIN===!0}function ju(){try{return typeof indexedDB=="object"}catch{return!1}}function Gu(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="FirebaseError";class nt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=zu,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mn.prototype.create)}}class Mn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ku(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nt(i,a,s)}}function Ku(n,e){return n.replace(qu,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const qu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n){return JSON.parse(n)}function Z(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=yn(rs(r[0])||""),t=yn(rs(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Yu=function(n){const e=Za(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Qu=function(n){const e=Za(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function dt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function os(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function as(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function cs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(go(r)&&go(o)){if(!cs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function go(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,h;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),h=1518500249):(l=r^o^a,h=1859775393):u<60?(l=r&o|a&(r|o),h=2400959708):(l=r^o^a,h=3395469782);const d=(i<<5|i>>>27)+l+c+h+s[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Xu(n,e){const t=new Zu(n,e);return t.subscribe.bind(t)}class Zu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");eh(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=li),i.error===void 0&&(i.error=li),i.complete===void 0&&(i.complete=li);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function li(){}function Lt(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Us=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function re(n){return n&&n._delegate?n._delegate:n}class ft{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const it="[DEFAULT]";/**
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
 */class nh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new me;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ih(e))try{this.getOrInitializeService({instanceIdentifier:it})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=it){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=it){return this.instances.has(e)}getOptions(e=it){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sh(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=it){return this.component?this.component.multipleInstances?e:it:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sh(n){return n===it?void 0:n}function ih(n){return n.instantiationMode==="EAGER"}/**
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
 */class rh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const oh={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},ah=j.INFO,ch={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},lh=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=ch[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hr{constructor(e){this.name=e,this._logLevel=ah,this._logHandler=lh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const uh=(n,e)=>e.some(t=>n instanceof t);let _o,vo;function hh(){return _o||(_o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dh(){return vo||(vo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ec=new WeakMap,Oi=new WeakMap,tc=new WeakMap,ui=new WeakMap,dr=new WeakMap;function fh(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ke(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ec.set(t,n)}).catch(()=>{}),dr.set(e,n),e}function ph(n){if(Oi.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Oi.set(n,e)}let xi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||tc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ke(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function mh(n){xi=n(xi)}function gh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(hi(this),e,...t);return tc.set(s,e.sort?e.sort():[e]),Ke(s)}:dh().includes(n)?function(...e){return n.apply(hi(this),e),Ke(ec.get(this))}:function(...e){return Ke(n.apply(hi(this),e))}}function _h(n){return typeof n=="function"?gh(n):(n instanceof IDBTransaction&&ph(n),uh(n,hh())?new Proxy(n,xi):n)}function Ke(n){if(n instanceof IDBRequest)return fh(n);if(ui.has(n))return ui.get(n);const e=_h(n);return e!==n&&(ui.set(n,e),dr.set(e,n)),e}const hi=n=>dr.get(n);function vh(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Ke(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ke(o.result),c.oldVersion,c.newVersion,Ke(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const yh=["get","getKey","getAll","getAllKeys","count"],wh=["put","add","delete","clear"],di=new Map;function yo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(di.get(e))return di.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=wh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||yh.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return di.set(e,r),r}mh(n=>({...n,get:(e,t,s)=>yo(e,t)||n.get(e,t,s),has:(e,t)=>!!yo(e,t)||n.has(e,t)}));/**
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
 */class bh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Eh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Eh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Di="@firebase/app",wo="0.10.13";/**
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
 */const Me=new hr("@firebase/app"),Ih="@firebase/app-compat",Ch="@firebase/analytics-compat",kh="@firebase/analytics",Sh="@firebase/app-check-compat",Th="@firebase/app-check",Rh="@firebase/auth",Nh="@firebase/auth-compat",Ah="@firebase/database",Ph="@firebase/data-connect",Mh="@firebase/database-compat",Oh="@firebase/functions",xh="@firebase/functions-compat",Dh="@firebase/installations",Lh="@firebase/installations-compat",$h="@firebase/messaging",Fh="@firebase/messaging-compat",Uh="@firebase/performance",Bh="@firebase/performance-compat",Wh="@firebase/remote-config",Hh="@firebase/remote-config-compat",Vh="@firebase/storage",jh="@firebase/storage-compat",Gh="@firebase/firestore",zh="@firebase/vertexai-preview",Kh="@firebase/firestore-compat",qh="firebase",Yh="10.14.1";/**
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
 */const Li="[DEFAULT]",Qh={[Di]:"fire-core",[Ih]:"fire-core-compat",[kh]:"fire-analytics",[Ch]:"fire-analytics-compat",[Th]:"fire-app-check",[Sh]:"fire-app-check-compat",[Rh]:"fire-auth",[Nh]:"fire-auth-compat",[Ah]:"fire-rtdb",[Ph]:"fire-data-connect",[Mh]:"fire-rtdb-compat",[Oh]:"fire-fn",[xh]:"fire-fn-compat",[Dh]:"fire-iid",[Lh]:"fire-iid-compat",[$h]:"fire-fcm",[Fh]:"fire-fcm-compat",[Uh]:"fire-perf",[Bh]:"fire-perf-compat",[Wh]:"fire-rc",[Hh]:"fire-rc-compat",[Vh]:"fire-gcs",[jh]:"fire-gcs-compat",[Gh]:"fire-fst",[Kh]:"fire-fst-compat",[zh]:"fire-vertex","fire-js":"fire-js",[qh]:"fire-js-all"};/**
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
 */const ls=new Map,Jh=new Map,$i=new Map;function bo(n,e){try{n.container.addComponent(e)}catch(t){Me.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $t(n){const e=n.name;if($i.has(e))return Me.debug(`There were multiple attempts to register component ${e}.`),!1;$i.set(e,n);for(const t of ls.values())bo(t,n);for(const t of Jh.values())bo(t,n);return!0}function fr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n.settings!==void 0}/**
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
 */const Xh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qe=new Mn("app","Firebase",Xh);/**
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
 */class Zh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qe.create("app-deleted",{appName:this._name})}}/**
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
 */const qt=Yh;function nc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Li,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw qe.create("bad-app-name",{appName:String(i)});if(t||(t=Qa()),!t)throw qe.create("no-options");const r=ls.get(i);if(r){if(cs(t,r.options)&&cs(s,r.config))return r;throw qe.create("duplicate-app",{appName:i})}const o=new rh(i);for(const c of $i.values())o.addComponent(c);const a=new Zh(t,s,o);return ls.set(i,a),a}function sc(n=Li){const e=ls.get(n);if(!e&&n===Li&&Qa())return nc();if(!e)throw qe.create("no-app",{appName:n});return e}function Ye(n,e,t){var s;let i=(s=Qh[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Me.warn(a.join(" "));return}$t(new ft(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ed="firebase-heartbeat-database",td=1,wn="firebase-heartbeat-store";let fi=null;function ic(){return fi||(fi=vh(ed,td,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(wn)}catch(t){console.warn(t)}}}}).catch(n=>{throw qe.create("idb-open",{originalErrorMessage:n.message})})),fi}async function nd(n){try{const t=(await ic()).transaction(wn),s=await t.objectStore(wn).get(rc(n));return await t.done,s}catch(e){if(e instanceof nt)Me.warn(e.message);else{const t=qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Me.warn(t.message)}}}async function Eo(n,e){try{const s=(await ic()).transaction(wn,"readwrite");await s.objectStore(wn).put(e,rc(n)),await s.done}catch(t){if(t instanceof nt)Me.warn(t.message);else{const s=qe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Me.warn(s.message)}}}function rc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const sd=1024,id=30*24*60*60*1e3;class rd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ad(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Io();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=id}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Me.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Io(),{heartbeatsToSend:s,unsentEntries:i}=od(this._heartbeatsCache.heartbeats),r=is(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Me.warn(t),""}}}function Io(){return new Date().toISOString().substring(0,10)}function od(n,e=sd){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Co(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Co(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ad{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ju()?Gu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Co(n){return is(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function cd(n){$t(new ft("platform-logger",e=>new bh(e),"PRIVATE")),$t(new ft("heartbeat",e=>new rd(e),"PRIVATE")),Ye(Di,wo,n),Ye(Di,wo,"esm2017"),Ye("fire-js","")}cd("");var ld="firebase",ud="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(ld,ud,"app");function pr(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function oc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hd=oc,ac=new Mn("auth","Firebase",oc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new hr("@firebase/auth");function dd(n,...e){us.logLevel<=j.WARN&&us.warn(`Auth (${qt}): ${n}`,...e)}function qn(n,...e){us.logLevel<=j.ERROR&&us.error(`Auth (${qt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,...e){throw mr(n,...e)}function Ie(n,...e){return mr(n,...e)}function cc(n,e,t){const s=Object.assign(Object.assign({},hd()),{[e]:t});return new Mn("auth","Firebase",s).create(e,{appName:n.name})}function lt(n){return cc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mr(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return ac.create(n,...e)}function P(n,e,...t){if(!n)throw mr(e,...t)}function Te(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qn(e),new Error(e)}function xe(n,e){n||Te(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fd(){return ko()==="http:"||ko()==="https:"}function ko(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fd()||Wu()||"connection"in navigator)?navigator.onLine:!0}function md(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t){this.shortDelay=e,this.longDelay=t,xe(t>e,"Short delay should be less than long delay!"),this.isMobile=ur()||Xa()}get(){return pd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(n,e){xe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=new On(3e4,6e4);function _r(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Yt(n,e,t,s,i={}){return uc(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Kt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},r);return Bu()||(l.referrerPolicy="no-referrer"),lc.fetch()(hc(n,n.config.apiHost,t,a),l)})}async function uc(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},gd),e);try{const i=new yd(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw jn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw jn(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cc(n,h,l);Oe(n,h)}}catch(i){if(i instanceof nt)throw i;Oe(n,"network-request-failed",{message:String(i)})}}async function vd(n,e,t,s,i={}){const r=await Yt(n,e,t,s,i);return"mfaPendingCredential"in r&&Oe(n,"multi-factor-auth-required",{_serverResponse:r}),r}function hc(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?gr(n.config,i):`${n.config.apiScheme}://${i}`}class yd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ie(this.auth,"network-request-failed")),_d.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Ie(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(n,e){return Yt(n,"POST","/v1/accounts:delete",e)}async function dc(n,e){return Yt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bd(n,e=!1){const t=re(n),s=await t.getIdToken(e),i=vr(s);P(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:un(pi(i.auth_time)),issuedAtTime:un(pi(i.iat)),expirationTime:un(pi(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function pi(n){return Number(n)*1e3}function vr(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return qn("JWT malformed, contained fewer than 3 sections"),null;try{const i=rs(t);return i?JSON.parse(i):(qn("Failed to decode base64 JWT payload"),null)}catch(i){return qn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function So(n){const e=vr(n);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof nt&&Ed(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Ed({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=un(this.lastLoginAt),this.creationTime=un(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hs(n){var e;const t=n.auth,s=await n.getIdToken(),i=await bn(n,dc(t,{idToken:s}));P(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?fc(r.providerUserInfo):[],a=kd(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ui(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function Cd(n){const e=re(n);await hs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kd(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function fc(n){return n.map(e=>{var{providerId:t}=e,s=pr(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sd(n,e){const t=await uc(n,{},async()=>{const s=Kt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=hc(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Td(n,e){return Yt(n,"POST","/v2/accounts:revokeToken",_r(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):So(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){P(e.length!==0,"internal-error");const t=So(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Sd(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new At;return s&&(P(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(P(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new At,this.toJSON())}_performRefresh(){return Te("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n,e){P(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Re{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=pr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Id(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ui(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await bn(this,this.stsTokenManager.getToken(this.auth,e));return P(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bd(this,e)}reload(){return Cd(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await hs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(lt(this.auth));const e=await this.getIdToken();return await bn(this,wd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,l,h;const u=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(a=t.tenantId)!==null&&a!==void 0?a:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=t.createdAt)!==null&&l!==void 0?l:void 0,g=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:S,isAnonymous:b,providerData:C,stsTokenManager:_}=t;P(y&&_,e,"internal-error");const v=At.fromJSON(this.name,_);P(typeof y=="string",e,"internal-error"),$e(u,e.name),$e(d,e.name),P(typeof S=="boolean",e,"internal-error"),P(typeof b=="boolean",e,"internal-error"),$e(f,e.name),$e(m,e.name),$e(w,e.name),$e(k,e.name),$e(I,e.name),$e(g,e.name);const T=new Re({uid:y,auth:e,email:d,emailVerified:S,displayName:u,isAnonymous:b,photoURL:m,phoneNumber:f,tenantId:w,stsTokenManager:v,createdAt:I,lastLoginAt:g});return C&&Array.isArray(C)&&(T.providerData=C.map($=>Object.assign({},$))),k&&(T._redirectEventId=k),T}static async _fromIdTokenResponse(e,t,s=!1){const i=new At;i.updateFromServerResponse(t);const r=new Re({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await hs(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];P(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?fc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new At;a.updateFromIdToken(s);const c=new Re({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Ui(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map;function Ne(n){xe(n instanceof Function,"Expected a class definition");let e=To.get(n);return e?(xe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,To.set(n,e),e)}/**
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
 */class pc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pc.type="NONE";const Ro=pc;/**
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
 */function Yn(n,e,t){return`firebase:${n}:${e}:${t}`}class Pt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Yn(this.userKey,i.apiKey,r),this.fullPersistenceKey=Yn("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Pt(Ne(Ro),e,s);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Ne(Ro);const o=Yn(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const h=await l._get(o);if(h){const u=Re._fromJSON(e,h);l!==r&&(a=u),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Pt(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Pt(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wc(e))return"Blackberry";if(bc(e))return"Webos";if(gc(e))return"Safari";if((e.includes("chrome/")||_c(e))&&!e.includes("edge/"))return"Chrome";if(yc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function mc(n=le()){return/firefox\//i.test(n)}function gc(n=le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _c(n=le()){return/crios\//i.test(n)}function vc(n=le()){return/iemobile/i.test(n)}function yc(n=le()){return/android/i.test(n)}function wc(n=le()){return/blackberry/i.test(n)}function bc(n=le()){return/webos/i.test(n)}function yr(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Rd(n=le()){var e;return yr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Nd(){return Hu()&&document.documentMode===10}function Ec(n=le()){return yr(n)||yc(n)||bc(n)||wc(n)||/windows phone/i.test(n)||vc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n,e=[]){let t;switch(n){case"Browser":t=No(le());break;case"Worker":t=`${No(le())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qt}/${s}`}/**
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
 */class Ad{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Pd(n,e={}){return Yt(n,"GET","/v2/passwordPolicy",_r(n,e))}/**
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
 */const Md=6;class Od{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Md,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ao(this),this.idTokenSubscription=new Ao(this),this.beforeStateQueue=new Ad(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ac,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ne(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Pt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await dc(this,{idToken:e}),s=await Re._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=md()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(lt(this));const t=e?re(e):null;return t&&P(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ne(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pd(this),t=new Od(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Td(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ne(e)||this._popupRedirectResolver;P(t,this,"argument-error"),this.redirectPersistenceManager=await Pt.create(this,[Ne(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ic(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&dd(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wr(n){return re(n)}class Ao{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xu(t=>this.observer=t)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dd(n){br=n}function Ld(n){return br.loadJS(n)}function $d(){return br.gapiScript}function Fd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n,e){const t=fr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(cs(r,e??{}))return i;Oe(i,"already-initialized")}return t.initialize({options:e})}function Bd(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ne);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Wd(n,e,t){const s=wr(n);P(s._canInitEmulator,s,"emulator-config-failed"),P(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Cc(e),{host:o,port:a}=Hd(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),Vd()}function Cc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Hd(n){const e=Cc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Po(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Po(o)}}}function Po(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Vd(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Te("not implemented")}_getIdTokenResponse(e){return Te("not implemented")}_linkToIdToken(e,t){return Te("not implemented")}_getReauthenticationResolver(e){return Te("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(n,e){return vd(n,"POST","/v1/accounts:signInWithIdp",_r(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="http://localhost";class pt extends kc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Oe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=pr(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new pt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Mt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Mt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mt(e,t)}buildRequest(){const e={requestUri:jd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Kt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xn extends Sc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends xn{constructor(){super("facebook.com")}static credential(e){return pt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ue.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pt._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Be.credential(t,s)}catch{return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com";Be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends xn{constructor(){super("github.com")}static credential(e){return pt._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.GITHUB_SIGN_IN_METHOD="github.com";We.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends xn{constructor(){super("twitter.com")}static credential(e,t){return pt._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return He.credential(t,s)}catch{return null}}}He.TWITTER_SIGN_IN_METHOD="twitter.com";He.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Re._fromIdTokenResponse(e,s,i),o=Mo(s);return new Ft({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Mo(s);return new Ft({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Mo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends nt{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ds.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new ds(e,t,s,i)}}function Tc(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ds._fromErrorAndOperation(n,r,e,s):r})}async function Gd(n,e,t=!1){const s=await bn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ft._forOperation(n,"link",s)}/**
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
 */async function zd(n,e,t=!1){const{auth:s}=n;if(je(s.app))return Promise.reject(lt(s));const i="reauthenticate";try{const r=await bn(n,Tc(s,i,e,n),t);P(r.idToken,s,"internal-error");const o=vr(r.idToken);P(o,s,"internal-error");const{sub:a}=o;return P(n.uid===a,s,"user-mismatch"),Ft._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Oe(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(n,e,t=!1){if(je(n.app))return Promise.reject(lt(n));const s="signIn",i=await Tc(n,s,e),r=await Ft._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function qd(n,e,t,s){return re(n).onIdTokenChanged(e,t,s)}function Yd(n,e,t){return re(n).beforeAuthStateChanged(e,t)}function Qd(n,e,t,s){return re(n).onAuthStateChanged(e,t,s)}const fs="__sak";/**
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
 */class Rc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fs,"1"),this.storage.removeItem(fs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=1e3,Xd=10;class Nc extends Rc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ec(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Nd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Xd):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Jd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nc.type="LOCAL";const Zd=Nc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends Rc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ac.type="SESSION";const Pc=Ac;/**
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
 */function ef(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Bs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await ef(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class tf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Er("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(u){const d=u;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function nf(n){Ce().location.href=n}/**
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
 */function Mc(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function sf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function of(){return Mc()?self:null}/**
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
 */const Oc="firebaseLocalStorageDb",af=1,ps="firebaseLocalStorage",xc="fbase_key";class Dn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ws(n,e){return n.transaction([ps],e?"readwrite":"readonly").objectStore(ps)}function cf(){const n=indexedDB.deleteDatabase(Oc);return new Dn(n).toPromise()}function Bi(){const n=indexedDB.open(Oc,af);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ps,{keyPath:xc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ps)?e(s):(s.close(),await cf(),e(await Bi()))})})}async function Oo(n,e,t){const s=Ws(n,!0).put({[xc]:e,value:t});return new Dn(s).toPromise()}async function lf(n,e){const t=Ws(n,!1).get(e),s=await new Dn(t).toPromise();return s===void 0?null:s.value}function xo(n,e){const t=Ws(n,!0).delete(e);return new Dn(t).toPromise()}const uf=800,hf=3;class Dc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>hf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(of()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sf(),!this.activeServiceWorker)return;this.sender=new tf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bi();return await Oo(e,fs,"1"),await xo(e,fs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Oo(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>lf(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ws(i,!1).getAll();return new Dn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dc.type="LOCAL";const df=Dc;new On(3e4,6e4);/**
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
 */function ff(n,e){return e?Ne(e):(P(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ir extends kc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pf(n){return Kd(n.auth,new Ir(n),n.bypassAuthState)}function mf(n){const{auth:e,user:t}=n;return P(t,e,"internal-error"),zd(t,new Ir(n),n.bypassAuthState)}async function gf(n){const{auth:e,user:t}=n;return P(t,e,"internal-error"),Gd(t,new Ir(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pf;case"linkViaPopup":case"linkViaRedirect":return gf;case"reauthViaPopup":case"reauthViaRedirect":return mf;default:Oe(this.auth,"internal-error")}}resolve(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new On(2e3,1e4);class St extends Lc{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,St.currentPopupAction&&St.currentPopupAction.cancel(),St.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){xe(this.filter.length===1,"Popup operations only handle one event");const e=Er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,St.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ie(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_f.get())};e()}}St.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="pendingRedirect",Qn=new Map;class yf extends Lc{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Qn.get(this.auth._key());if(!e){try{const s=await wf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Qn.set(this.auth._key(),e)}return this.bypassAuthState||Qn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wf(n,e){const t=If(e),s=Ef(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function bf(n,e){Qn.set(n._key(),e)}function Ef(n){return Ne(n._redirectPersistence)}function If(n){return Yn(vf,n.config.apiKey,n.name)}async function Cf(n,e,t=!1){if(je(n.app))return Promise.reject(lt(n));const s=wr(n),i=ff(s,e),o=await new yf(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=10*60*1e3;class Sf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!$c(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ie(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Do(e))}saveEventToCache(e){this.cachedEventUids.add(Do(e)),this.lastProcessedEventTime=Date.now()}}function Do(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $c({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $c(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rf(n,e={}){return Yt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Af=/^https?/;async function Pf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Rf(n);for(const t of e)try{if(Mf(t))return}catch{}Oe(n,"unauthorized-domain")}function Mf(n){const e=Fi(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Af.test(t))return!1;if(Nf.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Of=new On(3e4,6e4);function Lo(){const n=Ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xf(n){return new Promise((e,t)=>{var s,i,r;function o(){Lo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lo(),t(Ie(n,"network-request-failed"))},timeout:Of.get()})}if(!((i=(s=Ce().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ce().gapi)===null||r===void 0)&&r.load)o();else{const a=Fd("iframefcb");return Ce()[a]=()=>{gapi.load?o():t(Ie(n,"network-request-failed"))},Ld(`${$d()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Jn=null,e})}let Jn=null;function Df(n){return Jn=Jn||xf(n),Jn}/**
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
 */const Lf=new On(5e3,15e3),$f="__/auth/iframe",Ff="emulator/auth/iframe",Uf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wf(n){const e=n.config;P(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gr(e,Ff):`https://${n.config.authDomain}/${$f}`,s={apiKey:e.apiKey,appName:n.name,v:qt},i=Bf.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Kt(s).slice(1)}`}async function Hf(n){const e=await Df(n),t=Ce().gapi;return P(t,n,"internal-error"),e.open({where:document.body,url:Wf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uf,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ie(n,"network-request-failed"),a=Ce().setTimeout(()=>{r(o)},Lf.get());function c(){Ce().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Vf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jf=500,Gf=600,zf="_blank",Kf="http://localhost";class $o{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qf(n,e,t,s=jf,i=Gf){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Vf),{width:s.toString(),height:i.toString(),top:r,left:o}),l=le().toLowerCase();t&&(a=_c(l)?zf:t),mc(l)&&(e=e||Kf,c.scrollbars="yes");const h=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Rd(l)&&a!=="_self")return Yf(e||"",a),new $o(null);const u=window.open(e||"",a,h);P(u,n,"popup-blocked");try{u.focus()}catch{}return new $o(u)}function Yf(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Qf="__/auth/handler",Jf="emulator/auth/handler",Xf=encodeURIComponent("fac");async function Fo(n,e,t,s,i,r){P(n.config.authDomain,n,"auth-domain-config-required"),P(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:qt,eventId:i};if(e instanceof Sc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",os(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries({}))o[h]=u}if(e instanceof xn){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),l=c?`#${Xf}=${encodeURIComponent(c)}`:"";return`${Zf(n)}?${Kt(a).slice(1)}${l}`}function Zf({config:n}){return n.emulator?gr(n,Jf):`https://${n.authDomain}/${Qf}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="webStorageSupport";class ep{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pc,this._completeRedirectFn=Cf,this._overrideRedirectResult=bf}async _openPopup(e,t,s,i){var r;xe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Fo(e,t,s,Fi(),i);return qf(e,o,Er())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Fo(e,t,s,Fi(),i);return nf(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(xe(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Hf(e),s=new Sf(e);return t.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mi,{type:mi},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[mi];o!==void 0&&t(!!o),Oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ec()||gc()||yr()}}const tp=ep;var Uo="@firebase/auth",Bo="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ip(n){$t(new ft("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ic(n)},l=new xd(s,i,r,c);return Bd(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),$t(new ft("auth-internal",e=>{const t=wr(e.getProvider("auth").getImmediate());return(s=>new np(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(Uo,Bo,sp(n)),Ye(Uo,Bo,"esm2017")}/**
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
 */const rp=5*60,op=Ja("authIdTokenMaxAge")||rp;let Wo=null;const ap=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>op)return;const i=t==null?void 0:t.token;Wo!==i&&(Wo=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cp(n=sc()){const e=fr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ud(n,{popupRedirectResolver:tp,persistence:[df,Zd,Pc]}),s=Ja("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=ap(r.toString());Yd(t,o,()=>o(t.currentUser)),qd(t,a=>o(a))}}const i=Ya("auth");return i&&Wd(t,`http://${i}`),t}function lp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Dd({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Ie("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",lp().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ip("Browser");var Ho={};const Vo="@firebase/database",jo="1.0.8";/**
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
 */let Fc="";function up(n){Fc=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Z(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:yn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return we(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hp(e)}}catch{}return new dp},at=Uc("localStorage"),fp=Uc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new hr("@firebase/database"),Bc=function(){let n=1;return function(){return n++}}(),Wc=function(n){const e=th(n),t=new Ju;t.update(e);const s=t.digest();return cr.encodeByteArray(s)},Ln=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ln.apply(null,s):typeof s=="object"?e+=Z(s):e+=s,e+=" "}return e};let hn=null,Go=!0;const pp=function(n,e){E(!0,"Can't turn on custom loggers persistently."),Ot.logLevel=j.VERBOSE,hn=Ot.log.bind(Ot)},ne=function(...n){if(Go===!0&&(Go=!1,hn===null&&fp.get("logging_enabled")===!0&&pp()),hn){const e=Ln.apply(null,n);hn(e)}},$n=function(n){return function(...e){ne(n,...e)}},Wi=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ln(...n);Ot.error(e)},De=function(...n){const e=`FIREBASE FATAL ERROR: ${Ln(...n)}`;throw Ot.error(e),new Error(e)},ce=function(...n){const e="FIREBASE WARNING: "+Ln(...n);Ot.warn(e)},mp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},gp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ut="[MIN_NAME]",mt="[MAX_NAME]",bt=function(n,e){if(n===e)return 0;if(n===Ut||e===mt)return-1;if(e===Ut||n===mt)return 1;{const t=zo(n),s=zo(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},_p=function(n,e){return n===e?0:n<e?-1:1},nn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Z(e))},Cr=function(n){if(typeof n!="object"||n===null)return Z(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Z(e[s]),t+=":",t+=Cr(n[e[s]]);return t+="}",t},Hc=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function se(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Vc=function(n){E(!Hs(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const h=l.join("");let u="";for(c=0;c<64;c+=8){let d=parseInt(h.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},vp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const bp=new RegExp("^-?(0*)\\d{1,10}$"),Ep=-2147483648,Ip=2147483647,zo=function(n){if(bp.test(n)){const e=Number(n);if(e>=Ep&&e<=Ip)return e}return null},Qt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ce("Exception was thrown by user callback.",t),e},Math.floor(0))}},Cp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},dn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class kp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class Xn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="5",jc="v",Gc="s",zc="r",Kc="f",qc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yc="ls",Qc="p",Hi="ac",Jc="websocket",Xc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=at.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&at.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Tp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function el(n,e,t){E(typeof e=="string","typeof type must == string"),E(typeof t=="object","typeof params must == object");let s;if(e===Jc)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Xc)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Tp(n)&&(t.ns=n.namespace);const i=[];return se(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this.counters_={}}incrementCounter(e,t=1){we(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Mu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi={},_i={};function Sr(n){const e=n.toString();return gi[e]||(gi[e]=new Rp),gi[e]}function Np(n,e){const t=n.toString();return _i[t]||(_i[t]=e()),_i[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Qt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="start",Pp="close",Mp="pLPCommand",Op="pRTLPCB",tl="id",nl="pw",sl="ser",xp="cb",Dp="seg",Lp="ts",$p="d",Fp="dframe",il=1870,rl=30,Up=il-rl,Bp=25e3,Wp=3e4;class Tt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$n(e),this.stats_=Sr(t),this.urlFn=c=>(this.appCheckToken&&(c[Hi]=this.appCheckToken),el(t,Xc,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ap(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Wp)),gp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Tr((...r)=>{const[o,a,c,l,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ko)this.id=a,this.password=c;else if(o===Pp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ko]="t",s[sl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[xp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[jc]=kr,this.transportSessionId&&(s[Gc]=this.transportSessionId),this.lastSessionId&&(s[Yc]=this.lastSessionId),this.applicationId&&(s[Qc]=this.applicationId),this.appCheckToken&&(s[Hi]=this.appCheckToken),typeof location<"u"&&location.hostname&&qc.test(location.hostname)&&(s[zc]=Kc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tt.forceAllow_=!0}static forceDisallow(){Tt.forceDisallow_=!0}static isAvailable(){return Tt.forceAllow_?!0:!Tt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vp()&&!yp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ka(t),i=Hc(s,Up);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Fp]="t",s[tl]=e,s[nl]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Z(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Tr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Bc(),window[Mp+this.uniqueCallbackIdentifier]=e,window[Op+this.uniqueCallbackIdentifier]=t,this.myIFrame=Tr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ne("frame writing exception"),a.stack&&ne(a.stack),ne(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[tl]=this.myID,e[nl]=this.myPW,e[sl]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rl+s.length<=il;){const o=this.pendingSegs.shift();s=s+"&"+Dp+i+"="+o.seg+"&"+Lp+i+"="+o.ts+"&"+$p+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Bp)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=16384,Vp=45e3;let ms=null;typeof MozWebSocket<"u"?ms=MozWebSocket:typeof WebSocket<"u"&&(ms=WebSocket);class ge{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$n(this.connId),this.stats_=Sr(t),this.connURL=ge.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[jc]=kr,typeof location<"u"&&location.hostname&&qc.test(location.hostname)&&(o[zc]=Kc),t&&(o[Gc]=t),s&&(o[Yc]=s),i&&(o[Hi]=i),r&&(o[Qc]=r),el(e,Jc,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,at.set("previous_websocket_failure",!0);try{let s;Vu(),this.mySock=new ms(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ms!==null&&!ge.forceDisallow_}static previouslyFailed(){return at.isInMemoryStorage||at.get("previous_websocket_failure")===!0}markConnectionHealthy(){at.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=yn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Hc(t,Hp);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Vp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ge.responsesRequiredToBeHealthy=2;ge.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Tt,ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ge&&ge.isAvailable();let s=t&&!ge.previouslyFailed();if(e.webSocketOnly&&(t||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ge];else{const i=this.transports_=[];for(const r of En.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);En.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}En.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=6e4,Gp=5e3,zp=10*1024,Kp=100*1024,vi="t",qo="d",qp="s",Yo="r",Yp="e",Qo="o",Jo="a",Xo="n",Zo="p",Qp="h";class Jp{constructor(e,t,s,i,r,o,a,c,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$n("c:"+this.id+":"),this.transportManager_=new En(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=dn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Kp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vi in e){const t=e[vi];t===Jo?this.upgradeIfSecondaryHealthy_():t===Yo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Qo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=nn("t",e),s=nn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=nn("t",e),s=nn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=nn(vi,e);if(qo in e){const s=e[qo];if(t===Qp){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Xo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===qp?this.onConnectionShutdown_(s):t===Yo?this.onReset_(s):t===Yp?Wi("Server Error: "+s):t===Qo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),kr!==s&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),dn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):dn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(at.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends al{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ur()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gs}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=32,ta=768;class V{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function B(){return new V("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Xe(n){return n.pieces_.length-n.pieceNum_}function G(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new V(n.pieces_,e)}function Rr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Xp(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function In(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function cl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new V(e,0)}function Q(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof V)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new V(t,0)}function D(n){return n.pieceNum_>=n.pieces_.length}function ae(n,e){const t=x(n),s=x(e);if(t===null)return e;if(t===s)return ae(G(n),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Zp(n,e){const t=In(n,0),s=In(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=bt(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Nr(n,e){if(Xe(n)!==Xe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function pe(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Xe(n)>Xe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class em{constructor(e,t){this.errorPrefix_=t,this.parts_=In(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Us(this.parts_[s]);ll(this)}}function tm(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Us(e),ll(n)}function nm(n){const e=n.parts_.pop();n.byteLength_-=Us(e),n.parts_.length>0&&(n.byteLength_-=1)}function ll(n){if(n.byteLength_>ta)throw new Error(n.errorPrefix_+"has a key path longer than "+ta+" bytes ("+n.byteLength_+").");if(n.parts_.length>ea)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ea+") or object contains a cycle "+rt(n))}function rt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends al{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ar}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=1e3,sm=60*5*1e3,na=30*1e3,im=1.3,rm=3e4,om="server_kill",sa=3;class Pe extends ol{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Pe.nextPersistentConnectionId_++,this.log_=$n("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=sn,this.maxReconnectDelay_=sm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ar.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Z(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new me,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Pe.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&we(e,"w")){const s=dt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=na)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Yu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Z(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Wi("Unrecognized action received from server: "+Z(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=sn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=sn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rm&&(this.reconnectDelay_=sn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*im)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(u){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ne("getToken() completed but was canceled"):(ne("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Jp(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{ce(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(om)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ce(u),c())}}}interrupt(e){ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],os(this.interruptReasons_)&&(this.reconnectDelay_=sn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Cr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new V(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ne("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sa&&(this.reconnectDelay_=na,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ne("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Fc.replace(/\./g,"-")]=1,ur()?e["framework.cordova"]=1:Xa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gs.getInstance().currentlyOnline();return os(this.interruptReasons_)&&e}}Pe.nextPersistentConnectionId_=0;Pe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new L(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new L(Ut,e),i=new L(Ut,t);return this.compare(s,i)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn;class ul extends Vs{static get __EMPTY_NODE(){return Gn}static set __EMPTY_NODE(e){Gn=e}compare(e,t){return bt(e.name,t.name)}isDefinedOn(e){throw zt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return L.MIN}maxPost(){return new L(mt,Gn)}makePost(e,t){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,Gn)}toString(){return".key"}}const xt=new ul;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class te{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??te.RED,this.left=i??ue.EMPTY_NODE,this.right=r??ue.EMPTY_NODE}copy(e,t,s,i,r){return new te(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}te.RED=!0;te.BLACK=!1;class am{copy(e,t,s,i,r){return this}insert(e,t,s){return new te(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ue{constructor(e,t=ue.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ue(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,te.BLACK,null,null))}remove(e){return new ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,te.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new zn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new zn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new zn(this.root_,null,this.comparator_,!0,e)}}ue.EMPTY_NODE=new am;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(n,e){return bt(n.name,e.name)}function Pr(n,e){return bt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi;function lm(n){Vi=n}const hl=function(n){return typeof n=="number"?"number:"+Vc(n):"string:"+n},dl=function(n){if(n.isLeafNode()){const e=n.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&we(e,".sv"),"Priority must be a string or number.")}else E(n===Vi||n.isEmpty(),"priority of unexpected type.");E(n===Vi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia;class ee{constructor(e,t=ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dl(this.priorityNode_)}static set __childrenNodeConstructor(e){ia=e}static get __childrenNodeConstructor(){return ia}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return D(e)?this:x(e)===".priority"?this.priorityNode_:ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=x(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||Xe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Vc(this.value_):e+=this.value_,this.lazyHash_=Wc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ee.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ee.VALUE_TYPE_ORDER.indexOf(t),r=ee.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+t),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl,pl;function um(n){fl=n}function hm(n){pl=n}class dm extends Vs{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?bt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return L.MIN}maxPost(){return new L(mt,new ee("[PRIORITY-POST]",pl))}makePost(e,t){const s=fl(e);return new L(t,new ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const q=new dm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=Math.log(2);class pm{constructor(e){const t=r=>parseInt(Math.log(r)/fm,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _s=function(n,e,t,s){n.sort(e);const i=function(c,l){const h=l-c;let u,d;if(h===0)return null;if(h===1)return u=n[c],d=t?t(u):u,new te(d,u.node,te.BLACK,null,null);{const f=parseInt(h/2,10)+c,m=i(c,f),w=i(f+1,l);return u=n[f],d=t?t(u):u,new te(d,u.node,te.BLACK,m,w)}},r=function(c){let l=null,h=null,u=n.length;const d=function(m,w){const k=u-m,I=u;u-=m;const g=i(k+1,I),y=n[k],S=t?t(y):y;f(new te(S,y.node,w,null,g))},f=function(m){l?(l.left=m,l=m):(h=m,l=m)};for(let m=0;m<c.count;++m){const w=c.nextBitIsOne(),k=Math.pow(2,c.count-(m+1));w?d(k,te.BLACK):(d(k,te.BLACK),d(k,te.RED))}return h},o=new pm(n.length),a=r(o);return new ue(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi;const kt={};class Ae{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return E(kt&&q,"ChildrenNode.ts has not been loaded"),yi=yi||new Ae({".priority":kt},{".priority":q}),yi}get(e){const t=dt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ue?t:null}hasIndex(e){return we(this.indexSet_,e.toString())}addIndex(e,t){E(e!==xt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(L.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=_s(s,e.getCompare()):a=kt;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new Ae(h,l)}addToIndexes(e,t){const s=as(this.indexes_,(i,r)=>{const o=dt(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===kt)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(L.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),_s(a,o.getCompare())}else return kt;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new L(e.name,a))),c.insert(e,e.node)}});return new Ae(s,this.indexSet_)}removeFromIndexes(e,t){const s=as(this.indexes_,i=>{if(i===kt)return i;{const r=t.get(e.name);return r?i.remove(new L(e.name,r)):i}});return new Ae(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn;class N{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&dl(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return rn||(rn=new N(new ue(Pr),null,Ae.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rn}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?rn:t}}getChild(e){const t=x(e);return t===null?this:this.getImmediateChild(t).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(E(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new L(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?rn:this.priorityNode_;return new N(i,o,r)}}updateChild(e,t){const s=x(e);if(s===null)return t;{E(x(e)!==".priority"||Xe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(G(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(q,(o,a)=>{t[o]=a.val(e),s++,r&&N.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hl(this.getPriority().val())+":"),this.forEachChild(q,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Wc(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new L(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new L(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new L(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fn?-1:0}withIndex(e){if(e===xt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===xt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(q),i=t.getIterator(q);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xt?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mm extends N{constructor(){super(new ue(Pr),N.EMPTY_NODE,Ae.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const Fn=new mm;Object.defineProperties(L,{MIN:{value:new L(Ut,N.EMPTY_NODE)},MAX:{value:new L(mt,Fn)}});ul.__EMPTY_NODE=N.EMPTY_NODE;ee.__childrenNodeConstructor=N;lm(Fn);hm(Fn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=!0;function Y(n,e=null){if(n===null)return N.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ee(t,Y(e))}if(!(n instanceof Array)&&gm){const t=[];let s=!1;if(se(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=Y(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new L(o,c)))}}),t.length===0)return N.EMPTY_NODE;const r=_s(t,cm,o=>o.name,Pr);if(s){const o=_s(t,q.getCompare());return new N(r,Y(e),new Ae({".priority":o},{".priority":q}))}else return new N(r,Y(e),Ae.Default)}else{let t=N.EMPTY_NODE;return se(n,(s,i)=>{if(we(n,s)&&s.substring(0,1)!=="."){const r=Y(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Y(e))}}um(Y);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m extends Vs{constructor(e){super(),this.indexPath_=e,E(!D(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?bt(e.name,t.name):r}makePost(e,t){const s=Y(e),i=N.EMPTY_NODE.updateChild(this.indexPath_,s);return new L(t,i)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,Fn);return new L(mt,e)}toString(){return In(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm extends Vs{compare(e,t){const s=e.node.compareTo(t.node);return s===0?bt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,t){const s=Y(e);return new L(t,s)}toString(){return".value"}}const ym=new vm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n){return{type:"value",snapshotNode:n}}function Bt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Cn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function kn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function wm(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Cn(t,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bt(t,s)):o.trackChildChange(kn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(q,(i,r)=>{t.hasChild(i)||s.trackChildChange(Cn(i,r))}),t.isLeafNode()||t.forEachChild(q,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(kn(i,r,o))}else s.trackChildChange(Bt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.indexedFilter_=new Mr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Sn.getStartPost_(e),this.endPost_=Sn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new L(t,s))||(s=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=N.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(N.EMPTY_NODE);const r=this;return t.forEachChild(q,(o,a)=>{r.matches(new L(o,a))||(i=i.updateImmediateChild(o,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Sn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new L(t,s))||(s=N.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=N.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(N.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const c=new L(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(kn(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Cn(t,u));const w=a.updateImmediateChild(t,N.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Bt(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return s.isEmpty()?e:h&&o(l,c)>=0?(r!=null&&(r.trackChildChange(Cn(l.name,l.node)),r.trackChildChange(Bt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,N.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ut}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new Or;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Em(n){return n.loadsAllData()?new Mr(n.getIndex()):n.hasLimit()?new bm(n):new Sn(n)}function ra(n){const e={};if(n.isDefault())return e;let t;if(n.index_===q?t="$priority":n.index_===ym?t="$value":n.index_===xt?t="$key":(E(n.index_ instanceof _m,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Z(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Z(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Z(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Z(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Z(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function oa(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends ol{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=$n("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vs.getListenId_(e,s),a={};this.listens_[o]=a;const c=ra(e._queryParams);this.restRequest_(r+".json",c,(l,h)=>{let u=h;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,s),dt(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,t){const s=vs.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ra(e._queryParams),s=e._path.toString(),i=new me;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Kt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=yn(a.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(){return{value:null,children:new Map}}function Jt(n,e,t){if(D(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=x(e);n.children.has(s)||n.children.set(s,ys());const i=n.children.get(s);e=G(e),Jt(i,e,t)}}function ji(n,e){if(D(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(q,(s,i)=>{Jt(n,new V(s),i)}),ji(n,e)}}else if(n.children.size>0){const t=x(e);return e=G(e),n.children.has(t)&&ji(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Gi(n,e,t){n.value!==null?t(e,n.value):Cm(n,(s,i)=>{const r=new V(e.toString()+"/"+s);Gi(i,r,t)})}function Cm(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&se(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=10*1e3,Sm=30*1e3,Tm=5*60*1e3;class Rm{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new km(e);const s=aa+(Sm-aa)*Math.random();dn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;se(e,(i,r)=>{r>0&&we(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),dn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Tm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_e||(_e={}));function xr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Dr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Lr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=_e.ACK_USER_WRITE,this.source=xr()}operationForChild(e){if(D(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new V(e));return new ws(B(),t,this.revert)}}else return E(x(this.path)===e,"operationForChild called for unrelated child."),new ws(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t){this.source=e,this.path=t,this.type=_e.LISTEN_COMPLETE}operationForChild(e){return D(this.path)?new Tn(this.source,B()):new Tn(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=_e.OVERWRITE}operationForChild(e){return D(this.path)?new gt(this.source,B(),this.snap.getImmediateChild(e)):new gt(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=_e.MERGE}operationForChild(e){if(D(this.path)){const t=this.children.subtree(new V(e));return t.isEmpty()?null:t.value?new gt(this.source,B(),t.value):new Wt(this.source,B(),t)}else return E(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wt(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(D(e))return this.isFullyInitialized()&&!this.filtered_;const t=x(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Am(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(wm(o.childName,o.snapshotNode))}),on(n,i,"child_removed",e,s,t),on(n,i,"child_added",e,s,t),on(n,i,"child_moved",r,s,t),on(n,i,"child_changed",e,s,t),on(n,i,"value",e,s,t),i}function on(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>Mm(n,a,c)),o.forEach(a=>{const c=Pm(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function Pm(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Mm(n,e,t){if(e.childName==null||t.childName==null)throw zt("Should only compare child_ events.");const s=new L(e.childName,e.snapshotNode),i=new L(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n,e){return{eventCache:n,serverCache:e}}function fn(n,e,t,s){return js(new Ze(e,t,s),n.serverCache)}function gl(n,e,t,s){return js(n.eventCache,new Ze(e,t,s))}function bs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function _t(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;const Om=()=>(wi||(wi=new ue(_p)),wi);class K{constructor(e,t=Om()){this.value=e,this.children=t}static fromObject(e){let t=new K(null);return se(e,(s,i)=>{t=t.set(new V(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:B(),value:this.value};if(D(e))return null;{const s=x(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(G(e),t);return r!=null?{path:Q(new V(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(D(e))return this;{const t=x(e),s=this.children.get(t);return s!==null?s.subtree(G(e)):new K(null)}}set(e,t){if(D(e))return new K(t,this.children);{const s=x(e),r=(this.children.get(s)||new K(null)).set(G(e),t),o=this.children.insert(s,r);return new K(this.value,o)}}remove(e){if(D(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const t=x(e),s=this.children.get(t);if(s){const i=s.remove(G(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new K(null):new K(this.value,r)}else return this}}get(e){if(D(e))return this.value;{const t=x(e),s=this.children.get(t);return s?s.get(G(e)):null}}setTree(e,t){if(D(e))return t;{const s=x(e),r=(this.children.get(s)||new K(null)).setTree(G(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new K(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Q(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,B(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(D(e))return null;{const r=x(e),o=this.children.get(r);return o?o.findOnPath_(G(e),Q(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,B(),t)}foreachOnPath_(e,t,s){if(D(e))return this;{this.value&&s(t,this.value);const i=x(e),r=this.children.get(i);return r?r.foreachOnPath_(G(e),Q(t,i),s):new K(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(Q(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.writeTree_=e}static empty(){return new ve(new K(null))}}function pn(n,e,t){if(D(e))return new ve(new K(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ae(i,e);return r=r.updateChild(o,t),new ve(n.writeTree_.set(i,r))}else{const i=new K(t),r=n.writeTree_.setTree(e,i);return new ve(r)}}}function zi(n,e,t){let s=n;return se(t,(i,r)=>{s=pn(s,Q(e,i),r)}),s}function ca(n,e){if(D(e))return ve.empty();{const t=n.writeTree_.setTree(e,new K(null));return new ve(t)}}function Ki(n,e){return Et(n,e)!=null}function Et(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ae(t.path,e)):null}function la(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(q,(s,i)=>{e.push(new L(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new L(s,i.value))}),e}function Qe(n,e){if(D(e))return n;{const t=Et(n,e);return t!=null?new ve(new K(t)):new ve(n.writeTree_.subtree(e))}}function qi(n){return n.writeTree_.isEmpty()}function Ht(n,e){return _l(B(),n.writeTree_,e)}function _l(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=_l(Q(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Q(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(n,e){return bl(e,n)}function xm(n,e,t,s,i){E(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=pn(n.visibleWrites,e,t)),n.lastWriteId=s}function Dm(n,e,t,s){E(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=zi(n.visibleWrites,e,t),n.lastWriteId=s}function Lm(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function $m(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);E(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Fm(a,s.path)?i=!1:pe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Um(n),!0;if(s.snap)n.visibleWrites=ca(n.visibleWrites,s.path);else{const a=s.children;se(a,c=>{n.visibleWrites=ca(n.visibleWrites,Q(s.path,c))})}return!0}else return!1}function Fm(n,e){if(n.snap)return pe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&pe(Q(n.path,t),e))return!0;return!1}function Um(n){n.visibleWrites=vl(n.allWrites,Bm,B()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Bm(n){return n.visible}function vl(n,e,t){let s=ve.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)pe(t,o)?(a=ae(t,o),s=pn(s,a,r.snap)):pe(o,t)&&(a=ae(o,t),s=pn(s,B(),r.snap.getChild(a)));else if(r.children){if(pe(t,o))a=ae(t,o),s=zi(s,a,r.children);else if(pe(o,t))if(a=ae(o,t),D(a))s=zi(s,B(),r.children);else{const c=dt(r.children,x(a));if(c){const l=c.getChild(G(a));s=pn(s,B(),l)}}}else throw zt("WriteRecord should have .snap or .children")}}return s}function yl(n,e,t,s,i){if(!s&&!i){const r=Et(n.visibleWrites,e);if(r!=null)return r;{const o=Qe(n.visibleWrites,e);if(qi(o))return t;if(t==null&&!Ki(o,B()))return null;{const a=t||N.EMPTY_NODE;return Ht(o,a)}}}else{const r=Qe(n.visibleWrites,e);if(!i&&qi(r))return t;if(!i&&t==null&&!Ki(r,B()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(pe(l.path,e)||pe(e,l.path))},a=vl(n.allWrites,o,e),c=t||N.EMPTY_NODE;return Ht(a,c)}}}function Wm(n,e,t){let s=N.EMPTY_NODE;const i=Et(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(q,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Qe(n.visibleWrites,e);return t.forEachChild(q,(o,a)=>{const c=Ht(Qe(r,new V(o)),a);s=s.updateImmediateChild(o,c)}),la(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Qe(n.visibleWrites,e);return la(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Hm(n,e,t,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Q(e,t);if(Ki(n.visibleWrites,r))return null;{const o=Qe(n.visibleWrites,r);return qi(o)?i.getChild(t):Ht(o,i.getChild(t))}}function Vm(n,e,t,s){const i=Q(e,t),r=Et(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Qe(n.visibleWrites,i);return Ht(o,s.getNode().getImmediateChild(t))}else return null}function jm(n,e){return Et(n.visibleWrites,e)}function Gm(n,e,t,s,i,r,o){let a;const c=Qe(n.visibleWrites,e),l=Et(c,B());if(l!=null)a=l;else if(t!=null)a=Ht(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&h.length<i;)u(f,s)!==0&&h.push(f),f=d.getNext();return h}else return[]}function zm(){return{visibleWrites:ve.empty(),allWrites:[],lastWriteId:-1}}function Es(n,e,t,s){return yl(n.writeTree,n.treePath,e,t,s)}function $r(n,e){return Wm(n.writeTree,n.treePath,e)}function ua(n,e,t,s){return Hm(n.writeTree,n.treePath,e,t,s)}function Is(n,e){return jm(n.writeTree,Q(n.treePath,e))}function Km(n,e,t,s,i,r){return Gm(n.writeTree,n.treePath,e,t,s,i,r)}function Fr(n,e,t){return Vm(n.writeTree,n.treePath,e,t)}function wl(n,e){return bl(Q(n.treePath,e),n.writeTree)}function bl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;E(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,kn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Cn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Bt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,kn(s,e.snapshotNode,i.oldSnap));else throw zt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const El=new Ym;class Ur{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ze(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_t(this.viewCache_),r=Km(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(n){return{filter:n}}function Jm(n,e){E(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Xm(n,e,t,s,i){const r=new qm;let o,a;if(t.type===_e.OVERWRITE){const l=t;l.source.fromUser?o=Yi(n,e,l.path,l.snap,s,i,r):(E(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!D(l.path),o=Cs(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===_e.MERGE){const l=t;l.source.fromUser?o=eg(n,e,l.path,l.children,s,i,r):(E(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Qi(n,e,l.path,l.children,s,i,a,r))}else if(t.type===_e.ACK_USER_WRITE){const l=t;l.revert?o=sg(n,e,l.path,s,i,r):o=tg(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===_e.LISTEN_COMPLETE)o=ng(n,e,t.path,s,r);else throw zt("Unknown operation type: "+t.type);const c=r.getChanges();return Zm(e,o,c),{viewCache:o,changes:c}}function Zm(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=bs(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(ml(bs(e)))}}function Il(n,e,t,s,i,r){const o=e.eventCache;if(Is(s,t)!=null)return e;{let a,c;if(D(t))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=_t(e),h=l instanceof N?l:N.EMPTY_NODE,u=$r(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=Es(s,_t(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=x(t);if(l===".priority"){E(Xe(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const u=ua(s,t,h,c);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=G(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=ua(s,t,o.getNode(),c);d!=null?u=o.getNode().getImmediateChild(l).updateChild(h,d):u=o.getNode().getImmediateChild(l)}else u=Fr(s,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,h,i,r):a=o.getNode()}}return fn(e,a,o.isFullyInitialized()||D(t),n.filter.filtersNodes())}}function Cs(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const h=o?n.filter:n.filter.getIndexedFilter();if(D(t))l=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,s);l=h.updateFullNode(c.getNode(),f,null)}else{const f=x(t);if(!c.isCompleteForPath(t)&&Xe(t)>1)return e;const m=G(t),k=c.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?l=h.updatePriority(c.getNode(),k):l=h.updateChild(c.getNode(),f,k,m,El,null)}const u=gl(e,l,c.isFullyInitialized()||D(t),h.filtersNodes()),d=new Ur(i,u,r);return Il(n,u,t,i,d,a)}function Yi(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const h=new Ur(i,e,r);if(D(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=fn(e,l,!0,n.filter.filtersNodes());else{const u=x(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=fn(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=G(t),f=a.getNode().getImmediateChild(u);let m;if(D(d))m=s;else{const w=h.getCompleteChild(u);w!=null?Rr(d)===".priority"&&w.getChild(cl(d)).isEmpty()?m=w:m=w.updateChild(d,s):m=N.EMPTY_NODE}if(f.equals(m))c=e;else{const w=n.filter.updateChild(a.getNode(),u,m,d,h,o);c=fn(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function ha(n,e){return n.eventCache.isCompleteForChild(e)}function eg(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const h=Q(t,c);ha(e,x(h))&&(a=Yi(n,a,h,l,i,r,o))}),s.foreach((c,l)=>{const h=Q(t,c);ha(e,x(h))||(a=Yi(n,a,h,l,i,r,o))}),a}function da(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Qi(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;D(t)?l=s:l=new K(null).setTree(t,s);const h=e.serverCache.getNode();return l.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),m=da(n,f,d);c=Cs(n,c,new V(u),m,i,r,o,a)}}),l.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const m=e.serverCache.getNode().getImmediateChild(u),w=da(n,m,d);c=Cs(n,c,new V(u),w,i,r,o,a)}}),c}function tg(n,e,t,s,i,r,o){if(Is(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(D(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Cs(n,e,t,c.getNode().getChild(t),i,r,a,o);if(D(t)){let l=new K(null);return c.getNode().forEachChild(xt,(h,u)=>{l=l.set(new V(h),u)}),Qi(n,e,t,l,i,r,a,o)}else return e}else{let l=new K(null);return s.foreach((h,u)=>{const d=Q(t,h);c.isCompleteForPath(d)&&(l=l.set(h,c.getNode().getChild(d)))}),Qi(n,e,t,l,i,r,a,o)}}function ng(n,e,t,s,i){const r=e.serverCache,o=gl(e,r.getNode(),r.isFullyInitialized()||D(t),r.isFiltered());return Il(n,o,t,s,El,i)}function sg(n,e,t,s,i,r){let o;if(Is(s,t)!=null)return e;{const a=new Ur(s,e,i),c=e.eventCache.getNode();let l;if(D(t)||x(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Es(s,_t(e));else{const u=e.serverCache.getNode();E(u instanceof N,"serverChildren would be complete if leaf node"),h=$r(s,u)}h=h,l=n.filter.updateFullNode(c,h,r)}else{const h=x(t);let u=Fr(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?l=n.filter.updateChild(c,h,u,G(t),a,r):e.eventCache.getNode().hasChild(h)?l=n.filter.updateChild(c,h,N.EMPTY_NODE,G(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Es(s,_t(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Is(s,B())!=null,fn(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Mr(s.getIndex()),r=Em(s);this.processor_=Qm(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(N.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(N.EMPTY_NODE,a.getNode(),null),h=new Ze(c,o.isFullyInitialized(),i.filtersNodes()),u=new Ze(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=js(u,h),this.eventGenerator_=new Nm(this.query_)}get query(){return this.query_}}function rg(n){return n.viewCache_.serverCache.getNode()}function og(n){return bs(n.viewCache_)}function ag(n,e){const t=_t(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!D(e)&&!t.getImmediateChild(x(e)).isEmpty())?t.getChild(e):null}function fa(n){return n.eventRegistrations_.length===0}function cg(n,e){n.eventRegistrations_.push(e)}function pa(n,e,t){const s=[];if(t){E(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function ma(n,e,t,s){e.type===_e.MERGE&&e.source.queryId!==null&&(E(_t(n.viewCache_),"We should always have a full cache before handling merges"),E(bs(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Xm(n.processor_,i,e,t,s);return Jm(n.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Cl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function lg(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(q,(r,o)=>{s.push(Bt(r,o))}),t.isFullyInitialized()&&s.push(ml(t.getNode())),Cl(n,s,t.getNode(),e)}function Cl(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Am(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks;class kl{constructor(){this.views=new Map}}function ug(n){E(!ks,"__referenceConstructor has already been defined"),ks=n}function hg(){return E(ks,"Reference.ts has not been loaded"),ks}function dg(n){return n.views.size===0}function Br(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),ma(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(ma(o,e,t,s));return r}}function Sl(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Es(t,i?s:null),c=!1;a?c=!0:s instanceof N?(a=$r(t,s),c=!1):(a=N.EMPTY_NODE,c=!1);const l=js(new Ze(a,c,!1),new Ze(s,i,!1));return new ig(e,l)}return o}function fg(n,e,t,s,i,r){const o=Sl(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),cg(o,t),lg(o,t)}function pg(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=et(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(pa(l,t,s)),fa(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(pa(c,t,s)),fa(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!et(n)&&r.push(new(hg())(e._repo,e._path)),{removed:r,events:o}}function Tl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Je(n,e){let t=null;for(const s of n.views.values())t=t||ag(s,e);return t}function Rl(n,e){if(e._queryParams.loadsAllData())return zs(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Nl(n,e){return Rl(n,e)!=null}function et(n){return zs(n)!=null}function zs(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;function mg(n){E(!Ss,"__referenceConstructor has already been defined"),Ss=n}function gg(){return E(Ss,"Reference.ts has not been loaded"),Ss}let _g=1;class ga{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=zm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wr(n,e,t,s,i){return xm(n.pendingWriteTree_,e,t,s,i),i?Xt(n,new gt(xr(),e,t)):[]}function vg(n,e,t,s){Dm(n.pendingWriteTree_,e,t,s);const i=K.fromObject(t);return Xt(n,new Wt(xr(),e,i))}function Ge(n,e,t=!1){const s=Lm(n.pendingWriteTree_,e);if($m(n.pendingWriteTree_,e)){let r=new K(null);return s.snap!=null?r=r.set(B(),!0):se(s.children,o=>{r=r.set(new V(o),!0)}),Xt(n,new ws(s.path,r,t))}else return[]}function Un(n,e,t){return Xt(n,new gt(Dr(),e,t))}function yg(n,e,t){const s=K.fromObject(t);return Xt(n,new Wt(Dr(),e,s))}function wg(n,e){return Xt(n,new Tn(Dr(),e))}function bg(n,e,t){const s=Hr(n,t);if(s){const i=Vr(s),r=i.path,o=i.queryId,a=ae(r,e),c=new Tn(Lr(o),a);return jr(n,r,c)}else return[]}function Ts(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Nl(o,e))){const c=pg(o,e,t,s);dg(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const h=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>et(f));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Cg(d);for(let m=0;m<f.length;++m){const w=f[m],k=w.query,I=Ol(n,w);n.listenProvider_.startListening(mn(k),Rn(n,k),I.hashFn,I.onComplete)}}}!u&&l.length>0&&!s&&(h?n.listenProvider_.stopListening(mn(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(qs(d));n.listenProvider_.stopListening(mn(d),f)}))}kg(n,l)}return a}function Al(n,e,t,s){const i=Hr(n,s);if(i!=null){const r=Vr(i),o=r.path,a=r.queryId,c=ae(o,e),l=new gt(Lr(a),c,t);return jr(n,o,l)}else return[]}function Eg(n,e,t,s){const i=Hr(n,s);if(i){const r=Vr(i),o=r.path,a=r.queryId,c=ae(o,e),l=K.fromObject(t),h=new Wt(Lr(a),c,l);return jr(n,o,h)}else return[]}function Ji(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const m=ae(d,i);r=r||Je(f,m),o=o||et(f)});let a=n.syncPointTree_.get(i);a?(o=o||et(a),r=r||Je(a,B())):(a=new kl,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=N.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,m)=>{const w=Je(m,B());w&&(r=r.updateImmediateChild(f,w))}));const l=Nl(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=qs(e);E(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Sg();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=Gs(n.pendingWriteTree_,i);let u=fg(a,e,t,h,r,c);if(!l&&!o&&!s){const d=Rl(a,e);u=u.concat(Tg(n,e,d))}return u}function Ks(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=ae(o,e),l=Je(a,c);if(l)return l});return yl(i,e,r,t,!0)}function Ig(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,h)=>{const u=ae(l,t);s=s||Je(h,u)});let i=n.syncPointTree_.get(t);i?s=s||Je(i,B()):(i=new kl,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Ze(s,!0,!1):null,a=Gs(n.pendingWriteTree_,e._path),c=Sl(i,e,a,r?o.getNode():N.EMPTY_NODE,r);return og(c)}function Xt(n,e){return Pl(e,n.syncPointTree_,null,Gs(n.pendingWriteTree_,B()))}function Pl(n,e,t,s){if(D(n.path))return Ml(n,e,t,s);{const i=e.get(B());t==null&&i!=null&&(t=Je(i,B()));let r=[];const o=x(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,h=wl(s,o);r=r.concat(Pl(a,c,l,h))}return i&&(r=r.concat(Br(i,n,s,t))),r}}function Ml(n,e,t,s){const i=e.get(B());t==null&&i!=null&&(t=Je(i,B()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=wl(s,o),h=n.operationForChild(o);h&&(r=r.concat(Ml(h,a,c,l)))}),i&&(r=r.concat(Br(i,n,s,t))),r}function Ol(n,e){const t=e.query,s=Rn(n,t);return{hashFn:()=>(rg(e)||N.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?bg(n,t._path,s):wg(n,t._path);{const r=wp(i,t);return Ts(n,t,null,r)}}}}function Rn(n,e){const t=qs(e);return n.queryToTagMap.get(t)}function qs(n){return n._path.toString()+"$"+n._queryIdentifier}function Hr(n,e){return n.tagToQueryMap.get(e)}function Vr(n){const e=n.indexOf("$");return E(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new V(n.substr(0,e))}}function jr(n,e,t){const s=n.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=Gs(n.pendingWriteTree_,e);return Br(s,t,i,null)}function Cg(n){return n.fold((e,t,s)=>{if(t&&et(t))return[zs(t)];{let i=[];return t&&(i=Tl(t)),se(s,(r,o)=>{i=i.concat(o)}),i}})}function mn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(gg())(n._repo,n._path):n}function kg(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=qs(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Sg(){return _g++}function Tg(n,e,t){const s=e._path,i=Rn(n,e),r=Ol(n,t),o=n.listenProvider_.startListening(mn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)E(!et(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,h,u)=>{if(!D(l)&&h&&et(h))return[zs(h).query];{let d=[];return h&&(d=d.concat(Tl(h).map(f=>f.query))),se(u,(f,m)=>{d=d.concat(m)}),d}});for(let l=0;l<c.length;++l){const h=c[l];n.listenProvider_.stopListening(mn(h),Rn(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Gr(t)}node(){return this.node_}}class zr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Q(this.path_,e);return new zr(this.syncTree_,t)}node(){return Ks(this.syncTree_,this.path_)}}const Rg=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},_a=function(n,e,t){if(!n||typeof n!="object")return n;if(E(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Ng(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Ag(n[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Ng=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:E(!1,"Unexpected server value: "+n)}},Ag=function(n,e,t){n.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},xl=function(n,e,t,s){return qr(e,new zr(t,n),s)},Kr=function(n,e,t){return qr(n,new Gr(e),t)};function qr(n,e,t){const s=n.getPriority().val(),i=_a(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=_a(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ee(a,Y(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ee(i))),o.forEachChild(q,(a,c)=>{const l=qr(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ys(n,e){let t=e instanceof V?e:new V(e),s=n,i=x(t);for(;i!==null;){const r=dt(s.node.children,i)||{children:{},childCount:0};s=new Yr(i,s,r),t=G(t),i=x(t)}return s}function It(n){return n.node.value}function Qr(n,e){n.node.value=e,Xi(n)}function Dl(n){return n.node.childCount>0}function Pg(n){return It(n)===void 0&&!Dl(n)}function Qs(n,e){se(n.node.children,(t,s)=>{e(new Yr(t,n,s))})}function Ll(n,e,t,s){t&&e(n),Qs(n,i=>{Ll(i,e,!0)})}function Mg(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Bn(n){return new V(n.parent===null?n.name:Bn(n.parent)+"/"+n.name)}function Xi(n){n.parent!==null&&Og(n.parent,n.name,n)}function Og(n,e,t){const s=Pg(t),i=we(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Xi(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Xi(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=/[\[\].#$\/\u0000-\u001F\u007F]/,Dg=/[\[\].#$\u0000-\u001F\u007F]/,bi=10*1024*1024,Jr=function(n){return typeof n=="string"&&n.length!==0&&!xg.test(n)},$l=function(n){return typeof n=="string"&&n.length!==0&&!Dg.test(n)},Lg=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$l(n)},Xr=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Hs(n)||n&&typeof n=="object"&&we(n,".sv")},Rs=function(n,e,t,s){s&&e===void 0||Wn(Lt(n,"value"),e,t)},Wn=function(n,e,t){const s=t instanceof V?new em(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+rt(s));if(typeof e=="function")throw new Error(n+"contains a function "+rt(s)+" with contents = "+e.toString());if(Hs(e))throw new Error(n+"contains "+e.toString()+" "+rt(s));if(typeof e=="string"&&e.length>bi/3&&Us(e)>bi)throw new Error(n+"contains a string greater than "+bi+" utf8 bytes "+rt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(se(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Jr(o)))throw new Error(n+" contains an invalid key ("+o+") "+rt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tm(s,o),Wn(n,a,s),nm(s)}),i&&r)throw new Error(n+' contains ".value" child '+rt(s)+" in addition to actual children.")}},$g=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=In(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Jr(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Zp);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&pe(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Fl=function(n,e,t,s){const i=Lt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];se(e,(o,a)=>{const c=new V(o);if(Wn(i,a,Q(t,c)),Rr(c)===".priority"&&!Xr(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),$g(i,r)},Fg=function(n,e,t){if(Hs(e))throw new Error(Lt(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Xr(e))throw new Error(Lt(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Ul=function(n,e,t,s){if(!$l(t))throw new Error(Lt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ug=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ul(n,e,t)},ze=function(n,e){if(x(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Bg=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Lg(t))throw new Error(Lt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Js(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Nr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Bl(n,e,t){Js(n,t),Wl(n,s=>Nr(s,e))}function de(n,e,t){Js(n,t),Wl(n,s=>pe(s,e)||pe(e,s))}function Wl(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Hg(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Hg(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();hn&&ne("event: "+t.toString()),Qt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="repo_interrupt",jg=25;class Gg{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Wg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ys(),this.transactionQueueTree_=new Yr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function zg(n,e,t){if(n.stats_=Sr(n.repoInfo_),n.forceRestClient_||Cp())n.server_=new vs(n.repoInfo_,(s,i,r,o)=>{va(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ya(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Z(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Pe(n.repoInfo_,e,(s,i,r,o)=>{va(n,s,i,r,o)},s=>{ya(n,s)},s=>{Kg(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Np(n.repoInfo_,()=>new Rm(n.stats_,n.server_)),n.infoData_=new Im,n.infoSyncTree_=new ga({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Un(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zr(n,"connected",!1),n.serverSyncTree_=new ga({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);de(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Hl(n){const t=n.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Hn(n){return Rg({timestamp:Hl(n)})}function va(n,e,t,s,i){n.dataUpdateCount++;const r=new V(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=as(t,l=>Y(l));o=Eg(n.serverSyncTree_,r,c,i)}else{const c=Y(t);o=Al(n.serverSyncTree_,r,c,i)}else if(s){const c=as(t,l=>Y(l));o=yg(n.serverSyncTree_,r,c)}else{const c=Y(t);o=Un(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Vt(n,r)),de(n.eventQueue_,a,o)}function ya(n,e){Zr(n,"connected",e),e===!1&&Jg(n)}function Kg(n,e){se(e,(t,s)=>{Zr(n,t,s)})}function Zr(n,e,t){const s=new V("/.info/"+e),i=Y(t);n.infoData_.updateSnapshot(s,i);const r=Un(n.infoSyncTree_,s,i);de(n.eventQueue_,s,r)}function Xs(n){return n.nextWriteId_++}function qg(n,e,t){const s=Ig(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=Y(i).withIndex(e._queryParams.getIndex());Ji(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Un(n.serverSyncTree_,e._path,r);else{const a=Rn(n.serverSyncTree_,e);o=Al(n.serverSyncTree_,e._path,r,a)}return de(n.eventQueue_,e._path,o),Ts(n.serverSyncTree_,e,t,null,!0),r},i=>(Zt(n,"get for query "+Z(e)+" failed: "+i),Promise.reject(new Error(i))))}function Yg(n,e,t,s,i){Zt(n,"set",{path:e.toString(),value:t,priority:s});const r=Hn(n),o=Y(t,s),a=Ks(n.serverSyncTree_,e),c=Kr(o,a,r),l=Xs(n),h=Wr(n.serverSyncTree_,e,c,l,!0);Js(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const m=d==="ok";m||ce("set at "+e+" failed: "+d);const w=Ge(n.serverSyncTree_,l,!m);de(n.eventQueue_,e,w),tt(n,i,d,f)});const u=to(n,e);Vt(n,u),de(n.eventQueue_,u,[])}function Qg(n,e,t,s){Zt(n,"update",{path:e.toString(),value:t});let i=!0;const r=Hn(n),o={};if(se(t,(a,c)=>{i=!1,o[a]=xl(Q(e,a),Y(c),n.serverSyncTree_,r)}),i)ne("update() called with empty data.  Don't do anything."),tt(n,s,"ok",void 0);else{const a=Xs(n),c=vg(n.serverSyncTree_,e,o,a);Js(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,h)=>{const u=l==="ok";u||ce("update at "+e+" failed: "+l);const d=Ge(n.serverSyncTree_,a,!u),f=d.length>0?Vt(n,e):e;de(n.eventQueue_,f,d),tt(n,s,l,h)}),se(t,l=>{const h=to(n,Q(e,l));Vt(n,h)}),de(n.eventQueue_,e,[])}}function Jg(n){Zt(n,"onDisconnectEvents");const e=Hn(n),t=ys();Gi(n.onDisconnect_,B(),(i,r)=>{const o=xl(i,r,n.serverSyncTree_,e);Jt(t,i,o)});let s=[];Gi(t,B(),(i,r)=>{s=s.concat(Un(n.serverSyncTree_,i,r));const o=to(n,i);Vt(n,o)}),n.onDisconnect_=ys(),de(n.eventQueue_,B(),s)}function Xg(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&ji(n.onDisconnect_,e),tt(n,t,s,i)})}function wa(n,e,t,s){const i=Y(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Jt(n.onDisconnect_,e,i),tt(n,s,r,o)})}function Zg(n,e,t,s,i){const r=Y(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Jt(n.onDisconnect_,e,r),tt(n,i,o,a)})}function e_(n,e,t,s){if(os(t)){ne("onDisconnect().update() called with empty data.  Don't do anything."),tt(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&se(t,(o,a)=>{const c=Y(a);Jt(n.onDisconnect_,Q(e,o),c)}),tt(n,s,i,r)})}function t_(n,e,t){let s;x(e._path)===".info"?s=Ji(n.infoSyncTree_,e,t):s=Ji(n.serverSyncTree_,e,t),Bl(n.eventQueue_,e._path,s)}function Zi(n,e,t){let s;x(e._path)===".info"?s=Ts(n.infoSyncTree_,e,t):s=Ts(n.serverSyncTree_,e,t),Bl(n.eventQueue_,e._path,s)}function n_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Vg)}function Zt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ne(t,...e)}function tt(n,e,t,s){e&&Qt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function s_(n,e,t,s,i,r){Zt(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:Bc(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=eo(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Wn("transaction failed: Data returned ",c,o.path),o.status=0;const l=Ys(n.transactionQueueTree_,e),h=It(l)||[];h.push(o),Qr(l,h);let u;typeof c=="object"&&c!==null&&we(c,".priority")?(u=dt(c,".priority"),E(Xr(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(Ks(n.serverSyncTree_,e)||N.EMPTY_NODE).getPriority().val();const d=Hn(n),f=Y(c,u),m=Kr(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=m,o.currentWriteId=Xs(n);const w=Wr(n.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);de(n.eventQueue_,e,w),Zs(n,n.transactionQueueTree_)}}function eo(n,e,t){return Ks(n.serverSyncTree_,e,t)||N.EMPTY_NODE}function Zs(n,e=n.transactionQueueTree_){if(e||ei(n,e),It(e)){const t=jl(n,e);E(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&i_(n,Bn(e),t)}else Dl(e)&&Qs(e,t=>{Zs(n,t)})}function i_(n,e,t){const s=t.map(l=>l.currentWriteId),i=eo(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const h=t[l];E(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ae(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{Zt(n,"transaction put response",{path:c.toString(),status:l});let h=[];if(l==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Ge(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();ei(n,Ys(n.transactionQueueTree_,e)),Zs(n,n.transactionQueueTree_),de(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)Qt(u[d])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ce("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}Vt(n,e)}},o)}function Vt(n,e){const t=Vl(n,e),s=Bn(t),i=jl(n,t);return r_(n,i,s),s}function r_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ae(t,c.path);let h=!1,u;if(E(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,i=i.concat(Ge(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=jg)h=!0,u="maxretry",i=i.concat(Ge(n.serverSyncTree_,c.currentWriteId,!0));else{const d=eo(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Wn("transaction failed: Data returned ",f,c.path);let m=Y(f);typeof f=="object"&&f!=null&&we(f,".priority")||(m=m.updatePriority(d.getPriority()));const k=c.currentWriteId,I=Hn(n),g=Kr(m,d,I);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=g,c.currentWriteId=Xs(n),o.splice(o.indexOf(k),1),i=i.concat(Wr(n.serverSyncTree_,c.path,g,c.currentWriteId,c.applyLocally)),i=i.concat(Ge(n.serverSyncTree_,k,!0))}else h=!0,u="nodata",i=i.concat(Ge(n.serverSyncTree_,c.currentWriteId,!0))}de(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}ei(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Qt(s[a]);Zs(n,n.transactionQueueTree_)}function Vl(n,e){let t,s=n.transactionQueueTree_;for(t=x(e);t!==null&&It(s)===void 0;)s=Ys(s,t),e=G(e),t=x(e);return s}function jl(n,e){const t=[];return Gl(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Gl(n,e,t){const s=It(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Qs(e,i=>{Gl(n,i,t)})}function ei(n,e){const t=It(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Qr(e,t.length>0?t:void 0)}Qs(e,s=>{ei(n,s)})}function to(n,e){const t=Bn(Vl(n,e)),s=Ys(n.transactionQueueTree_,e);return Mg(s,i=>{Ei(n,i)}),Ei(n,s),Ll(s,i=>{Ei(n,i)}),t}function Ei(n,e){const t=It(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(E(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ge(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Qr(e,void 0):t.length=r+1,de(n.eventQueue_,Bn(e),i);for(let o=0;o<s.length;o++)Qt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function a_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ce(`Invalid query segment '${t}' in query '${n}'`)}return e}const ba=function(n,e){const t=c_(n),s=t.namespace;t.domain==="firebase.com"&&De(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&De("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||mp();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Zc(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new V(t.pathString)}},c_=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=o_(n.substring(h,u)));const d=a_(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",l_=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Ea.charAt(t%64),t=Math.floor(t/64);E(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ea.charAt(e[i]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Z(this.snapshot.exportVal())}}class h_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class d_{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new me;return Xg(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ze("OnDisconnect.remove",this._path);const e=new me;return wa(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ze("OnDisconnect.set",this._path),Rs("OnDisconnect.set",e,this._path,!1);const t=new me;return wa(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){ze("OnDisconnect.setWithPriority",this._path),Rs("OnDisconnect.setWithPriority",e,this._path,!1),Fg("OnDisconnect.setWithPriority",t);const s=new me;return Zg(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){ze("OnDisconnect.update",this._path),Fl("OnDisconnect.update",e,this._path);const t=new me;return e_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return D(this._path)?null:Rr(this._path)}get ref(){return new ke(this._repo,this._path)}get _queryIdentifier(){const e=oa(this._queryParams),t=Cr(e);return t==="{}"?"default":t}get _queryObject(){return oa(this._queryParams)}isEqual(e){if(e=re(e),!(e instanceof no))return!1;const t=this._repo===e._repo,s=Nr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Xp(this._path)}}class ke extends no{constructor(e,t){super(e,t,new Or,!1)}get parent(){const e=cl(this._path);return e===null?null:new ke(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class jt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new V(e),s=Nn(this.ref,e);return new jt(this._node.getChild(t),s,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new jt(i,Nn(this.ref,s),q)))}hasChild(e){const t=new V(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function U(n,e){return n=re(n),n._checkNotDeleted("ref"),e!==void 0?Nn(n._root,e):n._root}function Nn(n,e){return n=re(n),x(n._path)===null?Ug("child","path",e):Ul("child","path",e),new ke(n._repo,Q(n._path,e))}function f_(n){return n=re(n),new d_(n._repo,n._path)}function Kl(n,e){n=re(n),ze("push",n._path),Rs("push",e,n._path,!0);const t=Hl(n._repo),s=l_(t),i=Nn(n,s),r=Nn(n,s);let o;return e!=null?o=ti(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function an(n){return ze("remove",n._path),ti(n,null)}function ti(n,e){n=re(n),ze("set",n._path),Rs("set",e,n._path,!1);const t=new me;return Yg(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function vt(n,e){Fl("update",e,n._path);const t=new me;return Qg(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function so(n){n=re(n);const e=new zl(()=>{}),t=new ni(e);return qg(n._repo,n,t).then(s=>new jt(s,new ke(n._repo,n._path),n._queryParams.getIndex()))}class ni{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new u_("value",this,new jt(e.snapshotNode,new ke(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new h_(this,e,t):null}matches(e){return e instanceof ni?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function p_(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(h,u)=>{Zi(n._repo,n,a),c(h,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new zl(t,r||void 0),a=new ni(o);return t_(n._repo,n,a),()=>Zi(n._repo,n,a)}function si(n,e,t,s){return p_(n,"value",e,t,s)}function io(n,e,t){Zi(n._repo,n,null)}ug(ke);mg(ke);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="FIREBASE_DATABASE_EMULATOR_HOST",er={};let g_=!1;function __(n,e,t,s){n.repoInfo_=new Zc(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function v_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||De("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ne("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ba(r,i),a=o.repoInfo,c;typeof process<"u"&&Ho&&(c=Ho[m_]),c?(r=`http://${c}?ns=${a.namespace}`,o=ba(r,i),a=o.repoInfo):o.repoInfo.secure;const l=new Sp(n.name,n.options,e);Bg("Invalid Firebase Database URL",o),D(o.path)||De("Database URL must point to the root of a Firebase Database (not including a child path).");const h=w_(a,n,l,new kp(n.name,t));return new b_(h,n)}function y_(n,e){const t=er[e];(!t||t[n.key]!==n)&&De(`Database ${e}(${n.repoInfo_}) has already been deleted.`),n_(n),delete t[n.key]}function w_(n,e,t,s){let i=er[e.name];i||(i={},er[e.name]=i);let r=i[n.toURLString()];return r&&De("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Gg(n,g_,t,s),i[n.toURLString()]=r,r}class b_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(zg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ke(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(y_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&De("Cannot call "+e+" on a deleted database.")}}function E_(n=sc(),e){const t=fr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Fu("database");s&&I_(t,...s)}return t}function I_(n,e,t,s={}){n=re(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&De("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&De('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Xn(Xn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Uu(s.mockUserToken,n.app.options.projectId);r=new Xn(o)}__(i,e,t,r)}/**
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
 */function C_(n){up(qt),$t(new ft("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return v_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ye(Vo,jo,n),Ye(Vo,jo,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function ye(n,e,t){var s;if(n=re(n),ze("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new me,o=(c,l,h)=>{let u=null;c?r.reject(c):(u=new jt(h,new ke(n._repo,n._path),q),r.resolve(new k_(l,u)))},a=si(n,()=>{});return s_(n._repo,n._path,e,o,a,i),r.promise}Pe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Pe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};C_();const cn={apiKey:"AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",authDomain:"market-6e66a.firebaseapp.com",databaseURL:"https://market-6e66a-default-rtdb.firebaseio.com",projectId:"market-6e66a",storageBucket:"market-6e66a.firebasestorage.app",messagingSenderId:"402312269082",appId:"1:402312269082:web:cf304afc54057ea162b0a3"},ql=!!cn.apiKey&&!cn.apiKey.startsWith("여기에")&&!!cn.databaseURL&&!cn.databaseURL.startsWith("여기에");let Ii=null,ro=null,F=null;try{ql&&(Ii=nc(cn),ro=cp(Ii),F=E_(Ii))}catch(n){console.error("[firebase] 초기화 실패:",n)}const Dt=1e7,Le=10,tr=4e3,S_=.018,T_=.008,Ia=3e4,Yl=15e-5,R_=.0018,N_=3*60*1e3,A_=["달빛전자","구름소프트","번개모빌리티","바다식품","별빛바이오","한입게임즈","초록에너지","솜사탕유통","무지개항공","도토리금융","은하반도체","포근화학","두근로보틱스","새벽엔터","고래물산","민들레제약"],P_=["떡상테크","유니콘소프트","미래모빌","첫걸음바이오","샛별에너지","루키게임즈","신화엔터","퀀텀반도체"],Ca=["개미부대","왕개미","큰손","수상한세력","외국인","기관","전설의단타","스캘퍼","장기투자자","물타기달인"],ka=[{text:"{name}, 신제품 공개에 기대감 폭발",effect:[.05,.15]},{text:"{name}, 대형 계약 체결 소식",effect:[.08,.18]},{text:"{name}, 깜짝 실적 발표 소문 확산",effect:[.04,.12]},{text:"{name}, 신사업 진출 선언",effect:[.03,.1]},{text:"{name}, 해외 진출 성공 소식",effect:[.06,.14]},{text:"{name}, 핵심 인력 대거 이탈설",effect:[-.15,-.05]},{text:"{name}, 서비스 대규모 장애 발생",effect:[-.12,-.04]},{text:"{name}, 규제 이슈로 불확실성 확대",effect:[-.18,-.08]},{text:"{name}, 자금난 우려 제기",effect:[-.14,-.06]},{text:"{name}, 경쟁사 등장으로 점유율 하락 전망",effect:[-.1,-.03]}];function Ve(n,e){return Math.floor(Math.random()*(e-n+1))+n}function z(n,e){return Math.random()*(e-n)+n}function he(n,e,t){return Math.max(e,Math.min(t,n))}function M_(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function O_(n,e,t={}){const s=t.type||"stock",i=t.role||null;e=Ee(Math.max(Le,e));let r=1,o=1;return s==="stock"?i==="leader"?(r=z(.8,1.4),o=z(2,3)):i==="sub"?(r=z(.9,1.6),o=z(1.2,2.2)):i==="related"?(r=z(.7,2),o=z(.6,1.8)):(r=z(.5,2.4),o=z(.3,1.2)):s==="preferred"?(r=z(.4,.8),o=z(.5,1.1)):s==="etf"?(r=z(.5,.8),o=z(1.5,2.5)):s==="reit"?(r=z(.35,.7),o=z(.6,1.2)):s==="bond"?(r=z(.2,.45),o=z(.8,1.4)):s==="spac"?(r=z(.2,.5),o=z(.4,.9)):s==="commodity"?(r=z(.9,1.8),o=z(1,2)):(s==="inverse"||s==="leverage")&&(r=1,o=z(1.5,2.5)),{name:n,type:s,role:i||"",sector:t.sector||"",link:t.link||"",price:e,previousPrice:e,basePrice:e,open:e,high:e,low:e,changeRate:0,volume:0,value:0,pressure:0,trend:0,volat:+r.toFixed(2),activ:+o.toFixed(2),heat:0,news:""}}function ii(n){return{preferred:"우선주",etf:"ETF",reit:"리츠",spac:"SPAC",inverse:"인버스",leverage:"레버리지",bond:"채권ETF",commodity:"원자재"}[n]||""}function Ql(n){return{leader:"대장주",sub:"부대장주",related:"관련주",normal:"일반주"}[n]||""}function Kn(n){return!n||n==="stock"}function ri(n){return Math.round(n*1.3)}function oi(n){return Math.max(Le,Math.round(n*.7))}function Jl(n){return n<2e3?1:n<5e3?5:n<2e4?10:n<5e4?50:n<2e5?100:500}function Ee(n){const e=Jl(n);return Math.round(n/e)*e}async function x_(n,e){const t=e.stocks||{},s=Object.keys(t);if(s.length===0)return;let i=null,r=0,o="";if(Math.random()<S_){const I=s.filter(_=>Kn(t[_].type)),g=I.length?I:s,y=g.map(_=>1+(t[_].activ||1)+(t[_].heat||0)*2),S=y.reduce((_,v)=>_+v,0);let b=Math.random()*S;i=g[g.length-1];for(let _=0;_<g.length;_++)if(b-=y[_],b<=0){i=g[_];break}const C=ka[Ve(0,ka.length-1)];r=z(C.effect[0],C.effect[1])*.3,o=C.text.replace("{name}",t[i].name)}const a=Date.now(),c={},l=[];function h(I){const g=(I.activ||1)*(1+(I.heat||0));let y=0,S=0;const b=he(.35+g*.2,.25,.97);if(Math.random()<b){const C=Ve(1,Math.max(2,Math.round(1+g*3)));for(let _=0;_<C;_++){const v=Ve(10,Math.round(60+g*220)),T=.5+he((I.trend||0)*15,-.3,.3),$=Math.random()<T;y+=$?v:-v,S+=v,l.push({nickname:Ca[Ve(0,Ca.length-1)],type:$?"buy":"sell",stockName:I.name,qty:v,price:I.price,time:a})}}return S+=Math.round(Ve(300,2500)*g),{botNet:y,botVolume:S}}function u(I,g,y,S,b={}){const C=g.basePrice||g.price,_=C?(g.price-C)/C:0;y+=he(-_*.01,-.006,.006);let v=Ee(g.price*(1+y));v=he(v,oi(C),ri(C)),v=Math.max(Le,v);const T=`stocks/${I}/`;return c[T+"previousPrice"]=g.price,c[T+"price"]=v,c[T+"changeRate"]=+((v-C)/C*100).toFixed(2),c[T+"volume"]=(g.volume||0)+S,c[T+"value"]=(g.value||0)+S*v,v>(g.high||g.price)&&(c[T+"high"]=v),v<(g.low||g.price)&&(c[T+"low"]=v),(g.pressure||0)!==0&&(c[T+"pressure"]=0),b.trend!=null&&(c[T+"trend"]=+b.trend.toFixed(5)),b.heat!=null&&(b.heat>.001||(g.heat||0)>.001)&&(c[T+"heat"]=+b.heat.toFixed(3)),b.news!=null&&(c[T+"news"]=b.news),v/g.price-1}function d(I){const g=I.volat||1;let y=(I.heat||0)*.92;Math.random()<.006&&(y=he(y+z(.3,1),0,1.6));const S=g*(1+y*.5),b=he((I.trend||0)*.96+(Math.random()-.5)*8e-4*S,-.0025*(1+y*.5),.0025*(1+y*.5));let C=(Math.random()-.5)*.0016*S+b;return Math.random()<.005&&(C+=(Math.random()-.5)*.012*(1+y*.4)),{own:C,trend:b,heat:y}}const f={},m={},w=[];for(const I of s){const g=t[I];if(!Kn(g.type)||g.role!=="leader")continue;const{own:y,trend:S,heat:b}=d(g),{botNet:C,botVolume:_}=h({...g,heat:b});let v=y+he((g.pressure||0)*.002,-.02,.02)+he(C*2e-4,-.008,.008);I===i&&(v+=r);const T=u(I,g,v,_,{trend:S,heat:b,news:I===i?o:null});f[I]=T,m[g.sector]=T,w.push(T)}for(const I of s){const g=t[I];if(!Kn(g.type)||g.role==="leader")continue;const y=g.role==="related"?.7:g.role==="sub"?.45:.2,S=m[g.sector]||0,{own:b,trend:C,heat:_}=d(g),{botNet:v,botVolume:T}=h({...g,heat:_});let $=S*y+b*(1-y*.5);$+=he((g.pressure||0)*.002,-.02,.02)+he(v*2e-4,-.008,.008),I===i&&($+=r);const A=u(I,g,$,T,{trend:C,heat:_,news:I===i?o:null});f[I]=A,w.push(A)}const k=w.length?w.reduce((I,g)=>I+g,0)/w.length:0;for(const I of s){const g=t[I];if(Kn(g.type))continue;const{botNet:y,botVolume:S}=h(g),b=Math.random()-.5;let C=0;switch(g.type){case"etf":C=k+b*.0015;break;case"inverse":C=-k+b*.0015;break;case"leverage":C=2*k+b*.002;break;case"bond":C=-.25*k+2e-4+b*.0012;break;case"reit":C=.2*k+2e-4+b*.004*(g.volat||1);break;case"commodity":C=b*.011*(g.volat||1)+(Math.random()<.01?(Math.random()-.5)*.05:0);break;case"preferred":C=(m[g.sector]||f[g.link]||0)*.85+b*.002;break;case"spac":C=b*.003+(Math.random()<.008?(Math.random()<.7?1:-1)*z(.06,.2):0);break;default:C=b*.005}C+=he((g.pressure||0)*.002,-.02,.02)+he(y*3e-4,-.01,.01),u(I,g,C,S,{})}c.marketTick=a,M_(l),c.botFeed=l.slice(0,4),o&&!c.latestNews&&(c.latestNews={text:o,time:a}),await vt(U(F,`rooms/${n}`),c)}function Ci(n){return Math.round(n||0).toLocaleString("ko-KR")}async function D_(n,e){const t=Date.now(),s=e.stocks||{},i=e.ipo;if(i&&i.status==="subscribing"){if(t<i.endsAt)return;const d=i.applies||{},f=Object.values(d).reduce((S,b)=>S+(b||0),0),m=(i.botDemand||0)+f,w=Math.max(1,m/i.totalShares),k=he(.92+(w-1)*.1+z(-.1,.15),.9,2.3),I=Math.max(Le,Ee(i.offerPrice*k)),g=O_(i.name,I,{type:"stock",role:"normal",sector:"신규상장"});g.ipo=!0;const y=((I-i.offerPrice)/i.offerPrice*100).toFixed(1);await vt(U(F,`rooms/${n}`),{[`stocks/${i.stockId}`]:g,ipo:null,latestNews:{text:`🎉 ${i.name} 상장! 공모가 ${Ci(i.offerPrice)} → 시초가 ${Ci(I)} (${y>=0?"+":""}${y}%) · 경쟁률 ${w.toFixed(1)}:1`,time:t}});for(const[S,b]of Object.entries(d)){const C=b||0,_=Math.floor(C/w),v=i.offerPrice*(C-_);await ye(U(F,`rooms/${n}/players/${S}`),T=>T&&(v>0&&(T.cash=(T.cash||0)+v),_>0&&(T.holdings=T.holdings||{},T.holdings[i.stockId]=(T.holdings[i.stockId]||0)+_),T))}return}if(i||Object.keys(s).length>=90||Math.random()>=T_)return;const r=Object.values(s).map(d=>d.name),o=[...A_,...P_].filter(d=>!r.includes(d));if(!o.length)return;const a=o[Ve(0,o.length-1)],c=Ee(Ve(5e3,6e4)),l=Ve(5e4,2e5),h=Math.floor(l*z(.4,9)),u="ipo"+t.toString(36);await vt(U(F,`rooms/${n}`),{ipo:{stockId:u,name:a,offerPrice:c,totalShares:l,botDemand:h,status:"subscribing",startedAt:t,endsAt:t+Ia},latestNews:{text:`공모주 청약 시작! '${a}' 공모가 ${Ci(c)}원 · ${Math.round(Ia/1e3)}초 후 마감`,time:t}})}async function L_(n,e,t,s){const i=s.ipo;if(!i||i.status!=="subscribing")throw new Error("청약 가능한 공모주가 없습니다.");if(Date.now()>=i.endsAt)throw new Error("청약이 마감되었습니다.");if(t=Math.floor(t),!t||t<1)throw new Error("청약 수량을 확인하세요.");const r=i.offerPrice*t;if(!(await ye(U(F,`rooms/${n}/players/${e}/cash`),a=>{if(a==null)return a;if(!(a<r))return a-r})).committed)throw new Error("청약 증거금(현금)이 부족합니다.");await ye(U(F,`rooms/${n}/ipo/applies/${e}`),a=>(a||0)+t)}function $_(n){if(!n)return 0;const e=Object.values(n.applies||{}).reduce((t,s)=>t+(s||0),0);return((n.botDemand||0)+e)/n.totalShares}async function Ns(n,e,t,s,i,r,o,a){var w;const c=(w=a.stocks)==null?void 0:w[s];if(!c)throw new Error("종목을 선택하세요.");const l=i.side;if(l!=="buy"&&l!=="sell")throw new Error("주문 유형 오류");const h=i.trigger==="above"?"above":"below",u=["gtc","day","ioc"].includes(i.tif)?i.tif:"gtc";if(r=Math.floor(r),!r||r<1)throw new Error("수량을 확인하세요.");if(o=Ee(Number(o)),!o||o<Le)throw new Error("주문 가격을 확인하세요.");const d=Date.now(),f={uid:e,nickname:t,stockId:s,stockName:c.name,side:l,trigger:h,tif:u,label:i.label||"지정가",qty:r,target:o,createdAt:d,expiresAt:u==="day"?d+N_:null},m=Kl(U(F,`rooms/${n}/orders`)).key;return await ti(U(F,`rooms/${n}/orders/${m}`),f),m}async function F_(n,e){await an(U(F,`rooms/${n}/orders/${e}`))}async function U_(n,e){var i;const t=e.orders;if(!t)return;const s=Date.now();for(const[r,o]of Object.entries(t)){const a=(i=e.stocks)==null?void 0:i[o.stockId];if(!a){await an(U(F,`rooms/${n}/orders/${r}`));continue}const c=a.price;if((o.trigger||(o.side==="buy"?"below":"above"))==="below"?c<=o.target:c>=o.target){try{o.side==="buy"?await Xl(n,o.uid,o.nickname,o.stockId,o.qty,e):await oo(n,o.uid,o.nickname,o.stockId,o.qty,e)}catch(u){console.warn("[order] 예약 체결 실패, 취소:",o,u==null?void 0:u.message)}await an(U(F,`rooms/${n}/orders/${r}`));continue}o.tif==="ioc"?await an(U(F,`rooms/${n}/orders/${r}`)):o.expiresAt&&s>o.expiresAt&&await an(U(F,`rooms/${n}/orders/${r}`))}}function B_(n,e){const t=n.orders||{};return Object.entries(t).filter(([,s])=>s.uid===e).map(([s,i])=>({id:s,...i})).sort((s,i)=>(i.createdAt||0)-(s.createdAt||0))}async function Xl(n,e,t,s,i,r){var h;const o=(h=r.stocks)==null?void 0:h[s];if(!o)throw new Error("종목을 선택하세요.");if(i=Math.floor(i),!i||i<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.ceil(a*i*(1+Yl));if(!(await ye(U(F,`rooms/${n}/players/${e}`),u=>{if(!u)return u;if((u.cash||0)<c)return;u.cash=(u.cash||0)-c,u.holdings=u.holdings||{};const d=u.holdings[s]||0;u.avgCost=u.avgCost||{};const f=u.avgCost[s]||0;return u.avgCost[s]=Math.round((d*f+i*a)/(d+i)),u.holdings[s]=d+i,u})).committed)throw new Error("현금(수수료 포함)이 부족합니다.");await Zl(n,s,i,+i,{type:"buy",nickname:t,stockName:o.name,qty:i,price:a,time:Date.now()})}async function oo(n,e,t,s,i,r){var h;const o=(h=r.stocks)==null?void 0:h[s];if(!o)throw new Error("종목을 선택하세요.");if(i=Math.floor(i),!i||i<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.floor(a*i*(1-Yl-R_));if(!(await ye(U(F,`rooms/${n}/players/${e}`),u=>{var f;if(!u)return u;const d=((f=u.holdings)==null?void 0:f[s])||0;if(!(d<i))return u.cash=(u.cash||0)+c,u.holdings[s]=d-i,u.holdings[s]===0&&(delete u.holdings[s],u.avgCost&&delete u.avgCost[s]),u})).committed)throw new Error("보유 수량이 부족합니다.");await Zl(n,s,i,-i,{type:"sell",nickname:t,stockName:o.name,qty:i,price:a,time:Date.now()})}async function W_(n,e,t,s,i){var o,a,c;const r=((c=(a=(o=i.players)==null?void 0:o[e])==null?void 0:a.holdings)==null?void 0:c[s])||0;if(r<1)throw new Error("보유 수량이 없습니다.");return oo(n,e,t,s,r,i)}async function Zl(n,e,t,s,i){await Promise.all([ye(U(F,`rooms/${n}/stocks/${e}/volume`),r=>(r||0)+t),ye(U(F,`rooms/${n}/stocks/${e}/value`),r=>(r||0)+t*i.price),ye(U(F,`rooms/${n}/stocks/${e}/pressure`),r=>(r||0)+s),Kl(U(F,`rooms/${n}/logs`),i)])}function ao(n,e){var i;let t=(n==null?void 0:n.cash)||0;const s=(n==null?void 0:n.holdings)||{};for(const[r,o]of Object.entries(s)){const a=((i=e==null?void 0:e[r])==null?void 0:i.price)||0;t+=a*o}return t}function eu(n,e){return Object.entries(n||{}).map(([t,s])=>({uid:t,nickname:s.nickname,connected:s.connected!==!1,total:ao(s,e)})).sort((t,s)=>s.total-t.total)}const H_=1,As=[{key:"candles1m",win:6e4,cap:240},{key:"candles5m",win:3e5,cap:288},{key:"candles15m",win:9e5,cap:192},{key:"candles1h",win:36e5,cap:168}],tu=2*6e4,V_=6e4,j_=4500;function nr(n,e){return Math.floor(n/e)*e}function Zn(n,e,t){return Math.max(e,Math.min(t,n))}function Sa(){let n=0,e=0;for(;n===0;)n=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e)}function Ta(n,e){const t=n&&n[e]||null;return t?Object.values(t).filter(s=>s&&typeof s.t=="number").sort((s,i)=>s.t-i.t):[]}function G_(n,e,t,s){const i=(t-e)/s,r=Math.max(1,i/4e3),o=n.volat||1,a=n.activ||1,c=n.basePrice||n.price||Le;let l=n.price||c,h=n.trend||0,u=n.heat||0;const d=!n.type||n.type==="stock",f=.0011*o*(d?1:.7),m=5,w=[];for(let k=0;k<s;k++){const I=e+i*k,g=l,y=r/m;let S=g,b=g,C=g;for(let A=0;A<m;A++){h=Zn(h*Math.pow(.99,y)+Sa()*18e-5*o*Math.sqrt(y),-.0016,.0016),Math.random()<.005*y&&(u=Zn(u+(.3+Math.random()*.7),0,1.6)),u*=Math.pow(.94,y);const J=f*(1+u*.5);let O=h*y+Sa()*J*Math.sqrt(y);Math.random()<.0025*y&&(O+=(Math.random()<.5?1:-1)*(.006+Math.random()*.018)*(d?1:.6)),C=C*(1+O),C=c+(C-c)*Math.exp(-.01*y),C=Zn(C,oi(c),ri(c)),C=Math.max(Le,C),S=Math.max(S,C),b=Math.min(b,C)}const _=Ee(C),v=g?Math.abs((_-g)/g):0,T=(400+Math.random()*1800)*a*(1+u*.8),$=Math.round(T*r*(1+v*8));w.push({t:I,o:Ee(g),h:Ee(S),l:Ee(b),c:_,v:$}),l=_}return{candles:w,finalPrice:l,finalBase:c}}function z_(n){const e={};for(const t of As)e[t.key]={};for(const t of n)for(const s of As){const i=nr(t.t,s.win),r=e[s.key],o=r[i];o?(o.h=Math.max(o.h,t.h),o.l=Math.min(o.l,t.l),o.c=t.c,o.v+=t.v):r[i]={t:i,o:t.o,h:t.h,l:t.l,c:t.c,v:t.v}}return e}async function K_(n,e){const t=Date.now();return(await ye(U(F,`rooms/${n}/market/catchupLock`),i=>{if(!(i&&i.expiresAt&&i.expiresAt>t))return{by:e||"anon",at:t,expiresAt:t+V_}})).committed}async function q_(n){try{await vt(U(F,`rooms/${n}/market`),{catchupLock:null})}catch{}}function Y_(n){if(!n||n.status!=="playing")return!1;const e=n.market&&n.market.lastTickAt||n.marketTick||0;return e?Date.now()-e>=tu:!1}async function Q_(n,e,t,s={}){if(!e||!e.stocks)return{applied:!1,reason:"no-stocks"};if(e.status!=="playing")return{applied:!1,reason:"not-playing"};const i=Date.now(),r=e.market&&e.market.lastTickAt||e.marketTick||0,o=i-r;if(!s.force&&o<tu)return{applied:!1,reason:"fresh",elapsed:o};if(!await K_(n,t)&&!s.force)return{applied:!1,reason:"locked"};try{let c=e.stocks||{};try{const w=await so(U(F,`rooms/${n}/stocks`));w.exists()&&(c=w.val())}catch{}const l=Object.keys(c);if(!l.length)return{applied:!1,reason:"no-stocks"};const h=Zn(Math.round(j_/l.length),30,480),u=Math.max(1,Math.round(o/6e4)),d=Math.min(h,u,480),f={};let m=0;for(const w of l){const k=c[w];if(!k||typeof k.price!="number")continue;const I=G_(k,r,i,d),g=z_(I.candles),y=`stocks/${w}/`,S=k.history||{};for(const v of As){const $={...S[v.key]||{}};for(const[O,X]of Object.entries(g[v.key])){const oe=$[O];$[O]=oe?{t:X.t,o:oe.o,h:Math.max(oe.h,X.h),l:Math.min(oe.l,X.l),c:X.c,v:(oe.v||0)+X.v}:X}const A=Object.keys($).map(Number).sort((O,X)=>O-X),J=A.length-v.cap;if(J>0)for(let O=0;O<J;O++)f[y+`history/${v.key}/${A[O]}`]=null;for(const[O,X]of Object.entries(g[v.key]))Number(O)<A[Math.max(0,J)]||(f[y+`history/${v.key}/${O}`]=$[O],m++)}const b=I.finalBase,C=Math.max(Le,Ee(I.finalPrice)),_=I.candles.reduce((v,T)=>v+(T.v||0),0);f[y+"previousPrice"]=k.price,f[y+"price"]=C,f[y+"currentPrice"]=C,f[y+"changeRate"]=+((C-b)/b*100).toFixed(2),f[y+"volume"]=(k.volume||0)+_,f[y+"value"]=(k.value||0)+_*C,C>(k.high||k.price)&&(f[y+"high"]=C),C<(k.low||k.price)&&(f[y+"low"]=C),k.heat&&(f[y+"heat"]=0),k.pressure&&(f[y+"pressure"]=0)}return f["market/tickMs"]=4e3,f["market/lastTickAt"]=i,f["market/lastHistoryAt"]=i,f["market/lastCatchupAt"]=i,f["market/catchupVersion"]=H_,f["market/catchupBy"]=t||"anon",f["market/catchupLock"]=null,f.marketTick=i,await vt(U(F,`rooms/${n}`),f),{applied:!0,elapsed:o,numSteps:d,candlesWritten:m,stocks:l.length}}catch(c){return await q_(n),console.error("[catchup] 실패:",c),{applied:!1,reason:"error",error:c==null?void 0:c.message}}}function J_(){return{cur:{},lastBucket:0,seeded:!1}}async function X_(n,e,t){const s=e.stocks||{},i=Date.now(),r=nr(i,6e4);t.lastBucket||(t.lastBucket=r);for(const[h,u]of Object.entries(s)){if(!u||typeof u.price!="number")continue;let d=t.cur[h];(!d||d.t!==r)&&(d={t:r,o:u.price,h:u.price,l:u.price,c:u.price,v:0,_lastVol:u.volume||0},t.cur[h]=d),d.c=u.price,d.h=Math.max(d.h,u.price),d.l=Math.min(d.l,u.price);const f=Math.max(0,(u.volume||0)-(d._lastVol||0));d.v+=f,d._lastVol=u.volume||0}if(r===t.lastBucket)return;const o=t.lastBucket;let a=s;try{const h=await so(U(F,`rooms/${n}/stocks`));h.exists()&&(a=h.val())}catch{}const c={};let l=!1;for(const h of Object.keys(s)){const u=t.cur[h];if(!u)continue;const d={o:u.o,h:u.h,l:u.l,c:u.c,v:u.v},f=`stocks/${h}/`,m=a[h]&&a[h].history||{};for(const w of As){const k=nr(o,w.win),I=m[w.key]&&m[w.key][k]||null,g=I?{t:k,o:I.o,h:Math.max(I.h,d.h),l:Math.min(I.l,d.l),c:d.c,v:(I.v||0)+d.v}:{t:k,o:d.o,h:d.h,l:d.l,c:d.c,v:d.v};c[f+`history/${w.key}/${k}`]=g;const y=m[w.key]?Object.keys(m[w.key]).map(Number).sort((S,b)=>S-b):[];y.length>w.cap&&y[0]!==k&&(c[f+`history/${w.key}/${y[0]}`]=null)}l=!0}if(t.lastBucket=r,!!l){c["market/lastTickAt"]=i,c["market/lastHistoryAt"]=i,c["market/tickMs"]=4e3;try{await vt(U(F,`rooms/${n}`),c)}catch(h){console.warn("[history] 라이브 캔들 저장 실패:",h==null?void 0:h.message)}}}function nu(n,e){if(n&&String(n).startsWith("ipo"))return'<span class="tag tag-new">NEW</span>';const t=ii(e.type);return t?`<span class="tag ${e.type==="inverse"?"tag-inv":e.type==="leverage"?"tag-lev":"tag-etf"}">${t}</span>`:e.role==="leader"?'<span class="tag tag-leader">대장주</span>':e.role==="sub"?'<span class="tag tag-sub">부대장</span>':""}function R(n){return document.getElementById(n)}function gn(n){return Math.round(n??0).toLocaleString("ko-KR")+"원"}function M(n){return Math.round(n??0).toLocaleString("ko-KR")}function yt(n){return n=n||0,n>=1e12?(n/1e12).toFixed(2)+"조":n>=1e8?(n/1e8).toFixed(1)+"억":n>=1e4?Math.round(n/1e4).toLocaleString("ko-KR")+"만":M(n)}function Z_(n){return M(n)+"주"}const ev=["screen-auth","screen-wait","screen-game","screen-result"];function co(n){ev.forEach(e=>{const t=R(e);t&&t.classList.toggle("hidden",e!==n)})}function tv(n,e,t=!0){const s=R(n);s&&(s.textContent="",s.classList.toggle("error",t))}function su(n){R("fbError").classList.remove("hidden"),n&&(R("fbErrorMsg").textContent=n)}const nv=3,sv=120,Ra=60;let Se={},_n=[],Fe={},Rt=0,An=null,sr={};function iu(){Se={},_n=[],Fe={},Rt=0,An=null,sr={},xs="";for(const n in Os)delete Os[n]}function iv(){if(An)try{localStorage.setItem(An,JSON.stringify({candles:Se,lastVol:Fe,tick:Rt}))}catch{}}function rv(n,e){const t=n.stocks||{},s=n.marketTick||0,i=`mb_candles_${e||"x"}_${n.startedAt||0}`;if(i!==An){An=i,Se={},Fe={},Rt=0;try{const r=JSON.parse(localStorage.getItem(i)||"null");r&&r.candles&&(Se=r.candles,Fe=r.lastVol||{},Rt=r.tick||0)}catch{}}for(const[r,o]of Object.entries(t))Se[r]||(Se[r]=[{t:Date.now(),o:o.price,h:o.price,l:o.price,c:o.price,v:0,_n:0}]),Fe[r]==null&&(Fe[r]=o.volume||0);if(s!==Rt){Rt=s;for(const[o,a]of Object.entries(t)){const c=Se[o]||(Se[o]=[]);let l=c[c.length-1];(!l||l._n>=nv)&&(l={t:Date.now(),o:a.price,h:a.price,l:a.price,c:a.price,v:0,_n:0},c.push(l)),l.c=a.price,l.h=Math.max(l.h,a.price),l.l=Math.min(l.l,a.price);const h=Math.max(0,(a.volume||0)-(Fe[o]||0));l.v+=h,Fe[o]=a.volume||0,l._n++,c.length>sv&&c.shift()}const r=n.botFeed?Object.values(n.botFeed):[];for(const o of r)_n.unshift({...o,bot:!0});_n.length>Ra&&(_n.length=Ra),lv(t),Lv(t),iv()}}let Nt=new Set(JSON.parse(localStorage.getItem("mb_watch")||"[]")),ut=JSON.parse(localStorage.getItem("mb_alerts")||"{}");function ov(n){Nt.has(n)?Nt.delete(n):Nt.add(n),localStorage.setItem("mb_watch",JSON.stringify([...Nt]))}function av(n,e){e>0?ut[n]=e:delete ut[n],localStorage.setItem("mb_alerts",JSON.stringify(ut))}function cv(n){return ut[n]||0}function lv(n){for(const e of Object.values(n)){const t=ut[e.name],s=sr[e.name];if(t&&s!=null){const i=s<t&&e.price>=t,r=s>t&&e.price<=t;if(i||r){H(`🔔 ${e.name} 알림가 ${M(t)}원 ${i?"돌파":"하향"}!`,i?"up":"down"),delete ut[e.name],localStorage.setItem("mb_alerts",JSON.stringify(ut));try{window.Notification&&Notification.permission==="granted"&&new Notification("STONK Battle",{body:`${e.name} ${M(t)}원 도달`})}catch{}}}sr[e.name]=e.price}}function uv(n){const{roomCode:e,roomData:t,uid:s,selectedStockId:i}=n,r=R("gameRoomCode");r&&(r.textContent=e),rv(t,e),hv(t,s),Nv(t,s),Av(t,s),Mv(t),fv(t,s),ru(n),Pv(t);const o=_v();o==="home"?(Fv(t),wv(t)):o==="detail"?(bv(t,i),Rv(t,i),dv(t,s)):o==="feed"?Bv(t):o==="screener"?Wv(t):o==="account"&&Hv(t,s)}function hv(n,e){var o;const t=(o=n.players)==null?void 0:o[e],s=t&&t.nickname||"나",i=R("navNick");i&&(i.textContent=s);const r=R("navAvatar");r&&(r.textContent=s.slice(0,1).toUpperCase())}function ru(n){const e=n.roomData,t=R("marketStatusChip"),s=R("msDot"),i=R("msLabel"),r=R("marketStatusPanel");if(!e||!t||!s||!i||!r)return;const o=e.market||{},a=o.lastTickAt||e.marketTick||0,c=o.lastCatchupAt||0,l=a?Math.max(0,Math.round((Date.now()-a)/6e4)):null,h=e.hostId===n.uid;let u=0,d=0,f=0,m=0;for(const y of Object.values(e.stocks||{})){const S=y.history;S&&(S.candles1m&&(u+=Object.keys(S.candles1m).length),S.candles5m&&(d+=Object.keys(S.candles5m).length),S.candles15m&&(f+=Object.keys(S.candles15m).length),S.candles1h&&(m+=Object.keys(S.candles1h).length))}const w=u+d+f+m>0,k=l!=null&&l<2;if(s.className="status-dot "+(k?"ok":l==null?"muted":"warn"),i.textContent=k?"시장 최신":l==null?"대기":`${l}분 전`,r.classList.contains("hidden"))return;const I=y=>y?`${ht(new Date(y).getHours())}:${ht(new Date(y).getMinutes())}`:"-",g=(y,S,b)=>`<div class="ms-row"><span>${y}</span><b class="${b||""}">${S}</b></div>`;r.innerHTML=g("방 코드",W(n.roomCode||"-"))+g("연결","연결됨","up")+g("권한",h?"보정 주체 (방장)":"읽기 전용",h?"":"muted")+g("마지막 tick",I(a))+g("마지막 보정",c?I(c):"없음")+g("시장",k?"최신 상태":l==null?"tick 기록 없음":`${l}분 전 데이터 · ${h?"재접속 시 자동 보정":"방장/관리자가 보정"}`,k?"up":"down")+g("캔들",w?`1m ${u} · 5m ${d} · 15m ${f} · 1h ${m}`:"아직 없음")}function dv(n,e){const t=R("orderList");if(!t)return;const s=B_(n,e);if(!s.length){t.innerHTML="";return}t.innerHTML=s.map(i=>{const r=i.side==="buy"?"up":"down",o=i.tif==="day"?" · 당일":i.tif==="ioc"?" · IOC":"",a=i.label||(i.side==="buy"?"매수":"매도");return`<li class="order-item">
        <span class="order-badge ${r}">${W(a)}</span>
        <span class="order-name">${W(i.stockName)}</span>
        <span class="order-detail">${M(i.target)}원 · ${M(i.qty)}주${o}</span>
        <button class="order-cancel" data-cancel="${i.id}" title="취소">✕</button>
      </li>`}).join("")}let Ps=0;function fv(n,e){var r;const t=R("ipoPanel");if(!t)return;const s=n.ipo;if(!s||s.status!=="subscribing"){t.classList.add("hidden"),Ps=0;return}Ps=s.endsAt,t.classList.remove("hidden"),R("ipoName").textContent=s.name,R("ipoPrice").textContent=M(s.offerPrice)+"원",R("ipoShares").textContent=M(s.totalShares)+"주",R("ipoRatio").textContent=$_(s).toFixed(1)+" : 1";const i=((r=s.applies)==null?void 0:r[e])||0;R("ipoMyApply").textContent=i?`내 청약 ${M(i)}주 (증거금 ${yt(i*s.offerPrice)}원)`:"아직 청약하지 않았어요",ou()}function ou(n){const e=R("ipoCountdown");if(!e||!Ps)return;const t=Math.max(0,Math.ceil((Ps-Date.now())/1e3));e.textContent=t+"초",e.classList.toggle("urgent",t<=5)}function Ct(n){return n>0?"up":n<0?"down":"flat"}function ai(n){return n>0?"▲":n<0?"▼":"−"}let Ms="";function ki(n){Ms=(n||"").trim().toLowerCase()}let au="all",cu="value",ir="rising",es="asset";function pv(n){au=n||"all"}function Na(n){cu=n||"value"}function mv(n){ir=n||"rising"}function gv(n){es=n||"asset"}function _v(){var n;return((n=document.getElementById("screen-game"))==null?void 0:n.dataset.tab)||"home"}function vv(n,e){return Ms?[e.name,n,e.ticker,e.sector,e.type,e.role,ii(e.type),Ql(e.role),String(n).startsWith("ipo")?"신규상장 new":""].join(" ").toLowerCase().includes(Ms):!0}function yv(n){let e=0;const t=String(n);for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return 5e6+e%60*8e6}function lu(n){let e=0;const t=String(n||"");for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return`hsl(${e%360} 60% 47%)`}function uu(n,e){const t={value:(s,i)=>(i[1].value||0)-(s[1].value||0),volume:(s,i)=>(i[1].volume||0)-(s[1].volume||0),up:(s,i)=>(i[1].changeRate||0)-(s[1].changeRate||0),down:(s,i)=>(s[1].changeRate||0)-(i[1].changeRate||0)};return n.sort(t[e]||t.value)}function hu(n,e,t){const s=t.changeRate>0?"+":"",i=Ct(t.changeRate),r=Nt.has(t.name),o=t.price*yv(e),a=t.sector||ii(t.type)||"종목";return`<li class="rank-item" data-id="${e}">
    <span class="rk-rank"><button class="star-btn ${r?"on":""}" data-star="${W(t.name)}" title="관심">${r?"★":"☆"}</button>${n}</span>
    <span class="rk-name"><span class="stk-ico" style="background:${lu(t.name)}">${W((t.name||"?").slice(0,1))}</span><span class="stk-meta"><span class="stk-nm">${W(t.name)} ${nu(e,t)}</span><span class="stk-sub">${W(a)}</span></span></span>
    <span class="rk-price ${i}">${M(t.price)}</span>
    <span class="rk-rate ${i}">${ai(t.changeRate)} ${s}${(t.changeRate??0).toFixed(2)}%</span>
    <span class="rk-value">${yt(t.value)}</span>
    <span class="rk-cap">${yt(o)}</span>
    <span class="rk-sector"><span class="sec-pill">${W(t.sector||"-")}</span></span>
  </li>`}function wv(n){const e=R("stockList");if(!e)return;const t=e.scrollTop,s=n.stocks||{};let i=Object.entries(s).filter(([r,o])=>vv(r,o));if(au==="watch"&&(i=i.filter(([,r])=>Nt.has(r.name))),i=uu(i,cu),!i.length){e.innerHTML=`<li class="stock-empty">${Ms?"검색 결과 없음":"종목이 없습니다"}</li>`;return}e.innerHTML=i.map(([r,o],a)=>hu(a+1,r,o)).join(""),e.scrollTop=t}function bv(n,e){const s=(n.stocks||{})[e];if(!s){R("chartStockName").textContent="-",R("selStockPrice").textContent="-",R("selStockChange").textContent="";return}const i=s.basePrice||s.price,r=s.price-i,o=Ct(s.changeRate),a=s.changeRate>0?"+":"";R("chartStockName").textContent=s.name;const c=R("detailTag");if(c){const d=ii(s.type),f=Ql(s.role);let m,w="virtual-tag";d?(m=d,w+=s.type==="inverse"?" tag-inv":s.type==="leverage"?" tag-lev":" tag-etf"):String(e).startsWith("ipo")?(m="신규상장",w+=" tag-new"):s.sector?(m=f?`${s.sector}·${f}`:s.sector,s.role==="leader"&&(w+=" tag-leader")):m="가상",c.textContent=m,c.className=w}const l=R("selStockPrice"),h=Os[e];if(l.textContent=M(s.price),l.className="big-price "+o,h!=null&&s.price!==h){const d=s.price>h?"flash-up":"flash-down";l.classList.remove("flash-up","flash-down"),l.offsetWidth,l.classList.add(d)}Os[e]=s.price,R("selStockChange").className="change "+o,R("selStockChange").textContent=`${ai(s.changeRate)} ${a}${M(r)} (${a}${(s.changeRate??0).toFixed(2)}%)`,Si("ohlcOpen",s.open,i),Si("ohlcHigh",s.high,i),Si("ohlcLow",s.low,i),R("ohlcUpper").textContent=M(ri(i)),R("ohlcLower").textContent=M(oi(i)),R("ohlcVol").textContent=Z_(s.volume),R("ohlcValue").textContent=yt(s.value)+"원";const u=R("selStockNews");u.textContent=s.news?`📰 ${s.news}`:"",u.className="news-line"+(s.news?" "+o:" muted"),fu(n,e,i,s)}const Os={};function Si(n,e,t){const s=R(n);s.textContent=M(e),s.className="ohlc-v "+Ct((e||0)-t)}function ct(n){return getComputedStyle(document.body).getPropertyValue(n).trim()||"#000"}const rr={tick:{win:30*6e4,tiers:["candles1m","candles5m"],count:16},"1d":{win:864e5,tiers:["candles5m","candles1m"],count:288},"3d":{win:2592e5,tiers:["candles1h","candles15m","candles5m"],count:216},"1w":{win:6048e5,tiers:["candles1h","candles15m"],count:224},"1m":{win:2592e6,tiers:["candles1h","candles15m","candles5m","candles1m"],count:360},all:{win:1/0,tiers:["candles1h","candles15m","candles5m","candles1m"],count:500}},Ev={tick:"1틱","1d":"1일","3d":"3일","1w":"1주","1m":"1달",all:"전체"};function Aa(n){if(n<=0)return"0분";const e=Math.round(n/6e4);if(e<60)return e+"분";const t=Math.floor(e/60),s=e%60;if(t<24)return s?`${t}시간 ${s}분`:`${t}시간`;const i=Math.floor(t/24),r=t%24;return r?`${i}일 ${r}시간`:`${i}일`}function Iv(n,e){const t=Ev[n]||n;if(!e||!e.length)return t+" · 데이터 없음";if(n==="tick")return"1틱 · 최근 흐름";const s=e[0].t,i=e[e.length-1].t;if(!(s>1e11)||!(i>1e11))return t+" · 최근 흐름";const r=i-s,o=(rr[n]||{}).win;return o&&o!==1/0&&r<o*.9?`${t} · 아직 ${Aa(r)} 데이터만 있음`:`${t} · 누적 ${Aa(r)} 데이터`}function ht(n){return(n<10?"0":"")+n}function Cv(n,e){if(!(n>1e11))return"";const t=new Date(n),s=ht(t.getHours())+":"+ht(t.getMinutes()),i=t.getMonth()+1+"/"+t.getDate();return e==="tick"||e==="1d"?s:e==="3d"||e==="1w"?i+" "+s:i}function kv(n){if(!(n>1e11))return"";const e=new Date(n);return e.getMonth()+1+"/"+ht(e.getDate())+" "+ht(e.getHours())+":"+ht(e.getMinutes())}let vn="1d",ts=-1,ie=null,ot=null,Pa=!1,xs="";function Ma(n,e){if(n.length&&e.price!=null&&n[n.length-1].c!==e.price){const t=n[n.length-1],s=t.t>1e11?t.t+1e3:t.t+1;n.push({t:s,o:t.c,h:Math.max(t.c,e.price),l:Math.min(t.c,e.price),c:e.price,v:0,_live:!0})}return n}function du(n,e,t){const s=rr[t]||rr["1d"],i=n.history||null,r=Se[e]||[],o=Date.now(),a=s.win===1/0?-1/0:o-s.win;if(t==="tick"){let l=r.slice(-12).map((h,u)=>({t:h.t||o-(12-u)*6e3,o:h.o,h:h.h,l:h.l,c:h.c,v:h.v||0}));if(l.length<2&&i){const h=Ta(i,"candles1m");h.length&&(l=h.slice(-s.count).map(u=>({...u})))}return Ma(l,n)}let c=[];if(i)for(const l of s.tiers){let h=Ta(i,l);if(h.length){if(h=h.filter(u=>u.t>=a),h.length>=2){c=h.map(u=>({...u}));break}!c.length&&h.length&&(c=h.map(u=>({...u})))}}return!c.length&&r.length&&(c=r.map((l,h)=>({t:l.t||o-(r.length-h)*6e3,o:l.o,h:l.h,l:l.l,c:l.c,v:l.v||0})).filter(l=>l.t>=a)),c=Ma(c,n),c.length>s.count&&(c=c.slice(c.length-s.count)),c}function fu(n,e,t,s){ot={room:n,id:e,base:t};const i=du(s,e,vn),r=i.length?i[i.length-1]:null,o=`${e}|${vn}|${i.length}|${r?r.c+":"+r.v:""}|${t}`;if(o===xs){Oa();return}xs=o,ts=-1,pu(),or(R("priceChart"),i,t,-1);const a=R("chartRangeNote");a&&(a.textContent=Iv(vn,i)),Oa()}function Oa(){if(Pa)return;Pa=!0;const n=R("chartPeriods");n&&n.addEventListener("click",t=>{var i;const s=t.target.closest(".cp-btn");if(s&&(vn=s.dataset.period,n.querySelectorAll(".cp-btn").forEach(r=>r.classList.toggle("is-active",r===s)),ot)){const r=(i=ot.room.stocks)==null?void 0:i[ot.id];r&&fu(ot.room,ot.id,ot.base,r)}});const e=R("priceChart");if(e){const t=i=>{if(!ie)return;const r=e.getBoundingClientRect(),o=(i.touches?i.touches[0].clientX:i.clientX)-r.left,a=Math.max(0,Math.min(ie.candles.length-1,Math.floor(o/ie.cw)));a!==ts&&(ts=a,or(e,ie.candles,ie.base,a),Sv(a))},s=()=>{ts=-1,ie&&or(e,ie.candles,ie.base,-1),pu()};e.addEventListener("mousemove",t),e.addEventListener("mouseleave",s),e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchmove",t,{passive:!0}),e.addEventListener("touchend",s)}}function Sv(n){const e=R("chartTip");if(!e||!ie)return;const t=ie.candles[n];if(!t)return;const s=t.o?(t.c-t.o)/t.o*100:0,i=s>0?"up":s<0?"down":"flat",r=kv(t.t)||`구간 ${n+1}`;e.innerHTML=`
    <div class="tip-when">${W(r)}</div>
    <div class="tip-row"><span>시작</span><b>${M(t.o)}</b></div>
    <div class="tip-row"><span>마지막</span><b>${M(t.c)}</b></div>
    <div class="tip-row"><span>최고</span><b class="up">${M(t.h)}</b></div>
    <div class="tip-row"><span>최저</span><b class="down">${M(t.l)}</b></div>
    <div class="tip-row"><span>거래량</span><b>${M(t.v)}</b></div>
    <div class="tip-row"><span>등락률</span><b class="${i}">${s>=0?"+":""}${s.toFixed(2)}%</b></div>`,e.classList.remove("hidden");const o=n*ie.cw+ie.cw/2,a=o>ie.plotW*.6?"left":"right";e.style.left=a==="right"?`${o+10}px`:"",e.style.right=a==="left"?`${ie.cssW-o+10}px`:"",e.style.top="8px"}function pu(){const n=R("chartTip");n&&n.classList.add("hidden")}function or(n,e,t,s){if(!n)return;const i=window.devicePixelRatio||1,r=n.clientWidth||600,o=n.clientHeight||260;n.width=Math.round(r*i),n.height=Math.round(o*i);const a=n.getContext("2d");if(a.setTransform(i,0,0,i,0,0),a.clearRect(0,0,r,o),!e.length){ie=null;return}const c=56,l=r-c,h=o*.18,u=o*.06,d=o-h-u;let f=-1/0,m=1/0,w=0;for(const A of e)f=Math.max(f,A.h),m=Math.min(m,A.l),w=Math.max(w,A.v||0);f===m&&(f+=1,m-=1);const k=(f-m)*.14;f+=k,m-=k;const I=ct("--up"),g=ct("--down"),y="rgba(255,255,255,0.07)",S=ct("--muted"),b=A=>d*(1-(A-m)/(f-m)),C=Math.max(e.length,14),_=l/C,v=Math.max(2.5,Math.min(14,_*.64));ie={cw:_,plotW:l,priceH:d,volH:h,cssW:r,cssH:o,candles:e,base:t,lo:m,hi:f},a.font="11px Pretendard, sans-serif",a.textBaseline="middle";const T=4;for(let A=0;A<=T;A++){const J=d/T*A,O=f-(f-m)/T*A;a.strokeStyle=y,a.lineWidth=1,a.beginPath(),a.moveTo(0,Math.round(J)+.5),a.lineTo(l,Math.round(J)+.5),a.stroke(),a.fillStyle=S,a.textAlign="left",a.fillText(M(O),l+6,Math.min(d-6,Math.max(8,J)))}if(s>=0&&s<e.length){const A=s*_+_/2;a.strokeStyle="rgba(120,140,180,0.55)",a.lineWidth=1,a.setLineDash([3,3]),a.beginPath(),a.moveTo(Math.round(A)+.5,0),a.lineTo(Math.round(A)+.5,o),a.stroke(),a.setLineDash([])}e.forEach((A,J)=>{const O=J*_+_/2,oe=A.c>=A.o?I:g;a.strokeStyle=oe,a.fillStyle=oe,a.lineWidth=1,a.beginPath(),a.moveTo(Math.round(O)+.5,b(A.h)),a.lineTo(Math.round(O)+.5,b(A.l)),a.stroke();const en=b(A.o),tn=b(A.c),ci=Math.min(en,tn),Vn=Math.max(1.5,Math.abs(tn-en));if(a.fillRect(O-v/2,ci,v,Vn),w>0){const po=(h-4)*((A.v||0)/w);a.globalAlpha=.4,a.fillRect(O-v/2,o-po,v,po),a.globalAlpha=1}});const $=e[e.length-1].c;if($<=f&&$>=m){const A=b($),O=$>=(t||$)?I:g;a.strokeStyle=O,a.lineWidth=1,a.setLineDash([4,3]),a.beginPath(),a.moveTo(0,Math.round(A)+.5),a.lineTo(l,Math.round(A)+.5),a.stroke(),a.setLineDash([]);const X=M($);a.font="bold 11px Pretendard, sans-serif";const oe=a.measureText(X).width,en=Math.min(d-9,Math.max(9,A));a.fillStyle=O,a.beginPath();const tn=l+2,ci=Math.min(c-4,oe+10),Vn=17;Tv(a,tn,en-Vn/2,ci,Vn,4),a.fill(),a.fillStyle="#fff",a.textAlign="left",a.fillText(X,tn+5,en)}if(e.length>=2){a.font="10px Pretendard, sans-serif",a.fillStyle=S;const A=[0,Math.floor((e.length-1)/2),e.length-1],J={};A.forEach(O=>{if(J[O])return;J[O]=1;const X=Cv(e[O].t,vn);if(!X)return;a.textAlign=O===0?"left":O===e.length-1?"right":"center";const oe=O===0?2:O===e.length-1?l-2:O*_+_/2;a.fillText(X,oe,o-2)})}}function Tv(n,e,t,s,i,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+s,t,e+s,t+i,r),n.arcTo(e+s,t+i,e,t+i,r),n.arcTo(e,t+i,e,t,r),n.arcTo(e,t,e+s,t,r),n.closePath()}function lo(){xs="";const n=R("priceChart");if(n){const e=n.getContext("2d");e&&e.clearRect(0,0,n.width,n.height)}}function Rv(n,e){var l;const t=R("orderbook");if(!t)return;const s=(l=n.stocks)==null?void 0:l[e];if(!s){t.innerHTML="";return}const i=Jl(s.price),r=s.basePrice||s.price,o=5e4,a=()=>Math.floor((Math.random()*.9+.1)*12e3),c=[];for(let h=5;h>=1;h--){const u=xa(s.price+h*i,r);c.push(Da(u,a(),"ask",o,r))}c.push(`<div class="ob-current ${Ct(s.changeRate)}">${M(s.price)}</div>`);for(let h=1;h<=5;h++){const u=xa(s.price-h*i,r);c.push(Da(u,a(),"bid",o,r))}t.innerHTML=c.join("")}function xa(n,e){return Math.max(oi(e),Math.min(ri(e),Math.max(Le,n)))}function Da(n,e,t,s,i){const r=Ct(n-i),o=Math.min(100,e/s*100);return t==="ask"?`<div class="ob-row ask">
      <span class="ob-qty"><span class="ob-bar" style="width:${o}%"></span><b>${M(e)}</b></span>
      <span class="ob-price ${r}">${M(n)}</span>
      <span></span>
    </div>`:`<div class="ob-row bid">
    <span></span>
    <span class="ob-price ${r}">${M(n)}</span>
    <span class="ob-qty"><b>${M(e)}</b><span class="ob-bar" style="width:${o}%"></span></span>
  </div>`}function Nv(n,e){var f;const t=(f=n.players)==null?void 0:f[e],s=n.stocks||{};if(!t)return;const i=ao(t,s);R("myCash").textContent=gn(t.cash),R("myAsset").textContent=gn(i);const r=R("myAssetTop");r&&(r.textContent=yt(i)+"원");const o=t.avgCost||{},a=t.holdings||{},c=Object.entries(a).filter(([,m])=>m>0);let l=0,h=0;c.forEach(([m,w])=>{const k=s[m];if(!k)return;const I=(o[m]||k.price)*w;l+=k.price*w-I,h+=I});const u=R("myPnl");if(u)if(c.length){const m=h?l/h*100:0,w=l>0?"up":l<0?"down":"flat";u.className="asset-pnl "+w,u.textContent=`평가손익 ${l>=0?"+":""}${M(l)}원 (${m>=0?"+":""}${m.toFixed(2)}%)`}else u.className="asset-pnl muted",u.textContent="평가손익 —";const d=R("holdingsList");if(d.innerHTML="",c.length===0){const m=document.createElement("li");m.className="muted",m.textContent="보유 종목이 없습니다",d.appendChild(m);return}for(const[m,w]of c){const k=s[m];if(!k)continue;const I=o[m]||0,g=I?(k.price-I)*w:0,y=I?(k.price-I)/I*100:0,S=g>0?"up":g<0?"down":"flat",b=document.createElement("li");b.className="holding-item",b.innerHTML=`
      <div class="hold-row1"><span class="hold-name">${W(k.name)}</span><b>${M(w)}주</b></div>
      <div class="hold-row2 muted">평단 ${I?M(I):"-"} · 평가 ${yt(k.price*w)}원</div>
      <div class="hold-row2 ${S}">${g>=0?"+":""}${M(g)}원 (${y>=0?"+":""}${y.toFixed(2)}%)</div>`,d.appendChild(b)}}let La=null;function H(n,e=""){const t=R("toast");t&&(t.textContent=n,t.className="toast show"+(e?" toast-"+e:""),clearTimeout(La),La=setTimeout(()=>{t.className="toast"+(e?" toast-"+e:"")},1800))}function Av(n,e){const t=R("rankingList");t.innerHTML="",eu(n.players,n.stocks).forEach(i=>{const r=document.createElement("li"),o=((i.total-Dt)/Dt*100).toFixed(2),a=i.total>=Dt?"up":"down";r.innerHTML=`<span>${W(i.nickname)}${i.uid===e?" (나)":""}</span> <b>${yt(i.total)}원</b> <span class="${a}">${o>=0?"+":""}${o}%</span>`,i.connected||r.classList.add("muted"),t.appendChild(r)})}function Pv(n){const e=R("logList");e.innerHTML="";const s=[...Object.values(n.logs||{}),..._n].sort((i,r)=>r.time-i.time).slice(0,40);for(const i of s){const r=document.createElement("li"),o=i.type==="buy"?"매수":"매도",a=i.type==="buy"?"up":"down",c=new Date(i.time).toLocaleTimeString("ko-KR",{hour12:!1}),l=i.bot?`<b class="bot-name">${W(i.nickname)}</b>`:`<b>${W(i.nickname)}</b>`;r.innerHTML=`<span class="muted">${c}</span> ${l} <span class="${a}">${o}</span> ${W(i.stockName)} ${M(i.qty)}주 @ ${M(i.price)}`,e.appendChild(r)}}function Mv(n){const e=R("newsBar"),t=n.latestNews;if(!t||Date.now()-t.time>12e3){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent=`📢 ${t.text}`}function Ov(n){const e=[R("tickBar"),R("tickBarHome")],t=[R("tickCountdown"),R("tickCountdownHome")],s=n&&(n.marketTick||n.market&&n.market.lastTickAt)||0;if(!s){e.forEach(l=>{l&&(l.style.width="0%")}),t.forEach(l=>{l&&(l.textContent="")});return}const i=Date.now()-s,o=(Math.max(0,Math.min(1,i/tr))*100).toFixed(1)+"%";e.forEach(l=>{l&&(l.style.width=o)});const a=Math.max(0,Math.ceil((tr-i)/1e3)),c=a>0?a+"s":"곧";t.forEach(l=>{l&&(l.textContent=c)})}function xv(n){const e=Math.max(0,Math.floor(n/1e3)),t=String(Math.floor(e/60)).padStart(2,"0"),s=String(e%60).padStart(2,"0");R("gameTimer").textContent=`${t}:${s}`}function W(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let Ds={};const Dv=60;function mu(n){let e=0,t=0;const s={};for(const o of Object.values(n||{})){const a=(o.value||0)+1;e+=a,t+=a*(o.changeRate||0);const c=o.sector||"기타",l=s[c]||(s[c]={w:0,r:0});l.w+=a,l.r+=a*(o.changeRate||0)}const i=e?t/e:0,r=Object.entries(s).map(([o,a])=>({name:o,rate:a.w?a.r/a.w:0,w:a.w})).sort((o,a)=>a.w-o.w);return{comp:i,sectors:r}}function $a(n,e){const t=Ds[n]||(Ds[n]=[]);t.push(e),t.length>Dv&&t.shift()}function Lv(n){const{comp:e,sectors:t}=mu(n);$a("__comp__",1e3*(1+e/100)),t.forEach(s=>$a("sec:"+s.name,1e3*(1+s.rate/100)))}function $v(n,e){if(!n||n.length<2)return"";const t=140,s=28,i=Math.min(...n),r=Math.max(...n),o=r-i||1,a=n.map((l,h)=>`${(h/(n.length-1)*t).toFixed(1)},${(s-(l-i)/o*s).toFixed(1)}`).join(" "),c=e>=0?"var(--up)":"var(--down)";return`<svg viewBox="0 0 ${t} ${s}" preserveAspectRatio="none"><polyline points="${a}" fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function Fa(n,e,t,s){const i=Ct(t),r=t>0?"+":"";return`<div class="index-card"><span class="ix-name">${W(n)}</span><span class="ix-val">${e.toFixed(2)}</span><span class="ix-rate ${i}">${ai(t)} ${r}${t.toFixed(2)}%</span><div class="ix-spark">${$v(s,t)}</div></div>`}function Fv(n){const e=R("indexStrip");if(!e)return;const{comp:t,sectors:s}=mu(n.stocks||{}),i=[Fa("STONK 종합",1e3*(1+t/100),t,Ds.__comp__)];s.slice(0,6).forEach(r=>i.push(Fa(r.name,1e3*(1+r.rate/100),r.rate,Ds["sec:"+r.name]))),e.innerHTML=i.join("")}function Uv(n){const e=new Date(n.when).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"});return`<div class="feed-card"><div class="feed-card-head"><span class="feed-ava">${W((n.who||"S").slice(0,1))}</span><div><div class="feed-who">${W(n.who)}</div><div class="feed-when">${e}</div></div></div>${n.title?`<div class="feed-title">${W(n.title)}</div>`:""}<div class="feed-body">${W(n.body)}</div></div>`}function Bv(n,e){const t=R("feedView");if(!t)return;const s=[],i=n.latestNews;i&&(i.text||i.title)&&s.push({who:"STONK 뉴스",when:i.time||Date.now(),title:i.title||"📢 시장 속보",body:i.text||i.body||""}),Object.values(n.botFeed||{}).slice(-10).reverse().forEach(c=>s.push({who:c.nickname||"트레이더",when:c.time||Date.now(),title:"",body:`${c.type==="buy"?"매수":"매도"} · ${c.stockName||"종목"} ${M(c.qty||0)}주 @ ${M(c.price||0)}`}));const r=eu(n.players,n.stocks).slice(0,5),o=[...new Set(Object.values(n.stocks||{}).map(c=>c.sector).filter(Boolean))].slice(0,8),a=r.map((c,l)=>{const h=(c.total-Dt)/Dt*100;return`<li><span class="fr-no">${l+1}</span><span class="fr-name">${W(c.nickname)}</span><span class="fr-val ${h>=0?"up":"down"}">${h>=0?"+":""}${h.toFixed(1)}%</span></li>`}).join("");t.innerHTML=`
    <aside class="feed-side"><button class="is-active">전체</button><button>팔로잉</button><button>뉴스</button></aside>
    <div class="feed-main">
      ${s.length?s.map(Uv).join(""):'<div class="feed-card"><div class="feed-body muted">아직 소식이 없습니다. 거래가 시작되면 시장 속보와 체결 소식이 올라옵니다.</div></div>'}
      <a class="feed-card" id="feedBoardLink" target="_blank" rel="noopener" style="text-decoration:none;color:var(--brand);font-weight:700">전체 소식 보기 → STONK Board ↗</a>
    </div>
    <aside class="feed-aside">
      <div class="feed-rank-card"><h4 class="rail-h">주간 프로필 랭킹</h4><ol class="feed-rank-list">${a||'<li class="muted">참가자 없음</li>'}</ol></div>
      <div class="feed-rank-card"><h4 class="rail-h">주제별 커뮤니티</h4><div class="feed-comm">${o.map(c=>`<span>＃ ${W(c)}</span>`).join("")||'<span class="muted">-</span>'}</div></div>
    </aside>`}const Ti=[{key:"rising",label:"연속 상승세",badge:"인기",fn:(n,e)=>(e.changeRate||0)>0,sort:"up"},{key:"value",label:"거래대금 상위",fn:()=>!0,sort:"value"},{key:"surge",label:"급등주",fn:(n,e)=>(e.changeRate||0)>=5,sort:"up"},{key:"plunge",label:"급락주",fn:(n,e)=>(e.changeRate||0)<=-5,sort:"down"},{key:"cheap",label:"저가주",fn:(n,e)=>(e.price||0)<2e3,sort:"value"},{key:"pricey",label:"고가주",fn:(n,e)=>(e.price||0)>=1e5,sort:"value"},{key:"lev",label:"레버리지·인버스",fn:(n,e)=>e.type==="leverage"||e.type==="inverse",sort:"value"},{key:"etf",label:"ETF·리츠",fn:(n,e)=>e.type==="etf"||e.type==="reit",sort:"value"},{key:"leader",label:"대장주",fn:(n,e)=>e.role==="leader",sort:"value"}];function Wv(n){const e=R("screenerPresets"),t=R("screenerHead"),s=R("screenerList");if(!e||!s)return;e.innerHTML='<div class="sa-title">주식 골라보기 목록</div>'+Ti.map(o=>`<button data-preset="${o.key}" class="${o.key===ir?"is-active":""}">${W(o.label)}${o.badge?` <span class="sa-badge">${o.badge}</span>`:""}</button>`).join("");const i=Ti.find(o=>o.key===ir)||Ti[0];t&&(t.innerHTML=`<h2>${W(i.label)}</h2><p>조건에 맞는 종목을 모았습니다 · 모두 가상 데이터</p>`);let r=Object.entries(n.stocks||{}).filter(([o,a])=>i.fn(o,a));r=uu(r,i.sort),s.innerHTML=r.length?r.map(([o,a],c)=>hu(c+1,o,a)).join(""):'<li class="stock-empty">조건에 맞는 종목이 없습니다</li>'}function Hv(n,e){var g,y;const t=R("accountView");if(!t)return;const s=(g=n.players)==null?void 0:g[e];if(!s){t.innerHTML='<div class="acct-main"><div class="acct-section muted">계좌 정보를 불러오는 중…</div></div>';return}const i=n.stocks||{},r=ao(s,i),o=s.avgCost||{},a=Object.entries(s.holdings||{}).filter(([,S])=>S>0);let c=0,l=0,h=0;a.forEach(([S,b])=>{const C=i[S];if(!C)return;const _=(o[S]||C.price)*b;c+=C.price*b,l+=C.price*b-_,h+=_});const u=h?l/h*100:0,d=l>0?"up":l<0?"down":"flat",f=((y=R("gameRoomCode"))==null?void 0:y.textContent)||"-",m=Object.values(n.logs||{}).filter(S=>S.uid===e).sort((S,b)=>b.time-S.time).slice(0,20),w=Object.values(n.orders||{}).filter(S=>S.uid===e),k=["asset","tx","orders"].map(S=>{const b={asset:"자산",tx:"거래내역",orders:"주문내역"}[S];return`<button data-acct="${S}" class="${S===es?"is-active":""}">${b}</button>`}).join("");let I="";if(es==="asset"){const S=a.length?a.map(([b,C])=>{const _=i[b];if(!_)return"";const v=o[b]||0,T=v?(_.price-v)*C:0,$=v?(_.price-v)/v*100:0,A=T>0?"up":T<0?"down":"flat";return`<div class="acct-row"><div><div class="ar-name">${W(_.name)}</div><div class="ar-sub">${M(C)}주 · 평단 ${v?M(v):"-"}</div></div><div class="ar-val ${A}">${M(_.price*C)}원<br><small>${T>=0?"+":""}${$.toFixed(2)}%</small></div></div>`}).join(""):'<div class="acct-row muted">보유 종목이 없습니다</div>';I=`
      <div class="acct-hero">
        <div class="ah-no">기본계좌 · ${W(f)}</div>
        <div class="ah-asset">${gn(r)}</div>
        <div class="ah-pnl ${d}">평가손익 ${l>=0?"+":""}${M(l)}원 (${u>=0?"+":""}${u.toFixed(2)}%)</div>
        <div class="acct-actions"><button class="btn small" disabled>채우기</button><button class="btn small" disabled>보내기</button><button class="btn small" disabled>환전</button></div>
      </div>
      <div class="acct-grid">
        <div class="acct-stat"><div class="as-k">주문가능 현금</div><div class="as-v">${gn(s.cash)}</div></div>
        <div class="acct-stat"><div class="as-k">총 투자금액(평가)</div><div class="as-v">${gn(c)}</div></div>
        <div class="acct-stat"><div class="as-k">평가손익</div><div class="as-v ${d}">${l>=0?"+":""}${M(l)}</div></div>
      </div>
      <div class="acct-section"><h3>보유 종목</h3>${S}</div>`}else es==="tx"?I=`<div class="acct-section"><h3>거래내역</h3>${m.length?m.map(b=>{const C=b.type==="buy"?"up":"down",_=new Date(b.time).toLocaleString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});return`<div class="acct-row"><div><div class="ar-name">${W(b.stockName)}</div><div class="ar-sub">${_}</div></div><div class="ar-val ${C}">${b.type==="buy"?"매수":"매도"} ${M(b.qty)}주<br><small>@ ${M(b.price)}</small></div></div>`}).join(""):'<div class="acct-row muted">거래내역이 없습니다</div>'}</div>`:I=`<div class="acct-section"><h3>주문내역(미체결)</h3>${w.length?w.map(b=>{const C=b.side==="buy"?"up":"down";return`<div class="acct-row"><div><div class="ar-name">${W(b.stockName||b.stockId||"")}</div><div class="ar-sub">${b.kind||"지정가"} · ${b.tif||""}</div></div><div class="ar-val ${C}">${b.side==="buy"?"매수":"매도"} ${M(b.qty)}주<br><small>${b.price?"@ "+M(b.price):""}</small></div></div>`}).join(""):'<div class="acct-row muted">미체결 주문이 없습니다</div>'}</div>`;t.innerHTML=`<aside class="acct-side">${k}</aside><div class="acct-main">${I}</div>`}function uo(){const n=R("stockHover");n&&n.classList.add("hidden")}function Vv(n,e){const t=R("stockHover");if(!t)return;const s=n&&n.stocks&&n.stocks[e];if(!s){t.classList.add("hidden");return}const i=Ct(s.changeRate),r=s.changeRate>0?"+":"",o=(s.changeRate||0)>=0?"왜 올랐을까?":"왜 내렸을까?",a=s.news?W(s.news):"아직 특별한 소식은 없어요. 거래대금과 수급에 따라 움직이고 있어요.";t.innerHTML=`
    <div class="sh-head">
      <span class="sh-ico" style="background:${lu(s.name)}">${W((s.name||"?").slice(0,1))}</span>
      <div class="sh-meta">
        <b class="sh-name">${W(s.name)} ${nu(e,s)}</b>
        <span class="sh-price"><b>${M(s.price)}원</b> <span class="${i}">${ai(s.changeRate)} ${r}${(s.changeRate??0).toFixed(2)}%</span></span>
      </div>
    </div>
    <div class="sh-chartwrap"><span class="sh-tf">일봉</span><canvas class="sh-chart"></canvas></div>
    <div class="sh-news"><b class="sh-why">${o}</b><p>${a}</p></div>`,t.classList.remove("hidden");const c=t.querySelector(".sh-chart");s.basePrice||s.previousPrice||s.price,jv(c,du(s,e,"1d"))}function jv(n,e,t){if(!n)return;const s=window.devicePixelRatio||1,i=n.clientWidth||272,r=n.clientHeight||118;n.width=Math.round(i*s),n.height=Math.round(r*s);const o=n.getContext("2d");if(o.setTransform(s,0,0,s,0,0),o.clearRect(0,0,i,r),!e||e.length<2){o.fillStyle=ct("--muted"),o.font="12px Pretendard, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText("데이터 수집 중…",i/2,r/2);return}const a=r*.72,c=r-a-4;let l=-1/0,h=1/0,u=0;for(const y of e)l=Math.max(l,y.h),h=Math.min(h,y.l),u=Math.max(u,y.v||0);l===h&&(l+=1,h-=1);const d=(l-h)*.12;l+=d,h-=d;const f=y=>a*(1-(y-h)/(l-h));o.strokeStyle=ct("--chart-grid"),o.lineWidth=1;for(let y=1;y<=2;y++){const S=a/3*y;o.beginPath(),o.moveTo(0,Math.round(S)+.5),o.lineTo(i,Math.round(S)+.5),o.stroke()}const m=ct("--up"),w=ct("--down"),k=e.length,I=i/k,g=Math.max(1.5,Math.min(7,I*.62));e.forEach((y,S)=>{const b=S*I+I/2,C=y.c>=y.o?m:w;o.strokeStyle=C,o.fillStyle=C,o.lineWidth=1,o.beginPath(),o.moveTo(Math.round(b)+.5,f(y.h)),o.lineTo(Math.round(b)+.5,f(y.l)),o.stroke();const _=f(y.o),v=f(y.c),T=Math.min(_,v),$=Math.max(1,Math.abs(v-_));if(o.fillRect(b-g/2,T,g,$),u>0){const A=(c-2)*((y.v||0)/u);o.globalAlpha=.35,o.fillRect(b-g/2,r-A,g,A),o.globalAlpha=1}})}const gu={home:"https://tom981105-web.github.io/STONK-Home/",battle:"https://tom981105-web.github.io/STONK-Battle/",board:"https://tom981105-web.github.io/STONK-Board/",wiki:"https://tom981105-web.github.io/STONK-Wiki/",arcade:"https://tom981105-web.github.io/STONK-Arcade/",gacha:"https://tom981105-web.github.io/STONK-Gacha/",admin:"https://tom981105-web.github.io/STONK-Admin/market-admin.html"},Ua={home:"../STONK-Home/index.html",battle:"../Market-battle/index.html",board:"../Market-Board/index.html",wiki:"../Market-Wiki/index.html",arcade:"../STONK-Arcade/index.html",gacha:"../STONK-Gacha/index.html",admin:"../Market-Admin/market-admin.html"},ho="stonk:lastRoomCode",Gv=["mb-board-room","wiki-room"];function _u(){return location.protocol==="file:"||/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)}function zv(){return{urls:{...gu},local:_u()}}function Gt(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function vu(){try{const n=new URLSearchParams(location.search);return Gt(n.get("room")||n.get("roomCode")||n.get("roomId")||"")}catch{return""}}function yu(n){const e=Gt(n);if(e)try{localStorage.setItem(ho,e)}catch{}}function wu(){try{const n=Gt(localStorage.getItem(ho));if(n)return n;for(const e of Gv){const t=Gt(localStorage.getItem(e));if(t)return t}}catch{}return""}function Kv(){return vu()||wu()||"MAIN"}function qv(n){const e=gu[n];return _u()&&/github\.io/.test(e||"")?Ua[n]:e||Ua[n]}function st(n,e){const t=qv(n),s=[],i=Gt(e&&e.room);i&&s.push("room="+encodeURIComponent(i));const r=e&&(e.company||e.companyId);return r&&s.push("company="+encodeURIComponent(r)),s.length?t+(t.indexOf("?")>=0?"&":"?")+s.join("&"):t}function bu(n){return st("home",{room:n})}function Yv(n){return st("battle",{room:n})}function Eu(n){return st("board",{room:n})}function Iu(n,e){return st("wiki",{room:n,company:e})}function Qv(n){return st("arcade",{room:n})}function Jv(n){return st("gacha",{room:n})}function Cu(n){return st("admin",{room:n})}const Xv={VERSION:"1.4.1",getSiteConfig:zv,normalizeRoomCode:Gt,getUrlRoomCode:vu,getCurrentRoomCode:Kv,setLastRoomCode:yu,getLastRoomCode:wu,buildSiteUrl:st,buildHomeUrl:bu,buildBattleUrl:Yv,buildBoardUrl:Eu,buildWikiUrl:Iu,buildArcadeUrl:Qv,buildGachaUrl:Jv,buildAdminUrl:Cu,LAST_ROOM_KEY:ho};typeof window<"u"&&(window.SiteConfig=Xv);const Zv="../STONK-Home/index.html",Ri=2600;function ey(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function ty(){return/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||location.protocol==="file:"}function ny(n){const e=ey(n);return Zv+(e?`?room=${encodeURIComponent(e)}`:"")}function sy({title:n="STONK Home에서 입장해 주세요",message:e="",roomCode:t="",auto:s=!0}={}){var c;const i=ny(t),r=document.getElementById("stonk-home-gate");r&&r.remove();const o=document.createElement("div");o.id="stonk-home-gate",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),Object.assign(o.style,{position:"fixed",inset:"0",zIndex:"99999",display:"grid",placeItems:"center",padding:"24px",background:"radial-gradient(120% 90% at 50% -10%, rgba(139,108,255,0.22), transparent 60%), rgba(5,6,10,0.94)",backdropFilter:"blur(8px)",color:"#f4f7ff",fontFamily:"Pretendard, Inter, 'Noto Sans KR', system-ui, sans-serif"});const a=s&&!ty();if(o.innerHTML=`
    <div style="width:min(460px,100%);text-align:center;padding:32px 26px;border:1px solid rgba(255,255,255,0.14);border-radius:18px;background:rgba(14,16,24,0.92);box-shadow:0 24px 70px rgba(0,0,0,0.5),0 0 60px rgba(139,108,255,0.16)">
      <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#8b6cff;margin-bottom:8px">STONK UNIVERSE</div>
      <h2 style="margin:0 0 10px;font-size:1.5rem">${n}</h2>
      <p style="margin:0 0 18px;color:#aab2c8;font-size:0.95rem;line-height:1.5">${e||"로그인 · 방 선택 · 닉네임 설정은 STONK Home에서 진행합니다."}</p>
      <a data-home-go href="${i}" style="display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 26px;border-radius:14px;font-weight:900;text-decoration:none;color:#0a0a12;background:linear-gradient(135deg,#a99bff,#8b6cff);box-shadow:0 10px 30px rgba(139,108,255,0.4)">STONK Home으로 이동</a>
      ${t?`<div style="margin-top:14px;font-size:0.82rem;color:#8a93a8">방 코드 <b style="color:#41e0ff;letter-spacing:2px">${t}</b> 유지</div>`:""}
      ${a?`<div style="margin-top:12px;font-size:0.8rem;color:#8a93a8"><span data-gate-count>${Math.ceil(Ri/1e3)}</span>초 후 자동 이동…</div>`:'<div style="margin-top:12px;font-size:0.78rem;color:#5f6678">개발 모드: 자동 이동 없음</div>'}
    </div>
  `,document.body.appendChild(o),(c=o.querySelector("[data-home-go]"))==null||c.addEventListener("click",l=>{l.preventDefault(),location.href=i}),a){let l=Math.ceil(Ri/1e3);const h=o.querySelector("[data-gate-count]"),u=setInterval(()=>{l-=1,h&&(h.textContent=String(Math.max(0,l))),l<=0&&clearInterval(u)},1e3);setTimeout(()=>{location.href=i},Ri)}return o}function iy(){var n;(n=document.getElementById("stonk-home-gate"))==null||n.remove()}const ry="https://tom981105-web.github.io/STONK-Gacha/backgrounds/";let ns,be=null;function oy(){return be||(be=document.createElement("div"),be.id="equip-bg",Object.assign(be.style,{position:"fixed",inset:"0",zIndex:"-1",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",pointerEvents:"none",opacity:"0",transition:"opacity 0.35s ease",transform:"translateZ(0)",backfaceVisibility:"hidden"}),document.body.appendChild(be),be)}function Ba(){if(document.body.classList.remove("has-skin"),be){be.style.opacity="0";const n=be;setTimeout(()=>{ns===null&&n&&(n.style.backgroundImage="")},400)}}function ay(n,e){let t=0;const s=()=>{if(t>=n.length){e(null);return}const i=n[t++],r=new Image;r.decoding="async",r.onload=()=>e(i),r.onerror=s,r.src=i};s()}function cy(n){const e=n||null;if(e===ns)return;if(ns=e,!e){Ba();return}const t=["webp","jpg","png"].map(s=>`${ry}${e}.${s}`);ay(t,s=>{if(ns!==e)return;if(!s){Ba();return}const i=oy();i.style.backgroundImage=`radial-gradient(120% 90% at 50% 12%, rgba(10,12,20,0.30) 0%, rgba(8,10,16,0.52) 55%, rgba(6,7,12,0.74) 100%), url("${s}")`,i.style.opacity="1",document.body.classList.add("has-skin")})}const ly="yaV8N60yIiUggaWNpNF2VhkCwxb2",uy="tomem@naver.com",fo="MAIN",p={uid:null,email:null,nickname:localStorage.getItem("mb_nickname")||localStorage.getItem("stonk:lastNickname")||"",roomCode:null,roomData:null,selectedStockId:null,tickTimer:null,isDriver:!1,tickLeaseRenewAt:0,driverWatch:null,liveState:J_(),catchupDoneFor:null,clockTimer:null,roomRef:null,lastStatus:null,histRef:null,histStockId:null,selectedHistory:null,renderQueued:!1,joinReqRef:null,joinReqId:null,isDbAdmin:!1},hy=15e3,dy=5e3,fy=4e3;function py(){return p.uid===ly||(p.email||"").toLowerCase()===uy}!ql||!ro||!F?su("src/firebase.js 에 본인의 Firebase 설정(firebaseConfig)을 붙여넣은 뒤 새로고침하세요."):my();function my(){let n=!1;const e=setTimeout(()=>{n||su("Firebase에 연결할 수 없습니다. 설정값과 네트워크, Database Rules를 확인하세요.")},5e3);si(U(F,".info/connected"),t=>{t.val()===!0&&(n=!0,clearTimeout(e),document.getElementById("fbError").classList.add("hidden"))}),Qd(ro,t=>{if(t)iy(),p.uid=t.uid,p.email=t.email||null,localStorage.setItem("mb_playerId",t.uid),gy(),_y();else{p.uid=null,p.email=null,p.isDbAdmin=!1;const s=document.getElementById("navAdmin");s&&(s.hidden=!0),sy({message:"로그인은 STONK Home에서 진행합니다. Home에서 입장하면 자동으로 연결됩니다."})}})}async function gy(){const n=document.getElementById("navAdmin");if(!n)return;let e=py();if(!e&&p.uid&&F)try{e=(await so(U(F,"admins/"+p.uid))).val()===!0}catch{e=!1}p.isDbAdmin=e,n.hidden=!e}async function _y(){if(!p.nickname){co("screen-auth");return}Su(fo)}let Ni=!1;async function vy(n){var s;if(!p.uid)return!1;if(n.players&&n.players[p.uid])return!0;if(Ni)return!1;Ni=!0;const e=Number((s=n.settings)==null?void 0:s.initialCash)||Dt,t=Date.now();try{await vt(U(F,`rooms/${fo}/players/${p.uid}`),{nickname:p.nickname,cash:e,holdings:null,totalAsset:e,joinedAt:t,connected:!0})}catch(i){return console.warn("[join] 자동 등록 실패:",i),!1}finally{Ni=!1}return!0}function ku(){p.joinReqId=null}function Su(n){ku(),p.roomCode=n,localStorage.setItem("mb_roomCode",n),yu(n),Py(n);const e=U(F,`rooms/${n}/players/${p.uid}/connected`);ti(e,!0).catch(()=>{}),f_(e).set(!1).catch(()=>{}),p.roomRef&&io(p.roomRef),p.roomRef=U(F,`rooms/${n}`),si(p.roomRef,t=>ky(yy(t)),t=>{console.error("[room] 구독 오류:",t)})}function yy(n){if(!n||!n.exists())return null;const e={};return n.forEach(t=>{if(t.key==="stocks"){const s={};t.forEach(i=>{const r={};i.forEach(o=>{o.key!=="history"&&(r[o.key]=o.val())}),s[i.key]=r}),e.stocks=s}else e[t.key]=t.val()}),e}function wy(n){const e=p.selectedHistory;e&&e.id&&n&&n.stocks&&n.stocks[e.id]&&(n.stocks[e.id].history=e.data||null)}function Ls(n){n!==p.histStockId&&(p.histRef&&(io(p.histRef),p.histRef=null),p.histStockId=n||null,p.selectedHistory=n?{id:n,data:null}:null,!(!n||!p.roomCode)&&(p.histRef=U(F,`rooms/${p.roomCode}/stocks/${n}/history`),si(p.histRef,e=>{p.histStockId===n&&(p.selectedHistory={id:n,data:e.val()||null},p.roomData&&p.roomData.stocks&&p.roomData.stocks[n]&&(p.roomData.stocks[n].history=p.selectedHistory.data),fe())},e=>console.error("[history] 구독 오류:",e))))}function fe(){p.renderQueued||(p.renderQueued=!0,requestAnimationFrame(()=>{p.renderQueued=!1,p.roomData&&p.roomData.status==="playing"&&uv(p)}))}function Tu(n){const e=n==="dark"?"dark":"light";document.documentElement.dataset.theme=e;try{localStorage.setItem("stonk:theme",e)}catch{}const t=document.getElementById("themeToggle");t&&(t.textContent=e==="dark"?"☀️":"🌙")}function by(){let n="light";try{n=localStorage.getItem("stonk:theme")||"light"}catch{}Tu(n)}function Ey(){Tu(document.documentElement.dataset.theme==="dark"?"light":"dark")}function ln(n){const e=document.getElementById("screen-game");e&&(e.dataset.tab=n,document.querySelectorAll(".tnav-tab").forEach(t=>t.classList.toggle("is-active",t.dataset.tab===n)),document.querySelectorAll(".tab-view").forEach(t=>t.classList.toggle("hidden",t.dataset.view!==n)),n==="detail"&&lo(),p.roomData&&fe())}function Iy(n){n&&(uo(),p.selectedStockId=n,Ls(n),My(n),ln("detail"))}let Ai=null,ss=null;function Cy(n){const e=document.getElementById("stockHover");if(!e)return;const t=e.offsetWidth||300,s=e.offsetHeight||240;let i=n.right+12;i+t>window.innerWidth-8&&(i=n.left-t-12),i<8&&(i=8);let r=n.top;r+s>window.innerHeight-8&&(r=window.innerHeight-s-8),r<8&&(r=8),e.style.left=i+"px",e.style.top=r+"px"}function Wa(n){const e=document.getElementById(n);e&&(e.addEventListener("mouseover",t=>{const s=t.target.closest(".rank-item");if(!s||!p.roomData)return;const i=s.dataset.id;i!==ss&&(clearTimeout(Ai),Ai=setTimeout(()=>{ss=i,Vv(p.roomData,i),Cy(s.getBoundingClientRect())},90))}),e.addEventListener("mouseleave",()=>{clearTimeout(Ai),ss=null,uo()}))}function ky(n){if(!n){wt(),ar(),$s(),p.roomData=null,p.lastStatus=null,Ha();return}if(p.roomData=n,wy(n),cy(n.players&&p.uid&&n.players[p.uid]?n.players[p.uid].equippedBackground:null),n.status==="playing"){if(p.uid&&!(n.players&&n.players[p.uid])){vy(n);return}if(p.lastStatus!=="playing"){co("screen-game"),iu(),Ay();const e=Object.keys(n.stocks||{});!p.selectedStockId&&e.length&&(p.selectedStockId=e[0])}p.selectedStockId!==p.histStockId&&Ls(p.selectedStockId),fe(),Sy(n),Nu(n),Ny()}else wt(),ar(),$s(),Ls(null),lo(),Ha();p.lastStatus=n.status}function Ha(){co("screen-wait");const n=document.getElementById("waitNickname");n&&(n.textContent=p.nickname?`${p.nickname} 님`:"")}async function Sy(n){if(!(!n||n.status!=="playing")&&p.uid&&p.catchupDoneFor!==p.roomCode){if(!Y_(n)){p.catchupDoneFor=p.roomCode;return}p.catchupDoneFor=p.roomCode;try{const e=await Q_(p.roomCode,n,p.uid);e.applied&&(iu(),H(`시장 경과 보정 완료 (${Math.round(e.elapsed/6e4)}분, 캔들 ${e.candlesWritten}개)`,"up"))}catch(e){console.warn("[catchup] 보정 실패:",e)}}}async function Ru(){if(!p.roomCode||!p.uid)return!1;const n=Date.now();try{return(await ye(U(F,`rooms/${p.roomCode}/market/tickLease`),t=>{if(!(t&&t.by!==p.uid&&(t.expiresAt||0)>n))return{by:p.uid,at:n,expiresAt:n+hy}})).committed}catch{return!1}}async function Nu(n){var a,c;if(n=n||p.roomData,!n||n.status!=="playing"){wt();return}if(!p.uid)return;const e=Date.now(),t=n.market&&n.market.tickLease,s=t&&t.by!==p.uid&&(t.expiresAt||0)>e;if(p.isDriver){s&&wt();return}const i=n.hostId===p.uid,r=n.hostId&&((c=(a=n.players)==null?void 0:a[n.hostId])==null?void 0:c.connected)!==!1;if(s||!i&&r)return;await Ru()&&Ty()}function Ty(){p.tickTimer||(p.isDriver=!0,p.tickLeaseRenewAt=Date.now(),p.tickTimer=setInterval(async()=>{const n=p.roomData;if(!n||n.status!=="playing"){wt();return}try{if(Date.now()-p.tickLeaseRenewAt>=dy){if(!await Ru()){wt();return}p.tickLeaseRenewAt=Date.now()}await x_(p.roomCode,n),await D_(p.roomCode,n),await U_(p.roomCode,n),await X_(p.roomCode,n,p.liveState)}catch(e){console.error("[tick] 시장 틱 오류:",e)}},tr))}function wt(){p.tickTimer&&(clearInterval(p.tickTimer),p.tickTimer=null),p.isDriver=!1}async function Ry(){if(!p.roomCode||!p.uid)return;const n=p.roomCode;try{await ye(U(F,`rooms/${n}/market/tickLease`),e=>e&&e.by===p.uid?null:e)}catch{}}function Ny(){p.driverWatch||(p.driverWatch=setInterval(()=>{Nu(p.roomData)},fy))}function ar(){p.driverWatch&&(clearInterval(p.driverWatch),p.driverWatch=null)}function Ay(){$s(),p.clockTimer=setInterval(()=>{const n=p.roomData;!n||n.status!=="playing"||(xv(Date.now()-(n.startedAt||Date.now())),ou(),Ov(n))},250)}function $s(){p.clockTimer&&(clearInterval(p.clockTimer),p.clockTimer=null)}function Pi(){Ry(),wt(),ar(),$s(),ku(),lo(),p.roomRef&&(io(p.roomRef),p.roomRef=null),Ls(null),location.href=bu()}function Py(n){const e="",t=(s,i)=>{const r=document.getElementById(s);r&&(r.href=i)};t("navBoard",Eu(n)),t("navWiki",Iu(n,e)),t("navAdmin",Cu(n))}async function Va(){if(!p.roomCode||!p.roomData){H("복사할 시장 데이터가 없습니다","err");return}const n={roomCode:p.roomCode,status:p.roomData.status,startedAt:p.roomData.startedAt||null,marketTick:p.roomData.marketTick||Date.now(),latestNews:p.roomData.latestNews||null,botFeed:p.roomData.botFeed||[],stocks:p.roomData.stocks||{},players:p.roomData.players||{},logs:p.roomData.logs||{}},e=JSON.stringify(n,null,2);try{await navigator.clipboard.writeText(e),H("STONK Board에 가져올 시장 데이터를 복사했습니다")}catch{prompt("STONK Board 관리자 화면에 붙여넣을 시장 데이터입니다:",e)}}function Pn(){return Math.max(1,Math.floor(Number(document.getElementById("qtyInput").value)||1))}async function Mi(n){var a,c;const{roomCode:e,roomData:t,uid:s,nickname:i,selectedStockId:r}=p;if(!t||t.status!=="playing")return;if(!r){H("종목을 먼저 선택하세요","err");return}const o=((c=(a=t.stocks)==null?void 0:a[r])==null?void 0:c.name)||"";try{n==="buy"?(await Xl(e,s,i,r,Pn(),t),H(`${o} 매수 체결!`,"up")):n==="sell"?(await oo(e,s,i,r,Pn(),t),H(`${o} 매도 체결!`,"down")):n==="sellAll"&&(await W_(e,s,i,r,t),H(`${o} 전량 매도 체결!`,"down")),tv("tradeMsg","",!1)}catch(l){H(l.message,"err")}}function Fs(n){return Math.floor(Number(document.getElementById(n).value)||0)}function My(n){var s,i,r;const e=(r=(i=(s=p.roomData)==null?void 0:s.stocks)==null?void 0:i[n])==null?void 0:r.price;if(!e)return;const t=(o,a)=>{const c=document.getElementById(o);c&&(c.value=a)};t("limitPrice",e),t("stopLoss",Math.round(e*.95)),t("takeProfit",Math.round(e*1.1))}async function ja(n){var l,h;const{roomCode:e,roomData:t,uid:s,nickname:i,selectedStockId:r}=p;if(!t||t.status!=="playing")return;if(!r)return H("종목을 먼저 선택하세요","err");const o=Fs("limitPrice");if(!o)return H("지정가를 입력하세요","err");const a=document.getElementById("limitTif").value,c=((h=(l=t.stocks)==null?void 0:l[r])==null?void 0:h.name)||"";try{await Ns(e,s,i,r,{side:n,trigger:n==="buy"?"below":"above",tif:a,label:"지정가"},Pn(),o,t),H(`${c} 지정가 ${n==="buy"?"매수":"매도"} 등록!`,n==="buy"?"up":"down")}catch(u){H(u.message,"err")}}async function Oy(){var l,h,u,d,f;const{roomCode:n,roomData:e,uid:t,nickname:s,selectedStockId:i}=p;if(!e||e.status!=="playing")return;if(!i)return H("종목을 먼저 선택하세요","err");const r=((u=(h=(l=e.players)==null?void 0:l[t])==null?void 0:h.holdings)==null?void 0:u[i])||0;if(r<1)return H("보유한 종목에만 설정할 수 있어요","err");const o=Fs("stopLoss"),a=Fs("takeProfit");if(!o&&!a)return H("손절가 또는 익절가를 입력하세요","err");const c=((f=(d=e.stocks)==null?void 0:d[i])==null?void 0:f.name)||"";try{o&&await Ns(n,t,s,i,{side:"sell",trigger:"below",tif:"gtc",label:"손절"},r,o,e),a&&await Ns(n,t,s,i,{side:"sell",trigger:"above",tif:"gtc",label:"익절"},r,a,e),H(`${c} 손절·익절 설정 완료 (보유 ${r}주)`,"down")}catch(m){H(m.message,"err")}}async function xy(){var h,u,d,f;const{roomCode:n,roomData:e,uid:t,nickname:s,selectedStockId:i}=p;if(!e||e.status!=="playing")return;if(!i)return H("종목을 먼저 선택하세요","err");const r=Pn(),o=Math.max(2,Math.min(10,Fs("splitCount")||3)),a=((u=(h=e.stocks)==null?void 0:h[i])==null?void 0:u.price)||0;if(!a)return;const c=Math.floor(r/o);if(c<1)return H(`분할하려면 수량이 최소 ${o}주 이상이어야 해요`,"err");const l=((f=(d=e.stocks)==null?void 0:d[i])==null?void 0:f.name)||"";try{for(let m=0;m<o;m++){const w=Math.round(a*(1-m*.015));await Ns(n,t,s,i,{side:"buy",trigger:"below",tif:"gtc",label:`분할${m+1}`},c,w,e)}H(`${l} ${o}회 분할매수 등록! (회당 ${c}주)`,"up")}catch(m){H(m.message,"err")}}async function Dy(n){try{await F_(p.roomCode,n),H("예약 주문 취소됨")}catch(e){H(e.message,"err")}}async function Ly(){const{roomCode:n,roomData:e,uid:t}=p,s=e==null?void 0:e.ipo;if(!s||s.status!=="subscribing"){H("청약 가능한 공모주가 없습니다","err");return}const i=Math.max(1,Math.floor(Number(document.getElementById("ipoQty").value)||0));try{await L_(n,t,i,e),H(`${s.name} ${i.toLocaleString("ko-KR")}주 청약 완료!`,"up")}catch(r){H(r.message,"err")}}function $y(){var r,o,a,c,l,h,u,d,f,m,w,k,I,g,y,S,b,C;(r=document.getElementById("btnNickname"))==null||r.addEventListener("click",()=>{const _=document.getElementById("nicknameInput").value.trim();_&&(p.nickname=_,localStorage.setItem("mb_nickname",_),Su(fo))}),(o=document.getElementById("nicknameInput"))==null||o.addEventListener("keydown",_=>{_.key==="Enter"&&document.getElementById("btnNickname").click()}),(a=document.getElementById("btnWaitHome"))==null||a.addEventListener("click",Pi),(c=document.getElementById("btnCopyCode2"))==null||c.addEventListener("click",Va),(l=document.getElementById("btnCopyMarketBoard"))==null||l.addEventListener("click",Va),(h=document.getElementById("btnLeaveGame"))==null||h.addEventListener("click",Pi);const n=_=>{const v=_.target.closest("[data-star]");if(v){_.stopPropagation(),ov(v.dataset.star),fe();return}const T=_.target.closest(".rank-item");T&&Iy(T.dataset.id)};(u=document.getElementById("stockList"))==null||u.addEventListener("click",n),(d=document.getElementById("screenerList"))==null||d.addEventListener("click",n),Wa("stockList"),Wa("screenerList"),window.addEventListener("scroll",()=>{ss=null,uo()},!0),by(),(f=document.getElementById("themeToggle"))==null||f.addEventListener("click",Ey),(m=document.querySelector(".tnav-brand"))==null||m.addEventListener("click",()=>ln("home")),(w=document.getElementById("tnavTabs"))==null||w.addEventListener("click",_=>{const v=_.target.closest(".tnav-tab");v&&ln(v.dataset.tab)}),(k=document.getElementById("btnDetailBack"))==null||k.addEventListener("click",()=>ln("home"));const e=document.getElementById("globalSearch");e&&e.addEventListener("input",()=>{ki(e.value);const _=document.getElementById("screen-game");_&&_.dataset.tab!=="home"&&ln("home"),fe()}),document.addEventListener("keydown",_=>{var T;if(_.key!=="/")return;const v=document.activeElement;v&&/^(input|textarea|select)$/i.test(v.tagName)||(T=document.getElementById("screen-game"))!=null&&T.classList.contains("hidden")||(_.preventDefault(),e==null||e.focus())}),(I=document.getElementById("homeSeg"))==null||I.addEventListener("click",_=>{const v=_.target.closest(".seg-btn");v&&(document.querySelectorAll("#homeSeg .seg-btn").forEach(T=>T.classList.toggle("is-active",T===v)),Na(v.dataset.home==="sectors"?"up":"value"),fe())}),(g=document.getElementById("homeFilters"))==null||g.addEventListener("click",_=>{const v=_.target.closest(".fchip");v&&(v.dataset.filter&&(document.querySelectorAll("#homeFilters [data-filter]").forEach(T=>T.classList.toggle("is-active",T===v)),pv(v.dataset.filter)),v.dataset.sort&&(document.querySelectorAll("#homeFilters [data-sort]").forEach(T=>T.classList.toggle("is-active",T===v)),Na(v.dataset.sort)),fe())}),(y=document.getElementById("screenerPresets"))==null||y.addEventListener("click",_=>{const v=_.target.closest("[data-preset]");v&&(mv(v.dataset.preset),fe())}),(S=document.getElementById("accountView"))==null||S.addEventListener("click",_=>{const v=_.target.closest("[data-acct]");v&&(gv(v.dataset.acct),fe())}),(b=document.getElementById("feedView"))==null||b.addEventListener("click",_=>{if(_.target.closest("#feedBoardLink")){const v=document.getElementById("navBoard");v&&v.href&&window.open(v.href,"_blank","noopener")}}),document.querySelectorAll(".qty-btn[data-qty]").forEach(_=>{_.addEventListener("click",()=>{const v=document.getElementById("qtyInput");v.value=Math.max(1,Pn()+Number(_.dataset.qty))})}),document.getElementById("btnMaxQty").addEventListener("click",()=>{var J,O,X,oe;const{roomData:_,uid:v,selectedStockId:T}=p,$=(O=(J=_==null?void 0:_.stocks)==null?void 0:J[T])==null?void 0:O.price,A=((oe=(X=_==null?void 0:_.players)==null?void 0:X[v])==null?void 0:oe.cash)||0;$&&(document.getElementById("qtyInput").value=Math.max(1,Math.floor(A/($*1.0002))))}),document.getElementById("btnBuy").addEventListener("click",()=>Mi("buy")),document.getElementById("btnSell").addEventListener("click",()=>Mi("sell")),document.getElementById("btnSellAll").addEventListener("click",()=>Mi("sellAll")),document.getElementById("orderTabs").addEventListener("click",_=>{const v=_.target.closest(".order-tab");if(!v)return;const T=v.dataset.tab;document.querySelectorAll(".order-tab").forEach($=>$.classList.toggle("is-active",$===v)),document.querySelectorAll(".order-pane").forEach($=>$.classList.toggle("hidden",$.dataset.pane!==T))}),document.getElementById("btnLimitBuy").addEventListener("click",()=>ja("buy")),document.getElementById("btnLimitSell").addEventListener("click",()=>ja("sell")),document.getElementById("btnSetStop").addEventListener("click",Oy),document.getElementById("btnSplitBuy").addEventListener("click",xy),document.getElementById("orderList").addEventListener("click",_=>{const v=_.target.closest("[data-cancel]");v&&Dy(v.dataset.cancel)}),document.getElementById("btnAlert").addEventListener("click",()=>{var O;const{roomData:_,selectedStockId:v}=p,T=(O=_==null?void 0:_.stocks)==null?void 0:O[v];if(!T)return H("종목을 먼저 선택하세요","err");try{window.Notification&&Notification.permission==="default"&&Notification.requestPermission()}catch{}const $=cv(T.name),A=prompt(`${T.name} 가격 알림 설정
현재가 ${T.price.toLocaleString("ko-KR")}원
알림받을 가격을 입력하세요 (0 또는 빈칸 = 해제):`,$||T.price);if(A===null)return;const J=Math.floor(Number(A)||0);av(T.name,J),H(J?`${T.name} ${J.toLocaleString("ko-KR")}원 알림 설정됨`:`${T.name} 알림 해제됨`),fe()}),document.getElementById("btnApplyIpo").addEventListener("click",Ly);const t=document.getElementById("stockSearch"),s=document.getElementById("stockSearchClear");t&&t.addEventListener("input",()=>{ki(t.value),s&&(s.hidden=!t.value),fe()}),s&&s.addEventListener("click",()=>{t.value="",ki(""),s.hidden=!0,t.focus(),fe()});const i=document.getElementById("marketStatusChip");i&&i.addEventListener("click",()=>{const _=document.getElementById("marketStatusPanel");if(!_)return;const v=_.classList.toggle("hidden");i.setAttribute("aria-expanded",v?"false":"true"),!v&&p.roomData&&ru(p)}),(C=document.getElementById("btnBackHome"))==null||C.addEventListener("click",Pi)}$y();
