(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var uc={exports:{}},Po={},cc={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function L_(){if(vp)return st;vp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function g(N,re,Ce){this.props=N,this.context=re,this.refs=R,this.updater=Ce||S}g.prototype.isReactComponent={},g.prototype.setState=function(N,re){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,re,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=g.prototype;function L(N,re,Ce){this.props=N,this.context=re,this.refs=R,this.updater=Ce||S}var P=L.prototype=new v;P.constructor=L,T(P,g.prototype),P.isPureReactComponent=!0;var b=Array.isArray,Y=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function k(N,re,Ce){var Z,ce={},xe=null,ye=null;if(re!=null)for(Z in re.ref!==void 0&&(ye=re.ref),re.key!==void 0&&(xe=""+re.key),re)Y.call(re,Z)&&!I.hasOwnProperty(Z)&&(ce[Z]=re[Z]);var Pe=arguments.length-2;if(Pe===1)ce.children=Ce;else if(1<Pe){for(var Le=Array(Pe),Je=0;Je<Pe;Je++)Le[Je]=arguments[Je+2];ce.children=Le}if(N&&N.defaultProps)for(Z in Pe=N.defaultProps,Pe)ce[Z]===void 0&&(ce[Z]=Pe[Z]);return{$$typeof:o,type:N,key:xe,ref:ye,props:ce,_owner:F.current}}function le(N,re){return{$$typeof:o,type:N.type,key:re,ref:N.ref,props:N.props,_owner:N._owner}}function M(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function A(N){var re={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ce){return re[Ce]})}var G=/\/+/g;function W(N,re){return typeof N=="object"&&N!==null&&N.key!=null?A(""+N.key):re.toString(36)}function ie(N,re,Ce,Z,ce){var xe=typeof N;(xe==="undefined"||xe==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(xe){case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case o:case e:ye=!0}}if(ye)return ye=N,ce=ce(ye),N=Z===""?"."+W(ye,0):Z,b(ce)?(Ce="",N!=null&&(Ce=N.replace(G,"$&/")+"/"),ie(ce,re,Ce,"",function(Je){return Je})):ce!=null&&(M(ce)&&(ce=le(ce,Ce+(!ce.key||ye&&ye.key===ce.key?"":(""+ce.key).replace(G,"$&/")+"/")+N)),re.push(ce)),1;if(ye=0,Z=Z===""?".":Z+":",b(N))for(var Pe=0;Pe<N.length;Pe++){xe=N[Pe];var Le=Z+W(xe,Pe);ye+=ie(xe,re,Ce,Le,ce)}else if(Le=x(N),typeof Le=="function")for(N=Le.call(N),Pe=0;!(xe=N.next()).done;)xe=xe.value,Le=Z+W(xe,Pe++),ye+=ie(xe,re,Ce,Le,ce);else if(xe==="object")throw re=String(N),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ye}function ue(N,re,Ce){if(N==null)return N;var Z=[],ce=0;return ie(N,Z,"","",function(xe){return re.call(Ce,xe,ce++)}),Z}function K(N){if(N._status===-1){var re=N._result;re=re(),re.then(function(Ce){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ce)},function(Ce){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ce)}),N._status===-1&&(N._status=0,N._result=re)}if(N._status===1)return N._result.default;throw N._result}var oe={current:null},z={transition:null},fe={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:z,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return st.Children={map:ue,forEach:function(N,re,Ce){ue(N,function(){re.apply(this,arguments)},Ce)},count:function(N){var re=0;return ue(N,function(){re++}),re},toArray:function(N){return ue(N,function(re){return re})||[]},only:function(N){if(!M(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},st.Component=g,st.Fragment=n,st.Profiler=a,st.PureComponent=L,st.StrictMode=r,st.Suspense=p,st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,st.act=se,st.cloneElement=function(N,re,Ce){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Z=T({},N.props),ce=N.key,xe=N.ref,ye=N._owner;if(re!=null){if(re.ref!==void 0&&(xe=re.ref,ye=F.current),re.key!==void 0&&(ce=""+re.key),N.type&&N.type.defaultProps)var Pe=N.type.defaultProps;for(Le in re)Y.call(re,Le)&&!I.hasOwnProperty(Le)&&(Z[Le]=re[Le]===void 0&&Pe!==void 0?Pe[Le]:re[Le])}var Le=arguments.length-2;if(Le===1)Z.children=Ce;else if(1<Le){Pe=Array(Le);for(var Je=0;Je<Le;Je++)Pe[Je]=arguments[Je+2];Z.children=Pe}return{$$typeof:o,type:N.type,key:ce,ref:xe,props:Z,_owner:ye}},st.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},st.createElement=k,st.createFactory=function(N){var re=k.bind(null,N);return re.type=N,re},st.createRef=function(){return{current:null}},st.forwardRef=function(N){return{$$typeof:d,render:N}},st.isValidElement=M,st.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:K}},st.memo=function(N,re){return{$$typeof:m,type:N,compare:re===void 0?null:re}},st.startTransition=function(N){var re=z.transition;z.transition={};try{N()}finally{z.transition=re}},st.unstable_act=se,st.useCallback=function(N,re){return oe.current.useCallback(N,re)},st.useContext=function(N){return oe.current.useContext(N)},st.useDebugValue=function(){},st.useDeferredValue=function(N){return oe.current.useDeferredValue(N)},st.useEffect=function(N,re){return oe.current.useEffect(N,re)},st.useId=function(){return oe.current.useId()},st.useImperativeHandle=function(N,re,Ce){return oe.current.useImperativeHandle(N,re,Ce)},st.useInsertionEffect=function(N,re){return oe.current.useInsertionEffect(N,re)},st.useLayoutEffect=function(N,re){return oe.current.useLayoutEffect(N,re)},st.useMemo=function(N,re){return oe.current.useMemo(N,re)},st.useReducer=function(N,re,Ce){return oe.current.useReducer(N,re,Ce)},st.useRef=function(N){return oe.current.useRef(N)},st.useState=function(N){return oe.current.useState(N)},st.useSyncExternalStore=function(N,re,Ce){return oe.current.useSyncExternalStore(N,re,Ce)},st.useTransition=function(){return oe.current.useTransition()},st.version="18.3.1",st}var xp;function If(){return xp||(xp=1,cc.exports=L_()),cc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function b_(){if(yp)return Po;yp=1;var o=If(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,y={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(y[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)y[_]===void 0&&(y[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:S,props:y,_owner:a.current}}return Po.Fragment=n,Po.jsx=f,Po.jsxs=f,Po}var Sp;function D_(){return Sp||(Sp=1,uc.exports=b_()),uc.exports}var Ds=D_(),ni=If(),qa={},fc={exports:{}},En={},dc={exports:{}},hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function I_(){return Mp||(Mp=1,(function(o){function e(z,fe){var se=z.length;z.push(fe);e:for(;0<se;){var N=se-1>>>1,re=z[N];if(0<a(re,fe))z[N]=fe,z[se]=re,se=N;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var fe=z[0],se=z.pop();if(se!==fe){z[0]=se;e:for(var N=0,re=z.length,Ce=re>>>1;N<Ce;){var Z=2*(N+1)-1,ce=z[Z],xe=Z+1,ye=z[xe];if(0>a(ce,se))xe<re&&0>a(ye,ce)?(z[N]=ye,z[xe]=se,N=xe):(z[N]=ce,z[Z]=se,N=Z);else if(xe<re&&0>a(ye,se))z[N]=ye,z[xe]=se,N=xe;else break e}}return fe}function a(z,fe){var se=z.sortIndex-fe.sortIndex;return se!==0?se:z.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,y=null,x=3,S=!1,T=!1,R=!1,g=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var fe=n(m);fe!==null;){if(fe.callback===null)r(m);else if(fe.startTime<=z)r(m),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=n(m)}}function b(z){if(R=!1,P(z),!T)if(n(p)!==null)T=!0,K(Y);else{var fe=n(m);fe!==null&&oe(b,fe.startTime-z)}}function Y(z,fe){T=!1,R&&(R=!1,v(k),k=-1),S=!0;var se=x;try{for(P(fe),y=n(p);y!==null&&(!(y.expirationTime>fe)||z&&!A());){var N=y.callback;if(typeof N=="function"){y.callback=null,x=y.priorityLevel;var re=N(y.expirationTime<=fe);fe=o.unstable_now(),typeof re=="function"?y.callback=re:y===n(p)&&r(p),P(fe)}else r(p);y=n(p)}if(y!==null)var Ce=!0;else{var Z=n(m);Z!==null&&oe(b,Z.startTime-fe),Ce=!1}return Ce}finally{y=null,x=se,S=!1}}var F=!1,I=null,k=-1,le=5,M=-1;function A(){return!(o.unstable_now()-M<le)}function G(){if(I!==null){var z=o.unstable_now();M=z;var fe=!0;try{fe=I(!0,z)}finally{fe?W():(F=!1,I=null)}}else F=!1}var W;if(typeof L=="function")W=function(){L(G)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ue=ie.port2;ie.port1.onmessage=G,W=function(){ue.postMessage(null)}}else W=function(){g(G,0)};function K(z){I=z,F||(F=!0,W())}function oe(z,fe){k=g(function(){z(o.unstable_now())},fe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){T||S||(T=!0,K(Y))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(z){switch(x){case 1:case 2:case 3:var fe=3;break;default:fe=x}var se=x;x=fe;try{return z()}finally{x=se}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,fe){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var se=x;x=z;try{return fe()}finally{x=se}},o.unstable_scheduleCallback=function(z,fe,se){var N=o.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?N+se:N):se=N,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,z={id:_++,callback:fe,priorityLevel:z,startTime:se,expirationTime:re,sortIndex:-1},se>N?(z.sortIndex=se,e(m,z),n(p)===null&&z===n(m)&&(R?(v(k),k=-1):R=!0,oe(b,se-N))):(z.sortIndex=re,e(p,z),T||S||(T=!0,K(Y))),z},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(z){var fe=x;return function(){var se=x;x=fe;try{return z.apply(this,arguments)}finally{x=se}}}})(hc)),hc}var Ep;function U_(){return Ep||(Ep=1,dc.exports=I_()),dc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function N_(){if(Tp)return En;Tp=1;var o=If(),e=U_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function x(t){return p.call(y,t)?!0:p.call(_,t)?!1:m.test(t)?y[t]=!0:(_[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,s,l,c,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){g[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];g[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){g[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){g[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){g[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){g[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){g[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){g[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){g[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,L);g[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,L);g[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,L);g[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){g[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),g.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){g[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,s,l){var c=g.hasOwnProperty(i)?g[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var b=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),A=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),z=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,N;function re(t){if(N===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var Ce=!1;function Z(t,i){if(!t||Ce)return"";Ce=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var l=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){l=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){l=ne}t()}}catch(ne){if(ne&&l&&typeof ne.stack=="string"){for(var c=ne.stack.split(`
`),h=l.stack.split(`
`),E=c.length-1,U=h.length-1;1<=E&&0<=U&&c[E]!==h[U];)U--;for(;1<=E&&0<=U;E--,U--)if(c[E]!==h[U]){if(E!==1||U!==1)do if(E--,U--,0>U||c[E]!==h[U]){var O=`
`+c[E].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=E&&0<=U);break}}}finally{Ce=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?re(t):""}function ce(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function xe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case F:return"Portal";case le:return"Profiler";case k:return"StrictMode";case W:return"Suspense";case ie:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A:return(t.displayName||"Context")+".Consumer";case M:return(t._context.displayName||"Context")+".Provider";case G:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ue:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case K:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}function ye(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(t){var i=Le(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=Je(t))}function lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Le(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function B(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nn(t,i){var s=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function ot(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Pe(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function Ke(t,i){ft(t,i);var s=Pe(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ze(t,i.type,s):i.hasOwnProperty("defaultValue")&&Ze(t,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Tt(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Ze(t,i,s){(i!=="number"||B(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var D=Array.isArray;function w(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Pe(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function J(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function he(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(D(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Pe(s)}}function _e(t,i){var s=Pe(i.value),l=Pe(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function de(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function we(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ne,dt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ne.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Se(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},et=["Webkit","ms","Moz","O"];Object.keys(Fe).forEach(function(t){et.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Fe[i]=Fe[t]})});function Qe(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Fe.hasOwnProperty(t)&&Fe[t]?(""+i).trim():i+"px"}function ke(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=Qe(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var ut=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(t,i){if(i){if(ut[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function St(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V=null;function be(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ae=null,pe=null,Ae=null;function Ie(t){if(t=po(t)){if(typeof ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=la(i),ae(t.stateNode,t.type,i))}}function ct(t){pe?Ae?Ae.push(t):Ae=[t]:pe=t}function Ut(){if(pe){var t=pe,i=Ae;if(Ae=pe=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function rn(t,i){return t(i)}function ht(){}var $t=!1;function Fn(t,i,s){if($t)return t(i,s);$t=!0;try{return rn(t,i,s)}finally{$t=!1,(pe!==null||Ae!==null)&&(ht(),Ut())}}function ki(t,i){var s=t.stateNode;if(s===null)return null;var l=la(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Yr=!1;if(d)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Yr=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Yr=!1}function js(t,i,s,l,c,h,E,U,O){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(s,ne)}catch(ge){this.onError(ge)}}var zi=!1,vr=null,_i=!1,qr=null,jr={onError:function(t){zi=!0,vr=t}};function Go(t,i,s,l,c,h,E,U,O){zi=!1,vr=null,js.apply(jr,arguments)}function Wo(t,i,s,l,c,h,E,U,O){if(Go.apply(this,arguments),zi){if(zi){var ne=vr;zi=!1,vr=null}else throw Error(n(198));_i||(_i=!0,qr=ne)}}function vi(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Xo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Yo(t){if(vi(t)!==t)throw Error(n(188))}function C(t){var i=t.alternate;if(!i){if(i=vi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Yo(c),t;if(h===l)return Yo(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var E=!1,U=c.child;U;){if(U===s){E=!0,s=c,l=h;break}if(U===l){E=!0,l=c,s=h;break}U=U.sibling}if(!E){for(U=h.child;U;){if(U===s){E=!0,s=h,l=c;break}if(U===l){E=!0,l=h,s=c;break}U=U.sibling}if(!E)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function X(t){return t=C(t),t!==null?ee(t):null}function ee(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ee(t);if(i!==null)return i;t=t.sibling}return null}var te=e.unstable_scheduleCallback,q=e.unstable_cancelCallback,Ee=e.unstable_shouldYield,De=e.unstable_requestPaint,Te=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,je=e.unstable_ImmediatePriority,$e=e.unstable_UserBlockingPriority,Ge=e.unstable_NormalPriority,yt=e.unstable_LowPriority,wt=e.unstable_IdlePriority,At=null,Dt=null;function _t(t){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(At,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Pn,Wt=Math.log,vt=Math.LN2;function Pn(t){return t>>>=0,t===0?32:31-(Wt(t)/vt|0)|0}var Yn=64,Zt=4194304;function xi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rt(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,E=s&268435455;if(E!==0){var U=E&~c;U!==0?l=xi(U):(h&=E,h!==0&&(l=xi(h)))}else E=s&~c,E!==0?l=xi(E):h!==0&&(l=xi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-Oe(i),c=1<<s,l|=t[s],i&=~c;return l}function li(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ks(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Oe(h),U=1<<E,O=c[E];O===-1?((U&s)===0||(U&l)!==0)&&(c[E]=li(U,i)):O<=i&&(t.expiredLanes|=U),h&=~U}}function an(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kr(){var t=Yn;return Yn<<=1,(Yn&4194240)===0&&(Yn=64),t}function $s(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Bi(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=s}function Zm(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-Oe(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Dl(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Oe(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var Et=0;function $f(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Zf,Il,Qf,Jf,ed,Ul=!1,qo=[],Hi=null,Vi=null,Gi=null,Zs=new Map,Qs=new Map,Wi=[],Qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function td(t,i){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":Zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(i.pointerId)}}function Js(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=po(i),i!==null&&Il(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Jm(t,i,s,l,c){switch(i){case"focusin":return Hi=Js(Hi,t,i,s,l,c),!0;case"dragenter":return Vi=Js(Vi,t,i,s,l,c),!0;case"mouseover":return Gi=Js(Gi,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return Zs.set(h,Js(Zs.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Qs.set(h,Js(Qs.get(h)||null,t,i,s,l,c)),!0}return!1}function nd(t){var i=xr(t.target);if(i!==null){var s=vi(i);if(s!==null){if(i=s.tag,i===13){if(i=Xo(s),i!==null){t.blockedOn=i,ed(t.priority,function(){Qf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Fl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);V=l,s.target.dispatchEvent(l),V=null}else return i=po(s),i!==null&&Il(i),t.blockedOn=s,!1;i.shift()}return!0}function id(t,i,s){jo(t)&&s.delete(i)}function eg(){Ul=!1,Hi!==null&&jo(Hi)&&(Hi=null),Vi!==null&&jo(Vi)&&(Vi=null),Gi!==null&&jo(Gi)&&(Gi=null),Zs.forEach(id),Qs.forEach(id)}function eo(t,i){t.blockedOn===i&&(t.blockedOn=null,Ul||(Ul=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,eg)))}function to(t){function i(c){return eo(c,t)}if(0<qo.length){eo(qo[0],t);for(var s=1;s<qo.length;s++){var l=qo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Hi!==null&&eo(Hi,t),Vi!==null&&eo(Vi,t),Gi!==null&&eo(Gi,t),Zs.forEach(i),Qs.forEach(i),s=0;s<Wi.length;s++)l=Wi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Wi.length&&(s=Wi[0],s.blockedOn===null);)nd(s),s.blockedOn===null&&Wi.shift()}var $r=b.ReactCurrentBatchConfig,Ko=!0;function tg(t,i,s,l){var c=Et,h=$r.transition;$r.transition=null;try{Et=1,Nl(t,i,s,l)}finally{Et=c,$r.transition=h}}function ng(t,i,s,l){var c=Et,h=$r.transition;$r.transition=null;try{Et=4,Nl(t,i,s,l)}finally{Et=c,$r.transition=h}}function Nl(t,i,s,l){if(Ko){var c=Fl(t,i,s,l);if(c===null)Jl(t,i,l,$o,s),td(t,l);else if(Jm(c,t,i,s,l))l.stopPropagation();else if(td(t,l),i&4&&-1<Qm.indexOf(t)){for(;c!==null;){var h=po(c);if(h!==null&&Zf(h),h=Fl(t,i,s,l),h===null&&Jl(t,i,l,$o,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else Jl(t,i,l,null,s)}}var $o=null;function Fl(t,i,s,l){if($o=null,t=be(l),t=xr(t),t!==null)if(i=vi(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Xo(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return $o=t,null}function rd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case je:return 1;case $e:return 4;case Ge:case yt:return 16;case wt:return 536870912;default:return 16}default:return 16}}var Xi=null,Ol=null,Zo=null;function sd(){if(Zo)return Zo;var t,i=Ol,s=i.length,l,c="value"in Xi?Xi.value:Xi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===c[h-l];l++);return Zo=c.slice(t,1<l?1-l:void 0)}function Qo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function od(){return!1}function Ln(t){function i(s,l,c,h,E){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(s=t[U],this[U]=s?s(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Jo:od,this.isPropagationStopped=od,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),i}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=Ln(Zr),no=se({},Zr,{view:0,detail:0}),ig=Ln(no),zl,Bl,io,ea=se({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(zl=t.screenX-io.screenX,Bl=t.screenY-io.screenY):Bl=zl=0,io=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),ad=Ln(ea),rg=se({},ea,{dataTransfer:0}),sg=Ln(rg),og=se({},no,{relatedTarget:0}),Hl=Ln(og),ag=se({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),lg=Ln(ag),ug=se({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cg=Ln(ug),fg=se({},Zr,{data:0}),ld=Ln(fg),dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=pg[t])?!!i[t]:!1}function Vl(){return mg}var gg=se({},no,{key:function(t){if(t.key){var i=dg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vl,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_g=Ln(gg),vg=se({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=Ln(vg),xg=se({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vl}),yg=Ln(xg),Sg=se({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mg=Ln(Sg),Eg=se({},ea,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tg=Ln(Eg),wg=[9,13,27,32],Gl=d&&"CompositionEvent"in window,ro=null;d&&"documentMode"in document&&(ro=document.documentMode);var Ag=d&&"TextEvent"in window&&!ro,cd=d&&(!Gl||ro&&8<ro&&11>=ro),fd=" ",dd=!1;function hd(t,i){switch(t){case"keyup":return wg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function Rg(t,i){switch(t){case"compositionend":return pd(i);case"keypress":return i.which!==32?null:(dd=!0,fd);case"textInput":return t=i.data,t===fd&&dd?null:t;default:return null}}function Cg(t,i){if(Qr)return t==="compositionend"||!Gl&&hd(t,i)?(t=sd(),Zo=Ol=Xi=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return cd&&i.locale!=="ko"?null:i.data;default:return null}}var Pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Pg[t.type]:i==="textarea"}function gd(t,i,s,l){ct(l),i=sa(i,"onChange"),0<i.length&&(s=new kl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var so=null,oo=null;function Lg(t){Ud(t,0)}function ta(t){var i=is(t);if(lt(i))return t}function bg(t,i){if(t==="change")return i}var _d=!1;if(d){var Wl;if(d){var Xl="oninput"in document;if(!Xl){var vd=document.createElement("div");vd.setAttribute("oninput","return;"),Xl=typeof vd.oninput=="function"}Wl=Xl}else Wl=!1;_d=Wl&&(!document.documentMode||9<document.documentMode)}function xd(){so&&(so.detachEvent("onpropertychange",yd),oo=so=null)}function yd(t){if(t.propertyName==="value"&&ta(oo)){var i=[];gd(i,oo,t,be(t)),Fn(Lg,i)}}function Dg(t,i,s){t==="focusin"?(xd(),so=i,oo=s,so.attachEvent("onpropertychange",yd)):t==="focusout"&&xd()}function Ig(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ta(oo)}function Ug(t,i){if(t==="click")return ta(i)}function Ng(t,i){if(t==="input"||t==="change")return ta(i)}function Fg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var qn=typeof Object.is=="function"?Object.is:Fg;function ao(t,i){if(qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!qn(t[c],i[c]))return!1}return!0}function Sd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Md(t,i){var s=Sd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Sd(s)}}function Ed(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ed(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Td(){for(var t=window,i=B();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=B(t.document)}return i}function Yl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Og(t){var i=Td(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Ed(s.ownerDocument.documentElement,s)){if(l!==null&&Yl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Md(s,h);var E=Md(s,l);c&&E&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kg=d&&"documentMode"in document&&11>=document.documentMode,Jr=null,ql=null,lo=null,jl=!1;function wd(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;jl||Jr==null||Jr!==B(l)||(l=Jr,"selectionStart"in l&&Yl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lo&&ao(lo,l)||(lo=l,l=sa(ql,"onSelect"),0<l.length&&(i=new kl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Jr)))}function na(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var es={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Kl={},Ad={};d&&(Ad=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function ia(t){if(Kl[t])return Kl[t];if(!es[t])return t;var i=es[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Ad)return Kl[t]=i[s];return t}var Rd=ia("animationend"),Cd=ia("animationiteration"),Pd=ia("animationstart"),Ld=ia("transitionend"),bd=new Map,Dd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,i){bd.set(t,i),u(i,[t])}for(var $l=0;$l<Dd.length;$l++){var Zl=Dd[$l],zg=Zl.toLowerCase(),Bg=Zl[0].toUpperCase()+Zl.slice(1);Yi(zg,"on"+Bg)}Yi(Rd,"onAnimationEnd"),Yi(Cd,"onAnimationIteration"),Yi(Pd,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(Ld,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hg=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Id(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Wo(l,i,void 0,t),t.currentTarget=null}function Ud(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var U=l[E],O=U.instance,ne=U.currentTarget;if(U=U.listener,O!==h&&c.isPropagationStopped())break e;Id(c,U,ne),h=O}else for(E=0;E<l.length;E++){if(U=l[E],O=U.instance,ne=U.currentTarget,U=U.listener,O!==h&&c.isPropagationStopped())break e;Id(c,U,ne),h=O}}}if(_i)throw t=qr,_i=!1,qr=null,t}function Pt(t,i){var s=i[su];s===void 0&&(s=i[su]=new Set);var l=t+"__bubble";s.has(l)||(Nd(i,t,2,!1),s.add(l))}function Ql(t,i,s){var l=0;i&&(l|=4),Nd(s,t,l,i)}var ra="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[ra]){t[ra]=!0,r.forEach(function(s){s!=="selectionchange"&&(Hg.has(s)||Ql(s,!1,t),Ql(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ra]||(i[ra]=!0,Ql("selectionchange",!1,i))}}function Nd(t,i,s,l){switch(rd(i)){case 1:var c=tg;break;case 4:c=ng;break;default:c=Nl}s=c.bind(null,i,s,t),c=void 0,!Yr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function Jl(t,i,s,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var U=l.stateNode.containerInfo;if(U===c||U.nodeType===8&&U.parentNode===c)break;if(E===4)for(E=l.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;E=E.return}for(;U!==null;){if(E=xr(U),E===null)return;if(O=E.tag,O===5||O===6){l=h=E;continue e}U=U.parentNode}}l=l.return}Fn(function(){var ne=h,ge=be(s),ve=[];e:{var me=bd.get(t);if(me!==void 0){var Ue=kl,Be=t;switch(t){case"keypress":if(Qo(s)===0)break e;case"keydown":case"keyup":Ue=_g;break;case"focusin":Be="focus",Ue=Hl;break;case"focusout":Be="blur",Ue=Hl;break;case"beforeblur":case"afterblur":Ue=Hl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=sg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=yg;break;case Rd:case Cd:case Pd:Ue=lg;break;case Ld:Ue=Mg;break;case"scroll":Ue=ig;break;case"wheel":Ue=Tg;break;case"copy":case"cut":case"paste":Ue=cg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=ud}var He=(i&4)!==0,zt=!He&&t==="scroll",j=He?me!==null?me+"Capture":null:me;He=[];for(var H=ne,$;H!==null;){$=H;var Me=$.stateNode;if($.tag===5&&Me!==null&&($=Me,j!==null&&(Me=ki(H,j),Me!=null&&He.push(fo(H,Me,$)))),zt)break;H=H.return}0<He.length&&(me=new Ue(me,Be,null,s,ge),ve.push({event:me,listeners:He}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",me&&s!==V&&(Be=s.relatedTarget||s.fromElement)&&(xr(Be)||Be[yi]))break e;if((Ue||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ue?(Be=s.relatedTarget||s.toElement,Ue=ne,Be=Be?xr(Be):null,Be!==null&&(zt=vi(Be),Be!==zt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ue=null,Be=ne),Ue!==Be)){if(He=ad,Me="onMouseLeave",j="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(He=ud,Me="onPointerLeave",j="onPointerEnter",H="pointer"),zt=Ue==null?me:is(Ue),$=Be==null?me:is(Be),me=new He(Me,H+"leave",Ue,s,ge),me.target=zt,me.relatedTarget=$,Me=null,xr(ge)===ne&&(He=new He(j,H+"enter",Be,s,ge),He.target=$,He.relatedTarget=zt,Me=He),zt=Me,Ue&&Be)t:{for(He=Ue,j=Be,H=0,$=He;$;$=ts($))H++;for($=0,Me=j;Me;Me=ts(Me))$++;for(;0<H-$;)He=ts(He),H--;for(;0<$-H;)j=ts(j),$--;for(;H--;){if(He===j||j!==null&&He===j.alternate)break t;He=ts(He),j=ts(j)}He=null}else He=null;Ue!==null&&Fd(ve,me,Ue,He,!1),Be!==null&&zt!==null&&Fd(ve,zt,Be,He,!0)}}e:{if(me=ne?is(ne):window,Ue=me.nodeName&&me.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&me.type==="file")var We=bg;else if(md(me))if(_d)We=Ng;else{We=Ig;var Ye=Dg}else(Ue=me.nodeName)&&Ue.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=Ug);if(We&&(We=We(t,ne))){gd(ve,We,s,ge);break e}Ye&&Ye(t,me,ne),t==="focusout"&&(Ye=me._wrapperState)&&Ye.controlled&&me.type==="number"&&Ze(me,"number",me.value)}switch(Ye=ne?is(ne):window,t){case"focusin":(md(Ye)||Ye.contentEditable==="true")&&(Jr=Ye,ql=ne,lo=null);break;case"focusout":lo=ql=Jr=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,wd(ve,s,ge);break;case"selectionchange":if(kg)break;case"keydown":case"keyup":wd(ve,s,ge)}var qe;if(Gl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Qr?hd(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(cd&&s.locale!=="ko"&&(Qr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Qr&&(qe=sd()):(Xi=ge,Ol="value"in Xi?Xi.value:Xi.textContent,Qr=!0)),Ye=sa(ne,tt),0<Ye.length&&(tt=new ld(tt,t,null,s,ge),ve.push({event:tt,listeners:Ye}),qe?tt.data=qe:(qe=pd(s),qe!==null&&(tt.data=qe)))),(qe=Ag?Rg(t,s):Cg(t,s))&&(ne=sa(ne,"onBeforeInput"),0<ne.length&&(ge=new ld("onBeforeInput","beforeinput",null,s,ge),ve.push({event:ge,listeners:ne}),ge.data=qe))}Ud(ve,i)})}function fo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function sa(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=ki(t,s),h!=null&&l.unshift(fo(t,h,c)),h=ki(t,i),h!=null&&l.push(fo(t,h,c))),t=t.return}return l}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fd(t,i,s,l,c){for(var h=i._reactName,E=[];s!==null&&s!==l;){var U=s,O=U.alternate,ne=U.stateNode;if(O!==null&&O===l)break;U.tag===5&&ne!==null&&(U=ne,c?(O=ki(s,h),O!=null&&E.unshift(fo(s,O,U))):c||(O=ki(s,h),O!=null&&E.push(fo(s,O,U)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var Vg=/\r\n?/g,Gg=/\u0000|\uFFFD/g;function Od(t){return(typeof t=="string"?t:""+t).replace(Vg,`
`).replace(Gg,"")}function oa(t,i,s){if(i=Od(i),Od(t)!==i&&s)throw Error(n(425))}function aa(){}var eu=null,tu=null;function nu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,Wg=typeof clearTimeout=="function"?clearTimeout:void 0,kd=typeof Promise=="function"?Promise:void 0,Xg=typeof queueMicrotask=="function"?queueMicrotask:typeof kd<"u"?function(t){return kd.resolve(null).then(t).catch(Yg)}:iu;function Yg(t){setTimeout(function(){throw t})}function ru(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),to(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);to(i)}function qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function zd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),ui="__reactFiber$"+ns,ho="__reactProps$"+ns,yi="__reactContainer$"+ns,su="__reactEvents$"+ns,qg="__reactListeners$"+ns,jg="__reactHandles$"+ns;function xr(t){var i=t[ui];if(i)return i;for(var s=t.parentNode;s;){if(i=s[yi]||s[ui]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=zd(t);t!==null;){if(s=t[ui])return s;t=zd(t)}return i}t=s,s=t.parentNode}return null}function po(t){return t=t[ui]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function la(t){return t[ho]||null}var ou=[],rs=-1;function ji(t){return{current:t}}function Lt(t){0>rs||(t.current=ou[rs],ou[rs]=null,rs--)}function Ct(t,i){rs++,ou[rs]=t.current,t.current=i}var Ki={},ln=ji(Ki),vn=ji(!1),yr=Ki;function ss(t,i){var s=t.type.contextTypes;if(!s)return Ki;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function xn(t){return t=t.childContextTypes,t!=null}function ua(){Lt(vn),Lt(ln)}function Bd(t,i,s){if(ln.current!==Ki)throw Error(n(168));Ct(ln,i),Ct(vn,s)}function Hd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ye(t)||"Unknown",c));return se({},s,l)}function ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,yr=ln.current,Ct(ln,t),Ct(vn,vn.current),!0}function Vd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Hd(t,i,yr),l.__reactInternalMemoizedMergedChildContext=t,Lt(vn),Lt(ln),Ct(ln,t)):Lt(vn),Ct(vn,s)}var Si=null,fa=!1,au=!1;function Gd(t){Si===null?Si=[t]:Si.push(t)}function Kg(t){fa=!0,Gd(t)}function $i(){if(!au&&Si!==null){au=!0;var t=0,i=Et;try{var s=Si;for(Et=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Si=null,fa=!1}catch(c){throw Si!==null&&(Si=Si.slice(t+1)),te(je,$i),c}finally{Et=i,au=!1}}return null}var os=[],as=0,da=null,ha=0,On=[],kn=0,Sr=null,Mi=1,Ei="";function Mr(t,i){os[as++]=ha,os[as++]=da,da=t,ha=i}function Wd(t,i,s){On[kn++]=Mi,On[kn++]=Ei,On[kn++]=Sr,Sr=t;var l=Mi;t=Ei;var c=32-Oe(l)-1;l&=~(1<<c),s+=1;var h=32-Oe(i)+c;if(30<h){var E=c-c%5;h=(l&(1<<E)-1).toString(32),l>>=E,c-=E,Mi=1<<32-Oe(i)+c|s<<c|l,Ei=h+t}else Mi=1<<h|s<<c|l,Ei=t}function lu(t){t.return!==null&&(Mr(t,1),Wd(t,1,0))}function uu(t){for(;t===da;)da=os[--as],os[as]=null,ha=os[--as],os[as]=null;for(;t===Sr;)Sr=On[--kn],On[kn]=null,Ei=On[--kn],On[kn]=null,Mi=On[--kn],On[kn]=null}var bn=null,Dn=null,It=!1,jn=null;function Xd(t,i){var s=Vn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Yd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,bn=t,Dn=qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,bn=t,Dn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Sr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Vn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,bn=t,Dn=null,!0):!1;default:return!1}}function cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fu(t){if(It){var i=Dn;if(i){var s=i;if(!Yd(t,i)){if(cu(t))throw Error(n(418));i=qi(s.nextSibling);var l=bn;i&&Yd(t,i)?Xd(l,s):(t.flags=t.flags&-4097|2,It=!1,bn=t)}}else{if(cu(t))throw Error(n(418));t.flags=t.flags&-4097|2,It=!1,bn=t}}}function qd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function pa(t){if(t!==bn)return!1;if(!It)return qd(t),It=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!nu(t.type,t.memoizedProps)),i&&(i=Dn)){if(cu(t))throw jd(),Error(n(418));for(;i;)Xd(t,i),i=qi(i.nextSibling)}if(qd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Dn=qi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Dn=null}}else Dn=bn?qi(t.stateNode.nextSibling):null;return!0}function jd(){for(var t=Dn;t;)t=qi(t.nextSibling)}function ls(){Dn=bn=null,It=!1}function du(t){jn===null?jn=[t]:jn.push(t)}var $g=b.ReactCurrentBatchConfig;function mo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var U=c.refs;E===null?delete U[h]:U[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Kd(t){var i=t._init;return i(t._payload)}function $d(t){function i(j,H){if(t){var $=j.deletions;$===null?(j.deletions=[H],j.flags|=16):$.push(H)}}function s(j,H){if(!t)return null;for(;H!==null;)i(j,H),H=H.sibling;return null}function l(j,H){for(j=new Map;H!==null;)H.key!==null?j.set(H.key,H):j.set(H.index,H),H=H.sibling;return j}function c(j,H){return j=rr(j,H),j.index=0,j.sibling=null,j}function h(j,H,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<H?(j.flags|=2,H):$):(j.flags|=2,H)):(j.flags|=1048576,H)}function E(j){return t&&j.alternate===null&&(j.flags|=2),j}function U(j,H,$,Me){return H===null||H.tag!==6?(H=ic($,j.mode,Me),H.return=j,H):(H=c(H,$),H.return=j,H)}function O(j,H,$,Me){var We=$.type;return We===I?ge(j,H,$.props.children,Me,$.key):H!==null&&(H.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===K&&Kd(We)===H.type)?(Me=c(H,$.props),Me.ref=mo(j,H,$),Me.return=j,Me):(Me=za($.type,$.key,$.props,null,j.mode,Me),Me.ref=mo(j,H,$),Me.return=j,Me)}function ne(j,H,$,Me){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=rc($,j.mode,Me),H.return=j,H):(H=c(H,$.children||[]),H.return=j,H)}function ge(j,H,$,Me,We){return H===null||H.tag!==7?(H=Lr($,j.mode,Me,We),H.return=j,H):(H=c(H,$),H.return=j,H)}function ve(j,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=ic(""+H,j.mode,$),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Y:return $=za(H.type,H.key,H.props,null,j.mode,$),$.ref=mo(j,null,H),$.return=j,$;case F:return H=rc(H,j.mode,$),H.return=j,H;case K:var Me=H._init;return ve(j,Me(H._payload),$)}if(D(H)||fe(H))return H=Lr(H,j.mode,$,null),H.return=j,H;ma(j,H)}return null}function me(j,H,$,Me){var We=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return We!==null?null:U(j,H,""+$,Me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Y:return $.key===We?O(j,H,$,Me):null;case F:return $.key===We?ne(j,H,$,Me):null;case K:return We=$._init,me(j,H,We($._payload),Me)}if(D($)||fe($))return We!==null?null:ge(j,H,$,Me,null);ma(j,$)}return null}function Ue(j,H,$,Me,We){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return j=j.get($)||null,U(H,j,""+Me,We);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case Y:return j=j.get(Me.key===null?$:Me.key)||null,O(H,j,Me,We);case F:return j=j.get(Me.key===null?$:Me.key)||null,ne(H,j,Me,We);case K:var Ye=Me._init;return Ue(j,H,$,Ye(Me._payload),We)}if(D(Me)||fe(Me))return j=j.get($)||null,ge(H,j,Me,We,null);ma(H,Me)}return null}function Be(j,H,$,Me){for(var We=null,Ye=null,qe=H,tt=H=0,en=null;qe!==null&&tt<$.length;tt++){qe.index>tt?(en=qe,qe=null):en=qe.sibling;var xt=me(j,qe,$[tt],Me);if(xt===null){qe===null&&(qe=en);break}t&&qe&&xt.alternate===null&&i(j,qe),H=h(xt,H,tt),Ye===null?We=xt:Ye.sibling=xt,Ye=xt,qe=en}if(tt===$.length)return s(j,qe),It&&Mr(j,tt),We;if(qe===null){for(;tt<$.length;tt++)qe=ve(j,$[tt],Me),qe!==null&&(H=h(qe,H,tt),Ye===null?We=qe:Ye.sibling=qe,Ye=qe);return It&&Mr(j,tt),We}for(qe=l(j,qe);tt<$.length;tt++)en=Ue(qe,j,tt,$[tt],Me),en!==null&&(t&&en.alternate!==null&&qe.delete(en.key===null?tt:en.key),H=h(en,H,tt),Ye===null?We=en:Ye.sibling=en,Ye=en);return t&&qe.forEach(function(sr){return i(j,sr)}),It&&Mr(j,tt),We}function He(j,H,$,Me){var We=fe($);if(typeof We!="function")throw Error(n(150));if($=We.call($),$==null)throw Error(n(151));for(var Ye=We=null,qe=H,tt=H=0,en=null,xt=$.next();qe!==null&&!xt.done;tt++,xt=$.next()){qe.index>tt?(en=qe,qe=null):en=qe.sibling;var sr=me(j,qe,xt.value,Me);if(sr===null){qe===null&&(qe=en);break}t&&qe&&sr.alternate===null&&i(j,qe),H=h(sr,H,tt),Ye===null?We=sr:Ye.sibling=sr,Ye=sr,qe=en}if(xt.done)return s(j,qe),It&&Mr(j,tt),We;if(qe===null){for(;!xt.done;tt++,xt=$.next())xt=ve(j,xt.value,Me),xt!==null&&(H=h(xt,H,tt),Ye===null?We=xt:Ye.sibling=xt,Ye=xt);return It&&Mr(j,tt),We}for(qe=l(j,qe);!xt.done;tt++,xt=$.next())xt=Ue(qe,j,tt,xt.value,Me),xt!==null&&(t&&xt.alternate!==null&&qe.delete(xt.key===null?tt:xt.key),H=h(xt,H,tt),Ye===null?We=xt:Ye.sibling=xt,Ye=xt);return t&&qe.forEach(function(P_){return i(j,P_)}),It&&Mr(j,tt),We}function zt(j,H,$,Me){if(typeof $=="object"&&$!==null&&$.type===I&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case Y:e:{for(var We=$.key,Ye=H;Ye!==null;){if(Ye.key===We){if(We=$.type,We===I){if(Ye.tag===7){s(j,Ye.sibling),H=c(Ye,$.props.children),H.return=j,j=H;break e}}else if(Ye.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===K&&Kd(We)===Ye.type){s(j,Ye.sibling),H=c(Ye,$.props),H.ref=mo(j,Ye,$),H.return=j,j=H;break e}s(j,Ye);break}else i(j,Ye);Ye=Ye.sibling}$.type===I?(H=Lr($.props.children,j.mode,Me,$.key),H.return=j,j=H):(Me=za($.type,$.key,$.props,null,j.mode,Me),Me.ref=mo(j,H,$),Me.return=j,j=Me)}return E(j);case F:e:{for(Ye=$.key;H!==null;){if(H.key===Ye)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){s(j,H.sibling),H=c(H,$.children||[]),H.return=j,j=H;break e}else{s(j,H);break}else i(j,H);H=H.sibling}H=rc($,j.mode,Me),H.return=j,j=H}return E(j);case K:return Ye=$._init,zt(j,H,Ye($._payload),Me)}if(D($))return Be(j,H,$,Me);if(fe($))return He(j,H,$,Me);ma(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(s(j,H.sibling),H=c(H,$),H.return=j,j=H):(s(j,H),H=ic($,j.mode,Me),H.return=j,j=H),E(j)):s(j,H)}return zt}var us=$d(!0),Zd=$d(!1),ga=ji(null),_a=null,cs=null,hu=null;function pu(){hu=cs=_a=null}function mu(t){var i=ga.current;Lt(ga),t._currentValue=i}function gu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function fs(t,i){_a=t,hu=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(yn=!0),t.firstContext=null)}function zn(t){var i=t._currentValue;if(hu!==t)if(t={context:t,memoizedValue:i,next:null},cs===null){if(_a===null)throw Error(n(308));cs=t,_a.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return i}var Er=null;function _u(t){Er===null?Er=[t]:Er.push(t)}function Qd(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,_u(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ti(t,l)}function Ti(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Zi=!1;function vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Qi(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(mt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ti(t,s)}return c=l.interleaved,c===null?(i.next=i,_u(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ti(t,s)}function va(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Dl(t,s)}}function eh(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var E={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=E:h=h.next=E,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function xa(t,i,s,l){var c=t.updateQueue;Zi=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,U=c.shared.pending;if(U!==null){c.shared.pending=null;var O=U,ne=O.next;O.next=null,E===null?h=ne:E.next=ne,E=O;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,U=ge.lastBaseUpdate,U!==E&&(U===null?ge.firstBaseUpdate=ne:U.next=ne,ge.lastBaseUpdate=O))}if(h!==null){var ve=c.baseState;E=0,ge=ne=O=null,U=h;do{var me=U.lane,Ue=U.eventTime;if((l&me)===me){ge!==null&&(ge=ge.next={eventTime:Ue,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Be=t,He=U;switch(me=i,Ue=s,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){ve=Be.call(Ue,ve,me);break e}ve=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,me=typeof Be=="function"?Be.call(Ue,ve,me):Be,me==null)break e;ve=se({},ve,me);break e;case 2:Zi=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[U]:me.push(U))}else Ue={eventTime:Ue,lane:me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ge===null?(ne=ge=Ue,O=ve):ge=ge.next=Ue,E|=me;if(U=U.next,U===null){if(U=c.shared.pending,U===null)break;me=U,U=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(ge===null&&(O=ve),c.baseState=O,c.firstBaseUpdate=ne,c.lastBaseUpdate=ge,i=c.shared.interleaved,i!==null){c=i;do E|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Ar|=E,t.lanes=E,t.memoizedState=ve}}function th(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var go={},ci=ji(go),_o=ji(go),vo=ji(go);function Tr(t){if(t===go)throw Error(n(174));return t}function xu(t,i){switch(Ct(vo,i),Ct(_o,t),Ct(ci,go),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:we(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=we(i,t)}Lt(ci),Ct(ci,i)}function ds(){Lt(ci),Lt(_o),Lt(vo)}function nh(t){Tr(vo.current);var i=Tr(ci.current),s=we(i,t.type);i!==s&&(Ct(_o,t),Ct(ci,s))}function yu(t){_o.current===t&&(Lt(ci),Lt(_o))}var Nt=ji(0);function ya(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Su=[];function Mu(){for(var t=0;t<Su.length;t++)Su[t]._workInProgressVersionPrimary=null;Su.length=0}var Sa=b.ReactCurrentDispatcher,Eu=b.ReactCurrentBatchConfig,wr=0,Ft=null,Xt=null,Qt=null,Ma=!1,xo=!1,yo=0,Zg=0;function un(){throw Error(n(321))}function Tu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!qn(t[s],i[s]))return!1;return!0}function wu(t,i,s,l,c,h){if(wr=h,Ft=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Sa.current=t===null||t.memoizedState===null?t_:n_,t=s(l,c),xo){h=0;do{if(xo=!1,yo=0,25<=h)throw Error(n(301));h+=1,Qt=Xt=null,i.updateQueue=null,Sa.current=i_,t=s(l,c)}while(xo)}if(Sa.current=wa,i=Xt!==null&&Xt.next!==null,wr=0,Qt=Xt=Ft=null,Ma=!1,i)throw Error(n(300));return t}function Au(){var t=yo!==0;return yo=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Ft.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Bn(){if(Xt===null){var t=Ft.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=Qt===null?Ft.memoizedState:Qt.next;if(i!==null)Qt=i,Xt=t;else{if(t===null)throw Error(n(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Qt===null?Ft.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function So(t,i){return typeof i=="function"?i(t):i}function Ru(t){var i=Bn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Xt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var U=E=null,O=null,ne=h;do{var ge=ne.lane;if((wr&ge)===ge)O!==null&&(O=O.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),l=ne.hasEagerState?ne.eagerState:t(l,ne.action);else{var ve={lane:ge,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};O===null?(U=O=ve,E=l):O=O.next=ve,Ft.lanes|=ge,Ar|=ge}ne=ne.next}while(ne!==null&&ne!==h);O===null?E=l:O.next=U,qn(l,i.memoizedState)||(yn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=O,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Ft.lanes|=h,Ar|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Cu(t){var i=Bn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var E=c=c.next;do h=t(h,E.action),E=E.next;while(E!==c);qn(h,i.memoizedState)||(yn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function ih(){}function rh(t,i){var s=Ft,l=Bn(),c=i(),h=!qn(l.memoizedState,c);if(h&&(l.memoizedState=c,yn=!0),l=l.queue,Pu(ah.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||Qt!==null&&Qt.memoizedState.tag&1){if(s.flags|=2048,Mo(9,oh.bind(null,s,l,c,i),void 0,null),Jt===null)throw Error(n(349));(wr&30)!==0||sh(s,i,c)}return c}function sh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ft.updateQueue,i===null?(i={lastEffect:null,stores:null},Ft.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function oh(t,i,s,l){i.value=s,i.getSnapshot=l,lh(i)&&uh(t)}function ah(t,i,s){return s(function(){lh(i)&&uh(t)})}function lh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!qn(t,s)}catch{return!0}}function uh(t){var i=Ti(t,1);i!==null&&Qn(i,t,1,-1)}function ch(t){var i=fi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},i.queue=t,t=t.dispatch=e_.bind(null,Ft,t),[i.memoizedState,t]}function Mo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ft.updateQueue,i===null?(i={lastEffect:null,stores:null},Ft.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function fh(){return Bn().memoizedState}function Ea(t,i,s,l){var c=fi();Ft.flags|=t,c.memoizedState=Mo(1|i,s,void 0,l===void 0?null:l)}function Ta(t,i,s,l){var c=Bn();l=l===void 0?null:l;var h=void 0;if(Xt!==null){var E=Xt.memoizedState;if(h=E.destroy,l!==null&&Tu(l,E.deps)){c.memoizedState=Mo(i,s,h,l);return}}Ft.flags|=t,c.memoizedState=Mo(1|i,s,h,l)}function dh(t,i){return Ea(8390656,8,t,i)}function Pu(t,i){return Ta(2048,8,t,i)}function hh(t,i){return Ta(4,2,t,i)}function ph(t,i){return Ta(4,4,t,i)}function mh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function gh(t,i,s){return s=s!=null?s.concat([t]):null,Ta(4,4,mh.bind(null,i,t),s)}function Lu(){}function _h(t,i){var s=Bn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Tu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function vh(t,i){var s=Bn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Tu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function xh(t,i,s){return(wr&21)===0?(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=s):(qn(s,i)||(s=Kr(),Ft.lanes|=s,Ar|=s,t.baseState=!0),i)}function Qg(t,i){var s=Et;Et=s!==0&&4>s?s:4,t(!0);var l=Eu.transition;Eu.transition={};try{t(!1),i()}finally{Et=s,Eu.transition=l}}function yh(){return Bn().memoizedState}function Jg(t,i,s){var l=nr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Sh(t))Mh(i,s);else if(s=Qd(t,i,s,l),s!==null){var c=mn();Qn(s,t,l,c),Eh(s,i,l)}}function e_(t,i,s){var l=nr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Sh(t))Mh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,U=h(E,s);if(c.hasEagerState=!0,c.eagerState=U,qn(U,E)){var O=i.interleaved;O===null?(c.next=c,_u(i)):(c.next=O.next,O.next=c),i.interleaved=c;return}}catch{}finally{}s=Qd(t,i,c,l),s!==null&&(c=mn(),Qn(s,t,l,c),Eh(s,i,l))}}function Sh(t){var i=t.alternate;return t===Ft||i!==null&&i===Ft}function Mh(t,i){xo=Ma=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Eh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Dl(t,s)}}var wa={readContext:zn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},t_={readContext:zn,useCallback:function(t,i){return fi().memoizedState=[t,i===void 0?null:i],t},useContext:zn,useEffect:dh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ea(4194308,4,mh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ea(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ea(4,2,t,i)},useMemo:function(t,i){var s=fi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=fi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Jg.bind(null,Ft,t),[l.memoizedState,t]},useRef:function(t){var i=fi();return t={current:t},i.memoizedState=t},useState:ch,useDebugValue:Lu,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=ch(!1),i=t[0];return t=Qg.bind(null,t[1]),fi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ft,c=fi();if(It){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),Jt===null)throw Error(n(349));(wr&30)!==0||sh(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,dh(ah.bind(null,l,h,t),[t]),l.flags|=2048,Mo(9,oh.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=fi(),i=Jt.identifierPrefix;if(It){var s=Ei,l=Mi;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=yo++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Zg++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},n_={readContext:zn,useCallback:_h,useContext:zn,useEffect:Pu,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:vh,useReducer:Ru,useRef:fh,useState:function(){return Ru(So)},useDebugValue:Lu,useDeferredValue:function(t){var i=Bn();return xh(i,Xt.memoizedState,t)},useTransition:function(){var t=Ru(So)[0],i=Bn().memoizedState;return[t,i]},useMutableSource:ih,useSyncExternalStore:rh,useId:yh,unstable_isNewReconciler:!1},i_={readContext:zn,useCallback:_h,useContext:zn,useEffect:Pu,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:vh,useReducer:Cu,useRef:fh,useState:function(){return Cu(So)},useDebugValue:Lu,useDeferredValue:function(t){var i=Bn();return Xt===null?i.memoizedState=t:xh(i,Xt.memoizedState,t)},useTransition:function(){var t=Cu(So)[0],i=Bn().memoizedState;return[t,i]},useMutableSource:ih,useSyncExternalStore:rh,useId:yh,unstable_isNewReconciler:!1};function Kn(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function bu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:se({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Aa={isMounted:function(t){return(t=t._reactInternals)?vi(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=mn(),c=nr(t),h=wi(l,c);h.payload=i,s!=null&&(h.callback=s),i=Qi(t,h,c),i!==null&&(Qn(i,t,c,l),va(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=mn(),c=nr(t),h=wi(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Qi(t,h,c),i!==null&&(Qn(i,t,c,l),va(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=mn(),l=nr(t),c=wi(s,l);c.tag=2,i!=null&&(c.callback=i),i=Qi(t,c,l),i!==null&&(Qn(i,t,l,s),va(i,t,l))}};function Th(t,i,s,l,c,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!ao(s,l)||!ao(c,h):!0}function wh(t,i,s){var l=!1,c=Ki,h=i.contextType;return typeof h=="object"&&h!==null?h=zn(h):(c=xn(i)?yr:ln.current,l=i.contextTypes,h=(l=l!=null)?ss(t,c):Ki),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Aa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Ah(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Aa.enqueueReplaceState(i,i.state,null)}function Du(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},vu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=zn(h):(h=xn(i)?yr:ln.current,c.context=ss(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(bu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Aa.enqueueReplaceState(c,c.state,null),xa(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,i){try{var s="",l=i;do s+=ce(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Iu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Uu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var r_=typeof WeakMap=="function"?WeakMap:Map;function Rh(t,i,s){s=wi(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Ia||(Ia=!0,Ku=l),Uu(t,i)},s}function Ch(t,i,s){s=wi(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Uu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Uu(t,i),typeof l!="function"&&(er===null?er=new Set([this]):er.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),s}function Ph(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new r_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=v_.bind(null,t,i,s),i.then(t,t))}function Lh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function bh(t,i,s,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=wi(-1,1),i.tag=2,Qi(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var s_=b.ReactCurrentOwner,yn=!1;function pn(t,i,s,l){i.child=t===null?Zd(i,null,s,l):us(i,t.child,s,l)}function Dh(t,i,s,l,c){s=s.render;var h=i.ref;return fs(i,c),l=wu(t,i,s,l,h,c),s=Au(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ai(t,i,c)):(It&&s&&lu(i),i.flags|=1,pn(t,i,l,c),i.child)}function Ih(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!nc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Uh(t,i,h,l,c)):(t=za(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var E=h.memoizedProps;if(s=s.compare,s=s!==null?s:ao,s(E,l)&&t.ref===i.ref)return Ai(t,i,c)}return i.flags|=1,t=rr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Uh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(ao(h,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,Ai(t,i,c)}return Nu(t,i,s,l,c)}function Nh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(ms,In),In|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ct(ms,In),In|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Ct(ms,In),In|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Ct(ms,In),In|=l;return pn(t,i,c,s),i.child}function Fh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Nu(t,i,s,l,c){var h=xn(s)?yr:ln.current;return h=ss(i,h),fs(i,c),s=wu(t,i,s,l,h,c),l=Au(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ai(t,i,c)):(It&&l&&lu(i),i.flags|=1,pn(t,i,s,c),i.child)}function Oh(t,i,s,l,c){if(xn(s)){var h=!0;ca(i)}else h=!1;if(fs(i,c),i.stateNode===null)Ca(t,i),wh(i,s,l),Du(i,s,l,c),l=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var O=E.context,ne=s.contextType;typeof ne=="object"&&ne!==null?ne=zn(ne):(ne=xn(s)?yr:ln.current,ne=ss(i,ne));var ge=s.getDerivedStateFromProps,ve=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";ve||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==l||O!==ne)&&Ah(i,E,l,ne),Zi=!1;var me=i.memoizedState;E.state=me,xa(i,l,E,c),O=i.memoizedState,U!==l||me!==O||vn.current||Zi?(typeof ge=="function"&&(bu(i,s,ge,l),O=i.memoizedState),(U=Zi||Th(i,s,U,l,me,O,ne))?(ve||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),E.props=l,E.state=O,E.context=ne,l=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,Jd(t,i),U=i.memoizedProps,ne=i.type===i.elementType?U:Kn(i.type,U),E.props=ne,ve=i.pendingProps,me=E.context,O=s.contextType,typeof O=="object"&&O!==null?O=zn(O):(O=xn(s)?yr:ln.current,O=ss(i,O));var Ue=s.getDerivedStateFromProps;(ge=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==ve||me!==O)&&Ah(i,E,l,O),Zi=!1,me=i.memoizedState,E.state=me,xa(i,l,E,c);var Be=i.memoizedState;U!==ve||me!==Be||vn.current||Zi?(typeof Ue=="function"&&(bu(i,s,Ue,l),Be=i.memoizedState),(ne=Zi||Th(i,s,ne,l,me,Be,O)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Be,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Be,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),E.props=l,E.state=Be,E.context=O,l=ne):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Fu(t,i,s,l,h,c)}function Fu(t,i,s,l,c,h){Fh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return c&&Vd(i,s,!1),Ai(t,i,h);l=i.stateNode,s_.current=i;var U=E&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=us(i,t.child,null,h),i.child=us(i,null,U,h)):pn(t,i,U,h),i.memoizedState=l.state,c&&Vd(i,s,!0),i.child}function kh(t){var i=t.stateNode;i.pendingContext?Bd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Bd(t,i.context,!1),xu(t,i.containerInfo)}function zh(t,i,s,l,c){return ls(),du(c),i.flags|=256,pn(t,i,s,l),i.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bh(t,i,s){var l=i.pendingProps,c=Nt.current,h=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(c&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Ct(Nt,c&1),t===null)return fu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Ba(E,l,0,null),t=Lr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ku(s),i.memoizedState=Ou,t):zu(i,E));if(c=t.memoizedState,c!==null&&(U=c.dehydrated,U!==null))return o_(t,i,E,l,U,c,s);if(h){h=l.fallback,E=i.mode,c=t.child,U=c.sibling;var O={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=rr(c,O),l.subtreeFlags=c.subtreeFlags&14680064),U!==null?h=rr(U,h):(h=Lr(h,E,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?ku(s):{baseLanes:E.baseLanes|s,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~s,i.memoizedState=Ou,l}return h=t.child,t=h.sibling,l=rr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function zu(t,i){return i=Ba({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ra(t,i,s,l){return l!==null&&du(l),us(i,t.child,null,s),t=zu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function o_(t,i,s,l,c,h,E){if(s)return i.flags&256?(i.flags&=-257,l=Iu(Error(n(422))),Ra(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ba({mode:"visible",children:l.children},c,0,null),h=Lr(h,c,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&us(i,t.child,null,E),i.child.memoizedState=ku(E),i.memoizedState=Ou,h);if((i.mode&1)===0)return Ra(t,i,E,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=Iu(h,l,void 0),Ra(t,i,E,l)}if(U=(E&t.childLanes)!==0,yn||U){if(l=Jt,l!==null){switch(E&-E){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|E))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ti(t,c),Qn(l,t,c,-1))}return tc(),l=Iu(Error(n(421))),Ra(t,i,E,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=x_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Dn=qi(c.nextSibling),bn=i,It=!0,jn=null,t!==null&&(On[kn++]=Mi,On[kn++]=Ei,On[kn++]=Sr,Mi=t.id,Ei=t.overflow,Sr=i),i=zu(i,l.children),i.flags|=4096,i)}function Hh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),gu(t.return,i,s)}function Bu(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Vh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(pn(t,i,l.children,s),l=Nt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hh(t,s,i);else if(t.tag===19)Hh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ct(Nt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&ya(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Bu(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&ya(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Bu(i,!0,s,null,h);break;case"together":Bu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ca(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ai(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Ar|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=rr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=rr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function a_(t,i,s){switch(i.tag){case 3:kh(i),ls();break;case 5:nh(i);break;case 1:xn(i.type)&&ca(i);break;case 4:xu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Ct(ga,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ct(Nt,Nt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Bh(t,i,s):(Ct(Nt,Nt.current&1),t=Ai(t,i,s),t!==null?t.sibling:null);Ct(Nt,Nt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Vh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ct(Nt,Nt.current),l)break;return null;case 22:case 23:return i.lanes=0,Nh(t,i,s)}return Ai(t,i,s)}var Gh,Hu,Wh,Xh;Gh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Hu=function(){},Wh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Tr(ci.current);var h=null;switch(s){case"input":c=nn(t,c),l=nn(t,l),h=[];break;case"select":c=se({},c,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":c=J(t,c),l=J(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=aa)}nt(s,l);var E;s=null;for(ne in c)if(!l.hasOwnProperty(ne)&&c.hasOwnProperty(ne)&&c[ne]!=null)if(ne==="style"){var U=c[ne];for(E in U)U.hasOwnProperty(E)&&(s||(s={}),s[E]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?h||(h=[]):(h=h||[]).push(ne,null));for(ne in l){var O=l[ne];if(U=c!=null?c[ne]:void 0,l.hasOwnProperty(ne)&&O!==U&&(O!=null||U!=null))if(ne==="style")if(U){for(E in U)!U.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(s||(s={}),s[E]="");for(E in O)O.hasOwnProperty(E)&&U[E]!==O[E]&&(s||(s={}),s[E]=O[E])}else s||(h||(h=[]),h.push(ne,s)),s=O;else ne==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,U=U?U.__html:void 0,O!=null&&U!==O&&(h=h||[]).push(ne,O)):ne==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(ne,""+O):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(O!=null&&ne==="onScroll"&&Pt("scroll",t),h||U===O||(h=[])):(h=h||[]).push(ne,O))}s&&(h=h||[]).push("style",s);var ne=h;(i.updateQueue=ne)&&(i.flags|=4)}},Xh=function(t,i,s,l){s!==l&&(i.flags|=4)};function Eo(t,i){if(!It)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function l_(t,i,s){var l=i.pendingProps;switch(uu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return xn(i.type)&&ua(),cn(i),null;case 3:return l=i.stateNode,ds(),Lt(vn),Lt(ln),Mu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(pa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,jn!==null&&(Qu(jn),jn=null))),Hu(t,i),cn(i),null;case 5:yu(i);var c=Tr(vo.current);if(s=i.type,t!==null&&i.stateNode!=null)Wh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=Tr(ci.current),pa(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[ui]=i,l[ho]=h,t=(i.mode&1)!==0,s){case"dialog":Pt("cancel",l),Pt("close",l);break;case"iframe":case"object":case"embed":Pt("load",l);break;case"video":case"audio":for(c=0;c<uo.length;c++)Pt(uo[c],l);break;case"source":Pt("error",l);break;case"img":case"image":case"link":Pt("error",l),Pt("load",l);break;case"details":Pt("toggle",l);break;case"input":ot(l,h),Pt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Pt("invalid",l);break;case"textarea":he(l,h),Pt("invalid",l)}nt(s,h),c=null;for(var E in h)if(h.hasOwnProperty(E)){var U=h[E];E==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,U,t),c=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,U,t),c=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Pt("scroll",l)}switch(s){case"input":pt(l),Tt(l,h,!0);break;case"textarea":pt(l),de(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=aa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xe(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(s,{is:l.is}):(t=E.createElement(s),s==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,s),t[ui]=i,t[ho]=l,Gh(t,i,!1,!1),i.stateNode=t;e:{switch(E=St(s,l),s){case"dialog":Pt("cancel",t),Pt("close",t),c=l;break;case"iframe":case"object":case"embed":Pt("load",t),c=l;break;case"video":case"audio":for(c=0;c<uo.length;c++)Pt(uo[c],t);c=l;break;case"source":Pt("error",t),c=l;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),c=l;break;case"details":Pt("toggle",t),c=l;break;case"input":ot(t,l),c=nn(t,l),Pt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=se({},l,{value:void 0}),Pt("invalid",t);break;case"textarea":he(t,l),c=J(t,l),Pt("invalid",t);break;default:c=l}nt(s,c),U=c;for(h in U)if(U.hasOwnProperty(h)){var O=U[h];h==="style"?ke(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&dt(t,O)):h==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&Se(t,O):typeof O=="number"&&Se(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Pt("scroll",t):O!=null&&P(t,h,O,E))}switch(s){case"input":pt(t),Tt(t,l,!1);break;case"textarea":pt(t),de(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Pe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?w(t,!!l.multiple,h,!1):l.defaultValue!=null&&w(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=aa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)Xh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Tr(vo.current),Tr(ci.current),pa(i)){if(l=i.stateNode,s=i.memoizedProps,l[ui]=i,(h=l.nodeValue!==s)&&(t=bn,t!==null))switch(t.tag){case 3:oa(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oa(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[ui]=i,i.stateNode=l}return cn(i),null;case 13:if(Lt(Nt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(It&&Dn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jd(),ls(),i.flags|=98560,h=!1;else if(h=pa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ui]=i}else ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),h=!1}else jn!==null&&(Qu(jn),jn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Nt.current&1)!==0?Yt===0&&(Yt=3):tc())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return ds(),Hu(t,i),t===null&&co(i.stateNode.containerInfo),cn(i),null;case 10:return mu(i.type._context),cn(i),null;case 17:return xn(i.type)&&ua(),cn(i),null;case 19:if(Lt(Nt),h=i.memoizedState,h===null)return cn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Eo(h,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=ya(t),E!==null){for(i.flags|=128,Eo(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Ct(Nt,Nt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Te()>gs&&(i.flags|=128,l=!0,Eo(h,!1),i.lanes=4194304)}else{if(!l)if(t=ya(E),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Eo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!It)return cn(i),null}else 2*Te()-h.renderingStartTime>gs&&s!==1073741824&&(i.flags|=128,l=!0,Eo(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(s=h.last,s!==null?s.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Te(),i.sibling=null,s=Nt.current,Ct(Nt,l?s&1|2:s&1),i):(cn(i),null);case 22:case 23:return ec(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(In&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function u_(t,i){switch(uu(i),i.tag){case 1:return xn(i.type)&&ua(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ds(),Lt(vn),Lt(ln),Mu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return yu(i),null;case 13:if(Lt(Nt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ls()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Lt(Nt),null;case 4:return ds(),null;case 10:return mu(i.type._context),null;case 22:case 23:return ec(),null;case 24:return null;default:return null}}var Pa=!1,fn=!1,c_=typeof WeakSet=="function"?WeakSet:Set,ze=null;function ps(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){kt(t,i,l)}else s.current=null}function Vu(t,i,s){try{s()}catch(l){kt(t,i,l)}}var Yh=!1;function f_(t,i){if(eu=Ko,t=Td(),Yl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var E=0,U=-1,O=-1,ne=0,ge=0,ve=t,me=null;t:for(;;){for(var Ue;ve!==s||c!==0&&ve.nodeType!==3||(U=E+c),ve!==h||l!==0&&ve.nodeType!==3||(O=E+l),ve.nodeType===3&&(E+=ve.nodeValue.length),(Ue=ve.firstChild)!==null;)me=ve,ve=Ue;for(;;){if(ve===t)break t;if(me===s&&++ne===c&&(U=E),me===h&&++ge===l&&(O=E),(Ue=ve.nextSibling)!==null)break;ve=me,me=ve.parentNode}ve=Ue}s=U===-1||O===-1?null:{start:U,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(tu={focusedElem:t,selectionRange:s},Ko=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,zt=Be.memoizedState,j=i.stateNode,H=j.getSnapshotBeforeUpdate(i.elementType===i.type?He:Kn(i.type,He),zt);j.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){kt(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return Be=Yh,Yh=!1,Be}function To(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Vu(i,s,h)}c=c.next}while(c!==l)}}function La(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Gu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function qh(t){var i=t.alternate;i!==null&&(t.alternate=null,qh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ui],delete i[ho],delete i[su],delete i[qg],delete i[jg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jh(t){return t.tag===5||t.tag===3||t.tag===4}function Kh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=aa));else if(l!==4&&(t=t.child,t!==null))for(Wu(t,i,s),t=t.sibling;t!==null;)Wu(t,i,s),t=t.sibling}function Xu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Xu(t,i,s),t=t.sibling;t!==null;)Xu(t,i,s),t=t.sibling}var sn=null,$n=!1;function Ji(t,i,s){for(s=s.child;s!==null;)$h(t,i,s),s=s.sibling}function $h(t,i,s){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(At,s)}catch{}switch(s.tag){case 5:fn||ps(s,i);case 6:var l=sn,c=$n;sn=null,Ji(t,i,s),sn=l,$n=c,sn!==null&&($n?(t=sn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):sn.removeChild(s.stateNode));break;case 18:sn!==null&&($n?(t=sn,s=s.stateNode,t.nodeType===8?ru(t.parentNode,s):t.nodeType===1&&ru(t,s),to(t)):ru(sn,s.stateNode));break;case 4:l=sn,c=$n,sn=s.stateNode.containerInfo,$n=!0,Ji(t,i,s),sn=l,$n=c;break;case 0:case 11:case 14:case 15:if(!fn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Vu(s,i,E),c=c.next}while(c!==l)}Ji(t,i,s);break;case 1:if(!fn&&(ps(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(U){kt(s,i,U)}Ji(t,i,s);break;case 21:Ji(t,i,s);break;case 22:s.mode&1?(fn=(l=fn)||s.memoizedState!==null,Ji(t,i,s),fn=l):Ji(t,i,s);break;default:Ji(t,i,s)}}function Zh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new c_),i.forEach(function(l){var c=y_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function Zn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:sn=U.stateNode,$n=!1;break e;case 3:sn=U.stateNode.containerInfo,$n=!0;break e;case 4:sn=U.stateNode.containerInfo,$n=!0;break e}U=U.return}if(sn===null)throw Error(n(160));$h(h,E,c),sn=null,$n=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(ne){kt(c,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Qh(i,t),i=i.sibling}function Qh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(i,t),di(t),l&4){try{To(3,t,t.return),La(3,t)}catch(He){kt(t,t.return,He)}try{To(5,t,t.return)}catch(He){kt(t,t.return,He)}}break;case 1:Zn(i,t),di(t),l&512&&s!==null&&ps(s,s.return);break;case 5:if(Zn(i,t),di(t),l&512&&s!==null&&ps(s,s.return),t.flags&32){var c=t.stateNode;try{Se(c,"")}catch(He){kt(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,E=s!==null?s.memoizedProps:h,U=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&ft(c,h),St(U,E);var ne=St(U,h);for(E=0;E<O.length;E+=2){var ge=O[E],ve=O[E+1];ge==="style"?ke(c,ve):ge==="dangerouslySetInnerHTML"?dt(c,ve):ge==="children"?Se(c,ve):P(c,ge,ve,ne)}switch(U){case"input":Ke(c,h);break;case"textarea":_e(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ue=h.value;Ue!=null?w(c,!!h.multiple,Ue,!1):me!==!!h.multiple&&(h.defaultValue!=null?w(c,!!h.multiple,h.defaultValue,!0):w(c,!!h.multiple,h.multiple?[]:"",!1))}c[ho]=h}catch(He){kt(t,t.return,He)}}break;case 6:if(Zn(i,t),di(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){kt(t,t.return,He)}}break;case 3:if(Zn(i,t),di(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{to(i.containerInfo)}catch(He){kt(t,t.return,He)}break;case 4:Zn(i,t),di(t);break;case 13:Zn(i,t),di(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ju=Te())),l&4&&Zh(t);break;case 22:if(ge=s!==null&&s.memoizedState!==null,t.mode&1?(fn=(ne=fn)||ge,Zn(i,t),fn=ne):Zn(i,t),di(t),l&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!ge&&(t.mode&1)!==0)for(ze=t,ge=t.child;ge!==null;){for(ve=ze=ge;ze!==null;){switch(me=ze,Ue=me.child,me.tag){case 0:case 11:case 14:case 15:To(4,me,me.return);break;case 1:ps(me,me.return);var Be=me.stateNode;if(typeof Be.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){kt(l,s,He)}}break;case 5:ps(me,me.return);break;case 22:if(me.memoizedState!==null){tp(ve);continue}}Ue!==null?(Ue.return=me,ze=Ue):tp(ve)}ge=ge.sibling}e:for(ge=null,ve=t;;){if(ve.tag===5){if(ge===null){ge=ve;try{c=ve.stateNode,ne?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=ve.stateNode,O=ve.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,U.style.display=Qe("display",E))}catch(He){kt(t,t.return,He)}}}else if(ve.tag===6){if(ge===null)try{ve.stateNode.nodeValue=ne?"":ve.memoizedProps}catch(He){kt(t,t.return,He)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===t)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===t)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===t)break e;ge===ve&&(ge=null),ve=ve.return}ge===ve&&(ge=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:Zn(i,t),di(t),l&4&&Zh(t);break;case 21:break;default:Zn(i,t),di(t)}}function di(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(jh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Se(c,""),l.flags&=-33);var h=Kh(t);Xu(t,h,c);break;case 3:case 4:var E=l.stateNode.containerInfo,U=Kh(t);Wu(t,U,E);break;default:throw Error(n(161))}}catch(O){kt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function d_(t,i,s){ze=t,Jh(t)}function Jh(t,i,s){for(var l=(t.mode&1)!==0;ze!==null;){var c=ze,h=c.child;if(c.tag===22&&l){var E=c.memoizedState!==null||Pa;if(!E){var U=c.alternate,O=U!==null&&U.memoizedState!==null||fn;U=Pa;var ne=fn;if(Pa=E,(fn=O)&&!ne)for(ze=c;ze!==null;)E=ze,O=E.child,E.tag===22&&E.memoizedState!==null?np(c):O!==null?(O.return=E,ze=O):np(c);for(;h!==null;)ze=h,Jh(h),h=h.sibling;ze=c,Pa=U,fn=ne}ep(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,ze=h):ep(t)}}function ep(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||La(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Kn(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&th(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}th(i,E,s)}break;case 5:var U=i.stateNode;if(s===null&&i.flags&4){s=U;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var ge=ne.memoizedState;if(ge!==null){var ve=ge.dehydrated;ve!==null&&to(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&Gu(i)}catch(me){kt(i,i.return,me)}}if(i===t){ze=null;break}if(s=i.sibling,s!==null){s.return=i.return,ze=s;break}ze=i.return}}function tp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var s=i.sibling;if(s!==null){s.return=i.return,ze=s;break}ze=i.return}}function np(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{La(4,i)}catch(O){kt(i,s,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(O){kt(i,c,O)}}var h=i.return;try{Gu(i)}catch(O){kt(i,h,O)}break;case 5:var E=i.return;try{Gu(i)}catch(O){kt(i,E,O)}}}catch(O){kt(i,i.return,O)}if(i===t){ze=null;break}var U=i.sibling;if(U!==null){U.return=i.return,ze=U;break}ze=i.return}}var h_=Math.ceil,ba=b.ReactCurrentDispatcher,Yu=b.ReactCurrentOwner,Hn=b.ReactCurrentBatchConfig,mt=0,Jt=null,Ht=null,on=0,In=0,ms=ji(0),Yt=0,wo=null,Ar=0,Da=0,qu=0,Ao=null,Sn=null,ju=0,gs=1/0,Ri=null,Ia=!1,Ku=null,er=null,Ua=!1,tr=null,Na=0,Ro=0,$u=null,Fa=-1,Oa=0;function mn(){return(mt&6)!==0?Te():Fa!==-1?Fa:Fa=Te()}function nr(t){return(t.mode&1)===0?1:(mt&2)!==0&&on!==0?on&-on:$g.transition!==null?(Oa===0&&(Oa=Kr()),Oa):(t=Et,t!==0||(t=window.event,t=t===void 0?16:rd(t.type)),t)}function Qn(t,i,s,l){if(50<Ro)throw Ro=0,$u=null,Error(n(185));Bi(t,s,l),((mt&2)===0||t!==Jt)&&(t===Jt&&((mt&2)===0&&(Da|=s),Yt===4&&ir(t,on)),Mn(t,l),s===1&&mt===0&&(i.mode&1)===0&&(gs=Te()+500,fa&&$i()))}function Mn(t,i){var s=t.callbackNode;Ks(t,i);var l=Rt(t,t===Jt?on:0);if(l===0)s!==null&&q(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&q(s),i===1)t.tag===0?Kg(rp.bind(null,t)):Gd(rp.bind(null,t)),Xg(function(){(mt&6)===0&&$i()}),s=null;else{switch($f(l)){case 1:s=je;break;case 4:s=$e;break;case 16:s=Ge;break;case 536870912:s=wt;break;default:s=Ge}s=dp(s,ip.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function ip(t,i){if(Fa=-1,Oa=0,(mt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(_s()&&t.callbackNode!==s)return null;var l=Rt(t,t===Jt?on:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=ka(t,l);else{i=l;var c=mt;mt|=2;var h=op();(Jt!==t||on!==i)&&(Ri=null,gs=Te()+500,Cr(t,i));do try{g_();break}catch(U){sp(t,U)}while(!0);pu(),ba.current=h,mt=c,Ht!==null?i=0:(Jt=null,on=0,i=Yt)}if(i!==0){if(i===2&&(c=an(t),c!==0&&(l=c,i=Zu(t,c))),i===1)throw s=wo,Cr(t,0),ir(t,l),Mn(t,Te()),s;if(i===6)ir(t,l);else{if(c=t.current.alternate,(l&30)===0&&!p_(c)&&(i=ka(t,l),i===2&&(h=an(t),h!==0&&(l=h,i=Zu(t,h))),i===1))throw s=wo,Cr(t,0),ir(t,l),Mn(t,Te()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Pr(t,Sn,Ri);break;case 3:if(ir(t,l),(l&130023424)===l&&(i=ju+500-Te(),10<i)){if(Rt(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){mn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=iu(Pr.bind(null,t,Sn,Ri),i);break}Pr(t,Sn,Ri);break;case 4:if(ir(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var E=31-Oe(l);h=1<<E,E=i[E],E>c&&(c=E),l&=~h}if(l=c,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*h_(l/1960))-l,10<l){t.timeoutHandle=iu(Pr.bind(null,t,Sn,Ri),l);break}Pr(t,Sn,Ri);break;case 5:Pr(t,Sn,Ri);break;default:throw Error(n(329))}}}return Mn(t,Te()),t.callbackNode===s?ip.bind(null,t):null}function Zu(t,i){var s=Ao;return t.current.memoizedState.isDehydrated&&(Cr(t,i).flags|=256),t=ka(t,i),t!==2&&(i=Sn,Sn=s,i!==null&&Qu(i)),t}function Qu(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function p_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!qn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ir(t,i){for(i&=~qu,i&=~Da,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-Oe(i),l=1<<s;t[s]=-1,i&=~l}}function rp(t){if((mt&6)!==0)throw Error(n(327));_s();var i=Rt(t,0);if((i&1)===0)return Mn(t,Te()),null;var s=ka(t,i);if(t.tag!==0&&s===2){var l=an(t);l!==0&&(i=l,s=Zu(t,l))}if(s===1)throw s=wo,Cr(t,0),ir(t,i),Mn(t,Te()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Pr(t,Sn,Ri),Mn(t,Te()),null}function Ju(t,i){var s=mt;mt|=1;try{return t(i)}finally{mt=s,mt===0&&(gs=Te()+500,fa&&$i())}}function Rr(t){tr!==null&&tr.tag===0&&(mt&6)===0&&_s();var i=mt;mt|=1;var s=Hn.transition,l=Et;try{if(Hn.transition=null,Et=1,t)return t()}finally{Et=l,Hn.transition=s,mt=i,(mt&6)===0&&$i()}}function ec(){In=ms.current,Lt(ms)}function Cr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Wg(s)),Ht!==null)for(s=Ht.return;s!==null;){var l=s;switch(uu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ua();break;case 3:ds(),Lt(vn),Lt(ln),Mu();break;case 5:yu(l);break;case 4:ds();break;case 13:Lt(Nt);break;case 19:Lt(Nt);break;case 10:mu(l.type._context);break;case 22:case 23:ec()}s=s.return}if(Jt=t,Ht=t=rr(t.current,null),on=In=i,Yt=0,wo=null,qu=Da=Ar=0,Sn=Ao=null,Er!==null){for(i=0;i<Er.length;i++)if(s=Er[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var E=h.next;h.next=c,l.next=E}s.pending=l}Er=null}return t}function sp(t,i){do{var s=Ht;try{if(pu(),Sa.current=wa,Ma){for(var l=Ft.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ma=!1}if(wr=0,Qt=Xt=Ft=null,xo=!1,yo=0,Yu.current=null,s===null||s.return===null){Yt=1,wo=i,Ht=null;break}e:{var h=t,E=s.return,U=s,O=i;if(i=on,U.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ne=O,ge=U,ve=ge.tag;if((ge.mode&1)===0&&(ve===0||ve===11||ve===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ue=Lh(E);if(Ue!==null){Ue.flags&=-257,bh(Ue,E,U,h,i),Ue.mode&1&&Ph(h,ne,i),i=Ue,O=ne;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(O),i.updateQueue=He}else Be.add(O);break e}else{if((i&1)===0){Ph(h,ne,i),tc();break e}O=Error(n(426))}}else if(It&&U.mode&1){var zt=Lh(E);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),bh(zt,E,U,h,i),du(hs(O,U));break e}}h=O=hs(O,U),Yt!==4&&(Yt=2),Ao===null?Ao=[h]:Ao.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var j=Rh(h,O,i);eh(h,j);break e;case 1:U=O;var H=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(er===null||!er.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Me=Ch(h,U,i);eh(h,Me);break e}}h=h.return}while(h!==null)}lp(s)}catch(We){i=We,Ht===s&&s!==null&&(Ht=s=s.return);continue}break}while(!0)}function op(){var t=ba.current;return ba.current=wa,t===null?wa:t}function tc(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),Jt===null||(Ar&268435455)===0&&(Da&268435455)===0||ir(Jt,on)}function ka(t,i){var s=mt;mt|=2;var l=op();(Jt!==t||on!==i)&&(Ri=null,Cr(t,i));do try{m_();break}catch(c){sp(t,c)}while(!0);if(pu(),mt=s,ba.current=l,Ht!==null)throw Error(n(261));return Jt=null,on=0,Yt}function m_(){for(;Ht!==null;)ap(Ht)}function g_(){for(;Ht!==null&&!Ee();)ap(Ht)}function ap(t){var i=fp(t.alternate,t,In);t.memoizedProps=t.pendingProps,i===null?lp(t):Ht=i,Yu.current=null}function lp(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=l_(s,i,In),s!==null){Ht=s;return}}else{if(s=u_(s,i),s!==null){s.flags&=32767,Ht=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Ht=null;return}}if(i=i.sibling,i!==null){Ht=i;return}Ht=i=t}while(i!==null);Yt===0&&(Yt=5)}function Pr(t,i,s){var l=Et,c=Hn.transition;try{Hn.transition=null,Et=1,__(t,i,s,l)}finally{Hn.transition=c,Et=l}return null}function __(t,i,s,l){do _s();while(tr!==null);if((mt&6)!==0)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(Zm(t,h),t===Jt&&(Ht=Jt=null,on=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ua||(Ua=!0,dp(Ge,function(){return _s(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=Hn.transition,Hn.transition=null;var E=Et;Et=1;var U=mt;mt|=4,Yu.current=null,f_(t,s),Qh(s,t),Og(tu),Ko=!!eu,tu=eu=null,t.current=s,d_(s),De(),mt=U,Et=E,Hn.transition=h}else t.current=s;if(Ua&&(Ua=!1,tr=t,Na=c),h=t.pendingLanes,h===0&&(er=null),_t(s.stateNode),Mn(t,Te()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ia)throw Ia=!1,t=Ku,Ku=null,t;return(Na&1)!==0&&t.tag!==0&&_s(),h=t.pendingLanes,(h&1)!==0?t===$u?Ro++:(Ro=0,$u=t):Ro=0,$i(),null}function _s(){if(tr!==null){var t=$f(Na),i=Hn.transition,s=Et;try{if(Hn.transition=null,Et=16>t?16:t,tr===null)var l=!1;else{if(t=tr,tr=null,Na=0,(mt&6)!==0)throw Error(n(331));var c=mt;for(mt|=4,ze=t.current;ze!==null;){var h=ze,E=h.child;if((ze.flags&16)!==0){var U=h.deletions;if(U!==null){for(var O=0;O<U.length;O++){var ne=U[O];for(ze=ne;ze!==null;){var ge=ze;switch(ge.tag){case 0:case 11:case 15:To(8,ge,h)}var ve=ge.child;if(ve!==null)ve.return=ge,ze=ve;else for(;ze!==null;){ge=ze;var me=ge.sibling,Ue=ge.return;if(qh(ge),ge===ne){ze=null;break}if(me!==null){me.return=Ue,ze=me;break}ze=Ue}}}var Be=h.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var zt=He.sibling;He.sibling=null,He=zt}while(He!==null)}}ze=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,ze=E;else e:for(;ze!==null;){if(h=ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:To(9,h,h.return)}var j=h.sibling;if(j!==null){j.return=h.return,ze=j;break e}ze=h.return}}var H=t.current;for(ze=H;ze!==null;){E=ze;var $=E.child;if((E.subtreeFlags&2064)!==0&&$!==null)$.return=E,ze=$;else e:for(E=H;ze!==null;){if(U=ze,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:La(9,U)}}catch(We){kt(U,U.return,We)}if(U===E){ze=null;break e}var Me=U.sibling;if(Me!==null){Me.return=U.return,ze=Me;break e}ze=U.return}}if(mt=c,$i(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(At,t)}catch{}l=!0}return l}finally{Et=s,Hn.transition=i}}return!1}function up(t,i,s){i=hs(s,i),i=Rh(t,i,1),t=Qi(t,i,1),i=mn(),t!==null&&(Bi(t,1,i),Mn(t,i))}function kt(t,i,s){if(t.tag===3)up(t,t,s);else for(;i!==null;){if(i.tag===3){up(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(er===null||!er.has(l))){t=hs(s,t),t=Ch(i,t,1),i=Qi(i,t,1),t=mn(),i!==null&&(Bi(i,1,t),Mn(i,t));break}}i=i.return}}function v_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=mn(),t.pingedLanes|=t.suspendedLanes&s,Jt===t&&(on&s)===s&&(Yt===4||Yt===3&&(on&130023424)===on&&500>Te()-ju?Cr(t,0):qu|=s),Mn(t,i)}function cp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Zt,Zt<<=1,(Zt&130023424)===0&&(Zt=4194304)));var s=mn();t=Ti(t,i),t!==null&&(Bi(t,i,s),Mn(t,s))}function x_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),cp(t,s)}function y_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),cp(t,s)}var fp;fp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||vn.current)yn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return yn=!1,a_(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,It&&(i.flags&1048576)!==0&&Wd(i,ha,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ca(t,i),t=i.pendingProps;var c=ss(i,ln.current);fs(i,s),c=wu(null,i,l,t,c,s);var h=Au();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,xn(l)?(h=!0,ca(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,vu(i),c.updater=Aa,i.stateNode=c,c._reactInternals=i,Du(i,l,t,s),i=Fu(null,i,l,!0,h,s)):(i.tag=0,It&&h&&lu(i),pn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ca(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=M_(l),t=Kn(l,t),c){case 0:i=Nu(null,i,l,t,s);break e;case 1:i=Oh(null,i,l,t,s);break e;case 11:i=Dh(null,i,l,t,s);break e;case 14:i=Ih(null,i,l,Kn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Nu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Oh(t,i,l,c,s);case 3:e:{if(kh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Jd(t,i),xa(i,l,null,s);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=hs(Error(n(423)),i),i=zh(t,i,l,s,c);break e}else if(l!==c){c=hs(Error(n(424)),i),i=zh(t,i,l,s,c);break e}else for(Dn=qi(i.stateNode.containerInfo.firstChild),bn=i,It=!0,jn=null,s=Zd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ls(),l===c){i=Ai(t,i,s);break e}pn(t,i,l,s)}i=i.child}return i;case 5:return nh(i),t===null&&fu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,E=c.children,nu(l,c)?E=null:h!==null&&nu(l,h)&&(i.flags|=32),Fh(t,i),pn(t,i,E,s),i.child;case 6:return t===null&&fu(i),null;case 13:return Bh(t,i,s);case 4:return xu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=us(i,null,l,s):pn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Dh(t,i,l,c,s);case 7:return pn(t,i,i.pendingProps,s),i.child;case 8:return pn(t,i,i.pendingProps.children,s),i.child;case 12:return pn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,E=c.value,Ct(ga,l._currentValue),l._currentValue=E,h!==null)if(qn(h.value,E)){if(h.children===c.children&&!vn.current){i=Ai(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){E=h.child;for(var O=U.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=wi(-1,s&-s),O.tag=2;var ne=h.updateQueue;if(ne!==null){ne=ne.shared;var ge=ne.pending;ge===null?O.next=O:(O.next=ge.next,ge.next=O),ne.pending=O}}h.lanes|=s,O=h.alternate,O!==null&&(O.lanes|=s),gu(h.return,s,i),U.lanes|=s;break}O=O.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=s,U=E.alternate,U!==null&&(U.lanes|=s),gu(E,s,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}pn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,fs(i,s),c=zn(c),l=l(c),i.flags|=1,pn(t,i,l,s),i.child;case 14:return l=i.type,c=Kn(l,i.pendingProps),c=Kn(l.type,c),Ih(t,i,l,c,s);case 15:return Uh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Ca(t,i),i.tag=1,xn(l)?(t=!0,ca(i)):t=!1,fs(i,s),wh(i,l,c),Du(i,l,c,s),Fu(null,i,l,!0,t,s);case 19:return Vh(t,i,s);case 22:return Nh(t,i,s)}throw Error(n(156,i.tag))};function dp(t,i){return te(t,i)}function S_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,i,s,l){return new S_(t,i,s,l)}function nc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function M_(t){if(typeof t=="function")return nc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===G)return 11;if(t===ue)return 14}return 2}function rr(t,i){var s=t.alternate;return s===null?(s=Vn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function za(t,i,s,l,c,h){var E=2;if(l=t,typeof t=="function")nc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case I:return Lr(s.children,c,h,i);case k:E=8,c|=8;break;case le:return t=Vn(12,s,i,c|2),t.elementType=le,t.lanes=h,t;case W:return t=Vn(13,s,i,c),t.elementType=W,t.lanes=h,t;case ie:return t=Vn(19,s,i,c),t.elementType=ie,t.lanes=h,t;case oe:return Ba(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M:E=10;break e;case A:E=9;break e;case G:E=11;break e;case ue:E=14;break e;case K:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Vn(E,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Lr(t,i,s,l){return t=Vn(7,t,l,i),t.lanes=s,t}function Ba(t,i,s,l){return t=Vn(22,t,l,i),t.elementType=oe,t.lanes=s,t.stateNode={isHidden:!1},t}function ic(t,i,s){return t=Vn(6,t,null,i),t.lanes=s,t}function rc(t,i,s){return i=Vn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function E_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$s(0),this.expirationTimes=$s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function sc(t,i,s,l,c,h,E,U,O){return t=new E_(t,i,s,U,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Vn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(h),t}function T_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function hp(t){if(!t)return Ki;t=t._reactInternals;e:{if(vi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(xn(s))return Hd(t,s,i)}return i}function pp(t,i,s,l,c,h,E,U,O){return t=sc(s,l,!0,t,c,h,E,U,O),t.context=hp(null),s=t.current,l=mn(),c=nr(s),h=wi(l,c),h.callback=i??null,Qi(s,h,c),t.current.lanes=c,Bi(t,c,l),Mn(t,l),t}function Ha(t,i,s,l){var c=i.current,h=mn(),E=nr(c);return s=hp(s),i.context===null?i.context=s:i.pendingContext=s,i=wi(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Qi(c,i,E),t!==null&&(Qn(t,c,E,h),va(t,c,E)),E}function Va(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function oc(t,i){mp(t,i),(t=t.alternate)&&mp(t,i)}function w_(){return null}var gp=typeof reportError=="function"?reportError:function(t){console.error(t)};function ac(t){this._internalRoot=t}Ga.prototype.render=ac.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ha(t,i,null,null)},Ga.prototype.unmount=ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Rr(function(){Ha(null,t,null,null)}),i[yi]=null}};function Ga(t){this._internalRoot=t}Ga.prototype.unstable_scheduleHydration=function(t){if(t){var i=Jf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Wi.length&&i!==0&&i<Wi[s].priority;s++);Wi.splice(s,0,t),s===0&&nd(t)}};function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _p(){}function A_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var ne=Va(E);h.call(ne)}}var E=pp(i,l,t,0,null,!1,!1,"",_p);return t._reactRootContainer=E,t[yi]=E.current,co(t.nodeType===8?t.parentNode:t),Rr(),E}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var U=l;l=function(){var ne=Va(O);U.call(ne)}}var O=sc(t,0,!1,null,null,!1,!1,"",_p);return t._reactRootContainer=O,t[yi]=O.current,co(t.nodeType===8?t.parentNode:t),Rr(function(){Ha(i,O,s,l)}),O}function Xa(t,i,s,l,c){var h=s._reactRootContainer;if(h){var E=h;if(typeof c=="function"){var U=c;c=function(){var O=Va(E);U.call(O)}}Ha(i,E,t,c)}else E=A_(s,i,t,c,l);return Va(E)}Zf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=xi(i.pendingLanes);s!==0&&(Dl(i,s|1),Mn(i,Te()),(mt&6)===0&&(gs=Te()+500,$i()))}break;case 13:Rr(function(){var l=Ti(t,1);if(l!==null){var c=mn();Qn(l,t,1,c)}}),oc(t,1)}},Il=function(t){if(t.tag===13){var i=Ti(t,134217728);if(i!==null){var s=mn();Qn(i,t,134217728,s)}oc(t,134217728)}},Qf=function(t){if(t.tag===13){var i=nr(t),s=Ti(t,i);if(s!==null){var l=mn();Qn(s,t,i,l)}oc(t,i)}},Jf=function(){return Et},ed=function(t,i){var s=Et;try{return Et=t,i()}finally{Et=s}},ae=function(t,i,s){switch(i){case"input":if(Ke(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=la(l);if(!c)throw Error(n(90));lt(l),Ke(l,c)}}}break;case"textarea":_e(t,s);break;case"select":i=s.value,i!=null&&w(t,!!s.multiple,i,!1)}},rn=Ju,ht=Rr;var R_={usingClientEntryPoint:!1,Events:[po,is,la,ct,Ut,Ju]},Co={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C_={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=X(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||w_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{At=Ya.inject(C_),Dt=Ya}catch{}}return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_,En.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(i))throw Error(n(200));return T_(t,i,null,s)},En.createRoot=function(t,i){if(!lc(t))throw Error(n(299));var s=!1,l="",c=gp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=sc(t,1,!1,null,null,s,!1,l,c),t[yi]=i.current,co(t.nodeType===8?t.parentNode:t),new ac(i)},En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=X(i),t=t===null?null:t.stateNode,t},En.flushSync=function(t){return Rr(t)},En.hydrate=function(t,i,s){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!0,s)},En.hydrateRoot=function(t,i,s){if(!lc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",E=gp;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(E=s.onRecoverableError)),i=pp(i,null,t,1,s??null,c,!1,h,E),t[yi]=i.current,co(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Ga(i)},En.render=function(t,i,s){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!1,s)},En.unmountComponentAtNode=function(t){if(!Wa(t))throw Error(n(40));return t._reactRootContainer?(Rr(function(){Xa(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1},En.unstable_batchedUpdates=Ju,En.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Wa(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Xa(t,i,s,!1,l)},En.version="18.3.1-next-f1338f8080-20240426",En}var wp;function F_(){if(wp)return fc.exports;wp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),fc.exports=N_(),fc.exports}var Ap;function O_(){if(Ap)return qa;Ap=1;var o=F_();return qa.createRoot=o.createRoot,qa.hydrateRoot=o.hydrateRoot,qa}var k_=O_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="169",z_=0,Rp=1,B_=2,Sm=1,H_=2,Ii=3,mr=0,An=1,Ui=2,hr=0,Ns=1,Cp=2,Pp=3,Lp=4,V_=5,zr=100,G_=101,W_=102,X_=103,Y_=104,q_=200,j_=201,K_=202,$_=203,Xc=204,Yc=205,Z_=206,Q_=207,J_=208,ev=209,tv=210,nv=211,iv=212,rv=213,sv=214,qc=0,jc=1,Kc=2,ks=3,$c=4,Zc=5,Qc=6,Jc=7,Cl=0,ov=1,av=2,pr=0,lv=1,uv=2,cv=3,fv=4,dv=5,hv=6,pv=7,Mm=300,zs=301,Bs=302,ef=303,tf=304,Pl=306,nf=1e3,Vr=1001,rf=1002,Xn=1003,mv=1004,ja=1005,ii=1006,pc=1007,Gr=1008,Oi=1009,Em=1010,Tm=1011,Oo=1012,Nf=1013,Wr=1014,Ni=1015,ko=1016,Ff=1017,Of=1018,Hs=1020,wm=35902,Am=1021,Rm=1022,si=1023,Cm=1024,Pm=1025,Fs=1026,Vs=1027,Lm=1028,kf=1029,bm=1030,zf=1031,Bf=1033,gl=33776,_l=33777,vl=33778,xl=33779,sf=35840,of=35841,af=35842,lf=35843,uf=36196,cf=37492,ff=37496,df=37808,hf=37809,pf=37810,mf=37811,gf=37812,_f=37813,vf=37814,xf=37815,yf=37816,Sf=37817,Mf=37818,Ef=37819,Tf=37820,wf=37821,yl=36492,Af=36494,Rf=36495,Dm=36283,Cf=36284,Pf=36285,Lf=36286,gv=3200,_v=3201,Hf=0,vv=1,dr="",pi="srgb",_r="srgb-linear",Vf="display-p3",Ll="display-p3-linear",El="linear",bt="srgb",Tl="rec709",wl="p3",vs=7680,bp=519,xv=512,yv=513,Sv=514,Im=515,Mv=516,Ev=517,Tv=518,wv=519,Dp=35044,Ip="300 es",Fi=2e3,Al=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=Math.PI/180,bf=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[o&255]+dn[o>>8&255]+dn[o>>16&255]+dn[o>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function wn(o,e,n){return Math.max(e,Math.min(n,o))}function Av(o,e){return(o%e+e)%e}function gc(o,e,n){return(1-n)*o+n*e}function Lo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Tn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,n=0){gt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,n,r,a,u,f,d,p,m){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],y=r[7],x=r[2],S=r[5],T=r[8],R=a[0],g=a[3],v=a[6],L=a[1],P=a[4],b=a[7],Y=a[2],F=a[5],I=a[8];return u[0]=f*R+d*L+p*Y,u[3]=f*g+d*P+p*F,u[6]=f*v+d*b+p*I,u[1]=m*R+_*L+y*Y,u[4]=m*g+_*P+y*F,u[7]=m*v+_*b+y*I,u[2]=x*R+S*L+T*Y,u[5]=x*g+S*P+T*F,u[8]=x*v+S*b+T*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],y=_*f-d*m,x=d*p-_*u,S=m*u-f*p,T=n*y+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=y*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*f)*R,e[3]=x*R,e[4]=(_*n-a*p)*R,e[5]=(a*u-d*n)*R,e[6]=S*R,e[7]=(r*p-m*n)*R,e[8]=(f*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(_c.makeScale(e,n)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,n){return this.premultiply(_c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new rt;function Um(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Rl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Rv(){const o=Rl("canvas");return o.style.display="block",o}const Up={};function Sl(o){o in Up||(Up[o]=!0,console.warn(o))}function Cv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Pv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Np=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fp=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[_r]:{transfer:El,primaries:Tl,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[pi]:{transfer:bt,primaries:Tl,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Ll]:{transfer:El,primaries:wl,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(Fp),fromReference:o=>o.applyMatrix3(Np)},[Vf]:{transfer:bt,primaries:wl,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(Fp),fromReference:o=>o.applyMatrix3(Np).convertLinearToSRGB()}},bv=new Set([_r,Ll]),Mt={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!bv.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=bo[e].toReference,a=bo[n].fromReference;return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return bo[o].primaries},getTransfer:function(o){return o===dr?El:bo[o].transfer},getLuminanceCoefficients:function(o,e=this._workingColorSpace){return o.fromArray(bo[e].luminanceCoefficients)}};function Os(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xs;class Dv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Rl("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Os(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Os(n[r]/255)*255):n[r]=Os(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Iv=0;class Nm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(xc(a[f].image)):u.push(xc(a[f]))}else u=xc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function xc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Dv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uv=0;class Rn extends Ws{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Vr,a=Vr,u=ii,f=Gr,d=si,p=Oi,m=Rn.DEFAULT_ANISOTROPY,_=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=zo(),this.name="",this.source=new Nm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nf:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nf:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Mm;Rn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,n=0,r=0,a=1){Bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],y=p[8],x=p[1],S=p[5],T=p[9],R=p[2],g=p[6],v=p[10];if(Math.abs(_-x)<.01&&Math.abs(y-R)<.01&&Math.abs(T-g)<.01){if(Math.abs(_+x)<.1&&Math.abs(y+R)<.1&&Math.abs(T+g)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,b=(S+1)/2,Y=(v+1)/2,F=(_+x)/4,I=(y+R)/4,k=(T+g)/4;return P>b&&P>Y?P<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(P),a=F/r,u=I/r):b>Y?b<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(b),r=F/a,u=k/a):Y<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(Y),r=I/u,a=k/u),this.set(r,a,u,n),this}let L=Math.sqrt((g-T)*(g-T)+(y-R)*(y-R)+(x-_)*(x-_));return Math.abs(L)<.001&&(L=1),this.x=(g-T)/L,this.y=(y-R)/L,this.z=(x-_)/L,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nv extends Ws{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Rn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Nm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends Nv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Fm extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fv extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];const x=u[f+0],S=u[f+1],T=u[f+2],R=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=R;return}if(y!==R||p!==x||m!==S||_!==T){let g=1-d;const v=p*x+m*S+_*T+y*R,L=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const Y=Math.sqrt(P),F=Math.atan2(Y,v*L);g=Math.sin(g*F)/Y,d=Math.sin(d*F)/Y}const b=d*L;if(p=p*g+x*b,m=m*g+S*b,_=_*g+T*b,y=y*g+R*b,g===1-d){const Y=1/Math.sqrt(p*p+m*m+_*_+y*y);p*=Y,m*=Y,_*=Y,y*=Y}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],y=u[f],x=u[f+1],S=u[f+2],T=u[f+3];return e[n]=d*T+_*y+p*S-m*x,e[n+1]=p*T+_*x+m*y-d*S,e[n+2]=m*T+_*S+d*x-p*y,e[n+3]=_*T-d*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),y=d(u/2),x=p(r/2),S=p(a/2),T=p(u/2);switch(f){case"XYZ":this._x=x*_*y+m*S*T,this._y=m*S*y-x*_*T,this._z=m*_*T+x*S*y,this._w=m*_*y-x*S*T;break;case"YXZ":this._x=x*_*y+m*S*T,this._y=m*S*y-x*_*T,this._z=m*_*T-x*S*y,this._w=m*_*y+x*S*T;break;case"ZXY":this._x=x*_*y-m*S*T,this._y=m*S*y+x*_*T,this._z=m*_*T+x*S*y,this._w=m*_*y-x*S*T;break;case"ZYX":this._x=x*_*y-m*S*T,this._y=m*S*y+x*_*T,this._z=m*_*T-x*S*y,this._w=m*_*y+x*S*T;break;case"YZX":this._x=x*_*y+m*S*T,this._y=m*S*y+x*_*T,this._z=m*_*T-x*S*y,this._w=m*_*y-x*S*T;break;case"XZY":this._x=x*_*y-m*S*T,this._y=m*S*y-x*_*T,this._z=m*_*T+x*S*y,this._w=m*_*y+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],y=n[10],x=r+d+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(_-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),y=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),y=2*(u*r-f*n);return this.x=n+p*m+f*y-d*_,this.y=r+p*_+d*m-u*y,this.z=a+p*y+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new Q,Op=new Bo;class Ho{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Jn):Jn.fromBufferAttribute(u,f),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ka.copy(r.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),$a.subVectors(this.max,Do),ys.subVectors(e.a,Do),Ss.subVectors(e.b,Do),Ms.subVectors(e.c,Do),or.subVectors(Ss,ys),ar.subVectors(Ms,Ss),br.subVectors(ys,Ms);let n=[0,-or.z,or.y,0,-ar.z,ar.y,0,-br.z,br.y,or.z,0,-or.x,ar.z,0,-ar.x,br.z,0,-br.x,-or.y,or.x,0,-ar.y,ar.x,0,-br.y,br.x,0];return!Sc(n,ys,Ss,Ms,$a)||(n=[1,0,0,0,1,0,0,0,1],!Sc(n,ys,Ss,Ms,$a))?!1:(Za.crossVectors(or,ar),n=[Za.x,Za.y,Za.z],Sc(n,ys,Ss,Ms,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Jn=new Q,Ka=new Ho,ys=new Q,Ss=new Q,Ms=new Q,or=new Q,ar=new Q,br=new Q,Do=new Q,$a=new Q,Za=new Q,Dr=new Q;function Sc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Dr.fromArray(o,u);const d=a.x*Math.abs(Dr.x)+a.y*Math.abs(Dr.y)+a.z*Math.abs(Dr.z),p=e.dot(Dr),m=n.dot(Dr),_=r.dot(Dr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const Ov=new Ho,Io=new Q,Mc=new Q;class Gf{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Ov.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const n=Io.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Io,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Mc)),this.expandByPoint(Io.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new Q,Ec=new Q,Qa=new Q,lr=new Q,Tc=new Q,Ja=new Q,wc=new Q;class kv{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ec.copy(e).add(n).multiplyScalar(.5),Qa.copy(n).sub(e).normalize(),lr.copy(this.origin).sub(Ec);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Qa),d=lr.dot(this.direction),p=-lr.dot(Qa),m=lr.lengthSq(),_=Math.abs(1-f*f);let y,x,S,T;if(_>0)if(y=f*p-d,x=f*d-p,T=u*_,y>=0)if(x>=-T)if(x<=T){const R=1/_;y*=R,x*=R,S=y*(y+f*x+2*d)+x*(f*y+x+2*p)+m}else x=u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x=-u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x<=-T?(y=Math.max(0,-(-f*u+d)),x=y>0?-u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m):x<=T?(y=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(y=Math.max(0,-(f*u+d)),x=y>0?u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m);else x=f>0?-u:u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Ec).addScaledVector(Qa,x),S}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const r=Pi.dot(this.direction),a=Pi.dot(Pi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),y>=0?(d=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,r,a,u){Tc.subVectors(n,e),Ja.subVectors(r,e),wc.crossVectors(Tc,Ja);let f=this.direction.dot(wc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;lr.subVectors(this.origin,e);const p=d*this.direction.dot(Ja.crossVectors(lr,Ja));if(p<0)return null;const m=d*this.direction.dot(Tc.cross(lr));if(m<0||p+m>f)return null;const _=-d*lr.dot(wc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,r,a,u,f,d,p,m,_,y,x,S,T,R,g){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,y,x,S,T,R,g)}set(e,n,r,a,u,f,d,p,m,_,y,x,S,T,R,g){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=u,v[5]=f,v[9]=d,v[13]=p,v[2]=m,v[6]=_,v[10]=y,v[14]=x,v[3]=S,v[7]=T,v[11]=R,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Es.setFromMatrixColumn(e,0).length(),u=1/Es.setFromMatrixColumn(e,1).length(),f=1/Es.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=f*_,S=f*y,T=d*_,R=d*y;n[0]=p*_,n[4]=-p*y,n[8]=m,n[1]=S+T*m,n[5]=x-R*m,n[9]=-d*p,n[2]=R-x*m,n[6]=T+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*_,S=p*y,T=m*_,R=m*y;n[0]=x+R*d,n[4]=T*d-S,n[8]=f*m,n[1]=f*y,n[5]=f*_,n[9]=-d,n[2]=S*d-T,n[6]=R+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*_,S=p*y,T=m*_,R=m*y;n[0]=x-R*d,n[4]=-f*y,n[8]=T+S*d,n[1]=S+T*d,n[5]=f*_,n[9]=R-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*_,S=f*y,T=d*_,R=d*y;n[0]=p*_,n[4]=T*m-S,n[8]=x*m+R,n[1]=p*y,n[5]=R*m+x,n[9]=S*m-T,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,T=d*p,R=d*m;n[0]=p*_,n[4]=R-x*y,n[8]=T*y+S,n[1]=y,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*y+T,n[10]=x-R*y}else if(e.order==="XZY"){const x=f*p,S=f*m,T=d*p,R=d*m;n[0]=p*_,n[4]=-y,n[8]=m*_,n[1]=x*y+R,n[5]=f*_,n[9]=S*y-T,n[2]=T*y-S,n[6]=d*_,n[10]=R*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zv,e,Bv)}lookAt(e,n,r){const a=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ur.crossVectors(r,Un),ur.lengthSq()===0&&(Math.abs(r.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ur.crossVectors(r,Un)),ur.normalize(),el.crossVectors(Un,ur),a[0]=ur.x,a[4]=el.x,a[8]=Un.x,a[1]=ur.y,a[5]=el.y,a[9]=Un.y,a[2]=ur.z,a[6]=el.z,a[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],y=r[5],x=r[9],S=r[13],T=r[2],R=r[6],g=r[10],v=r[14],L=r[3],P=r[7],b=r[11],Y=r[15],F=a[0],I=a[4],k=a[8],le=a[12],M=a[1],A=a[5],G=a[9],W=a[13],ie=a[2],ue=a[6],K=a[10],oe=a[14],z=a[3],fe=a[7],se=a[11],N=a[15];return u[0]=f*F+d*M+p*ie+m*z,u[4]=f*I+d*A+p*ue+m*fe,u[8]=f*k+d*G+p*K+m*se,u[12]=f*le+d*W+p*oe+m*N,u[1]=_*F+y*M+x*ie+S*z,u[5]=_*I+y*A+x*ue+S*fe,u[9]=_*k+y*G+x*K+S*se,u[13]=_*le+y*W+x*oe+S*N,u[2]=T*F+R*M+g*ie+v*z,u[6]=T*I+R*A+g*ue+v*fe,u[10]=T*k+R*G+g*K+v*se,u[14]=T*le+R*W+g*oe+v*N,u[3]=L*F+P*M+b*ie+Y*z,u[7]=L*I+P*A+b*ue+Y*fe,u[11]=L*k+P*G+b*K+Y*se,u[15]=L*le+P*W+b*oe+Y*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],y=e[6],x=e[10],S=e[14],T=e[3],R=e[7],g=e[11],v=e[15];return T*(+u*p*y-a*m*y-u*d*x+r*m*x+a*d*S-r*p*S)+R*(+n*p*S-n*m*x+u*f*x-a*f*S+a*m*_-u*p*_)+g*(+n*m*y-n*d*S-u*f*y+r*f*S+u*d*_-r*m*_)+v*(-a*d*_-n*p*y+n*d*x+a*f*y-r*f*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],y=e[9],x=e[10],S=e[11],T=e[12],R=e[13],g=e[14],v=e[15],L=y*g*m-R*x*m+R*p*S-d*g*S-y*p*v+d*x*v,P=T*x*m-_*g*m-T*p*S+f*g*S+_*p*v-f*x*v,b=_*R*m-T*y*m+T*d*S-f*R*S-_*d*v+f*y*v,Y=T*y*p-_*R*p-T*d*x+f*R*x+_*d*g-f*y*g,F=n*L+r*P+a*b+u*Y;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=L*I,e[1]=(R*x*u-y*g*u-R*a*S+r*g*S+y*a*v-r*x*v)*I,e[2]=(d*g*u-R*p*u+R*a*m-r*g*m-d*a*v+r*p*v)*I,e[3]=(y*p*u-d*x*u-y*a*m+r*x*m+d*a*S-r*p*S)*I,e[4]=P*I,e[5]=(_*g*u-T*x*u+T*a*S-n*g*S-_*a*v+n*x*v)*I,e[6]=(T*p*u-f*g*u-T*a*m+n*g*m+f*a*v-n*p*v)*I,e[7]=(f*x*u-_*p*u+_*a*m-n*x*m-f*a*S+n*p*S)*I,e[8]=b*I,e[9]=(T*y*u-_*R*u-T*r*S+n*R*S+_*r*v-n*y*v)*I,e[10]=(f*R*u-T*d*u+T*r*m-n*R*m-f*r*v+n*d*v)*I,e[11]=(_*d*u-f*y*u-_*r*m+n*y*m+f*r*S-n*d*S)*I,e[12]=Y*I,e[13]=(_*R*a-T*y*a+T*r*x-n*R*x-_*r*g+n*y*g)*I,e[14]=(T*d*a-f*R*a-T*r*p+n*R*p+f*r*g-n*d*g)*I,e[15]=(f*y*a-_*d*a+_*r*p-n*y*p-f*r*x+n*d*x)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,y=d+d,x=u*m,S=u*_,T=u*y,R=f*_,g=f*y,v=d*y,L=p*m,P=p*_,b=p*y,Y=r.x,F=r.y,I=r.z;return a[0]=(1-(R+v))*Y,a[1]=(S+b)*Y,a[2]=(T-P)*Y,a[3]=0,a[4]=(S-b)*F,a[5]=(1-(x+v))*F,a[6]=(g+L)*F,a[7]=0,a[8]=(T+P)*I,a[9]=(g-L)*I,a[10]=(1-(x+R))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Es.set(a[0],a[1],a[2]).length();const f=Es.set(a[4],a[5],a[6]).length(),d=Es.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ei.copy(this);const m=1/u,_=1/f,y=1/d;return ei.elements[0]*=m,ei.elements[1]*=m,ei.elements[2]*=m,ei.elements[4]*=_,ei.elements[5]*=_,ei.elements[6]*=_,ei.elements[8]*=y,ei.elements[9]*=y,ei.elements[10]*=y,n.setFromRotationMatrix(ei),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Fi){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,T;if(d===Fi)S=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===Al)S=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Fi){const p=this.elements,m=1/(n-e),_=1/(r-a),y=1/(f-u),x=(n+e)*m,S=(r+a)*_;let T,R;if(d===Fi)T=(f+u)*y,R=-2*y;else if(d===Al)T=u*y,R=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Es=new Q,ei=new Gt,zv=new Q(0,0,0),Bv=new Q(1,1,1),ur=new Q,el=new Q,Un=new Q,kp=new Gt,zp=new Bo;class oi{constructor(e=0,n=0,r=0,a=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(wn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-wn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(wn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Om{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hv=0;const Bp=new Q,Ts=new Bo,Li=new Gt,tl=new Q,Uo=new Q,Vv=new Q,Gv=new Bo,Hp=new Q(1,0,0),Vp=new Q(0,1,0),Gp=new Q(0,0,1),Wp={type:"added"},Wv={type:"removed"},ws={type:"childadded",child:null},Ac={type:"childremoved",child:null};class _n extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new Q,n=new oi,r=new Bo,a=new Q(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new rt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,n){return Bp.copy(e).applyQuaternion(this.quaternion),this.position.add(Bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?tl.copy(e):tl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Uo,tl,this.up):Li.lookAt(tl,Uo,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),Ts.setFromRotationMatrix(Li),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wp),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Wv),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wp),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,Vv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,Gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),y=f(e.shapes),x=f(e.skeletons),S=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}_n.DEFAULT_UP=new Q(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new Q,bi=new Q,Rc=new Q,Di=new Q,As=new Q,Rs=new Q,Xp=new Q,Cc=new Q,Pc=new Q,Lc=new Q,bc=new Bt,Dc=new Bt,Ic=new Bt;class ri{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ti.subVectors(e,n),a.cross(ti);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ti.subVectors(a,n),bi.subVectors(r,n),Rc.subVectors(e,n);const f=ti.dot(ti),d=ti.dot(bi),p=ti.dot(Rc),m=bi.dot(bi),_=bi.dot(Rc),y=f*m-d*d;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(m*p-d*_)*x,T=(f*_-d*p)*x;return u.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Di)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Di.x),p.addScaledVector(f,Di.y),p.addScaledVector(d,Di.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return bc.setScalar(0),Dc.setScalar(0),Ic.setScalar(0),bc.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,r),Ic.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(bc,u.x),f.addScaledVector(Dc,u.y),f.addScaledVector(Ic,u.z),f}static isFrontFacing(e,n,r,a){return ti.subVectors(r,n),bi.subVectors(e,n),ti.cross(bi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ti.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ri.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;As.subVectors(a,r),Rs.subVectors(u,r),Cc.subVectors(e,r);const p=As.dot(Cc),m=Rs.dot(Cc);if(p<=0&&m<=0)return n.copy(r);Pc.subVectors(e,a);const _=As.dot(Pc),y=Rs.dot(Pc);if(_>=0&&y<=_)return n.copy(a);const x=p*y-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(As,f);Lc.subVectors(e,u);const S=As.dot(Lc),T=Rs.dot(Lc);if(T>=0&&S<=T)return n.copy(u);const R=S*m-p*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Rs,d);const g=_*T-S*y;if(g<=0&&y-_>=0&&S-T>=0)return Xp.subVectors(u,a),d=(y-_)/(y-_+(S-T)),n.copy(a).addScaledVector(Xp,d);const v=1/(g+R+x);return f=R*v,d=x*v,n.copy(r).addScaledVector(As,f).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},nl={h:0,s:0,l:0};function Uc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class at{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Av(e,1),n=wn(n,0,1),r=wn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Uc(f,u,e+1/3),this.g=Uc(f,u,e),this.b=Uc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=pi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pi){const r=km[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=vc(e.r),this.g=vc(e.g),this.b=vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Mt.fromWorkingColorSpace(hn.copy(this),e),Math.round(wn(hn.r*255,0,255))*65536+Math.round(wn(hn.g*255,0,255))*256+Math.round(wn(hn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(hn.copy(this),n);const r=hn.r,a=hn.g,u=hn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const y=f-d;switch(m=_<=.5?y/(f+d):y/(2-f-d),f){case r:p=(a-u)/y+(a<u?6:0);break;case a:p=(u-r)/y+2;break;case u:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=pi){Mt.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,a=hn.b;return e!==pi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+n,cr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(cr),e.getHSL(nl);const r=gc(cr.h,nl.h,n),a=gc(cr.s,nl.s,n),u=gc(cr.l,nl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new at;at.NAMES=km;let Xv=0;class Xs extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=Ns,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=Yc,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xc&&(r.blendSrc=this.blendSrc),this.blendDst!==Yc&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wf extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new Q,il=new gt;class gi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Dp,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Tn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array),u=Tn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dp&&(e.usage=this.usage),e}}class zm extends gi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Bm extends gi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class qt extends gi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Yv=0;const Gn=new Gt,Nc=new _n,Cs=new Q,Nn=new Ho,No=new Ho,tn=new Q;class ai extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Um(e)?Bm:zm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new rt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,r){return Gn.makeTranslation(e,n,r),this.applyMatrix4(Gn),this}scale(e,n,r){return Gn.makeScale(e,n,r),this.applyMatrix4(Gn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new qt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Nn.setFromBufferAttribute(u),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(tn.addVectors(Nn.min,No.min),Nn.expandByPoint(tn),tn.addVectors(Nn.max,No.max),Nn.expandByPoint(tn)):(Nn.expandByPoint(No.min),Nn.expandByPoint(No.max))}Nn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)tn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(tn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)tn.fromBufferAttribute(d,m),p&&(Cs.fromBufferAttribute(e,m),tn.add(Cs)),a=Math.max(a,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let k=0;k<r.count;k++)d[k]=new Q,p[k]=new Q;const m=new Q,_=new Q,y=new Q,x=new gt,S=new gt,T=new gt,R=new Q,g=new Q;function v(k,le,M){m.fromBufferAttribute(r,k),_.fromBufferAttribute(r,le),y.fromBufferAttribute(r,M),x.fromBufferAttribute(u,k),S.fromBufferAttribute(u,le),T.fromBufferAttribute(u,M),_.sub(m),y.sub(m),S.sub(x),T.sub(x);const A=1/(S.x*T.y-T.x*S.y);isFinite(A)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(y,-S.y).multiplyScalar(A),g.copy(y).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(A),d[k].add(R),d[le].add(R),d[M].add(R),p[k].add(g),p[le].add(g),p[M].add(g))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let k=0,le=L.length;k<le;++k){const M=L[k],A=M.start,G=M.count;for(let W=A,ie=A+G;W<ie;W+=3)v(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const P=new Q,b=new Q,Y=new Q,F=new Q;function I(k){Y.fromBufferAttribute(a,k),F.copy(Y);const le=d[k];P.copy(le),P.sub(Y.multiplyScalar(Y.dot(le))).normalize(),b.crossVectors(F,le);const A=b.dot(p[k])<0?-1:1;f.setXYZW(k,P.x,P.y,P.z,A)}for(let k=0,le=L.length;k<le;++k){const M=L[k],A=M.start,G=M.count;for(let W=A,ie=A+G;W<ie;W+=3)I(e.getX(W+0)),I(e.getX(W+1)),I(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Q,u=new Q,f=new Q,d=new Q,p=new Q,m=new Q,_=new Q,y=new Q;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),R=e.getX(x+1),g=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,g),_.subVectors(f,u),y.subVectors(a,u),_.cross(y),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,g),d.add(_),p.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(g,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,u),y.subVectors(a,u),_.cross(y),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,y=d.normalized,x=new m.constructor(p.length*_);let S=0,T=0;for(let R=0,g=p.length;R<g;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let v=0;v<_;v++)x[T++]=m[S++]}return new gi(x,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ai,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,y=m.length;_<y;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],y=u[m];for(let x=0,S=y.length;x<S;x++)_.push(y[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yp=new Gt,Ir=new kv,rl=new Gf,qp=new Q,sl=new Q,ol=new Q,al=new Q,Fc=new Q,ll=new Q,jp=new Q,ul=new Q;class Ot extends _n{constructor(e=new ai,n=new Wf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ll.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],y=u[p];_!==0&&(Fc.fromBufferAttribute(y,e),f?ll.addScaledVector(Fc,_):ll.addScaledVector(Fc.sub(n),_))}n.add(ll)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),rl.copy(r.boundingSphere),rl.applyMatrix4(u),Ir.copy(e.ray).recast(e.near),!(rl.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(rl,qp)===null||Ir.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(Yp.copy(u).invert(),Ir.copy(e.ray).applyMatrix4(Yp),!(r.boundingBox!==null&&Ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,R=x.length;T<R;T++){const g=x[T],v=f[g.materialIndex],L=Math.max(g.start,S.start),P=Math.min(d.count,Math.min(g.start+g.count,S.start+S.count));for(let b=L,Y=P;b<Y;b+=3){const F=d.getX(b),I=d.getX(b+1),k=d.getX(b+2);a=cl(this,v,e,r,m,_,y,F,I,k),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let g=T,v=R;g<v;g+=3){const L=d.getX(g),P=d.getX(g+1),b=d.getX(g+2);a=cl(this,f,e,r,m,_,y,L,P,b),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,R=x.length;T<R;T++){const g=x[T],v=f[g.materialIndex],L=Math.max(g.start,S.start),P=Math.min(p.count,Math.min(g.start+g.count,S.start+S.count));for(let b=L,Y=P;b<Y;b+=3){const F=b,I=b+1,k=b+2;a=cl(this,v,e,r,m,_,y,F,I,k),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let g=T,v=R;g<v;g+=3){const L=g,P=g+1,b=g+2;a=cl(this,f,e,r,m,_,y,L,P,b),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function qv(o,e,n,r,a,u,f,d){let p;if(e.side===An?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===mr,d),p===null)return null;ul.copy(d),ul.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(ul);return m<n.near||m>n.far?null:{distance:m,point:ul.clone(),object:o}}function cl(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,sl),o.getVertexPosition(p,ol),o.getVertexPosition(m,al);const _=qv(o,e,n,r,sl,ol,al,jp);if(_){const y=new Q;ri.getBarycoord(jp,sl,ol,al,y),a&&(_.uv=ri.getInterpolatedAttribute(a,d,p,m,y,new gt)),u&&(_.uv1=ri.getInterpolatedAttribute(u,d,p,m,y,new gt)),f&&(_.normal=ri.getInterpolatedAttribute(f,d,p,m,y,new Q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Q,materialIndex:0};ri.getNormal(sl,ol,al,x.normal),_.face=x,_.barycoord=y}return _}class Ys extends ai{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],y=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,f,u,0),T("z","y","x",1,-1,r,n,-e,f,u,1),T("x","z","y",1,1,e,r,n,a,f,2),T("x","z","y",1,-1,e,r,-n,a,f,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(y,2));function T(R,g,v,L,P,b,Y,F,I,k,le){const M=b/I,A=Y/k,G=b/2,W=Y/2,ie=F/2,ue=I+1,K=k+1;let oe=0,z=0;const fe=new Q;for(let se=0;se<K;se++){const N=se*A-W;for(let re=0;re<ue;re++){const Ce=re*M-G;fe[R]=Ce*L,fe[g]=N*P,fe[v]=ie,m.push(fe.x,fe.y,fe.z),fe[R]=0,fe[g]=0,fe[v]=F>0?1:-1,_.push(fe.x,fe.y,fe.z),y.push(re/I),y.push(1-se/k),oe+=1}}for(let se=0;se<k;se++)for(let N=0;N<I;N++){const re=x+N+ue*se,Ce=x+N+ue*(se+1),Z=x+(N+1)+ue*(se+1),ce=x+(N+1)+ue*se;p.push(re,Ce,ce),p.push(Ce,Z,ce),z+=6}d.addGroup(S,z,le),S+=z,x+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function gn(o){const e={};for(let n=0;n<o.length;n++){const r=Gs(o[n]);for(const a in r)e[a]=r[a]}return e}function jv(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Hm(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Kv={clone:Gs,merge:gn};var $v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$v,this.fragmentShader=Zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Vm extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new Q,Kp=new gt,$p=new gt;class Wn extends Vm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bf*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,Kp,$p),n.subVectors($p,Kp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(mc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Ls=1;class Qv extends _n{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Wn(Ps,Ls,e,n);a.layers=this.layers,this.add(a);const u=new Wn(Ps,Ls,e,n);u.layers=this.layers,this.add(u);const f=new Wn(Ps,Ls,e,n);f.layers=this.layers,this.add(f);const d=new Wn(Ps,Ls,e,n);d.layers=this.layers,this.add(d);const p=new Wn(Ps,Ls,e,n);p.layers=this.layers,this.add(p);const m=new Wn(Ps,Ls,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Al)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(y,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Gm extends Rn{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:zs,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jv extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Gm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ys(5,5,5),u=new gr({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:An,blending:hr});u.uniforms.tEquirect.value=n;const f=new Ot(a,u),d=n.minFilter;return n.minFilter===Gr&&(n.minFilter=ii),new Qv(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Oc=new Q,e0=new Q,t0=new rt;class Or{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Oc.subVectors(r,n).cross(e0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Oc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||t0.getNormalMatrix(e),a=this.coplanarPoint(Oc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Gf,fl=new Q;class Wm{constructor(e=new Or,n=new Or,r=new Or,a=new Or,u=new Or,f=new Or){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Fi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],y=a[6],x=a[7],S=a[8],T=a[9],R=a[10],g=a[11],v=a[12],L=a[13],P=a[14],b=a[15];if(r[0].setComponents(p-u,x-m,g-S,b-v).normalize(),r[1].setComponents(p+u,x+m,g+S,b+v).normalize(),r[2].setComponents(p+f,x+_,g+T,b+L).normalize(),r[3].setComponents(p-f,x-_,g-T,b-L).normalize(),r[4].setComponents(p-d,x-y,g-R,b-P).normalize(),n===Fi)r[5].setComponents(p+d,x+y,g+R,b+P).normalize();else if(n===Al)r[5].setComponents(d,y,R,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(fl.x=a.normal.x>0?e.max.x:e.min.x,fl.y=a.normal.y>0?e.max.y:e.min.y,fl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xm(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function n0(o){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,y=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const _=p.array,y=p.updateRanges;if(o.bindBuffer(m,d),y.length===0)o.bufferSubData(m,0,_);else{y.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<y.length;S++){const T=y[x],R=y[S];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++x,y[x]=R)}y.length=x+1;for(let S=0,T=y.length;S<T;S++){const R=y[S];o.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class Vo extends ai{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,y=e/d,x=n/p,S=[],T=[],R=[],g=[];for(let v=0;v<_;v++){const L=v*x-f;for(let P=0;P<m;P++){const b=P*y-u;T.push(b,-L,0),R.push(0,0,1),g.push(P/d),g.push(1-v/p)}}for(let v=0;v<p;v++)for(let L=0;L<d;L++){const P=L+m*v,b=L+m*(v+1),Y=L+1+m*(v+1),F=L+1+m*v;S.push(P,b,F),S.push(b,Y,F)}this.setIndex(S),this.setAttribute("position",new qt(T,3)),this.setAttribute("normal",new qt(R,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g0=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,A0=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,C0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",U0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,X0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,K0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ex=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,nx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ox=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xx=`#ifdef USE_SKINNING
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
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zx=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,uy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,fy=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,my=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_y=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Sy=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ey=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ty=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,wy=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ry=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Py=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,by=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Uy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:i0,alphahash_pars_fragment:r0,alphamap_fragment:s0,alphamap_pars_fragment:o0,alphatest_fragment:a0,alphatest_pars_fragment:l0,aomap_fragment:u0,aomap_pars_fragment:c0,batching_pars_vertex:f0,batching_vertex:d0,begin_vertex:h0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:_0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:S0,color_fragment:M0,color_pars_fragment:E0,color_pars_vertex:T0,color_vertex:w0,common:A0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:C0,displacementmap_pars_vertex:P0,displacementmap_vertex:L0,emissivemap_fragment:b0,emissivemap_pars_fragment:D0,colorspace_fragment:I0,colorspace_pars_fragment:U0,envmap_fragment:N0,envmap_common_pars_fragment:F0,envmap_pars_fragment:O0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:K0,envmap_vertex:z0,fog_vertex:B0,fog_pars_vertex:H0,fog_fragment:V0,fog_pars_fragment:G0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:X0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:q0,lights_pars_begin:j0,lights_toon_fragment:$0,lights_toon_pars_fragment:Z0,lights_phong_fragment:Q0,lights_phong_pars_fragment:J0,lights_physical_fragment:ex,lights_physical_pars_fragment:tx,lights_fragment_begin:nx,lights_fragment_maps:ix,lights_fragment_end:rx,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:ox,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:lx,map_fragment:ux,map_pars_fragment:cx,map_particle_fragment:fx,map_particle_pars_fragment:dx,metalnessmap_fragment:hx,metalnessmap_pars_fragment:px,morphinstance_vertex:mx,morphcolor_vertex:gx,morphnormal_vertex:_x,morphtarget_pars_vertex:vx,morphtarget_vertex:xx,normal_fragment_begin:yx,normal_fragment_maps:Sx,normal_pars_fragment:Mx,normal_pars_vertex:Ex,normal_vertex:Tx,normalmap_pars_fragment:wx,clearcoat_normal_fragment_begin:Ax,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Cx,iridescence_pars_fragment:Px,opaque_fragment:Lx,packing:bx,premultiplied_alpha_fragment:Dx,project_vertex:Ix,dithering_fragment:Ux,dithering_pars_fragment:Nx,roughnessmap_fragment:Fx,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:kx,shadowmap_pars_vertex:zx,shadowmap_vertex:Bx,shadowmask_pars_fragment:Hx,skinbase_vertex:Vx,skinning_pars_vertex:Gx,skinning_vertex:Wx,skinnormal_vertex:Xx,specularmap_fragment:Yx,specularmap_pars_fragment:qx,tonemapping_fragment:jx,tonemapping_pars_fragment:Kx,transmission_fragment:$x,transmission_pars_fragment:Zx,uv_pars_fragment:Qx,uv_pars_vertex:Jx,uv_vertex:ey,worldpos_vertex:ty,background_vert:ny,background_frag:iy,backgroundCube_vert:ry,backgroundCube_frag:sy,cube_vert:oy,cube_frag:ay,depth_vert:ly,depth_frag:uy,distanceRGBA_vert:cy,distanceRGBA_frag:fy,equirect_vert:dy,equirect_frag:hy,linedashed_vert:py,linedashed_frag:my,meshbasic_vert:gy,meshbasic_frag:_y,meshlambert_vert:vy,meshlambert_frag:xy,meshmatcap_vert:yy,meshmatcap_frag:Sy,meshnormal_vert:My,meshnormal_frag:Ey,meshphong_vert:Ty,meshphong_frag:wy,meshphysical_vert:Ay,meshphysical_frag:Ry,meshtoon_vert:Cy,meshtoon_frag:Py,points_vert:Ly,points_frag:by,shadow_vert:Dy,shadow_frag:Iy,sprite_vert:Uy,sprite_frag:Ny},Re={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},mi={basic:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new at(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:gn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:gn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new at(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:gn([Re.points,Re.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:gn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:gn([Re.common,Re.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:gn([Re.sprite,Re.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:gn([Re.common,Re.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:gn([Re.lights,Re.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};mi.physical={uniforms:gn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const dl={r:0,b:0,g:0},Nr=new oi,Fy=new Gt;function Oy(o,e,n,r,a,u,f){const d=new at(0);let p=u===!0?0:1,m,_,y=null,x=0,S=null;function T(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?n:e).get(P)),P}function R(L){let P=!1;const b=T(L);b===null?v(d,p):b&&b.isColor&&(v(b,1),P=!0);const Y=o.xr.getEnvironmentBlendMode();Y==="additive"?r.buffers.color.setClear(0,0,0,1,f):Y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function g(L,P){const b=T(P);b&&(b.isCubeTexture||b.mapping===Pl)?(_===void 0&&(_=new Ot(new Ys(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:Gs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Y,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Nr.copy(P.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),_.material.uniforms.envMap.value=b,_.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(Nr)),_.material.toneMapped=Mt.getTransfer(b.colorSpace)!==bt,(y!==b||x!==b.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,y=b,x=b.version,S=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new Ot(new Vo(2,2),new gr({name:"BackgroundMaterial",uniforms:Gs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(b.colorSpace)!==bt,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(y!==b||x!==b.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,y=b,x=b.version,S=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function v(L,P){L.getRGB(dl,Hm(o)),r.buffers.color.setClear(dl.r,dl.g,dl.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(L,P=1){d.set(L),p=P,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,v(d,p)},render:R,addToRenderList:g}}function ky(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(M,A,G,W,ie){let ue=!1;const K=y(W,G,A);u!==K&&(u=K,m(u.object)),ue=S(M,W,G,ie),ue&&T(M,W,G,ie),ie!==null&&e.update(ie,o.ELEMENT_ARRAY_BUFFER),(ue||f)&&(f=!1,b(M,A,G,W),ie!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function p(){return o.createVertexArray()}function m(M){return o.bindVertexArray(M)}function _(M){return o.deleteVertexArray(M)}function y(M,A,G){const W=G.wireframe===!0;let ie=r[M.id];ie===void 0&&(ie={},r[M.id]=ie);let ue=ie[A.id];ue===void 0&&(ue={},ie[A.id]=ue);let K=ue[W];return K===void 0&&(K=x(p()),ue[W]=K),K}function x(M){const A=[],G=[],W=[];for(let ie=0;ie<n;ie++)A[ie]=0,G[ie]=0,W[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:G,attributeDivisors:W,object:M,attributes:{},index:null}}function S(M,A,G,W){const ie=u.attributes,ue=A.attributes;let K=0;const oe=G.getAttributes();for(const z in oe)if(oe[z].location>=0){const se=ie[z];let N=ue[z];if(N===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(N=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(N=M.instanceColor)),se===void 0||se.attribute!==N||N&&se.data!==N.data)return!0;K++}return u.attributesNum!==K||u.index!==W}function T(M,A,G,W){const ie={},ue=A.attributes;let K=0;const oe=G.getAttributes();for(const z in oe)if(oe[z].location>=0){let se=ue[z];se===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const N={};N.attribute=se,se&&se.data&&(N.data=se.data),ie[z]=N,K++}u.attributes=ie,u.attributesNum=K,u.index=W}function R(){const M=u.newAttributes;for(let A=0,G=M.length;A<G;A++)M[A]=0}function g(M){v(M,0)}function v(M,A){const G=u.newAttributes,W=u.enabledAttributes,ie=u.attributeDivisors;G[M]=1,W[M]===0&&(o.enableVertexAttribArray(M),W[M]=1),ie[M]!==A&&(o.vertexAttribDivisor(M,A),ie[M]=A)}function L(){const M=u.newAttributes,A=u.enabledAttributes;for(let G=0,W=A.length;G<W;G++)A[G]!==M[G]&&(o.disableVertexAttribArray(G),A[G]=0)}function P(M,A,G,W,ie,ue,K){K===!0?o.vertexAttribIPointer(M,A,G,ie,ue):o.vertexAttribPointer(M,A,G,W,ie,ue)}function b(M,A,G,W){R();const ie=W.attributes,ue=G.getAttributes(),K=A.defaultAttributeValues;for(const oe in ue){const z=ue[oe];if(z.location>=0){let fe=ie[oe];if(fe===void 0&&(oe==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),oe==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){const se=fe.normalized,N=fe.itemSize,re=e.get(fe);if(re===void 0)continue;const Ce=re.buffer,Z=re.type,ce=re.bytesPerElement,xe=Z===o.INT||Z===o.UNSIGNED_INT||fe.gpuType===Nf;if(fe.isInterleavedBufferAttribute){const ye=fe.data,Pe=ye.stride,Le=fe.offset;if(ye.isInstancedInterleavedBuffer){for(let Je=0;Je<z.locationSize;Je++)v(z.location+Je,ye.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Je=0;Je<z.locationSize;Je++)g(z.location+Je);o.bindBuffer(o.ARRAY_BUFFER,Ce);for(let Je=0;Je<z.locationSize;Je++)P(z.location+Je,N/z.locationSize,Z,se,Pe*ce,(Le+N/z.locationSize*Je)*ce,xe)}else{if(fe.isInstancedBufferAttribute){for(let ye=0;ye<z.locationSize;ye++)v(z.location+ye,fe.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ye=0;ye<z.locationSize;ye++)g(z.location+ye);o.bindBuffer(o.ARRAY_BUFFER,Ce);for(let ye=0;ye<z.locationSize;ye++)P(z.location+ye,N/z.locationSize,Z,se,N*ce,N/z.locationSize*ye*ce,xe)}}else if(K!==void 0){const se=K[oe];if(se!==void 0)switch(se.length){case 2:o.vertexAttrib2fv(z.location,se);break;case 3:o.vertexAttrib3fv(z.location,se);break;case 4:o.vertexAttrib4fv(z.location,se);break;default:o.vertexAttrib1fv(z.location,se)}}}}L()}function Y(){k();for(const M in r){const A=r[M];for(const G in A){const W=A[G];for(const ie in W)_(W[ie].object),delete W[ie];delete A[G]}delete r[M]}}function F(M){if(r[M.id]===void 0)return;const A=r[M.id];for(const G in A){const W=A[G];for(const ie in W)_(W[ie].object),delete W[ie];delete A[G]}delete r[M.id]}function I(M){for(const A in r){const G=r[A];if(G[M.id]===void 0)continue;const W=G[M.id];for(const ie in W)_(W[ie].object),delete W[ie];delete G[M.id]}}function k(){le(),f=!0,u!==a&&(u=a,m(u.object))}function le(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:k,resetDefaultState:le,dispose:Y,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:g,disableUnusedAttributes:L}}function zy(o,e,n){let r;function a(m){r=m}function u(m,_){o.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,y){y!==0&&(o.drawArraysInstanced(r,m,_,y),n.update(_,r,y))}function d(m,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,y);let S=0;for(let T=0;T<y;T++)S+=_[T];n.update(S,r,1)}function p(m,_,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)f(m[T],_[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,y);let T=0;for(let R=0;R<y;R++)T+=_[R];for(let R=0;R<x.length;R++)n.update(T,r,x[R])}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function By(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(I){return!(I!==si&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const k=I===ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Oi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ni&&!k)}function p(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const I=e.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Y=T>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:b,vertexTextures:Y,maxSamples:F}}function Hy(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Or,d=new rt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){n=_(y,x,0)},this.setState=function(y,x,S){const T=y.clippingPlanes,R=y.clipIntersection,g=y.clipShadows,v=o.get(y);if(!a||T===null||T.length===0||u&&!g)u?_(null):m();else{const L=u?0:r,P=L*4;let b=v.clippingState||null;p.value=b,b=_(T,x,P,S);for(let Y=0;Y!==P;++Y)b[Y]=n[Y];v.clippingState=b,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,x,S,T){const R=y!==null?y.length:0;let g=null;if(R!==0){if(g=p.value,T!==!0||g===null){const v=S+R*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(g===null||g.length<v)&&(g=new Float32Array(v));for(let P=0,b=S;P!==R;++P,b+=4)f.copy(y[P]).applyMatrix4(L,d),f.normal.toArray(g,b),g[b+3]=f.constant}p.value=g,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,g}}function Vy(o){let e=new WeakMap;function n(f,d){return d===ef?f.mapping=zs:d===tf&&(f.mapping=Bs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===ef||d===tf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Jv(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Gy extends Vm{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,Zp=[.125,.215,.35,.446,.526,.582],Br=20,kc=new Gy,Qp=new at;let zc=null,Bc=0,Hc=0,Vc=!1;const kr=(1+Math.sqrt(5))/2,bs=1/kr,Jp=[new Q(-kr,bs,0),new Q(kr,bs,0),new Q(-bs,0,kr),new Q(bs,0,kr),new Q(0,kr,-bs),new Q(0,kr,bs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){zc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Bc,Hc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:ko,format:si,colorSpace:_r,depthBuffer:!1},a=tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wy(u)),this._blurMaterial=Xy(u,e,n)}return a}_compileMaterial(e){const n=new Ot(this._lodPlanes[0],e);this._renderer.compile(n,kc)}_sceneToCubeUV(e,n,r,a){const d=new Wn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(Qp),_.toneMapping=pr,_.autoClear=!1;const S=new Wf({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),T=new Ot(new Ys,S);let R=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,R=!0):(S.color.copy(Qp),R=!0);for(let v=0;v<6;v++){const L=v%3;L===0?(d.up.set(0,p[v],0),d.lookAt(m[v],0,0)):L===1?(d.up.set(0,0,p[v]),d.lookAt(0,m[v],0)):(d.up.set(0,p[v],0),d.lookAt(0,0,m[v]));const P=this._cubeSize;hl(a,L*P,v>2?P:0,P,P),_.setRenderTarget(a),R&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=x,_.autoClear=y,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===zs||e.mapping===Bs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Ot(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;hl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,kc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Jp[(a-u-1)%Jp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new Ot(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Br-1),R=u/T,g=isFinite(u)?1+Math.floor(_*R):Br;g>Br&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Br}`);const v=[];let L=0;for(let I=0;I<Br;++I){const k=I/R,le=Math.exp(-k*k/2);v.push(le),I===0?L+=le:I<g&&(L+=2*le)}for(let I=0;I<v.length;I++)v[I]=v[I]/L;x.envMap.value=e.texture,x.samples.value=g,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=T,x.mipInt.value=P-r;const b=this._sizeLods[a],Y=3*b*(a>P-Is?a-P+Is:0),F=4*(this._cubeSize-b);hl(n,Y,F,3*b,2*b),p.setRenderTarget(n),p.render(y,kc)}}function Wy(o){const e=[],n=[],r=[];let a=o;const u=o-Is+1+Zp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Is?p=Zp[f-o+Is-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,y=1+m,x=[_,_,y,_,y,y,_,_,y,y,_,y],S=6,T=6,R=3,g=2,v=1,L=new Float32Array(R*T*S),P=new Float32Array(g*T*S),b=new Float32Array(v*T*S);for(let F=0;F<S;F++){const I=F%3*2/3-1,k=F>2?0:-1,le=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];L.set(le,R*T*F),P.set(x,g*T*F);const M=[F,F,F,F,F,F];b.set(M,v*T*F)}const Y=new ai;Y.setAttribute("position",new gi(L,R)),Y.setAttribute("uv",new gi(P,g)),Y.setAttribute("faceIndex",new gi(b,v)),e.push(Y),a>Is&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function tm(o,e,n){const r=new Xr(o,e,n);return r.texture.mapping=Pl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function Xy(o,e,n){const r=new Float32Array(Br),a=new Q(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function nm(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function im(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Xf(){return`

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
	`}function Yy(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===ef||p===tf,_=p===zs||p===Bs;if(m||_){let y=e.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new em(o)),y=m?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new em(o)),y=m?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",u),y.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function qy(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Sl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function jy(o,e,n,r){const a={},u=new WeakMap;function f(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const R=x.morphAttributes[T];for(let g=0,v=R.length;g<v;g++)e.remove(R[g])}x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(y,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const T in x)e.update(x[T],o.ARRAY_BUFFER);const S=y.morphAttributes;for(const T in S){const R=S[T];for(let g=0,v=R.length;g<v;g++)e.update(R[g],o.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,T=y.attributes.position;let R=0;if(S!==null){const L=S.array;R=S.version;for(let P=0,b=L.length;P<b;P+=3){const Y=L[P+0],F=L[P+1],I=L[P+2];x.push(Y,F,F,I,I,Y)}}else if(T!==void 0){const L=T.array;R=T.version;for(let P=0,b=L.length/3-1;P<b;P+=3){const Y=P+0,F=P+1,I=P+2;x.push(Y,F,F,I,I,Y)}}else return;const g=new(Um(x)?Bm:zm)(x,1);g.version=R;const v=u.get(y);v&&e.remove(v),u.set(y,g)}function _(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:_}}function Ky(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,S){o.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,T){T!==0&&(o.drawElementsInstanced(r,S,u,x*f,T),n.update(S,r,T))}function _(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,T);let g=0;for(let v=0;v<T;v++)g+=S[v];n.update(g,r,1)}function y(x,S,T,R){if(T===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<x.length;v++)m(x[v]/f,S[v],R[v]);else{g.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,R,0,T);let v=0;for(let L=0;L<T;L++)v+=S[L];for(let L=0;L<R.length;L++)n.update(v,r,R[L])}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function $y(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function Zy(o,e,n){const r=new WeakMap,a=new Bt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==y){let M=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",M)};var S=M;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,g=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let b=0;T===!0&&(b=1),R===!0&&(b=2),g===!0&&(b=3);let Y=d.attributes.position.count*b,F=1;Y>e.maxTextureSize&&(F=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const I=new Float32Array(Y*F*4*y),k=new Fm(I,Y,F,y);k.type=Ni,k.needsUpdate=!0;const le=b*4;for(let A=0;A<y;A++){const G=v[A],W=L[A],ie=P[A],ue=Y*F*4*A;for(let K=0;K<G.count;K++){const oe=K*le;T===!0&&(a.fromBufferAttribute(G,K),I[ue+oe+0]=a.x,I[ue+oe+1]=a.y,I[ue+oe+2]=a.z,I[ue+oe+3]=0),R===!0&&(a.fromBufferAttribute(W,K),I[ue+oe+4]=a.x,I[ue+oe+5]=a.y,I[ue+oe+6]=a.z,I[ue+oe+7]=0),g===!0&&(a.fromBufferAttribute(ie,K),I[ue+oe+8]=a.x,I[ue+oe+9]=a.y,I[ue+oe+10]=a.z,I[ue+oe+11]=ie.itemSize===4?a.w:1)}}x={count:y,texture:k,size:new gt(Y,F)},r.set(d,x),d.addEventListener("dispose",M)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let T=0;for(let g=0;g<m.length;g++)T+=m[g];const R=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function Qy(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,y=e.get(p,_);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class Ym extends Rn{constructor(e,n,r,a,u,f,d,p,m,_=Fs){if(_!==Fs&&_!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Fs&&(r=Wr),r===void 0&&_===Vs&&(r=Hs),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Xn,this.minFilter=p!==void 0?p:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const qm=new Rn,rm=new Ym(1,1),jm=new Fm,Km=new Fv,$m=new Gm,sm=[],om=[],am=new Float32Array(16),lm=new Float32Array(9),um=new Float32Array(4);function qs(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=sm[a];if(u===void 0&&(u=new Float32Array(a),sm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function jt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Kt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function bl(o,e){let n=om[e];n===void 0&&(n=new Int32Array(e),om[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function Jy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function eS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;o.uniform2fv(this.addr,e),Kt(n,e)}}function tS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;o.uniform3fv(this.addr,e),Kt(n,e)}}function nS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;o.uniform4fv(this.addr,e),Kt(n,e)}}function iS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(jt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(jt(n,r))return;um.set(r),o.uniformMatrix2fv(this.addr,!1,um),Kt(n,r)}}function rS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(jt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(jt(n,r))return;lm.set(r),o.uniformMatrix3fv(this.addr,!1,lm),Kt(n,r)}}function sS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(jt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(jt(n,r))return;am.set(r),o.uniformMatrix4fv(this.addr,!1,am),Kt(n,r)}}function oS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function aS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;o.uniform2iv(this.addr,e),Kt(n,e)}}function lS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;o.uniform3iv(this.addr,e),Kt(n,e)}}function uS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;o.uniform4iv(this.addr,e),Kt(n,e)}}function cS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function fS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;o.uniform2uiv(this.addr,e),Kt(n,e)}}function dS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;o.uniform3uiv(this.addr,e),Kt(n,e)}}function hS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;o.uniform4uiv(this.addr,e),Kt(n,e)}}function pS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(rm.compareFunction=Im,u=rm):u=qm,n.setTexture2D(e||u,a)}function mS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Km,a)}function gS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||$m,a)}function _S(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||jm,a)}function vS(o){switch(o){case 5126:return Jy;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return rS;case 35676:return sS;case 5124:case 35670:return oS;case 35667:case 35671:return aS;case 35668:case 35672:return lS;case 35669:case 35673:return uS;case 5125:return cS;case 36294:return fS;case 36295:return dS;case 36296:return hS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return gS;case 36289:case 36303:case 36311:case 36292:return _S}}function xS(o,e){o.uniform1fv(this.addr,e)}function yS(o,e){const n=qs(e,this.size,2);o.uniform2fv(this.addr,n)}function SS(o,e){const n=qs(e,this.size,3);o.uniform3fv(this.addr,n)}function MS(o,e){const n=qs(e,this.size,4);o.uniform4fv(this.addr,n)}function ES(o,e){const n=qs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function TS(o,e){const n=qs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function wS(o,e){const n=qs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function AS(o,e){o.uniform1iv(this.addr,e)}function RS(o,e){o.uniform2iv(this.addr,e)}function CS(o,e){o.uniform3iv(this.addr,e)}function PS(o,e){o.uniform4iv(this.addr,e)}function LS(o,e){o.uniform1uiv(this.addr,e)}function bS(o,e){o.uniform2uiv(this.addr,e)}function DS(o,e){o.uniform3uiv(this.addr,e)}function IS(o,e){o.uniform4uiv(this.addr,e)}function US(o,e,n){const r=this.cache,a=e.length,u=bl(n,a);jt(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||qm,u[f])}function NS(o,e,n){const r=this.cache,a=e.length,u=bl(n,a);jt(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||Km,u[f])}function FS(o,e,n){const r=this.cache,a=e.length,u=bl(n,a);jt(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||$m,u[f])}function OS(o,e,n){const r=this.cache,a=e.length,u=bl(n,a);jt(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||jm,u[f])}function kS(o){switch(o){case 5126:return xS;case 35664:return yS;case 35665:return SS;case 35666:return MS;case 35674:return ES;case 35675:return TS;case 35676:return wS;case 5124:case 35670:return AS;case 35667:case 35671:return RS;case 35668:case 35672:return CS;case 35669:case 35673:return PS;case 5125:return LS;case 36294:return bS;case 36295:return DS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return OS}}class zS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=vS(n.type)}}class BS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kS(n.type)}}class HS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function cm(o,e){o.seq.push(e),o.map[e.id]=e}function VS(o,e,n){const r=o.name,a=r.length;for(Gc.lastIndex=0;;){const u=Gc.exec(r),f=Gc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){cm(n,m===void 0?new zS(d,o,e):new BS(d,o,e));break}else{let y=n.map[d];y===void 0&&(y=new HS(d),cm(n,y)),n=y}}}class Ml{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);VS(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function fm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const GS=37297;let WS=0;function XS(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function YS(o){const e=Mt.getPrimaries(Mt.workingColorSpace),n=Mt.getPrimaries(o);let r;switch(e===n?r="":e===wl&&n===Tl?r="LinearDisplayP3ToLinearSRGB":e===Tl&&n===wl&&(r="LinearSRGBToLinearDisplayP3"),o){case _r:case Ll:return[r,"LinearTransferOETF"];case pi:case Vf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function dm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+XS(o.getShaderSource(e),f)}else return a}function qS(o,e){const n=YS(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function jS(o,e){let n;switch(e){case lv:n="Linear";break;case uv:n="Reinhard";break;case cv:n="Cineon";break;case fv:n="ACESFilmic";break;case hv:n="AgX";break;case pv:n="Neutral";break;case dv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pl=new Q;function KS(){Mt.getLuminanceCoefficients(pl);const o=pl.x.toFixed(4),e=pl.y.toFixed(4),n=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $S(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function ZS(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function QS(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Fo(o){return o!==""}function hm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(o){return o.replace(JS,tM)}const eM=new Map;function tM(o,e){let n=it[e];if(n===void 0){const r=eM.get(e);if(r!==void 0)n=it[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Df(n)}const nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(o){return o.replace(nM,iM)}function iM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function gm(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Sm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===H_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function sM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case zs:case Bs:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function aM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Cl:e="ENVMAP_BLENDING_MULTIPLY";break;case ov:e="ENVMAP_BLENDING_MIX";break;case av:e="ENVMAP_BLENDING_ADD";break}return e}function lM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function uM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=rM(n),m=sM(n),_=oM(n),y=aM(n),x=lM(n),S=$S(n),T=ZS(u),R=a.createProgram();let g,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Fo).join(`
`),g.length>0&&(g+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Fo).join(`
`),v.length>0&&(v+=`
`)):(g=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),v=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pr?"#define TONE_MAPPING":"",n.toneMapping!==pr?it.tonemapping_pars_fragment:"",n.toneMapping!==pr?jS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,qS("linearToOutputTexel",n.outputColorSpace),KS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fo).join(`
`)),f=Df(f),f=hm(f,n),f=pm(f,n),d=Df(d),d=hm(d,n),d=pm(d,n),f=mm(f),d=mm(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,g=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",n.glslVersion===Ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=L+g+f,b=L+v+d,Y=fm(a,a.VERTEX_SHADER,P),F=fm(a,a.FRAGMENT_SHADER,b);a.attachShader(R,Y),a.attachShader(R,F),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function I(A){if(o.debug.checkShaderErrors){const G=a.getProgramInfoLog(R).trim(),W=a.getShaderInfoLog(Y).trim(),ie=a.getShaderInfoLog(F).trim();let ue=!0,K=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(ue=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,R,Y,F);else{const oe=dm(a,Y,"vertex"),z=dm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+G+`
`+oe+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||ie==="")&&(K=!1);K&&(A.diagnostics={runnable:ue,programLog:G,vertexShader:{log:W,prefix:g},fragmentShader:{log:ie,prefix:v}})}a.deleteShader(Y),a.deleteShader(F),k=new Ml(a,R),le=QS(a,R)}let k;this.getUniforms=function(){return k===void 0&&I(this),k};let le;this.getAttributes=function(){return le===void 0&&I(this),le};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(R,GS)),M},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WS++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=Y,this.fragmentShader=F,this}let cM=0;class fM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new dM(e),n.set(e,r)),r}}class dM{constructor(e){this.id=cM++,this.code=e,this.usedTimes=0}}function hM(o,e,n,r,a,u,f){const d=new Om,p=new fM,m=new Set,_=[],y=a.logarithmicDepthBuffer,x=a.reverseDepthBuffer,S=a.vertexTextures;let T=a.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return m.add(M),M===0?"uv":`uv${M}`}function v(M,A,G,W,ie){const ue=W.fog,K=ie.geometry,oe=M.isMeshStandardMaterial?W.environment:null,z=(M.isMeshStandardMaterial?n:e).get(M.envMap||oe),fe=z&&z.mapping===Pl?z.image.height:null,se=R[M.type];M.precision!==null&&(T=a.getMaxPrecision(M.precision),T!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",T,"instead."));const N=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,re=N!==void 0?N.length:0;let Ce=0;K.morphAttributes.position!==void 0&&(Ce=1),K.morphAttributes.normal!==void 0&&(Ce=2),K.morphAttributes.color!==void 0&&(Ce=3);let Z,ce,xe,ye;if(se){const $t=mi[se];Z=$t.vertexShader,ce=$t.fragmentShader}else Z=M.vertexShader,ce=M.fragmentShader,p.update(M),xe=p.getVertexShaderID(M),ye=p.getFragmentShaderID(M);const Pe=o.getRenderTarget(),Le=ie.isInstancedMesh===!0,Je=ie.isBatchedMesh===!0,pt=!!M.map,lt=!!M.matcap,B=!!z,nn=!!M.aoMap,ot=!!M.lightMap,ft=!!M.bumpMap,Ke=!!M.normalMap,Tt=!!M.displacementMap,Ze=!!M.emissiveMap,D=!!M.metalnessMap,w=!!M.roughnessMap,J=M.anisotropy>0,he=M.clearcoat>0,_e=M.dispersion>0,de=M.iridescence>0,Xe=M.sheen>0,we=M.transmission>0,Ne=J&&!!M.anisotropyMap,dt=he&&!!M.clearcoatMap,Se=he&&!!M.clearcoatNormalMap,Fe=he&&!!M.clearcoatRoughnessMap,et=de&&!!M.iridescenceMap,Qe=de&&!!M.iridescenceThicknessMap,ke=Xe&&!!M.sheenColorMap,ut=Xe&&!!M.sheenRoughnessMap,nt=!!M.specularMap,St=!!M.specularColorMap,V=!!M.specularIntensityMap,be=we&&!!M.transmissionMap,ae=we&&!!M.thicknessMap,pe=!!M.gradientMap,Ae=!!M.alphaMap,Ie=M.alphaTest>0,ct=!!M.alphaHash,Ut=!!M.extensions;let rn=pr;M.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(rn=o.toneMapping);const ht={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:Z,fragmentShader:ce,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:T,batching:Je,batchingColor:Je&&ie._colorsTexture!==null,instancing:Le,instancingColor:Le&&ie.instanceColor!==null,instancingMorph:Le&&ie.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Pe===null?o.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:_r,alphaToCoverage:!!M.alphaToCoverage,map:pt,matcap:lt,envMap:B,envMapMode:B&&z.mapping,envMapCubeUVHeight:fe,aoMap:nn,lightMap:ot,bumpMap:ft,normalMap:Ke,displacementMap:S&&Tt,emissiveMap:Ze,normalMapObjectSpace:Ke&&M.normalMapType===vv,normalMapTangentSpace:Ke&&M.normalMapType===Hf,metalnessMap:D,roughnessMap:w,anisotropy:J,anisotropyMap:Ne,clearcoat:he,clearcoatMap:dt,clearcoatNormalMap:Se,clearcoatRoughnessMap:Fe,dispersion:_e,iridescence:de,iridescenceMap:et,iridescenceThicknessMap:Qe,sheen:Xe,sheenColorMap:ke,sheenRoughnessMap:ut,specularMap:nt,specularColorMap:St,specularIntensityMap:V,transmission:we,transmissionMap:be,thicknessMap:ae,gradientMap:pe,opaque:M.transparent===!1&&M.blending===Ns&&M.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Ie,alphaHash:ct,combine:M.combine,mapUv:pt&&g(M.map.channel),aoMapUv:nn&&g(M.aoMap.channel),lightMapUv:ot&&g(M.lightMap.channel),bumpMapUv:ft&&g(M.bumpMap.channel),normalMapUv:Ke&&g(M.normalMap.channel),displacementMapUv:Tt&&g(M.displacementMap.channel),emissiveMapUv:Ze&&g(M.emissiveMap.channel),metalnessMapUv:D&&g(M.metalnessMap.channel),roughnessMapUv:w&&g(M.roughnessMap.channel),anisotropyMapUv:Ne&&g(M.anisotropyMap.channel),clearcoatMapUv:dt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(M.sheenRoughnessMap.channel),specularMapUv:nt&&g(M.specularMap.channel),specularColorMapUv:St&&g(M.specularColorMap.channel),specularIntensityMapUv:V&&g(M.specularIntensityMap.channel),transmissionMapUv:be&&g(M.transmissionMap.channel),thicknessMapUv:ae&&g(M.thicknessMap.channel),alphaMapUv:Ae&&g(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ke||J),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!K.attributes.uv&&(pt||Ae),fog:!!ue,useFog:M.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:x,skinning:ie.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ce,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:rn,decodeVideoTexture:pt&&M.map.isVideoTexture===!0&&Mt.getTransfer(M.map.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ui,flipSided:M.side===An,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ut&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&M.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=m.has(1),ht.vertexUv2s=m.has(2),ht.vertexUv3s=m.has(3),m.clear(),ht}function L(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)A.push(G),A.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(P(A,M),b(A,M),A.push(o.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function P(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function b(M,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),M.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.alphaToCoverage&&d.enable(20),M.push(d.mask)}function Y(M){const A=R[M.type];let G;if(A){const W=mi[A];G=Kv.clone(W.uniforms)}else G=M.uniforms;return G}function F(M,A){let G;for(let W=0,ie=_.length;W<ie;W++){const ue=_[W];if(ue.cacheKey===A){G=ue,++G.usedTimes;break}}return G===void 0&&(G=new uM(o,A,M,u),_.push(G)),G}function I(M){if(--M.usedTimes===0){const A=_.indexOf(M);_[A]=_[_.length-1],_.pop(),M.destroy()}}function k(M){p.remove(M)}function le(){p.dispose()}return{getParameters:v,getProgramCacheKey:L,getUniforms:Y,acquireProgram:F,releaseProgram:I,releaseShaderCache:k,programs:_,dispose:le}}function pM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function mM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function _m(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function vm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(y,x,S,T,R,g){let v=o[e];return v===void 0?(v={id:y.id,object:y,geometry:x,material:S,groupOrder:T,renderOrder:y.renderOrder,z:R,group:g},o[e]=v):(v.id=y.id,v.object=y,v.geometry=x,v.material=S,v.groupOrder=T,v.renderOrder=y.renderOrder,v.z=R,v.group=g),e++,v}function d(y,x,S,T,R,g){const v=f(y,x,S,T,R,g);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):n.push(v)}function p(y,x,S,T,R,g){const v=f(y,x,S,T,R,g);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function m(y,x){n.length>1&&n.sort(y||mM),r.length>1&&r.sort(x||_m),a.length>1&&a.sort(x||_m)}function _(){for(let y=e,x=o.length;y<x;y++){const S=o[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function gM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new vm,o.set(r,[f])):a>=u.length?(f=new vm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function _M(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new at};break;case"SpotLight":n={position:new Q,direction:new Q,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=n,n}}}function vM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let xM=0;function yM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function SM(o){const e=new _M,n=vM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const a=new Q,u=new Gt,f=new Gt;function d(m){let _=0,y=0,x=0;for(let le=0;le<9;le++)r.probe[le].set(0,0,0);let S=0,T=0,R=0,g=0,v=0,L=0,P=0,b=0,Y=0,F=0,I=0;m.sort(yM);for(let le=0,M=m.length;le<M;le++){const A=m[le],G=A.color,W=A.intensity,ie=A.distance,ue=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)_+=G.r*W,y+=G.g*W,x+=G.b*W;else if(A.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(A.sh.coefficients[K],W);I++}else if(A.isDirectionalLight){const K=e.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const oe=A.shadow,z=n.get(A);z.shadowIntensity=oe.intensity,z.shadowBias=oe.bias,z.shadowNormalBias=oe.normalBias,z.shadowRadius=oe.radius,z.shadowMapSize=oe.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=ue,r.directionalShadowMatrix[S]=A.shadow.matrix,L++}r.directional[S]=K,S++}else if(A.isSpotLight){const K=e.get(A);K.position.setFromMatrixPosition(A.matrixWorld),K.color.copy(G).multiplyScalar(W),K.distance=ie,K.coneCos=Math.cos(A.angle),K.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),K.decay=A.decay,r.spot[R]=K;const oe=A.shadow;if(A.map&&(r.spotLightMap[Y]=A.map,Y++,oe.updateMatrices(A),A.castShadow&&F++),r.spotLightMatrix[R]=oe.matrix,A.castShadow){const z=n.get(A);z.shadowIntensity=oe.intensity,z.shadowBias=oe.bias,z.shadowNormalBias=oe.normalBias,z.shadowRadius=oe.radius,z.shadowMapSize=oe.mapSize,r.spotShadow[R]=z,r.spotShadowMap[R]=ue,b++}R++}else if(A.isRectAreaLight){const K=e.get(A);K.color.copy(G).multiplyScalar(W),K.halfWidth.set(A.width*.5,0,0),K.halfHeight.set(0,A.height*.5,0),r.rectArea[g]=K,g++}else if(A.isPointLight){const K=e.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity),K.distance=A.distance,K.decay=A.decay,A.castShadow){const oe=A.shadow,z=n.get(A);z.shadowIntensity=oe.intensity,z.shadowBias=oe.bias,z.shadowNormalBias=oe.normalBias,z.shadowRadius=oe.radius,z.shadowMapSize=oe.mapSize,z.shadowCameraNear=oe.camera.near,z.shadowCameraFar=oe.camera.far,r.pointShadow[T]=z,r.pointShadowMap[T]=ue,r.pointShadowMatrix[T]=A.shadow.matrix,P++}r.point[T]=K,T++}else if(A.isHemisphereLight){const K=e.get(A);K.skyColor.copy(A.color).multiplyScalar(W),K.groundColor.copy(A.groundColor).multiplyScalar(W),r.hemi[v]=K,v++}}g>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=x;const k=r.hash;(k.directionalLength!==S||k.pointLength!==T||k.spotLength!==R||k.rectAreaLength!==g||k.hemiLength!==v||k.numDirectionalShadows!==L||k.numPointShadows!==P||k.numSpotShadows!==b||k.numSpotMaps!==Y||k.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=g,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=b+Y-F,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=I,k.directionalLength=S,k.pointLength=T,k.spotLength=R,k.rectAreaLength=g,k.hemiLength=v,k.numDirectionalShadows=L,k.numPointShadows=P,k.numSpotShadows=b,k.numSpotMaps=Y,k.numLightProbes=I,r.version=xM++)}function p(m,_){let y=0,x=0,S=0,T=0,R=0;const g=_.matrixWorldInverse;for(let v=0,L=m.length;v<L;v++){const P=m[v];if(P.isDirectionalLight){const b=r.directional[y];b.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(g),y++}else if(P.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(g),S++}else if(P.isRectAreaLight){const b=r.rectArea[T];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(g),f.identity(),u.copy(P.matrixWorld),u.premultiply(g),f.extractRotation(u),b.halfWidth.set(P.width*.5,0,0),b.halfHeight.set(0,P.height*.5,0),b.halfWidth.applyMatrix4(f),b.halfHeight.applyMatrix4(f),T++}else if(P.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(g),x++}else if(P.isHemisphereLight){const b=r.hemi[R];b.direction.setFromMatrixPosition(P.matrixWorld),b.direction.transformDirection(g),R++}}}return{setup:d,setupView:p,state:r}}function xm(o){const e=new SM(o),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function MM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new xm(o),e.set(a,[d])):u>=f.length?(d=new xm(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class EM extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TM extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AM=`uniform sampler2D shadow_pass;
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
}`;function RM(o,e,n){let r=new Wm;const a=new gt,u=new gt,f=new Bt,d=new EM({depthPacking:_v}),p=new TM,m={},_=n.maxTextureSize,y={[mr]:An,[An]:mr,[Ui]:Ui},x=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:wM,fragmentShader:AM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new ai;T.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ot(T,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sm;let v=this.type;this.render=function(F,I,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||F.length===0)return;const le=o.getRenderTarget(),M=o.getActiveCubeFace(),A=o.getActiveMipmapLevel(),G=o.state;G.setBlending(hr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const W=v!==Ii&&this.type===Ii,ie=v===Ii&&this.type!==Ii;for(let ue=0,K=F.length;ue<K;ue++){const oe=F[ue],z=oe.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const fe=z.getFrameExtents();if(a.multiply(fe),u.copy(z.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/fe.x),a.x=u.x*fe.x,z.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/fe.y),a.y=u.y*fe.y,z.mapSize.y=u.y)),z.map===null||W===!0||ie===!0){const N=this.type!==Ii?{minFilter:Xn,magFilter:Xn}:{};z.map!==null&&z.map.dispose(),z.map=new Xr(a.x,a.y,N),z.map.texture.name=oe.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const se=z.getViewportCount();for(let N=0;N<se;N++){const re=z.getViewport(N);f.set(u.x*re.x,u.y*re.y,u.x*re.z,u.y*re.w),G.viewport(f),z.updateMatrices(oe,N),r=z.getFrustum(),b(I,k,z.camera,oe,this.type)}z.isPointLightShadow!==!0&&this.type===Ii&&L(z,k),z.needsUpdate=!1}v=this.type,g.needsUpdate=!1,o.setRenderTarget(le,M,A)};function L(F,I){const k=e.update(R);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Xr(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(I,null,k,x,R,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(I,null,k,S,R,null)}function P(F,I,k,le){let M=null;const A=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(A!==void 0)M=A;else if(M=k.isPointLight===!0?p:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const G=M.uuid,W=I.uuid;let ie=m[G];ie===void 0&&(ie={},m[G]=ie);let ue=ie[W];ue===void 0&&(ue=M.clone(),ie[W]=ue,I.addEventListener("dispose",Y)),M=ue}if(M.visible=I.visible,M.wireframe=I.wireframe,le===Ii?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:y[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,k.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=o.properties.get(M);G.light=k}return M}function b(F,I,k,le,M){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&M===Ii)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const W=e.update(F),ie=F.material;if(Array.isArray(ie)){const ue=W.groups;for(let K=0,oe=ue.length;K<oe;K++){const z=ue[K],fe=ie[z.materialIndex];if(fe&&fe.visible){const se=P(F,fe,le,M);F.onBeforeShadow(o,F,I,k,W,se,z),o.renderBufferDirect(k,null,W,se,F,z),F.onAfterShadow(o,F,I,k,W,se,z)}}}else if(ie.visible){const ue=P(F,ie,le,M);F.onBeforeShadow(o,F,I,k,W,ue,null),o.renderBufferDirect(k,null,W,ue,F,null),F.onAfterShadow(o,F,I,k,W,ue,null)}}const G=F.children;for(let W=0,ie=G.length;W<ie;W++)b(G[W],I,k,le,M)}function Y(F){F.target.removeEventListener("dispose",Y);for(const k in m){const le=m[k],M=F.target.uuid;M in le&&(le[M].dispose(),delete le[M])}}}const CM={[qc]:jc,[Kc]:Qc,[$c]:Jc,[ks]:Zc,[jc]:qc,[Qc]:Kc,[Jc]:$c,[Zc]:ks};function PM(o){function e(){let V=!1;const be=new Bt;let ae=null;const pe=new Bt(0,0,0,0);return{setMask:function(Ae){ae!==Ae&&!V&&(o.colorMask(Ae,Ae,Ae,Ae),ae=Ae)},setLocked:function(Ae){V=Ae},setClear:function(Ae,Ie,ct,Ut,rn){rn===!0&&(Ae*=Ut,Ie*=Ut,ct*=Ut),be.set(Ae,Ie,ct,Ut),pe.equals(be)===!1&&(o.clearColor(Ae,Ie,ct,Ut),pe.copy(be))},reset:function(){V=!1,ae=null,pe.set(-1,0,0,0)}}}function n(){let V=!1,be=!1,ae=null,pe=null,Ae=null;return{setReversed:function(Ie){be=Ie},setTest:function(Ie){Ie?xe(o.DEPTH_TEST):ye(o.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!V&&(o.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(be&&(Ie=CM[Ie]),pe!==Ie){switch(Ie){case qc:o.depthFunc(o.NEVER);break;case jc:o.depthFunc(o.ALWAYS);break;case Kc:o.depthFunc(o.LESS);break;case ks:o.depthFunc(o.LEQUAL);break;case $c:o.depthFunc(o.EQUAL);break;case Zc:o.depthFunc(o.GEQUAL);break;case Qc:o.depthFunc(o.GREATER);break;case Jc:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pe=Ie}},setLocked:function(Ie){V=Ie},setClear:function(Ie){Ae!==Ie&&(o.clearDepth(Ie),Ae=Ie)},reset:function(){V=!1,ae=null,pe=null,Ae=null}}}function r(){let V=!1,be=null,ae=null,pe=null,Ae=null,Ie=null,ct=null,Ut=null,rn=null;return{setTest:function(ht){V||(ht?xe(o.STENCIL_TEST):ye(o.STENCIL_TEST))},setMask:function(ht){be!==ht&&!V&&(o.stencilMask(ht),be=ht)},setFunc:function(ht,$t,Fn){(ae!==ht||pe!==$t||Ae!==Fn)&&(o.stencilFunc(ht,$t,Fn),ae=ht,pe=$t,Ae=Fn)},setOp:function(ht,$t,Fn){(Ie!==ht||ct!==$t||Ut!==Fn)&&(o.stencilOp(ht,$t,Fn),Ie=ht,ct=$t,Ut=Fn)},setLocked:function(ht){V=ht},setClear:function(ht){rn!==ht&&(o.clearStencil(ht),rn=ht)},reset:function(){V=!1,be=null,ae=null,pe=null,Ae=null,Ie=null,ct=null,Ut=null,rn=null}}}const a=new e,u=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},_={},y=new WeakMap,x=[],S=null,T=!1,R=null,g=null,v=null,L=null,P=null,b=null,Y=null,F=new at(0,0,0),I=0,k=!1,le=null,M=null,A=null,G=null,W=null;const ie=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,K=0;const oe=o.getParameter(o.VERSION);oe.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ue=K>=1):oe.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ue=K>=2);let z=null,fe={};const se=o.getParameter(o.SCISSOR_BOX),N=o.getParameter(o.VIEWPORT),re=new Bt().fromArray(se),Ce=new Bt().fromArray(N);function Z(V,be,ae,pe){const Ae=new Uint8Array(4),Ie=o.createTexture();o.bindTexture(V,Ie),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ct=0;ct<ae;ct++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(be,0,o.RGBA,1,1,pe,0,o.RGBA,o.UNSIGNED_BYTE,Ae):o.texImage2D(be+ct,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ae);return Ie}const ce={};ce[o.TEXTURE_2D]=Z(o.TEXTURE_2D,o.TEXTURE_2D,1),ce[o.TEXTURE_CUBE_MAP]=Z(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[o.TEXTURE_2D_ARRAY]=Z(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ce[o.TEXTURE_3D]=Z(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),xe(o.DEPTH_TEST),u.setFunc(ks),ot(!1),ft(Rp),xe(o.CULL_FACE),B(hr);function xe(V){m[V]!==!0&&(o.enable(V),m[V]=!0)}function ye(V){m[V]!==!1&&(o.disable(V),m[V]=!1)}function Pe(V,be){return _[V]!==be?(o.bindFramebuffer(V,be),_[V]=be,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=be),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=be),!0):!1}function Le(V,be){let ae=x,pe=!1;if(V){ae=y.get(be),ae===void 0&&(ae=[],y.set(be,ae));const Ae=V.textures;if(ae.length!==Ae.length||ae[0]!==o.COLOR_ATTACHMENT0){for(let Ie=0,ct=Ae.length;Ie<ct;Ie++)ae[Ie]=o.COLOR_ATTACHMENT0+Ie;ae.length=Ae.length,pe=!0}}else ae[0]!==o.BACK&&(ae[0]=o.BACK,pe=!0);pe&&o.drawBuffers(ae)}function Je(V){return S!==V?(o.useProgram(V),S=V,!0):!1}const pt={[zr]:o.FUNC_ADD,[G_]:o.FUNC_SUBTRACT,[W_]:o.FUNC_REVERSE_SUBTRACT};pt[X_]=o.MIN,pt[Y_]=o.MAX;const lt={[q_]:o.ZERO,[j_]:o.ONE,[K_]:o.SRC_COLOR,[Xc]:o.SRC_ALPHA,[tv]:o.SRC_ALPHA_SATURATE,[J_]:o.DST_COLOR,[Z_]:o.DST_ALPHA,[$_]:o.ONE_MINUS_SRC_COLOR,[Yc]:o.ONE_MINUS_SRC_ALPHA,[ev]:o.ONE_MINUS_DST_COLOR,[Q_]:o.ONE_MINUS_DST_ALPHA,[nv]:o.CONSTANT_COLOR,[iv]:o.ONE_MINUS_CONSTANT_COLOR,[rv]:o.CONSTANT_ALPHA,[sv]:o.ONE_MINUS_CONSTANT_ALPHA};function B(V,be,ae,pe,Ae,Ie,ct,Ut,rn,ht){if(V===hr){T===!0&&(ye(o.BLEND),T=!1);return}if(T===!1&&(xe(o.BLEND),T=!0),V!==V_){if(V!==R||ht!==k){if((g!==zr||P!==zr)&&(o.blendEquation(o.FUNC_ADD),g=zr,P=zr),ht)switch(V){case Ns:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cp:o.blendFunc(o.ONE,o.ONE);break;case Pp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ns:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Pp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}v=null,L=null,b=null,Y=null,F.set(0,0,0),I=0,R=V,k=ht}return}Ae=Ae||be,Ie=Ie||ae,ct=ct||pe,(be!==g||Ae!==P)&&(o.blendEquationSeparate(pt[be],pt[Ae]),g=be,P=Ae),(ae!==v||pe!==L||Ie!==b||ct!==Y)&&(o.blendFuncSeparate(lt[ae],lt[pe],lt[Ie],lt[ct]),v=ae,L=pe,b=Ie,Y=ct),(Ut.equals(F)===!1||rn!==I)&&(o.blendColor(Ut.r,Ut.g,Ut.b,rn),F.copy(Ut),I=rn),R=V,k=!1}function nn(V,be){V.side===Ui?ye(o.CULL_FACE):xe(o.CULL_FACE);let ae=V.side===An;be&&(ae=!ae),ot(ae),V.blending===Ns&&V.transparent===!1?B(hr):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),a.setMask(V.colorWrite);const pe=V.stencilWrite;f.setTest(pe),pe&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Tt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xe(o.SAMPLE_ALPHA_TO_COVERAGE):ye(o.SAMPLE_ALPHA_TO_COVERAGE)}function ot(V){le!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),le=V)}function ft(V){V!==z_?(xe(o.CULL_FACE),V!==M&&(V===Rp?o.cullFace(o.BACK):V===B_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ye(o.CULL_FACE),M=V}function Ke(V){V!==A&&(ue&&o.lineWidth(V),A=V)}function Tt(V,be,ae){V?(xe(o.POLYGON_OFFSET_FILL),(G!==be||W!==ae)&&(o.polygonOffset(be,ae),G=be,W=ae)):ye(o.POLYGON_OFFSET_FILL)}function Ze(V){V?xe(o.SCISSOR_TEST):ye(o.SCISSOR_TEST)}function D(V){V===void 0&&(V=o.TEXTURE0+ie-1),z!==V&&(o.activeTexture(V),z=V)}function w(V,be,ae){ae===void 0&&(z===null?ae=o.TEXTURE0+ie-1:ae=z);let pe=fe[ae];pe===void 0&&(pe={type:void 0,texture:void 0},fe[ae]=pe),(pe.type!==V||pe.texture!==be)&&(z!==ae&&(o.activeTexture(ae),z=ae),o.bindTexture(V,be||ce[V]),pe.type=V,pe.texture=be)}function J(){const V=fe[z];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function he(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(V){re.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),re.copy(V))}function ke(V){Ce.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Ce.copy(V))}function ut(V,be){let ae=p.get(be);ae===void 0&&(ae=new WeakMap,p.set(be,ae));let pe=ae.get(V);pe===void 0&&(pe=o.getUniformBlockIndex(be,V.name),ae.set(V,pe))}function nt(V,be){const pe=p.get(be).get(V);d.get(be)!==pe&&(o.uniformBlockBinding(be,pe,V.__bindingPointIndex),d.set(be,pe))}function St(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},z=null,fe={},_={},y=new WeakMap,x=[],S=null,T=!1,R=null,g=null,v=null,L=null,P=null,b=null,Y=null,F=new at(0,0,0),I=0,k=!1,le=null,M=null,A=null,G=null,W=null,re.set(0,0,o.canvas.width,o.canvas.height),Ce.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:xe,disable:ye,bindFramebuffer:Pe,drawBuffers:Le,useProgram:Je,setBlending:B,setMaterial:nn,setFlipSided:ot,setCullFace:ft,setLineWidth:Ke,setPolygonOffset:Tt,setScissorTest:Ze,activeTexture:D,bindTexture:w,unbindTexture:J,compressedTexImage2D:he,compressedTexImage3D:_e,texImage2D:Fe,texImage3D:et,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:dt,texStorage3D:Se,texSubImage2D:de,texSubImage3D:Xe,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Qe,viewport:ke,reset:St}}function ym(o,e,n,r){const a=LM(r);switch(n){case Am:return o*e;case Cm:return o*e;case Pm:return o*e*2;case Lm:return o*e/a.components*a.byteLength;case kf:return o*e/a.components*a.byteLength;case bm:return o*e*2/a.components*a.byteLength;case zf:return o*e*2/a.components*a.byteLength;case Rm:return o*e*3/a.components*a.byteLength;case si:return o*e*4/a.components*a.byteLength;case Bf:return o*e*4/a.components*a.byteLength;case gl:case _l:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vl:case xl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case of:case lf:return Math.max(o,16)*Math.max(e,8)/4;case sf:case af:return Math.max(o,8)*Math.max(e,8)/2;case uf:case cf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ff:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case pf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case mf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case gf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case _f:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case vf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case xf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case yl:case Af:case Rf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Dm:case Cf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Pf:case Lf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LM(o){switch(o){case Oi:case Em:return{byteLength:1,components:1};case Oo:case Tm:case ko:return{byteLength:2,components:1};case Ff:case Of:return{byteLength:2,components:4};case Wr:case Nf:case Ni:return{byteLength:4,components:1};case wm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function bM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new gt,_=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,w){return S?new OffscreenCanvas(D,w):Rl("canvas")}function R(D,w,J){let he=1;const _e=Ze(D);if((_e.width>J||_e.height>J)&&(he=J/Math.max(_e.width,_e.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(he*_e.width),Xe=Math.floor(he*_e.height);y===void 0&&(y=T(de,Xe));const we=w?T(de,Xe):y;return we.width=de,we.height=Xe,we.getContext("2d").drawImage(D,0,0,de,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+Xe+")."),we}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==Xn&&D.minFilter!==ii}function v(D){o.generateMipmap(D)}function L(D,w,J,he,_e=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=w;if(w===o.RED&&(J===o.FLOAT&&(de=o.R32F),J===o.HALF_FLOAT&&(de=o.R16F),J===o.UNSIGNED_BYTE&&(de=o.R8)),w===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(de=o.R8UI),J===o.UNSIGNED_SHORT&&(de=o.R16UI),J===o.UNSIGNED_INT&&(de=o.R32UI),J===o.BYTE&&(de=o.R8I),J===o.SHORT&&(de=o.R16I),J===o.INT&&(de=o.R32I)),w===o.RG&&(J===o.FLOAT&&(de=o.RG32F),J===o.HALF_FLOAT&&(de=o.RG16F),J===o.UNSIGNED_BYTE&&(de=o.RG8)),w===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(de=o.RG8UI),J===o.UNSIGNED_SHORT&&(de=o.RG16UI),J===o.UNSIGNED_INT&&(de=o.RG32UI),J===o.BYTE&&(de=o.RG8I),J===o.SHORT&&(de=o.RG16I),J===o.INT&&(de=o.RG32I)),w===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(de=o.RGB8UI),J===o.UNSIGNED_SHORT&&(de=o.RGB16UI),J===o.UNSIGNED_INT&&(de=o.RGB32UI),J===o.BYTE&&(de=o.RGB8I),J===o.SHORT&&(de=o.RGB16I),J===o.INT&&(de=o.RGB32I)),w===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),J===o.UNSIGNED_INT&&(de=o.RGBA32UI),J===o.BYTE&&(de=o.RGBA8I),J===o.SHORT&&(de=o.RGBA16I),J===o.INT&&(de=o.RGBA32I)),w===o.RGB&&J===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),w===o.RGBA){const Xe=_e?El:Mt.getTransfer(he);J===o.FLOAT&&(de=o.RGBA32F),J===o.HALF_FLOAT&&(de=o.RGBA16F),J===o.UNSIGNED_BYTE&&(de=Xe===bt?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function P(D,w){let J;return D?w===null||w===Wr||w===Hs?J=o.DEPTH24_STENCIL8:w===Ni?J=o.DEPTH32F_STENCIL8:w===Oo&&(J=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Wr||w===Hs?J=o.DEPTH_COMPONENT24:w===Ni?J=o.DEPTH_COMPONENT32F:w===Oo&&(J=o.DEPTH_COMPONENT16),J}function b(D,w){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Xn&&D.minFilter!==ii?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function Y(D){const w=D.target;w.removeEventListener("dispose",Y),I(w),w.isVideoTexture&&_.delete(w)}function F(D){const w=D.target;w.removeEventListener("dispose",F),le(w)}function I(D){const w=r.get(D);if(w.__webglInit===void 0)return;const J=D.source,he=x.get(J);if(he){const _e=he[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&k(D),Object.keys(he).length===0&&x.delete(J)}r.remove(D)}function k(D){const w=r.get(D);o.deleteTexture(w.__webglTexture);const J=D.source,he=x.get(J);delete he[w.__cacheKey],f.memory.textures--}function le(D){const w=r.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let _e=0;_e<w.__webglFramebuffer[he].length;_e++)o.deleteFramebuffer(w.__webglFramebuffer[he][_e]);else o.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)o.deleteFramebuffer(w.__webglFramebuffer[he]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=D.textures;for(let he=0,_e=J.length;he<_e;he++){const de=r.get(J[he]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),f.memory.textures--),r.remove(J[he])}r.remove(D)}let M=0;function A(){M=0}function G(){const D=M;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),M+=1,D}function W(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function ie(D,w){const J=r.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const he=D.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(J,D,w);return}}n.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+w)}function ue(D,w){const J=r.get(D);if(D.version>0&&J.__version!==D.version){Ce(J,D,w);return}n.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+w)}function K(D,w){const J=r.get(D);if(D.version>0&&J.__version!==D.version){Ce(J,D,w);return}n.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+w)}function oe(D,w){const J=r.get(D);if(D.version>0&&J.__version!==D.version){Z(J,D,w);return}n.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+w)}const z={[nf]:o.REPEAT,[Vr]:o.CLAMP_TO_EDGE,[rf]:o.MIRRORED_REPEAT},fe={[Xn]:o.NEAREST,[mv]:o.NEAREST_MIPMAP_NEAREST,[ja]:o.NEAREST_MIPMAP_LINEAR,[ii]:o.LINEAR,[pc]:o.LINEAR_MIPMAP_NEAREST,[Gr]:o.LINEAR_MIPMAP_LINEAR},se={[xv]:o.NEVER,[wv]:o.ALWAYS,[yv]:o.LESS,[Im]:o.LEQUAL,[Sv]:o.EQUAL,[Tv]:o.GEQUAL,[Mv]:o.GREATER,[Ev]:o.NOTEQUAL};function N(D,w){if(w.type===Ni&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ii||w.magFilter===pc||w.magFilter===ja||w.magFilter===Gr||w.minFilter===ii||w.minFilter===pc||w.minFilter===ja||w.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,z[w.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,z[w.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,z[w.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,fe[w.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,fe[w.minFilter]),w.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,se[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Xn||w.minFilter!==ja&&w.minFilter!==Gr||w.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function re(D,w){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",Y));const he=w.source;let _e=x.get(he);_e===void 0&&(_e={},x.set(he,_e));const de=W(w);if(de!==D.__cacheKey){_e[de]===void 0&&(_e[de]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,J=!0),_e[de].usedTimes++;const Xe=_e[D.__cacheKey];Xe!==void 0&&(_e[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&k(w)),D.__cacheKey=de,D.__webglTexture=_e[de].texture}return J}function Ce(D,w,J){let he=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=o.TEXTURE_3D);const _e=re(D,w),de=w.source;n.bindTexture(he,D.__webglTexture,o.TEXTURE0+J);const Xe=r.get(de);if(de.version!==Xe.__version||_e===!0){n.activeTexture(o.TEXTURE0+J);const we=Mt.getPrimaries(Mt.workingColorSpace),Ne=w.colorSpace===dr?null:Mt.getPrimaries(w.colorSpace),dt=w.colorSpace===dr||we===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Se=R(w.image,!1,a.maxTextureSize);Se=Tt(w,Se);const Fe=u.convert(w.format,w.colorSpace),et=u.convert(w.type);let Qe=L(w.internalFormat,Fe,et,w.colorSpace,w.isVideoTexture);N(he,w);let ke;const ut=w.mipmaps,nt=w.isVideoTexture!==!0,St=Xe.__version===void 0||_e===!0,V=de.dataReady,be=b(w,Se);if(w.isDepthTexture)Qe=P(w.format===Vs,w.type),St&&(nt?n.texStorage2D(o.TEXTURE_2D,1,Qe,Se.width,Se.height):n.texImage2D(o.TEXTURE_2D,0,Qe,Se.width,Se.height,0,Fe,et,null));else if(w.isDataTexture)if(ut.length>0){nt&&St&&n.texStorage2D(o.TEXTURE_2D,be,Qe,ut[0].width,ut[0].height);for(let ae=0,pe=ut.length;ae<pe;ae++)ke=ut[ae],nt?V&&n.texSubImage2D(o.TEXTURE_2D,ae,0,0,ke.width,ke.height,Fe,et,ke.data):n.texImage2D(o.TEXTURE_2D,ae,Qe,ke.width,ke.height,0,Fe,et,ke.data);w.generateMipmaps=!1}else nt?(St&&n.texStorage2D(o.TEXTURE_2D,be,Qe,Se.width,Se.height),V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Se.width,Se.height,Fe,et,Se.data)):n.texImage2D(o.TEXTURE_2D,0,Qe,Se.width,Se.height,0,Fe,et,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&St&&n.texStorage3D(o.TEXTURE_2D_ARRAY,be,Qe,ut[0].width,ut[0].height,Se.depth);for(let ae=0,pe=ut.length;ae<pe;ae++)if(ke=ut[ae],w.format!==si)if(Fe!==null)if(nt){if(V)if(w.layerUpdates.size>0){const Ae=ym(ke.width,ke.height,w.format,w.type);for(const Ie of w.layerUpdates){const ct=ke.data.subarray(Ie*Ae/ke.data.BYTES_PER_ELEMENT,(Ie+1)*Ae/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ae,0,0,Ie,ke.width,ke.height,1,Fe,ct,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ae,0,0,0,ke.width,ke.height,Se.depth,Fe,ke.data,0,0)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ae,Qe,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,ae,0,0,0,ke.width,ke.height,Se.depth,Fe,et,ke.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ae,Qe,ke.width,ke.height,Se.depth,0,Fe,et,ke.data)}else{nt&&St&&n.texStorage2D(o.TEXTURE_2D,be,Qe,ut[0].width,ut[0].height);for(let ae=0,pe=ut.length;ae<pe;ae++)ke=ut[ae],w.format!==si?Fe!==null?nt?V&&n.compressedTexSubImage2D(o.TEXTURE_2D,ae,0,0,ke.width,ke.height,Fe,ke.data):n.compressedTexImage2D(o.TEXTURE_2D,ae,Qe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&n.texSubImage2D(o.TEXTURE_2D,ae,0,0,ke.width,ke.height,Fe,et,ke.data):n.texImage2D(o.TEXTURE_2D,ae,Qe,ke.width,ke.height,0,Fe,et,ke.data)}else if(w.isDataArrayTexture)if(nt){if(St&&n.texStorage3D(o.TEXTURE_2D_ARRAY,be,Qe,Se.width,Se.height,Se.depth),V)if(w.layerUpdates.size>0){const ae=ym(Se.width,Se.height,w.format,w.type);for(const pe of w.layerUpdates){const Ae=Se.data.subarray(pe*ae/Se.data.BYTES_PER_ELEMENT,(pe+1)*ae/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Fe,et,Ae)}w.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Fe,et,Se.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Qe,Se.width,Se.height,Se.depth,0,Fe,et,Se.data);else if(w.isData3DTexture)nt?(St&&n.texStorage3D(o.TEXTURE_3D,be,Qe,Se.width,Se.height,Se.depth),V&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Fe,et,Se.data)):n.texImage3D(o.TEXTURE_3D,0,Qe,Se.width,Se.height,Se.depth,0,Fe,et,Se.data);else if(w.isFramebufferTexture){if(St)if(nt)n.texStorage2D(o.TEXTURE_2D,be,Qe,Se.width,Se.height);else{let ae=Se.width,pe=Se.height;for(let Ae=0;Ae<be;Ae++)n.texImage2D(o.TEXTURE_2D,Ae,Qe,ae,pe,0,Fe,et,null),ae>>=1,pe>>=1}}else if(ut.length>0){if(nt&&St){const ae=Ze(ut[0]);n.texStorage2D(o.TEXTURE_2D,be,Qe,ae.width,ae.height)}for(let ae=0,pe=ut.length;ae<pe;ae++)ke=ut[ae],nt?V&&n.texSubImage2D(o.TEXTURE_2D,ae,0,0,Fe,et,ke):n.texImage2D(o.TEXTURE_2D,ae,Qe,Fe,et,ke);w.generateMipmaps=!1}else if(nt){if(St){const ae=Ze(Se);n.texStorage2D(o.TEXTURE_2D,be,Qe,ae.width,ae.height)}V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Fe,et,Se)}else n.texImage2D(o.TEXTURE_2D,0,Qe,Fe,et,Se);g(w)&&v(he),Xe.__version=de.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Z(D,w,J){if(w.image.length!==6)return;const he=re(D,w),_e=w.source;n.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+J);const de=r.get(_e);if(_e.version!==de.__version||he===!0){n.activeTexture(o.TEXTURE0+J);const Xe=Mt.getPrimaries(Mt.workingColorSpace),we=w.colorSpace===dr?null:Mt.getPrimaries(w.colorSpace),Ne=w.colorSpace===dr||Xe===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const dt=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!dt&&!Se?Fe[pe]=R(w.image[pe],!0,a.maxCubemapSize):Fe[pe]=Se?w.image[pe].image:w.image[pe],Fe[pe]=Tt(w,Fe[pe]);const et=Fe[0],Qe=u.convert(w.format,w.colorSpace),ke=u.convert(w.type),ut=L(w.internalFormat,Qe,ke,w.colorSpace),nt=w.isVideoTexture!==!0,St=de.__version===void 0||he===!0,V=_e.dataReady;let be=b(w,et);N(o.TEXTURE_CUBE_MAP,w);let ae;if(dt){nt&&St&&n.texStorage2D(o.TEXTURE_CUBE_MAP,be,ut,et.width,et.height);for(let pe=0;pe<6;pe++){ae=Fe[pe].mipmaps;for(let Ae=0;Ae<ae.length;Ae++){const Ie=ae[Ae];w.format!==si?Qe!==null?nt?V&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae,0,0,Ie.width,Ie.height,Qe,Ie.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae,ut,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae,0,0,Ie.width,Ie.height,Qe,ke,Ie.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae,ut,Ie.width,Ie.height,0,Qe,ke,Ie.data)}}}else{if(ae=w.mipmaps,nt&&St){ae.length>0&&be++;const pe=Ze(Fe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,be,ut,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,Qe,ke,Fe[pe].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ut,Fe[pe].width,Fe[pe].height,0,Qe,ke,Fe[pe].data);for(let Ae=0;Ae<ae.length;Ae++){const ct=ae[Ae].image[pe].image;nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae+1,0,0,ct.width,ct.height,Qe,ke,ct.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae+1,ut,ct.width,ct.height,0,Qe,ke,ct.data)}}else{nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Qe,ke,Fe[pe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ut,Qe,ke,Fe[pe]);for(let Ae=0;Ae<ae.length;Ae++){const Ie=ae[Ae];nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae+1,0,0,Qe,ke,Ie.image[pe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae+1,ut,Qe,ke,Ie.image[pe])}}}g(w)&&v(o.TEXTURE_CUBE_MAP),de.__version=_e.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ce(D,w,J,he,_e,de){const Xe=u.convert(J.format,J.colorSpace),we=u.convert(J.type),Ne=L(J.internalFormat,Xe,we,J.colorSpace);if(!r.get(w).__hasExternalTextures){const Se=Math.max(1,w.width>>de),Fe=Math.max(1,w.height>>de);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?n.texImage3D(_e,de,Ne,Se,Fe,w.depth,0,Xe,we,null):n.texImage2D(_e,de,Ne,Se,Fe,0,Xe,we,null)}n.bindFramebuffer(o.FRAMEBUFFER,D),ft(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,_e,r.get(J).__webglTexture,0,ot(w)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,_e,r.get(J).__webglTexture,de),n.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(D,w,J){if(o.bindRenderbuffer(o.RENDERBUFFER,D),w.depthBuffer){const he=w.depthTexture,_e=he&&he.isDepthTexture?he.type:null,de=P(w.stencilBuffer,_e),Xe=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=ot(w);ft(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,de,w.width,w.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,de,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,de,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xe,o.RENDERBUFFER,D)}else{const he=w.textures;for(let _e=0;_e<he.length;_e++){const de=he[_e],Xe=u.convert(de.format,de.colorSpace),we=u.convert(de.type),Ne=L(de.internalFormat,Xe,we,de.colorSpace),dt=ot(w);J&&ft(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,dt,Ne,w.width,w.height):ft(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,dt,Ne,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ye(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ie(w.depthTexture,0);const he=r.get(w.depthTexture).__webglTexture,_e=ot(w);if(w.depthTexture.format===Fs)ft(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,he,0,_e):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,he,0);else if(w.depthTexture.format===Vs)ft(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,he,0,_e):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Pe(D){const w=r.get(D),J=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",_e)};he.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=he}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ye(w.__webglFramebuffer,D)}else if(J){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=o.createRenderbuffer(),xe(w.__webglDepthbuffer[he],D,!1);else{const _e=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,de)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),xe(w.__webglDepthbuffer,D,!1);else{const he=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_e),o.framebufferRenderbuffer(o.FRAMEBUFFER,he,o.RENDERBUFFER,_e)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(D,w,J){const he=r.get(D);w!==void 0&&ce(he.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&Pe(D)}function Je(D){const w=D.texture,J=r.get(D),he=r.get(w);D.addEventListener("dispose",F);const _e=D.textures,de=D.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=w.version,f.memory.textures++),de){J.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[we]=[];for(let Ne=0;Ne<w.mipmaps.length;Ne++)J.__webglFramebuffer[we][Ne]=o.createFramebuffer()}else J.__webglFramebuffer[we]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)J.__webglFramebuffer[we]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Xe)for(let we=0,Ne=_e.length;we<Ne;we++){const dt=r.get(_e[we]);dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture(),f.memory.textures++)}if(D.samples>0&&ft(D)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let we=0;we<_e.length;we++){const Ne=_e[we];J.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[we]);const dt=u.convert(Ne.format,Ne.colorSpace),Se=u.convert(Ne.type),Fe=L(Ne.internalFormat,dt,Se,Ne.colorSpace,D.isXRRenderTarget===!0),et=ot(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,et,Fe,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,J.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),xe(J.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){n.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),N(o.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)ce(J.__webglFramebuffer[we][Ne],D,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else ce(J.__webglFramebuffer[we],D,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);g(w)&&v(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let we=0,Ne=_e.length;we<Ne;we++){const dt=_e[we],Se=r.get(dt);n.bindTexture(o.TEXTURE_2D,Se.__webglTexture),N(o.TEXTURE_2D,dt),ce(J.__webglFramebuffer,D,dt,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),g(dt)&&v(o.TEXTURE_2D)}n.unbindTexture()}else{let we=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(we,he.__webglTexture),N(we,w),w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)ce(J.__webglFramebuffer[Ne],D,w,o.COLOR_ATTACHMENT0,we,Ne);else ce(J.__webglFramebuffer,D,w,o.COLOR_ATTACHMENT0,we,0);g(w)&&v(we),n.unbindTexture()}D.depthBuffer&&Pe(D)}function pt(D){const w=D.textures;for(let J=0,he=w.length;J<he;J++){const _e=w[J];if(g(_e)){const de=D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Xe=r.get(_e).__webglTexture;n.bindTexture(de,Xe),v(de),n.unbindTexture()}}}const lt=[],B=[];function nn(D){if(D.samples>0){if(ft(D)===!1){const w=D.textures,J=D.width,he=D.height;let _e=o.COLOR_BUFFER_BIT;const de=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xe=r.get(D),we=w.length>1;if(we)for(let Ne=0;Ne<w.length;Ne++)n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ne=0;Ne<w.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ne]);const dt=r.get(w[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,dt,0)}o.blitFramebuffer(0,0,J,he,0,0,J,he,_e,o.NEAREST),p===!0&&(lt.length=0,B.length=0,lt.push(o.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(lt.push(de),B.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<w.length;Ne++){n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ne]);const dt=r.get(w[Ne]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,dt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const w=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function ot(D){return Math.min(a.maxSamples,D.samples)}function ft(D){const w=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(D){const w=f.render.frame;_.get(D)!==w&&(_.set(D,w),D.update())}function Tt(D,w){const J=D.colorSpace,he=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==_r&&J!==dr&&(Mt.getTransfer(J)===bt?(he!==si||_e!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}function Ze(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=G,this.resetTextureUnits=A,this.setTexture2D=ie,this.setTexture2DArray=ue,this.setTexture3D=K,this.setTextureCube=oe,this.rebindTextures=Le,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ft}function DM(o,e){function n(r,a=dr){let u;const f=Mt.getTransfer(a);if(r===Oi)return o.UNSIGNED_BYTE;if(r===Ff)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Of)return o.UNSIGNED_SHORT_5_5_5_1;if(r===wm)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Em)return o.BYTE;if(r===Tm)return o.SHORT;if(r===Oo)return o.UNSIGNED_SHORT;if(r===Nf)return o.INT;if(r===Wr)return o.UNSIGNED_INT;if(r===Ni)return o.FLOAT;if(r===ko)return o.HALF_FLOAT;if(r===Am)return o.ALPHA;if(r===Rm)return o.RGB;if(r===si)return o.RGBA;if(r===Cm)return o.LUMINANCE;if(r===Pm)return o.LUMINANCE_ALPHA;if(r===Fs)return o.DEPTH_COMPONENT;if(r===Vs)return o.DEPTH_STENCIL;if(r===Lm)return o.RED;if(r===kf)return o.RED_INTEGER;if(r===bm)return o.RG;if(r===zf)return o.RG_INTEGER;if(r===Bf)return o.RGBA_INTEGER;if(r===gl||r===_l||r===vl||r===xl)if(f===bt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===gl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===gl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sf||r===of||r===af||r===lf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===sf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===of)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===af)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uf||r===cf||r===ff)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===uf||r===cf)return f===bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ff)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===df||r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===Tf||r===wf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===df)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_f)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ef)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yl||r===Af||r===Rf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===yl)return f===bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Af)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dm||r===Cf||r===Pf||r===Lf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===yl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Cf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}class IM extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ml extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UM={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const g=n.getJointPose(R,r),v=this._getHandJoint(m,R);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=_.position.distanceTo(y.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(UM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ml;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const NM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Rn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new gr({vertexShader:NM,fragmentShader:FM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ot(new Vo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kM extends Ws{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,y=null,x=null,S=null,T=null;const R=new OM,g=n.getContextAttributes();let v=null,L=null;const P=[],b=[],Y=new gt;let F=null;const I=new Wn;I.layers.enable(1),I.viewport=new Bt;const k=new Wn;k.layers.enable(2),k.viewport=new Bt;const le=[I,k],M=new IM;M.layers.enable(1),M.layers.enable(2);let A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=P[Z];return ce===void 0&&(ce=new Wc,P[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=P[Z];return ce===void 0&&(ce=new Wc,P[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=P[Z];return ce===void 0&&(ce=new Wc,P[Z]=ce),ce.getHandSpace()};function W(Z){const ce=b.indexOf(Z.inputSource);if(ce===-1)return;const xe=P[ce];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,m||f),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ie(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",ie),a.removeEventListener("inputsourceschange",ue);for(let Z=0;Z<P.length;Z++){const ce=b[Z];ce!==null&&(b[Z]=null,P[Z].disconnect(ce))}A=null,G=null,R.reset(),e.setRenderTarget(v),S=null,x=null,y=null,a=null,L=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",ie),a.addEventListener("inputsourceschange",ue),g.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(Y),a.renderState.layers===void 0){const ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,ce),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Xr(S.framebufferWidth,S.framebufferHeight,{format:si,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,xe=null,ye=null;g.depth&&(ye=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=g.stencil?Vs:Fs,xe=g.stencil?Hs:Wr);const Pe={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:u};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Pe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Xr(x.textureWidth,x.textureHeight,{format:si,type:Oi,depthTexture:new Ym(x.textureWidth,x.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ce.setContext(a),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ue(Z){for(let ce=0;ce<Z.removed.length;ce++){const xe=Z.removed[ce],ye=b.indexOf(xe);ye>=0&&(b[ye]=null,P[ye].disconnect(xe))}for(let ce=0;ce<Z.added.length;ce++){const xe=Z.added[ce];let ye=b.indexOf(xe);if(ye===-1){for(let Le=0;Le<P.length;Le++)if(Le>=b.length){b.push(xe),ye=Le;break}else if(b[Le]===null){b[Le]=xe,ye=Le;break}if(ye===-1)break}const Pe=P[ye];Pe&&Pe.connect(xe)}}const K=new Q,oe=new Q;function z(Z,ce,xe){K.setFromMatrixPosition(ce.matrixWorld),oe.setFromMatrixPosition(xe.matrixWorld);const ye=K.distanceTo(oe),Pe=ce.projectionMatrix.elements,Le=xe.projectionMatrix.elements,Je=Pe[14]/(Pe[10]-1),pt=Pe[14]/(Pe[10]+1),lt=(Pe[9]+1)/Pe[5],B=(Pe[9]-1)/Pe[5],nn=(Pe[8]-1)/Pe[0],ot=(Le[8]+1)/Le[0],ft=Je*nn,Ke=Je*ot,Tt=ye/(-nn+ot),Ze=Tt*-nn;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ze),Z.translateZ(Tt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pe[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const D=Je+Tt,w=pt+Tt,J=ft-Ze,he=Ke+(ye-Ze),_e=lt*pt/w*D,de=B*pt/w*D;Z.projectionMatrix.makePerspective(J,he,_e,de,D,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function fe(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ce=Z.near,xe=Z.far;R.texture!==null&&(R.depthNear>0&&(ce=R.depthNear),R.depthFar>0&&(xe=R.depthFar)),M.near=k.near=I.near=ce,M.far=k.far=I.far=xe,(A!==M.near||G!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,G=M.far);const ye=Z.parent,Pe=M.cameras;fe(M,ye);for(let Le=0;Le<Pe.length;Le++)fe(Pe[Le],ye);Pe.length===2?z(M,I,k):M.projectionMatrix.copy(I.projectionMatrix),se(Z,M,ye)};function se(Z,ce,xe){xe===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=bf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(M)};let N=null;function re(Z,ce){if(_=ce.getViewerPose(m||f),T=ce,_!==null){const xe=_.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ye=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,ye=!0);for(let Le=0;Le<xe.length;Le++){const Je=xe[Le];let pt=null;if(S!==null)pt=S.getViewport(Je);else{const B=y.getViewSubImage(x,Je);pt=B.viewport,Le===0&&(e.setRenderTargetTextures(L,B.colorTexture,x.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(L))}let lt=le[Le];lt===void 0&&(lt=new Wn,lt.layers.enable(Le),lt.viewport=new Bt,le[Le]=lt),lt.matrix.fromArray(Je.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Je.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(pt.x,pt.y,pt.width,pt.height),Le===0&&(M.matrix.copy(lt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ye===!0&&M.cameras.push(lt)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Le=y.getDepthInformation(xe[0]);Le&&Le.isValid&&Le.texture&&R.init(e,Le,a.renderState)}}for(let xe=0;xe<P.length;xe++){const ye=b[xe],Pe=P[xe];ye!==null&&Pe!==void 0&&Pe.update(ye,ce,m||f)}N&&N(Z,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),T=null}const Ce=new Xm;Ce.setAnimationLoop(re),this.setAnimationLoop=function(Z){N=Z},this.dispose=function(){}}}const Fr=new oi,zM=new Gt;function BM(o,e){function n(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function r(g,v){v.color.getRGB(g.fogColor.value,Hm(o)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function a(g,v,L,P,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(g,v):v.isMeshToonMaterial?(u(g,v),y(g,v)):v.isMeshPhongMaterial?(u(g,v),_(g,v)):v.isMeshStandardMaterial?(u(g,v),x(g,v),v.isMeshPhysicalMaterial&&S(g,v,b)):v.isMeshMatcapMaterial?(u(g,v),T(g,v)):v.isMeshDepthMaterial?u(g,v):v.isMeshDistanceMaterial?(u(g,v),R(g,v)):v.isMeshNormalMaterial?u(g,v):v.isLineBasicMaterial?(f(g,v),v.isLineDashedMaterial&&d(g,v)):v.isPointsMaterial?p(g,v,L,P):v.isSpriteMaterial?m(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,n(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,n(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===An&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,n(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===An&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,n(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,n(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const L=e.get(v),P=L.envMap,b=L.envMapRotation;P&&(g.envMap.value=P,Fr.copy(b),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),g.envMapRotation.value.setFromMatrix4(zM.makeRotationFromEuler(Fr)),g.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,g.lightMapTransform)),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,g.aoMapTransform))}function f(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,n(v.map,g.mapTransform))}function d(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function p(g,v,L,P){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*L,g.scale.value=P*.5,v.map&&(g.map.value=v.map,n(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function m(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,n(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function _(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function y(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function x(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,g.roughnessMapTransform)),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function S(g,v,L){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===An&&g.clearcoatNormalScale.value.negate())),v.dispersion>0&&(g.dispersion.value=v.dispersion),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=L.texture,g.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,g.specularIntensityMapTransform))}function T(g,v){v.matcap&&(g.matcap.value=v.matcap)}function R(g,v){const L=e.get(v).light;g.referencePosition.value.setFromMatrixPosition(L.matrixWorld),g.nearDistance.value=L.shadow.camera.near,g.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function HM(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,P){const b=P.program;r.uniformBlockBinding(L,b)}function m(L,P){let b=a[L.id];b===void 0&&(T(L),b=_(L),a[L.id]=b,L.addEventListener("dispose",g));const Y=P.program;r.updateUBOMapping(L,Y);const F=e.render.frame;u[L.id]!==F&&(x(L),u[L.id]=F)}function _(L){const P=y();L.__bindingPointIndex=P;const b=o.createBuffer(),Y=L.__size,F=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,Y,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,b),b}function y(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const P=a[L.id],b=L.uniforms,Y=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let F=0,I=b.length;F<I;F++){const k=Array.isArray(b[F])?b[F]:[b[F]];for(let le=0,M=k.length;le<M;le++){const A=k[le];if(S(A,F,le,Y)===!0){const G=A.__offset,W=Array.isArray(A.value)?A.value:[A.value];let ie=0;for(let ue=0;ue<W.length;ue++){const K=W[ue],oe=R(K);typeof K=="number"||typeof K=="boolean"?(A.__data[0]=K,o.bufferSubData(o.UNIFORM_BUFFER,G+ie,A.__data)):K.isMatrix3?(A.__data[0]=K.elements[0],A.__data[1]=K.elements[1],A.__data[2]=K.elements[2],A.__data[3]=0,A.__data[4]=K.elements[3],A.__data[5]=K.elements[4],A.__data[6]=K.elements[5],A.__data[7]=0,A.__data[8]=K.elements[6],A.__data[9]=K.elements[7],A.__data[10]=K.elements[8],A.__data[11]=0):(K.toArray(A.__data,ie),ie+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,G,A.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(L,P,b,Y){const F=L.value,I=P+"_"+b;if(Y[I]===void 0)return typeof F=="number"||typeof F=="boolean"?Y[I]=F:Y[I]=F.clone(),!0;{const k=Y[I];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return Y[I]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function T(L){const P=L.uniforms;let b=0;const Y=16;for(let I=0,k=P.length;I<k;I++){const le=Array.isArray(P[I])?P[I]:[P[I]];for(let M=0,A=le.length;M<A;M++){const G=le[M],W=Array.isArray(G.value)?G.value:[G.value];for(let ie=0,ue=W.length;ie<ue;ie++){const K=W[ie],oe=R(K),z=b%Y,fe=z%oe.boundary,se=z+fe;b+=fe,se!==0&&Y-se<oe.storage&&(b+=Y-se),G.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=oe.storage}}}const F=b%Y;return F>0&&(b+=Y-F),L.__size=b,L.__cache={},this}function R(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function g(L){const P=L.target;P.removeEventListener("dispose",g);const b=f.indexOf(P.__bindingPointIndex);f.splice(b,1),o.deleteBuffer(a[P.id]),delete a[P.id],delete u[P.id]}function v(){for(const L in a)o.deleteBuffer(a[L]);f=[],a={},u={}}return{bind:p,update:m,dispose:v}}class VM{constructor(e={}){const{canvas:n=Rv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const S=new Uint32Array(4),T=new Int32Array(4);let R=null,g=null;const v=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pi,this.toneMapping=pr,this.toneMappingExposure=1;const P=this;let b=!1,Y=0,F=0,I=null,k=-1,le=null;const M=new Bt,A=new Bt;let G=null;const W=new at(0);let ie=0,ue=n.width,K=n.height,oe=1,z=null,fe=null;const se=new Bt(0,0,ue,K),N=new Bt(0,0,ue,K);let re=!1;const Ce=new Wm;let Z=!1,ce=!1;const xe=new Gt,ye=new Gt,Pe=new Q,Le=new Bt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function lt(){return I===null?oe:1}let B=r;function nn(C,X){return n.getContext(C,X)}try{const C={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uf}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Ae,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),B===null){const X="webgl2";if(B=nn(X,C),B===null)throw nn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ot,ft,Ke,Tt,Ze,D,w,J,he,_e,de,Xe,we,Ne,dt,Se,Fe,et,Qe,ke,ut,nt,St,V;function be(){ot=new qy(B),ot.init(),nt=new DM(B,ot),ft=new By(B,ot,e,nt),Ke=new PM(B),ft.reverseDepthBuffer&&Ke.buffers.depth.setReversed(!0),Tt=new $y(B),Ze=new pM,D=new bM(B,ot,Ke,Ze,ft,nt,Tt),w=new Vy(P),J=new Yy(P),he=new n0(B),St=new ky(B,he),_e=new jy(B,he,Tt,St),de=new Qy(B,_e,he,Tt),Qe=new Zy(B,ft,D),Se=new Hy(Ze),Xe=new hM(P,w,J,ot,ft,St,Se),we=new BM(P,Ze),Ne=new gM,dt=new MM(ot),et=new Oy(P,w,J,Ke,de,x,p),Fe=new RM(P,de,ft),V=new HM(B,Tt,ft,Ke),ke=new zy(B,ot,Tt),ut=new Ky(B,ot,Tt),Tt.programs=Xe.programs,P.capabilities=ft,P.extensions=ot,P.properties=Ze,P.renderLists=Ne,P.shadowMap=Fe,P.state=Ke,P.info=Tt}be();const ae=new kM(P,B);this.xr=ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=ot.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ot.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(C){C!==void 0&&(oe=C,this.setSize(ue,K,!1))},this.getSize=function(C){return C.set(ue,K)},this.setSize=function(C,X,ee=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=C,K=X,n.width=Math.floor(C*oe),n.height=Math.floor(X*oe),ee===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(ue*oe,K*oe).floor()},this.setDrawingBufferSize=function(C,X,ee){ue=C,K=X,oe=ee,n.width=Math.floor(C*ee),n.height=Math.floor(X*ee),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(se)},this.setViewport=function(C,X,ee,te){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,X,ee,te),Ke.viewport(M.copy(se).multiplyScalar(oe).round())},this.getScissor=function(C){return C.copy(N)},this.setScissor=function(C,X,ee,te){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,X,ee,te),Ke.scissor(A.copy(N).multiplyScalar(oe).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(C){Ke.setScissorTest(re=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){fe=C},this.getClearColor=function(C){return C.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(C=!0,X=!0,ee=!0){let te=0;if(C){let q=!1;if(I!==null){const Ee=I.texture.format;q=Ee===Bf||Ee===zf||Ee===kf}if(q){const Ee=I.texture.type,De=Ee===Oi||Ee===Wr||Ee===Oo||Ee===Hs||Ee===Ff||Ee===Of,Te=et.getClearColor(),Ve=et.getClearAlpha(),je=Te.r,$e=Te.g,Ge=Te.b;De?(S[0]=je,S[1]=$e,S[2]=Ge,S[3]=Ve,B.clearBufferuiv(B.COLOR,0,S)):(T[0]=je,T[1]=$e,T[2]=Ge,T[3]=Ve,B.clearBufferiv(B.COLOR,0,T))}else te|=B.COLOR_BUFFER_BIT}X&&(te|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ee&&(te|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Ae,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),Ne.dispose(),dt.dispose(),Ze.dispose(),w.dispose(),J.dispose(),de.dispose(),St.dispose(),V.dispose(),Xe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ki),ae.removeEventListener("sessionend",Yr),Cn.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=Tt.autoReset,X=Fe.enabled,ee=Fe.autoUpdate,te=Fe.needsUpdate,q=Fe.type;be(),Tt.autoReset=C,Fe.enabled=X,Fe.autoUpdate=ee,Fe.needsUpdate=te,Fe.type=q}function Ie(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ct(C){const X=C.target;X.removeEventListener("dispose",ct),Ut(X)}function Ut(C){rn(C),Ze.remove(C)}function rn(C){const X=Ze.get(C).programs;X!==void 0&&(X.forEach(function(ee){Xe.releaseProgram(ee)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ee,te,q,Ee){X===null&&(X=Je);const De=q.isMesh&&q.matrixWorld.determinant()<0,Te=vi(C,X,ee,te,q);Ke.setMaterial(te,De);let Ve=ee.index,je=1;if(te.wireframe===!0){if(Ve=_e.getWireframeAttribute(ee),Ve===void 0)return;je=2}const $e=ee.drawRange,Ge=ee.attributes.position;let yt=$e.start*je,wt=($e.start+$e.count)*je;Ee!==null&&(yt=Math.max(yt,Ee.start*je),wt=Math.min(wt,(Ee.start+Ee.count)*je)),Ve!==null?(yt=Math.max(yt,0),wt=Math.min(wt,Ve.count)):Ge!=null&&(yt=Math.max(yt,0),wt=Math.min(wt,Ge.count));const At=wt-yt;if(At<0||At===1/0)return;St.setup(q,te,Te,ee,Ve);let Dt,_t=ke;if(Ve!==null&&(Dt=he.get(Ve),_t=ut,_t.setIndex(Dt)),q.isMesh)te.wireframe===!0?(Ke.setLineWidth(te.wireframeLinewidth*lt()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(q.isLine){let Oe=te.linewidth;Oe===void 0&&(Oe=1),Ke.setLineWidth(Oe*lt()),q.isLineSegments?_t.setMode(B.LINES):q.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else q.isPoints?_t.setMode(B.POINTS):q.isSprite&&_t.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)_t.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))_t.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Oe=q._multiDrawStarts,Wt=q._multiDrawCounts,vt=q._multiDrawCount,Pn=Ve?he.get(Ve).bytesPerElement:1,Yn=Ze.get(te).currentProgram.getUniforms();for(let Zt=0;Zt<vt;Zt++)Yn.setValue(B,"_gl_DrawID",Zt),_t.render(Oe[Zt]/Pn,Wt[Zt])}else if(q.isInstancedMesh)_t.renderInstances(yt,At,q.count);else if(ee.isInstancedBufferGeometry){const Oe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Wt=Math.min(ee.instanceCount,Oe);_t.renderInstances(yt,At,Wt)}else _t.render(yt,At)};function ht(C,X,ee){C.transparent===!0&&C.side===Ui&&C.forceSinglePass===!1?(C.side=An,C.needsUpdate=!0,jr(C,X,ee),C.side=mr,C.needsUpdate=!0,jr(C,X,ee),C.side=Ui):jr(C,X,ee)}this.compile=function(C,X,ee=null){ee===null&&(ee=C),g=dt.get(ee),g.init(X),L.push(g),ee.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),C!==ee&&C.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();const te=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Te=Ee[De];ht(Te,ee,q),te.add(Te)}else ht(Ee,ee,q),te.add(Ee)}),L.pop(),g=null,te},this.compileAsync=function(C,X,ee=null){const te=this.compile(C,X,ee);return new Promise(q=>{function Ee(){if(te.forEach(function(De){Ze.get(De).currentProgram.isReady()&&te.delete(De)}),te.size===0){q(C);return}setTimeout(Ee,10)}ot.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let $t=null;function Fn(C){$t&&$t(C)}function ki(){Cn.stop()}function Yr(){Cn.start()}const Cn=new Xm;Cn.setAnimationLoop(Fn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(C){$t=C,ae.setAnimationLoop(C),C===null?Cn.stop():Cn.start()},ae.addEventListener("sessionstart",ki),ae.addEventListener("sessionend",Yr),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,X,I),g=dt.get(C,L.length),g.init(X),L.push(g),ye.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ce.setFromProjectionMatrix(ye),ce=this.localClippingEnabled,Z=Se.init(this.clippingPlanes,ce),R=Ne.get(C,v.length),R.init(),v.push(R),ae.enabled===!0&&ae.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&js(Ee,X,-1/0,P.sortObjects)}js(C,X,0,P.sortObjects),R.finish(),P.sortObjects===!0&&R.sort(z,fe),pt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,pt&&et.addToRenderList(R,C),this.info.render.frame++,Z===!0&&Se.beginShadows();const ee=g.state.shadowsArray;Fe.render(ee,C,X),Z===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=R.opaque,q=R.transmissive;if(g.setupLights(),X.isArrayCamera){const Ee=X.cameras;if(q.length>0)for(let De=0,Te=Ee.length;De<Te;De++){const Ve=Ee[De];vr(te,q,C,Ve)}pt&&et.render(C);for(let De=0,Te=Ee.length;De<Te;De++){const Ve=Ee[De];zi(R,C,Ve,Ve.viewport)}}else q.length>0&&vr(te,q,C,X),pt&&et.render(C),zi(R,C,X);I!==null&&(D.updateMultisampleRenderTarget(I),D.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(P,C,X),St.resetDefaultState(),k=-1,le=null,L.pop(),L.length>0?(g=L[L.length-1],Z===!0&&Se.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?R=v[v.length-1]:R=null};function js(C,X,ee,te){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ce.intersectsSprite(C)){te&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);const De=de.update(C),Te=C.material;Te.visible&&R.push(C,De,Te,ee,Le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ce.intersectsObject(C))){const De=de.update(C),Te=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Le.copy(De.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(ye)),Array.isArray(Te)){const Ve=De.groups;for(let je=0,$e=Ve.length;je<$e;je++){const Ge=Ve[je],yt=Te[Ge.materialIndex];yt&&yt.visible&&R.push(C,De,yt,ee,Le.z,Ge)}}else Te.visible&&R.push(C,De,Te,ee,Le.z,null)}}const Ee=C.children;for(let De=0,Te=Ee.length;De<Te;De++)js(Ee[De],X,ee,te)}function zi(C,X,ee,te){const q=C.opaque,Ee=C.transmissive,De=C.transparent;g.setupLightsView(ee),Z===!0&&Se.setGlobalState(P.clippingPlanes,ee),te&&Ke.viewport(M.copy(te)),q.length>0&&_i(q,X,ee),Ee.length>0&&_i(Ee,X,ee),De.length>0&&_i(De,X,ee),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function vr(C,X,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new Xr(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?ko:Oi,minFilter:Gr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Ee=g.state.transmissionRenderTarget[te.id],De=te.viewport||M;Ee.setSize(De.z,De.w);const Te=P.getRenderTarget();P.setRenderTarget(Ee),P.getClearColor(W),ie=P.getClearAlpha(),ie<1&&P.setClearColor(16777215,.5),P.clear(),pt&&et.render(ee);const Ve=P.toneMapping;P.toneMapping=pr;const je=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),Z===!0&&Se.setGlobalState(P.clippingPlanes,te),_i(C,ee,te),D.updateMultisampleRenderTarget(Ee),D.updateRenderTargetMipmap(Ee),ot.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ge=0,yt=X.length;Ge<yt;Ge++){const wt=X[Ge],At=wt.object,Dt=wt.geometry,_t=wt.material,Oe=wt.group;if(_t.side===Ui&&At.layers.test(te.layers)){const Wt=_t.side;_t.side=An,_t.needsUpdate=!0,qr(At,ee,te,Dt,_t,Oe),_t.side=Wt,_t.needsUpdate=!0,$e=!0}}$e===!0&&(D.updateMultisampleRenderTarget(Ee),D.updateRenderTargetMipmap(Ee))}P.setRenderTarget(Te),P.setClearColor(W,ie),je!==void 0&&(te.viewport=je),P.toneMapping=Ve}function _i(C,X,ee){const te=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ee=C.length;q<Ee;q++){const De=C[q],Te=De.object,Ve=De.geometry,je=te===null?De.material:te,$e=De.group;Te.layers.test(ee.layers)&&qr(Te,X,ee,Ve,je,$e)}}function qr(C,X,ee,te,q,Ee){C.onBeforeRender(P,X,ee,te,q,Ee),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(P,X,ee,te,C,Ee),q.transparent===!0&&q.side===Ui&&q.forceSinglePass===!1?(q.side=An,q.needsUpdate=!0,P.renderBufferDirect(ee,X,te,q,C,Ee),q.side=mr,q.needsUpdate=!0,P.renderBufferDirect(ee,X,te,q,C,Ee),q.side=Ui):P.renderBufferDirect(ee,X,te,q,C,Ee),C.onAfterRender(P,X,ee,te,q,Ee)}function jr(C,X,ee){X.isScene!==!0&&(X=Je);const te=Ze.get(C),q=g.state.lights,Ee=g.state.shadowsArray,De=q.state.version,Te=Xe.getParameters(C,q.state,Ee,X,ee),Ve=Xe.getProgramCacheKey(Te);let je=te.programs;te.environment=C.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(C.isMeshStandardMaterial?J:w).get(C.envMap||te.environment),te.envMapRotation=te.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,je===void 0&&(C.addEventListener("dispose",ct),je=new Map,te.programs=je);let $e=je.get(Ve);if($e!==void 0){if(te.currentProgram===$e&&te.lightsStateVersion===De)return Wo(C,Te),$e}else Te.uniforms=Xe.getUniforms(C),C.onBeforeCompile(Te,P),$e=Xe.acquireProgram(Te,Ve),je.set(Ve,$e),te.uniforms=Te.uniforms;const Ge=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=Se.uniform),Wo(C,Te),te.needsLights=Yo(C),te.lightsStateVersion=De,te.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMap.value=q.state.directionalShadowMap,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotShadowMap.value=q.state.spotShadowMap,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMap.value=q.state.pointShadowMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix),te.currentProgram=$e,te.uniformsList=null,$e}function Go(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Ml.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Wo(C,X){const ee=Ze.get(C);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function vi(C,X,ee,te,q){X.isScene!==!0&&(X=Je),D.resetTextureUnits();const Ee=X.fog,De=te.isMeshStandardMaterial?X.environment:null,Te=I===null?P.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:_r,Ve=(te.isMeshStandardMaterial?J:w).get(te.envMap||De),je=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,$e=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ge=!!ee.morphAttributes.position,yt=!!ee.morphAttributes.normal,wt=!!ee.morphAttributes.color;let At=pr;te.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(At=P.toneMapping);const Dt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=Dt!==void 0?Dt.length:0,Oe=Ze.get(te),Wt=g.state.lights;if(Z===!0&&(ce===!0||C!==le)){const an=C===le&&te.id===k;Se.setState(te,C,an)}let vt=!1;te.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Wt.state.version||Oe.outputColorSpace!==Te||q.isBatchedMesh&&Oe.batching===!1||!q.isBatchedMesh&&Oe.batching===!0||q.isBatchedMesh&&Oe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Oe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||q.isInstancedMesh&&Oe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Oe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Oe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Oe.instancingMorph===!1&&q.morphTexture!==null||Oe.envMap!==Ve||te.fog===!0&&Oe.fog!==Ee||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Se.numPlanes||Oe.numIntersection!==Se.numIntersection)||Oe.vertexAlphas!==je||Oe.vertexTangents!==$e||Oe.morphTargets!==Ge||Oe.morphNormals!==yt||Oe.morphColors!==wt||Oe.toneMapping!==At||Oe.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,Oe.__version=te.version);let Pn=Oe.currentProgram;vt===!0&&(Pn=jr(te,X,q));let Yn=!1,Zt=!1,xi=!1;const Rt=Pn.getUniforms(),li=Oe.uniforms;if(Ke.useProgram(Pn.program)&&(Yn=!0,Zt=!0,xi=!0),te.id!==k&&(k=te.id,Zt=!0),Yn||le!==C){ft.reverseDepthBuffer?(xe.copy(C.projectionMatrix),Pv(xe),Lv(xe),Rt.setValue(B,"projectionMatrix",xe)):Rt.setValue(B,"projectionMatrix",C.projectionMatrix),Rt.setValue(B,"viewMatrix",C.matrixWorldInverse);const an=Rt.map.cameraPosition;an!==void 0&&an.setValue(B,Pe.setFromMatrixPosition(C.matrixWorld)),ft.logarithmicDepthBuffer&&Rt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),le!==C&&(le=C,Zt=!0,xi=!0)}if(q.isSkinnedMesh){Rt.setOptional(B,q,"bindMatrix"),Rt.setOptional(B,q,"bindMatrixInverse");const an=q.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Rt.setValue(B,"boneTexture",an.boneTexture,D))}q.isBatchedMesh&&(Rt.setOptional(B,q,"batchingTexture"),Rt.setValue(B,"batchingTexture",q._matricesTexture,D),Rt.setOptional(B,q,"batchingIdTexture"),Rt.setValue(B,"batchingIdTexture",q._indirectTexture,D),Rt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Rt.setValue(B,"batchingColorTexture",q._colorsTexture,D));const Ks=ee.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&Qe.update(q,ee,Pn),(Zt||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,Rt.setValue(B,"receiveShadow",q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(li.envMap.value=Ve,li.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&X.environment!==null&&(li.envMapIntensity.value=X.environmentIntensity),Zt&&(Rt.setValue(B,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&Xo(li,xi),Ee&&te.fog===!0&&we.refreshFogUniforms(li,Ee),we.refreshMaterialUniforms(li,te,oe,K,g.state.transmissionRenderTarget[C.id]),Ml.upload(B,Go(Oe),li,D)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ml.upload(B,Go(Oe),li,D),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(B,"center",q.center),Rt.setValue(B,"modelViewMatrix",q.modelViewMatrix),Rt.setValue(B,"normalMatrix",q.normalMatrix),Rt.setValue(B,"modelMatrix",q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const an=te.uniformsGroups;for(let Kr=0,$s=an.length;Kr<$s;Kr++){const Bi=an[Kr];V.update(Bi,Pn),V.bind(Bi,Pn)}}return Pn}function Xo(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Yo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,X,ee){Ze.get(C.texture).__webglTexture=X,Ze.get(C.depthTexture).__webglTexture=ee;const te=Ze.get(C);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const ee=Ze.get(C);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ee=0){I=C,Y=X,F=ee;let te=!0,q=null,Ee=!1,De=!1;if(C){const Ve=Ze.get(C);if(Ve.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(B.FRAMEBUFFER,null),te=!1;else if(Ve.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Ve.__hasExternalTextures)D.rebindTextures(C,Ze.get(C.texture).__webglTexture,Ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ge=C.depthTexture;if(Ve.__boundDepthTexture!==Ge){if(Ge!==null&&Ze.has(Ge)&&(C.width!==Ge.image.width||C.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(De=!0);const $e=Ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[X])?q=$e[X][ee]:q=$e[X],Ee=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?q=Ze.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?q=$e[ee]:q=$e,M.copy(C.viewport),A.copy(C.scissor),G=C.scissorTest}else M.copy(se).multiplyScalar(oe).floor(),A.copy(N).multiplyScalar(oe).floor(),G=re;if(Ke.bindFramebuffer(B.FRAMEBUFFER,q)&&te&&Ke.drawBuffers(C,q),Ke.viewport(M),Ke.scissor(A),Ke.setScissorTest(G),Ee){const Ve=Ze.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ve.__webglTexture,ee)}else if(De){const Ve=Ze.get(C.texture),je=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.__webglTexture,ee||0,je)}k=-1},this.readRenderTargetPixels=function(C,X,ee,te,q,Ee,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){Ke.bindFramebuffer(B.FRAMEBUFFER,Te);try{const Ve=C.texture,je=Ve.format,$e=Ve.type;if(!ft.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-te&&ee>=0&&ee<=C.height-q&&B.readPixels(X,ee,te,q,nt.convert(je),nt.convert($e),Ee)}finally{const Ve=I!==null?Ze.get(I).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,X,ee,te,q,Ee,De){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){const Ve=C.texture,je=Ve.format,$e=Ve.type;if(!ft.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-te&&ee>=0&&ee<=C.height-q){Ke.bindFramebuffer(B.FRAMEBUFFER,Te);const Ge=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ge),B.bufferData(B.PIXEL_PACK_BUFFER,Ee.byteLength,B.STREAM_READ),B.readPixels(X,ee,te,q,nt.convert(je),nt.convert($e),0);const yt=I!==null?Ze.get(I).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,yt);const wt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Cv(B,wt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ge),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ee),B.deleteBuffer(Ge),B.deleteSync(wt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,ee=0){C.isTexture!==!0&&(Sl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const te=Math.pow(2,-ee),q=Math.floor(C.image.width*te),Ee=Math.floor(C.image.height*te),De=X!==null?X.x:0,Te=X!==null?X.y:0;D.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,De,Te,q,Ee),Ke.unbindTexture()},this.copyTextureToTexture=function(C,X,ee=null,te=null,q=0){C.isTexture!==!0&&(Sl("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,C=arguments[1],X=arguments[2],q=arguments[3]||0,ee=null);let Ee,De,Te,Ve,je,$e;ee!==null?(Ee=ee.max.x-ee.min.x,De=ee.max.y-ee.min.y,Te=ee.min.x,Ve=ee.min.y):(Ee=C.image.width,De=C.image.height,Te=0,Ve=0),te!==null?(je=te.x,$e=te.y):(je=0,$e=0);const Ge=nt.convert(X.format),yt=nt.convert(X.type);D.setTexture2D(X,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const wt=B.getParameter(B.UNPACK_ROW_LENGTH),At=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Dt=B.getParameter(B.UNPACK_SKIP_PIXELS),_t=B.getParameter(B.UNPACK_SKIP_ROWS),Oe=B.getParameter(B.UNPACK_SKIP_IMAGES),Wt=C.isCompressedTexture?C.mipmaps[q]:C.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Wt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Wt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Te),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ve),C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,q,je,$e,Ee,De,Ge,yt,Wt.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,q,je,$e,Wt.width,Wt.height,Ge,Wt.data):B.texSubImage2D(B.TEXTURE_2D,q,je,$e,Ee,De,Ge,yt,Wt),B.pixelStorei(B.UNPACK_ROW_LENGTH,wt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dt),B.pixelStorei(B.UNPACK_SKIP_ROWS,_t),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Oe),q===0&&X.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(C,X,ee=null,te=null,q=0){C.isTexture!==!0&&(Sl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,C=arguments[2],X=arguments[3],q=arguments[4]||0);let Ee,De,Te,Ve,je,$e,Ge,yt,wt;const At=C.isCompressedTexture?C.mipmaps[q]:C.image;ee!==null?(Ee=ee.max.x-ee.min.x,De=ee.max.y-ee.min.y,Te=ee.max.z-ee.min.z,Ve=ee.min.x,je=ee.min.y,$e=ee.min.z):(Ee=At.width,De=At.height,Te=At.depth,Ve=0,je=0,$e=0),te!==null?(Ge=te.x,yt=te.y,wt=te.z):(Ge=0,yt=0,wt=0);const Dt=nt.convert(X.format),_t=nt.convert(X.type);let Oe;if(X.isData3DTexture)D.setTexture3D(X,0),Oe=B.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)D.setTexture2DArray(X,0),Oe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Wt=B.getParameter(B.UNPACK_ROW_LENGTH),vt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Pn=B.getParameter(B.UNPACK_SKIP_PIXELS),Yn=B.getParameter(B.UNPACK_SKIP_ROWS),Zt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,At.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ve),B.pixelStorei(B.UNPACK_SKIP_ROWS,je),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$e),C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Oe,q,Ge,yt,wt,Ee,De,Te,Dt,_t,At.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Oe,q,Ge,yt,wt,Ee,De,Te,Dt,At.data):B.texSubImage3D(Oe,q,Ge,yt,wt,Ee,De,Te,Dt,_t,At),B.pixelStorei(B.UNPACK_ROW_LENGTH,Wt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Pn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Yn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Zt),q===0&&X.generateMipmaps&&B.generateMipmap(Oe),Ke.unbindTexture()},this.initRenderTarget=function(C){Ze.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),Ke.unbindTexture()},this.resetState=function(){Y=0,F=0,I=null,Ke.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Vf?"display-p3":"srgb",n.unpackColorSpace=Mt.workingColorSpace===Ll?"display-p3":"srgb"}}class Yf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(e),this.density=n}clone(){return new Yf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class GM extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Us extends ai{constructor(e=1,n=1,r=1,a=32,u=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),u=Math.floor(u);const _=[],y=[],x=[],S=[];let T=0;const R=[],g=r/2;let v=0;L(),f===!1&&(e>0&&P(!0),n>0&&P(!1)),this.setIndex(_),this.setAttribute("position",new qt(y,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(S,2));function L(){const b=new Q,Y=new Q;let F=0;const I=(n-e)/r;for(let k=0;k<=u;k++){const le=[],M=k/u,A=M*(n-e)+e;for(let G=0;G<=a;G++){const W=G/a,ie=W*p+d,ue=Math.sin(ie),K=Math.cos(ie);Y.x=A*ue,Y.y=-M*r+g,Y.z=A*K,y.push(Y.x,Y.y,Y.z),b.set(ue,I,K).normalize(),x.push(b.x,b.y,b.z),S.push(W,1-M),le.push(T++)}R.push(le)}for(let k=0;k<a;k++)for(let le=0;le<u;le++){const M=R[le][k],A=R[le+1][k],G=R[le+1][k+1],W=R[le][k+1];e>0&&(_.push(M,A,W),F+=3),n>0&&(_.push(A,G,W),F+=3)}m.addGroup(v,F,0),v+=F}function P(b){const Y=T,F=new gt,I=new Q;let k=0;const le=b===!0?e:n,M=b===!0?1:-1;for(let G=1;G<=a;G++)y.push(0,g*M,0),x.push(0,M,0),S.push(.5,.5),T++;const A=T;for(let G=0;G<=a;G++){const ie=G/a*p+d,ue=Math.cos(ie),K=Math.sin(ie);I.x=le*K,I.y=g*M,I.z=le*ue,y.push(I.x,I.y,I.z),x.push(0,M,0),F.x=ue*.5+.5,F.y=K*.5*M+.5,S.push(F.x,F.y),T++}for(let G=0;G<a;G++){const W=Y+G,ie=A+G;b===!0?_.push(ie,ie+1,W):_.push(ie+1,ie,W),k+=3}m.addGroup(v,k,b===!0?1:2),v+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qf extends ai{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const u=[],f=[];d(a),m(r),_(),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(u.slice(),3)),this.setAttribute("uv",new qt(f,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const P=new Q,b=new Q,Y=new Q;for(let F=0;F<n.length;F+=3)S(n[F+0],P),S(n[F+1],b),S(n[F+2],Y),p(P,b,Y,L)}function p(L,P,b,Y){const F=Y+1,I=[];for(let k=0;k<=F;k++){I[k]=[];const le=L.clone().lerp(b,k/F),M=P.clone().lerp(b,k/F),A=F-k;for(let G=0;G<=A;G++)G===0&&k===F?I[k][G]=le:I[k][G]=le.clone().lerp(M,G/A)}for(let k=0;k<F;k++)for(let le=0;le<2*(F-k)-1;le++){const M=Math.floor(le/2);le%2===0?(x(I[k][M+1]),x(I[k+1][M]),x(I[k][M])):(x(I[k][M+1]),x(I[k+1][M+1]),x(I[k+1][M]))}}function m(L){const P=new Q;for(let b=0;b<u.length;b+=3)P.x=u[b+0],P.y=u[b+1],P.z=u[b+2],P.normalize().multiplyScalar(L),u[b+0]=P.x,u[b+1]=P.y,u[b+2]=P.z}function _(){const L=new Q;for(let P=0;P<u.length;P+=3){L.x=u[P+0],L.y=u[P+1],L.z=u[P+2];const b=g(L)/2/Math.PI+.5,Y=v(L)/Math.PI+.5;f.push(b,1-Y)}T(),y()}function y(){for(let L=0;L<f.length;L+=6){const P=f[L+0],b=f[L+2],Y=f[L+4],F=Math.max(P,b,Y),I=Math.min(P,b,Y);F>.9&&I<.1&&(P<.2&&(f[L+0]+=1),b<.2&&(f[L+2]+=1),Y<.2&&(f[L+4]+=1))}}function x(L){u.push(L.x,L.y,L.z)}function S(L,P){const b=L*3;P.x=e[b+0],P.y=e[b+1],P.z=e[b+2]}function T(){const L=new Q,P=new Q,b=new Q,Y=new Q,F=new gt,I=new gt,k=new gt;for(let le=0,M=0;le<u.length;le+=9,M+=6){L.set(u[le+0],u[le+1],u[le+2]),P.set(u[le+3],u[le+4],u[le+5]),b.set(u[le+6],u[le+7],u[le+8]),F.set(f[M+0],f[M+1]),I.set(f[M+2],f[M+3]),k.set(f[M+4],f[M+5]),Y.copy(L).add(P).add(b).divideScalar(3);const A=g(Y);R(F,M+0,L,A),R(I,M+2,P,A),R(k,M+4,b,A)}}function R(L,P,b,Y){Y<0&&L.x===1&&(f[P]=L.x-1),b.x===0&&b.z===0&&(f[P]=Y/2/Math.PI+.5)}function g(L){return Math.atan2(L.z,-L.x)}function v(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qf(e.vertices,e.indices,e.radius,e.details)}}class jf extends qf{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,u=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],f=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(u,f,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new jf(e.radius,e.detail)}}class Hr extends ai{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+d,Math.PI);let m=0;const _=[],y=new Q,x=new Q,S=[],T=[],R=[],g=[];for(let v=0;v<=r;v++){const L=[],P=v/r;let b=0;v===0&&f===0?b=.5/n:v===r&&p===Math.PI&&(b=-.5/n);for(let Y=0;Y<=n;Y++){const F=Y/n;y.x=-e*Math.cos(a+F*u)*Math.sin(f+P*d),y.y=e*Math.cos(f+P*d),y.z=e*Math.sin(a+F*u)*Math.sin(f+P*d),T.push(y.x,y.y,y.z),x.copy(y).normalize(),R.push(x.x,x.y,x.z),g.push(F+b,1-P),L.push(m++)}_.push(L)}for(let v=0;v<r;v++)for(let L=0;L<n;L++){const P=_[v][L+1],b=_[v][L],Y=_[v+1][L],F=_[v+1][L+1];(v!==0||f>0)&&S.push(P,b,F),(v!==r-1||p<Math.PI)&&S.push(b,Y,F)}this.setIndex(S),this.setAttribute("position",new qt(T,3)),this.setAttribute("normal",new qt(R,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kf extends ai{constructor(e=1,n=.4,r=12,a=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:u},r=Math.floor(r),a=Math.floor(a);const f=[],d=[],p=[],m=[],_=new Q,y=new Q,x=new Q;for(let S=0;S<=r;S++)for(let T=0;T<=a;T++){const R=T/a*u,g=S/r*Math.PI*2;y.x=(e+n*Math.cos(g))*Math.cos(R),y.y=(e+n*Math.cos(g))*Math.sin(R),y.z=n*Math.sin(g),d.push(y.x,y.y,y.z),_.x=e*Math.cos(R),_.y=e*Math.sin(R),x.subVectors(y,_).normalize(),p.push(x.x,x.y,x.z),m.push(T/a),m.push(S/r)}for(let S=1;S<=r;S++)for(let T=1;T<=a;T++){const R=(a+1)*S+T-1,g=(a+1)*(S-1)+T-1,v=(a+1)*(S-1)+T,L=(a+1)*S+T;f.push(R,g,L),f.push(g,v,L)}this.setIndex(f),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class WM extends Xs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new at(16777215),this.specular=new at(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hf,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends Xs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hf,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class XM extends _n{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class YM extends XM{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);function qM(){const o=ni.useRef(null),[e,n]=ni.useState(!1);ni.useRef(new Map);const r=ni.useRef({x:0,y:1.7,z:5,yaw:0,pitch:0}),a=ni.useRef(new Set),u=ni.useRef(null),f=ni.useRef(null),d=ni.useCallback(_=>{_.background=new at(8239336),_.fog=new Yf(8239336,.012),_.add(new YM(11393254,3833138,1));const y=new Ot(new Hr(8,16,16),new Wf({color:16774608}));y.position.set(60,50,-80),_.add(y);const x=new Vo(400,400,40,40),S=new WM({color:2659524,specular:16777215,shininess:200,transparent:!0,opacity:.88}),T=new Ot(x,S);T.rotation.x=-Math.PI/2,T.position.y=-.5,_.add(T);const R=new Us(30,32,1.2,24),g=new hi({color:4885567}),v=new Ot(R,g);_.add(v);const L=new Kf(30.8,1.5,6,32),P=new hi({color:9139029}),b=new Ot(L,P);b.rotation.x=Math.PI/2,b.position.y=-.2,_.add(b);for(let A=0;A<40;A++){let G,W,ie;do G=(Math.random()-.5)*52,W=(Math.random()-.5)*52,ie=Math.sqrt(G*G+W*W);while(ie<5);const ue=Math.random()>.45,K=3+Math.random()*3.5,oe=new Us(.18,.28,K,6),z=new hi({color:ue?9134916:7028266}),fe=new Ot(oe,z);if(fe.position.set(G,K/2,W),_.add(fe),ue)for(let se=0;se<6;se++){const N=new Hr(1.5,6,4);N.scale(1,.25,2.5);const re=new hi({color:2981178}),Ce=new Ot(N,re),Z=se/6*Math.PI*2;Ce.position.set(G+Math.cos(Z)*1.2,K+.3,W+Math.sin(Z)*1.2),Ce.rotation.z=Z+Math.PI/2,_.add(Ce)}else{const se=new Hr(1.8,8,8),N=new hi({color:3828533}),re=new Ot(se,N);re.position.set(G,K+1.5,W),re.scale.y=1.4,_.add(re)}}for(let A=0;A<22;A++){let G,W,ie;do G=(Math.random()-.5)*55,W=(Math.random()-.5)*55,ie=Math.sqrt(G*G+W*W);while(ie<4);const ue=new jf(.4+Math.random()*.9,0),K=new hi({color:8024168}),oe=new Ot(ue,K);oe.position.set(G,.2+Math.random()*.4,W),oe.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),_.add(oe)}for(let A=0;A<60;A++){let G,W;do G=(Math.random()-.5)*50,W=(Math.random()-.5)*50;while(Math.sqrt(G*G+W*W)<4);const ie=new Hr(.12,6,6),ue=new hi({color:Math.random()>.5?16230612:16246904}),K=new Ot(ie,ue);K.position.set(G,.15,W),_.add(K)}for(let A=0;A<10;A++){const G=(Math.random()-.5)*180,W=25+Math.random()*20,ie=(Math.random()-.5)*180;for(let ue=0;ue<5;ue++){const K=new Hr(2.5+Math.random()*2,8,8),oe=new hi({color:16777215}),z=new Ot(K,oe);z.position.set(G+(Math.random()-.5)*8,W+(Math.random()-.5)*2,ie+(Math.random()-.5)*8),_.add(z)}}const Y=new Ys(2.8,.12,16),F=new hi({color:9134916}),I=new Ot(Y,F);I.position.set(18,.3,0),_.add(I);for(let A=0;A<6;A++){const G=new Us(.08,.08,1.2,6),W=new Ot(G,F);W.position.set(16.5,.9,-7+A*3),_.add(W),W=new Ot(G,F),W.position.set(19.5,.9,-7+A*3),_.add(W)}const k=new Us(10,11,1,16),le=new hi({color:4885567}),M=new Ot(k,le);return M.position.set(-80,-.5,-60),_.add(M),T},[]),p=ni.useCallback(()=>{if(!o.current)return;const _=new GM,y=d(_),x=new Wn(70,window.innerWidth/window.innerHeight,.1,800);x.position.set(0,1.7,5),u.current=x;const S=new VM({antialias:!1,powerPreference:"high-performance"});S.setSize(window.innerWidth,window.innerHeight),S.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),o.current.appendChild(S.domElement),f.current=S,window.addEventListener("resize",()=>{!u.current||!f.current||(u.current.aspect=window.innerWidth/window.innerHeight,u.current.updateProjectionMatrix(),f.current.setSize(window.innerWidth,window.innerHeight))});const T=k=>a.current.add(k.code),R=k=>a.current.delete(k.code);window.addEventListener("keydown",T),window.addEventListener("keyup",R);const g=S.domElement;g.addEventListener("click",()=>g.requestPointerLock());let v=0,L=0,P=0,b=performance.now();const Y=k=>{document.pointerLockElement===g&&(v-=k.movementX*.002,L-=k.movementY*.002,L=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,L)),r.current.yaw=v,r.current.pitch=L)};document.addEventListener("mousemove",Y);let F;const I=()=>{F=requestAnimationFrame(I);const k=performance.now(),le=Math.min(Math.max((k-b)/1e3,0),.1);b=k;const M=r.current,A=5*le;let G=!1;const W=Math.sin(v),ie=Math.cos(v);(a.current.has("KeyW")||a.current.has("ArrowUp"))&&(M.x-=W*A,M.z-=ie*A,G=!0),(a.current.has("KeyS")||a.current.has("ArrowDown"))&&(M.x+=W*A,M.z+=ie*A,G=!0),(a.current.has("KeyA")||a.current.has("ArrowLeft"))&&(M.x-=ie*A,M.z+=W*A,G=!0),(a.current.has("KeyD")||a.current.has("ArrowRight"))&&(M.x+=ie*A,M.z-=W*A,G=!0),P+=le*(G?8:0);const ue=Math.abs(Math.sin(P))*(G?.06:0);x.position.set(M.x,M.y+ue,M.z),x.rotation.order="YXZ",x.rotation.y=v,x.rotation.x=L;const K=y.geometry.attributes.position;for(let oe=0;oe<K.count;oe++){const z=K.getX(oe),fe=K.getZ(oe);K.setY(oe,Math.sin(z*.1+k*8e-4)*.25+Math.cos(fe*.1+k*6e-4)*.25)}K.needsUpdate=!0,S.render(_,x)};return I(),()=>{var k;cancelAnimationFrame(F),window.removeEventListener("keydown",T),window.removeEventListener("keyup",R),document.removeEventListener("mousemove",Y),S.dispose(),(k=o.current)==null||k.removeChild(S.domElement)}},[d]),m=()=>n(!0);return ni.useEffect(()=>e?p():void 0,[e,p]),e?Ds.jsx("div",{ref:o}):Ds.jsxs("div",{id:"enter",onClick:m,children:[Ds.jsx("h1",{children:"3D WORLD"}),Ds.jsx("p",{children:"Click to enter · WASD to move · Mouse to look"})]})}k_.createRoot(document.getElementById("root")).render(Ds.jsx(ni.StrictMode,{children:Ds.jsx(qM,{})}));
