(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var Eo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(n,e){if(!n)throw Zt(e)},Zt=function(n){return new Error("Firebase Database ("+Ja.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Mu=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(h=64)),i.push(t[d],t[u],t[h],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xa(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Mu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||u==null)throw new Du;const h=r<<2|a>>4;if(i.push(h),l!==64){const p=a<<4&240|l>>2;if(i.push(p),u!==64){const m=l<<6&192|u;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Du extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Za=function(n){const e=Xa(n);return _r.encodeByteArray(e,!0)},_i=function(n){return Za(n).replace(/\./g,"")},yi=function(n){try{return _r.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n){return ec(void 0,n)}function ec(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!xu(t)||(n[t]=ec(n[t],e[t]));return n}function xu(n){return n!=="__proto__"}/**
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
 */const $u=()=>Fu().__FIREBASE_DEFAULTS__,Uu=()=>{if(typeof process>"u"||typeof Eo>"u")return;const n=Eo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&yi(n[1]);return e&&JSON.parse(e)},yr=()=>{try{return $u()||Uu()||Bu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tc=n=>{var e,t;return(t=(e=yr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Wu=n=>{const e=tc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},nc=()=>{var n;return(n=yr())===null||n===void 0?void 0:n.config},ic=n=>{var e;return(e=yr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Hu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[_i(JSON.stringify(t)),_i(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function Vu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ju(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gu(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qu(){return Ja.NODE_ADMIN===!0}function Ku(){try{return typeof indexedDB=="object"}catch{return!1}}function zu(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="FirebaseError";class ot extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Yu,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Qu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ot(s,a,i)}}function Qu(n,e){return n.replace(Ju,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ju=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n){return JSON.parse(n)}function J(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Tn(yi(r[0])||""),t=Tn(yi(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Xu=function(n){const e=rc(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Zu=function(n){const e=rc(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function vt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function vi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wi(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Ei(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Io(r)&&Io(o)){if(!Ei(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Io(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function mn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function gn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),d=1518500249):(l=r^o^a,d=1859775393):u<60?(l=r&o|a&(r|o),d=2400959708):(l=r^o^a,d=3395469782);const h=(s<<5|s>>>27)+l+c+d+i[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function td(n,e){const t=new nd(n,e);return t.subscribe.bind(t)}class nd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");id(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ws),s.error===void 0&&(s.error=ws),s.complete===void 0&&(s.complete=ws);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function id(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ws(){}function Ht(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,_(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Xi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ne(n){return n&&n._delegate?n._delegate:n}class wt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class rd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new _e;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ad(e))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ut){return this.instances.has(e)}getOptions(e=ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:od(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ut){return this.component?this.component.multipleInstances?e:ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function od(n){return n===ut?void 0:n}function ad(n){return n.instantiationMode==="EAGER"}/**
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
 */class cd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const ld={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},ud=H.INFO,dd={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},hd=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=dd[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wr{constructor(e){this.name=e,this._logLevel=ud,this._logHandler=hd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ld[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const fd=(n,e)=>e.some(t=>n instanceof t);let bo,Co;function pd(){return bo||(bo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function md(){return Co||(Co=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oc=new WeakMap,Ws=new WeakMap,ac=new WeakMap,Es=new WeakMap,Er=new WeakMap;function gd(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Je(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&oc.set(t,n)}).catch(()=>{}),Er.set(e,n),e}function _d(n){if(Ws.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ws.set(n,e)}let Hs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ws.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ac.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Je(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yd(n){Hs=n(Hs)}function vd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Is(this),e,...t);return ac.set(i,e.sort?e.sort():[e]),Je(i)}:md().includes(n)?function(...e){return n.apply(Is(this),e),Je(oc.get(this))}:function(...e){return Je(n.apply(Is(this),e))}}function wd(n){return typeof n=="function"?vd(n):(n instanceof IDBTransaction&&_d(n),fd(n,pd())?new Proxy(n,Hs):n)}function Je(n){if(n instanceof IDBRequest)return gd(n);if(Es.has(n))return Es.get(n);const e=wd(n);return e!==n&&(Es.set(n,e),Er.set(e,n)),e}const Is=n=>Er.get(n);function Ed(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Je(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Je(o.result),c.oldVersion,c.newVersion,Je(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Id=["get","getKey","getAll","getAllKeys","count"],bd=["put","add","delete","clear"],bs=new Map;function So(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bs.get(e))return bs.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=bd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Id.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return bs.set(e,r),r}yd(n=>({...n,get:(e,t,i)=>So(e,t)||n.get(e,t,i),has:(e,t)=>!!So(e,t)||n.has(e,t)}));/**
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
 */class Cd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Sd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Sd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vs="@firebase/app",To="0.10.13";/**
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
 */const Fe=new wr("@firebase/app"),Td="@firebase/app-compat",kd="@firebase/analytics-compat",Rd="@firebase/analytics",Nd="@firebase/app-check-compat",Ad="@firebase/app-check",Pd="@firebase/auth",Od="@firebase/auth-compat",Md="@firebase/database",Dd="@firebase/data-connect",Ld="@firebase/database-compat",xd="@firebase/functions",Fd="@firebase/functions-compat",$d="@firebase/installations",Ud="@firebase/installations-compat",Bd="@firebase/messaging",Wd="@firebase/messaging-compat",Hd="@firebase/performance",Vd="@firebase/performance-compat",jd="@firebase/remote-config",Gd="@firebase/remote-config-compat",qd="@firebase/storage",Kd="@firebase/storage-compat",zd="@firebase/firestore",Yd="@firebase/vertexai-preview",Qd="@firebase/firestore-compat",Jd="firebase",Xd="10.14.1";/**
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
 */const js="[DEFAULT]",Zd={[Vs]:"fire-core",[Td]:"fire-core-compat",[Rd]:"fire-analytics",[kd]:"fire-analytics-compat",[Ad]:"fire-app-check",[Nd]:"fire-app-check-compat",[Pd]:"fire-auth",[Od]:"fire-auth-compat",[Md]:"fire-rtdb",[Dd]:"fire-data-connect",[Ld]:"fire-rtdb-compat",[xd]:"fire-fn",[Fd]:"fire-fn-compat",[$d]:"fire-iid",[Ud]:"fire-iid-compat",[Bd]:"fire-fcm",[Wd]:"fire-fcm-compat",[Hd]:"fire-perf",[Vd]:"fire-perf-compat",[jd]:"fire-rc",[Gd]:"fire-rc-compat",[qd]:"fire-gcs",[Kd]:"fire-gcs-compat",[zd]:"fire-fst",[Qd]:"fire-fst-compat",[Yd]:"fire-vertex","fire-js":"fire-js",[Jd]:"fire-js-all"};/**
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
 */const Ii=new Map,eh=new Map,Gs=new Map;function ko(n,e){try{n.container.addComponent(e)}catch(t){Fe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Vt(n){const e=n.name;if(Gs.has(e))return Fe.debug(`There were multiple attempts to register component ${e}.`),!1;Gs.set(e,n);for(const t of Ii.values())ko(t,n);for(const t of eh.values())ko(t,n);return!0}function Ir(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ce(n){return n.settings!==void 0}/**
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
 */const th={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xe=new Wn("app","Firebase",th);/**
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
 */class nh{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xe.create("app-deleted",{appName:this._name})}}/**
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
 */const tn=Xd;function cc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:js,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Xe.create("bad-app-name",{appName:String(s)});if(t||(t=nc()),!t)throw Xe.create("no-options");const r=Ii.get(s);if(r){if(Ei(t,r.options)&&Ei(i,r.config))return r;throw Xe.create("duplicate-app",{appName:s})}const o=new cd(s);for(const c of Gs.values())o.addComponent(c);const a=new nh(t,i,o);return Ii.set(s,a),a}function lc(n=js){const e=Ii.get(n);if(!e&&n===js&&nc())return cc();if(!e)throw Xe.create("no-app",{appName:n});return e}function Ze(n,e,t){var i;let s=(i=Zd[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fe.warn(a.join(" "));return}Vt(new wt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ih="firebase-heartbeat-database",sh=1,kn="firebase-heartbeat-store";let Cs=null;function uc(){return Cs||(Cs=Ed(ih,sh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Xe.create("idb-open",{originalErrorMessage:n.message})})),Cs}async function rh(n){try{const t=(await uc()).transaction(kn),i=await t.objectStore(kn).get(dc(n));return await t.done,i}catch(e){if(e instanceof ot)Fe.warn(e.message);else{const t=Xe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fe.warn(t.message)}}}async function Ro(n,e){try{const i=(await uc()).transaction(kn,"readwrite");await i.objectStore(kn).put(e,dc(n)),await i.done}catch(t){if(t instanceof ot)Fe.warn(t.message);else{const i=Xe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Fe.warn(i.message)}}}function dc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const oh=1024,ah=30*24*60*60*1e3;class ch{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uh(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=No();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ah}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Fe.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=No(),{heartbeatsToSend:i,unsentEntries:s}=lh(this._heartbeatsCache.heartbeats),r=_i(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Fe.warn(t),""}}}function No(){return new Date().toISOString().substring(0,10)}function lh(n,e=oh){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ao(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ao(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class uh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ku()?zu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ro(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ro(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ao(n){return _i(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function dh(n){Vt(new wt("platform-logger",e=>new Cd(e),"PRIVATE")),Vt(new wt("heartbeat",e=>new ch(e),"PRIVATE")),Ze(Vs,To,n),Ze(Vs,To,"esm2017"),Ze("fire-js","")}dh("");var hh="firebase",fh="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze(hh,fh,"app");function br(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function hc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ph=hc,fc=new Wn("auth","Firebase",hc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new wr("@firebase/auth");function mh(n,...e){bi.logLevel<=H.WARN&&bi.warn(`Auth (${tn}): ${n}`,...e)}function ci(n,...e){bi.logLevel<=H.ERROR&&bi.error(`Auth (${tn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n,...e){throw Cr(n,...e)}function Te(n,...e){return Cr(n,...e)}function pc(n,e,t){const i=Object.assign(Object.assign({},ph()),{[e]:t});return new Wn("auth","Firebase",i).create(e,{appName:n.name})}function De(n){return pc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return fc.create(n,...e)}function N(n,e,...t){if(!n)throw Cr(e,...t)}function Ae(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ci(e),new Error(e)}function $e(n,e){n||Ae(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function gh(){return Po()==="http:"||Po()==="https:"}function Po(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gh()||ju()||"connection"in navigator)?navigator.onLine:!0}function yh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.shortDelay=e,this.longDelay=t,$e(t>e,"Short delay should be less than long delay!"),this.isMobile=vr()||sc()}get(){return _h()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n,e){$e(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new Hn(3e4,6e4);function at(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ct(n,e,t,i,s={}){return gc(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=en(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},r);return Vu()||(l.referrerPolicy="no-referrer"),mc.fetch()(_c(n,n.config.apiHost,t,a),l)})}async function gc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},vh),e);try{const s=new Ih(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ii(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ii(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ii(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ii(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw pc(n,d,l);Ee(n,d)}}catch(s){if(s instanceof ot)throw s;Ee(n,"network-request-failed",{message:String(s)})}}async function Vn(n,e,t,i,s={}){const r=await ct(n,e,t,i,s);return"mfaPendingCredential"in r&&Ee(n,"multi-factor-auth-required",{_serverResponse:r}),r}function _c(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Sr(n.config,s):`${n.config.apiScheme}://${s}`}function Eh(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ih{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Te(this.auth,"network-request-failed")),wh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ii(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Te(n,e,i);return s.customData._tokenResponse=t,s}function Oo(n){return n!==void 0&&n.enterprise!==void 0}class bh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Eh(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ch(n,e){return ct(n,"GET","/v2/recaptchaConfig",at(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sh(n,e){return ct(n,"POST","/v1/accounts:delete",e)}async function yc(n,e){return ct(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Th(n,e=!1){const t=ne(n),i=await t.getIdToken(e),s=Tr(i);N(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:yn(Ss(s.auth_time)),issuedAtTime:yn(Ss(s.iat)),expirationTime:yn(Ss(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ss(n){return Number(n)*1e3}function Tr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ci("JWT malformed, contained fewer than 3 sections"),null;try{const s=yi(t);return s?JSON.parse(s):(ci("Failed to decode base64 JWT payload"),null)}catch(s){return ci("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mo(n){const e=Tr(n);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ot&&kh(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function kh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yn(this.lastLoginAt),this.creationTime=yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ci(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Rn(n,yc(t,{idToken:i}));N(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?vc(r.providerUserInfo):[],a=Ah(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ks(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function Nh(n){const e=ne(n);await Ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ah(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function vc(n){return n.map(e=>{var{providerId:t}=e,i=br(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ph(n,e){const t=await gc(n,{},async()=>{const i=en({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=_c(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mc.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Oh(n,e){return ct(n,"POST","/v2/accounts:revokeToken",at(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){N(e.length!==0,"internal-error");const t=Mo(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Ph(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Ft;return i&&(N(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(N(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(N(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ft,this.toJSON())}_performRefresh(){return Ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,e){N(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pe{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=br(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ks(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Rn(this,this.stsTokenManager.getToken(this.auth,e));return N(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Th(this,e)}reload(){return Nh(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ci(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ce(this.auth.app))return Promise.reject(De(this.auth));const e=await this.getIdToken();return await Rn(this,Sh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,c,l,d;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,w=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=t.createdAt)!==null&&l!==void 0?l:void 0,g=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:T,isAnonymous:I,providerData:C,stsTokenManager:S}=t;N(E&&S,e,"internal-error");const P=Ft.fromJSON(this.name,S);N(typeof E=="string",e,"internal-error"),He(u,e.name),He(h,e.name),N(typeof T=="boolean",e,"internal-error"),N(typeof I=="boolean",e,"internal-error"),He(p,e.name),He(m,e.name),He(y,e.name),He(w,e.name),He(v,e.name),He(g,e.name);const B=new Pe({uid:E,auth:e,email:h,emailVerified:T,displayName:u,isAnonymous:I,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:P,createdAt:v,lastLoginAt:g});return C&&Array.isArray(C)&&(B.providerData=C.map(Q=>Object.assign({},Q))),w&&(B._redirectEventId=w),B}static async _fromIdTokenResponse(e,t,i=!1){const s=new Ft;s.updateFromServerResponse(t);const r=new Pe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ci(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];N(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?vc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new Ft;a.updateFromIdToken(i);const c=new Pe({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ks(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map;function Oe(n){$e(n instanceof Function,"Expected a class definition");let e=Do.get(n);return e?($e(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Do.set(n,e),e)}/**
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
 */class wc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wc.type="NONE";const Lo=wc;/**
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
 */function li(n,e,t){return`firebase:${n}:${e}:${t}`}class $t{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=li(this.userKey,s.apiKey,r),this.fullPersistenceKey=li("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new $t(Oe(Lo),e,i);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||Oe(Lo);const o=li(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){const u=Pe._fromJSON(e,d);l!==r&&(a=u),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new $t(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new $t(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ec(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tc(e))return"Blackberry";if(kc(e))return"Webos";if(Ic(e))return"Safari";if((e.includes("chrome/")||bc(e))&&!e.includes("edge/"))return"Chrome";if(Sc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ec(n=le()){return/firefox\//i.test(n)}function Ic(n=le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bc(n=le()){return/crios\//i.test(n)}function Cc(n=le()){return/iemobile/i.test(n)}function Sc(n=le()){return/android/i.test(n)}function Tc(n=le()){return/blackberry/i.test(n)}function kc(n=le()){return/webos/i.test(n)}function kr(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Mh(n=le()){var e;return kr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dh(){return Gu()&&document.documentMode===10}function Rc(n=le()){return kr(n)||Sc(n)||kc(n)||Tc(n)||/windows phone/i.test(n)||Cc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n,e=[]){let t;switch(n){case"Browser":t=xo(le());break;case"Worker":t=`${xo(le())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${tn}/${i}`}/**
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
 */class Lh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function xh(n,e={}){return ct(n,"GET","/v2/passwordPolicy",at(n,e))}/**
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
 */const Fh=6;class $h{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Fh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fo(this),this.idTokenSubscription=new Fo(this),this.beforeStateQueue=new Lh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Oe(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await $t.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yc(this,{idToken:e}),i=await Pe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ce(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ci(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ce(this.app))return Promise.reject(De(this));const t=e?ne(e):null;return t&&N(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ce(this.app)?Promise.reject(De(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ce(this.app)?Promise.reject(De(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Oe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xh(this),t=new $h(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Oh(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Oe(e)||this._popupRedirectResolver;N(t,this,"argument-error"),this.redirectPersistenceManager=await $t.create(this,[Oe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&mh(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rt(n){return ne(n)}class Fo{constructor(e){this.auth=e,this.observer=null,this.addObserver=td(t=>this.observer=t)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bh(n){Zi=n}function Ac(n){return Zi.loadJS(n)}function Wh(){return Zi.recaptchaEnterpriseScript}function Hh(){return Zi.gapiScript}function Vh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const jh="recaptcha-enterprise",Gh="NO_RECAPTCHA";class qh{constructor(e){this.type=jh,this.auth=Rt(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ch(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new bh(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;Oo(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(Gh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&Oo(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Wh();c.length!==0&&(c+=a),Ac(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function $o(n,e,t,i=!1){const s=new qh(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function zs(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await $o(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $o(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n,e){const t=Ir(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Ei(r,e??{}))return s;Ee(s,"already-initialized")}return t.initialize({options:e})}function zh(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Oe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Yh(n,e,t){const i=Rt(n);N(i._canInitEmulator,i,"emulator-config-failed"),N(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Pc(e),{host:o,port:a}=Qh(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Jh()}function Pc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Qh(n){const e=Pc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Uo(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Uo(o)}}}function Uo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jh(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ae("not implemented")}_getIdTokenResponse(e){return Ae("not implemented")}_linkToIdToken(e,t){return Ae("not implemented")}_getReauthenticationResolver(e){return Ae("not implemented")}}async function Xh(n,e){return ct(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(n,e){return Vn(n,"POST","/v1/accounts:signInWithPassword",at(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ef(n,e){return Vn(n,"POST","/v1/accounts:signInWithEmailLink",at(n,e))}async function tf(n,e){return Vn(n,"POST","/v1/accounts:signInWithEmailLink",at(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Rr{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Nn(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Nn(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zs(e,t,"signInWithPassword",Zh);case"emailLink":return ef(e,{email:this._email,oobCode:this._password});default:Ee(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zs(e,i,"signUpPassword",Xh);case"emailLink":return tf(e,{idToken:t,email:this._email,oobCode:this._password});default:Ee(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(n,e){return Vn(n,"POST","/v1/accounts:signInWithIdp",at(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="http://localhost";class Et extends Rr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ee("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=br(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Et(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ut(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ut(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ut(e,t)}buildRequest(){const e={requestUri:nf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=en(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rf(n){const e=mn(gn(n)).link,t=e?mn(gn(e)).deep_link_id:null,i=mn(gn(n)).deep_link_id;return(i?mn(gn(i)).link:null)||i||t||e||n}class Nr{constructor(e){var t,i,s,r,o,a;const c=mn(gn(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,u=sf((s=c.mode)!==null&&s!==void 0?s:null);N(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=rf(e);try{return new Nr(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.providerId=nn.PROVIDER_ID}static credential(e,t){return Nn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Nr.parseLink(t);return N(i,"argument-error"),Nn._fromEmailAndCode(e,i.code,i.tenantId)}}nn.PROVIDER_ID="password";nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jn extends Oc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends jn{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.FACEBOOK_SIGN_IN_METHOD="facebook.com";je.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Et._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ge.credential(t,i)}catch{return null}}}Ge.GOOGLE_SIGN_IN_METHOD="google.com";Ge.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends jn{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qe.credential(e.oauthAccessToken)}catch{return null}}}qe.GITHUB_SIGN_IN_METHOD="github.com";qe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends jn{constructor(){super("twitter.com")}static credential(e,t){return Et._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ke.credential(t,i)}catch{return null}}}Ke.TWITTER_SIGN_IN_METHOD="twitter.com";Ke.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of(n,e){return Vn(n,"POST","/v1/accounts:signUp",at(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Pe._fromIdTokenResponse(e,i,s),o=Bo(i);return new It({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Bo(i);return new It({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Bo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends ot{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Si.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Si(e,t,i,s)}}function Mc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Si._fromErrorAndOperation(n,r,e,i):r})}async function af(n,e,t=!1){const i=await Rn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return It._forOperation(n,"link",i)}/**
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
 */async function cf(n,e,t=!1){const{auth:i}=n;if(Ce(i.app))return Promise.reject(De(i));const s="reauthenticate";try{const r=await Rn(n,Mc(i,s,e,n),t);N(r.idToken,i,"internal-error");const o=Tr(r.idToken);N(o,i,"internal-error");const{sub:a}=o;return N(n.uid===a,i,"user-mismatch"),It._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ee(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(n,e,t=!1){if(Ce(n.app))return Promise.reject(De(n));const i="signIn",s=await Mc(n,i,e),r=await It._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function lf(n,e){return Dc(Rt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(n){const e=Rt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uf(n,e,t){if(Ce(n.app))return Promise.reject(De(n));const i=Rt(n),o=await zs(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",of).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Lc(n),c}),a=await It._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function df(n,e,t){return Ce(n.app)?Promise.reject(De(n)):lf(ne(n),nn.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Lc(n),i})}function hf(n,e,t,i){return ne(n).onIdTokenChanged(e,t,i)}function ff(n,e,t){return ne(n).beforeAuthStateChanged(e,t)}function pf(n,e,t,i){return ne(n).onAuthStateChanged(e,t,i)}function mf(n){return ne(n).signOut()}const Ti="__sak";/**
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
 */class xc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ti,"1"),this.storage.removeItem(Ti),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=1e3,_f=10;class Fc extends xc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Dh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_f):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},gf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fc.type="LOCAL";const yf=Fc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends xc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$c.type="SESSION";const Uc=$c;/**
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
 */class es{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new es(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await vf(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}es.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class wf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Ar("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return window}function Ef(n){ke().location.href=n}/**
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
 */function Bc(){return typeof ke().WorkerGlobalScope<"u"&&typeof ke().importScripts=="function"}async function If(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Cf(){return Bc()?self:null}/**
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
 */const Wc="firebaseLocalStorageDb",Sf=1,ki="firebaseLocalStorage",Hc="fbase_key";class Gn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ts(n,e){return n.transaction([ki],e?"readwrite":"readonly").objectStore(ki)}function Tf(){const n=indexedDB.deleteDatabase(Wc);return new Gn(n).toPromise()}function Ys(){const n=indexedDB.open(Wc,Sf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ki,{keyPath:Hc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ki)?e(i):(i.close(),await Tf(),e(await Ys()))})})}async function Wo(n,e,t){const i=ts(n,!0).put({[Hc]:e,value:t});return new Gn(i).toPromise()}async function kf(n,e){const t=ts(n,!1).get(e),i=await new Gn(t).toPromise();return i===void 0?null:i.value}function Ho(n,e){const t=ts(n,!0).delete(e);return new Gn(t).toPromise()}const Rf=800,Nf=3;class Vc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ys(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Nf)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=es._getInstance(Cf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await If(),!this.activeServiceWorker)return;this.sender=new wf(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ys();return await Wo(e,Ti,"1"),await Ho(e,Ti),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Wo(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>kf(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ho(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ts(s,!1).getAll();return new Gn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vc.type="LOCAL";const Af=Vc;new Hn(3e4,6e4);/**
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
 */function Pf(n,e){return e?Oe(e):(N(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Pr extends Rr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ut(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ut(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ut(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Of(n){return Dc(n.auth,new Pr(n),n.bypassAuthState)}function Mf(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),cf(t,new Pr(n),n.bypassAuthState)}async function Df(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),af(t,new Pr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Of;case"linkViaPopup":case"linkViaRedirect":return Df;case"reauthViaPopup":case"reauthViaRedirect":return Mf;default:Ee(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new Hn(2e3,1e4);class Dt extends jc{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Dt.currentPopupAction&&Dt.currentPopupAction.cancel(),Dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=Ar();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lf.get())};e()}}Dt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="pendingRedirect",ui=new Map;class Ff extends jc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ui.get(this.auth._key());if(!e){try{const i=await $f(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ui.set(this.auth._key(),e)}return this.bypassAuthState||ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $f(n,e){const t=Wf(e),i=Bf(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Uf(n,e){ui.set(n._key(),e)}function Bf(n){return Oe(n._redirectPersistence)}function Wf(n){return li(xf,n.config.apiKey,n.name)}async function Hf(n,e,t=!1){if(Ce(n.app))return Promise.reject(De(n));const i=Rt(n),s=Pf(i,e),o=await new Ff(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=10*60*1e3;class jf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Gc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Te(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vo(e))}saveEventToCache(e){this.cachedEventUids.add(Vo(e)),this.lastProcessedEventTime=Date.now()}}function Vo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Gc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(n,e={}){return ct(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zf=/^https?/;async function Yf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qf(n);for(const t of e)try{if(Qf(t))return}catch{}Ee(n,"unauthorized-domain")}function Qf(n){const e=qs(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!zf.test(t))return!1;if(Kf.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Jf=new Hn(3e4,6e4);function jo(){const n=ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xf(n){return new Promise((e,t)=>{var i,s,r;function o(){jo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jo(),t(Te(n,"network-request-failed"))},timeout:Jf.get()})}if(!((s=(i=ke().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ke().gapi)===null||r===void 0)&&r.load)o();else{const a=Vh("iframefcb");return ke()[a]=()=>{gapi.load?o():t(Te(n,"network-request-failed"))},Ac(`${Hh()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw di=null,e})}let di=null;function Zf(n){return di=di||Xf(n),di}/**
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
 */const ep=new Hn(5e3,15e3),tp="__/auth/iframe",np="emulator/auth/iframe",ip={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rp(n){const e=n.config;N(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Sr(e,np):`https://${n.config.authDomain}/${tp}`,i={apiKey:e.apiKey,appName:n.name,v:tn},s=sp.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${en(i).slice(1)}`}async function op(n){const e=await Zf(n),t=ke().gapi;return N(t,n,"internal-error"),e.open({where:document.body,url:rp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ip,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Te(n,"network-request-failed"),a=ke().setTimeout(()=>{r(o)},ep.get());function c(){ke().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const ap={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cp=500,lp=600,up="_blank",dp="http://localhost";class Go{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hp(n,e,t,i=cp,s=lp){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ap),{width:i.toString(),height:s.toString(),top:r,left:o}),l=le().toLowerCase();t&&(a=bc(l)?up:t),Ec(l)&&(e=e||dp,c.scrollbars="yes");const d=Object.entries(c).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(Mh(l)&&a!=="_self")return fp(e||"",a),new Go(null);const u=window.open(e||"",a,d);N(u,n,"popup-blocked");try{u.focus()}catch{}return new Go(u)}function fp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const pp="__/auth/handler",mp="emulator/auth/handler",gp=encodeURIComponent("fac");async function qo(n,e,t,i,s,r){N(n.config.authDomain,n,"auth-domain-config-required"),N(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:tn,eventId:s};if(e instanceof Oc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",vi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof jn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${gp}=${encodeURIComponent(c)}`:"";return`${_p(n)}?${en(a).slice(1)}${l}`}function _p({config:n}){return n.emulator?Sr(n,mp):`https://${n.authDomain}/${pp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="webStorageSupport";class yp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uc,this._completeRedirectFn=Hf,this._overrideRedirectResult=Uf}async _openPopup(e,t,i,s){var r;$e((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await qo(e,t,i,qs(),s);return hp(e,o,Ar())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await qo(e,t,i,qs(),s);return Ef(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):($e(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await op(e),i=new jf(e);return t.register("authEvent",s=>(N(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ts,{type:Ts},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Ts];o!==void 0&&t(!!o),Ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Rc()||Ic()||kr()}}const vp=yp;var Ko="@firebase/auth",zo="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ip(n){Vt(new wt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nc(n)},l=new Uh(i,s,r,c);return zh(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Vt(new wt("auth-internal",e=>{const t=Rt(e.getProvider("auth").getImmediate());return(i=>new wp(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Ko,zo,Ep(n)),Ze(Ko,zo,"esm2017")}/**
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
 */const bp=5*60,Cp=ic("authIdTokenMaxAge")||bp;let Yo=null;const Sp=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Cp)return;const s=t==null?void 0:t.token;Yo!==s&&(Yo=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Tp(n=lc()){const e=Ir(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Kh(n,{popupRedirectResolver:vp,persistence:[Af,yf,Uc]}),i=ic("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Sp(r.toString());ff(t,o,()=>o(t.currentUser)),hf(t,a=>o(a))}}const s=tc("auth");return s&&Yh(t,`http://${s}`),t}function kp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Bh({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Te("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",kp().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ip("Browser");var Qo={};const Jo="@firebase/database",Xo="1.0.8";/**
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
 */let qc="";function Rp(n){qc=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),J(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Tn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ie(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Np(e)}}catch{}return new Ap},pt=Kc("localStorage"),Pp=Kc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new wr("@firebase/database"),zc=function(){let n=1;return function(){return n++}}(),Yc=function(n){const e=sd(n),t=new ed;t.update(e);const i=t.digest();return _r.encodeByteArray(i)},qn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=qn.apply(null,i):typeof i=="object"?e+=J(i):e+=i,e+=" "}return e};let vn=null,Zo=!0;const Op=function(n,e){_(!0,"Can't turn on custom loggers persistently."),Bt.logLevel=H.VERBOSE,vn=Bt.log.bind(Bt)},ee=function(...n){if(Zo===!0&&(Zo=!1,vn===null&&Pp.get("logging_enabled")===!0&&Op()),vn){const e=qn.apply(null,n);vn(e)}},Kn=function(n){return function(...e){ee(n,...e)}},Qs=function(...n){const e="FIREBASE INTERNAL ERROR: "+qn(...n);Bt.error(e)},Ue=function(...n){const e=`FIREBASE FATAL ERROR: ${qn(...n)}`;throw Bt.error(e),new Error(e)},ce=function(...n){const e="FIREBASE WARNING: "+qn(...n);Bt.warn(e)},Mp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ns=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Dp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},jt="[MIN_NAME]",bt="[MAX_NAME]",Nt=function(n,e){if(n===e)return 0;if(n===jt||e===bt)return-1;if(e===jt||n===bt)return 1;{const t=ea(n),i=ea(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Lp=function(n,e){return n===e?0:n<e?-1:1},dn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+J(e))},Or=function(n){if(typeof n!="object"||n===null)return J(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=J(e[i]),t+=":",t+=Or(n[e[i]]);return t+="}",t},Qc=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function te(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Jc=function(n){_(!ns(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},xp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Fp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $p(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Up=new RegExp("^-?(0*)\\d{1,10}$"),Bp=-2147483648,Wp=2147483647,ea=function(n){if(Up.test(n)){const e=Number(n);if(e>=Bp&&e<=Wp)return e}return null},sn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ce("Exception was thrown by user callback.",t),e},Math.floor(0))}},Hp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Vp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class hi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="5",Xc="v",Zc="s",el="r",tl="f",nl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,il="ls",sl="p",Js="ac",rl="websocket",ol="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t,i,s,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Gp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function cl(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let i;if(e===rl)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ol)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gp(n)&&(t.ns=n.namespace);const s=[];return te(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.counters_={}}incrementCounter(e,t=1){Ie(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Lu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks={},Rs={};function Dr(n){const e=n.toString();return ks[e]||(ks[e]=new qp),ks[e]}function Kp(n,e){const t=n.toString();return Rs[t]||(Rs[t]=e()),Rs[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&sn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="start",Yp="close",Qp="pLPCommand",Jp="pRTLPCB",ll="id",ul="pw",dl="ser",Xp="cb",Zp="seg",em="ts",tm="d",nm="dframe",hl=1870,fl=30,im=hl-fl,sm=25e3,rm=3e4;class Lt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Kn(e),this.stats_=Dr(t),this.urlFn=c=>(this.appCheckToken&&(c[Js]=this.appCheckToken),cl(t,ol,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new zp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rm)),Dp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lr((...r)=>{const[o,a,c,l,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ta)this.id=a,this.password=c;else if(o===Yp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ta]="t",i[dl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Xp]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Xc]=Mr,this.transportSessionId&&(i[Zc]=this.transportSessionId),this.lastSessionId&&(i[il]=this.lastSessionId),this.applicationId&&(i[sl]=this.applicationId),this.appCheckToken&&(i[Js]=this.appCheckToken),typeof location<"u"&&location.hostname&&nl.test(location.hostname)&&(i[el]=tl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Lt.forceAllow_=!0}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){return Lt.forceAllow_?!0:!Lt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!xp()&&!Fp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=J(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Za(t),s=Qc(i,im);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[nm]="t",i[ll]=e,i[ul]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=J(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Lr{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zc(),window[Qp+this.uniqueCallbackIdentifier]=e,window[Jp+this.uniqueCallbackIdentifier]=t,this.myIFrame=Lr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ee("frame writing exception"),a.stack&&ee(a.stack),ee(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ee("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ll]=this.myID,e[ul]=this.myPW,e[dl]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fl+i.length<=hl;){const o=this.pendingSegs.shift();i=i+"&"+Zp+s+"="+o.seg+"&"+em+s+"="+o.ts+"&"+tm+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(sm)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=16384,am=45e3;let Ri=null;typeof MozWebSocket<"u"?Ri=MozWebSocket:typeof WebSocket<"u"&&(Ri=WebSocket);class ye{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Kn(this.connId),this.stats_=Dr(t),this.connURL=ye.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Xc]=Mr,typeof location<"u"&&location.hostname&&nl.test(location.hostname)&&(o[el]=tl),t&&(o[Zc]=t),i&&(o[il]=i),s&&(o[Js]=s),r&&(o[sl]=r),cl(e,rl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pt.set("previous_websocket_failure",!0);try{let i;qu(),this.mySock=new Ri(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ri!==null&&!ye.forceDisallow_}static previouslyFailed(){return pt.isInMemoryStorage||pt.get("previous_websocket_failure")===!0}markConnectionHealthy(){pt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Tn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=J(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Qc(t,om);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(am))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ye.responsesRequiredToBeHealthy=2;ye.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Lt,ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ye&&ye.isAvailable();let i=t&&!ye.previouslyFailed();if(e.webSocketOnly&&(t||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ye];else{const s=this.transports_=[];for(const r of An.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);An.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}An.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=6e4,lm=5e3,um=10*1024,dm=100*1024,Ns="t",na="d",hm="s",ia="r",fm="e",sa="o",ra="a",oa="n",aa="p",pm="h";class mm{constructor(e,t,i,s,r,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Kn("c:"+this.id+":"),this.transportManager_=new An(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=wn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>um?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ns in e){const t=e[Ns];t===ra?this.upgradeIfSecondaryHealthy_():t===ia?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===sa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=dn("t",e),i=dn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:aa,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ra,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:oa,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=dn("t",e),i=dn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=dn(Ns,e);if(na in e){const i=e[na];if(t===pm){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===oa){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===hm?this.onConnectionShutdown_(i):t===ia?this.onReset_(i):t===fm?Qs("Server Error: "+i):t===sa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Mr!==i&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),wn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(cm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:aa,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends ml{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ni}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=32,la=768;class W{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function U(){return new W("")}function O(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function nt(n){return n.pieces_.length-n.pieceNum_}function j(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new W(n.pieces_,e)}function xr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function gm(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Pn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function gl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new W(e,0)}function Y(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof W)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new W(t,0)}function M(n){return n.pieceNum_>=n.pieces_.length}function ae(n,e){const t=O(n),i=O(e);if(t===null)return e;if(t===i)return ae(j(n),j(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function _m(n,e){const t=Pn(n,0),i=Pn(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=Nt(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function Fr(n,e){if(nt(n)!==nt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function pe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(nt(n)>nt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class ym{constructor(e,t){this.errorPrefix_=t,this.parts_=Pn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Xi(this.parts_[i]);_l(this)}}function vm(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Xi(e),_l(n)}function wm(n){const e=n.parts_.pop();n.byteLength_-=Xi(e),n.parts_.length>0&&(n.byteLength_-=1)}function _l(n){if(n.byteLength_>la)throw new Error(n.errorPrefix_+"has a key path longer than "+la+" bytes ("+n.byteLength_+").");if(n.parts_.length>ca)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ca+") or object contains a cycle "+dt(n))}function dt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends ml{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new $r}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=1e3,Em=60*5*1e3,ua=30*1e3,Im=1.3,bm=3e4,Cm="server_kill",da=3;class Le extends pl{constructor(e,t,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Le.nextPersistentConnectionId_++,this.log_=Kn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hn,this.maxReconnectDelay_=Em,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$r.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ni.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(J(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new _e,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Le.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ie(e,"w")){const i=vt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Zu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ua)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Xu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+J(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Qs("Unrecognized action received from server: "+J(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bm&&(this.reconnectDelay_=hn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Im)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Le.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(u){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ee("getToken() completed but was canceled"):(ee("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new mm(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{ce(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Cm)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ce(u),c())}}}interrupt(e){ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vi(this.interruptReasons_)&&(this.reconnectDelay_=hn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Or(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new W(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){ee("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=da&&(this.reconnectDelay_=ua,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ee("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=da&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+qc.replace(/\./g,"-")]=1,vr()?e["framework.cordova"]=1:sc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ni.getInstance().currentlyOnline();return vi(this.interruptReasons_)&&e}}Le.nextPersistentConnectionId_=0;Le.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new D(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new D(jt,e),s=new D(jt,t);return this.compare(i,s)!==0}minPost(){return D.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;class yl extends is{static get __EMPTY_NODE(){return si}static set __EMPTY_NODE(e){si=e}compare(e,t){return Nt(e.name,t.name)}isDefinedOn(e){throw Zt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return D.MIN}maxPost(){return new D(bt,si)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,si)}toString(){return".key"}}const Wt=new yl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Z{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Z.RED,this.left=s??ue.EMPTY_NODE,this.right=r??ue.EMPTY_NODE}copy(e,t,i,s,r){return new Z(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Z.RED=!0;Z.BLACK=!1;class Sm{copy(e,t,i,s,r){return this}insert(e,t,i){return new Z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ue{constructor(e,t=ue.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ue(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Z.BLACK,null,null))}remove(e){return new ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Z.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ri(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ri(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ri(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ri(this.root_,null,this.comparator_,!0,e)}}ue.EMPTY_NODE=new Sm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(n,e){return Nt(n.name,e.name)}function Ur(n,e){return Nt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs;function km(n){Xs=n}const vl=function(n){return typeof n=="number"?"number:"+Jc(n):"string:"+n},wl=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ie(e,".sv"),"Priority must be a string or number.")}else _(n===Xs||n.isEmpty(),"priority of unexpected type.");_(n===Xs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;class X{constructor(e,t=X.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),wl(this.priorityNode_)}static set __childrenNodeConstructor(e){ha=e}static get __childrenNodeConstructor(){return ha}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new X(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:O(e)===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:X.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=O(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(_(i!==".priority"||nt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,X.__childrenNodeConstructor.EMPTY_NODE.updateChild(j(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+vl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Jc(this.value_):e+=this.value_,this.lazyHash_=Yc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===X.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof X.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=X.VALUE_TYPE_ORDER.indexOf(t),r=X.VALUE_TYPE_ORDER.indexOf(i);return _(s>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}X.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El,Il;function Rm(n){El=n}function Nm(n){Il=n}class Am extends is{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Nt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return D.MIN}maxPost(){return new D(bt,new X("[PRIORITY-POST]",Il))}makePost(e,t){const i=El(e);return new D(t,new X("[PRIORITY-POST]",i))}toString(){return".priority"}}const K=new Am;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=Math.log(2);class Om{constructor(e){const t=r=>parseInt(Math.log(r)/Pm,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ai=function(n,e,t,i){n.sort(e);const s=function(c,l){const d=l-c;let u,h;if(d===0)return null;if(d===1)return u=n[c],h=t?t(u):u,new Z(h,u.node,Z.BLACK,null,null);{const p=parseInt(d/2,10)+c,m=s(c,p),y=s(p+1,l);return u=n[p],h=t?t(u):u,new Z(h,u.node,Z.BLACK,m,y)}},r=function(c){let l=null,d=null,u=n.length;const h=function(m,y){const w=u-m,v=u;u-=m;const g=s(w+1,v),E=n[w],T=t?t(E):E;p(new Z(T,E.node,y,null,g))},p=function(m){l?(l.left=m,l=m):(d=m,l=m)};for(let m=0;m<c.count;++m){const y=c.nextBitIsOne(),w=Math.pow(2,c.count-(m+1));y?h(w,Z.BLACK):(h(w,Z.BLACK),h(w,Z.RED))}return d},o=new Om(n.length),a=r(o);return new ue(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As;const Mt={};class Me{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _(Mt&&K,"ChildrenNode.ts has not been loaded"),As=As||new Me({".priority":Mt},{".priority":K}),As}get(e){const t=vt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ue?t:null}hasIndex(e){return Ie(this.indexSet_,e.toString())}addIndex(e,t){_(e!==Wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(D.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ai(i,e.getCompare()):a=Mt;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new Me(d,l)}addToIndexes(e,t){const i=wi(this.indexes_,(s,r)=>{const o=vt(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),s===Mt)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(D.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ai(a,o.getCompare())}else return Mt;else{const a=t.get(e.name);let c=s;return a&&(c=c.remove(new D(e.name,a))),c.insert(e,e.node)}});return new Me(i,this.indexSet_)}removeFromIndexes(e,t){const i=wi(this.indexes_,s=>{if(s===Mt)return s;{const r=t.get(e.name);return r?s.remove(new D(e.name,r)):s}});return new Me(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class k{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&wl(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new k(new ue(Ur),null,Me.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?fn:t}}getChild(e){const t=O(e);return t===null?this:this.getImmediateChild(t).getChild(j(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new D(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?fn:this.priorityNode_;return new k(s,o,r)}}updateChild(e,t){const i=O(e);if(i===null)return t;{_(O(e)!==".priority"||nt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(j(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(K,(o,a)=>{t[o]=a.val(e),i++,r&&k.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+vl(this.getPriority().val())+":"),this.forEachChild(K,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Yc(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new D(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new D(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new D(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zn?-1:0}withIndex(e){if(e===Wt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(K),s=t.getIterator(K);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Wt?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Mm extends k{constructor(){super(new ue(Ur),k.EMPTY_NODE,Me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const zn=new Mm;Object.defineProperties(D,{MIN:{value:new D(jt,k.EMPTY_NODE)},MAX:{value:new D(bt,zn)}});yl.__EMPTY_NODE=k.EMPTY_NODE;X.__childrenNodeConstructor=k;km(zn);Nm(zn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=!0;function z(n,e=null){if(n===null)return k.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new X(t,z(e))}if(!(n instanceof Array)&&Dm){const t=[];let i=!1;if(te(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=z(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new D(o,c)))}}),t.length===0)return k.EMPTY_NODE;const r=Ai(t,Tm,o=>o.name,Ur);if(i){const o=Ai(t,K.getCompare());return new k(r,z(e),new Me({".priority":o},{".priority":K}))}else return new k(r,z(e),Me.Default)}else{let t=k.EMPTY_NODE;return te(n,(i,s)=>{if(Ie(n,i)&&i.substring(0,1)!=="."){const r=z(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(z(e))}}Rm(z);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends is{constructor(e){super(),this.indexPath_=e,_(!M(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Nt(e.name,t.name):r}makePost(e,t){const i=z(e),s=k.EMPTY_NODE.updateChild(this.indexPath_,i);return new D(t,s)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,zn);return new D(bt,e)}toString(){return Pn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm extends is{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Nt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,t){const i=z(e);return new D(t,i)}toString(){return".value"}}const Fm=new xm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n){return{type:"value",snapshotNode:n}}function Gt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function On(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Mn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function $m(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(On(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Gt(t,i)):o.trackChildChange(Mn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(K,(s,r)=>{t.hasChild(s)||i.trackChildChange(On(s,r))}),t.isLeafNode()||t.forEachChild(K,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Mn(s,r,o))}else i.trackChildChange(Gt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.indexedFilter_=new Br(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Dn.getStartPost_(e),this.endPost_=Dn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new D(t,i))||(i=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=k.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(k.EMPTY_NODE);const r=this;return t.forEachChild(K,(o,a)=>{r.matches(new D(o,a))||(s=s.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Dn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new D(t,i))||(i=k.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=k.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(k.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,p)=>u(p,h)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const c=new D(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,c);if(d&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Mn(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(On(t,u));const y=a.updateImmediateChild(t,k.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Gt(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return i.isEmpty()?e:d&&o(l,c)>=0?(r!=null&&(r.trackChildChange(On(l.name,l.node)),r.trackChildChange(Gt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,k.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=K}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jt}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===K}copy(){const e=new Wr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Bm(n){return n.loadsAllData()?new Br(n.getIndex()):n.hasLimit()?new Um(n):new Dn(n)}function fa(n){const e={};if(n.isDefault())return e;let t;if(n.index_===K?t="$priority":n.index_===Fm?t="$value":n.index_===Wt?t="$key":(_(n.index_ instanceof Lm,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=J(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=J(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+J(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=J(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+J(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function pa(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==K&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends pl{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Kn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Pi.getListenId_(e,i),a={};this.listens_[o]=a;const c=fa(e._queryParams);this.restRequest_(r+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,i),vt(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",s(h,null)}})}unlisten(e,t){const i=Pi.getListenId_(e,t);delete this.listens_[i]}get(e){const t=fa(e._queryParams),i=e._path.toString(),s=new _e;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+en(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Tn(a.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(){return{value:null,children:new Map}}function rn(n,e,t){if(M(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=O(e);n.children.has(i)||n.children.set(i,Oi());const s=n.children.get(i);e=j(e),rn(s,e,t)}}function Zs(n,e){if(M(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(K,(i,s)=>{rn(n,new W(i),s)}),Zs(n,e)}}else if(n.children.size>0){const t=O(e);return e=j(e),n.children.has(t)&&Zs(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function er(n,e,t){n.value!==null?t(e,n.value):Hm(n,(i,s)=>{const r=new W(e.toString()+"/"+i);er(s,r,t)})}function Hm(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&te(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=10*1e3,jm=30*1e3,Gm=5*60*1e3;class qm{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Vm(e);const i=ma+(jm-ma)*Math.random();wn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;te(e,(s,r)=>{r>0&&Ie(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),wn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Gm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ve||(ve={}));function Hr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ve.ACK_USER_WRITE,this.source=Hr()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new W(e));return new Mi(U(),t,this.revert)}}else return _(O(this.path)===e,"operationForChild called for unrelated child."),new Mi(j(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t){this.source=e,this.path=t,this.type=ve.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new Ln(this.source,U()):new Ln(this.source,j(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ve.OVERWRITE}operationForChild(e){return M(this.path)?new Ct(this.source,U(),this.snap.getImmediateChild(e)):new Ct(this.source,j(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ve.MERGE}operationForChild(e){if(M(this.path)){const t=this.children.subtree(new W(e));return t.isEmpty()?null:t.value?new Ct(this.source,U(),t.value):new qt(this.source,U(),t)}else return _(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qt(this.source,j(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const t=O(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zm(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push($m(o.childName,o.snapshotNode))}),pn(n,s,"child_removed",e,i,t),pn(n,s,"child_added",e,i,t),pn(n,s,"child_moved",r,i,t),pn(n,s,"child_changed",e,i,t),pn(n,s,"value",e,i,t),s}function pn(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,c)=>Qm(n,a,c)),o.forEach(a=>{const c=Ym(n,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function Ym(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Qm(n,e,t){if(e.childName==null||t.childName==null)throw Zt("Should only compare child_ events.");const i=new D(e.childName,e.snapshotNode),s=new D(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n,e){return{eventCache:n,serverCache:e}}function En(n,e,t,i){return ss(new it(e,t,i),n.serverCache)}function Cl(n,e,t,i){return ss(n.eventCache,new it(e,t,i))}function Di(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function St(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;const Jm=()=>(Ps||(Ps=new ue(Lp)),Ps);class q{constructor(e,t=Jm()){this.value=e,this.children=t}static fromObject(e){let t=new q(null);return te(e,(i,s)=>{t=t.set(new W(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:U(),value:this.value};if(M(e))return null;{const i=O(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(j(e),t);return r!=null?{path:Y(new W(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const t=O(e),i=this.children.get(t);return i!==null?i.subtree(j(e)):new q(null)}}set(e,t){if(M(e))return new q(t,this.children);{const i=O(e),r=(this.children.get(i)||new q(null)).set(j(e),t),o=this.children.insert(i,r);return new q(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const t=O(e),i=this.children.get(t);if(i){const s=i.remove(j(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new q(null):new q(this.value,r)}else return this}}get(e){if(M(e))return this.value;{const t=O(e),i=this.children.get(t);return i?i.get(j(e)):null}}setTree(e,t){if(M(e))return t;{const i=O(e),r=(this.children.get(i)||new q(null)).setTree(j(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new q(this.value,o)}}fold(e){return this.fold_(U(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Y(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,U(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(M(e))return null;{const r=O(e),o=this.children.get(r);return o?o.findOnPath_(j(e),Y(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,U(),t)}foreachOnPath_(e,t,i){if(M(e))return this;{this.value&&i(t,this.value);const s=O(e),r=this.children.get(s);return r?r.foreachOnPath_(j(e),Y(t,s),i):new q(null)}}foreach(e){this.foreach_(U(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Y(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.writeTree_=e}static empty(){return new we(new q(null))}}function In(n,e,t){if(M(e))return new we(new q(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ae(s,e);return r=r.updateChild(o,t),new we(n.writeTree_.set(s,r))}else{const s=new q(t),r=n.writeTree_.setTree(e,s);return new we(r)}}}function tr(n,e,t){let i=n;return te(t,(s,r)=>{i=In(i,Y(e,s),r)}),i}function ga(n,e){if(M(e))return we.empty();{const t=n.writeTree_.setTree(e,new q(null));return new we(t)}}function nr(n,e){return At(n,e)!=null}function At(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ae(t.path,e)):null}function _a(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(K,(i,s)=>{e.push(new D(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new D(i,s.value))}),e}function et(n,e){if(M(e))return n;{const t=At(n,e);return t!=null?new we(new q(t)):new we(n.writeTree_.subtree(e))}}function ir(n){return n.writeTree_.isEmpty()}function Kt(n,e){return Sl(U(),n.writeTree_,e)}function Sl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Sl(Y(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Y(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n,e){return Nl(e,n)}function Xm(n,e,t,i,s){_(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=In(n.visibleWrites,e,t)),n.lastWriteId=i}function Zm(n,e,t,i){_(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=tr(n.visibleWrites,e,t),n.lastWriteId=i}function eg(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function tg(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&ng(a,i.path)?s=!1:pe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return ig(n),!0;if(i.snap)n.visibleWrites=ga(n.visibleWrites,i.path);else{const a=i.children;te(a,c=>{n.visibleWrites=ga(n.visibleWrites,Y(i.path,c))})}return!0}else return!1}function ng(n,e){if(n.snap)return pe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&pe(Y(n.path,t),e))return!0;return!1}function ig(n){n.visibleWrites=Tl(n.allWrites,sg,U()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function sg(n){return n.visible}function Tl(n,e,t){let i=we.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)pe(t,o)?(a=ae(t,o),i=In(i,a,r.snap)):pe(o,t)&&(a=ae(o,t),i=In(i,U(),r.snap.getChild(a)));else if(r.children){if(pe(t,o))a=ae(t,o),i=tr(i,a,r.children);else if(pe(o,t))if(a=ae(o,t),M(a))i=tr(i,U(),r.children);else{const c=vt(r.children,O(a));if(c){const l=c.getChild(j(a));i=In(i,U(),l)}}}else throw Zt("WriteRecord should have .snap or .children")}}return i}function kl(n,e,t,i,s){if(!i&&!s){const r=At(n.visibleWrites,e);if(r!=null)return r;{const o=et(n.visibleWrites,e);if(ir(o))return t;if(t==null&&!nr(o,U()))return null;{const a=t||k.EMPTY_NODE;return Kt(o,a)}}}else{const r=et(n.visibleWrites,e);if(!s&&ir(r))return t;if(!s&&t==null&&!nr(r,U()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(pe(l.path,e)||pe(e,l.path))},a=Tl(n.allWrites,o,e),c=t||k.EMPTY_NODE;return Kt(a,c)}}}function rg(n,e,t){let i=k.EMPTY_NODE;const s=At(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(K,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=et(n.visibleWrites,e);return t.forEachChild(K,(o,a)=>{const c=Kt(et(r,new W(o)),a);i=i.updateImmediateChild(o,c)}),_a(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=et(n.visibleWrites,e);return _a(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function og(n,e,t,i,s){_(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Y(e,t);if(nr(n.visibleWrites,r))return null;{const o=et(n.visibleWrites,r);return ir(o)?s.getChild(t):Kt(o,s.getChild(t))}}function ag(n,e,t,i){const s=Y(e,t),r=At(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=et(n.visibleWrites,s);return Kt(o,i.getNode().getImmediateChild(t))}else return null}function cg(n,e){return At(n.visibleWrites,e)}function lg(n,e,t,i,s,r,o){let a;const c=et(n.visibleWrites,e),l=At(c,U());if(l!=null)a=l;else if(t!=null)a=Kt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=h.getNext();for(;p&&d.length<s;)u(p,i)!==0&&d.push(p),p=h.getNext();return d}else return[]}function ug(){return{visibleWrites:we.empty(),allWrites:[],lastWriteId:-1}}function Li(n,e,t,i){return kl(n.writeTree,n.treePath,e,t,i)}function Gr(n,e){return rg(n.writeTree,n.treePath,e)}function ya(n,e,t,i){return og(n.writeTree,n.treePath,e,t,i)}function xi(n,e){return cg(n.writeTree,Y(n.treePath,e))}function dg(n,e,t,i,s,r){return lg(n.writeTree,n.treePath,e,t,i,s,r)}function qr(n,e,t){return ag(n.writeTree,n.treePath,e,t)}function Rl(n,e){return Nl(Y(n.treePath,e),n.writeTree)}function Nl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Mn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,On(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Gt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Mn(i,e.snapshotNode,s.oldSnap));else throw Zt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Al=new fg;class Kr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new it(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:St(this.viewCache_),r=dg(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n){return{filter:n}}function mg(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function gg(n,e,t,i,s){const r=new hg;let o,a;if(t.type===ve.OVERWRITE){const l=t;l.source.fromUser?o=sr(n,e,l.path,l.snap,i,s,r):(_(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!M(l.path),o=Fi(n,e,l.path,l.snap,i,s,a,r))}else if(t.type===ve.MERGE){const l=t;l.source.fromUser?o=yg(n,e,l.path,l.children,i,s,r):(_(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=rr(n,e,l.path,l.children,i,s,a,r))}else if(t.type===ve.ACK_USER_WRITE){const l=t;l.revert?o=Eg(n,e,l.path,i,s,r):o=vg(n,e,l.path,l.affectedTree,i,s,r)}else if(t.type===ve.LISTEN_COMPLETE)o=wg(n,e,t.path,i,r);else throw Zt("Unknown operation type: "+t.type);const c=r.getChanges();return _g(e,o,c),{viewCache:o,changes:c}}function _g(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Di(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(bl(Di(e)))}}function Pl(n,e,t,i,s,r){const o=e.eventCache;if(xi(i,t)!=null)return e;{let a,c;if(M(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=St(e),d=l instanceof k?l:k.EMPTY_NODE,u=Gr(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=Li(i,St(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=O(t);if(l===".priority"){_(nt(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=ya(i,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=j(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=ya(i,t,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=qr(i,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,s,r):a=o.getNode()}}return En(e,a,o.isFullyInitialized()||M(t),n.filter.filtersNodes())}}function Fi(n,e,t,i,s,r,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if(M(t))l=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,i);l=d.updateFullNode(c.getNode(),p,null)}else{const p=O(t);if(!c.isCompleteForPath(t)&&nt(t)>1)return e;const m=j(t),w=c.getNode().getImmediateChild(p).updateChild(m,i);p===".priority"?l=d.updatePriority(c.getNode(),w):l=d.updateChild(c.getNode(),p,w,m,Al,null)}const u=Cl(e,l,c.isFullyInitialized()||M(t),d.filtersNodes()),h=new Kr(s,u,r);return Pl(n,u,t,s,h,a)}function sr(n,e,t,i,s,r,o){const a=e.eventCache;let c,l;const d=new Kr(s,e,r);if(M(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=En(e,l,!0,n.filter.filtersNodes());else{const u=O(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=En(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=j(t),p=a.getNode().getImmediateChild(u);let m;if(M(h))m=i;else{const y=d.getCompleteChild(u);y!=null?xr(h)===".priority"&&y.getChild(gl(h)).isEmpty()?m=y:m=y.updateChild(h,i):m=k.EMPTY_NODE}if(p.equals(m))c=e;else{const y=n.filter.updateChild(a.getNode(),u,m,h,d,o);c=En(e,y,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function va(n,e){return n.eventCache.isCompleteForChild(e)}function yg(n,e,t,i,s,r,o){let a=e;return i.foreach((c,l)=>{const d=Y(t,c);va(e,O(d))&&(a=sr(n,a,d,l,s,r,o))}),i.foreach((c,l)=>{const d=Y(t,c);va(e,O(d))||(a=sr(n,a,d,l,s,r,o))}),a}function wa(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function rr(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;M(t)?l=i:l=new q(null).setTree(t,i);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),m=wa(n,p,h);c=Fi(n,c,new W(u),m,s,r,o,a)}}),l.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!p){const m=e.serverCache.getNode().getImmediateChild(u),y=wa(n,m,h);c=Fi(n,c,new W(u),y,s,r,o,a)}}),c}function vg(n,e,t,i,s,r,o){if(xi(s,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(M(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Fi(n,e,t,c.getNode().getChild(t),s,r,a,o);if(M(t)){let l=new q(null);return c.getNode().forEachChild(Wt,(d,u)=>{l=l.set(new W(d),u)}),rr(n,e,t,l,s,r,a,o)}else return e}else{let l=new q(null);return i.foreach((d,u)=>{const h=Y(t,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),rr(n,e,t,l,s,r,a,o)}}function wg(n,e,t,i,s){const r=e.serverCache,o=Cl(e,r.getNode(),r.isFullyInitialized()||M(t),r.isFiltered());return Pl(n,o,t,i,Al,s)}function Eg(n,e,t,i,s,r){let o;if(xi(i,t)!=null)return e;{const a=new Kr(i,e,s),c=e.eventCache.getNode();let l;if(M(t)||O(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Li(i,St(e));else{const u=e.serverCache.getNode();_(u instanceof k,"serverChildren would be complete if leaf node"),d=Gr(i,u)}d=d,l=n.filter.updateFullNode(c,d,r)}else{const d=O(t);let u=qr(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,j(t),a,r):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,k.EMPTY_NODE,j(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Li(i,St(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||xi(i,U())!=null,En(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Br(i.getIndex()),r=Bm(i);this.processor_=pg(r);const o=t.serverCache,a=t.eventCache,c=s.updateFullNode(k.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(k.EMPTY_NODE,a.getNode(),null),d=new it(c,o.isFullyInitialized(),s.filtersNodes()),u=new it(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ss(u,d),this.eventGenerator_=new Km(this.query_)}get query(){return this.query_}}function bg(n){return n.viewCache_.serverCache.getNode()}function Cg(n){return Di(n.viewCache_)}function Sg(n,e){const t=St(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!M(e)&&!t.getImmediateChild(O(e)).isEmpty())?t.getChild(e):null}function Ea(n){return n.eventRegistrations_.length===0}function Tg(n,e){n.eventRegistrations_.push(e)}function Ia(n,e,t){const i=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function ba(n,e,t,i){e.type===ve.MERGE&&e.source.queryId!==null&&(_(St(n.viewCache_),"We should always have a full cache before handling merges"),_(Di(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=gg(n.processor_,s,e,t,i);return mg(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ol(n,r.changes,r.viewCache.eventCache.getNode(),null)}function kg(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(K,(r,o)=>{i.push(Gt(r,o))}),t.isFullyInitialized()&&i.push(bl(t.getNode())),Ol(n,i,t.getNode(),e)}function Ol(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return zm(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i;class Ml{constructor(){this.views=new Map}}function Rg(n){_(!$i,"__referenceConstructor has already been defined"),$i=n}function Ng(){return _($i,"Reference.ts has not been loaded"),$i}function Ag(n){return n.views.size===0}function zr(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return _(r!=null,"SyncTree gave us an op for an invalid query."),ba(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(ba(o,e,t,i));return r}}function Dl(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Li(t,s?i:null),c=!1;a?c=!0:i instanceof k?(a=Gr(t,i),c=!1):(a=k.EMPTY_NODE,c=!1);const l=ss(new it(a,c,!1),new it(i,s,!1));return new Ig(e,l)}return o}function Pg(n,e,t,i,s,r){const o=Dl(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Tg(o,t),kg(o,t)}function Og(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=st(n);if(s==="default")for(const[c,l]of n.views.entries())o=o.concat(Ia(l,t,i)),Ea(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(s);c&&(o=o.concat(Ia(c,t,i)),Ea(c)&&(n.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!st(n)&&r.push(new(Ng())(e._repo,e._path)),{removed:r,events:o}}function Ll(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function tt(n,e){let t=null;for(const i of n.views.values())t=t||Sg(i,e);return t}function xl(n,e){if(e._queryParams.loadsAllData())return os(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Fl(n,e){return xl(n,e)!=null}function st(n){return os(n)!=null}function os(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui;function Mg(n){_(!Ui,"__referenceConstructor has already been defined"),Ui=n}function Dg(){return _(Ui,"Reference.ts has not been loaded"),Ui}let Lg=1;class Ca{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=ug(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yr(n,e,t,i,s){return Xm(n.pendingWriteTree_,e,t,i,s),s?on(n,new Ct(Hr(),e,t)):[]}function xg(n,e,t,i){Zm(n.pendingWriteTree_,e,t,i);const s=q.fromObject(t);return on(n,new qt(Hr(),e,s))}function ze(n,e,t=!1){const i=eg(n.pendingWriteTree_,e);if(tg(n.pendingWriteTree_,e)){let r=new q(null);return i.snap!=null?r=r.set(U(),!0):te(i.children,o=>{r=r.set(new W(o),!0)}),on(n,new Mi(i.path,r,t))}else return[]}function Yn(n,e,t){return on(n,new Ct(Vr(),e,t))}function Fg(n,e,t){const i=q.fromObject(t);return on(n,new qt(Vr(),e,i))}function $g(n,e){return on(n,new Ln(Vr(),e))}function Ug(n,e,t){const i=Qr(n,t);if(i){const s=Jr(i),r=s.path,o=s.queryId,a=ae(r,e),c=new Ln(jr(o),a);return Xr(n,r,c)}else return[]}function Bi(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Fl(o,e))){const c=Og(o,e,t,i);Ag(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(h,p)=>st(p));if(d&&!u){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=Hg(h);for(let m=0;m<p.length;++m){const y=p[m],w=y.query,v=Wl(n,y);n.listenProvider_.startListening(bn(w),xn(n,w),v.hashFn,v.onComplete)}}}!u&&l.length>0&&!i&&(d?n.listenProvider_.stopListening(bn(e),null):l.forEach(h=>{const p=n.queryToTagMap.get(cs(h));n.listenProvider_.stopListening(bn(h),p)}))}Vg(n,l)}return a}function $l(n,e,t,i){const s=Qr(n,i);if(s!=null){const r=Jr(s),o=r.path,a=r.queryId,c=ae(o,e),l=new Ct(jr(a),c,t);return Xr(n,o,l)}else return[]}function Bg(n,e,t,i){const s=Qr(n,i);if(s){const r=Jr(s),o=r.path,a=r.queryId,c=ae(o,e),l=q.fromObject(t),d=new qt(jr(a),c,l);return Xr(n,o,d)}else return[]}function or(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,p)=>{const m=ae(h,s);r=r||tt(p,m),o=o||st(p)});let a=n.syncPointTree_.get(s);a?(o=o||st(a),r=r||tt(a,U())):(a=new Ml,n.syncPointTree_=n.syncPointTree_.set(s,a));let c;r!=null?c=!0:(c=!1,r=k.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,m)=>{const y=tt(m,U());y&&(r=r.updateImmediateChild(p,y))}));const l=Fl(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=cs(e);_(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=jg();n.queryToTagMap.set(h,p),n.tagToQueryMap.set(p,h)}const d=rs(n.pendingWriteTree_,s);let u=Pg(a,e,t,d,r,c);if(!l&&!o&&!i){const h=xl(a,e);u=u.concat(Gg(n,e,h))}return u}function as(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=ae(o,e),l=tt(a,c);if(l)return l});return kl(s,e,r,t,!0)}function Wg(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const u=ae(l,t);i=i||tt(d,u)});let s=n.syncPointTree_.get(t);s?i=i||tt(s,U()):(s=new Ml,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new it(i,!0,!1):null,a=rs(n.pendingWriteTree_,e._path),c=Dl(s,e,a,r?o.getNode():k.EMPTY_NODE,r);return Cg(c)}function on(n,e){return Ul(e,n.syncPointTree_,null,rs(n.pendingWriteTree_,U()))}function Ul(n,e,t,i){if(M(n.path))return Bl(n,e,t,i);{const s=e.get(U());t==null&&s!=null&&(t=tt(s,U()));let r=[];const o=O(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=Rl(i,o);r=r.concat(Ul(a,c,l,d))}return s&&(r=r.concat(zr(s,n,i,t))),r}}function Bl(n,e,t,i){const s=e.get(U());t==null&&s!=null&&(t=tt(s,U()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Rl(i,o),d=n.operationForChild(o);d&&(r=r.concat(Bl(d,a,c,l)))}),s&&(r=r.concat(zr(s,n,i,t))),r}function Wl(n,e){const t=e.query,i=xn(n,t);return{hashFn:()=>(bg(e)||k.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Ug(n,t._path,i):$g(n,t._path);{const r=$p(s,t);return Bi(n,t,null,r)}}}}function xn(n,e){const t=cs(e);return n.queryToTagMap.get(t)}function cs(n){return n._path.toString()+"$"+n._queryIdentifier}function Qr(n,e){return n.tagToQueryMap.get(e)}function Jr(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new W(n.substr(0,e))}}function Xr(n,e,t){const i=n.syncPointTree_.get(e);_(i,"Missing sync point for query tag that we're tracking");const s=rs(n.pendingWriteTree_,e);return zr(i,t,s,null)}function Hg(n){return n.fold((e,t,i)=>{if(t&&st(t))return[os(t)];{let s=[];return t&&(s=Ll(t)),te(i,(r,o)=>{s=s.concat(o)}),s}})}function bn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Dg())(n._repo,n._path):n}function Vg(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=cs(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function jg(){return Lg++}function Gg(n,e,t){const i=e._path,s=xn(n,e),r=Wl(n,t),o=n.listenProvider_.startListening(bn(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)_(!st(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!M(l)&&d&&st(d))return[os(d).query];{let h=[];return d&&(h=h.concat(Ll(d).map(p=>p.query))),te(u,(p,m)=>{h=h.concat(m)}),h}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(bn(d),xn(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zr(t)}node(){return this.node_}}class eo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Y(this.path_,e);return new eo(this.syncTree_,t)}node(){return as(this.syncTree_,this.path_)}}const qg=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Sa=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Kg(n[".sv"],e,t);if(typeof n[".sv"]=="object")return zg(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Kg=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},zg=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&_(!1,"Unexpected increment value: "+i);const s=e.node();if(_(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Hl=function(n,e,t,i){return no(e,new eo(t,n),i)},to=function(n,e,t){return no(n,new Zr(e),t)};function no(n,e,t){const i=n.getPriority().val(),s=Sa(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Sa(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new X(a,z(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new X(s))),o.forEachChild(K,(a,c)=>{const l=no(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function ls(n,e){let t=e instanceof W?e:new W(e),i=n,s=O(t);for(;s!==null;){const r=vt(i.node.children,s)||{children:{},childCount:0};i=new io(s,i,r),t=j(t),s=O(t)}return i}function Pt(n){return n.node.value}function so(n,e){n.node.value=e,ar(n)}function Vl(n){return n.node.childCount>0}function Yg(n){return Pt(n)===void 0&&!Vl(n)}function us(n,e){te(n.node.children,(t,i)=>{e(new io(t,n,i))})}function jl(n,e,t,i){t&&e(n),us(n,s=>{jl(s,e,!0)})}function Qg(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Qn(n){return new W(n.parent===null?n.name:Qn(n.parent)+"/"+n.name)}function ar(n){n.parent!==null&&Jg(n.parent,n.name,n)}function Jg(n,e,t){const i=Yg(t),s=Ie(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ar(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ar(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=/[\[\].#$\/\u0000-\u001F\u007F]/,Zg=/[\[\].#$\u0000-\u001F\u007F]/,Os=10*1024*1024,ro=function(n){return typeof n=="string"&&n.length!==0&&!Xg.test(n)},Gl=function(n){return typeof n=="string"&&n.length!==0&&!Zg.test(n)},e_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gl(n)},oo=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ns(n)||n&&typeof n=="object"&&Ie(n,".sv")},Wi=function(n,e,t,i){i&&e===void 0||Jn(Ht(n,"value"),e,t)},Jn=function(n,e,t){const i=t instanceof W?new ym(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+dt(i));if(typeof e=="function")throw new Error(n+"contains a function "+dt(i)+" with contents = "+e.toString());if(ns(e))throw new Error(n+"contains "+e.toString()+" "+dt(i));if(typeof e=="string"&&e.length>Os/3&&Xi(e)>Os)throw new Error(n+"contains a string greater than "+Os+" utf8 bytes "+dt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(te(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ro(o)))throw new Error(n+" contains an invalid key ("+o+") "+dt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vm(i,o),Jn(n,a,i),wm(i)}),s&&r)throw new Error(n+' contains ".value" child '+dt(i)+" in addition to actual children.")}},t_=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=Pn(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ro(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_m);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&pe(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},ql=function(n,e,t,i){const s=Ht(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];te(e,(o,a)=>{const c=new W(o);if(Jn(s,a,Y(t,c)),xr(c)===".priority"&&!oo(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),t_(s,r)},n_=function(n,e,t){if(ns(e))throw new Error(Ht(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!oo(e))throw new Error(Ht(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Kl=function(n,e,t,i){if(!Gl(t))throw new Error(Ht(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},i_=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Kl(n,e,t)},Ye=function(n,e){if(O(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},s_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ro(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!e_(t))throw new Error(Ht(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ds(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Fr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function zl(n,e,t){ds(n,t),Yl(n,i=>Fr(i,e))}function de(n,e,t){ds(n,t),Yl(n,i=>pe(i,e)||pe(e,i))}function Yl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(o_(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function o_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();vn&&ee("event: "+t.toString()),sn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="repo_interrupt",c_=25;class l_{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new r_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oi(),this.transactionQueueTree_=new io,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function u_(n,e,t){if(n.stats_=Dr(n.repoInfo_),n.forceRestClient_||Hp())n.server_=new Pi(n.repoInfo_,(i,s,r,o)=>{Ta(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ka(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{J(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Le(n.repoInfo_,e,(i,s,r,o)=>{Ta(n,i,s,r,o)},i=>{ka(n,i)},i=>{d_(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Kp(n.repoInfo_,()=>new qm(n.stats_,n.server_)),n.infoData_=new Wm,n.infoSyncTree_=new Ca({startListening:(i,s,r,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=Yn(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ao(n,"connected",!1),n.serverSyncTree_=new Ca({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);de(n.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Ql(n){const t=n.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Xn(n){return qg({timestamp:Ql(n)})}function Ta(n,e,t,i,s){n.dataUpdateCount++;const r=new W(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=wi(t,l=>z(l));o=Bg(n.serverSyncTree_,r,c,s)}else{const c=z(t);o=$l(n.serverSyncTree_,r,c,s)}else if(i){const c=wi(t,l=>z(l));o=Fg(n.serverSyncTree_,r,c)}else{const c=z(t);o=Yn(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=zt(n,r)),de(n.eventQueue_,a,o)}function ka(n,e){ao(n,"connected",e),e===!1&&m_(n)}function d_(n,e){te(e,(t,i)=>{ao(n,t,i)})}function ao(n,e,t){const i=new W("/.info/"+e),s=z(t);n.infoData_.updateSnapshot(i,s);const r=Yn(n.infoSyncTree_,i,s);de(n.eventQueue_,i,r)}function hs(n){return n.nextWriteId_++}function h_(n,e,t){const i=Wg(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=z(s).withIndex(e._queryParams.getIndex());or(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Yn(n.serverSyncTree_,e._path,r);else{const a=xn(n.serverSyncTree_,e);o=$l(n.serverSyncTree_,e._path,r,a)}return de(n.eventQueue_,e._path,o),Bi(n.serverSyncTree_,e,t,null,!0),r},s=>(an(n,"get for query "+J(e)+" failed: "+s),Promise.reject(new Error(s))))}function f_(n,e,t,i,s){an(n,"set",{path:e.toString(),value:t,priority:i});const r=Xn(n),o=z(t,i),a=as(n.serverSyncTree_,e),c=to(o,a,r),l=hs(n),d=Yr(n.serverSyncTree_,e,c,l,!0);ds(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,p)=>{const m=h==="ok";m||ce("set at "+e+" failed: "+h);const y=ze(n.serverSyncTree_,l,!m);de(n.eventQueue_,e,y),rt(n,s,h,p)});const u=lo(n,e);zt(n,u),de(n.eventQueue_,u,[])}function p_(n,e,t,i){an(n,"update",{path:e.toString(),value:t});let s=!0;const r=Xn(n),o={};if(te(t,(a,c)=>{s=!1,o[a]=Hl(Y(e,a),z(c),n.serverSyncTree_,r)}),s)ee("update() called with empty data.  Don't do anything."),rt(n,i,"ok",void 0);else{const a=hs(n),c=xg(n.serverSyncTree_,e,o,a);ds(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{const u=l==="ok";u||ce("update at "+e+" failed: "+l);const h=ze(n.serverSyncTree_,a,!u),p=h.length>0?zt(n,e):e;de(n.eventQueue_,p,h),rt(n,i,l,d)}),te(t,l=>{const d=lo(n,Y(e,l));zt(n,d)}),de(n.eventQueue_,e,[])}}function m_(n){an(n,"onDisconnectEvents");const e=Xn(n),t=Oi();er(n.onDisconnect_,U(),(s,r)=>{const o=Hl(s,r,n.serverSyncTree_,e);rn(t,s,o)});let i=[];er(t,U(),(s,r)=>{i=i.concat(Yn(n.serverSyncTree_,s,r));const o=lo(n,s);zt(n,o)}),n.onDisconnect_=Oi(),de(n.eventQueue_,U(),i)}function g_(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Zs(n.onDisconnect_,e),rt(n,t,i,s)})}function Ra(n,e,t,i){const s=z(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&rn(n.onDisconnect_,e,s),rt(n,i,r,o)})}function __(n,e,t,i,s){const r=z(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&rn(n.onDisconnect_,e,r),rt(n,s,o,a)})}function y_(n,e,t,i){if(vi(t)){ee("onDisconnect().update() called with empty data.  Don't do anything."),rt(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&te(t,(o,a)=>{const c=z(a);rn(n.onDisconnect_,Y(e,o),c)}),rt(n,i,s,r)})}function v_(n,e,t){let i;O(e._path)===".info"?i=or(n.infoSyncTree_,e,t):i=or(n.serverSyncTree_,e,t),zl(n.eventQueue_,e._path,i)}function cr(n,e,t){let i;O(e._path)===".info"?i=Bi(n.infoSyncTree_,e,t):i=Bi(n.serverSyncTree_,e,t),zl(n.eventQueue_,e._path,i)}function w_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(a_)}function an(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ee(t,...e)}function rt(n,e,t,i){e&&sn(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function E_(n,e,t,i,s,r){an(n,"transaction on "+e);const o={path:e,update:t,onComplete:i,status:null,order:zc(),applyLocally:r,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=co(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Jn("transaction failed: Data returned ",c,o.path),o.status=0;const l=ls(n.transactionQueueTree_,e),d=Pt(l)||[];d.push(o),so(l,d);let u;typeof c=="object"&&c!==null&&Ie(c,".priority")?(u=vt(c,".priority"),_(oo(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(as(n.serverSyncTree_,e)||k.EMPTY_NODE).getPriority().val();const h=Xn(n),p=z(c,u),m=to(p,a,h);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=m,o.currentWriteId=hs(n);const y=Yr(n.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);de(n.eventQueue_,e,y),fs(n,n.transactionQueueTree_)}}function co(n,e,t){return as(n.serverSyncTree_,e,t)||k.EMPTY_NODE}function fs(n,e=n.transactionQueueTree_){if(e||ps(n,e),Pt(e)){const t=Xl(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&I_(n,Qn(e),t)}else Vl(e)&&us(e,t=>{fs(n,t)})}function I_(n,e,t){const i=t.map(l=>l.currentWriteId),s=co(n,e,i);let r=s;const o=s.hash();for(let l=0;l<t.length;l++){const d=t[l];_(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=ae(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{an(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(ze(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();ps(n,ls(n.transactionQueueTree_,e)),fs(n,n.transactionQueueTree_),de(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)sn(u[h])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ce("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}zt(n,e)}},o)}function zt(n,e){const t=Jl(n,e),i=Qn(t),s=Xl(n,t);return b_(n,s,i),i}function b_(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ae(t,c.path);let d=!1,u;if(_(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,s=s.concat(ze(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=c_)d=!0,u="maxretry",s=s.concat(ze(n.serverSyncTree_,c.currentWriteId,!0));else{const h=co(n,c.path,o);c.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){Jn("transaction failed: Data returned ",p,c.path);let m=z(p);typeof p=="object"&&p!=null&&Ie(p,".priority")||(m=m.updatePriority(h.getPriority()));const w=c.currentWriteId,v=Xn(n),g=to(m,h,v);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=g,c.currentWriteId=hs(n),o.splice(o.indexOf(w),1),s=s.concat(Yr(n.serverSyncTree_,c.path,g,c.currentWriteId,c.applyLocally)),s=s.concat(ze(n.serverSyncTree_,w,!0))}else d=!0,u="nodata",s=s.concat(ze(n.serverSyncTree_,c.currentWriteId,!0))}de(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}ps(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)sn(i[a]);fs(n,n.transactionQueueTree_)}function Jl(n,e){let t,i=n.transactionQueueTree_;for(t=O(e);t!==null&&Pt(i)===void 0;)i=ls(i,t),e=j(e),t=O(e);return i}function Xl(n,e){const t=[];return Zl(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Zl(n,e,t){const i=Pt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);us(e,s=>{Zl(n,s,t)})}function ps(n,e){const t=Pt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,so(e,t.length>0?t:void 0)}us(e,i=>{ps(n,i)})}function lo(n,e){const t=Qn(Jl(n,e)),i=ls(n.transactionQueueTree_,e);return Qg(i,s=>{Ms(n,s)}),Ms(n,i),jl(i,s=>{Ms(n,s)}),t}function Ms(n,e){const t=Pt(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(ze(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?so(e,void 0):t.length=r+1,de(n.eventQueue_,Qn(e),s);for(let o=0;o<i.length;o++)sn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function S_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ce(`Invalid query segment '${t}' in query '${n}'`)}return e}const Na=function(n,e){const t=T_(n),i=t.namespace;t.domain==="firebase.com"&&Ue(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ue("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Mp();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new al(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new W(t.pathString)}},T_=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(s=C_(n.substring(d,u)));const h=S_(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",k_=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Aa.charAt(t%64),t=Math.floor(t/64);_(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Aa.charAt(e[s]);return _(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+J(this.snapshot.exportVal())}}class N_{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class A_{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new _e;return g_(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ye("OnDisconnect.remove",this._path);const e=new _e;return Ra(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ye("OnDisconnect.set",this._path),Wi("OnDisconnect.set",e,this._path,!1);const t=new _e;return Ra(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ye("OnDisconnect.setWithPriority",this._path),Wi("OnDisconnect.setWithPriority",e,this._path,!1),n_("OnDisconnect.setWithPriority",t);const i=new _e;return __(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){Ye("OnDisconnect.update",this._path),ql("OnDisconnect.update",e,this._path);const t=new _e;return y_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return M(this._path)?null:xr(this._path)}get ref(){return new Re(this._repo,this._path)}get _queryIdentifier(){const e=pa(this._queryParams),t=Or(e);return t==="{}"?"default":t}get _queryObject(){return pa(this._queryParams)}isEqual(e){if(e=ne(e),!(e instanceof uo))return!1;const t=this._repo===e._repo,i=Fr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+gm(this._path)}}class Re extends uo{constructor(e,t){super(e,t,new Wr,!1)}get parent(){const e=gl(this._path);return e===null?null:new Re(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Yt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new W(e),i=Fn(this.ref,e);return new Yt(this._node.getChild(t),i,K)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Yt(s,Fn(this.ref,i),K)))}hasChild(e){const t=new W(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function A(n,e){return n=ne(n),n._checkNotDeleted("ref"),e!==void 0?Fn(n._root,e):n._root}function Fn(n,e){return n=ne(n),O(n._path)===null?i_("child","path",e):Kl("child","path",e),new Re(n._repo,Y(n._path,e))}function P_(n){return n=ne(n),new A_(n._repo,n._path)}function ho(n,e){n=ne(n),Ye("push",n._path),Wi("push",e,n._path,!0);const t=Ql(n._repo),i=k_(t),s=Fn(n,i),r=Fn(n,i);let o;return e!=null?o=cn(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Qe(n){return Ye("remove",n._path),cn(n,null)}function cn(n,e){n=ne(n),Ye("set",n._path),Wi("set",e,n._path,!1);const t=new _e;return f_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Be(n,e){ql("update",e,n._path);const t=new _e;return p_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Ot(n){n=ne(n);const e=new eu(()=>{}),t=new ms(e);return h_(n._repo,n,t).then(i=>new Yt(i,new Re(n._repo,n._path),n._queryParams.getIndex()))}class ms{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new R_("value",this,new Yt(e.snapshotNode,new Re(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new N_(this,e,t):null}matches(e){return e instanceof ms?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function O_(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const c=t,l=(d,u)=>{cr(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new eu(t,r||void 0),a=new ms(o);return v_(n._repo,n,a),()=>cr(n._repo,n,a)}function Zn(n,e,t,i){return O_(n,"value",e,t,i)}function ei(n,e,t){cr(n._repo,n,null)}Rg(Re);Mg(Re);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="FIREBASE_DATABASE_EMULATOR_HOST",lr={};let D_=!1;function L_(n,e,t,i){n.repoInfo_=new al(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function x_(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Ue("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ee("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Na(r,s),a=o.repoInfo,c;typeof process<"u"&&Qo&&(c=Qo[M_]),c?(r=`http://${c}?ns=${a.namespace}`,o=Na(r,s),a=o.repoInfo):o.repoInfo.secure;const l=new jp(n.name,n.options,e);s_("Invalid Firebase Database URL",o),M(o.path)||Ue("Database URL must point to the root of a Firebase Database (not including a child path).");const d=$_(a,n,l,new Vp(n.name,t));return new U_(d,n)}function F_(n,e){const t=lr[e];(!t||t[n.key]!==n)&&Ue(`Database ${e}(${n.repoInfo_}) has already been deleted.`),w_(n),delete t[n.key]}function $_(n,e,t,i){let s=lr[e.name];s||(s={},lr[e.name]=s);let r=s[n.toURLString()];return r&&Ue("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new l_(n,D_,t,i),s[n.toURLString()]=r,r}class U_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(u_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Re(this._repo,U())),this._rootInternal}_delete(){return this._rootInternal!==null&&(F_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ue("Cannot call "+e+" on a deleted database.")}}function B_(n=lc(),e){const t=Ir(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Wu("database");i&&W_(t,...i)}return t}function W_(n,e,t,i={}){n=ne(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ue("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ue('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new hi(hi.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Hu(i.mockUserToken,n.app.options.projectId);r=new hi(o)}L_(s,e,t,r)}/**
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
 */function H_(n){Rp(tn),Vt(new wt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return x_(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ze(Jo,Xo,n),Ze(Jo,Xo,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_={".sv":"timestamp"};function tu(){return V_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function me(n,e,t){var i;if(n=ne(n),Ye("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const s=(i=void 0)!==null&&i!==void 0?i:!0,r=new _e,o=(c,l,d)=>{let u=null;c?r.reject(c):(u=new Yt(d,new Re(n._repo,n._path),K),r.resolve(new j_(l,u)))},a=Zn(n,()=>{});return E_(n._repo,n._path,e,o,a,s),r.promise}Le.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Le.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};H_();const _n={apiKey:"AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",authDomain:"market-6e66a.firebaseapp.com",databaseURL:"https://market-6e66a-default-rtdb.firebaseio.com",projectId:"market-6e66a",storageBucket:"market-6e66a.firebasestorage.app",messagingSenderId:"402312269082",appId:"1:402312269082:web:cf304afc54057ea162b0a3"},nu=!!_n.apiKey&&!_n.apiKey.startsWith("여기에")&&!!_n.databaseURL&&!_n.databaseURL.startsWith("여기에");let Ds=null,Qt=null,R=null;try{nu&&(Ds=cc(_n),Qt=Tp(Ds),R=B_(Ds))}catch(n){console.error("[firebase] 초기화 실패:",n)}const xe=1e7,We=10,ur=6,Pa=1,dr=4e3,G_=.035,q_=.008,Oa=3e4,iu=15e-5,K_=.0018,z_=3*60*1e3,Y_=["달빛전자","구름소프트","번개모빌리티","바다식품","별빛바이오","한입게임즈","초록에너지","솜사탕유통","무지개항공","도토리금융","은하반도체","포근화학","두근로보틱스","새벽엔터","고래물산","민들레제약"],Q_=["떡상테크","유니콘소프트","미래모빌","첫걸음바이오","샛별에너지","루키게임즈","신화엔터","퀀텀반도체"],J_=[{key:"semi",name:"반도체",leader:"은하반도체",suffixes:["반도체","전자","소자","머티리얼즈","시스템","테크","세미콘"]},{key:"bio",name:"바이오",leader:"별빛바이오",suffixes:["바이오","제약","파마","셀","진단","메디","테라퓨틱스"]},{key:"battery",name:"2차전지",leader:"번개배터리",suffixes:["배터리","에너지","케미칼","머티리얼","파워","솔라","ESS"]},{key:"net",name:"인터넷·게임",leader:"구름소프트",suffixes:["소프트","게임즈","엔터","네트웍스","스튜디오","플랫폼","미디어"]}],oi=["별빛","달빛","은하","구름","번개","바다","초록","솜사탕","무지개","도토리","한입","포근","두근","새벽","고래","민들레","노을","단비","햇살","모래","안개","서리","물결","바람","이슬","구슬","파도","돌담","오름","나래","미르","해솔","가람","마루","아라","여울","보라","수풀","겨울","봄날"],Ma=["개미부대","왕개미","큰손","수상한세력","외국인","기관","전설의단타","스캘퍼","장기투자자","물타기달인"],Da=[{text:"{name}, 신제품 공개에 기대감 폭발",effect:[.05,.15]},{text:"{name}, 대형 계약 체결 소식",effect:[.08,.18]},{text:"{name}, 깜짝 실적 발표 소문 확산",effect:[.04,.12]},{text:"{name}, 신사업 진출 선언",effect:[.03,.1]},{text:"{name}, 해외 진출 성공 소식",effect:[.06,.14]},{text:"{name}, 핵심 인력 대거 이탈설",effect:[-.15,-.05]},{text:"{name}, 서비스 대규모 장애 발생",effect:[-.12,-.04]},{text:"{name}, 규제 이슈로 불확실성 확대",effect:[-.18,-.08]},{text:"{name}, 자금난 우려 제기",effect:[-.14,-.06]},{text:"{name}, 경쟁사 등장으로 점유율 하락 전망",effect:[-.1,-.03]}];function se(n,e){return Math.floor(Math.random()*(e-n+1))+n}function G(n,e){return Math.random()*(e-n)+n}function fe(n,e,t){return Math.max(e,Math.min(t,n))}function X_(n){const e=[...n];for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function su(n,e,t={}){const i=t.type||"stock",s=t.role||null;e=Se(Math.max(We,e));let r=1,o=1;return i==="stock"?s==="leader"?(r=G(.8,1.4),o=G(2,3)):s==="sub"?(r=G(.9,1.6),o=G(1.2,2.2)):s==="related"?(r=G(.7,2),o=G(.6,1.8)):(r=G(.5,2.4),o=G(.3,1.2)):i==="preferred"?(r=G(.4,.8),o=G(.5,1.1)):i==="etf"?(r=G(.5,.8),o=G(1.5,2.5)):i==="reit"?(r=G(.35,.7),o=G(.6,1.2)):i==="bond"?(r=G(.2,.45),o=G(.8,1.4)):i==="spac"?(r=G(.2,.5),o=G(.4,.9)):i==="commodity"?(r=G(.9,1.8),o=G(1,2)):(i==="inverse"||i==="leverage")&&(r=1,o=G(1.5,2.5)),{name:n,type:i,role:s||"",sector:t.sector||"",link:t.link||"",price:e,previousPrice:e,basePrice:e,open:e,high:e,low:e,changeRate:0,volume:0,value:0,pressure:0,trend:0,volat:+r.toFixed(2),activ:+o.toFixed(2),heat:0,news:""}}function Z_(){const n={},e=new Set,t=r=>{for(let o=0;o<50;o++){const a=oi[se(0,oi.length-1)]+r;if(!e.has(a))return e.add(a),a}return oi[se(0,oi.length-1)]+r+se(1,99)};let i=0;const s=(r,o)=>{const a="s"+i++;return n[a]=su(o.name,r,o),a};return J_.forEach(r=>{e.add(r.leader);const o=()=>r.suffixes[se(0,r.suffixes.length-1)],a=s(se(6e4,13e4),{name:r.leader,type:"stock",role:"leader",sector:r.name});for(let c=0;c<2;c++)s(se(25e3,7e4),{name:t(r.suffixes[0]),type:"stock",role:"sub",sector:r.name});for(let c=0;c<7;c++)s(se(4e3,45e3),{name:t(o()),type:"stock",role:"related",sector:r.name});for(let c=0;c<3;c++)s(se(1500,22e3),{name:t(o()),type:"stock",role:"normal",sector:r.name});s(Math.round(n[a].price*.82),{name:r.leader+"우",type:"preferred",sector:r.name,link:a})}),s(1e4,{name:"조스피 지수 ETF",type:"etf",link:"index"}),s(1e4,{name:"마켓 인버스 ETF",type:"inverse",link:"index"}),s(1e4,{name:"마켓 레버리지2X ETF",type:"leverage",link:"index"}),s(1e4,{name:"국채 3년 채권 ETF",type:"bond"}),s(2e4,{name:"골드 원자재 ETF",type:"commodity"}),s(15e3,{name:"원유 원자재 ETF",type:"commodity"}),s(5e3,{name:"도심 리츠 REITs",type:"reit"}),s(5e3,{name:"물류 리츠 REITs",type:"reit"}),s(2e3,{name:"미래합병1호 SPAC",type:"spac"}),s(2e3,{name:"성장합병2호 SPAC",type:"spac"}),n}function fo(n){return{preferred:"우선주",etf:"ETF",reit:"리츠",spac:"SPAC",inverse:"인버스",leverage:"레버리지",bond:"채권ETF",commodity:"원자재"}[n]||""}function ru(n){return{leader:"대장주",sub:"부대장주",related:"관련주",normal:"일반주"}[n]||""}function ai(n){return!n||n==="stock"}function gs(n){return Math.round(n*1.3)}function _s(n){return Math.max(We,Math.round(n*.7))}function ou(n){return n<2e3?1:n<5e3?5:n<2e4?10:n<5e4?50:n<2e5?100:500}function Se(n){const e=ou(n);return Math.round(n/e)*e}async function ey(n,e){const t=e.stocks||{},i=Object.keys(t);if(i.length===0)return;let s=null,r=0,o="";if(Math.random()<G_){const v=i.filter(S=>ai(t[S].type)),g=v.length?v:i,E=g.map(S=>1+(t[S].activ||1)+(t[S].heat||0)*2),T=E.reduce((S,P)=>S+P,0);let I=Math.random()*T;s=g[g.length-1];for(let S=0;S<g.length;S++)if(I-=E[S],I<=0){s=g[S];break}const C=Da[se(0,Da.length-1)];r=G(C.effect[0],C.effect[1])*.4,o=C.text.replace("{name}",t[s].name)}const a=Date.now(),c={},l=[];function d(v){const g=(v.activ||1)*(1+(v.heat||0));let E=0,T=0;const I=fe(.35+g*.2,.25,.97);if(Math.random()<I){const C=se(1,Math.max(2,Math.round(1+g*3)));for(let S=0;S<C;S++){const P=se(10,Math.round(60+g*220)),B=.5+fe((v.trend||0)*15,-.3,.3),Q=Math.random()<B;E+=Q?P:-P,T+=P,l.push({nickname:Ma[se(0,Ma.length-1)],type:Q?"buy":"sell",stockName:v.name,qty:P,price:v.price,time:a})}}return T+=Math.round(se(300,2500)*g),{botNet:E,botVolume:T}}function u(v,g,E,T,I={}){const C=g.basePrice||g.price;let S=Se(g.price*(1+E));S=fe(S,_s(C),gs(C)),S=Math.max(We,S);const P=`stocks/${v}/`;return c[P+"previousPrice"]=g.price,c[P+"price"]=S,c[P+"changeRate"]=+((S-C)/C*100).toFixed(2),c[P+"volume"]=(g.volume||0)+T,c[P+"value"]=(g.value||0)+T*S,S>(g.high||g.price)&&(c[P+"high"]=S),S<(g.low||g.price)&&(c[P+"low"]=S),(g.pressure||0)!==0&&(c[P+"pressure"]=0),I.trend!=null&&(c[P+"trend"]=+I.trend.toFixed(5)),I.heat!=null&&(I.heat>.001||(g.heat||0)>.001)&&(c[P+"heat"]=+I.heat.toFixed(3)),I.news!=null&&(c[P+"news"]=I.news),S/g.price-1}function h(v){const g=v.volat||1;let E=(v.heat||0)*.92;Math.random()<.008&&(E=fe(E+G(.4,1.2),0,2));const T=g*(1+E*.6),I=fe((v.trend||0)*.95+(Math.random()-.5)*.0015*T,-.006*(1+E*.5),.006*(1+E*.5));let C=(Math.random()-.5)*.0035*T+I;return Math.random()<.008&&(C+=(Math.random()-.5)*.02*(1+E*.5)),{own:C,trend:I,heat:E}}const p={},m={},y=[];for(const v of i){const g=t[v];if(!ai(g.type)||g.role!=="leader")continue;const{own:E,trend:T,heat:I}=h(g),{botNet:C,botVolume:S}=d({...g,heat:I});let P=E+fe((g.pressure||0)*.002,-.02,.02)+fe(C*2e-4,-.008,.008);v===s&&(P+=r);const B=u(v,g,P,S,{trend:T,heat:I,news:v===s?o:null});p[v]=B,m[g.sector]=B,y.push(B)}for(const v of i){const g=t[v];if(!ai(g.type)||g.role==="leader")continue;const E=g.role==="related"?.7:g.role==="sub"?.45:.2,T=m[g.sector]||0,{own:I,trend:C,heat:S}=h(g),{botNet:P,botVolume:B}=d({...g,heat:S});let Q=T*E+I*(1-E*.5);Q+=fe((g.pressure||0)*.002,-.02,.02)+fe(P*2e-4,-.008,.008),v===s&&(Q+=r);const L=u(v,g,Q,B,{trend:C,heat:S,news:v===s?o:null});p[v]=L,y.push(L)}const w=y.length?y.reduce((v,g)=>v+g,0)/y.length:0;for(const v of i){const g=t[v];if(ai(g.type))continue;const{botNet:E,botVolume:T}=d(g),I=Math.random()-.5;let C=0;switch(g.type){case"etf":C=w+I*.0015;break;case"inverse":C=-w+I*.0015;break;case"leverage":C=2*w+I*.002;break;case"bond":C=-.25*w+2e-4+I*.0012;break;case"reit":C=.2*w+2e-4+I*.004*(g.volat||1);break;case"commodity":C=I*.011*(g.volat||1)+(Math.random()<.01?(Math.random()-.5)*.05:0);break;case"preferred":C=(m[g.sector]||p[g.link]||0)*.85+I*.002;break;case"spac":C=I*.003+(Math.random()<.008?(Math.random()<.7?1:-1)*G(.06,.2):0);break;default:C=I*.005}C+=fe((g.pressure||0)*.002,-.02,.02)+fe(E*3e-4,-.01,.01),u(v,g,C,T,{})}c.marketTick=a,X_(l),c.botFeed=l.slice(0,4),o&&!c.latestNews&&(c.latestNews={text:o,time:a}),await Be(A(R,`rooms/${n}`),c)}function Ls(n){return Math.round(n||0).toLocaleString("ko-KR")}async function ty(n,e){const t=Date.now(),i=e.stocks||{},s=e.ipo;if(s&&s.status==="subscribing"){if(t<s.endsAt)return;const h=s.applies||{},p=Object.values(h).reduce((T,I)=>T+(I||0),0),m=(s.botDemand||0)+p,y=Math.max(1,m/s.totalShares),w=fe(.92+(y-1)*.1+G(-.1,.15),.9,2.3),v=Math.max(We,Se(s.offerPrice*w)),g=su(s.name,v,{type:"stock",role:"normal",sector:"신규상장"});g.ipo=!0;const E=((v-s.offerPrice)/s.offerPrice*100).toFixed(1);await Be(A(R,`rooms/${n}`),{[`stocks/${s.stockId}`]:g,ipo:null,latestNews:{text:`🎉 ${s.name} 상장! 공모가 ${Ls(s.offerPrice)} → 시초가 ${Ls(v)} (${E>=0?"+":""}${E}%) · 경쟁률 ${y.toFixed(1)}:1`,time:t}});for(const[T,I]of Object.entries(h)){const C=I||0,S=Math.floor(C/y),P=s.offerPrice*(C-S);await me(A(R,`rooms/${n}/players/${T}`),B=>B&&(P>0&&(B.cash=(B.cash||0)+P),S>0&&(B.holdings=B.holdings||{},B.holdings[s.stockId]=(B.holdings[s.stockId]||0)+S),B))}return}if(s||Object.keys(i).length>=90||Math.random()>=q_)return;const r=Object.values(i).map(h=>h.name),o=[...Y_,...Q_].filter(h=>!r.includes(h));if(!o.length)return;const a=o[se(0,o.length-1)],c=Se(se(5e3,6e4)),l=se(5e4,2e5),d=Math.floor(l*G(.4,9)),u="ipo"+t.toString(36);await Be(A(R,`rooms/${n}`),{ipo:{stockId:u,name:a,offerPrice:c,totalShares:l,botDemand:d,status:"subscribing",startedAt:t,endsAt:t+Oa},latestNews:{text:`공모주 청약 시작! '${a}' 공모가 ${Ls(c)}원 · ${Math.round(Oa/1e3)}초 후 마감`,time:t}})}async function ny(n,e,t,i){const s=i.ipo;if(!s||s.status!=="subscribing")throw new Error("청약 가능한 공모주가 없습니다.");if(Date.now()>=s.endsAt)throw new Error("청약이 마감되었습니다.");if(t=Math.floor(t),!t||t<1)throw new Error("청약 수량을 확인하세요.");const r=s.offerPrice*t;if(!(await me(A(R,`rooms/${n}/players/${e}/cash`),a=>{if(a==null)return a;if(!(a<r))return a-r})).committed)throw new Error("청약 증거금(현금)이 부족합니다.");await me(A(R,`rooms/${n}/ipo/applies/${e}`),a=>(a||0)+t)}function iy(n){if(!n)return 0;const e=Object.values(n.applies||{}).reduce((t,i)=>t+(i||0),0);return((n.botDemand||0)+e)/n.totalShares}async function Hi(n,e,t,i,s,r,o,a){var y;const c=(y=a.stocks)==null?void 0:y[i];if(!c)throw new Error("종목을 선택하세요.");const l=s.side;if(l!=="buy"&&l!=="sell")throw new Error("주문 유형 오류");const d=s.trigger==="above"?"above":"below",u=["gtc","day","ioc"].includes(s.tif)?s.tif:"gtc";if(r=Math.floor(r),!r||r<1)throw new Error("수량을 확인하세요.");if(o=Se(Number(o)),!o||o<We)throw new Error("주문 가격을 확인하세요.");const h=Date.now(),p={uid:e,nickname:t,stockId:i,stockName:c.name,side:l,trigger:d,tif:u,label:s.label||"지정가",qty:r,target:o,createdAt:h,expiresAt:u==="day"?h+z_:null},m=ho(A(R,`rooms/${n}/orders`)).key;return await cn(A(R,`rooms/${n}/orders/${m}`),p),m}async function sy(n,e){await Qe(A(R,`rooms/${n}/orders/${e}`))}async function ry(n,e){var s;const t=e.orders;if(!t)return;const i=Date.now();for(const[r,o]of Object.entries(t)){const a=(s=e.stocks)==null?void 0:s[o.stockId];if(!a){await Qe(A(R,`rooms/${n}/orders/${r}`));continue}const c=a.price;if((o.trigger||(o.side==="buy"?"below":"above"))==="below"?c<=o.target:c>=o.target){try{o.side==="buy"?await au(n,o.uid,o.nickname,o.stockId,o.qty,e):await po(n,o.uid,o.nickname,o.stockId,o.qty,e)}catch(u){console.warn("[order] 예약 체결 실패, 취소:",o,u==null?void 0:u.message)}await Qe(A(R,`rooms/${n}/orders/${r}`));continue}o.tif==="ioc"?await Qe(A(R,`rooms/${n}/orders/${r}`)):o.expiresAt&&i>o.expiresAt&&await Qe(A(R,`rooms/${n}/orders/${r}`))}}function oy(n,e){const t=n.orders||{};return Object.entries(t).filter(([,i])=>i.uid===e).map(([i,s])=>({id:i,...s})).sort((i,s)=>(s.createdAt||0)-(i.createdAt||0))}async function au(n,e,t,i,s,r){var d;const o=(d=r.stocks)==null?void 0:d[i];if(!o)throw new Error("종목을 선택하세요.");if(s=Math.floor(s),!s||s<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.ceil(a*s*(1+iu));if(!(await me(A(R,`rooms/${n}/players/${e}`),u=>{if(!u)return u;if((u.cash||0)<c)return;u.cash=(u.cash||0)-c,u.holdings=u.holdings||{};const h=u.holdings[i]||0;u.avgCost=u.avgCost||{};const p=u.avgCost[i]||0;return u.avgCost[i]=Math.round((h*p+s*a)/(h+s)),u.holdings[i]=h+s,u})).committed)throw new Error("현금(수수료 포함)이 부족합니다.");await cu(n,i,s,+s,{type:"buy",nickname:t,stockName:o.name,qty:s,price:a,time:Date.now()})}async function po(n,e,t,i,s,r){var d;const o=(d=r.stocks)==null?void 0:d[i];if(!o)throw new Error("종목을 선택하세요.");if(s=Math.floor(s),!s||s<1)throw new Error("수량을 확인하세요.");const a=o.price,c=Math.floor(a*s*(1-iu-K_));if(!(await me(A(R,`rooms/${n}/players/${e}`),u=>{var p;if(!u)return u;const h=((p=u.holdings)==null?void 0:p[i])||0;if(!(h<s))return u.cash=(u.cash||0)+c,u.holdings[i]=h-s,u.holdings[i]===0&&(delete u.holdings[i],u.avgCost&&delete u.avgCost[i]),u})).committed)throw new Error("보유 수량이 부족합니다.");await cu(n,i,s,-s,{type:"sell",nickname:t,stockName:o.name,qty:s,price:a,time:Date.now()})}async function ay(n,e,t,i,s){var o,a,c;const r=((c=(a=(o=s.players)==null?void 0:o[e])==null?void 0:a.holdings)==null?void 0:c[i])||0;if(r<1)throw new Error("보유 수량이 없습니다.");return po(n,e,t,i,r,s)}async function cu(n,e,t,i,s){await Promise.all([me(A(R,`rooms/${n}/stocks/${e}/volume`),r=>(r||0)+t),me(A(R,`rooms/${n}/stocks/${e}/value`),r=>(r||0)+t*s.price),me(A(R,`rooms/${n}/stocks/${e}/pressure`),r=>(r||0)+i),ho(A(R,`rooms/${n}/logs`),s)])}function mo(n,e){var s;let t=(n==null?void 0:n.cash)||0;const i=(n==null?void 0:n.holdings)||{};for(const[r,o]of Object.entries(i)){const a=((s=e==null?void 0:e[r])==null?void 0:s.price)||0;t+=a*o}return t}function lu(n,e){return Object.entries(n||{}).map(([t,i])=>({uid:t,nickname:i.nickname,connected:i.connected!==!1,total:mo(i,e)})).sort((t,i)=>i.total-t.total)}async function cy(n,e){const t=e.players||{},i=Object.keys(t).length;if(i<Pa)throw new Error(`최소 ${Pa}명이 필요합니다.`);if(i>ur)throw new Error(`최대 ${ur}명까지 가능합니다.`);const s=Date.now(),r={status:"playing",startedAt:s,endsAt:null,stocks:Z_(),logs:null,latestNews:null,botFeed:null,orders:null,ipo:null,marketTick:s};for(const o of Object.keys(t))r[`players/${o}/cash`]=xe,r[`players/${o}/holdings`]=null,r[`players/${o}/totalAsset`]=xe;await Be(A(R,`rooms/${n}`),r)}async function ly(n,e){const t={status:"ended",endedAt:Date.now()},i=e.players||{};for(const[s,r]of Object.entries(i))t[`players/${s}/totalAsset`]=mo(r,e.stocks);await Be(A(R,`rooms/${n}`),t)}async function uy(){const n=await Ot(A(R,"rooms"));if(!n.exists())return 0;const e=n.val();let t=0;for(const[i,s]of Object.entries(e))s.status==="ended"&&(await Qe(A(R,`rooms/${i}`)),t++);return t}const dy=1,Vi=[{key:"candles1m",win:6e4,cap:240},{key:"candles5m",win:3e5,cap:288},{key:"candles15m",win:9e5,cap:192},{key:"candles1h",win:36e5,cap:168}],uu=2*6e4,hy=6e4,fy=4500;function hr(n,e){return Math.floor(n/e)*e}function fi(n,e,t){return Math.max(e,Math.min(t,n))}function La(){let n=0,e=0;for(;n===0;)n=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e)}function xa(n,e){const t=n&&n[e]||null;return t?Object.values(t).filter(i=>i&&typeof i.t=="number").sort((i,s)=>i.t-s.t):[]}function py(n,e,t,i){const s=(t-e)/i,r=Math.max(1,s/4e3),o=n.volat||1,a=n.activ||1,c=n.basePrice||n.price||We;let l=n.price||c,d=n.trend||0,u=n.heat||0;const h=!n.type||n.type==="stock",p=.00115*o*(h?1:.7),m=5,y=[];for(let w=0;w<i;w++){const v=e+s*w,g=l,E=r/m;let T=g,I=g,C=g;for(let L=0;L<m;L++){d=fi(d*Math.pow(.99,E)+La()*28e-5*o*Math.sqrt(E),-.0022,.0022),Math.random()<.006*E&&(u=fi(u+(.3+Math.random()*.7),0,1.8)),u*=Math.pow(.94,E);const oe=p*(1+u*.6);let F=d*E+La()*oe*Math.sqrt(E);Math.random()<.004*E&&(F+=(Math.random()<.5?1:-1)*(.008+Math.random()*.028)*(h?1:.6)),C=C*(1+F),C=fi(C,_s(c),gs(c)),C=Math.max(We,C),T=Math.max(T,C),I=Math.min(I,C)}const S=Se(C),P=g?Math.abs((S-g)/g):0,B=(400+Math.random()*1800)*a*(1+u*.8),Q=Math.round(B*r*(1+P*8));y.push({t:v,o:Se(g),h:Se(T),l:Se(I),c:S,v:Q}),l=S}return{candles:y,finalPrice:l,finalBase:c}}function my(n){const e={};for(const t of Vi)e[t.key]={};for(const t of n)for(const i of Vi){const s=hr(t.t,i.win),r=e[i.key],o=r[s];o?(o.h=Math.max(o.h,t.h),o.l=Math.min(o.l,t.l),o.c=t.c,o.v+=t.v):r[s]={t:s,o:t.o,h:t.h,l:t.l,c:t.c,v:t.v}}return e}async function gy(n,e){const t=Date.now();return(await me(A(R,`rooms/${n}/market/catchupLock`),s=>{if(!(s&&s.expiresAt&&s.expiresAt>t))return{by:e||"anon",at:t,expiresAt:t+hy}})).committed}async function _y(n){try{await Be(A(R,`rooms/${n}/market`),{catchupLock:null})}catch{}}function yy(n){if(!n||n.status!=="playing")return!1;const e=n.market&&n.market.lastTickAt||n.marketTick||0;return e?Date.now()-e>=uu:!1}async function vy(n,e,t,i={}){if(!e||!e.stocks)return{applied:!1,reason:"no-stocks"};if(e.status!=="playing")return{applied:!1,reason:"not-playing"};const s=Date.now(),r=e.market&&e.market.lastTickAt||e.marketTick||0,o=s-r;if(!i.force&&o<uu)return{applied:!1,reason:"fresh",elapsed:o};if(!await gy(n,t)&&!i.force)return{applied:!1,reason:"locked"};try{let c=e.stocks||{};try{const y=await Ot(A(R,`rooms/${n}/stocks`));y.exists()&&(c=y.val())}catch{}const l=Object.keys(c);if(!l.length)return{applied:!1,reason:"no-stocks"};const d=fi(Math.round(fy/l.length),30,480),u=Math.max(1,Math.round(o/6e4)),h=Math.min(d,u,480),p={};let m=0;for(const y of l){const w=c[y];if(!w||typeof w.price!="number")continue;const v=py(w,r,s,h),g=my(v.candles),E=`stocks/${y}/`,T=w.history||{};for(const P of Vi){const Q={...T[P.key]||{}};for(const[F,ie]of Object.entries(g[P.key])){const he=Q[F];Q[F]=he?{t:ie.t,o:he.o,h:Math.max(he.h,ie.h),l:Math.min(he.l,ie.l),c:ie.c,v:(he.v||0)+ie.v}:ie}const L=Object.keys(Q).map(Number).sort((F,ie)=>F-ie),oe=L.length-P.cap;if(oe>0)for(let F=0;F<oe;F++)p[E+`history/${P.key}/${L[F]}`]=null;for(const[F,ie]of Object.entries(g[P.key]))Number(F)<L[Math.max(0,oe)]||(p[E+`history/${P.key}/${F}`]=Q[F],m++)}const I=v.finalBase,C=Math.max(We,Se(v.finalPrice)),S=v.candles.reduce((P,B)=>P+(B.v||0),0);p[E+"previousPrice"]=w.price,p[E+"price"]=C,p[E+"currentPrice"]=C,p[E+"changeRate"]=+((C-I)/I*100).toFixed(2),p[E+"volume"]=(w.volume||0)+S,p[E+"value"]=(w.value||0)+S*C,C>(w.high||w.price)&&(p[E+"high"]=C),C<(w.low||w.price)&&(p[E+"low"]=C),w.heat&&(p[E+"heat"]=0),w.pressure&&(p[E+"pressure"]=0)}return p["market/tickMs"]=4e3,p["market/lastTickAt"]=s,p["market/lastHistoryAt"]=s,p["market/lastCatchupAt"]=s,p["market/catchupVersion"]=dy,p["market/catchupBy"]=t||"anon",p["market/catchupLock"]=null,p.marketTick=s,await Be(A(R,`rooms/${n}`),p),{applied:!0,elapsed:o,numSteps:h,candlesWritten:m,stocks:l.length}}catch(c){return await _y(n),console.error("[catchup] 실패:",c),{applied:!1,reason:"error",error:c==null?void 0:c.message}}}function du(){return{cur:{},lastBucket:0,seeded:!1}}async function wy(n,e,t){const i=e.stocks||{},s=Date.now(),r=hr(s,6e4);t.lastBucket||(t.lastBucket=r);for(const[d,u]of Object.entries(i)){if(!u||typeof u.price!="number")continue;let h=t.cur[d];(!h||h.t!==r)&&(h={t:r,o:u.price,h:u.price,l:u.price,c:u.price,v:0,_lastVol:u.volume||0},t.cur[d]=h),h.c=u.price,h.h=Math.max(h.h,u.price),h.l=Math.min(h.l,u.price);const p=Math.max(0,(u.volume||0)-(h._lastVol||0));h.v+=p,h._lastVol=u.volume||0}if(r===t.lastBucket)return;const o=t.lastBucket;let a=i;try{const d=await Ot(A(R,`rooms/${n}/stocks`));d.exists()&&(a=d.val())}catch{}const c={};let l=!1;for(const d of Object.keys(i)){const u=t.cur[d];if(!u)continue;const h={o:u.o,h:u.h,l:u.l,c:u.c,v:u.v},p=`stocks/${d}/`,m=a[d]&&a[d].history||{};for(const y of Vi){const w=hr(o,y.win),v=m[y.key]&&m[y.key][w]||null,g=v?{t:w,o:v.o,h:Math.max(v.h,h.h),l:Math.min(v.l,h.l),c:h.c,v:(v.v||0)+h.v}:{t:w,o:h.o,h:h.h,l:h.l,c:h.c,v:h.v};c[p+`history/${y.key}/${w}`]=g;const E=m[y.key]?Object.keys(m[y.key]).map(Number).sort((T,I)=>T-I):[];E.length>y.cap&&E[0]!==w&&(c[p+`history/${y.key}/${E[0]}`]=null)}l=!0}if(t.lastBucket=r,!!l){c["market/lastTickAt"]=s,c["market/lastHistoryAt"]=s,c["market/tickMs"]=4e3;try{await Be(A(R,`rooms/${n}`),c)}catch(d){console.warn("[history] 라이브 캔들 저장 실패:",d==null?void 0:d.message)}}}function Ey(n,e){if(n&&String(n).startsWith("ipo"))return'<span class="tag tag-new">NEW</span>';const t=fo(e.type);return t?`<span class="tag ${e.type==="inverse"?"tag-inv":e.type==="leverage"?"tag-lev":"tag-etf"}">${t}</span>`:e.role==="leader"?'<span class="tag tag-leader">대장주</span>':e.role==="sub"?'<span class="tag tag-sub">부대장</span>':""}function b(n){return document.getElementById(n)}function fr(n){return Math.round(n??0).toLocaleString("ko-KR")+"원"}function $(n){return Math.round(n??0).toLocaleString("ko-KR")}function Jt(n){return n=n||0,n>=1e12?(n/1e12).toFixed(2)+"조":n>=1e8?(n/1e8).toFixed(1)+"억":n>=1e4?Math.round(n/1e4).toLocaleString("ko-KR")+"만":$(n)}function Iy(n){return $(n)+"주"}const by=["screen-login","screen-auth","screen-home","screen-lobby","screen-game","screen-result"];function gt(n){by.forEach(e=>b(e).classList.toggle("hidden",e!==n))}function V(n,e,t=!0){const i=b(n);i&&(i.textContent=e||"",i.classList.toggle("error",t))}function hu(n){b("fbError").classList.remove("hidden"),n&&(b("fbErrorMsg").textContent=n)}const Cy=3,Sy=120,Fa=60;let Ne={},Cn=[],Ve={},xt=0,$n=null,pr={};function fu(){Ne={},Cn=[],Ve={},xt=0,$n=null,pr={},Ki="";for(const n in qi)delete qi[n]}function Ty(){if($n)try{localStorage.setItem($n,JSON.stringify({candles:Ne,lastVol:Ve,tick:xt}))}catch{}}function ky(n,e){const t=n.stocks||{},i=n.marketTick||0,s=`mb_candles_${e||"x"}_${n.startedAt||0}`;if(s!==$n){$n=s,Ne={},Ve={},xt=0;try{const r=JSON.parse(localStorage.getItem(s)||"null");r&&r.candles&&(Ne=r.candles,Ve=r.lastVol||{},xt=r.tick||0)}catch{}}for(const[r,o]of Object.entries(t))Ne[r]||(Ne[r]=[{t:Date.now(),o:o.price,h:o.price,l:o.price,c:o.price,v:0,_n:0}]),Ve[r]==null&&(Ve[r]=o.volume||0);if(i!==xt){xt=i;for(const[o,a]of Object.entries(t)){const c=Ne[o]||(Ne[o]=[]);let l=c[c.length-1];(!l||l._n>=Cy)&&(l={t:Date.now(),o:a.price,h:a.price,l:a.price,c:a.price,v:0,_n:0},c.push(l)),l.c=a.price,l.h=Math.max(l.h,a.price),l.l=Math.min(l.l,a.price);const d=Math.max(0,(a.volume||0)-(Ve[o]||0));l.v+=d,Ve[o]=a.volume||0,l._n++,c.length>Sy&&c.shift()}const r=n.botFeed?Object.values(n.botFeed):[];for(const o of r)Cn.unshift({...o,bot:!0});Cn.length>Fa&&(Cn.length=Fa),Py(t),Ty()}}let mt=new Set(JSON.parse(localStorage.getItem("mb_watch")||"[]")),_t=JSON.parse(localStorage.getItem("mb_alerts")||"{}");function Ry(n){mt.has(n)?mt.delete(n):mt.add(n),localStorage.setItem("mb_watch",JSON.stringify([...mt]))}function Ny(n,e){e>0?_t[n]=e:delete _t[n],localStorage.setItem("mb_alerts",JSON.stringify(_t))}function Ay(n){return _t[n]||0}function Py(n){for(const e of Object.values(n)){const t=_t[e.name],i=pr[e.name];if(t&&i!=null){const s=i<t&&e.price>=t,r=i>t&&e.price<=t;if(s||r){x(`🔔 ${e.name} 알림가 ${$(t)}원 ${s?"돌파":"하향"}!`,s?"up":"down"),delete _t[e.name],localStorage.setItem("mb_alerts",JSON.stringify(_t));try{window.Notification&&Notification.permission==="granted"&&new Notification("STONK Battle",{body:`${e.name} ${$(t)}원 도달`})}catch{}}}pr[e.name]=e.price}}function Oy(n,e,t){b("lobbyRoomCode").textContent=n;const i=e.players||{},s=b("lobbyPlayers");s.innerHTML="",Object.entries(i).forEach(([a,c])=>{const l=document.createElement("li"),d=a===e.hostId,u=c.connected===!1;l.textContent=`${c.nickname}${d?" (방장)":""}${a===t?" - 나":""}${u?" [오프라인]":""}`,u&&l.classList.add("muted"),s.appendChild(l)});const r=t===e.hostId,o=Object.keys(i).length;b("btnStartGame").classList.toggle("hidden",!r),b("lobbyWait").classList.toggle("hidden",r),b("btnStartGame").disabled=o<1,V("lobbyMsg",o<2?"혼자서도 테스트 시작이 가능합니다. (정식 대전은 친구를 초대하세요)":`${o}명 입장 완료`,!1)}function My(n){const{roomCode:e,roomData:t,uid:i,selectedStockId:s}=n;b("gameRoomCode").textContent=e,ky(t,e),Fy(t,s),$y(t,s),qy(t,s),Ky(t,i),zy(t,i),Yy(t),Qy(t),Ly(t,i),Dy(t,i),pu(n)}function pu(n){const e=n.roomData,t=b("marketStatusChip"),i=b("msDot"),s=b("msLabel"),r=b("marketStatusPanel");if(!e||!t||!i||!s||!r)return;const o=e.market||{},a=o.lastTickAt||e.marketTick||0,c=o.lastCatchupAt||0,l=a?Math.max(0,Math.round((Date.now()-a)/6e4)):null,d=e.hostId===n.uid;let u=0,h=0,p=0,m=0;for(const E of Object.values(e.stocks||{})){const T=E.history;T&&(T.candles1m&&(u+=Object.keys(T.candles1m).length),T.candles5m&&(h+=Object.keys(T.candles5m).length),T.candles15m&&(p+=Object.keys(T.candles15m).length),T.candles1h&&(m+=Object.keys(T.candles1h).length))}const y=u+h+p+m>0,w=l!=null&&l<2;if(i.className="status-dot "+(w?"ok":l==null?"muted":"warn"),s.textContent=w?"시장 최신":l==null?"대기":`${l}분 전`,r.classList.contains("hidden"))return;const v=E=>E?`${yt(new Date(E).getHours())}:${yt(new Date(E).getMinutes())}`:"-",g=(E,T,I)=>`<div class="ms-row"><span>${E}</span><b class="${I||""}">${T}</b></div>`;r.innerHTML=g("방 코드",ge(n.roomCode||"-"))+g("연결","연결됨","up")+g("권한",d?"보정 주체 (방장)":"읽기 전용",d?"":"muted")+g("마지막 tick",v(a))+g("마지막 보정",c?v(c):"없음")+g("시장",w?"최신 상태":l==null?"tick 기록 없음":`${l}분 전 데이터 · ${d?"재접속 시 자동 보정":"방장/관리자가 보정"}`,w?"up":"down")+g("캔들",y?`1m ${u} · 5m ${h} · 15m ${p} · 1h ${m}`:"아직 없음")}function Dy(n,e){const t=b("orderList");if(!t)return;const i=oy(n,e);if(!i.length){t.innerHTML="";return}t.innerHTML=i.map(s=>{const r=s.side==="buy"?"up":"down",o=s.tif==="day"?" · 당일":s.tif==="ioc"?" · IOC":"",a=s.label||(s.side==="buy"?"매수":"매도");return`<li class="order-item">
        <span class="order-badge ${r}">${ge(a)}</span>
        <span class="order-name">${ge(s.stockName)}</span>
        <span class="order-detail">${$(s.target)}원 · ${$(s.qty)}주${o}</span>
        <button class="order-cancel" data-cancel="${s.id}" title="취소">✕</button>
      </li>`}).join("")}let ji=0;function Ly(n,e){var r;const t=b("ipoPanel");if(!t)return;const i=n.ipo;if(!i||i.status!=="subscribing"){t.classList.add("hidden"),ji=0;return}ji=i.endsAt,t.classList.remove("hidden"),b("ipoName").textContent=i.name,b("ipoPrice").textContent=$(i.offerPrice)+"원",b("ipoShares").textContent=$(i.totalShares)+"주",b("ipoRatio").textContent=iy(i).toFixed(1)+" : 1";const s=((r=i.applies)==null?void 0:r[e])||0;b("ipoMyApply").textContent=s?`내 청약 ${$(s)}주 (증거금 ${Jt(s*i.offerPrice)}원)`:"아직 청약하지 않았어요",mu()}function mu(n){const e=b("ipoCountdown");if(!e||!ji)return;const t=Math.max(0,Math.ceil((ji-Date.now())/1e3));e.textContent=t+"초",e.classList.toggle("urgent",t<=5)}function ti(n){return n>0?"up":n<0?"down":"flat"}function gu(n){return n>0?"▲":n<0?"▼":"−"}let Gi="";function $a(n){Gi=(n||"").trim().toLowerCase()}function xy(n,e){return Gi?[e.name,n,e.ticker,e.sector,e.type,e.role,fo(e.type),ru(e.role),String(n).startsWith("ipo")?"신규상장 new":""].join(" ").toLowerCase().includes(Gi):!0}function Fy(n,e){const t=b("stockList"),i=n.stocks||{},s=t.scrollTop;t.innerHTML="";const r=Object.entries(i).filter(([o,a])=>xy(o,a)).sort((o,a)=>{const c=mt.has(o[1].name)?0:1,l=mt.has(a[1].name)?0:1;return c-l});if(!r.length){const o=document.createElement("li");o.className="muted stock-empty",o.textContent=Gi?"검색 결과 없음":"종목이 없습니다",t.appendChild(o);return}r.forEach(([o,a])=>{const c=document.createElement("li");c.className="stock-item"+(o===e?" selected":""),c.dataset.id=o;const l=a.changeRate>0?"+":"",d=ti(a.changeRate),u=mt.has(a.name);c.innerHTML=`
      <div class="stock-name"><button class="star-btn ${u?"on":""}" data-star="${ge(a.name)}" title="관심종목">${u?"★":"☆"}</button>${ge(a.name)} ${Ey(o,a)}</div>
      <div class="stock-price ${d}">${$(a.price)}</div>
      <div class="stock-rate ${d}">${gu(a.changeRate)} ${l}${(a.changeRate??0).toFixed(2)}%</div>
      <div class="stock-vol muted">${Jt(a.value)}</div>
    `,t.appendChild(c)}),t.scrollTop=s}function $y(n,e){const i=(n.stocks||{})[e];if(!i){b("chartStockName").textContent="-",b("selStockPrice").textContent="-",b("selStockChange").textContent="";return}const s=i.basePrice||i.price,r=i.price-s,o=ti(i.changeRate),a=i.changeRate>0?"+":"";b("chartStockName").textContent=i.name;const c=b("detailTag");if(c){const h=fo(i.type),p=ru(i.role);let m,y="virtual-tag";h?(m=h,y+=i.type==="inverse"?" tag-inv":i.type==="leverage"?" tag-lev":" tag-etf"):String(e).startsWith("ipo")?(m="신규상장",y+=" tag-new"):i.sector?(m=p?`${i.sector}·${p}`:i.sector,i.role==="leader"&&(y+=" tag-leader")):m="가상",c.textContent=m,c.className=y}const l=b("selStockPrice"),d=qi[e];if(l.textContent=$(i.price),l.className="big-price "+o,d!=null&&i.price!==d){const h=i.price>d?"flash-up":"flash-down";l.classList.remove("flash-up","flash-down"),l.offsetWidth,l.classList.add(h)}qi[e]=i.price,b("selStockChange").className="change "+o,b("selStockChange").textContent=`${gu(i.changeRate)} ${a}${$(r)} (${a}${(i.changeRate??0).toFixed(2)}%)`,xs("ohlcOpen",i.open,s),xs("ohlcHigh",i.high,s),xs("ohlcLow",i.low,s),b("ohlcUpper").textContent=$(gs(s)),b("ohlcLower").textContent=$(_s(s)),b("ohlcVol").textContent=Iy(i.volume),b("ohlcValue").textContent=Jt(i.value)+"원";const u=b("selStockNews");u.textContent=i.news?`📰 ${i.news}`:"",u.className="news-line"+(i.news?" "+o:" muted"),_u(n,e,s,i)}const qi={};function xs(n,e,t){const i=b(n);i.textContent=$(e),i.className="ohlc-v "+ti((e||0)-t)}function Fs(n){return getComputedStyle(document.body).getPropertyValue(n).trim()||"#000"}const mr={tick:{win:30*6e4,tiers:["candles1m","candles5m"],count:16},"1d":{win:864e5,tiers:["candles5m","candles1m"],count:288},"3d":{win:2592e5,tiers:["candles1h","candles15m","candles5m"],count:216},"1w":{win:6048e5,tiers:["candles1h","candles15m"],count:224},"1m":{win:2592e6,tiers:["candles1h","candles15m","candles5m","candles1m"],count:360},all:{win:1/0,tiers:["candles1h","candles15m","candles5m","candles1m"],count:500}},Uy={tick:"1틱","1d":"1일","3d":"3일","1w":"1주","1m":"1달",all:"전체"};function Ua(n){if(n<=0)return"0분";const e=Math.round(n/6e4);if(e<60)return e+"분";const t=Math.floor(e/60),i=e%60;if(t<24)return i?`${t}시간 ${i}분`:`${t}시간`;const s=Math.floor(t/24),r=t%24;return r?`${s}일 ${r}시간`:`${s}일`}function By(n,e){const t=Uy[n]||n;if(!e||!e.length)return t+" · 데이터 없음";if(n==="tick")return"1틱 · 최근 흐름";const i=e[0].t,s=e[e.length-1].t;if(!(i>1e11)||!(s>1e11))return t+" · 최근 흐름";const r=s-i,o=(mr[n]||{}).win;return o&&o!==1/0&&r<o*.9?`${t} · 아직 ${Ua(r)} 데이터만 있음`:`${t} · 누적 ${Ua(r)} 데이터`}function yt(n){return(n<10?"0":"")+n}function Wy(n,e){if(!(n>1e11))return"";const t=new Date(n),i=yt(t.getHours())+":"+yt(t.getMinutes()),s=t.getMonth()+1+"/"+t.getDate();return e==="tick"||e==="1d"?i:e==="3d"||e==="1w"?s+" "+i:s}function Hy(n){if(!(n>1e11))return"";const e=new Date(n);return e.getMonth()+1+"/"+yt(e.getDate())+" "+yt(e.getHours())+":"+yt(e.getMinutes())}let Sn="1d",pi=-1,re=null,ht=null,Ba=!1,Ki="";function Wa(n,e){if(n.length&&e.price!=null&&n[n.length-1].c!==e.price){const t=n[n.length-1],i=t.t>1e11?t.t+1e3:t.t+1;n.push({t:i,o:t.c,h:Math.max(t.c,e.price),l:Math.min(t.c,e.price),c:e.price,v:0,_live:!0})}return n}function Vy(n,e,t){const i=mr[t]||mr["1d"],s=n.history||null,r=Ne[e]||[],o=Date.now(),a=i.win===1/0?-1/0:o-i.win;if(t==="tick"){let l=r.slice(-12).map((d,u)=>({t:d.t||o-(12-u)*6e3,o:d.o,h:d.h,l:d.l,c:d.c,v:d.v||0}));if(l.length<2&&s){const d=xa(s,"candles1m");d.length&&(l=d.slice(-i.count).map(u=>({...u})))}return Wa(l,n)}let c=[];if(s)for(const l of i.tiers){let d=xa(s,l);if(d.length){if(d=d.filter(u=>u.t>=a),d.length>=2){c=d.map(u=>({...u}));break}!c.length&&d.length&&(c=d.map(u=>({...u})))}}return!c.length&&r.length&&(c=r.map((l,d)=>({t:l.t||o-(r.length-d)*6e3,o:l.o,h:l.h,l:l.l,c:l.c,v:l.v||0})).filter(l=>l.t>=a)),c=Wa(c,n),c.length>i.count&&(c=c.slice(c.length-i.count)),c}function _u(n,e,t,i){ht={room:n,id:e,base:t};const s=Vy(i,e,Sn),r=s.length?s[s.length-1]:null,o=`${e}|${Sn}|${s.length}|${r?r.c+":"+r.v:""}|${t}`;if(o===Ki){Ha();return}Ki=o,pi=-1,yu(),gr(b("priceChart"),s,t,-1);const a=b("chartRangeNote");a&&(a.textContent=By(Sn,s)),Ha()}function Ha(){if(Ba)return;Ba=!0;const n=b("chartPeriods");n&&n.addEventListener("click",t=>{var s;const i=t.target.closest(".cp-btn");if(i&&(Sn=i.dataset.period,n.querySelectorAll(".cp-btn").forEach(r=>r.classList.toggle("is-active",r===i)),ht)){const r=(s=ht.room.stocks)==null?void 0:s[ht.id];r&&_u(ht.room,ht.id,ht.base,r)}});const e=b("priceChart");if(e){const t=s=>{if(!re)return;const r=e.getBoundingClientRect(),o=(s.touches?s.touches[0].clientX:s.clientX)-r.left,a=Math.max(0,Math.min(re.candles.length-1,Math.floor(o/re.cw)));a!==pi&&(pi=a,gr(e,re.candles,re.base,a),jy(a))},i=()=>{pi=-1,re&&gr(e,re.candles,re.base,-1),yu()};e.addEventListener("mousemove",t),e.addEventListener("mouseleave",i),e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchmove",t,{passive:!0}),e.addEventListener("touchend",i)}}function jy(n){const e=b("chartTip");if(!e||!re)return;const t=re.candles[n];if(!t)return;const i=t.o?(t.c-t.o)/t.o*100:0,s=i>0?"up":i<0?"down":"flat",r=Hy(t.t)||`구간 ${n+1}`;e.innerHTML=`
    <div class="tip-when">${ge(r)}</div>
    <div class="tip-row"><span>시작</span><b>${$(t.o)}</b></div>
    <div class="tip-row"><span>마지막</span><b>${$(t.c)}</b></div>
    <div class="tip-row"><span>최고</span><b class="up">${$(t.h)}</b></div>
    <div class="tip-row"><span>최저</span><b class="down">${$(t.l)}</b></div>
    <div class="tip-row"><span>거래량</span><b>${$(t.v)}</b></div>
    <div class="tip-row"><span>등락률</span><b class="${s}">${i>=0?"+":""}${i.toFixed(2)}%</b></div>`,e.classList.remove("hidden");const o=n*re.cw+re.cw/2,a=o>re.plotW*.6?"left":"right";e.style.left=a==="right"?`${o+10}px`:"",e.style.right=a==="left"?`${re.cssW-o+10}px`:"",e.style.top="8px"}function yu(){const n=b("chartTip");n&&n.classList.add("hidden")}function gr(n,e,t,i){if(!n)return;const s=window.devicePixelRatio||1,r=n.clientWidth||600,o=n.clientHeight||260;n.width=Math.round(r*s),n.height=Math.round(o*s);const a=n.getContext("2d");if(a.setTransform(s,0,0,s,0,0),a.clearRect(0,0,r,o),!e.length){re=null;return}const c=56,l=r-c,d=o*.18,u=o*.06,h=o-d-u;let p=-1/0,m=1/0,y=0;for(const L of e)p=Math.max(p,L.h),m=Math.min(m,L.l),y=Math.max(y,L.v||0);p===m&&(p+=1,m-=1);const w=(p-m)*.14;p+=w,m-=w;const v=Fs("--up"),g=Fs("--down"),E="rgba(255,255,255,0.07)",T=Fs("--muted"),I=L=>h*(1-(L-m)/(p-m)),C=Math.max(e.length,14),S=l/C,P=Math.max(2.5,Math.min(14,S*.64));re={cw:S,plotW:l,priceH:h,volH:d,cssW:r,cssH:o,candles:e,base:t,lo:m,hi:p},a.font="11px Pretendard, sans-serif",a.textBaseline="middle";const B=4;for(let L=0;L<=B;L++){const oe=h/B*L,F=p-(p-m)/B*L;a.strokeStyle=E,a.lineWidth=1,a.beginPath(),a.moveTo(0,Math.round(oe)+.5),a.lineTo(l,Math.round(oe)+.5),a.stroke(),a.fillStyle=T,a.textAlign="left",a.fillText($(F),l+6,Math.min(h-6,Math.max(8,oe)))}if(i>=0&&i<e.length){const L=i*S+S/2;a.strokeStyle="rgba(120,140,180,0.55)",a.lineWidth=1,a.setLineDash([3,3]),a.beginPath(),a.moveTo(Math.round(L)+.5,0),a.lineTo(Math.round(L)+.5,o),a.stroke(),a.setLineDash([])}e.forEach((L,oe)=>{const F=oe*S+S/2,he=L.c>=L.o?v:g;a.strokeStyle=he,a.fillStyle=he,a.lineWidth=1,a.beginPath(),a.moveTo(Math.round(F)+.5,I(L.h)),a.lineTo(Math.round(F)+.5,I(L.l)),a.stroke();const ln=I(L.o),un=I(L.c),vs=Math.min(ln,un),ni=Math.max(1.5,Math.abs(un-ln));if(a.fillRect(F-P/2,vs,P,ni),y>0){const wo=(d-4)*((L.v||0)/y);a.globalAlpha=.4,a.fillRect(F-P/2,o-wo,P,wo),a.globalAlpha=1}});const Q=e[e.length-1].c;if(Q<=p&&Q>=m){const L=I(Q),F=Q>=(t||Q)?v:g;a.strokeStyle=F,a.lineWidth=1,a.setLineDash([4,3]),a.beginPath(),a.moveTo(0,Math.round(L)+.5),a.lineTo(l,Math.round(L)+.5),a.stroke(),a.setLineDash([]);const ie=$(Q);a.font="bold 11px Pretendard, sans-serif";const he=a.measureText(ie).width,ln=Math.min(h-9,Math.max(9,L));a.fillStyle=F,a.beginPath();const un=l+2,vs=Math.min(c-4,he+10),ni=17;Gy(a,un,ln-ni/2,vs,ni,4),a.fill(),a.fillStyle="#fff",a.textAlign="left",a.fillText(ie,un+5,ln)}if(e.length>=2){a.font="10px Pretendard, sans-serif",a.fillStyle=T;const L=[0,Math.floor((e.length-1)/2),e.length-1],oe={};L.forEach(F=>{if(oe[F])return;oe[F]=1;const ie=Wy(e[F].t,Sn);if(!ie)return;a.textAlign=F===0?"left":F===e.length-1?"right":"center";const he=F===0?2:F===e.length-1?l-2:F*S+S/2;a.fillText(ie,he,o-2)})}}function Gy(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function vu(){Ki="";const n=b("priceChart");if(n){const e=n.getContext("2d");e&&e.clearRect(0,0,n.width,n.height)}}function qy(n,e){var l;const t=b("orderbook");if(!t)return;const i=(l=n.stocks)==null?void 0:l[e];if(!i){t.innerHTML="";return}const s=ou(i.price),r=i.basePrice||i.price,o=5e4,a=()=>Math.floor((Math.random()*.9+.1)*12e3),c=[];for(let d=5;d>=1;d--){const u=Va(i.price+d*s,r);c.push(ja(u,a(),"ask",o,r))}c.push(`<div class="ob-current ${ti(i.changeRate)}">${$(i.price)}</div>`);for(let d=1;d<=5;d++){const u=Va(i.price-d*s,r);c.push(ja(u,a(),"bid",o,r))}t.innerHTML=c.join("")}function Va(n,e){return Math.max(_s(e),Math.min(gs(e),Math.max(We,n)))}function ja(n,e,t,i,s){const r=ti(n-s),o=Math.min(100,e/i*100);return t==="ask"?`<div class="ob-row ask">
      <span class="ob-qty"><span class="ob-bar" style="width:${o}%"></span><b>${$(e)}</b></span>
      <span class="ob-price ${r}">${$(n)}</span>
      <span></span>
    </div>`:`<div class="ob-row bid">
    <span></span>
    <span class="ob-price ${r}">${$(n)}</span>
    <span class="ob-qty"><b>${$(e)}</b><span class="ob-bar" style="width:${o}%"></span></span>
  </div>`}function Ky(n,e){var p;const t=(p=n.players)==null?void 0:p[e],i=n.stocks||{};if(!t)return;const s=mo(t,i);b("myCash").textContent=fr(t.cash),b("myAsset").textContent=fr(s);const r=b("myAssetTop");r&&(r.textContent=Jt(s)+"원");const o=t.avgCost||{},a=t.holdings||{},c=Object.entries(a).filter(([,m])=>m>0);let l=0,d=0;c.forEach(([m,y])=>{const w=i[m];if(!w)return;const v=(o[m]||w.price)*y;l+=w.price*y-v,d+=v});const u=b("myPnl");if(u)if(c.length){const m=d?l/d*100:0,y=l>0?"up":l<0?"down":"flat";u.className="asset-pnl "+y,u.textContent=`평가손익 ${l>=0?"+":""}${$(l)}원 (${m>=0?"+":""}${m.toFixed(2)}%)`}else u.className="asset-pnl muted",u.textContent="평가손익 —";const h=b("holdingsList");if(h.innerHTML="",c.length===0){const m=document.createElement("li");m.className="muted",m.textContent="보유 종목이 없습니다",h.appendChild(m);return}for(const[m,y]of c){const w=i[m];if(!w)continue;const v=o[m]||0,g=v?(w.price-v)*y:0,E=v?(w.price-v)/v*100:0,T=g>0?"up":g<0?"down":"flat",I=document.createElement("li");I.className="holding-item",I.innerHTML=`
      <div class="hold-row1"><span class="hold-name">${ge(w.name)}</span><b>${$(y)}주</b></div>
      <div class="hold-row2 muted">평단 ${v?$(v):"-"} · 평가 ${Jt(w.price*y)}원</div>
      <div class="hold-row2 ${T}">${g>=0?"+":""}${$(g)}원 (${E>=0?"+":""}${E.toFixed(2)}%)</div>`,h.appendChild(I)}}let Ga=null;function x(n,e=""){const t=b("toast");t&&(t.textContent=n,t.className="toast show"+(e?" toast-"+e:""),clearTimeout(Ga),Ga=setTimeout(()=>{t.className="toast"+(e?" toast-"+e:"")},1800))}function zy(n,e){const t=b("rankingList");t.innerHTML="",lu(n.players,n.stocks).forEach(s=>{const r=document.createElement("li"),o=((s.total-xe)/xe*100).toFixed(2),a=s.total>=xe?"up":"down";r.innerHTML=`<span>${ge(s.nickname)}${s.uid===e?" (나)":""}</span> <b>${Jt(s.total)}원</b> <span class="${a}">${o>=0?"+":""}${o}%</span>`,s.connected||r.classList.add("muted"),t.appendChild(r)})}function Yy(n){const e=b("logList");e.innerHTML="";const i=[...Object.values(n.logs||{}),...Cn].sort((s,r)=>r.time-s.time).slice(0,40);for(const s of i){const r=document.createElement("li"),o=s.type==="buy"?"매수":"매도",a=s.type==="buy"?"up":"down",c=new Date(s.time).toLocaleTimeString("ko-KR",{hour12:!1}),l=s.bot?`<b class="bot-name">${ge(s.nickname)}</b>`:`<b>${ge(s.nickname)}</b>`;r.innerHTML=`<span class="muted">${c}</span> ${l} <span class="${a}">${o}</span> ${ge(s.stockName)} ${$(s.qty)}주 @ ${$(s.price)}`,e.appendChild(r)}}function Qy(n){const e=b("newsBar"),t=n.latestNews;if(!t||Date.now()-t.time>12e3){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent=`📢 ${t.text}`}function Jy(n){const e=b("tickBar"),t=b("tickCountdown");if(!e)return;const i=n&&(n.marketTick||n.market&&n.market.lastTickAt)||0;if(!i){e.style.width="0%",t&&(t.textContent="");return}const s=Date.now()-i,r=Math.max(0,Math.min(1,s/dr));if(e.style.width=(r*100).toFixed(1)+"%",t){const o=Math.max(0,Math.ceil((dr-s)/1e3));t.textContent=o>0?o+"s":"곧"}}function Xy(n){const e=Math.max(0,Math.floor(n/1e3)),t=String(Math.floor(e/60)).padStart(2,"0"),i=String(e%60).padStart(2,"0");b("gameTimer").textContent=`${t}:${i}`}function Zy(n,e){const t=b("resultList");t.innerHTML="",lu(n.players,n.stocks).forEach((s,r)=>{const o=document.createElement("li"),c=["🥇","🥈","🥉"][r]||`${r+1}.`,l=((s.total-xe)/xe*100).toFixed(2),d=s.total>=xe?"up":"down";o.innerHTML=`<span class="rank-mark">${c}</span> <span>${ge(s.nickname)}${s.uid===e?" (나)":""}</span> <b>${fr(s.total)}</b> <span class="${d}">${l>=0?"+":""}${l}%</span>`,t.appendChild(o)})}function ge(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const wu={home:"https://tom981105-web.github.io/STONK-Home/",battle:"https://tom981105-web.github.io/STONK-Battle/",board:"https://tom981105-web.github.io/STONK-Board/",wiki:"https://tom981105-web.github.io/STONK-Wiki/",arcade:"https://tom981105-web.github.io/STONK-Arcade/",gacha:"https://tom981105-web.github.io/STONK-Gacha/",admin:"https://tom981105-web.github.io/STONK-Admin/market-admin.html"},qa={home:"../STONK-Home/index.html",battle:"../Market-battle/index.html",board:"../Market-Board/index.html",wiki:"../Market-Wiki/index.html",arcade:"../STONK-Arcade/index.html",gacha:"../STONK-Gacha/index.html",admin:"../Market-Admin/market-admin.html"},go="stonk:lastRoomCode",ev=["mb-board-room","wiki-room"];function Eu(){return location.protocol==="file:"||/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)}function tv(){return{urls:{...wu},local:Eu()}}function Xt(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function _o(){try{const n=new URLSearchParams(location.search);return Xt(n.get("room")||n.get("roomCode")||n.get("roomId")||"")}catch{return""}}function Iu(n){const e=Xt(n);if(e)try{localStorage.setItem(go,e)}catch{}}function bu(){try{const n=Xt(localStorage.getItem(go));if(n)return n;for(const e of ev){const t=Xt(localStorage.getItem(e));if(t)return t}}catch{}return""}function nv(){return _o()||bu()}function iv(n){const e=wu[n];return Eu()&&/github\.io/.test(e||"")?qa[n]:e||qa[n]}function lt(n,e){const t=iv(n),i=[],s=Xt(e&&e.room);s&&i.push("room="+encodeURIComponent(s));const r=e&&(e.company||e.companyId);return r&&i.push("company="+encodeURIComponent(r)),i.length?t+(t.indexOf("?")>=0?"&":"?")+i.join("&"):t}function sv(n){return lt("home",{room:n})}function rv(n){return lt("battle",{room:n})}function Cu(n){return lt("board",{room:n})}function Su(n,e){return lt("wiki",{room:n,company:e})}function ov(n){return lt("arcade",{room:n})}function av(n){return lt("gacha",{room:n})}function Tu(n){return lt("admin",{room:n})}const cv={VERSION:"1.4.1",getSiteConfig:tv,normalizeRoomCode:Xt,getUrlRoomCode:_o,getCurrentRoomCode:nv,setLastRoomCode:Iu,getLastRoomCode:bu,buildSiteUrl:lt,buildHomeUrl:sv,buildBattleUrl:rv,buildBoardUrl:Cu,buildWikiUrl:Su,buildArcadeUrl:ov,buildGachaUrl:av,buildAdminUrl:Tu,LAST_ROOM_KEY:go};typeof window<"u"&&(window.SiteConfig=cv);const lv="../STONK-Home/index.html",uv="stonk:lastRoomCode",dv=["mb_roomCode","mb-board-room","wiki-room","lastRoomCode","roomCode"],$s=2600;function mi(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function hv(){try{const n=new URLSearchParams(location.search),e=mi(n.get("room")||n.get("roomCode")||n.get("roomId")||"");if(e)return e}catch{}try{const n=mi(localStorage.getItem(uv)||"");if(n)return n;for(const e of dv){const t=mi(localStorage.getItem(e)||"");if(t)return t}}catch{}return""}function yo(){return/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||location.protocol==="file:"}function fv(n){const e=mi(n);return lv+(e?`?room=${encodeURIComponent(e)}`:"")}function ku({title:n="STONK Home에서 입장해 주세요",message:e="",roomCode:t="",auto:i=!0}={}){var c;const s=fv(t),r=document.getElementById("stonk-home-gate");r&&r.remove();const o=document.createElement("div");o.id="stonk-home-gate",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),Object.assign(o.style,{position:"fixed",inset:"0",zIndex:"99999",display:"grid",placeItems:"center",padding:"24px",background:"radial-gradient(120% 90% at 50% -10%, rgba(139,108,255,0.22), transparent 60%), rgba(5,6,10,0.94)",backdropFilter:"blur(8px)",color:"#f4f7ff",fontFamily:"Pretendard, Inter, 'Noto Sans KR', system-ui, sans-serif"});const a=i&&!yo();if(o.innerHTML=`
    <div style="width:min(460px,100%);text-align:center;padding:32px 26px;border:1px solid rgba(255,255,255,0.14);border-radius:18px;background:rgba(14,16,24,0.92);box-shadow:0 24px 70px rgba(0,0,0,0.5),0 0 60px rgba(139,108,255,0.16)">
      <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#8b6cff;margin-bottom:8px">STONK UNIVERSE</div>
      <h2 style="margin:0 0 10px;font-size:1.5rem">${n}</h2>
      <p style="margin:0 0 18px;color:#aab2c8;font-size:0.95rem;line-height:1.5">${e||"로그인 · 방 선택 · 닉네임 설정은 STONK Home에서 진행합니다."}</p>
      <a data-home-go href="${s}" style="display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 26px;border-radius:14px;font-weight:900;text-decoration:none;color:#0a0a12;background:linear-gradient(135deg,#a99bff,#8b6cff);box-shadow:0 10px 30px rgba(139,108,255,0.4)">STONK Home으로 이동</a>
      ${t?`<div style="margin-top:14px;font-size:0.82rem;color:#8a93a8">방 코드 <b style="color:#41e0ff;letter-spacing:2px">${t}</b> 유지</div>`:""}
      ${a?`<div style="margin-top:12px;font-size:0.8rem;color:#8a93a8"><span data-gate-count>${Math.ceil($s/1e3)}</span>초 후 자동 이동…</div>`:'<div style="margin-top:12px;font-size:0.78rem;color:#5f6678">개발 모드: 자동 이동 없음</div>'}
    </div>
  `,document.body.appendChild(o),(c=o.querySelector("[data-home-go]"))==null||c.addEventListener("click",l=>{l.preventDefault(),location.href=s}),a){let l=Math.ceil($s/1e3);const d=o.querySelector("[data-gate-count]"),u=setInterval(()=>{l-=1,d&&(d.textContent=String(Math.max(0,l))),l<=0&&clearInterval(u)},1e3);setTimeout(()=>{location.href=s},$s)}return o}function pv(){var n;(n=document.getElementById("stonk-home-gate"))==null||n.remove()}const mv="https://tom981105-web.github.io/STONK-Gacha/backgrounds/";let gi,be=null;function gv(){return be||(be=document.createElement("div"),be.id="equip-bg",Object.assign(be.style,{position:"fixed",inset:"0",zIndex:"-1",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",pointerEvents:"none",opacity:"0",transition:"opacity 0.35s ease",transform:"translateZ(0)",backfaceVisibility:"hidden"}),document.body.appendChild(be),be)}function Ka(){if(be){be.style.opacity="0";const n=be;setTimeout(()=>{gi===null&&n&&(n.style.backgroundImage="")},400)}}function _v(n,e){let t=0;const i=()=>{if(t>=n.length){e(null);return}const s=n[t++],r=new Image;r.decoding="async",r.onload=()=>e(s),r.onerror=i,r.src=s};i()}function yv(n){const e=n||null;if(e===gi)return;if(gi=e,!e){Ka();return}const t=["webp","jpg","png"].map(i=>`${mv}${e}.${i}`);_v(t,i=>{if(gi!==e)return;if(!i){Ka();return}const s=gv();s.style.backgroundImage=`linear-gradient(rgba(8,10,16,0.72), rgba(8,10,16,0.85)), url("${i}")`,s.style.opacity="1"})}const vv="yaV8N60yIiUggaWNpNF2VhkCwxb2",wv="tomem@naver.com",f={uid:null,email:null,nickname:localStorage.getItem("mb_nickname")||localStorage.getItem("stonk:lastNickname")||"",roomCode:null,roomData:null,selectedStockId:null,tickTimer:null,isDriver:!1,tickLeaseRenewAt:0,driverWatch:null,liveState:du(),catchupDoneFor:null,clockTimer:null,roomRef:null,lastStatus:null,histRef:null,histStockId:null,selectedHistory:null,renderQueued:!1,joinReqRef:null,joinReqId:null,isDbAdmin:!1},Ev=15e3,Iv=5e3,bv=4e3,Cv=["ended","closed","finished"];function Sv(n){return Cv.includes(n)}function ys(){return f.uid===vv||(f.email||"").toLowerCase()===wv}!nu||!Qt||!R?hu("src/firebase.js 에 본인의 Firebase 설정(firebaseConfig)을 붙여넣은 뒤 새로고침하세요."):Tv();function Tv(){let n=!1;const e=setTimeout(()=>{n||hu("Firebase에 연결할 수 없습니다. 설정값과 네트워크, Database Rules를 확인하세요.")},5e3);Zn(A(R,".info/connected"),t=>{t.val()===!0&&(n=!0,clearTimeout(e),document.getElementById("fbError").classList.add("hidden"))}),pf(Qt,t=>{if(t)pv(),f.uid=t.uid,f.email=t.email||null,localStorage.setItem("mb_playerId",t.uid),kv(),Nv();else{f.uid=null,f.email=null,f.isDbAdmin=!1;const i=document.getElementById("navAdmin");i&&(i.hidden=!0),yo()?gt("screen-login"):ku({message:"로그인은 STONK Home에서 진행합니다. Home에서 방을 선택해 입장해 주세요.",roomCode:hv()})}})}async function kv(){const n=document.getElementById("navAdmin");if(!n)return;let e=ys();if(!e&&f.uid&&R)try{e=(await Ot(A(R,"admins/"+f.uid))).val()===!0}catch{e=!1}f.isDbAdmin=e,n.hidden=!e}function Rv(n){const e=(n==null?void 0:n.code)||"";return{"auth/invalid-email":"이메일 형식이 올바르지 않습니다.","auth/missing-password":"비밀번호를 입력하세요.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/email-already-in-use":"이미 가입된 이메일입니다. 로그인을 눌러주세요.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/user-not-found":"가입되지 않은 이메일입니다. 회원가입을 눌러주세요.","auth/wrong-password":"비밀번호가 올바르지 않습니다.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 시도하세요.","auth/network-request-failed":"네트워크 오류입니다. 연결을 확인하세요.","auth/operation-not-allowed":"Firebase 콘솔에서 이메일/비밀번호 로그인을 활성화했는지 확인하세요."}[e]||"오류: "+((n==null?void 0:n.message)||e)}async function Us(n){const e=document.getElementById("emailInput").value.trim(),t=document.getElementById("passwordInput").value;if(!e||!t){V("loginMsg","이메일과 비밀번호를 입력하세요.");return}V("loginMsg",n==="signup"?"가입 중...":"로그인 중...",!1);try{n==="signup"?await uf(Qt,e,t):await df(Qt,e,t),V("loginMsg","",!1)}catch(i){console.error("[auth]",i),V("loginMsg",Rv(i))}}async function Nv(){var t;if(!f.nickname){gt("screen-auth");return}const n=_o();if(n){zi(),await Ru(n);return}const e=localStorage.getItem("mb_roomCode");if(e){try{const s=(await Ot(A(R,`rooms/${e}`))).val();if(s&&((t=s.players)!=null&&t[f.uid])&&s.status!=="ended"){Tt(e);return}}catch(i){console.warn("[rejoin] 재접속 실패:",i)}localStorage.removeItem("mb_roomCode")}yo()?zi():ku({message:"입장할 방이 없습니다. STONK Home에서 방을 선택해 주세요."})}function zi(){document.getElementById("homeNickname").textContent=`닉네임: ${f.nickname}`;const n=ys(),e=document.getElementById("btnCreateRoom"),t=document.getElementById("btnCleanup"),i=document.getElementById("adminNote");e&&e.classList.toggle("hidden",!n),t&&t.classList.toggle("hidden",!n),i&&i.classList.toggle("hidden",n),gt("screen-home")}function Av(){const n="ABCDEFGHJKMNPQRSTUVWXYZ23456789";let e="";for(let t=0;t<6;t++)e+=n[Math.floor(Math.random()*n.length)];return e}function Pv(n){return{nickname:n,cash:0,holdings:null,totalAsset:0,joinedAt:tu(),connected:!0}}async function Ov(){if(V("homeMsg",""),!ys()){V("homeMsg","방 생성은 관리자만 가능합니다. 방 코드로 입장하세요.");return}try{const n=Av();await cn(A(R,`rooms/${n}`),{status:"waiting",hostId:f.uid,createdAt:tu(),players:{[f.uid]:Pv(f.nickname)}}),Tt(n)}catch(n){console.error(n),V("homeMsg","방 생성 실패: "+n.message)}}async function Ru(n){var t;V("homeMsg","");const e=(n||"").trim().toUpperCase();if(e.length!==6){V("homeMsg","방 코드 6자리를 입력하세요.");return}try{const i=await Ot(A(R,`rooms/${e}`));if(!i.exists()){V("homeMsg","존재하지 않는 방입니다.");return}const s=i.val(),r=s.status||"waiting";if(!!((t=s.players)!=null&&t[f.uid])){x("기존 플레이어로 재입장합니다."),Tt(e);return}if(Sv(r)){V("homeMsg","종료된 방은 참여 신청을 할 수 없습니다.");return}if(r==="waiting"){if(!(await me(A(R,`rooms/${e}/players`),c=>{if(c=c||{},c[f.uid])return c;if(!(Object.keys(c).length>=ur))return c[f.uid]={nickname:f.nickname,cash:0,totalAsset:0,joinedAt:Date.now(),connected:!0},c})).committed){V("homeMsg","방이 가득 찼습니다. (최대 6명)");return}Tt(e);return}await Mv(e,s)}catch(i){console.error(i),V("homeMsg","입장 실패: "+i.message)}}async function Mv(n,e){const t=e.joinRequests||{},i=Object.entries(t).map(([o,a])=>({id:o,...a})).filter(o=>o.uid===f.uid).sort((o,a)=>(a.requestedAt||0)-(o.requestedAt||0))[0];if(i){if(i.status==="approved"){await Nu(n,i.id,i);return}if(i.status==="joined"){Tt(n);return}if(i.status==="pending"){V("homeMsg","이미 참여 신청이 대기 중입니다. 관리자의 승인을 기다려주세요.",!1),za(n,i.id);return}i.status==="rejected"&&V("homeMsg","참여가 거절되었습니다. 다시 신청하려면 잠시 후 시도하세요.")}const s=ho(A(R,`rooms/${n}/joinRequests`)).key,r={id:s,roomCode:n,playerId:f.uid,uid:f.uid,name:f.nickname,requestedAt:Date.now(),status:"pending",type:"lateJoin",requestedTurn:e.marketTick||null,approvedAt:null,approvedBy:null,rejectedAt:null,rejectedBy:null,joinedAt:null,message:""};try{await cn(A(R,`rooms/${n}/joinRequests/${s}`),r),V("homeMsg","진행 중인 방입니다. 참여 신청을 보냈습니다. 관리자의 승인을 기다려주세요.",!1),x("참여 신청을 보냈습니다. 승인을 기다려주세요."),za(n,s)}catch(o){console.error("[lateJoin] 신청 실패:",o),V("homeMsg","참여 신청 실패: "+o.message)}}function za(n,e){f.joinReqRef&&(ei(f.joinReqRef),f.joinReqRef=null),f.joinReqId=e,f.joinReqRef=A(R,`rooms/${n}/joinRequests/${e}`),Zn(f.joinReqRef,async t=>{const i=t.val();i&&(i.status==="approved"?(Un(),await Nu(n,e,i)):i.status==="rejected"&&(Un(),V("homeMsg","참여가 거절되었습니다."),x("참여가 거절되었습니다.","err")))},t=>console.warn("[lateJoin] 구독 오류:",t))}function Un(){f.joinReqRef&&(ei(f.joinReqRef),f.joinReqRef=null),f.joinReqId=null}async function Nu(n,e,t){var i,s;try{const o=(await Ot(A(R,`rooms/${n}`))).val();if(!o){V("homeMsg","방을 찾을 수 없습니다.");return}if((i=o.players)!=null&&i[f.uid]){Un(),x("참여가 승인되었습니다. 입장합니다."),Tt(n);return}const a=Number((s=o.settings)==null?void 0:s.initialCash)||xe,c=Date.now(),l={};l[`players/${f.uid}`]={nickname:f.nickname,cash:a,holdings:null,totalAsset:a,joinedAt:c,connected:!0,lateJoin:!0,joinedTurn:t.requestedTurn||o.marketTick||null},l[`joinRequests/${e}/status`]="joined",l[`joinRequests/${e}/joinedAt`]=c,l["meta/updatedAt"]=c,await Be(A(R,`rooms/${n}`),l),x("참여가 승인되었습니다. 입장합니다.","up"),Tt(n)}catch(r){console.error("[lateJoin] 입장 실패:",r),V("homeMsg","승인 후 입장 실패: "+r.message)}}function Tt(n){Un(),f.roomCode=n,localStorage.setItem("mb_roomCode",n),Iu(n),Vv(n);const e=A(R,`rooms/${n}/players/${f.uid}/connected`);cn(e,!0).catch(()=>{}),P_(e).set(!1).catch(()=>{}),f.roomRef&&ei(f.roomRef),f.roomRef=A(R,`rooms/${n}`),Zn(f.roomRef,t=>xv(Dv(t)),t=>{console.error("[room] 구독 오류:",t)})}function Dv(n){if(!n||!n.exists())return null;const e={};return n.forEach(t=>{if(t.key==="stocks"){const i={};t.forEach(s=>{const r={};s.forEach(o=>{o.key!=="history"&&(r[o.key]=o.val())}),i[s.key]=r}),e.stocks=i}else e[t.key]=t.val()}),e}function Lv(n){const e=f.selectedHistory;e&&e.id&&n&&n.stocks&&n.stocks[e.id]&&(n.stocks[e.id].history=e.data||null)}function Yi(n){n!==f.histStockId&&(f.histRef&&(ei(f.histRef),f.histRef=null),f.histStockId=n||null,f.selectedHistory=n?{id:n,data:null}:null,!(!n||!f.roomCode)&&(f.histRef=A(R,`rooms/${f.roomCode}/stocks/${n}/history`),Zn(f.histRef,e=>{f.histStockId===n&&(f.selectedHistory={id:n,data:e.val()||null},f.roomData&&f.roomData.stocks&&f.roomData.stocks[n]&&(f.roomData.stocks[n].history=f.selectedHistory.data),ft())},e=>console.error("[history] 구독 오류:",e))))}function ft(){f.renderQueued||(f.renderQueued=!0,requestAnimationFrame(()=>{f.renderQueued=!1,f.roomData&&f.roomData.status==="playing"&&My(f)}))}function xv(n){if(!n){Qi("방이 삭제되었습니다.");return}if(f.roomData=n,Lv(n),yv(n.players&&f.uid&&n.players[f.uid]?n.players[f.uid].equippedBackground:null),n.status==="waiting")gt("screen-lobby"),Oy(f.roomCode,n,f.uid);else if(n.status==="playing"){if(f.lastStatus!=="playing"){gt("screen-game"),fu(),Wv();const e=Object.keys(n.stocks||{});!f.selectedStockId&&e.length&&(f.selectedStockId=e[0])}f.selectedStockId!==f.histStockId&&Yi(f.selectedStockId),ft(),document.getElementById("btnEndGame").classList.toggle("hidden",n.hostId!==f.uid),Fv(n),Pu(n),Bv()}else n.status==="ended"&&(kt(),Ou(),vo(),Yi(null),vu(),gt("screen-result"),Zy(n,f.uid));f.lastStatus=n.status}async function Fv(n){if(!(!n||n.status!=="playing")&&f.uid&&f.catchupDoneFor!==f.roomCode){if(!yy(n)){f.catchupDoneFor=f.roomCode;return}f.catchupDoneFor=f.roomCode;try{const e=await vy(f.roomCode,n,f.uid);e.applied&&(fu(),x(`시장 경과 보정 완료 (${Math.round(e.elapsed/6e4)}분, 캔들 ${e.candlesWritten}개)`,"up"))}catch(e){console.warn("[catchup] 보정 실패:",e)}}}async function Au(){if(!f.roomCode||!f.uid)return!1;const n=Date.now();try{return(await me(A(R,`rooms/${f.roomCode}/market/tickLease`),t=>{if(!(t&&t.by!==f.uid&&(t.expiresAt||0)>n))return{by:f.uid,at:n,expiresAt:n+Ev}})).committed}catch{return!1}}async function Pu(n){var a,c;if(n=n||f.roomData,!n||n.status!=="playing"){kt();return}if(!f.uid)return;const e=Date.now(),t=n.market&&n.market.tickLease,i=t&&t.by!==f.uid&&(t.expiresAt||0)>e;if(f.isDriver){i&&kt();return}const s=n.hostId===f.uid,r=n.hostId&&((c=(a=n.players)==null?void 0:a[n.hostId])==null?void 0:c.connected)!==!1;if(i||!s&&r)return;await Au()&&$v()}function $v(){f.tickTimer||(f.isDriver=!0,f.tickLeaseRenewAt=Date.now(),f.tickTimer=setInterval(async()=>{const n=f.roomData;if(!n||n.status!=="playing"){kt();return}try{if(Date.now()-f.tickLeaseRenewAt>=Iv){if(!await Au()){kt();return}f.tickLeaseRenewAt=Date.now()}await ey(f.roomCode,n),await ty(f.roomCode,n),await ry(f.roomCode,n),await wy(f.roomCode,n,f.liveState)}catch(e){console.error("[tick] 시장 틱 오류:",e)}},dr))}function kt(){f.tickTimer&&(clearInterval(f.tickTimer),f.tickTimer=null),f.isDriver=!1}async function Uv(){if(!f.roomCode||!f.uid)return;const n=f.roomCode;try{await me(A(R,`rooms/${n}/market/tickLease`),e=>e&&e.by===f.uid?null:e)}catch{}}function Bv(){f.driverWatch||(f.driverWatch=setInterval(()=>{Pu(f.roomData)},bv))}function Ou(){f.driverWatch&&(clearInterval(f.driverWatch),f.driverWatch=null)}function Wv(){vo(),f.clockTimer=setInterval(()=>{const n=f.roomData;!n||n.status!=="playing"||(Xy(Date.now()-(n.startedAt||Date.now())),mu(),Jy(n))},250)}function vo(){f.clockTimer&&(clearInterval(f.clockTimer),f.clockTimer=null)}async function Hv(){const{roomCode:n,roomData:e}=f;try{n&&(e==null?void 0:e.status)==="waiting"&&(e.hostId===f.uid?await Qe(A(R,`rooms/${n}`)):await Qe(A(R,`rooms/${n}/players/${f.uid}`)))}catch(t){console.warn(t)}Qi()}function Qi(n){Uv(),kt(),Ou(),vo(),Un(),vu(),f.roomRef&&(ei(f.roomRef),f.roomRef=null),Yi(null),f.roomCode=null,f.roomData=null,f.selectedStockId=null,f.lastStatus=null,f.catchupDoneFor=null,f.liveState=du(),localStorage.removeItem("mb_roomCode"),zi(),n&&V("homeMsg",n,!1)}function Vv(n){const e="",t=(i,s)=>{const r=document.getElementById(i);r&&(r.href=s)};t("navBoard",Cu(n)),t("navWiki",Su(n,e)),t("navAdmin",Tu(n))}async function Ya(){if(f.roomCode)try{await navigator.clipboard.writeText(f.roomCode),alert("방 코드가 복사되었습니다: "+f.roomCode)}catch{prompt("아래 방 코드를 복사하세요:",f.roomCode)}}async function jv(){if(!f.roomCode||!f.roomData){x("복사할 시장 데이터가 없습니다","err");return}const n={roomCode:f.roomCode,status:f.roomData.status,startedAt:f.roomData.startedAt||null,marketTick:f.roomData.marketTick||Date.now(),latestNews:f.roomData.latestNews||null,botFeed:f.roomData.botFeed||[],stocks:f.roomData.stocks||{},players:f.roomData.players||{},logs:f.roomData.logs||{}},e=JSON.stringify(n,null,2);try{await navigator.clipboard.writeText(e),x("STONK Board에 가져올 시장 데이터를 복사했습니다")}catch{prompt("STONK Board 관리자 화면에 붙여넣을 시장 데이터입니다:",e)}}function Bn(){return Math.max(1,Math.floor(Number(document.getElementById("qtyInput").value)||1))}async function Bs(n){var a,c;const{roomCode:e,roomData:t,uid:i,nickname:s,selectedStockId:r}=f;if(!t||t.status!=="playing")return;if(!r){x("종목을 먼저 선택하세요","err");return}const o=((c=(a=t.stocks)==null?void 0:a[r])==null?void 0:c.name)||"";try{n==="buy"?(await au(e,i,s,r,Bn(),t),x(`${o} 매수 체결!`,"up")):n==="sell"?(await po(e,i,s,r,Bn(),t),x(`${o} 매도 체결!`,"down")):n==="sellAll"&&(await ay(e,i,s,r,t),x(`${o} 전량 매도 체결!`,"down")),V("tradeMsg","",!1)}catch(l){x(l.message,"err")}}function Ji(n){return Math.floor(Number(document.getElementById(n).value)||0)}function Gv(n){var i,s,r;const e=(r=(s=(i=f.roomData)==null?void 0:i.stocks)==null?void 0:s[n])==null?void 0:r.price;if(!e)return;const t=(o,a)=>{const c=document.getElementById(o);c&&(c.value=a)};t("limitPrice",e),t("stopLoss",Math.round(e*.95)),t("takeProfit",Math.round(e*1.1))}async function Qa(n){var l,d;const{roomCode:e,roomData:t,uid:i,nickname:s,selectedStockId:r}=f;if(!t||t.status!=="playing")return;if(!r)return x("종목을 먼저 선택하세요","err");const o=Ji("limitPrice");if(!o)return x("지정가를 입력하세요","err");const a=document.getElementById("limitTif").value,c=((d=(l=t.stocks)==null?void 0:l[r])==null?void 0:d.name)||"";try{await Hi(e,i,s,r,{side:n,trigger:n==="buy"?"below":"above",tif:a,label:"지정가"},Bn(),o,t),x(`${c} 지정가 ${n==="buy"?"매수":"매도"} 등록!`,n==="buy"?"up":"down")}catch(u){x(u.message,"err")}}async function qv(){var l,d,u,h,p;const{roomCode:n,roomData:e,uid:t,nickname:i,selectedStockId:s}=f;if(!e||e.status!=="playing")return;if(!s)return x("종목을 먼저 선택하세요","err");const r=((u=(d=(l=e.players)==null?void 0:l[t])==null?void 0:d.holdings)==null?void 0:u[s])||0;if(r<1)return x("보유한 종목에만 설정할 수 있어요","err");const o=Ji("stopLoss"),a=Ji("takeProfit");if(!o&&!a)return x("손절가 또는 익절가를 입력하세요","err");const c=((p=(h=e.stocks)==null?void 0:h[s])==null?void 0:p.name)||"";try{o&&await Hi(n,t,i,s,{side:"sell",trigger:"below",tif:"gtc",label:"손절"},r,o,e),a&&await Hi(n,t,i,s,{side:"sell",trigger:"above",tif:"gtc",label:"익절"},r,a,e),x(`${c} 손절·익절 설정 완료 (보유 ${r}주)`,"down")}catch(m){x(m.message,"err")}}async function Kv(){var d,u,h,p;const{roomCode:n,roomData:e,uid:t,nickname:i,selectedStockId:s}=f;if(!e||e.status!=="playing")return;if(!s)return x("종목을 먼저 선택하세요","err");const r=Bn(),o=Math.max(2,Math.min(10,Ji("splitCount")||3)),a=((u=(d=e.stocks)==null?void 0:d[s])==null?void 0:u.price)||0;if(!a)return;const c=Math.floor(r/o);if(c<1)return x(`분할하려면 수량이 최소 ${o}주 이상이어야 해요`,"err");const l=((p=(h=e.stocks)==null?void 0:h[s])==null?void 0:p.name)||"";try{for(let m=0;m<o;m++){const y=Math.round(a*(1-m*.015));await Hi(n,t,i,s,{side:"buy",trigger:"below",tif:"gtc",label:`분할${m+1}`},c,y,e)}x(`${l} ${o}회 분할매수 등록! (회당 ${c}주)`,"up")}catch(m){x(m.message,"err")}}async function zv(n){try{await sy(f.roomCode,n),x("예약 주문 취소됨")}catch(e){x(e.message,"err")}}async function Yv(){const{roomCode:n,roomData:e,uid:t}=f,i=e==null?void 0:e.ipo;if(!i||i.status!=="subscribing"){x("청약 가능한 공모주가 없습니다","err");return}const s=Math.max(1,Math.floor(Number(document.getElementById("ipoQty").value)||0));try{await ny(n,t,s,e),x(`${i.name} ${s.toLocaleString("ko-KR")}주 청약 완료!`,"up")}catch(r){x(r.message,"err")}}function Qv(){document.getElementById("btnLogin").addEventListener("click",()=>Us("login")),document.getElementById("btnSignup").addEventListener("click",()=>Us("signup")),document.getElementById("passwordInput").addEventListener("keydown",i=>{i.key==="Enter"&&Us("login")}),document.getElementById("btnNickname").addEventListener("click",()=>{const i=document.getElementById("nicknameInput").value.trim();i&&(f.nickname=i,localStorage.setItem("mb_nickname",i),zi())}),document.getElementById("nicknameInput").addEventListener("keydown",i=>{i.key==="Enter"&&document.getElementById("btnNickname").click()}),document.getElementById("btnCreateRoom").addEventListener("click",Ov),document.getElementById("btnJoinRoom").addEventListener("click",()=>{Ru(document.getElementById("roomCodeInput").value)}),document.getElementById("roomCodeInput").addEventListener("keydown",i=>{i.key==="Enter"&&document.getElementById("btnJoinRoom").click()}),document.getElementById("btnChangeNick").addEventListener("click",()=>{gt("screen-auth")}),document.getElementById("btnLogout").addEventListener("click",async()=>{localStorage.removeItem("mb_roomCode");try{await mf(Qt)}catch(i){console.error("[auth] 로그아웃 실패:",i)}}),document.getElementById("btnCleanup").addEventListener("click",async()=>{if(!ys()){V("homeMsg","권한이 없습니다.");return}V("homeMsg","정리 중...",!1);try{const i=await uy();V("homeMsg",`오래된 방 ${i}개를 정리했습니다.`,!1)}catch(i){V("homeMsg","정리 실패: "+i.message)}}),document.getElementById("btnCopyCode").addEventListener("click",Ya),document.getElementById("btnCopyCode2").addEventListener("click",Ya),document.getElementById("btnCopyMarketBoard").addEventListener("click",jv),document.getElementById("btnLeaveRoom").addEventListener("click",Hv),document.getElementById("btnLeaveGame").addEventListener("click",()=>{confirm("게임에서 나가시겠습니까? 홈으로 돌아갑니다.")&&Qi()}),document.getElementById("btnEndGame").addEventListener("click",async()=>{if(confirm("게임을 종료하고 최종 순위를 발표할까요?"))try{kt(),await ly(f.roomCode,f.roomData)}catch(i){x("종료 실패: "+i.message,"err")}}),document.getElementById("btnStartGame").addEventListener("click",async()=>{try{await cy(f.roomCode,f.roomData)}catch(i){V("lobbyMsg",i.message)}}),document.getElementById("stockList").addEventListener("click",i=>{const s=i.target.closest("[data-star]");if(s){i.stopPropagation(),Ry(s.dataset.star),ft();return}const r=i.target.closest(".stock-item");r&&(f.selectedStockId=r.dataset.id,Yi(r.dataset.id),Gv(r.dataset.id),ft())}),document.querySelectorAll(".qty-btn[data-qty]").forEach(i=>{i.addEventListener("click",()=>{const s=document.getElementById("qtyInput");s.value=Math.max(1,Bn()+Number(i.dataset.qty))})}),document.getElementById("btnMaxQty").addEventListener("click",()=>{var c,l,d,u;const{roomData:i,uid:s,selectedStockId:r}=f,o=(l=(c=i==null?void 0:i.stocks)==null?void 0:c[r])==null?void 0:l.price,a=((u=(d=i==null?void 0:i.players)==null?void 0:d[s])==null?void 0:u.cash)||0;o&&(document.getElementById("qtyInput").value=Math.max(1,Math.floor(a/(o*1.0002))))}),document.getElementById("btnBuy").addEventListener("click",()=>Bs("buy")),document.getElementById("btnSell").addEventListener("click",()=>Bs("sell")),document.getElementById("btnSellAll").addEventListener("click",()=>Bs("sellAll")),document.getElementById("orderTabs").addEventListener("click",i=>{const s=i.target.closest(".order-tab");if(!s)return;const r=s.dataset.tab;document.querySelectorAll(".order-tab").forEach(o=>o.classList.toggle("is-active",o===s)),document.querySelectorAll(".order-pane").forEach(o=>o.classList.toggle("hidden",o.dataset.pane!==r))}),document.getElementById("btnLimitBuy").addEventListener("click",()=>Qa("buy")),document.getElementById("btnLimitSell").addEventListener("click",()=>Qa("sell")),document.getElementById("btnSetStop").addEventListener("click",qv),document.getElementById("btnSplitBuy").addEventListener("click",Kv),document.getElementById("orderList").addEventListener("click",i=>{const s=i.target.closest("[data-cancel]");s&&zv(s.dataset.cancel)}),document.getElementById("btnAlert").addEventListener("click",()=>{var l;const{roomData:i,selectedStockId:s}=f,r=(l=i==null?void 0:i.stocks)==null?void 0:l[s];if(!r)return x("종목을 먼저 선택하세요","err");try{window.Notification&&Notification.permission==="default"&&Notification.requestPermission()}catch{}const o=Ay(r.name),a=prompt(`${r.name} 가격 알림 설정
현재가 ${r.price.toLocaleString("ko-KR")}원
알림받을 가격을 입력하세요 (0 또는 빈칸 = 해제):`,o||r.price);if(a===null)return;const c=Math.floor(Number(a)||0);Ny(r.name,c),x(c?`${r.name} ${c.toLocaleString("ko-KR")}원 알림 설정됨`:`${r.name} 알림 해제됨`),ft()}),document.getElementById("btnApplyIpo").addEventListener("click",Yv);const n=document.getElementById("stockSearch"),e=document.getElementById("stockSearchClear");n&&n.addEventListener("input",()=>{$a(n.value),e&&(e.hidden=!n.value),ft()}),e&&e.addEventListener("click",()=>{n.value="",$a(""),e.hidden=!0,n.focus(),ft()});const t=document.getElementById("marketStatusChip");t&&t.addEventListener("click",()=>{const i=document.getElementById("marketStatusPanel");if(!i)return;const s=i.classList.toggle("hidden");t.setAttribute("aria-expanded",s?"false":"true"),!s&&f.roomData&&pu(f)}),document.getElementById("btnBackHome").addEventListener("click",()=>Qi())}Qv();
