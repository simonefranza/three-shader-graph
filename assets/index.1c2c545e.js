var Id=Object.defineProperty;var kd=(n,e,t)=>e in n?Id(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var K=(n,e,t)=>(kd(n,typeof e!="symbol"?e+"":e,t),t),il=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var ye=(n,e,t)=>(il(n,e,"read from private field"),t?t.call(n):e.get(n)),Qe=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},ze=(n,e,t,i)=>(il(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t);const Nd=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};Nd();function Pa(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Fd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bd=Pa(Fd);function Xc(n){return!!n||n===""}function Zn(n){if(Re(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=ct(i)?Ud(i):Zn(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(ct(n))return n;if(ht(n))return n}}const zd=/;(?![^(]*\))/g,Od=/:(.+)/;function Ud(n){const e={};return n.split(zd).forEach(t=>{if(t){const i=t.split(Od);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function vt(n){let e="";if(ct(n))e=n;else if(Re(n))for(let t=0;t<n.length;t++){const i=vt(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const It=n=>ct(n)?n:n==null?"":Re(n)||ht(n)&&(n.toString===Kc||!Ie(n.toString))?JSON.stringify(n,jc,2):String(n),jc=(n,e)=>e&&e.__v_isRef?jc(n,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:Yc(e)?{[`Set(${e.size})`]:[...e.values()]}:ht(e)&&!Re(e)&&!Jc(e)?String(e):e,et={},ss=[],Zt=()=>{},Vd=()=>!1,Hd=/^on[^a-z]/,Qr=n=>Hd.test(n),Aa=n=>n.startsWith("onUpdate:"),St=Object.assign,La=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Gd=Object.prototype.hasOwnProperty,He=(n,e)=>Gd.call(n,e),Re=Array.isArray,rs=n=>eo(n)==="[object Map]",Yc=n=>eo(n)==="[object Set]",Ie=n=>typeof n=="function",ct=n=>typeof n=="string",Ra=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",Zc=n=>ht(n)&&Ie(n.then)&&Ie(n.catch),Kc=Object.prototype.toString,eo=n=>Kc.call(n),Wd=n=>eo(n).slice(8,-1),Jc=n=>eo(n)==="[object Object]",Da=n=>ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ur=Pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),to=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},$d=/-(\w)/g,bn=to(n=>n.replace($d,(e,t)=>t?t.toUpperCase():"")),qd=/\B([A-Z])/g,Ms=to(n=>n.replace(qd,"-$1").toLowerCase()),no=to(n=>n.charAt(0).toUpperCase()+n.slice(1)),bo=to(n=>n?`on${no(n)}`:""),qr=(n,e)=>!Object.is(n,e),Vr=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Xr=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},ra=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let sl;const Xd=()=>sl||(sl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let hn;class jd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&hn&&(this.parent=hn,this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=hn;try{return hn=this,e()}finally{hn=t}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Yd(n,e=hn){e&&e.active&&e.effects.push(n)}const Ia=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Qc=n=>(n.w&Kn)>0,eh=n=>(n.n&Kn)>0,Zd=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Kn},Kd=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];Qc(s)&&!eh(s)?s.delete(n):e[t++]=s,s.w&=~Kn,s.n&=~Kn}e.length=t}},oa=new WeakMap;let Ns=0,Kn=1;const aa=30;let Wt;const Ci=Symbol(""),la=Symbol("");class ka{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Yd(this,i)}run(){if(!this.active)return this.fn();let e=Wt,t=qn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Wt,Wt=this,qn=!0,Kn=1<<++Ns,Ns<=aa?Zd(this):rl(this),this.fn()}finally{Ns<=aa&&Kd(this),Kn=1<<--Ns,Wt=this.parent,qn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Wt===this?this.deferStop=!0:this.active&&(rl(this),this.onStop&&this.onStop(),this.active=!1)}}function rl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let qn=!0;const th=[];function ws(){th.push(qn),qn=!1}function Ss(){const n=th.pop();qn=n===void 0?!0:n}function kt(n,e,t){if(qn&&Wt){let i=oa.get(n);i||oa.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Ia()),nh(s)}}function nh(n,e){let t=!1;Ns<=aa?eh(n)||(n.n|=Kn,t=!Qc(n)):t=!n.has(Wt),t&&(n.add(Wt),Wt.deps.push(n))}function Dn(n,e,t,i,s,r){const a=oa.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Re(n))a.forEach((l,c)=>{(c==="length"||c>=i)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Re(n)?Da(t)&&o.push(a.get("length")):(o.push(a.get(Ci)),rs(n)&&o.push(a.get(la)));break;case"delete":Re(n)||(o.push(a.get(Ci)),rs(n)&&o.push(a.get(la)));break;case"set":rs(n)&&o.push(a.get(Ci));break}if(o.length===1)o[0]&&ca(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);ca(Ia(l))}}function ca(n,e){const t=Re(n)?n:[...n];for(const i of t)i.computed&&ol(i);for(const i of t)i.computed||ol(i)}function ol(n,e){(n!==Wt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Jd=Pa("__proto__,__v_isRef,__isVue"),ih=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ra)),Qd=Na(),eu=Na(!1,!0),tu=Na(!0),al=nu();function nu(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Je(this);for(let r=0,a=this.length;r<a;r++)kt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(Je)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ws();const i=Je(this)[e].apply(this,t);return Ss(),i}}),n}function Na(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?_u:lh:e?ah:oh).get(i))return i;const a=Re(i);if(!n&&a&&He(al,s))return Reflect.get(al,s,r);const o=Reflect.get(i,s,r);return(Ra(s)?ih.has(s):Jd(s))||(n||kt(i,"get",s),e)?o:Mt(o)?a&&Da(s)?o:o.value:ht(o)?n?ch(o):za(o):o}}const iu=sh(),su=sh(!0);function sh(n=!1){return function(t,i,s,r){let a=t[i];if(Ws(a)&&Mt(a)&&!Mt(s))return!1;if(!n&&!Ws(s)&&(ha(s)||(s=Je(s),a=Je(a)),!Re(t)&&Mt(a)&&!Mt(s)))return a.value=s,!0;const o=Re(t)&&Da(i)?Number(i)<t.length:He(t,i),l=Reflect.set(t,i,s,r);return t===Je(r)&&(o?qr(s,a)&&Dn(t,"set",i,s):Dn(t,"add",i,s)),l}}function ru(n,e){const t=He(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Dn(n,"delete",e,void 0),i}function ou(n,e){const t=Reflect.has(n,e);return(!Ra(e)||!ih.has(e))&&kt(n,"has",e),t}function au(n){return kt(n,"iterate",Re(n)?"length":Ci),Reflect.ownKeys(n)}const rh={get:Qd,set:iu,deleteProperty:ru,has:ou,ownKeys:au},lu={get:tu,set(n,e){return!0},deleteProperty(n,e){return!0}},cu=St({},rh,{get:eu,set:su}),Fa=n=>n,io=n=>Reflect.getPrototypeOf(n);function pr(n,e,t=!1,i=!1){n=n.__v_raw;const s=Je(n),r=Je(e);t||(e!==r&&kt(s,"get",e),kt(s,"get",r));const{has:a}=io(s),o=i?Fa:t?Va:Ua;if(a.call(s,e))return o(n.get(e));if(a.call(s,r))return o(n.get(r));n!==s&&n.get(e)}function mr(n,e=!1){const t=this.__v_raw,i=Je(t),s=Je(n);return e||(n!==s&&kt(i,"has",n),kt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function gr(n,e=!1){return n=n.__v_raw,!e&&kt(Je(n),"iterate",Ci),Reflect.get(n,"size",n)}function ll(n){n=Je(n);const e=Je(this);return io(e).has.call(e,n)||(e.add(n),Dn(e,"add",n,n)),this}function cl(n,e){e=Je(e);const t=Je(this),{has:i,get:s}=io(t);let r=i.call(t,n);r||(n=Je(n),r=i.call(t,n));const a=s.call(t,n);return t.set(n,e),r?qr(e,a)&&Dn(t,"set",n,e):Dn(t,"add",n,e),this}function hl(n){const e=Je(this),{has:t,get:i}=io(e);let s=t.call(e,n);s||(n=Je(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&Dn(e,"delete",n,void 0),r}function dl(){const n=Je(this),e=n.size!==0,t=n.clear();return e&&Dn(n,"clear",void 0,void 0),t}function vr(n,e){return function(i,s){const r=this,a=r.__v_raw,o=Je(a),l=e?Fa:n?Va:Ua;return!n&&kt(o,"iterate",Ci),a.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function _r(n,e,t){return function(...i){const s=this.__v_raw,r=Je(s),a=rs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),h=t?Fa:e?Va:Ua;return!e&&kt(r,"iterate",l?la:Ci),{next(){const{value:d,done:u}=c.next();return u?{value:d,done:u}:{value:o?[h(d[0]),h(d[1])]:h(d),done:u}},[Symbol.iterator](){return this}}}}function Nn(n){return function(...e){return n==="delete"?!1:this}}function hu(){const n={get(r){return pr(this,r)},get size(){return gr(this)},has:mr,add:ll,set:cl,delete:hl,clear:dl,forEach:vr(!1,!1)},e={get(r){return pr(this,r,!1,!0)},get size(){return gr(this)},has:mr,add:ll,set:cl,delete:hl,clear:dl,forEach:vr(!1,!0)},t={get(r){return pr(this,r,!0)},get size(){return gr(this,!0)},has(r){return mr.call(this,r,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:vr(!0,!1)},i={get(r){return pr(this,r,!0,!0)},get size(){return gr(this,!0)},has(r){return mr.call(this,r,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:vr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=_r(r,!1,!1),t[r]=_r(r,!0,!1),e[r]=_r(r,!1,!0),i[r]=_r(r,!0,!0)}),[n,t,e,i]}const[du,uu,fu,pu]=hu();function Ba(n,e){const t=e?n?pu:fu:n?uu:du;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(He(t,s)&&s in i?t:i,s,r)}const mu={get:Ba(!1,!1)},gu={get:Ba(!1,!0)},vu={get:Ba(!0,!1)},oh=new WeakMap,ah=new WeakMap,lh=new WeakMap,_u=new WeakMap;function xu(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bu(n){return n.__v_skip||!Object.isExtensible(n)?0:xu(Wd(n))}function za(n){return Ws(n)?n:Oa(n,!1,rh,mu,oh)}function yu(n){return Oa(n,!1,cu,gu,ah)}function ch(n){return Oa(n,!0,lu,vu,lh)}function Oa(n,e,t,i,s){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const a=bu(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function os(n){return Ws(n)?os(n.__v_raw):!!(n&&n.__v_isReactive)}function Ws(n){return!!(n&&n.__v_isReadonly)}function ha(n){return!!(n&&n.__v_isShallow)}function hh(n){return os(n)||Ws(n)}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function dh(n){return Xr(n,"__v_skip",!0),n}const Ua=n=>ht(n)?za(n):n,Va=n=>ht(n)?ch(n):n;function Mu(n){qn&&Wt&&(n=Je(n),nh(n.dep||(n.dep=Ia())))}function wu(n,e){n=Je(n),n.dep&&ca(n.dep)}function Mt(n){return!!(n&&n.__v_isRef===!0)}function Su(n){return Mt(n)?n.value:n}const Eu={get:(n,e,t)=>Su(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Mt(s)&&!Mt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function uh(n){return os(n)?n:new Proxy(n,Eu)}class Cu{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ka(e,()=>{this._dirty||(this._dirty=!0,wu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Je(this);return Mu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Tu(n,e,t=!1){let i,s;const r=Ie(n);return r?(i=n,s=Zt):(i=n.get,s=n.set),new Cu(i,s,r||!s,t)}function Xn(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){so(r,e,t)}return s}function Kt(n,e,t,i){if(Ie(n)){const r=Xn(n,e,t,i);return r&&Zc(r)&&r.catch(a=>{so(a,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(Kt(n[r],e,t,i));return s}function so(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=t;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](n,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Xn(l,null,10,[n,a,o]);return}}Pu(n,t,s,i)}function Pu(n,e,t,i=!0){console.error(n)}let jr=!1,da=!1;const Dt=[];let An=0;const Vs=[];let Fs=null,Qi=0;const Hs=[];let Gn=null,es=0;const fh=Promise.resolve();let Ha=null,ua=null;function Au(n){const e=Ha||fh;return n?e.then(this?n.bind(this):n):e}function Lu(n){let e=An+1,t=Dt.length;for(;e<t;){const i=e+t>>>1;$s(Dt[i])<n?e=i+1:t=i}return e}function ph(n){(!Dt.length||!Dt.includes(n,jr&&n.allowRecurse?An+1:An))&&n!==ua&&(n.id==null?Dt.push(n):Dt.splice(Lu(n.id),0,n),mh())}function mh(){!jr&&!da&&(da=!0,Ha=fh.then(_h))}function Ru(n){const e=Dt.indexOf(n);e>An&&Dt.splice(e,1)}function gh(n,e,t,i){Re(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),mh()}function Du(n){gh(n,Fs,Vs,Qi)}function Iu(n){gh(n,Gn,Hs,es)}function ro(n,e=null){if(Vs.length){for(ua=e,Fs=[...new Set(Vs)],Vs.length=0,Qi=0;Qi<Fs.length;Qi++)Fs[Qi]();Fs=null,Qi=0,ua=null,ro(n,e)}}function vh(n){if(ro(),Hs.length){const e=[...new Set(Hs)];if(Hs.length=0,Gn){Gn.push(...e);return}for(Gn=e,Gn.sort((t,i)=>$s(t)-$s(i)),es=0;es<Gn.length;es++)Gn[es]();Gn=null,es=0}}const $s=n=>n.id==null?1/0:n.id;function _h(n){da=!1,jr=!0,ro(n),Dt.sort((t,i)=>$s(t)-$s(i));const e=Zt;try{for(An=0;An<Dt.length;An++){const t=Dt[An];t&&t.active!==!1&&Xn(t,null,14)}}finally{An=0,Dt.length=0,vh(),jr=!1,Ha=null,(Dt.length||Vs.length||Hs.length)&&_h(n)}}function ku(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||et;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in i){const h=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:u}=i[h]||et;u&&(s=t.map(m=>m.trim())),d&&(s=t.map(ra))}let o,l=i[o=bo(e)]||i[o=bo(bn(e))];!l&&r&&(l=i[o=bo(Ms(e))]),l&&Kt(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Kt(c,n,6,s)}}function xh(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Ie(n)){const l=c=>{const h=xh(c,e,!0);h&&(o=!0,St(a,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(i.set(n,null),null):(Re(r)?r.forEach(l=>a[l]=null):St(a,r),i.set(n,a),a)}function oo(n,e){return!n||!Qr(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(n,e[0].toLowerCase()+e.slice(1))||He(n,Ms(e))||He(n,e))}let qt=null,ao=null;function Yr(n){const e=qt;return qt=n,ao=n&&n.type.__scopeId||null,e}function sr(n){ao=n}function rr(){ao=null}function Nu(n,e=qt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&yl(-1);const r=Yr(e),a=n(...s);return Yr(r),i._d&&yl(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function yo(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:c,render:h,renderCache:d,data:u,setupState:m,ctx:v,inheritAttrs:p}=n;let f,x;const S=Yr(n);try{if(t.shapeFlag&4){const E=s||i;f=fn(h.call(E,E,d,r,m,u,v)),x=l}else{const E=e;f=fn(E.length>1?E(r,{attrs:l,slots:o,emit:c}):E(r,null)),x=e.props?l:Fu(l)}}catch(E){Gs.length=0,so(E,n,1),f=wt(Li)}let C=f;if(x&&p!==!1){const E=Object.keys(x),{shapeFlag:w}=C;E.length&&w&7&&(a&&E.some(Aa)&&(x=Bu(x,a)),C=ps(C,x))}return t.dirs&&(C=ps(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),f=C,Yr(S),f}const Fu=n=>{let e;for(const t in n)(t==="class"||t==="style"||Qr(t))&&((e||(e={}))[t]=n[t]);return e},Bu=(n,e)=>{const t={};for(const i in n)(!Aa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function zu(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ul(i,a,c):!!a;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const u=h[d];if(a[u]!==i[u]&&!oo(c,u))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?ul(i,a,c):!0:!!a;return!1}function ul(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!oo(t,r))return!0}return!1}function Ou({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Uu=n=>n.__isSuspense;function Vu(n,e){e&&e.pendingBranch?Re(n)?e.effects.push(...n):e.effects.push(n):Iu(n)}function Hu(n,e){if(ut){let t=ut.provides;const i=ut.parent&&ut.parent.provides;i===t&&(t=ut.provides=Object.create(i)),t[n]=e}}function Mo(n,e,t=!1){const i=ut||qt;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ie(e)?e.call(i.proxy):e}}const fl={};function wo(n,e,t){return bh(n,e,t)}function bh(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:a}=et){const o=ut;let l,c=!1,h=!1;if(Mt(n)?(l=()=>n.value,c=ha(n)):os(n)?(l=()=>n,i=!0):Re(n)?(h=!0,c=n.some(x=>os(x)||ha(x)),l=()=>n.map(x=>{if(Mt(x))return x.value;if(os(x))return ui(x);if(Ie(x))return Xn(x,o,2)})):Ie(n)?e?l=()=>Xn(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return d&&d(),Kt(n,o,3,[u])}:l=Zt,e&&i){const x=l;l=()=>ui(x())}let d,u=x=>{d=f.onStop=()=>{Xn(x,o,4)}};if(js)return u=Zt,e?t&&Kt(e,o,3,[l(),h?[]:void 0,u]):l(),Zt;let m=h?[]:fl;const v=()=>{if(!!f.active)if(e){const x=f.run();(i||c||(h?x.some((S,C)=>qr(S,m[C])):qr(x,m)))&&(d&&d(),Kt(e,o,3,[x,m===fl?void 0:m,u]),m=x)}else f.run()};v.allowRecurse=!!e;let p;s==="sync"?p=v:s==="post"?p=()=>Tt(v,o&&o.suspense):p=()=>Du(v);const f=new ka(l,p);return e?t?v():m=f.run():s==="post"?Tt(f.run.bind(f),o&&o.suspense):f.run(),()=>{f.stop(),o&&o.scope&&La(o.scope.effects,f)}}function Gu(n,e,t){const i=this.proxy,s=ct(n)?n.includes(".")?yh(i,n):()=>i[n]:n.bind(i,i);let r;Ie(e)?r=e:(r=e.handler,t=e);const a=ut;ms(this);const o=bh(s,r.bind(i),t);return a?ms(a):Ti(),o}function yh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ui(n,e){if(!ht(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Mt(n))ui(n.value,e);else if(Re(n))for(let t=0;t<n.length;t++)ui(n[t],e);else if(Yc(n)||rs(n))n.forEach(t=>{ui(t,e)});else if(Jc(n))for(const t in n)ui(n[t],e);return n}function Ot(n){return Ie(n)?{setup:n,name:n.name}:n}const Hr=n=>!!n.type.__asyncLoader,Mh=n=>n.type.__isKeepAlive;function Wu(n,e){wh(n,"a",e)}function $u(n,e){wh(n,"da",e)}function wh(n,e,t=ut){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(lo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Mh(s.parent.vnode)&&qu(i,e,t,s),s=s.parent}}function qu(n,e,t,i){const s=lo(e,n,i,!0);Sh(()=>{La(i[e],s)},t)}function lo(n,e,t=ut,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;ws(),ms(t);const o=Kt(e,t,n,a);return Ti(),Ss(),o});return i?s.unshift(r):s.push(r),r}}const In=n=>(e,t=ut)=>(!js||n==="sp")&&lo(n,e,t),Xu=In("bm"),ju=In("m"),Yu=In("bu"),Zu=In("u"),Ku=In("bum"),Sh=In("um"),Ju=In("sp"),Qu=In("rtg"),ef=In("rtc");function tf(n,e=ut){lo("ec",n,e)}function Eh(n,e){const t=qt;if(t===null)return n;const i=ho(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[a,o,l,c=et]=e[r];Ie(a)&&(a={mounted:a,updated:a}),a.deep&&ui(o),s.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c})}return n}function ni(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(ws(),Kt(l,t,8,[n.el,o,n,e]),Ss())}}const Ch="components";function Xt(n,e){return sf(Ch,n,!0,e)||n}const nf=Symbol();function sf(n,e,t=!0,i=!1){const s=qt||ut;if(s){const r=s.type;if(n===Ch){const o=kf(r,!1);if(o&&(o===e||o===bn(e)||o===no(bn(e))))return r}const a=pl(s[n]||r[n],e)||pl(s.appContext[n],e);return!a&&i?r:a}}function pl(n,e){return n&&(n[e]||n[bn(e)]||n[no(bn(e))])}function qs(n,e,t,i){let s;const r=t&&t[i];if(Re(n)||ct(n)){s=new Array(n.length);for(let a=0,o=n.length;a<o;a++)s[a]=e(n[a],a,void 0,r&&r[a])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(ht(n))if(n[Symbol.iterator])s=Array.from(n,(a,o)=>e(a,o,void 0,r&&r[o]));else{const a=Object.keys(n);s=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];s[o]=e(n[c],c,o,r&&r[o])}}else s=[];return t&&(t[i]=s),s}const fa=n=>n?Oh(n)?ho(n)||n.proxy:fa(n.parent):null,Zr=St(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fa(n.parent),$root:n=>fa(n.root),$emit:n=>n.emit,$options:n=>Ph(n),$forceUpdate:n=>n.f||(n.f=()=>ph(n.update)),$nextTick:n=>n.n||(n.n=Au.bind(n.proxy)),$watch:n=>Gu.bind(n)}),rf={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(i!==et&&He(i,e))return a[e]=1,i[e];if(s!==et&&He(s,e))return a[e]=2,s[e];if((c=n.propsOptions[0])&&He(c,e))return a[e]=3,r[e];if(t!==et&&He(t,e))return a[e]=4,t[e];pa&&(a[e]=0)}}const h=Zr[e];let d,u;if(h)return e==="$attrs"&&kt(n,"get",e),h(n);if((d=o.__cssModules)&&(d=d[e]))return d;if(t!==et&&He(t,e))return a[e]=4,t[e];if(u=l.config.globalProperties,He(u,e))return u[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return s!==et&&He(s,e)?(s[e]=t,!0):i!==et&&He(i,e)?(i[e]=t,!0):He(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==et&&He(n,a)||e!==et&&He(e,a)||(o=r[0])&&He(o,a)||He(i,a)||He(Zr,a)||He(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:He(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let pa=!0;function of(n){const e=Ph(n),t=n.proxy,i=n.ctx;pa=!1,e.beforeCreate&&ml(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:h,beforeMount:d,mounted:u,beforeUpdate:m,updated:v,activated:p,deactivated:f,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:E,render:w,renderTracked:R,renderTriggered:B,errorCaptured:M,serverPrefetch:A,expose:X,inheritAttrs:U,components:pe,directives:ce,filters:k}=e;if(c&&af(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const $ in a){const G=a[$];Ie(G)&&(i[$]=G.bind(t))}if(s){const $=s.call(t,t);ht($)&&(n.data=za($))}if(pa=!0,r)for(const $ in r){const G=r[$],H=Ie(G)?G.bind(t,t):Ie(G.get)?G.get.bind(t,t):Zt,J=!Ie(G)&&Ie(G.set)?G.set.bind(t):Zt,le=Ff({get:H,set:J});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>le.value,set:se=>le.value=se})}if(o)for(const $ in o)Th(o[$],i,t,$);if(l){const $=Ie(l)?l.call(t):l;Reflect.ownKeys($).forEach(G=>{Hu(G,$[G])})}h&&ml(h,n,"c");function V($,G){Re(G)?G.forEach(H=>$(H.bind(t))):G&&$(G.bind(t))}if(V(Xu,d),V(ju,u),V(Yu,m),V(Zu,v),V(Wu,p),V($u,f),V(tf,M),V(ef,R),V(Qu,B),V(Ku,S),V(Sh,E),V(Ju,A),Re(X))if(X.length){const $=n.exposed||(n.exposed={});X.forEach(G=>{Object.defineProperty($,G,{get:()=>t[G],set:H=>t[G]=H})})}else n.exposed||(n.exposed={});w&&n.render===Zt&&(n.render=w),U!=null&&(n.inheritAttrs=U),pe&&(n.components=pe),ce&&(n.directives=ce)}function af(n,e,t=Zt,i=!1){Re(n)&&(n=ma(n));for(const s in n){const r=n[s];let a;ht(r)?"default"in r?a=Mo(r.from||s,r.default,!0):a=Mo(r.from||s):a=Mo(r),Mt(a)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[s]=a}}function ml(n,e,t){Kt(Re(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Th(n,e,t,i){const s=i.includes(".")?yh(t,i):()=>t[i];if(ct(n)){const r=e[n];Ie(r)&&wo(s,r)}else if(Ie(n))wo(s,n.bind(t));else if(ht(n))if(Re(n))n.forEach(r=>Th(r,e,t,i));else{const r=Ie(n.handler)?n.handler.bind(t):e[n.handler];Ie(r)&&wo(s,r,n)}}function Ph(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Kr(l,c,a,!0)),Kr(l,e,a)),r.set(e,l),l}function Kr(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Kr(n,r,t,!0),s&&s.forEach(a=>Kr(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=lf[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const lf={data:gl,props:ai,emits:ai,methods:ai,computed:ai,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:ai,directives:ai,watch:hf,provide:gl,inject:cf};function gl(n,e){return e?n?function(){return St(Ie(n)?n.call(this,this):n,Ie(e)?e.call(this,this):e)}:e:n}function cf(n,e){return ai(ma(n),ma(e))}function ma(n){if(Re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function yt(n,e){return n?[...new Set([].concat(n,e))]:e}function ai(n,e){return n?St(St(Object.create(null),n),e):e}function hf(n,e){if(!n)return e;if(!e)return n;const t=St(Object.create(null),n);for(const i in e)t[i]=yt(n[i],e[i]);return t}function df(n,e,t,i=!1){const s={},r={};Xr(r,co,1),n.propsDefaults=Object.create(null),Ah(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:yu(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function uf(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=Je(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let u=h[d];if(oo(n.emitsOptions,u))continue;const m=e[u];if(l)if(He(r,u))m!==r[u]&&(r[u]=m,c=!0);else{const v=bn(u);s[v]=ga(l,o,v,m,n,!1)}else m!==r[u]&&(r[u]=m,c=!0)}}}else{Ah(n,e,s,r)&&(c=!0);let h;for(const d in o)(!e||!He(e,d)&&((h=Ms(d))===d||!He(e,h)))&&(l?t&&(t[d]!==void 0||t[h]!==void 0)&&(s[d]=ga(l,o,d,void 0,n,!0)):delete s[d]);if(r!==o)for(const d in r)(!e||!He(e,d)&&!0)&&(delete r[d],c=!0)}c&&Dn(n,"set","$attrs")}function Ah(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ur(l))continue;const c=e[l];let h;s&&He(s,h=bn(l))?!r||!r.includes(h)?t[h]=c:(o||(o={}))[h]=c:oo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=Je(t),c=o||et;for(let h=0;h<r.length;h++){const d=r[h];t[d]=ga(s,l,d,c[d],n,!He(c,d))}}return a}function ga(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=He(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Ie(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(ms(s),i=c[t]=l.call(null,e),Ti())}else i=l}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Ms(t))&&(i=!0))}return i}function Lh(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Ie(n)){const h=d=>{l=!0;const[u,m]=Lh(d,e,!0);St(a,u),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return i.set(n,ss),ss;if(Re(r))for(let h=0;h<r.length;h++){const d=bn(r[h]);vl(d)&&(a[d]=et)}else if(r)for(const h in r){const d=bn(h);if(vl(d)){const u=r[h],m=a[d]=Re(u)||Ie(u)?{type:u}:u;if(m){const v=bl(Boolean,m.type),p=bl(String,m.type);m[0]=v>-1,m[1]=p<0||v<p,(v>-1||He(m,"default"))&&o.push(d)}}}const c=[a,o];return i.set(n,c),c}function vl(n){return n[0]!=="$"}function _l(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function xl(n,e){return _l(n)===_l(e)}function bl(n,e){return Re(e)?e.findIndex(t=>xl(t,n)):Ie(e)&&xl(e,n)?0:-1}const Rh=n=>n[0]==="_"||n==="$stable",Ga=n=>Re(n)?n.map(fn):[fn(n)],ff=(n,e,t)=>{if(e._n)return e;const i=Nu((...s)=>Ga(e(...s)),t);return i._c=!1,i},Dh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Rh(s))continue;const r=n[s];if(Ie(r))e[s]=ff(s,r,i);else if(r!=null){const a=Ga(r);e[s]=()=>a}}},Ih=(n,e)=>{const t=Ga(e);n.slots.default=()=>t},pf=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Je(e),Xr(e,"_",t)):Dh(e,n.slots={})}else n.slots={},e&&Ih(n,e);Xr(n.slots,co,1)},mf=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=et;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(St(s,e),!t&&o===1&&delete s._):(r=!e.$stable,Dh(e,s)),a=e}else e&&(Ih(n,e),a={default:1});if(r)for(const o in s)!Rh(o)&&!(o in a)&&delete s[o]};function kh(){return{app:null,config:{isNativeTag:Vd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gf=0;function vf(n,e){return function(i,s=null){Ie(i)||(i=Object.assign({},i)),s!=null&&!ht(s)&&(s=null);const r=kh(),a=new Set;let o=!1;const l=r.app={_uid:gf++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Bf,get config(){return r.config},set config(c){},use(c,...h){return a.has(c)||(c&&Ie(c.install)?(a.add(c),c.install(l,...h)):Ie(c)&&(a.add(c),c(l,...h))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,h){return h?(r.components[c]=h,l):r.components[c]},directive(c,h){return h?(r.directives[c]=h,l):r.directives[c]},mount(c,h,d){if(!o){const u=wt(i,s);return u.appContext=r,h&&e?e(u,c):n(u,c,d),o=!0,l._container=c,c.__vue_app__=l,ho(u.component)||u.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,h){return r.provides[c]=h,l}};return l}}function va(n,e,t,i,s=!1){if(Re(n)){n.forEach((u,m)=>va(u,e&&(Re(e)?e[m]:e),t,i,s));return}if(Hr(i)&&!s)return;const r=i.shapeFlag&4?ho(i.component)||i.component.proxy:i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,h=o.refs===et?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==l&&(ct(c)?(h[c]=null,He(d,c)&&(d[c]=null)):Mt(c)&&(c.value=null)),Ie(l))Xn(l,o,12,[a,h]);else{const u=ct(l),m=Mt(l);if(u||m){const v=()=>{if(n.f){const p=u?h[l]:l.value;s?Re(p)&&La(p,r):Re(p)?p.includes(r)||p.push(r):u?(h[l]=[r],He(d,l)&&(d[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else u?(h[l]=a,He(d,l)&&(d[l]=a)):m&&(l.value=a,n.k&&(h[n.k]=a))};a?(v.id=-1,Tt(v,t)):v()}}}const Tt=Vu;function _f(n){return xf(n)}function xf(n,e){const t=Xd();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:h,parentNode:d,nextSibling:u,setScopeId:m=Zt,cloneNode:v,insertStaticContent:p}=n,f=(y,P,z,j=null,Y=null,ne=null,ie=!1,re=null,ae=!!P.dynamicChildren)=>{if(y===P)return;y&&!Ls(y,P)&&(j=Te(y),oe(y,Y,ne,!0),y=null),P.patchFlag===-2&&(ae=!1,P.dynamicChildren=null);const{type:_,ref:g,shapeFlag:L}=P;switch(_){case Wa:x(y,P,z,j);break;case Li:S(y,P,z,j);break;case So:y==null&&C(P,z,j,ie);break;case gt:ce(y,P,z,j,Y,ne,ie,re,ae);break;default:L&1?R(y,P,z,j,Y,ne,ie,re,ae):L&6?k(y,P,z,j,Y,ne,ie,re,ae):(L&64||L&128)&&_.process(y,P,z,j,Y,ne,ie,re,ae,ve)}g!=null&&Y&&va(g,y&&y.ref,ne,P||y,!P)},x=(y,P,z,j)=>{if(y==null)i(P.el=o(P.children),z,j);else{const Y=P.el=y.el;P.children!==y.children&&c(Y,P.children)}},S=(y,P,z,j)=>{y==null?i(P.el=l(P.children||""),z,j):P.el=y.el},C=(y,P,z,j)=>{[y.el,y.anchor]=p(y.children,P,z,j,y.el,y.anchor)},E=({el:y,anchor:P},z,j)=>{let Y;for(;y&&y!==P;)Y=u(y),i(y,z,j),y=Y;i(P,z,j)},w=({el:y,anchor:P})=>{let z;for(;y&&y!==P;)z=u(y),s(y),y=z;s(P)},R=(y,P,z,j,Y,ne,ie,re,ae)=>{ie=ie||P.type==="svg",y==null?B(P,z,j,Y,ne,ie,re,ae):X(y,P,Y,ne,ie,re,ae)},B=(y,P,z,j,Y,ne,ie,re)=>{let ae,_;const{type:g,props:L,shapeFlag:F,transition:q,patchFlag:te,dirs:be}=y;if(y.el&&v!==void 0&&te===-1)ae=y.el=v(y.el);else{if(ae=y.el=a(y.type,ne,L&&L.is,L),F&8?h(ae,y.children):F&16&&A(y.children,ae,null,j,Y,ne&&g!=="foreignObject",ie,re),be&&ni(y,null,j,"created"),L){for(const fe in L)fe!=="value"&&!Ur(fe)&&r(ae,fe,null,L[fe],ne,y.children,j,Y,Ve);"value"in L&&r(ae,"value",null,L.value),(_=L.onVnodeBeforeMount)&&an(_,j,y)}M(ae,y,y.scopeId,ie,j)}be&&ni(y,null,j,"beforeMount");const I=(!Y||Y&&!Y.pendingBranch)&&q&&!q.persisted;I&&q.beforeEnter(ae),i(ae,P,z),((_=L&&L.onVnodeMounted)||I||be)&&Tt(()=>{_&&an(_,j,y),I&&q.enter(ae),be&&ni(y,null,j,"mounted")},Y)},M=(y,P,z,j,Y)=>{if(z&&m(y,z),j)for(let ne=0;ne<j.length;ne++)m(y,j[ne]);if(Y){let ne=Y.subTree;if(P===ne){const ie=Y.vnode;M(y,ie,ie.scopeId,ie.slotScopeIds,Y.parent)}}},A=(y,P,z,j,Y,ne,ie,re,ae=0)=>{for(let _=ae;_<y.length;_++){const g=y[_]=re?Wn(y[_]):fn(y[_]);f(null,g,P,z,j,Y,ne,ie,re)}},X=(y,P,z,j,Y,ne,ie)=>{const re=P.el=y.el;let{patchFlag:ae,dynamicChildren:_,dirs:g}=P;ae|=y.patchFlag&16;const L=y.props||et,F=P.props||et;let q;z&&ii(z,!1),(q=F.onVnodeBeforeUpdate)&&an(q,z,P,y),g&&ni(P,y,z,"beforeUpdate"),z&&ii(z,!0);const te=Y&&P.type!=="foreignObject";if(_?U(y.dynamicChildren,_,re,z,j,te,ne):ie||H(y,P,re,null,z,j,te,ne,!1),ae>0){if(ae&16)pe(re,P,L,F,z,j,Y);else if(ae&2&&L.class!==F.class&&r(re,"class",null,F.class,Y),ae&4&&r(re,"style",L.style,F.style,Y),ae&8){const be=P.dynamicProps;for(let I=0;I<be.length;I++){const fe=be[I],_e=L[fe],xe=F[fe];(xe!==_e||fe==="value")&&r(re,fe,_e,xe,Y,y.children,z,j,Ve)}}ae&1&&y.children!==P.children&&h(re,P.children)}else!ie&&_==null&&pe(re,P,L,F,z,j,Y);((q=F.onVnodeUpdated)||g)&&Tt(()=>{q&&an(q,z,P,y),g&&ni(P,y,z,"updated")},j)},U=(y,P,z,j,Y,ne,ie)=>{for(let re=0;re<P.length;re++){const ae=y[re],_=P[re],g=ae.el&&(ae.type===gt||!Ls(ae,_)||ae.shapeFlag&70)?d(ae.el):z;f(ae,_,g,null,j,Y,ne,ie,!0)}},pe=(y,P,z,j,Y,ne,ie)=>{if(z!==j){for(const re in j){if(Ur(re))continue;const ae=j[re],_=z[re];ae!==_&&re!=="value"&&r(y,re,_,ae,ie,P.children,Y,ne,Ve)}if(z!==et)for(const re in z)!Ur(re)&&!(re in j)&&r(y,re,z[re],null,ie,P.children,Y,ne,Ve);"value"in j&&r(y,"value",z.value,j.value)}},ce=(y,P,z,j,Y,ne,ie,re,ae)=>{const _=P.el=y?y.el:o(""),g=P.anchor=y?y.anchor:o("");let{patchFlag:L,dynamicChildren:F,slotScopeIds:q}=P;q&&(re=re?re.concat(q):q),y==null?(i(_,z,j),i(g,z,j),A(P.children,z,g,Y,ne,ie,re,ae)):L>0&&L&64&&F&&y.dynamicChildren?(U(y.dynamicChildren,F,z,Y,ne,ie,re),(P.key!=null||Y&&P===Y.subTree)&&Nh(y,P,!0)):H(y,P,z,g,Y,ne,ie,re,ae)},k=(y,P,z,j,Y,ne,ie,re,ae)=>{P.slotScopeIds=re,y==null?P.shapeFlag&512?Y.ctx.activate(P,z,j,ie,ae):ee(P,z,j,Y,ne,ie,ae):V(y,P,ae)},ee=(y,P,z,j,Y,ne,ie)=>{const re=y.component=Af(y,j,Y);if(Mh(y)&&(re.ctx.renderer=ve),Lf(re),re.asyncDep){if(Y&&Y.registerDep(re,$),!y.el){const ae=re.subTree=wt(Li);S(null,ae,P,z)}return}$(re,y,P,z,Y,ne,ie)},V=(y,P,z)=>{const j=P.component=y.component;if(zu(y,P,z))if(j.asyncDep&&!j.asyncResolved){G(j,P,z);return}else j.next=P,Ru(j.update),j.update();else P.el=y.el,j.vnode=P},$=(y,P,z,j,Y,ne,ie)=>{const re=()=>{if(y.isMounted){let{next:g,bu:L,u:F,parent:q,vnode:te}=y,be=g,I;ii(y,!1),g?(g.el=te.el,G(y,g,ie)):g=te,L&&Vr(L),(I=g.props&&g.props.onVnodeBeforeUpdate)&&an(I,q,g,te),ii(y,!0);const fe=yo(y),_e=y.subTree;y.subTree=fe,f(_e,fe,d(_e.el),Te(_e),y,Y,ne),g.el=fe.el,be===null&&Ou(y,fe.el),F&&Tt(F,Y),(I=g.props&&g.props.onVnodeUpdated)&&Tt(()=>an(I,q,g,te),Y)}else{let g;const{el:L,props:F}=P,{bm:q,m:te,parent:be}=y,I=Hr(P);if(ii(y,!1),q&&Vr(q),!I&&(g=F&&F.onVnodeBeforeMount)&&an(g,be,P),ii(y,!0),L&&Ne){const fe=()=>{y.subTree=yo(y),Ne(L,y.subTree,y,Y,null)};I?P.type.__asyncLoader().then(()=>!y.isUnmounted&&fe()):fe()}else{const fe=y.subTree=yo(y);f(null,fe,z,j,y,Y,ne),P.el=fe.el}if(te&&Tt(te,Y),!I&&(g=F&&F.onVnodeMounted)){const fe=P;Tt(()=>an(g,be,fe),Y)}(P.shapeFlag&256||be&&Hr(be.vnode)&&be.vnode.shapeFlag&256)&&y.a&&Tt(y.a,Y),y.isMounted=!0,P=z=j=null}},ae=y.effect=new ka(re,()=>ph(_),y.scope),_=y.update=()=>ae.run();_.id=y.uid,ii(y,!0),_()},G=(y,P,z)=>{P.component=y;const j=y.vnode.props;y.vnode=P,y.next=null,uf(y,P.props,j,z),mf(y,P.children,z),ws(),ro(void 0,y.update),Ss()},H=(y,P,z,j,Y,ne,ie,re,ae=!1)=>{const _=y&&y.children,g=y?y.shapeFlag:0,L=P.children,{patchFlag:F,shapeFlag:q}=P;if(F>0){if(F&128){le(_,L,z,j,Y,ne,ie,re,ae);return}else if(F&256){J(_,L,z,j,Y,ne,ie,re,ae);return}}q&8?(g&16&&Ve(_,Y,ne),L!==_&&h(z,L)):g&16?q&16?le(_,L,z,j,Y,ne,ie,re,ae):Ve(_,Y,ne,!0):(g&8&&h(z,""),q&16&&A(L,z,j,Y,ne,ie,re,ae))},J=(y,P,z,j,Y,ne,ie,re,ae)=>{y=y||ss,P=P||ss;const _=y.length,g=P.length,L=Math.min(_,g);let F;for(F=0;F<L;F++){const q=P[F]=ae?Wn(P[F]):fn(P[F]);f(y[F],q,z,null,Y,ne,ie,re,ae)}_>g?Ve(y,Y,ne,!0,!1,L):A(P,z,j,Y,ne,ie,re,ae,L)},le=(y,P,z,j,Y,ne,ie,re,ae)=>{let _=0;const g=P.length;let L=y.length-1,F=g-1;for(;_<=L&&_<=F;){const q=y[_],te=P[_]=ae?Wn(P[_]):fn(P[_]);if(Ls(q,te))f(q,te,z,null,Y,ne,ie,re,ae);else break;_++}for(;_<=L&&_<=F;){const q=y[L],te=P[F]=ae?Wn(P[F]):fn(P[F]);if(Ls(q,te))f(q,te,z,null,Y,ne,ie,re,ae);else break;L--,F--}if(_>L){if(_<=F){const q=F+1,te=q<g?P[q].el:j;for(;_<=F;)f(null,P[_]=ae?Wn(P[_]):fn(P[_]),z,te,Y,ne,ie,re,ae),_++}}else if(_>F)for(;_<=L;)oe(y[_],Y,ne,!0),_++;else{const q=_,te=_,be=new Map;for(_=te;_<=F;_++){const Se=P[_]=ae?Wn(P[_]):fn(P[_]);Se.key!=null&&be.set(Se.key,_)}let I,fe=0;const _e=F-te+1;let xe=!1,T=0;const de=new Array(_e);for(_=0;_<_e;_++)de[_]=0;for(_=q;_<=L;_++){const Se=y[_];if(fe>=_e){oe(Se,Y,ne,!0);continue}let ge;if(Se.key!=null)ge=be.get(Se.key);else for(I=te;I<=F;I++)if(de[I-te]===0&&Ls(Se,P[I])){ge=I;break}ge===void 0?oe(Se,Y,ne,!0):(de[ge-te]=_+1,ge>=T?T=ge:xe=!0,f(Se,P[ge],z,null,Y,ne,ie,re,ae),fe++)}const ue=xe?bf(de):ss;for(I=ue.length-1,_=_e-1;_>=0;_--){const Se=te+_,ge=P[Se],Ce=Se+1<g?P[Se+1].el:j;de[_]===0?f(null,ge,z,Ce,Y,ne,ie,re,ae):xe&&(I<0||_!==ue[I]?se(ge,z,Ce,2):I--)}}},se=(y,P,z,j,Y=null)=>{const{el:ne,type:ie,transition:re,children:ae,shapeFlag:_}=y;if(_&6){se(y.component.subTree,P,z,j);return}if(_&128){y.suspense.move(P,z,j);return}if(_&64){ie.move(y,P,z,ve);return}if(ie===gt){i(ne,P,z);for(let L=0;L<ae.length;L++)se(ae[L],P,z,j);i(y.anchor,P,z);return}if(ie===So){E(y,P,z);return}if(j!==2&&_&1&&re)if(j===0)re.beforeEnter(ne),i(ne,P,z),Tt(()=>re.enter(ne),Y);else{const{leave:L,delayLeave:F,afterLeave:q}=re,te=()=>i(ne,P,z),be=()=>{L(ne,()=>{te(),q&&q()})};F?F(ne,te,be):be()}else i(ne,P,z)},oe=(y,P,z,j=!1,Y=!1)=>{const{type:ne,props:ie,ref:re,children:ae,dynamicChildren:_,shapeFlag:g,patchFlag:L,dirs:F}=y;if(re!=null&&va(re,null,z,y,!0),g&256){P.ctx.deactivate(y);return}const q=g&1&&F,te=!Hr(y);let be;if(te&&(be=ie&&ie.onVnodeBeforeUnmount)&&an(be,P,y),g&6)Z(y.component,z,j);else{if(g&128){y.suspense.unmount(z,j);return}q&&ni(y,null,P,"beforeUnmount"),g&64?y.type.remove(y,P,z,Y,ve,j):_&&(ne!==gt||L>0&&L&64)?Ve(_,P,z,!1,!0):(ne===gt&&L&384||!Y&&g&16)&&Ve(ae,P,z),j&&we(y)}(te&&(be=ie&&ie.onVnodeUnmounted)||q)&&Tt(()=>{be&&an(be,P,y),q&&ni(y,null,P,"unmounted")},z)},we=y=>{const{type:P,el:z,anchor:j,transition:Y}=y;if(P===gt){Ee(z,j);return}if(P===So){w(y);return}const ne=()=>{s(z),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(y.shapeFlag&1&&Y&&!Y.persisted){const{leave:ie,delayLeave:re}=Y,ae=()=>ie(z,ne);re?re(y.el,ne,ae):ae()}else ne()},Ee=(y,P)=>{let z;for(;y!==P;)z=u(y),s(y),y=z;s(P)},Z=(y,P,z)=>{const{bum:j,scope:Y,update:ne,subTree:ie,um:re}=y;j&&Vr(j),Y.stop(),ne&&(ne.active=!1,oe(ie,y,P,z)),re&&Tt(re,P),Tt(()=>{y.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Ve=(y,P,z,j=!1,Y=!1,ne=0)=>{for(let ie=ne;ie<y.length;ie++)oe(y[ie],P,z,j,Y)},Te=y=>y.shapeFlag&6?Te(y.component.subTree):y.shapeFlag&128?y.suspense.next():u(y.anchor||y.el),Le=(y,P,z)=>{y==null?P._vnode&&oe(P._vnode,null,null,!0):f(P._vnode||null,y,P,null,null,null,z),vh(),P._vnode=y},ve={p:f,um:oe,m:se,r:we,mt:ee,mc:A,pc:H,pbc:U,n:Te,o:n};let We,Ne;return e&&([We,Ne]=e(ve)),{render:Le,hydrate:We,createApp:vf(Le,We)}}function ii({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Nh(n,e,t=!1){const i=n.children,s=e.children;if(Re(i)&&Re(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Wn(s[r]),o.el=a.el),t||Nh(a,o))}}function bf(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}const yf=n=>n.__isTeleport,gt=Symbol(void 0),Wa=Symbol(void 0),Li=Symbol(void 0),So=Symbol(void 0),Gs=[];let jt=null;function Ue(n=!1){Gs.push(jt=n?null:[])}function Mf(){Gs.pop(),jt=Gs[Gs.length-1]||null}let Xs=1;function yl(n){Xs+=n}function Fh(n){return n.dynamicChildren=Xs>0?jt||ss:null,Mf(),Xs>0&&jt&&jt.push(n),n}function Ke(n,e,t,i,s,r){return Fh(Me(n,e,t,i,s,r,!0))}function Ri(n,e,t,i,s){return Fh(wt(n,e,t,i,s,!0))}function wf(n){return n?n.__v_isVNode===!0:!1}function Ls(n,e){return n.type===e.type&&n.key===e.key}const co="__vInternal",Bh=({key:n})=>n!=null?n:null,Gr=({ref:n,ref_key:e,ref_for:t})=>n!=null?ct(n)||Mt(n)||Ie(n)?{i:qt,r:n,k:e,f:!!t}:n:null;function Me(n,e=null,t=null,i=0,s=null,r=n===gt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Bh(e),ref:e&&Gr(e),scopeId:ao,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return o?($a(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=ct(t)?8:16),Xs>0&&!a&&jt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&jt.push(l),l}const wt=Sf;function Sf(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===nf)&&(n=Li),wf(n)){const o=ps(n,e,!0);return t&&$a(o,t),Xs>0&&!r&&jt&&(o.shapeFlag&6?jt[jt.indexOf(n)]=o:jt.push(o)),o.patchFlag|=-2,o}if(Nf(n)&&(n=n.__vccOpts),e){e=Ef(e);let{class:o,style:l}=e;o&&!ct(o)&&(e.class=vt(o)),ht(l)&&(hh(l)&&!Re(l)&&(l=St({},l)),e.style=Zn(l))}const a=ct(n)?1:Uu(n)?128:yf(n)?64:ht(n)?4:Ie(n)?2:0;return Me(n,e,t,i,s,a,r,!0)}function Ef(n){return n?hh(n)||co in n?St({},n):n:null}function ps(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:a}=n,o=e?Cf(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Bh(o),ref:e&&e.ref?t&&s?Re(s)?s.concat(Gr(e)):[s,Gr(e)]:Gr(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==gt?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ps(n.ssContent),ssFallback:n.ssFallback&&ps(n.ssFallback),el:n.el,anchor:n.anchor}}function zh(n=" ",e=0){return wt(Wa,null,n,e)}function Jn(n="",e=!1){return e?(Ue(),Ri(Li,null,n)):wt(Li,null,n)}function fn(n){return n==null||typeof n=="boolean"?wt(Li):Re(n)?wt(gt,null,n.slice()):typeof n=="object"?Wn(n):wt(Wa,null,String(n))}function Wn(n){return n.el===null||n.memo?n:ps(n)}function $a(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Re(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),$a(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(co in e)?e._ctx=qt:s===3&&qt&&(qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:qt},t=32):(e=String(e),i&64?(t=16,e=[zh(e)]):t=8);n.children=e,n.shapeFlag|=t}function Cf(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=vt([e.class,i.class]));else if(s==="style")e.style=Zn([e.style,i.style]);else if(Qr(s)){const r=e[s],a=i[s];a&&r!==a&&!(Re(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function an(n,e,t,i=null){Kt(n,e,7,[t,i])}const Tf=kh();let Pf=0;function Af(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Tf,r={uid:Pf++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new jd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lh(i,s),emitsOptions:xh(i,s),emit:null,emitted:null,propsDefaults:et,inheritAttrs:i.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ku.bind(null,r),n.ce&&n.ce(r),r}let ut=null;const ms=n=>{ut=n,n.scope.on()},Ti=()=>{ut&&ut.scope.off(),ut=null};function Oh(n){return n.vnode.shapeFlag&4}let js=!1;function Lf(n,e=!1){js=e;const{props:t,children:i}=n.vnode,s=Oh(n);df(n,t,s,e),pf(n,i);const r=s?Rf(n,e):void 0;return js=!1,r}function Rf(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=dh(new Proxy(n.ctx,rf));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?If(n):null;ms(n),ws();const r=Xn(i,n,0,[n.props,s]);if(Ss(),Ti(),Zc(r)){if(r.then(Ti,Ti),e)return r.then(a=>{Ml(n,a,e)}).catch(a=>{so(a,n,0)});n.asyncDep=r}else Ml(n,r,e)}else Uh(n,e)}function Ml(n,e,t){Ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=uh(e)),Uh(n,t)}let wl;function Uh(n,e,t){const i=n.type;if(!n.render){if(!e&&wl&&!i.render){const s=i.template;if(s){const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=St(St({isCustomElement:r,delimiters:o},a),l);i.render=wl(s,c)}}n.render=i.render||Zt}ms(n),ws(),of(n),Ss(),Ti()}function Df(n){return new Proxy(n.attrs,{get(e,t){return kt(n,"get","$attrs"),e[t]}})}function If(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Df(n))},slots:n.slots,emit:n.emit,expose:e}}function ho(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(uh(dh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Zr)return Zr[t](n)}}))}function kf(n,e=!0){return Ie(n)?n.displayName||n.name:n.name||e&&n.__name}function Nf(n){return Ie(n)&&"__vccOpts"in n}const Ff=(n,e)=>Tu(n,e,js),Bf="3.2.37",zf="http://www.w3.org/2000/svg",hi=typeof document!="undefined"?document:null,Sl=hi&&hi.createElement("template"),Of={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?hi.createElementNS(zf,n):hi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>hi.createTextNode(n),createComment:n=>hi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Sl.innerHTML=i?`<svg>${n}</svg>`:n;const o=Sl.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Uf(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Vf(n,e,t){const i=n.style,s=ct(t);if(t&&!s){for(const r in t)_a(i,r,t[r]);if(e&&!ct(e))for(const r in e)t[r]==null&&_a(i,r,"")}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const El=/\s*!important$/;function _a(n,e,t){if(Re(t))t.forEach(i=>_a(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Hf(n,e);El.test(t)?n.setProperty(Ms(i),t.replace(El,""),"important"):n[i]=t}}const Cl=["Webkit","Moz","ms"],Eo={};function Hf(n,e){const t=Eo[e];if(t)return t;let i=bn(e);if(i!=="filter"&&i in n)return Eo[e]=i;i=no(i);for(let s=0;s<Cl.length;s++){const r=Cl[s]+i;if(r in n)return Eo[e]=r}return e}const Tl="http://www.w3.org/1999/xlink";function Gf(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Tl,e.slice(6,e.length)):n.setAttributeNS(Tl,e,t);else{const r=Bd(e);t==null||r&&!Xc(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Wf(n,e,t,i,s,r,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,s,r),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Xc(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}const[Vh,$f]=(()=>{let n=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let xa=0;const qf=Promise.resolve(),Xf=()=>{xa=0},jf=()=>xa||(qf.then(Xf),xa=Vh());function ts(n,e,t,i){n.addEventListener(e,t,i)}function Yf(n,e,t,i){n.removeEventListener(e,t,i)}function Zf(n,e,t,i,s=null){const r=n._vei||(n._vei={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Kf(e);if(i){const c=r[e]=Jf(i,s);ts(n,o,c,l)}else a&&(Yf(n,o,a,l),r[e]=void 0)}}const Pl=/(?:Once|Passive|Capture)$/;function Kf(n){let e;if(Pl.test(n)){e={};let t;for(;t=n.match(Pl);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[Ms(n.slice(2)),e]}function Jf(n,e){const t=i=>{const s=i.timeStamp||Vh();($f||s>=t.attached-1)&&Kt(Qf(i,t.value),e,5,[i])};return t.value=n,t.attached=jf(),t}function Qf(n,e){if(Re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Al=/^on[a-z]/,ep=(n,e,t,i,s=!1,r,a,o,l)=>{e==="class"?Uf(n,i,s):e==="style"?Vf(n,t,i):Qr(e)?Aa(e)||Zf(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tp(n,e,i,s))?Wf(n,e,i,r,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Gf(n,e,i,s))};function tp(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Al.test(e)&&Ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Al.test(e)&&ct(t)?!1:e in n}const Ll=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Re(e)?t=>Vr(e,t):e};function np(n){n.target.composing=!0}function Rl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hh={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n._assign=Ll(s);const r=i||s.props&&s.props.type==="number";ts(n,e?"change":"input",a=>{if(a.target.composing)return;let o=n.value;t&&(o=o.trim()),r&&(o=ra(o)),n._assign(o)}),t&&ts(n,"change",()=>{n.value=n.value.trim()}),e||(ts(n,"compositionstart",np),ts(n,"compositionend",Rl),ts(n,"change",Rl))},mounted(n,{value:e}){n.value=e==null?"":e},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:s}},r){if(n._assign=Ll(r),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(s||n.type==="number")&&ra(n.value)===e))return;const a=e==null?"":e;n.value!==a&&(n.value=a)}},ip=St({patchProp:ep},Of);let Dl;function sp(){return Dl||(Dl=_f(ip))}const Gh=(...n)=>{const e=sp().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=rp(i);if(!s)return;const r=e._component;!Ie(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function rp(n){return ct(n)?document.querySelector(n):n}function op(n){return{all:n=n||new Map,on:function(e,t){var i=n.get(e);i?i.push(t):n.set(e,[t])},off:function(e,t){var i=n.get(e);i&&(t?i.splice(i.indexOf(t)>>>0,1):n.set(e,[]))},emit:function(e,t){var i=n.get(e);i&&i.slice().map(function(s){s(t)}),(i=n.get("*"))&&i.slice().map(function(s){s(e,t)})}}}var Ks,Js,dn,vi;class Di{constructor(e,t,i){Qe(this,Ks,void 0);Qe(this,Js,void 0);Qe(this,dn,void 0);Qe(this,vi,void 0);ze(this,Ks,e),ze(this,Js,t),i instanceof Ii?ze(this,dn,{inputList:[i]}):i==null?ze(this,dn,{inputList:[]}):ze(this,dn,i),ze(this,vi,null)}getName(){return ye(this,Ks)}getType(){return ye(this,Js)}getConnections(){return ye(this,dn)}getParent(){if(ye(this,vi)===null)throw"[BaseOutput] Parent is null, please set it";return ye(this,vi)}setParent(e){ze(this,vi,e)}connectTo(e){ye(this,dn).inputList.push(e),e.connectTo(this)}dropConnection(e){ye(this,dn).inputList=ye(this,dn).inputList.filter(t=>t!==e)}}Ks=new WeakMap,Js=new WeakMap,dn=new WeakMap,vi=new WeakMap;var Qs,er,$n,_i,Ft,un,xi;class Ii{constructor(e,t,i,s,r){Qe(this,Qs,void 0);Qe(this,er,void 0);Qe(this,$n,void 0);Qe(this,_i,void 0);Qe(this,Ft,void 0);Qe(this,un,void 0);Qe(this,xi,void 0);ze(this,Qs,e),ze(this,er,t),ze(this,$n,typeof i=="string"?[i]:[...i]),ze(this,_i,null),r instanceof Di?ze(this,Ft,r):ze(this,Ft,null),ze(this,un,s),ze(this,xi,{name:s.name,type:s.type,value:s.value})}getName(){return ye(this,Qs)}getType(){return ye(this,er)}getAcceptedInputs(){return ye(this,$n)}getParent(){if(ye(this,_i)===null)throw"[BaseInput] Parent is null, please set it";return ye(this,_i)}getConnected(){if(ye(this,Ft)===null)throw"[BaseInput] Nothing is connected to this input. Call isConnected to check";return ye(this,Ft)}getValue(){return ye(this,un)===null?{name:"",type:"",value:""}:ye(this,un)}isConnected(){return ye(this,Ft)instanceof Di}setParent(e){ze(this,_i,e)}setValue(e){if(ye(this,un)===null)throw"[BaseInput] Trying to assign value to null";ye(this,un).value=e}acceptsInputs(e){for(let t=0;t<ye(this,$n).length;t++)if(ye(this,$n)[t]===e||ye(this,$n)[t]==="any")return!0;return!1}connectTo(e){ze(this,Ft,e),ze(this,un,null)}dropConnection(){if(ye(this,Ft)===null)throw"[BaseInput] Connected is null, cannot drop connection";ye(this,Ft).dropConnection(this),ze(this,Ft,null),ze(this,un,{name:ye(this,xi).name,type:ye(this,xi).type,value:ye(this,xi).value})}}Qs=new WeakMap,er=new WeakMap,$n=new WeakMap,_i=new WeakMap,Ft=new WeakMap,un=new WeakMap,xi=new WeakMap;var tr,cs,bi;class uo{constructor(e,t,i){Qe(this,tr,void 0);Qe(this,cs,void 0);Qe(this,bi,void 0);ze(this,tr,e),ze(this,cs,t instanceof Ii?{inputList:[t]}:t),ye(this,cs).inputList.forEach(s=>{s.setParent(this)}),ze(this,bi,i instanceof Di?{outputList:[i]}:i),ye(this,bi).outputList.forEach(s=>{s.setParent(this)})}getName(){return ye(this,tr)}getInputs(){return ye(this,cs)}getOutputs(){return ye(this,bi)}connectTo(e,t){if(!ye(this,bi).outputList.includes(e))throw`[BaseNode]: ${e} is not an output element of this node`;if(!t.acceptsInputs(e.getType()))throw`[BaseNode]: The input socket does not accept the type 
        ${e.getType()}`}formatValue(e){return e.toString().includes(".")?e:e+".0"}}tr=new WeakMap,cs=new WeakMap,bi=new WeakMap;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="141",ap=0,Il=1,lp=2,Wh=1,cp=2,Bs=3,Ys=0,Jt=1,gs=2,hp=1,jn=0,as=1,kl=2,Nl=3,Fl=4,dp=5,ns=100,up=101,fp=102,Bl=103,zl=104,pp=200,mp=201,gp=202,vp=203,$h=204,qh=205,_p=206,xp=207,bp=208,yp=209,Mp=210,wp=0,Sp=1,Ep=2,ba=3,Cp=4,Tp=5,Pp=6,Ap=7,fo=0,Lp=1,Rp=2,Rn=0,Dp=1,Ip=2,kp=3,Np=4,Fp=5,Xh=300,vs=301,_s=302,ya=303,Ma=304,po=306,wa=1e3,$t=1001,Sa=1002,Pt=1003,Ol=1004,Ul=1005,Bt=1006,Bp=1007,mo=1008,ki=1009,zp=1010,Op=1011,jh=1012,Up=1013,fi=1014,pi=1015,Zs=1016,Vp=1017,Hp=1018,ls=1020,Gp=1021,Wp=1022,Yt=1023,$p=1024,qp=1025,Pi=1026,xs=1027,Xp=1028,jp=1029,Yp=1030,Zp=1031,Kp=1033,Co=33776,To=33777,Po=33778,Ao=33779,Vl=35840,Hl=35841,Gl=35842,Wl=35843,Jp=36196,$l=37492,ql=37496,Xl=37808,jl=37809,Yl=37810,Zl=37811,Kl=37812,Jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,ac=36492,Ni=3e3,nt=3001,Qp=3200,em=3201,Es=0,tm=1,Tn="srgb",mi="srgb-linear",Lo=7680,nm=519,lc=35044,cc="300 es",Ea=1035;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const dt=[];for(let n=0;n<256;n++)dt[n]=(n<16?"0":"")+n.toString(16);const Ro=Math.PI/180,hc=180/Math.PI;function or(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[i&255]+dt[i>>8&255]+dt[i>>16&255]+dt[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function im(n,e){return(n%e+e)%e}function Do(n,e,t){return(1-t)*n+t*e}function dc(n){return(n&n-1)===0&&n!==0}function Ca(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class qe{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],v=i[8],p=s[0],f=s[3],x=s[6],S=s[1],C=s[4],E=s[7],w=s[2],R=s[5],B=s[8];return r[0]=a*p+o*S+l*w,r[3]=a*f+o*C+l*R,r[6]=a*x+o*E+l*B,r[1]=c*p+h*S+d*w,r[4]=c*f+h*C+d*R,r[7]=c*x+h*E+d*B,r[2]=u*p+m*S+v*w,r[5]=u*f+m*C+v*R,r[8]=u*x+m*E+v*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,v=t*d+i*u+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=d*p,e[1]=(s*c-h*i)*p,e[2]=(o*i-s*a)*p,e[3]=u*p,e[4]=(h*t-s*l)*p,e[5]=(s*r-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),s=this.elements,r=s[0],a=s[3],o=s[6],l=s[1],c=s[4],h=s[7];return s[0]=t*r+i*l,s[3]=t*a+i*c,s[6]=t*o+i*h,s[1]=-i*r+t*l,s[4]=-i*a+t*c,s[7]=-i*o+t*h,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Yh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Io={[Tn]:{[mi]:Ai},[mi]:{[Tn]:Wr}},Ut={legacyMode:!0,get workingColorSpace(){return mi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Io[e]&&Io[e][t]!==void 0){const i=Io[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ot={r:0,g:0,b:0},Vt={h:0,s:0,l:0},xr={h:0,s:0,l:0};function ko(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function br(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mi){return this.r=e,this.g=t,this.b=i,Ut.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mi){if(e=im(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ko(a,r,e+1/3),this.g=ko(a,r,e),this.b=ko(a,r,e-1/3)}return Ut.toWorkingColorSpace(this,s),this}setStyle(e,t=Tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ut.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ut.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,h=parseInt(r[3],10)/100;return i(r[4]),this.setHSL(l,c,h,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ut.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ut.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Tn){const i=Zh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Ut.fromWorkingColorSpace(br(this,ot),e),At(ot.r*255,0,255)<<16^At(ot.g*255,0,255)<<8^At(ot.b*255,0,255)<<0}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mi){Ut.fromWorkingColorSpace(br(this,ot),t);const i=ot.r,s=ot.g,r=ot.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mi){return Ut.fromWorkingColorSpace(br(this,ot),t),e.r=ot.r,e.g=ot.g,e.b=ot.b,e}getStyle(e=Tn){return Ut.fromWorkingColorSpace(br(this,ot),e),e!==Tn?`color(${e} ${ot.r} ${ot.g} ${ot.b})`:`rgb(${ot.r*255|0},${ot.g*255|0},${ot.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=i,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(xr);const i=Do(Vt.h,xr.h,t),s=Do(Vt.s,xr.s,t),r=Do(Vt.l,xr.l,t);return this.setHSL(i,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ke.NAMES=Zh;let Oi;class Kh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=Jr("canvas")),Oi.width=e.width,Oi.height=e.height;const i=Oi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Jh{constructor(e=null){this.isSource=!0,this.uuid=or(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(No(s[a].image)):r.push(No(s[a]))}else r=No(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function No(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Kh.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sm=0;class Qt extends Cs{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=$t,s=$t,r=Bt,a=mo,o=Yt,l=ki,c=1,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=or(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Xh;class ft{constructor(e=0,t=0,i=0,s=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],v=l[9],p=l[2],f=l[6],x=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,E=(m+1)/2,w=(x+1)/2,R=(h+u)/4,B=(d+p)/4,M=(v+f)/4;return C>E&&C>w?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=R/i,r=B/i):E>w?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=M/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=B/r,s=M/r),this.set(i,s,r,t),this}let S=Math.sqrt((f-v)*(f-v)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(f-v)/S,this.y=(d-p)/S,this.z=(u-h)/S,this.w=Math.acos((c+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yn extends Cs{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Qt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qh extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rm extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerp(e,t,i,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,s)}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=r[a+0],m=r[a+1],v=r[a+2],p=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(d!==p||l!==u||c!==m||h!==v){let f=1-o;const x=l*u+c*m+h*v+d*p,S=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const w=Math.sqrt(C),R=Math.atan2(w,x*S);f=Math.sin(f*R)/w,o=Math.sin(o*R)/w}const E=o*S;if(l=l*f+u*E,c=c*f+m*E,h=h*f+v*E,d=d*f+p*E,f===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+h*d+l*m-c*u,e[t+1]=l*v+h*u+c*d-o*m,e[t+2]=c*v+h*m+o*u-l*d,e[t+3]=h*v-o*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d-u*m*v;break;case"YXZ":this._x=u*h*d+c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d+u*m*v;break;case"ZXY":this._x=u*h*d-c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d-u*m*v;break;case"ZYX":this._x=u*h*d-c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d+u*m*v;break;case"YZX":this._x=u*h*d+c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d-u*m*v;break;case"XZY":this._x=u*h*d-c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d+u*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*s-o*i,h=l*i+o*t-r*s,d=l*s+r*i-a*t,u=-r*t-a*i-o*s;return this.x=c*l+u*-r+h*-o-d*-a,this.y=h*l+u*-a+d*-r-c*-o,this.z=d*l+u*-o+c*-a-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new D,uc=new ar;class lr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],u=e[l+2];h<t&&(t=h),d<i&&(i=d),u<s&&(s=u),h>r&&(r=h),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,i,s),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),u=e.getZ(l);h<t&&(t=h),d<i&&(i=d),u<s&&(s=u),h>r&&(r=h),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,i,s),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)si.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(si)}else i.boundingBox===null&&i.computeBoundingBox(),Bo.copy(i.boundingBox),Bo.applyMatrix4(e.matrixWorld),this.union(Bo);const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),yr.subVectors(this.max,Rs),Ui.subVectors(e.a,Rs),Vi.subVectors(e.b,Rs),Hi.subVectors(e.c,Rs),Fn.subVectors(Vi,Ui),Bn.subVectors(Hi,Vi),ri.subVectors(Ui,Hi);let t=[0,-Fn.z,Fn.y,0,-Bn.z,Bn.y,0,-ri.z,ri.y,Fn.z,0,-Fn.x,Bn.z,0,-Bn.x,ri.z,0,-ri.x,-Fn.y,Fn.x,0,-Bn.y,Bn.x,0,-ri.y,ri.x,0];return!zo(t,Ui,Vi,Hi,yr)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,Ui,Vi,Hi,yr))?!1:(Mr.crossVectors(Fn,Bn),t=[Mr.x,Mr.y,Mr.z],zo(t,Ui,Vi,Hi,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return si.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(si).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new D,new D,new D,new D,new D,new D,new D,new D],si=new D,Bo=new lr,Ui=new D,Vi=new D,Hi=new D,Fn=new D,Bn=new D,ri=new D,Rs=new D,yr=new D,Mr=new D,oi=new D;function zo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){oi.fromArray(n,r);const o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=i.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const om=new lr,fc=new D,wr=new D,Oo=new D;class Xa{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):om.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Oo.subVectors(e,this.center);const t=Oo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.add(Oo.multiplyScalar(s/i)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?wr.set(0,0,1).multiplyScalar(e.radius):wr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(fc.copy(e.center).add(wr)),this.expandByPoint(fc.copy(e.center).sub(wr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new D,Uo=new D,Sr=new D,zn=new D,Vo=new D,Er=new D,Ho=new D;class am{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.direction).multiplyScalar(t).add(this.origin),wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Uo.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(Uo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Sr),o=zn.dot(this.direction),l=-zn.dot(Sr),c=zn.lengthSq(),h=Math.abs(1-a*a);let d,u,m,v;if(h>0)if(d=a*l-o,u=a*o-l,v=r*h,d>=0)if(u>=-v)if(u<=v){const p=1/h;d*=p,u*=p,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),s&&s.copy(Sr).multiplyScalar(u).add(Uo),m}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const i=wn.dot(this.direction),s=wn.dot(wn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||i!==i)&&(i=r),(a<s||s!==s)&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,i,s,r){Vo.subVectors(t,e),Er.subVectors(i,e),Ho.crossVectors(Vo,Er);let a=this.direction.dot(Ho),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=o*this.direction.dot(Er.crossVectors(zn,Er));if(l<0)return null;const c=o*this.direction.dot(Vo.cross(zn));if(c<0||l+c>a)return null;const h=-o*zn.dot(Ho);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,r,a,o,l,c,h,d,u,m,v,p,f){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=d,x[14]=u,x[3]=m,x[7]=v,x[11]=p,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,m=a*d,v=o*h,p=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=u-p*c,t[9]=-o*l,t[2]=p-u*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,m=l*d,v=c*h,p=c*d;t[0]=u+p*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-v,t[6]=p+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,m=l*d,v=c*h,p=c*d;t[0]=u-p*o,t[4]=-a*d,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*h,t[9]=p-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,m=a*d,v=o*h,p=o*d;t[0]=l*h,t[4]=v*c-m,t[8]=u*c+p,t[1]=l*d,t[5]=p*c+u,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,v=o*l,p=o*c;t[0]=l*h,t[4]=p-u*d,t[8]=v*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+v,t[10]=u-p*d}else if(e.order==="XZY"){const u=a*l,m=a*c,v=o*l,p=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+p,t[5]=a*h,t[9]=m*d-v,t[2]=v*d-m,t[6]=o*h,t[10]=p*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lm,e,cm)}lookAt(e,t,i){const s=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),On.crossVectors(i,Lt),On.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),On.crossVectors(i,Lt)),On.normalize(),Cr.crossVectors(Lt,On),s[0]=On.x,s[4]=Cr.x,s[8]=Lt.x,s[1]=On.y,s[5]=Cr.y,s[9]=Lt.y,s[2]=On.z,s[6]=Cr.z,s[10]=Lt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],m=i[13],v=i[2],p=i[6],f=i[10],x=i[14],S=i[3],C=i[7],E=i[11],w=i[15],R=s[0],B=s[4],M=s[8],A=s[12],X=s[1],U=s[5],pe=s[9],ce=s[13],k=s[2],ee=s[6],V=s[10],$=s[14],G=s[3],H=s[7],J=s[11],le=s[15];return r[0]=a*R+o*X+l*k+c*G,r[4]=a*B+o*U+l*ee+c*H,r[8]=a*M+o*pe+l*V+c*J,r[12]=a*A+o*ce+l*$+c*le,r[1]=h*R+d*X+u*k+m*G,r[5]=h*B+d*U+u*ee+m*H,r[9]=h*M+d*pe+u*V+m*J,r[13]=h*A+d*ce+u*$+m*le,r[2]=v*R+p*X+f*k+x*G,r[6]=v*B+p*U+f*ee+x*H,r[10]=v*M+p*pe+f*V+x*J,r[14]=v*A+p*ce+f*$+x*le,r[3]=S*R+C*X+E*k+w*G,r[7]=S*B+C*U+E*ee+w*H,r[11]=S*M+C*pe+E*V+w*J,r[15]=S*A+C*ce+E*$+w*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],v=e[3],p=e[7],f=e[11],x=e[15];return v*(+r*l*d-s*c*d-r*o*u+i*c*u+s*o*m-i*l*m)+p*(+t*l*m-t*c*u+r*a*u-s*a*m+s*c*h-r*l*h)+f*(+t*c*d-t*o*m-r*a*d+i*a*m+r*o*h-i*c*h)+x*(-s*o*h-t*l*d+t*o*u+s*a*d-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],v=e[12],p=e[13],f=e[14],x=e[15],S=d*f*c-p*u*c+p*l*m-o*f*m-d*l*x+o*u*x,C=v*u*c-h*f*c-v*l*m+a*f*m+h*l*x-a*u*x,E=h*p*c-v*d*c+v*o*m-a*p*m-h*o*x+a*d*x,w=v*d*l-h*p*l-v*o*u+a*p*u+h*o*f-a*d*f,R=t*S+i*C+s*E+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/R;return e[0]=S*B,e[1]=(p*u*r-d*f*r-p*s*m+i*f*m+d*s*x-i*u*x)*B,e[2]=(o*f*r-p*l*r+p*s*c-i*f*c-o*s*x+i*l*x)*B,e[3]=(d*l*r-o*u*r-d*s*c+i*u*c+o*s*m-i*l*m)*B,e[4]=C*B,e[5]=(h*f*r-v*u*r+v*s*m-t*f*m-h*s*x+t*u*x)*B,e[6]=(v*l*r-a*f*r-v*s*c+t*f*c+a*s*x-t*l*x)*B,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*m+t*l*m)*B,e[8]=E*B,e[9]=(v*d*r-h*p*r-v*i*m+t*p*m+h*i*x-t*d*x)*B,e[10]=(a*p*r-v*o*r+v*i*c-t*p*c-a*i*x+t*o*x)*B,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*m-t*o*m)*B,e[12]=w*B,e[13]=(h*p*s-v*d*s+v*i*u-t*p*u-h*i*f+t*d*f)*B,e[14]=(v*o*s-a*p*s-v*i*l+t*p*l+a*i*f-t*o*f)*B,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*u+t*o*u)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,v=r*d,p=a*h,f=a*d,x=o*d,S=l*c,C=l*h,E=l*d,w=i.x,R=i.y,B=i.z;return s[0]=(1-(p+x))*w,s[1]=(m+E)*w,s[2]=(v-C)*w,s[3]=0,s[4]=(m-E)*R,s[5]=(1-(u+x))*R,s[6]=(f+S)*R,s[7]=0,s[8]=(v+C)*B,s[9]=(f-S)*B,s[10]=(1-(u+p))*B,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const a=Gi.set(s[4],s[5],s[6]).length(),o=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ht.copy(this);const c=1/r,h=1/a,d=1/o;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=h,Ht.elements[5]*=h,Ht.elements[6]*=h,Ht.elements[8]*=d,Ht.elements[9]*=d,Ht.elements[10]*=d,t.setFromRotationMatrix(Ht),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(t-e),c=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),u=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,s,r,a){const o=this.elements,l=1/(t-e),c=1/(i-s),h=1/(a-r),d=(t+e)*l,u=(i+s)*c,m=(a+r)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new D,Ht=new _t,lm=new D(0,0,0),cm=new D(1,1,1),On=new D,Cr=new D,Lt=new D,pc=new _t,mc=new ar;class cr{constructor(e=0,t=0,i=0,s=cr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}cr.DefaultOrder="XYZ";cr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ed{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hm=0;const gc=new D,Wi=new ar,Sn=new _t,Tr=new D,Ds=new D,dm=new D,um=new ar,vc=new D(1,0,0),_c=new D(0,1,0),xc=new D(0,0,1),fm={type:"added"},bc={type:"removed"};class en extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DefaultUp.clone();const e=new D,t=new cr,i=new ar,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new gn}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=en.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(vc,e)}rotateY(e){return this.rotateOnAxis(_c,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return gc.copy(e).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vc,e)}translateY(e){return this.translateOnAxis(_c,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Tr.copy(e):Tr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Ds,Tr,this.up):Sn.lookAt(Tr,Ds,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(bc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,dm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}en.DefaultUp=new D(0,1,0);en.DefaultMatrixAutoUpdate=!0;const Gt=new D,En=new D,Go=new D,Cn=new D,$i=new D,qi=new D,yc=new D,Wo=new D,$o=new D,qo=new D;class mn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gt.subVectors(e,t),s.cross(Gt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Gt.subVectors(s,t),En.subVectors(i,t),Go.subVectors(e,t);const a=Gt.dot(Gt),o=Gt.dot(En),l=Gt.dot(Go),c=En.dot(En),h=En.dot(Go),d=a*c-o*o;if(d===0)return r.set(-2,-1,-1);const u=1/d,m=(c*l-o*h)*u,v=(a*h-o*l)*u;return r.set(1-m-v,v,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Cn),l.set(0,0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l}static isFrontFacing(e,t,i,s){return Gt.subVectors(i,t),En.subVectors(e,t),Gt.cross(En).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),En.subVectors(this.a,this.b),Gt.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return mn.getUV(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;$i.subVectors(s,i),qi.subVectors(r,i),Wo.subVectors(e,i);const l=$i.dot(Wo),c=qi.dot(Wo);if(l<=0&&c<=0)return t.copy(i);$o.subVectors(e,s);const h=$i.dot($o),d=qi.dot($o);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector($i,a);qo.subVectors(e,r);const m=$i.dot(qo),v=qi.dot(qo);if(v>=0&&m<=v)return t.copy(r);const p=m*c-l*v;if(p<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(qi,o);const f=h*v-m*d;if(f<=0&&d-h>=0&&m-v>=0)return yc.subVectors(r,s),o=(d-h)/(d-h+(m-v)),t.copy(s).addScaledVector(yc,o);const x=1/(f+p+u);return a=p*x,o=u*x,t.copy(i).addScaledVector($i,a).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let pm=0;class pt extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=or(),this.name="",this.type="Material",this.blending=as,this.side=Ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=$h,this.blendDst=qh,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===hp;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==Ys&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}pt.fromType=function(){return null};class ja extends pt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new D,Pr=new qe;class vn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=lc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),a=new ke),t[i++]=a.r,t[i++]=a.g,t[i++]=a.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),a=new qe),t[i++]=a.x,t[i++]=a.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),a=new D),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),a=new ft),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z,t[i++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class td extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nd extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _n extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let mm=0;const Nt=new _t,Xo=new en,Xi=new D,Rt=new lr,Is=new lr,lt=new D;class ei extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yh(e)?nd:td)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new gn().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,i){return Nt.makeTranslation(e,t,i),this.applyMatrix4(Nt),this}scale(e,t,i){return Nt.makeScale(e,t,i),this.applyMatrix4(Nt),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Rt.setFromBufferAttribute(r),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(lt.addVectors(Rt.min,Is.min),Rt.expandByPoint(lt),lt.addVectors(Rt.max,Is.max),Rt.expandByPoint(lt)):(Rt.expandByPoint(Is.min),Rt.expandByPoint(Is.max))}Rt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)lt.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(e,c),lt.add(Xi)),s=Math.max(s,i.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let X=0;X<o;X++)c[X]=new D,h[X]=new D;const d=new D,u=new D,m=new D,v=new qe,p=new qe,f=new qe,x=new D,S=new D;function C(X,U,pe){d.fromArray(s,X*3),u.fromArray(s,U*3),m.fromArray(s,pe*3),v.fromArray(a,X*2),p.fromArray(a,U*2),f.fromArray(a,pe*2),u.sub(d),m.sub(d),p.sub(v),f.sub(v);const ce=1/(p.x*f.y-f.x*p.y);!isFinite(ce)||(x.copy(u).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(ce),S.copy(m).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(ce),c[X].add(x),c[U].add(x),c[pe].add(x),h[X].add(S),h[U].add(S),h[pe].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let X=0,U=E.length;X<U;++X){const pe=E[X],ce=pe.start,k=pe.count;for(let ee=ce,V=ce+k;ee<V;ee+=3)C(i[ee+0],i[ee+1],i[ee+2])}const w=new D,R=new D,B=new D,M=new D;function A(X){B.fromArray(r,X*3),M.copy(B);const U=c[X];w.copy(U),w.sub(B.multiplyScalar(B.dot(U))).normalize(),R.crossVectors(M,U);const ce=R.dot(h[X])<0?-1:1;l[X*4]=w.x,l[X*4+1]=w.y,l[X*4+2]=w.z,l[X*4+3]=ce}for(let X=0,U=E.length;X<U;++X){const pe=E[X],ce=pe.start,k=pe.count;for(let ee=ce,V=ce+k;ee<V;ee+=3)A(i[ee+0]),A(i[ee+1]),A(i[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,m=e.count;u<m;u+=3){const v=e.getX(u+0),p=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,f),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const s in i){if(e.attributes[s]===void 0)continue;const a=i[s].array,o=e.attributes[s],l=o.array,c=o.itemSize*t,h=Math.min(l.length,a.length-c);for(let d=0,u=c;d<h;d++,u++)a[u]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,v=0;for(let p=0,f=l.length;p<f;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*h;for(let x=0;x<h;x++)u[v++]=c[m++]}return new vn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=e(u,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new _t,ji=new am,jo=new Xa,Un=new D,Vn=new D,Hn=new D,Yo=new D,Zo=new D,Ko=new D,Ar=new D,Lr=new D,Rr=new D,Dr=new qe,Ir=new qe,kr=new qe,Jo=new D,Nr=new D;class Ln extends en{constructor(e=new ei,t=new ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(r),e.ray.intersectsSphere(jo)===!1)||(Mc.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Mc),i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,d=i.attributes.uv,u=i.attributes.uv2,m=i.groups,v=i.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,f=m.length;p<f;p++){const x=m[p],S=s[x.materialIndex],C=Math.max(x.start,v.start),E=Math.min(o.count,Math.min(x.start+x.count,v.start+v.count));for(let w=C,R=E;w<R;w+=3){const B=o.getX(w),M=o.getX(w+1),A=o.getX(w+2);a=Fr(this,S,e,ji,l,c,h,d,u,B,M,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const p=Math.max(0,v.start),f=Math.min(o.count,v.start+v.count);for(let x=p,S=f;x<S;x+=3){const C=o.getX(x),E=o.getX(x+1),w=o.getX(x+2);a=Fr(this,s,e,ji,l,c,h,d,u,C,E,w),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,f=m.length;p<f;p++){const x=m[p],S=s[x.materialIndex],C=Math.max(x.start,v.start),E=Math.min(l.count,Math.min(x.start+x.count,v.start+v.count));for(let w=C,R=E;w<R;w+=3){const B=w,M=w+1,A=w+2;a=Fr(this,S,e,ji,l,c,h,d,u,B,M,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const p=Math.max(0,v.start),f=Math.min(l.count,v.start+v.count);for(let x=p,S=f;x<S;x+=3){const C=x,E=x+1,w=x+2;a=Fr(this,s,e,ji,l,c,h,d,u,C,E,w),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function gm(n,e,t,i,s,r,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side!==gs,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Nr);return c<t.near||c>t.far?null:{distance:c,point:Nr.clone(),object:n}}function Fr(n,e,t,i,s,r,a,o,l,c,h,d){Un.fromBufferAttribute(s,c),Vn.fromBufferAttribute(s,h),Hn.fromBufferAttribute(s,d);const u=n.morphTargetInfluences;if(r&&u){Ar.set(0,0,0),Lr.set(0,0,0),Rr.set(0,0,0);for(let v=0,p=r.length;v<p;v++){const f=u[v],x=r[v];f!==0&&(Yo.fromBufferAttribute(x,c),Zo.fromBufferAttribute(x,h),Ko.fromBufferAttribute(x,d),a?(Ar.addScaledVector(Yo,f),Lr.addScaledVector(Zo,f),Rr.addScaledVector(Ko,f)):(Ar.addScaledVector(Yo.sub(Un),f),Lr.addScaledVector(Zo.sub(Vn),f),Rr.addScaledVector(Ko.sub(Hn),f)))}Un.add(Ar),Vn.add(Lr),Hn.add(Rr)}n.isSkinnedMesh&&(n.boneTransform(c,Un),n.boneTransform(h,Vn),n.boneTransform(d,Hn));const m=gm(n,e,t,i,Un,Vn,Hn,Jo);if(m){o&&(Dr.fromBufferAttribute(o,c),Ir.fromBufferAttribute(o,h),kr.fromBufferAttribute(o,d),m.uv=mn.getUV(Jo,Un,Vn,Hn,Dr,Ir,kr,new qe)),l&&(Dr.fromBufferAttribute(l,c),Ir.fromBufferAttribute(l,h),kr.fromBufferAttribute(l,d),m.uv2=mn.getUV(Jo,Un,Vn,Hn,Dr,Ir,kr,new qe));const v={a:c,b:h,c:d,normal:new D,materialIndex:0};mn.getNormal(Un,Vn,Hn,v.normal),m.face=v}return m}class hr extends ei{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,m=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(h,3)),this.setAttribute("uv",new _n(d,2));function v(p,f,x,S,C,E,w,R,B,M,A){const X=E/B,U=w/M,pe=E/2,ce=w/2,k=R/2,ee=B+1,V=M+1;let $=0,G=0;const H=new D;for(let J=0;J<V;J++){const le=J*U-ce;for(let se=0;se<ee;se++){const oe=se*X-pe;H[p]=oe*S,H[f]=le*C,H[x]=k,c.push(H.x,H.y,H.z),H[p]=0,H[f]=0,H[x]=R>0?1:-1,h.push(H.x,H.y,H.z),d.push(se/B),d.push(1-J/M),$+=1}}for(let J=0;J<M;J++)for(let le=0;le<B;le++){const se=u+le+ee*J,oe=u+le+ee*(J+1),we=u+(le+1)+ee*(J+1),Ee=u+(le+1)+ee*J;l.push(se,oe,Ee),l.push(oe,we,Ee),G+=6}o.addGroup(m,G,A),m+=G,u+=$}}static fromJSON(e){return new hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function mt(n){const e={};for(let t=0;t<n.length;t++){const i=bs(n[t]);for(const s in i)e[s]=i[s]}return e}const vm={clone:bs,merge:mt};var _m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends pt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=_m,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class id extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends id{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hc*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ro*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=90,Zi=1;class bm extends en{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const s=new zt(Yi,Zi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(1,0,0)),this.add(s);const r=new zt(Yi,Zi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(-1,0,0)),this.add(r);const a=new zt(Yi,Zi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new D(0,1,0)),this.add(a);const o=new zt(Yi,Zi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new D(0,-1,0)),this.add(o);const l=new zt(Yi,Zi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const c=new zt(Yi,Zi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,a,o,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=Rn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class sd extends Qt{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:vs,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ym extends Yn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hr(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:jn});r.uniforms.tEquirect.value=t;const a=new Ln(s,r),o=t.minFilter;return t.minFilter===mo&&(t.minFilter=Bt),new bm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Qo=new D,Mm=new D,wm=new gn;class li{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Qo.subVectors(i,t).cross(Mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Qo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wm.getNormalMatrix(e),s=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new Xa,Br=new D;class rd{constructor(e=new li,t=new li,i=new li,s=new li,r=new li,a=new li){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],d=i[7],u=i[8],m=i[9],v=i[10],p=i[11],f=i[12],x=i[13],S=i[14],C=i[15];return t[0].setComponents(o-s,d-l,p-u,C-f).normalize(),t[1].setComponents(o+s,d+l,p+u,C+f).normalize(),t[2].setComponents(o+r,d+c,p+m,C+x).normalize(),t[3].setComponents(o-r,d-c,p-m,C-x).normalize(),t[4].setComponents(o-a,d-h,p-v,C-S).normalize(),t[5].setComponents(o+a,d+h,p+v,C+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Br.x=s.normal.x>0?e.max.x:e.min.x,Br.y=s.normal.y>0?e.max.y:e.min.y,Br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function od(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Sm(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,h){const d=c.array,u=c.usage,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,d,u),c.onUploadCallback();let v;if(d instanceof Float32Array)v=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(d instanceof Int16Array)v=5122;else if(d instanceof Uint32Array)v=5125;else if(d instanceof Int32Array)v=5124;else if(d instanceof Int8Array)v=5120;else if(d instanceof Uint8Array)v=5121;else if(d instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,d){const u=h.array,m=h.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,u):(t?n.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):n.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,s(c,h)):d.version<c.version&&(r(d.buffer,c,h),d.version=c.version)}return{get:a,remove:o,update:l}}class Ya extends ei{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,m=[],v=[],p=[],f=[];for(let x=0;x<h;x++){const S=x*u-a;for(let C=0;C<c;C++){const E=C*d-r;v.push(E,-S,0),p.push(0,0,1),f.push(C/o),f.push(1-x/l)}}for(let x=0;x<l;x++)for(let S=0;S<o;S++){const C=S+c*x,E=S+c*(x+1),w=S+1+c*(x+1),R=S+1+c*x;m.push(C,E,R),m.push(E,w,R)}this.setIndex(m),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(p,3)),this.setAttribute("uv",new _n(f,2))}static fromJSON(e){return new Ya(e.width,e.height,e.widthSegments,e.heightSegments)}}var Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Am=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rm="vec3 transformed = vec3( position );",Dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Im=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,km=`#ifdef USE_IRIDESCENCE
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
#endif`,Nm=`#ifdef USE_BUMPMAP
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wm=`#define PI 3.141592653589793
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
}`,$m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qm=`vec3 transformedNormal = objectNormal;
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
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qm=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
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
}`,cg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dg=`vec3 diffuse = vec3( 1.0 );
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
#endif`,ug=`uniform bool receiveShadow;
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
#endif`,fg=`#if defined( USE_ENVMAP )
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
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,_g=`PhysicalMaterial material;
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
#endif`,xg=`struct PhysicalMaterial {
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
}`,bg=`
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
#endif`,yg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ig=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kg=`#ifdef USE_MORPHNORMALS
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
#endif`,Ng=`#ifdef USE_MORPHTARGETS
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
#endif`,Fg=`#ifdef USE_MORPHTARGETS
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
#endif`,Bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,zg=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hg=`#ifdef USE_NORMALMAP
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
#endif`,Gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#ifdef USE_SHADOWMAP
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
#endif`,n0=`#ifdef USE_SHADOWMAP
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
#endif`,i0=`#ifdef USE_SHADOWMAP
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
#endif`,s0=`float getShadowMask() {
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
}`,r0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,a0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,c0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,g0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,v0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,_0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,x0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,b0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`#include <envmap_common_pars_fragment>
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
}`,C0=`#include <common>
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
}`,T0=`#if DEPTH_PACKING == 3200
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
}`,P0=`#define DISTANCE
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
}`,A0=`#define DISTANCE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,D0=`uniform float scale;
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
}`,I0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,N0=`uniform vec3 diffuse;
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
}`,F0=`#define LAMBERT
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#define MATCAP
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
}`,O0=`#define MATCAP
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
}`,U0=`#define NORMAL
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
}`,V0=`#define NORMAL
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
}`,H0=`#define PHONG
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
}`,G0=`#define PHONG
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
}`,W0=`#define STANDARD
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
}`,$0=`#define STANDARD
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
}`,q0=`#define TOON
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
}`,X0=`#define TOON
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
}`,j0=`uniform float size;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,K0=`uniform vec3 color;
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
}`,J0=`uniform float rotation;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:Em,alphamap_pars_fragment:Cm,alphatest_fragment:Tm,alphatest_pars_fragment:Pm,aomap_fragment:Am,aomap_pars_fragment:Lm,begin_vertex:Rm,beginnormal_vertex:Dm,bsdfs:Im,iridescence_fragment:km,bumpmap_pars_fragment:Nm,clipping_planes_fragment:Fm,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:zm,clipping_planes_vertex:Om,color_fragment:Um,color_pars_fragment:Vm,color_pars_vertex:Hm,color_vertex:Gm,common:Wm,cube_uv_reflection_fragment:$m,defaultnormal_vertex:qm,displacementmap_pars_vertex:Xm,displacementmap_vertex:jm,emissivemap_fragment:Ym,emissivemap_pars_fragment:Zm,encodings_fragment:Km,encodings_pars_fragment:Jm,envmap_fragment:Qm,envmap_common_pars_fragment:eg,envmap_pars_fragment:tg,envmap_pars_vertex:ng,envmap_physical_pars_fragment:fg,envmap_vertex:ig,fog_vertex:sg,fog_pars_vertex:rg,fog_fragment:og,fog_pars_fragment:ag,gradientmap_pars_fragment:lg,lightmap_fragment:cg,lightmap_pars_fragment:hg,lights_lambert_vertex:dg,lights_pars_begin:ug,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:gg,lights_phong_pars_fragment:vg,lights_physical_fragment:_g,lights_physical_pars_fragment:xg,lights_fragment_begin:bg,lights_fragment_maps:yg,lights_fragment_end:Mg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:Cg,map_fragment:Tg,map_pars_fragment:Pg,map_particle_fragment:Ag,map_particle_pars_fragment:Lg,metalnessmap_fragment:Rg,metalnessmap_pars_fragment:Dg,morphcolor_vertex:Ig,morphnormal_vertex:kg,morphtarget_pars_vertex:Ng,morphtarget_vertex:Fg,normal_fragment_begin:Bg,normal_fragment_maps:zg,normal_pars_fragment:Og,normal_pars_vertex:Ug,normal_vertex:Vg,normalmap_pars_fragment:Hg,clearcoat_normal_fragment_begin:Gg,clearcoat_normal_fragment_maps:Wg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:qg,output_fragment:Xg,packing:jg,premultiplied_alpha_fragment:Yg,project_vertex:Zg,dithering_fragment:Kg,dithering_pars_fragment:Jg,roughnessmap_fragment:Qg,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:n0,shadowmap_vertex:i0,shadowmask_pars_fragment:s0,skinbase_vertex:r0,skinning_pars_vertex:o0,skinning_vertex:a0,skinnormal_vertex:l0,specularmap_fragment:c0,specularmap_pars_fragment:h0,tonemapping_fragment:d0,tonemapping_pars_fragment:u0,transmission_fragment:f0,transmission_pars_fragment:p0,uv_pars_fragment:m0,uv_pars_vertex:g0,uv_vertex:v0,uv2_pars_fragment:_0,uv2_pars_vertex:x0,uv2_vertex:b0,worldpos_vertex:y0,background_vert:M0,background_frag:w0,cube_vert:S0,cube_frag:E0,depth_vert:C0,depth_frag:T0,distanceRGBA_vert:P0,distanceRGBA_frag:A0,equirect_vert:L0,equirect_frag:R0,linedashed_vert:D0,linedashed_frag:I0,meshbasic_vert:k0,meshbasic_frag:N0,meshlambert_vert:F0,meshlambert_frag:B0,meshmatcap_vert:z0,meshmatcap_frag:O0,meshnormal_vert:U0,meshnormal_frag:V0,meshphong_vert:H0,meshphong_frag:G0,meshphysical_vert:W0,meshphysical_frag:$0,meshtoon_vert:q0,meshtoon_frag:X0,points_vert:j0,points_frag:Y0,shadow_vert:Z0,shadow_frag:K0,sprite_vert:J0,sprite_frag:Q0},me={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new gn},uv2Transform:{value:new gn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}}},pn={basic:{uniforms:mt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:mt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.fog,me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:mt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:mt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:mt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:mt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:mt([me.points,me.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:mt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:mt([me.common,me.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:mt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:mt([me.sprite,me.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new gn},t2D:{value:null}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},cube:{uniforms:mt([me.envmap,{opacity:{value:1}}]),vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:mt([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:mt([me.lights,me.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};pn.physical={uniforms:mt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new qe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};function ev(n,e,t,i,s,r){const a=new ke(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function m(p,f){let x=!1,S=f.isScene===!0?f.background:null;S&&S.isTexture&&(S=e.get(S));const C=n.xr,E=C.getSession&&C.getSession();E&&E.environmentBlendMode==="additive"&&(S=null),S===null?v(a,o):S&&S.isColor&&(v(S,1),x=!0),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===po)?(c===void 0&&(c=new Ln(new hr(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:bs(pn.cube.uniforms),vertexShader:pn.cube.vertexShader,fragmentShader:pn.cube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(h!==S||d!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ln(new Ya(2,2),new yn({name:"BackgroundMaterial",uniforms:bs(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Ys,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,r)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),o=f,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,v(a,o)},render:m}}function tv(n,e,t,i){const s=n.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=f(null);let c=l,h=!1;function d(k,ee,V,$,G){let H=!1;if(a){const J=p($,V,ee);c!==J&&(c=J,m(c.object)),H=x(k,$,V,G),H&&S(k,$,V,G)}else{const J=ee.wireframe===!0;(c.geometry!==$.id||c.program!==V.id||c.wireframe!==J)&&(c.geometry=$.id,c.program=V.id,c.wireframe=J,H=!0)}G!==null&&t.update(G,34963),(H||h)&&(h=!1,M(k,ee,V,$),G!==null&&n.bindBuffer(34963,t.get(G).buffer))}function u(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(k){return i.isWebGL2?n.bindVertexArray(k):r.bindVertexArrayOES(k)}function v(k){return i.isWebGL2?n.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function p(k,ee,V){const $=V.wireframe===!0;let G=o[k.id];G===void 0&&(G={},o[k.id]=G);let H=G[ee.id];H===void 0&&(H={},G[ee.id]=H);let J=H[$];return J===void 0&&(J=f(u()),H[$]=J),J}function f(k){const ee=[],V=[],$=[];for(let G=0;G<s;G++)ee[G]=0,V[G]=0,$[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:V,attributeDivisors:$,object:k,attributes:{},index:null}}function x(k,ee,V,$){const G=c.attributes,H=ee.attributes;let J=0;const le=V.getAttributes();for(const se in le)if(le[se].location>=0){const we=G[se];let Ee=H[se];if(Ee===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(Ee=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(Ee=k.instanceColor)),we===void 0||we.attribute!==Ee||Ee&&we.data!==Ee.data)return!0;J++}return c.attributesNum!==J||c.index!==$}function S(k,ee,V,$){const G={},H=ee.attributes;let J=0;const le=V.getAttributes();for(const se in le)if(le[se].location>=0){let we=H[se];we===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(we=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(we=k.instanceColor));const Ee={};Ee.attribute=we,we&&we.data&&(Ee.data=we.data),G[se]=Ee,J++}c.attributes=G,c.attributesNum=J,c.index=$}function C(){const k=c.newAttributes;for(let ee=0,V=k.length;ee<V;ee++)k[ee]=0}function E(k){w(k,0)}function w(k,ee){const V=c.newAttributes,$=c.enabledAttributes,G=c.attributeDivisors;V[k]=1,$[k]===0&&(n.enableVertexAttribArray(k),$[k]=1),G[k]!==ee&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,ee),G[k]=ee)}function R(){const k=c.newAttributes,ee=c.enabledAttributes;for(let V=0,$=ee.length;V<$;V++)ee[V]!==k[V]&&(n.disableVertexAttribArray(V),ee[V]=0)}function B(k,ee,V,$,G,H){i.isWebGL2===!0&&(V===5124||V===5125)?n.vertexAttribIPointer(k,ee,V,G,H):n.vertexAttribPointer(k,ee,V,$,G,H)}function M(k,ee,V,$){if(i.isWebGL2===!1&&(k.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const G=$.attributes,H=V.getAttributes(),J=ee.defaultAttributeValues;for(const le in H){const se=H[le];if(se.location>=0){let oe=G[le];if(oe===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor)),oe!==void 0){const we=oe.normalized,Ee=oe.itemSize,Z=t.get(oe);if(Z===void 0)continue;const Ve=Z.buffer,Te=Z.type,Le=Z.bytesPerElement;if(oe.isInterleavedBufferAttribute){const ve=oe.data,We=ve.stride,Ne=oe.offset;if(ve.isInstancedInterleavedBuffer){for(let y=0;y<se.locationSize;y++)w(se.location+y,ve.meshPerAttribute);k.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let y=0;y<se.locationSize;y++)E(se.location+y);n.bindBuffer(34962,Ve);for(let y=0;y<se.locationSize;y++)B(se.location+y,Ee/se.locationSize,Te,we,We*Le,(Ne+Ee/se.locationSize*y)*Le)}else{if(oe.isInstancedBufferAttribute){for(let ve=0;ve<se.locationSize;ve++)w(se.location+ve,oe.meshPerAttribute);k.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<se.locationSize;ve++)E(se.location+ve);n.bindBuffer(34962,Ve);for(let ve=0;ve<se.locationSize;ve++)B(se.location+ve,Ee/se.locationSize,Te,we,Ee*Le,Ee/se.locationSize*ve*Le)}}else if(J!==void 0){const we=J[le];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(se.location,we);break;case 3:n.vertexAttrib3fv(se.location,we);break;case 4:n.vertexAttrib4fv(se.location,we);break;default:n.vertexAttrib1fv(se.location,we)}}}}R()}function A(){pe();for(const k in o){const ee=o[k];for(const V in ee){const $=ee[V];for(const G in $)v($[G].object),delete $[G];delete ee[V]}delete o[k]}}function X(k){if(o[k.id]===void 0)return;const ee=o[k.id];for(const V in ee){const $=ee[V];for(const G in $)v($[G].object),delete $[G];delete ee[V]}delete o[k.id]}function U(k){for(const ee in o){const V=o[ee];if(V[k.id]===void 0)continue;const $=V[k.id];for(const G in $)v($[G].object),delete $[G];delete V[k.id]}}function pe(){ce(),h=!0,c!==l&&(c=l,m(c.object))}function ce(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:pe,resetDefaultState:ce,dispose:A,releaseStatesOfGeometry:X,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:E,disableUnusedAttributes:R}}function nv(n,e,t,i){const s=i.isWebGL2;let r;function a(c){r=c}function o(c,h){n.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,d){if(d===0)return;let u,m;if(s)u=n,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](r,c,h,d),t.update(h,r,d)}this.setMode=a,this.render=o,this.renderInstances=l}function iv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(B){if(B==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),u=n.getParameter(35660),m=n.getParameter(3379),v=n.getParameter(34076),p=n.getParameter(34921),f=n.getParameter(36347),x=n.getParameter(36348),S=n.getParameter(36349),C=u>0,E=a||e.has("OES_texture_float"),w=C&&E,R=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:C,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:R}}function sv(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new li,o=new gn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,m){const v=d.length!==0||u||i!==0||s;return s=u,t=h(d,m,0),i=d.length,v},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,u,m){const v=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,x=n.get(d);if(!s||v===null||v.length===0||r&&!f)r?h(null):c();else{const S=r?0:i,C=S*4;let E=x.clippingState||null;l.value=E,E=h(v,u,C,m);for(let w=0;w!==C;++w)E[w]=t[w];x.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,m,v){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=l.value,v!==!0||f===null){const x=m+p*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<x)&&(f=new Float32Array(x));for(let C=0,E=m;C!==p;++C,E+=4)a.copy(d[C]).applyMatrix4(S,o),a.normal.toArray(f,E),f[E+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function rv(n){let e=new WeakMap;function t(a,o){return o===ya?a.mapping=vs:o===Ma&&(a.mapping=_s),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ya||o===Ma)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ym(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ov extends id{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,wc=[.125,.215,.35,.446,.526,.582],di=20,ea=new ov,Sc=new ke;let ta=null;const ci=(1+Math.sqrt(5))/2,Ji=1/ci,Ec=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,ci,Ji),new D(0,ci,-Ji),new D(Ji,0,ci),new D(-Ji,0,ci),new D(ci,Ji,0),new D(-ci,Ji,0)];class Cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ta=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ta),e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ta=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Zs,format:Yt,encoding:Ni,depthBuffer:!1},s=Tc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=av(r)),this._blurMaterial=lv(r,e,t)}return s}_compileMaterial(e){const t=new Ln(this._lodPlanes[0],e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,i,s){const o=new zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Sc),h.toneMapping=Rn,h.autoClear=!1;const m=new ja({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),v=new Ln(new hr,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Sc),p=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(o.up.set(0,l[x],0),o.lookAt(c[x],0,0)):S===1?(o.up.set(0,0,l[x]),o.lookAt(0,c[x],0)):(o.up.set(0,l[x],0),o.lookAt(0,0,c[x]));const C=this._cubeSize;zr(s,S*C,x>2?C:0,C,C),h.setRenderTarget(s),p&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===vs||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ln(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;zr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ea)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ec[(s-1)%Ec.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ln(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*di-1),p=r/v,f=isFinite(r)?1+Math.floor(h*p):di;f>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${di}`);const x=[];let S=0;for(let B=0;B<di;++B){const M=B/p,A=Math.exp(-M*M/2);x.push(A),B===0?S+=A:B<f&&(S+=2*A)}for(let B=0;B<x.length;B++)x[B]=x[B]/S;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=x,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:C}=this;u.dTheta.value=v,u.mipInt.value=C-i;const E=this._sizeLods[s],w=3*E*(s>C-is?s-C+is:0),R=4*(this._cubeSize-E);zr(t,w,R,3*E,2*E),l.setRenderTarget(t),l.render(d,ea)}}function av(n){const e=[],t=[],i=[];let s=n;const r=n-is+1+wc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-is?l=wc[a-n+is-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,p=3,f=2,x=1,S=new Float32Array(p*v*m),C=new Float32Array(f*v*m),E=new Float32Array(x*v*m);for(let R=0;R<m;R++){const B=R%3*2/3-1,M=R>2?0:-1,A=[B,M,0,B+2/3,M,0,B+2/3,M+1,0,B,M,0,B+2/3,M+1,0,B,M+1,0];S.set(A,p*v*R),C.set(u,f*v*R);const X=[R,R,R,R,R,R];E.set(X,x*v*R)}const w=new ei;w.setAttribute("position",new vn(S,p)),w.setAttribute("uv",new vn(C,f)),w.setAttribute("faceIndex",new vn(E,x)),e.push(w),s>is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Tc(n,e,t){const i=new Yn(n,e,t);return i.texture.mapping=po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function lv(n,e,t){const i=new Float32Array(di),s=new D(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Za(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Pc(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ac(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Za(){return`

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
	`}function cv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ya||l===Ma,h=l===vs||l===_s;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Cc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Cc(n));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function hv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dv(n,e,t,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete s[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const v in u)e.update(u[v],34962);const m=d.morphAttributes;for(const v in m){const p=m[v];for(let f=0,x=p.length;f<x;f++)e.update(p[f],34962)}}function c(d){const u=[],m=d.index,v=d.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let C=0,E=S.length;C<E;C+=3){const w=S[C+0],R=S[C+1],B=S[C+2];u.push(w,R,R,B,B,w)}}else{const S=v.array;p=v.version;for(let C=0,E=S.length/3-1;C<E;C+=3){const w=C+0,R=C+1,B=C+2;u.push(w,R,R,B,B,w)}}const f=new(Yh(u)?nd:td)(u,1);f.version=p;const x=r.get(d);x&&e.remove(x),r.set(d,f)}function h(d){const u=r.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function uv(n,e,t,i){const s=i.isWebGL2;let r;function a(u){r=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,m){n.drawElements(r,m,o,u*l),t.update(m,r,1)}function d(u,m,v){if(v===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,m,o,u*l,v),t.update(m,r,v)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function fv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function pv(n,e){return n[0]-e[0]}function mv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function na(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function gv(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,a=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d,u){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=p!==void 0?p.length:0;let x=r.get(h);if(x===void 0||x.count!==f){let V=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",V)};var v=V;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,B=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let X=0;E===!0&&(X=1),w===!0&&(X=2),R===!0&&(X=3);let U=h.attributes.position.count*X,pe=1;U>e.maxTextureSize&&(pe=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const ce=new Float32Array(U*pe*4*f),k=new Qh(ce,U,pe,f);k.type=pi,k.needsUpdate=!0;const ee=X*4;for(let $=0;$<f;$++){const G=B[$],H=M[$],J=A[$],le=U*pe*4*$;for(let se=0;se<G.count;se++){const oe=se*ee;E===!0&&(a.fromBufferAttribute(G,se),G.normalized===!0&&na(a,G),ce[le+oe+0]=a.x,ce[le+oe+1]=a.y,ce[le+oe+2]=a.z,ce[le+oe+3]=0),w===!0&&(a.fromBufferAttribute(H,se),H.normalized===!0&&na(a,H),ce[le+oe+4]=a.x,ce[le+oe+5]=a.y,ce[le+oe+6]=a.z,ce[le+oe+7]=0),R===!0&&(a.fromBufferAttribute(J,se),J.normalized===!0&&na(a,J),ce[le+oe+8]=a.x,ce[le+oe+9]=a.y,ce[le+oe+10]=a.z,ce[le+oe+11]=J.itemSize===4?a.w:1)}}x={count:f,texture:k,size:new qe(U,pe)},r.set(h,x),h.addEventListener("dispose",V)}let S=0;for(let E=0;E<m.length;E++)S+=m[E];const C=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(n,"morphTargetBaseInfluence",C),u.getUniforms().setValue(n,"morphTargetInfluences",m),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const p=m===void 0?0:m.length;let f=i[h.id];if(f===void 0||f.length!==p){f=[];for(let w=0;w<p;w++)f[w]=[w,0];i[h.id]=f}for(let w=0;w<p;w++){const R=f[w];R[0]=w,R[1]=m[w]}f.sort(mv);for(let w=0;w<8;w++)w<p&&f[w][1]?(o[w][0]=f[w][0],o[w][1]=f[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(pv);const x=h.morphAttributes.position,S=h.morphAttributes.normal;let C=0;for(let w=0;w<8;w++){const R=o[w],B=R[0],M=R[1];B!==Number.MAX_SAFE_INTEGER&&M?(x&&h.getAttribute("morphTarget"+w)!==x[B]&&h.setAttribute("morphTarget"+w,x[B]),S&&h.getAttribute("morphNormal"+w)!==S[B]&&h.setAttribute("morphNormal"+w,S[B]),s[w]=M,C+=M):(x&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),S&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),s[w]=0)}const E=h.morphTargetsRelative?1:1-C;u.getUniforms().setValue(n,"morphTargetBaseInfluence",E),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function vv(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);return s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const ad=new Qt,ld=new Qh,cd=new rm,hd=new sd,Lc=[],Rc=[],Dc=new Float32Array(16),Ic=new Float32Array(9),kc=new Float32Array(4);function Ts(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Lc[s];if(r===void 0&&(r=new Float32Array(s),Lc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function go(n,e){let t=Rc[e];t===void 0&&(t=new Int32Array(e),Rc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _v(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function Mv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Et(t,i))return;kc.set(i),n.uniformMatrix2fv(this.addr,!1,kc),Ct(t,i)}}function wv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Et(t,i))return;Ic.set(i),n.uniformMatrix3fv(this.addr,!1,Ic),Ct(t,i)}}function Sv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Et(t,i))return;Dc.set(i),n.uniformMatrix4fv(this.addr,!1,Dc),Ct(t,i)}}function Ev(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cv(n,e){const t=this.cache;Et(t,e)||(n.uniform2iv(this.addr,e),Ct(t,e))}function Tv(n,e){const t=this.cache;Et(t,e)||(n.uniform3iv(this.addr,e),Ct(t,e))}function Pv(n,e){const t=this.cache;Et(t,e)||(n.uniform4iv(this.addr,e),Ct(t,e))}function Av(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lv(n,e){const t=this.cache;Et(t,e)||(n.uniform2uiv(this.addr,e),Ct(t,e))}function Rv(n,e){const t=this.cache;Et(t,e)||(n.uniform3uiv(this.addr,e),Ct(t,e))}function Dv(n,e){const t=this.cache;Et(t,e)||(n.uniform4uiv(this.addr,e),Ct(t,e))}function Iv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||ad,s)}function kv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cd,s)}function Nv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hd,s)}function Fv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ld,s)}function Bv(n){switch(n){case 5126:return _v;case 35664:return xv;case 35665:return bv;case 35666:return yv;case 35674:return Mv;case 35675:return wv;case 35676:return Sv;case 5124:case 35670:return Ev;case 35667:case 35671:return Cv;case 35668:case 35672:return Tv;case 35669:case 35673:return Pv;case 5125:return Av;case 36294:return Lv;case 36295:return Rv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Fv}}function zv(n,e){n.uniform1fv(this.addr,e)}function Ov(n,e){const t=Ts(e,this.size,2);n.uniform2fv(this.addr,t)}function Uv(n,e){const t=Ts(e,this.size,3);n.uniform3fv(this.addr,t)}function Vv(n,e){const t=Ts(e,this.size,4);n.uniform4fv(this.addr,t)}function Hv(n,e){const t=Ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Gv(n,e){const t=Ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wv(n,e){const t=Ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $v(n,e){n.uniform1iv(this.addr,e)}function qv(n,e){n.uniform2iv(this.addr,e)}function Xv(n,e){n.uniform3iv(this.addr,e)}function jv(n,e){n.uniform4iv(this.addr,e)}function Yv(n,e){n.uniform1uiv(this.addr,e)}function Zv(n,e){n.uniform2uiv(this.addr,e)}function Kv(n,e){n.uniform3uiv(this.addr,e)}function Jv(n,e){n.uniform4uiv(this.addr,e)}function Qv(n,e,t){const i=e.length,s=go(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTexture2D(e[r]||ad,s[r])}function e_(n,e,t){const i=e.length,s=go(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTexture3D(e[r]||cd,s[r])}function t_(n,e,t){const i=e.length,s=go(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTextureCube(e[r]||hd,s[r])}function n_(n,e,t){const i=e.length,s=go(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||ld,s[r])}function i_(n){switch(n){case 5126:return zv;case 35664:return Ov;case 35665:return Uv;case 35666:return Vv;case 35674:return Hv;case 35675:return Gv;case 35676:return Wv;case 5124:case 35670:return $v;case 35667:case 35671:return qv;case 35668:case 35672:return Xv;case 35669:case 35673:return jv;case 5125:return Yv;case 36294:return Zv;case 36295:return Kv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}class s_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Bv(t.type)}}class r_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=i_(t.type)}}class o_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Nc(n,e){n.seq.push(e),n.map[e.id]=e}function a_(n,e,t){const i=n.name,s=i.length;for(ia.lastIndex=0;;){const r=ia.exec(i),a=ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nc(t,c===void 0?new s_(o,n,e):new r_(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new o_(o),Nc(t,d)),t=d}}}class $r{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);a_(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Fc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let l_=0;function c_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function h_(n){switch(n){case Ni:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Bc(n,e,t){const i=n.getShaderParameter(e,35713),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+c_(n.getShaderSource(e),a)}else return s}function d_(n,e){const t=h_(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function u_(n,e){let t;switch(e){case Dp:t="Linear";break;case Ip:t="Reinhard";break;case kp:t="OptimizedCineon";break;case Np:t="ACESFilmic";break;case Fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function f_(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function p_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function m_(n,e){const t={},i=n.getProgramParameter(e,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zs(n){return n!==""}function zc(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(n){return n.replace(g_,v_)}function v_(n,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ta(t)}const __=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(n){return n.replace(x_,dd).replace(__,b_)}function b_(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),dd(n,e,t,i)}function dd(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bs&&(e="SHADOWMAP_TYPE_VSM"),e}function M_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vs:case _s:e="ENVMAP_TYPE_CUBE";break;case po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function S_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fo:e="ENVMAP_BLENDING_MULTIPLY";break;case Lp:e="ENVMAP_BLENDING_MIX";break;case Rp:e="ENVMAP_BLENDING_ADD";break}return e}function E_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function C_(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=y_(t),c=M_(t),h=w_(t),d=S_(t),u=E_(t),m=t.isWebGL2?"":f_(t),v=p_(r),p=s.createProgram();let f,x,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[v].filter(zs).join(`
`),f.length>0&&(f+=`
`),x=[m,v].filter(zs).join(`
`),x.length>0&&(x+=`
`)):(f=[Vc(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),x=[m,Vc(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Rn?u_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,d_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=Ta(a),a=zc(a,t),a=Oc(a,t),o=Ta(o),o=zc(o,t),o=Oc(o,t),a=Uc(a),o=Uc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=S+f+a,E=S+x+o,w=Fc(s,35633,C),R=Fc(s,35632,E);if(s.attachShader(p,w),s.attachShader(p,R),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),n.debug.checkShaderErrors){const A=s.getProgramInfoLog(p).trim(),X=s.getShaderInfoLog(w).trim(),U=s.getShaderInfoLog(R).trim();let pe=!0,ce=!0;if(s.getProgramParameter(p,35714)===!1){pe=!1;const k=Bc(s,w,"vertex"),ee=Bc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+k+`
`+ee)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(X===""||U==="")&&(ce=!1);ce&&(this.diagnostics={runnable:pe,programLog:A,vertexShader:{log:X,prefix:f},fragmentShader:{log:U,prefix:x}})}s.deleteShader(w),s.deleteShader(R);let B;this.getUniforms=function(){return B===void 0&&(B=new $r(s,p)),B};let M;return this.getAttributes=function(){return M===void 0&&(M=m_(s,p)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=l_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=R,this}let T_=0;class P_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new A_(e);t.set(e,i)}return t.get(e)}}class A_{constructor(e){this.id=T_++,this.code=e,this.usedTimes=0}}function L_(n,e,t,i,s,r,a){const o=new ed,l=new P_,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,A,X,U,pe){const ce=U.fog,k=pe.geometry,ee=M.isMeshStandardMaterial?U.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||ee),$=!!V&&V.mapping===po?V.image.height:null,G=v[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const H=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,J=H!==void 0?H.length:0;let le=0;k.morphAttributes.position!==void 0&&(le=1),k.morphAttributes.normal!==void 0&&(le=2),k.morphAttributes.color!==void 0&&(le=3);let se,oe,we,Ee;if(G){const We=pn[G];se=We.vertexShader,oe=We.fragmentShader}else se=M.vertexShader,oe=M.fragmentShader,l.update(M),we=l.getVertexShaderID(M),Ee=l.getFragmentShaderID(M);const Z=n.getRenderTarget(),Ve=M.alphaTest>0,Te=M.clearcoat>0,Le=M.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:M.type,vertexShader:se,fragmentShader:oe,defines:M.defines,customVertexShaderID:we,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:pe.isInstancedMesh===!0,instancingColor:pe.isInstancedMesh===!0&&pe.instanceColor!==null,supportsVertexTextures:u,outputEncoding:Z===null?n.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:Ni,map:!!M.map,matcap:!!M.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:$,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===tm,tangentSpaceNormalMap:M.normalMapType===Es,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===nt,clearcoat:Te,clearcoatMap:Te&&!!M.clearcoatMap,clearcoatRoughnessMap:Te&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:Te&&!!M.clearcoatNormalMap,iridescence:Le,iridescenceMap:Le&&!!M.iridescenceMap,iridescenceThicknessMap:Le&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===as,alphaMap:!!M.alphaMap,alphaTest:Ve,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!k.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!ce,useFog:M.fog===!0,fogExp2:ce&&ce.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:pe.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Rn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gs,flipSided:M.side===Jt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)A.push(X),A.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(x(A,M),S(A,M),A.push(n.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function x(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.combine),M.push(A.vertexUvs),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function S(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),A.fog&&o.enable(33),M.push(o.mask),o.disableAll(),A.useFog&&o.enable(0),A.flatShading&&o.enable(1),A.logarithmicDepthBuffer&&o.enable(2),A.skinning&&o.enable(3),A.morphTargets&&o.enable(4),A.morphNormals&&o.enable(5),A.morphColors&&o.enable(6),A.premultipliedAlpha&&o.enable(7),A.shadowMapEnabled&&o.enable(8),A.physicallyCorrectLights&&o.enable(9),A.doubleSided&&o.enable(10),A.flipSided&&o.enable(11),A.useDepthPacking&&o.enable(12),A.dithering&&o.enable(13),A.specularIntensityMap&&o.enable(14),A.specularColorMap&&o.enable(15),A.transmission&&o.enable(16),A.transmissionMap&&o.enable(17),A.thicknessMap&&o.enable(18),A.sheen&&o.enable(19),A.sheenColorMap&&o.enable(20),A.sheenRoughnessMap&&o.enable(21),A.decodeVideoTexture&&o.enable(22),A.opaque&&o.enable(23),M.push(o.mask)}function C(M){const A=v[M.type];let X;if(A){const U=pn[A];X=vm.clone(U.uniforms)}else X=M.uniforms;return X}function E(M,A){let X;for(let U=0,pe=c.length;U<pe;U++){const ce=c[U];if(ce.cacheKey===A){X=ce,++X.usedTimes;break}}return X===void 0&&(X=new C_(n,A,M,r),c.push(X)),X}function w(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:C,acquireProgram:E,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:B}}function R_(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function D_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,m,v,p,f){let x=n[e];return x===void 0?(x={id:d.id,object:d,geometry:u,material:m,groupOrder:v,renderOrder:d.renderOrder,z:p,group:f},n[e]=x):(x.id=d.id,x.object=d,x.geometry=u,x.material=m,x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=p,x.group=f),e++,x}function o(d,u,m,v,p,f){const x=a(d,u,m,v,p,f);m.transmission>0?i.push(x):m.transparent===!0?s.push(x):t.push(x)}function l(d,u,m,v,p,f){const x=a(d,u,m,v,p,f);m.transmission>0?i.unshift(x):m.transparent===!0?s.unshift(x):t.unshift(x)}function c(d,u){t.length>1&&t.sort(d||D_),i.length>1&&i.sort(u||Hc),s.length>1&&s.sort(u||Hc)}function h(){for(let d=e,u=n.length;d<u;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function I_(){let n=new WeakMap;function e(i,s){let r;return n.has(i)===!1?(r=new Gc,n.set(i,[r])):s>=n.get(i).length?(r=new Gc,n.get(i).push(r)):r=n.get(i)[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function k_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ke};break;case"SpotLight":t={position:new D,direction:new D,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function N_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let F_=0;function B_(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function z_(n,e){const t=new k_,i=N_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)s.probe.push(new D);const r=new D,a=new _t,o=new _t;function l(h,d){let u=0,m=0,v=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let p=0,f=0,x=0,S=0,C=0,E=0,w=0,R=0;h.sort(B_);const B=d!==!0?Math.PI:1;for(let A=0,X=h.length;A<X;A++){const U=h[A],pe=U.color,ce=U.intensity,k=U.distance,ee=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=pe.r*ce*B,m+=pe.g*ce*B,v+=pe.b*ce*B;else if(U.isLightProbe)for(let V=0;V<9;V++)s.probe[V].addScaledVector(U.sh.coefficients[V],ce);else if(U.isDirectionalLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*B),U.castShadow){const $=U.shadow,G=i.get(U);G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,s.directionalShadow[p]=G,s.directionalShadowMap[p]=ee,s.directionalShadowMatrix[p]=U.shadow.matrix,E++}s.directional[p]=V,p++}else if(U.isSpotLight){const V=t.get(U);if(V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(pe).multiplyScalar(ce*B),V.distance=k,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,U.castShadow){const $=U.shadow,G=i.get(U);G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,s.spotShadow[x]=G,s.spotShadowMap[x]=ee,s.spotShadowMatrix[x]=U.shadow.matrix,R++}s.spot[x]=V,x++}else if(U.isRectAreaLight){const V=t.get(U);V.color.copy(pe).multiplyScalar(ce),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),s.rectArea[S]=V,S++}else if(U.isPointLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*B),V.distance=U.distance,V.decay=U.decay,U.castShadow){const $=U.shadow,G=i.get(U);G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,s.pointShadow[f]=G,s.pointShadowMap[f]=ee,s.pointShadowMatrix[f]=U.shadow.matrix,w++}s.point[f]=V,f++}else if(U.isHemisphereLight){const V=t.get(U);V.skyColor.copy(U.color).multiplyScalar(ce*B),V.groundColor.copy(U.groundColor).multiplyScalar(ce*B),s.hemi[C]=V,C++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=m,s.ambient[2]=v;const M=s.hash;(M.directionalLength!==p||M.pointLength!==f||M.spotLength!==x||M.rectAreaLength!==S||M.hemiLength!==C||M.numDirectionalShadows!==E||M.numPointShadows!==w||M.numSpotShadows!==R)&&(s.directional.length=p,s.spot.length=x,s.rectArea.length=S,s.point.length=f,s.hemi.length=C,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=w,s.spotShadowMatrix.length=R,M.directionalLength=p,M.pointLength=f,M.spotLength=x,M.rectAreaLength=S,M.hemiLength=C,M.numDirectionalShadows=E,M.numPointShadows=w,M.numSpotShadows=R,s.version=F_++)}function c(h,d){let u=0,m=0,v=0,p=0,f=0;const x=d.matrixWorldInverse;for(let S=0,C=h.length;S<C;S++){const E=h[S];if(E.isDirectionalLight){const w=s.directional[u];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),u++}else if(E.isSpotLight){const w=s.spot[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),v++}else if(E.isRectAreaLight){const w=s.rectArea[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(x),o.identity(),a.copy(E.matrixWorld),a.premultiply(x),o.extractRotation(a),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(E.isPointLight){const w=s.point[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(x),m++}else if(E.isHemisphereLight){const w=s.hemi[f];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(x),f++}}}return{setup:l,setupView:c,state:s}}function Wc(n,e){const t=new z_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(d){i.push(d)}function o(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function O_(n,e){let t=new WeakMap;function i(r,a=0){let o;return t.has(r)===!1?(o=new Wc(n,e),t.set(r,[o])):a>=t.get(r).length?(o=new Wc(n,e),t.get(r).push(o)):o=t.get(r)[a],o}function s(){t=new WeakMap}return{get:i,dispose:s}}class ud extends pt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fd extends pt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
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
}`;function H_(n,e,t){let i=new rd;const s=new qe,r=new qe,a=new ft,o=new ud({depthPacking:em}),l=new fd,c={},h=t.maxTextureSize,d={0:Jt,1:Ys,2:gs},u=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:U_,fragmentShader:V_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new ei;v.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ln(v,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wh,this.render=function(E,w,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const B=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),X=n.state;X.setBlending(jn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);for(let U=0,pe=E.length;U<pe;U++){const ce=E[U],k=ce.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ee=k.getFrameExtents();if(s.multiply(ee),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,k.mapSize.y=r.y)),k.map===null&&!k.isPointLightShadow&&this.type===Bs&&(k.map=new Yn(s.x,s.y),k.map.texture.name=ce.name+".shadowMap",k.mapPass=new Yn(s.x,s.y),k.camera.updateProjectionMatrix()),k.map===null){const $={minFilter:Pt,magFilter:Pt,format:Yt};k.map=new Yn(s.x,s.y,$),k.map.texture.name=ce.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const V=k.getViewportCount();for(let $=0;$<V;$++){const G=k.getViewport($);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),X.viewport(a),k.updateMatrices(ce,$),i=k.getFrustum(),C(w,R,k.camera,ce,this.type)}!k.isPointLightShadow&&this.type===Bs&&x(k,R),k.needsUpdate=!1}f.needsUpdate=!1,n.setRenderTarget(B,M,A)};function x(E,w){const R=e.update(p);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,R,u,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,R,m,p,null)}function S(E,w,R,B,M,A){let X=null;const U=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0?X=U:X=R.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const pe=X.uuid,ce=w.uuid;let k=c[pe];k===void 0&&(k={},c[pe]=k);let ee=k[ce];ee===void 0&&(ee=X.clone(),k[ce]=ee),X=ee}return X.visible=w.visible,X.wireframe=w.wireframe,A===Bs?X.side=w.shadowSide!==null?w.shadowSide:w.side:X.side=w.shadowSide!==null?w.shadowSide:d[w.side],X.alphaMap=w.alphaMap,X.alphaTest=w.alphaTest,X.clipShadows=w.clipShadows,X.clippingPlanes=w.clippingPlanes,X.clipIntersection=w.clipIntersection,X.displacementMap=w.displacementMap,X.displacementScale=w.displacementScale,X.displacementBias=w.displacementBias,X.wireframeLinewidth=w.wireframeLinewidth,X.linewidth=w.linewidth,R.isPointLight===!0&&X.isMeshDistanceMaterial===!0&&(X.referencePosition.setFromMatrixPosition(R.matrixWorld),X.nearDistance=B,X.farDistance=M),X}function C(E,w,R,B,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Bs)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const U=e.update(E),pe=E.material;if(Array.isArray(pe)){const ce=U.groups;for(let k=0,ee=ce.length;k<ee;k++){const V=ce[k],$=pe[V.materialIndex];if($&&$.visible){const G=S(E,$,B,R.near,R.far,M);n.renderBufferDirect(R,null,U,G,E,V)}}}else if(pe.visible){const ce=S(E,pe,B,R.near,R.far,M);n.renderBufferDirect(R,null,U,ce,E,null)}}const X=E.children;for(let U=0,pe=X.length;U<pe;U++)C(X[U],w,R,B,M)}}function G_(n,e,t){const i=t.isWebGL2;function s(){let T=!1;const de=new ft;let ue=null;const Se=new ft(0,0,0,0);return{setMask:function(ge){ue!==ge&&!T&&(n.colorMask(ge,ge,ge,ge),ue=ge)},setLocked:function(ge){T=ge},setClear:function(ge,Ce,he,Ae,je){je===!0&&(ge*=Ae,Ce*=Ae,he*=Ae),de.set(ge,Ce,he,Ae),Se.equals(de)===!1&&(n.clearColor(ge,Ce,he,Ae),Se.copy(de))},reset:function(){T=!1,ue=null,Se.set(-1,0,0,0)}}}function r(){let T=!1,de=null,ue=null,Se=null;return{setTest:function(ge){ge?Ee(2929):Z(2929)},setMask:function(ge){de!==ge&&!T&&(n.depthMask(ge),de=ge)},setFunc:function(ge){if(ue!==ge){if(ge)switch(ge){case wp:n.depthFunc(512);break;case Sp:n.depthFunc(519);break;case Ep:n.depthFunc(513);break;case ba:n.depthFunc(515);break;case Cp:n.depthFunc(514);break;case Tp:n.depthFunc(518);break;case Pp:n.depthFunc(516);break;case Ap:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);ue=ge}},setLocked:function(ge){T=ge},setClear:function(ge){Se!==ge&&(n.clearDepth(ge),Se=ge)},reset:function(){T=!1,de=null,ue=null,Se=null}}}function a(){let T=!1,de=null,ue=null,Se=null,ge=null,Ce=null,he=null,Ae=null,je=null;return{setTest:function(Ye){T||(Ye?Ee(2960):Z(2960))},setMask:function(Ye){de!==Ye&&!T&&(n.stencilMask(Ye),de=Ye)},setFunc:function(Ye,xt,nn){(ue!==Ye||Se!==xt||ge!==nn)&&(n.stencilFunc(Ye,xt,nn),ue=Ye,Se=xt,ge=nn)},setOp:function(Ye,xt,nn){(Ce!==Ye||he!==xt||Ae!==nn)&&(n.stencilOp(Ye,xt,nn),Ce=Ye,he=xt,Ae=nn)},setLocked:function(Ye){T=Ye},setClear:function(Ye){je!==Ye&&(n.clearStencil(Ye),je=Ye)},reset:function(){T=!1,de=null,ue=null,Se=null,ge=null,Ce=null,he=null,Ae=null,je=null}}}const o=new s,l=new r,c=new a;let h={},d={},u=new WeakMap,m=[],v=null,p=!1,f=null,x=null,S=null,C=null,E=null,w=null,R=null,B=!1,M=null,A=null,X=null,U=null,pe=null;const ce=n.getParameter(35661);let k=!1,ee=0;const V=n.getParameter(7938);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=ee>=2);let $=null,G={};const H=n.getParameter(3088),J=n.getParameter(2978),le=new ft().fromArray(H),se=new ft().fromArray(J);function oe(T,de,ue){const Se=new Uint8Array(4),ge=n.createTexture();n.bindTexture(T,ge),n.texParameteri(T,10241,9728),n.texParameteri(T,10240,9728);for(let Ce=0;Ce<ue;Ce++)n.texImage2D(de+Ce,0,6408,1,1,0,6408,5121,Se);return ge}const we={};we[3553]=oe(3553,3553,1),we[34067]=oe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(2929),l.setFunc(ba),P(!1),z(Il),Ee(2884),Ne(jn);function Ee(T){h[T]!==!0&&(n.enable(T),h[T]=!0)}function Z(T){h[T]!==!1&&(n.disable(T),h[T]=!1)}function Ve(T,de){return d[T]!==de?(n.bindFramebuffer(T,de),d[T]=de,i&&(T===36009&&(d[36160]=de),T===36160&&(d[36009]=de)),!0):!1}function Te(T,de){let ue=m,Se=!1;if(T)if(ue=u.get(de),ue===void 0&&(ue=[],u.set(de,ue)),T.isWebGLMultipleRenderTargets){const ge=T.texture;if(ue.length!==ge.length||ue[0]!==36064){for(let Ce=0,he=ge.length;Ce<he;Ce++)ue[Ce]=36064+Ce;ue.length=ge.length,Se=!0}}else ue[0]!==36064&&(ue[0]=36064,Se=!0);else ue[0]!==1029&&(ue[0]=1029,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Le(T){return v!==T?(n.useProgram(T),v=T,!0):!1}const ve={[ns]:32774,[up]:32778,[fp]:32779};if(i)ve[Bl]=32775,ve[zl]=32776;else{const T=e.get("EXT_blend_minmax");T!==null&&(ve[Bl]=T.MIN_EXT,ve[zl]=T.MAX_EXT)}const We={[pp]:0,[mp]:1,[gp]:768,[$h]:770,[Mp]:776,[bp]:774,[_p]:772,[vp]:769,[qh]:771,[yp]:775,[xp]:773};function Ne(T,de,ue,Se,ge,Ce,he,Ae){if(T===jn){p===!0&&(Z(3042),p=!1);return}if(p===!1&&(Ee(3042),p=!0),T!==dp){if(T!==f||Ae!==B){if((x!==ns||E!==ns)&&(n.blendEquation(32774),x=ns,E=ns),Ae)switch(T){case as:n.blendFuncSeparate(1,771,1,771);break;case kl:n.blendFunc(1,1);break;case Nl:n.blendFuncSeparate(0,769,0,1);break;case Fl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case as:n.blendFuncSeparate(770,771,1,771);break;case kl:n.blendFunc(770,1);break;case Nl:n.blendFuncSeparate(0,769,0,1);break;case Fl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}S=null,C=null,w=null,R=null,f=T,B=Ae}return}ge=ge||de,Ce=Ce||ue,he=he||Se,(de!==x||ge!==E)&&(n.blendEquationSeparate(ve[de],ve[ge]),x=de,E=ge),(ue!==S||Se!==C||Ce!==w||he!==R)&&(n.blendFuncSeparate(We[ue],We[Se],We[Ce],We[he]),S=ue,C=Se,w=Ce,R=he),f=T,B=null}function y(T,de){T.side===gs?Z(2884):Ee(2884);let ue=T.side===Jt;de&&(ue=!ue),P(ue),T.blending===as&&T.transparent===!1?Ne(jn):Ne(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),o.setMask(T.colorWrite);const Se=T.stencilWrite;c.setTest(Se),Se&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Y(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Ee(32926):Z(32926)}function P(T){M!==T&&(T?n.frontFace(2304):n.frontFace(2305),M=T)}function z(T){T!==ap?(Ee(2884),T!==A&&(T===Il?n.cullFace(1029):T===lp?n.cullFace(1028):n.cullFace(1032))):Z(2884),A=T}function j(T){T!==X&&(k&&n.lineWidth(T),X=T)}function Y(T,de,ue){T?(Ee(32823),(U!==de||pe!==ue)&&(n.polygonOffset(de,ue),U=de,pe=ue)):Z(32823)}function ne(T){T?Ee(3089):Z(3089)}function ie(T){T===void 0&&(T=33984+ce-1),$!==T&&(n.activeTexture(T),$=T)}function re(T,de){$===null&&ie();let ue=G[$];ue===void 0&&(ue={type:void 0,texture:void 0},G[$]=ue),(ue.type!==T||ue.texture!==de)&&(n.bindTexture(T,de||we[T]),ue.type=T,ue.texture=de)}function ae(){const T=G[$];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function _(){try{n.compressedTexImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function g(){try{n.texSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function L(){try{n.texSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function F(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function q(){try{n.texStorage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function I(){try{n.texImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function fe(T){le.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),le.copy(T))}function _e(T){se.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),se.copy(T))}function xe(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,G={},d={},u=new WeakMap,m=[],v=null,p=!1,f=null,x=null,S=null,C=null,E=null,w=null,R=null,B=!1,M=null,A=null,X=null,U=null,pe=null,le.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ee,disable:Z,bindFramebuffer:Ve,drawBuffers:Te,useProgram:Le,setBlending:Ne,setMaterial:y,setFlipSided:P,setCullFace:z,setLineWidth:j,setPolygonOffset:Y,setScissorTest:ne,activeTexture:ie,bindTexture:re,unbindTexture:ae,compressedTexImage2D:_,texImage2D:be,texImage3D:I,texStorage2D:q,texStorage3D:te,texSubImage2D:g,texSubImage3D:L,compressedTexSubImage2D:F,scissor:fe,viewport:_e,reset:xe}}function W_(n,e,t,i,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,h=s.maxTextureSize,d=s.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(_,g){return x?new OffscreenCanvas(_,g):Jr("canvas")}function C(_,g,L,F){let q=1;if((_.width>F||_.height>F)&&(q=F/Math.max(_.width,_.height)),q<1||g===!0)if(typeof HTMLImageElement!="undefined"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&_ instanceof ImageBitmap){const te=g?Ca:Math.floor,be=te(q*_.width),I=te(q*_.height);p===void 0&&(p=S(be,I));const fe=L?S(be,I):p;return fe.width=be,fe.height=I,fe.getContext("2d").drawImage(_,0,0,be,I),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+be+"x"+I+")."),fe}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_;return _}function E(_){return dc(_.width)&&dc(_.height)}function w(_){return o?!1:_.wrapS!==$t||_.wrapT!==$t||_.minFilter!==Pt&&_.minFilter!==Bt}function R(_,g){return _.generateMipmaps&&g&&_.minFilter!==Pt&&_.minFilter!==Bt}function B(_){n.generateMipmap(_)}function M(_,g,L,F,q=!1){if(o===!1)return g;if(_!==null){if(n[_]!==void 0)return n[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let te=g;return g===6403&&(L===5126&&(te=33326),L===5131&&(te=33325),L===5121&&(te=33321)),g===33319&&(L===5126&&(te=33328),L===5131&&(te=33327),L===5121&&(te=33323)),g===6408&&(L===5126&&(te=34836),L===5131&&(te=34842),L===5121&&(te=F===nt&&q===!1?35907:32856),L===32819&&(te=32854),L===32820&&(te=32855)),(te===33325||te===33326||te===33327||te===33328||te===34842||te===34836)&&e.get("EXT_color_buffer_float"),te}function A(_,g,L){return R(_,L)===!0||_.isFramebufferTexture&&_.minFilter!==Pt&&_.minFilter!==Bt?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function X(_){return _===Pt||_===Ol||_===Ul?9728:9729}function U(_){const g=_.target;g.removeEventListener("dispose",U),ce(g),g.isVideoTexture&&v.delete(g)}function pe(_){const g=_.target;g.removeEventListener("dispose",pe),ee(g)}function ce(_){const g=i.get(_);if(g.__webglInit===void 0)return;const L=_.source,F=f.get(L);if(F){const q=F[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&k(_),Object.keys(F).length===0&&f.delete(L)}i.remove(_)}function k(_){const g=i.get(_);n.deleteTexture(g.__webglTexture);const L=_.source,F=f.get(L);delete F[g.__cacheKey],a.memory.textures--}function ee(_){const g=_.texture,L=i.get(_),F=i.get(g);if(F.__webglTexture!==void 0&&(n.deleteTexture(F.__webglTexture),a.memory.textures--),_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let q=0;q<6;q++)n.deleteFramebuffer(L.__webglFramebuffer[q]),L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[q]);else{if(n.deleteFramebuffer(L.__webglFramebuffer),L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let q=0;q<L.__webglColorRenderbuffer.length;q++)L.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[q]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(_.isWebGLMultipleRenderTargets)for(let q=0,te=g.length;q<te;q++){const be=i.get(g[q]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),a.memory.textures--),i.remove(g[q])}i.remove(g),i.remove(_)}let V=0;function $(){V=0}function G(){const _=V;return _>=l&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+l),V+=1,_}function H(_){const g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.encoding),g.join()}function J(_,g){const L=i.get(_);if(_.isVideoTexture&&re(_),_.isRenderTargetTexture===!1&&_.version>0&&L.__version!==_.version){const F=_.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(L,_,g);return}}t.activeTexture(33984+g),t.bindTexture(3553,L.__webglTexture)}function le(_,g){const L=i.get(_);if(_.version>0&&L.__version!==_.version){Te(L,_,g);return}t.activeTexture(33984+g),t.bindTexture(35866,L.__webglTexture)}function se(_,g){const L=i.get(_);if(_.version>0&&L.__version!==_.version){Te(L,_,g);return}t.activeTexture(33984+g),t.bindTexture(32879,L.__webglTexture)}function oe(_,g){const L=i.get(_);if(_.version>0&&L.__version!==_.version){Le(L,_,g);return}t.activeTexture(33984+g),t.bindTexture(34067,L.__webglTexture)}const we={[wa]:10497,[$t]:33071,[Sa]:33648},Ee={[Pt]:9728,[Ol]:9984,[Ul]:9986,[Bt]:9729,[Bp]:9985,[mo]:9987};function Z(_,g,L){if(L?(n.texParameteri(_,10242,we[g.wrapS]),n.texParameteri(_,10243,we[g.wrapT]),(_===32879||_===35866)&&n.texParameteri(_,32882,we[g.wrapR]),n.texParameteri(_,10240,Ee[g.magFilter]),n.texParameteri(_,10241,Ee[g.minFilter])):(n.texParameteri(_,10242,33071),n.texParameteri(_,10243,33071),(_===32879||_===35866)&&n.texParameteri(_,32882,33071),(g.wrapS!==$t||g.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(_,10240,X(g.magFilter)),n.texParameteri(_,10241,X(g.minFilter)),g.minFilter!==Pt&&g.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");if(g.type===pi&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Zs&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(_,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function Ve(_,g){let L=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",U));const F=g.source;let q=f.get(F);q===void 0&&(q={},f.set(F,q));const te=H(g);if(te!==_.__cacheKey){q[te]===void 0&&(q[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),q[te].usedTimes++;const be=q[_.__cacheKey];be!==void 0&&(q[_.__cacheKey].usedTimes--,be.usedTimes===0&&k(g)),_.__cacheKey=te,_.__webglTexture=q[te].texture}return L}function Te(_,g,L){let F=3553;g.isDataArrayTexture&&(F=35866),g.isData3DTexture&&(F=32879);const q=Ve(_,g),te=g.source;if(t.activeTexture(33984+L),t.bindTexture(F,_.__webglTexture),te.version!==te.__currentVersion||q===!0){n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const be=w(g)&&E(g.image)===!1;let I=C(g.image,be,!1,h);I=ae(g,I);const fe=E(I)||o,_e=r.convert(g.format,g.encoding);let xe=r.convert(g.type),T=M(g.internalFormat,_e,xe,g.encoding,g.isVideoTexture);Z(F,g,fe);let de;const ue=g.mipmaps,Se=o&&g.isVideoTexture!==!0,ge=te.__currentVersion===void 0||q===!0,Ce=A(g,I,fe);if(g.isDepthTexture)T=6402,o?g.type===pi?T=36012:g.type===fi?T=33190:g.type===ls?T=35056:T=33189:g.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Pi&&T===6402&&g.type!==jh&&g.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=fi,xe=r.convert(g.type)),g.format===xs&&T===6402&&(T=34041,g.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=ls,xe=r.convert(g.type))),ge&&(Se?t.texStorage2D(3553,1,T,I.width,I.height):t.texImage2D(3553,0,T,I.width,I.height,0,_e,xe,null));else if(g.isDataTexture)if(ue.length>0&&fe){Se&&ge&&t.texStorage2D(3553,Ce,T,ue[0].width,ue[0].height);for(let he=0,Ae=ue.length;he<Ae;he++)de=ue[he],Se?t.texSubImage2D(3553,he,0,0,de.width,de.height,_e,xe,de.data):t.texImage2D(3553,he,T,de.width,de.height,0,_e,xe,de.data);g.generateMipmaps=!1}else Se?(ge&&t.texStorage2D(3553,Ce,T,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,_e,xe,I.data)):t.texImage2D(3553,0,T,I.width,I.height,0,_e,xe,I.data);else if(g.isCompressedTexture){Se&&ge&&t.texStorage2D(3553,Ce,T,ue[0].width,ue[0].height);for(let he=0,Ae=ue.length;he<Ae;he++)de=ue[he],g.format!==Yt?_e!==null?Se?t.compressedTexSubImage2D(3553,he,0,0,de.width,de.height,_e,de.data):t.compressedTexImage2D(3553,he,T,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage2D(3553,he,0,0,de.width,de.height,_e,xe,de.data):t.texImage2D(3553,he,T,de.width,de.height,0,_e,xe,de.data)}else if(g.isDataArrayTexture)Se?(ge&&t.texStorage3D(35866,Ce,T,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,_e,xe,I.data)):t.texImage3D(35866,0,T,I.width,I.height,I.depth,0,_e,xe,I.data);else if(g.isData3DTexture)Se?(ge&&t.texStorage3D(32879,Ce,T,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,_e,xe,I.data)):t.texImage3D(32879,0,T,I.width,I.height,I.depth,0,_e,xe,I.data);else if(g.isFramebufferTexture){if(ge)if(Se)t.texStorage2D(3553,Ce,T,I.width,I.height);else{let he=I.width,Ae=I.height;for(let je=0;je<Ce;je++)t.texImage2D(3553,je,T,he,Ae,0,_e,xe,null),he>>=1,Ae>>=1}}else if(ue.length>0&&fe){Se&&ge&&t.texStorage2D(3553,Ce,T,ue[0].width,ue[0].height);for(let he=0,Ae=ue.length;he<Ae;he++)de=ue[he],Se?t.texSubImage2D(3553,he,0,0,_e,xe,de):t.texImage2D(3553,he,T,_e,xe,de);g.generateMipmaps=!1}else Se?(ge&&t.texStorage2D(3553,Ce,T,I.width,I.height),t.texSubImage2D(3553,0,0,0,_e,xe,I)):t.texImage2D(3553,0,T,_e,xe,I);R(g,fe)&&B(F),te.__currentVersion=te.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function Le(_,g,L){if(g.image.length!==6)return;const F=Ve(_,g),q=g.source;if(t.activeTexture(33984+L),t.bindTexture(34067,_.__webglTexture),q.version!==q.__currentVersion||F===!0){n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const te=g.isCompressedTexture||g.image[0].isCompressedTexture,be=g.image[0]&&g.image[0].isDataTexture,I=[];for(let he=0;he<6;he++)!te&&!be?I[he]=C(g.image[he],!1,!0,c):I[he]=be?g.image[he].image:g.image[he],I[he]=ae(g,I[he]);const fe=I[0],_e=E(fe)||o,xe=r.convert(g.format,g.encoding),T=r.convert(g.type),de=M(g.internalFormat,xe,T,g.encoding),ue=o&&g.isVideoTexture!==!0,Se=q.__currentVersion===void 0||F===!0;let ge=A(g,fe,_e);Z(34067,g,_e);let Ce;if(te){ue&&Se&&t.texStorage2D(34067,ge,de,fe.width,fe.height);for(let he=0;he<6;he++){Ce=I[he].mipmaps;for(let Ae=0;Ae<Ce.length;Ae++){const je=Ce[Ae];g.format!==Yt?xe!==null?ue?t.compressedTexSubImage2D(34069+he,Ae,0,0,je.width,je.height,xe,je.data):t.compressedTexImage2D(34069+he,Ae,de,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?t.texSubImage2D(34069+he,Ae,0,0,je.width,je.height,xe,T,je.data):t.texImage2D(34069+he,Ae,de,je.width,je.height,0,xe,T,je.data)}}}else{Ce=g.mipmaps,ue&&Se&&(Ce.length>0&&ge++,t.texStorage2D(34067,ge,de,I[0].width,I[0].height));for(let he=0;he<6;he++)if(be){ue?t.texSubImage2D(34069+he,0,0,0,I[he].width,I[he].height,xe,T,I[he].data):t.texImage2D(34069+he,0,de,I[he].width,I[he].height,0,xe,T,I[he].data);for(let Ae=0;Ae<Ce.length;Ae++){const Ye=Ce[Ae].image[he].image;ue?t.texSubImage2D(34069+he,Ae+1,0,0,Ye.width,Ye.height,xe,T,Ye.data):t.texImage2D(34069+he,Ae+1,de,Ye.width,Ye.height,0,xe,T,Ye.data)}}else{ue?t.texSubImage2D(34069+he,0,0,0,xe,T,I[he]):t.texImage2D(34069+he,0,de,xe,T,I[he]);for(let Ae=0;Ae<Ce.length;Ae++){const je=Ce[Ae];ue?t.texSubImage2D(34069+he,Ae+1,0,0,xe,T,je.image[he]):t.texImage2D(34069+he,Ae+1,de,xe,T,je.image[he])}}}R(g,_e)&&B(34067),q.__currentVersion=q.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function ve(_,g,L,F,q){const te=r.convert(L.format,L.encoding),be=r.convert(L.type),I=M(L.internalFormat,te,be,L.encoding);i.get(g).__hasExternalTextures||(q===32879||q===35866?t.texImage3D(q,0,I,g.width,g.height,g.depth,0,te,be,null):t.texImage2D(q,0,I,g.width,g.height,0,te,be,null)),t.bindFramebuffer(36160,_),ie(g)?u.framebufferTexture2DMultisampleEXT(36160,F,q,i.get(L).__webglTexture,0,ne(g)):n.framebufferTexture2D(36160,F,q,i.get(L).__webglTexture,0),t.bindFramebuffer(36160,null)}function We(_,g,L){if(n.bindRenderbuffer(36161,_),g.depthBuffer&&!g.stencilBuffer){let F=33189;if(L||ie(g)){const q=g.depthTexture;q&&q.isDepthTexture&&(q.type===pi?F=36012:q.type===fi&&(F=33190));const te=ne(g);ie(g)?u.renderbufferStorageMultisampleEXT(36161,te,F,g.width,g.height):n.renderbufferStorageMultisample(36161,te,F,g.width,g.height)}else n.renderbufferStorage(36161,F,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,_)}else if(g.depthBuffer&&g.stencilBuffer){const F=ne(g);L&&ie(g)===!1?n.renderbufferStorageMultisample(36161,F,35056,g.width,g.height):ie(g)?u.renderbufferStorageMultisampleEXT(36161,F,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,_)}else{const F=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let q=0;q<F.length;q++){const te=F[q],be=r.convert(te.format,te.encoding),I=r.convert(te.type),fe=M(te.internalFormat,be,I,te.encoding),_e=ne(g);L&&ie(g)===!1?n.renderbufferStorageMultisample(36161,_e,fe,g.width,g.height):ie(g)?u.renderbufferStorageMultisampleEXT(36161,_e,fe,g.width,g.height):n.renderbufferStorage(36161,fe,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function Ne(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J(g.depthTexture,0);const F=i.get(g.depthTexture).__webglTexture,q=ne(g);if(g.depthTexture.format===Pi)ie(g)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,F,0,q):n.framebufferTexture2D(36160,36096,3553,F,0);else if(g.depthTexture.format===xs)ie(g)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,F,0,q):n.framebufferTexture2D(36160,33306,3553,F,0);else throw new Error("Unknown depthTexture format")}function y(_){const g=i.get(_),L=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Ne(g.__webglFramebuffer,_)}else if(L){g.__webglDepthbuffer=[];for(let F=0;F<6;F++)t.bindFramebuffer(36160,g.__webglFramebuffer[F]),g.__webglDepthbuffer[F]=n.createRenderbuffer(),We(g.__webglDepthbuffer[F],_,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),We(g.__webglDepthbuffer,_,!1);t.bindFramebuffer(36160,null)}function P(_,g,L){const F=i.get(_);g!==void 0&&ve(F.__webglFramebuffer,_,_.texture,36064,3553),L!==void 0&&y(_)}function z(_){const g=_.texture,L=i.get(_),F=i.get(g);_.addEventListener("dispose",pe),_.isWebGLMultipleRenderTargets!==!0&&(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=g.version,a.memory.textures++);const q=_.isWebGLCubeRenderTarget===!0,te=_.isWebGLMultipleRenderTargets===!0,be=E(_)||o;if(q){L.__webglFramebuffer=[];for(let I=0;I<6;I++)L.__webglFramebuffer[I]=n.createFramebuffer()}else{if(L.__webglFramebuffer=n.createFramebuffer(),te)if(s.drawBuffers){const I=_.texture;for(let fe=0,_e=I.length;fe<_e;fe++){const xe=i.get(I[fe]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&_.samples>0&&ie(_)===!1){const I=te?g:[g];L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer);for(let fe=0;fe<I.length;fe++){const _e=I[fe];L.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(36161,L.__webglColorRenderbuffer[fe]);const xe=r.convert(_e.format,_e.encoding),T=r.convert(_e.type),de=M(_e.internalFormat,xe,T,_e.encoding),ue=ne(_);n.renderbufferStorageMultisample(36161,ue,de,_.width,_.height),n.framebufferRenderbuffer(36160,36064+fe,36161,L.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(36161,null),_.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),We(L.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(36160,null)}}if(q){t.bindTexture(34067,F.__webglTexture),Z(34067,g,be);for(let I=0;I<6;I++)ve(L.__webglFramebuffer[I],_,g,36064,34069+I);R(g,be)&&B(34067),t.unbindTexture()}else if(te){const I=_.texture;for(let fe=0,_e=I.length;fe<_e;fe++){const xe=I[fe],T=i.get(xe);t.bindTexture(3553,T.__webglTexture),Z(3553,xe,be),ve(L.__webglFramebuffer,_,xe,36064+fe,3553),R(xe,be)&&B(3553)}t.unbindTexture()}else{let I=3553;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(o?I=_.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(I,F.__webglTexture),Z(I,g,be),ve(L.__webglFramebuffer,_,g,36064,I),R(g,be)&&B(I),t.unbindTexture()}_.depthBuffer&&y(_)}function j(_){const g=E(_)||o,L=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let F=0,q=L.length;F<q;F++){const te=L[F];if(R(te,g)){const be=_.isWebGLCubeRenderTarget?34067:3553,I=i.get(te).__webglTexture;t.bindTexture(be,I),B(be),t.unbindTexture()}}}function Y(_){if(o&&_.samples>0&&ie(_)===!1){const g=_.isWebGLMultipleRenderTargets?_.texture:[_.texture],L=_.width,F=_.height;let q=16384;const te=[],be=_.stencilBuffer?33306:36096,I=i.get(_),fe=_.isWebGLMultipleRenderTargets===!0;if(fe)for(let _e=0;_e<g.length;_e++)t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,I.__webglFramebuffer),n.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,I.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,I.__webglFramebuffer);for(let _e=0;_e<g.length;_e++){te.push(36064+_e),_.depthBuffer&&te.push(be);const xe=I.__ignoreDepthValues!==void 0?I.__ignoreDepthValues:!1;if(xe===!1&&(_.depthBuffer&&(q|=256),_.stencilBuffer&&(q|=1024)),fe&&n.framebufferRenderbuffer(36008,36064,36161,I.__webglColorRenderbuffer[_e]),xe===!0&&(n.invalidateFramebuffer(36008,[be]),n.invalidateFramebuffer(36009,[be])),fe){const T=i.get(g[_e]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,T,0)}n.blitFramebuffer(0,0,L,F,0,0,L,F,q,9728),m&&n.invalidateFramebuffer(36008,te)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),fe)for(let _e=0;_e<g.length;_e++){t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+_e,36161,I.__webglColorRenderbuffer[_e]);const xe=i.get(g[_e]).__webglTexture;t.bindFramebuffer(36160,I.__webglFramebuffer),n.framebufferTexture2D(36009,36064+_e,3553,xe,0)}t.bindFramebuffer(36009,I.__webglMultisampledFramebuffer)}}function ne(_){return Math.min(d,_.samples)}function ie(_){const g=i.get(_);return o&&_.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function re(_){const g=a.render.frame;v.get(_)!==g&&(v.set(_,g),_.update())}function ae(_,g){const L=_.encoding,F=_.format,q=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===Ea||L!==Ni&&(L===nt?o===!1?e.has("EXT_sRGB")===!0&&F===Yt?(_.format=Ea,_.minFilter=Bt,_.generateMipmaps=!1):g=Kh.sRGBToLinear(g):(F!==Yt||q!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",L)),g}this.allocateTextureUnit=G,this.resetTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=le,this.setTexture3D=se,this.setTextureCube=oe,this.rebindTextures=P,this.setupRenderTarget=z,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ie}function $_(n,e,t){const i=t.isWebGL2;function s(r,a=null){let o;if(r===ki)return 5121;if(r===Vp)return 32819;if(r===Hp)return 32820;if(r===zp)return 5120;if(r===Op)return 5122;if(r===jh)return 5123;if(r===Up)return 5124;if(r===fi)return 5125;if(r===pi)return 5126;if(r===Zs)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Gp)return 6406;if(r===Yt)return 6408;if(r===$p)return 6409;if(r===qp)return 6410;if(r===Pi)return 6402;if(r===xs)return 34041;if(r===Xp)return 6403;if(r===Wp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ea)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===jp)return 36244;if(r===Yp)return 33319;if(r===Zp)return 33320;if(r===Kp)return 36249;if(r===Co||r===To||r===Po||r===Ao)if(a===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===To)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Po)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ao)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vl||r===Hl||r===Gl||r===Wl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Vl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$l||r===ql)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===$l)return a===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ql)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xl||r===jl||r===Yl||r===Zl||r===Kl||r===Jl||r===Ql||r===ec||r===tc||r===nc||r===ic||r===sc||r===rc||r===oc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Xl)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jl)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yl)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zl)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kl)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jl)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ql)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ec)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ic)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===oc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ac)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ac)return a===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ls?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class q_ extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Or extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X_={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(s=t.getPose(e.targetRaySpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X_))),c&&e.hand){a=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const S=new Or;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[p.jointName]=S,c.add(S)}const x=c.joints[p.jointName];f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&u>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class j_ extends Qt{constructor(e,t,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Pi,h!==Pi&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Pi&&(i=fi),i===void 0&&h===xs&&(i=ls),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1}}class Y_ extends Cs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=null,c=null,h=null,d=null,u=null,m=null;const v=t.getContextAttributes();let p=null,f=null;const x=[],S=new Map,C=new zt;C.layers.enable(1),C.viewport=new ft;const E=new zt;E.layers.enable(2),E.viewport=new ft;const w=[C,E],R=new q_;R.layers.enable(1),R.layers.enable(2);let B=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=x[H];return J===void 0&&(J=new sa,x[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=x[H];return J===void 0&&(J=new sa,x[H]=J),J.getGripSpace()},this.getHand=function(H){let J=x[H];return J===void 0&&(J=new sa,x[H]=J),J.getHandSpace()};function A(H){const J=S.get(H.inputSource);J!==void 0&&J.dispatchEvent({type:H.type,data:H.inputSource})}function X(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",U),S.forEach(function(H,J){H!==void 0&&H.disconnect(J)}),S.clear(),B=null,M=null,e.setRenderTarget(p),u=null,d=null,h=null,s=null,f=null,G.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",X),s.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:u}),f=new Yn(u.framebufferWidth,u.framebufferHeight,{format:Yt,type:ki,encoding:e.outputEncoding})}else{let J=null,le=null,se=null;v.depth&&(se=v.stencil?35056:33190,J=v.stencil?xs:Pi,le=v.stencil?ls:fi);const oe={colorFormat:e.outputEncoding===nt?35907:32856,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(oe),s.updateRenderState({layers:[d]}),f=new Yn(d.textureWidth,d.textureHeight,{format:Yt,type:ki,depthTexture:new j_(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const we=e.properties.get(f);we.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await s.requestReferenceSpace(o),G.setContext(s),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function U(H){const J=s.inputSources;for(let le=0;le<J.length;le++){const se=J[le].handedness==="right"?1:0;S.set(J[le],x[se])}for(let le=0;le<H.removed.length;le++){const se=H.removed[le],oe=S.get(se);oe&&(oe.dispatchEvent({type:"disconnected",data:se}),S.delete(se))}for(let le=0;le<H.added.length;le++){const se=H.added[le],oe=S.get(se);oe&&oe.dispatchEvent({type:"connected",data:se})}}const pe=new D,ce=new D;function k(H,J,le){pe.setFromMatrixPosition(J.matrixWorld),ce.setFromMatrixPosition(le.matrixWorld);const se=pe.distanceTo(ce),oe=J.projectionMatrix.elements,we=le.projectionMatrix.elements,Ee=oe[14]/(oe[10]-1),Z=oe[14]/(oe[10]+1),Ve=(oe[9]+1)/oe[5],Te=(oe[9]-1)/oe[5],Le=(oe[8]-1)/oe[0],ve=(we[8]+1)/we[0],We=Ee*Le,Ne=Ee*ve,y=se/(-Le+ve),P=y*-Le;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(P),H.translateZ(y),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const z=Ee+y,j=Z+y,Y=We-P,ne=Ne+(se-P),ie=Ve*Z/j*z,re=Te*Z/j*z;H.projectionMatrix.makePerspective(Y,ne,ie,re,z,j)}function ee(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;R.near=E.near=C.near=H.near,R.far=E.far=C.far=H.far,(B!==R.near||M!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,M=R.far);const J=H.parent,le=R.cameras;ee(R,J);for(let oe=0;oe<le.length;oe++)ee(le[oe],J);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),H.position.copy(R.position),H.quaternion.copy(R.quaternion),H.scale.copy(R.scale),H.matrix.copy(R.matrix),H.matrixWorld.copy(R.matrixWorld);const se=H.children;for(let oe=0,we=se.length;oe<we;oe++)se[oe].updateMatrixWorld(!0);le.length===2?k(R,C,E):R.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(H){d!==null&&(d.fixedFoveation=H),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=H)};let V=null;function $(H,J){if(c=J.getViewerPose(l||a),m=J,c!==null){const se=c.views;u!==null&&(e.setRenderTargetFramebuffer(f,u.framebuffer),e.setRenderTarget(f));let oe=!1;se.length!==R.cameras.length&&(R.cameras.length=0,oe=!0);for(let we=0;we<se.length;we++){const Ee=se[we];let Z=null;if(u!==null)Z=u.getViewport(Ee);else{const Te=h.getViewSubImage(d,Ee);Z=Te.viewport,we===0&&(e.setRenderTargetTextures(f,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(f))}let Ve=w[we];Ve===void 0&&(Ve=new zt,Ve.layers.enable(we),Ve.viewport=new ft,w[we]=Ve),Ve.matrix.fromArray(Ee.transform.matrix),Ve.projectionMatrix.fromArray(Ee.projectionMatrix),Ve.viewport.set(Z.x,Z.y,Z.width,Z.height),we===0&&R.matrix.copy(Ve.matrix),oe===!0&&R.cameras.push(Ve)}}const le=s.inputSources;for(let se=0;se<x.length;se++){const oe=le[se],we=S.get(oe);we!==void 0&&we.update(oe,J,l||a)}V&&V(H,J),m=null}const G=new od;G.setAnimationLoop($),this.setAnimationLoop=function(H){V=H},this.dispose=function(){}}}function Z_(n,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,x,S,C){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),c(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,C)):f.isMeshMatcapMaterial?(s(p,f),m(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,x,S):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Jt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Jt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const E=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*E}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let S;f.map?S=f.map:f.specularMap?S=f.specularMap:f.displacementMap?S=f.displacementMap:f.normalMap?S=f.normalMap:f.bumpMap?S=f.bumpMap:f.roughnessMap?S=f.roughnessMap:f.metalnessMap?S=f.metalnessMap:f.alphaMap?S=f.alphaMap:f.emissiveMap?S=f.emissiveMap:f.clearcoatMap?S=f.clearcoatMap:f.clearcoatNormalMap?S=f.clearcoatNormalMap:f.clearcoatRoughnessMap?S=f.clearcoatRoughnessMap:f.iridescenceMap?S=f.iridescenceMap:f.iridescenceThicknessMap?S=f.iridescenceThicknessMap:f.specularIntensityMap?S=f.specularIntensityMap:f.specularColorMap?S=f.specularColorMap:f.transmissionMap?S=f.transmissionMap:f.thicknessMap?S=f.thicknessMap:f.sheenColorMap?S=f.sheenColorMap:f.sheenRoughnessMap&&(S=f.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let C;f.aoMap?C=f.aoMap:f.lightMap&&(C=f.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uv2Transform.value.copy(C.matrix))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,x,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=S*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let C;f.map?C=f.map:f.alphaMap&&(C=f.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uvTransform.value.copy(C.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Jt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function K_(){const n=Jr("canvas");return n.style.display="block",n}function pd(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:K_(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,r=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=n.alpha!==void 0?n.alpha:!1;let d=null,u=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ni,this.physicallyCorrectLights=!1,this.toneMapping=Rn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,x=0,S=0,C=null,E=-1,w=null;const R=new ft,B=new ft;let M=null,A=e.width,X=e.height,U=1,pe=null,ce=null;const k=new ft(0,0,A,X),ee=new ft(0,0,A,X);let V=!1;const $=new rd;let G=!1,H=!1,J=null;const le=new _t,se=new qe,oe=new D,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return C===null?U:1}let Z=t;function Ve(b,N){for(let W=0;W<b.length;W++){const O=b[W],Q=e.getContext(O,N);if(Q!==null)return Q}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",T,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",ue,!1),Z===null){const N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),Z=Ve(N,b),Z===null)throw Ve(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Te,Le,ve,We,Ne,y,P,z,j,Y,ne,ie,re,ae,_,g,L,F,q,te,be,I,fe;function _e(){Te=new hv(Z),Le=new iv(Z,Te,n),Te.init(Le),I=new $_(Z,Te,Le),ve=new G_(Z,Te,Le),We=new fv,Ne=new R_,y=new W_(Z,Te,ve,Ne,Le,I,We),P=new rv(p),z=new cv(p),j=new Sm(Z,Le),fe=new tv(Z,Te,j,Le),Y=new dv(Z,j,We,fe),ne=new vv(Z,Y,j,We),q=new gv(Z,Le,y),g=new sv(Ne),ie=new L_(p,P,z,Te,Le,fe,g),re=new Z_(p,Ne),ae=new I_,_=new O_(Te,Le),F=new ev(p,P,ve,ne,h,a),L=new H_(p,ne,Le),te=new nv(Z,Te,We,Le),be=new uv(Z,Te,We,Le),We.programs=ie.programs,p.capabilities=Le,p.extensions=Te,p.properties=Ne,p.renderLists=ae,p.shadowMap=L,p.state=ve,p.info=We}_e();const xe=new Y_(p,Z);this.xr=xe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const b=Te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(A,X,!1))},this.getSize=function(b){return b.set(A,X)},this.setSize=function(b,N,W){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,X=N,e.width=Math.floor(b*U),e.height=Math.floor(N*U),W!==!1&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(A*U,X*U).floor()},this.setDrawingBufferSize=function(b,N,W){A=b,X=N,U=W,e.width=Math.floor(b*W),e.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(k)},this.setViewport=function(b,N,W,O){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,N,W,O),ve.viewport(R.copy(k).multiplyScalar(U).floor())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,N,W,O){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,N,W,O),ve.scissor(B.copy(ee).multiplyScalar(U).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(b){ve.setScissorTest(V=b)},this.setOpaqueSort=function(b){pe=b},this.setTransparentSort=function(b){ce=b},this.getClearColor=function(b){return b.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor.apply(F,arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha.apply(F,arguments)},this.clear=function(b=!0,N=!0,W=!0){let O=0;b&&(O|=16384),N&&(O|=256),W&&(O|=1024),Z.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",T,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",ue,!1),ae.dispose(),_.dispose(),Ne.dispose(),P.dispose(),z.dispose(),ne.dispose(),fe.dispose(),ie.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",je),xe.removeEventListener("sessionend",Ye),J&&(J.dispose(),J=null),xt.stop()};function T(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const b=We.autoReset,N=L.enabled,W=L.autoUpdate,O=L.needsUpdate,Q=L.type;_e(),We.autoReset=b,L.enabled=N,L.autoUpdate=W,L.needsUpdate=O,L.type=Q}function ue(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Se(b){const N=b.target;N.removeEventListener("dispose",Se),ge(N)}function ge(b){Ce(b),Ne.remove(b)}function Ce(b){const N=Ne.get(b).programs;N!==void 0&&(N.forEach(function(W){ie.releaseProgram(W)}),b.isShaderMaterial&&ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,O,Q,Pe){N===null&&(N=we);const De=Q.isMesh&&Q.matrixWorld.determinant()<0,Be=Ld(b,N,W,O,Q);ve.setMaterial(O,De);let Fe=W.index;const Ze=W.attributes.position;if(Fe===null){if(Ze===void 0||Ze.count===0)return}else if(Fe.count===0)return;let Ge=1;O.wireframe===!0&&(Fe=Y.getWireframeAttribute(W),Ge=2),fe.setup(Q,O,Be,W,Fe);let $e,it=te;Fe!==null&&($e=j.get(Fe),it=be,it.setIndex($e));const ti=Fe!==null?Fe.count:Ze.count,Fi=W.drawRange.start*Ge,Bi=W.drawRange.count*Ge,sn=Pe!==null?Pe.start*Ge:0,Xe=Pe!==null?Pe.count*Ge:1/0,zi=Math.max(Fi,sn),st=Math.min(ti,Fi+Bi,sn+Xe)-1,rn=Math.max(0,st-zi+1);if(rn!==0){if(Q.isMesh)O.wireframe===!0?(ve.setLineWidth(O.wireframeLinewidth*Ee()),it.setMode(1)):it.setMode(4);else if(Q.isLine){let kn=O.linewidth;kn===void 0&&(kn=1),ve.setLineWidth(kn*Ee()),Q.isLineSegments?it.setMode(1):Q.isLineLoop?it.setMode(2):it.setMode(3)}else Q.isPoints?it.setMode(0):Q.isSprite&&it.setMode(4);if(Q.isInstancedMesh)it.renderInstances(zi,rn,Q.count);else if(W.isInstancedBufferGeometry){const kn=Math.min(W.instanceCount,W._maxInstanceCount);it.renderInstances(zi,rn,kn)}else it.render(zi,rn)}},this.compile=function(b,N){u=_.get(b),u.init(),v.push(u),b.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights(p.physicallyCorrectLights),b.traverse(function(W){const O=W.material;if(O)if(Array.isArray(O))for(let Q=0;Q<O.length;Q++){const Pe=O[Q];vo(Pe,b,W)}else vo(O,b,W)}),v.pop(),u=null};let he=null;function Ae(b){he&&he(b)}function je(){xt.stop()}function Ye(){xt.start()}const xt=new od;xt.setAnimationLoop(Ae),typeof self!="undefined"&&xt.setContext(self),this.setAnimationLoop=function(b){he=b,xe.setAnimationLoop(b),b===null?xt.stop():xt.start()},xe.addEventListener("sessionstart",je),xe.addEventListener("sessionend",Ye),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(N),N=xe.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,N,C),u=_.get(b,v.length),u.init(),v.push(u),le.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(le),H=this.localClippingEnabled,G=g.init(this.clippingPlanes,H,N),d=ae.get(b,m.length),d.init(),m.push(d),nn(b,N,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(pe,ce),G===!0&&g.beginShadows();const W=u.state.shadowsArray;if(L.render(W,b,N),G===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),F.render(d,b),u.setupLights(p.physicallyCorrectLights),N.isArrayCamera){const O=N.cameras;for(let Q=0,Pe=O.length;Q<Pe;Q++){const De=O[Q];tl(d,b,De,De.viewport)}}else tl(d,b,N);C!==null&&(y.updateMultisampleRenderTarget(C),y.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(p,b,N),fe.resetDefaultState(),E=-1,w=null,v.pop(),v.length>0?u=v[v.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function nn(b,N,W,O){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){O&&oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(le);const De=ne.update(b),Be=b.material;Be.visible&&d.push(b,De,Be,W,oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==We.render.frame&&(b.skeleton.update(),b.skeleton.frame=We.render.frame),!b.frustumCulled||$.intersectsObject(b))){O&&oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(le);const De=ne.update(b),Be=b.material;if(Array.isArray(Be)){const Fe=De.groups;for(let Ze=0,Ge=Fe.length;Ze<Ge;Ze++){const $e=Fe[Ze],it=Be[$e.materialIndex];it&&it.visible&&d.push(b,De,it,W,oe.z,$e)}}else Be.visible&&d.push(b,De,Be,W,oe.z,null)}}const Pe=b.children;for(let De=0,Be=Pe.length;De<Be;De++)nn(Pe[De],N,W,O)}function tl(b,N,W,O){const Q=b.opaque,Pe=b.transmissive,De=b.transparent;u.setupLightsView(W),Pe.length>0&&Pd(Q,N,W),O&&ve.viewport(R.copy(O)),Q.length>0&&fr(Q,N,W),Pe.length>0&&fr(Pe,N,W),De.length>0&&fr(De,N,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Pd(b,N,W){const O=Le.isWebGL2;J===null&&(J=new Yn(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Zs:ki,minFilter:mo,samples:O&&r===!0?4:0})),p.getDrawingBufferSize(se),O?J.setSize(se.x,se.y):J.setSize(Ca(se.x),Ca(se.y));const Q=p.getRenderTarget();p.setRenderTarget(J),p.clear();const Pe=p.toneMapping;p.toneMapping=Rn,fr(b,N,W),p.toneMapping=Pe,y.updateMultisampleRenderTarget(J),y.updateRenderTargetMipmap(J),p.setRenderTarget(Q)}function fr(b,N,W){const O=N.isScene===!0?N.overrideMaterial:null;for(let Q=0,Pe=b.length;Q<Pe;Q++){const De=b[Q],Be=De.object,Fe=De.geometry,Ze=O===null?De.material:O,Ge=De.group;Be.layers.test(W.layers)&&Ad(Be,N,W,Fe,Ze,Ge)}}function Ad(b,N,W,O,Q,Pe){b.onBeforeRender(p,N,W,O,Q,Pe),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Q.onBeforeRender(p,N,W,O,b,Pe),Q.transparent===!0&&Q.side===gs?(Q.side=Jt,Q.needsUpdate=!0,p.renderBufferDirect(W,N,O,Q,b,Pe),Q.side=Ys,Q.needsUpdate=!0,p.renderBufferDirect(W,N,O,Q,b,Pe),Q.side=gs):p.renderBufferDirect(W,N,O,Q,b,Pe),b.onAfterRender(p,N,W,O,Q,Pe)}function vo(b,N,W){N.isScene!==!0&&(N=we);const O=Ne.get(b),Q=u.state.lights,Pe=u.state.shadowsArray,De=Q.state.version,Be=ie.getParameters(b,Q.state,Pe,N,W),Fe=ie.getProgramCacheKey(Be);let Ze=O.programs;O.environment=b.isMeshStandardMaterial?N.environment:null,O.fog=N.fog,O.envMap=(b.isMeshStandardMaterial?z:P).get(b.envMap||O.environment),Ze===void 0&&(b.addEventListener("dispose",Se),Ze=new Map,O.programs=Ze);let Ge=Ze.get(Fe);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===De)return nl(b,Be),Ge}else Be.uniforms=ie.getUniforms(b),b.onBuild(W,Be,p),b.onBeforeCompile(Be,p),Ge=ie.acquireProgram(Be,Fe),Ze.set(Fe,Ge),O.uniforms=Be.uniforms;const $e=O.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&($e.clippingPlanes=g.uniform),nl(b,Be),O.needsLights=Dd(b),O.lightsStateVersion=De,O.needsLights&&($e.ambientLightColor.value=Q.state.ambient,$e.lightProbe.value=Q.state.probe,$e.directionalLights.value=Q.state.directional,$e.directionalLightShadows.value=Q.state.directionalShadow,$e.spotLights.value=Q.state.spot,$e.spotLightShadows.value=Q.state.spotShadow,$e.rectAreaLights.value=Q.state.rectArea,$e.ltc_1.value=Q.state.rectAreaLTC1,$e.ltc_2.value=Q.state.rectAreaLTC2,$e.pointLights.value=Q.state.point,$e.pointLightShadows.value=Q.state.pointShadow,$e.hemisphereLights.value=Q.state.hemi,$e.directionalShadowMap.value=Q.state.directionalShadowMap,$e.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$e.spotShadowMap.value=Q.state.spotShadowMap,$e.spotShadowMatrix.value=Q.state.spotShadowMatrix,$e.pointShadowMap.value=Q.state.pointShadowMap,$e.pointShadowMatrix.value=Q.state.pointShadowMatrix);const it=Ge.getUniforms(),ti=$r.seqWithValue(it.seq,$e);return O.currentProgram=Ge,O.uniformsList=ti,Ge}function nl(b,N){const W=Ne.get(b);W.outputEncoding=N.outputEncoding,W.instancing=N.instancing,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Ld(b,N,W,O,Q){N.isScene!==!0&&(N=we),y.resetTextureUnits();const Pe=N.fog,De=O.isMeshStandardMaterial?N.environment:null,Be=C===null?p.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:Ni,Fe=(O.isMeshStandardMaterial?z:P).get(O.envMap||De),Ze=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!O.normalMap&&!!W.attributes.tangent,$e=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,ti=!!W.morphAttributes.color,Fi=O.toneMapped?p.toneMapping:Rn,Bi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,sn=Bi!==void 0?Bi.length:0,Xe=Ne.get(O),zi=u.state.lights;if(G===!0&&(H===!0||b!==w)){const on=b===w&&O.id===E;g.setState(O,b,on)}let st=!1;O.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==zi.state.version||Xe.outputEncoding!==Be||Q.isInstancedMesh&&Xe.instancing===!1||!Q.isInstancedMesh&&Xe.instancing===!0||Q.isSkinnedMesh&&Xe.skinning===!1||!Q.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Fe||O.fog===!0&&Xe.fog!==Pe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==g.numPlanes||Xe.numIntersection!==g.numIntersection)||Xe.vertexAlphas!==Ze||Xe.vertexTangents!==Ge||Xe.morphTargets!==$e||Xe.morphNormals!==it||Xe.morphColors!==ti||Xe.toneMapping!==Fi||Le.isWebGL2===!0&&Xe.morphTargetsCount!==sn)&&(st=!0):(st=!0,Xe.__version=O.version);let rn=Xe.currentProgram;st===!0&&(rn=vo(O,N,Q));let kn=!1,Ps=!1,_o=!1;const bt=rn.getUniforms(),As=Xe.uniforms;if(ve.useProgram(rn.program)&&(kn=!0,Ps=!0,_o=!0),O.id!==E&&(E=O.id,Ps=!0),kn||w!==b){if(bt.setValue(Z,"projectionMatrix",b.projectionMatrix),Le.logarithmicDepthBuffer&&bt.setValue(Z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,Ps=!0,_o=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const on=bt.map.cameraPosition;on!==void 0&&on.setValue(Z,oe.setFromMatrixPosition(b.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&bt.setValue(Z,"isOrthographic",b.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Q.isSkinnedMesh)&&bt.setValue(Z,"viewMatrix",b.matrixWorldInverse)}if(Q.isSkinnedMesh){bt.setOptional(Z,Q,"bindMatrix"),bt.setOptional(Z,Q,"bindMatrixInverse");const on=Q.skeleton;on&&(Le.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),bt.setValue(Z,"boneTexture",on.boneTexture,y),bt.setValue(Z,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xo=W.morphAttributes;return(xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0&&Le.isWebGL2===!0)&&q.update(Q,W,O,rn),(Ps||Xe.receiveShadow!==Q.receiveShadow)&&(Xe.receiveShadow=Q.receiveShadow,bt.setValue(Z,"receiveShadow",Q.receiveShadow)),Ps&&(bt.setValue(Z,"toneMappingExposure",p.toneMappingExposure),Xe.needsLights&&Rd(As,_o),Pe&&O.fog===!0&&re.refreshFogUniforms(As,Pe),re.refreshMaterialUniforms(As,O,U,X,J),$r.upload(Z,Xe.uniformsList,As,y)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&($r.upload(Z,Xe.uniformsList,As,y),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&bt.setValue(Z,"center",Q.center),bt.setValue(Z,"modelViewMatrix",Q.modelViewMatrix),bt.setValue(Z,"normalMatrix",Q.normalMatrix),bt.setValue(Z,"modelMatrix",Q.matrixWorld),rn}function Rd(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Dd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,N,W){Ne.get(b.texture).__webglTexture=N,Ne.get(b.depthTexture).__webglTexture=W;const O=Ne.get(b);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=W===void 0,O.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,N){const W=Ne.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,W=0){C=b,x=N,S=W;let O=!0;if(b){const Fe=Ne.get(b);Fe.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),O=!1):Fe.__webglFramebuffer===void 0?y.setupRenderTarget(b):Fe.__hasExternalTextures&&y.rebindTextures(b,Ne.get(b.texture).__webglTexture,Ne.get(b.depthTexture).__webglTexture)}let Q=null,Pe=!1,De=!1;if(b){const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture)&&(De=!0);const Ze=Ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Q=Ze[N],Pe=!0):Le.isWebGL2&&b.samples>0&&y.useMultisampledRTT(b)===!1?Q=Ne.get(b).__webglMultisampledFramebuffer:Q=Ze,R.copy(b.viewport),B.copy(b.scissor),M=b.scissorTest}else R.copy(k).multiplyScalar(U).floor(),B.copy(ee).multiplyScalar(U).floor(),M=V;if(ve.bindFramebuffer(36160,Q)&&Le.drawBuffers&&O&&ve.drawBuffers(b,Q),ve.viewport(R),ve.scissor(B),ve.setScissorTest(M),Pe){const Fe=Ne.get(b.texture);Z.framebufferTexture2D(36160,36064,34069+N,Fe.__webglTexture,W)}else if(De){const Fe=Ne.get(b.texture),Ze=N||0;Z.framebufferTextureLayer(36160,36064,Fe.__webglTexture,W||0,Ze)}E=-1},this.readRenderTargetPixels=function(b,N,W,O,Q,Pe,De){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){ve.bindFramebuffer(36160,Be);try{const Fe=b.texture,Ze=Fe.format,Ge=Fe.type;if(Ze!==Yt&&I.convert(Ze)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ge===Zs&&(Te.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Ge!==ki&&I.convert(Ge)!==Z.getParameter(35738)&&!(Ge===pi&&(Le.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-O&&W>=0&&W<=b.height-Q&&Z.readPixels(N,W,O,Q,I.convert(Ze),I.convert(Ge),Pe)}finally{const Fe=C!==null?Ne.get(C).__webglFramebuffer:null;ve.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(b,N,W=0){const O=Math.pow(2,-W),Q=Math.floor(N.image.width*O),Pe=Math.floor(N.image.height*O);y.setTexture2D(N,0),Z.copyTexSubImage2D(3553,W,0,0,b.x,b.y,Q,Pe),ve.unbindTexture()},this.copyTextureToTexture=function(b,N,W,O=0){const Q=N.image.width,Pe=N.image.height,De=I.convert(W.format),Be=I.convert(W.type);y.setTexture2D(W,0),Z.pixelStorei(37440,W.flipY),Z.pixelStorei(37441,W.premultiplyAlpha),Z.pixelStorei(3317,W.unpackAlignment),N.isDataTexture?Z.texSubImage2D(3553,O,b.x,b.y,Q,Pe,De,Be,N.image.data):N.isCompressedTexture?Z.compressedTexSubImage2D(3553,O,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,De,N.mipmaps[0].data):Z.texSubImage2D(3553,O,b.x,b.y,De,Be,N.image),O===0&&W.generateMipmaps&&Z.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(b,N,W,O,Q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=b.max.x-b.min.x+1,De=b.max.y-b.min.y+1,Be=b.max.z-b.min.z+1,Fe=I.convert(O.format),Ze=I.convert(O.type);let Ge;if(O.isData3DTexture)y.setTexture3D(O,0),Ge=32879;else if(O.isDataArrayTexture)y.setTexture2DArray(O,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,O.flipY),Z.pixelStorei(37441,O.premultiplyAlpha),Z.pixelStorei(3317,O.unpackAlignment);const $e=Z.getParameter(3314),it=Z.getParameter(32878),ti=Z.getParameter(3316),Fi=Z.getParameter(3315),Bi=Z.getParameter(32877),sn=W.isCompressedTexture?W.mipmaps[0]:W.image;Z.pixelStorei(3314,sn.width),Z.pixelStorei(32878,sn.height),Z.pixelStorei(3316,b.min.x),Z.pixelStorei(3315,b.min.y),Z.pixelStorei(32877,b.min.z),W.isDataTexture||W.isData3DTexture?Z.texSubImage3D(Ge,Q,N.x,N.y,N.z,Pe,De,Be,Fe,Ze,sn.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Ge,Q,N.x,N.y,N.z,Pe,De,Be,Fe,sn.data)):Z.texSubImage3D(Ge,Q,N.x,N.y,N.z,Pe,De,Be,Fe,Ze,sn),Z.pixelStorei(3314,$e),Z.pixelStorei(32878,it),Z.pixelStorei(3316,ti),Z.pixelStorei(3315,Fi),Z.pixelStorei(32877,Bi),Q===0&&O.generateMipmaps&&Z.generateMipmap(Ge),ve.unbindTexture()},this.initTexture=function(b){y.setTexture2D(b,0),ve.unbindTexture()},this.resetState=function(){x=0,S=0,C=null,ve.reset(),fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class J_ extends pd{}J_.prototype.isWebGL1Renderer=!0;class Q_ extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class ex extends pt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class md extends pt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class tx extends pt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new D;new D;new D;new D;new mn;class Ka extends ei{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,u=new D,m=[],v=[],p=[],f=[];for(let x=0;x<=i;x++){const S=[],C=x/i;let E=0;x==0&&a==0?E=.5/t:x==i&&l==Math.PI&&(E=-.5/t);for(let w=0;w<=t;w++){const R=w/t;d.x=-e*Math.cos(s+R*r)*Math.sin(a+C*o),d.y=e*Math.cos(a+C*o),d.z=e*Math.sin(s+R*r)*Math.sin(a+C*o),v.push(d.x,d.y,d.z),u.copy(d).normalize(),p.push(u.x,u.y,u.z),f.push(R+E,1-C),S.push(c++)}h.push(S)}for(let x=0;x<i;x++)for(let S=0;S<t;S++){const C=h[x][S+1],E=h[x][S],w=h[x+1][S],R=h[x+1][S+1];(x!==0||a>0)&&m.push(C,E,R),(x!==i-1||l<Math.PI)&&m.push(E,w,R)}this.setIndex(m),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(p,3)),this.setAttribute("uv",new _n(f,2))}static fromJSON(e){return new Ka(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nx extends pt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ix extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gd extends pt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Es,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sx extends gd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rx extends pt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Es,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ox extends pt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ke(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Es,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ax extends pt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Es,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class lx extends pt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class cx extends pt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ke(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Es,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hx extends md{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const dx={ShadowMaterial:nx,SpriteMaterial:ex,RawShaderMaterial:ix,ShaderMaterial:yn,PointsMaterial:tx,MeshPhysicalMaterial:sx,MeshStandardMaterial:gd,MeshPhongMaterial:rx,MeshToonMaterial:ox,MeshNormalMaterial:ax,MeshLambertMaterial:lx,MeshDepthMaterial:ud,MeshDistanceMaterial:fd,MeshBasicMaterial:ja,MeshMatcapMaterial:cx,LineDashedMaterial:hx,LineBasicMaterial:md,Material:pt};pt.fromType=function(n){return new dx[n]};class ux{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$c(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$c();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $c(){return(typeof performance=="undefined"?Date:performance).now()}const vd="\\[\\]\\.:\\/",Ja="[^"+vd+"]",fx="[^"+vd.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Ja);/(WCOD+)?/.source.replace("WCOD",fx);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ja);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ja);const ln=new Uint32Array(512),cn=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(ln[n]=0,ln[n|256]=32768,cn[n]=24,cn[n|256]=24):e<-14?(ln[n]=1024>>-e-14,ln[n|256]=1024>>-e-14|32768,cn[n]=-e-1,cn[n|256]=-e-1):e<=15?(ln[n]=e+15<<10,ln[n|256]=e+15<<10|32768,cn[n]=13,cn[n|256]=13):e<128?(ln[n]=31744,ln[n|256]=64512,cn[n]=24,cn[n|256]=24):(ln[n]=31744,ln[n|256]=64512,cn[n]=13,cn[n|256]=13)}const _d=new Uint32Array(2048),dr=new Uint32Array(64),px=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,_d[n]=e|t}for(let n=1024;n<2048;++n)_d[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)dr[n]=n<<23;dr[31]=1199570944;dr[32]=2147483648;for(let n=33;n<63;++n)dr[n]=2147483648+(n-32<<23);dr[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(px[n]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);class xd extends uo{constructor(){super("MaterialOutput",new Ii("surface","shader","shader",{name:"color",type:"vec4",value:new ft(0,0,0,1)}),{outputList:[]});K(this,"inputVariables");this.inputVariables={},super.getInputs().inputList.forEach(i=>{this.inputVariables[i.getName()]=i})}compile(t,i){if(this.inputVariables.surface.isConnected()){const r=this.inputVariables.surface.getConnected().getParent(),[a]=r.compile(t,i);i.addToMain(`gl_FragColor = ${a};`)}else{const s=this.inputVariables.surface.getValue(),r=`gl_FragColor = ${s.type}(${s.value.x}, ${s.value.y}, ${s.value.z}, ${s.value.w});`;i.addToMain(r)}return[t.generateCode(),i.generateCode()]}}const gi=(n,e,t)=>Math.min(Math.max(n,t),e),Os=n=>{const e=n.toString(16).toUpperCase();return e.length<2?"0"+e:e};var Qn=(n=>(n[n.HSV=0]="HSV",n[n.HSL=1]="HSL",n[n.RGB=2]="RGB",n[n.HEX=3]="HEX",n))(Qn||{});class at{constructor(e,t,i,s,r){K(this,"hsv");K(this,"hsl");K(this,"rgb");K(this,"hex");K(this,"alpha");let a=[0,0,0,0];switch(this.hsv=new D,this.hsl=new D,this.rgb=new D,this.hex=new D,this.alpha=0,e){case 0:a=this.convertToNumber(t,i,s,r,!1),this.setHSV(a);break;case 1:a=this.convertToNumber(t,i,s,r,!1),this.setHSL(a);break;case 2:a=this.convertToNumber(t,i,s,r,!1),this.setRGB(a);break;case 3:a=this.convertToNumber(t,i,s,r,!1,16),this.setHEX(a);break;default:throw"[Color:constructor] Invalid colorspace"}}isValidHSVorHSL(e){return e[0]<0||e[0]>=360||e[1]<0||e[1]>1||e[2]<0||e[2]>1?!1:!(e.length>=4&&e[3]!==void 0&&(e[3]<0||e[3]>1))}isValidRGBorHEX(e){return e[0]<0||e[0]>255||e[1]<0||e[1]>255||e[2]<0||e[2]>255?!1:!(e.length>=4&&e[3]!==void 0&&(e[3]<0||e[3]>1))}convertToNumber(e,t,i,s,r,a){if(r&&a===void 0)throw"[Color:convertToNumber] toInt is true and base undefined";const o=[e,t,i,s],l=[0,0,0,0];for(let c=0;c<4;c++){let h=o[c];typeof h=="string"?(h.includes("%")&&(h=h.replace("%","")),r?l[c]=parseInt(h,a):l[c]=parseFloat(h)):l[c]=h}return[...l]}setHSV(e){if(!this.isValidHSVorHSL(e))throw"[Color:setHSV] Invalid hsv values: "+e;e.length===4&&(this.alpha=e[3]),this.hsv.x=e[0],this.hsv.y=e[1],this.hsv.z=e[2];const t=[...at.hsvToHsl(e[0],e[1],e[2])];this.hsl.x=t[0],this.hsl.y=t[1],this.hsl.z=t[2];const i=[...at.hsvToRgb(e[0],e[1],e[2])];this.rgb.x=i[0],this.rgb.y=i[1],this.rgb.z=i[2],this.hex.x=i[0],this.hex.y=i[1],this.hex.z=i[2]}setHSL(e){if(!this.isValidHSVorHSL(e))throw"[Color:setHSV] Invalid hsv values";e.length===4&&(this.alpha=e[3]),this.hsl.x=e[0],this.hsl.y=e[1],this.hsl.z=e[2];const t=[...at.hslToRgb(e[0],e[1],e[2])];this.rgb.x=t[0],this.rgb.y=t[1],this.rgb.z=t[2],this.hex.x=t[0],this.hex.y=t[1],this.hex.z=t[2];const i=[...at.rgbToHsv(t[0],t[1],t[2])];this.hsv.x=i[0],this.hsv.y=i[1],this.hsv.z=i[2]}setRGB(e){if(!this.isValidRGBorHEX(e))throw"[Color:setRGB] Invalid rgb values";e.length===4&&(this.alpha=e[3]),this.rgb.x=e[0],this.rgb.y=e[1],this.rgb.z=e[2],this.hex.x=e[0],this.hex.y=e[1],this.hex.z=e[2];const t=[...at.rgbToHsv(e[0],e[1],e[2])];this.hsv.x=t[0],this.hsv.y=t[1],this.hsv.z=t[2];const i=[...at.hsvToHsl(t[0],t[1],t[2])];this.hsl.x=i[0],this.hsl.y=i[1],this.hsl.z=i[2]}setHEX(e){this.setRGB(e)}setAlpha(e){if(e<0||e>1)throw"[Color:setAlpha] Value invalid";this.alpha=e}getColorStringHex(){return at.getColorStringHex(this.rgb.x,this.rgb.y,this.rgb.z,this.alpha)}getColorStringRgba(){return at.getColorStringRgba(this.rgb.x,this.rgb.y,this.rgb.z,this.alpha)}getColorStringHsla(){return at.getColorStringHsla(this.hsl.x,this.hsl.y,this.hsl.z,this.alpha)}getUnitRgb(){return new D(this.rgb.x/255,this.rgb.y/255,this.rgb.z/255)}getRgb(){return this.rgb}getHex(){return this.hex}getHsl(){return this.hsl}getHsv(){return this.hsv}getAlpha(){return this.alpha}clone(e){const t=e.getAlpha();this.alpha=t;const i=e.getHsv(),s=e.getHsl(),r=e.getRgb(),a=e.getHex();this.hsv.x=i.x,this.hsv.y=i.y,this.hsv.z=i.z,this.hsl.x=s.x,this.hsl.y=s.y,this.hsl.z=s.z,this.rgb.x=r.x,this.rgb.y=r.y,this.rgb.z=r.z,this.hex.x=a.x,this.hex.y=a.y,this.hex.z=a.z}static rgbToHsv(e,t,i){if(e<0||e>255)throw"[rgbToHsv] R value invalid: "+e;if(t<0||t>255)throw"[rgbToHsv] G value invalid: "+t;if(i<0||i>255)throw"[rgbToHsv] B value invalid: "+i;const s=e/255,r=t/255,a=i/255,o=Math.max(s,Math.max(r,a)),l=Math.min(s,Math.min(r,a)),c=o-l;let h=0;c===0?h=0:o===s?h=60*((r-a)/c%6):o===r?h=60*((a-s)/c+2):o===a&&(h=60*((s-r)/c+4));const d=o===0?0:c/o,u=o;return(h<0||h>=360)&&(h=(h+3600)%360),[h,d,u]}static hsvToRgb(e,t,i){if(e<0||e>=360)throw"[hsvToRgb] H value invalid: "+e;if(t<0||t>1)throw"[hsvToRgb] S value invalid: "+t;if(i<0||i>1)throw"[hsvToRgb] V value invalid: "+i;const s=i*t,r=s*(1-Math.abs(e/60%2-1)),a=i-s;let o,l,c;return e<60?[o,l,c]=[s,r,0]:e<120?[o,l,c]=[r,s,0]:e<180?[o,l,c]=[0,s,r]:e<240?[o,l,c]=[0,r,s]:e<300?[o,l,c]=[r,0,s]:[o,l,c]=[s,0,r],[(o+a)*255,(l+a)*255,(c+a)*255]}static hsvToHsl(e,t,i){const s=(2-t)*i/2;s!=0&&(s==1?t=0:s<.5?t=t*i/(s*2):t=t*i/(2-s*2));let r=gi(0,360,e);return r===360&&(r=0),[r,gi(0,1,t),gi(0,1,s)]}static hslToRgb(e,t,i){if(e<0||e>=360)throw"[hsvToRgb] H value invalid: "+e;if(t<0||t>1)throw"[hsvToRgb] S value invalid: "+t;if(i<0||i>1)throw"[hsvToRgb] L value invalid: "+i;const s=(1-Math.abs(2*i-1))*t,r=s*(1-Math.abs(e/60%2-1)),a=i-s/2;let o,l,c;return e<60?[o,l,c]=[s,r,0]:e<120?[o,l,c]=[r,s,0]:e<180?[o,l,c]=[0,s,r]:e<240?[o,l,c]=[0,r,s]:e<300?[o,l,c]=[r,0,s]:[o,l,c]=[s,0,r],[(o+a)*255,(l+a)*255,(c+a)*255]}static getColorStringHex(e,t,i,s){if(e<0||e>255)throw"[genColorStringHex] r is invalid: "+e;if(t<0||t>255)throw"[genColorStringHex] g is invalid: "+t;if(i<0||i>255)throw"[genColorStringHex] b is invalid: "+i;if(s<0||s>1)throw"[genColorStringHex] a is invalid: "+s;return`#${Os(Math.round(e))}${Os(Math.round(t))}${Os(Math.round(i))}${Os(Math.round(s*255))}`}static getColorStringRgba(e,t,i,s){if(e<0||e>255)throw"[genColorStringRgba] r is invalid: "+e;if(t<0||t>255)throw"[genColorStringRgba] g is invalid: "+t;if(i<0||i>255)throw"[genColorStringRgba] b is invalid: "+i;if(s<0||s>1)throw"[genColorStringRgba] a is invalid: "+s;return`rgba(${e}, ${t}, ${i}, ${s*100}%)`}static getColorStringHsla(e,t,i,s){if(e<0||e>=360)throw"[genColorStringHsla] h is invalid: "+e;if(t<0||t>1)throw"[genColorStringHsla] s is invalid: "+t;if(i<0||i>1)throw"[genColorStringHsla] l is invalid: "+i;if(s<0||s>1)throw"[genColorStringHsla] a is invalid: "+s;return`hsla(${e.toFixed(2)}deg, ${(t*100).toFixed(2)}%, ${(i*100).toFixed(2)}%, ${(s*100).toFixed(2)}%)`}static interpolateRgba(e,t,i){const s=e.getRgb(),r=t.getRgb(),a=e.getAlpha(),o=t.getAlpha(),l=new at(2,0,0,0,1),c=(1-i)*s.x+i*r.x,h=(1-i)*s.y+i*r.y,d=(1-i)*s.z+i*r.z,u=(1-i)*a+i*o;return l.setRGB([c,h,d,u]),l}}class mx extends uo{constructor(){super("Principled BSDF",{inputList:[new Ii("base-color","color","color",{name:"color",type:"vec4",value:new at(Qn.HSV,320,.75,1,1)}),new Ii("emission-color","color","color",{name:"color",type:"vec4",value:new at(Qn.HSV,0,0,0,1)})]},new Di("BSDF","shader"));K(this,"inputVariables");this.inputVariables={};const t=super.getInputs().inputList;console.log("list",t),t.forEach(i=>{this.inputVariables[i.getName()]=i})}compile(t,i){let s="",r="";if(this.inputVariables["base-color"].isConnected())[s]=this.inputVariables["base-color"].getConnected().getParent().compile(t,i);else{const l=this.inputVariables["base-color"].getValue();s=t.generateVariableID("princ_base_color_"),console.log(l,l.value);const c=l.value.getUnitRgb(),h=l.value.getAlpha(),d=`vec4 ${s} = ${l.type}(${c.x}, ${c.y}, ${c.z}, ${h});`;i.addToMain(d)}if(this.inputVariables["emission-color"].isConnected())[r]=this.inputVariables["emission-color"].getConnected().getParent().compile(t,i);else{const l=this.inputVariables["emission-color"].getValue(),c=l.value.getUnitRgb(),h=l.value.getAlpha();r=t.generateVariableID("princ_emission_color_");const d=`vec4 ${r} = ${l.type}(${c.x}, ${c.y}, ${c.z}, ${h});`;i.addToMain(d)}const a=t.generateVariableID("princ_bsdf_"),o=`vec4 ${a} = ${s} + ${r};`;return i.addToMain(o),[a,""]}setInputValue(t,i){this.inputVariables[t].setValue(i)}}var nr,ir;class Us extends Ii{constructor(t,i,s,r,a,o){super(t,"number",i,{name:t,type:"number",value:s},o);Qe(this,nr,void 0);Qe(this,ir,void 0);ze(this,nr,r),ze(this,ir,a)}getMinValue(){return ye(this,nr)}getMaxValue(){return ye(this,ir)}}nr=new WeakMap,ir=new WeakMap;class gx extends uo{constructor(){super("Noise Texture",{inputList:[new Us("scale","number",2),new Us("detail","number",2,0,15),new Us("roughness","number",.5,0,1),new Us("distortion","number",0)]},new Di("color","color"));K(this,"inputVariables");K(this,"noiseFunction");K(this,"customNoiseFunction");this.inputVariables={},super.getInputs().inputList.forEach(i=>{this.inputVariables[i.getName()]=i}),this.customNoiseFunction=`float noise(vec3 v) {
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
}`,permute:`vec4 permute(vec4 x) {
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
`}}compile(t,i){const s=this.inputVariables.scale.getValue(),r=this.inputVariables.detail.getValue(),a=this.inputVariables.roughness.getValue(),o=this.inputVariables.distortion.getValue();t.addToOuts({name:"projPosition",type:"vec3",value:new D(0,0,0)}),t.addToMain("projPosition = position;"),i.addToIns({name:"projPosition",type:"vec3",value:new D(0,0,0)});const l=i.generateVariableID("nt_st_"),c=i.generateVariableID("nt_scale_"),h=i.generateVariableID("nt_octave_int_"),d=i.generateVariableID("nt_octave_frac_"),u=i.generateVariableID("nt_persistance_"),m=i.generateVariableID("nt_distortion_"),v=i.generateVariableID("nt_q_"),p=i.generateVariableID("nt_f_"),f=i.generateVariableID("nt_color_");return i.addAllToFunctions(this.noiseFunction),i.addToMain(`
    vec3 ${l} = projPosition;
    // Scale the space in order to see the function
    float ${c} = ${super.formatValue(s.value)};
    const float ${h} = ${super.formatValue(Math.floor(r.value+1))};
    const float ${d} = ${super.formatValue(r.value%1)};
    const float ${u} = ${super.formatValue(a.value)};
    const float ${m} = ${super.formatValue(o.value/10)};

    // Derived from https://thebookofshaders.com/13/
    vec3 ${v} = vec3(
        fbm(
        ${h},
        ${d},
        ${l},
        ${u},
        ${c}
        ),
        fbm(
        ${h},
        ${d},
        ${l}+vec3(2.3, 10.5, 60.),
        ${u},
        ${c}
        ),
        fbm(
        ${h},
        ${d},
        ${l}+vec3(-1.3, -2.5, 6.),
        ${u},
        ${c}
    ));

    float ${p} = fbm(
      ${h},
      ${d},
      ${l} + ${m} * ${v},
      ${u},
      ${c}
    );

    vec4 ${f} = vec4(vec3(${p}), 1);`),[f,""]}setInputValue(t,i){this.inputVariables[t].setValue(i)}}class vx{constructor(e,t){K(this,"pickers");K(this,"interpolation");this.interpolation=t||xn.Linear,this.pickers=[...e]}getPickers(){return[...this.pickers]}setPickers(e){console.log(this.pickers.length,e.length),this.pickers=[...e]}getInterpolation(){return this.interpolation}setInterpolation(e){console.log("new interp",e),this.interpolation=e}findSidePickers(e){let t=-1;if(this.pickers[0].position>=e)return[{position:0,color:this.pickers[0].color,id:Math.floor(Math.random()*1e9)},this.pickers[0]];for(let i=0;i<this.pickers.length-1;i++)if(this.pickers[i].position<=e&&this.pickers[i+1].position>=e){t=i;break}return t===-1?[this.pickers[this.pickers.length-1],{position:1,color:this.pickers[this.pickers.length-1].color,id:Math.floor(Math.random()*1e9)}]:[this.pickers[t],this.pickers[t+1]]}handleInterpolationConstant(e){return e.color}handleInterpolationLinear(e,t,i){const s=i.position-t.position;if(Math.abs(s)<1e-5)return t.color;const r=(e-t.position)/s;return at.interpolateRgba(t.color,i.color,r)}getColorAt(e){if(e<0||e>1)throw"[Gradient] Position is outside of bound: "+e;const[t,i]=this.findSidePickers(e);if(this.interpolation===xn.Constant)return this.handleInterpolationConstant(t);if(this.interpolation===xn.Linear)return this.handleInterpolationLinear(e,t,i);throw"[Gradient] Interpolation not implemented: "+this.interpolation}}var xn=(n=>(n[n.Linear=0]="Linear",n[n.Constant=1]="Constant",n))(xn||{});class bd extends uo{constructor(){super("ColorRamp",{inputList:[new Us("fac","number",.5,0,1)]},new Di("color","color"));K(this,"inputVariables");K(this,"gradient");this.gradient=new vx([{position:0,color:new at(Qn.RGB,0,0,0,1),id:Math.floor(Math.random()*1e9)},{position:1,color:new at(Qn.RGB,255,255,255,1),id:Math.floor(Math.random()*1e9)}],xn.Linear),this.inputVariables={},super.getInputs().inputList.forEach(i=>{this.inputVariables[i.getName()]=i})}getMixFunctionConstant(t){return`vec4 getGradientColorConstant(vec4[${t}] colors, float[${t}] positions, float fac) {
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
    }`}compileLinearInterpolation(t,i){let s="";[s]=this.inputVariables.fac.getConnected().getParent().compile(t,i);const o=this.gradient.getPickers();o[0].position!==0&&o.unshift({position:0,color:o[0].color,id:Math.floor(Math.random()*1e9)}),o[o.length-1].position!==1&&o.push({position:1,color:o[o.length-1].color,id:Math.floor(Math.random()*1e9)});const l=t.generateVariableID("COL_RAMP_NUM_PICKER_"),c=t.generateVariableID("col_ramp_picker_color_"),h=t.generateVariableID("col_ramp_picker_pos_");i.addToDefines({name:l,value:o.length,type:"int"});let d=`vec4[${l}] ${c};
`,u=`float[${l}] ${h};
`;o.forEach((v,p)=>{const f=v.color.getUnitRgb(),x=v.color.getAlpha();d+=`${c}[${p}] = vec4(${super.formatValue(f.x)}, ${super.formatValue(f.y)}, ${super.formatValue(f.z)}, ${super.formatValue(x)});
`,u+=`${h}[${p}] = ${super.formatValue(v.position)};
`}),i.addToMain(d),i.addToMain(u),i.addToFunctions("getGradientColorLinear("+o.length+")",this.getMixFunctionLinear(l));const m=t.generateVariableID("col_ramp_color_");return i.addToMain(`vec4 ${m} = getGradientColorLinear(${c}, ${h}, ${s}.x);`),[m,""]}compileConstantInterpolation(t,i){let s="";[s]=this.inputVariables.fac.getConnected().getParent().compile(t,i);const o=this.gradient.getPickers();o[0].position!==0&&o.unshift({position:0,color:o[0].color,id:Math.floor(Math.random()*1e9)}),o[o.length-1].position!==1&&o.push({position:1,color:o[o.length-1].color,id:Math.floor(Math.random()*1e9)});const l=t.generateVariableID("COL_RAMP_NUM_PICKER_"),c=t.generateVariableID("col_ramp_picker_color_"),h=t.generateVariableID("col_ramp_picker_pos_");i.addToDefines({name:l,value:o.length,type:"int"});let d=`vec4[${l}] ${c};
`,u=`float[${l}] ${h};
`;o.forEach((v,p)=>{const f=v.color.getUnitRgb(),x=v.color.getAlpha();d+=`${c}[${p}] = vec4(${super.formatValue(f.x)}, ${super.formatValue(f.y)}, ${super.formatValue(f.z)}, ${super.formatValue(x)});
`,u+=`${h}[${p}] = ${super.formatValue(v.position)};
`}),i.addToMain(d),i.addToMain(u),i.addToFunctions("getGradientColorConstant("+o.length+")",this.getMixFunctionConstant(l));const m=t.generateVariableID("col_ramp_color_");return i.addToMain(`vec4 ${m} = getGradientColorConstant(${c}, ${h}, ${s}.x);`),[m,""]}compile(t,i){if(this.inputVariables.fac.isConnected())switch(this.gradient.getInterpolation()){case xn.Linear:return this.compileLinearInterpolation(t,i);case xn.Constant:return this.compileConstantInterpolation(t,i);default:throw"[ColorRamp:compile] Invalid interpolation: "+this.gradient.getInterpolation()}else{const s=this.inputVariables.fac.getValue(),r=t.generateVariableID("col_ramp_color_");console.log(s.value,"val");const a=this.gradient.getColorAt(s.value),o=a.getUnitRgb(),l=a.getAlpha(),c=`const vec4 ${r} = vec4(${super.formatValue(o.x)}, ${super.formatValue(o.y)}, ${super.formatValue(o.z)}, ${super.formatValue(l)});`;return i.addToMain(c),[r,""]}}getGradient(){return this.gradient}}class _x{constructor(e,t,i){K(this,"container");K(this,"emitter");K(this,"menu");K(this,"style");K(this,"pointerPos");K(this,"active");this.container=e,this.emitter=t,this.style=`
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
        ${i}px)`}addStyles(){const e=document.createElement("style");e.innerText=this.style,document.head.appendChild(e)}createMenu(){const e=document.createElement("div");e.setAttribute("id","shader-menu-container");const t=document.createElement("div");t.setAttribute("id","shader-menu-body"),e.appendChild(t);const i=document.createElement("div");i.setAttribute("class","shader-menu-sep");const s=[{name:"Material Output",nodeType:xd},{name:"Noise Texture",nodeType:gx},{name:"Principled BSDF",nodeType:mx},{name:"ColorRamp",nodeType:bd}];s.forEach((a,o)=>{const l=document.createElement("span");l.setAttribute("class","shader-menu-el"),l.textContent=a.name,l.addEventListener("click",()=>this.sendCreateEvent(a.nodeType)),t.appendChild(l),o!==s.length-1&&t.appendChild(i.cloneNode())}),this.container.appendChild(e),e.style.height="100%",e.style.width="100%";const r=t.getBoundingClientRect();return e.setAttribute("width",`${r.width+16*6}`),e.setAttribute("height",`${r.height+16*6}`),e.style.height="",e.style.width="",e.style.display="none",e}handlePointerPosition(e){if(this.pointerPos.x=e.x,this.pointerPos.y=e.y,!this.active)return;const t=this.menu.getBoundingClientRect();(this.pointerPos.x<t.left||this.pointerPos.x>t.right||this.pointerPos.y<t.top||this.pointerPos.y>t.bottom)&&this.hideMenu()}hideMenu(){this.menu.style.display="none",this.active=!1}sendCreateEvent(e){this.hideMenu(),this.emitter.emit("createNode",e)}}const ys=(n,e,t,i)=>{const s=n[2],r=n[3],a=s/e.width*(t-e.left),o=r/e.height*(i-e.top);return[a+n[0],o+n[1]]},Qa=(n,e,t)=>{const i=[],s=ys(n,e,0,0);return t.forEach(r=>{const a=ys(n,e,r,0);i.push(a[0]-s[0])}),[...i]},ks={Open:"open",Busy:"busy",Linked:"linked"};class qc{constructor(e,t,i,s,r,a,o,l,c){K(this,"canvas");K(this,"emitter");K(this,"startElement");K(this,"startOutput");K(this,"startPosition");K(this,"startNode");K(this,"endElement");K(this,"endInput");K(this,"endPosition");K(this,"endNode");K(this,"path");K(this,"state");K(this,"pointerMoveHandler");K(this,"pointerUpHandler");K(this,"fixLinkHandler");this.canvas=e,this.emitter=t,this.startPosition={x:i.x,y:i.y},this.endPosition={x:s.x,y:s.y},a!=null&&(this.startElement=a,this.startElement.setAttribute("data-state",ks.Busy)),o!=null&&(this.endElement=o,this.endElement.setAttribute("data-state",ks.Busy)),r instanceof Di?this.startOutput=r:r instanceof Ii&&(this.endInput=r),l!=null&&(this.startNode=l),c!=null&&(this.endNode=c),this.path=this.createLine(),this.updateShape(),this.state=0,this.pointerMoveHandler=h=>this.handlePointerMoveInitial(h),addEventListener("pointermove",this.pointerMoveHandler),this.pointerUpHandler=()=>this.handlePointerUp(),addEventListener("pointerup",this.pointerUpHandler),this.fixLinkHandler=h=>this.fixLink(h),this.emitter.on("fixLink",this.fixLinkHandler),this.emitter.on("repositionLinks",()=>this.moveLink())}createLine(){const e=document.createElementNS("http://www.w3.org/2000/svg","path");if(e.setAttribute("stroke","red"),e.setAttribute("stroke-width","3px"),e.setAttribute("fill","transparent"),this.canvas.firstChild!==null)this.canvas.insertBefore(e,this.canvas.firstChild);else throw"[Link] Adding link with no nodes";return e}setStartPosition(e){this.startPosition.x=e.x,this.startPosition.y=e.y,this.updateShape()}setEndPosition(e){this.endPosition.x=e.x,this.endPosition.y=e.y,this.updateShape()}updateShape(e){let[t,i]=[{x:0,y:0},{x:0,y:0}];e===!1?[t,i]=[this.startPosition,this.endPosition]:[t,i]=this.convertCanvasPosition([this.startPosition,this.endPosition]);const s={x:(t.x+i.x)/2,y:(t.y+i.y)/2};this.path.setAttribute("d",`M ${t.x} ${t.y}
      Q ${t.x+Math.abs(i.x-t.x)/3}
        ${t.y}, ${s.x} ${s.y} 
      T ${i.x} ${i.y}`)}handlePointerMoveInitial(e){if(this.state!==0)throw"[Link::handlePointerMove] state is not Initial";this.startElement===void 0?(this.startPosition.x=e.clientX,this.startPosition.y=e.clientY,this.updateShape()):this.endElement===void 0&&(this.endPosition.x=e.clientX,this.endPosition.y=e.clientY,this.updateShape())}handlePointerMoveDetached(e){if(this.state!==2)throw"[Link::handlePointerMove] state is not Detached";if(this.startElement===void 0)throw"[Link] startElement is undefined";const t=this.startElement.getBoundingClientRect(),i=this.convertCanvasDistances([t.width/2,t.height/2]);console.log(e.clientX,e.clientY);const s=this.convertCanvasPosition([{x:t.left,y:t.top},{x:e.clientX,y:e.clientY}]);this.startPosition.x=s[0].x+i[0],this.startPosition.y=s[0].y+i[1],this.endPosition.x=s[1].x,this.endPosition.y=s[1].y,this.updateShape(!1)}handlePointerUp(){if(this.state!==0&&this.state!==2)throw"[Link::handlePointerMove] state is not Initial or Detached";console.log("up"),this.emitter.emit("cancelLink"),this.deleteElement()}detachEnd(){if(this.endElement===void 0)throw"[Link] Detaching end but endElement is undefined";if(this.startElement===void 0)throw"[Link] startElement is undefined";this.state=2,this.pointerMoveHandler=r=>this.handlePointerMoveDetached(r),addEventListener("pointermove",this.pointerMoveHandler),addEventListener("pointerup",this.pointerUpHandler),this.emitter.on("fixLink",this.fixLinkHandler);const e=this.endElement.getBoundingClientRect(),t=this.startElement.getBoundingClientRect(),i=this.convertCanvasDistances([t.width/2,t.height/2,e.width/2,e.height/2]),s=this.convertCanvasPosition([{x:t.left,y:t.top},{x:e.left,y:e.top}]);this.startPosition.x=s[0].x+i[0],this.startPosition.y=s[0].y+i[1],this.endPosition.x=s[1].x+i[2],this.endPosition.y=s[1].y+i[3],this.endElement.setAttribute("data-state",ks.Open),this.endElement=void 0,this.updateShape(!1)}deleteElement(){if(console.log("delete"),this.path.remove(),(this.state===0||this.state===2)&&(removeEventListener("pointermove",this.pointerMoveHandler),removeEventListener("pointerup",this.pointerUpHandler),this.emitter.off("fixLink",this.fixLinkHandler)),this.startNode!==void 0&&this.startNode.removeOutgoingLink(this),this.endNode!==void 0&&this.endNode.removeIncomingLink(this),this.state===1){if(this.startOutput===void 0)throw"[Link] startOutput is undefined, but state is fixed";if(this.endInput===void 0)throw"[Link] startOutput is undefined, but state is fixed";this.endInput.dropConnection(),this.emitter.emit("recompile")}this.startElement!==void 0&&this.startElement.setAttribute("data-state",ks.Open),this.endElement!==void 0&&this.endElement.setAttribute("data-state",ks.Open)}fixLink(e){if(this.state!==0&&this.state!==2)throw"[Link::fixLink] state is not Initial or Detached";switch(this.state){case 0:this.fixLinkInitial(e);break;case 2:this.fixLinkDetached(e);break;default:throw"[Link::fixLink] state is not initial or Detached"}if(this.endInput===void 0)throw"[Link] After fixing link, endInput is undefined";if(this.endNode===void 0)throw"[Link] After fixing link, endNode is undefined";if(this.endElement===void 0)throw"[Link] After fixing link, endElement is undefined";if(this.startOutput===void 0)throw"[Link] After fixing link, startOutput is undefined";if(this.startNode===void 0)throw"[Link] After fixing link, startNode is undefined";if(this.startElement===void 0)throw"[Link] After fixing link, startElement is undefined";this.startElement.setAttribute("data-state","linked"),this.endElement.setAttribute("data-state","linked"),this.startNode.addOutgoingLink(this,this.startOutput),this.endNode.addIncomingLink(this,this.endInput),this.startOutput.connectTo(this.endInput),this.state=1,removeEventListener("pointermove",this.pointerMoveHandler),removeEventListener("pointerup",this.pointerUpHandler),this.emitter.off("fixLink",this.fixLinkHandler),this.emitter.emit("recompile")}fixLinkInitial(e){if(e.startElement!==void 0){this.startElement=e.startElement;const t=this.startElement.getBoundingClientRect();this.startPosition.x=t.left+t.width/2,this.startPosition.y=t.top+t.height/2}if(e.startOutput!==void 0&&(this.startOutput=e.startOutput),e.startNode!==void 0&&(this.startNode=e.startNode),e.endElement!==void 0){this.endElement=e.endElement;const t=this.endElement.getBoundingClientRect();this.endPosition.x=t.left+t.width/2,this.endPosition.y=t.top+t.height/2}e.endInput!==void 0&&(this.endInput=e.endInput),e.endNode!==void 0&&(this.endNode=e.endNode),this.updateShape()}fixLinkDetached(e){if(e.endElement===void 0||e.endInput===void 0||e.endNode===void 0)throw"[Link::fixLinkDetached] end elements are undefined";this.endInput=e.endInput,this.endNode=e.endNode,this.endElement=e.endElement;const t=this.endElement.getBoundingClientRect(),i=this.convertCanvasDistances([t.width/2,t.height/2]),s=this.convertCanvasPosition([{x:t.left,y:t.top}]);this.endPosition.x=s[0].x+i[0],this.endPosition.y=s[0].y+i[1],this.updateShape(!1)}moveLink(){if(this.endElement===void 0)throw"[Link] endElement is undefined";if(this.startElement===void 0)throw"[Link] startElement is undefined";const e=this.startElement.getBoundingClientRect(),t=this.endElement.getBoundingClientRect(),i=this.convertCanvasDistances([e.width/2,e.height/2,t.width/2,t.height/2]),s=this.convertCanvasPosition([{x:e.left,y:e.top},{x:t.left,y:t.top}]);this.startPosition.x=s[0].x+i[0],this.startPosition.y=s[0].y+i[1],this.endPosition.x=s[1].x+i[2],this.endPosition.y=s[1].y+i[3],this.updateShape(!1)}convertCanvasPosition(e){const t=[],i=this.canvas.getAttribute("viewBox");if(i===null)throw"[RendererNodeMovement::handlePointerMoveInitial] viewBox is null";const s=this.canvas.getBoundingClientRect(),r=i.split(" ").map(a=>parseFloat(a));return e.forEach(a=>{const[o,l]=ys(r,s,a.x,a.y);t.push({x:o,y:l})}),[...t]}convertCanvasDistances(e){const t=this.canvas.getAttribute("viewBox");if(t===null)throw"[RendererNodeMovement::handlePointerMoveInitial] viewBox is null";const i=this.canvas.getBoundingClientRect(),s=t.split(" ").map(a=>parseFloat(a));return[...Qa(s,i,e)]}}class xx{constructor(e,t,i,s,r,a){K(this,"canvas");K(this,"svgNode");K(this,"nodeRenderer");K(this,"emitter");K(this,"state");K(this,"pointerPos");K(this,"startDragPos");K(this,"startDragPosUnit");K(this,"pointerDownHandler");K(this,"pointerMovedHandler");K(this,"pointerUpHandler");this.canvas=e,this.svgNode=t,this.nodeRenderer=i,this.emitter=s,this.state=r,this.pointerPos={x:a.x,y:a.y},this.startDragPos={x:0,y:0},this.startDragPosUnit={x:0,y:0},this.pointerDownHandler=o=>this.handlePointerDown(o),addEventListener("pointerdown",this.pointerDownHandler),this.pointerMovedHandler=o=>this.handlePointerMove(o),this.emitter.on("pointerMoved",this.pointerMovedHandler),this.pointerUpHandler=()=>this.handlePointerUp()}removeListeners(){removeEventListener("pointerdown",this.pointerDownHandler),this.emitter.off("pointerMoved",this.pointerMovedHandler),(this.state===tt.SelectedDown||this.state===tt.Moving)&&removeEventListener("pointerup",this.pointerUpHandler)}handlePointerDown(e){if(this.svgNode===void 0)throw"[RendererNode] svgNode is undefined. Did you forget to remove the pointerDown listener?";switch(this.state){case tt.Initial:this.handlePointerDownInitial(e);break;case tt.Set:this.handlePointerDownSet(e);break;case tt.SelectedUp:this.handlePointerDownSelectedUp(e);break;case tt.Moving:throw"[RendererNode] How is State.Moving when clicking on it?";case tt.SelectedDown:throw"[RendererNode] How is State.SelectedDown when clicking on it?";default:throw"[RendererNodeMovement::handlePointerDown] State not implemented, "+this.state}}handlePointerDownInitial(e){if(this.state!==tt.Initial)throw"[RendererNodeMovement::handlePointerDownInitial] State is not Initial";e.buttons>1?(e.preventDefault(),this.nodeRenderer.deleteNode()):(this.setState(tt.Set),this.svgNode.style.cursor="")}handlePointerDownSet(e){if(this.state!==tt.Set)throw"[RendererNodeMovement::handlePointerDownSet] State is not Set";const t=this.svgNode.getElementsByClassName("shader-node");if(t.length===0)throw"[RendererNode::handlePointerDownSet] No element with class shader-node found.";const i=t[0];e.target===this.svgNode&&(i.classList.add("highlight"),this.svgNode.remove(),this.canvas.appendChild(this.svgNode),this.setState(tt.SelectedDown),this.saveStartPosition(e),addEventListener("pointerup",this.pointerUpHandler))}handlePointerDownSelectedUp(e){const t=this.svgNode.getElementsByClassName("shader-node");if(t.length===0)throw"[RendererNode] No element with class shader-node found.";const i=t[0];e.target!==this.svgNode?(i.classList.remove("highlight"),this.setState(tt.Set)):(this.setState(tt.SelectedDown),this.saveStartPosition(e),addEventListener("pointerup",this.pointerUpHandler))}saveStartPosition(e){this.startDragPos={x:e.clientX,y:e.clientY};const t=this.svgNode.getAttribute("x"),i=this.svgNode.getAttribute("y");if(t===null||i===null)throw"[RendererNode] x or y is null";this.startDragPosUnit={x:parseFloat(t),y:parseFloat(i)}}handlePointerMove(e){if(this.svgNode===void 0)throw"[RendererNode] svgNode is undefined. Did you forget to remove the pointerMove listener?";switch(this.pointerPos.x=e.x,this.pointerPos.y=e.y,this.state){case tt.Initial:this.handlePointerMoveInitial();break;case tt.Set:break;case tt.SelectedDown:this.handlePointerMoveSelectedDown(),this.handlePointerMoveMoving();break;case tt.Moving:this.handlePointerMoveMoving();break;case tt.SelectedUp:break;default:throw"[RendererNodeMovement::handlePointerMove] State not implemented, "+this.state}}handlePointerMoveInitial(){if(this.state!==tt.Initial)throw"[RendererNodeMovement::handlePointerMoveInitial] State is not initial";const e=this.canvas.getAttribute("viewBox");if(e===null)throw"[RendererNodeMovement::handlePointerMoveInitial] viewBox is null";const t=this.canvas.getBoundingClientRect(),i=this.svgNode.getBoundingClientRect(),s=e.split(" ").map(a=>parseFloat(a));console.log("bounding",t.width,s[2]);const r=ys(s,t,this.pointerPos.x-i.width/2,this.pointerPos.y-i.height/2);this.svgNode.setAttribute("x",`${r[0]}`),this.svgNode.setAttribute("y",`${r[1]}`)}handlePointerMoveSelectedDown(){if(this.state!==tt.SelectedDown)throw"[RendererNodeMovement::handlePointerMoveSelectedDown] State is not SelectedDown";this.setState(tt.Moving)}handlePointerMoveMoving(){if(this.state!==tt.Moving)throw"[RendererNodeMovement::handlePointerMoveMoving] State is not Moving";const e=this.canvas.getBoundingClientRect(),t=this.canvas.getAttribute("viewBox");if(t===null)throw"[RendererNode] viewBox is null";this.svgNode.style.cursor="move";const i=t.split(" ").map(a=>parseFloat(a)),[s,r]=Qa(i,e,[this.pointerPos.x-this.startDragPos.x,this.pointerPos.y-this.startDragPos.y]);this.svgNode.setAttribute("x",(this.startDragPosUnit.x+s).toString()),this.svgNode.setAttribute("y",(this.startDragPosUnit.y+r).toString()),this.nodeRenderer.moveLinks()}handlePointerUp(){if(this.svgNode===void 0)throw"[RendererNode] svgNode is undefined. Did you forget to remove the pointerUp listener?";switch(this.state){case tt.SelectedDown:break;case tt.Moving:break;default:throw"[RendererNode::handlePointerUp] State is NOT SelectedDown or Moving"}this.setState(tt.SelectedUp),this.svgNode.style.cursor="",removeEventListener("pointerup",this.pointerUpHandler)}setState(e){this.state=e,this.nodeRenderer.setState(this.state)}}var bx="/three-shader-graph/icons/arrow-left.svg",yx="/three-shader-graph/icons/arrow-right.svg";var tn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},yd=(n=>(n[n.Init=0]="Init",n[n.Active=1]="Active",n))(yd||{});const Mx=Ot({data(){return{value:null,tempValue:"",maxValue:void 0,minValue:void 0,range:void 0,State:yd,state:0,lastPositionX:0,startElement:null,pointerMoved:!1,isConnected:!1}},props:{input:{type:Object,required:!0},emitter:{type:Object,required:!0}},computed:{isSmallRange(){return this.range===void 0?!1:this.range<=2},defaultDiff(){return this.isSmallRange?.007:.2}},methods:{handlePointerDown(n){this.lastPositionX=n.clientX,this.startElement=n.target,document.addEventListener("pointermove",this.handlePointerMove),document.addEventListener("pointerup",this.handlePointerUp)},handlePointerMove(n){let e=n.clientX-this.lastPositionX;if(Math.abs(e)<.2)return;this.pointerMoved=!0;let t=Math.abs(Math.floor(e));e>0?this.increaseValue(this.defaultDiff*t):e<0&&this.decreaseValue(this.defaultDiff*t),this.lastPositionX=n.clientX},handlePointerUp(n){if(this.startElement===null)throw"[NumberInput] Start element is null";!this.pointerMoved&&this.startElement.classList.contains("shader-node-arrow-right")?this.increaseValue():!this.pointerMoved&&this.startElement.classList.contains("shader-node-arrow-left")?this.decreaseValue():this.pointerMoved||(this.state=1,document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("pointerdown",this.handleSaveContent),this.$nextTick(()=>{this.$refs.inputField.focus(),this.$refs.inputField.select()})),this.pointerMoved=!1,document.removeEventListener("pointermove",this.handlePointerMove),document.removeEventListener("pointerup",this.handlePointerUp)},resetInitState(){this.state=0,this.value=parseFloat(this.tempValue),this.tempValue=this.value.toFixed(3).toString(),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("pointerdown",this.handleSaveContent)},handleSaveContent(n){let t=this.$refs.inputContainer.getBoundingClientRect();(n.clientX<t.left||n.clientX>t.left+t.width||n.clientY<t.top||n.clientY>t.top+t.height)&&this.resetInitState()},handleKeyDown(n){this.state===1&&n.key==="Enter"&&this.resetInitState()},increaseValue(n){if(this.value===null)throw"[NumberInput] value is null";n=n||this.defaultDiff,this.maxValue===void 0?this.value+=n:this.value+n<=this.maxValue?this.value+=n:this.value=this.maxValue,this.tempValue=this.value.toFixed(3).toString()},decreaseValue(n){if(this.value===null)throw"[NumberInput] value is null";n=n||this.defaultDiff,this.minValue===void 0?this.value-=n:this.value-n>=this.minValue?this.value-=n:this.value=this.minValue,this.tempValue=this.value.toFixed(3).toString()},checkIsConnected(){this.isConnected=this.input.isConnected()}},mounted(){if(this.emitter.on("recompile",this.checkIsConnected),this.value=this.input.getValue().value,this.value===null)throw"[NumberInput] value is null";this.tempValue=this.value.toString(),this.minValue=this.input.getMinValue(),this.maxValue=this.input.getMaxValue(),this.minValue!==void 0&&this.maxValue!==void 0&&(this.range=this.maxValue-this.minValue)},watch:{value(n,e){if(e===null||this.value===null)return;const t=this.value;this.input.setValue(t),this.emitter.emit("recompile")}}}),Md=n=>(sr("data-v-2fa5e034"),n=n(),rr(),n),wx=Md(()=>Me("img",{alt:"Left arrow",src:bx,class:"shader-node-arrow-img"},null,-1)),Sx=[wx],Ex={class:"shader-node-number-input-label"},Cx={class:"shader-node-number-input-value"},Tx=Md(()=>Me("img",{alt:"Right arrow",src:yx,class:"shader-node-arrow-img"},null,-1)),Px=[Tx],Ax={key:1,class:"shader-node-number-input-active"},Lx={key:2,class:"shader-node-number-input-connected"},Rx={class:"shader-node-number-input-label"};function Dx(n,e,t,i,s,r){var a;return Ue(),Ke("div",{ref:"inputContainer",class:vt(["shader-node-number-input",{connected:n.isConnected}])},[n.state===n.State.Init&&!n.isConnected?(Ue(),Ke("span",{key:0,class:vt(["shader-node-number-input-container",{"single-element":n.isSmallRange}])},[n.isSmallRange?Jn("",!0):(Ue(),Ke("span",{key:0,class:"shader-node-arrow-left",onPointerdown:e[0]||(e[0]=(...o)=>n.handlePointerDown&&n.handlePointerDown(...o))},Sx,32)),Me("span",{class:vt(["shader-node-number-input-body",{"single-element":n.isSmallRange}]),onPointerdown:e[1]||(e[1]=(...o)=>n.handlePointerDown&&n.handlePointerDown(...o))},[Me("span",Ex,It(n.input.getName()),1),Me("span",Cx,It((a=n.value)==null?void 0:a.toFixed(3)),1)],34),n.isSmallRange?Jn("",!0):(Ue(),Ke("span",{key:1,class:"shader-node-arrow-right",onPointerdown:e[2]||(e[2]=(...o)=>n.handlePointerDown&&n.handlePointerDown(...o))},Px,32))],2)):n.isConnected?(Ue(),Ke("span",Lx,[Me("span",Rx,It(n.input.getName()),1)])):(Ue(),Ke("span",Ax,[Eh(Me("input",{ref:"inputField",class:"shader-node-number-input-field",type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>n.tempValue=o)},null,512),[[Hh,n.tempValue]])]))],2)}var Ix=tn(Mx,[["render",Dx],["__scopeId","data-v-2fa5e034"]]);const kx=Ot({data(){return{tempValue:""}},props:{value:{type:[String,Number],required:!0}},methods:{handleFocus(n){document.addEventListener("keydown",this.handleKeyDown)},handleBlur(n){document.removeEventListener("keydown",this.handleKeyDown),this.$emit("newValue",this.tempValue)},handleKeyDown(n){n.key==="Enter"&&this.$refs.inputElement.blur()}},watch:{value(){this.tempValue=this.value.toString()}},mounted(){const n=this.$refs.inputElement;n.addEventListener("focus",this.handleFocus),n.addEventListener("blur",this.handleBlur),this.tempValue=this.value.toString()},beforeUnmount(){document.removeEventListener("keydown",this.handleKeyDown);const n=this.$refs.inputElement;n.removeEventListener("focus",this.handleFocus),n.removeEventListener("blur",this.handleBlur)}}),Nx={class:"input-field-container"};function Fx(n,e,t,i,s,r){return Ue(),Ke("div",Nx,[Eh(Me("input",{ref:"inputElement","onUpdate:modelValue":e[0]||(e[0]=a=>n.tempValue=a)},null,512),[[Hh,n.tempValue]])])}var wd=tn(kx,[["render",Fx],["__scopeId","data-v-2a1b6ea3"]]),Bx="/three-shader-graph/assets/copy-icon.30a89d54.svg";const zx=Ot({data(){return{color:new at(Qn.HSV,0,0,0,0),canvas:document.getElementById("renderer-canvas"),colorSpace:"",colorString:"#110000",componentNames:["H","S","V","A"],componentValues:[0,0,0,1],stringComponentValues:["0","0","0","100"]}},props:{defaultValue:{type:Object,required:!0},showBelow:{type:Boolean,required:!1,default:!1}},components:{InputField:wd},methods:{handlePointerDownWheel(n){const t=this.$refs.wheel.getBoundingClientRect(),{left:i,top:s}=this.scaleOffsetToPixels(n.clientY-t.top,n.clientX-t.left);this.$refs.wheelSelector.style.left=`${i}px`,this.$refs.wheelSelector.style.top=`${s}px`,document.addEventListener("pointermove",this.handlePointerMoveWheel),document.addEventListener("pointerup",this.handlePointerUpWheel)},handlePointerDownBar(n){const t=this.$refs.bar.getBoundingClientRect(),{top:i}=this.scaleOffsetToPixels(n.clientY-t.top);this.$refs.barSelector.style.top=`${i}px`,document.addEventListener("pointermove",this.handlePointerMoveBar),document.addEventListener("pointerup",this.handlePointerUpBar)},handlePointerDownAlphaBar(n){const t=this.$refs.alphaBar.getBoundingClientRect(),{top:i}=this.scaleOffsetToPixels(n.clientY-t.top);this.$refs.alphaBarSelector.style.top=`${i}px`,document.addEventListener("pointermove",this.handlePointerMoveAlphaBar),document.addEventListener("pointerup",this.handlePointerUpAlphaBar)},moveWheelSelector(n){const t=this.$refs.wheel.getBoundingClientRect(),i=t.width/2,s=[t.left+t.width/2,t.top+t.height/2],r=[s[0]-n.clientX,s[1]-n.clientY],a=Math.sqrt(r[0]*r[0]+r[1]*r[1]);if(a<=i){const{top:o,left:l}=this.scaleOffsetToPixels(n.clientY-t.top,n.clientX-t.left);this.$refs.wheelSelector.style.top=`${o}px`,this.$refs.wheelSelector.style.left=`${l}px`}else{const o=[i*r[0]/a,i*r[1]/a],{top:l,left:c}=this.scaleOffsetToPixels(-o[1]+i,-o[0]+i);this.$refs.wheelSelector.style.left=`${c}px`,this.$refs.wheelSelector.style.top=`${l}px`}this.getWheelCoordinates()},handlePointerMoveWheel(n){this.moveWheelSelector(n)},moveBarSelector(n,e,t){const i=e.getBoundingClientRect();if(n.clientY>i.top+i.height){const{top:s}=this.scaleOffsetToPixels(i.height);t.style.top=`${s}px`}else if(n.clientY<i.top)t.style.top="0";else{const{top:s}=this.scaleOffsetToPixels(n.clientY-i.top);t.style.top=`${s}px`}this.getWheelCoordinates()},handlePointerMoveBar(n){this.moveBarSelector(n,this.$refs.bar,this.$refs.barSelector),this.$refs.wheel.style.filter=`brightness(${this.color.getHsv().z})`},handlePointerMoveAlphaBar(n){this.moveBarSelector(n,this.$refs.alphaBar,this.$refs.alphaBarSelector)},getWheelCoordinates(){const t=this.$refs.wheel.getBoundingClientRect().width/2,i=this.$refs.wheelSelector,{left:s,top:r}=this.scaleOffsetFromPixels(parseFloat(i.style.top),parseFloat(i.style.left)),a=1-r/t,o=s/t-1,l=Math.sqrt(o*o+a*a);let c=0;a===0&&o===0?c=0:a>=0&&o>=0?c=Math.PI+Math.atan(o/a):a>=0?c=Math.atan(o/a)+Math.PI:o>=0?c=Math.atan(o/a)+2*Math.PI:c=Math.atan(o/a);let h=gi(0,360,c*180/Math.PI);h===360&&(h=0);const d=gi(0,1,l),m=this.$refs.bar.getBoundingClientRect(),v=this.$refs.barSelector,{top:p}=this.scaleOffsetFromPixels(parseFloat(v.style.top)),f=gi(0,1,1-p/m.height),S=this.$refs.alphaBar.getBoundingClientRect(),C=this.$refs.alphaBarSelector,{top:E}=this.scaleOffsetFromPixels(parseFloat(C.style.top)),w=gi(0,1,1-E/S.height);this.color.setHSV([h,d,f,w]),this.updateComponentValues()},handlePointerUpWheel(n){this.moveWheelSelector(n),document.removeEventListener("pointermove",this.handlePointerMoveWheel),document.removeEventListener("pointerup",this.handlePointerUpWheel)},handlePointerUpBar(n){this.moveBarSelector(n,this.$refs.bar,this.$refs.barSelector),this.$refs.wheel.style.filter=`brightness(${this.color.getHsv().z})`,document.removeEventListener("pointermove",this.handlePointerMoveBar),document.removeEventListener("pointerup",this.handlePointerUpBar)},handlePointerUpAlphaBar(n){this.moveBarSelector(n,this.$refs.alphaBar,this.$refs.alphaBarSelector),document.removeEventListener("pointermove",this.handlePointerMoveAlphaBar),document.removeEventListener("pointerup",this.handlePointerUpAlphaBar)},scaleOffsetToPixels(n,e){if(this.canvas===null)throw"[ColorPicker::scaleOffsetToPixels] canvas is null";e=e||0;const t=this.canvas.getAttribute("viewBox");if(t===null)throw"[ColorPicker::scaleOffsetToPixels] viewBox is null";const i=t.split(" ").map(r=>parseFloat(r)),s=this.canvas.getBoundingClientRect();return{left:e*i[3]/s.height,top:n*i[2]/s.width}},scaleOffsetFromPixels(n,e){if(this.canvas===null)throw"[ColorPicker::scaleOffsetFromPixels] canvas is null";e=e||0;const t=this.canvas.getAttribute("viewBox");if(t===null)throw"[ColorPicker::scaleOffsetToPixels] viewBox is null";const i=t.split(" ").map(r=>parseFloat(r)),s=this.canvas.getBoundingClientRect();return{left:e/i[3]*s.height,top:n/i[2]*s.width}},setSelector(){const n=this.defaultValue.getHsv(),[e,t,i]=[n.x,n.y,n.z],s=this.defaultValue.getAlpha(),a=this.$refs.bar.getBoundingClientRect(),o=this.$refs.barSelector,{top:l}=this.scaleOffsetToPixels((-i+1)*a.height);o.style.top=`${l}px`;const h=this.$refs.alphaBar.getBoundingClientRect(),d=this.$refs.alphaBarSelector,{top:u}=this.scaleOffsetToPixels((1-s)*h.height);d.style.top=`${u}px`;const m=e*Math.PI/180,v=Math.sin(m+Math.PI/2),p=Math.cos(m+Math.PI/2),f=this.$refs.wheel;this.$refs.wheel.style.filter=`brightness(${i})`;const S=f.getBoundingClientRect().width/2,C=this.$refs.wheelSelector,{top:E,left:w}=this.scaleOffsetToPixels(v*t*S+S,t*S*p+S);C.style.left=`${w}px`,C.style.top=`${E}px`},updateStringComponentValues(){switch(this.colorSpace){case"HSV":this.componentValues.forEach((n,e)=>{e>0&&e<3?this.stringComponentValues[e]=n.toString()+"%":this.stringComponentValues[e]=n.toString()});break;case"RGB":this.componentValues.forEach((n,e)=>{this.stringComponentValues[e]=n.toString()});break;case"HEX":for(let n=0;n<3;n++)this.stringComponentValues[n]=Os(Math.round(this.componentValues[n]));this.stringComponentValues[3]=this.componentValues[3].toString();break;case"":break;default:throw"[colorSpace] Unknown color space"}},updateComponentValues(){switch(this.colorSpace){case"HSV":const n=this.color.getHsv();this.componentValues=[Math.floor(n.x),Math.floor(n.y*100),Math.floor(n.z*100),this.color.getAlpha()];break;case"HEX":case"RGB":const e=this.color.getRgb();this.componentValues=[Math.floor(e.x),Math.floor(e.y),Math.floor(e.z),this.color.getAlpha()];break;case"":break;default:throw"[colorSpace] Unknown color space"}this.updateStringComponentValues(),this.emitNewColor()},emitNewColor(){const n=this.color.getRgb(),e=this.color.getHsl(),t=this.color.getHsv(),i=this.color.getAlpha(),s=[t.x,t.y,t.z,i],r=[e.x,e.y,e.z,i],a=[n.x,n.y,n.z,i],o=this.color.getColorStringRgba(),l=this.color.getColorStringHsla(),c=this.color.getColorStringHex();this.colorString=c.slice(0,7),this.$emit("newColorRawRgb",a),this.$emit("newColorRawHsl",r),this.$emit("newColorRawHsv",s),this.$emit("newColorStringRgb",o),this.$emit("newColorStringHex",c),this.$emit("newColorStringHsl",l)},handlePointerDownClosing(n){const t=this.$refs.container.getBoundingClientRect();n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom||(n.cancelBubble=!0,n.preventDefault(),document.addEventListener("pointerup",this.handlePointerUpClosing))},handlePointerUpClosing(n){const t=this.$refs.container.getBoundingClientRect();n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom||(n.cancelBubble=!0,n.preventDefault(),this.$nextTick(()=>{this.$emit("closeMe")}))},handleNewStringValueHSV(n,e){const t=this.color.getHsv();let i=t.x,s=t.y,r=t.z;switch(e){case 0:let a=parseInt(n);a<0?(this.stringComponentValues[e]="0",a=0):a>=360?(this.stringComponentValues[e]=(a%360).toFixed(0),a=a%360):this.stringComponentValues[e]=a.toFixed(0),i=a;break;case 1:n.includes("%")&&(n=n.replace("%",""));let o=parseInt(n);o<0?(o=0,this.stringComponentValues[e]="0%"):o>=100?(o=1,this.stringComponentValues[e]="100%"):(this.stringComponentValues[e]=o.toFixed(0)+"%",o/=100),s=o;break;case 2:n.includes("%")&&(n=n.replace("%",""));let l=parseInt(n);l<0?(l=0,this.stringComponentValues[e]="0%"):l>=100?(l=1,this.stringComponentValues[e]="100%"):(this.stringComponentValues[e]=l.toFixed(0)+"%",l/=100),r=l;break;default:throw"[ColorPicker::handleNewStringValueHSV] Invalid Index"}this.color.setHSV([i,s,r])},handleNewStringValueRGB(n,e){const t=this.color.getRgb();let i=t.x,s=t.y,r=t.z,a=parseInt(n);a<0?(a=0,this.stringComponentValues[e]="0"):a>255?(a=255,this.stringComponentValues[e]="255"):this.stringComponentValues[e]=a.toFixed(0);const o=[i,s,r];o[e]=a,this.color.setRGB(o)},handleNewStringValueHEX(n,e){const t=this.color.getHex();let i=t.x,s=t.y,r=t.z,a=parseInt(n,16);a<0?(a=0,this.stringComponentValues[e]="00"):a>255?(a=255,this.stringComponentValues[e]="FF"):this.stringComponentValues[e]=a.toString(16).toUpperCase();const o=[i,s,r];o[e]=a,this.color.setHEX(o)},setNewValue(n,e){if(e===3){let t=parseFloat(n);t<0?(t=0,this.stringComponentValues[e]="0"):t>1?(t=1,this.stringComponentValues[e]="1"):this.stringComponentValues[e]=t.toFixed(2),this.color.setAlpha(t)}else switch(this.colorSpace){case"HSV":this.handleNewStringValueHSV(n,e);break;case"RGB":this.handleNewStringValueRGB(n,e);break;case"HEX":this.handleNewStringValueHEX(n,e);break;default:throw"[ColorPicker:setNewValue] Invalid colorSpace"}this.emitNewColor(),this.setSelector()},copyColor(){let n="";switch(this.colorSpace){case"HSV":n=this.color.getColorStringHsla();break;case"HEX":n=this.color.getColorStringHex();break;case"RGB":n=this.color.getColorStringRgba();break;case"":break;default:throw"[copyColor] Unknown color space"}const e=document.createElement("input");e.value=n,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),console.log("Copied",n);let i=this.$refs.copyIcon.querySelector("img");i==null||i.setAttribute("src","../../public/icons/tick-icon.svg"),setTimeout(()=>{i==null||i.setAttribute("src","../../public/icons/copy-icon.svg")},1500)}},watch:{colorSpace(){switch(this.colorSpace){case"HSV":this.componentNames=["H","S","V","A"];break;case"HEX":case"RGB":this.componentNames=["R","G","B","A"];break;case"":break;default:throw"[colorSpace] Unknown color space"}this.updateComponentValues()},defaultValue(){this.color.clone(this.defaultValue),this.setSelector()},hue(){}},mounted(){console.log("new def",this.defaultValue),this.color.clone(this.defaultValue);const n=this.$refs.container;this.showBelow&&(n.style.bottom="auto",n.style.top="100%"),document.addEventListener("pointerdown",this.handlePointerDownClosing),this.$refs.barSelector.style.top="0",this.$refs.alphaBarSelector.style.top="0",this.setSelector(),this.getWheelCoordinates(),this.colorSpace="HSV"},beforeUnmount(){document.removeEventListener("pointerdown",this.handlePointerDownClosing),document.removeEventListener("pointerup",this.handlePointerUpClosing)}}),ur=n=>(sr("data-v-70c5e748"),n=n(),rr(),n),Ox={ref:"container",class:"color-picker-container"},Ux={class:"color-picker-colors"},Vx={ref:"wheelSelector",class:"color-picker-wheel-selector"},Hx={ref:"barSelector",class:"color-picker-bar-selector"},Gx={class:"color-picker-alpha-bar"},Wx=ur(()=>Me("div",{class:"color-picker-alpha-bar-bg"},null,-1)),$x={ref:"alphaBarSelector",class:"color-picker-alpha-bar-selector"},qx={class:"color-picker-space-container"},Xx={class:"color-picker-space"},jx=ur(()=>Me("p",null,"HSV",-1)),Yx=[jx],Zx=ur(()=>Me("p",null,"RGB",-1)),Kx=[Zx],Jx=ur(()=>Me("p",null,"HEX",-1)),Qx=[Jx],eb={class:"color-picker-value-container"},tb={class:"color-picker-value"},nb={class:"color-picker-additional"},ib=ur(()=>Me("img",{src:Bx,alt:"copy icon"},null,-1)),sb=[ib];function rb(n,e,t,i,s,r){const a=Xt("input-field");return Ue(),Ke("div",Ox,[Me("div",Ux,[Me("div",{ref:"wheel",onPointerdown:e[0]||(e[0]=(...o)=>n.handlePointerDownWheel&&n.handlePointerDownWheel(...o)),class:"color-picker-wheel"},[Me("div",Vx,null,512)],544),Me("div",{ref:"bar",onPointerdown:e[1]||(e[1]=(...o)=>n.handlePointerDownBar&&n.handlePointerDownBar(...o)),class:"color-picker-bar"},[Me("div",Hx,null,512)],544),Me("div",Gx,[Wx,Me("div",{ref:"alphaBar",onPointerdown:e[2]||(e[2]=(...o)=>n.handlePointerDownAlphaBar&&n.handlePointerDownAlphaBar(...o)),style:Zn({backgroundImage:`linear-gradient(to bottom, ${n.colorString}, transparent)`}),class:"color-picker-alpha-bar-grad"},[Me("div",$x,null,512)],36)])]),Me("div",qx,[Me("div",Xx,[Me("div",{onClick:e[3]||(e[3]=o=>n.colorSpace="HSV"),class:vt(["color-picker-space-el",{selected:n.colorSpace==="HSV"}])},Yx,2),Me("div",{onClick:e[4]||(e[4]=o=>n.colorSpace="RGB"),class:vt(["color-picker-space-el",{selected:n.colorSpace==="RGB"}])},Kx,2),Me("div",{onClick:e[5]||(e[5]=o=>n.colorSpace="HEX"),class:vt(["color-picker-space-el",{selected:n.colorSpace==="HEX"}])},Qx,2)])]),Me("div",eb,[Me("div",tb,[(Ue(!0),Ke(gt,null,qs(n.stringComponentValues,(o,l)=>(Ue(),Ke("div",{key:l,class:"color-picker-value-el"},[wt(a,{value:n.stringComponentValues[l],onNewValue:c=>n.setNewValue(c,l)},null,8,["value","onNewValue"]),Me("p",null,It(n.componentNames[l]),1)]))),128))])]),Me("div",nb,[Me("button",{ref:"copyIcon",onClick:e[6]||(e[6]=(...o)=>n.copyColor&&n.copyColor(...o)),class:"color-picker-icons"},sb,512)])],512)}var Sd=tn(zx,[["render",rb],["__scopeId","data-v-70c5e748"]]);var Ed=(n=>(n[n.Init=0]="Init",n[n.Active=1]="Active",n))(Ed||{});const ob=Ot({data(){return{color:"",state:0,State:Ed,isConnected:!1,startValue:new at(Qn.HSV,0,0,0,0)}},props:{input:{type:Object,required:!0},emitter:{type:Object,required:!0}},components:{ColorPicker:Sd},computed:{},methods:{updateColor(n){this.color=n;const i=n.split("(")[1].split(")")[0].split(","),s=parseFloat(i[0]),r=parseFloat(i[1])/100,a=parseFloat(i[2])/100;let o=1;i.length===4&&(o=parseFloat(i[3])/100);const l=this.input.getValue();l.value.setHSL([s,r,a,o]),this.startValue.clone(l.value),this.emitter.emit("recompile")},togglePicker(n){this.state===0?(this.state=1,n.cancelBubble=!0):this.$nextTick(()=>{this.state=0})},hidePicker(){},checkIsConnected(){this.isConnected=this.input.isConnected()}},mounted(){this.emitter.on("recompile",this.checkIsConnected),this.startValue.clone(this.input.getValue().value),this.$refs.inputActive.style.backgroundColor=this.startValue.getColorStringRgba()}}),ab=n=>(sr("data-v-6c8a01b3"),n=n(),rr(),n),lb={ref:"inputContainer",class:"shader-node-color-input"},cb={key:0,class:"shader-node-color-input-active-container"},hb=ab(()=>Me("span",{class:"shader-node-color-input-bg"},null,-1));function db(n,e,t,i,s,r){const a=Xt("ColorPicker");return Ue(),Ke("div",lb,[Me("span",null,It(n.input.getName()),1),n.isConnected?Jn("",!0):(Ue(),Ke("span",cb,[hb,Me("span",{class:"shader-node-color-input-active",ref:"inputActive",style:Zn({backgroundColor:n.color}),onPointerup:e[0]||(e[0]=(...o)=>n.togglePicker&&n.togglePicker(...o))},null,36)])),n.state===n.State.Active?(Ue(),Ri(a,{key:1,ref:"colorPicker",defaultValue:n.startValue,onCloseMe:n.togglePicker,onNewColorStringHsl:n.updateColor},null,8,["defaultValue","onCloseMe","onNewColorStringHsl"])):Jn("",!0)],512)}var ub=tn(ob,[["render",db],["__scopeId","data-v-6c8a01b3"]]);const fb=Ot({components:{NumberInput:Ix,ColorInput:ub},data(){return{value:null,link:null,state:0,addLinkRoutine:n=>{},observerRoutine:(n,e)=>{},observer:null}},props:{input:{type:Object,required:!0},renderer:{type:Object,required:!0},emitter:{type:Object,required:!0}},methods:{handlePointerDown(n){switch(this.state){case 0:this.handlePointerDownOpen(n);break;case 1:throw"[InputComponent] is busy, how is pointer down?";case 2:this.handlePointerDownLinked();break;default:throw"[InputComponent] Case not implemented: "+this.state}},handlePointerDownOpen(n){console.log("creatae"),this.link=this.renderer.createIncomingLink(n.target,this.input),this.emitter.on("addLink",this.addLinkRoutine)},handlePointerDownLinked(){if(console.log("link",this.link),this.link===null)throw"[InputComponent] link is null";this.link.detachEnd(),this.input.dropConnection(),this.emitter.emit("recompile"),this.emitter.on("addLink",this.addLinkRoutine)},handlePointerUp(n){switch(this.state){case 0:this.handlePointerUpOpen(n);break;case 1:break;case 2:break;default:throw"[InputComponent] Case not implemented: "+this.state}},handlePointerUpOpen(n){console.log("addi"),this.emitter.on("addLink",this.addLinkRoutine),this.renderer.fixLink({endElement:n.target,endNode:this.renderer,endInput:this.input})},addLink(n){console.log("linked"),this.link=n},removeListeners(){this.emitter.off("addLink",this.addLinkRoutine)},observerCallback(n,e){for(const t of n){if(!(t.type==="attributes"&&typeof t.attributeName=="string"))continue;const i=this.$refs.inputEl.getAttribute(t.attributeName);switch(i){case"open":this.setStateOpen();break;case"busy":this.setStateBusy();break;case"linked":this.setStateLinked();break;default:throw"[InputComponent] Unknown data-state: "+i}}},setStateOpen(){this.state=0,this.removeListeners()},setStateBusy(){this.state=1},setStateLinked(){this.state=2,this.removeListeners()}},mounted(){this.value=this.input.getValue().value,this.addLinkRoutine=e=>this.addLink(e);const n=this.$refs.inputEl;this.observerRoutine=(e,t)=>this.observerCallback(e,t),this.observer=new MutationObserver(this.observerCallback),this.observer.observe(n,{attributes:!0})},watch:{value(n,e){if(e===null||this.value===null)return;console.log("new value",this.value,e);const t=this.value!==""?parseFloat(this.value):0;this.input.setValue(t),this.emitter.emit("recompile")}}}),pb={key:2},mb={class:"shader-node-input-label"};function gb(n,e,t,i,s,r){const a=Xt("NumberInput"),o=Xt("ColorInput");return Ue(),Ke(gt,null,[Me("div",{class:vt(["shader-node-input-link",n.input.getType()]),onPointerdown:e[0]||(e[0]=l=>n.handlePointerDown(l)),onPointerup:e[1]||(e[1]=l=>n.handlePointerUp(l)),ref:"inputEl"},null,34),n.input.getType()==="number"?(Ue(),Ri(a,{key:0,input:n.input,emitter:n.emitter},null,8,["input","emitter"])):n.input.getType()==="color"?(Ue(),Ri(o,{key:1,input:n.input,emitter:n.emitter},null,8,["input","emitter"])):(Ue(),Ke("span",pb,[Me("span",mb,It(n.input.getType())+" - "+It(n.state)+" - "+It(n.input.getName()),1)]))],64)}var vb=tn(fb,[["render",gb],["__scopeId","data-v-4d11d0eb"]]);const _b=Ot({data(){return{state:0,link:null,addLinkRoutine:n=>{},observerRoutine:(n,e)=>{},observer:null}},props:{output:{type:Object,required:!0},renderer:{type:Object,required:!0},emitter:{type:Object,required:!0}},methods:{handlePointerDown(n){switch(console.log(this.state,this.state===0),this.state){case 0:this.handlePointerDownOpen(n);break;case 1:throw"[OutputComponent] is busy, how is pointer down?";case 2:console.log("create new ray, and eventually pop open menu");break;default:throw"[OutputComponent::handlePointerDown] case not implemented? "+this.state}},handlePointerDownOpen(n){this.emitter.on("addLink",this.addLinkRoutine),this.link=this.renderer.createOutgoingLink(n.target,this.output)},handlePointerUp(n){switch(this.state){case 0:this.handlePointerUpOpen(n);break;case 1:break;case 2:break;default:throw"[OutputComponent] Case not implemented: "+this.state}},handlePointerUpOpen(n){this.emitter.on("addLink",this.addLinkRoutine),this.renderer.fixLink({startElement:n.target,startNode:this.renderer,startOutput:this.output})},addLink(n){console.log("linked"),this.link=n},removeListeners(){this.emitter.off("addLink",this.addLinkRoutine)},observerCallback(n,e){for(const t of n){if(!(t.type==="attributes"&&typeof t.attributeName=="string"))continue;const i=this.$refs.outputEl.getAttribute(t.attributeName);switch(i){case"open":console.log("[OutputComponent] new state open"),this.setStateOpen();break;case"busy":console.log("[OutputComponent] new state busy"),this.setStateBusy();break;case"linked":console.log("[OutputComponent] new state linked"),this.setStateLinked();break;default:throw"[InputComponent] Unknown data-state: "+i}}},setStateOpen(){this.state=0,this.removeListeners()},setStateBusy(){this.state=1},setStateLinked(){this.state=2,this.removeListeners()}},mounted(){this.addLinkRoutine=e=>this.addLink(e);const n=this.$refs.outputEl;this.observerRoutine=(e,t)=>this.observerCallback(e,t),this.observer=new MutationObserver(this.observerCallback),this.observer.observe(n,{attributes:!0})}});function xb(n,e,t,i,s,r){return Ue(),Ke(gt,null,[Me("div",{class:vt(["shader-node-output-link",n.output.getType()]),onPointerdown:e[0]||(e[0]=a=>n.handlePointerDown(a,n.output)),onPointerup:e[1]||(e[1]=a=>n.handlePointerUp(a)),"data-state":"open",ref:"outputEl"},null,34),Me("span",null,It(n.state)+" - "+It(n.output.getName()),1)],64)}var bb=tn(_b,[["render",xb],["__scopeId","data-v-289819ce"]]);const yb=Ot({data(){return{gradientBar:void 0}},props:{color:{type:String,required:!0},position:{type:Number,required:!0},isSelected:{type:Boolean,required:!0}},computed:{stylePosition(){return`${this.position*100}%`}},methods:{computePickerPosition(n){const e=this.gradientBar.getBoundingClientRect();let t=0;return n.clientX<e.left?t=0:n.clientX>e.right?t=1:t=(n.clientX-e.left)/e.width,t},handlePointerDown(){document.addEventListener("pointermove",this.handlePointerMove),document.addEventListener("pointerup",this.handlePointerUp)},handlePointerMove(n){const e=this.computePickerPosition(n);this.$emit("newPosition",e)},handlePointerUp(n){const e=this.computePickerPosition(n);this.$emit("newPosition",e),document.removeEventListener("pointermove",this.handlePointerMove),document.removeEventListener("pointerup",this.handlePointerUp)}},mounted(){const n=this.$refs.pickContainer;this.gradientBar=n.parentNode}});function Mb(n,e,t,i,s,r){return Ue(),Ke("div",{ref:"pickContainer",onPointerdown:e[0]||(e[0]=(...a)=>n.handlePointerDown&&n.handlePointerDown(...a)),class:"gradient-pick-container",style:Zn({left:n.stylePosition})},[Me("div",{class:vt(["gradient-pick",{selected:n.isSelected}]),style:Zn({"background-color":n.color})},null,6)],36)}var wb=tn(yb,[["render",Mb],["__scopeId","data-v-10cac133"]]),Sb="/three-shader-graph/assets/arrow-down-icon.27e01bc3.svg";const Eb=Ot({data(){return{hideList:!0,currentSelected:0}},props:{options:{required:!0,type:Object},selected:{required:!0,type:Number}},watch:{selected(){this.currentSelected=this.selected}},methods:{chooseOption(n){this.currentSelected=n,this.hideList=!0,this.$emit("optionChosen",this.currentSelected)}}}),Cb=n=>(sr("data-v-e34c9940"),n=n(),rr(),n),Tb={class:"dropdown-selected"},Pb=Cb(()=>Me("img",{alt:"v",src:Sb},null,-1)),Ab=[Pb],Lb=["onClick"];function Rb(n,e,t,i,s,r){return n.options.length?(Ue(),Ke("div",{key:0,class:vt(["dropdown-container",{showList:!n.hideList}])},[Me("div",Tb,[Me("p",null,It(n.options[n.currentSelected]),1),Me("button",{class:vt(["dropdown-button",{showList:!n.hideList}]),onClick:e[0]||(e[0]=a=>n.hideList=!n.hideList)},Ab,2)]),Me("div",{class:vt(["dropdown-list",{hidden:n.hideList}])},[(Ue(!0),Ke(gt,null,qs(n.options,(a,o)=>(Ue(),Ke("div",{class:"dropdown-option",key:a},[Me("p",{onClick:l=>n.chooseOption(o)},It(a),9,Lb)]))),128))],2)],2)):Jn("",!0)}var Db=tn(Eb,[["render",Rb],["__scopeId","data-v-e34c9940"]]),Ib="/three-shader-graph/assets/minus-icon.136a6035.svg",kb="/three-shader-graph/assets/plus-icon.234a8d76.svg";const Nb=Ot({components:{GradientPick:wb,ColorPicker:Sd,InputField:wd,Dropdown:Db},data(){return{gradient:null,pickers:[],colors:[],selectedPicker:-1,showColorPicker:!1,tempPickerPosition:"",selectedInterpolation:0}},props:{baseNode:{type:Object,required:!0},emitter:{type:Object,required:!0}},computed:{dropdownOptions(){return Object.keys(xn).filter(e=>isNaN(Number(e)))},canRemovePicker(){return this.pickers.length>2}},methods:{removePicker(){var n;if(!this.canRemovePicker){console.log("Cannot remove any more pickers");return}this.pickers.splice(this.selectedPicker,1),(n=this.gradient)==null||n.setPickers(this.pickers),console.log("Removed picker",this.selectedPicker,this.pickers),this.selectedPicker===this.pickers.length&&this.selectedPicker--,this.updateGradient(),this.genColors(),this.updateGraphNode()},addPicker(){var i;console.log("add");let n=this.pickers[this.selectedPicker].position;this.selectedPicker!==this.pickers.length-1?n=(n+this.pickers[this.selectedPicker+1].position)/2:n=(n+this.pickers[this.selectedPicker-1].position)/2,console.log("newpos",n);const e={position:n,color:new at(Qn.HEX,0,0,0,1)};e.color.clone(this.gradient.getColorAt(n));let t=0;this.selectedPicker!==this.pickers.length-1?(this.pickers.splice(this.selectedPicker+1,0,e),t=this.selectedPicker+1):(this.pickers.splice(this.selectedPicker-1,0,e),t=this.selectedPicker-1),console.log("final",this.pickers),this.selectedPicker=t,(i=this.gradient)==null||i.setPickers(this.pickers),this.updateGradient(),this.genColors(),this.updateGraphNode()},genColors(){console.log("len",this.pickers.length,this.colors.length),this.pickers.forEach((n,e)=>{console.log(n.color.getColorStringRgba()),this.colors[e]=n.color.getColorStringRgba()}),console.log(this.colors)},updateColor(n){this.pickers[this.selectedPicker].color.setRGB(n),this.updateGradient(),this.genColors(),this.updateGraphNode()},updateGradientConstant(){const n=this.$refs.gradientBar;let e="linear-gradient(to right, ";this.pickers.forEach((t,i)=>{e+=`${t.color.getColorStringRgba()} ${Math.round(t.position*100)}%`,i!==this.pickers.length-1?e+=`, ${t.color.getColorStringRgba()} ${Math.round(this.pickers[i+1].position*100)}%, `:e+=")"}),console.log("New const grad",e),n.style.backgroundImage=e},updateGradientLinear(){const n=this.$refs.gradientBar;let e="linear-gradient(to right, ";this.pickers.forEach((t,i)=>{e+=`${t.color.getColorStringRgba()} ${Math.round(t.position*100)}%`,i!==this.pickers.length-1?e+=", ":e+=")"}),n.style.backgroundImage=e},updateGradient(){switch(this.selectedInterpolation){case xn.Constant:this.updateGradientConstant();break;case xn.Linear:this.updateGradientLinear();break;default:throw"[GradientPicker:updateGradient] invalid interpolation"}},updateGraphNode(){var n;(n=this.gradient)==null||n.setPickers([...this.pickers]),this.emitter.emit("recompile")},toggleColorPicker(n){this.showColorPicker?this.$nextTick(()=>{this.showColorPicker=!1}):(this.showColorPicker=!0,n.cancelBubble=!0)},setPickerPosition(n){const e=this.pickers[this.selectedPicker];this.pickers[this.selectedPicker].position=n,this.pickers.sort((t,i)=>t.position-i.position),this.selectedPicker=this.pickers.indexOf(e),this.tempPickerPosition=(100*n).toFixed(0),this.updateGradient(),this.genColors(),this.updateGraphNode()},setNewPosition(n){this.tempPickerPosition=Math.random().toString(),this.$nextTick(()=>{this.tempPickerPosition=n})}},watch:{pickers(){this.updateGradient(),this.genColors(),this.updateGraphNode()},selectedPicker(){this.selectedPicker>=0&&this.selectedPicker<this.pickers.length&&(this.tempPickerPosition=(100*this.pickers[this.selectedPicker].position).toFixed(0))},tempPickerPosition(){if(this.tempPickerPosition.trim()==="")return;const n=this.pickers[this.selectedPicker];this.pickers[this.selectedPicker].position=Math.max(Math.min(parseFloat(this.tempPickerPosition)/100,1),0),this.pickers.sort((e,t)=>e.position-t.position),this.selectedPicker=this.pickers.indexOf(n),this.tempPickerPosition=(100*this.pickers[this.selectedPicker].position).toFixed(0),this.updateGradient(),this.genColors(),this.updateGraphNode()},selectedInterpolation(){var n;(n=this.gradient)==null||n.setInterpolation(this.selectedInterpolation),this.emitter.emit("recompile"),this.updateGradient(),this.genColors(),this.updateGraphNode()}},mounted(){this.gradient=this.baseNode.getGradient(),this.pickers=this.gradient.getPickers(),this.selectedPicker=0}}),el=n=>(sr("data-v-6d53dfdc"),n=n(),rr(),n),Fb={class:"gradient-picker-container"},Bb={class:"gradient-picker-top"},zb={class:"gradient-picker-btn"},Ob=el(()=>Me("img",{alt:"-",src:Ib},null,-1)),Ub=[Ob],Vb=el(()=>Me("img",{alt:"+",src:kb},null,-1)),Hb=[Vb],Gb={class:"gradient-picker-interpolation"},Wb={class:"gradient-picker-gradient"},$b={ref:"gradientBar",class:"gradient-picker-gradient-bar"},qb={key:0,class:"gradient-picker-picker-info"},Xb={class:"gradient-color-picker-position"},jb=zh(" Pos "),Yb={class:"gradient-color-picker-color-container"},Zb=el(()=>Me("div",{class:"gradient-color-picker-color-bg"},null,-1));function Kb(n,e,t,i,s,r){const a=Xt("dropdown"),o=Xt("GradientPick"),l=Xt("input-field"),c=Xt("ColorPicker");return Ue(),Ke("div",Fb,[Me("div",Bb,[Me("div",zb,[Me("button",{onPointerdown:e[0]||(e[0]=(...h)=>n.removePicker&&n.removePicker(...h)),class:vt(["gradient-picker-btn-el",{disabled:!n.canRemovePicker}])},Ub,34),Me("button",{onPointerdown:e[1]||(e[1]=(...h)=>n.addPicker&&n.addPicker(...h)),class:"gradient-picker-btn-el"},Hb,32)]),Me("div",Gb,[wt(a,{options:n.dropdownOptions,selected:n.selectedInterpolation,onOptionChosen:e[2]||(e[2]=h=>{n.selectedInterpolation=h})},null,8,["options","selected"])])]),Me("div",Wb,[Me("div",$b,[(Ue(!0),Ke(gt,null,qs(n.pickers,(h,d)=>(Ue(),Ri(o,{onPointerdown:u=>n.selectedPicker=d,key:h.id,position:h.position,color:n.colors[d],isSelected:n.selectedPicker===d,onNewPosition:n.setPickerPosition},null,8,["onPointerdown","position","color","isSelected","onNewPosition"]))),128))],512)]),n.selectedPicker>=0?(Ue(),Ke("span",qb,[Me("span",Xb,[jb,wt(l,{value:n.tempPickerPosition,onNewValue:n.setNewPosition},null,8,["value","onNewValue"])]),Me("div",Yb,[Zb,Me("div",{class:"gradient-color-picker-color",style:Zn({backgroundColor:n.colors[n.selectedPicker]}),onPointerup:e[3]||(e[3]=(...h)=>n.toggleColorPicker&&n.toggleColorPicker(...h))},null,36)]),n.showColorPicker?(Ue(),Ri(c,{key:0,ref:"colorPicker",defaultValue:n.pickers[n.selectedPicker].color,showBelow:!0,onCloseMe:n.toggleColorPicker,onNewColorRawRgb:n.updateColor},null,8,["defaultValue","onCloseMe","onNewColorRawRgb"])):Jn("",!0)])):Jn("",!0)])}var Jb=tn(Nb,[["render",Kb],["__scopeId","data-v-6d53dfdc"]]);const Qb=Ot({components:{InputComponent:vb,OutputComponent:bb,GradientPicker:Jb},data(){return{colorRamp:bd}},props:{baseNode:{type:Object,required:!0},title:{type:String,required:!0},outputs:{type:Object,required:!0},inputs:{type:Object,required:!0},renderer:{type:Object,required:!0},emitter:{type:Object,required:!0}}}),ey={class:""},ty={class:"shader-node-title"},ny={class:"shader-node-body"},iy={key:0,class:"shader-node-additional"};function sy(n,e,t,i,s,r){const a=Xt("GradientPicker"),o=Xt("output-component"),l=Xt("input-component");return Ue(),Ke("span",ey,[Me("div",ty,It(n.title),1),Me("div",ny,[n.baseNode instanceof n.colorRamp?(Ue(),Ke("div",iy,[wt(a,{baseNode:n.baseNode,emitter:n.emitter},null,8,["baseNode","emitter"])])):Jn("",!0),(Ue(!0),Ke(gt,null,qs(n.outputs,c=>(Ue(),Ke("div",{key:c.getName(),class:"shader-node-output"},[wt(o,{output:c,renderer:n.renderer,emitter:n.emitter},null,8,["output","renderer","emitter"])]))),128)),(Ue(!0),Ke(gt,null,qs(n.inputs,c=>(Ue(),Ke("div",{key:c.getName(),class:"shader-node-input"},[wt(l,{input:c,renderer:n.renderer,emitter:n.emitter},null,8,["input","renderer","emitter"])]))),128))])])}var ry=tn(Qb,[["render",sy],["__scopeId","data-v-72dc8d4c"]]),tt=(n=>(n[n.Initial=0]="Initial",n[n.Set=1]="Set",n[n.SelectedDown=2]="SelectedDown",n[n.SelectedUp=3]="SelectedUp",n[n.Moving=4]="Moving",n))(tt||{});class oy{constructor(e,t,i,s,r){K(this,"canvas");K(this,"emitter");K(this,"svgNode");K(this,"movementManager");K(this,"graphNode");K(this,"pointerPos");K(this,"startDragPos");K(this,"startDragPosUnit");K(this,"state");K(this,"pointerMovedHandler");K(this,"deleteNodeHandler");K(this,"incomingLinks");K(this,"outgoingLinks");this.canvas=e,this.emitter=t,this.graphNode=new i,this.pointerPos={x:s.x,y:s.y},this.startDragPos={x:0,y:0},this.startDragPosUnit={x:0,y:0},this.pointerMovedHandler=o=>this.updatePointerPos(o),this.emitter.on("pointerMoved",this.pointerMovedHandler),this.incomingLinks=[],this.outgoingLinks=[],this.state=r?0:1;const a=this.canvas.getBoundingClientRect();this.svgNode=this.createSvg(r?this.pointerPos:{x:a.width/2,y:a.height/2}),this.movementManager=new xx(this.canvas,this.svgNode,this,this.emitter,r?0:1,this.pointerPos),this.svgNode.style.cursor=r?"move":"",this.deleteNodeHandler=()=>this.deleteNode(),this.emitter.on("deleteNode",this.deleteNodeHandler)}updatePointerPos(e){this.pointerPos.x=e.x,this.pointerPos.y=e.y}getGraphNode(){if(this.graphNode===void 0)throw"[RendererNode] graphNode is undefined";return this.graphNode}createSvg(e){if(this.graphNode===void 0)throw"[RendererNode] graphNode is undefined. Did you already delete this node?";const t=this.graphNode.getName(),i=this.graphNode.getOutputs().outputList,s=this.graphNode.getInputs().inputList,r=document.createElementNS("http://www.w3.org/2000/svg","foreignObject");r.setAttribute("class","shader-node-container");const a=document.createElement("div");a.setAttribute("class","shader-node"),Gh(ry,{baseNode:this.graphNode,title:t,outputs:i,inputs:s,renderer:this,emitter:this.emitter}).mount(a),r.appendChild(a),this.canvas.appendChild(r);const l=this.canvas.getAttribute("viewBox");if(l===null)throw"[RendererNode::createSvg] viewBox is null";const c=l.split(" ").map(x=>parseFloat(x)),h=this.canvas.getBoundingClientRect();r.style.height="100%",r.style.width="100%";const d=a.getBoundingClientRect(),[u,m]=Qa(c,h,[d.width,d.height]);r.setAttribute("width",`${u+4}`),r.setAttribute("height",`${m+4}`),r.style.height="",r.style.width="";const[v,p]=ys(c,h,e.x-d.width/2,e.y-d.height/2),f={x:v,y:p};return r.setAttribute("x",`${f.x}`),r.setAttribute("y",`${f.y}`),r}deleteNode(){if(this.svgNode===void 0)throw"[RendererNode] svgNode is undefined. Did you already delete this instance?";(this.state===3||this.state===0)&&(this.svgNode.remove(),this.movementManager.removeListeners(),this.emitter.off("deleteNode",this.deleteNodeHandler),this.incomingLinks.forEach(({link:e})=>{e.deleteElement()}),this.outgoingLinks.forEach(({link:e})=>{e.deleteElement()}))}setState(e){this.state=e}createOutgoingLink(e,t){console.log("OutgoingLink");const i=e.getBoundingClientRect(),s={x:i.left+i.width/2,y:i.top+i.height/2},r={x:this.pointerPos.x,y:this.pointerPos.y};return new qc(this.canvas,this.emitter,s,r,t,e,void 0,this)}createIncomingLink(e,t){console.log("Incoming");const i=e.getBoundingClientRect(),s={x:this.pointerPos.x,y:this.pointerPos.y},r={x:i.left+i.width/2,y:i.top+i.height/2};return new qc(this.canvas,this.emitter,s,r,t,void 0,e,void 0,this)}removeIncomingLink(e){this.incomingLinks=this.incomingLinks.filter(({link:t})=>t!==e)}removeOutgoingLink(e){console.log(this.svgNode),this.outgoingLinks=this.outgoingLinks.filter(({link:t})=>t!==e)}addIncomingLink(e,t){console.log("addIncoming",e),this.incomingLinks.push({link:e,input:t}),this.emitter.emit("addLink",e)}addOutgoingLink(e,t){console.log("addOutgoing",e),this.outgoingLinks.push({link:e,output:t}),this.emitter.emit("addLink",e)}fixLink(e){console.log("fix"),this.emitter.emit("fixLink",e)}moveLinks(){this.incomingLinks.forEach(({link:e})=>{e.moveLink()}),this.outgoingLinks.forEach(({link:e})=>{e.moveLink()})}}class ay{constructor(e){K(this,"emitter");this.emitter=e;const t=i=>this.handleKeyDown(i);addEventListener("keydown",t)}handleKeyDown(e){console.log(e),!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="A"?this.emitter.emit("showMenu"):!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="W"?this.emitter.emit("rotateView"):!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&e.key==="x"&&(console.log("delete Node"),this.emitter.emit("deleteNode"))}}var yi,hs,ds,us,Mi,Pn,wi,Si,fs;class Cd{constructor(){Qe(this,yi,void 0);Qe(this,hs,void 0);Qe(this,ds,void 0);Qe(this,us,void 0);Qe(this,Mi,void 0);Qe(this,Pn,void 0);Qe(this,wi,void 0);Qe(this,Si,void 0);Qe(this,fs,void 0);ze(this,yi,[]),ze(this,hs,[]),ze(this,ds,[]),ze(this,us,[]),ze(this,Mi,[]),ze(this,Pn,{}),ze(this,wi,[]),ze(this,Si,[]),ze(this,fs,[])}getDefines(){return ye(this,yi)}getVaryings(){return ye(this,hs)}getAttributes(){return ye(this,ds)}getUniforms(){return ye(this,us)}getMain(){return ye(this,Mi)}getFunctions(){return ye(this,Pn)}generateVariableID(e){let t=0;ye(this,fs).forEach(s=>{s.startsWith(e)&&t++});const i=e+t;return ye(this,fs).push(i),i}compileVariables(e,t){let i="";return t.forEach(s=>{i+=e+" "+s.type+" "+s.name+`;
`}),i}compileDefines(){let e="";return ye(this,yi).forEach(t=>{e+="#define "+t.name+" "+t.value+`
`}),e}compileVaryings(){return this.compileVariables("varying",ye(this,hs))}compileAttributes(){return this.compileVariables("attribute",ye(this,ds))}compileUniforms(){return this.compileVariables("uniform",ye(this,us))}compileIns(){return this.compileVariables("in",ye(this,wi))}compileOuts(){return this.compileVariables("out",ye(this,Si))}compileMain(){let e="";return ye(this,Mi).forEach(t=>{e+=t+`
`}),e}compileFunctions(){let e="";for(const t in ye(this,Pn))e+=ye(this,Pn)[t]+`
`;return e}addToDefines(e){ye(this,yi).push(e)}addToMain(e){ye(this,Mi).push(e)}addToIns(e){if(ye(this,wi).find(t=>t.name===e.name)){console.log(`[CommonShader] In variable ${e.name} is already present`);return}ye(this,wi).push(e)}addToOuts(e){if(ye(this,Si).find(t=>t.name===e.name)){console.log(`[CommonShader] Out variable ${e.name} is already present`);return}ye(this,Si).push(e)}addAllToFunctions(e){for(const t in e)this.addToFunctions(t,e[t])}addToFunctions(e,t){if(e in ye(this,Pn)){console.log(`[CommonShader] Function ${e} is already present`);return}ye(this,Pn)[e]=t}}yi=new WeakMap,hs=new WeakMap,ds=new WeakMap,us=new WeakMap,Mi=new WeakMap,Pn=new WeakMap,wi=new WeakMap,Si=new WeakMap,fs=new WeakMap;class ly extends Cd{constructor(){super()}generateCode(){return`
${super.compileDefines()}
${super.compileUniforms()}
${super.compileAttributes()}
${super.compileVaryings()}
${super.compileIns()}
${super.compileOuts()}
${super.compileFunctions()}
void main() {
  ${super.compileMain()}
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}`}}class cy extends Cd{constructor(){super()}generateCode(){return`
${super.compileDefines()}
// Uniforms
${super.compileUniforms()}
// Attributes 
${super.compileAttributes()}
// Varyings
${super.compileVaryings()}
// Ins 
${super.compileIns()}
// Outs 
${super.compileOuts()}
// Functions
${super.compileFunctions()}

// Main
void main() {
  ${super.compileMain()}
}
`}}var Ei;class hy{constructor(e){Qe(this,Ei,void 0);ze(this,Ei,e)}setStartNode(e){ze(this,Ei,e)}compile(){if(ye(this,Ei)===null)throw"[CodeManager] No start node specified!";const e=new ly,t=new cy;return ye(this,Ei).compile(e,t)}}Ei=new WeakMap;class dy{constructor(e,t){K(this,"canvas");K(this,"widthPx");K(this,"widthUnits");K(this,"heightPx");K(this,"heightUnits");K(this,"emitter");K(this,"pointerPos");K(this,"state");K(this,"wheelHandler");K(this,"resetStateTimeout");this.canvas=e;const i=this.canvas.getBoundingClientRect();this.widthPx=i.width,this.widthUnits=i.width,this.heightPx=i.height,this.heightUnits=i.height,this.emitter=t,this.state=0,this.pointerPos={x:0,y:0};const s=r=>this.handlePointerPosition(r);this.emitter.on("pointerMoved",s),this.wheelHandler=r=>this.handleWheelInitial(r),this.canvas.addEventListener("wheel",this.wheelHandler),this.resetStateTimeout=null,this.emitter.on("resizeGraph",()=>{const r=this.canvas.getBoundingClientRect(),a=this.canvas.getAttribute("viewBox");if(a===null)throw"[ZoomPanManager::handleResize] viewBox is null";const o=a.split(" ").map(u=>parseFloat(u)),l=this.widthUnits,c=this.heightUnits;this.widthUnits*=r.width/this.widthPx,this.heightUnits*=r.height/this.heightPx;const h=Math.abs(l-this.widthUnits)<1e-7,d=Math.abs(c-this.heightUnits)<1e-7;if(h&&!d){const u=o[1],m=o[3],v=u+m;o[1]=v-this.heightUnits}o[2]=this.widthUnits,o[3]=this.heightUnits,this.canvas.setAttribute("viewBox",o.join(" ")),this.widthPx=r.width,this.heightPx=r.height})}handlePointerPosition(e){this.pointerPos.x=e.x,this.pointerPos.y=e.y}handleWheelInitial(e){this.canvas.removeEventListener("wheel",this.wheelHandler),console.log(e.deltaX,e.deltaY),Math.abs(e.deltaX)<.01&&Math.abs(e.deltaY)!==2?(this.state=1,this.wheelHandler=t=>this.handleWheelZoom(t),this.canvas.addEventListener("wheel",this.wheelHandler)):(this.state=2,this.wheelHandler=t=>this.handleWheelPan(t),this.canvas.addEventListener("wheel",this.wheelHandler)),this.wheelHandler(e)}handleWheelZoom(e){e.preventDefault();const t=this.canvas.getAttribute("viewBox");if(t===null)throw"[ShaderGraphRenderer] No viewBox";const i=t.split(" ").map(c=>parseFloat(c)),s=this.canvas.getBoundingClientRect(),r=ys(i,s,this.pointerPos.x,this.pointerPos.y),a=r[0],o=r[1],l=.01;i[0]-=a,i[1]-=o,i[0]*=1+e.deltaY*l,i[1]*=1+e.deltaY*l,i[2]*=1+e.deltaY*l,i[3]*=1+e.deltaY*l,i[0]+=a,i[1]+=o,this.widthUnits=i[2],this.heightUnits=i[3],this.canvas.setAttribute("viewBox",i.join(" ")),this.checkTimeout()}handleWheelPan(e){e.preventDefault();const t=this.canvas.getAttribute("viewBox");if(t===null)throw"[ShaderGraphRenderer::handleWheelPan] No viewBox";const i=t.split(" ").map(s=>parseFloat(s));i[0]+=e.deltaX,i[1]+=e.deltaY,this.canvas.setAttribute("viewBox",i.join(" ")),this.checkTimeout()}checkTimeout(){this.resetStateTimeout!==null&&(clearTimeout(this.resetStateTimeout),this.resetStateTimeout=null),this.resetStateTimeout=setTimeout(()=>{this.state=0,this.canvas.removeEventListener("wheel",this.wheelHandler),this.wheelHandler=e=>this.handleWheelInitial(e),this.canvas.addEventListener("wheel",this.wheelHandler),this.resetStateTimeout=null,console.log("Reset state")},150)}}class uy{constructor(e,t){K(this,"container");K(this,"canvas");K(this,"zoomPanManager");K(this,"emitter");K(this,"menu");K(this,"keyboardHandler");K(this,"pointerPos");K(this,"outputNode");K(this,"codeManager");K(this,"style");this.container=e,this.style=`
      #renderer-canvas {
        height: 100%;
        width: 100%;
        position: relative;
      }
    `,this.addStyles(),this.canvas=this.createCanvas(),this.setupCanvas(),this.emitter=t,this.zoomPanManager=new dy(this.canvas,this.emitter),this.pointerPos={x:0,y:0},this.keyboardHandler=new ay(this.emitter),this.menu=new _x(this.container,this.emitter,this.pointerPos);const i=s=>this.handlePointerMove(s);addEventListener("pointermove",i),this.emitter.on("createNode",s=>{this.handleNodeCreation(s,!0)}),this.outputNode=this.handleNodeCreation(xd,!1),this.codeManager=new hy(this.outputNode),this.emitter.on("recompile",()=>{const s=this.codeManager.compile();this.emitter.emit("newShaders",s)})}addStyles(){const e=document.createElement("style");e.innerText=this.style,document.head.appendChild(e)}createCanvas(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.setAttribute("id","renderer-canvas"),e.setAttribute("preserveAspectRatio","xMinYMin"),this.container.appendChild(e),e}setupCanvas(){const e=this.canvas.getBoundingClientRect();this.canvas.setAttribute("viewBox",`0 0 ${e.width} ${e.height}`)}handlePointerMove(e){this.pointerPos.x=e.clientX,this.pointerPos.y=e.clientY,this.emitter.emit("pointerMoved",this.pointerPos)}handleNodeCreation(e,t){return new oy(this.canvas,this.emitter,e,this.pointerPos,t).getGraphNode()}}var fy=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Td={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(fy,function(){var t=function(){function i(m){return a.appendChild(m.dom),m}function s(m){for(var v=0;v<a.children.length;v++)a.children[v].style.display=v===m?"block":"none";r=m}var r=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(m){m.preventDefault(),s(++r%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,h=i(new t.Panel("FPS","#0ff","#002")),d=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=i(new t.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:a,addPanel:i,showPanel:s,begin:function(){o=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(d.update(m-o,200),m>l+1e3&&(h.update(1e3*c/(m-l),100),l=m,c=0,u)){var v=performance.memory;u.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return m},update:function(){o=this.end()},domElement:a,setMode:s}};return t.Panel=function(i,s,r){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,u=3*c,m=2*c,v=3*c,p=15*c,f=74*c,x=30*c,S=document.createElement("canvas");S.width=h,S.height=d,S.style.cssText="width:80px;height:48px";var C=S.getContext("2d");return C.font="bold "+9*c+"px Helvetica,Arial,sans-serif",C.textBaseline="top",C.fillStyle=r,C.fillRect(0,0,h,d),C.fillStyle=s,C.fillText(i,u,m),C.fillRect(v,p,f,x),C.fillStyle=r,C.globalAlpha=.9,C.fillRect(v,p,f,x),{dom:S,update:function(E,w){a=Math.min(a,E),o=Math.max(o,E),C.fillStyle=r,C.globalAlpha=1,C.fillRect(0,0,h,p),C.fillStyle=s,C.fillText(l(E)+" "+i+" ("+l(a)+"-"+l(o)+")",u,m),C.drawImage(S,v+c,p,f-c,x,v,p,f-c,x),C.fillRect(v+f-c,p,c,x),C.fillStyle=r,C.globalAlpha=.9,C.fillRect(v+f-c,p,c,l((1-E/w)*x))}}},t})})(Td);var py=Td.exports;class my{constructor(e,t){K(this,"height");K(this,"width");K(this,"canvas");K(this,"stats");K(this,"emitter");K(this,"scene");K(this,"camera");K(this,"renderer");K(this,"mesh");K(this,"clock");K(this,"startedAnimation");const i=e.getBoundingClientRect();this.height=i.height,this.width=i.width,this.canvas=e;const s=document.createElement("div");if(s.style.gridArea="canvas",s.style.width="100%",s.style.height="100%",this.stats=new py,this.stats.showPanel(0),this.stats.dom.style.position="relative",this.stats.dom.style.right="0",this.stats.dom.style.left="",this.stats.dom.style.display="flex",this.stats.dom.style.justifyContent="flex-end",this.canvas.parentNode===null)throw"[Scene:constructor] canvas parent node is null";this.canvas.parentNode.appendChild(s),s.appendChild(this.stats.dom),this.emitter=t,this.camera=new zt(75,this.width/this.height,.1,1e3),this.camera.position.z=-10,this.camera.lookAt(0,0,0),this.scene=new Q_,this.scene.add(this.camera),this.renderer=new pd({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height);const[r,a]=["",""],o=new Ka(1,32,16),l=new yn({vertexShader:r,fragmentShader:a});this.mesh=new Ln(o,l),this.mesh.position.set(0,0,0),this.scene.add(this.mesh),this.clock=new ux,addEventListener("resize",()=>this.handleResize()),this.emitter.on("resizeCanvas",()=>this.handleResize()),this.startedAnimation=!1,this.emitter.on("newShaders",c=>this.updateShaders(c)),this.emitter.emit("recompile")}animate(){this.stats.begin(),this.renderer.render(this.scene,this.camera);const e=this.clock.getDelta();this.mesh.rotation.z+=e*Math.PI/6,this.mesh.rotation.x+=e*Math.PI/6,this.mesh.rotation.y+=e*Math.PI/6,this.stats.end(),requestAnimationFrame(()=>this.animate())}updateShaders([e,t]){const i=this.mesh.material;i.fragmentShader=t,i.vertexShader=e,i.needsUpdate=!0,this.startedAnimation||(this.startedAnimation=!0,this.animate())}handleResize(){this.canvas.style.width="",this.canvas.style.height="",this.canvas.style.minHeight="1px",this.canvas.removeAttribute("width"),this.canvas.removeAttribute("height");const e=this.canvas.getBoundingClientRect();this.height=e.height,this.width=e.width,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.canvas.style.minHeight=""}}class gy{constructor(e,t,i,s,r){K(this,"emitter");K(this,"containerElement");K(this,"svgElement");K(this,"canvasElement");K(this,"dividerElement");K(this,"layout");K(this,"dividerInitialPosition");K(this,"dividerMoveHandler");K(this,"dividerUpHandler");this.emitter=e,this.containerElement=t,this.svgElement=i,this.canvasElement=s,this.dividerElement=r,this.layout=0,this.dividerMoveHandler=a=>this.handleDividerPointerMove(a),this.dividerUpHandler=()=>this.handleDividerPointerUp(),this.dividerInitialPosition={x:0,y:0},this.dividerElement.addEventListener("pointerdown",a=>this.handleDividerPointerDown(a)),this.emitter.on("rotateView",()=>this.rotateView())}handleDividerPointerDown(e){addEventListener("pointermove",this.dividerMoveHandler),addEventListener("pointerup",this.dividerUpHandler),this.dividerInitialPosition.x=e.clientX/innerWidth*100.5,this.dividerInitialPosition.y=e.clientY/innerHeight*100.5,this.canvasElement.style.width="0",this.canvasElement.style.height="0",this.canvasElement.style.minWidth="1px",this.canvasElement.style.minHeight="1px",this.canvasElement.removeAttribute("height"),this.canvasElement.removeAttribute("width")}handleDividerPointerMove(e){if(this.layout===0){const t=e.clientX/innerWidth*100;this.containerElement.style.gridTemplateColumns=`${t}fr 5px ${100-t}fr`}else if(this.layout===1){const t=e.clientY/innerHeight*100;this.containerElement.style.gridTemplateRows=`${t}fr 5px ${100-t}fr`}else throw"[ViewManager] Layout type is unknown: "+this.layout;this.emitter.emit("resizeGraph")}handleDividerPointerUp(){removeEventListener("pointermove",this.dividerMoveHandler),removeEventListener("pointerup",this.dividerUpHandler),this.emitter.emit("resizeCanvas"),this.emitter.emit("resizeGraph")}rotateView(){if(this.layout===0)this.containerElement.style.gridTemplateRows="30fr 5px 70fr",this.containerElement.style.gridTemplateColumns="1fr",this.containerElement.style.gridTemplateAreas="'canvas' 'divider' 'svg'",this.dividerElement.style.cursor="row-resize",this.layout=1;else if(this.layout===1)this.containerElement.style.gridTemplateColumns="",this.containerElement.style.gridTemplateRows="",this.containerElement.style.gridTemplateAreas="",this.dividerElement.style.cursor="",this.layout=0;else throw"[ViewManager] Layout type is unknown: "+this.layout;this.emitter.emit("resizeCanvas"),this.emitter.emit("resizeGraph")}}class vy{constructor(e){K(this,"element");K(this,"emitter");K(this,"style");K(this,"svgElement");K(this,"containerElement");K(this,"canvasElement");K(this,"dividerElement");K(this,"sceneManager");K(this,"graphManager");K(this,"viewManager");this.element=e,this.emitter=op(),this.style=`
#manager-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60fr 5px 40fr;
  grid-template-rows: 1fr;
  grid-template-areas: "svg divider canvas";
}

#manager-canvas {
  grid-area: canvas;
  width: 100%;
  height: 100%;
}

#manager-divider {
  grid-area: divider;
  width: 100%;
  height: 100%;
  background-color: #9b3df1;
  cursor: col-resize;
}

#manager-svg {
  grid-area: svg;
  background-image: radial-gradient(#2c2c2c 13%, transparent 13%);
  background-position: 0 0;
  background-size: 25px 25px;
  background-color: #1b1b1b;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
      `,this.addStyles(),[this.containerElement,this.svgElement,this.dividerElement,this.canvasElement]=this.createView(),this.graphManager=this.createGraphManager(),this.sceneManager=this.createScene(),this.viewManager=new gy(this.emitter,this.containerElement,this.svgElement,this.canvasElement,this.dividerElement)}addStyles(){const e=document.createElement("style");e.innerText=this.style,document.head.appendChild(e)}createView(){const e=document.createElement("div");e.setAttribute("id","manager-container");const t=document.createElement("div");t.setAttribute("id","manager-svg"),e.appendChild(t);const i=document.createElement("div");i.setAttribute("id","manager-divider"),e.appendChild(i);const s=document.createElement("canvas");return s.setAttribute("id","manager-canvas"),e.appendChild(s),this.element.appendChild(e),[e,t,i,s]}createScene(){return new my(this.canvasElement,this.emitter)}createGraphManager(){return new uy(this.svgElement,this.emitter)}}const _y=Ot({data(){return{scale:1}},mounted(){new vy(this.$refs.container)}}),xy={ref:"container",id:"container"};function by(n,e,t,i,s,r){return Ue(),Ke("div",xy,null,512)}var yy=tn(_y,[["render",by],["__scopeId","data-v-d41e5f24"]]);const My=Ot({__name:"App",setup(n){return(e,t)=>(Ue(),Ri(yy,{msg:"Hello Vue 3 + TypeScript + Vite"}))}});Gh(My).mount("#app");
