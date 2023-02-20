(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function _a(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function pr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=he(r)?cl(r):pr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(he(e))return e;if(le(e))return e}}const sl=/;(?![^(]*\))/g,ll=/:([^]+)/,fl=/\/\*.*?\*\//gs;function cl(e){const t={};return e.replace(fl,"").split(sl).forEach(n=>{if(n){const r=n.split(ll);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function xa(e){let t="";if(he(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=xa(e[n]);r&&(t+=r+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ul="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dl=_a(ul);function Eo(e){return!!e||e===""}const Ir=e=>he(e)?e:e==null?"":H(e)||le(e)&&(e.toString===Po||!U(e.toString))?JSON.stringify(e,ko,2):String(e),ko=(e,t)=>t&&t.__v_isRef?ko(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ao(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!H(t)&&!Co(t)?String(t):t,ie={},Bt=[],De=()=>{},ml=()=>!1,pl=/^on[^a-z]/,hr=e=>pl.test(e),wa=e=>e.startsWith("onUpdate:"),_e=Object.assign,Ea=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hl=Object.prototype.hasOwnProperty,X=(e,t)=>hl.call(e,t),H=Array.isArray,Ht=e=>gr(e)==="[object Map]",Ao=e=>gr(e)==="[object Set]",U=e=>typeof e=="function",he=e=>typeof e=="string",ka=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Oo=e=>le(e)&&U(e.then)&&U(e.catch),Po=Object.prototype.toString,gr=e=>Po.call(e),gl=e=>gr(e).slice(8,-1),Co=e=>gr(e)==="[object Object]",Aa=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jn=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vl=/-(\w)/g,Ve=vr(e=>e.replace(vl,(t,n)=>n?n.toUpperCase():"")),bl=/\B([A-Z])/g,Jt=vr(e=>e.replace(bl,"-$1").toLowerCase()),br=vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tr=vr(e=>e?`on${br(e)}`:""),bn=(e,t)=>!Object.is(e,t),Nr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ar=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},yl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oi;const _l=()=>oi||(oi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ne;class xl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function wl(e,t=Ne){t&&t.active&&t.effects.push(e)}function El(){return Ne}const Oa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},So=e=>(e.w&pt)>0,Ro=e=>(e.n&pt)>0,kl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=pt},Al=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];So(a)&&!Ro(a)?a.delete(e):t[n++]=a,a.w&=~pt,a.n&=~pt}t.length=n}},Kr=new WeakMap;let ln=0,pt=1;const qr=30;let Me;const Pt=Symbol(""),Xr=Symbol("");class Pa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wl(this,r)}run(){if(!this.active)return this.fn();let t=Me,n=dt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Me,Me=this,dt=!0,pt=1<<++ln,ln<=qr?kl(this):si(this),this.fn()}finally{ln<=qr&&Al(this),pt=1<<--ln,Me=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Me===this?this.deferStop=!0:this.active&&(si(this),this.onStop&&this.onStop(),this.active=!1)}}function si(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let dt=!0;const Io=[];function Zt(){Io.push(dt),dt=!1}function en(){const e=Io.pop();dt=e===void 0?!0:e}function ke(e,t,n){if(dt&&Me){let r=Kr.get(e);r||Kr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Oa()),To(a)}}function To(e,t){let n=!1;ln<=qr?Ro(e)||(e.n|=pt,n=!So(e)):n=!e.has(Me),n&&(e.add(Me),Me.deps.push(e))}function Ze(e,t,n,r,a,i){const o=Kr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e)){const l=Number(r);o.forEach((c,f)=>{(f==="length"||f>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?Aa(n)&&s.push(o.get("length")):(s.push(o.get(Pt)),Ht(e)&&s.push(o.get(Xr)));break;case"delete":H(e)||(s.push(o.get(Pt)),Ht(e)&&s.push(o.get(Xr)));break;case"set":Ht(e)&&s.push(o.get(Pt));break}if(s.length===1)s[0]&&Vr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Vr(Oa(l))}}function Vr(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&li(r);for(const r of n)r.computed||li(r)}function li(e,t){(e!==Me||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ol=_a("__proto__,__v_isRef,__isVue"),No=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ka)),Pl=Ca(),Cl=Ca(!1,!0),Sl=Ca(!0),fi=Rl();function Rl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)ke(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Zt();const r=V(this)[t].apply(this,n);return en(),r}}),e}function Il(e){const t=V(this);return ke(t,"has",e),t.hasOwnProperty(e)}function Ca(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ql:jo:t?$o:Lo).get(r))return r;const o=H(r);if(!e){if(o&&X(fi,a))return Reflect.get(fi,a,i);if(a==="hasOwnProperty")return Il}const s=Reflect.get(r,a,i);return(ka(a)?No.has(a):Ol(a))||(e||ke(r,"get",a),t)?s:ve(s)?o&&Aa(a)?s:s.value:le(s)?e?Do(s):In(s):s}}const Tl=Mo(),Nl=Mo(!0);function Mo(e=!1){return function(n,r,a,i){let o=n[r];if(Kt(o)&&ve(o)&&!ve(a))return!1;if(!e&&(!ir(a)&&!Kt(a)&&(o=V(o),a=V(a)),!H(n)&&ve(o)&&!ve(a)))return o.value=a,!0;const s=H(n)&&Aa(r)?Number(r)<n.length:X(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?bn(a,o)&&Ze(n,"set",r,a):Ze(n,"add",r,a)),l}}function Ml(e,t){const n=X(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ze(e,"delete",t,void 0),r}function Fl(e,t){const n=Reflect.has(e,t);return(!ka(t)||!No.has(t))&&ke(e,"has",t),n}function Ll(e){return ke(e,"iterate",H(e)?"length":Pt),Reflect.ownKeys(e)}const Fo={get:Pl,set:Tl,deleteProperty:Ml,has:Fl,ownKeys:Ll},$l={get:Sl,set(e,t){return!0},deleteProperty(e,t){return!0}},jl=_e({},Fo,{get:Cl,set:Nl}),Sa=e=>e,yr=e=>Reflect.getPrototypeOf(e);function Ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&ke(a,"get",t),ke(a,"get",i));const{has:o}=yr(a),s=r?Sa:n?Ta:yn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function $n(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&ke(r,"has",e),ke(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function jn(e,t=!1){return e=e.__v_raw,!t&&ke(V(e),"iterate",Pt),Reflect.get(e,"size",e)}function ci(e){e=V(e);const t=V(this);return yr(t).has.call(t,e)||(t.add(e),Ze(t,"add",e,e)),this}function ui(e,t){t=V(t);const n=V(this),{has:r,get:a}=yr(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?bn(t,o)&&Ze(n,"set",e,t):Ze(n,"add",e,t),this}function di(e){const t=V(this),{has:n,get:r}=yr(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ze(t,"delete",e,void 0),i}function mi(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Ze(e,"clear",void 0,void 0),n}function Dn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?Sa:e?Ta:yn;return!e&&ke(s,"iterate",Pt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function zn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Ht(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Sa:t?Ta:yn;return!t&&ke(i,"iterate",l?Xr:Pt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:s?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function st(e){return function(...t){return e==="delete"?!1:this}}function Dl(){const e={get(i){return Ln(this,i)},get size(){return jn(this)},has:$n,add:ci,set:ui,delete:di,clear:mi,forEach:Dn(!1,!1)},t={get(i){return Ln(this,i,!1,!0)},get size(){return jn(this)},has:$n,add:ci,set:ui,delete:di,clear:mi,forEach:Dn(!1,!0)},n={get(i){return Ln(this,i,!0)},get size(){return jn(this,!0)},has(i){return $n.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Dn(!0,!1)},r={get(i){return Ln(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return $n.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),t[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[e,n,t,r]}const[zl,Bl,Hl,Ul]=Dl();function Ra(e,t){const n=t?e?Ul:Hl:e?Bl:zl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(X(n,a)&&a in r?n:r,a,i)}const Wl={get:Ra(!1,!1)},Yl={get:Ra(!1,!0)},Kl={get:Ra(!0,!1)},Lo=new WeakMap,$o=new WeakMap,jo=new WeakMap,ql=new WeakMap;function Xl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vl(e){return e.__v_skip||!Object.isExtensible(e)?0:Xl(gl(e))}function In(e){return Kt(e)?e:Ia(e,!1,Fo,Wl,Lo)}function Gl(e){return Ia(e,!1,jl,Yl,$o)}function Do(e){return Ia(e,!0,$l,Kl,jo)}function Ia(e,t,n,r,a){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Vl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ut(e){return Kt(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function Kt(e){return!!(e&&e.__v_isReadonly)}function ir(e){return!!(e&&e.__v_isShallow)}function zo(e){return Ut(e)||Kt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Bo(e){return ar(e,"__v_skip",!0),e}const yn=e=>le(e)?In(e):e,Ta=e=>le(e)?Do(e):e;function Ho(e){dt&&Me&&(e=V(e),To(e.dep||(e.dep=Oa())))}function Uo(e,t){e=V(e);const n=e.dep;n&&Vr(n)}function ve(e){return!!(e&&e.__v_isRef===!0)}function Ql(e){return Wo(e,!1)}function Jl(e){return Wo(e,!0)}function Wo(e,t){return ve(e)?e:new Zl(e,t)}class Zl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:yn(t)}get value(){return Ho(this),this._value}set value(t){const n=this.__v_isShallow||ir(t)||Kt(t);t=n?t:V(t),bn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:yn(t),Uo(this))}}function Ct(e){return ve(e)?e.value:e}const ef={get:(e,t,n)=>Ct(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ve(a)&&!ve(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Yo(e){return Ut(e)?e:new Proxy(e,ef)}var Ko;class tf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ko]=!1,this._dirty=!0,this.effect=new Pa(t,()=>{this._dirty||(this._dirty=!0,Uo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return Ho(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ko="__v_isReadonly";function nf(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=De):(r=e.get,a=e.set),new tf(r,a,i||!a,n)}function mt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){_r(i,t,n)}return a}function ze(e,t,n,r){if(U(e)){const i=mt(e,t,n,r);return i&&Oo(i)&&i.catch(o=>{_r(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ze(e[i],t,n,r));return a}function _r(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){mt(l,null,10,[e,o,s]);return}}rf(e,n,a,r)}function rf(e,t,n,r=!0){console.error(e)}let _n=!1,Gr=!1;const ge=[];let qe=0;const Wt=[];let Qe=null,Et=0;const qo=Promise.resolve();let Na=null;function Xo(e){const t=Na||qo;return e?t.then(this?e.bind(this):e):t}function af(e){let t=qe+1,n=ge.length;for(;t<n;){const r=t+n>>>1;xn(ge[r])<e?t=r+1:n=r}return t}function Ma(e){(!ge.length||!ge.includes(e,_n&&e.allowRecurse?qe+1:qe))&&(e.id==null?ge.push(e):ge.splice(af(e.id),0,e),Vo())}function Vo(){!_n&&!Gr&&(Gr=!0,Na=qo.then(Qo))}function of(e){const t=ge.indexOf(e);t>qe&&ge.splice(t,1)}function sf(e){H(e)?Wt.push(...e):(!Qe||!Qe.includes(e,e.allowRecurse?Et+1:Et))&&Wt.push(e),Vo()}function pi(e,t=_n?qe+1:0){for(;t<ge.length;t++){const n=ge[t];n&&n.pre&&(ge.splice(t,1),t--,n())}}function Go(e){if(Wt.length){const t=[...new Set(Wt)];if(Wt.length=0,Qe){Qe.push(...t);return}for(Qe=t,Qe.sort((n,r)=>xn(n)-xn(r)),Et=0;Et<Qe.length;Et++)Qe[Et]();Qe=null,Et=0}}const xn=e=>e.id==null?1/0:e.id,lf=(e,t)=>{const n=xn(e)-xn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Qo(e){Gr=!1,_n=!0,ge.sort(lf);const t=De;try{for(qe=0;qe<ge.length;qe++){const n=ge[qe];n&&n.active!==!1&&mt(n,null,14)}}finally{qe=0,ge.length=0,Go(),_n=!1,Na=null,(ge.length||Wt.length)&&Qo()}}function ff(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ie;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[f]||ie;p&&(a=n.map(g=>he(g)?g.trim():g)),d&&(a=n.map(yl))}let s,l=r[s=Tr(t)]||r[s=Tr(Ve(t))];!l&&i&&(l=r[s=Tr(Jt(t))]),l&&ze(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ze(c,e,6,a)}}function Jo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=c=>{const f=Jo(c,t,!0);f&&(s=!0,_e(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(le(e)&&r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):_e(o,i),le(e)&&r.set(e,o),o)}function xr(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),X(e,t[0].toLowerCase()+t.slice(1))||X(e,Jt(t))||X(e,t))}let Le=null,Zo=null;function or(e){const t=Le;return Le=e,Zo=e&&e.type.__scopeId||null,t}function cf(e,t=Le,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ei(-1);const i=or(t);let o;try{o=e(...a)}finally{or(i),r._d&&Ei(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Mr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:p,setupState:g,ctx:A,inheritAttrs:S}=e;let F,b;const x=or(e);try{if(n.shapeFlag&4){const D=a||r;F=Ke(f.call(D,D,d,i,g,p,A)),b=l}else{const D=t;F=Ke(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),b=t.props?l:uf(l)}}catch(D){dn.length=0,_r(D,e,1),F=z(wn)}let O=F;if(b&&S!==!1){const D=Object.keys(b),{shapeFlag:Y}=O;D.length&&Y&7&&(o&&D.some(wa)&&(b=df(b,o)),O=qt(O,b))}return n.dirs&&(O=qt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),F=O,or(x),F}const uf=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},df=(e,t)=>{const n={};for(const r in e)(!wa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function mf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?hi(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!xr(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?hi(r,o,c):!0:!!o;return!1}function hi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!xr(n,i))return!0}return!1}function pf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const hf=e=>e.__isSuspense;function gf(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):sf(e)}function Zn(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Je(e,t,n=!1){const r=me||Le;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const Bn={};function cn(e,t,n){return es(e,t,n)}function es(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ie){const s=El()===(me==null?void 0:me.scope)?me:null;let l,c=!1,f=!1;if(ve(e)?(l=()=>e.value,c=ir(e)):Ut(e)?(l=()=>e,r=!0):H(e)?(f=!0,c=e.some(O=>Ut(O)||ir(O)),l=()=>e.map(O=>{if(ve(O))return O.value;if(Ut(O))return jt(O);if(U(O))return mt(O,s,2)})):U(e)?t?l=()=>mt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),ze(e,s,3,[p])}:l=De,t&&r){const O=l;l=()=>jt(O())}let d,p=O=>{d=b.onStop=()=>{mt(O,s,4)}},g;if(kn)if(p=De,t?n&&ze(t,s,3,[l(),f?[]:void 0,p]):l(),a==="sync"){const O=dc();g=O.__watcherHandles||(O.__watcherHandles=[])}else return De;let A=f?new Array(e.length).fill(Bn):Bn;const S=()=>{if(b.active)if(t){const O=b.run();(r||c||(f?O.some((D,Y)=>bn(D,A[Y])):bn(O,A)))&&(d&&d(),ze(t,s,3,[O,A===Bn?void 0:f&&A[0]===Bn?[]:A,p]),A=O)}else b.run()};S.allowRecurse=!!t;let F;a==="sync"?F=S:a==="post"?F=()=>Ee(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),F=()=>Ma(S));const b=new Pa(l,F);t?n?S():A=b.run():a==="post"?Ee(b.run.bind(b),s&&s.suspense):b.run();const x=()=>{b.stop(),s&&s.scope&&Ea(s.scope.effects,b)};return g&&g.push(x),x}function vf(e,t,n){const r=this.proxy,a=he(e)?e.includes(".")?ts(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=me;Xt(this);const s=es(a,i.bind(r),n);return o?Xt(o):St(),s}function ts(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function jt(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))jt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)jt(e[n],t);else if(Ao(e)||Ht(e))e.forEach(n=>{jt(n,t)});else if(Co(e))for(const n in e)jt(e[n],t);return e}function rt(e){return U(e)?{setup:e,name:e.name}:e}const er=e=>!!e.type.__asyncLoader,ns=e=>e.type.__isKeepAlive;function bf(e,t){rs(e,"a",t)}function yf(e,t){rs(e,"da",t)}function rs(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(wr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ns(a.parent.vnode)&&_f(r,t,n,a),a=a.parent}}function _f(e,t,n,r){const a=wr(t,e,r,!0);as(()=>{Ea(r[t],a)},n)}function wr(e,t,n=me,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Zt(),Xt(n);const s=ze(t,n,e,o);return St(),en(),s});return r?a.unshift(i):a.push(i),i}}const at=e=>(t,n=me)=>(!kn||e==="sp")&&wr(e,(...r)=>t(...r),n),xf=at("bm"),wf=at("m"),Ef=at("bu"),kf=at("u"),Af=at("bum"),as=at("um"),Of=at("sp"),Pf=at("rtg"),Cf=at("rtc");function Sf(e,t=me){wr("ec",e,t)}function _t(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Zt(),ze(l,n,8,[e.el,s,e,t]),en())}}const is="components";function Rf(e,t){return Tf(is,e,!0,t)||e}const If=Symbol();function Tf(e,t,n=!0,r=!1){const a=Le||me;if(a){const i=a.type;if(e===is){const s=fc(i,!1);if(s&&(s===t||s===Ve(t)||s===br(Ve(t))))return i}const o=gi(a[e]||i[e],t)||gi(a.appContext[e],t);return!o&&r?i:o}}function gi(e,t){return e&&(e[t]||e[Ve(t)]||e[br(Ve(t))])}const Qr=e=>e?gs(e)?ja(e)||e.proxy:Qr(e.parent):null,un=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qr(e.parent),$root:e=>Qr(e.root),$emit:e=>e.emit,$options:e=>Fa(e),$forceUpdate:e=>e.f||(e.f=()=>Ma(e.update)),$nextTick:e=>e.n||(e.n=Xo.bind(e.proxy)),$watch:e=>vf.bind(e)}),Fr=(e,t)=>e!==ie&&!e.__isScriptSetup&&X(e,t),Nf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Fr(r,t))return o[t]=1,r[t];if(a!==ie&&X(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&X(c,t))return o[t]=3,i[t];if(n!==ie&&X(n,t))return o[t]=4,n[t];Jr&&(o[t]=0)}}const f=un[t];let d,p;if(f)return t==="$attrs"&&ke(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ie&&X(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,X(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Fr(a,t)?(a[t]=n,!0):r!==ie&&X(r,t)?(r[t]=n,!0):X(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ie&&X(e,o)||Fr(t,o)||(s=i[0])&&X(s,o)||X(r,o)||X(un,o)||X(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:X(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Jr=!0;function Mf(e){const t=Fa(e),n=e.proxy,r=e.ctx;Jr=!1,t.beforeCreate&&vi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:S,deactivated:F,beforeDestroy:b,beforeUnmount:x,destroyed:O,unmounted:D,render:Y,renderTracked:re,renderTriggered:fe,errorCaptured:Ae,serverPrefetch:be,expose:Se,inheritAttrs:ot,components:He,directives:Nt,filters:bt}=t;if(c&&Ff(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const Q=o[Z];U(Q)&&(r[Z]=Q.bind(n))}if(a){const Z=a.call(n,n);le(Z)&&(e.data=In(Z))}if(Jr=!0,i)for(const Z in i){const Q=i[Z],Re=U(Q)?Q.bind(n,n):U(Q.get)?Q.get.bind(n,n):De,yt=!U(Q)&&U(Q.set)?Q.set.bind(n):De,Ie=se({get:Re,set:yt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:xe=>Ie.value=xe})}if(s)for(const Z in s)os(s[Z],r,n,Z);if(l){const Z=U(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(Q=>{Zn(Q,Z[Q])})}f&&vi(f,e,"c");function ue(Z,Q){H(Q)?Q.forEach(Re=>Z(Re.bind(n))):Q&&Z(Q.bind(n))}if(ue(xf,d),ue(wf,p),ue(Ef,g),ue(kf,A),ue(bf,S),ue(yf,F),ue(Sf,Ae),ue(Cf,re),ue(Pf,fe),ue(Af,x),ue(as,D),ue(Of,be),H(Se))if(Se.length){const Z=e.exposed||(e.exposed={});Se.forEach(Q=>{Object.defineProperty(Z,Q,{get:()=>n[Q],set:Re=>n[Q]=Re})})}else e.exposed||(e.exposed={});Y&&e.render===De&&(e.render=Y),ot!=null&&(e.inheritAttrs=ot),He&&(e.components=He),Nt&&(e.directives=Nt)}function Ff(e,t,n=De,r=!1){H(e)&&(e=Zr(e));for(const a in e){const i=e[a];let o;le(i)?"default"in i?o=Je(i.from||a,i.default,!0):o=Je(i.from||a):o=Je(i),ve(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function vi(e,t,n){ze(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function os(e,t,n,r){const a=r.includes(".")?ts(n,r):()=>n[r];if(he(e)){const i=t[e];U(i)&&cn(a,i)}else if(U(e))cn(a,e.bind(n));else if(le(e))if(H(e))e.forEach(i=>os(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&cn(a,i,e)}}function Fa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>sr(l,c,o,!0)),sr(l,t,o)),le(t)&&i.set(t,l),l}function sr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&sr(e,i,n,!0),a&&a.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Lf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Lf={data:bi,props:wt,emits:wt,methods:wt,computed:wt,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:wt,directives:wt,watch:jf,provide:bi,inject:$f};function bi(e,t){return t?e?function(){return _e(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function $f(e,t){return wt(Zr(e),Zr(t))}function Zr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function wt(e,t){return e?_e(_e(Object.create(null),e),t):t}function jf(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function Df(e,t,n,r=!1){const a={},i={};ar(i,kr,1),e.propsDefaults=Object.create(null),ss(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Gl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function zf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(xr(e.emitsOptions,p))continue;const g=t[p];if(l)if(X(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const A=Ve(p);a[A]=ea(l,s,A,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{ss(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!X(t,d)&&((f=Jt(d))===d||!X(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=ea(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!X(t,d))&&(delete i[d],c=!0)}c&&Ze(e,"set","$attrs")}function ss(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Jn(l))continue;const c=t[l];let f;a&&X(a,f=Ve(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:xr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||ie;for(let f=0;f<i.length;f++){const d=i[f];n[d]=ea(a,l,d,c[d],e,!X(c,d))}}return o}function ea(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=X(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Xt(a),r=c[n]=l.call(null,t),St())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Jt(n))&&(r=!0))}return r}function ls(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const f=d=>{l=!0;const[p,g]=ls(d,t,!0);_e(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return le(e)&&r.set(e,Bt),Bt;if(H(i))for(let f=0;f<i.length;f++){const d=Ve(i[f]);yi(d)&&(o[d]=ie)}else if(i)for(const f in i){const d=Ve(f);if(yi(d)){const p=i[f],g=o[d]=H(p)||U(p)?{type:p}:Object.assign({},p);if(g){const A=wi(Boolean,g.type),S=wi(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||X(g,"default"))&&s.push(d)}}}const c=[o,s];return le(e)&&r.set(e,c),c}function yi(e){return e[0]!=="$"}function _i(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function xi(e,t){return _i(e)===_i(t)}function wi(e,t){return H(t)?t.findIndex(n=>xi(n,e)):U(t)&&xi(t,e)?0:-1}const fs=e=>e[0]==="_"||e==="$stable",La=e=>H(e)?e.map(Ke):[Ke(e)],Bf=(e,t,n)=>{if(t._n)return t;const r=cf((...a)=>La(t(...a)),n);return r._c=!1,r},cs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(fs(a))continue;const i=e[a];if(U(i))t[a]=Bf(a,i,r);else if(i!=null){const o=La(i);t[a]=()=>o}}},us=(e,t)=>{const n=La(t);e.slots.default=()=>n},Hf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),ar(t,"_",n)):cs(t,e.slots={})}else e.slots={},t&&us(e,t);ar(e.slots,kr,1)},Uf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ie;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(_e(a,t),!n&&s===1&&delete a._):(i=!t.$stable,cs(t,a)),o=t}else t&&(us(e,t),o={default:1});if(i)for(const s in a)!fs(s)&&!(s in o)&&delete a[s]};function ds(){return{app:null,config:{isNativeTag:ml,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wf=0;function Yf(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!le(a)&&(a=null);const i=ds(),o=new Set;let s=!1;const l=i.app={_uid:Wf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:mc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(l,...f)):U(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const p=z(r,a);return p.appContext=i,f&&t?t(p,c):e(p,c,d),s=!0,l._container=c,c.__vue_app__=l,ja(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function ta(e,t,n,r,a=!1){if(H(e)){e.forEach((p,g)=>ta(p,t&&(H(t)?t[g]:t),n,r,a));return}if(er(r)&&!a)return;const i=r.shapeFlag&4?ja(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ie?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(he(c)?(f[c]=null,X(d,c)&&(d[c]=null)):ve(c)&&(c.value=null)),U(l))mt(l,s,12,[o,f]);else{const p=he(l),g=ve(l);if(p||g){const A=()=>{if(e.f){const S=p?X(d,l)?d[l]:f[l]:l.value;a?H(S)&&Ea(S,i):H(S)?S.includes(i)||S.push(i):p?(f[l]=[i],X(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else p?(f[l]=o,X(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(A.id=-1,Ee(A,n)):A()}}}const Ee=gf;function Kf(e){return qf(e)}function qf(e,t){const n=_l();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=De,insertStaticContent:A}=e,S=(u,m,h,v=null,_=null,k=null,R=!1,E=null,P=!!m.dynamicChildren)=>{if(u===m)return;u&&!on(u,m)&&(v=C(u),xe(u,_,k,!0),u=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:w,ref:$,shapeFlag:N}=m;switch(w){case Er:F(u,m,h,v);break;case wn:b(u,m,h,v);break;case Lr:u==null&&x(m,h,v,R);break;case Ye:He(u,m,h,v,_,k,R,E,P);break;default:N&1?Y(u,m,h,v,_,k,R,E,P):N&6?Nt(u,m,h,v,_,k,R,E,P):(N&64||N&128)&&w.process(u,m,h,v,_,k,R,E,P,q)}$!=null&&_&&ta($,u&&u.ref,k,m||u,!m)},F=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const _=m.el=u.el;m.children!==u.children&&c(_,m.children)}},b=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},x=(u,m,h,v)=>{[u.el,u.anchor]=A(u.children,m,h,v,u.el,u.anchor)},O=({el:u,anchor:m},h,v)=>{let _;for(;u&&u!==m;)_=p(u),r(u,h,v),u=_;r(m,h,v)},D=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},Y=(u,m,h,v,_,k,R,E,P)=>{R=R||m.type==="svg",u==null?re(m,h,v,_,k,R,E,P):be(u,m,_,k,R,E,P)},re=(u,m,h,v,_,k,R,E)=>{let P,w;const{type:$,props:N,shapeFlag:j,transition:B,dirs:K}=u;if(P=u.el=o(u.type,k,N&&N.is,N),j&8?f(P,u.children):j&16&&Ae(u.children,P,null,v,_,k&&$!=="foreignObject",R,E),K&&_t(u,null,v,"created"),fe(P,u,u.scopeId,R,v),N){for(const J in N)J!=="value"&&!Jn(J)&&i(P,J,null,N[J],k,u.children,v,_,I);"value"in N&&i(P,"value",null,N.value),(w=N.onVnodeBeforeMount)&&We(w,v,u)}K&&_t(u,null,v,"beforeMount");const ee=(!_||_&&!_.pendingBranch)&&B&&!B.persisted;ee&&B.beforeEnter(P),r(P,m,h),((w=N&&N.onVnodeMounted)||ee||K)&&Ee(()=>{w&&We(w,v,u),ee&&B.enter(P),K&&_t(u,null,v,"mounted")},_)},fe=(u,m,h,v,_)=>{if(h&&g(u,h),v)for(let k=0;k<v.length;k++)g(u,v[k]);if(_){let k=_.subTree;if(m===k){const R=_.vnode;fe(u,R,R.scopeId,R.slotScopeIds,_.parent)}}},Ae=(u,m,h,v,_,k,R,E,P=0)=>{for(let w=P;w<u.length;w++){const $=u[w]=E?ct(u[w]):Ke(u[w]);S(null,$,m,h,v,_,k,R,E)}},be=(u,m,h,v,_,k,R)=>{const E=m.el=u.el;let{patchFlag:P,dynamicChildren:w,dirs:$}=m;P|=u.patchFlag&16;const N=u.props||ie,j=m.props||ie;let B;h&&xt(h,!1),(B=j.onVnodeBeforeUpdate)&&We(B,h,m,u),$&&_t(m,u,h,"beforeUpdate"),h&&xt(h,!0);const K=_&&m.type!=="foreignObject";if(w?Se(u.dynamicChildren,w,E,h,v,K,k):R||Q(u,m,E,null,h,v,K,k,!1),P>0){if(P&16)ot(E,m,N,j,h,v,_);else if(P&2&&N.class!==j.class&&i(E,"class",null,j.class,_),P&4&&i(E,"style",N.style,j.style,_),P&8){const ee=m.dynamicProps;for(let J=0;J<ee.length;J++){const de=ee[J],Te=N[de],Ft=j[de];(Ft!==Te||de==="value")&&i(E,de,Te,Ft,_,u.children,h,v,I)}}P&1&&u.children!==m.children&&f(E,m.children)}else!R&&w==null&&ot(E,m,N,j,h,v,_);((B=j.onVnodeUpdated)||$)&&Ee(()=>{B&&We(B,h,m,u),$&&_t(m,u,h,"updated")},v)},Se=(u,m,h,v,_,k,R)=>{for(let E=0;E<m.length;E++){const P=u[E],w=m[E],$=P.el&&(P.type===Ye||!on(P,w)||P.shapeFlag&70)?d(P.el):h;S(P,w,$,null,v,_,k,R,!0)}},ot=(u,m,h,v,_,k,R)=>{if(h!==v){if(h!==ie)for(const E in h)!Jn(E)&&!(E in v)&&i(u,E,h[E],null,R,m.children,_,k,I);for(const E in v){if(Jn(E))continue;const P=v[E],w=h[E];P!==w&&E!=="value"&&i(u,E,w,P,R,m.children,_,k,I)}"value"in v&&i(u,"value",h.value,v.value)}},He=(u,m,h,v,_,k,R,E,P)=>{const w=m.el=u?u.el:s(""),$=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:j,slotScopeIds:B}=m;B&&(E=E?E.concat(B):B),u==null?(r(w,h,v),r($,h,v),Ae(m.children,h,$,_,k,R,E,P)):N>0&&N&64&&j&&u.dynamicChildren?(Se(u.dynamicChildren,j,h,_,k,R,E),(m.key!=null||_&&m===_.subTree)&&ms(u,m,!0)):Q(u,m,h,$,_,k,R,E,P)},Nt=(u,m,h,v,_,k,R,E,P)=>{m.slotScopeIds=E,u==null?m.shapeFlag&512?_.ctx.activate(m,h,v,R,P):bt(m,h,v,_,k,R,P):rn(u,m,P)},bt=(u,m,h,v,_,k,R)=>{const E=u.component=ac(u,v,_);if(ns(u)&&(E.ctx.renderer=q),ic(E),E.asyncDep){if(_&&_.registerDep(E,ue),!u.el){const P=E.subTree=z(wn);b(null,P,m,h)}return}ue(E,u,m,h,_,k,R)},rn=(u,m,h)=>{const v=m.component=u.component;if(mf(u,m,h))if(v.asyncDep&&!v.asyncResolved){Z(v,m,h);return}else v.next=m,of(v.update),v.update();else m.el=u.el,v.vnode=m},ue=(u,m,h,v,_,k,R)=>{const E=()=>{if(u.isMounted){let{next:$,bu:N,u:j,parent:B,vnode:K}=u,ee=$,J;xt(u,!1),$?($.el=K.el,Z(u,$,R)):$=K,N&&Nr(N),(J=$.props&&$.props.onVnodeBeforeUpdate)&&We(J,B,$,K),xt(u,!0);const de=Mr(u),Te=u.subTree;u.subTree=de,S(Te,de,d(Te.el),C(Te),u,_,k),$.el=de.el,ee===null&&pf(u,de.el),j&&Ee(j,_),(J=$.props&&$.props.onVnodeUpdated)&&Ee(()=>We(J,B,$,K),_)}else{let $;const{el:N,props:j}=m,{bm:B,m:K,parent:ee}=u,J=er(m);if(xt(u,!1),B&&Nr(B),!J&&($=j&&j.onVnodeBeforeMount)&&We($,ee,m),xt(u,!0),N&&W){const de=()=>{u.subTree=Mr(u),W(N,u.subTree,u,_,null)};J?m.type.__asyncLoader().then(()=>!u.isUnmounted&&de()):de()}else{const de=u.subTree=Mr(u);S(null,de,h,v,u,_,k),m.el=de.el}if(K&&Ee(K,_),!J&&($=j&&j.onVnodeMounted)){const de=m;Ee(()=>We($,ee,de),_)}(m.shapeFlag&256||ee&&er(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&Ee(u.a,_),u.isMounted=!0,m=h=v=null}},P=u.effect=new Pa(E,()=>Ma(w),u.scope),w=u.update=()=>P.run();w.id=u.uid,xt(u,!0),w()},Z=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,zf(u,m.props,v,h),Uf(u,m.children,h),Zt(),pi(),en()},Q=(u,m,h,v,_,k,R,E,P=!1)=>{const w=u&&u.children,$=u?u.shapeFlag:0,N=m.children,{patchFlag:j,shapeFlag:B}=m;if(j>0){if(j&128){yt(w,N,h,v,_,k,R,E,P);return}else if(j&256){Re(w,N,h,v,_,k,R,E,P);return}}B&8?($&16&&I(w,_,k),N!==w&&f(h,N)):$&16?B&16?yt(w,N,h,v,_,k,R,E,P):I(w,_,k,!0):($&8&&f(h,""),B&16&&Ae(N,h,v,_,k,R,E,P))},Re=(u,m,h,v,_,k,R,E,P)=>{u=u||Bt,m=m||Bt;const w=u.length,$=m.length,N=Math.min(w,$);let j;for(j=0;j<N;j++){const B=m[j]=P?ct(m[j]):Ke(m[j]);S(u[j],B,h,null,_,k,R,E,P)}w>$?I(u,_,k,!0,!1,N):Ae(m,h,v,_,k,R,E,P,N)},yt=(u,m,h,v,_,k,R,E,P)=>{let w=0;const $=m.length;let N=u.length-1,j=$-1;for(;w<=N&&w<=j;){const B=u[w],K=m[w]=P?ct(m[w]):Ke(m[w]);if(on(B,K))S(B,K,h,null,_,k,R,E,P);else break;w++}for(;w<=N&&w<=j;){const B=u[N],K=m[j]=P?ct(m[j]):Ke(m[j]);if(on(B,K))S(B,K,h,null,_,k,R,E,P);else break;N--,j--}if(w>N){if(w<=j){const B=j+1,K=B<$?m[B].el:v;for(;w<=j;)S(null,m[w]=P?ct(m[w]):Ke(m[w]),h,K,_,k,R,E,P),w++}}else if(w>j)for(;w<=N;)xe(u[w],_,k,!0),w++;else{const B=w,K=w,ee=new Map;for(w=K;w<=j;w++){const Oe=m[w]=P?ct(m[w]):Ke(m[w]);Oe.key!=null&&ee.set(Oe.key,w)}let J,de=0;const Te=j-K+1;let Ft=!1,ri=0;const an=new Array(Te);for(w=0;w<Te;w++)an[w]=0;for(w=B;w<=N;w++){const Oe=u[w];if(de>=Te){xe(Oe,_,k,!0);continue}let Ue;if(Oe.key!=null)Ue=ee.get(Oe.key);else for(J=K;J<=j;J++)if(an[J-K]===0&&on(Oe,m[J])){Ue=J;break}Ue===void 0?xe(Oe,_,k,!0):(an[Ue-K]=w+1,Ue>=ri?ri=Ue:Ft=!0,S(Oe,m[Ue],h,null,_,k,R,E,P),de++)}const ai=Ft?Xf(an):Bt;for(J=ai.length-1,w=Te-1;w>=0;w--){const Oe=K+w,Ue=m[Oe],ii=Oe+1<$?m[Oe+1].el:v;an[w]===0?S(null,Ue,h,ii,_,k,R,E,P):Ft&&(J<0||w!==ai[J]?Ie(Ue,h,ii,2):J--)}}},Ie=(u,m,h,v,_=null)=>{const{el:k,type:R,transition:E,children:P,shapeFlag:w}=u;if(w&6){Ie(u.component.subTree,m,h,v);return}if(w&128){u.suspense.move(m,h,v);return}if(w&64){R.move(u,m,h,q);return}if(R===Ye){r(k,m,h);for(let N=0;N<P.length;N++)Ie(P[N],m,h,v);r(u.anchor,m,h);return}if(R===Lr){O(u,m,h);return}if(v!==2&&w&1&&E)if(v===0)E.beforeEnter(k),r(k,m,h),Ee(()=>E.enter(k),_);else{const{leave:N,delayLeave:j,afterLeave:B}=E,K=()=>r(k,m,h),ee=()=>{N(k,()=>{K(),B&&B()})};j?j(k,K,ee):ee()}else r(k,m,h)},xe=(u,m,h,v=!1,_=!1)=>{const{type:k,props:R,ref:E,children:P,dynamicChildren:w,shapeFlag:$,patchFlag:N,dirs:j}=u;if(E!=null&&ta(E,null,h,u,!0),$&256){m.ctx.deactivate(u);return}const B=$&1&&j,K=!er(u);let ee;if(K&&(ee=R&&R.onVnodeBeforeUnmount)&&We(ee,m,u),$&6)y(u.component,h,v);else{if($&128){u.suspense.unmount(h,v);return}B&&_t(u,null,m,"beforeUnmount"),$&64?u.type.remove(u,m,h,_,q,v):w&&(k!==Ye||N>0&&N&64)?I(w,m,h,!1,!0):(k===Ye&&N&384||!_&&$&16)&&I(P,m,h),v&&Mt(u)}(K&&(ee=R&&R.onVnodeUnmounted)||B)&&Ee(()=>{ee&&We(ee,m,u),B&&_t(u,null,m,"unmounted")},h)},Mt=u=>{const{type:m,el:h,anchor:v,transition:_}=u;if(m===Ye){Fn(h,v);return}if(m===Lr){D(u);return}const k=()=>{a(h),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:E}=_,P=()=>R(h,k);E?E(u.el,k,P):P()}else k()},Fn=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},y=(u,m,h)=>{const{bum:v,scope:_,update:k,subTree:R,um:E}=u;v&&Nr(v),_.stop(),k&&(k.active=!1,xe(R,u,m,h)),E&&Ee(E,m),Ee(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},I=(u,m,h,v=!1,_=!1,k=0)=>{for(let R=k;R<u.length;R++)xe(u[R],m,h,v,_)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),L=(u,m,h)=>{u==null?m._vnode&&xe(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,h),pi(),Go(),m._vnode=u},q={p:S,um:xe,m:Ie,r:Mt,mt:bt,mc:Ae,pc:Q,pbc:Se,n:C,o:e};let oe,W;return t&&([oe,W]=t(q)),{render:L,hydrate:oe,createApp:Yf(L,oe)}}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ms(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ct(a[i]),s.el=o.el),n||ms(o,s)),s.type===Er&&(s.el=o.el)}}function Xf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vf=e=>e.__isTeleport,Ye=Symbol(void 0),Er=Symbol(void 0),wn=Symbol(void 0),Lr=Symbol(void 0),dn=[];let $e=null;function Tt(e=!1){dn.push($e=e?null:[])}function Gf(){dn.pop(),$e=dn[dn.length-1]||null}let En=1;function Ei(e){En+=e}function ps(e){return e.dynamicChildren=En>0?$e||Bt:null,Gf(),En>0&&$e&&$e.push(e),e}function tn(e,t,n,r,a,i){return ps(Pe(e,t,n,r,a,i,!0))}function Qf(e,t,n,r,a){return ps(z(e,t,n,r,a,!0))}function na(e){return e?e.__v_isVNode===!0:!1}function on(e,t){return e.type===t.type&&e.key===t.key}const kr="__vInternal",hs=({key:e})=>e??null,tr=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||ve(e)||U(e)?{i:Le,r:e,k:t,f:!!n}:e:null;function Pe(e,t=null,n=null,r=0,a=null,i=e===Ye?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hs(t),ref:t&&tr(t),scopeId:Zo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Le};return s?($a(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),En>0&&!o&&$e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&$e.push(l),l}const z=Jf;function Jf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===If)&&(e=wn),na(e)){const s=qt(e,t,!0);return n&&$a(s,n),En>0&&!i&&$e&&(s.shapeFlag&6?$e[$e.indexOf(e)]=s:$e.push(s)),s.patchFlag|=-2,s}if(cc(e)&&(e=e.__vccOpts),t){t=Zf(t);let{class:s,style:l}=t;s&&!he(s)&&(t.class=xa(s)),le(l)&&(zo(l)&&!H(l)&&(l=_e({},l)),t.style=pr(l))}const o=he(e)?1:hf(e)?128:Vf(e)?64:le(e)?4:U(e)?2:0;return Pe(e,t,n,r,a,o,i,!0)}function Zf(e){return e?zo(e)||kr in e?_e({},e):e:null}function qt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?tc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&hs(s),ref:t&&t.ref?n&&a?H(a)?a.concat(tr(t)):[a,tr(t)]:tr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ec(e=" ",t=0){return z(Er,null,e,t)}function Ke(e){return e==null||typeof e=="boolean"?z(wn):H(e)?z(Ye,null,e.slice()):typeof e=="object"?ct(e):z(Er,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function $a(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),$a(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(kr in t)?t._ctx=Le:a===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[ec(t)]):n=8);e.children=t,e.shapeFlag|=n}function tc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=xa([t.class,r.class]));else if(a==="style")t.style=pr([t.style,r.style]);else if(hr(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function We(e,t,n,r=null){ze(e,t,7,[n,r])}const nc=ds();let rc=0;function ac(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||nc,i={uid:rc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new xl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ls(r,a),emitsOptions:Jo(r,a),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ff.bind(null,i),e.ce&&e.ce(i),i}let me=null;const Xt=e=>{me=e,e.scope.on()},St=()=>{me&&me.scope.off(),me=null};function gs(e){return e.vnode.shapeFlag&4}let kn=!1;function ic(e,t=!1){kn=t;const{props:n,children:r}=e.vnode,a=gs(e);Df(e,n,a,t),Hf(e,r);const i=a?oc(e,t):void 0;return kn=!1,i}function oc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Bo(new Proxy(e.ctx,Nf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?lc(e):null;Xt(e),Zt();const i=mt(r,e,0,[e.props,a]);if(en(),St(),Oo(i)){if(i.then(St,St),t)return i.then(o=>{ki(e,o,t)}).catch(o=>{_r(o,e,0)});e.asyncDep=i}else ki(e,i,t)}else vs(e,t)}function ki(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Yo(t)),vs(e,n)}let Ai;function vs(e,t,n){const r=e.type;if(!e.render){if(!t&&Ai&&!r.render){const a=r.template||Fa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=_e(_e({isCustomElement:i,delimiters:s},o),l);r.render=Ai(a,c)}}e.render=r.render||De}Xt(e),Zt(),Mf(e),en(),St()}function sc(e){return new Proxy(e.attrs,{get(t,n){return ke(e,"get","$attrs"),t[n]}})}function lc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=sc(e))},slots:e.slots,emit:e.emit,expose:t}}function ja(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yo(Bo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in un)return un[n](e)},has(t,n){return n in t||n in un}}))}function fc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function cc(e){return U(e)&&"__vccOpts"in e}const se=(e,t)=>nf(e,t,kn);function Ar(e,t,n){const r=arguments.length;return r===2?le(t)&&!H(t)?na(t)?z(e,null,[t]):z(e,t):z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&na(n)&&(n=[n]),z(e,t,n))}const uc=Symbol(""),dc=()=>Je(uc),mc="3.2.47",pc="http://www.w3.org/2000/svg",kt=typeof document<"u"?document:null,Oi=kt&&kt.createElement("template"),hc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?kt.createElementNS(pc,e):kt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>kt.createTextNode(e),createComment:e=>kt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Oi.innerHTML=r?`<svg>${e}</svg>`:e;const s=Oi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function gc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function vc(e,t,n){const r=e.style,a=he(n);if(n&&!a){if(t&&!he(t))for(const i in t)n[i]==null&&ra(r,i,"");for(const i in n)ra(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Pi=/\s*!important$/;function ra(e,t,n){if(H(n))n.forEach(r=>ra(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=bc(e,t);Pi.test(n)?e.setProperty(Jt(r),n.replace(Pi,""),"important"):e[r]=n}}const Ci=["Webkit","Moz","ms"],$r={};function bc(e,t){const n=$r[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return $r[t]=r;r=br(r);for(let a=0;a<Ci.length;a++){const i=Ci[a]+r;if(i in e)return $r[t]=i}return t}const Si="http://www.w3.org/1999/xlink";function yc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Si,t.slice(6,t.length)):e.setAttributeNS(Si,t,n);else{const i=dl(t);n==null||i&&!Eo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function _c(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Eo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function xc(e,t,n,r){e.addEventListener(t,n,r)}function wc(e,t,n,r){e.removeEventListener(t,n,r)}function Ec(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=kc(t);if(r){const c=i[t]=Pc(r,a);xc(e,s,c,l)}else o&&(wc(e,s,o,l),i[t]=void 0)}}const Ri=/(?:Once|Passive|Capture)$/;function kc(e){let t;if(Ri.test(e)){t={};let r;for(;r=e.match(Ri);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Jt(e.slice(2)),t]}let jr=0;const Ac=Promise.resolve(),Oc=()=>jr||(Ac.then(()=>jr=0),jr=Date.now());function Pc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(Cc(r,n.value),t,5,[r])};return n.value=e,n.attached=Oc(),n}function Cc(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ii=/^on[a-z]/,Sc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?gc(e,r,a):t==="style"?vc(e,n,r):hr(t)?wa(t)||Ec(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rc(e,t,r,a))?_c(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),yc(e,t,r,a))};function Rc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ii.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ii.test(t)&&he(n)?!1:t in e}const Ic=_e({patchProp:Sc},hc);let Ti;function Tc(){return Ti||(Ti=Kf(Ic))}const Nc=(...e)=>{const t=Tc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Mc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Mc(e){return he(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const $t=typeof window<"u";function Fc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const G=Object.assign;function Dr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Be(a)?a.map(e):e(a)}return n}const mn=()=>{},Be=Array.isArray,Lc=/\/$/,$c=e=>e.replace(Lc,"");function zr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Bc(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function jc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ni(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Dc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Vt(t.matched[r],n.matched[a])&&bs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function bs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!zc(e[n],t[n]))return!1;return!0}function zc(e,t){return Be(e)?Mi(e,t):Be(t)?Mi(t,e):e===t}function Mi(e,t){return Be(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Bc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var An;(function(e){e.pop="pop",e.push="push"})(An||(An={}));var pn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(pn||(pn={}));function Hc(e){if(!e)if($t){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),$c(e)}const Uc=/^[^#]+#/;function Wc(e,t){return e.replace(Uc,"#")+t}function Yc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Or=()=>({left:window.pageXOffset,top:window.pageYOffset});function Kc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Yc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Fi(e,t){return(history.state?history.state.position-t:-1)+e}const aa=new Map;function qc(e,t){aa.set(e,t)}function Xc(e){const t=aa.get(e);return aa.delete(e),t}let Vc=()=>location.protocol+"//"+location.host;function ys(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Ni(l,"")}return Ni(n,e)+r+a}function Gc(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=ys(e,location),A=n.value,S=t.value;let F=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}F=S?p.position-S.position:0}else r(g);a.forEach(b=>{b(n.value,A,{delta:F,type:An.pop,direction:F?F>0?pn.forward:pn.back:pn.unknown})})};function l(){o=n.value}function c(p){a.push(p);const g=()=>{const A=a.indexOf(p);A>-1&&a.splice(A,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(G({},p.state,{scroll:Or()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function Li(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Or():null}}function Qc(e){const{history:t,location:n}=window,r={value:ys(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Vc()+e+l;try{t[f?"replaceState":"pushState"](c,"",p),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(l,c){const f=G({},t.state,Li(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=G({},a.value,t.state,{forward:l,scroll:Or()});i(f.current,f,!0);const d=G({},Li(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Jc(e){e=Hc(e);const t=Qc(e),n=Gc(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=G({location:"",base:e,go:r,createHref:Wc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Zc(e){return typeof e=="string"||e&&typeof e=="object"}function _s(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xs=Symbol("");var $i;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})($i||($i={}));function Gt(e,t){return G(new Error,{type:e,[xs]:!0},t)}function Ge(e,t){return e instanceof Error&&xs in e&&(t==null||!!(e.type&t))}const ji="[^/]+?",eu={sensitive:!1,strict:!1,start:!0,end:!0},tu=/[.+*?^${}()[\]/\\]/g;function nu(e,t){const n=G({},eu,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(tu,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:S,optional:F,regexp:b}=p;i.push({name:A,repeatable:S,optional:F});const x=b||ji;if(x!==ji){g+=10;try{new RegExp(`(${x})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${A}" (${x}): `+D.message)}}let O=S?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(O=F&&c.length<2?`(?:/${O})`:"/"+O),F&&(O+="?"),a+=O,g+=20,F&&(g+=-8),S&&(g+=-20),x===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",A=i[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const p of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:F}=g,b=A in c?c[A]:"";if(Be(b)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const x=Be(b)?b.join("/"):b;if(!x)if(F)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function ru(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function au(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=ru(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Di(r))return 1;if(Di(a))return-1}return a.length-r.length}function Di(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const iu={type:0,value:""},ou=/[a-zA-Z0-9_]/;function su(e){if(!e)return[[]];if(e==="/")return[[iu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:ou.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function lu(e,t,n){const r=nu(su(e.path),n),a=G(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function fu(e,t){const n=[],r=new Map;t=Hi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,p){const g=!p,A=cu(f);A.aliasOf=p&&p.record;const S=Hi(t,f),F=[A];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of O)F.push(G({},A,{components:p?p.record.components:A.components,path:D,aliasOf:p?p.record:A}))}let b,x;for(const O of F){const{path:D}=O;if(d&&D[0]!=="/"){const Y=d.record.path,re=Y[Y.length-1]==="/"?"":"/";O.path=d.record.path+(D&&re+D)}if(b=lu(O,d,S),p?p.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),g&&f.name&&!Bi(b)&&o(f.name)),A.children){const Y=A.children;for(let re=0;re<Y.length;re++)i(Y[re],b,p&&p.children[re])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return x?()=>{o(x)}:mn}function o(f){if(_s(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&au(f,n[d])>=0&&(f.record.path!==n[d].record.path||!ws(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!Bi(f)&&r.set(f.record.name,f)}function c(f,d){let p,g={},A,S;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Gt(1,{location:f});S=p.record.name,g=G(zi(d.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&zi(f.params,p.keys.map(x=>x.name))),A=p.stringify(g)}else if("path"in f)A=f.path,p=n.find(x=>x.re.test(A)),p&&(g=p.parse(A),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!p)throw Gt(1,{location:f,currentLocation:d});S=p.record.name,g=G({},d.params,f.params),A=p.stringify(g)}const F=[];let b=p;for(;b;)F.unshift(b.record),b=b.parent;return{name:S,path:A,params:g,matched:F,meta:du(F)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function zi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function cu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:uu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function uu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Bi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function du(e){return e.reduce((t,n)=>G(t,n.meta),{})}function Hi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ws(e,t){return t.children.some(n=>n===e||ws(e,n))}const Es=/#/g,mu=/&/g,pu=/\//g,hu=/=/g,gu=/\?/g,ks=/\+/g,vu=/%5B/g,bu=/%5D/g,As=/%5E/g,yu=/%60/g,Os=/%7B/g,_u=/%7C/g,Ps=/%7D/g,xu=/%20/g;function Da(e){return encodeURI(""+e).replace(_u,"|").replace(vu,"[").replace(bu,"]")}function wu(e){return Da(e).replace(Os,"{").replace(Ps,"}").replace(As,"^")}function ia(e){return Da(e).replace(ks,"%2B").replace(xu,"+").replace(Es,"%23").replace(mu,"%26").replace(yu,"`").replace(Os,"{").replace(Ps,"}").replace(As,"^")}function Eu(e){return ia(e).replace(hu,"%3D")}function ku(e){return Da(e).replace(Es,"%23").replace(gu,"%3F")}function Au(e){return e==null?"":ku(e).replace(pu,"%2F")}function lr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ou(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(ks," "),o=i.indexOf("="),s=lr(o<0?i:i.slice(0,o)),l=o<0?null:lr(i.slice(o+1));if(s in t){let c=t[s];Be(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Ui(e){let t="";for(let n in e){const r=e[n];if(n=Eu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Be(r)?r.map(i=>i&&ia(i)):[r&&ia(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Pu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Be(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Cu=Symbol(""),Wi=Symbol(""),za=Symbol(""),Cs=Symbol(""),oa=Symbol("");function sn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ut(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Gt(4,{from:n,to:t})):d instanceof Error?s(d):Zc(d)?s(Gt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Br(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Su(s)){const c=(s.__vccOpts||s)[t];c&&a.push(ut(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Fc(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[t];return p&&ut(p,n,r,i,o)()}))}}return a}function Su(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yi(e){const t=Je(za),n=Je(Cs),r=se(()=>t.resolve(Ct(e.to))),a=se(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Vt.bind(null,f));if(p>-1)return p;const g=Ki(l[c-2]);return c>1&&Ki(f)===g&&d[d.length-1].path!==g?d.findIndex(Vt.bind(null,l[c-2])):p}),i=se(()=>a.value>-1&&Nu(n.params,r.value.params)),o=se(()=>a.value>-1&&a.value===n.matched.length-1&&bs(n.params,r.value.params));function s(l={}){return Tu(l)?t[Ct(e.replace)?"replace":"push"](Ct(e.to)).catch(mn):Promise.resolve()}return{route:r,href:se(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Ru=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yi,setup(e,{slots:t}){const n=In(Yi(e)),{options:r}=Je(za),a=se(()=>({[qi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ar("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Iu=Ru;function Tu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Nu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Be(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Ki(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qi=(e,t,n)=>e??t??n,Mu=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Je(oa),a=se(()=>e.route||r.value),i=Je(Wi,0),o=se(()=>{let c=Ct(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=se(()=>a.value.matched[o.value]);Zn(Wi,se(()=>o.value+1)),Zn(Cu,s),Zn(oa,a);const l=Ql();return cn(()=>[l.value,s.value,e.name],([c,f,d],[p,g,A])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!Vt(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=s.value,p=d&&d.components[f];if(!p)return Xi(n.default,{Component:p,route:c});const g=d.props[f],A=g?g===!0?c.params:typeof g=="function"?g(c):g:null,F=Ar(p,G({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Xi(n.default,{Component:F,route:c})||F}}});function Xi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ss=Mu;function Fu(e){const t=fu(e.routes,e),n=e.parseQuery||Ou,r=e.stringifyQuery||Ui,a=e.history,i=sn(),o=sn(),s=sn(),l=Jl(lt);let c=lt;$t&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Dr.bind(null,y=>""+y),d=Dr.bind(null,Au),p=Dr.bind(null,lr);function g(y,I){let C,L;return _s(y)?(C=t.getRecordMatcher(y),L=I):L=y,t.addRoute(L,C)}function A(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function S(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function b(y,I){if(I=G({},I||l.value),typeof y=="string"){const u=zr(n,y,I.path),m=t.resolve({path:u.path},I),h=a.createHref(u.fullPath);return G(u,m,{params:p(m.params),hash:lr(u.hash),redirectedFrom:void 0,href:h})}let C;if("path"in y)C=G({},y,{path:zr(n,y.path,I.path).path});else{const u=G({},y.params);for(const m in u)u[m]==null&&delete u[m];C=G({},y,{params:d(y.params)}),I.params=d(I.params)}const L=t.resolve(C,I),q=y.hash||"";L.params=f(p(L.params));const oe=jc(r,G({},y,{hash:wu(q),path:L.path})),W=a.createHref(oe);return G({fullPath:oe,hash:q,query:r===Ui?Pu(y.query):y.query||{}},L,{redirectedFrom:void 0,href:W})}function x(y){return typeof y=="string"?zr(n,y,l.value.path):G({},y)}function O(y,I){if(c!==y)return Gt(8,{from:I,to:y})}function D(y){return fe(y)}function Y(y){return D(G(x(y),{replace:!0}))}function re(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:C}=I;let L=typeof C=="function"?C(y):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),G({query:y.query,hash:y.hash,params:"path"in L?{}:y.params},L)}}function fe(y,I){const C=c=b(y),L=l.value,q=y.state,oe=y.force,W=y.replace===!0,u=re(C);if(u)return fe(G(x(u),{state:typeof u=="object"?G({},q,u.state):q,force:oe,replace:W}),I||C);const m=C;m.redirectedFrom=I;let h;return!oe&&Dc(r,L,C)&&(h=Gt(16,{to:m,from:L}),yt(L,L,!0,!1)),(h?Promise.resolve(h):be(m,L)).catch(v=>Ge(v)?Ge(v,2)?v:Re(v):Z(v,m,L)).then(v=>{if(v){if(Ge(v,2))return fe(G({replace:W},x(v.to),{state:typeof v.to=="object"?G({},q,v.to.state):q,force:oe}),I||m)}else v=ot(m,L,!0,W,q);return Se(m,L,v),v})}function Ae(y,I){const C=O(y,I);return C?Promise.reject(C):Promise.resolve()}function be(y,I){let C;const[L,q,oe]=Lu(y,I);C=Br(L.reverse(),"beforeRouteLeave",y,I);for(const u of L)u.leaveGuards.forEach(m=>{C.push(ut(m,y,I))});const W=Ae.bind(null,y,I);return C.push(W),Lt(C).then(()=>{C=[];for(const u of i.list())C.push(ut(u,y,I));return C.push(W),Lt(C)}).then(()=>{C=Br(q,"beforeRouteUpdate",y,I);for(const u of q)u.updateGuards.forEach(m=>{C.push(ut(m,y,I))});return C.push(W),Lt(C)}).then(()=>{C=[];for(const u of y.matched)if(u.beforeEnter&&!I.matched.includes(u))if(Be(u.beforeEnter))for(const m of u.beforeEnter)C.push(ut(m,y,I));else C.push(ut(u.beforeEnter,y,I));return C.push(W),Lt(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=Br(oe,"beforeRouteEnter",y,I),C.push(W),Lt(C))).then(()=>{C=[];for(const u of o.list())C.push(ut(u,y,I));return C.push(W),Lt(C)}).catch(u=>Ge(u,8)?u:Promise.reject(u))}function Se(y,I,C){for(const L of s.list())L(y,I,C)}function ot(y,I,C,L,q){const oe=O(y,I);if(oe)return oe;const W=I===lt,u=$t?history.state:{};C&&(L||W?a.replace(y.fullPath,G({scroll:W&&u&&u.scroll},q)):a.push(y.fullPath,q)),l.value=y,yt(y,I,C,W),Re()}let He;function Nt(){He||(He=a.listen((y,I,C)=>{if(!Fn.listening)return;const L=b(y),q=re(L);if(q){fe(G(q,{replace:!0}),L).catch(mn);return}c=L;const oe=l.value;$t&&qc(Fi(oe.fullPath,C.delta),Or()),be(L,oe).catch(W=>Ge(W,12)?W:Ge(W,2)?(fe(W.to,L).then(u=>{Ge(u,20)&&!C.delta&&C.type===An.pop&&a.go(-1,!1)}).catch(mn),Promise.reject()):(C.delta&&a.go(-C.delta,!1),Z(W,L,oe))).then(W=>{W=W||ot(L,oe,!1),W&&(C.delta&&!Ge(W,8)?a.go(-C.delta,!1):C.type===An.pop&&Ge(W,20)&&a.go(-1,!1)),Se(L,oe,W)}).catch(mn)}))}let bt=sn(),rn=sn(),ue;function Z(y,I,C){Re(y);const L=rn.list();return L.length?L.forEach(q=>q(y,I,C)):console.error(y),Promise.reject(y)}function Q(){return ue&&l.value!==lt?Promise.resolve():new Promise((y,I)=>{bt.add([y,I])})}function Re(y){return ue||(ue=!y,Nt(),bt.list().forEach(([I,C])=>y?C(y):I()),bt.reset()),y}function yt(y,I,C,L){const{scrollBehavior:q}=e;if(!$t||!q)return Promise.resolve();const oe=!C&&Xc(Fi(y.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return Xo().then(()=>q(y,I,oe)).then(W=>W&&Kc(W)).catch(W=>Z(W,y,I))}const Ie=y=>a.go(y);let xe;const Mt=new Set,Fn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:F,getRoutes:S,resolve:b,options:e,push:D,replace:Y,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:rn.add,isReady:Q,install(y){const I=this;y.component("RouterLink",Iu),y.component("RouterView",Ss),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ct(l)}),$t&&!xe&&l.value===lt&&(xe=!0,D(a.location).catch(q=>{}));const C={};for(const q in lt)C[q]=se(()=>l.value[q]);y.provide(za,I),y.provide(Cs,In(C)),y.provide(oa,l);const L=y.unmount;Mt.add(y),y.unmount=function(){Mt.delete(y),Mt.size<1&&(c=lt,He&&He(),He=null,l.value=lt,xe=!1,ue=!1),L()}}};return Fn}function Lt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Lu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Vt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Vt(c,l))||a.push(l))}return[n,r,a]}const $u=rt({__name:"App",setup(e){return(t,n)=>(Tt(),Qf(Ct(Ss)))}});const Ba=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},ju={},Du={class:"title-container"},zu=Pe("div",{class:"title"}," Diet Draft ",-1),Bu=[zu];function Hu(e,t){return Tt(),tn("div",Du,Bu)}const Uu=Ba(ju,[["render",Hu]]),Wu={props:{value:{type:Number,default:0},setpoint:{type:Number,default:1},unit:{type:String,default:""},text:{type:String,default:""}},computed:{barWidth(){return 100*this.value/this.setpoint},barColor(){return this.barWidth<80?"blue":"red"}}};const Yu={class:"quantity-bar-container"},Ku={class:"quantity-bar-outer"};function qu(e,t,n,r,a,i){return Tt(),tn("div",Yu,[Pe("span",null,Ir(n.text),1),Pe("div",Ku,[Pe("div",{class:"quantity-bar-inner",style:pr({width:i.barWidth+"%",backgroundColor:i.barColor})},null,4)]),Pe("span",null,Ir(n.value)+Ir(n.unit),1)])}const Hn=Ba(Wu,[["render",qu]]),Xu={class:"info-panel-container"},Vu=Pe("div",{class:"flex-fill"},null,-1),Gu=Pe("div",{class:"flex-fill"},null,-1),Qu=rt({__name:"InfoPanel",setup(e){return(t,n)=>{const r=Rf("font-awesome-icon");return Tt(),tn("div",Xu,[z(r,{icon:"fa-solid fa-chevron-left"}),Vu,z(Hn,{text:"Protein",value:120,unit:"g",setpoint:240}),z(Hn,{text:"Fat",value:120,unit:"g",setpoint:240}),z(Hn,{text:"Carbs",value:120,unit:"g",setpoint:240}),z(Hn,{text:"Calories",value:3250,unit:"",setpoint:4e3}),Gu,z(r,{icon:"fa-solid fa-chevron-right"})])}}});const Ju={},Zu={class:"food-item"},ed=Pe("div",{class:"icon"}," 🌯 ",-1),td=Pe("div",{class:"name"}," Wrap ",-1),nd=[ed,td];function rd(e,t){return Tt(),tn("div",Zu,nd)}const ae=Ba(Ju,[["render",rd]]),ad={class:"day-container"},id=rt({__name:"Day",setup(e){return(t,n)=>(Tt(),tn("div",ad,[z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae),z(ae)]))}});const od={class:"main-container"},sd=Pe("div",{class:"vertical-separation"},null,-1),ld=rt({__name:"MainView",setup(e){return(t,n)=>(Tt(),tn(Ye,null,[z(Uu),Pe("div",od,[z(Qu),sd,z(id)])],64))}});const fd=Fu({history:Jc("/"),routes:[{path:"/",name:"main",component:ld}]});function Vi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vi(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function cd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ud(e,t,n){return t&&Gi(e.prototype,t),n&&Gi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ha(e,t){return md(e)||hd(e,t)||Rs(e,t)||vd()}function Tn(e){return dd(e)||pd(e)||Rs(e)||gd()}function dd(e){if(Array.isArray(e))return sa(e)}function md(e){if(Array.isArray(e))return e}function pd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Rs(e,t){if(e){if(typeof e=="string")return sa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sa(e,t)}}function sa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qi=function(){},Ua={},Is={},Ts=null,Ns={mark:Qi,measure:Qi};try{typeof window<"u"&&(Ua=window),typeof document<"u"&&(Is=document),typeof MutationObserver<"u"&&(Ts=MutationObserver),typeof performance<"u"&&(Ns=performance)}catch{}var bd=Ua.navigator||{},Ji=bd.userAgent,Zi=Ji===void 0?"":Ji,ht=Ua,ne=Is,eo=Ts,Un=Ns;ht.document;var it=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",Ms=~Zi.indexOf("MSIE")||~Zi.indexOf("Trident/"),Wn,Yn,Kn,qn,Xn,et="___FONT_AWESOME___",la=16,Fs="fa",Ls="svg-inline--fa",Rt="data-fa-i2svg",fa="data-fa-pseudo-element",yd="data-fa-pseudo-element-pending",Wa="data-prefix",Ya="data-icon",to="fontawesome-i2svg",_d="async",xd=["HTML","HEAD","STYLE","SCRIPT"],$s=function(){try{return!0}catch{return!1}}(),te="classic",ce="sharp",Ka=[te,ce];function Nn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var On=Nn((Wn={},pe(Wn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),pe(Wn,ce,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Wn)),Pn=Nn((Yn={},pe(Yn,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),pe(Yn,ce,{solid:"fass",regular:"fasr"}),Yn)),Cn=Nn((Kn={},pe(Kn,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),pe(Kn,ce,{fass:"fa-solid",fasr:"fa-regular"}),Kn)),wd=Nn((qn={},pe(qn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),pe(qn,ce,{"fa-solid":"fass","fa-regular":"fasr"}),qn)),Ed=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,js="fa-layers-text",kd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ad=Nn((Xn={},pe(Xn,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),pe(Xn,ce,{900:"fass",400:"fasr"}),Xn)),Ds=[1,2,3,4,5,6,7,8,9,10],Od=Ds.concat([11,12,13,14,15,16,17,18,19,20]),Pd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sn=new Set;Object.keys(Pn[te]).map(Sn.add.bind(Sn));Object.keys(Pn[ce]).map(Sn.add.bind(Sn));var Cd=[].concat(Ka,Tn(Sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(Ds.map(function(e){return"".concat(e,"x")})).concat(Od.map(function(e){return"w-".concat(e)})),hn=ht.FontAwesomeConfig||{};function Sd(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Rd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var Id=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Id.forEach(function(e){var t=Ha(e,2),n=t[0],r=t[1],a=Rd(Sd(n));a!=null&&(hn[r]=a)})}var zs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Fs,replacementClass:Ls,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};hn.familyPrefix&&(hn.cssPrefix=hn.familyPrefix);var Qt=T(T({},zs),hn);Qt.autoReplaceSvg||(Qt.observeMutations=!1);var M={};Object.keys(zs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Qt[e]=n,gn.forEach(function(r){return r(M)})},get:function(){return Qt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Qt.cssPrefix=t,gn.forEach(function(n){return n(M)})},get:function(){return Qt.cssPrefix}});ht.FontAwesomeConfig=M;var gn=[];function Td(e){return gn.push(e),function(){gn.splice(gn.indexOf(e),1)}}var ft=la,Xe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nd(e){if(!(!e||!it)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ne.head.insertBefore(t,r),e}}var Md="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rn(){for(var e=12,t="";e-- >0;)t+=Md[Math.random()*62|0];return t}function nn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function qa(e){return e.classList?nn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Bs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Bs(e[n]),'" ')},"").trim()}function Pr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Xa(e){return e.size!==Xe.size||e.x!==Xe.x||e.y!==Xe.y||e.rotate!==Xe.rotate||e.flipX||e.flipY}function Ld(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function $d(e){var t=e.transform,n=e.width,r=n===void 0?la:n,a=e.height,i=a===void 0?la:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ms?l+="translate(".concat(t.x/ft-r/2,"em, ").concat(t.y/ft-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ft,"em), calc(-50% + ").concat(t.y/ft,"em)) "):l+="translate(".concat(t.x/ft,"em, ").concat(t.y/ft,"em) "),l+="scale(".concat(t.size/ft*(t.flipX?-1:1),", ").concat(t.size/ft*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var jd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Hs(){var e=Fs,t=Ls,n=M.cssPrefix,r=M.replacementClass,a=jd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var no=!1;function Hr(){M.autoAddCss&&!no&&(Nd(Hs()),no=!0)}var Dd={mixout:function(){return{dom:{css:Hs,insertCss:Hr}}},hooks:function(){return{beforeDOMElementCreation:function(){Hr()},beforeI2svg:function(){Hr()}}}},tt=ht||{};tt[et]||(tt[et]={});tt[et].styles||(tt[et].styles={});tt[et].hooks||(tt[et].hooks={});tt[et].shims||(tt[et].shims=[]);var je=tt[et],Us=[],zd=function e(){ne.removeEventListener("DOMContentLoaded",e),cr=1,Us.map(function(t){return t()})},cr=!1;it&&(cr=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),cr||ne.addEventListener("DOMContentLoaded",zd));function Bd(e){it&&(cr?setTimeout(e,0):Us.push(e))}function Mn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Bs(e):"<".concat(t," ").concat(Fd(r),">").concat(i.map(Mn).join(""),"</").concat(t,">")}function ro(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Hd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ur=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Hd(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function Ud(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ca(e){var t=Ud(e);return t.length===1?t[0].toString(16):null}function Wd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ao(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ua(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ao(t);typeof je.hooks.addPack=="function"&&!a?je.hooks.addPack(e,ao(t)):je.styles[e]=T(T({},je.styles[e]||{}),i),e==="fas"&&ua("fa",t)}var Vn,Gn,Qn,Dt=je.styles,Yd=je.shims,Kd=(Vn={},pe(Vn,te,Object.values(Cn[te])),pe(Vn,ce,Object.values(Cn[ce])),Vn),Va=null,Ws={},Ys={},Ks={},qs={},Xs={},qd=(Gn={},pe(Gn,te,Object.keys(On[te])),pe(Gn,ce,Object.keys(On[ce])),Gn);function Xd(e){return~Cd.indexOf(e)}function Vd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Xd(a)?a:null}var Vs=function(){var t=function(i){return Ur(Dt,function(o,s,l){return o[l]=Ur(s,i,{}),o},{})};Ws=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ys=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Xs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Dt||M.autoFetchSvg,r=Ur(Yd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ks=r.names,qs=r.unicodes,Va=Cr(M.styleDefault,{family:M.familyDefault})};Td(function(e){Va=Cr(e.styleDefault,{family:M.familyDefault})});Vs();function Ga(e,t){return(Ws[e]||{})[t]}function Gd(e,t){return(Ys[e]||{})[t]}function Ot(e,t){return(Xs[e]||{})[t]}function Gs(e){return Ks[e]||{prefix:null,iconName:null}}function Qd(e){var t=qs[e],n=Ga("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return Va}var Qa=function(){return{prefix:null,iconName:null,rest:[]}};function Cr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=On[r][e],i=Pn[r][e]||Pn[r][a],o=e in je.styles?e:null;return i||o||null}var io=(Qn={},pe(Qn,te,Object.keys(Cn[te])),pe(Qn,ce,Object.keys(Cn[ce])),Qn);function Sr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},pe(t,te,"".concat(M.cssPrefix,"-").concat(te)),pe(t,ce,"".concat(M.cssPrefix,"-").concat(ce)),t),o=null,s=te;(e.includes(i[te])||e.some(function(c){return io[te].includes(c)}))&&(s=te),(e.includes(i[ce])||e.some(function(c){return io[ce].includes(c)}))&&(s=ce);var l=e.reduce(function(c,f){var d=Vd(M.cssPrefix,f);if(Dt[f]?(f=Kd[s].includes(f)?wd[s][f]:f,o=f,c.prefix=f):qd[s].indexOf(f)>-1?(o=f,c.prefix=Cr(f,{family:s})):d?c.iconName=d:f!==M.replacementClass&&f!==i[te]&&f!==i[ce]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?Gs(c.iconName):{},g=Ot(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Dt.far&&Dt.fas&&!M.autoFetchSvg&&(c.prefix="fas")}return c},Qa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ce&&(Dt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gt()||"fas"),l}var Jd=function(){function e(){cd(this,e),this.definitions={}}return ud(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),ua(s,o[s]);var l=Cn[te][s];l&&ua(l,o[s]),Vs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),oo=[],zt={},Yt={},Zd=Object.keys(Yt);function em(e,t){var n=t.mixoutsTo;return oo=e,zt={},Object.keys(Yt).forEach(function(r){Zd.indexOf(r)===-1&&delete Yt[r]}),oo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),fr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){zt[o]||(zt[o]=[]),zt[o].push(i[o])})}r.provides&&r.provides(Yt)}),n}function da(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=zt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=zt[e]||[];a.forEach(function(i){i.apply(null,n)})}function nt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Yt[e]?Yt[e].apply(null,t):void 0}function ma(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gt();if(t)return t=Ot(n,t)||t,ro(Qs.definitions,n,t)||ro(je.styles,n,t)}var Qs=new Jd,tm=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,It("noAuto")},nm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return it?(It("beforeI2svg",t),nt("pseudoElements2svg",t),nt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Bd(function(){am({autoReplaceSvgRoot:n}),It("watch",t)})}},rm={icon:function(t){if(t===null)return null;if(fr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Cr(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Ed))){var a=Sr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||gt(),iconName:Ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=gt();return{prefix:i,iconName:Ot(i,t)||t}}}},Ce={noAuto:tm,config:M,dom:nm,parse:rm,library:Qs,findIconDefinition:ma,toHtml:Mn},am=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(je.styles).length>0||M.autoFetchSvg)&&it&&M.autoReplaceSvg&&Ce.dom.i2svg({node:r})};function Rr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Mn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(it){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function im(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Xa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Pr(T(T({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function om(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function Ja(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,S=A.width,F=A.height,b=a==="fak",x=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(be){return d.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(d.classes).join(" "),O={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(F)})},D=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/F*16*.0625,"em")}:{};g&&(O.attributes[Rt]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(f||Rn())},children:[l]}),delete O.attributes.title);var Y=T(T({},O),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:T(T({},D),d.styles)}),re=r.found&&n.found?nt("generateAbstractMask",Y)||{children:[],attributes:{}}:nt("generateAbstractIcon",Y)||{children:[],attributes:{}},fe=re.children,Ae=re.attributes;return Y.children=fe,Y.attributes=Ae,s?om(Y):im(Y)}function so(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Rt]="");var f=T({},o.styles);Xa(a)&&(f.transform=$d({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Pr(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function sm(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Pr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wr=je.styles;function pa(e){var t=e[0],n=e[1],r=e.slice(4),a=Ha(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var lm={found:!1,width:512,height:512};function fm(e,t){!$s&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ha(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=gt()),new Promise(function(r,a){if(nt("missingIconAbstract"),n==="fa"){var i=Gs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Wr[t]&&Wr[t][e]){var o=Wr[t][e];return r(pa(o))}fm(e,t),r(T(T({},lm),{},{icon:M.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}}))})}var lo=function(){},ga=M.measurePerformance&&Un&&Un.mark&&Un.measure?Un:{mark:lo,measure:lo},fn='FA "6.3.0"',cm=function(t){return ga.mark("".concat(fn," ").concat(t," begins")),function(){return Js(t)}},Js=function(t){ga.mark("".concat(fn," ").concat(t," ends")),ga.measure("".concat(fn," ").concat(t),"".concat(fn," ").concat(t," begins"),"".concat(fn," ").concat(t," ends"))},Za={begin:cm,end:Js},nr=function(){};function fo(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function um(e){var t=e.getAttribute?e.getAttribute(Wa):null,n=e.getAttribute?e.getAttribute(Ya):null;return t&&n}function dm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function mm(){if(M.autoReplaceSvg===!0)return rr.replace;var e=rr[M.autoReplaceSvg];return e||rr.replace}function pm(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function hm(e){return ne.createElement(e)}function Zs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?pm:hm:n;if(typeof e=="string")return ne.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Zs(o,{ceFn:r}))}),a}function gm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var rr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Zs(a),n)}),n.getAttribute(Rt)===null&&M.keepOriginalSource){var r=ne.createComment(gm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~qa(n).indexOf(M.replacementClass))return rr.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Mn(s)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function co(e){e()}function el(e,t){var n=typeof t=="function"?t:nr;if(e.length===0)n();else{var r=co;M.mutateApproach===_d&&(r=ht.requestAnimationFrame||co),r(function(){var a=mm(),i=Za.begin("mutate");e.map(a),i(),n()})}}var ei=!1;function tl(){ei=!0}function va(){ei=!1}var ur=null;function uo(e){if(eo&&M.observeMutations){var t=e.treeCallback,n=t===void 0?nr:t,r=e.nodeCallback,a=r===void 0?nr:r,i=e.pseudoElementsCallback,o=i===void 0?nr:i,s=e.observeMutationsRoot,l=s===void 0?ne:s;ur=new eo(function(c){if(!ei){var f=gt();nn(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!fo(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&fo(d.target)&&~Pd.indexOf(d.attributeName))if(d.attributeName==="class"&&um(d.target)){var p=Sr(qa(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(Wa,g||f),A&&d.target.setAttribute(Ya,A)}else dm(d.target)&&a(d.target)})}}),it&&ur.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vm(){ur&&ur.disconnect()}function bm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ym(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Sr(qa(e));return a.prefix||(a.prefix=gt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Gd(a.prefix,e.innerText)||Ga(a.prefix,ca(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function _m(e){var t=nn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function xm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Xe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ym(e),r=n.iconName,a=n.prefix,i=n.rest,o=_m(e),s=da("parseNodeAttributes",{},e),l=t.styleParser?bm(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Xe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var wm=je.styles;function nl(e){var t=M.autoReplaceSvg==="nest"?mo(e,{styleParser:!1}):mo(e);return~t.extra.classes.indexOf(js)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}var vt=new Set;Ka.map(function(e){vt.add("fa-".concat(e))});Object.keys(On[te]).map(vt.add.bind(vt));Object.keys(On[ce]).map(vt.add.bind(vt));vt=Tn(vt);function po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it)return Promise.resolve();var n=ne.documentElement.classList,r=function(d){return n.add("".concat(to,"-").concat(d))},a=function(d){return n.remove("".concat(to,"-").concat(d))},i=M.autoFetchSvg?vt:Ka.map(function(f){return"fa-".concat(f)}).concat(Object.keys(wm));i.includes("fa")||i.push("fa");var o=[".".concat(js,":not([").concat(Rt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=nn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Za.begin("onTree"),c=s.reduce(function(f,d){try{var p=nl(d);p&&f.push(p)}catch(g){$s||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){el(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function Em(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nl(e).then(function(n){n&&el([n],t)})}function km(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ma(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ma(a||{})),e(r,T(T({},n),{},{mask:a}))}}var Am=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Xe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,S=n.classes,F=S===void 0?[]:S,b=n.attributes,x=b===void 0?{}:b,O=n.styles,D=O===void 0?{}:O;if(t){var Y=t.prefix,re=t.iconName,fe=t.icon;return Rr(T({type:"icon"},t),function(){return It("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?x["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||Rn()):(x["aria-hidden"]="true",x.focusable="false")),Ja({icons:{main:pa(fe),mask:l?pa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:re,transform:T(T({},Xe),a),symbol:o,title:p,maskId:f,titleId:A,extra:{attributes:x,styles:D,classes:F}})})}},Om={mixout:function(){return{icon:km(Am)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=po,n.nodeCallback=Em,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,i=n.callback,o=i===void 0?function(){}:i;return po(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([ha(a,s),f.iconName?ha(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var F=Ha(S,2),b=F[0],x=F[1];g([n,Ja({icons:{main:b,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Pr(s);l.length>0&&(a.style=l);var c;return Xa(o)&&(c=nt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Pm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Rr({type:"layer"},function(){It("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Tn(i)).join(" ")},children:o}]})}}}},Cm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Rr({type:"counter",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),sm({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Tn(s))}})})}}}},Sm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Xe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return Rr({type:"text",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),so({content:n,transform:T(T({},Xe),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Tn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ms){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,so({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Rm=new RegExp('"',"ug"),ho=[1105920,1112319];function Im(e){var t=e.replace(Rm,""),n=Wd(t,0),r=n>=ho[0]&&n<=ho[1],a=t.length===2?t[0]===t[1]:!1;return{value:ca(a?t[0]:t),isSecondary:r||a}}function go(e,t){var n="".concat(yd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=nn(e.children),o=i.filter(function(fe){return fe.getAttribute(fa)===t})[0],s=ht.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(kd),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ce:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pn[p][l[2].toLowerCase()]:Ad[p][c],A=Im(d),S=A.value,F=A.isSecondary,b=l[0].startsWith("FontAwesome"),x=Ga(g,S),O=x;if(b){var D=Qd(S);D.iconName&&D.prefix&&(x=D.iconName,g=D.prefix)}if(x&&!F&&(!o||o.getAttribute(Wa)!==g||o.getAttribute(Ya)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var Y=xm(),re=Y.extra;re.attributes[fa]=t,ha(x,g).then(function(fe){var Ae=Ja(T(T({},Y),{},{icons:{main:fe,mask:Qa()},prefix:g,iconName:O,extra:re,watchable:!0})),be=ne.createElement("svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=Ae.map(function(Se){return Mn(Se)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Tm(e){return Promise.all([go(e,"::before"),go(e,"::after")])}function Nm(e){return e.parentNode!==document.head&&!~xd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(fa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function vo(e){if(it)return new Promise(function(t,n){var r=nn(e.querySelectorAll("*")).filter(Nm).map(Tm),a=Za.begin("searchPseudoElements");tl(),Promise.all(r).then(function(){a(),va(),t()}).catch(function(){a(),va(),n()})})}var Mm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=vo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;M.searchPseudoElements&&vo(a)}}},bo=!1,Fm={mixout:function(){return{dom:{unwatch:function(){tl(),bo=!0}}}},hooks:function(){return{bootstrap:function(){uo(da("mutationObserverCallbacks",{}))},noAuto:function(){vm()},watch:function(n){var r=n.observeMutationsRoot;bo?va():uo(da("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},yo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Lm={mixout:function(){return{parse:{transform:function(n){return yo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=yo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Yr={x:0,y:0,width:"100%",height:"100%"};function _o(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function $m(e){return e.tag==="g"?e.children:[e]}var jm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Sr(a.split(" ").map(function(o){return o.trim()})):Qa();return i.prefix||(i.prefix=gt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,g=Ld({transform:l,containerWidth:d,iconWidth:c}),A={tag:"rect",attributes:T(T({},Yr),{},{fill:"white"})},S=f.children?{children:f.children.map(_o)}:{},F={tag:"g",attributes:T({},g.inner),children:[_o(T({tag:f.tag,attributes:T(T({},f.attributes),g.path)},S))]},b={tag:"g",attributes:T({},g.outer),children:[F]},x="mask-".concat(s||Rn()),O="clip-".concat(s||Rn()),D={tag:"mask",attributes:T(T({},Yr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:$m(p)},D]};return r.push(Y,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(x,")")},Yr)}),{children:r,attributes:a}}}},Dm={provides:function(t){var n=!1;ht.matchMedia&&(n=ht.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},zm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Bm=[Dd,Om,Pm,Cm,Sm,Mm,Fm,Lm,jm,Dm,zm];em(Bm,{mixoutsTo:Ce});Ce.noAuto;var rl=Ce.config,al=Ce.library;Ce.dom;var dr=Ce.parse;Ce.findIconDefinition;Ce.toHtml;var Hm=Ce.icon;Ce.layer;var Um=Ce.text;Ce.counter;var Wm={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Ym={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};function xo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xo(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mr(e){return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Km(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function qm(e,t){if(e==null)return{};var n=Km(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ba(e){return Xm(e)||Vm(e)||Gm(e)||Qm()}function Xm(e){if(Array.isArray(e))return ya(e)}function Vm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gm(e,t){if(e){if(typeof e=="string")return ya(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ya(e,t)}}function ya(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Jm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},il={exports:{}};(function(e){(function(t){var n=function(b,x,O){if(!c(x)||d(x)||p(x)||g(x)||l(x))return x;var D,Y=0,re=0;if(f(x))for(D=[],re=x.length;Y<re;Y++)D.push(n(b,x[Y],O));else{D={};for(var fe in x)Object.prototype.hasOwnProperty.call(x,fe)&&(D[b(fe,O)]=n(b,x[fe],O))}return D},r=function(b,x){x=x||{};var O=x.separator||"_",D=x.split||/(?=[A-Z])/;return b.split(D).join(O)},a=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(x,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var x=a(b);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(b,x){return r(b,x).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},f=function(b){return s.call(b)=="[object Array]"},d=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},S=function(b,x){var O=x&&"process"in x?x.process:x;return typeof O!="function"?b:function(D,Y){return O(D,b,Y)}},F={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,x){return n(S(a,x),b)},decamelizeKeys:function(b,x){return n(S(o,x),b,x)},pascalizeKeys:function(b,x){return n(S(i,x),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(Jm)})(il);var Zm=il.exports,ep=["class","style"];function tp(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Zm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function np(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ti(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=np(f);break;case"style":l.style=tp(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=qm(n,ep);return Ar(e.tag,Fe(Fe(Fe({},t),{},{class:a.class,style:Fe(Fe({},a.style),o)},a.attrs),s),r)}var ol=!1;try{ol=!0}catch{}function rp(){if(!ol&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function vn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function ap(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function wo(e){if(e&&mr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(dr.icon)return dr.icon(e);if(e===null)return null;if(mr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ip=rt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=se(function(){return wo(t.icon)}),i=se(function(){return vn("classes",ap(t))}),o=se(function(){return vn("transform",typeof t.transform=="string"?dr.transform(t.transform):t.transform)}),s=se(function(){return vn("mask",wo(t.mask))}),l=se(function(){return Hm(a.value,Fe(Fe(Fe(Fe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});cn(l,function(f){if(!f)return rp("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=se(function(){return l.value?ti(l.value.abstract[0],{},r):null});return function(){return c.value}}});rt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=rl.familyPrefix,i=se(function(){return["".concat(a,"-layers")].concat(ba(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Ar("div",{class:i.value},r.default?r.default():[])}}});rt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=rl.familyPrefix,i=se(function(){return vn("classes",[].concat(ba(t.counter?["".concat(a,"-layers-counter")]:[]),ba(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=se(function(){return vn("transform",typeof t.transform=="string"?dr.transform(t.transform):t.transform)}),s=se(function(){var c=Um(t.value.toString(),Fe(Fe({},o.value),i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=se(function(){return ti(s.value,{},r)});return function(){return l.value}}});const ni=Nc($u);ni.use(fd);al.add(Wm);al.add(Ym);ni.component("font-awesome-icon",ip);ni.mount("#app");
