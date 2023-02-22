(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function wa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function gr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ge(r)?yl(r):gr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ge(e))return e;if(le(e))return e}}const gl=/;(?![^(]*\))/g,vl=/:([^]+)/,bl=/\/\*.*?\*\//gs;function yl(e){const t={};return e.replace(bl,"").split(gl).forEach(n=>{if(n){const r=n.split(vl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function vr(e){let t="";if(ge(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=vr(e[n]);r&&(t+=r+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const _l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xl=wa(_l);function So(e){return!!e||e===""}const Zn=e=>ge(e)?e:e==null?"":H(e)||le(e)&&(e.toString===No||!U(e.toString))?JSON.stringify(e,Ro,2):String(e),Ro=(e,t)=>t&&t.__v_isRef?Ro(e,t.value):Wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Io(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!H(t)&&!Mo(t)?String(t):t,ie={},Ut=[],De=()=>{},wl=()=>!1,El=/^on[^a-z]/,br=e=>El.test(e),Ea=e=>e.startsWith("onUpdate:"),we=Object.assign,ka=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},kl=Object.prototype.hasOwnProperty,V=(e,t)=>kl.call(e,t),H=Array.isArray,Wt=e=>yr(e)==="[object Map]",Io=e=>yr(e)==="[object Set]",U=e=>typeof e=="function",ge=e=>typeof e=="string",Aa=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",To=e=>le(e)&&U(e.then)&&U(e.catch),No=Object.prototype.toString,yr=e=>No.call(e),Al=e=>yr(e).slice(8,-1),Mo=e=>yr(e)==="[object Object]",Oa=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,er=wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_r=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ol=/-(\w)/g,Xe=_r(e=>e.replace(Ol,(t,n)=>n?n.toUpperCase():"")),Pl=/\B([A-Z])/g,en=_r(e=>e.replace(Pl,"-$1").toLowerCase()),xr=_r(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fr=_r(e=>e?`on${xr(e)}`:""),_n=(e,t)=>!Object.is(e,t),Lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ir=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Cl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let fi;const Sl=()=>fi||(fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Fe;class Fo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!t&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Fe;try{return Fe=this,t()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Rl(e){return new Fo(e)}function Il(e,t=Fe){t&&t.active&&t.effects.push(e)}function Tl(){return Fe}const Pa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Lo=e=>(e.w&ht)>0,$o=e=>(e.n&ht)>0,Nl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ht},Ml=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Lo(a)&&!$o(a)?a.delete(e):t[n++]=a,a.w&=~ht,a.n&=~ht}t.length=n}},Xr=new WeakMap;let fn=0,ht=1;const Gr=30;let Le;const St=Symbol(""),Qr=Symbol("");class Ca{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Il(this,r)}run(){if(!this.active)return this.fn();let t=Le,n=mt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Le,Le=this,mt=!0,ht=1<<++fn,fn<=Gr?Nl(this):ci(this),this.fn()}finally{fn<=Gr&&Ml(this),ht=1<<--fn,Le=this.parent,mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Le===this?this.deferStop=!0:this.active&&(ci(this),this.onStop&&this.onStop(),this.active=!1)}}function ci(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let mt=!0;const jo=[];function tn(){jo.push(mt),mt=!1}function nn(){const e=jo.pop();mt=e===void 0?!0:e}function Oe(e,t,n){if(mt&&Le){let r=Xr.get(e);r||Xr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Pa()),zo(a)}}function zo(e,t){let n=!1;fn<=Gr?$o(e)||(e.n|=ht,n=!Lo(e)):n=!e.has(Le),n&&(e.add(Le),Le.deps.push(e))}function et(e,t,n,r,a,i){const o=Xr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e)){const l=Number(r);o.forEach((c,f)=>{(f==="length"||f>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?Oa(n)&&s.push(o.get("length")):(s.push(o.get(St)),Wt(e)&&s.push(o.get(Qr)));break;case"delete":H(e)||(s.push(o.get(St)),Wt(e)&&s.push(o.get(Qr)));break;case"set":Wt(e)&&s.push(o.get(St));break}if(s.length===1)s[0]&&Jr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Jr(Pa(l))}}function Jr(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&ui(r);for(const r of n)r.computed||ui(r)}function ui(e,t){(e!==Le||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Fl=wa("__proto__,__v_isRef,__isVue"),Do=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Aa)),Ll=Sa(),$l=Sa(!1,!0),jl=Sa(!0),di=zl();function zl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)Oe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(X)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tn();const r=X(this)[t].apply(this,n);return nn(),r}}),e}function Dl(e){const t=X(this);return Oe(t,"has",e),t.hasOwnProperty(e)}function Sa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?nf:Yo:t?Wo:Uo).get(r))return r;const o=H(r);if(!e){if(o&&V(di,a))return Reflect.get(di,a,i);if(a==="hasOwnProperty")return Dl}const s=Reflect.get(r,a,i);return(Aa(a)?Do.has(a):Fl(a))||(e||Oe(r,"get",a),t)?s:be(s)?o&&Oa(a)?s:s.value:le(s)?e?Ko(s):Tn(s):s}}const Bl=Bo(),Hl=Bo(!0);function Bo(e=!1){return function(n,r,a,i){let o=n[r];if(Vt(o)&&be(o)&&!be(a))return!1;if(!e&&(!or(a)&&!Vt(a)&&(o=X(o),a=X(a)),!H(n)&&be(o)&&!be(a)))return o.value=a,!0;const s=H(n)&&Oa(r)?Number(r)<n.length:V(n,r),l=Reflect.set(n,r,a,i);return n===X(i)&&(s?_n(a,o)&&et(n,"set",r,a):et(n,"add",r,a)),l}}function Ul(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&et(e,"delete",t,void 0),r}function Wl(e,t){const n=Reflect.has(e,t);return(!Aa(t)||!Do.has(t))&&Oe(e,"has",t),n}function Yl(e){return Oe(e,"iterate",H(e)?"length":St),Reflect.ownKeys(e)}const Ho={get:Ll,set:Bl,deleteProperty:Ul,has:Wl,ownKeys:Yl},Kl={get:jl,set(e,t){return!0},deleteProperty(e,t){return!0}},ql=we({},Ho,{get:$l,set:Hl}),Ra=e=>e,wr=e=>Reflect.getPrototypeOf(e);function $n(e,t,n=!1,r=!1){e=e.__v_raw;const a=X(e),i=X(t);n||(t!==i&&Oe(a,"get",t),Oe(a,"get",i));const{has:o}=wr(a),s=r?Ra:n?Ma:xn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function jn(e,t=!1){const n=this.__v_raw,r=X(n),a=X(e);return t||(e!==a&&Oe(r,"has",e),Oe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function zn(e,t=!1){return e=e.__v_raw,!t&&Oe(X(e),"iterate",St),Reflect.get(e,"size",e)}function mi(e){e=X(e);const t=X(this);return wr(t).has.call(t,e)||(t.add(e),et(t,"add",e,e)),this}function pi(e,t){t=X(t);const n=X(this),{has:r,get:a}=wr(n);let i=r.call(n,e);i||(e=X(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?_n(t,o)&&et(n,"set",e,t):et(n,"add",e,t),this}function hi(e){const t=X(this),{has:n,get:r}=wr(t);let a=n.call(t,e);a||(e=X(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&et(t,"delete",e,void 0),i}function gi(){const e=X(this),t=e.size!==0,n=e.clear();return t&&et(e,"clear",void 0,void 0),n}function Dn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=X(o),l=t?Ra:e?Ma:xn;return!e&&Oe(s,"iterate",St),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Bn(e,t,n){return function(...r){const a=this.__v_raw,i=X(a),o=Wt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Ra:t?Ma:xn;return!t&&Oe(i,"iterate",l?Qr:St),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:s?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function lt(e){return function(...t){return e==="delete"?!1:this}}function Vl(){const e={get(i){return $n(this,i)},get size(){return zn(this)},has:jn,add:mi,set:pi,delete:hi,clear:gi,forEach:Dn(!1,!1)},t={get(i){return $n(this,i,!1,!0)},get size(){return zn(this)},has:jn,add:mi,set:pi,delete:hi,clear:gi,forEach:Dn(!1,!0)},n={get(i){return $n(this,i,!0)},get size(){return zn(this,!0)},has(i){return jn.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Dn(!0,!1)},r={get(i){return $n(this,i,!0,!0)},get size(){return zn(this,!0)},has(i){return jn.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Bn(i,!1,!1),n[i]=Bn(i,!0,!1),t[i]=Bn(i,!1,!0),r[i]=Bn(i,!0,!0)}),[e,n,t,r]}const[Xl,Gl,Ql,Jl]=Vl();function Ia(e,t){const n=t?e?Jl:Ql:e?Gl:Xl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(V(n,a)&&a in r?n:r,a,i)}const Zl={get:Ia(!1,!1)},ef={get:Ia(!1,!0)},tf={get:Ia(!0,!1)},Uo=new WeakMap,Wo=new WeakMap,Yo=new WeakMap,nf=new WeakMap;function rf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function af(e){return e.__v_skip||!Object.isExtensible(e)?0:rf(Al(e))}function Tn(e){return Vt(e)?e:Ta(e,!1,Ho,Zl,Uo)}function of(e){return Ta(e,!1,ql,ef,Wo)}function Ko(e){return Ta(e,!0,Kl,tf,Yo)}function Ta(e,t,n,r,a){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=af(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Yt(e){return Vt(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function or(e){return!!(e&&e.__v_isShallow)}function qo(e){return Yt(e)||Vt(e)}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Na(e){return ir(e,"__v_skip",!0),e}const xn=e=>le(e)?Tn(e):e,Ma=e=>le(e)?Ko(e):e;function Vo(e){mt&&Le&&(e=X(e),zo(e.dep||(e.dep=Pa())))}function Xo(e,t){e=X(e);const n=e.dep;n&&Jr(n)}function be(e){return!!(e&&e.__v_isRef===!0)}function Go(e){return Qo(e,!1)}function sf(e){return Qo(e,!0)}function Qo(e,t){return be(e)?e:new lf(e,t)}class lf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:xn(t)}get value(){return Vo(this),this._value}set value(t){const n=this.__v_isShallow||or(t)||Vt(t);t=n?t:X(t),_n(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:xn(t),Xo(this))}}function Rt(e){return be(e)?e.value:e}const ff={get:(e,t,n)=>Rt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return be(a)&&!be(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Jo(e){return Yt(e)?e:new Proxy(e,ff)}var Zo;class cf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Zo]=!1,this._dirty=!0,this.effect=new Ca(t,()=>{this._dirty||(this._dirty=!0,Xo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=X(this);return Vo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zo="__v_isReadonly";function uf(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=De):(r=e.get,a=e.set),new cf(r,a,i||!a,n)}function pt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Er(i,t,n)}return a}function Be(e,t,n,r){if(U(e)){const i=pt(e,t,n,r);return i&&To(i)&&i.catch(o=>{Er(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Be(e[i],t,n,r));return a}function Er(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){pt(l,null,10,[e,o,s]);return}}df(e,n,a,r)}function df(e,t,n,r=!0){console.error(e)}let wn=!1,Zr=!1;const ve=[];let qe=0;const Kt=[];let Je=null,At=0;const es=Promise.resolve();let Fa=null;function ts(e){const t=Fa||es;return e?t.then(this?e.bind(this):e):t}function mf(e){let t=qe+1,n=ve.length;for(;t<n;){const r=t+n>>>1;En(ve[r])<e?t=r+1:n=r}return t}function La(e){(!ve.length||!ve.includes(e,wn&&e.allowRecurse?qe+1:qe))&&(e.id==null?ve.push(e):ve.splice(mf(e.id),0,e),ns())}function ns(){!wn&&!Zr&&(Zr=!0,Fa=es.then(as))}function pf(e){const t=ve.indexOf(e);t>qe&&ve.splice(t,1)}function hf(e){H(e)?Kt.push(...e):(!Je||!Je.includes(e,e.allowRecurse?At+1:At))&&Kt.push(e),ns()}function vi(e,t=wn?qe+1:0){for(;t<ve.length;t++){const n=ve[t];n&&n.pre&&(ve.splice(t,1),t--,n())}}function rs(e){if(Kt.length){const t=[...new Set(Kt)];if(Kt.length=0,Je){Je.push(...t);return}for(Je=t,Je.sort((n,r)=>En(n)-En(r)),At=0;At<Je.length;At++)Je[At]();Je=null,At=0}}const En=e=>e.id==null?1/0:e.id,gf=(e,t)=>{const n=En(e)-En(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function as(e){Zr=!1,wn=!0,ve.sort(gf);const t=De;try{for(qe=0;qe<ve.length;qe++){const n=ve[qe];n&&n.active!==!1&&pt(n,null,14)}}finally{qe=0,ve.length=0,rs(),wn=!1,Fa=null,(ve.length||Kt.length)&&as()}}function vf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ie;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[f]||ie;p&&(a=n.map(g=>ge(g)?g.trim():g)),d&&(a=n.map(Cl))}let s,l=r[s=Fr(t)]||r[s=Fr(Xe(t))];!l&&i&&(l=r[s=Fr(en(t))]),l&&Be(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Be(c,e,6,a)}}function is(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=c=>{const f=is(c,t,!0);f&&(s=!0,we(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(le(e)&&r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):we(o,i),le(e)&&r.set(e,o),o)}function kr(e,t){return!e||!br(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,en(t))||V(e,t))}let xe=null,os=null;function sr(e){const t=xe;return xe=e,os=e&&e.type.__scopeId||null,t}function ss(e,t=xe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Pi(-1);const i=sr(t);let o;try{o=e(...a)}finally{sr(i),r._d&&Pi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $r(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:p,setupState:g,ctx:A,inheritAttrs:S}=e;let F,b;const x=sr(e);try{if(n.shapeFlag&4){const z=a||r;F=Ke(f.call(z,z,d,i,g,p,A)),b=l}else{const z=t;F=Ke(z.length>1?z(i,{attrs:l,slots:s,emit:c}):z(i,null)),b=t.props?l:bf(l)}}catch(z){pn.length=0,Er(z,e,1),F=D(gt)}let O=F;if(b&&S!==!1){const z=Object.keys(b),{shapeFlag:Y}=O;z.length&&Y&7&&(o&&z.some(Ea)&&(b=yf(b,o)),O=Xt(O,b))}return n.dirs&&(O=Xt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),F=O,sr(x),F}const bf=e=>{let t;for(const n in e)(n==="class"||n==="style"||br(n))&&((t||(t={}))[n]=e[n]);return t},yf=(e,t)=>{const n={};for(const r in e)(!Ea(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function _f(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?bi(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!kr(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?bi(r,o,c):!0:!!o;return!1}function bi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!kr(n,i))return!0}return!1}function xf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const wf=e=>e.__isSuspense;function Ef(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):hf(e)}function tr(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Ze(e,t,n=!1){const r=me||xe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const Hn={};function un(e,t,n){return ls(e,t,n)}function ls(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ie){const s=Tl()===(me==null?void 0:me.scope)?me:null;let l,c=!1,f=!1;if(be(e)?(l=()=>e.value,c=or(e)):Yt(e)?(l=()=>e,r=!0):H(e)?(f=!0,c=e.some(O=>Yt(O)||or(O)),l=()=>e.map(O=>{if(be(O))return O.value;if(Yt(O))return Dt(O);if(U(O))return pt(O,s,2)})):U(e)?t?l=()=>pt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Be(e,s,3,[p])}:l=De,t&&r){const O=l;l=()=>Dt(O())}let d,p=O=>{d=b.onStop=()=>{pt(O,s,4)}},g;if(An)if(p=De,t?n&&Be(t,s,3,[l(),f?[]:void 0,p]):l(),a==="sync"){const O=bc();g=O.__watcherHandles||(O.__watcherHandles=[])}else return De;let A=f?new Array(e.length).fill(Hn):Hn;const S=()=>{if(b.active)if(t){const O=b.run();(r||c||(f?O.some((z,Y)=>_n(z,A[Y])):_n(O,A)))&&(d&&d(),Be(t,s,3,[O,A===Hn?void 0:f&&A[0]===Hn?[]:A,p]),A=O)}else b.run()};S.allowRecurse=!!t;let F;a==="sync"?F=S:a==="post"?F=()=>Ae(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),F=()=>La(S));const b=new Ca(l,F);t?n?S():A=b.run():a==="post"?Ae(b.run.bind(b),s&&s.suspense):b.run();const x=()=>{b.stop(),s&&s.scope&&ka(s.scope.effects,b)};return g&&g.push(x),x}function kf(e,t,n){const r=this.proxy,a=ge(e)?e.includes(".")?fs(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=me;Gt(this);const s=ls(a,i.bind(r),n);return o?Gt(o):It(),s}function fs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Dt(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),be(e))Dt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Dt(e[n],t);else if(Io(e)||Wt(e))e.forEach(n=>{Dt(n,t)});else if(Mo(e))for(const n in e)Dt(e[n],t);return e}function at(e){return U(e)?{setup:e,name:e.name}:e}const dn=e=>!!e.type.__asyncLoader,cs=e=>e.type.__isKeepAlive;function Af(e,t){us(e,"a",t)}function Of(e,t){us(e,"da",t)}function us(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)cs(a.parent.vnode)&&Pf(r,t,n,a),a=a.parent}}function Pf(e,t,n,r){const a=Ar(t,e,r,!0);ds(()=>{ka(r[t],a)},n)}function Ar(e,t,n=me,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;tn(),Gt(n);const s=Be(t,n,e,o);return It(),nn(),s});return r?a.unshift(i):a.push(i),i}}const it=e=>(t,n=me)=>(!An||e==="sp")&&Ar(e,(...r)=>t(...r),n),Cf=it("bm"),Sf=it("m"),Rf=it("bu"),If=it("u"),Tf=it("bum"),ds=it("um"),Nf=it("sp"),Mf=it("rtg"),Ff=it("rtc");function Lf(e,t=me){Ar("ec",e,t)}function wt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(tn(),Be(l,n,8,[e.el,s,e,t]),nn())}}const ms="components";function ps(e,t){return jf(ms,e,!0,t)||e}const $f=Symbol();function jf(e,t,n=!0,r=!1){const a=xe||me;if(a){const i=a.type;if(e===ms){const s=hc(i,!1);if(s&&(s===t||s===Xe(t)||s===xr(Xe(t))))return i}const o=yi(a[e]||i[e],t)||yi(a.appContext[e],t);return!o&&r?i:o}}function yi(e,t){return e&&(e[t]||e[Xe(t)]||e[xr(Xe(t))])}function _i(e,t,n={},r,a){if(xe.isCE||xe.parent&&dn(xe.parent)&&xe.parent.isCE)return t!=="default"&&(n.name=t),D("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),Ge();const o=i&&hs(i(n)),s=za(Ie,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function hs(e){return e.some(t=>fr(t)?!(t.type===gt||t.type===Ie&&!hs(t.children)):!0)?e:null}const ea=e=>e?Os(e)?Ba(e)||e.proxy:ea(e.parent):null,mn=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ea(e.parent),$root:e=>ea(e.root),$emit:e=>e.emit,$options:e=>$a(e),$forceUpdate:e=>e.f||(e.f=()=>La(e.update)),$nextTick:e=>e.n||(e.n=ts.bind(e.proxy)),$watch:e=>kf.bind(e)}),jr=(e,t)=>e!==ie&&!e.__isScriptSetup&&V(e,t),zf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(jr(r,t))return o[t]=1,r[t];if(a!==ie&&V(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&V(c,t))return o[t]=3,i[t];if(n!==ie&&V(n,t))return o[t]=4,n[t];ta&&(o[t]=0)}}const f=mn[t];let d,p;if(f)return t==="$attrs"&&Oe(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ie&&V(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,V(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return jr(a,t)?(a[t]=n,!0):r!==ie&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ie&&V(e,o)||jr(t,o)||(s=i[0])&&V(s,o)||V(r,o)||V(mn,o)||V(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ta=!0;function Df(e){const t=$a(e),n=e.proxy,r=e.ctx;ta=!1,t.beforeCreate&&xi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:S,deactivated:F,beforeDestroy:b,beforeUnmount:x,destroyed:O,unmounted:z,render:Y,renderTracked:re,renderTriggered:fe,errorCaptured:Pe,serverPrefetch:ye,expose:Re,inheritAttrs:st,components:Ue,directives:Ft,filters:_t}=t;if(c&&Bf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const Q=o[Z];U(Q)&&(r[Z]=Q.bind(n))}if(a){const Z=a.call(n,n);le(Z)&&(e.data=Tn(Z))}if(ta=!0,i)for(const Z in i){const Q=i[Z],Te=U(Q)?Q.bind(n,n):U(Q.get)?Q.get.bind(n,n):De,xt=!U(Q)&&U(Q.set)?Q.set.bind(n):De,Ne=se({get:Te,set:xt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:Ee=>Ne.value=Ee})}if(s)for(const Z in s)gs(s[Z],r,n,Z);if(l){const Z=U(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(Q=>{tr(Q,Z[Q])})}f&&xi(f,e,"c");function ue(Z,Q){H(Q)?Q.forEach(Te=>Z(Te.bind(n))):Q&&Z(Q.bind(n))}if(ue(Cf,d),ue(Sf,p),ue(Rf,g),ue(If,A),ue(Af,S),ue(Of,F),ue(Lf,Pe),ue(Ff,re),ue(Mf,fe),ue(Tf,x),ue(ds,z),ue(Nf,ye),H(Re))if(Re.length){const Z=e.exposed||(e.exposed={});Re.forEach(Q=>{Object.defineProperty(Z,Q,{get:()=>n[Q],set:Te=>n[Q]=Te})})}else e.exposed||(e.exposed={});Y&&e.render===De&&(e.render=Y),st!=null&&(e.inheritAttrs=st),Ue&&(e.components=Ue),Ft&&(e.directives=Ft)}function Bf(e,t,n=De,r=!1){H(e)&&(e=na(e));for(const a in e){const i=e[a];let o;le(i)?"default"in i?o=Ze(i.from||a,i.default,!0):o=Ze(i.from||a):o=Ze(i),be(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function xi(e,t,n){Be(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function gs(e,t,n,r){const a=r.includes(".")?fs(n,r):()=>n[r];if(ge(e)){const i=t[e];U(i)&&un(a,i)}else if(U(e))un(a,e.bind(n));else if(le(e))if(H(e))e.forEach(i=>gs(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&un(a,i,e)}}function $a(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>lr(l,c,o,!0)),lr(l,t,o)),le(t)&&i.set(t,l),l}function lr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&lr(e,i,n,!0),a&&a.forEach(o=>lr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Hf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Hf={data:wi,props:kt,emits:kt,methods:kt,computed:kt,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:kt,directives:kt,watch:Wf,provide:wi,inject:Uf};function wi(e,t){return t?e?function(){return we(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Uf(e,t){return kt(na(e),na(t))}function na(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function kt(e,t){return e?we(we(Object.create(null),e),t):t}function Wf(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function Yf(e,t,n,r=!1){const a={},i={};ir(i,Pr,1),e.propsDefaults=Object.create(null),vs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:of(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Kf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=X(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(kr(e.emitsOptions,p))continue;const g=t[p];if(l)if(V(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const A=Xe(p);a[A]=ra(l,s,A,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{vs(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!V(t,d)&&((f=en(d))===d||!V(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=ra(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!V(t,d))&&(delete i[d],c=!0)}c&&et(e,"set","$attrs")}function vs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(er(l))continue;const c=t[l];let f;a&&V(a,f=Xe(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:kr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=X(n),c=s||ie;for(let f=0;f<i.length;f++){const d=i[f];n[d]=ra(a,l,d,c[d],e,!V(c,d))}}return o}function ra(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=V(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Gt(a),r=c[n]=l.call(null,t),It())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}function bs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const f=d=>{l=!0;const[p,g]=bs(d,t,!0);we(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return le(e)&&r.set(e,Ut),Ut;if(H(i))for(let f=0;f<i.length;f++){const d=Xe(i[f]);Ei(d)&&(o[d]=ie)}else if(i)for(const f in i){const d=Xe(f);if(Ei(d)){const p=i[f],g=o[d]=H(p)||U(p)?{type:p}:Object.assign({},p);if(g){const A=Oi(Boolean,g.type),S=Oi(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||V(g,"default"))&&s.push(d)}}}const c=[o,s];return le(e)&&r.set(e,c),c}function Ei(e){return e[0]!=="$"}function ki(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ai(e,t){return ki(e)===ki(t)}function Oi(e,t){return H(t)?t.findIndex(n=>Ai(n,e)):U(t)&&Ai(t,e)?0:-1}const ys=e=>e[0]==="_"||e==="$stable",ja=e=>H(e)?e.map(Ke):[Ke(e)],qf=(e,t,n)=>{if(t._n)return t;const r=ss((...a)=>ja(t(...a)),n);return r._c=!1,r},_s=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ys(a))continue;const i=e[a];if(U(i))t[a]=qf(a,i,r);else if(i!=null){const o=ja(i);t[a]=()=>o}}},xs=(e,t)=>{const n=ja(t);e.slots.default=()=>n},Vf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),ir(t,"_",n)):_s(t,e.slots={})}else e.slots={},t&&xs(e,t);ir(e.slots,Pr,1)},Xf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ie;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(we(a,t),!n&&s===1&&delete a._):(i=!t.$stable,_s(t,a)),o=t}else t&&(xs(e,t),o={default:1});if(i)for(const s in a)!ys(s)&&!(s in o)&&delete a[s]};function ws(){return{app:null,config:{isNativeTag:wl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gf=0;function Qf(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!le(a)&&(a=null);const i=ws(),o=new Set;let s=!1;const l=i.app={_uid:Gf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:yc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(l,...f)):U(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const p=D(r,a);return p.appContext=i,f&&t?t(p,c):e(p,c,d),s=!0,l._container=c,c.__vue_app__=l,Ba(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function aa(e,t,n,r,a=!1){if(H(e)){e.forEach((p,g)=>aa(p,t&&(H(t)?t[g]:t),n,r,a));return}if(dn(r)&&!a)return;const i=r.shapeFlag&4?Ba(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ie?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(ge(c)?(f[c]=null,V(d,c)&&(d[c]=null)):be(c)&&(c.value=null)),U(l))pt(l,s,12,[o,f]);else{const p=ge(l),g=be(l);if(p||g){const A=()=>{if(e.f){const S=p?V(d,l)?d[l]:f[l]:l.value;a?H(S)&&ka(S,i):H(S)?S.includes(i)||S.push(i):p?(f[l]=[i],V(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else p?(f[l]=o,V(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(A.id=-1,Ae(A,n)):A()}}}const Ae=Ef;function Jf(e){return Zf(e)}function Zf(e,t){const n=Sl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=De,insertStaticContent:A}=e,S=(u,m,h,v=null,_=null,k=null,R=!1,E=null,P=!!m.dynamicChildren)=>{if(u===m)return;u&&!sn(u,m)&&(v=C(u),Ee(u,_,k,!0),u=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:w,ref:$,shapeFlag:N}=m;switch(w){case Or:F(u,m,h,v);break;case gt:b(u,m,h,v);break;case zr:u==null&&x(m,h,v,R);break;case Ie:Ue(u,m,h,v,_,k,R,E,P);break;default:N&1?Y(u,m,h,v,_,k,R,E,P):N&6?Ft(u,m,h,v,_,k,R,E,P):(N&64||N&128)&&w.process(u,m,h,v,_,k,R,E,P,q)}$!=null&&_&&aa($,u&&u.ref,k,m||u,!m)},F=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const _=m.el=u.el;m.children!==u.children&&c(_,m.children)}},b=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},x=(u,m,h,v)=>{[u.el,u.anchor]=A(u.children,m,h,v,u.el,u.anchor)},O=({el:u,anchor:m},h,v)=>{let _;for(;u&&u!==m;)_=p(u),r(u,h,v),u=_;r(m,h,v)},z=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},Y=(u,m,h,v,_,k,R,E,P)=>{R=R||m.type==="svg",u==null?re(m,h,v,_,k,R,E,P):ye(u,m,_,k,R,E,P)},re=(u,m,h,v,_,k,R,E)=>{let P,w;const{type:$,props:N,shapeFlag:j,transition:B,dirs:K}=u;if(P=u.el=o(u.type,k,N&&N.is,N),j&8?f(P,u.children):j&16&&Pe(u.children,P,null,v,_,k&&$!=="foreignObject",R,E),K&&wt(u,null,v,"created"),fe(P,u,u.scopeId,R,v),N){for(const J in N)J!=="value"&&!er(J)&&i(P,J,null,N[J],k,u.children,v,_,I);"value"in N&&i(P,"value",null,N.value),(w=N.onVnodeBeforeMount)&&Ye(w,v,u)}K&&wt(u,null,v,"beforeMount");const ee=(!_||_&&!_.pendingBranch)&&B&&!B.persisted;ee&&B.beforeEnter(P),r(P,m,h),((w=N&&N.onVnodeMounted)||ee||K)&&Ae(()=>{w&&Ye(w,v,u),ee&&B.enter(P),K&&wt(u,null,v,"mounted")},_)},fe=(u,m,h,v,_)=>{if(h&&g(u,h),v)for(let k=0;k<v.length;k++)g(u,v[k]);if(_){let k=_.subTree;if(m===k){const R=_.vnode;fe(u,R,R.scopeId,R.slotScopeIds,_.parent)}}},Pe=(u,m,h,v,_,k,R,E,P=0)=>{for(let w=P;w<u.length;w++){const $=u[w]=E?ut(u[w]):Ke(u[w]);S(null,$,m,h,v,_,k,R,E)}},ye=(u,m,h,v,_,k,R)=>{const E=m.el=u.el;let{patchFlag:P,dynamicChildren:w,dirs:$}=m;P|=u.patchFlag&16;const N=u.props||ie,j=m.props||ie;let B;h&&Et(h,!1),(B=j.onVnodeBeforeUpdate)&&Ye(B,h,m,u),$&&wt(m,u,h,"beforeUpdate"),h&&Et(h,!0);const K=_&&m.type!=="foreignObject";if(w?Re(u.dynamicChildren,w,E,h,v,K,k):R||Q(u,m,E,null,h,v,K,k,!1),P>0){if(P&16)st(E,m,N,j,h,v,_);else if(P&2&&N.class!==j.class&&i(E,"class",null,j.class,_),P&4&&i(E,"style",N.style,j.style,_),P&8){const ee=m.dynamicProps;for(let J=0;J<ee.length;J++){const de=ee[J],Me=N[de],$t=j[de];($t!==Me||de==="value")&&i(E,de,Me,$t,_,u.children,h,v,I)}}P&1&&u.children!==m.children&&f(E,m.children)}else!R&&w==null&&st(E,m,N,j,h,v,_);((B=j.onVnodeUpdated)||$)&&Ae(()=>{B&&Ye(B,h,m,u),$&&wt(m,u,h,"updated")},v)},Re=(u,m,h,v,_,k,R)=>{for(let E=0;E<m.length;E++){const P=u[E],w=m[E],$=P.el&&(P.type===Ie||!sn(P,w)||P.shapeFlag&70)?d(P.el):h;S(P,w,$,null,v,_,k,R,!0)}},st=(u,m,h,v,_,k,R)=>{if(h!==v){if(h!==ie)for(const E in h)!er(E)&&!(E in v)&&i(u,E,h[E],null,R,m.children,_,k,I);for(const E in v){if(er(E))continue;const P=v[E],w=h[E];P!==w&&E!=="value"&&i(u,E,w,P,R,m.children,_,k,I)}"value"in v&&i(u,"value",h.value,v.value)}},Ue=(u,m,h,v,_,k,R,E,P)=>{const w=m.el=u?u.el:s(""),$=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:j,slotScopeIds:B}=m;B&&(E=E?E.concat(B):B),u==null?(r(w,h,v),r($,h,v),Pe(m.children,h,$,_,k,R,E,P)):N>0&&N&64&&j&&u.dynamicChildren?(Re(u.dynamicChildren,j,h,_,k,R,E),(m.key!=null||_&&m===_.subTree)&&Es(u,m,!0)):Q(u,m,h,$,_,k,R,E,P)},Ft=(u,m,h,v,_,k,R,E,P)=>{m.slotScopeIds=E,u==null?m.shapeFlag&512?_.ctx.activate(m,h,v,R,P):_t(m,h,v,_,k,R,P):an(u,m,P)},_t=(u,m,h,v,_,k,R)=>{const E=u.component=cc(u,v,_);if(cs(u)&&(E.ctx.renderer=q),uc(E),E.asyncDep){if(_&&_.registerDep(E,ue),!u.el){const P=E.subTree=D(gt);b(null,P,m,h)}return}ue(E,u,m,h,_,k,R)},an=(u,m,h)=>{const v=m.component=u.component;if(_f(u,m,h))if(v.asyncDep&&!v.asyncResolved){Z(v,m,h);return}else v.next=m,pf(v.update),v.update();else m.el=u.el,v.vnode=m},ue=(u,m,h,v,_,k,R)=>{const E=()=>{if(u.isMounted){let{next:$,bu:N,u:j,parent:B,vnode:K}=u,ee=$,J;Et(u,!1),$?($.el=K.el,Z(u,$,R)):$=K,N&&Lr(N),(J=$.props&&$.props.onVnodeBeforeUpdate)&&Ye(J,B,$,K),Et(u,!0);const de=$r(u),Me=u.subTree;u.subTree=de,S(Me,de,d(Me.el),C(Me),u,_,k),$.el=de.el,ee===null&&xf(u,de.el),j&&Ae(j,_),(J=$.props&&$.props.onVnodeUpdated)&&Ae(()=>Ye(J,B,$,K),_)}else{let $;const{el:N,props:j}=m,{bm:B,m:K,parent:ee}=u,J=dn(m);if(Et(u,!1),B&&Lr(B),!J&&($=j&&j.onVnodeBeforeMount)&&Ye($,ee,m),Et(u,!0),N&&W){const de=()=>{u.subTree=$r(u),W(N,u.subTree,u,_,null)};J?m.type.__asyncLoader().then(()=>!u.isUnmounted&&de()):de()}else{const de=u.subTree=$r(u);S(null,de,h,v,u,_,k),m.el=de.el}if(K&&Ae(K,_),!J&&($=j&&j.onVnodeMounted)){const de=m;Ae(()=>Ye($,ee,de),_)}(m.shapeFlag&256||ee&&dn(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&Ae(u.a,_),u.isMounted=!0,m=h=v=null}},P=u.effect=new Ca(E,()=>La(w),u.scope),w=u.update=()=>P.run();w.id=u.uid,Et(u,!0),w()},Z=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Kf(u,m.props,v,h),Xf(u,m.children,h),tn(),vi(),nn()},Q=(u,m,h,v,_,k,R,E,P=!1)=>{const w=u&&u.children,$=u?u.shapeFlag:0,N=m.children,{patchFlag:j,shapeFlag:B}=m;if(j>0){if(j&128){xt(w,N,h,v,_,k,R,E,P);return}else if(j&256){Te(w,N,h,v,_,k,R,E,P);return}}B&8?($&16&&I(w,_,k),N!==w&&f(h,N)):$&16?B&16?xt(w,N,h,v,_,k,R,E,P):I(w,_,k,!0):($&8&&f(h,""),B&16&&Pe(N,h,v,_,k,R,E,P))},Te=(u,m,h,v,_,k,R,E,P)=>{u=u||Ut,m=m||Ut;const w=u.length,$=m.length,N=Math.min(w,$);let j;for(j=0;j<N;j++){const B=m[j]=P?ut(m[j]):Ke(m[j]);S(u[j],B,h,null,_,k,R,E,P)}w>$?I(u,_,k,!0,!1,N):Pe(m,h,v,_,k,R,E,P,N)},xt=(u,m,h,v,_,k,R,E,P)=>{let w=0;const $=m.length;let N=u.length-1,j=$-1;for(;w<=N&&w<=j;){const B=u[w],K=m[w]=P?ut(m[w]):Ke(m[w]);if(sn(B,K))S(B,K,h,null,_,k,R,E,P);else break;w++}for(;w<=N&&w<=j;){const B=u[N],K=m[j]=P?ut(m[j]):Ke(m[j]);if(sn(B,K))S(B,K,h,null,_,k,R,E,P);else break;N--,j--}if(w>N){if(w<=j){const B=j+1,K=B<$?m[B].el:v;for(;w<=j;)S(null,m[w]=P?ut(m[w]):Ke(m[w]),h,K,_,k,R,E,P),w++}}else if(w>j)for(;w<=N;)Ee(u[w],_,k,!0),w++;else{const B=w,K=w,ee=new Map;for(w=K;w<=j;w++){const Ce=m[w]=P?ut(m[w]):Ke(m[w]);Ce.key!=null&&ee.set(Ce.key,w)}let J,de=0;const Me=j-K+1;let $t=!1,oi=0;const on=new Array(Me);for(w=0;w<Me;w++)on[w]=0;for(w=B;w<=N;w++){const Ce=u[w];if(de>=Me){Ee(Ce,_,k,!0);continue}let We;if(Ce.key!=null)We=ee.get(Ce.key);else for(J=K;J<=j;J++)if(on[J-K]===0&&sn(Ce,m[J])){We=J;break}We===void 0?Ee(Ce,_,k,!0):(on[We-K]=w+1,We>=oi?oi=We:$t=!0,S(Ce,m[We],h,null,_,k,R,E,P),de++)}const si=$t?ec(on):Ut;for(J=si.length-1,w=Me-1;w>=0;w--){const Ce=K+w,We=m[Ce],li=Ce+1<$?m[Ce+1].el:v;on[w]===0?S(null,We,h,li,_,k,R,E,P):$t&&(J<0||w!==si[J]?Ne(We,h,li,2):J--)}}},Ne=(u,m,h,v,_=null)=>{const{el:k,type:R,transition:E,children:P,shapeFlag:w}=u;if(w&6){Ne(u.component.subTree,m,h,v);return}if(w&128){u.suspense.move(m,h,v);return}if(w&64){R.move(u,m,h,q);return}if(R===Ie){r(k,m,h);for(let N=0;N<P.length;N++)Ne(P[N],m,h,v);r(u.anchor,m,h);return}if(R===zr){O(u,m,h);return}if(v!==2&&w&1&&E)if(v===0)E.beforeEnter(k),r(k,m,h),Ae(()=>E.enter(k),_);else{const{leave:N,delayLeave:j,afterLeave:B}=E,K=()=>r(k,m,h),ee=()=>{N(k,()=>{K(),B&&B()})};j?j(k,K,ee):ee()}else r(k,m,h)},Ee=(u,m,h,v=!1,_=!1)=>{const{type:k,props:R,ref:E,children:P,dynamicChildren:w,shapeFlag:$,patchFlag:N,dirs:j}=u;if(E!=null&&aa(E,null,h,u,!0),$&256){m.ctx.deactivate(u);return}const B=$&1&&j,K=!dn(u);let ee;if(K&&(ee=R&&R.onVnodeBeforeUnmount)&&Ye(ee,m,u),$&6)y(u.component,h,v);else{if($&128){u.suspense.unmount(h,v);return}B&&wt(u,null,m,"beforeUnmount"),$&64?u.type.remove(u,m,h,_,q,v):w&&(k!==Ie||N>0&&N&64)?I(w,m,h,!1,!0):(k===Ie&&N&384||!_&&$&16)&&I(P,m,h),v&&Lt(u)}(K&&(ee=R&&R.onVnodeUnmounted)||B)&&Ae(()=>{ee&&Ye(ee,m,u),B&&wt(u,null,m,"unmounted")},h)},Lt=u=>{const{type:m,el:h,anchor:v,transition:_}=u;if(m===Ie){Ln(h,v);return}if(m===zr){z(u);return}const k=()=>{a(h),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:E}=_,P=()=>R(h,k);E?E(u.el,k,P):P()}else k()},Ln=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},y=(u,m,h)=>{const{bum:v,scope:_,update:k,subTree:R,um:E}=u;v&&Lr(v),_.stop(),k&&(k.active=!1,Ee(R,u,m,h)),E&&Ae(E,m),Ae(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},I=(u,m,h,v=!1,_=!1,k=0)=>{for(let R=k;R<u.length;R++)Ee(u[R],m,h,v,_)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),L=(u,m,h)=>{u==null?m._vnode&&Ee(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,h),vi(),rs(),m._vnode=u},q={p:S,um:Ee,m:Ne,r:Lt,mt:_t,mc:Pe,pc:Q,pbc:Re,n:C,o:e};let oe,W;return t&&([oe,W]=t(q)),{render:L,hydrate:oe,createApp:Qf(L,oe)}}function Et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Es(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ut(a[i]),s.el=o.el),n||Es(o,s)),s.type===Or&&(s.el=o.el)}}function ec(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const tc=e=>e.__isTeleport,Ie=Symbol(void 0),Or=Symbol(void 0),gt=Symbol(void 0),zr=Symbol(void 0),pn=[];let je=null;function Ge(e=!1){pn.push(je=e?null:[])}function nc(){pn.pop(),je=pn[pn.length-1]||null}let kn=1;function Pi(e){kn+=e}function ks(e){return e.dynamicChildren=kn>0?je||Ut:null,nc(),kn>0&&je&&je.push(e),e}function Tt(e,t,n,r,a,i){return ks(pe(e,t,n,r,a,i,!0))}function za(e,t,n,r,a){return ks(D(e,t,n,r,a,!0))}function fr(e){return e?e.__v_isVNode===!0:!1}function sn(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",As=({key:e})=>e??null,nr=({ref:e,ref_key:t,ref_for:n})=>e!=null?ge(e)||be(e)||U(e)?{i:xe,r:e,k:t,f:!!n}:e:null;function pe(e,t=null,n=null,r=0,a=null,i=e===Ie?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&As(t),ref:t&&nr(t),scopeId:os,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:xe};return s?(Da(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),kn>0&&!o&&je&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&je.push(l),l}const D=rc;function rc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===$f)&&(e=gt),fr(e)){const s=Xt(e,t,!0);return n&&Da(s,n),kn>0&&!i&&je&&(s.shapeFlag&6?je[je.indexOf(e)]=s:je.push(s)),s.patchFlag|=-2,s}if(gc(e)&&(e=e.__vccOpts),t){t=ac(t);let{class:s,style:l}=t;s&&!ge(s)&&(t.class=vr(s)),le(l)&&(qo(l)&&!H(l)&&(l=we({},l)),t.style=gr(l))}const o=ge(e)?1:wf(e)?128:tc(e)?64:le(e)?4:U(e)?2:0;return pe(e,t,n,r,a,o,i,!0)}function ac(e){return e?qo(e)||Pr in e?we({},e):e:null}function Xt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?sc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&As(s),ref:t&&t.ref?n&&a?H(a)?a.concat(nr(t)):[a,nr(t)]:nr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ic(e=" ",t=0){return D(Or,null,e,t)}function oc(e="",t=!1){return t?(Ge(),za(gt,null,e)):D(gt,null,e)}function Ke(e){return e==null||typeof e=="boolean"?D(gt):H(e)?D(Ie,null,e.slice()):typeof e=="object"?ut(e):D(Or,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xt(e)}function Da(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Da(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Pr in t)?t._ctx=xe:a===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:xe},n=32):(t=String(t),r&64?(n=16,t=[ic(t)]):n=8);e.children=t,e.shapeFlag|=n}function sc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=vr([t.class,r.class]));else if(a==="style")t.style=gr([t.style,r.style]);else if(br(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ye(e,t,n,r=null){Be(e,t,7,[n,r])}const lc=ws();let fc=0;function cc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||lc,i={uid:fc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bs(r,a),emitsOptions:is(r,a),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=vf.bind(null,i),e.ce&&e.ce(i),i}let me=null;const Gt=e=>{me=e,e.scope.on()},It=()=>{me&&me.scope.off(),me=null};function Os(e){return e.vnode.shapeFlag&4}let An=!1;function uc(e,t=!1){An=t;const{props:n,children:r}=e.vnode,a=Os(e);Yf(e,n,a,t),Vf(e,r);const i=a?dc(e,t):void 0;return An=!1,i}function dc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Na(new Proxy(e.ctx,zf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?pc(e):null;Gt(e),tn();const i=pt(r,e,0,[e.props,a]);if(nn(),It(),To(i)){if(i.then(It,It),t)return i.then(o=>{Ci(e,o,t)}).catch(o=>{Er(o,e,0)});e.asyncDep=i}else Ci(e,i,t)}else Ps(e,t)}function Ci(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Jo(t)),Ps(e,n)}let Si;function Ps(e,t,n){const r=e.type;if(!e.render){if(!t&&Si&&!r.render){const a=r.template||$a(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=we(we({isCustomElement:i,delimiters:s},o),l);r.render=Si(a,c)}}e.render=r.render||De}Gt(e),tn(),Df(e),nn(),It()}function mc(e){return new Proxy(e.attrs,{get(t,n){return Oe(e,"get","$attrs"),t[n]}})}function pc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=mc(e))},slots:e.slots,emit:e.emit,expose:t}}function Ba(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Jo(Na(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mn)return mn[n](e)},has(t,n){return n in t||n in mn}}))}function hc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function gc(e){return U(e)&&"__vccOpts"in e}const se=(e,t)=>uf(e,t,An);function Cr(e,t,n){const r=arguments.length;return r===2?le(t)&&!H(t)?fr(t)?D(e,null,[t]):D(e,t):D(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fr(n)&&(n=[n]),D(e,t,n))}const vc=Symbol(""),bc=()=>Ze(vc),yc="3.2.47",_c="http://www.w3.org/2000/svg",Ot=typeof document<"u"?document:null,Ri=Ot&&Ot.createElement("template"),xc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Ot.createElementNS(_c,e):Ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Ot.createTextNode(e),createComment:e=>Ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ri.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ri.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function wc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ec(e,t,n){const r=e.style,a=ge(n);if(n&&!a){if(t&&!ge(t))for(const i in t)n[i]==null&&ia(r,i,"");for(const i in n)ia(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ii=/\s*!important$/;function ia(e,t,n){if(H(n))n.forEach(r=>ia(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kc(e,t);Ii.test(n)?e.setProperty(en(r),n.replace(Ii,""),"important"):e[r]=n}}const Ti=["Webkit","Moz","ms"],Dr={};function kc(e,t){const n=Dr[t];if(n)return n;let r=Xe(t);if(r!=="filter"&&r in e)return Dr[t]=r;r=xr(r);for(let a=0;a<Ti.length;a++){const i=Ti[a]+r;if(i in e)return Dr[t]=i}return t}const Ni="http://www.w3.org/1999/xlink";function Ac(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ni,t.slice(6,t.length)):e.setAttributeNS(Ni,t,n);else{const i=xl(t);n==null||i&&!So(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Oc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=So(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Pc(e,t,n,r){e.addEventListener(t,n,r)}function Cc(e,t,n,r){e.removeEventListener(t,n,r)}function Sc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Rc(t);if(r){const c=i[t]=Nc(r,a);Pc(e,s,c,l)}else o&&(Cc(e,s,o,l),i[t]=void 0)}}const Mi=/(?:Once|Passive|Capture)$/;function Rc(e){let t;if(Mi.test(e)){t={};let r;for(;r=e.match(Mi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let Br=0;const Ic=Promise.resolve(),Tc=()=>Br||(Ic.then(()=>Br=0),Br=Date.now());function Nc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Be(Mc(r,n.value),t,5,[r])};return n.value=e,n.attached=Tc(),n}function Mc(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Fi=/^on[a-z]/,Fc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?wc(e,r,a):t==="style"?Ec(e,n,r):br(t)?Ea(t)||Sc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lc(e,t,r,a))?Oc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ac(e,t,r,a))};function Lc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Fi.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Fi.test(t)&&ge(n)?!1:t in e}const $c=we({patchProp:Fc},xc);let Li;function jc(){return Li||(Li=Jf($c))}const zc=(...e)=>{const t=jc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Dc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Dc(e){return ge(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const zt=typeof window<"u";function Bc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const G=Object.assign;function Hr(e,t){const n={};for(const r in t){const a=t[r];n[r]=He(a)?a.map(e):e(a)}return n}const hn=()=>{},He=Array.isArray,Hc=/\/$/,Uc=e=>e.replace(Hc,"");function Ur(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=qc(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Wc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $i(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Yc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Qt(t.matched[r],n.matched[a])&&Cs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Qt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Cs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Kc(e[n],t[n]))return!1;return!0}function Kc(e,t){return He(e)?ji(e,t):He(t)?ji(t,e):e===t}function ji(e,t){return He(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function qc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var On;(function(e){e.pop="pop",e.push="push"})(On||(On={}));var gn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(gn||(gn={}));function Vc(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Uc(e)}const Xc=/^[^#]+#/;function Gc(e,t){return e.replace(Xc,"#")+t}function Qc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Jc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Qc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function zi(e,t){return(history.state?history.state.position-t:-1)+e}const oa=new Map;function Zc(e,t){oa.set(e,t)}function eu(e){const t=oa.get(e);return oa.delete(e),t}let tu=()=>location.protocol+"//"+location.host;function Ss(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),$i(l,"")}return $i(n,e)+r+a}function nu(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=Ss(e,location),A=n.value,S=t.value;let F=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}F=S?p.position-S.position:0}else r(g);a.forEach(b=>{b(n.value,A,{delta:F,type:On.pop,direction:F?F>0?gn.forward:gn.back:gn.unknown})})};function l(){o=n.value}function c(p){a.push(p);const g=()=>{const A=a.indexOf(p);A>-1&&a.splice(A,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(G({},p.state,{scroll:Sr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function Di(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Sr():null}}function ru(e){const{history:t,location:n}=window,r={value:Ss(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:tu()+e+l;try{t[f?"replaceState":"pushState"](c,"",p),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(l,c){const f=G({},t.state,Di(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=G({},a.value,t.state,{forward:l,scroll:Sr()});i(f.current,f,!0);const d=G({},Di(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function au(e){e=Vc(e);const t=ru(e),n=nu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=G({location:"",base:e,go:r,createHref:Gc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function iu(e){return typeof e=="string"||e&&typeof e=="object"}function Rs(e){return typeof e=="string"||typeof e=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Is=Symbol("");var Bi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Bi||(Bi={}));function Jt(e,t){return G(new Error,{type:e,[Is]:!0},t)}function Qe(e,t){return e instanceof Error&&Is in e&&(t==null||!!(e.type&t))}const Hi="[^/]+?",ou={sensitive:!1,strict:!1,start:!0,end:!0},su=/[.+*?^${}()[\]/\\]/g;function lu(e,t){const n=G({},ou,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(su,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:S,optional:F,regexp:b}=p;i.push({name:A,repeatable:S,optional:F});const x=b||Hi;if(x!==Hi){g+=10;try{new RegExp(`(${x})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${x}): `+z.message)}}let O=S?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(O=F&&c.length<2?`(?:/${O})`:"/"+O),F&&(O+="?"),a+=O,g+=20,F&&(g+=-8),S&&(g+=-20),x===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",A=i[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const p of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:F}=g,b=A in c?c[A]:"";if(He(b)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const x=He(b)?b.join("/"):b;if(!x)if(F)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function fu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function cu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=fu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Ui(r))return 1;if(Ui(a))return-1}return a.length-r.length}function Ui(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const uu={type:0,value:""},du=/[a-zA-Z0-9_]/;function mu(e){if(!e)return[[]];if(e==="/")return[[uu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:du.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function pu(e,t,n){const r=lu(mu(e.path),n),a=G(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function hu(e,t){const n=[],r=new Map;t=Ki({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,p){const g=!p,A=gu(f);A.aliasOf=p&&p.record;const S=Ki(t,f),F=[A];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of O)F.push(G({},A,{components:p?p.record.components:A.components,path:z,aliasOf:p?p.record:A}))}let b,x;for(const O of F){const{path:z}=O;if(d&&z[0]!=="/"){const Y=d.record.path,re=Y[Y.length-1]==="/"?"":"/";O.path=d.record.path+(z&&re+z)}if(b=pu(O,d,S),p?p.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),g&&f.name&&!Yi(b)&&o(f.name)),A.children){const Y=A.children;for(let re=0;re<Y.length;re++)i(Y[re],b,p&&p.children[re])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return x?()=>{o(x)}:hn}function o(f){if(Rs(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&cu(f,n[d])>=0&&(f.record.path!==n[d].record.path||!Ts(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!Yi(f)&&r.set(f.record.name,f)}function c(f,d){let p,g={},A,S;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Jt(1,{location:f});S=p.record.name,g=G(Wi(d.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&Wi(f.params,p.keys.map(x=>x.name))),A=p.stringify(g)}else if("path"in f)A=f.path,p=n.find(x=>x.re.test(A)),p&&(g=p.parse(A),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!p)throw Jt(1,{location:f,currentLocation:d});S=p.record.name,g=G({},d.params,f.params),A=p.stringify(g)}const F=[];let b=p;for(;b;)F.unshift(b.record),b=b.parent;return{name:S,path:A,params:g,matched:F,meta:bu(F)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Wi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function gu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:vu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function vu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Yi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function bu(e){return e.reduce((t,n)=>G(t,n.meta),{})}function Ki(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ts(e,t){return t.children.some(n=>n===e||Ts(e,n))}const Ns=/#/g,yu=/&/g,_u=/\//g,xu=/=/g,wu=/\?/g,Ms=/\+/g,Eu=/%5B/g,ku=/%5D/g,Fs=/%5E/g,Au=/%60/g,Ls=/%7B/g,Ou=/%7C/g,$s=/%7D/g,Pu=/%20/g;function Ha(e){return encodeURI(""+e).replace(Ou,"|").replace(Eu,"[").replace(ku,"]")}function Cu(e){return Ha(e).replace(Ls,"{").replace($s,"}").replace(Fs,"^")}function sa(e){return Ha(e).replace(Ms,"%2B").replace(Pu,"+").replace(Ns,"%23").replace(yu,"%26").replace(Au,"`").replace(Ls,"{").replace($s,"}").replace(Fs,"^")}function Su(e){return sa(e).replace(xu,"%3D")}function Ru(e){return Ha(e).replace(Ns,"%23").replace(wu,"%3F")}function Iu(e){return e==null?"":Ru(e).replace(_u,"%2F")}function cr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Tu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ms," "),o=i.indexOf("="),s=cr(o<0?i:i.slice(0,o)),l=o<0?null:cr(i.slice(o+1));if(s in t){let c=t[s];He(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function qi(e){let t="";for(let n in e){const r=e[n];if(n=Su(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(He(r)?r.map(i=>i&&sa(i)):[r&&sa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Nu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=He(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Mu=Symbol(""),Vi=Symbol(""),Ua=Symbol(""),js=Symbol(""),la=Symbol("");function ln(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function dt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Jt(4,{from:n,to:t})):d instanceof Error?s(d):iu(d)?s(Jt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Wr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Fu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(dt(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Bc(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[t];return p&&dt(p,n,r,i,o)()}))}}return a}function Fu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xi(e){const t=Ze(Ua),n=Ze(js),r=se(()=>t.resolve(Rt(e.to))),a=se(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Qt.bind(null,f));if(p>-1)return p;const g=Gi(l[c-2]);return c>1&&Gi(f)===g&&d[d.length-1].path!==g?d.findIndex(Qt.bind(null,l[c-2])):p}),i=se(()=>a.value>-1&&zu(n.params,r.value.params)),o=se(()=>a.value>-1&&a.value===n.matched.length-1&&Cs(n.params,r.value.params));function s(l={}){return ju(l)?t[Rt(e.replace)?"replace":"push"](Rt(e.to)).catch(hn):Promise.resolve()}return{route:r,href:se(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Lu=at({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xi,setup(e,{slots:t}){const n=Tn(Xi(e)),{options:r}=Ze(Ua),a=se(()=>({[Qi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Cr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),$u=Lu;function ju(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function zu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!He(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Gi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qi=(e,t,n)=>e??t??n,Du=at({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ze(la),a=se(()=>e.route||r.value),i=Ze(Vi,0),o=se(()=>{let c=Rt(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=se(()=>a.value.matched[o.value]);tr(Vi,se(()=>o.value+1)),tr(Mu,s),tr(la,a);const l=Go();return un(()=>[l.value,s.value,e.name],([c,f,d],[p,g,A])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!Qt(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=s.value,p=d&&d.components[f];if(!p)return Ji(n.default,{Component:p,route:c});const g=d.props[f],A=g?g===!0?c.params:typeof g=="function"?g(c):g:null,F=Cr(p,G({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Ji(n.default,{Component:F,route:c})||F}}});function Ji(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const zs=Du;function Bu(e){const t=hu(e.routes,e),n=e.parseQuery||Tu,r=e.stringifyQuery||qi,a=e.history,i=ln(),o=ln(),s=ln(),l=sf(ft);let c=ft;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Hr.bind(null,y=>""+y),d=Hr.bind(null,Iu),p=Hr.bind(null,cr);function g(y,I){let C,L;return Rs(y)?(C=t.getRecordMatcher(y),L=I):L=y,t.addRoute(L,C)}function A(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function S(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function b(y,I){if(I=G({},I||l.value),typeof y=="string"){const u=Ur(n,y,I.path),m=t.resolve({path:u.path},I),h=a.createHref(u.fullPath);return G(u,m,{params:p(m.params),hash:cr(u.hash),redirectedFrom:void 0,href:h})}let C;if("path"in y)C=G({},y,{path:Ur(n,y.path,I.path).path});else{const u=G({},y.params);for(const m in u)u[m]==null&&delete u[m];C=G({},y,{params:d(y.params)}),I.params=d(I.params)}const L=t.resolve(C,I),q=y.hash||"";L.params=f(p(L.params));const oe=Wc(r,G({},y,{hash:Cu(q),path:L.path})),W=a.createHref(oe);return G({fullPath:oe,hash:q,query:r===qi?Nu(y.query):y.query||{}},L,{redirectedFrom:void 0,href:W})}function x(y){return typeof y=="string"?Ur(n,y,l.value.path):G({},y)}function O(y,I){if(c!==y)return Jt(8,{from:I,to:y})}function z(y){return fe(y)}function Y(y){return z(G(x(y),{replace:!0}))}function re(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:C}=I;let L=typeof C=="function"?C(y):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),G({query:y.query,hash:y.hash,params:"path"in L?{}:y.params},L)}}function fe(y,I){const C=c=b(y),L=l.value,q=y.state,oe=y.force,W=y.replace===!0,u=re(C);if(u)return fe(G(x(u),{state:typeof u=="object"?G({},q,u.state):q,force:oe,replace:W}),I||C);const m=C;m.redirectedFrom=I;let h;return!oe&&Yc(r,L,C)&&(h=Jt(16,{to:m,from:L}),xt(L,L,!0,!1)),(h?Promise.resolve(h):ye(m,L)).catch(v=>Qe(v)?Qe(v,2)?v:Te(v):Z(v,m,L)).then(v=>{if(v){if(Qe(v,2))return fe(G({replace:W},x(v.to),{state:typeof v.to=="object"?G({},q,v.to.state):q,force:oe}),I||m)}else v=st(m,L,!0,W,q);return Re(m,L,v),v})}function Pe(y,I){const C=O(y,I);return C?Promise.reject(C):Promise.resolve()}function ye(y,I){let C;const[L,q,oe]=Hu(y,I);C=Wr(L.reverse(),"beforeRouteLeave",y,I);for(const u of L)u.leaveGuards.forEach(m=>{C.push(dt(m,y,I))});const W=Pe.bind(null,y,I);return C.push(W),jt(C).then(()=>{C=[];for(const u of i.list())C.push(dt(u,y,I));return C.push(W),jt(C)}).then(()=>{C=Wr(q,"beforeRouteUpdate",y,I);for(const u of q)u.updateGuards.forEach(m=>{C.push(dt(m,y,I))});return C.push(W),jt(C)}).then(()=>{C=[];for(const u of y.matched)if(u.beforeEnter&&!I.matched.includes(u))if(He(u.beforeEnter))for(const m of u.beforeEnter)C.push(dt(m,y,I));else C.push(dt(u.beforeEnter,y,I));return C.push(W),jt(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=Wr(oe,"beforeRouteEnter",y,I),C.push(W),jt(C))).then(()=>{C=[];for(const u of o.list())C.push(dt(u,y,I));return C.push(W),jt(C)}).catch(u=>Qe(u,8)?u:Promise.reject(u))}function Re(y,I,C){for(const L of s.list())L(y,I,C)}function st(y,I,C,L,q){const oe=O(y,I);if(oe)return oe;const W=I===ft,u=zt?history.state:{};C&&(L||W?a.replace(y.fullPath,G({scroll:W&&u&&u.scroll},q)):a.push(y.fullPath,q)),l.value=y,xt(y,I,C,W),Te()}let Ue;function Ft(){Ue||(Ue=a.listen((y,I,C)=>{if(!Ln.listening)return;const L=b(y),q=re(L);if(q){fe(G(q,{replace:!0}),L).catch(hn);return}c=L;const oe=l.value;zt&&Zc(zi(oe.fullPath,C.delta),Sr()),ye(L,oe).catch(W=>Qe(W,12)?W:Qe(W,2)?(fe(W.to,L).then(u=>{Qe(u,20)&&!C.delta&&C.type===On.pop&&a.go(-1,!1)}).catch(hn),Promise.reject()):(C.delta&&a.go(-C.delta,!1),Z(W,L,oe))).then(W=>{W=W||st(L,oe,!1),W&&(C.delta&&!Qe(W,8)?a.go(-C.delta,!1):C.type===On.pop&&Qe(W,20)&&a.go(-1,!1)),Re(L,oe,W)}).catch(hn)}))}let _t=ln(),an=ln(),ue;function Z(y,I,C){Te(y);const L=an.list();return L.length?L.forEach(q=>q(y,I,C)):console.error(y),Promise.reject(y)}function Q(){return ue&&l.value!==ft?Promise.resolve():new Promise((y,I)=>{_t.add([y,I])})}function Te(y){return ue||(ue=!y,Ft(),_t.list().forEach(([I,C])=>y?C(y):I()),_t.reset()),y}function xt(y,I,C,L){const{scrollBehavior:q}=e;if(!zt||!q)return Promise.resolve();const oe=!C&&eu(zi(y.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return ts().then(()=>q(y,I,oe)).then(W=>W&&Jc(W)).catch(W=>Z(W,y,I))}const Ne=y=>a.go(y);let Ee;const Lt=new Set,Ln={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:F,getRoutes:S,resolve:b,options:e,push:z,replace:Y,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:an.add,isReady:Q,install(y){const I=this;y.component("RouterLink",$u),y.component("RouterView",zs),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Rt(l)}),zt&&!Ee&&l.value===ft&&(Ee=!0,z(a.location).catch(q=>{}));const C={};for(const q in ft)C[q]=se(()=>l.value[q]);y.provide(Ua,I),y.provide(js,Tn(C)),y.provide(la,l);const L=y.unmount;Lt.add(y),y.unmount=function(){Lt.delete(y),Lt.size<1&&(c=ft,Ue&&Ue(),Ue=null,l.value=ft,Ee=!1,ue=!1),L()}}};return Ln}function jt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Hu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Qt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Qt(c,l))||a.push(l))}return[n,r,a]}const Uu=at({__name:"App",setup(e){return(t,n)=>(Ge(),za(Rt(zs)))}});var Wu=!1;/*!
  * pinia v2.0.31
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Yu=Symbol();var Zi;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Zi||(Zi={}));function Ku(){const e=Rl(!0),t=e.run(()=>Go({}));let n=[],r=[];const a=Na({install(i){a._a=i,i.provide(Yu,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Wu?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const qu="/dietdraft/client/dist/assets/logo-ae6256b8.svg";const Wa=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Vu={},Xu={class:"title-container"},Gu={class:"title-icon"},Qu=pe("img",{src:qu},null,-1),Ju={class:"title-icon"};function Zu(e,t){return Ge(),Tt("div",Xu,[pe("div",Gu,[_i(e.$slots,"left-icon")]),Qu,pe("div",Ju,[_i(e.$slots,"right-icon")])])}const ed=Wa(Vu,[["render",Zu]]),eo={primary:"#FFC107",secondary:"#0745FF",danger:"#d8062d",gray_0:"##dfdfdf",gray_1:"##c2c2c2",gray_2:"##848484",bg_light:"#F2F2F2",bg_dark:"#181818",text_light:"#000000",text_dark:"#FFFFFF"},td={props:{value:{type:Number,default:0},setpoint:{type:Number,default:1},unit:{type:String,default:""},text:{type:String,default:""}},computed:{barWidth(){return 100*this.value/this.setpoint},barColor(){return this.barWidth<85||this.barWidth>110?eo.danger:eo.primary}}};const nd={class:"quantity-bar-container"},rd={class:"quantity-bar-outer"};function ad(e,t,n,r,a,i){return Ge(),Tt("div",nd,[pe("small",null,Zn(n.text),1),pe("div",rd,[pe("div",{class:"quantity-bar-inner",style:gr({width:i.barWidth+"%",backgroundColor:i.barColor})},null,4)]),pe("small",null,Zn(n.value)+Zn(n.unit),1)])}const Un=Wa(td,[["render",ad]]),id={class:"info-panel-container"},od=pe("div",{style:{flex:"1"}},null,-1),sd=pe("div",{style:{flex:"1"}},null,-1),ld={props:{protein:{type:Number,default:0},fat:{type:Number,default:0},carbs:{type:Number,default:0},proteinSetpoint:{type:Number,default:0},fatSetpoint:{type:Number,default:0},carbsSetpoint:{type:Number,default:0}},computed:{calories(){return 4*this.protein+4*this.carbs+9*this.fat},caloriesSetpoint(){return 4*this.proteinSetpoint+4*this.fatSetpoint+9*this.carbsSetpoint}}},fd=at({...ld,__name:"InfoPanel",setup(e){return(t,n)=>{const r=ps("font-awesome-icon");return Ge(),Tt("div",id,[D(r,{icon:"fa-solid fa-chevron-left"}),od,D(Un,{text:"Protein",value:e.protein,unit:"g",setpoint:e.proteinSetpoint},null,8,["value","setpoint"]),D(Un,{text:"Fat",value:e.fat,unit:"g",setpoint:e.fatSetpoint},null,8,["value","setpoint"]),D(Un,{text:"Carbs",value:e.carbs,unit:"g",setpoint:e.carbsSetpoint},null,8,["value","setpoint"]),D(Un,{text:"Calories",value:t.calories,unit:"",setpoint:t.caloriesSetpoint},null,8,["value","setpoint"]),sd,D(r,{icon:"fa-solid fa-chevron-right"})])}}});const cd={data(){return{count:0}}},ud="/dietdraft/client/dist/assets/sandwich-fd87c2f2.svg";const dd=pe("div",{class:"food-icon"},[pe("img",{src:ud})],-1),md={key:0,class:"food-quantity"},pd=pe("div",{class:"food-name"},[pe("span",null,"Emp. gallega")],-1);function hd(e,t,n,r,a,i){return Ge(),Tt("div",{class:vr(["food-item",{selected:a.count>0}])},[pe("div",{class:"food-item-top",onClick:t[0]||(t[0]=o=>a.count++)}),pe("div",{class:"food-item-bottom",onClick:t[1]||(t[1]=o=>a.count--)}),dd,a.count>0?(Ge(),Tt("div",md,Zn(a.count),1)):oc("",!0),pd],2)}const ae=Wa(cd,[["render",hd]]),gd={class:"day-container"},vd=at({__name:"Day",setup(e){return(t,n)=>(Ge(),Tt("div",gd,[D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae),D(ae)]))}});const bd={class:"main-container"},yd={class:"main-info-panel-container"},_d={class:"main-day-container"},xd=at({__name:"MainView",setup(e){return(t,n)=>{const r=ps("font-awesome-icon");return Ge(),Tt(Ie,null,[D(ed,null,{"right-icon":ss(()=>[D(r,{icon:"fa-solid fa-map"})]),_:1}),pe("div",bd,[pe("div",yd,[D(fd,{protein:100,fat:100,carbs:100,"protein-setpoint":150,"fat-setpoint":200,"carbs-setpoint":150})]),pe("div",_d,[D(vd)])])],64)}}});const wd=Bu({history:au("/dietdraft/client/dist/"),routes:[{path:"/",name:"main",component:xd}]});function to(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?to(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):to(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ur(e){return ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ur(e)}function Ed(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function no(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function kd(e,t,n){return t&&no(e.prototype,t),n&&no(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ya(e,t){return Od(e)||Cd(e,t)||Ds(e,t)||Rd()}function Nn(e){return Ad(e)||Pd(e)||Ds(e)||Sd()}function Ad(e){if(Array.isArray(e))return fa(e)}function Od(e){if(Array.isArray(e))return e}function Pd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ds(e,t){if(e){if(typeof e=="string")return fa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fa(e,t)}}function fa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Sd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ro=function(){},Ka={},Bs={},Hs=null,Us={mark:ro,measure:ro};try{typeof window<"u"&&(Ka=window),typeof document<"u"&&(Bs=document),typeof MutationObserver<"u"&&(Hs=MutationObserver),typeof performance<"u"&&(Us=performance)}catch{}var Id=Ka.navigator||{},ao=Id.userAgent,io=ao===void 0?"":ao,vt=Ka,ne=Bs,oo=Hs,Wn=Us;vt.document;var ot=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",Ws=~io.indexOf("MSIE")||~io.indexOf("Trident/"),Yn,Kn,qn,Vn,Xn,tt="___FONT_AWESOME___",ca=16,Ys="fa",Ks="svg-inline--fa",Nt="data-fa-i2svg",ua="data-fa-pseudo-element",Td="data-fa-pseudo-element-pending",qa="data-prefix",Va="data-icon",so="fontawesome-i2svg",Nd="async",Md=["HTML","HEAD","STYLE","SCRIPT"],qs=function(){try{return!0}catch{return!1}}(),te="classic",ce="sharp",Xa=[te,ce];function Mn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var Pn=Mn((Yn={},he(Yn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),he(Yn,ce,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Yn)),Cn=Mn((Kn={},he(Kn,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),he(Kn,ce,{solid:"fass",regular:"fasr"}),Kn)),Sn=Mn((qn={},he(qn,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),he(qn,ce,{fass:"fa-solid",fasr:"fa-regular"}),qn)),Fd=Mn((Vn={},he(Vn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),he(Vn,ce,{"fa-solid":"fass","fa-regular":"fasr"}),Vn)),Ld=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Vs="fa-layers-text",$d=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,jd=Mn((Xn={},he(Xn,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),he(Xn,ce,{900:"fass",400:"fasr"}),Xn)),Xs=[1,2,3,4,5,6,7,8,9,10],zd=Xs.concat([11,12,13,14,15,16,17,18,19,20]),Dd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rn=new Set;Object.keys(Cn[te]).map(Rn.add.bind(Rn));Object.keys(Cn[ce]).map(Rn.add.bind(Rn));var Bd=[].concat(Xa,Nn(Rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pt.GROUP,Pt.SWAP_OPACITY,Pt.PRIMARY,Pt.SECONDARY]).concat(Xs.map(function(e){return"".concat(e,"x")})).concat(zd.map(function(e){return"w-".concat(e)})),vn=vt.FontAwesomeConfig||{};function Hd(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ud(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var Wd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wd.forEach(function(e){var t=Ya(e,2),n=t[0],r=t[1],a=Ud(Hd(n));a!=null&&(vn[r]=a)})}var Gs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ys,replacementClass:Ks,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vn.familyPrefix&&(vn.cssPrefix=vn.familyPrefix);var Zt=T(T({},Gs),vn);Zt.autoReplaceSvg||(Zt.observeMutations=!1);var M={};Object.keys(Gs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Zt[e]=n,bn.forEach(function(r){return r(M)})},get:function(){return Zt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Zt.cssPrefix=t,bn.forEach(function(n){return n(M)})},get:function(){return Zt.cssPrefix}});vt.FontAwesomeConfig=M;var bn=[];function Yd(e){return bn.push(e),function(){bn.splice(bn.indexOf(e),1)}}var ct=ca,Ve={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kd(e){if(!(!e||!ot)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ne.head.insertBefore(t,r),e}}var qd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function In(){for(var e=12,t="";e-- >0;)t+=qd[Math.random()*62|0];return t}function rn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ga(e){return e.classList?rn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Qs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Qs(e[n]),'" ')},"").trim()}function Rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Qa(e){return e.size!==Ve.size||e.x!==Ve.x||e.y!==Ve.y||e.rotate!==Ve.rotate||e.flipX||e.flipY}function Xd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Gd(e){var t=e.transform,n=e.width,r=n===void 0?ca:n,a=e.height,i=a===void 0?ca:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ws?l+="translate(".concat(t.x/ct-r/2,"em, ").concat(t.y/ct-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ct,"em), calc(-50% + ").concat(t.y/ct,"em)) "):l+="translate(".concat(t.x/ct,"em, ").concat(t.y/ct,"em) "),l+="scale(".concat(t.size/ct*(t.flipX?-1:1),", ").concat(t.size/ct*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Qd=`:root, :host {
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
}`;function Js(){var e=Ys,t=Ks,n=M.cssPrefix,r=M.replacementClass,a=Qd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var lo=!1;function Yr(){M.autoAddCss&&!lo&&(Kd(Js()),lo=!0)}var Jd={mixout:function(){return{dom:{css:Js,insertCss:Yr}}},hooks:function(){return{beforeDOMElementCreation:function(){Yr()},beforeI2svg:function(){Yr()}}}},nt=vt||{};nt[tt]||(nt[tt]={});nt[tt].styles||(nt[tt].styles={});nt[tt].hooks||(nt[tt].hooks={});nt[tt].shims||(nt[tt].shims=[]);var ze=nt[tt],Zs=[],Zd=function e(){ne.removeEventListener("DOMContentLoaded",e),dr=1,Zs.map(function(t){return t()})},dr=!1;ot&&(dr=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),dr||ne.addEventListener("DOMContentLoaded",Zd));function em(e){ot&&(dr?setTimeout(e,0):Zs.push(e))}function Fn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Qs(e):"<".concat(t," ").concat(Vd(r),">").concat(i.map(Fn).join(""),"</").concat(t,">")}function fo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var tm=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Kr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?tm(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function nm(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function da(e){var t=nm(e);return t.length===1?t[0].toString(16):null}function rm(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function co(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ma(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=co(t);typeof ze.hooks.addPack=="function"&&!a?ze.hooks.addPack(e,co(t)):ze.styles[e]=T(T({},ze.styles[e]||{}),i),e==="fas"&&ma("fa",t)}var Gn,Qn,Jn,Bt=ze.styles,am=ze.shims,im=(Gn={},he(Gn,te,Object.values(Sn[te])),he(Gn,ce,Object.values(Sn[ce])),Gn),Ja=null,el={},tl={},nl={},rl={},al={},om=(Qn={},he(Qn,te,Object.keys(Pn[te])),he(Qn,ce,Object.keys(Pn[ce])),Qn);function sm(e){return~Bd.indexOf(e)}function lm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!sm(a)?a:null}var il=function(){var t=function(i){return Kr(Bt,function(o,s,l){return o[l]=Kr(s,i,{}),o},{})};el=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),tl=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),al=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Bt||M.autoFetchSvg,r=Kr(am,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});nl=r.names,rl=r.unicodes,Ja=Ir(M.styleDefault,{family:M.familyDefault})};Yd(function(e){Ja=Ir(e.styleDefault,{family:M.familyDefault})});il();function Za(e,t){return(el[e]||{})[t]}function fm(e,t){return(tl[e]||{})[t]}function Ct(e,t){return(al[e]||{})[t]}function ol(e){return nl[e]||{prefix:null,iconName:null}}function cm(e){var t=rl[e],n=Za("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bt(){return Ja}var ei=function(){return{prefix:null,iconName:null,rest:[]}};function Ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=Pn[r][e],i=Cn[r][e]||Cn[r][a],o=e in ze.styles?e:null;return i||o||null}var uo=(Jn={},he(Jn,te,Object.keys(Sn[te])),he(Jn,ce,Object.keys(Sn[ce])),Jn);function Tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},he(t,te,"".concat(M.cssPrefix,"-").concat(te)),he(t,ce,"".concat(M.cssPrefix,"-").concat(ce)),t),o=null,s=te;(e.includes(i[te])||e.some(function(c){return uo[te].includes(c)}))&&(s=te),(e.includes(i[ce])||e.some(function(c){return uo[ce].includes(c)}))&&(s=ce);var l=e.reduce(function(c,f){var d=lm(M.cssPrefix,f);if(Bt[f]?(f=im[s].includes(f)?Fd[s][f]:f,o=f,c.prefix=f):om[s].indexOf(f)>-1?(o=f,c.prefix=Ir(f,{family:s})):d?c.iconName=d:f!==M.replacementClass&&f!==i[te]&&f!==i[ce]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?ol(c.iconName):{},g=Ct(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Bt.far&&Bt.fas&&!M.autoFetchSvg&&(c.prefix="fas")}return c},ei());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ce&&(Bt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=bt()||"fas"),l}var um=function(){function e(){Ed(this,e),this.definitions={}}return kd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),ma(s,o[s]);var l=Sn[te][s];l&&ma(l,o[s]),il()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),mo=[],Ht={},qt={},dm=Object.keys(qt);function mm(e,t){var n=t.mixoutsTo;return mo=e,Ht={},Object.keys(qt).forEach(function(r){dm.indexOf(r)===-1&&delete qt[r]}),mo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ur(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ht[o]||(Ht[o]=[]),Ht[o].push(i[o])})}r.provides&&r.provides(qt)}),n}function pa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ht[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function rt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qt[e]?qt[e].apply(null,t):void 0}function ha(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||bt();if(t)return t=Ct(n,t)||t,fo(sl.definitions,n,t)||fo(ze.styles,n,t)}var sl=new um,pm=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Mt("noAuto")},hm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ot?(Mt("beforeI2svg",t),rt("pseudoElements2svg",t),rt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,em(function(){vm({autoReplaceSvgRoot:n}),Mt("watch",t)})}},gm={icon:function(t){if(t===null)return null;if(ur(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ir(t[0]);return{prefix:r,iconName:Ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Ld))){var a=Tr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||bt(),iconName:Ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=bt();return{prefix:i,iconName:Ct(i,t)||t}}}},Se={noAuto:pm,config:M,dom:hm,parse:gm,library:sl,findIconDefinition:ha,toHtml:Fn},vm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(ze.styles).length>0||M.autoFetchSvg)&&ot&&M.autoReplaceSvg&&Se.dom.i2svg({node:r})};function Nr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Fn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ot){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function bm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Qa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Rr(T(T({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ym(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function ti(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,S=A.width,F=A.height,b=a==="fak",x=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ye){return d.classes.indexOf(ye)===-1}).filter(function(ye){return ye!==""||!!ye}).concat(d.classes).join(" "),O={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(F)})},z=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/F*16*.0625,"em")}:{};g&&(O.attributes[Nt]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(f||In())},children:[l]}),delete O.attributes.title);var Y=T(T({},O),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:T(T({},z),d.styles)}),re=r.found&&n.found?rt("generateAbstractMask",Y)||{children:[],attributes:{}}:rt("generateAbstractIcon",Y)||{children:[],attributes:{}},fe=re.children,Pe=re.attributes;return Y.children=fe,Y.attributes=Pe,s?ym(Y):bm(Y)}function po(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Nt]="");var f=T({},o.styles);Qa(a)&&(f.transform=Gd({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Rr(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function _m(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var qr=ze.styles;function ga(e){var t=e[0],n=e[1],r=e.slice(4),a=Ya(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Pt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Pt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var xm={found:!1,width:512,height:512};function wm(e,t){!qs&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function va(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=bt()),new Promise(function(r,a){if(rt("missingIconAbstract"),n==="fa"){var i=ol(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&qr[t]&&qr[t][e]){var o=qr[t][e];return r(ga(o))}wm(e,t),r(T(T({},xm),{},{icon:M.showMissingIcons&&e?rt("missingIconAbstract")||{}:{}}))})}var ho=function(){},ba=M.measurePerformance&&Wn&&Wn.mark&&Wn.measure?Wn:{mark:ho,measure:ho},cn='FA "6.3.0"',Em=function(t){return ba.mark("".concat(cn," ").concat(t," begins")),function(){return ll(t)}},ll=function(t){ba.mark("".concat(cn," ").concat(t," ends")),ba.measure("".concat(cn," ").concat(t),"".concat(cn," ").concat(t," begins"),"".concat(cn," ").concat(t," ends"))},ni={begin:Em,end:ll},rr=function(){};function go(e){var t=e.getAttribute?e.getAttribute(Nt):null;return typeof t=="string"}function km(e){var t=e.getAttribute?e.getAttribute(qa):null,n=e.getAttribute?e.getAttribute(Va):null;return t&&n}function Am(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Om(){if(M.autoReplaceSvg===!0)return ar.replace;var e=ar[M.autoReplaceSvg];return e||ar.replace}function Pm(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function Cm(e){return ne.createElement(e)}function fl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Pm:Cm:n;if(typeof e=="string")return ne.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(fl(o,{ceFn:r}))}),a}function Sm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ar={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(fl(a),n)}),n.getAttribute(Nt)===null&&M.keepOriginalSource){var r=ne.createComment(Sm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ga(n).indexOf(M.replacementClass))return ar.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Fn(s)}).join(`
`);n.setAttribute(Nt,""),n.innerHTML=o}};function vo(e){e()}function cl(e,t){var n=typeof t=="function"?t:rr;if(e.length===0)n();else{var r=vo;M.mutateApproach===Nd&&(r=vt.requestAnimationFrame||vo),r(function(){var a=Om(),i=ni.begin("mutate");e.map(a),i(),n()})}}var ri=!1;function ul(){ri=!0}function ya(){ri=!1}var mr=null;function bo(e){if(oo&&M.observeMutations){var t=e.treeCallback,n=t===void 0?rr:t,r=e.nodeCallback,a=r===void 0?rr:r,i=e.pseudoElementsCallback,o=i===void 0?rr:i,s=e.observeMutationsRoot,l=s===void 0?ne:s;mr=new oo(function(c){if(!ri){var f=bt();rn(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!go(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&go(d.target)&&~Dd.indexOf(d.attributeName))if(d.attributeName==="class"&&km(d.target)){var p=Tr(Ga(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(qa,g||f),A&&d.target.setAttribute(Va,A)}else Am(d.target)&&a(d.target)})}}),ot&&mr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Rm(){mr&&mr.disconnect()}function Im(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Tm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Tr(Ga(e));return a.prefix||(a.prefix=bt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=fm(a.prefix,e.innerText)||Za(a.prefix,da(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Nm(e){var t=rn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||In()):(t["aria-hidden"]="true",t.focusable="false")),t}function Mm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ve,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Tm(e),r=n.iconName,a=n.prefix,i=n.rest,o=Nm(e),s=pa("parseNodeAttributes",{},e),l=t.styleParser?Im(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ve,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Fm=ze.styles;function dl(e){var t=M.autoReplaceSvg==="nest"?yo(e,{styleParser:!1}):yo(e);return~t.extra.classes.indexOf(Vs)?rt("generateLayersText",e,t):rt("generateSvgReplacementMutation",e,t)}var yt=new Set;Xa.map(function(e){yt.add("fa-".concat(e))});Object.keys(Pn[te]).map(yt.add.bind(yt));Object.keys(Pn[ce]).map(yt.add.bind(yt));yt=Nn(yt);function _o(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ot)return Promise.resolve();var n=ne.documentElement.classList,r=function(d){return n.add("".concat(so,"-").concat(d))},a=function(d){return n.remove("".concat(so,"-").concat(d))},i=M.autoFetchSvg?yt:Xa.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Fm));i.includes("fa")||i.push("fa");var o=[".".concat(Vs,":not([").concat(Nt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Nt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ni.begin("onTree"),c=s.reduce(function(f,d){try{var p=dl(d);p&&f.push(p)}catch(g){qs||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){cl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function Lm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dl(e).then(function(n){n&&cl([n],t)})}function $m(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ha(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ha(a||{})),e(r,T(T({},n),{},{mask:a}))}}var jm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ve:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,S=n.classes,F=S===void 0?[]:S,b=n.attributes,x=b===void 0?{}:b,O=n.styles,z=O===void 0?{}:O;if(t){var Y=t.prefix,re=t.iconName,fe=t.icon;return Nr(T({type:"icon"},t),function(){return Mt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?x["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||In()):(x["aria-hidden"]="true",x.focusable="false")),ti({icons:{main:ga(fe),mask:l?ga(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:re,transform:T(T({},Ve),a),symbol:o,title:p,maskId:f,titleId:A,extra:{attributes:x,styles:z,classes:F}})})}},zm={mixout:function(){return{icon:$m(jm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_o,n.nodeCallback=Lm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,i=n.callback,o=i===void 0?function(){}:i;return _o(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([va(a,s),f.iconName?va(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var F=Ya(S,2),b=F[0],x=F[1];g([n,ti({icons:{main:b,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Rr(s);l.length>0&&(a.style=l);var c;return Qa(o)&&(c=rt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Dm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Nr({type:"layer"},function(){Mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Nn(i)).join(" ")},children:o}]})}}}},Bm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Nr({type:"counter",content:n},function(){return Mt("beforeDOMElementCreation",{content:n,params:r}),_m({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Nn(s))}})})}}}},Hm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ve:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return Nr({type:"text",content:n},function(){return Mt("beforeDOMElementCreation",{content:n,params:r}),po({content:n,transform:T(T({},Ve),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Nn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ws){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,po({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Um=new RegExp('"',"ug"),xo=[1105920,1112319];function Wm(e){var t=e.replace(Um,""),n=rm(t,0),r=n>=xo[0]&&n<=xo[1],a=t.length===2?t[0]===t[1]:!1;return{value:da(a?t[0]:t),isSecondary:r||a}}function wo(e,t){var n="".concat(Td).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=rn(e.children),o=i.filter(function(fe){return fe.getAttribute(ua)===t})[0],s=vt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match($d),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ce:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Cn[p][l[2].toLowerCase()]:jd[p][c],A=Wm(d),S=A.value,F=A.isSecondary,b=l[0].startsWith("FontAwesome"),x=Za(g,S),O=x;if(b){var z=cm(S);z.iconName&&z.prefix&&(x=z.iconName,g=z.prefix)}if(x&&!F&&(!o||o.getAttribute(qa)!==g||o.getAttribute(Va)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var Y=Mm(),re=Y.extra;re.attributes[ua]=t,va(x,g).then(function(fe){var Pe=ti(T(T({},Y),{},{icons:{main:fe,mask:ei()},prefix:g,iconName:O,extra:re,watchable:!0})),ye=ne.createElement("svg");t==="::before"?e.insertBefore(ye,e.firstChild):e.appendChild(ye),ye.outerHTML=Pe.map(function(Re){return Fn(Re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ym(e){return Promise.all([wo(e,"::before"),wo(e,"::after")])}function Km(e){return e.parentNode!==document.head&&!~Md.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ua)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Eo(e){if(ot)return new Promise(function(t,n){var r=rn(e.querySelectorAll("*")).filter(Km).map(Ym),a=ni.begin("searchPseudoElements");ul(),Promise.all(r).then(function(){a(),ya(),t()}).catch(function(){a(),ya(),n()})})}var qm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Eo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;M.searchPseudoElements&&Eo(a)}}},ko=!1,Vm={mixout:function(){return{dom:{unwatch:function(){ul(),ko=!0}}}},hooks:function(){return{bootstrap:function(){bo(pa("mutationObserverCallbacks",{}))},noAuto:function(){Rm()},watch:function(n){var r=n.observeMutationsRoot;ko?ya():bo(pa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ao=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Xm={mixout:function(){return{parse:{transform:function(n){return Ao(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ao(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Vr={x:0,y:0,width:"100%",height:"100%"};function Oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Gm(e){return e.tag==="g"?e.children:[e]}var Qm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Tr(a.split(" ").map(function(o){return o.trim()})):ei();return i.prefix||(i.prefix=bt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,g=Xd({transform:l,containerWidth:d,iconWidth:c}),A={tag:"rect",attributes:T(T({},Vr),{},{fill:"white"})},S=f.children?{children:f.children.map(Oo)}:{},F={tag:"g",attributes:T({},g.inner),children:[Oo(T({tag:f.tag,attributes:T(T({},f.attributes),g.path)},S))]},b={tag:"g",attributes:T({},g.outer),children:[F]},x="mask-".concat(s||In()),O="clip-".concat(s||In()),z={tag:"mask",attributes:T(T({},Vr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Gm(p)},z]};return r.push(Y,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(x,")")},Vr)}),{children:r,attributes:a}}}},Jm={provides:function(t){var n=!1;vt.matchMedia&&(n=vt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Zm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ep=[Jd,zm,Dm,Bm,Hm,qm,Vm,Xm,Qm,Jm,Zm];mm(ep,{mixoutsTo:Se});Se.noAuto;var ml=Se.config,ai=Se.library;Se.dom;var pr=Se.parse;Se.findIconDefinition;Se.toHtml;var tp=Se.icon;Se.layer;var np=Se.text;Se.counter;var rp={prefix:"fas",iconName:"map",icon:[576,512,[128506,62072],"f279","M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"]},ap={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},ip={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};function Po(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Po(Object(n),!0).forEach(function(r){ke(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Po(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hr(e){return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(e)}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function op(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function sp(e,t){if(e==null)return{};var n=op(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _a(e){return lp(e)||fp(e)||cp(e)||up()}function lp(e){if(Array.isArray(e))return xa(e)}function fp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cp(e,t){if(e){if(typeof e=="string")return xa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xa(e,t)}}function xa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function up(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pl={exports:{}};(function(e){(function(t){var n=function(b,x,O){if(!c(x)||d(x)||p(x)||g(x)||l(x))return x;var z,Y=0,re=0;if(f(x))for(z=[],re=x.length;Y<re;Y++)z.push(n(b,x[Y],O));else{z={};for(var fe in x)Object.prototype.hasOwnProperty.call(x,fe)&&(z[b(fe,O)]=n(b,x[fe],O))}return z},r=function(b,x){x=x||{};var O=x.separator||"_",z=x.split||/(?=[A-Z])/;return b.split(z).join(O)},a=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(x,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var x=a(b);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(b,x){return r(b,x).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},f=function(b){return s.call(b)=="[object Array]"},d=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},S=function(b,x){var O=x&&"process"in x?x.process:x;return typeof O!="function"?b:function(z,Y){return O(z,b,Y)}},F={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,x){return n(S(a,x),b)},decamelizeKeys:function(b,x){return n(S(o,x),b,x)},pascalizeKeys:function(b,x){return n(S(i,x),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(dp)})(pl);var mp=pl.exports,pp=["class","style"];function hp(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=mp.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function gp(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ii(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=gp(f);break;case"style":l.style=hp(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=sp(n,pp);return Cr(e.tag,$e($e($e({},t),{},{class:a.class,style:$e($e({},a.style),o)},a.attrs),s),r)}var hl=!1;try{hl=!0}catch{}function vp(){if(!hl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function yn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ke({},e,t):{}}function bp(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ke(t,"fa-".concat(e.size),e.size!==null),ke(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ke(t,"fa-pull-".concat(e.pull),e.pull!==null),ke(t,"fa-swap-opacity",e.swapOpacity),ke(t,"fa-bounce",e.bounce),ke(t,"fa-shake",e.shake),ke(t,"fa-beat",e.beat),ke(t,"fa-fade",e.fade),ke(t,"fa-beat-fade",e.beatFade),ke(t,"fa-flash",e.flash),ke(t,"fa-spin-pulse",e.spinPulse),ke(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Co(e){if(e&&hr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(pr.icon)return pr.icon(e);if(e===null)return null;if(hr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var yp=at({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=se(function(){return Co(t.icon)}),i=se(function(){return yn("classes",bp(t))}),o=se(function(){return yn("transform",typeof t.transform=="string"?pr.transform(t.transform):t.transform)}),s=se(function(){return yn("mask",Co(t.mask))}),l=se(function(){return tp(a.value,$e($e($e($e({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});un(l,function(f){if(!f)return vp("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=se(function(){return l.value?ii(l.value.abstract[0],{},r):null});return function(){return c.value}}});at({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ml.familyPrefix,i=se(function(){return["".concat(a,"-layers")].concat(_a(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Cr("div",{class:i.value},r.default?r.default():[])}}});at({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ml.familyPrefix,i=se(function(){return yn("classes",[].concat(_a(t.counter?["".concat(a,"-layers-counter")]:[]),_a(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=se(function(){return yn("transform",typeof t.transform=="string"?pr.transform(t.transform):t.transform)}),s=se(function(){var c=np(t.value.toString(),$e($e({},o.value),i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=se(function(){return ii(s.value,{},r)});return function(){return l.value}}});const Mr=zc(Uu),_p=Ku();Mr.use(wd);Mr.use(_p);ai.add(ap);ai.add(ip);ai.add(rp);Mr.component("font-awesome-icon",yp);Mr.mount("#app");
