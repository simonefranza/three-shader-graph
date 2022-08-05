var Hd=Object.defineProperty;var Gd=(n,e,t)=>e in n?Hd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var j=(n,e,t)=>(Gd(n,typeof e!="symbol"?e+"":e,t),t),al=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var Me=(n,e,t)=>(al(n,e,"read from private field"),t?t.call(n):e.get(n)),Qe=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},Ve=(n,e,t,i)=>(al(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t);const Wd=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};Wd();function Da(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const $d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qd=Da($d);function Jc(n){return!!n||n===""}function ki(n){if(De(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=ut(i)?Kd(i):ki(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(ut(n))return n;if(ft(n))return n}}const Xd=/;(?![^(]*\))/g,jd=/:(.+)/;function Kd(n){const e={};return n.split(Xd).forEach(t=>{if(t){const i=t.split(jd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function _t(n){let e="";if(ut(n))e=n;else if(De(n))for(let t=0;t<n.length;t++){const i=_t(n[t]);i&&(e+=i+" ")}else if(ft(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const wt=n=>ut(n)?n:n==null?"":De(n)||ft(n)&&(n.toString===nh||!ke(n.toString))?JSON.stringify(n,Qc,2):String(n),Qc=(n,e)=>e&&e.__v_isRef?Qc(n,e.value):cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:eh(e)?{[`Set(${e.size})`]:[...e.values()]}:ft(e)&&!De(e)&&!ih(e)?String(e):e,et={},ls=[],Jt=()=>{},Yd=()=>!1,Zd=/^on[^a-z]/,no=n=>Zd.test(n),Ia=n=>n.startsWith("onUpdate:"),At=Object.assign,ka=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Jd=Object.prototype.hasOwnProperty,Ge=(n,e)=>Jd.call(n,e),De=Array.isArray,cs=n=>io(n)==="[object Map]",eh=n=>io(n)==="[object Set]",ke=n=>typeof n=="function",ut=n=>typeof n=="string",Na=n=>typeof n=="symbol",ft=n=>n!==null&&typeof n=="object",th=n=>ft(n)&&ke(n.then)&&ke(n.catch),nh=Object.prototype.toString,io=n=>nh.call(n),Qd=n=>io(n).slice(8,-1),ih=n=>io(n)==="[object Object]",Fa=n=>ut(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Gr=Da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),so=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},eu=/-(\w)/g,yn=so(n=>n.replace(eu,(e,t)=>t?t.toUpperCase():"")),tu=/\B([A-Z])/g,Ts=so(n=>n.replace(tu,"-$1").toLowerCase()),ro=so(n=>n.charAt(0).toUpperCase()+n.slice(1)),So=so(n=>n?`on${ro(n)}`:""),Kr=(n,e)=>!Object.is(n,e),Wr=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Yr=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},ca=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ll;const nu=()=>ll||(ll=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let dn;class iu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&dn&&(this.parent=dn,this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=dn;try{return dn=this,e()}finally{dn=t}}}on(){dn=this}off(){dn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function su(n,e=dn){e&&e.active&&e.effects.push(n)}const za=n=>{const e=new Set(n);return e.w=0,e.n=0,e},sh=n=>(n.w&Zn)>0,rh=n=>(n.n&Zn)>0,ru=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Zn},ou=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];sh(s)&&!rh(s)?s.delete(n):e[t++]=s,s.w&=~Zn,s.n&=~Zn}e.length=t}},ha=new WeakMap;let Hs=0,Zn=1;const da=30;let Xt;const Li=Symbol(""),ua=Symbol("");class Oa{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,su(this,i)}run(){if(!this.active)return this.fn();let e=Xt,t=Xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xt,Xt=this,Xn=!0,Zn=1<<++Hs,Hs<=da?ru(this):cl(this),this.fn()}finally{Hs<=da&&ou(this),Zn=1<<--Hs,Xt=this.parent,Xn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xt===this?this.deferStop=!0:this.active&&(cl(this),this.onStop&&this.onStop(),this.active=!1)}}function cl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Xn=!0;const oh=[];function Ps(){oh.push(Xn),Xn=!1}function As(){const n=oh.pop();Xn=n===void 0?!0:n}function Ot(n,e,t){if(Xn&&Xt){let i=ha.get(n);i||ha.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=za()),ah(s)}}function ah(n,e){let t=!1;Hs<=da?rh(n)||(n.n|=Zn,t=!sh(n)):t=!n.has(Xt),t&&(n.add(Xt),Xt.deps.push(n))}function In(n,e,t,i,s,r){const o=ha.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&De(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":De(n)?Fa(t)&&a.push(o.get("length")):(a.push(o.get(Li)),cs(n)&&a.push(o.get(ua)));break;case"delete":De(n)||(a.push(o.get(Li)),cs(n)&&a.push(o.get(ua)));break;case"set":cs(n)&&a.push(o.get(Li));break}if(a.length===1)a[0]&&fa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);fa(za(l))}}function fa(n,e){const t=De(n)?n:[...n];for(const i of t)i.computed&&hl(i);for(const i of t)i.computed||hl(i)}function hl(n,e){(n!==Xt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const au=Da("__proto__,__v_isRef,__isVue"),lh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Na)),lu=Ba(),cu=Ba(!1,!0),hu=Ba(!0),dl=du();function du(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Je(this);for(let r=0,o=this.length;r<o;r++)Ot(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(Je)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ps();const i=Je(this)[e].apply(this,t);return As(),i}}),n}function Ba(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?Tu:fh:e?uh:dh).get(i))return i;const o=De(i);if(!n&&o&&Ge(dl,s))return Reflect.get(dl,s,r);const a=Reflect.get(i,s,r);return(Na(s)?lh.has(s):au(s))||(n||Ot(i,"get",s),e)?a:Pt(a)?o&&Fa(s)?a:a.value:ft(a)?n?ph(a):Ha(a):a}}const uu=ch(),fu=ch(!0);function ch(n=!1){return function(t,i,s,r){let o=t[i];if(Ys(o)&&Pt(o)&&!Pt(s))return!1;if(!n&&!Ys(s)&&(pa(s)||(s=Je(s),o=Je(o)),!De(t)&&Pt(o)&&!Pt(s)))return o.value=s,!0;const a=De(t)&&Fa(i)?Number(i)<t.length:Ge(t,i),l=Reflect.set(t,i,s,r);return t===Je(r)&&(a?Kr(s,o)&&In(t,"set",i,s):In(t,"add",i,s)),l}}function pu(n,e){const t=Ge(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&In(n,"delete",e,void 0),i}function mu(n,e){const t=Reflect.has(n,e);return(!Na(e)||!lh.has(e))&&Ot(n,"has",e),t}function gu(n){return Ot(n,"iterate",De(n)?"length":Li),Reflect.ownKeys(n)}const hh={get:lu,set:uu,deleteProperty:pu,has:mu,ownKeys:gu},vu={get:hu,set(n,e){return!0},deleteProperty(n,e){return!0}},_u=At({},hh,{get:cu,set:fu}),Va=n=>n,oo=n=>Reflect.getPrototypeOf(n);function vr(n,e,t=!1,i=!1){n=n.__v_raw;const s=Je(n),r=Je(e);t||(e!==r&&Ot(s,"get",e),Ot(s,"get",r));const{has:o}=oo(s),a=i?Va:t?$a:Wa;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function _r(n,e=!1){const t=this.__v_raw,i=Je(t),s=Je(n);return e||(n!==s&&Ot(i,"has",n),Ot(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function xr(n,e=!1){return n=n.__v_raw,!e&&Ot(Je(n),"iterate",Li),Reflect.get(n,"size",n)}function ul(n){n=Je(n);const e=Je(this);return oo(e).has.call(e,n)||(e.add(n),In(e,"add",n,n)),this}function fl(n,e){e=Je(e);const t=Je(this),{has:i,get:s}=oo(t);let r=i.call(t,n);r||(n=Je(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?Kr(e,o)&&In(t,"set",n,e):In(t,"add",n,e),this}function pl(n){const e=Je(this),{has:t,get:i}=oo(e);let s=t.call(e,n);s||(n=Je(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&In(e,"delete",n,void 0),r}function ml(){const n=Je(this),e=n.size!==0,t=n.clear();return e&&In(n,"clear",void 0,void 0),t}function br(n,e){return function(i,s){const r=this,o=r.__v_raw,a=Je(o),l=e?Va:n?$a:Wa;return!n&&Ot(a,"iterate",Li),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function yr(n,e,t){return function(...i){const s=this.__v_raw,r=Je(s),o=cs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?Va:e?$a:Wa;return!e&&Ot(r,"iterate",l?ua:Li),{next(){const{value:d,done:u}=c.next();return u?{value:d,done:u}:{value:a?[h(d[0]),h(d[1])]:h(d),done:u}},[Symbol.iterator](){return this}}}}function Fn(n){return function(...e){return n==="delete"?!1:this}}function xu(){const n={get(r){return vr(this,r)},get size(){return xr(this)},has:_r,add:ul,set:fl,delete:pl,clear:ml,forEach:br(!1,!1)},e={get(r){return vr(this,r,!1,!0)},get size(){return xr(this)},has:_r,add:ul,set:fl,delete:pl,clear:ml,forEach:br(!1,!0)},t={get(r){return vr(this,r,!0)},get size(){return xr(this,!0)},has(r){return _r.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:br(!0,!1)},i={get(r){return vr(this,r,!0,!0)},get size(){return xr(this,!0)},has(r){return _r.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:br(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=yr(r,!1,!1),t[r]=yr(r,!0,!1),e[r]=yr(r,!1,!0),i[r]=yr(r,!0,!0)}),[n,t,e,i]}const[bu,yu,Mu,wu]=xu();function Ua(n,e){const t=e?n?wu:Mu:n?yu:bu;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Ge(t,s)&&s in i?t:i,s,r)}const Su={get:Ua(!1,!1)},Eu={get:Ua(!1,!0)},Cu={get:Ua(!0,!1)},dh=new WeakMap,uh=new WeakMap,fh=new WeakMap,Tu=new WeakMap;function Pu(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Au(n){return n.__v_skip||!Object.isExtensible(n)?0:Pu(Qd(n))}function Ha(n){return Ys(n)?n:Ga(n,!1,hh,Su,dh)}function Lu(n){return Ga(n,!1,_u,Eu,uh)}function ph(n){return Ga(n,!0,vu,Cu,fh)}function Ga(n,e,t,i,s){if(!ft(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Au(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function hs(n){return Ys(n)?hs(n.__v_raw):!!(n&&n.__v_isReactive)}function Ys(n){return!!(n&&n.__v_isReadonly)}function pa(n){return!!(n&&n.__v_isShallow)}function mh(n){return hs(n)||Ys(n)}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function gh(n){return Yr(n,"__v_skip",!0),n}const Wa=n=>ft(n)?Ha(n):n,$a=n=>ft(n)?ph(n):n;function Ru(n){Xn&&Xt&&(n=Je(n),ah(n.dep||(n.dep=za())))}function Du(n,e){n=Je(n),n.dep&&fa(n.dep)}function Pt(n){return!!(n&&n.__v_isRef===!0)}function Iu(n){return Pt(n)?n.value:n}const ku={get:(n,e,t)=>Iu(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Pt(s)&&!Pt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function vh(n){return hs(n)?n:new Proxy(n,ku)}class Nu{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Oa(e,()=>{this._dirty||(this._dirty=!0,Du(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Je(this);return Ru(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Fu(n,e,t=!1){let i,s;const r=ke(n);return r?(i=n,s=Jt):(i=n.get,s=n.set),new Nu(i,s,r||!s,t)}function jn(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){ao(r,e,t)}return s}function Qt(n,e,t,i){if(ke(n)){const r=jn(n,e,t,i);return r&&th(r)&&r.catch(o=>{ao(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(Qt(n[r],e,t,i));return s}function ao(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){jn(l,null,10,[n,o,a]);return}}zu(n,t,s,i)}function zu(n,e,t,i=!0){console.error(n)}let Zr=!1,ma=!1;const zt=[];let Ln=0;const Xs=[];let Gs=null,is=0;const js=[];let Wn=null,ss=0;const _h=Promise.resolve();let qa=null,ga=null;function Ou(n){const e=qa||_h;return n?e.then(this?n.bind(this):n):e}function Bu(n){let e=Ln+1,t=zt.length;for(;e<t;){const i=e+t>>>1;Zs(zt[i])<n?e=i+1:t=i}return e}function xh(n){(!zt.length||!zt.includes(n,Zr&&n.allowRecurse?Ln+1:Ln))&&n!==ga&&(n.id==null?zt.push(n):zt.splice(Bu(n.id),0,n),bh())}function bh(){!Zr&&!ma&&(ma=!0,qa=_h.then(wh))}function Vu(n){const e=zt.indexOf(n);e>Ln&&zt.splice(e,1)}function yh(n,e,t,i){De(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),bh()}function Uu(n){yh(n,Gs,Xs,is)}function Hu(n){yh(n,Wn,js,ss)}function lo(n,e=null){if(Xs.length){for(ga=e,Gs=[...new Set(Xs)],Xs.length=0,is=0;is<Gs.length;is++)Gs[is]();Gs=null,is=0,ga=null,lo(n,e)}}function Mh(n){if(lo(),js.length){const e=[...new Set(js)];if(js.length=0,Wn){Wn.push(...e);return}for(Wn=e,Wn.sort((t,i)=>Zs(t)-Zs(i)),ss=0;ss<Wn.length;ss++)Wn[ss]();Wn=null,ss=0}}const Zs=n=>n.id==null?1/0:n.id;function wh(n){ma=!1,Zr=!0,lo(n),zt.sort((t,i)=>Zs(t)-Zs(i));const e=Jt;try{for(Ln=0;Ln<zt.length;Ln++){const t=zt[Ln];t&&t.active!==!1&&jn(t,null,14)}}finally{Ln=0,zt.length=0,Mh(),Zr=!1,qa=null,(zt.length||Xs.length||js.length)&&wh(n)}}function Gu(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||et;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:u}=i[h]||et;u&&(s=t.map(m=>m.trim())),d&&(s=t.map(ca))}let a,l=i[a=So(e)]||i[a=So(yn(e))];!l&&r&&(l=i[a=So(Ts(e))]),l&&Qt(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Qt(c,n,6,s)}}function Sh(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const h=Sh(c,e,!0);h&&(a=!0,At(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(i.set(n,null),null):(De(r)?r.forEach(l=>o[l]=null):At(o,r),i.set(n,o),o)}function co(n,e){return!n||!no(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(n,e[0].toLowerCase()+e.slice(1))||Ge(n,Ts(e))||Ge(n,e))}let Kt=null,ho=null;function Jr(n){const e=Kt;return Kt=n,ho=n&&n.type.__scopeId||null,e}function Ls(n){ho=n}function Rs(){ho=null}function Wu(n,e=Kt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&El(-1);const r=Jr(e),o=n(...s);return Jr(r),i._d&&El(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Eo(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:h,renderCache:d,data:u,setupState:m,ctx:v,inheritAttrs:p}=n;let f,_;const S=Jr(n);try{if(t.shapeFlag&4){const E=s||i;f=pn(h.call(E,E,d,r,m,u,v)),_=l}else{const E=e;f=pn(E.length>1?E(r,{attrs:l,slots:a,emit:c}):E(r,null)),_=e.props?l:$u(l)}}catch(E){Ks.length=0,ao(E,n,1),f=lt(Fi)}let C=f;if(_&&p!==!1){const E=Object.keys(_),{shapeFlag:w}=C;E.length&&w&7&&(o&&E.some(Ia)&&(_=qu(_,o)),C=xs(C,_))}return t.dirs&&(C=xs(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),f=C,Jr(S),f}const $u=n=>{let e;for(const t in n)(t==="class"||t==="style"||no(t))&&((e||(e={}))[t]=n[t]);return e},qu=(n,e)=>{const t={};for(const i in n)(!Ia(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Xu(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?gl(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const u=h[d];if(o[u]!==i[u]&&!co(c,u))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?gl(i,o,c):!0:!!o;return!1}function gl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!co(t,r))return!0}return!1}function ju({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Ku=n=>n.__isSuspense;function Yu(n,e){e&&e.pendingBranch?De(n)?e.effects.push(...n):e.effects.push(n):Hu(n)}function Zu(n,e){if(gt){let t=gt.provides;const i=gt.parent&&gt.parent.provides;i===t&&(t=gt.provides=Object.create(i)),t[n]=e}}function Co(n,e,t=!1){const i=gt||Kt;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ke(e)?e.call(i.proxy):e}}const vl={};function To(n,e,t){return Eh(n,e,t)}function Eh(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:o}=et){const a=gt;let l,c=!1,h=!1;if(Pt(n)?(l=()=>n.value,c=pa(n)):hs(n)?(l=()=>n,i=!0):De(n)?(h=!0,c=n.some(_=>hs(_)||pa(_)),l=()=>n.map(_=>{if(Pt(_))return _.value;if(hs(_))return mi(_);if(ke(_))return jn(_,a,2)})):ke(n)?e?l=()=>jn(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Qt(n,a,3,[u])}:l=Jt,e&&i){const _=l;l=()=>mi(_())}let d,u=_=>{d=f.onStop=()=>{jn(_,a,4)}};if(Qs)return u=Jt,e?t&&Qt(e,a,3,[l(),h?[]:void 0,u]):l(),Jt;let m=h?[]:vl;const v=()=>{if(!!f.active)if(e){const _=f.run();(i||c||(h?_.some((S,C)=>Kr(S,m[C])):Kr(_,m)))&&(d&&d(),Qt(e,a,3,[_,m===vl?void 0:m,u]),m=_)}else f.run()};v.allowRecurse=!!e;let p;s==="sync"?p=v:s==="post"?p=()=>Dt(v,a&&a.suspense):p=()=>Uu(v);const f=new Oa(l,p);return e?t?v():m=f.run():s==="post"?Dt(f.run.bind(f),a&&a.suspense):f.run(),()=>{f.stop(),a&&a.scope&&ka(a.scope.effects,f)}}function Ju(n,e,t){const i=this.proxy,s=ut(n)?n.includes(".")?Ch(i,n):()=>i[n]:n.bind(i,i);let r;ke(e)?r=e:(r=e.handler,t=e);const o=gt;bs(this);const a=Eh(s,r.bind(i),t);return o?bs(o):Ri(),a}function Ch(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function mi(n,e){if(!ft(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Pt(n))mi(n.value,e);else if(De(n))for(let t=0;t<n.length;t++)mi(n[t],e);else if(eh(n)||cs(n))n.forEach(t=>{mi(t,e)});else if(ih(n))for(const t in n)mi(n[t],e);return n}function pt(n){return ke(n)?{setup:n,name:n.name}:n}const $r=n=>!!n.type.__asyncLoader,Th=n=>n.type.__isKeepAlive;function Qu(n,e){Ph(n,"a",e)}function ef(n,e){Ph(n,"da",e)}function Ph(n,e,t=gt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(uo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Th(s.parent.vnode)&&tf(i,e,t,s),s=s.parent}}function tf(n,e,t,i){const s=uo(e,n,i,!0);Ah(()=>{ka(i[e],s)},t)}function uo(n,e,t=gt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ps(),bs(t);const a=Qt(e,t,n,o);return Ri(),As(),a});return i?s.unshift(r):s.push(r),r}}const kn=n=>(e,t=gt)=>(!Qs||n==="sp")&&uo(n,e,t),nf=kn("bm"),sf=kn("m"),rf=kn("bu"),of=kn("u"),af=kn("bum"),Ah=kn("um"),lf=kn("sp"),cf=kn("rtg"),hf=kn("rtc");function df(n,e=gt){uo("ec",n,e)}function Lh(n,e){const t=Kt;if(t===null)return n;const i=po(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=et]=e[r];ke(o)&&(o={mounted:o,updated:o}),o.deep&&mi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function si(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ps(),Qt(l,t,8,[n.el,a,n,e]),As())}}const Rh="components";function Mt(n,e){return ff(Rh,n,!0,e)||n}const uf=Symbol();function ff(n,e,t=!0,i=!1){const s=Kt||gt;if(s){const r=s.type;if(n===Rh){const a=Gf(r,!1);if(a&&(a===e||a===yn(e)||a===ro(yn(e))))return r}const o=_l(s[n]||r[n],e)||_l(s.appContext[n],e);return!o&&i?r:o}}function _l(n,e){return n&&(n[e]||n[yn(e)]||n[ro(yn(e))])}function Ni(n,e,t,i){let s;const r=t&&t[i];if(De(n)||ut(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r&&r[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(ft(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r&&r[a])}}else s=[];return t&&(t[i]=s),s}const va=n=>n?Gh(n)?po(n)||n.proxy:va(n.parent):null,Qr=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>va(n.parent),$root:n=>va(n.root),$emit:n=>n.emit,$options:n=>Ih(n),$forceUpdate:n=>n.f||(n.f=()=>xh(n.update)),$nextTick:n=>n.n||(n.n=Ou.bind(n.proxy)),$watch:n=>Ju.bind(n)}),pf={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(i!==et&&Ge(i,e))return o[e]=1,i[e];if(s!==et&&Ge(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&Ge(c,e))return o[e]=3,r[e];if(t!==et&&Ge(t,e))return o[e]=4,t[e];_a&&(o[e]=0)}}const h=Qr[e];let d,u;if(h)return e==="$attrs"&&Ot(n,"get",e),h(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==et&&Ge(t,e))return o[e]=4,t[e];if(u=l.config.globalProperties,Ge(u,e))return u[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return s!==et&&Ge(s,e)?(s[e]=t,!0):i!==et&&Ge(i,e)?(i[e]=t,!0):Ge(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==et&&Ge(n,o)||e!==et&&Ge(e,o)||(a=r[0])&&Ge(a,o)||Ge(i,o)||Ge(Qr,o)||Ge(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ge(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let _a=!0;function mf(n){const e=Ih(n),t=n.proxy,i=n.ctx;_a=!1,e.beforeCreate&&xl(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:d,mounted:u,beforeUpdate:m,updated:v,activated:p,deactivated:f,beforeDestroy:_,beforeUnmount:S,destroyed:C,unmounted:E,render:w,renderTracked:R,renderTriggered:z,errorCaptured:M,serverPrefetch:A,expose:X,inheritAttrs:V,components:pe,directives:ce,filters:k}=e;if(c&&gf(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const $ in o){const G=o[$];ke(G)&&(i[$]=G.bind(t))}if(s){const $=s.call(t,t);ft($)&&(n.data=Ha($))}if(_a=!0,r)for(const $ in r){const G=r[$],H=ke(G)?G.bind(t,t):ke(G.get)?G.get.bind(t,t):Jt,J=!ke(G)&&ke(G.set)?G.set.bind(t):Jt,le=$f({get:H,set:J});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>le.value,set:se=>le.value=se})}if(a)for(const $ in a)Dh(a[$],i,t,$);if(l){const $=ke(l)?l.call(t):l;Reflect.ownKeys($).forEach(G=>{Zu(G,$[G])})}h&&xl(h,n,"c");function U($,G){De(G)?G.forEach(H=>$(H.bind(t))):G&&$(G.bind(t))}if(U(nf,d),U(sf,u),U(rf,m),U(of,v),U(Qu,p),U(ef,f),U(df,M),U(hf,R),U(cf,z),U(af,S),U(Ah,E),U(lf,A),De(X))if(X.length){const $=n.exposed||(n.exposed={});X.forEach(G=>{Object.defineProperty($,G,{get:()=>t[G],set:H=>t[G]=H})})}else n.exposed||(n.exposed={});w&&n.render===Jt&&(n.render=w),V!=null&&(n.inheritAttrs=V),pe&&(n.components=pe),ce&&(n.directives=ce)}function gf(n,e,t=Jt,i=!1){De(n)&&(n=xa(n));for(const s in n){const r=n[s];let o;ft(r)?"default"in r?o=Co(r.from||s,r.default,!0):o=Co(r.from||s):o=Co(r),Pt(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function xl(n,e,t){Qt(De(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Dh(n,e,t,i){const s=i.includes(".")?Ch(t,i):()=>t[i];if(ut(n)){const r=e[n];ke(r)&&To(s,r)}else if(ke(n))To(s,n.bind(t));else if(ft(n))if(De(n))n.forEach(r=>Dh(r,e,t,i));else{const r=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(r)&&To(s,r,n)}}function Ih(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>eo(l,c,o,!0)),eo(l,e,o)),r.set(e,l),l}function eo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&eo(n,r,t,!0),s&&s.forEach(o=>eo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=vf[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const vf={data:bl,props:ci,emits:ci,methods:ci,computed:ci,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:ci,directives:ci,watch:xf,provide:bl,inject:_f};function bl(n,e){return e?n?function(){return At(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function _f(n,e){return ci(xa(n),xa(e))}function xa(n){if(De(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Tt(n,e){return n?[...new Set([].concat(n,e))]:e}function ci(n,e){return n?At(At(Object.create(null),n),e):e}function xf(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=Tt(n[i],e[i]);return t}function bf(n,e,t,i=!1){const s={},r={};Yr(r,fo,1),n.propsDefaults=Object.create(null),kh(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Lu(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function yf(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Je(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let u=h[d];if(co(n.emitsOptions,u))continue;const m=e[u];if(l)if(Ge(r,u))m!==r[u]&&(r[u]=m,c=!0);else{const v=yn(u);s[v]=ba(l,a,v,m,n,!1)}else m!==r[u]&&(r[u]=m,c=!0)}}}else{kh(n,e,s,r)&&(c=!0);let h;for(const d in a)(!e||!Ge(e,d)&&((h=Ts(d))===d||!Ge(e,h)))&&(l?t&&(t[d]!==void 0||t[h]!==void 0)&&(s[d]=ba(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!Ge(e,d)&&!0)&&(delete r[d],c=!0)}c&&In(n,"set","$attrs")}function kh(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Gr(l))continue;const c=e[l];let h;s&&Ge(s,h=yn(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:co(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Je(t),c=a||et;for(let h=0;h<r.length;h++){const d=r[h];t[d]=ba(s,l,d,c[d],n,!Ge(c,d))}}return o}function ba(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=Ge(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&ke(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(bs(s),i=c[t]=l.call(null,e),Ri())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ts(t))&&(i=!0))}return i}function Nh(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ke(n)){const h=d=>{l=!0;const[u,m]=Nh(d,e,!0);At(o,u),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return i.set(n,ls),ls;if(De(r))for(let h=0;h<r.length;h++){const d=yn(r[h]);yl(d)&&(o[d]=et)}else if(r)for(const h in r){const d=yn(h);if(yl(d)){const u=r[h],m=o[d]=De(u)||ke(u)?{type:u}:u;if(m){const v=Sl(Boolean,m.type),p=Sl(String,m.type);m[0]=v>-1,m[1]=p<0||v<p,(v>-1||Ge(m,"default"))&&a.push(d)}}}const c=[o,a];return i.set(n,c),c}function yl(n){return n[0]!=="$"}function Ml(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function wl(n,e){return Ml(n)===Ml(e)}function Sl(n,e){return De(e)?e.findIndex(t=>wl(t,n)):ke(e)&&wl(e,n)?0:-1}const Fh=n=>n[0]==="_"||n==="$stable",Xa=n=>De(n)?n.map(pn):[pn(n)],Mf=(n,e,t)=>{if(e._n)return e;const i=Wu((...s)=>Xa(e(...s)),t);return i._c=!1,i},zh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Fh(s))continue;const r=n[s];if(ke(r))e[s]=Mf(s,r,i);else if(r!=null){const o=Xa(r);e[s]=()=>o}}},Oh=(n,e)=>{const t=Xa(e);n.slots.default=()=>t},wf=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Je(e),Yr(e,"_",t)):zh(e,n.slots={})}else n.slots={},e&&Oh(n,e);Yr(n.slots,fo,1)},Sf=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=et;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(At(s,e),!t&&a===1&&delete s._):(r=!e.$stable,zh(e,s)),o=e}else e&&(Oh(n,e),o={default:1});if(r)for(const a in s)!Fh(a)&&!(a in o)&&delete s[a]};function Bh(){return{app:null,config:{isNativeTag:Yd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ef=0;function Cf(n,e){return function(i,s=null){ke(i)||(i=Object.assign({},i)),s!=null&&!ft(s)&&(s=null);const r=Bh(),o=new Set;let a=!1;const l=r.app={_uid:Ef++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:qf,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&ke(c.install)?(o.add(c),c.install(l,...h)):ke(c)&&(o.add(c),c(l,...h))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,h){return h?(r.components[c]=h,l):r.components[c]},directive(c,h){return h?(r.directives[c]=h,l):r.directives[c]},mount(c,h,d){if(!a){const u=lt(i,s);return u.appContext=r,h&&e?e(u,c):n(u,c,d),a=!0,l._container=c,c.__vue_app__=l,po(u.component)||u.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,h){return r.provides[c]=h,l}};return l}}function ya(n,e,t,i,s=!1){if(De(n)){n.forEach((u,m)=>ya(u,e&&(De(e)?e[m]:e),t,i,s));return}if($r(i)&&!s)return;const r=i.shapeFlag&4?po(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===et?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(ut(c)?(h[c]=null,Ge(d,c)&&(d[c]=null)):Pt(c)&&(c.value=null)),ke(l))jn(l,a,12,[o,h]);else{const u=ut(l),m=Pt(l);if(u||m){const v=()=>{if(n.f){const p=u?h[l]:l.value;s?De(p)&&ka(p,r):De(p)?p.includes(r)||p.push(r):u?(h[l]=[r],Ge(d,l)&&(d[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else u?(h[l]=o,Ge(d,l)&&(d[l]=o)):m&&(l.value=o,n.k&&(h[n.k]=o))};o?(v.id=-1,Dt(v,t)):v()}}}const Dt=Yu;function Tf(n){return Pf(n)}function Pf(n,e){const t=nu();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:d,nextSibling:u,setScopeId:m=Jt,cloneNode:v,insertStaticContent:p}=n,f=(y,P,O,K=null,Y=null,ne=null,ie=!1,re=null,ae=!!P.dynamicChildren)=>{if(y===P)return;y&&!zs(y,P)&&(K=Pe(y),oe(y,Y,ne,!0),y=null),P.patchFlag===-2&&(ae=!1,P.dynamicChildren=null);const{type:x,ref:g,shapeFlag:L}=P;switch(x){case ja:_(y,P,O,K);break;case Fi:S(y,P,O,K);break;case Po:y==null&&C(P,O,K,ie);break;case dt:ce(y,P,O,K,Y,ne,ie,re,ae);break;default:L&1?R(y,P,O,K,Y,ne,ie,re,ae):L&6?k(y,P,O,K,Y,ne,ie,re,ae):(L&64||L&128)&&x.process(y,P,O,K,Y,ne,ie,re,ae,_e)}g!=null&&Y&&ya(g,y&&y.ref,ne,P||y,!P)},_=(y,P,O,K)=>{if(y==null)i(P.el=a(P.children),O,K);else{const Y=P.el=y.el;P.children!==y.children&&c(Y,P.children)}},S=(y,P,O,K)=>{y==null?i(P.el=l(P.children||""),O,K):P.el=y.el},C=(y,P,O,K)=>{[y.el,y.anchor]=p(y.children,P,O,K,y.el,y.anchor)},E=({el:y,anchor:P},O,K)=>{let Y;for(;y&&y!==P;)Y=u(y),i(y,O,K),y=Y;i(P,O,K)},w=({el:y,anchor:P})=>{let O;for(;y&&y!==P;)O=u(y),s(y),y=O;s(P)},R=(y,P,O,K,Y,ne,ie,re,ae)=>{ie=ie||P.type==="svg",y==null?z(P,O,K,Y,ne,ie,re,ae):X(y,P,Y,ne,ie,re,ae)},z=(y,P,O,K,Y,ne,ie,re)=>{let ae,x;const{type:g,props:L,shapeFlag:F,transition:q,patchFlag:te,dirs:ye}=y;if(y.el&&v!==void 0&&te===-1)ae=y.el=v(y.el);else{if(ae=y.el=o(y.type,ne,L&&L.is,L),F&8?h(ae,y.children):F&16&&A(y.children,ae,null,K,Y,ne&&g!=="foreignObject",ie,re),ye&&si(y,null,K,"created"),L){for(const fe in L)fe!=="value"&&!Gr(fe)&&r(ae,fe,null,L[fe],ne,y.children,K,Y,He);"value"in L&&r(ae,"value",null,L.value),(x=L.onVnodeBeforeMount)&&ln(x,K,y)}M(ae,y,y.scopeId,ie,K)}ye&&si(y,null,K,"beforeMount");const I=(!Y||Y&&!Y.pendingBranch)&&q&&!q.persisted;I&&q.beforeEnter(ae),i(ae,P,O),((x=L&&L.onVnodeMounted)||I||ye)&&Dt(()=>{x&&ln(x,K,y),I&&q.enter(ae),ye&&si(y,null,K,"mounted")},Y)},M=(y,P,O,K,Y)=>{if(O&&m(y,O),K)for(let ne=0;ne<K.length;ne++)m(y,K[ne]);if(Y){let ne=Y.subTree;if(P===ne){const ie=Y.vnode;M(y,ie,ie.scopeId,ie.slotScopeIds,Y.parent)}}},A=(y,P,O,K,Y,ne,ie,re,ae=0)=>{for(let x=ae;x<y.length;x++){const g=y[x]=re?$n(y[x]):pn(y[x]);f(null,g,P,O,K,Y,ne,ie,re)}},X=(y,P,O,K,Y,ne,ie)=>{const re=P.el=y.el;let{patchFlag:ae,dynamicChildren:x,dirs:g}=P;ae|=y.patchFlag&16;const L=y.props||et,F=P.props||et;let q;O&&ri(O,!1),(q=F.onVnodeBeforeUpdate)&&ln(q,O,P,y),g&&si(P,y,O,"beforeUpdate"),O&&ri(O,!0);const te=Y&&P.type!=="foreignObject";if(x?V(y.dynamicChildren,x,re,O,K,te,ne):ie||H(y,P,re,null,O,K,te,ne,!1),ae>0){if(ae&16)pe(re,P,L,F,O,K,Y);else if(ae&2&&L.class!==F.class&&r(re,"class",null,F.class,Y),ae&4&&r(re,"style",L.style,F.style,Y),ae&8){const ye=P.dynamicProps;for(let I=0;I<ye.length;I++){const fe=ye[I],xe=L[fe],be=F[fe];(be!==xe||fe==="value")&&r(re,fe,xe,be,Y,y.children,O,K,He)}}ae&1&&y.children!==P.children&&h(re,P.children)}else!ie&&x==null&&pe(re,P,L,F,O,K,Y);((q=F.onVnodeUpdated)||g)&&Dt(()=>{q&&ln(q,O,P,y),g&&si(P,y,O,"updated")},K)},V=(y,P,O,K,Y,ne,ie)=>{for(let re=0;re<P.length;re++){const ae=y[re],x=P[re],g=ae.el&&(ae.type===dt||!zs(ae,x)||ae.shapeFlag&70)?d(ae.el):O;f(ae,x,g,null,K,Y,ne,ie,!0)}},pe=(y,P,O,K,Y,ne,ie)=>{if(O!==K){for(const re in K){if(Gr(re))continue;const ae=K[re],x=O[re];ae!==x&&re!=="value"&&r(y,re,x,ae,ie,P.children,Y,ne,He)}if(O!==et)for(const re in O)!Gr(re)&&!(re in K)&&r(y,re,O[re],null,ie,P.children,Y,ne,He);"value"in K&&r(y,"value",O.value,K.value)}},ce=(y,P,O,K,Y,ne,ie,re,ae)=>{const x=P.el=y?y.el:a(""),g=P.anchor=y?y.anchor:a("");let{patchFlag:L,dynamicChildren:F,slotScopeIds:q}=P;q&&(re=re?re.concat(q):q),y==null?(i(x,O,K),i(g,O,K),A(P.children,O,g,Y,ne,ie,re,ae)):L>0&&L&64&&F&&y.dynamicChildren?(V(y.dynamicChildren,F,O,Y,ne,ie,re),(P.key!=null||Y&&P===Y.subTree)&&Vh(y,P,!0)):H(y,P,O,g,Y,ne,ie,re,ae)},k=(y,P,O,K,Y,ne,ie,re,ae)=>{P.slotScopeIds=re,y==null?P.shapeFlag&512?Y.ctx.activate(P,O,K,ie,ae):ee(P,O,K,Y,ne,ie,ae):U(y,P,ae)},ee=(y,P,O,K,Y,ne,ie)=>{const re=y.component=Of(y,K,Y);if(Th(y)&&(re.ctx.renderer=_e),Bf(re),re.asyncDep){if(Y&&Y.registerDep(re,$),!y.el){const ae=re.subTree=lt(Fi);S(null,ae,P,O)}return}$(re,y,P,O,Y,ne,ie)},U=(y,P,O)=>{const K=P.component=y.component;if(Xu(y,P,O))if(K.asyncDep&&!K.asyncResolved){G(K,P,O);return}else K.next=P,Vu(K.update),K.update();else P.el=y.el,K.vnode=P},$=(y,P,O,K,Y,ne,ie)=>{const re=()=>{if(y.isMounted){let{next:g,bu:L,u:F,parent:q,vnode:te}=y,ye=g,I;ri(y,!1),g?(g.el=te.el,G(y,g,ie)):g=te,L&&Wr(L),(I=g.props&&g.props.onVnodeBeforeUpdate)&&ln(I,q,g,te),ri(y,!0);const fe=Eo(y),xe=y.subTree;y.subTree=fe,f(xe,fe,d(xe.el),Pe(xe),y,Y,ne),g.el=fe.el,ye===null&&ju(y,fe.el),F&&Dt(F,Y),(I=g.props&&g.props.onVnodeUpdated)&&Dt(()=>ln(I,q,g,te),Y)}else{let g;const{el:L,props:F}=P,{bm:q,m:te,parent:ye}=y,I=$r(P);if(ri(y,!1),q&&Wr(q),!I&&(g=F&&F.onVnodeBeforeMount)&&ln(g,ye,P),ri(y,!0),L&&ze){const fe=()=>{y.subTree=Eo(y),ze(L,y.subTree,y,Y,null)};I?P.type.__asyncLoader().then(()=>!y.isUnmounted&&fe()):fe()}else{const fe=y.subTree=Eo(y);f(null,fe,O,K,y,Y,ne),P.el=fe.el}if(te&&Dt(te,Y),!I&&(g=F&&F.onVnodeMounted)){const fe=P;Dt(()=>ln(g,ye,fe),Y)}(P.shapeFlag&256||ye&&$r(ye.vnode)&&ye.vnode.shapeFlag&256)&&y.a&&Dt(y.a,Y),y.isMounted=!0,P=O=K=null}},ae=y.effect=new Oa(re,()=>xh(x),y.scope),x=y.update=()=>ae.run();x.id=y.uid,ri(y,!0),x()},G=(y,P,O)=>{P.component=y;const K=y.vnode.props;y.vnode=P,y.next=null,yf(y,P.props,K,O),Sf(y,P.children,O),Ps(),lo(void 0,y.update),As()},H=(y,P,O,K,Y,ne,ie,re,ae=!1)=>{const x=y&&y.children,g=y?y.shapeFlag:0,L=P.children,{patchFlag:F,shapeFlag:q}=P;if(F>0){if(F&128){le(x,L,O,K,Y,ne,ie,re,ae);return}else if(F&256){J(x,L,O,K,Y,ne,ie,re,ae);return}}q&8?(g&16&&He(x,Y,ne),L!==x&&h(O,L)):g&16?q&16?le(x,L,O,K,Y,ne,ie,re,ae):He(x,Y,ne,!0):(g&8&&h(O,""),q&16&&A(L,O,K,Y,ne,ie,re,ae))},J=(y,P,O,K,Y,ne,ie,re,ae)=>{y=y||ls,P=P||ls;const x=y.length,g=P.length,L=Math.min(x,g);let F;for(F=0;F<L;F++){const q=P[F]=ae?$n(P[F]):pn(P[F]);f(y[F],q,O,null,Y,ne,ie,re,ae)}x>g?He(y,Y,ne,!0,!1,L):A(P,O,K,Y,ne,ie,re,ae,L)},le=(y,P,O,K,Y,ne,ie,re,ae)=>{let x=0;const g=P.length;let L=y.length-1,F=g-1;for(;x<=L&&x<=F;){const q=y[x],te=P[x]=ae?$n(P[x]):pn(P[x]);if(zs(q,te))f(q,te,O,null,Y,ne,ie,re,ae);else break;x++}for(;x<=L&&x<=F;){const q=y[L],te=P[F]=ae?$n(P[F]):pn(P[F]);if(zs(q,te))f(q,te,O,null,Y,ne,ie,re,ae);else break;L--,F--}if(x>L){if(x<=F){const q=F+1,te=q<g?P[q].el:K;for(;x<=F;)f(null,P[x]=ae?$n(P[x]):pn(P[x]),O,te,Y,ne,ie,re,ae),x++}}else if(x>F)for(;x<=L;)oe(y[x],Y,ne,!0),x++;else{const q=x,te=x,ye=new Map;for(x=te;x<=F;x++){const Se=P[x]=ae?$n(P[x]):pn(P[x]);Se.key!=null&&ye.set(Se.key,x)}let I,fe=0;const xe=F-te+1;let be=!1,T=0;const de=new Array(xe);for(x=0;x<xe;x++)de[x]=0;for(x=q;x<=L;x++){const Se=y[x];if(fe>=xe){oe(Se,Y,ne,!0);continue}let ge;if(Se.key!=null)ge=ye.get(Se.key);else for(I=te;I<=F;I++)if(de[I-te]===0&&zs(Se,P[I])){ge=I;break}ge===void 0?oe(Se,Y,ne,!0):(de[ge-te]=x+1,ge>=T?T=ge:be=!0,f(Se,P[ge],O,null,Y,ne,ie,re,ae),fe++)}const ue=be?Af(de):ls;for(I=ue.length-1,x=xe-1;x>=0;x--){const Se=te+x,ge=P[Se],Ce=Se+1<g?P[Se+1].el:K;de[x]===0?f(null,ge,O,Ce,Y,ne,ie,re,ae):be&&(I<0||x!==ue[I]?se(ge,O,Ce,2):I--)}}},se=(y,P,O,K,Y=null)=>{const{el:ne,type:ie,transition:re,children:ae,shapeFlag:x}=y;if(x&6){se(y.component.subTree,P,O,K);return}if(x&128){y.suspense.move(P,O,K);return}if(x&64){ie.move(y,P,O,_e);return}if(ie===dt){i(ne,P,O);for(let L=0;L<ae.length;L++)se(ae[L],P,O,K);i(y.anchor,P,O);return}if(ie===Po){E(y,P,O);return}if(K!==2&&x&1&&re)if(K===0)re.beforeEnter(ne),i(ne,P,O),Dt(()=>re.enter(ne),Y);else{const{leave:L,delayLeave:F,afterLeave:q}=re,te=()=>i(ne,P,O),ye=()=>{L(ne,()=>{te(),q&&q()})};F?F(ne,te,ye):ye()}else i(ne,P,O)},oe=(y,P,O,K=!1,Y=!1)=>{const{type:ne,props:ie,ref:re,children:ae,dynamicChildren:x,shapeFlag:g,patchFlag:L,dirs:F}=y;if(re!=null&&ya(re,null,O,y,!0),g&256){P.ctx.deactivate(y);return}const q=g&1&&F,te=!$r(y);let ye;if(te&&(ye=ie&&ie.onVnodeBeforeUnmount)&&ln(ye,P,y),g&6)Z(y.component,O,K);else{if(g&128){y.suspense.unmount(O,K);return}q&&si(y,null,P,"beforeUnmount"),g&64?y.type.remove(y,P,O,Y,_e,K):x&&(ne!==dt||L>0&&L&64)?He(x,P,O,!1,!0):(ne===dt&&L&384||!Y&&g&16)&&He(ae,P,O),K&&we(y)}(te&&(ye=ie&&ie.onVnodeUnmounted)||q)&&Dt(()=>{ye&&ln(ye,P,y),q&&si(y,null,P,"unmounted")},O)},we=y=>{const{type:P,el:O,anchor:K,transition:Y}=y;if(P===dt){Ee(O,K);return}if(P===Po){w(y);return}const ne=()=>{s(O),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(y.shapeFlag&1&&Y&&!Y.persisted){const{leave:ie,delayLeave:re}=Y,ae=()=>ie(O,ne);re?re(y.el,ne,ae):ae()}else ne()},Ee=(y,P)=>{let O;for(;y!==P;)O=u(y),s(y),y=O;s(P)},Z=(y,P,O)=>{const{bum:K,scope:Y,update:ne,subTree:ie,um:re}=y;K&&Wr(K),Y.stop(),ne&&(ne.active=!1,oe(ie,y,P,O)),re&&Dt(re,P),Dt(()=>{y.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},He=(y,P,O,K=!1,Y=!1,ne=0)=>{for(let ie=ne;ie<y.length;ie++)oe(y[ie],P,O,K,Y)},Pe=y=>y.shapeFlag&6?Pe(y.component.subTree):y.shapeFlag&128?y.suspense.next():u(y.anchor||y.el),Re=(y,P,O)=>{y==null?P._vnode&&oe(P._vnode,null,null,!0):f(P._vnode||null,y,P,null,null,null,O),Mh(),P._vnode=y},_e={p:f,um:oe,m:se,r:we,mt:ee,mc:A,pc:H,pbc:V,n:Pe,o:n};let $e,ze;return e&&([$e,ze]=e(_e)),{render:Re,hydrate:$e,createApp:Cf(Re,$e)}}function ri({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Vh(n,e,t=!1){const i=n.children,s=e.children;if(De(i)&&De(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=$n(s[r]),a.el=o.el),t||Vh(o,a))}}function Af(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const Lf=n=>n.__isTeleport,dt=Symbol(void 0),ja=Symbol(void 0),Fi=Symbol(void 0),Po=Symbol(void 0),Ks=[];let Yt=null;function Te(n=!1){Ks.push(Yt=n?null:[])}function Rf(){Ks.pop(),Yt=Ks[Ks.length-1]||null}let Js=1;function El(n){Js+=n}function Uh(n){return n.dynamicChildren=Js>0?Yt||ls:null,Rf(),Js>0&&Yt&&Yt.push(n),n}function Fe(n,e,t,i,s,r){return Uh(ve(n,e,t,i,s,r,!0))}function zi(n,e,t,i,s){return Uh(lt(n,e,t,i,s,!0))}function Df(n){return n?n.__v_isVNode===!0:!1}function zs(n,e){return n.type===e.type&&n.key===e.key}const fo="__vInternal",Hh=({key:n})=>n!=null?n:null,qr=({ref:n,ref_key:e,ref_for:t})=>n!=null?ut(n)||Pt(n)||ke(n)?{i:Kt,r:n,k:e,f:!!t}:n:null;function ve(n,e=null,t=null,i=0,s=null,r=n===dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Hh(e),ref:e&&qr(e),scopeId:ho,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ya(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=ut(t)?8:16),Js>0&&!o&&Yt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yt.push(l),l}const lt=If;function If(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===uf)&&(n=Fi),Df(n)){const a=xs(n,e,!0);return t&&Ya(a,t),Js>0&&!r&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(n)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(Wf(n)&&(n=n.__vccOpts),e){e=kf(e);let{class:a,style:l}=e;a&&!ut(a)&&(e.class=_t(a)),ft(l)&&(mh(l)&&!De(l)&&(l=At({},l)),e.style=ki(l))}const o=ut(n)?1:Ku(n)?128:Lf(n)?64:ft(n)?4:ke(n)?2:0;return ve(n,e,t,i,s,o,r,!0)}function kf(n){return n?mh(n)||fo in n?At({},n):n:null}function xs(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?Nf(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Hh(a),ref:e&&e.ref?t&&s?De(s)?s.concat(qr(e)):[s,qr(e)]:qr(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==dt?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&xs(n.ssContent),ssFallback:n.ssFallback&&xs(n.ssFallback),el:n.el,anchor:n.anchor}}function Ka(n=" ",e=0){return lt(ja,null,n,e)}function Jn(n="",e=!1){return e?(Te(),zi(Fi,null,n)):lt(Fi,null,n)}function pn(n){return n==null||typeof n=="boolean"?lt(Fi):De(n)?lt(dt,null,n.slice()):typeof n=="object"?$n(n):lt(ja,null,String(n))}function $n(n){return n.el===null||n.memo?n:xs(n)}function Ya(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ya(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(fo in e)?e._ctx=Kt:s===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:Kt},t=32):(e=String(e),i&64?(t=16,e=[Ka(e)]):t=8);n.children=e,n.shapeFlag|=t}function Nf(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=_t([e.class,i.class]));else if(s==="style")e.style=ki([e.style,i.style]);else if(no(s)){const r=e[s],o=i[s];o&&r!==o&&!(De(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ln(n,e,t,i=null){Qt(n,e,7,[t,i])}const Ff=Bh();let zf=0;function Of(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Ff,r={uid:zf++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new iu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nh(i,s),emitsOptions:Sh(i,s),emit:null,emitted:null,propsDefaults:et,inheritAttrs:i.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Gu.bind(null,r),n.ce&&n.ce(r),r}let gt=null;const bs=n=>{gt=n,n.scope.on()},Ri=()=>{gt&&gt.scope.off(),gt=null};function Gh(n){return n.vnode.shapeFlag&4}let Qs=!1;function Bf(n,e=!1){Qs=e;const{props:t,children:i}=n.vnode,s=Gh(n);bf(n,t,s,e),wf(n,i);const r=s?Vf(n,e):void 0;return Qs=!1,r}function Vf(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=gh(new Proxy(n.ctx,pf));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Hf(n):null;bs(n),Ps();const r=jn(i,n,0,[n.props,s]);if(As(),Ri(),th(r)){if(r.then(Ri,Ri),e)return r.then(o=>{Cl(n,o,e)}).catch(o=>{ao(o,n,0)});n.asyncDep=r}else Cl(n,r,e)}else Wh(n,e)}function Cl(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ft(e)&&(n.setupState=vh(e)),Wh(n,t)}let Tl;function Wh(n,e,t){const i=n.type;if(!n.render){if(!e&&Tl&&!i.render){const s=i.template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=At(At({isCustomElement:r,delimiters:a},o),l);i.render=Tl(s,c)}}n.render=i.render||Jt}bs(n),Ps(),mf(n),As(),Ri()}function Uf(n){return new Proxy(n.attrs,{get(e,t){return Ot(n,"get","$attrs"),e[t]}})}function Hf(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Uf(n))},slots:n.slots,emit:n.emit,expose:e}}function po(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(vh(gh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Qr)return Qr[t](n)}}))}function Gf(n,e=!0){return ke(n)?n.displayName||n.name:n.name||e&&n.__name}function Wf(n){return ke(n)&&"__vccOpts"in n}const $f=(n,e)=>Fu(n,e,Qs),qf="3.2.37",Xf="http://www.w3.org/2000/svg",ui=typeof document!="undefined"?document:null,Pl=ui&&ui.createElement("template"),jf={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?ui.createElementNS(Xf,n):ui.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ui.createTextNode(n),createComment:n=>ui.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ui.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Pl.innerHTML=i?`<svg>${n}</svg>`:n;const a=Pl.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Kf(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Yf(n,e,t){const i=n.style,s=ut(t);if(t&&!s){for(const r in t)Ma(i,r,t[r]);if(e&&!ut(e))for(const r in e)t[r]==null&&Ma(i,r,"")}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const Al=/\s*!important$/;function Ma(n,e,t){if(De(t))t.forEach(i=>Ma(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Zf(n,e);Al.test(t)?n.setProperty(Ts(i),t.replace(Al,""),"important"):n[i]=t}}const Ll=["Webkit","Moz","ms"],Ao={};function Zf(n,e){const t=Ao[e];if(t)return t;let i=yn(e);if(i!=="filter"&&i in n)return Ao[e]=i;i=ro(i);for(let s=0;s<Ll.length;s++){const r=Ll[s]+i;if(r in n)return Ao[e]=r}return e}const Rl="http://www.w3.org/1999/xlink";function Jf(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Rl,e.slice(6,e.length)):n.setAttributeNS(Rl,e,t);else{const r=qd(e);t==null||r&&!Jc(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Qf(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Jc(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}const[$h,ep]=(()=>{let n=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let wa=0;const tp=Promise.resolve(),np=()=>{wa=0},ip=()=>wa||(tp.then(np),wa=$h());function rs(n,e,t,i){n.addEventListener(e,t,i)}function sp(n,e,t,i){n.removeEventListener(e,t,i)}function rp(n,e,t,i,s=null){const r=n._vei||(n._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=op(e);if(i){const c=r[e]=ap(i,s);rs(n,a,c,l)}else o&&(sp(n,a,o,l),r[e]=void 0)}}const Dl=/(?:Once|Passive|Capture)$/;function op(n){let e;if(Dl.test(n)){e={};let t;for(;t=n.match(Dl);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[Ts(n.slice(2)),e]}function ap(n,e){const t=i=>{const s=i.timeStamp||$h();(ep||s>=t.attached-1)&&Qt(lp(i,t.value),e,5,[i])};return t.value=n,t.attached=ip(),t}function lp(n,e){if(De(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Il=/^on[a-z]/,cp=(n,e,t,i,s=!1,r,o,a,l)=>{e==="class"?Kf(n,i,s):e==="style"?Yf(n,t,i):no(e)?Ia(e)||rp(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hp(n,e,i,s))?Qf(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Jf(n,e,i,s))};function hp(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Il.test(e)&&ke(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Il.test(e)&&ut(t)?!1:e in n}const kl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return De(e)?t=>Wr(e,t):e};function dp(n){n.target.composing=!0}function Nl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qh={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n._assign=kl(s);const r=i||s.props&&s.props.type==="number";rs(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=ca(a)),n._assign(a)}),t&&rs(n,"change",()=>{n.value=n.value.trim()}),e||(rs(n,"compositionstart",dp),rs(n,"compositionend",Nl),rs(n,"change",Nl))},mounted(n,{value:e}){n.value=e==null?"":e},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:s}},r){if(n._assign=kl(r),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(s||n.type==="number")&&ca(n.value)===e))return;const o=e==null?"":e;n.value!==o&&(n.value=o)}},up=At({patchProp:cp},jf);let Fl;function fp(){return Fl||(Fl=Tf(up))}const mo=(...n)=>{const e=fp().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=pp(i);if(!s)return;const r=e._component;!ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function pp(n){return ut(n)?document.querySelector(n):n}function mp(n){return{all:n=n||new Map,on:function(e,t){var i=n.get(e);i?i.push(t):n.set(e,[t])},off:function(e,t){var i=n.get(e);i&&(t?i.splice(i.indexOf(t)>>>0,1):n.set(e,[]))},emit:function(e,t){var i=n.get(e);i&&i.slice().map(function(s){s(t)}),(i=n.get("*"))&&i.slice().map(function(s){s(e,t)})}}}var nr,ir,un,yi;class Qn{constructor(e,t,i){Qe(this,nr,void 0);Qe(this,ir,void 0);Qe(this,un,void 0);Qe(this,yi,void 0);Ve(this,nr,e),Ve(this,ir,t),i instanceof ei?Ve(this,un,{inputList:[i]}):i==null?Ve(this,un,{inputList:[]}):Ve(this,un,i),Ve(this,yi,null)}getName(){return Me(this,nr)}getType(){return Me(this,ir)}getConnections(){return Me(this,un)}getParent(){if(Me(this,yi)===null)throw"[BaseOutput] Parent is null, please set it";return Me(this,yi)}setParent(e){Ve(this,yi,e)}connectTo(e){Me(this,un).inputList.push(e),e.connectTo(this)}dropConnection(e){Me(this,un).inputList=Me(this,un).inputList.filter(t=>t!==e)}}nr=new WeakMap,ir=new WeakMap,un=new WeakMap,yi=new WeakMap;var fs,sr,qn,Mi,Vt,fn,wi;class ei{constructor(e,t,i,s,r){Qe(this,fs,void 0);Qe(this,sr,void 0);Qe(this,qn,void 0);Qe(this,Mi,void 0);Qe(this,Vt,void 0);Qe(this,fn,void 0);Qe(this,wi,void 0);Ve(this,fs,e),Ve(this,sr,t),Ve(this,qn,typeof i=="string"?[i]:[...i]),Ve(this,Mi,null),r instanceof Qn?Ve(this,Vt,r):Ve(this,Vt,null),Ve(this,fn,s),Ve(this,wi,{name:s.name,type:s.type,value:s.value})}getName(){return Me(this,fs)}getType(){return Me(this,sr)}getAcceptedInputs(){return Me(this,qn)}getParent(){if(Me(this,Mi)===null)throw"[BaseInput] Parent is null, please set it";return Me(this,Mi)}getConnected(){if(Me(this,Vt)===null)throw"[BaseInput] Nothing is connected to this input. Call isConnected to check";return Me(this,Vt)}getValue(){return Me(this,fn)===null?{name:"",type:"",value:""}:Me(this,fn)}isConnected(){return Me(this,Vt)instanceof Qn}setParent(e){Ve(this,Mi,e)}setValue(e){if(Me(this,fn)===null)throw`[BaseInput (${Me(this,fs)})] Trying to assign value to null`;Me(this,fn).value=e}acceptsInputs(e){for(let t=0;t<Me(this,qn).length;t++)if(Me(this,qn)[t]===e||Me(this,qn)[t]==="any")return!0;return!1}connectTo(e){Ve(this,Vt,e),Ve(this,fn,null)}dropConnection(){if(Me(this,Vt)===null)throw"[BaseInput] Connected is null, cannot drop connection";Me(this,Vt).dropConnection(this),Ve(this,Vt,null),Ve(this,fn,{name:Me(this,wi).name,type:Me(this,wi).type,value:Me(this,wi).value})}}fs=new WeakMap,sr=new WeakMap,qn=new WeakMap,Mi=new WeakMap,Vt=new WeakMap,fn=new WeakMap,wi=new WeakMap;var rr,ps,Si;class lr{constructor(e,t,i){Qe(this,rr,void 0);Qe(this,ps,void 0);Qe(this,Si,void 0);Ve(this,rr,e),Ve(this,ps,t instanceof ei?{inputList:[t]}:t),Me(this,ps).inputList.forEach(s=>{s.setParent(this)}),Ve(this,Si,i instanceof Qn?{outputList:[i]}:i),Me(this,Si).outputList.forEach(s=>{s.setParent(this)})}getName(){return Me(this,rr)}getInputs(){return Me(this,ps)}getOutputs(){return Me(this,Si)}connectTo(e,t){if(!Me(this,Si).outputList.includes(e))throw`[BaseNode]: ${e} is not an output element of this node`;if(!t.acceptsInputs(e.getType()))throw`[BaseNode]: The input socket does not accept the type 
        ${e.getType()}`}formatValue(e){return e.toString().includes(".")?e:e+".0"}}rr=new WeakMap,ps=new WeakMap,Si=new WeakMap;var st=(n=>(n[n.SCALAR=0]="SCALAR",n[n.VECTOR_3=1]="VECTOR_3",n[n.VECTOR_4=2]="VECTOR_4",n))(st||{});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="141",gp=0,zl=1,vp=2,Xh=1,_p=2,Ws=3,er=0,en=1,ys=2,xp=1,Kn=0,ds=1,Ol=2,Bl=3,Vl=4,bp=5,os=100,yp=101,Mp=102,Ul=103,Hl=104,wp=200,Sp=201,Ep=202,Cp=203,jh=204,Kh=205,Tp=206,Pp=207,Ap=208,Lp=209,Rp=210,Dp=0,Ip=1,kp=2,Sa=3,Np=4,Fp=5,zp=6,Op=7,go=0,Bp=1,Vp=2,Dn=0,Up=1,Hp=2,Gp=3,Wp=4,$p=5,Yh=300,Ms=301,ws=302,Ea=303,Ca=304,vo=306,Ta=1e3,jt=1001,Pa=1002,It=1003,Gl=1004,Wl=1005,Ut=1006,qp=1007,_o=1008,Oi=1009,Xp=1010,jp=1011,Zh=1012,Kp=1013,gi=1014,vi=1015,tr=1016,Yp=1017,Zp=1018,us=1020,Jp=1021,Qp=1022,Zt=1023,em=1024,tm=1025,Di=1026,Ss=1027,nm=1028,im=1029,sm=1030,rm=1031,om=1033,Lo=33776,Ro=33777,Do=33778,Io=33779,$l=35840,ql=35841,Xl=35842,jl=35843,am=36196,Kl=37492,Yl=37496,Zl=37808,Jl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,oc=37817,ac=37818,lc=37819,cc=37820,hc=37821,dc=36492,Bi=3e3,nt=3001,lm=3200,cm=3201,Ds=0,hm=1,Pn="srgb",_i="srgb-linear",ko=7680,dm=519,uc=35044,fc="300 es",Aa=1035;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const mt=[];for(let n=0;n<256;n++)mt[n]=(n<16?"0":"")+n.toString(16);const No=Math.PI/180,pc=180/Math.PI;function cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function um(n,e){return(n%e+e)%e}function Fo(n,e,t){return(1-t)*n+t*e}function mc(n){return(n&n-1)===0&&n!==0}function La(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Xe{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],v=i[8],p=s[0],f=s[3],_=s[6],S=s[1],C=s[4],E=s[7],w=s[2],R=s[5],z=s[8];return r[0]=o*p+a*S+l*w,r[3]=o*f+a*C+l*R,r[6]=o*_+a*E+l*z,r[1]=c*p+h*S+d*w,r[4]=c*f+h*C+d*R,r[7]=c*_+h*E+d*z,r[2]=u*p+m*S+v*w,r[5]=u*f+m*C+v*R,r[8]=u*_+m*E+v*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,m=c*r-o*l,v=t*d+i*u+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=d*p,e[1]=(s*c-h*i)*p,e[2]=(a*i-s*o)*p,e[3]=u*p,e[4]=(h*t-s*l)*p,e[5]=(s*r-a*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],h=s[7];return s[0]=t*r+i*l,s[3]=t*o+i*c,s[6]=t*a+i*h,s[1]=-i*r+t*l,s[4]=-i*o+t*c,s[7]=-i*a+t*h,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Jh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function to(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const zo={[Pn]:{[_i]:Ii},[_i]:{[Pn]:Xr}},Gt={legacyMode:!0,get workingColorSpace(){return _i},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(zo[e]&&zo[e][t]!==void 0){const i=zo[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ct={r:0,g:0,b:0},Wt={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Oo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function wr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=_i){return this.r=e,this.g=t,this.b=i,Gt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=_i){if(e=um(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Oo(o,r,e+1/3),this.g=Oo(o,r,e),this.b=Oo(o,r,e-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(e,t=Pn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Gt.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Gt.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,h=parseInt(r[3],10)/100;return i(r[4]),this.setHSL(l,c,h,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Gt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Gt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Pn){const i=Qh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return Gt.fromWorkingColorSpace(wr(this,ct),e),kt(ct.r*255,0,255)<<16^kt(ct.g*255,0,255)<<8^kt(ct.b*255,0,255)<<0}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_i){Gt.fromWorkingColorSpace(wr(this,ct),t);const i=ct.r,s=ct.g,r=ct.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_i){return Gt.fromWorkingColorSpace(wr(this,ct),t),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=Pn){return Gt.fromWorkingColorSpace(wr(this,ct),e),e!==Pn?`color(${e} ${ct.r} ${ct.g} ${ct.b})`:`rgb(${ct.r*255|0},${ct.g*255|0},${ct.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=i,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(Mr);const i=Fo(Wt.h,Mr.h,t),s=Fo(Wt.s,Mr.s,t),r=Fo(Wt.l,Mr.l,t);return this.setHSL(i,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ne.NAMES=Qh;let Gi;class ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=to("canvas")),Gi.width=e.width,Gi.height=e.height;const i=Gi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=to("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ii(t[i]/255)*255):t[i]=Ii(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class td{constructor(e=null){this.isSource=!0,this.uuid=cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bo(s[o].image)):r.push(Bo(s[o]))}else r=Bo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Bo(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?ed.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fm=0;class tn extends Is{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=jt,s=jt,r=Ut,o=_o,a=Zt,l=Oi,c=1,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=cr(),this.name="",this.source=new td(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ta:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ta:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Yh;class vt{constructor(e=0,t=0,i=0,s=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],v=l[9],p=l[2],f=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,E=(m+1)/2,w=(_+1)/2,R=(h+u)/4,z=(d+p)/4,M=(v+f)/4;return C>E&&C>w?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=R/i,r=z/i):E>w?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=M/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=z/r,s=M/r),this.set(i,s,r,t),this}let S=Math.sqrt((f-v)*(f-v)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(f-v)/S,this.y=(d-p)/S,this.z=(u-h)/S,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yn extends Is{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ut,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new td(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nd extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pm extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerp(e,t,i,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,s)}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=r[o+0],m=r[o+1],v=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(d!==p||l!==u||c!==m||h!==v){let f=1-a;const _=l*u+c*m+h*v+d*p,S=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const w=Math.sqrt(C),R=Math.atan2(w,_*S);f=Math.sin(f*R)/w,a=Math.sin(a*R)/w}const E=a*S;if(l=l*f+u*E,c=c*f+m*E,h=h*f+v*E,d=d*f+p*E,f===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],m=r[o+2],v=r[o+3];return e[t]=a*v+h*d+l*m-c*u,e[t+1]=l*v+h*u+c*d-a*m,e[t+2]=c*v+h*m+a*u-l*d,e[t+3]=h*v-a*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d-u*m*v;break;case"YXZ":this._x=u*h*d+c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d+u*m*v;break;case"ZXY":this._x=u*h*d-c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d-u*m*v;break;case"ZYX":this._x=u*h*d-c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d+u*m*v;break;case"YZX":this._x=u*h*d+c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d-u*m*v;break;case"XZY":this._x=u*h*d-c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d+u*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*i,h=l*i+a*t-r*s,d=l*s+r*i-o*t,u=-r*t-o*i-a*s;return this.x=c*l+u*-r+h*-a-d*-o,this.y=h*l+u*-o+d*-r-c*-a,this.z=d*l+u*-a+c*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new D,gc=new hr;class dr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],u=e[l+2];h<t&&(t=h),d<i&&(i=d),u<s&&(s=u),h>r&&(r=h),d>o&&(o=d),u>a&&(a=u)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),u=e.getZ(l);h<t&&(t=h),d<i&&(i=d),u<s&&(s=u),h>r&&(r=h),d>o&&(o=d),u>a&&(a=u)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)oi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(oi)}else i.boundingBox===null&&i.computeBoundingBox(),Uo.copy(i.boundingBox),Uo.applyMatrix4(e.matrixWorld),this.union(Uo);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Sr.subVectors(this.max,Os),Wi.subVectors(e.a,Os),$i.subVectors(e.b,Os),qi.subVectors(e.c,Os),zn.subVectors($i,Wi),On.subVectors(qi,$i),ai.subVectors(Wi,qi);let t=[0,-zn.z,zn.y,0,-On.z,On.y,0,-ai.z,ai.y,zn.z,0,-zn.x,On.z,0,-On.x,ai.z,0,-ai.x,-zn.y,zn.x,0,-On.y,On.x,0,-ai.y,ai.x,0];return!Ho(t,Wi,$i,qi,Sr)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,Wi,$i,qi,Sr))?!1:(Er.crossVectors(zn,On),t=[Er.x,Er.y,Er.z],Ho(t,Wi,$i,qi,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return oi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new D,new D,new D,new D,new D,new D,new D,new D],oi=new D,Uo=new dr,Wi=new D,$i=new D,qi=new D,zn=new D,On=new D,ai=new D,Os=new D,Sr=new D,Er=new D,li=new D;function Ho(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){li.fromArray(n,r);const a=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),h=i.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const mm=new dr,vc=new D,Cr=new D,Go=new D;class Ja{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.add(Go.multiplyScalar(s/i)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?Cr.set(0,0,1).multiplyScalar(e.radius):Cr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(vc.copy(e.center).add(Cr)),this.expandByPoint(vc.copy(e.center).sub(Cr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new D,Wo=new D,Tr=new D,Bn=new D,$o=new D,Pr=new D,qo=new D;class gm{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.direction).multiplyScalar(t).add(this.origin),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Wo.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(Wo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Tr),a=Bn.dot(this.direction),l=-Bn.dot(Tr),c=Bn.lengthSq(),h=Math.abs(1-o*o);let d,u,m,v;if(h>0)if(d=o*l-a,u=o*a-l,v=r*h,d>=0)if(u>=-v)if(u<=v){const p=1/h;d*=p,u*=p,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),s&&s.copy(Tr).multiplyScalar(u).add(Wo),m}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const i=Sn.dot(this.direction),s=Sn.dot(Sn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||i!==i)&&(i=r),(o<s||s!==s)&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,i,s,r){$o.subVectors(t,e),Pr.subVectors(i,e),qo.crossVectors($o,Pr);let o=this.direction.dot(qo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,e);const l=a*this.direction.dot(Pr.crossVectors(Bn,Pr));if(l<0)return null;const c=a*this.direction.dot($o.cross(Bn));if(c<0||l+c>o)return null;const h=-a*Bn.dot(qo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,r,o,a,l,c,h,d,u,m,v,p,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=m,_[7]=v,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,m=o*d,v=a*h,p=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=u-p*c,t[9]=-a*l,t[2]=p-u*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,m=l*d,v=c*h,p=c*d;t[0]=u+p*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-v,t[6]=p+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,m=l*d,v=c*h,p=c*d;t[0]=u-p*a,t[4]=-o*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*h,t[9]=p-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,m=o*d,v=a*h,p=a*d;t[0]=l*h,t[4]=v*c-m,t[8]=u*c+p,t[1]=l*d,t[5]=p*c+u,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,v=a*l,p=a*c;t[0]=l*h,t[4]=p-u*d,t[8]=v*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+v,t[10]=u-p*d}else if(e.order==="XZY"){const u=o*l,m=o*c,v=a*l,p=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+p,t[5]=o*h,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*h,t[10]=p*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vm,e,_m)}lookAt(e,t,i){const s=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Vn.crossVectors(i,Nt),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Vn.crossVectors(i,Nt)),Vn.normalize(),Ar.crossVectors(Nt,Vn),s[0]=Vn.x,s[4]=Ar.x,s[8]=Nt.x,s[1]=Vn.y,s[5]=Ar.y,s[9]=Nt.y,s[2]=Vn.z,s[6]=Ar.z,s[10]=Nt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],m=i[13],v=i[2],p=i[6],f=i[10],_=i[14],S=i[3],C=i[7],E=i[11],w=i[15],R=s[0],z=s[4],M=s[8],A=s[12],X=s[1],V=s[5],pe=s[9],ce=s[13],k=s[2],ee=s[6],U=s[10],$=s[14],G=s[3],H=s[7],J=s[11],le=s[15];return r[0]=o*R+a*X+l*k+c*G,r[4]=o*z+a*V+l*ee+c*H,r[8]=o*M+a*pe+l*U+c*J,r[12]=o*A+a*ce+l*$+c*le,r[1]=h*R+d*X+u*k+m*G,r[5]=h*z+d*V+u*ee+m*H,r[9]=h*M+d*pe+u*U+m*J,r[13]=h*A+d*ce+u*$+m*le,r[2]=v*R+p*X+f*k+_*G,r[6]=v*z+p*V+f*ee+_*H,r[10]=v*M+p*pe+f*U+_*J,r[14]=v*A+p*ce+f*$+_*le,r[3]=S*R+C*X+E*k+w*G,r[7]=S*z+C*V+E*ee+w*H,r[11]=S*M+C*pe+E*U+w*J,r[15]=S*A+C*ce+E*$+w*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],v=e[3],p=e[7],f=e[11],_=e[15];return v*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*m-i*l*m)+p*(+t*l*m-t*c*u+r*o*u-s*o*m+s*c*h-r*l*h)+f*(+t*c*d-t*a*m-r*o*d+i*o*m+r*a*h-i*c*h)+_*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],v=e[12],p=e[13],f=e[14],_=e[15],S=d*f*c-p*u*c+p*l*m-a*f*m-d*l*_+a*u*_,C=v*u*c-h*f*c-v*l*m+o*f*m+h*l*_-o*u*_,E=h*p*c-v*d*c+v*a*m-o*p*m-h*a*_+o*d*_,w=v*d*l-h*p*l-v*a*u+o*p*u+h*a*f-o*d*f,R=t*S+i*C+s*E+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/R;return e[0]=S*z,e[1]=(p*u*r-d*f*r-p*s*m+i*f*m+d*s*_-i*u*_)*z,e[2]=(a*f*r-p*l*r+p*s*c-i*f*c-a*s*_+i*l*_)*z,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*m-i*l*m)*z,e[4]=C*z,e[5]=(h*f*r-v*u*r+v*s*m-t*f*m-h*s*_+t*u*_)*z,e[6]=(v*l*r-o*f*r-v*s*c+t*f*c+o*s*_-t*l*_)*z,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*m+t*l*m)*z,e[8]=E*z,e[9]=(v*d*r-h*p*r-v*i*m+t*p*m+h*i*_-t*d*_)*z,e[10]=(o*p*r-v*a*r+v*i*c-t*p*c-o*i*_+t*a*_)*z,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*m-t*a*m)*z,e[12]=w*z,e[13]=(h*p*s-v*d*s+v*i*u-t*p*u-h*i*f+t*d*f)*z,e[14]=(v*a*s-o*p*s-v*i*l+t*p*l+o*i*f-t*a*f)*z,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*z,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,m=r*h,v=r*d,p=o*h,f=o*d,_=a*d,S=l*c,C=l*h,E=l*d,w=i.x,R=i.y,z=i.z;return s[0]=(1-(p+_))*w,s[1]=(m+E)*w,s[2]=(v-C)*w,s[3]=0,s[4]=(m-E)*R,s[5]=(1-(u+_))*R,s[6]=(f+S)*R,s[7]=0,s[8]=(v+C)*z,s[9]=(f-S)*z,s[10]=(1-(u+p))*z,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Xi.set(s[0],s[1],s[2]).length();const o=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$t.copy(this);const c=1/r,h=1/o,d=1/a;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=d,$t.elements[9]*=d,$t.elements[10]*=d,t.setFromRotationMatrix($t),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),u=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,s,r,o){const a=this.elements,l=1/(t-e),c=1/(i-s),h=1/(o-r),d=(t+e)*l,u=(i+s)*c,m=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xi=new D,$t=new St,vm=new D(0,0,0),_m=new D(1,1,1),Vn=new D,Ar=new D,Nt=new D,_c=new St,xc=new hr;class ur{constructor(e=0,t=0,i=0,s=ur.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _c.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_c,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xc.setFromEuler(this),this.setFromQuaternion(xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ur.DefaultOrder="XYZ";ur.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xm=0;const bc=new D,ji=new hr,En=new St,Lr=new D,Bs=new D,bm=new D,ym=new hr,yc=new D(1,0,0),Mc=new D(0,1,0),wc=new D(0,0,1),Mm={type:"added"},Sc={type:"removed"};class nn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DefaultUp.clone();const e=new D,t=new ur,i=new hr,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new vn}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=nn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(yc,e)}rotateY(e){return this.rotateOnAxis(Mc,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return bc.copy(e).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yc,e)}translateY(e){return this.translateOnAxis(Mc,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lr.copy(e):Lr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Bs,Lr,this.up):En.lookAt(Lr,Bs,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(En),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Sc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}nn.DefaultUp=new D(0,1,0);nn.DefaultMatrixAutoUpdate=!0;const qt=new D,Cn=new D,Xo=new D,Tn=new D,Ki=new D,Yi=new D,Ec=new D,jo=new D,Ko=new D,Yo=new D;class gn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qt.subVectors(e,t),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qt.subVectors(s,t),Cn.subVectors(i,t),Xo.subVectors(e,t);const o=qt.dot(qt),a=qt.dot(Cn),l=qt.dot(Xo),c=Cn.dot(Cn),h=Cn.dot(Xo),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const u=1/d,m=(c*l-a*h)*u,v=(o*h-a*l)*u;return r.set(1-m-v,v,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Tn),l.set(0,0),l.addScaledVector(r,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l}static isFrontFacing(e,t,i,s){return qt.subVectors(i,t),Cn.subVectors(e,t),qt.cross(Cn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),qt.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return gn.getUV(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ki.subVectors(s,i),Yi.subVectors(r,i),jo.subVectors(e,i);const l=Ki.dot(jo),c=Yi.dot(jo);if(l<=0&&c<=0)return t.copy(i);Ko.subVectors(e,s);const h=Ki.dot(Ko),d=Yi.dot(Ko);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ki,o);Yo.subVectors(e,r);const m=Ki.dot(Yo),v=Yi.dot(Yo);if(v>=0&&m<=v)return t.copy(r);const p=m*c-l*v;if(p<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Yi,a);const f=h*v-m*d;if(f<=0&&d-h>=0&&m-v>=0)return Ec.subVectors(r,s),a=(d-h)/(d-h+(m-v)),t.copy(s).addScaledVector(Ec,a);const _=1/(f+p+u);return o=p*_,a=u*_,t.copy(i).addScaledVector(Ki,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let wm=0;class xt extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=ds,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jh,this.blendDst=Kh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===xp;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}xt.fromType=function(){return null};class Qa extends xt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new D,Rr=new Xe;class _n{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=uc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),o=new Ne),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),o=new Xe),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),o=new D),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),o=new vt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class sd extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rd extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xn extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Sm=0;const Bt=new St,Zo=new nn,Zi=new D,Ft=new dr,Vs=new dr,ht=new D;class ni extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?rd:sd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new vn().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Ft.min,Vs.min),Ft.expandByPoint(ht),ht.addVectors(Ft.max,Vs.max),Ft.expandByPoint(ht)):(Ft.expandByPoint(Vs.min),Ft.expandByPoint(Vs.max))}Ft.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ht.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(e,c),ht.add(Zi)),s=Math.max(s,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let X=0;X<a;X++)c[X]=new D,h[X]=new D;const d=new D,u=new D,m=new D,v=new Xe,p=new Xe,f=new Xe,_=new D,S=new D;function C(X,V,pe){d.fromArray(s,X*3),u.fromArray(s,V*3),m.fromArray(s,pe*3),v.fromArray(o,X*2),p.fromArray(o,V*2),f.fromArray(o,pe*2),u.sub(d),m.sub(d),p.sub(v),f.sub(v);const ce=1/(p.x*f.y-f.x*p.y);!isFinite(ce)||(_.copy(u).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(ce),S.copy(m).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(ce),c[X].add(_),c[V].add(_),c[pe].add(_),h[X].add(S),h[V].add(S),h[pe].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let X=0,V=E.length;X<V;++X){const pe=E[X],ce=pe.start,k=pe.count;for(let ee=ce,U=ce+k;ee<U;ee+=3)C(i[ee+0],i[ee+1],i[ee+2])}const w=new D,R=new D,z=new D,M=new D;function A(X){z.fromArray(r,X*3),M.copy(z);const V=c[X];w.copy(V),w.sub(z.multiplyScalar(z.dot(V))).normalize(),R.crossVectors(M,V);const ce=R.dot(h[X])<0?-1:1;l[X*4]=w.x,l[X*4+1]=w.y,l[X*4+2]=w.z,l[X*4+3]=ce}for(let X=0,V=E.length;X<V;++X){const pe=E[X],ce=pe.start,k=pe.count;for(let ee=ce,U=ce+k;ee<U;ee+=3)A(i[ee+0]),A(i[ee+1]),A(i[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,m=e.count;u<m;u+=3){const v=e.getX(u+0),p=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,f),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const s in i){if(e.attributes[s]===void 0)continue;const o=i[s].array,a=e.attributes[s],l=a.array,c=a.itemSize*t,h=Math.min(l.length,o.length-c);for(let d=0,u=c;d<h;d++,u++)o[u]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let m=0,v=0;for(let p=0,f=l.length;p<f;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*h;for(let _=0;_<h;_++)u[v++]=c[m++]}return new _n(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=e(u,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new St,Ji=new gm,Jo=new Ja,Un=new D,Hn=new D,Gn=new D,Qo=new D,ea=new D,ta=new D,Dr=new D,Ir=new D,kr=new D,Nr=new Xe,Fr=new Xe,zr=new Xe,na=new D,Or=new D;class Rn extends nn{constructor(e=new ni,t=new Qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(r),e.ray.intersectsSphere(Jo)===!1)||(Cc.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Cc),i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,d=i.attributes.uv,u=i.attributes.uv2,m=i.groups,v=i.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,f=m.length;p<f;p++){const _=m[p],S=s[_.materialIndex],C=Math.max(_.start,v.start),E=Math.min(a.count,Math.min(_.start+_.count,v.start+v.count));for(let w=C,R=E;w<R;w+=3){const z=a.getX(w),M=a.getX(w+1),A=a.getX(w+2);o=Br(this,S,e,Ji,l,c,h,d,u,z,M,A),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,v.start),f=Math.min(a.count,v.start+v.count);for(let _=p,S=f;_<S;_+=3){const C=a.getX(_),E=a.getX(_+1),w=a.getX(_+2);o=Br(this,s,e,Ji,l,c,h,d,u,C,E,w),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,f=m.length;p<f;p++){const _=m[p],S=s[_.materialIndex],C=Math.max(_.start,v.start),E=Math.min(l.count,Math.min(_.start+_.count,v.start+v.count));for(let w=C,R=E;w<R;w+=3){const z=w,M=w+1,A=w+2;o=Br(this,S,e,Ji,l,c,h,d,u,z,M,A),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,v.start),f=Math.min(l.count,v.start+v.count);for(let _=p,S=f;_<S;_+=3){const C=_,E=_+1,w=_+2;o=Br(this,s,e,Ji,l,c,h,d,u,C,E,w),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Em(n,e,t,i,s,r,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side!==ys,a),l===null)return null;Or.copy(a),Or.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Or);return c<t.near||c>t.far?null:{distance:c,point:Or.clone(),object:n}}function Br(n,e,t,i,s,r,o,a,l,c,h,d){Un.fromBufferAttribute(s,c),Hn.fromBufferAttribute(s,h),Gn.fromBufferAttribute(s,d);const u=n.morphTargetInfluences;if(r&&u){Dr.set(0,0,0),Ir.set(0,0,0),kr.set(0,0,0);for(let v=0,p=r.length;v<p;v++){const f=u[v],_=r[v];f!==0&&(Qo.fromBufferAttribute(_,c),ea.fromBufferAttribute(_,h),ta.fromBufferAttribute(_,d),o?(Dr.addScaledVector(Qo,f),Ir.addScaledVector(ea,f),kr.addScaledVector(ta,f)):(Dr.addScaledVector(Qo.sub(Un),f),Ir.addScaledVector(ea.sub(Hn),f),kr.addScaledVector(ta.sub(Gn),f)))}Un.add(Dr),Hn.add(Ir),Gn.add(kr)}n.isSkinnedMesh&&(n.boneTransform(c,Un),n.boneTransform(h,Hn),n.boneTransform(d,Gn));const m=Em(n,e,t,i,Un,Hn,Gn,na);if(m){a&&(Nr.fromBufferAttribute(a,c),Fr.fromBufferAttribute(a,h),zr.fromBufferAttribute(a,d),m.uv=gn.getUV(na,Un,Hn,Gn,Nr,Fr,zr,new Xe)),l&&(Nr.fromBufferAttribute(l,c),Fr.fromBufferAttribute(l,h),zr.fromBufferAttribute(l,d),m.uv2=gn.getUV(na,Un,Hn,Gn,Nr,Fr,zr,new Xe));const v={a:c,b:h,c:d,normal:new D,materialIndex:0};gn.getNormal(Un,Hn,Gn,v.normal),m.face=v}return m}class fr extends ni{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,m=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(d,2));function v(p,f,_,S,C,E,w,R,z,M,A){const X=E/z,V=w/M,pe=E/2,ce=w/2,k=R/2,ee=z+1,U=M+1;let $=0,G=0;const H=new D;for(let J=0;J<U;J++){const le=J*V-ce;for(let se=0;se<ee;se++){const oe=se*X-pe;H[p]=oe*S,H[f]=le*C,H[_]=k,c.push(H.x,H.y,H.z),H[p]=0,H[f]=0,H[_]=R>0?1:-1,h.push(H.x,H.y,H.z),d.push(se/z),d.push(1-J/M),$+=1}}for(let J=0;J<M;J++)for(let le=0;le<z;le++){const se=u+le+ee*J,oe=u+le+ee*(J+1),we=u+(le+1)+ee*(J+1),Ee=u+(le+1)+ee*J;l.push(se,oe,Ee),l.push(oe,we,Ee),G+=6}a.addGroup(m,G,A),m+=G,u+=$}}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function yt(n){const e={};for(let t=0;t<n.length;t++){const i=Es(n[t]);for(const s in i)e[s]=i[s]}return e}const Cm={clone:Es,merge:yt};var Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends xt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Tm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class od extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends od{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(No*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=90,es=1;class Am extends nn{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const s=new Ht(Qi,es,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(1,0,0)),this.add(s);const r=new Ht(Qi,es,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(-1,0,0)),this.add(r);const o=new Ht(Qi,es,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new Ht(Qi,es,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new Ht(Qi,es,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const c=new Ht(Qi,es,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=Dn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class ad extends tn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ms,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lm extends Yn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ad(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fr(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Kn});r.uniforms.tEquirect.value=t;const o=new Rn(s,r),a=t.minFilter;return t.minFilter===_o&&(t.minFilter=Ut),new Am(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ia=new D,Rm=new D,Dm=new vn;class hi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ia.subVectors(i,t).cross(Rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(ia),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dm.getNormalMatrix(e),s=this.coplanarPoint(ia).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Ja,Vr=new D;class ld{constructor(e=new hi,t=new hi,i=new hi,s=new hi,r=new hi,o=new hi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],d=i[7],u=i[8],m=i[9],v=i[10],p=i[11],f=i[12],_=i[13],S=i[14],C=i[15];return t[0].setComponents(a-s,d-l,p-u,C-f).normalize(),t[1].setComponents(a+s,d+l,p+u,C+f).normalize(),t[2].setComponents(a+r,d+c,p+m,C+_).normalize(),t[3].setComponents(a-r,d-c,p-m,C-_).normalize(),t[4].setComponents(a-o,d-h,p-v,C-S).normalize(),t[5].setComponents(a+o,d+h,p+v,C+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Im(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,h){const d=c.array,u=c.usage,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,d,u),c.onUploadCallback();let v;if(d instanceof Float32Array)v=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(d instanceof Int16Array)v=5122;else if(d instanceof Uint32Array)v=5125;else if(d instanceof Int32Array)v=5124;else if(d instanceof Int8Array)v=5120;else if(d instanceof Uint8Array)v=5121;else if(d instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,d){const u=h.array,m=h.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,u):(t?n.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):n.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,s(c,h)):d.version<c.version&&(r(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class el extends ni{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,m=[],v=[],p=[],f=[];for(let _=0;_<h;_++){const S=_*u-o;for(let C=0;C<c;C++){const E=C*d-r;v.push(E,-S,0),p.push(0,0,1),f.push(C/a),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<a;S++){const C=S+c*_,E=S+c*(_+1),w=S+1+c*(_+1),R=S+1+c*_;m.push(C,E,R),m.push(E,w,R)}this.setIndex(m),this.setAttribute("position",new xn(v,3)),this.setAttribute("normal",new xn(p,3)),this.setAttribute("uv",new xn(f,2))}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}var km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vm="vec3 transformed = vec3( position );",Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Gm=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Wm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,eg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,_g=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Pg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ag=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ig=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ng=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Xg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,fv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_v=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mv=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,wv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Sv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ev=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Tv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Pv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Av=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ov=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Uv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,a0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:km,alphamap_pars_fragment:Nm,alphatest_fragment:Fm,alphatest_pars_fragment:zm,aomap_fragment:Om,aomap_pars_fragment:Bm,begin_vertex:Vm,beginnormal_vertex:Um,bsdfs:Hm,iridescence_fragment:Gm,bumpmap_pars_fragment:Wm,clipping_planes_fragment:$m,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:Xm,clipping_planes_vertex:jm,color_fragment:Km,color_pars_fragment:Ym,color_pars_vertex:Zm,color_vertex:Jm,common:Qm,cube_uv_reflection_fragment:eg,defaultnormal_vertex:tg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:sg,emissivemap_pars_fragment:rg,encodings_fragment:og,encodings_pars_fragment:ag,envmap_fragment:lg,envmap_common_pars_fragment:cg,envmap_pars_fragment:hg,envmap_pars_vertex:dg,envmap_physical_pars_fragment:Mg,envmap_vertex:ug,fog_vertex:fg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:gg,gradientmap_pars_fragment:vg,lightmap_fragment:_g,lightmap_pars_fragment:xg,lights_lambert_vertex:bg,lights_pars_begin:yg,lights_toon_fragment:wg,lights_toon_pars_fragment:Sg,lights_phong_fragment:Eg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Tg,lights_physical_pars_fragment:Pg,lights_fragment_begin:Ag,lights_fragment_maps:Lg,lights_fragment_end:Rg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ig,logdepthbuf_pars_vertex:kg,logdepthbuf_vertex:Ng,map_fragment:Fg,map_pars_fragment:zg,map_particle_fragment:Og,map_particle_pars_fragment:Bg,metalnessmap_fragment:Vg,metalnessmap_pars_fragment:Ug,morphcolor_vertex:Hg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Wg,morphtarget_vertex:$g,normal_fragment_begin:qg,normal_fragment_maps:Xg,normal_pars_fragment:jg,normal_pars_vertex:Kg,normal_vertex:Yg,normalmap_pars_fragment:Zg,clearcoat_normal_fragment_begin:Jg,clearcoat_normal_fragment_maps:Qg,clearcoat_pars_fragment:ev,iridescence_pars_fragment:tv,output_fragment:nv,packing:iv,premultiplied_alpha_fragment:sv,project_vertex:rv,dithering_fragment:ov,dithering_pars_fragment:av,roughnessmap_fragment:lv,roughnessmap_pars_fragment:cv,shadowmap_pars_fragment:hv,shadowmap_pars_vertex:dv,shadowmap_vertex:uv,shadowmask_pars_fragment:fv,skinbase_vertex:pv,skinning_pars_vertex:mv,skinning_vertex:gv,skinnormal_vertex:vv,specularmap_fragment:_v,specularmap_pars_fragment:xv,tonemapping_fragment:bv,tonemapping_pars_fragment:yv,transmission_fragment:Mv,transmission_pars_fragment:wv,uv_pars_fragment:Sv,uv_pars_vertex:Ev,uv_vertex:Cv,uv2_pars_fragment:Tv,uv2_pars_vertex:Pv,uv2_vertex:Av,worldpos_vertex:Lv,background_vert:Rv,background_frag:Dv,cube_vert:Iv,cube_frag:kv,depth_vert:Nv,depth_frag:Fv,distanceRGBA_vert:zv,distanceRGBA_frag:Ov,equirect_vert:Bv,equirect_frag:Vv,linedashed_vert:Uv,linedashed_frag:Hv,meshbasic_vert:Gv,meshbasic_frag:Wv,meshlambert_vert:$v,meshlambert_frag:qv,meshmatcap_vert:Xv,meshmatcap_frag:jv,meshnormal_vert:Kv,meshnormal_frag:Yv,meshphong_vert:Zv,meshphong_frag:Jv,meshphysical_vert:Qv,meshphysical_frag:e0,meshtoon_vert:t0,meshtoon_frag:n0,points_vert:i0,points_frag:s0,shadow_vert:r0,shadow_frag:o0,sprite_vert:a0,sprite_frag:l0},me={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vn},uv2Transform:{value:new vn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}}},mn={basic:{uniforms:yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.fog,me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:yt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:yt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:yt([me.points,me.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:yt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:yt([me.common,me.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:yt([me.sprite,me.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new vn},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},cube:{uniforms:yt([me.envmap,{opacity:{value:1}}]),vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:yt([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:yt([me.lights,me.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};mn.physical={uniforms:yt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function c0(n,e,t,i,s,r){const o=new Ne(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function m(p,f){let _=!1,S=f.isScene===!0?f.background:null;S&&S.isTexture&&(S=e.get(S));const C=n.xr,E=C.getSession&&C.getSession();E&&E.environmentBlendMode==="additive"&&(S=null),S===null?v(o,a):S&&S.isColor&&(v(S,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===vo)?(c===void 0&&(c=new Rn(new fr(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Es(mn.cube.uniforms),vertexShader:mn.cube.vertexShader,fragmentShader:mn.cube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(h!==S||d!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Rn(new el(2,2),new Mn({name:"BackgroundMaterial",uniforms:Es(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,r)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),a=f,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,v(o,a)},render:m}}function h0(n,e,t,i){const s=n.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=f(null);let c=l,h=!1;function d(k,ee,U,$,G){let H=!1;if(o){const J=p($,U,ee);c!==J&&(c=J,m(c.object)),H=_(k,$,U,G),H&&S(k,$,U,G)}else{const J=ee.wireframe===!0;(c.geometry!==$.id||c.program!==U.id||c.wireframe!==J)&&(c.geometry=$.id,c.program=U.id,c.wireframe=J,H=!0)}G!==null&&t.update(G,34963),(H||h)&&(h=!1,M(k,ee,U,$),G!==null&&n.bindBuffer(34963,t.get(G).buffer))}function u(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(k){return i.isWebGL2?n.bindVertexArray(k):r.bindVertexArrayOES(k)}function v(k){return i.isWebGL2?n.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function p(k,ee,U){const $=U.wireframe===!0;let G=a[k.id];G===void 0&&(G={},a[k.id]=G);let H=G[ee.id];H===void 0&&(H={},G[ee.id]=H);let J=H[$];return J===void 0&&(J=f(u()),H[$]=J),J}function f(k){const ee=[],U=[],$=[];for(let G=0;G<s;G++)ee[G]=0,U[G]=0,$[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:U,attributeDivisors:$,object:k,attributes:{},index:null}}function _(k,ee,U,$){const G=c.attributes,H=ee.attributes;let J=0;const le=U.getAttributes();for(const se in le)if(le[se].location>=0){const we=G[se];let Ee=H[se];if(Ee===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(Ee=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(Ee=k.instanceColor)),we===void 0||we.attribute!==Ee||Ee&&we.data!==Ee.data)return!0;J++}return c.attributesNum!==J||c.index!==$}function S(k,ee,U,$){const G={},H=ee.attributes;let J=0;const le=U.getAttributes();for(const se in le)if(le[se].location>=0){let we=H[se];we===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(we=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(we=k.instanceColor));const Ee={};Ee.attribute=we,we&&we.data&&(Ee.data=we.data),G[se]=Ee,J++}c.attributes=G,c.attributesNum=J,c.index=$}function C(){const k=c.newAttributes;for(let ee=0,U=k.length;ee<U;ee++)k[ee]=0}function E(k){w(k,0)}function w(k,ee){const U=c.newAttributes,$=c.enabledAttributes,G=c.attributeDivisors;U[k]=1,$[k]===0&&(n.enableVertexAttribArray(k),$[k]=1),G[k]!==ee&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,ee),G[k]=ee)}function R(){const k=c.newAttributes,ee=c.enabledAttributes;for(let U=0,$=ee.length;U<$;U++)ee[U]!==k[U]&&(n.disableVertexAttribArray(U),ee[U]=0)}function z(k,ee,U,$,G,H){i.isWebGL2===!0&&(U===5124||U===5125)?n.vertexAttribIPointer(k,ee,U,G,H):n.vertexAttribPointer(k,ee,U,$,G,H)}function M(k,ee,U,$){if(i.isWebGL2===!1&&(k.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const G=$.attributes,H=U.getAttributes(),J=ee.defaultAttributeValues;for(const le in H){const se=H[le];if(se.location>=0){let oe=G[le];if(oe===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor)),oe!==void 0){const we=oe.normalized,Ee=oe.itemSize,Z=t.get(oe);if(Z===void 0)continue;const He=Z.buffer,Pe=Z.type,Re=Z.bytesPerElement;if(oe.isInterleavedBufferAttribute){const _e=oe.data,$e=_e.stride,ze=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let y=0;y<se.locationSize;y++)w(se.location+y,_e.meshPerAttribute);k.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let y=0;y<se.locationSize;y++)E(se.location+y);n.bindBuffer(34962,He);for(let y=0;y<se.locationSize;y++)z(se.location+y,Ee/se.locationSize,Pe,we,$e*Re,(ze+Ee/se.locationSize*y)*Re)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<se.locationSize;_e++)w(se.location+_e,oe.meshPerAttribute);k.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<se.locationSize;_e++)E(se.location+_e);n.bindBuffer(34962,He);for(let _e=0;_e<se.locationSize;_e++)z(se.location+_e,Ee/se.locationSize,Pe,we,Ee*Re,Ee/se.locationSize*_e*Re)}}else if(J!==void 0){const we=J[le];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(se.location,we);break;case 3:n.vertexAttrib3fv(se.location,we);break;case 4:n.vertexAttrib4fv(se.location,we);break;default:n.vertexAttrib1fv(se.location,we)}}}}R()}function A(){pe();for(const k in a){const ee=a[k];for(const U in ee){const $=ee[U];for(const G in $)v($[G].object),delete $[G];delete ee[U]}delete a[k]}}function X(k){if(a[k.id]===void 0)return;const ee=a[k.id];for(const U in ee){const $=ee[U];for(const G in $)v($[G].object),delete $[G];delete ee[U]}delete a[k.id]}function V(k){for(const ee in a){const U=a[ee];if(U[k.id]===void 0)continue;const $=U[k.id];for(const G in $)v($[G].object),delete $[G];delete U[k.id]}}function pe(){ce(),h=!0,c!==l&&(c=l,m(c.object))}function ce(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:pe,resetDefaultState:ce,dispose:A,releaseStatesOfGeometry:X,releaseStatesOfProgram:V,initAttributes:C,enableAttribute:E,disableUnusedAttributes:R}}function d0(n,e,t,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,h){n.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,d){if(d===0)return;let u,m;if(s)u=n,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](r,c,h,d),t.update(h,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function u0(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(z){if(z==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),u=n.getParameter(35660),m=n.getParameter(3379),v=n.getParameter(34076),p=n.getParameter(34921),f=n.getParameter(36347),_=n.getParameter(36348),S=n.getParameter(36349),C=u>0,E=o||e.has("OES_texture_float"),w=C&&E,R=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:C,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:R}}function f0(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new hi,a=new vn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,m){const v=d.length!==0||u||i!==0||s;return s=u,t=h(d,m,0),i=d.length,v},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,u,m){const v=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,_=n.get(d);if(!s||v===null||v.length===0||r&&!f)r?h(null):c();else{const S=r?0:i,C=S*4;let E=_.clippingState||null;l.value=E,E=h(v,u,C,m);for(let w=0;w!==C;++w)E[w]=t[w];_.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,m,v){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=l.value,v!==!0||f===null){const _=m+p*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<_)&&(f=new Float32Array(_));for(let C=0,E=m;C!==p;++C,E+=4)o.copy(d[C]).applyMatrix4(S,a),o.normal.toArray(f,E),f[E+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function p0(n){let e=new WeakMap;function t(o,a){return a===Ea?o.mapping=Ms:a===Ca&&(o.mapping=ws),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ea||a===Ca)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lm(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class m0 extends od{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const as=4,Tc=[.125,.215,.35,.446,.526,.582],fi=20,sa=new m0,Pc=new Ne;let ra=null;const di=(1+Math.sqrt(5))/2,ns=1/di,Ac=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,di,ns),new D(0,di,-ns),new D(ns,0,di),new D(-ns,0,di),new D(di,ns,0),new D(-di,ns,0)];class Lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ra=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ra),e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ra=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:tr,format:Zt,encoding:Bi,depthBuffer:!1},s=Rc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(r)),this._blurMaterial=v0(r,e,t)}return s}_compileMaterial(e){const t=new Rn(this._lodPlanes[0],e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,i,s){const a=new Ht(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Pc),h.toneMapping=Dn,h.autoClear=!1;const m=new Qa({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),v=new Rn(new fr,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Pc),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):S===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const C=this._cubeSize;Ur(s,S*C,_>2?C:0,C,C),h.setRenderTarget(s),p&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ms||e.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Rn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ur(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ac[(s-1)%Ac.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Rn(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*fi-1),p=r/v,f=isFinite(r)?1+Math.floor(h*p):fi;f>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${fi}`);const _=[];let S=0;for(let z=0;z<fi;++z){const M=z/p,A=Math.exp(-M*M/2);_.push(A),z===0?S+=A:z<f&&(S+=2*A)}for(let z=0;z<_.length;z++)_[z]=_[z]/S;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=_,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:C}=this;u.dTheta.value=v,u.mipInt.value=C-i;const E=this._sizeLods[s],w=3*E*(s>C-as?s-C+as:0),R=4*(this._cubeSize-E);Ur(t,w,R,3*E,2*E),l.setRenderTarget(t),l.render(d,sa)}}function g0(n){const e=[],t=[],i=[];let s=n;const r=n-as+1+Tc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-as?l=Tc[o-n+as-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,p=3,f=2,_=1,S=new Float32Array(p*v*m),C=new Float32Array(f*v*m),E=new Float32Array(_*v*m);for(let R=0;R<m;R++){const z=R%3*2/3-1,M=R>2?0:-1,A=[z,M,0,z+2/3,M,0,z+2/3,M+1,0,z,M,0,z+2/3,M+1,0,z,M+1,0];S.set(A,p*v*R),C.set(u,f*v*R);const X=[R,R,R,R,R,R];E.set(X,_*v*R)}const w=new ni;w.setAttribute("position",new _n(S,p)),w.setAttribute("uv",new _n(C,f)),w.setAttribute("faceIndex",new _n(E,_)),e.push(w),s>as&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rc(n,e,t){const i=new Yn(n,e,t);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ur(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function v0(n,e,t){const i=new Float32Array(fi),s=new D(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Dc(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ic(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function tl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ea||l===Ca,h=l===Ms||l===ws;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Lc(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Lc(n));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function x0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function b0(n,e,t,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete s[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const v in u)e.update(u[v],34962);const m=d.morphAttributes;for(const v in m){const p=m[v];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function c(d){const u=[],m=d.index,v=d.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let C=0,E=S.length;C<E;C+=3){const w=S[C+0],R=S[C+1],z=S[C+2];u.push(w,R,R,z,z,w)}}else{const S=v.array;p=v.version;for(let C=0,E=S.length/3-1;C<E;C+=3){const w=C+0,R=C+1,z=C+2;u.push(w,R,R,z,z,w)}}const f=new(Jh(u)?rd:sd)(u,1);f.version=p;const _=r.get(d);_&&e.remove(_),r.set(d,f)}function h(d){const u=r.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function y0(n,e,t,i){const s=i.isWebGL2;let r;function o(u){r=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,m){n.drawElements(r,m,a,u*l),t.update(m,r,1)}function d(u,m,v){if(v===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,m,a,u*l,v),t.update(m,r,v)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function M0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function w0(n,e){return n[0]-e[0]}function S0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function oa(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function E0(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new vt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d,u){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=p!==void 0?p.length:0;let _=r.get(h);if(_===void 0||_.count!==f){let U=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",U)};var v=U;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,z=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let X=0;E===!0&&(X=1),w===!0&&(X=2),R===!0&&(X=3);let V=h.attributes.position.count*X,pe=1;V>e.maxTextureSize&&(pe=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const ce=new Float32Array(V*pe*4*f),k=new nd(ce,V,pe,f);k.type=vi,k.needsUpdate=!0;const ee=X*4;for(let $=0;$<f;$++){const G=z[$],H=M[$],J=A[$],le=V*pe*4*$;for(let se=0;se<G.count;se++){const oe=se*ee;E===!0&&(o.fromBufferAttribute(G,se),G.normalized===!0&&oa(o,G),ce[le+oe+0]=o.x,ce[le+oe+1]=o.y,ce[le+oe+2]=o.z,ce[le+oe+3]=0),w===!0&&(o.fromBufferAttribute(H,se),H.normalized===!0&&oa(o,H),ce[le+oe+4]=o.x,ce[le+oe+5]=o.y,ce[le+oe+6]=o.z,ce[le+oe+7]=0),R===!0&&(o.fromBufferAttribute(J,se),J.normalized===!0&&oa(o,J),ce[le+oe+8]=o.x,ce[le+oe+9]=o.y,ce[le+oe+10]=o.z,ce[le+oe+11]=J.itemSize===4?o.w:1)}}_={count:f,texture:k,size:new Xe(V,pe)},r.set(h,_),h.addEventListener("dispose",U)}let S=0;for(let E=0;E<m.length;E++)S+=m[E];const C=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(n,"morphTargetBaseInfluence",C),u.getUniforms().setValue(n,"morphTargetInfluences",m),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let f=i[h.id];if(f===void 0||f.length!==p){f=[];for(let w=0;w<p;w++)f[w]=[w,0];i[h.id]=f}for(let w=0;w<p;w++){const R=f[w];R[0]=w,R[1]=m[w]}f.sort(S0);for(let w=0;w<8;w++)w<p&&f[w][1]?(a[w][0]=f[w][0],a[w][1]=f[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(w0);const _=h.morphAttributes.position,S=h.morphAttributes.normal;let C=0;for(let w=0;w<8;w++){const R=a[w],z=R[0],M=R[1];z!==Number.MAX_SAFE_INTEGER&&M?(_&&h.getAttribute("morphTarget"+w)!==_[z]&&h.setAttribute("morphTarget"+w,_[z]),S&&h.getAttribute("morphNormal"+w)!==S[z]&&h.setAttribute("morphNormal"+w,S[z]),s[w]=M,C+=M):(_&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),S&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),s[w]=0)}const E=h.morphTargetsRelative?1:1-C;u.getUniforms().setValue(n,"morphTargetBaseInfluence",E),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function C0(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);return s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const hd=new tn,dd=new nd,ud=new pm,fd=new ad,kc=[],Nc=[],Fc=new Float32Array(16),zc=new Float32Array(9),Oc=new Float32Array(4);function ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=kc[s];if(r===void 0&&(r=new Float32Array(s),kc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xo(n,e){let t=Nc[e];t===void 0&&(t=new Int32Array(e),Nc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function T0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function P0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function A0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function L0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function R0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Lt(t,i))return;Oc.set(i),n.uniformMatrix2fv(this.addr,!1,Oc),Rt(t,i)}}function D0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Lt(t,i))return;zc.set(i),n.uniformMatrix3fv(this.addr,!1,zc),Rt(t,i)}}function I0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Lt(t,i))return;Fc.set(i),n.uniformMatrix4fv(this.addr,!1,Fc),Rt(t,i)}}function k0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function N0(n,e){const t=this.cache;Lt(t,e)||(n.uniform2iv(this.addr,e),Rt(t,e))}function F0(n,e){const t=this.cache;Lt(t,e)||(n.uniform3iv(this.addr,e),Rt(t,e))}function z0(n,e){const t=this.cache;Lt(t,e)||(n.uniform4iv(this.addr,e),Rt(t,e))}function O0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function B0(n,e){const t=this.cache;Lt(t,e)||(n.uniform2uiv(this.addr,e),Rt(t,e))}function V0(n,e){const t=this.cache;Lt(t,e)||(n.uniform3uiv(this.addr,e),Rt(t,e))}function U0(n,e){const t=this.cache;Lt(t,e)||(n.uniform4uiv(this.addr,e),Rt(t,e))}function H0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||hd,s)}function G0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ud,s)}function W0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||fd,s)}function $0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||dd,s)}function q0(n){switch(n){case 5126:return T0;case 35664:return P0;case 35665:return A0;case 35666:return L0;case 35674:return R0;case 35675:return D0;case 35676:return I0;case 5124:case 35670:return k0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return z0;case 5125:return O0;case 36294:return B0;case 36295:return V0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return $0}}function X0(n,e){n.uniform1fv(this.addr,e)}function j0(n,e){const t=ks(e,this.size,2);n.uniform2fv(this.addr,t)}function K0(n,e){const t=ks(e,this.size,3);n.uniform3fv(this.addr,t)}function Y0(n,e){const t=ks(e,this.size,4);n.uniform4fv(this.addr,t)}function Z0(n,e){const t=ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function J0(n,e){const t=ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Q0(n,e){const t=ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e_(n,e){n.uniform1iv(this.addr,e)}function t_(n,e){n.uniform2iv(this.addr,e)}function n_(n,e){n.uniform3iv(this.addr,e)}function i_(n,e){n.uniform4iv(this.addr,e)}function s_(n,e){n.uniform1uiv(this.addr,e)}function r_(n,e){n.uniform2uiv(this.addr,e)}function o_(n,e){n.uniform3uiv(this.addr,e)}function a_(n,e){n.uniform4uiv(this.addr,e)}function l_(n,e,t){const i=e.length,s=xo(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTexture2D(e[r]||hd,s[r])}function c_(n,e,t){const i=e.length,s=xo(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTexture3D(e[r]||ud,s[r])}function h_(n,e,t){const i=e.length,s=xo(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTextureCube(e[r]||fd,s[r])}function d_(n,e,t){const i=e.length,s=xo(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||dd,s[r])}function u_(n){switch(n){case 5126:return X0;case 35664:return j0;case 35665:return K0;case 35666:return Y0;case 35674:return Z0;case 35675:return J0;case 35676:return Q0;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return d_}}class f_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=q0(t.type)}}class p_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=u_(t.type)}}class m_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Bc(n,e){n.seq.push(e),n.map[e.id]=e}function g_(n,e,t){const i=n.name,s=i.length;for(aa.lastIndex=0;;){const r=aa.exec(i),o=aa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bc(t,c===void 0?new f_(a,n,e):new p_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new m_(a),Bc(t,d)),t=d}}}class jr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);g_(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Vc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let v_=0;function __(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function x_(n){switch(n){case Bi:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Uc(n,e,t){const i=n.getShaderParameter(e,35713),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+__(n.getShaderSource(e),o)}else return s}function b_(n,e){const t=x_(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function y_(n,e){let t;switch(e){case Up:t="Linear";break;case Hp:t="Reinhard";break;case Gp:t="OptimizedCineon";break;case Wp:t="ACESFilmic";break;case $p:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function M_(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($s).join(`
`)}function w_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function S_(n,e){const t={},i=n.getProgramParameter(e,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function $s(n){return n!==""}function Hc(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(n){return n.replace(E_,C_)}function C_(n,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ra(t)}const T_=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(n){return n.replace(P_,pd).replace(T_,A_)}function A_(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),pd(n,e,t,i)}function pd(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $c(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_p?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ws&&(e="SHADOWMAP_TYPE_VSM"),e}function R_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ms:case ws:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function I_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case go:e="ENVMAP_BLENDING_MULTIPLY";break;case Bp:e="ENVMAP_BLENDING_MIX";break;case Vp:e="ENVMAP_BLENDING_ADD";break}return e}function k_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function N_(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=L_(t),c=R_(t),h=D_(t),d=I_(t),u=k_(t),m=t.isWebGL2?"":M_(t),v=w_(r),p=s.createProgram();let f,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[v].filter($s).join(`
`),f.length>0&&(f+=`
`),_=[m,v].filter($s).join(`
`),_.length>0&&(_+=`
`)):(f=[$c(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),_=[m,$c(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Dn?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,b_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=Ra(o),o=Hc(o,t),o=Gc(o,t),a=Ra(a),a=Hc(a,t),a=Gc(a,t),o=Wc(o),a=Wc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=S+f+o,E=S+_+a,w=Vc(s,35633,C),R=Vc(s,35632,E);if(s.attachShader(p,w),s.attachShader(p,R),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),n.debug.checkShaderErrors){const A=s.getProgramInfoLog(p).trim(),X=s.getShaderInfoLog(w).trim(),V=s.getShaderInfoLog(R).trim();let pe=!0,ce=!0;if(s.getProgramParameter(p,35714)===!1){pe=!1;const k=Uc(s,w,"vertex"),ee=Uc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+k+`
`+ee)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(X===""||V==="")&&(ce=!1);ce&&(this.diagnostics={runnable:pe,programLog:A,vertexShader:{log:X,prefix:f},fragmentShader:{log:V,prefix:_}})}s.deleteShader(w),s.deleteShader(R);let z;this.getUniforms=function(){return z===void 0&&(z=new jr(s,p)),z};let M;return this.getAttributes=function(){return M===void 0&&(M=S_(s,p)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=v_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=R,this}let F_=0;class z_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new O_(e);t.set(e,i)}return t.get(e)}}class O_{constructor(e){this.id=F_++,this.code=e,this.usedTimes=0}}function B_(n,e,t,i,s,r,o){const a=new id,l=new z_,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,A,X,V,pe){const ce=V.fog,k=pe.geometry,ee=M.isMeshStandardMaterial?V.environment:null,U=(M.isMeshStandardMaterial?t:e).get(M.envMap||ee),$=!!U&&U.mapping===vo?U.image.height:null,G=v[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const H=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,J=H!==void 0?H.length:0;let le=0;k.morphAttributes.position!==void 0&&(le=1),k.morphAttributes.normal!==void 0&&(le=2),k.morphAttributes.color!==void 0&&(le=3);let se,oe,we,Ee;if(G){const $e=mn[G];se=$e.vertexShader,oe=$e.fragmentShader}else se=M.vertexShader,oe=M.fragmentShader,l.update(M),we=l.getVertexShaderID(M),Ee=l.getFragmentShaderID(M);const Z=n.getRenderTarget(),He=M.alphaTest>0,Pe=M.clearcoat>0,Re=M.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:M.type,vertexShader:se,fragmentShader:oe,defines:M.defines,customVertexShaderID:we,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:pe.isInstancedMesh===!0,instancingColor:pe.isInstancedMesh===!0&&pe.instanceColor!==null,supportsVertexTextures:u,outputEncoding:Z===null?n.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:Bi,map:!!M.map,matcap:!!M.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:$,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===hm,tangentSpaceNormalMap:M.normalMapType===Ds,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===nt,clearcoat:Pe,clearcoatMap:Pe&&!!M.clearcoatMap,clearcoatRoughnessMap:Pe&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:Pe&&!!M.clearcoatNormalMap,iridescence:Re,iridescenceMap:Re&&!!M.iridescenceMap,iridescenceThicknessMap:Re&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===ds,alphaMap:!!M.alphaMap,alphaTest:He,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!k.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!ce,useFog:M.fog===!0,fogExp2:ce&&ce.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:pe.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Dn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ys,flipSided:M.side===en,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)A.push(X),A.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(_(A,M),S(A,M),A.push(n.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.combine),M.push(A.vertexUvs),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function S(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),A.fog&&a.enable(33),M.push(a.mask),a.disableAll(),A.useFog&&a.enable(0),A.flatShading&&a.enable(1),A.logarithmicDepthBuffer&&a.enable(2),A.skinning&&a.enable(3),A.morphTargets&&a.enable(4),A.morphNormals&&a.enable(5),A.morphColors&&a.enable(6),A.premultipliedAlpha&&a.enable(7),A.shadowMapEnabled&&a.enable(8),A.physicallyCorrectLights&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.specularIntensityMap&&a.enable(14),A.specularColorMap&&a.enable(15),A.transmission&&a.enable(16),A.transmissionMap&&a.enable(17),A.thicknessMap&&a.enable(18),A.sheen&&a.enable(19),A.sheenColorMap&&a.enable(20),A.sheenRoughnessMap&&a.enable(21),A.decodeVideoTexture&&a.enable(22),A.opaque&&a.enable(23),M.push(a.mask)}function C(M){const A=v[M.type];let X;if(A){const V=mn[A];X=Cm.clone(V.uniforms)}else X=M.uniforms;return X}function E(M,A){let X;for(let V=0,pe=c.length;V<pe;V++){const ce=c[V];if(ce.cacheKey===A){X=ce,++X.usedTimes;break}}return X===void 0&&(X=new N_(n,A,M,r),c.push(X)),X}function w(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:C,acquireProgram:E,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:z}}function V_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function U_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,m,v,p,f){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:u,material:m,groupOrder:v,renderOrder:d.renderOrder,z:p,group:f},n[e]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=m,_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=p,_.group=f),e++,_}function a(d,u,m,v,p,f){const _=o(d,u,m,v,p,f);m.transmission>0?i.push(_):m.transparent===!0?s.push(_):t.push(_)}function l(d,u,m,v,p,f){const _=o(d,u,m,v,p,f);m.transmission>0?i.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function c(d,u){t.length>1&&t.sort(d||U_),i.length>1&&i.sort(u||qc),s.length>1&&s.sort(u||qc)}function h(){for(let d=e,u=n.length;d<u;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function H_(){let n=new WeakMap;function e(i,s){let r;return n.has(i)===!1?(r=new Xc,n.set(i,[r])):s>=n.get(i).length?(r=new Xc,n.get(i).push(r)):r=n.get(i)[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function G_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function W_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $_=0;function q_(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function X_(n,e){const t=new G_,i=W_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)s.probe.push(new D);const r=new D,o=new St,a=new St;function l(h,d){let u=0,m=0,v=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let p=0,f=0,_=0,S=0,C=0,E=0,w=0,R=0;h.sort(q_);const z=d!==!0?Math.PI:1;for(let A=0,X=h.length;A<X;A++){const V=h[A],pe=V.color,ce=V.intensity,k=V.distance,ee=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)u+=pe.r*ce*z,m+=pe.g*ce*z,v+=pe.b*ce*z;else if(V.isLightProbe)for(let U=0;U<9;U++)s.probe[U].addScaledVector(V.sh.coefficients[U],ce);else if(V.isDirectionalLight){const U=t.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity*z),V.castShadow){const $=V.shadow,G=i.get(V);G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,s.directionalShadow[p]=G,s.directionalShadowMap[p]=ee,s.directionalShadowMatrix[p]=V.shadow.matrix,E++}s.directional[p]=U,p++}else if(V.isSpotLight){const U=t.get(V);if(U.position.setFromMatrixPosition(V.matrixWorld),U.color.copy(pe).multiplyScalar(ce*z),U.distance=k,U.coneCos=Math.cos(V.angle),U.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),U.decay=V.decay,V.castShadow){const $=V.shadow,G=i.get(V);G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,s.spotShadow[_]=G,s.spotShadowMap[_]=ee,s.spotShadowMatrix[_]=V.shadow.matrix,R++}s.spot[_]=U,_++}else if(V.isRectAreaLight){const U=t.get(V);U.color.copy(pe).multiplyScalar(ce),U.halfWidth.set(V.width*.5,0,0),U.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=U,S++}else if(V.isPointLight){const U=t.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity*z),U.distance=V.distance,U.decay=V.decay,V.castShadow){const $=V.shadow,G=i.get(V);G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,s.pointShadow[f]=G,s.pointShadowMap[f]=ee,s.pointShadowMatrix[f]=V.shadow.matrix,w++}s.point[f]=U,f++}else if(V.isHemisphereLight){const U=t.get(V);U.skyColor.copy(V.color).multiplyScalar(ce*z),U.groundColor.copy(V.groundColor).multiplyScalar(ce*z),s.hemi[C]=U,C++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=m,s.ambient[2]=v;const M=s.hash;(M.directionalLength!==p||M.pointLength!==f||M.spotLength!==_||M.rectAreaLength!==S||M.hemiLength!==C||M.numDirectionalShadows!==E||M.numPointShadows!==w||M.numSpotShadows!==R)&&(s.directional.length=p,s.spot.length=_,s.rectArea.length=S,s.point.length=f,s.hemi.length=C,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=w,s.spotShadowMatrix.length=R,M.directionalLength=p,M.pointLength=f,M.spotLength=_,M.rectAreaLength=S,M.hemiLength=C,M.numDirectionalShadows=E,M.numPointShadows=w,M.numSpotShadows=R,s.version=$_++)}function c(h,d){let u=0,m=0,v=0,p=0,f=0;const _=d.matrixWorldInverse;for(let S=0,C=h.length;S<C;S++){const E=h[S];if(E.isDirectionalLight){const w=s.directional[u];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),u++}else if(E.isSpotLight){const w=s.spot[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),v++}else if(E.isRectAreaLight){const w=s.rectArea[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(_),a.identity(),o.copy(E.matrixWorld),o.premultiply(_),a.extractRotation(o),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(E.isPointLight){const w=s.point[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const w=s.hemi[f];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:s}}function jc(n,e){const t=new X_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function j_(n,e){let t=new WeakMap;function i(r,o=0){let a;return t.has(r)===!1?(a=new jc(n,e),t.set(r,[a])):o>=t.get(r).length?(a=new jc(n,e),t.get(r).push(a)):a=t.get(r)[o],a}function s(){t=new WeakMap}return{get:i,dispose:s}}class md extends xt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gd extends xt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const K_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Z_(n,e,t){let i=new ld;const s=new Xe,r=new Xe,o=new vt,a=new md({depthPacking:cm}),l=new gd,c={},h=t.maxTextureSize,d={0:en,1:er,2:ys},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:K_,fragmentShader:Y_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new ni;v.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Rn(v,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh,this.render=function(E,w,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const z=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Kn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);for(let V=0,pe=E.length;V<pe;V++){const ce=E[V],k=ce.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ee=k.getFrameExtents();if(s.multiply(ee),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,k.mapSize.y=r.y)),k.map===null&&!k.isPointLightShadow&&this.type===Ws&&(k.map=new Yn(s.x,s.y),k.map.texture.name=ce.name+".shadowMap",k.mapPass=new Yn(s.x,s.y),k.camera.updateProjectionMatrix()),k.map===null){const $={minFilter:It,magFilter:It,format:Zt};k.map=new Yn(s.x,s.y,$),k.map.texture.name=ce.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const U=k.getViewportCount();for(let $=0;$<U;$++){const G=k.getViewport($);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),X.viewport(o),k.updateMatrices(ce,$),i=k.getFrustum(),C(w,R,k.camera,ce,this.type)}!k.isPointLightShadow&&this.type===Ws&&_(k,R),k.needsUpdate=!1}f.needsUpdate=!1,n.setRenderTarget(z,M,A)};function _(E,w){const R=e.update(p);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,R,u,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,R,m,p,null)}function S(E,w,R,z,M,A){let X=null;const V=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(V!==void 0?X=V:X=R.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const pe=X.uuid,ce=w.uuid;let k=c[pe];k===void 0&&(k={},c[pe]=k);let ee=k[ce];ee===void 0&&(ee=X.clone(),k[ce]=ee),X=ee}return X.visible=w.visible,X.wireframe=w.wireframe,A===Ws?X.side=w.shadowSide!==null?w.shadowSide:w.side:X.side=w.shadowSide!==null?w.shadowSide:d[w.side],X.alphaMap=w.alphaMap,X.alphaTest=w.alphaTest,X.clipShadows=w.clipShadows,X.clippingPlanes=w.clippingPlanes,X.clipIntersection=w.clipIntersection,X.displacementMap=w.displacementMap,X.displacementScale=w.displacementScale,X.displacementBias=w.displacementBias,X.wireframeLinewidth=w.wireframeLinewidth,X.linewidth=w.linewidth,R.isPointLight===!0&&X.isMeshDistanceMaterial===!0&&(X.referencePosition.setFromMatrixPosition(R.matrixWorld),X.nearDistance=z,X.farDistance=M),X}function C(E,w,R,z,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Ws)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const V=e.update(E),pe=E.material;if(Array.isArray(pe)){const ce=V.groups;for(let k=0,ee=ce.length;k<ee;k++){const U=ce[k],$=pe[U.materialIndex];if($&&$.visible){const G=S(E,$,z,R.near,R.far,M);n.renderBufferDirect(R,null,V,G,E,U)}}}else if(pe.visible){const ce=S(E,pe,z,R.near,R.far,M);n.renderBufferDirect(R,null,V,ce,E,null)}}const X=E.children;for(let V=0,pe=X.length;V<pe;V++)C(X[V],w,R,z,M)}}function J_(n,e,t){const i=t.isWebGL2;function s(){let T=!1;const de=new vt;let ue=null;const Se=new vt(0,0,0,0);return{setMask:function(ge){ue!==ge&&!T&&(n.colorMask(ge,ge,ge,ge),ue=ge)},setLocked:function(ge){T=ge},setClear:function(ge,Ce,he,Le,Ke){Ke===!0&&(ge*=Le,Ce*=Le,he*=Le),de.set(ge,Ce,he,Le),Se.equals(de)===!1&&(n.clearColor(ge,Ce,he,Le),Se.copy(de))},reset:function(){T=!1,ue=null,Se.set(-1,0,0,0)}}}function r(){let T=!1,de=null,ue=null,Se=null;return{setTest:function(ge){ge?Ee(2929):Z(2929)},setMask:function(ge){de!==ge&&!T&&(n.depthMask(ge),de=ge)},setFunc:function(ge){if(ue!==ge){if(ge)switch(ge){case Dp:n.depthFunc(512);break;case Ip:n.depthFunc(519);break;case kp:n.depthFunc(513);break;case Sa:n.depthFunc(515);break;case Np:n.depthFunc(514);break;case Fp:n.depthFunc(518);break;case zp:n.depthFunc(516);break;case Op:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);ue=ge}},setLocked:function(ge){T=ge},setClear:function(ge){Se!==ge&&(n.clearDepth(ge),Se=ge)},reset:function(){T=!1,de=null,ue=null,Se=null}}}function o(){let T=!1,de=null,ue=null,Se=null,ge=null,Ce=null,he=null,Le=null,Ke=null;return{setTest:function(Ye){T||(Ye?Ee(2960):Z(2960))},setMask:function(Ye){de!==Ye&&!T&&(n.stencilMask(Ye),de=Ye)},setFunc:function(Ye,Et,sn){(ue!==Ye||Se!==Et||ge!==sn)&&(n.stencilFunc(Ye,Et,sn),ue=Ye,Se=Et,ge=sn)},setOp:function(Ye,Et,sn){(Ce!==Ye||he!==Et||Le!==sn)&&(n.stencilOp(Ye,Et,sn),Ce=Ye,he=Et,Le=sn)},setLocked:function(Ye){T=Ye},setClear:function(Ye){Ke!==Ye&&(n.clearStencil(Ye),Ke=Ye)},reset:function(){T=!1,de=null,ue=null,Se=null,ge=null,Ce=null,he=null,Le=null,Ke=null}}}const a=new s,l=new r,c=new o;let h={},d={},u=new WeakMap,m=[],v=null,p=!1,f=null,_=null,S=null,C=null,E=null,w=null,R=null,z=!1,M=null,A=null,X=null,V=null,pe=null;const ce=n.getParameter(35661);let k=!1,ee=0;const U=n.getParameter(7938);U.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=ee>=1):U.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=ee>=2);let $=null,G={};const H=n.getParameter(3088),J=n.getParameter(2978),le=new vt().fromArray(H),se=new vt().fromArray(J);function oe(T,de,ue){const Se=new Uint8Array(4),ge=n.createTexture();n.bindTexture(T,ge),n.texParameteri(T,10241,9728),n.texParameteri(T,10240,9728);for(let Ce=0;Ce<ue;Ce++)n.texImage2D(de+Ce,0,6408,1,1,0,6408,5121,Se);return ge}const we={};we[3553]=oe(3553,3553,1),we[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(2929),l.setFunc(Sa),P(!1),O(zl),Ee(2884),ze(Kn);function Ee(T){h[T]!==!0&&(n.enable(T),h[T]=!0)}function Z(T){h[T]!==!1&&(n.disable(T),h[T]=!1)}function He(T,de){return d[T]!==de?(n.bindFramebuffer(T,de),d[T]=de,i&&(T===36009&&(d[36160]=de),T===36160&&(d[36009]=de)),!0):!1}function Pe(T,de){let ue=m,Se=!1;if(T)if(ue=u.get(de),ue===void 0&&(ue=[],u.set(de,ue)),T.isWebGLMultipleRenderTargets){const ge=T.texture;if(ue.length!==ge.length||ue[0]!==36064){for(let Ce=0,he=ge.length;Ce<he;Ce++)ue[Ce]=36064+Ce;ue.length=ge.length,Se=!0}}else ue[0]!==36064&&(ue[0]=36064,Se=!0);else ue[0]!==1029&&(ue[0]=1029,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Re(T){return v!==T?(n.useProgram(T),v=T,!0):!1}const _e={[os]:32774,[yp]:32778,[Mp]:32779};if(i)_e[Ul]=32775,_e[Hl]=32776;else{const T=e.get("EXT_blend_minmax");T!==null&&(_e[Ul]=T.MIN_EXT,_e[Hl]=T.MAX_EXT)}const $e={[wp]:0,[Sp]:1,[Ep]:768,[jh]:770,[Rp]:776,[Ap]:774,[Tp]:772,[Cp]:769,[Kh]:771,[Lp]:775,[Pp]:773};function ze(T,de,ue,Se,ge,Ce,he,Le){if(T===Kn){p===!0&&(Z(3042),p=!1);return}if(p===!1&&(Ee(3042),p=!0),T!==bp){if(T!==f||Le!==z){if((_!==os||E!==os)&&(n.blendEquation(32774),_=os,E=os),Le)switch(T){case ds:n.blendFuncSeparate(1,771,1,771);break;case Ol:n.blendFunc(1,1);break;case Bl:n.blendFuncSeparate(0,769,0,1);break;case Vl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case ds:n.blendFuncSeparate(770,771,1,771);break;case Ol:n.blendFunc(770,1);break;case Bl:n.blendFuncSeparate(0,769,0,1);break;case Vl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}S=null,C=null,w=null,R=null,f=T,z=Le}return}ge=ge||de,Ce=Ce||ue,he=he||Se,(de!==_||ge!==E)&&(n.blendEquationSeparate(_e[de],_e[ge]),_=de,E=ge),(ue!==S||Se!==C||Ce!==w||he!==R)&&(n.blendFuncSeparate($e[ue],$e[Se],$e[Ce],$e[he]),S=ue,C=Se,w=Ce,R=he),f=T,z=null}function y(T,de){T.side===ys?Z(2884):Ee(2884);let ue=T.side===en;de&&(ue=!ue),P(ue),T.blending===ds&&T.transparent===!1?ze(Kn):ze(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),a.setMask(T.colorWrite);const Se=T.stencilWrite;c.setTest(Se),Se&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Y(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Ee(32926):Z(32926)}function P(T){M!==T&&(T?n.frontFace(2304):n.frontFace(2305),M=T)}function O(T){T!==gp?(Ee(2884),T!==A&&(T===zl?n.cullFace(1029):T===vp?n.cullFace(1028):n.cullFace(1032))):Z(2884),A=T}function K(T){T!==X&&(k&&n.lineWidth(T),X=T)}function Y(T,de,ue){T?(Ee(32823),(V!==de||pe!==ue)&&(n.polygonOffset(de,ue),V=de,pe=ue)):Z(32823)}function ne(T){T?Ee(3089):Z(3089)}function ie(T){T===void 0&&(T=33984+ce-1),$!==T&&(n.activeTexture(T),$=T)}function re(T,de){$===null&&ie();let ue=G[$];ue===void 0&&(ue={type:void 0,texture:void 0},G[$]=ue),(ue.type!==T||ue.texture!==de)&&(n.bindTexture(T,de||we[T]),ue.type=T,ue.texture=de)}function ae(){const T=G[$];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function g(){try{n.texSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function L(){try{n.texSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function F(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function q(){try{n.texStorage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function I(){try{n.texImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function fe(T){le.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),le.copy(T))}function xe(T){se.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),se.copy(T))}function be(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,G={},d={},u=new WeakMap,m=[],v=null,p=!1,f=null,_=null,S=null,C=null,E=null,w=null,R=null,z=!1,M=null,A=null,X=null,V=null,pe=null,le.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ee,disable:Z,bindFramebuffer:He,drawBuffers:Pe,useProgram:Re,setBlending:ze,setMaterial:y,setFlipSided:P,setCullFace:O,setLineWidth:K,setPolygonOffset:Y,setScissorTest:ne,activeTexture:ie,bindTexture:re,unbindTexture:ae,compressedTexImage2D:x,texImage2D:ye,texImage3D:I,texStorage2D:q,texStorage3D:te,texSubImage2D:g,texSubImage3D:L,compressedTexSubImage2D:F,scissor:fe,viewport:xe,reset:be}}function Q_(n,e,t,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,h=s.maxTextureSize,d=s.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(x,g){return _?new OffscreenCanvas(x,g):to("canvas")}function C(x,g,L,F){let q=1;if((x.width>F||x.height>F)&&(q=F/Math.max(x.width,x.height)),q<1||g===!0)if(typeof HTMLImageElement!="undefined"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&x instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&x instanceof ImageBitmap){const te=g?La:Math.floor,ye=te(q*x.width),I=te(q*x.height);p===void 0&&(p=S(ye,I));const fe=L?S(ye,I):p;return fe.width=ye,fe.height=I,fe.getContext("2d").drawImage(x,0,0,ye,I),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+ye+"x"+I+")."),fe}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function E(x){return mc(x.width)&&mc(x.height)}function w(x){return a?!1:x.wrapS!==jt||x.wrapT!==jt||x.minFilter!==It&&x.minFilter!==Ut}function R(x,g){return x.generateMipmaps&&g&&x.minFilter!==It&&x.minFilter!==Ut}function z(x){n.generateMipmap(x)}function M(x,g,L,F,q=!1){if(a===!1)return g;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let te=g;return g===6403&&(L===5126&&(te=33326),L===5131&&(te=33325),L===5121&&(te=33321)),g===33319&&(L===5126&&(te=33328),L===5131&&(te=33327),L===5121&&(te=33323)),g===6408&&(L===5126&&(te=34836),L===5131&&(te=34842),L===5121&&(te=F===nt&&q===!1?35907:32856),L===32819&&(te=32854),L===32820&&(te=32855)),(te===33325||te===33326||te===33327||te===33328||te===34842||te===34836)&&e.get("EXT_color_buffer_float"),te}function A(x,g,L){return R(x,L)===!0||x.isFramebufferTexture&&x.minFilter!==It&&x.minFilter!==Ut?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function X(x){return x===It||x===Gl||x===Wl?9728:9729}function V(x){const g=x.target;g.removeEventListener("dispose",V),ce(g),g.isVideoTexture&&v.delete(g)}function pe(x){const g=x.target;g.removeEventListener("dispose",pe),ee(g)}function ce(x){const g=i.get(x);if(g.__webglInit===void 0)return;const L=x.source,F=f.get(L);if(F){const q=F[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&k(x),Object.keys(F).length===0&&f.delete(L)}i.remove(x)}function k(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const L=x.source,F=f.get(L);delete F[g.__cacheKey],o.memory.textures--}function ee(x){const g=x.texture,L=i.get(x),F=i.get(g);if(F.__webglTexture!==void 0&&(n.deleteTexture(F.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let q=0;q<6;q++)n.deleteFramebuffer(L.__webglFramebuffer[q]),L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[q]);else{if(n.deleteFramebuffer(L.__webglFramebuffer),L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let q=0;q<L.__webglColorRenderbuffer.length;q++)L.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[q]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let q=0,te=g.length;q<te;q++){const ye=i.get(g[q]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(g[q])}i.remove(g),i.remove(x)}let U=0;function $(){U=0}function G(){const x=U;return x>=l&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+l),U+=1,x}function H(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.encoding),g.join()}function J(x,g){const L=i.get(x);if(x.isVideoTexture&&re(x),x.isRenderTargetTexture===!1&&x.version>0&&L.__version!==x.version){const F=x.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(L,x,g);return}}t.activeTexture(33984+g),t.bindTexture(3553,L.__webglTexture)}function le(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){Pe(L,x,g);return}t.activeTexture(33984+g),t.bindTexture(35866,L.__webglTexture)}function se(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){Pe(L,x,g);return}t.activeTexture(33984+g),t.bindTexture(32879,L.__webglTexture)}function oe(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){Re(L,x,g);return}t.activeTexture(33984+g),t.bindTexture(34067,L.__webglTexture)}const we={[Ta]:10497,[jt]:33071,[Pa]:33648},Ee={[It]:9728,[Gl]:9984,[Wl]:9986,[Ut]:9729,[qp]:9985,[_o]:9987};function Z(x,g,L){if(L?(n.texParameteri(x,10242,we[g.wrapS]),n.texParameteri(x,10243,we[g.wrapT]),(x===32879||x===35866)&&n.texParameteri(x,32882,we[g.wrapR]),n.texParameteri(x,10240,Ee[g.magFilter]),n.texParameteri(x,10241,Ee[g.minFilter])):(n.texParameteri(x,10242,33071),n.texParameteri(x,10243,33071),(x===32879||x===35866)&&n.texParameteri(x,32882,33071),(g.wrapS!==jt||g.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,10240,X(g.magFilter)),n.texParameteri(x,10241,X(g.minFilter)),g.minFilter!==It&&g.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");if(g.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===tr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(x,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function He(x,g){let L=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",V));const F=g.source;let q=f.get(F);q===void 0&&(q={},f.set(F,q));const te=H(g);if(te!==x.__cacheKey){q[te]===void 0&&(q[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),q[te].usedTimes++;const ye=q[x.__cacheKey];ye!==void 0&&(q[x.__cacheKey].usedTimes--,ye.usedTimes===0&&k(g)),x.__cacheKey=te,x.__webglTexture=q[te].texture}return L}function Pe(x,g,L){let F=3553;g.isDataArrayTexture&&(F=35866),g.isData3DTexture&&(F=32879);const q=He(x,g),te=g.source;if(t.activeTexture(33984+L),t.bindTexture(F,x.__webglTexture),te.version!==te.__currentVersion||q===!0){n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const ye=w(g)&&E(g.image)===!1;let I=C(g.image,ye,!1,h);I=ae(g,I);const fe=E(I)||a,xe=r.convert(g.format,g.encoding);let be=r.convert(g.type),T=M(g.internalFormat,xe,be,g.encoding,g.isVideoTexture);Z(F,g,fe);let de;const ue=g.mipmaps,Se=a&&g.isVideoTexture!==!0,ge=te.__currentVersion===void 0||q===!0,Ce=A(g,I,fe);if(g.isDepthTexture)T=6402,a?g.type===vi?T=36012:g.type===gi?T=33190:g.type===us?T=35056:T=33189:g.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Di&&T===6402&&g.type!==Zh&&g.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=gi,be=r.convert(g.type)),g.format===Ss&&T===6402&&(T=34041,g.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=us,be=r.convert(g.type))),ge&&(Se?t.texStorage2D(3553,1,T,I.width,I.height):t.texImage2D(3553,0,T,I.width,I.height,0,xe,be,null));else if(g.isDataTexture)if(ue.length>0&&fe){Se&&ge&&t.texStorage2D(3553,Ce,T,ue[0].width,ue[0].height);for(let he=0,Le=ue.length;he<Le;he++)de=ue[he],Se?t.texSubImage2D(3553,he,0,0,de.width,de.height,xe,be,de.data):t.texImage2D(3553,he,T,de.width,de.height,0,xe,be,de.data);g.generateMipmaps=!1}else Se?(ge&&t.texStorage2D(3553,Ce,T,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,xe,be,I.data)):t.texImage2D(3553,0,T,I.width,I.height,0,xe,be,I.data);else if(g.isCompressedTexture){Se&&ge&&t.texStorage2D(3553,Ce,T,ue[0].width,ue[0].height);for(let he=0,Le=ue.length;he<Le;he++)de=ue[he],g.format!==Zt?xe!==null?Se?t.compressedTexSubImage2D(3553,he,0,0,de.width,de.height,xe,de.data):t.compressedTexImage2D(3553,he,T,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage2D(3553,he,0,0,de.width,de.height,xe,be,de.data):t.texImage2D(3553,he,T,de.width,de.height,0,xe,be,de.data)}else if(g.isDataArrayTexture)Se?(ge&&t.texStorage3D(35866,Ce,T,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,xe,be,I.data)):t.texImage3D(35866,0,T,I.width,I.height,I.depth,0,xe,be,I.data);else if(g.isData3DTexture)Se?(ge&&t.texStorage3D(32879,Ce,T,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,xe,be,I.data)):t.texImage3D(32879,0,T,I.width,I.height,I.depth,0,xe,be,I.data);else if(g.isFramebufferTexture){if(ge)if(Se)t.texStorage2D(3553,Ce,T,I.width,I.height);else{let he=I.width,Le=I.height;for(let Ke=0;Ke<Ce;Ke++)t.texImage2D(3553,Ke,T,he,Le,0,xe,be,null),he>>=1,Le>>=1}}else if(ue.length>0&&fe){Se&&ge&&t.texStorage2D(3553,Ce,T,ue[0].width,ue[0].height);for(let he=0,Le=ue.length;he<Le;he++)de=ue[he],Se?t.texSubImage2D(3553,he,0,0,xe,be,de):t.texImage2D(3553,he,T,xe,be,de);g.generateMipmaps=!1}else Se?(ge&&t.texStorage2D(3553,Ce,T,I.width,I.height),t.texSubImage2D(3553,0,0,0,xe,be,I)):t.texImage2D(3553,0,T,xe,be,I);R(g,fe)&&z(F),te.__currentVersion=te.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Re(x,g,L){if(g.image.length!==6)return;const F=He(x,g),q=g.source;if(t.activeTexture(33984+L),t.bindTexture(34067,x.__webglTexture),q.version!==q.__currentVersion||F===!0){n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const te=g.isCompressedTexture||g.image[0].isCompressedTexture,ye=g.image[0]&&g.image[0].isDataTexture,I=[];for(let he=0;he<6;he++)!te&&!ye?I[he]=C(g.image[he],!1,!0,c):I[he]=ye?g.image[he].image:g.image[he],I[he]=ae(g,I[he]);const fe=I[0],xe=E(fe)||a,be=r.convert(g.format,g.encoding),T=r.convert(g.type),de=M(g.internalFormat,be,T,g.encoding),ue=a&&g.isVideoTexture!==!0,Se=q.__currentVersion===void 0||F===!0;let ge=A(g,fe,xe);Z(34067,g,xe);let Ce;if(te){ue&&Se&&t.texStorage2D(34067,ge,de,fe.width,fe.height);for(let he=0;he<6;he++){Ce=I[he].mipmaps;for(let Le=0;Le<Ce.length;Le++){const Ke=Ce[Le];g.format!==Zt?be!==null?ue?t.compressedTexSubImage2D(34069+he,Le,0,0,Ke.width,Ke.height,be,Ke.data):t.compressedTexImage2D(34069+he,Le,de,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?t.texSubImage2D(34069+he,Le,0,0,Ke.width,Ke.height,be,T,Ke.data):t.texImage2D(34069+he,Le,de,Ke.width,Ke.height,0,be,T,Ke.data)}}}else{Ce=g.mipmaps,ue&&Se&&(Ce.length>0&&ge++,t.texStorage2D(34067,ge,de,I[0].width,I[0].height));for(let he=0;he<6;he++)if(ye){ue?t.texSubImage2D(34069+he,0,0,0,I[he].width,I[he].height,be,T,I[he].data):t.texImage2D(34069+he,0,de,I[he].width,I[he].height,0,be,T,I[he].data);for(let Le=0;Le<Ce.length;Le++){const Ye=Ce[Le].image[he].image;ue?t.texSubImage2D(34069+he,Le+1,0,0,Ye.width,Ye.height,be,T,Ye.data):t.texImage2D(34069+he,Le+1,de,Ye.width,Ye.height,0,be,T,Ye.data)}}else{ue?t.texSubImage2D(34069+he,0,0,0,be,T,I[he]):t.texImage2D(34069+he,0,de,be,T,I[he]);for(let Le=0;Le<Ce.length;Le++){const Ke=Ce[Le];ue?t.texSubImage2D(34069+he,Le+1,0,0,be,T,Ke.image[he]):t.texImage2D(34069+he,Le+1,de,be,T,Ke.image[he])}}}R(g,xe)&&z(34067),q.__currentVersion=q.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function _e(x,g,L,F,q){const te=r.convert(L.format,L.encoding),ye=r.convert(L.type),I=M(L.internalFormat,te,ye,L.encoding);i.get(g).__hasExternalTextures||(q===32879||q===35866?t.texImage3D(q,0,I,g.width,g.height,g.depth,0,te,ye,null):t.texImage2D(q,0,I,g.width,g.height,0,te,ye,null)),t.bindFramebuffer(36160,x),ie(g)?u.framebufferTexture2DMultisampleEXT(36160,F,q,i.get(L).__webglTexture,0,ne(g)):n.framebufferTexture2D(36160,F,q,i.get(L).__webglTexture,0),t.bindFramebuffer(36160,null)}function $e(x,g,L){if(n.bindRenderbuffer(36161,x),g.depthBuffer&&!g.stencilBuffer){let F=33189;if(L||ie(g)){const q=g.depthTexture;q&&q.isDepthTexture&&(q.type===vi?F=36012:q.type===gi&&(F=33190));const te=ne(g);ie(g)?u.renderbufferStorageMultisampleEXT(36161,te,F,g.width,g.height):n.renderbufferStorageMultisample(36161,te,F,g.width,g.height)}else n.renderbufferStorage(36161,F,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,x)}else if(g.depthBuffer&&g.stencilBuffer){const F=ne(g);L&&ie(g)===!1?n.renderbufferStorageMultisample(36161,F,35056,g.width,g.height):ie(g)?u.renderbufferStorageMultisampleEXT(36161,F,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,x)}else{const F=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let q=0;q<F.length;q++){const te=F[q],ye=r.convert(te.format,te.encoding),I=r.convert(te.type),fe=M(te.internalFormat,ye,I,te.encoding),xe=ne(g);L&&ie(g)===!1?n.renderbufferStorageMultisample(36161,xe,fe,g.width,g.height):ie(g)?u.renderbufferStorageMultisampleEXT(36161,xe,fe,g.width,g.height):n.renderbufferStorage(36161,fe,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function ze(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J(g.depthTexture,0);const F=i.get(g.depthTexture).__webglTexture,q=ne(g);if(g.depthTexture.format===Di)ie(g)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,F,0,q):n.framebufferTexture2D(36160,36096,3553,F,0);else if(g.depthTexture.format===Ss)ie(g)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,F,0,q):n.framebufferTexture2D(36160,33306,3553,F,0);else throw new Error("Unknown depthTexture format")}function y(x){const g=i.get(x),L=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");ze(g.__webglFramebuffer,x)}else if(L){g.__webglDepthbuffer=[];for(let F=0;F<6;F++)t.bindFramebuffer(36160,g.__webglFramebuffer[F]),g.__webglDepthbuffer[F]=n.createRenderbuffer(),$e(g.__webglDepthbuffer[F],x,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),$e(g.__webglDepthbuffer,x,!1);t.bindFramebuffer(36160,null)}function P(x,g,L){const F=i.get(x);g!==void 0&&_e(F.__webglFramebuffer,x,x.texture,36064,3553),L!==void 0&&y(x)}function O(x){const g=x.texture,L=i.get(x),F=i.get(g);x.addEventListener("dispose",pe),x.isWebGLMultipleRenderTargets!==!0&&(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=g.version,o.memory.textures++);const q=x.isWebGLCubeRenderTarget===!0,te=x.isWebGLMultipleRenderTargets===!0,ye=E(x)||a;if(q){L.__webglFramebuffer=[];for(let I=0;I<6;I++)L.__webglFramebuffer[I]=n.createFramebuffer()}else{if(L.__webglFramebuffer=n.createFramebuffer(),te)if(s.drawBuffers){const I=x.texture;for(let fe=0,xe=I.length;fe<xe;fe++){const be=i.get(I[fe]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&ie(x)===!1){const I=te?g:[g];L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer);for(let fe=0;fe<I.length;fe++){const xe=I[fe];L.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(36161,L.__webglColorRenderbuffer[fe]);const be=r.convert(xe.format,xe.encoding),T=r.convert(xe.type),de=M(xe.internalFormat,be,T,xe.encoding),ue=ne(x);n.renderbufferStorageMultisample(36161,ue,de,x.width,x.height),n.framebufferRenderbuffer(36160,36064+fe,36161,L.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(36161,null),x.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),$e(L.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(36160,null)}}if(q){t.bindTexture(34067,F.__webglTexture),Z(34067,g,ye);for(let I=0;I<6;I++)_e(L.__webglFramebuffer[I],x,g,36064,34069+I);R(g,ye)&&z(34067),t.unbindTexture()}else if(te){const I=x.texture;for(let fe=0,xe=I.length;fe<xe;fe++){const be=I[fe],T=i.get(be);t.bindTexture(3553,T.__webglTexture),Z(3553,be,ye),_e(L.__webglFramebuffer,x,be,36064+fe,3553),R(be,ye)&&z(3553)}t.unbindTexture()}else{let I=3553;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?I=x.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(I,F.__webglTexture),Z(I,g,ye),_e(L.__webglFramebuffer,x,g,36064,I),R(g,ye)&&z(I),t.unbindTexture()}x.depthBuffer&&y(x)}function K(x){const g=E(x)||a,L=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let F=0,q=L.length;F<q;F++){const te=L[F];if(R(te,g)){const ye=x.isWebGLCubeRenderTarget?34067:3553,I=i.get(te).__webglTexture;t.bindTexture(ye,I),z(ye),t.unbindTexture()}}}function Y(x){if(a&&x.samples>0&&ie(x)===!1){const g=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],L=x.width,F=x.height;let q=16384;const te=[],ye=x.stencilBuffer?33306:36096,I=i.get(x),fe=x.isWebGLMultipleRenderTargets===!0;if(fe)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,I.__webglFramebuffer),n.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,I.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,I.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){te.push(36064+xe),x.depthBuffer&&te.push(ye);const be=I.__ignoreDepthValues!==void 0?I.__ignoreDepthValues:!1;if(be===!1&&(x.depthBuffer&&(q|=256),x.stencilBuffer&&(q|=1024)),fe&&n.framebufferRenderbuffer(36008,36064,36161,I.__webglColorRenderbuffer[xe]),be===!0&&(n.invalidateFramebuffer(36008,[ye]),n.invalidateFramebuffer(36009,[ye])),fe){const T=i.get(g[xe]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,T,0)}n.blitFramebuffer(0,0,L,F,0,0,L,F,q,9728),m&&n.invalidateFramebuffer(36008,te)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),fe)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+xe,36161,I.__webglColorRenderbuffer[xe]);const be=i.get(g[xe]).__webglTexture;t.bindFramebuffer(36160,I.__webglFramebuffer),n.framebufferTexture2D(36009,36064+xe,3553,be,0)}t.bindFramebuffer(36009,I.__webglMultisampledFramebuffer)}}function ne(x){return Math.min(d,x.samples)}function ie(x){const g=i.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function re(x){const g=o.render.frame;v.get(x)!==g&&(v.set(x,g),x.update())}function ae(x,g){const L=x.encoding,F=x.format,q=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Aa||L!==Bi&&(L===nt?a===!1?e.has("EXT_sRGB")===!0&&F===Zt?(x.format=Aa,x.minFilter=Ut,x.generateMipmaps=!1):g=ed.sRGBToLinear(g):(F!==Zt||q!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",L)),g}this.allocateTextureUnit=G,this.resetTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=le,this.setTexture3D=se,this.setTextureCube=oe,this.rebindTextures=P,this.setupRenderTarget=O,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ie}function ex(n,e,t){const i=t.isWebGL2;function s(r,o=null){let a;if(r===Oi)return 5121;if(r===Yp)return 32819;if(r===Zp)return 32820;if(r===Xp)return 5120;if(r===jp)return 5122;if(r===Zh)return 5123;if(r===Kp)return 5124;if(r===gi)return 5125;if(r===vi)return 5126;if(r===tr)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Jp)return 6406;if(r===Zt)return 6408;if(r===em)return 6409;if(r===tm)return 6410;if(r===Di)return 6402;if(r===Ss)return 34041;if(r===nm)return 6403;if(r===Qp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Aa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===im)return 36244;if(r===sm)return 33319;if(r===rm)return 33320;if(r===om)return 36249;if(r===Lo||r===Ro||r===Do||r===Io)if(o===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Lo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Do)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Lo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ro)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Do)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Io)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$l||r===ql||r===Xl||r===jl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===$l)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ql)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===am)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Kl||r===Yl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Kl)return o===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Yl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zl||r===Jl||r===Ql||r===ec||r===tc||r===nc||r===ic||r===sc||r===rc||r===oc||r===ac||r===lc||r===cc||r===hc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Zl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jl)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ql)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ec)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ic)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ac)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===dc)return o===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===us?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class tx extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hr extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nx={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(s=t.getPose(e.targetRaySpace,i),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nx))),c&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const S=new Hr;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[p.jointName]=S,c.add(S)}const _=c.joints[p.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&u>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class ix extends tn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Di,h!==Di&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Di&&(i=gi),i===void 0&&h===Ss&&(i=us),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1}}class sx extends Is{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,h=null,d=null,u=null,m=null;const v=t.getContextAttributes();let p=null,f=null;const _=[],S=new Map,C=new Ht;C.layers.enable(1),C.viewport=new vt;const E=new Ht;E.layers.enable(2),E.viewport=new vt;const w=[C,E],R=new tx;R.layers.enable(1),R.layers.enable(2);let z=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=_[H];return J===void 0&&(J=new la,_[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=_[H];return J===void 0&&(J=new la,_[H]=J),J.getGripSpace()},this.getHand=function(H){let J=_[H];return J===void 0&&(J=new la,_[H]=J),J.getHandSpace()};function A(H){const J=S.get(H.inputSource);J!==void 0&&J.dispatchEvent({type:H.type,data:H.inputSource})}function X(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",V),S.forEach(function(H,J){H!==void 0&&H.disconnect(J)}),S.clear(),z=null,M=null,e.setRenderTarget(p),u=null,d=null,h=null,s=null,f=null,G.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",X),s.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:u}),f=new Yn(u.framebufferWidth,u.framebufferHeight,{format:Zt,type:Oi,encoding:e.outputEncoding})}else{let J=null,le=null,se=null;v.depth&&(se=v.stencil?35056:33190,J=v.stencil?Ss:Di,le=v.stencil?us:gi);const oe={colorFormat:e.outputEncoding===nt?35907:32856,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(oe),s.updateRenderState({layers:[d]}),f=new Yn(d.textureWidth,d.textureHeight,{format:Zt,type:Oi,depthTexture:new ix(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const we=e.properties.get(f);we.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),G.setContext(s),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function V(H){const J=s.inputSources;for(let le=0;le<J.length;le++){const se=J[le].handedness==="right"?1:0;S.set(J[le],_[se])}for(let le=0;le<H.removed.length;le++){const se=H.removed[le],oe=S.get(se);oe&&(oe.dispatchEvent({type:"disconnected",data:se}),S.delete(se))}for(let le=0;le<H.added.length;le++){const se=H.added[le],oe=S.get(se);oe&&oe.dispatchEvent({type:"connected",data:se})}}const pe=new D,ce=new D;function k(H,J,le){pe.setFromMatrixPosition(J.matrixWorld),ce.setFromMatrixPosition(le.matrixWorld);const se=pe.distanceTo(ce),oe=J.projectionMatrix.elements,we=le.projectionMatrix.elements,Ee=oe[14]/(oe[10]-1),Z=oe[14]/(oe[10]+1),He=(oe[9]+1)/oe[5],Pe=(oe[9]-1)/oe[5],Re=(oe[8]-1)/oe[0],_e=(we[8]+1)/we[0],$e=Ee*Re,ze=Ee*_e,y=se/(-Re+_e),P=y*-Re;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(P),H.translateZ(y),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const O=Ee+y,K=Z+y,Y=$e-P,ne=ze+(se-P),ie=He*Z/K*O,re=Pe*Z/K*O;H.projectionMatrix.makePerspective(Y,ne,ie,re,O,K)}function ee(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;R.near=E.near=C.near=H.near,R.far=E.far=C.far=H.far,(z!==R.near||M!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,M=R.far);const J=H.parent,le=R.cameras;ee(R,J);for(let oe=0;oe<le.length;oe++)ee(le[oe],J);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),H.position.copy(R.position),H.quaternion.copy(R.quaternion),H.scale.copy(R.scale),H.matrix.copy(R.matrix),H.matrixWorld.copy(R.matrixWorld);const se=H.children;for(let oe=0,we=se.length;oe<we;oe++)se[oe].updateMatrixWorld(!0);le.length===2?k(R,C,E):R.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(H){d!==null&&(d.fixedFoveation=H),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=H)};let U=null;function $(H,J){if(c=J.getViewerPose(l||o),m=J,c!==null){const se=c.views;u!==null&&(e.setRenderTargetFramebuffer(f,u.framebuffer),e.setRenderTarget(f));let oe=!1;se.length!==R.cameras.length&&(R.cameras.length=0,oe=!0);for(let we=0;we<se.length;we++){const Ee=se[we];let Z=null;if(u!==null)Z=u.getViewport(Ee);else{const Pe=h.getViewSubImage(d,Ee);Z=Pe.viewport,we===0&&(e.setRenderTargetTextures(f,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(f))}let He=w[we];He===void 0&&(He=new Ht,He.layers.enable(we),He.viewport=new vt,w[we]=He),He.matrix.fromArray(Ee.transform.matrix),He.projectionMatrix.fromArray(Ee.projectionMatrix),He.viewport.set(Z.x,Z.y,Z.width,Z.height),we===0&&R.matrix.copy(He.matrix),oe===!0&&R.cameras.push(He)}}const le=s.inputSources;for(let se=0;se<_.length;se++){const oe=le[se],we=S.get(oe);we!==void 0&&we.update(oe,J,l||o)}U&&U(H,J),m=null}const G=new cd;G.setAnimationLoop($),this.setAnimationLoop=function(H){U=H},this.dispose=function(){}}}function rx(n,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,_,S,C){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),c(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,C)):f.isMeshMatcapMaterial?(s(p,f),m(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,_,S):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===en&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===en&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const E=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*E}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let S;f.map?S=f.map:f.specularMap?S=f.specularMap:f.displacementMap?S=f.displacementMap:f.normalMap?S=f.normalMap:f.bumpMap?S=f.bumpMap:f.roughnessMap?S=f.roughnessMap:f.metalnessMap?S=f.metalnessMap:f.alphaMap?S=f.alphaMap:f.emissiveMap?S=f.emissiveMap:f.clearcoatMap?S=f.clearcoatMap:f.clearcoatNormalMap?S=f.clearcoatNormalMap:f.clearcoatRoughnessMap?S=f.clearcoatRoughnessMap:f.iridescenceMap?S=f.iridescenceMap:f.iridescenceThicknessMap?S=f.iridescenceThicknessMap:f.specularIntensityMap?S=f.specularIntensityMap:f.specularColorMap?S=f.specularColorMap:f.transmissionMap?S=f.transmissionMap:f.thicknessMap?S=f.thicknessMap:f.sheenColorMap?S=f.sheenColorMap:f.sheenRoughnessMap&&(S=f.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let C;f.aoMap?C=f.aoMap:f.lightMap&&(C=f.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uv2Transform.value.copy(C.matrix))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,_,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=S*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let C;f.map?C=f.map:f.alphaMap&&(C=f.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uvTransform.value.copy(C.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===en&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function ox(){const n=to("canvas");return n.style.display="block",n}function vd(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:ox(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,r=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=n.alpha!==void 0?n.alpha:!1;let d=null,u=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Bi,this.physicallyCorrectLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,_=0,S=0,C=null,E=-1,w=null;const R=new vt,z=new vt;let M=null,A=e.width,X=e.height,V=1,pe=null,ce=null;const k=new vt(0,0,A,X),ee=new vt(0,0,A,X);let U=!1;const $=new ld;let G=!1,H=!1,J=null;const le=new St,se=new Xe,oe=new D,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return C===null?V:1}let Z=t;function He(b,N){for(let W=0;W<b.length;W++){const B=b[W],Q=e.getContext(B,N);if(Q!==null)return Q}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",T,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",ue,!1),Z===null){const N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),Z=He(N,b),Z===null)throw He(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Pe,Re,_e,$e,ze,y,P,O,K,Y,ne,ie,re,ae,x,g,L,F,q,te,ye,I,fe;function xe(){Pe=new x0(Z),Re=new u0(Z,Pe,n),Pe.init(Re),I=new ex(Z,Pe,Re),_e=new J_(Z,Pe,Re),$e=new M0,ze=new V_,y=new Q_(Z,Pe,_e,ze,Re,I,$e),P=new p0(p),O=new _0(p),K=new Im(Z,Re),fe=new h0(Z,Pe,K,Re),Y=new b0(Z,K,$e,fe),ne=new C0(Z,Y,K,$e),q=new E0(Z,Re,y),g=new f0(ze),ie=new B_(p,P,O,Pe,Re,fe,g),re=new rx(p,ze),ae=new H_,x=new j_(Pe,Re),F=new c0(p,P,_e,ne,h,o),L=new Z_(p,ne,Re),te=new d0(Z,Pe,$e,Re),ye=new y0(Z,Pe,$e,Re),$e.programs=ie.programs,p.capabilities=Re,p.extensions=Pe,p.properties=ze,p.renderLists=ae,p.shadowMap=L,p.state=_e,p.info=$e}xe();const be=new sx(p,Z);this.xr=be,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(A,X,!1))},this.getSize=function(b){return b.set(A,X)},this.setSize=function(b,N,W){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,X=N,e.width=Math.floor(b*V),e.height=Math.floor(N*V),W!==!1&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(A*V,X*V).floor()},this.setDrawingBufferSize=function(b,N,W){A=b,X=N,V=W,e.width=Math.floor(b*W),e.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(k)},this.setViewport=function(b,N,W,B){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,N,W,B),_e.viewport(R.copy(k).multiplyScalar(V).floor())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,N,W,B){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,N,W,B),_e.scissor(z.copy(ee).multiplyScalar(V).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(b){_e.setScissorTest(U=b)},this.setOpaqueSort=function(b){pe=b},this.setTransparentSort=function(b){ce=b},this.getClearColor=function(b){return b.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor.apply(F,arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha.apply(F,arguments)},this.clear=function(b=!0,N=!0,W=!0){let B=0;b&&(B|=16384),N&&(B|=256),W&&(B|=1024),Z.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",T,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",ue,!1),ae.dispose(),x.dispose(),ze.dispose(),P.dispose(),O.dispose(),ne.dispose(),fe.dispose(),ie.dispose(),be.dispose(),be.removeEventListener("sessionstart",Ke),be.removeEventListener("sessionend",Ye),J&&(J.dispose(),J=null),Et.stop()};function T(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const b=$e.autoReset,N=L.enabled,W=L.autoUpdate,B=L.needsUpdate,Q=L.type;xe(),$e.autoReset=b,L.enabled=N,L.autoUpdate=W,L.needsUpdate=B,L.type=Q}function ue(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Se(b){const N=b.target;N.removeEventListener("dispose",Se),ge(N)}function ge(b){Ce(b),ze.remove(b)}function Ce(b){const N=ze.get(b).programs;N!==void 0&&(N.forEach(function(W){ie.releaseProgram(W)}),b.isShaderMaterial&&ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,B,Q,Ae){N===null&&(N=we);const Ie=Q.isMesh&&Q.matrixWorld.determinant()<0,Be=Bd(b,N,W,B,Q);_e.setMaterial(B,Ie);let Oe=W.index;const Ze=W.attributes.position;if(Oe===null){if(Ze===void 0||Ze.count===0)return}else if(Oe.count===0)return;let We=1;B.wireframe===!0&&(Oe=Y.getWireframeAttribute(W),We=2),fe.setup(Q,B,Be,W,Oe);let qe,it=te;Oe!==null&&(qe=K.get(Oe),it=ye,it.setIndex(qe));const ii=Oe!==null?Oe.count:Ze.count,Vi=W.drawRange.start*We,Ui=W.drawRange.count*We,rn=Ae!==null?Ae.start*We:0,je=Ae!==null?Ae.count*We:1/0,Hi=Math.max(Vi,rn),rt=Math.min(ii,Vi+Ui,rn+je)-1,on=Math.max(0,rt-Hi+1);if(on!==0){if(Q.isMesh)B.wireframe===!0?(_e.setLineWidth(B.wireframeLinewidth*Ee()),it.setMode(1)):it.setMode(4);else if(Q.isLine){let Nn=B.linewidth;Nn===void 0&&(Nn=1),_e.setLineWidth(Nn*Ee()),Q.isLineSegments?it.setMode(1):Q.isLineLoop?it.setMode(2):it.setMode(3)}else Q.isPoints?it.setMode(0):Q.isSprite&&it.setMode(4);if(Q.isInstancedMesh)it.renderInstances(Hi,on,Q.count);else if(W.isInstancedBufferGeometry){const Nn=Math.min(W.instanceCount,W._maxInstanceCount);it.renderInstances(Hi,on,Nn)}else it.render(Hi,on)}},this.compile=function(b,N){u=x.get(b),u.init(),v.push(u),b.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights(p.physicallyCorrectLights),b.traverse(function(W){const B=W.material;if(B)if(Array.isArray(B))for(let Q=0;Q<B.length;Q++){const Ae=B[Q];yo(Ae,b,W)}else yo(B,b,W)}),v.pop(),u=null};let he=null;function Le(b){he&&he(b)}function Ke(){Et.stop()}function Ye(){Et.start()}const Et=new cd;Et.setAnimationLoop(Le),typeof self!="undefined"&&Et.setContext(self),this.setAnimationLoop=function(b){he=b,be.setAnimationLoop(b),b===null?Et.stop():Et.start()},be.addEventListener("sessionstart",Ke),be.addEventListener("sessionend",Ye),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(N),N=be.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,N,C),u=x.get(b,v.length),u.init(),v.push(u),le.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(le),H=this.localClippingEnabled,G=g.init(this.clippingPlanes,H,N),d=ae.get(b,m.length),d.init(),m.push(d),sn(b,N,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(pe,ce),G===!0&&g.beginShadows();const W=u.state.shadowsArray;if(L.render(W,b,N),G===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),F.render(d,b),u.setupLights(p.physicallyCorrectLights),N.isArrayCamera){const B=N.cameras;for(let Q=0,Ae=B.length;Q<Ae;Q++){const Ie=B[Q];rl(d,b,Ie,Ie.viewport)}}else rl(d,b,N);C!==null&&(y.updateMultisampleRenderTarget(C),y.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(p,b,N),fe.resetDefaultState(),E=-1,w=null,v.pop(),v.length>0?u=v[v.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function sn(b,N,W,B){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){B&&oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(le);const Ie=ne.update(b),Be=b.material;Be.visible&&d.push(b,Ie,Be,W,oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==$e.render.frame&&(b.skeleton.update(),b.skeleton.frame=$e.render.frame),!b.frustumCulled||$.intersectsObject(b))){B&&oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(le);const Ie=ne.update(b),Be=b.material;if(Array.isArray(Be)){const Oe=Ie.groups;for(let Ze=0,We=Oe.length;Ze<We;Ze++){const qe=Oe[Ze],it=Be[qe.materialIndex];it&&it.visible&&d.push(b,Ie,it,W,oe.z,qe)}}else Be.visible&&d.push(b,Ie,Be,W,oe.z,null)}}const Ae=b.children;for(let Ie=0,Be=Ae.length;Ie<Be;Ie++)sn(Ae[Ie],N,W,B)}function rl(b,N,W,B){const Q=b.opaque,Ae=b.transmissive,Ie=b.transparent;u.setupLightsView(W),Ae.length>0&&zd(Q,N,W),B&&_e.viewport(R.copy(B)),Q.length>0&&gr(Q,N,W),Ae.length>0&&gr(Ae,N,W),Ie.length>0&&gr(Ie,N,W),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function zd(b,N,W){const B=Re.isWebGL2;J===null&&(J=new Yn(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?tr:Oi,minFilter:_o,samples:B&&r===!0?4:0})),p.getDrawingBufferSize(se),B?J.setSize(se.x,se.y):J.setSize(La(se.x),La(se.y));const Q=p.getRenderTarget();p.setRenderTarget(J),p.clear();const Ae=p.toneMapping;p.toneMapping=Dn,gr(b,N,W),p.toneMapping=Ae,y.updateMultisampleRenderTarget(J),y.updateRenderTargetMipmap(J),p.setRenderTarget(Q)}function gr(b,N,W){const B=N.isScene===!0?N.overrideMaterial:null;for(let Q=0,Ae=b.length;Q<Ae;Q++){const Ie=b[Q],Be=Ie.object,Oe=Ie.geometry,Ze=B===null?Ie.material:B,We=Ie.group;Be.layers.test(W.layers)&&Od(Be,N,W,Oe,Ze,We)}}function Od(b,N,W,B,Q,Ae){b.onBeforeRender(p,N,W,B,Q,Ae),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Q.onBeforeRender(p,N,W,B,b,Ae),Q.transparent===!0&&Q.side===ys?(Q.side=en,Q.needsUpdate=!0,p.renderBufferDirect(W,N,B,Q,b,Ae),Q.side=er,Q.needsUpdate=!0,p.renderBufferDirect(W,N,B,Q,b,Ae),Q.side=ys):p.renderBufferDirect(W,N,B,Q,b,Ae),b.onAfterRender(p,N,W,B,Q,Ae)}function yo(b,N,W){N.isScene!==!0&&(N=we);const B=ze.get(b),Q=u.state.lights,Ae=u.state.shadowsArray,Ie=Q.state.version,Be=ie.getParameters(b,Q.state,Ae,N,W),Oe=ie.getProgramCacheKey(Be);let Ze=B.programs;B.environment=b.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(b.isMeshStandardMaterial?O:P).get(b.envMap||B.environment),Ze===void 0&&(b.addEventListener("dispose",Se),Ze=new Map,B.programs=Ze);let We=Ze.get(Oe);if(We!==void 0){if(B.currentProgram===We&&B.lightsStateVersion===Ie)return ol(b,Be),We}else Be.uniforms=ie.getUniforms(b),b.onBuild(W,Be,p),b.onBeforeCompile(Be,p),We=ie.acquireProgram(Be,Oe),Ze.set(Oe,We),B.uniforms=Be.uniforms;const qe=B.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qe.clippingPlanes=g.uniform),ol(b,Be),B.needsLights=Ud(b),B.lightsStateVersion=Ie,B.needsLights&&(qe.ambientLightColor.value=Q.state.ambient,qe.lightProbe.value=Q.state.probe,qe.directionalLights.value=Q.state.directional,qe.directionalLightShadows.value=Q.state.directionalShadow,qe.spotLights.value=Q.state.spot,qe.spotLightShadows.value=Q.state.spotShadow,qe.rectAreaLights.value=Q.state.rectArea,qe.ltc_1.value=Q.state.rectAreaLTC1,qe.ltc_2.value=Q.state.rectAreaLTC2,qe.pointLights.value=Q.state.point,qe.pointLightShadows.value=Q.state.pointShadow,qe.hemisphereLights.value=Q.state.hemi,qe.directionalShadowMap.value=Q.state.directionalShadowMap,qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qe.spotShadowMap.value=Q.state.spotShadowMap,qe.spotShadowMatrix.value=Q.state.spotShadowMatrix,qe.pointShadowMap.value=Q.state.pointShadowMap,qe.pointShadowMatrix.value=Q.state.pointShadowMatrix);const it=We.getUniforms(),ii=jr.seqWithValue(it.seq,qe);return B.currentProgram=We,B.uniformsList=ii,We}function ol(b,N){const W=ze.get(b);W.outputEncoding=N.outputEncoding,W.instancing=N.instancing,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Bd(b,N,W,B,Q){N.isScene!==!0&&(N=we),y.resetTextureUnits();const Ae=N.fog,Ie=B.isMeshStandardMaterial?N.environment:null,Be=C===null?p.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:Bi,Oe=(B.isMeshStandardMaterial?O:P).get(B.envMap||Ie),Ze=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!B.normalMap&&!!W.attributes.tangent,qe=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,ii=!!W.morphAttributes.color,Vi=B.toneMapped?p.toneMapping:Dn,Ui=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rn=Ui!==void 0?Ui.length:0,je=ze.get(B),Hi=u.state.lights;if(G===!0&&(H===!0||b!==w)){const an=b===w&&B.id===E;g.setState(B,b,an)}let rt=!1;B.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Hi.state.version||je.outputEncoding!==Be||Q.isInstancedMesh&&je.instancing===!1||!Q.isInstancedMesh&&je.instancing===!0||Q.isSkinnedMesh&&je.skinning===!1||!Q.isSkinnedMesh&&je.skinning===!0||je.envMap!==Oe||B.fog===!0&&je.fog!==Ae||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==g.numPlanes||je.numIntersection!==g.numIntersection)||je.vertexAlphas!==Ze||je.vertexTangents!==We||je.morphTargets!==qe||je.morphNormals!==it||je.morphColors!==ii||je.toneMapping!==Vi||Re.isWebGL2===!0&&je.morphTargetsCount!==rn)&&(rt=!0):(rt=!0,je.__version=B.version);let on=je.currentProgram;rt===!0&&(on=yo(B,N,Q));let Nn=!1,Ns=!1,Mo=!1;const Ct=on.getUniforms(),Fs=je.uniforms;if(_e.useProgram(on.program)&&(Nn=!0,Ns=!0,Mo=!0),B.id!==E&&(E=B.id,Ns=!0),Nn||w!==b){if(Ct.setValue(Z,"projectionMatrix",b.projectionMatrix),Re.logarithmicDepthBuffer&&Ct.setValue(Z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,Ns=!0,Mo=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const an=Ct.map.cameraPosition;an!==void 0&&an.setValue(Z,oe.setFromMatrixPosition(b.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ct.setValue(Z,"isOrthographic",b.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Q.isSkinnedMesh)&&Ct.setValue(Z,"viewMatrix",b.matrixWorldInverse)}if(Q.isSkinnedMesh){Ct.setOptional(Z,Q,"bindMatrix"),Ct.setOptional(Z,Q,"bindMatrixInverse");const an=Q.skeleton;an&&(Re.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Ct.setValue(Z,"boneTexture",an.boneTexture,y),Ct.setValue(Z,"boneTextureSize",an.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wo=W.morphAttributes;return(wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0&&Re.isWebGL2===!0)&&q.update(Q,W,B,on),(Ns||je.receiveShadow!==Q.receiveShadow)&&(je.receiveShadow=Q.receiveShadow,Ct.setValue(Z,"receiveShadow",Q.receiveShadow)),Ns&&(Ct.setValue(Z,"toneMappingExposure",p.toneMappingExposure),je.needsLights&&Vd(Fs,Mo),Ae&&B.fog===!0&&re.refreshFogUniforms(Fs,Ae),re.refreshMaterialUniforms(Fs,B,V,X,J),jr.upload(Z,je.uniformsList,Fs,y)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(jr.upload(Z,je.uniformsList,Fs,y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ct.setValue(Z,"center",Q.center),Ct.setValue(Z,"modelViewMatrix",Q.modelViewMatrix),Ct.setValue(Z,"normalMatrix",Q.normalMatrix),Ct.setValue(Z,"modelMatrix",Q.matrixWorld),on}function Vd(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Ud(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,N,W){ze.get(b.texture).__webglTexture=N,ze.get(b.depthTexture).__webglTexture=W;const B=ze.get(b);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=W===void 0,B.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,N){const W=ze.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,W=0){C=b,_=N,S=W;let B=!0;if(b){const Oe=ze.get(b);Oe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),B=!1):Oe.__webglFramebuffer===void 0?y.setupRenderTarget(b):Oe.__hasExternalTextures&&y.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture)}let Q=null,Ae=!1,Ie=!1;if(b){const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture)&&(Ie=!0);const Ze=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Q=Ze[N],Ae=!0):Re.isWebGL2&&b.samples>0&&y.useMultisampledRTT(b)===!1?Q=ze.get(b).__webglMultisampledFramebuffer:Q=Ze,R.copy(b.viewport),z.copy(b.scissor),M=b.scissorTest}else R.copy(k).multiplyScalar(V).floor(),z.copy(ee).multiplyScalar(V).floor(),M=U;if(_e.bindFramebuffer(36160,Q)&&Re.drawBuffers&&B&&_e.drawBuffers(b,Q),_e.viewport(R),_e.scissor(z),_e.setScissorTest(M),Ae){const Oe=ze.get(b.texture);Z.framebufferTexture2D(36160,36064,34069+N,Oe.__webglTexture,W)}else if(Ie){const Oe=ze.get(b.texture),Ze=N||0;Z.framebufferTextureLayer(36160,36064,Oe.__webglTexture,W||0,Ze)}E=-1},this.readRenderTargetPixels=function(b,N,W,B,Q,Ae,Ie){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){_e.bindFramebuffer(36160,Be);try{const Oe=b.texture,Ze=Oe.format,We=Oe.type;if(Ze!==Zt&&I.convert(Ze)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=We===tr&&(Pe.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(We!==Oi&&I.convert(We)!==Z.getParameter(35738)&&!(We===vi&&(Re.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-B&&W>=0&&W<=b.height-Q&&Z.readPixels(N,W,B,Q,I.convert(Ze),I.convert(We),Ae)}finally{const Oe=C!==null?ze.get(C).__webglFramebuffer:null;_e.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(b,N,W=0){const B=Math.pow(2,-W),Q=Math.floor(N.image.width*B),Ae=Math.floor(N.image.height*B);y.setTexture2D(N,0),Z.copyTexSubImage2D(3553,W,0,0,b.x,b.y,Q,Ae),_e.unbindTexture()},this.copyTextureToTexture=function(b,N,W,B=0){const Q=N.image.width,Ae=N.image.height,Ie=I.convert(W.format),Be=I.convert(W.type);y.setTexture2D(W,0),Z.pixelStorei(37440,W.flipY),Z.pixelStorei(37441,W.premultiplyAlpha),Z.pixelStorei(3317,W.unpackAlignment),N.isDataTexture?Z.texSubImage2D(3553,B,b.x,b.y,Q,Ae,Ie,Be,N.image.data):N.isCompressedTexture?Z.compressedTexSubImage2D(3553,B,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,Ie,N.mipmaps[0].data):Z.texSubImage2D(3553,B,b.x,b.y,Ie,Be,N.image),B===0&&W.generateMipmaps&&Z.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(b,N,W,B,Q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=b.max.x-b.min.x+1,Ie=b.max.y-b.min.y+1,Be=b.max.z-b.min.z+1,Oe=I.convert(B.format),Ze=I.convert(B.type);let We;if(B.isData3DTexture)y.setTexture3D(B,0),We=32879;else if(B.isDataArrayTexture)y.setTexture2DArray(B,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,B.flipY),Z.pixelStorei(37441,B.premultiplyAlpha),Z.pixelStorei(3317,B.unpackAlignment);const qe=Z.getParameter(3314),it=Z.getParameter(32878),ii=Z.getParameter(3316),Vi=Z.getParameter(3315),Ui=Z.getParameter(32877),rn=W.isCompressedTexture?W.mipmaps[0]:W.image;Z.pixelStorei(3314,rn.width),Z.pixelStorei(32878,rn.height),Z.pixelStorei(3316,b.min.x),Z.pixelStorei(3315,b.min.y),Z.pixelStorei(32877,b.min.z),W.isDataTexture||W.isData3DTexture?Z.texSubImage3D(We,Q,N.x,N.y,N.z,Ae,Ie,Be,Oe,Ze,rn.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(We,Q,N.x,N.y,N.z,Ae,Ie,Be,Oe,rn.data)):Z.texSubImage3D(We,Q,N.x,N.y,N.z,Ae,Ie,Be,Oe,Ze,rn),Z.pixelStorei(3314,qe),Z.pixelStorei(32878,it),Z.pixelStorei(3316,ii),Z.pixelStorei(3315,Vi),Z.pixelStorei(32877,Ui),Q===0&&B.generateMipmaps&&Z.generateMipmap(We),_e.unbindTexture()},this.initTexture=function(b){y.setTexture2D(b,0),_e.unbindTexture()},this.resetState=function(){_=0,S=0,C=null,_e.reset(),fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ax extends vd{}ax.prototype.isWebGL1Renderer=!0;class lx extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class cx extends xt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class _d extends xt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class hx extends xt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new D;new D;new D;new D;new gn;class nl extends ni{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new D,u=new D,m=[],v=[],p=[],f=[];for(let _=0;_<=i;_++){const S=[],C=_/i;let E=0;_==0&&o==0?E=.5/t:_==i&&l==Math.PI&&(E=-.5/t);for(let w=0;w<=t;w++){const R=w/t;d.x=-e*Math.cos(s+R*r)*Math.sin(o+C*a),d.y=e*Math.cos(o+C*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+C*a),v.push(d.x,d.y,d.z),u.copy(d).normalize(),p.push(u.x,u.y,u.z),f.push(R+E,1-C),S.push(c++)}h.push(S)}for(let _=0;_<i;_++)for(let S=0;S<t;S++){const C=h[_][S+1],E=h[_][S],w=h[_+1][S],R=h[_+1][S+1];(_!==0||o>0)&&m.push(C,E,R),(_!==i-1||l<Math.PI)&&m.push(E,w,R)}this.setIndex(m),this.setAttribute("position",new xn(v,3)),this.setAttribute("normal",new xn(p,3)),this.setAttribute("uv",new xn(f,2))}static fromJSON(e){return new nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dx extends xt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ne(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ux extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xd extends xt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ds,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fx extends xd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class px extends xt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ds,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mx extends xt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ne(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ds,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class gx extends xt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ds,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class vx extends xt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class _x extends xt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ne(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ds,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xx extends _d{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const bx={ShadowMaterial:dx,SpriteMaterial:cx,RawShaderMaterial:ux,ShaderMaterial:Mn,PointsMaterial:hx,MeshPhysicalMaterial:fx,MeshStandardMaterial:xd,MeshPhongMaterial:px,MeshToonMaterial:mx,MeshNormalMaterial:gx,MeshLambertMaterial:vx,MeshDepthMaterial:md,MeshDistanceMaterial:gd,MeshBasicMaterial:Qa,MeshMatcapMaterial:_x,LineDashedMaterial:xx,LineBasicMaterial:_d,Material:xt};xt.fromType=function(n){return new bx[n]};class yx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kc(){return(typeof performance=="undefined"?Date:performance).now()}const bd="\\[\\]\\.:\\/",il="[^"+bd+"]",Mx="[^"+bd.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",il);/(WCOD+)?/.source.replace("WCOD",Mx);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",il);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",il);const cn=new Uint32Array(512),hn=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(cn[n]=0,cn[n|256]=32768,hn[n]=24,hn[n|256]=24):e<-14?(cn[n]=1024>>-e-14,cn[n|256]=1024>>-e-14|32768,hn[n]=-e-1,hn[n|256]=-e-1):e<=15?(cn[n]=e+15<<10,cn[n|256]=e+15<<10|32768,hn[n]=13,hn[n|256]=13):e<128?(cn[n]=31744,cn[n|256]=64512,hn[n]=24,hn[n|256]=24):(cn[n]=31744,cn[n|256]=64512,hn[n]=13,hn[n|256]=13)}const yd=new Uint32Array(2048),pr=new Uint32Array(64),wx=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,yd[n]=e|t}for(let n=1024;n<2048;++n)yd[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)pr[n]=n<<23;pr[31]=1199570944;pr[32]=2147483648;for(let n=33;n<63;++n)pr[n]=2147483648+(n-32<<23);pr[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(wx[n]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);class Md extends lr{constructor(){super("MaterialOutput",{inputList:[new ei("surface","shader","shader",{name:"color",type:"vec4",value:new vt(0,0,0,1)}),new ei("displacement","displacement","displacement",{name:"displacement",type:"number",value:0})]},{outputList:[]});j(this,"inputVariables");this.inputVariables={},super.getInputs().inputList.forEach(i=>{this.inputVariables[i.getName()]=i})}compileSurface(t,i){if(this.inputVariables.surface.isConnected()){const s=this.inputVariables.surface.getConnected(),r=s.getParent(),[o]=r.compile(i,s,st.VECTOR_4);i.addToMain(`gl_FragColor = ${o};`)}else{const s=this.inputVariables.surface.getValue(),r=`gl_FragColor = ${s.type}(${s.value.x}, ${s.value.y}, ${s.value.z}, ${s.value.w});`;i.addToMain(r)}}compileDisplacement(t){if(this.inputVariables.displacement.isConnected()){const i=this.inputVariables.displacement.getConnected(),s=i.getParent(),[r]=s.compile(t,i,st.SCALAR);t.addToMain("vec3 normNormal = normalize(normalMatrix * normal);"),t.addToMain(`gl_Position = projectionMatrix * (modelViewMatrix * vec4( position, 1.0 )
        + vec4(${r} * normNormal, 1.0));`)}else{const i=this.inputVariables.displacement.getValue();t.addToMain("vec3 normNormal = normalize(normalMatrix * normal);"),t.addToMain(`gl_Position = projectionMatrix * (modelViewMatrix * vec4( position, 1.0 )
        + vec4(${super.formatValue(i.value)} * normNormal, 1.0));`)}}compileOutput(t,i){return this.compileSurface(t,i),this.compileDisplacement(t),[t.generateCode(),i.generateCode()]}compile(){throw"[OutputNode:compile] This method should not be used, please call compileOutput"}}const xi=(n,e,t)=>Math.min(Math.max(n,t),e),qs=n=>{const e=n.toString(16).toUpperCase();return e.length<2?"0"+e:e};var ti=(n=>(n[n.HSV=0]="HSV",n[n.HSL=1]="HSL",n[n.RGB=2]="RGB",n[n.HEX=3]="HEX",n))(ti||{});class at{constructor(e,t,i,s,r){j(this,"hsv");j(this,"hsl");j(this,"rgb");j(this,"hex");j(this,"alpha");let o=[0,0,0,0];switch(this.hsv=new D,this.hsl=new D,this.rgb=new D,this.hex=new D,this.alpha=0,e){case 0:o=this.convertToNumber(t,i,s,r,!1),this.setHSV(o);break;case 1:o=this.convertToNumber(t,i,s,r,!1),this.setHSL(o);break;case 2:o=this.convertToNumber(t,i,s,r,!1),this.setRGB(o);break;case 3:o=this.convertToNumber(t,i,s,r,!1,16),this.setHEX(o);break;default:throw"[Color:constructor] Invalid colorspace"}}isValidHSVorHSL(e){return e[0]<0||e[0]>=360||e[1]<0||e[1]>1||e[2]<0||e[2]>1?!1:!(e.length>=4&&e[3]!==void 0&&(e[3]<0||e[3]>1))}isValidRGBorHEX(e){return e[0]<0||e[0]>255||e[1]<0||e[1]>255||e[2]<0||e[2]>255?!1:!(e.length>=4&&e[3]!==void 0&&(e[3]<0||e[3]>1))}convertToNumber(e,t,i,s,r,o){if(r&&o===void 0)throw"[Color:convertToNumber] toInt is true and base undefined";const a=[e,t,i,s],l=[0,0,0,0];for(let c=0;c<4;c++){let h=a[c];typeof h=="string"?(h.includes("%")&&(h=h.replace("%","")),r?l[c]=parseInt(h,o):l[c]=parseFloat(h)):l[c]=h}return[...l]}setHSV(e){if(!this.isValidHSVorHSL(e))throw"[Color:setHSV] Invalid hsv values: "+e;e.length===4&&(this.alpha=e[3]),this.hsv.x=e[0],this.hsv.y=e[1],this.hsv.z=e[2];const t=[...at.hsvToHsl(e[0],e[1],e[2])];this.hsl.x=t[0],this.hsl.y=t[1],this.hsl.z=t[2];const i=[...at.hsvToRgb(e[0],e[1],e[2])];this.rgb.x=i[0],this.rgb.y=i[1],this.rgb.z=i[2],this.hex.x=i[0],this.hex.y=i[1],this.hex.z=i[2]}setHSL(e){if(!this.isValidHSVorHSL(e))throw"[Color:setHSV] Invalid hsv values";e.length===4&&(this.alpha=e[3]),this.hsl.x=e[0],this.hsl.y=e[1],this.hsl.z=e[2];const t=[...at.hslToRgb(e[0],e[1],e[2])];this.rgb.x=t[0],this.rgb.y=t[1],this.rgb.z=t[2],this.hex.x=t[0],this.hex.y=t[1],this.hex.z=t[2];const i=[...at.rgbToHsv(t[0],t[1],t[2])];this.hsv.x=i[0],this.hsv.y=i[1],this.hsv.z=i[2]}setRGB(e){if(!this.isValidRGBorHEX(e))throw"[Color:setRGB] Invalid rgb values";e.length===4&&(this.alpha=e[3]),this.rgb.x=e[0],this.rgb.y=e[1],this.rgb.z=e[2],this.hex.x=e[0],this.hex.y=e[1],this.hex.z=e[2];const t=[...at.rgbToHsv(e[0],e[1],e[2])];this.hsv.x=t[0],this.hsv.y=t[1],this.hsv.z=t[2];const i=[...at.hsvToHsl(t[0],t[1],t[2])];this.hsl.x=i[0],this.hsl.y=i[1],this.hsl.z=i[2]}setHEX(e){this.setRGB(e)}setAlpha(e){if(e<0||e>1)throw"[Color:setAlpha] Value invalid";this.alpha=e}getColorStringHex(){return at.getColorStringHex(this.rgb.x,this.rgb.y,this.rgb.z,this.alpha)}getColorStringRgba(){return at.getColorStringRgba(this.rgb.x,this.rgb.y,this.rgb.z,this.alpha)}getColorStringHsla(){return at.getColorStringHsla(this.hsl.x,this.hsl.y,this.hsl.z,this.alpha)}getUnitRgb(){return new D(this.rgb.x/255,this.rgb.y/255,this.rgb.z/255)}getRgb(){return this.rgb}getHex(){return this.hex}getHsl(){return this.hsl}getHsv(){return this.hsv}getAlpha(){return this.alpha}clone(e){const t=e.getAlpha();this.alpha=t;const i=e.getHsv(),s=e.getHsl(),r=e.getRgb(),o=e.getHex();this.hsv.x=i.x,this.hsv.y=i.y,this.hsv.z=i.z,this.hsl.x=s.x,this.hsl.y=s.y,this.hsl.z=s.z,this.rgb.x=r.x,this.rgb.y=r.y,this.rgb.z=r.z,this.hex.x=o.x,this.hex.y=o.y,this.hex.z=o.z}static rgbToHsv(e,t,i){if(e<0||e>255)throw"[rgbToHsv] R value invalid: "+e;if(t<0||t>255)throw"[rgbToHsv] G value invalid: "+t;if(i<0||i>255)throw"[rgbToHsv] B value invalid: "+i;const s=e/255,r=t/255,o=i/255,a=Math.max(s,Math.max(r,o)),l=Math.min(s,Math.min(r,o)),c=a-l;let h=0;c===0?h=0:a===s?h=60*((r-o)/c%6):a===r?h=60*((o-s)/c+2):a===o&&(h=60*((s-r)/c+4));const d=a===0?0:c/a,u=a;return(h<0||h>=360)&&(h=(h+3600)%360),[h,d,u]}static hsvToRgb(e,t,i){if(e<0||e>=360)throw"[hsvToRgb] H value invalid: "+e;if(t<0||t>1)throw"[hsvToRgb] S value invalid: "+t;if(i<0||i>1)throw"[hsvToRgb] V value invalid: "+i;const s=i*t,r=s*(1-Math.abs(e/60%2-1)),o=i-s;let a,l,c;return e<60?[a,l,c]=[s,r,0]:e<120?[a,l,c]=[r,s,0]:e<180?[a,l,c]=[0,s,r]:e<240?[a,l,c]=[0,r,s]:e<300?[a,l,c]=[r,0,s]:[a,l,c]=[s,0,r],[(a+o)*255,(l+o)*255,(c+o)*255]}static hsvToHsl(e,t,i){const s=(2-t)*i/2;s!=0&&(s==1?t=0:s<.5?t=t*i/(s*2):t=t*i/(2-s*2));let r=xi(0,360,e);return r===360&&(r=0),[r,xi(0,1,t),xi(0,1,s)]}static hslToRgb(e,t,i){if(e<0||e>=360)throw"[hsvToRgb] H value invalid: "+e;if(t<0||t>1)throw"[hsvToRgb] S value invalid: "+t;if(i<0||i>1)throw"[hsvToRgb] L value invalid: "+i;const s=(1-Math.abs(2*i-1))*t,r=s*(1-Math.abs(e/60%2-1)),o=i-s/2;let a,l,c;return e<60?[a,l,c]=[s,r,0]:e<120?[a,l,c]=[r,s,0]:e<180?[a,l,c]=[0,s,r]:e<240?[a,l,c]=[0,r,s]:e<300?[a,l,c]=[r,0,s]:[a,l,c]=[s,0,r],[(a+o)*255,(l+o)*255,(c+o)*255]}static getColorStringHex(e,t,i,s){if(e<0||e>255)throw"[genColorStringHex] r is invalid: "+e;if(t<0||t>255)throw"[genColorStringHex] g is invalid: "+t;if(i<0||i>255)throw"[genColorStringHex] b is invalid: "+i;if(s<0||s>1)throw"[genColorStringHex] a is invalid: "+s;return`#${qs(Math.round(e))}${qs(Math.round(t))}${qs(Math.round(i))}${qs(Math.round(s*255))}`}static getColorStringRgba(e,t,i,s){if(e<0||e>255)throw"[genColorStringRgba] r is invalid: "+e;if(t<0||t>255)throw"[genColorStringRgba] g is invalid: "+t;if(i<0||i>255)throw"[genColorStringRgba] b is invalid: "+i;if(s<0||s>1)throw"[genColorStringRgba] a is invalid: "+s;return`rgba(${e}, ${t}, ${i}, ${s*100}%)`}static getColorStringHsla(e,t,i,s){if(e<0||e>=360)throw"[genColorStringHsla] h is invalid: "+e;if(t<0||t>1)throw"[genColorStringHsla] s is invalid: "+t;if(i<0||i>1)throw"[genColorStringHsla] l is invalid: "+i;if(s<0||s>1)throw"[genColorStringHsla] a is invalid: "+s;return`hsla(${e.toFixed(2)}deg, ${(t*100).toFixed(2)}%, ${(i*100).toFixed(2)}%, ${(s*100).toFixed(2)}%)`}static interpolateRgba(e,t,i){const s=e.getRgb(),r=t.getRgb(),o=e.getAlpha(),a=t.getAlpha(),l=new at(2,0,0,0,1),c=(1-i)*s.x+i*r.x,h=(1-i)*s.y+i*r.y,d=(1-i)*s.z+i*r.z,u=(1-i)*o+i*a;return l.setRGB([c,h,d,u]),l}}class Sx extends lr{constructor(){super("Principled BSDF",{inputList:[new ei("base-color","color","color",{name:"color",type:"vec4",value:new at(ti.HSV,320,.75,1,1)}),new ei("emission-color","color","color",{name:"color",type:"vec4",value:new at(ti.HSV,0,0,0,1)})]},new Qn("BSDF","shader"));j(this,"inputVariables");this.inputVariables={};const t=super.getInputs().inputList;console.log("list",t),t.forEach(i=>{this.inputVariables[i.getName()]=i})}compileBaseColor(t){if(this.inputVariables["base-color"].isConnected()){const i=this.inputVariables["base-color"].getConnected(),s=i.getParent(),[r]=s.compile(t,i,st.VECTOR_4);return r}else{const i=this.inputVariables["base-color"].getValue(),s=t.generateVariableID("princ_base_color_");console.log(i,i.value);const r=i.value.getUnitRgb(),o=i.value.getAlpha(),a=`vec4 ${s} = ${i.type}(${r.x}, ${r.y}, ${r.z}, ${o});`;return t.addToMain(a),s}}compileEmissionColor(t){if(this.inputVariables["emission-color"].isConnected()){const i=this.inputVariables["emission-color"].getConnected(),s=i.getParent(),[r]=s.compile(t,i,st.VECTOR_4);return r}else{const i=this.inputVariables["emission-color"].getValue(),s=i.value.getUnitRgb(),r=i.value.getAlpha(),o=t.generateVariableID("princ_emission_color_"),a=`vec4 ${o} = ${i.type}(${s.x}, ${s.y}, ${s.z}, ${r});`;return t.addToMain(a),o}}compile(t,i,s){const r=this.compileBaseColor(t),o=this.compileEmissionColor(t),a=t.generateVariableID("princ_bsdf_");switch(s){case st.SCALAR:t.addToMain(`float ${a} = (${r} + ${o}).x;`);break;case st.VECTOR_3:t.addToMain(`vec3 ${a} = (${r} + ${o}).xyz;`);break;case st.VECTOR_4:default:t.addToMain(`vec4 ${a} = (${r} + ${o}).xyzw;`);break}return[a,""]}setInputValue(t,i){this.inputVariables[t].setValue(i)}}var or,ar;class bi extends ei{constructor(t,i,s,r,o,a){super(t,"number",i,{name:t,type:"number",value:s},a);Qe(this,or,void 0);Qe(this,ar,void 0);Ve(this,or,r),Ve(this,ar,o)}getMinValue(){return Me(this,or)}getMaxValue(){return Me(this,ar)}}or=new WeakMap,ar=new WeakMap;class Ex extends lr{constructor(){super("Noise Texture",{inputList:[new bi("scale","number",2),new bi("detail","number",2,0,15),new bi("roughness","number",.5,0,1),new bi("distortion","number",0)]},new Qn("color","color"));j(this,"inputVariables");j(this,"noiseFunction");j(this,"customNoiseFunction");this.inputVariables={},super.getInputs().inputList.forEach(i=>{this.inputVariables[i.getName()]=i}),this.customNoiseFunction=`float noise(vec3 v) {
  float F = 1. / 3.;
  float factor = (v.x + v.y + v.z) * F;
  vec3 v_ = vec3(v.x + factor, v.y + factor, v.z + factor);
  vec3 v_b = floor(v_);
  vec3 v_i = fract(v_);
  float xGreaterY = step(v_i[1], v_i[0]);
  float xGreaterZ = step(v_i[2], v_i[0]);
  float yGreaterZ = step(v_i[2], v_i[1]);
  float greatest = xGreaterY * xGreaterZ * 0. + yGreaterZ * (1. - xGreaterY) * 1. +
      (1. - yGreaterZ) * (1. - xGreaterZ) * 2.;

  float mid = (xGreaterY + xGreaterZ) * ((1. - xGreaterY) + (1. - xGreaterZ)) * 0. + 
      (yGreaterZ + (1. - xGreaterY)) * ((1. - yGreaterZ) + xGreaterY) * 1. + 
      ((1. - yGreaterZ) + (1. - xGreaterZ)) * (yGreaterZ + xGreaterZ) * 2.;

  // Not really needed since last vector is always 1,1,1
  //float smallest = (1. - xGreaterY) * (1. - xGreaterZ) * 0. + (1. - yGreaterZ) * xGreaterY * 1. +
  //    yGreaterZ * xGreaterZ * 2.;
  vec3 empty = vec3(0, 0, 0);
  vec3 first = empty;

  empty[int(greatest)] += 1.;
  vec3 second = empty;

  empty[int(mid)] += 1.;
  vec3 third = empty;

  vec3 fourth = vec3(1, 1, 1);

  return 0.;
}`,this.noiseFunction={"mod289(vec3)":`
//
// Description : Array and textureless GLSL 2D/3D/4D simplex 
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}`,"mod289(vec4)":`vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}`,"permute(vec4)":`vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}`,"taylorInvSqrt(vec4)":`vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}`,"snoise(vec3)":`float snoise(vec3 v)
  { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105. * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
  }

  //
  // END
  //
`,fbm:`// Author: Simone Franza
// Inspired from https://thebookofshaders.com/13/
float fbm(
    const float octaveInt,
    const float octaveFrac,
    vec3 v,
    const float persistance,
    float scale) {
  float maxAmp = 0.;
  float amp = .5;
  float freq = scale;
  float noise = 0.;
  float counter = 0.;

  for (float i = 0.; i < octaveInt; i++) {
    noise += snoise(v * freq) * amp;
    maxAmp += amp;
    amp *= persistance;
    freq *= 2.;
    counter++;
  }
  
  float newNoise = noise + snoise(v * freq) * amp;
  maxAmp += amp * octaveFrac;
  noise = mix(noise, newNoise, octaveFrac);

  noise /= maxAmp;
  noise /= 2.35;
  noise = noise * 0.5 + 0.5;

  return noise;
  //return step(1.5, counter);
}
`}}compile(t,i,s){const r=this.inputVariables.scale.getValue(),o=this.inputVariables.detail.getValue(),a=this.inputVariables.roughness.getValue(),l=this.inputVariables.distortion.getValue(),c=t.generateVariableID("nt_st_"),h=t.generateVariableID("nt_scale_"),d=t.generateVariableID("nt_octave_int_"),u=t.generateVariableID("nt_octave_frac_"),m=t.generateVariableID("nt_persistance_"),v=t.generateVariableID("nt_distortion_"),p=t.generateVariableID("nt_q_"),f=t.generateVariableID("nt_f_"),_=t.generateVariableID("nt_out_");switch(t.addAllToFunctions(this.noiseFunction),t.addToMain(`
    vec3 ${c} = projPosition;
    // Scale the space in order to see the function
    float ${h} = ${super.formatValue(r.value)};
    const float ${d} = ${super.formatValue(Math.floor(o.value+1))};
    const float ${u} = ${super.formatValue(o.value%1)};
    const float ${m} = ${super.formatValue(a.value)};
    const float ${v} = ${super.formatValue(l.value/10)};

    // Derived from https://thebookofshaders.com/13/
    vec3 ${p} = vec3(
        fbm(
        ${d},
        ${u},
        ${c},
        ${m},
        ${h}
        ),
        fbm(
        ${d},
        ${u},
        ${c}+vec3(2.3, 10.5, 60.),
        ${m},
        ${h}
        ),
        fbm(
        ${d},
        ${u},
        ${c}+vec3(-1.3, -2.5, 6.),
        ${m},
        ${h}
    ));

    float ${f} = fbm(
      ${d},
      ${u},
      ${c} + ${v} * ${p},
      ${m},
      ${h}
    );`),s){case st.SCALAR:t.addToMain(`float ${_} = ${f};`);break;case st.VECTOR_3:t.addToMain(`vec3 ${_} = vec3(${f});`);break;case st.VECTOR_4:default:t.addToMain(`vec4 ${_} = vec4(vec3(${f}), 1);`);break}return[_,""]}setInputValue(t,i){this.inputVariables[t].setValue(i)}}class Cx{constructor(e,t){j(this,"pickers");j(this,"interpolation");this.interpolation=t||bn.Linear,this.pickers=[...e]}getPickers(){return[...this.pickers]}setPickers(e){this.pickers=[...e]}getInterpolation(){return this.interpolation}setInterpolation(e){this.interpolation=e}findSidePickers(e){let t=-1;if(this.pickers[0].position>=e)return[{position:0,color:this.pickers[0].color,id:Math.floor(Math.random()*1e9)},this.pickers[0]];for(let i=0;i<this.pickers.length-1;i++)if(this.pickers[i].position<=e&&this.pickers[i+1].position>=e){t=i;break}return t===-1?[this.pickers[this.pickers.length-1],{position:1,color:this.pickers[this.pickers.length-1].color,id:Math.floor(Math.random()*1e9)}]:[this.pickers[t],this.pickers[t+1]]}handleInterpolationConstant(e){return e.color}handleInterpolationLinear(e,t,i){const s=i.position-t.position;if(Math.abs(s)<1e-5)return t.color;const r=(e-t.position)/s;return at.interpolateRgba(t.color,i.color,r)}getColorAt(e){if(e<0||e>1)throw"[Gradient] Position is outside of bound: "+e;const[t,i]=this.findSidePickers(e);if(this.interpolation===bn.Constant)return this.handleInterpolationConstant(t);if(this.interpolation===bn.Linear)return this.handleInterpolationLinear(e,t,i);throw"[Gradient] Interpolation not implemented: "+this.interpolation}}var bn=(n=>(n[n.Linear=0]="Linear",n[n.Constant=1]="Constant",n))(bn||{});class wd extends lr{constructor(){super("ColorRamp",{inputList:[new bi("fac","number",.5,0,1)]},new Qn("color","color"));j(this,"inputVariables");j(this,"gradient");this.gradient=new Cx([{position:0,color:new at(ti.RGB,0,0,0,1),id:Math.floor(Math.random()*1e9)},{position:1,color:new at(ti.RGB,255,255,255,1),id:Math.floor(Math.random()*1e9)}],bn.Linear),this.inputVariables={},super.getInputs().inputList.forEach(i=>{this.inputVariables[i.getName()]=i})}getMixFunctionConstant(t){return`vec4 getGradientColorConstant(vec4[${t}] colors, float[${t}] positions, float fac) {
      vec4 color = vec4(0);
      for(int i = 0; i < ${t} - 1; i++) {
        float dist = positions[i + 1] - positions[i];
        color += step(positions[i], fac) * (1. - step(positions[i + 1], fac)) *
          colors[i];
      }
      return color;
    }`}getMixFunctionLinear(t){return`vec4 getGradientColorLinear(vec4[${t}] colors, float[${t}] positions, float fac) {
      vec4 color = vec4(0);
      for(int i = 0; i < ${t} - 1; i++) {
        float dist = positions[i + 1] - positions[i];
        color += step(positions[i], fac) * (1. - step(positions[i + 1], fac)) *
          mix(colors[i], colors[i + 1], (fac - positions[i]) / dist);
      }
      return color;
    }`}compileLinearInterpolation(t){let i="";const s=this.inputVariables.fac.getConnected();[i]=s.getParent().compile(t,s,st.SCALAR);const o=this.gradient.getPickers();o[0].position!==0&&o.unshift({position:0,color:o[0].color,id:Math.floor(Math.random()*1e9)}),o[o.length-1].position!==1&&o.push({position:1,color:o[o.length-1].color,id:Math.floor(Math.random()*1e9)});const a=t.generateVariableID("COL_RAMP_NUM_PICKER_"),l=t.generateVariableID("col_ramp_picker_color_"),c=t.generateVariableID("col_ramp_picker_pos_");t.addToDefines({name:a,value:o.length,type:"int"});let h=`vec4[${a}] ${l};
`,d=`float[${a}] ${c};
`;o.forEach((m,v)=>{const p=m.color.getUnitRgb(),f=m.color.getAlpha();h+=`${l}[${v}] = vec4(${super.formatValue(p.x)}, ${super.formatValue(p.y)}, ${super.formatValue(p.z)}, ${super.formatValue(f)});
`,d+=`${c}[${v}] = ${super.formatValue(m.position)};
`}),t.addToMain(h),t.addToMain(d),t.addToFunctions("getGradientColorLinear("+o.length+")",this.getMixFunctionLinear(a));const u=t.generateVariableID("col_ramp_color_");return t.addToMain(`vec4 ${u} = getGradientColorLinear(${l}, ${c}, ${i});`),[u,""]}compileConstantInterpolation(t){let i="";const s=this.inputVariables.fac.getConnected();[i]=s.getParent().compile(t,s,st.SCALAR);const o=this.gradient.getPickers();o[0].position!==0&&o.unshift({position:0,color:o[0].color,id:Math.floor(Math.random()*1e9)}),o[o.length-1].position!==1&&o.push({position:1,color:o[o.length-1].color,id:Math.floor(Math.random()*1e9)});const a=t.generateVariableID("COL_RAMP_NUM_PICKER_"),l=t.generateVariableID("col_ramp_picker_color_"),c=t.generateVariableID("col_ramp_picker_pos_");t.addToDefines({name:a,value:o.length,type:"int"});let h=`vec4[${a}] ${l};
`,d=`float[${a}] ${c};
`;o.forEach((m,v)=>{const p=m.color.getUnitRgb(),f=m.color.getAlpha();h+=`${l}[${v}] = vec4(${super.formatValue(p.x)}, ${super.formatValue(p.y)}, ${super.formatValue(p.z)}, ${super.formatValue(f)});
`,d+=`${c}[${v}] = ${super.formatValue(m.position)};
`}),t.addToMain(h),t.addToMain(d),t.addToFunctions("getGradientColorConstant("+o.length+")",this.getMixFunctionConstant(a));const u=t.generateVariableID("col_ramp_color_");return t.addToMain(`vec4 ${u} = getGradientColorConstant(${l}, ${c}, ${i});`),[u,""]}compile(t,i,s){if(this.inputVariables.fac.isConnected()){let r="";const o=t.generateVariableID("col_ramp_out_");switch(this.gradient.getInterpolation()){case bn.Linear:[r]=this.compileLinearInterpolation(t);break;case bn.Constant:[r]=this.compileConstantInterpolation(t);break;default:throw"[ColorRamp:compile] Invalid interpolation: "+this.gradient.getInterpolation()}switch(s){case st.SCALAR:t.addToMain(`float ${o} = ${r}.x;`);break;case st.VECTOR_3:t.addToMain(`vec3 ${o} = ${r}.xyz;`);break;case st.VECTOR_4:default:t.addToMain(`vec4 ${o} = ${r};`);break}return[o,""]}else{const r=this.inputVariables.fac.getValue(),o=t.generateVariableID("col_ramp_color_"),a=this.gradient.getColorAt(r.value),l=a.getUnitRgb(),c=a.getAlpha();switch(s){case st.SCALAR:t.addToMain(`const float ${o} = ${super.formatValue(l.x)};`);break;case st.VECTOR_3:t.addToMain(`const vec3 ${o} = vec3(${super.formatValue(l.x)}, ${super.formatValue(l.y)}, ${super.formatValue(l.z)});`);break;case st.VECTOR_4:default:t.addToMain(`const vec4 ${o} = vec4(${super.formatValue(l.x)}, ${super.formatValue(l.y)}, ${super.formatValue(l.z)}, ${super.formatValue(c)});`);break}return[o,""]}}getGradient(){return this.gradient}}class Sd extends lr{constructor(){super("Voronoi Texture",{inputList:[new bi("scale","number",5),new bi("randomness","number",1,0,1)]},new Qn("color","color"));j(this,"inputVariables");j(this,"noiseFunction");j(this,"featureOutput");j(this,"smoothness");this.inputVariables={},super.getInputs().inputList.forEach(i=>{this.inputVariables[i.getName()]=i}),this.featureOutput=pi.F1,this.smoothness=.5,this.noiseFunction={"hash(vec3)":`vec3 hash( vec3 p ){
  return fract(sin(vec3( dot(p,vec3(1.0,57.0,113.0)), 
                         dot(p,vec3(57.0,113.0,1.0)),
                         dot(p,vec3(113.0,1.0,57.0))))*43758.5453);

}`,"voronoi(vec3)":`vec3 voronoi( const in vec3 x, float randomness) {
      //vec3 voronoi( const in vec3 x, float randomness, float smoothness ) {
    vec3 p = floor( x );
    vec3 f = fract( x );
    //float w = smoothness;

    float id = 0.0;
    vec2 res = vec2( 100.0 );
    for( int k=-1; k<=1; k++ ) {
        for( int j=-1; j<=1; j++ ) {
            for( int i=-1; i<=1; i++ ) {
                vec3 b = vec3( float(i), float(j), float(k) );
                vec3 r = vec3( b ) - f + randomness * hash( p + b );
                float d = dot( r, r );
                //float h = smoothstep( -1.0, 1.0, (res.x-d)/w );
                //float newD = mix( res.x, d, h ) - h*(1.0-h)*w/(1.0+3.0*w);

                //if( newD < res.x ) {
                if( d < res.x ) {
                    id = dot( p+b, vec3(1.0,57.0,113.0 ) );
                    //res = vec2( newD, res.x );         
                    res = vec2( d, res.x );         
                }
                //else if( newD < res.y ) {
                else if( d < res.y ) {
                    res.y = d;
                }
            }
        }
    }

    return vec3( sqrt( res ), abs(id) );
}`,"mod289(vec3)":`
// Cellular noise ("Worley noise") in 3D in GLSL.
// Copyright (c) Stefan Gustavson 2011-04-19. All rights reserved.
// This code is released under the conditions of the MIT license.
// See LICENSE file for details.
// https://github.com/stegu/webgl-noise

// Modulo 289 without a division (only multiplications)
vec3 mod289(vec3 x) {
return x - floor(x * (1.0 / 289.0)) * 289.0;
}`,"mod7(vec3)":`vec3 mod7(vec3 x) {
return x - floor(x * (1.0 / 7.0)) * 7.0;
}`,"pemute(vec3)":`vec3 permute(vec3 x, float randomness) {
//return mod289((34.0 * x + 10.0) * x);
  return mod289(randomness * (34.0 * x + 10.0) * x + (1.0 - randomness) * x);
}`,"cellular(vec3)":`// Cellular noise, returning F1 and F2 in a vec2.
// 3x3x3 search region for good F2 everywhere, but a lot
// slower than the 2x2x2 version.
// The code below is a bit scary even to its author,
// but it has at least half decent performance on a
// modern GPU. In any case, it beats any software
// implementation of Worley noise hands down.
//
// Adapted for randomness

vec2 cellular(vec3 P, float randomness) {
#define K 0.142857142857 // 1/7
#define Ko 0.428571428571 // 1/2-K/2
#define K2 0.020408163265306 // 1/(7*7)
#define Kz 0.166666666667 // 1/6
#define Kzo 0.416666666667 // 1/2-1/6*2
#define jitter 1.0 // smaller jitter gives more regular pattern

vec3 Pi = mod289(floor(P));
vec3 Pf = fract(P) - 0.5;

vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);
vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);
vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);

vec3 p = permute(Pi.x + vec3(-1.0, 0.0, 1.0), randomness);
vec3 p1 = permute(p + Pi.y - 1.0, randomness);
vec3 p2 = permute(p + Pi.y, randomness);
vec3 p3 = permute(p + Pi.y + 1.0, randomness);

vec3 p11 = permute(p1 + Pi.z - 1.0, randomness);
vec3 p12 = permute(p1 + Pi.z, randomness);
vec3 p13 = permute(p1 + Pi.z + 1.0, randomness);

vec3 p21 = permute(p2 + Pi.z - 1.0, randomness);
vec3 p22 = permute(p2 + Pi.z, randomness);
vec3 p23 = permute(p2 + Pi.z + 1.0, randomness);

vec3 p31 = permute(p3 + Pi.z - 1.0, randomness);
vec3 p32 = permute(p3 + Pi.z, randomness);
vec3 p33 = permute(p3 + Pi.z + 1.0, randomness);

vec3 ox11 = fract(p11*K) - Ko;
vec3 oy11 = mod7(floor(p11*K))*K - Ko;
vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed

vec3 ox12 = fract(p12*K) - Ko;
vec3 oy12 = mod7(floor(p12*K))*K - Ko;
vec3 oz12 = floor(p12*K2)*Kz - Kzo;

vec3 ox13 = fract(p13*K) - Ko;
vec3 oy13 = mod7(floor(p13*K))*K - Ko;
vec3 oz13 = floor(p13*K2)*Kz - Kzo;

vec3 ox21 = fract(p21*K) - Ko;
vec3 oy21 = mod7(floor(p21*K))*K - Ko;
vec3 oz21 = floor(p21*K2)*Kz - Kzo;

vec3 ox22 = fract(p22*K) - Ko;
vec3 oy22 = mod7(floor(p22*K))*K - Ko;
vec3 oz22 = floor(p22*K2)*Kz - Kzo;

vec3 ox23 = fract(p23*K) - Ko;
vec3 oy23 = mod7(floor(p23*K))*K - Ko;
vec3 oz23 = floor(p23*K2)*Kz - Kzo;

vec3 ox31 = fract(p31*K) - Ko;
vec3 oy31 = mod7(floor(p31*K))*K - Ko;
vec3 oz31 = floor(p31*K2)*Kz - Kzo;

vec3 ox32 = fract(p32*K) - Ko;
vec3 oy32 = mod7(floor(p32*K))*K - Ko;
vec3 oz32 = floor(p32*K2)*Kz - Kzo;

vec3 ox33 = fract(p33*K) - Ko;
vec3 oy33 = mod7(floor(p33*K))*K - Ko;
vec3 oz33 = floor(p33*K2)*Kz - Kzo;

vec3 dx11 = Pfx + jitter*ox11;
vec3 dy11 = Pfy.x + jitter*oy11;
vec3 dz11 = Pfz.x + jitter*oz11;

vec3 dx12 = Pfx + jitter*ox12;
vec3 dy12 = Pfy.x + jitter*oy12;
vec3 dz12 = Pfz.y + jitter*oz12;

vec3 dx13 = Pfx + jitter*ox13;
vec3 dy13 = Pfy.x + jitter*oy13;
vec3 dz13 = Pfz.z + jitter*oz13;

vec3 dx21 = Pfx + jitter*ox21;
vec3 dy21 = Pfy.y + jitter*oy21;
vec3 dz21 = Pfz.x + jitter*oz21;

vec3 dx22 = Pfx + jitter*ox22;
vec3 dy22 = Pfy.y + jitter*oy22;
vec3 dz22 = Pfz.y + jitter*oz22;

vec3 dx23 = Pfx + jitter*ox23;
vec3 dy23 = Pfy.y + jitter*oy23;
vec3 dz23 = Pfz.z + jitter*oz23;

vec3 dx31 = Pfx + jitter*ox31;
vec3 dy31 = Pfy.z + jitter*oy31;
vec3 dz31 = Pfz.x + jitter*oz31;

vec3 dx32 = Pfx + jitter*ox32;
vec3 dy32 = Pfy.z + jitter*oy32;
vec3 dz32 = Pfz.y + jitter*oz32;

vec3 dx33 = Pfx + jitter*ox33;
vec3 dy33 = Pfy.z + jitter*oy33;
vec3 dz33 = Pfz.z + jitter*oz33;

vec3 d11 = dx11 * dx11 + dy11 * dy11 + dz11 * dz11;
vec3 d12 = dx12 * dx12 + dy12 * dy12 + dz12 * dz12;
vec3 d13 = dx13 * dx13 + dy13 * dy13 + dz13 * dz13;
vec3 d21 = dx21 * dx21 + dy21 * dy21 + dz21 * dz21;
vec3 d22 = dx22 * dx22 + dy22 * dy22 + dz22 * dz22;
vec3 d23 = dx23 * dx23 + dy23 * dy23 + dz23 * dz23;
vec3 d31 = dx31 * dx31 + dy31 * dy31 + dz31 * dz31;
vec3 d32 = dx32 * dx32 + dy32 * dy32 + dz32 * dz32;
vec3 d33 = dx33 * dx33 + dy33 * dy33 + dz33 * dz33;

// Sort out the two smallest distances (F1, F2)
#if 0
// Cheat and sort out only F1
vec3 d1 = min(min(d11,d12), d13);
vec3 d2 = min(min(d21,d22), d23);
vec3 d3 = min(min(d31,d32), d33);
vec3 d = min(min(d1,d2), d3);
d.x = min(min(d.x,d.y),d.z);
return vec2(sqrt(d.x)); // F1 duplicated, no F2 computed
#else
// Do it right and sort out both F1 and F2
vec3 d1a = min(d11, d12);
d12 = max(d11, d12);
d11 = min(d1a, d13); // Smallest now not in d12 or d13
d13 = max(d1a, d13);
d12 = min(d12, d13); // 2nd smallest now not in d13
vec3 d2a = min(d21, d22);
d22 = max(d21, d22);
d21 = min(d2a, d23); // Smallest now not in d22 or d23
d23 = max(d2a, d23);
d22 = min(d22, d23); // 2nd smallest now not in d23
vec3 d3a = min(d31, d32);
d32 = max(d31, d32);
d31 = min(d3a, d33); // Smallest now not in d32 or d33
d33 = max(d3a, d33);
d32 = min(d32, d33); // 2nd smallest now not in d33
vec3 da = min(d11, d21);
d21 = max(d11, d21);
d11 = min(da, d31); // Smallest now in d11
d31 = max(da, d31); // 2nd smallest now not in d31
d11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;
d11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest
d12 = min(d12, d21); // 2nd smallest now not in d21
d12 = min(d12, d22); // nor in d22
d12 = min(d12, d31); // nor in d31
d12 = min(d12, d32); // nor in d32
d11.yz = min(d11.yz,d12.xy); // nor in d12.yz
d11.y = min(d11.y,d12.z); // Only two more to go
d11.y = min(d11.y,d11.z); // Done! (Phew!)
return sqrt(d11.xy); // F1, F2
#endif
}`}}setFeatureOutput(t){this.featureOutput=t}getFeatureOutput(){return this.featureOutput}compileF1F2(t,i,s,r){let o="";switch(this.featureOutput){case pi.F1:o="x";break;case pi.F2:o="y";break;default:throw"[VoronoiTexture:compileF1F2] Invalid FeatureOutput: "+this.featureOutput}switch(r){case st.SCALAR:t.addToMain(`float ${i} = ${s}.${o};`);break;case st.VECTOR_3:t.addToMain(`vec3 ${i} = vec3(${s}.${o});`);break;case st.VECTOR_4:default:t.addToMain(`vec4 ${i} = vec4(vec3(${s}.${o}), 1);`);break}}compile(t,i,s){const r=this.inputVariables.scale.getValue(),o=this.inputVariables.randomness.getValue(),a=t.generateVariableID("vt_noise_"),l=t.generateVariableID("nt_rand_"),c=t.generateVariableID("nt_scale_"),h=t.generateVariableID("vt_out_");switch(t.addAllToFunctions(this.noiseFunction),t.addToMain(`const float ${l} = ${super.formatValue(o.value)};`),t.addToMain(`const float ${c} = ${super.formatValue(r.value)};`),this.featureOutput){case pi.F1:case pi.F2:t.addToMain(`vec3 ${a} = voronoi(projPosition * ${c}, ${l});`),this.compileF1F2(t,h,a,s);break;default:throw"[VoronoiTexture:compile] Invalid FeatureOutput: "+this.featureOutput}return[h,""]}}var pi=(n=>(n[n.F1=0]="F1",n[n.F2=1]="F2",n))(pi||{});class Ed{static getNodesList(){return[{name:"Material Output",class:Md},{name:"Principled BSDF",class:Sx},{name:"Noise Texture",class:Ex},{name:"Voronoi Texture",class:Sd},{name:"Color Ramp",class:wd}]}}class Tx{constructor(e,t,i){j(this,"container");j(this,"emitter");j(this,"menu");j(this,"style");j(this,"pointerPos");j(this,"active");this.container=e,this.emitter=t,this.style=`
      #shader-menu-svg-container {
        height: 100%;
        width: 100%;
        position: relative;
      }
      #shader-menu-container {
        position: absolute;
        top: 0;
        left: 0;
        padding: 3rem;
      }
      #shader-menu-body {
        background: #111;
        border-radius: 6px;
        padding: 1rem;
        position: static;
        box-sizing: border-box;
        width: 220px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 0px 0.5px #636363;
      }
      .shader-menu-el {
        color: #eee;
        margin: 0;
        width: 100%;
        padding-block: .5rem;
        padding-inline: .5rem;
        font-family: monospace;
        border-radius: 10px;
        box-sizing: border-box;
        cursor: pointer;
      }
      .shader-menu-el:hover {
        background: #222;
      }
      .shader-menu-sep {
        position: relative;
        width: 100%;
        height: 1px;
        background: #eee;
        margin-block: 5px;
      }
    `,this.addStyles(),this.menu=this.createMenu(),this.active=!1,this.pointerPos={x:i.x,y:i.y},this.emitter.on("showMenu",()=>this.handleKeyDown());const s=r=>this.handlePointerPosition(r);this.emitter.on("pointerMoved",s)}handleKeyDown(){this.menu.style.display="",this.active=!0;let e=this.menu.getBoundingClientRect();this.menu.style.transform=`translate(
        ${this.pointerPos.x-e.width/2}px, 
        ${this.pointerPos.y-e.height/2}px)`,e=this.menu.getBoundingClientRect(),console.log("top",e.top);let t=this.pointerPos.x-e.width/2,i=this.pointerPos.y-e.height/2;e.top<-3*16&&(i=-3*16),e.bottom>innerHeight+3*16&&(i=innerHeight-e.height+3*16),e.left<-3*16&&(t=-3*16),this.menu.style.transform=`translate(
        ${t}px, 
        ${i}px)`}addStyles(){const e=document.createElement("style");e.innerText=this.style,document.head.appendChild(e)}createMenu(){const e=document.createElement("div");e.setAttribute("id","shader-menu-container");const t=document.createElement("div");t.setAttribute("id","shader-menu-body"),e.appendChild(t);const i=document.createElement("div");i.setAttribute("class","shader-menu-sep");const s=Ed.getNodesList();s.forEach((o,a)=>{const l=document.createElement("span");l.setAttribute("class","shader-menu-el"),l.textContent=o.name,l.addEventListener("click",()=>this.sendCreateEvent(o.class)),t.appendChild(l),a!==s.length-1&&t.appendChild(i.cloneNode())}),this.container.appendChild(e),e.style.height="100%",e.style.width="100%";const r=t.getBoundingClientRect();return e.setAttribute("width",`${r.width+16*6}`),e.setAttribute("height",`${r.height+16*6}`),e.style.height="",e.style.width="",e.style.display="none",e}handlePointerPosition(e){if(this.pointerPos.x=e.x,this.pointerPos.y=e.y,!this.active)return;const t=this.menu.getBoundingClientRect();(this.pointerPos.x<t.left||this.pointerPos.x>t.right||this.pointerPos.y<t.top||this.pointerPos.y>t.bottom)&&this.hideMenu()}hideMenu(){this.menu.style.display="none",this.active=!1}sendCreateEvent(e){this.hideMenu(),this.emitter.emit("createNode",e)}}const Cs=(n,e,t,i)=>{const s=n[2],r=n[3],o=s/e.width*(t-e.left),a=r/e.height*(i-e.top);return[o+n[0],a+n[1]]},sl=(n,e,t)=>{const i=[],s=Cs(n,e,0,0);return t.forEach(r=>{const o=Cs(n,e,r,0);i.push(o[0]-s[0])}),[...i]},Us={Open:"open",Busy:"busy",Linked:"linked"};class Yc{constructor(e,t,i,s,r,o,a,l,c){j(this,"canvas");j(this,"emitter");j(this,"startElement");j(this,"startOutput");j(this,"startPosition");j(this,"startNode");j(this,"endElement");j(this,"endInput");j(this,"endPosition");j(this,"endNode");j(this,"path");j(this,"state");j(this,"pointerMoveHandler");j(this,"pointerUpHandler");j(this,"fixLinkHandler");this.canvas=e,this.emitter=t,this.startPosition={x:i.x,y:i.y},this.endPosition={x:s.x,y:s.y},o!=null&&(this.startElement=o,this.startElement.setAttribute("data-state",Us.Busy)),a!=null&&(this.endElement=a,this.endElement.setAttribute("data-state",Us.Busy)),r instanceof Qn?this.startOutput=r:r instanceof ei&&(this.endInput=r),l!=null&&(this.startNode=l),c!=null&&(this.endNode=c),this.path=this.createLine(),this.updateShape(),this.state=0,this.pointerMoveHandler=h=>this.handlePointerMoveInitial(h),addEventListener("pointermove",this.pointerMoveHandler),this.pointerUpHandler=()=>this.handlePointerUp(),addEventListener("pointerup",this.pointerUpHandler),this.fixLinkHandler=h=>this.fixLink(h),this.emitter.on("fixLink",this.fixLinkHandler),this.emitter.on("repositionLinks",()=>this.moveLink())}createLine(){const e=document.createElementNS("http://www.w3.org/2000/svg","path");if(e.setAttribute("stroke","red"),e.setAttribute("stroke-width","3px"),e.setAttribute("fill","transparent"),this.canvas.firstChild!==null)this.canvas.insertBefore(e,this.canvas.firstChild);else throw"[Link] Adding link with no nodes";return e}setStartPosition(e){this.startPosition.x=e.x,this.startPosition.y=e.y,this.updateShape()}setEndPosition(e){this.endPosition.x=e.x,this.endPosition.y=e.y,this.updateShape()}updateShape(e){let[t,i]=[{x:0,y:0},{x:0,y:0}];e===!1?[t,i]=[this.startPosition,this.endPosition]:[t,i]=this.convertCanvasPosition([this.startPosition,this.endPosition]);const s={x:(t.x+i.x)/2,y:(t.y+i.y)/2};this.path.setAttribute("d",`M ${t.x} ${t.y}
      Q ${t.x+Math.abs(i.x-t.x)/3}
        ${t.y}, ${s.x} ${s.y} 
      T ${i.x} ${i.y}`)}handlePointerMoveInitial(e){if(this.state!==0)throw"[Link::handlePointerMove] state is not Initial";this.startElement===void 0?(this.startPosition.x=e.clientX,this.startPosition.y=e.clientY,this.updateShape()):this.endElement===void 0&&(this.endPosition.x=e.clientX,this.endPosition.y=e.clientY,this.updateShape())}handlePointerMoveDetached(e){if(this.state!==2)throw"[Link::handlePointerMove] state is not Detached";if(this.startElement===void 0)throw"[Link] startElement is undefined";const t=this.startElement.getBoundingClientRect(),i=this.convertCanvasDistances([t.width/2,t.height/2]);console.log(e.clientX,e.clientY);const s=this.convertCanvasPosition([{x:t.left,y:t.top},{x:e.clientX,y:e.clientY}]);this.startPosition.x=s[0].x+i[0],this.startPosition.y=s[0].y+i[1],this.endPosition.x=s[1].x,this.endPosition.y=s[1].y,this.updateShape(!1)}handlePointerUp(){if(this.state!==0&&this.state!==2)throw"[Link::handlePointerMove] state is not Initial or Detached";console.log("up"),this.emitter.emit("cancelLink"),this.deleteElement()}detachEnd(){if(this.endElement===void 0)throw"[Link] Detaching end but endElement is undefined";if(this.startElement===void 0)throw"[Link] startElement is undefined";this.state=2,this.pointerMoveHandler=r=>this.handlePointerMoveDetached(r),addEventListener("pointermove",this.pointerMoveHandler),addEventListener("pointerup",this.pointerUpHandler),this.emitter.on("fixLink",this.fixLinkHandler);const e=this.endElement.getBoundingClientRect(),t=this.startElement.getBoundingClientRect(),i=this.convertCanvasDistances([t.width/2,t.height/2,e.width/2,e.height/2]),s=this.convertCanvasPosition([{x:t.left,y:t.top},{x:e.left,y:e.top}]);this.startPosition.x=s[0].x+i[0],this.startPosition.y=s[0].y+i[1],this.endPosition.x=s[1].x+i[2],this.endPosition.y=s[1].y+i[3],this.endElement.setAttribute("data-state",Us.Open),this.endElement=void 0,this.updateShape(!1)}deleteElement(){if(console.log("delete"),this.path.remove(),(this.state===0||this.state===2)&&(removeEventListener("pointermove",this.pointerMoveHandler),removeEventListener("pointerup",this.pointerUpHandler),this.emitter.off("fixLink",this.fixLinkHandler)),this.startNode!==void 0&&this.startNode.removeOutgoingLink(this),this.endNode!==void 0&&this.endNode.removeIncomingLink(this),this.state===1){if(this.startOutput===void 0)throw"[Link] startOutput is undefined, but state is fixed";if(this.endInput===void 0)throw"[Link] startOutput is undefined, but state is fixed";this.endInput.dropConnection(),this.emitter.emit("recompile")}this.startElement!==void 0&&this.startElement.setAttribute("data-state",Us.Open),this.endElement!==void 0&&this.endElement.setAttribute("data-state",Us.Open)}fixLink(e){if(this.state!==0&&this.state!==2)throw"[Link::fixLink] state is not Initial or Detached";switch(this.state){case 0:this.fixLinkInitial(e);break;case 2:this.fixLinkDetached(e);break;default:throw"[Link::fixLink] state is not initial or Detached"}if(this.endInput===void 0)throw"[Link] After fixing link, endInput is undefined";if(this.endNode===void 0)throw"[Link] After fixing link, endNode is undefined";if(this.endElement===void 0)throw"[Link] After fixing link, endElement is undefined";if(this.startOutput===void 0)throw"[Link] After fixing link, startOutput is undefined";if(this.startNode===void 0)throw"[Link] After fixing link, startNode is undefined";if(this.startElement===void 0)throw"[Link] After fixing link, startElement is undefined";this.startElement.setAttribute("data-state","linked"),this.endElement.setAttribute("data-state","linked"),this.startNode.addOutgoingLink(this,this.startOutput),this.endNode.addIncomingLink(this,this.endInput),this.startOutput.connectTo(this.endInput),this.state=1,removeEventListener("pointermove",this.pointerMoveHandler),removeEventListener("pointerup",this.pointerUpHandler),this.emitter.off("fixLink",this.fixLinkHandler),this.emitter.emit("recompile")}fixLinkInitial(e){if(e.startElement!==void 0){this.startElement=e.startElement;const t=this.startElement.getBoundingClientRect();this.startPosition.x=t.left+t.width/2,this.startPosition.y=t.top+t.height/2}if(e.startOutput!==void 0&&(this.startOutput=e.startOutput),e.startNode!==void 0&&(this.startNode=e.startNode),e.endElement!==void 0){this.endElement=e.endElement;const t=this.endElement.getBoundingClientRect();this.endPosition.x=t.left+t.width/2,this.endPosition.y=t.top+t.height/2}e.endInput!==void 0&&(this.endInput=e.endInput),e.endNode!==void 0&&(this.endNode=e.endNode),this.updateShape()}fixLinkDetached(e){if(e.endElement===void 0||e.endInput===void 0||e.endNode===void 0)throw"[Link::fixLinkDetached] end elements are undefined";this.endInput=e.endInput,this.endNode=e.endNode,this.endElement=e.endElement;const t=this.endElement.getBoundingClientRect(),i=this.convertCanvasDistances([t.width/2,t.height/2]),s=this.convertCanvasPosition([{x:t.left,y:t.top}]);this.endPosition.x=s[0].x+i[0],this.endPosition.y=s[0].y+i[1],this.updateShape(!1)}moveLink(){if(this.endElement===void 0)throw"[Link] endElement is undefined";if(this.startElement===void 0)throw"[Link] startElement is undefined";const e=this.startElement.getBoundingClientRect(),t=this.endElement.getBoundingClientRect(),i=this.convertCanvasDistances([e.width/2,e.height/2,t.width/2,t.height/2]),s=this.convertCanvasPosition([{x:e.left,y:e.top},{x:t.left,y:t.top}]);this.startPosition.x=s[0].x+i[0],this.startPosition.y=s[0].y+i[1],this.endPosition.x=s[1].x+i[2],this.endPosition.y=s[1].y+i[3],this.updateShape(!1)}convertCanvasPosition(e){const t=[],i=this.canvas.getAttribute("viewBox");if(i===null)throw"[RendererNodeMovement::handlePointerMoveInitial] viewBox is null";const s=this.canvas.getBoundingClientRect(),r=i.split(" ").map(o=>parseFloat(o));return e.forEach(o=>{const[a,l]=Cs(r,s,o.x,o.y);t.push({x:a,y:l})}),[...t]}convertCanvasDistances(e){const t=this.canvas.getAttribute("viewBox");if(t===null)throw"[RendererNodeMovement::handlePointerMoveInitial] viewBox is null";const i=this.canvas.getBoundingClientRect(),s=t.split(" ").map(o=>parseFloat(o));return[...sl(s,i,e)]}}class Px{constructor(e,t,i,s,r,o){j(this,"canvas");j(this,"svgNode");j(this,"nodeRenderer");j(this,"emitter");j(this,"state");j(this,"pointerPos");j(this,"startDragPos");j(this,"startDragPosUnit");j(this,"pointerDownHandler");j(this,"pointerMovedHandler");j(this,"pointerUpHandler");this.canvas=e,this.svgNode=t,this.nodeRenderer=i,this.emitter=s,this.state=r,this.pointerPos={x:o.x,y:o.y},this.startDragPos={x:0,y:0},this.startDragPosUnit={x:0,y:0},this.pointerDownHandler=a=>this.handlePointerDown(a),addEventListener("pointerdown",this.pointerDownHandler),this.pointerMovedHandler=a=>this.handlePointerMove(a),this.emitter.on("pointerMoved",this.pointerMovedHandler),this.pointerUpHandler=()=>this.handlePointerUp()}removeListeners(){removeEventListener("pointerdown",this.pointerDownHandler),this.emitter.off("pointerMoved",this.pointerMovedHandler),(this.state===tt.SelectedDown||this.state===tt.Moving)&&removeEventListener("pointerup",this.pointerUpHandler)}handlePointerDown(e){if(this.svgNode===void 0)throw"[RendererNode] svgNode is undefined. Did you forget to remove the pointerDown listener?";switch(this.state){case tt.Initial:this.handlePointerDownInitial(e);break;case tt.Set:this.handlePointerDownSet(e);break;case tt.SelectedUp:this.handlePointerDownSelectedUp(e);break;case tt.Moving:throw"[RendererNode] How is State.Moving when clicking on it?";case tt.SelectedDown:throw"[RendererNode] How is State.SelectedDown when clicking on it?";default:throw"[RendererNodeMovement::handlePointerDown] State not implemented, "+this.state}}handlePointerDownInitial(e){if(this.state!==tt.Initial)throw"[RendererNodeMovement::handlePointerDownInitial] State is not Initial";e.buttons>1?(e.preventDefault(),this.nodeRenderer.deleteNode()):(this.setState(tt.Set),this.svgNode.style.cursor="")}handlePointerDownSet(e){if(this.state!==tt.Set)throw"[RendererNodeMovement::handlePointerDownSet] State is not Set";const t=this.svgNode.getElementsByClassName("shader-node");if(t.length===0)throw"[RendererNode::handlePointerDownSet] No element with class shader-node found.";const i=t[0];e.target===this.svgNode&&(i.classList.add("highlight"),this.svgNode.remove(),this.canvas.appendChild(this.svgNode),this.setState(tt.SelectedDown),this.saveStartPosition(e),addEventListener("pointerup",this.pointerUpHandler))}handlePointerDownSelectedUp(e){const t=this.svgNode.getElementsByClassName("shader-node");if(t.length===0)throw"[RendererNode] No element with class shader-node found.";const i=t[0];e.target!==this.svgNode?(i.classList.remove("highlight"),this.setState(tt.Set)):(this.setState(tt.SelectedDown),this.saveStartPosition(e),addEventListener("pointerup",this.pointerUpHandler))}saveStartPosition(e){this.startDragPos={x:e.clientX,y:e.clientY};const t=this.svgNode.getAttribute("x"),i=this.svgNode.getAttribute("y");if(t===null||i===null)throw"[RendererNode] x or y is null";this.startDragPosUnit={x:parseFloat(t),y:parseFloat(i)}}handlePointerMove(e){if(this.svgNode===void 0)throw"[RendererNode] svgNode is undefined. Did you forget to remove the pointerMove listener?";switch(this.pointerPos.x=e.x,this.pointerPos.y=e.y,this.state){case tt.Initial:this.handlePointerMoveInitial();break;case tt.Set:break;case tt.SelectedDown:this.handlePointerMoveSelectedDown(),this.handlePointerMoveMoving();break;case tt.Moving:this.handlePointerMoveMoving();break;case tt.SelectedUp:break;default:throw"[RendererNodeMovement::handlePointerMove] State not implemented, "+this.state}}handlePointerMoveInitial(){if(this.state!==tt.Initial)throw"[RendererNodeMovement::handlePointerMoveInitial] State is not initial";const e=this.canvas.getAttribute("viewBox");if(e===null)throw"[RendererNodeMovement::handlePointerMoveInitial] viewBox is null";const t=this.canvas.getBoundingClientRect(),i=this.svgNode.getBoundingClientRect(),s=e.split(" ").map(o=>parseFloat(o));console.log("bounding",t.width,s[2]);const r=Cs(s,t,this.pointerPos.x-i.width/2,this.pointerPos.y-i.height/2);this.svgNode.setAttribute("x",`${r[0]}`),this.svgNode.setAttribute("y",`${r[1]}`)}handlePointerMoveSelectedDown(){if(this.state!==tt.SelectedDown)throw"[RendererNodeMovement::handlePointerMoveSelectedDown] State is not SelectedDown";this.setState(tt.Moving)}handlePointerMoveMoving(){if(this.state!==tt.Moving)throw"[RendererNodeMovement::handlePointerMoveMoving] State is not Moving";const e=this.canvas.getBoundingClientRect(),t=this.canvas.getAttribute("viewBox");if(t===null)throw"[RendererNode] viewBox is null";this.svgNode.style.cursor="move";const i=t.split(" ").map(o=>parseFloat(o)),[s,r]=sl(i,e,[this.pointerPos.x-this.startDragPos.x,this.pointerPos.y-this.startDragPos.y]);this.svgNode.setAttribute("x",(this.startDragPosUnit.x+s).toString()),this.svgNode.setAttribute("y",(this.startDragPosUnit.y+r).toString()),this.nodeRenderer.moveLinks()}handlePointerUp(){if(this.svgNode===void 0)throw"[RendererNode] svgNode is undefined. Did you forget to remove the pointerUp listener?";switch(this.state){case tt.SelectedDown:break;case tt.Moving:break;default:throw"[RendererNode::handlePointerUp] State is NOT SelectedDown or Moving"}this.setState(tt.SelectedUp),this.svgNode.style.cursor="",removeEventListener("pointerup",this.pointerUpHandler)}setState(e){this.state=e,this.nodeRenderer.setState(this.state)}}var Ax="/three-shader-graph/icons/arrow-left.svg",Lx="/three-shader-graph/icons/arrow-right.svg";var bt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Cd=(n=>(n[n.Init=0]="Init",n[n.Active=1]="Active",n))(Cd||{});const Rx=pt({data(){return{value:null,tempValue:"",maxValue:void 0,minValue:void 0,range:void 0,State:Cd,state:0,lastPositionX:0,startElement:null,pointerMoved:!1,isConnected:!1}},props:{input:{type:Object,required:!0},emitter:{type:Object,required:!0}},computed:{isSmallRange(){return this.range===void 0?!1:this.range<=2},defaultDiff(){return this.isSmallRange?.007:.2}},methods:{handlePointerDown(n){this.lastPositionX=n.clientX,this.startElement=n.target,document.addEventListener("pointermove",this.handlePointerMove),document.addEventListener("pointerup",this.handlePointerUp)},handlePointerMove(n){let e=n.clientX-this.lastPositionX;if(Math.abs(e)<.2)return;this.pointerMoved=!0;let t=Math.abs(Math.floor(e));e>0?this.increaseValue(this.defaultDiff*t):e<0&&this.decreaseValue(this.defaultDiff*t),this.lastPositionX=n.clientX},handlePointerUp(n){if(this.startElement===null)throw"[NumberInput] Start element is null";!this.pointerMoved&&this.startElement.classList.contains("shader-node-arrow-right")?this.increaseValue():!this.pointerMoved&&this.startElement.classList.contains("shader-node-arrow-left")?this.decreaseValue():this.pointerMoved||(this.state=1,document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("pointerdown",this.handleSaveContent),this.$nextTick(()=>{this.$refs.inputField.focus(),this.$refs.inputField.select()})),this.pointerMoved=!1,document.removeEventListener("pointermove",this.handlePointerMove),document.removeEventListener("pointerup",this.handlePointerUp)},resetInitState(){this.state=0,this.value=parseFloat(this.tempValue),this.tempValue=this.value.toFixed(3).toString(),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("pointerdown",this.handleSaveContent)},handleSaveContent(n){let t=this.$refs.inputContainer.getBoundingClientRect();(n.clientX<t.left||n.clientX>t.left+t.width||n.clientY<t.top||n.clientY>t.top+t.height)&&this.resetInitState()},handleKeyDown(n){this.state===1&&n.key==="Enter"&&this.resetInitState()},increaseValue(n){if(this.value===null)throw"[NumberInput] value is null";n=n||this.defaultDiff,this.maxValue===void 0?this.value+=n:this.value+n<=this.maxValue?this.value+=n:this.value=this.maxValue,this.tempValue=this.value.toFixed(3).toString()},decreaseValue(n){if(this.value===null)throw"[NumberInput] value is null";n=n||this.defaultDiff,this.minValue===void 0?this.value-=n:this.value-n>=this.minValue?this.value-=n:this.value=this.minValue,this.tempValue=this.value.toFixed(3).toString()},checkIsConnected(){this.isConnected=this.input.isConnected()}},mounted(){if(this.emitter.on("recompile",this.checkIsConnected),this.value=this.input.getValue().value,this.value===null)throw"[NumberInput] value is null";this.tempValue=this.value.toString(),this.minValue=this.input.getMinValue(),this.maxValue=this.input.getMaxValue(),this.minValue!==void 0&&this.maxValue!==void 0&&(this.range=this.maxValue-this.minValue)},watch:{value(n,e){if(e===null||this.value===null)return;const t=this.value;this.input.setValue(t),this.emitter.emit("recompile")}}}),Td=n=>(Ls("data-v-2fa5e034"),n=n(),Rs(),n),Dx=Td(()=>ve("img",{alt:"Left arrow",src:Ax,class:"shader-node-arrow-img"},null,-1)),Ix=[Dx],kx={class:"shader-node-number-input-label"},Nx={class:"shader-node-number-input-value"},Fx=Td(()=>ve("img",{alt:"Right arrow",src:Lx,class:"shader-node-arrow-img"},null,-1)),zx=[Fx],Ox={key:1,class:"shader-node-number-input-active"},Bx={key:2,class:"shader-node-number-input-connected"},Vx={class:"shader-node-number-input-label"};function Ux(n,e,t,i,s,r){var o;return Te(),Fe("div",{ref:"inputContainer",class:_t(["shader-node-number-input",{connected:n.isConnected}])},[n.state===n.State.Init&&!n.isConnected?(Te(),Fe("span",{key:0,class:_t(["shader-node-number-input-container",{"single-element":n.isSmallRange}])},[n.isSmallRange?Jn("",!0):(Te(),Fe("span",{key:0,class:"shader-node-arrow-left",onPointerdown:e[0]||(e[0]=(...a)=>n.handlePointerDown&&n.handlePointerDown(...a))},Ix,32)),ve("span",{class:_t(["shader-node-number-input-body",{"single-element":n.isSmallRange}]),onPointerdown:e[1]||(e[1]=(...a)=>n.handlePointerDown&&n.handlePointerDown(...a))},[ve("span",kx,wt(n.input.getName()),1),ve("span",Nx,wt((o=n.value)==null?void 0:o.toFixed(3)),1)],34),n.isSmallRange?Jn("",!0):(Te(),Fe("span",{key:1,class:"shader-node-arrow-right",onPointerdown:e[2]||(e[2]=(...a)=>n.handlePointerDown&&n.handlePointerDown(...a))},zx,32))],2)):n.isConnected?(Te(),Fe("span",Bx,[ve("span",Vx,wt(n.input.getName()),1)])):(Te(),Fe("span",Ox,[Lh(ve("input",{ref:"inputField",class:"shader-node-number-input-field",type:"text","onUpdate:modelValue":e[3]||(e[3]=a=>n.tempValue=a)},null,512),[[qh,n.tempValue]])]))],2)}var Hx=bt(Rx,[["render",Ux],["__scopeId","data-v-2fa5e034"]]);const Gx=pt({data(){return{tempValue:""}},props:{value:{type:[String,Number],required:!0}},methods:{handleFocus(n){document.addEventListener("keydown",this.handleKeyDown)},handleBlur(n){document.removeEventListener("keydown",this.handleKeyDown),this.$emit("newValue",this.tempValue)},handleKeyDown(n){n.key==="Enter"&&this.$refs.inputElement.blur()}},watch:{value(){this.tempValue=this.value.toString()}},mounted(){const n=this.$refs.inputElement;n.addEventListener("focus",this.handleFocus),n.addEventListener("blur",this.handleBlur),this.tempValue=this.value.toString()},beforeUnmount(){document.removeEventListener("keydown",this.handleKeyDown);const n=this.$refs.inputElement;n.removeEventListener("focus",this.handleFocus),n.removeEventListener("blur",this.handleBlur)}}),Wx={class:"input-field-container"};function $x(n,e,t,i,s,r){return Te(),Fe("div",Wx,[Lh(ve("input",{ref:"inputElement","onUpdate:modelValue":e[0]||(e[0]=o=>n.tempValue=o)},null,512),[[qh,n.tempValue]])])}var Pd=bt(Gx,[["render",$x],["__scopeId","data-v-2a1b6ea3"]]),Ad="/three-shader-graph/icons/tick-icon.svg",bo="/three-shader-graph/icons/copy-icon.svg";const qx=pt({data(){return{color:new at(ti.HSV,0,0,0,0),canvas:document.getElementById("renderer-canvas"),colorSpace:"",colorString:"#110000",componentNames:["H","S","V","A"],componentValues:[0,0,0,1],stringComponentValues:["0","0","0","100"]}},props:{defaultValue:{type:Object,required:!0},showBelow:{type:Boolean,required:!1,default:!1}},components:{InputField:Pd},methods:{handlePointerDownWheel(n){const t=this.$refs.wheel.getBoundingClientRect(),{left:i,top:s}=this.scaleOffsetToPixels(n.clientY-t.top,n.clientX-t.left);this.$refs.wheelSelector.style.left=`${i}px`,this.$refs.wheelSelector.style.top=`${s}px`,document.addEventListener("pointermove",this.handlePointerMoveWheel),document.addEventListener("pointerup",this.handlePointerUpWheel)},handlePointerDownBar(n){const t=this.$refs.bar.getBoundingClientRect(),{top:i}=this.scaleOffsetToPixels(n.clientY-t.top);this.$refs.barSelector.style.top=`${i}px`,document.addEventListener("pointermove",this.handlePointerMoveBar),document.addEventListener("pointerup",this.handlePointerUpBar)},handlePointerDownAlphaBar(n){const t=this.$refs.alphaBar.getBoundingClientRect(),{top:i}=this.scaleOffsetToPixels(n.clientY-t.top);this.$refs.alphaBarSelector.style.top=`${i}px`,document.addEventListener("pointermove",this.handlePointerMoveAlphaBar),document.addEventListener("pointerup",this.handlePointerUpAlphaBar)},moveWheelSelector(n){const t=this.$refs.wheel.getBoundingClientRect(),i=t.width/2,s=[t.left+t.width/2,t.top+t.height/2],r=[s[0]-n.clientX,s[1]-n.clientY],o=Math.sqrt(r[0]*r[0]+r[1]*r[1]);if(o<=i){const{top:a,left:l}=this.scaleOffsetToPixels(n.clientY-t.top,n.clientX-t.left);this.$refs.wheelSelector.style.top=`${a}px`,this.$refs.wheelSelector.style.left=`${l}px`}else{const a=[i*r[0]/o,i*r[1]/o],{top:l,left:c}=this.scaleOffsetToPixels(-a[1]+i,-a[0]+i);this.$refs.wheelSelector.style.left=`${c}px`,this.$refs.wheelSelector.style.top=`${l}px`}this.getWheelCoordinates()},handlePointerMoveWheel(n){this.moveWheelSelector(n)},moveBarSelector(n,e,t){const i=e.getBoundingClientRect();if(n.clientY>i.top+i.height){const{top:s}=this.scaleOffsetToPixels(i.height);t.style.top=`${s}px`}else if(n.clientY<i.top)t.style.top="0";else{const{top:s}=this.scaleOffsetToPixels(n.clientY-i.top);t.style.top=`${s}px`}this.getWheelCoordinates()},handlePointerMoveBar(n){this.moveBarSelector(n,this.$refs.bar,this.$refs.barSelector),this.$refs.wheel.style.filter=`brightness(${this.color.getHsv().z})`},handlePointerMoveAlphaBar(n){this.moveBarSelector(n,this.$refs.alphaBar,this.$refs.alphaBarSelector)},getWheelCoordinates(){const t=this.$refs.wheel.getBoundingClientRect().width/2,i=this.$refs.wheelSelector,{left:s,top:r}=this.scaleOffsetFromPixels(parseFloat(i.style.top),parseFloat(i.style.left)),o=1-r/t,a=s/t-1,l=Math.sqrt(a*a+o*o);let c=0;o===0&&a===0?c=0:o>=0&&a>=0?c=Math.PI+Math.atan(a/o):o>=0?c=Math.atan(a/o)+Math.PI:a>=0?c=Math.atan(a/o)+2*Math.PI:c=Math.atan(a/o);let h=xi(0,360,c*180/Math.PI);h===360&&(h=0);const d=xi(0,1,l),m=this.$refs.bar.getBoundingClientRect(),v=this.$refs.barSelector,{top:p}=this.scaleOffsetFromPixels(parseFloat(v.style.top)),f=xi(0,1,1-p/m.height),S=this.$refs.alphaBar.getBoundingClientRect(),C=this.$refs.alphaBarSelector,{top:E}=this.scaleOffsetFromPixels(parseFloat(C.style.top)),w=xi(0,1,1-E/S.height);this.color.setHSV([h,d,f,w]),this.updateComponentValues()},handlePointerUpWheel(n){this.moveWheelSelector(n),document.removeEventListener("pointermove",this.handlePointerMoveWheel),document.removeEventListener("pointerup",this.handlePointerUpWheel)},handlePointerUpBar(n){this.moveBarSelector(n,this.$refs.bar,this.$refs.barSelector),this.$refs.wheel.style.filter=`brightness(${this.color.getHsv().z})`,document.removeEventListener("pointermove",this.handlePointerMoveBar),document.removeEventListener("pointerup",this.handlePointerUpBar)},handlePointerUpAlphaBar(n){this.moveBarSelector(n,this.$refs.alphaBar,this.$refs.alphaBarSelector),document.removeEventListener("pointermove",this.handlePointerMoveAlphaBar),document.removeEventListener("pointerup",this.handlePointerUpAlphaBar)},scaleOffsetToPixels(n,e){if(this.canvas===null)throw"[ColorPicker::scaleOffsetToPixels] canvas is null";e=e||0;const t=this.canvas.getAttribute("viewBox");if(t===null)throw"[ColorPicker::scaleOffsetToPixels] viewBox is null";const i=t.split(" ").map(r=>parseFloat(r)),s=this.canvas.getBoundingClientRect();return{left:e*i[3]/s.height,top:n*i[2]/s.width}},scaleOffsetFromPixels(n,e){if(this.canvas===null)throw"[ColorPicker::scaleOffsetFromPixels] canvas is null";e=e||0;const t=this.canvas.getAttribute("viewBox");if(t===null)throw"[ColorPicker::scaleOffsetToPixels] viewBox is null";const i=t.split(" ").map(r=>parseFloat(r)),s=this.canvas.getBoundingClientRect();return{left:e/i[3]*s.height,top:n/i[2]*s.width}},setSelector(){const n=this.defaultValue.getHsv(),[e,t,i]=[n.x,n.y,n.z],s=this.defaultValue.getAlpha(),o=this.$refs.bar.getBoundingClientRect(),a=this.$refs.barSelector,{top:l}=this.scaleOffsetToPixels((-i+1)*o.height);a.style.top=`${l}px`;const h=this.$refs.alphaBar.getBoundingClientRect(),d=this.$refs.alphaBarSelector,{top:u}=this.scaleOffsetToPixels((1-s)*h.height);d.style.top=`${u}px`;const m=e*Math.PI/180,v=Math.sin(m+Math.PI/2),p=Math.cos(m+Math.PI/2),f=this.$refs.wheel;this.$refs.wheel.style.filter=`brightness(${i})`;const S=f.getBoundingClientRect().width/2,C=this.$refs.wheelSelector,{top:E,left:w}=this.scaleOffsetToPixels(v*t*S+S,t*S*p+S);C.style.left=`${w}px`,C.style.top=`${E}px`},updateStringComponentValues(){switch(this.colorSpace){case"HSV":this.componentValues.forEach((n,e)=>{e>0&&e<3?this.stringComponentValues[e]=n.toString()+"%":this.stringComponentValues[e]=n.toString()});break;case"RGB":this.componentValues.forEach((n,e)=>{this.stringComponentValues[e]=n.toString()});break;case"HEX":for(let n=0;n<3;n++)this.stringComponentValues[n]=qs(Math.round(this.componentValues[n]));this.stringComponentValues[3]=this.componentValues[3].toString();break;case"":break;default:throw"[colorSpace] Unknown color space"}},updateComponentValues(){switch(this.colorSpace){case"HSV":const n=this.color.getHsv();this.componentValues=[Math.floor(n.x),Math.floor(n.y*100),Math.floor(n.z*100),this.color.getAlpha()];break;case"HEX":case"RGB":const e=this.color.getRgb();this.componentValues=[Math.floor(e.x),Math.floor(e.y),Math.floor(e.z),this.color.getAlpha()];break;case"":break;default:throw"[colorSpace] Unknown color space"}this.updateStringComponentValues(),this.emitNewColor()},emitNewColor(){const n=this.color.getRgb(),e=this.color.getHsl(),t=this.color.getHsv(),i=this.color.getAlpha(),s=[t.x,t.y,t.z,i],r=[e.x,e.y,e.z,i],o=[n.x,n.y,n.z,i],a=this.color.getColorStringRgba(),l=this.color.getColorStringHsla(),c=this.color.getColorStringHex();this.colorString=c.slice(0,7),this.$emit("newColorRawRgb",o),this.$emit("newColorRawHsl",r),this.$emit("newColorRawHsv",s),this.$emit("newColorStringRgb",a),this.$emit("newColorStringHex",c),this.$emit("newColorStringHsl",l)},handlePointerDownClosing(n){const t=this.$refs.container.getBoundingClientRect();n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom||(n.cancelBubble=!0,n.preventDefault(),document.addEventListener("pointerup",this.handlePointerUpClosing))},handlePointerUpClosing(n){const t=this.$refs.container.getBoundingClientRect();n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom||(n.cancelBubble=!0,n.preventDefault(),this.$nextTick(()=>{this.$emit("closeMe")}))},handleNewStringValueHSV(n,e){const t=this.color.getHsv();let i=t.x,s=t.y,r=t.z;switch(e){case 0:let o=parseInt(n);o<0?(this.stringComponentValues[e]="0",o=0):o>=360?(this.stringComponentValues[e]=(o%360).toFixed(0),o=o%360):this.stringComponentValues[e]=o.toFixed(0),i=o;break;case 1:n.includes("%")&&(n=n.replace("%",""));let a=parseInt(n);a<0?(a=0,this.stringComponentValues[e]="0%"):a>=100?(a=1,this.stringComponentValues[e]="100%"):(this.stringComponentValues[e]=a.toFixed(0)+"%",a/=100),s=a;break;case 2:n.includes("%")&&(n=n.replace("%",""));let l=parseInt(n);l<0?(l=0,this.stringComponentValues[e]="0%"):l>=100?(l=1,this.stringComponentValues[e]="100%"):(this.stringComponentValues[e]=l.toFixed(0)+"%",l/=100),r=l;break;default:throw"[ColorPicker::handleNewStringValueHSV] Invalid Index"}this.color.setHSV([i,s,r])},handleNewStringValueRGB(n,e){const t=this.color.getRgb();let i=t.x,s=t.y,r=t.z,o=parseInt(n);o<0?(o=0,this.stringComponentValues[e]="0"):o>255?(o=255,this.stringComponentValues[e]="255"):this.stringComponentValues[e]=o.toFixed(0);const a=[i,s,r];a[e]=o,this.color.setRGB(a)},handleNewStringValueHEX(n,e){const t=this.color.getHex();let i=t.x,s=t.y,r=t.z,o=parseInt(n,16);o<0?(o=0,this.stringComponentValues[e]="00"):o>255?(o=255,this.stringComponentValues[e]="FF"):this.stringComponentValues[e]=o.toString(16).toUpperCase();const a=[i,s,r];a[e]=o,this.color.setHEX(a)},setNewValue(n,e){if(e===3){let t=parseFloat(n);t<0?(t=0,this.stringComponentValues[e]="0"):t>1?(t=1,this.stringComponentValues[e]="1"):this.stringComponentValues[e]=t.toFixed(2),this.color.setAlpha(t)}else switch(this.colorSpace){case"HSV":this.handleNewStringValueHSV(n,e);break;case"RGB":this.handleNewStringValueRGB(n,e);break;case"HEX":this.handleNewStringValueHEX(n,e);break;default:throw"[ColorPicker:setNewValue] Invalid colorSpace"}this.emitNewColor(),this.setSelector()},copyColor(){let n="";switch(this.colorSpace){case"HSV":n=this.color.getColorStringHsla();break;case"HEX":n=this.color.getColorStringHex();break;case"RGB":n=this.color.getColorStringRgba();break;case"":break;default:throw"[copyColor] Unknown color space"}const e=document.createElement("input");e.value=n,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e);let i=this.$refs.copyIcon.querySelector("img");i==null||i.setAttribute("src",Ad),setTimeout(()=>{i==null||i.setAttribute("src",bo)},1500)}},watch:{colorSpace(){switch(this.colorSpace){case"HSV":this.componentNames=["H","S","V","A"];break;case"HEX":case"RGB":this.componentNames=["R","G","B","A"];break;case"":break;default:throw"[colorSpace] Unknown color space"}this.updateComponentValues()},defaultValue(){this.color.clone(this.defaultValue),this.setSelector()},hue(){}},mounted(){this.color.clone(this.defaultValue);const n=this.$refs.container;this.showBelow&&(n.style.bottom="auto",n.style.top="100%"),document.addEventListener("pointerdown",this.handlePointerDownClosing),this.$refs.barSelector.style.top="0",this.$refs.alphaBarSelector.style.top="0",this.setSelector(),this.getWheelCoordinates(),this.colorSpace="HSV"},beforeUnmount(){document.removeEventListener("pointerdown",this.handlePointerDownClosing),document.removeEventListener("pointerup",this.handlePointerUpClosing)}}),mr=n=>(Ls("data-v-82f2ff9e"),n=n(),Rs(),n),Xx={ref:"container",class:"color-picker-container"},jx={class:"color-picker-colors"},Kx={ref:"wheelSelector",class:"color-picker-wheel-selector"},Yx={ref:"barSelector",class:"color-picker-bar-selector"},Zx={class:"color-picker-alpha-bar"},Jx=mr(()=>ve("div",{class:"color-picker-alpha-bar-bg"},null,-1)),Qx={ref:"alphaBarSelector",class:"color-picker-alpha-bar-selector"},eb={class:"color-picker-space-container"},tb={class:"color-picker-space"},nb=mr(()=>ve("p",null,"HSV",-1)),ib=[nb],sb=mr(()=>ve("p",null,"RGB",-1)),rb=[sb],ob=mr(()=>ve("p",null,"HEX",-1)),ab=[ob],lb={class:"color-picker-value-container"},cb={class:"color-picker-value"},hb={class:"color-picker-additional"},db=mr(()=>ve("img",{src:bo,alt:"copy icon"},null,-1)),ub=[db];function fb(n,e,t,i,s,r){const o=Mt("input-field");return Te(),Fe("div",Xx,[ve("div",jx,[ve("div",{ref:"wheel",onPointerdown:e[0]||(e[0]=(...a)=>n.handlePointerDownWheel&&n.handlePointerDownWheel(...a)),class:"color-picker-wheel"},[ve("div",Kx,null,512)],544),ve("div",{ref:"bar",onPointerdown:e[1]||(e[1]=(...a)=>n.handlePointerDownBar&&n.handlePointerDownBar(...a)),class:"color-picker-bar"},[ve("div",Yx,null,512)],544),ve("div",Zx,[Jx,ve("div",{ref:"alphaBar",onPointerdown:e[2]||(e[2]=(...a)=>n.handlePointerDownAlphaBar&&n.handlePointerDownAlphaBar(...a)),style:ki({backgroundImage:`linear-gradient(to bottom, ${n.colorString}, transparent)`}),class:"color-picker-alpha-bar-grad"},[ve("div",Qx,null,512)],36)])]),ve("div",eb,[ve("div",tb,[ve("div",{onClick:e[3]||(e[3]=a=>n.colorSpace="HSV"),class:_t(["color-picker-space-el",{selected:n.colorSpace==="HSV"}])},ib,2),ve("div",{onClick:e[4]||(e[4]=a=>n.colorSpace="RGB"),class:_t(["color-picker-space-el",{selected:n.colorSpace==="RGB"}])},rb,2),ve("div",{onClick:e[5]||(e[5]=a=>n.colorSpace="HEX"),class:_t(["color-picker-space-el",{selected:n.colorSpace==="HEX"}])},ab,2)])]),ve("div",lb,[ve("div",cb,[(Te(!0),Fe(dt,null,Ni(n.stringComponentValues,(a,l)=>(Te(),Fe("div",{key:l,class:"color-picker-value-el"},[lt(o,{value:n.stringComponentValues[l],onNewValue:c=>n.setNewValue(c,l)},null,8,["value","onNewValue"]),ve("p",null,wt(n.componentNames[l]),1)]))),128))])]),ve("div",hb,[ve("button",{ref:"copyIcon",onClick:e[6]||(e[6]=(...a)=>n.copyColor&&n.copyColor(...a)),class:"color-picker-icons"},ub,512)])],512)}var pb=bt(qx,[["render",fb],["__scopeId","data-v-82f2ff9e"]]);var Ld=(n=>(n[n.Init=0]="Init",n[n.Active=1]="Active",n))(Ld||{});const mb=pt({data(){return{color:"",startValue:new at(ti.HSV,0,0,0,0),state:0,State:Ld}},components:{ColorPicker:pb},props:{startColor:{type:Object,required:!0},emitter:{type:Object,required:!0}},methods:{updateColor(n){this.color=n;const i=n.split("(")[1].split(")")[0].split(","),s=parseFloat(i[0]),r=parseFloat(i[1])/100,o=parseFloat(i[2])/100;let a=1;i.length===4&&(a=parseFloat(i[3])/100),this.startValue.setHSL([s,r,o,a]),this.$emit("newColor",this.startValue)},startToggle(){document.addEventListener("pointerup",this.checkToggle)},checkToggle(n){const t=this.$refs.inputActive.getBoundingClientRect();if(n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom){document.removeEventListener("pointerup",this.checkToggle),this.state=this.state===0?1:0;return}document.removeEventListener("pointerup",this.checkToggle)},updateColorInput(){this.startValue.clone(this.startColor),this.color=this.startValue.getColorStringRgba()}},watch:{startColor(){this.updateColorInput()}},mounted(){this.updateColorInput()}}),gb=n=>(Ls("data-v-61c7a37a"),n=n(),Rs(),n),vb={class:"color-picker-wrapper"},_b=gb(()=>ve("span",{class:"color-input-bg"},null,-1));function xb(n,e,t,i,s,r){const o=Mt("ColorPicker");return Te(),Fe("div",vb,[_b,ve("span",{class:"color-input",ref:"inputActive",style:ki({backgroundColor:n.color}),onPointerdown:e[0]||(e[0]=(...a)=>n.startToggle&&n.startToggle(...a))},null,36),n.state===n.State.Active?(Te(),zi(o,{key:0,ref:"colorPicker",defaultValue:n.startValue,onCloseMe:e[1]||(e[1]=a=>n.state=n.State.Init),onNewColorStringHsl:n.updateColor},null,8,["defaultValue","onNewColorStringHsl"])):Jn("",!0)])}var Rd=bt(mb,[["render",xb],["__scopeId","data-v-61c7a37a"]]);const bb=pt({data(){return{isConnected:!1}},props:{input:{type:Object,required:!0},emitter:{type:Object,required:!0}},components:{ColorPickerWrapper:Rd},computed:{},methods:{updateColor(n){this.input.getValue().value.clone(n),this.emitter.emit("recompile")},checkIsConnected(){this.isConnected=this.input.isConnected()}},mounted(){this.emitter.on("recompile",this.checkIsConnected)}}),yb={ref:"inputContainer",class:"shader-node-color-input"},Mb={key:0,class:"shader-node-color-input-active-container"};function wb(n,e,t,i,s,r){const o=Mt("color-picker-wrapper");return Te(),Fe("div",yb,[ve("span",null,wt(n.input.getName()),1),n.isConnected?Jn("",!0):(Te(),Fe("span",Mb,[lt(o,{emitter:n.emitter,startColor:n.input.getValue().value,onNewColor:n.updateColor},null,8,["emitter","startColor","onNewColor"])]))],512)}var Sb=bt(bb,[["render",wb],["__scopeId","data-v-565c1ca8"]]);const Eb=pt({components:{NumberInput:Hx,ColorInput:Sb},data(){return{value:null,link:null,state:0,addLinkRoutine:n=>{},observerRoutine:(n,e)=>{},observer:null}},props:{input:{type:Object,required:!0},renderer:{type:Object,required:!0},emitter:{type:Object,required:!0}},methods:{handlePointerDown(n){switch(this.state){case 0:this.handlePointerDownOpen(n);break;case 1:throw"[InputComponent] is busy, how is pointer down?";case 2:this.handlePointerDownLinked();break;default:throw"[InputComponent] Case not implemented: "+this.state}},handlePointerDownOpen(n){console.log("creatae"),this.link=this.renderer.createIncomingLink(n.target,this.input),this.emitter.on("addLink",this.addLinkRoutine)},handlePointerDownLinked(){if(console.log("link",this.link),this.link===null)throw"[InputComponent] link is null";this.link.detachEnd(),this.input.dropConnection(),this.emitter.emit("recompile"),this.emitter.on("addLink",this.addLinkRoutine)},handlePointerUp(n){switch(this.state){case 0:this.handlePointerUpOpen(n);break;case 1:break;case 2:break;default:throw"[InputComponent] Case not implemented: "+this.state}},handlePointerUpOpen(n){console.log("addi"),this.emitter.on("addLink",this.addLinkRoutine),this.renderer.fixLink({endElement:n.target,endNode:this.renderer,endInput:this.input})},addLink(n){console.log("linked"),this.link=n},removeListeners(){this.emitter.off("addLink",this.addLinkRoutine)},observerCallback(n,e){for(const t of n){if(!(t.type==="attributes"&&typeof t.attributeName=="string"))continue;const i=this.$refs.inputEl.getAttribute(t.attributeName);switch(i){case"open":this.setStateOpen();break;case"busy":this.setStateBusy();break;case"linked":this.setStateLinked();break;default:throw"[InputComponent] Unknown data-state: "+i}}},setStateOpen(){this.state=0,this.removeListeners()},setStateBusy(){this.state=1},setStateLinked(){this.state=2,this.removeListeners()}},mounted(){this.value=this.input.getValue().value,this.addLinkRoutine=e=>this.addLink(e);const n=this.$refs.inputEl;this.observerRoutine=(e,t)=>this.observerCallback(e,t),this.observer=new MutationObserver(this.observerCallback),this.observer.observe(n,{attributes:!0})},watch:{value(n,e){if(e===null||this.value===null)return;console.log("new value",this.value,e);const t=this.value!==""?parseFloat(this.value):0;this.input.setValue(t),this.emitter.emit("recompile")}}}),Cb={key:2},Tb={class:"shader-node-input-label"};function Pb(n,e,t,i,s,r){const o=Mt("NumberInput"),a=Mt("ColorInput");return Te(),Fe(dt,null,[ve("div",{class:_t(["shader-node-input-link",n.input.getType()]),onPointerdown:e[0]||(e[0]=l=>n.handlePointerDown(l)),onPointerup:e[1]||(e[1]=l=>n.handlePointerUp(l)),ref:"inputEl"},null,34),n.input.getType()==="number"?(Te(),zi(o,{key:0,input:n.input,emitter:n.emitter},null,8,["input","emitter"])):n.input.getType()==="color"?(Te(),zi(a,{key:1,input:n.input,emitter:n.emitter},null,8,["input","emitter"])):(Te(),Fe("span",Cb,[ve("span",Tb,wt(n.input.getType())+" - "+wt(n.state)+" - "+wt(n.input.getName()),1)]))],64)}var Ab=bt(Eb,[["render",Pb],["__scopeId","data-v-6aa3e9ed"]]);const Lb=pt({data(){return{state:0,link:null,addLinkRoutine:n=>{},observerRoutine:(n,e)=>{},observer:null}},props:{output:{type:Object,required:!0},renderer:{type:Object,required:!0},emitter:{type:Object,required:!0}},methods:{handlePointerDown(n){switch(console.log(this.state,this.state===0),this.state){case 0:this.handlePointerDownOpen(n);break;case 1:throw"[OutputComponent] is busy, how is pointer down?";case 2:console.log("create new ray, and eventually pop open menu"),this.handlePointerDownOpen(n);break;default:throw"[OutputComponent::handlePointerDown] case not implemented? "+this.state}},handlePointerDownOpen(n){this.emitter.on("addLink",this.addLinkRoutine),this.link=this.renderer.createOutgoingLink(n.target,this.output)},handlePointerUp(n){switch(this.state){case 0:this.handlePointerUpOpen(n);break;case 1:break;case 2:break;default:throw"[OutputComponent] Case not implemented: "+this.state}},handlePointerUpOpen(n){this.emitter.on("addLink",this.addLinkRoutine),this.renderer.fixLink({startElement:n.target,startNode:this.renderer,startOutput:this.output})},addLink(n){console.log("linked"),this.link=n},removeListeners(){this.emitter.off("addLink",this.addLinkRoutine)},observerCallback(n,e){for(const t of n){if(!(t.type==="attributes"&&typeof t.attributeName=="string"))continue;const i=this.$refs.outputEl.getAttribute(t.attributeName);switch(i){case"open":console.log("[OutputComponent] new state open"),this.setStateOpen();break;case"busy":console.log("[OutputComponent] new state busy"),this.setStateBusy();break;case"linked":console.log("[OutputComponent] new state linked"),this.setStateLinked();break;default:throw"[InputComponent] Unknown data-state: "+i}}},setStateOpen(){this.state=0,this.removeListeners()},setStateBusy(){this.state=1},setStateLinked(){this.state=2,this.removeListeners()}},mounted(){this.addLinkRoutine=e=>this.addLink(e);const n=this.$refs.outputEl;this.observerRoutine=(e,t)=>this.observerCallback(e,t),this.observer=new MutationObserver(this.observerCallback),this.observer.observe(n,{attributes:!0})}});function Rb(n,e,t,i,s,r){return Te(),Fe(dt,null,[ve("div",{class:_t(["shader-node-output-link",n.output.getType()]),onPointerdown:e[0]||(e[0]=o=>n.handlePointerDown(o,n.output)),onPointerup:e[1]||(e[1]=o=>n.handlePointerUp(o)),"data-state":"open",ref:"outputEl"},null,34),ve("span",null,wt(n.state)+" - "+wt(n.output.getName()),1)],64)}var Db=bt(Lb,[["render",Rb],["__scopeId","data-v-62820f96"]]);const Ib=pt({data(){return{gradientBar:void 0}},props:{color:{type:at,required:!0},position:{type:Number,required:!0},isSelected:{type:Boolean,required:!0}},computed:{stylePosition(){return`${this.position*100}%`}},methods:{computePickerPosition(n){const e=this.gradientBar.getBoundingClientRect();let t=0;return n.clientX<e.left?t=0:n.clientX>e.right?t=1:t=(n.clientX-e.left)/e.width,t},handlePointerDown(){document.addEventListener("pointermove",this.handlePointerMove),document.addEventListener("pointerup",this.handlePointerUp)},handlePointerMove(n){const e=this.computePickerPosition(n);this.$emit("newPosition",e)},handlePointerUp(n){const e=this.computePickerPosition(n);this.$emit("newPosition",e),document.removeEventListener("pointermove",this.handlePointerMove),document.removeEventListener("pointerup",this.handlePointerUp)}},mounted(){const n=this.$refs.pickContainer;this.gradientBar=n.parentNode}});function kb(n,e,t,i,s,r){return Te(),Fe("div",{ref:"pickContainer",onPointerdown:e[0]||(e[0]=(...o)=>n.handlePointerDown&&n.handlePointerDown(...o)),class:"gradient-pick-container",style:ki({left:n.stylePosition})},[ve("div",{class:_t(["gradient-pick",{selected:n.isSelected}]),style:ki({"background-color":n.color.getColorStringRgba()})},null,6)],36)}var Nb=bt(Ib,[["render",kb],["__scopeId","data-v-d1af095a"]]),Fb="/three-shader-graph/icons/arrow-down-icon.svg";const zb=pt({data(){return{hideList:!0,currentSelected:0}},props:{options:{required:!0,type:Object},selected:{required:!0,type:Number}},watch:{selected(){this.currentSelected=this.selected}},methods:{chooseOption(n){this.currentSelected=n,this.hideList=!0,this.$emit("optionChosen",this.currentSelected)}}}),Ob=n=>(Ls("data-v-25b82897"),n=n(),Rs(),n),Bb={class:"dropdown-selected"},Vb=Ob(()=>ve("img",{alt:"v",src:Fb},null,-1)),Ub=[Vb],Hb=["onClick"];function Gb(n,e,t,i,s,r){return n.options.length?(Te(),Fe("div",{key:0,class:_t(["dropdown-container",{showList:!n.hideList}])},[ve("div",Bb,[ve("p",null,wt(n.options[n.currentSelected]),1),ve("button",{class:_t(["dropdown-button",{showList:!n.hideList}]),onClick:e[0]||(e[0]=o=>n.hideList=!n.hideList)},Ub,2)]),ve("div",{class:_t(["dropdown-list",{hidden:n.hideList}])},[(Te(!0),Fe(dt,null,Ni(n.options,(o,a)=>(Te(),Fe("div",{class:"dropdown-option",key:o},[ve("p",{onClick:l=>n.chooseOption(a)},wt(o),9,Hb)]))),128))],2)],2)):Jn("",!0)}var Dd=bt(zb,[["render",Gb],["__scopeId","data-v-25b82897"]]),Wb="/three-shader-graph/icons/minus-icon.svg",$b="/three-shader-graph/icons/plus-icon.svg";const qb=pt({components:{GradientPick:Nb,ColorPickerWrapper:Rd,InputField:Pd,Dropdown:Dd},data(){return{gradient:null,pickers:[],colors:[],selectedPicker:-1,showColorPicker:!1,tempPickerPosition:"",selectedInterpolation:0}},props:{baseNode:{type:Object,required:!0},emitter:{type:Object,required:!0}},computed:{dropdownOptions(){return Object.keys(bn).filter(e=>isNaN(Number(e)))},canRemovePicker(){return this.pickers.length>2}},methods:{removePicker(){var n;if(!this.canRemovePicker){console.log("Cannot remove any more pickers");return}this.pickers.splice(this.selectedPicker,1),(n=this.gradient)==null||n.setPickers(this.pickers),this.selectedPicker===this.pickers.length&&this.selectedPicker--,this.updateGradient(),this.genColors(),this.updateGraphNode()},addPicker(){var i;let n=this.pickers[this.selectedPicker].position;this.selectedPicker!==this.pickers.length-1?n=(n+this.pickers[this.selectedPicker+1].position)/2:n=(n+this.pickers[this.selectedPicker-1].position)/2;const e={position:n,color:new at(ti.HEX,0,0,0,1)};e.color.clone(this.gradient.getColorAt(n));let t=0;this.selectedPicker!==this.pickers.length-1?(this.pickers.splice(this.selectedPicker+1,0,e),t=this.selectedPicker+1):(this.pickers.splice(this.selectedPicker-1,0,e),t=this.selectedPicker-1),this.selectedPicker=t,(i=this.gradient)==null||i.setPickers(this.pickers),this.updateGradient(),this.genColors(),this.updateGraphNode()},genColors(){this.pickers.forEach((n,e)=>{this.colors[e]=n.color})},updateColor(n){this.pickers[this.selectedPicker].color.clone(n),this.updateGradient(),this.genColors(),this.updateGraphNode()},updateGradientConstant(){const n=this.$refs.gradientBar;let e="linear-gradient(to right, ";this.pickers.forEach((t,i)=>{e+=`${t.color.getColorStringRgba()} ${Math.round(t.position*100)}%`,i!==this.pickers.length-1?e+=`, ${t.color.getColorStringRgba()} ${Math.round(this.pickers[i+1].position*100)}%, `:e+=")"}),n.style.backgroundImage=e},updateGradientLinear(){const n=this.$refs.gradientBar;let e="linear-gradient(to right, ";this.pickers.forEach((t,i)=>{e+=`${t.color.getColorStringRgba()} ${Math.round(t.position*100)}%`,i!==this.pickers.length-1?e+=", ":e+=")"}),n.style.backgroundImage=e},updateGradient(){switch(this.selectedInterpolation){case bn.Constant:this.updateGradientConstant();break;case bn.Linear:this.updateGradientLinear();break;default:throw"[GradientPicker:updateGradient] invalid interpolation"}},updateGraphNode(){var n;(n=this.gradient)==null||n.setPickers([...this.pickers]),this.emitter.emit("recompile")},toggleColorPicker(n){this.showColorPicker?this.$nextTick(()=>{this.showColorPicker=!1}):(this.showColorPicker=!0,n.cancelBubble=!0)},setPickerPosition(n){const e=this.pickers[this.selectedPicker];this.pickers[this.selectedPicker].position=n,this.pickers.sort((t,i)=>t.position-i.position),this.selectedPicker=this.pickers.indexOf(e),this.tempPickerPosition=(100*n).toFixed(0),this.updateGradient(),this.genColors(),this.updateGraphNode()},setNewPosition(n){this.tempPickerPosition=Math.random().toString(),this.$nextTick(()=>{this.tempPickerPosition=n})}},watch:{pickers(){this.updateGradient(),this.genColors(),this.updateGraphNode()},selectedPicker(){this.selectedPicker>=0&&this.selectedPicker<this.pickers.length&&(this.tempPickerPosition=(100*this.pickers[this.selectedPicker].position).toFixed(0))},tempPickerPosition(){if(this.tempPickerPosition.trim()==="")return;const n=this.pickers[this.selectedPicker];this.pickers[this.selectedPicker].position=Math.max(Math.min(parseFloat(this.tempPickerPosition)/100,1),0),this.pickers.sort((e,t)=>e.position-t.position),this.selectedPicker=this.pickers.indexOf(n),this.tempPickerPosition=(100*this.pickers[this.selectedPicker].position).toFixed(0),this.updateGradient(),this.genColors(),this.updateGraphNode()},selectedInterpolation(){var n;(n=this.gradient)==null||n.setInterpolation(this.selectedInterpolation),this.emitter.emit("recompile"),this.updateGradient(),this.genColors(),this.updateGraphNode()}},mounted(){this.gradient=this.baseNode.getGradient(),this.pickers=this.gradient.getPickers(),this.selectedPicker=0}}),Id=n=>(Ls("data-v-b6f967cc"),n=n(),Rs(),n),Xb={class:"gradient-picker-container"},jb={class:"gradient-picker-top"},Kb={class:"gradient-picker-btn"},Yb=Id(()=>ve("img",{alt:"-",src:Wb},null,-1)),Zb=[Yb],Jb=Id(()=>ve("img",{alt:"+",src:$b},null,-1)),Qb=[Jb],ey={class:"gradient-picker-interpolation"},ty={class:"gradient-picker-gradient"},ny={ref:"gradientBar",class:"gradient-picker-gradient-bar"},iy={key:0,class:"gradient-picker-picker-info"},sy={class:"gradient-color-picker-position"},ry=Ka(" Pos "),oy={class:"gradient-color-picker-color-container"};function ay(n,e,t,i,s,r){const o=Mt("dropdown"),a=Mt("GradientPick"),l=Mt("input-field"),c=Mt("color-picker-wrapper");return Te(),Fe("div",Xb,[ve("div",jb,[ve("div",Kb,[ve("button",{onPointerdown:e[0]||(e[0]=(...h)=>n.removePicker&&n.removePicker(...h)),class:_t(["gradient-picker-btn-el",{disabled:!n.canRemovePicker}])},Zb,34),ve("button",{onPointerdown:e[1]||(e[1]=(...h)=>n.addPicker&&n.addPicker(...h)),class:"gradient-picker-btn-el"},Qb,32)]),ve("div",ey,[lt(o,{options:n.dropdownOptions,selected:n.selectedInterpolation,onOptionChosen:e[2]||(e[2]=h=>{n.selectedInterpolation=h})},null,8,["options","selected"])])]),ve("div",ty,[ve("div",ny,[(Te(!0),Fe(dt,null,Ni(n.pickers,(h,d)=>(Te(),zi(a,{onPointerdown:u=>n.selectedPicker=d,key:h.id,position:h.position,color:n.colors[d],isSelected:n.selectedPicker===d,onNewPosition:n.setPickerPosition},null,8,["onPointerdown","position","color","isSelected","onNewPosition"]))),128))],512)]),n.selectedPicker>=0?(Te(),Fe("span",iy,[ve("span",sy,[ry,lt(l,{value:n.tempPickerPosition,onNewValue:n.setNewPosition},null,8,["value","onNewValue"])]),ve("div",oy,[lt(c,{emitter:n.emitter,startColor:n.colors[n.selectedPicker],onNewColor:n.updateColor},null,8,["emitter","startColor","onNewColor"])])])):Jn("",!0)])}var ly=bt(qb,[["render",ay],["__scopeId","data-v-b6f967cc"]]);const cy=pt({components:{Dropdown:Dd},data(){return{selectedFeatureOutput:-1}},props:{baseNode:{type:Object,required:!0},emitter:{type:Object,required:!0}},computed:{dropdownOptions(){return Object.keys(pi).filter(e=>isNaN(Number(e))).map(e=>e.replace(/_/g," "))}},watch:{selectedFeatureOutput(){this.baseNode.setFeatureOutput(this.selectedFeatureOutput),this.emitter.emit("recompile")}},methods:{},mounted(){this.selectedFeatureOutput=this.baseNode.getFeatureOutput()}}),hy={class:"voronoi-extra-container"},dy={class:"voronoi-extra-top"},uy={class:"voronoi-extra-interpolation"},fy=Ka(" Output: ");function py(n,e,t,i,s,r){const o=Mt("dropdown");return Te(),Fe("div",hy,[ve("div",dy,[ve("div",uy,[fy,lt(o,{options:n.dropdownOptions,selected:n.selectedFeatureOutput,onOptionChosen:e[0]||(e[0]=a=>{n.selectedFeatureOutput=a})},null,8,["options","selected"])])])])}var my=bt(cy,[["render",py],["__scopeId","data-v-5ce28100"]]);const gy=pt({components:{InputComponent:Ab,OutputComponent:Db,GradientPicker:ly,VoronoiExtra:my},data(){return{colorRamp:wd,voronoiTexture:Sd}},props:{baseNode:{type:Object,required:!0},title:{type:String,required:!0},outputs:{type:Object,required:!0},inputs:{type:Object,required:!0},renderer:{type:Object,required:!0},emitter:{type:Object,required:!0}}}),vy={class:""},_y={class:"shader-node-title"},xy={class:"shader-node-body"},by={key:0,class:"shader-node-additional"},yy={key:1,class:"shader-node-additional"};function My(n,e,t,i,s,r){const o=Mt("output-component"),a=Mt("GradientPicker"),l=Mt("VoronoiExtra"),c=Mt("input-component");return Te(),Fe("span",vy,[ve("div",_y,wt(n.title),1),ve("div",xy,[(Te(!0),Fe(dt,null,Ni(n.outputs,h=>(Te(),Fe("div",{key:h.getName(),class:"shader-node-output"},[lt(o,{output:h,renderer:n.renderer,emitter:n.emitter},null,8,["output","renderer","emitter"])]))),128)),n.baseNode instanceof n.colorRamp?(Te(),Fe("div",by,[lt(a,{baseNode:n.baseNode,emitter:n.emitter},null,8,["baseNode","emitter"])])):n.baseNode instanceof n.voronoiTexture?(Te(),Fe("div",yy,[lt(l,{baseNode:n.baseNode,emitter:n.emitter},null,8,["baseNode","emitter"])])):Jn("",!0),(Te(!0),Fe(dt,null,Ni(n.inputs,h=>(Te(),Fe("div",{key:h.getName(),class:"shader-node-input"},[lt(c,{input:h,renderer:n.renderer,emitter:n.emitter},null,8,["input","renderer","emitter"])]))),128))])])}var wy=bt(gy,[["render",My],["__scopeId","data-v-2ab048eb"]]),tt=(n=>(n[n.Initial=0]="Initial",n[n.Set=1]="Set",n[n.SelectedDown=2]="SelectedDown",n[n.SelectedUp=3]="SelectedUp",n[n.Moving=4]="Moving",n))(tt||{});class Sy{constructor(e,t,i,s,r){j(this,"canvas");j(this,"emitter");j(this,"svgNode");j(this,"movementManager");j(this,"graphNode");j(this,"pointerPos");j(this,"startDragPos");j(this,"startDragPosUnit");j(this,"state");j(this,"pointerMovedHandler");j(this,"deleteNodeHandler");j(this,"incomingLinks");j(this,"outgoingLinks");this.canvas=e,this.emitter=t,this.graphNode=new i,this.pointerPos={x:s.x,y:s.y},this.startDragPos={x:0,y:0},this.startDragPosUnit={x:0,y:0},this.pointerMovedHandler=a=>this.updatePointerPos(a),this.emitter.on("pointerMoved",this.pointerMovedHandler),this.incomingLinks=[],this.outgoingLinks=[],this.state=r?0:1;const o=this.canvas.getBoundingClientRect();this.svgNode=this.createSvg(r?this.pointerPos:{x:o.width/2,y:o.height/2}),this.movementManager=new Px(this.canvas,this.svgNode,this,this.emitter,r?0:1,this.pointerPos),this.svgNode.style.cursor=r?"move":"",this.deleteNodeHandler=()=>this.deleteNode(),this.emitter.on("deleteNode",this.deleteNodeHandler)}updatePointerPos(e){this.pointerPos.x=e.x,this.pointerPos.y=e.y}getGraphNode(){if(this.graphNode===void 0)throw"[RendererNode] graphNode is undefined";return this.graphNode}createSvg(e){if(this.graphNode===void 0)throw"[RendererNode] graphNode is undefined. Did you already delete this node?";const t=this.graphNode.getName(),i=this.graphNode.getOutputs().outputList,s=this.graphNode.getInputs().inputList,r=document.createElementNS("http://www.w3.org/2000/svg","foreignObject");r.setAttribute("class","shader-node-container");const o=document.createElement("div");o.setAttribute("class","shader-node"),mo(wy,{baseNode:this.graphNode,title:t,outputs:i,inputs:s,renderer:this,emitter:this.emitter}).mount(o),r.appendChild(o),this.canvas.appendChild(r);const l=this.canvas.getAttribute("viewBox");if(l===null)throw"[RendererNode::createSvg] viewBox is null";const c=l.split(" ").map(_=>parseFloat(_)),h=this.canvas.getBoundingClientRect();r.style.height="100%",r.style.width="100%";const d=o.getBoundingClientRect(),[u,m]=sl(c,h,[d.width,d.height]);r.setAttribute("width",`${u+4}`),r.setAttribute("height",`${m+4}`),r.style.height="",r.style.width="";const[v,p]=Cs(c,h,e.x-d.width/2,e.y-d.height/2),f={x:v,y:p};return r.setAttribute("x",`${f.x}`),r.setAttribute("y",`${f.y}`),r}deleteNode(){if(this.svgNode===void 0)throw"[RendererNode] svgNode is undefined. Did you already delete this instance?";(this.state===3||this.state===0)&&(this.svgNode.remove(),this.movementManager.removeListeners(),this.emitter.off("deleteNode",this.deleteNodeHandler),this.incomingLinks.forEach(({link:e})=>{e.deleteElement()}),this.outgoingLinks.forEach(({link:e})=>{e.deleteElement()}))}setState(e){this.state=e}createOutgoingLink(e,t){console.log("OutgoingLink");const i=e.getBoundingClientRect(),s={x:i.left+i.width/2,y:i.top+i.height/2},r={x:this.pointerPos.x,y:this.pointerPos.y};return new Yc(this.canvas,this.emitter,s,r,t,e,void 0,this)}createIncomingLink(e,t){console.log("Incoming");const i=e.getBoundingClientRect(),s={x:this.pointerPos.x,y:this.pointerPos.y},r={x:i.left+i.width/2,y:i.top+i.height/2};return new Yc(this.canvas,this.emitter,s,r,t,void 0,e,void 0,this)}removeIncomingLink(e){this.incomingLinks=this.incomingLinks.filter(({link:t})=>t!==e)}removeOutgoingLink(e){console.log(this.svgNode),this.outgoingLinks=this.outgoingLinks.filter(({link:t})=>t!==e)}addIncomingLink(e,t){console.log("addIncoming",e),this.incomingLinks.push({link:e,input:t}),this.emitter.emit("addLink",e)}addOutgoingLink(e,t){console.log("addOutgoing",e),this.outgoingLinks.push({link:e,output:t}),this.emitter.emit("addLink",e)}fixLink(e){console.log("fix"),this.emitter.emit("fixLink",e)}moveLinks(){this.incomingLinks.forEach(({link:e})=>{e.moveLink()}),this.outgoingLinks.forEach(({link:e})=>{e.moveLink()})}}class Ey{constructor(e){j(this,"emitter");this.emitter=e;const t=i=>this.handleKeyDown(i);addEventListener("keydown",t)}handleKeyDown(e){console.log(e),!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="A"?this.emitter.emit("showMenu"):!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="W"?this.emitter.emit("rotateView"):!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&e.key==="x"&&(console.log("delete Node"),this.emitter.emit("deleteNode"))}}var Ei,ms,gs,vs,Ci,An,Ti,Pi,_s;class kd{constructor(){Qe(this,Ei,void 0);Qe(this,ms,void 0);Qe(this,gs,void 0);Qe(this,vs,void 0);Qe(this,Ci,void 0);Qe(this,An,void 0);Qe(this,Ti,void 0);Qe(this,Pi,void 0);Qe(this,_s,void 0);Ve(this,Ei,[]),Ve(this,ms,[]),Ve(this,gs,[]),Ve(this,vs,[]),Ve(this,Ci,[]),Ve(this,An,{}),Ve(this,Ti,[]),Ve(this,Pi,[]),Ve(this,_s,[])}getDefines(){return Me(this,Ei)}getVaryings(){return Me(this,ms)}getAttributes(){return Me(this,gs)}getUniforms(){return Me(this,vs)}getMain(){return Me(this,Ci)}getFunctions(){return Me(this,An)}generateVariableID(e){let t=0;Me(this,_s).forEach(s=>{s.startsWith(e)&&t++});const i=e+t;return Me(this,_s).push(i),i}compileVariables(e,t){let i="";return t.forEach(s=>{i+=e+" "+s.type+" "+s.name+`;
`}),i}compileDefines(){let e="";return Me(this,Ei).forEach(t=>{e+="#define "+t.name+" "+t.value+`
`}),e}compileVaryings(){return this.compileVariables("varying",Me(this,ms))}compileAttributes(){return this.compileVariables("attribute",Me(this,gs))}compileUniforms(){return this.compileVariables("uniform",Me(this,vs))}compileIns(){return this.compileVariables("in",Me(this,Ti))}compileOuts(){return this.compileVariables("out",Me(this,Pi))}compileMain(){let e="";return Me(this,Ci).forEach(t=>{e+=t+`
`}),e}compileFunctions(){let e="";for(const t in Me(this,An))e+=Me(this,An)[t]+`
`;return e}addToDefines(e){Me(this,Ei).push(e)}addToMain(e){Me(this,Ci).push(e)}addToIns(e){if(Me(this,Ti).find(t=>t.name===e.name)){console.log(`[CommonShader] In variable ${e.name} is already present`);return}Me(this,Ti).push(e)}addToOuts(e){if(Me(this,Pi).find(t=>t.name===e.name)){console.log(`[CommonShader] Out variable ${e.name} is already present`);return}Me(this,Pi).push(e)}addAllToFunctions(e){for(const t in e)this.addToFunctions(t,e[t])}addToFunctions(e,t){if(e in Me(this,An)){console.log(`[CommonShader] Function ${e} is already present`);return}Me(this,An)[e]=t}}Ei=new WeakMap,ms=new WeakMap,gs=new WeakMap,vs=new WeakMap,Ci=new WeakMap,An=new WeakMap,Ti=new WeakMap,Pi=new WeakMap,_s=new WeakMap;class Cy extends kd{constructor(){super()}generateCode(){return`
${super.compileDefines()}
${super.compileUniforms()}
${super.compileAttributes()}
${super.compileVaryings()}
${super.compileIns()}
${super.compileOuts()}
out vec3 projPosition;
${super.compileFunctions()}
void main() {
  projPosition = position;
  ${super.compileMain()}

}`}}class Ty extends kd{constructor(){super()}generateCode(){return`
${super.compileDefines()}
// Uniforms
${super.compileUniforms()}
// Attributes 
${super.compileAttributes()}
// Varyings
${super.compileVaryings()}
// Ins 
in vec3 projPosition;
${super.compileIns()}
// Outs 
${super.compileOuts()}
// Functions
${super.compileFunctions()}

// Main
void main() {
  ${super.compileMain()}
}
`}}var Ai;class Py{constructor(e){Qe(this,Ai,void 0);Ve(this,Ai,e)}setStartNode(e){Ve(this,Ai,e)}compile(){if(Me(this,Ai)===null)throw"[CodeManager] No start node specified!";const e=new Cy,t=new Ty,i=Me(this,Ai).compileOutput(e,t);return[i[0].trim(),i[1].trim()]}}Ai=new WeakMap;class Ay{constructor(e,t){j(this,"canvas");j(this,"widthPx");j(this,"widthUnits");j(this,"heightPx");j(this,"heightUnits");j(this,"emitter");j(this,"pointerPos");j(this,"state");j(this,"wheelHandler");j(this,"resetStateTimeout");this.canvas=e;const i=this.canvas.getBoundingClientRect();this.widthPx=i.width,this.widthUnits=i.width,this.heightPx=i.height,this.heightUnits=i.height,this.emitter=t,this.state=0,this.pointerPos={x:0,y:0};const s=r=>this.handlePointerPosition(r);this.emitter.on("pointerMoved",s),this.wheelHandler=r=>this.handleWheelInitial(r),this.canvas.addEventListener("wheel",this.wheelHandler),this.resetStateTimeout=null,this.emitter.on("resizeGraph",()=>{const r=this.canvas.getBoundingClientRect(),o=this.canvas.getAttribute("viewBox");if(o===null)throw"[ZoomPanManager::handleResize] viewBox is null";const a=o.split(" ").map(u=>parseFloat(u)),l=this.widthUnits,c=this.heightUnits;this.widthUnits*=r.width/this.widthPx,this.heightUnits*=r.height/this.heightPx;const h=Math.abs(l-this.widthUnits)<1e-7,d=Math.abs(c-this.heightUnits)<1e-7;if(h&&!d){const u=a[1],m=a[3],v=u+m;a[1]=v-this.heightUnits}a[2]=this.widthUnits,a[3]=this.heightUnits,this.canvas.setAttribute("viewBox",a.join(" ")),this.widthPx=r.width,this.heightPx=r.height})}handlePointerPosition(e){this.pointerPos.x=e.x,this.pointerPos.y=e.y}handleWheelInitial(e){this.canvas.removeEventListener("wheel",this.wheelHandler),Math.abs(e.deltaX)<.01&&Math.abs(e.deltaY)!==2?(this.state=1,this.wheelHandler=t=>this.handleWheelZoom(t),this.canvas.addEventListener("wheel",this.wheelHandler)):(this.state=2,this.wheelHandler=t=>this.handleWheelPan(t),this.canvas.addEventListener("wheel",this.wheelHandler)),this.wheelHandler(e)}handleWheelZoom(e){e.preventDefault();const t=this.canvas.getAttribute("viewBox");if(t===null)throw"[ShaderGraphRenderer] No viewBox";const i=t.split(" ").map(c=>parseFloat(c)),s=this.canvas.getBoundingClientRect(),r=Cs(i,s,this.pointerPos.x,this.pointerPos.y),o=r[0],a=r[1],l=.01;i[0]-=o,i[1]-=a,i[0]*=1+e.deltaY*l,i[1]*=1+e.deltaY*l,i[2]*=1+e.deltaY*l,i[3]*=1+e.deltaY*l,i[0]+=o,i[1]+=a,this.widthUnits=i[2],this.heightUnits=i[3],this.canvas.setAttribute("viewBox",i.join(" ")),this.checkTimeout()}handleWheelPan(e){e.preventDefault();const t=this.canvas.getAttribute("viewBox");if(t===null)throw"[ShaderGraphRenderer::handleWheelPan] No viewBox";const i=t.split(" ").map(s=>parseFloat(s));i[0]+=e.deltaX,i[1]+=e.deltaY,this.canvas.setAttribute("viewBox",i.join(" ")),this.checkTimeout()}checkTimeout(){this.resetStateTimeout!==null&&(clearTimeout(this.resetStateTimeout),this.resetStateTimeout=null),this.resetStateTimeout=setTimeout(()=>{this.state=0,this.canvas.removeEventListener("wheel",this.wheelHandler),this.wheelHandler=e=>this.handleWheelInitial(e),this.canvas.addEventListener("wheel",this.wheelHandler),this.resetStateTimeout=null},150)}}class Ly{constructor(e,t){j(this,"container");j(this,"canvas");j(this,"zoomPanManager");j(this,"emitter");j(this,"menu");j(this,"keyboardHandler");j(this,"pointerPos");j(this,"outputNode");j(this,"codeManager");j(this,"style");this.container=e,this.style=`
      #renderer-canvas {
        height: 100%;
        width: 100%;
        position: relative;
      }
    `,this.addStyles(),this.canvas=this.createCanvas(),this.setupCanvas(),this.emitter=t,this.zoomPanManager=new Ay(this.canvas,this.emitter),this.pointerPos={x:0,y:0},this.keyboardHandler=new Ey(this.emitter),this.menu=new Tx(this.container,this.emitter,this.pointerPos);const i=s=>this.handlePointerMove(s);addEventListener("pointermove",i),this.emitter.on("createNode",s=>{this.handleNodeCreation(s,!0)}),this.outputNode=this.handleNodeCreation(Md,!1),this.codeManager=new Py(this.outputNode),this.emitter.on("recompile",()=>{const s=this.codeManager.compile();this.emitter.emit("newShaders",s)})}addStyles(){const e=document.createElement("style");e.innerText=this.style,document.head.appendChild(e)}createCanvas(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.setAttribute("id","renderer-canvas"),e.setAttribute("preserveAspectRatio","xMinYMin"),this.container.appendChild(e),e}setupCanvas(){const e=this.canvas.getBoundingClientRect();this.canvas.setAttribute("viewBox",`0 0 ${e.width} ${e.height}`)}handlePointerMove(e){this.pointerPos.x=e.clientX,this.pointerPos.y=e.clientY,this.emitter.emit("pointerMoved",this.pointerPos)}handleNodeCreation(e,t){return new Sy(this.canvas,this.emitter,e,this.pointerPos,t).getGraphNode()}}var Ry=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Nd={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(Ry,function(){var t=function(){function i(m){return o.appendChild(m.dom),m}function s(m){for(var v=0;v<o.children.length;v++)o.children[v].style.display=v===m?"block":"none";r=m}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(m){m.preventDefault(),s(++r%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,h=i(new t.Panel("FPS","#0ff","#002")),d=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=i(new t.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:o,addPanel:i,showPanel:s,begin:function(){a=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(d.update(m-a,200),m>l+1e3&&(h.update(1e3*c/(m-l),100),l=m,c=0,u)){var v=performance.memory;u.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return m},update:function(){a=this.end()},domElement:o,setMode:s}};return t.Panel=function(i,s,r){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,u=3*c,m=2*c,v=3*c,p=15*c,f=74*c,_=30*c,S=document.createElement("canvas");S.width=h,S.height=d,S.style.cssText="width:80px;height:48px";var C=S.getContext("2d");return C.font="bold "+9*c+"px Helvetica,Arial,sans-serif",C.textBaseline="top",C.fillStyle=r,C.fillRect(0,0,h,d),C.fillStyle=s,C.fillText(i,u,m),C.fillRect(v,p,f,_),C.fillStyle=r,C.globalAlpha=.9,C.fillRect(v,p,f,_),{dom:S,update:function(E,w){o=Math.min(o,E),a=Math.max(a,E),C.fillStyle=r,C.globalAlpha=1,C.fillRect(0,0,h,p),C.fillStyle=s,C.fillText(l(E)+" "+i+" ("+l(o)+"-"+l(a)+")",u,m),C.drawImage(S,v+c,p,f-c,_,v,p,f-c,_),C.fillRect(v+f-c,p,c,_),C.fillStyle=r,C.globalAlpha=.9,C.fillRect(v+f-c,p,c,l((1-E/w)*_))}}},t})})(Nd);var Dy=Nd.exports,Iy="/three-shader-graph/icons/close-icon.svg";const ky=pt({data(){return{localShader:""}},props:{name:{required:!0,type:String},shader:{required:!0,type:String}},methods:{copyShader(){const n=document.createElement("textarea");n.value=this.shader,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),console.log("Copied",n.value);let t=this.$refs.copyIcon.querySelector("img");t==null||t.setAttribute("src",Ad),setTimeout(()=>{t==null||t.setAttribute("src",bo)},1500)},handlePointerDown(n){const t=this.$refs.viewerBody.getBoundingClientRect();if(n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom)return;let i=document.getElementById("viewer");if(i===null)throw"[ShaderViewer:mounted] container is null";i.addEventListener("pointerup",this.handlePointerUp)},handlePointerUp(){this.closeViewer()},closeViewer(){let n=document.getElementById("viewer");if(n===null)throw"[ShaderViewer:mounted] container is null";n.remove()}},created(){this.localShader=this.shader.replace(/\n/g,"<br/>")},mounted(){let n=document.getElementById("viewer");if(n===null)throw"[ShaderViewer:mounted] container is null";n.addEventListener("pointerdown",this.handlePointerDown)},beforeUnmount(){let n=document.getElementById("viewer");if(n===null)throw"[ShaderViewer:mounted] container is null";n.removeEventListener("pointerdown",this.handlePointerDown),n.removeEventListener("pointerup",this.handlePointerUp)}}),Fd=n=>(Ls("data-v-360063a3"),n=n(),Rs(),n),Ny={ref:"viewerBody",class:"shader-viewer"},Fy=["innerHTML"],zy=Fd(()=>ve("img",{src:bo,alt:"copy icon"},null,-1)),Oy=[zy],By=Fd(()=>ve("img",{src:Iy,alt:"x"},null,-1)),Vy=[By];function Uy(n,e,t,i,s,r){return Te(),Fe("div",Ny,[ve("p",null,wt(n.name)+" Shader",1),ve("div",{class:"shader-viewer-text",innerHTML:n.localShader},null,8,Fy),ve("button",{ref:"copyIcon",onClick:e[0]||(e[0]=(...o)=>n.copyShader&&n.copyShader(...o)),class:"shader-viewer-icons"},Oy,512),ve("button",{onClick:e[1]||(e[1]=(...o)=>n.closeViewer&&n.closeViewer(...o)),class:"shader-viewer-close-icon"},Vy)],512)}var Hy=bt(ky,[["render",Uy],["__scopeId","data-v-360063a3"]]);class Gy{constructor(e,t){j(this,"height");j(this,"width");j(this,"canvas");j(this,"stats");j(this,"emitter");j(this,"scene");j(this,"camera");j(this,"renderer");j(this,"mesh");j(this,"clock");j(this,"startedAnimation");j(this,"shaders");const i=e.getBoundingClientRect();this.height=i.height,this.width=i.width,this.canvas=e;const s=document.createElement("div");if(s.style.gridArea="canvas",s.style.width="100%",s.style.height="100%",this.stats=new Dy,this.stats.showPanel(0),this.stats.dom.style.position="relative",this.stats.dom.style.right="0",this.stats.dom.style.left="",this.stats.dom.style.display="flex",this.stats.dom.style.justifyContent="flex-end",this.canvas.parentNode===null)throw"[Scene:constructor] canvas parent node is null";this.canvas.parentNode.appendChild(s),s.appendChild(this.stats.dom),this.emitter=t,this.camera=new Ht(75,this.width/this.height,.1,1e3),this.camera.position.z=-10,this.camera.lookAt(0,0,0),this.scene=new lx,this.scene.add(this.camera),this.renderer=new vd({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height);const[r,o]=["",""],a=new nl(1,124,124),l=new Mn({vertexShader:r,fragmentShader:o});this.mesh=new Rn(a,l),this.mesh.position.set(0,0,0),this.scene.add(this.mesh),this.clock=new yx,this.shaders={fragment:"",vertex:""},addEventListener("resize",()=>this.handleResize()),this.emitter.on("resizeCanvas",()=>this.handleResize()),this.startedAnimation=!1,this.emitter.on("newShaders",c=>this.updateShaders(c)),this.emitter.emit("recompile"),this.emitter.on("exportFragment",()=>this.exportShader("fragment")),this.emitter.on("exportVertex",()=>this.exportShader("vertex"))}animate(){this.stats.begin(),this.renderer.render(this.scene,this.camera);const e=this.clock.getDelta();this.mesh.rotation.z+=e*Math.PI/6,this.mesh.rotation.x+=e*Math.PI/6,this.mesh.rotation.y+=e*Math.PI/6,this.stats.end(),requestAnimationFrame(()=>this.animate())}updateShaders([e,t]){const i=this.mesh.material;this.shaders.fragment=t,this.shaders.vertex=e,i.fragmentShader=t,i.vertexShader=e,i.needsUpdate=!0,this.startedAnimation||(this.startedAnimation=!0,this.animate())}handleResize(){this.canvas.style.width="",this.canvas.style.height="",this.canvas.style.minHeight="1px",this.canvas.removeAttribute("width"),this.canvas.removeAttribute("height");const e=this.canvas.getBoundingClientRect();this.height=e.height,this.width=e.width,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.canvas.style.minHeight=""}exportShader(e){console.log("export",e);const t=document.getElementById("app");if(t===null)throw"[Scene::exportShader] app is null";const i=document.createElement("div");i.setAttribute("id","viewer"),t.appendChild(i),console.log(e,this.shaders),mo(Hy,{shader:this.shaders[e],name:e}).mount(i)}}class Wy{constructor(e,t,i,s,r){j(this,"emitter");j(this,"containerElement");j(this,"svgElement");j(this,"canvasElement");j(this,"dividerElement");j(this,"layout");j(this,"dividerWidth");j(this,"dividerInitialPosition");j(this,"dividerMoveHandler");j(this,"dividerUpHandler");this.emitter=e,this.containerElement=t,this.svgElement=i,this.canvasElement=s,this.dividerElement=r,this.dividerWidth=8,this.layout=0,addEventListener("resize",()=>{this.emitter.emit("resizeGraph"),this.emitter.emit("resizeCanvas")}),this.dividerMoveHandler=o=>this.handleDividerPointerMove(o),this.dividerUpHandler=()=>this.handleDividerPointerUp(),this.dividerInitialPosition={x:0,y:0},this.dividerElement.addEventListener("pointerdown",o=>this.handleDividerPointerDown(o)),this.emitter.on("rotateView",()=>this.rotateView())}handleDividerPointerDown(e){addEventListener("pointermove",this.dividerMoveHandler),addEventListener("pointerup",this.dividerUpHandler),this.dividerInitialPosition.x=e.clientX/innerWidth*100.5,this.dividerInitialPosition.y=e.clientY/innerHeight*100.5,this.canvasElement.style.width="0",this.canvasElement.style.height="0",this.canvasElement.style.minWidth="1px",this.canvasElement.style.minHeight="1px",this.canvasElement.removeAttribute("height"),this.canvasElement.removeAttribute("width")}handleDividerPointerMove(e){const t=e.clientX-this.dividerWidth/2,i=innerHeight-e.clientY-this.dividerWidth/2;switch(this.layout){case 0:t>10&&(this.containerElement.style.gridTemplateColumns=`${t}px ${this.dividerWidth}px ${innerWidth-e.clientX-this.dividerWidth/2}fr`);break;case 1:i>10&&(this.containerElement.style.gridTemplateRows=`26px ${e.clientY-26-this.dividerWidth/2}px ${this.dividerWidth}px ${i}px`);break;default:throw"[ViewManager] Layout type is unknown: "+this.layout}this.emitter.emit("resizeGraph")}handleDividerPointerUp(){removeEventListener("pointermove",this.dividerMoveHandler),removeEventListener("pointerup",this.dividerUpHandler),this.emitter.emit("resizeCanvas"),this.emitter.emit("resizeGraph")}rotateView(){if(this.layout===0)this.containerElement.style.gridTemplateRows=`26px 30fr ${this.dividerWidth}px 70fr`,this.containerElement.style.gridTemplateColumns="1fr",this.containerElement.style.gridTemplateAreas="'menu' 'canvas' 'divider' 'svg'",this.dividerElement.style.cursor="row-resize",this.layout=1;else if(this.layout===1)this.containerElement.style.gridTemplateColumns="",this.containerElement.style.gridTemplateRows="",this.containerElement.style.gridTemplateAreas="",this.dividerElement.style.cursor="",this.layout=0;else throw"[ViewManager] Layout type is unknown: "+this.layout;this.emitter.emit("resizeCanvas"),this.emitter.emit("resizeGraph")}}const $y=pt({data(){return{}},props:{options:{required:!0,type:Object}},methods:{runCallback(n,e){n.cancelBubble=!0,e(),this.$emit("closeMe")},handlePointerDownClosing(n){const t=this.$refs.container.getBoundingClientRect();n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom||(n.cancelBubble=!0,n.preventDefault(),document.addEventListener("pointerup",this.handlePointerUpClosing))},handlePointerUpClosing(n){const t=this.$refs.container.getBoundingClientRect();n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom||(n.cancelBubble=!0,n.preventDefault(),this.$nextTick(()=>{this.$emit("closeMe")}))}},mounted(){document.addEventListener("pointerdown",this.handlePointerDownClosing)},beforeUnmount(){document.removeEventListener("pointerdown",this.handlePointerDownClosing),document.removeEventListener("pointerup",this.handlePointerUpClosing)}}),qy={ref:"container",class:_t(["dropdown-list"])},Xy=["onClick"];function jy(n,e,t,i,s,r){return Te(),Fe("div",qy,[(Te(!0),Fe(dt,null,Ni(n.options,o=>(Te(),Fe("div",{class:"dropdown-option",key:o.name},[ve("p",{onClick:a=>n.runCallback(a,o.callback)},wt(o.name),9,Xy)]))),128))],512)}var Ky=bt($y,[["render",jy],["__scopeId","data-v-06fade16"]]);const Zc="Add",Yy="Export",Zy=pt({props:{emitter:{type:Object,required:!0}},components:{MenuDropdown:Ky},data(){return{selectedMenu:-1,menuElements:[{name:Zc,options:[]},{name:Yy,options:[{name:"Fragment Shader",callback:()=>this.emitter.emit("exportFragment")},{name:"Vertex Shader",callback:()=>this.emitter.emit("exportVertex")}]}]}},methods:{toggleDropdown(n){this.selectedMenu===n?this.selectedMenu=-1:this.selectedMenu=n},changeDropdown(n){this.selectedMenu!==-1&&(this.selectedMenu=n)},closeMenu(){this.selectedMenu=-1}},created(){const n=this.menuElements.find(t=>t.name===Zc);Ed.getNodesList().forEach(({name:t,class:i})=>{n==null||n.options.push({name:t,callback:()=>this.emitter.emit("createNode",i)})})}}),Jy={id:"manager-menu"},Qy=["onPointerup","onPointerover"],eM={class:"manager-menu-el-text"};function tM(n,e,t,i,s,r){const o=Mt("menu-dropdown");return Te(),Fe("div",Jy,[(Te(!0),Fe(dt,null,Ni(n.menuElements,(a,l)=>(Te(),Fe("div",{key:a.name,class:"manager-menu-el",onPointerup:c=>n.toggleDropdown(l),onPointerover:c=>n.changeDropdown(l)},[ve("p",eM,wt(a.name),1),n.selectedMenu===l?(Te(),zi(o,{key:0,options:a.options,onPointerup:e[0]||(e[0]=c=>{c.cancelBubble=!0}),onCloseMe:n.closeMenu},null,8,["options","onCloseMe"])):Jn("",!0)],40,Qy))),128))])}var nM=bt(Zy,[["render",tM],["__scopeId","data-v-40210fd4"]]);const iM=pt({components:{MenuBar:nM},props:{emitter:{type:Object,required:!0},callback:{required:!0,type:Function}},mounted(){this.callback(this.$refs.container,this.$refs.graphView,this.$refs.divider,this.$refs.canvasView)}}),sM={ref:"container",id:"manager-container"},rM={ref:"graphView",id:"manager-svg"},oM={ref:"divider",id:"manager-divider"},aM={ref:"canvasView",id:"manager-canvas"};function lM(n,e,t,i,s,r){const o=Mt("menu-bar");return Te(),Fe("div",sM,[lt(o,{emitter:n.emitter},null,8,["emitter"]),ve("div",rM,null,512),ve("div",oM,null,512),ve("canvas",aM,null,512)],512)}var cM=bt(iM,[["render",lM],["__scopeId","data-v-f34ad56e"]]);class hM{constructor(e){j(this,"element");j(this,"emitter");j(this,"svgElement");j(this,"containerElement");j(this,"canvasElement");j(this,"dividerElement");j(this,"sceneManager");j(this,"graphManager");j(this,"viewManager");this.element=e,this.emitter=mp(),mo(cM,{emitter:this.emitter,callback:(i,s,r,o)=>{this.setElements(i,s,r,o)}}).mount(this.element)}setElements(e,t,i,s){this.containerElement=e,this.svgElement=t,this.dividerElement=i,this.canvasElement=s,this.graphManager=this.createGraphManager(),this.sceneManager=this.createScene(),this.viewManager=new Wy(this.emitter,this.containerElement,this.svgElement,this.canvasElement,this.dividerElement)}createScene(){if(this.canvasElement===void 0)throw"[Manager::createScene] canvasElement is undefined";return new Gy(this.canvasElement,this.emitter)}createGraphManager(){if(this.svgElement===void 0)throw"[Manager::createGraphManager] svgElement is undefined";return new Ly(this.svgElement,this.emitter)}}const dM=pt({data(){return{scale:1}},mounted(){new hM(this.$refs.container)}}),uM={ref:"container",id:"container"};function fM(n,e,t,i,s,r){return Te(),Fe("div",uM,null,512)}var pM=bt(dM,[["render",fM],["__scopeId","data-v-d41e5f24"]]);const mM=pt({__name:"App",setup(n){return(e,t)=>(Te(),zi(pM,{msg:"Hello Vue 3 + TypeScript + Vite"}))}});mo(mM).mount("#app");
