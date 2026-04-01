(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var fc={exports:{}},Lo={},dc={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function N_(){if(Sp)return ut;Sp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function g(F,ie,Le){this.props=F,this.context=ie,this.refs=R,this.updater=Le||S}g.prototype.isReactComponent={},g.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},g.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=g.prototype;function b(F,ie,Le){this.props=F,this.context=ie,this.refs=R,this.updater=Le||S}var P=b.prototype=new _;P.constructor=b,w(P,g.prototype),P.isPureReactComponent=!0;var L=Array.isArray,W=Object.prototype.hasOwnProperty,N={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function z(F,ie,Le){var Q,le={},ye=null,me=null;if(ie!=null)for(Q in ie.ref!==void 0&&(me=ie.ref),ie.key!==void 0&&(ye=""+ie.key),ie)W.call(ie,Q)&&!I.hasOwnProperty(Q)&&(le[Q]=ie[Q]);var Se=arguments.length-2;if(Se===1)le.children=Le;else if(1<Se){for(var we=Array(Se),Ye=0;Ye<Se;Ye++)we[Ye]=arguments[Ye+2];le.children=we}if(F&&F.defaultProps)for(Q in Se=F.defaultProps,Se)le[Q]===void 0&&(le[Q]=Se[Q]);return{$$typeof:o,type:F,key:ye,ref:me,props:le,_owner:N.current}}function ae(F,ie){return{$$typeof:o,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function M(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function A(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Le){return ie[Le]})}var q=/\/+/g;function K(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?A(""+F.key):ie.toString(36)}function re(F,ie,Le,Q,le){var ye=typeof F;(ye==="undefined"||ye==="boolean")&&(F=null);var me=!1;if(F===null)me=!0;else switch(ye){case"string":case"number":me=!0;break;case"object":switch(F.$$typeof){case o:case e:me=!0}}if(me)return me=F,le=le(me),F=Q===""?"."+K(me,0):Q,L(le)?(Le="",F!=null&&(Le=F.replace(q,"$&/")+"/"),re(le,ie,Le,"",function(Ye){return Ye})):le!=null&&(M(le)&&(le=ae(le,Le+(!le.key||me&&me.key===le.key?"":(""+le.key).replace(q,"$&/")+"/")+F)),ie.push(le)),1;if(me=0,Q=Q===""?".":Q+":",L(F))for(var Se=0;Se<F.length;Se++){ye=F[Se];var we=Q+K(ye,Se);me+=re(ye,ie,Le,we,le)}else if(we=x(F),typeof we=="function")for(F=we.call(F),Se=0;!(ye=F.next()).done;)ye=ye.value,we=Q+K(ye,Se++),me+=re(ye,ie,Le,we,le);else if(ye==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return me}function ce(F,ie,Le){if(F==null)return F;var Q=[],le=0;return re(F,Q,"","",function(ye){return ie.call(Le,ye,le++)}),Q}function ne(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(Le){(F._status===0||F._status===-1)&&(F._status=1,F._result=Le)},function(Le){(F._status===0||F._status===-1)&&(F._status=2,F._result=Le)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var ue={current:null},B={transition:null},fe={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:B,ReactCurrentOwner:N};function se(){throw Error("act(...) is not supported in production builds of React.")}return ut.Children={map:ce,forEach:function(F,ie,Le){ce(F,function(){ie.apply(this,arguments)},Le)},count:function(F){var ie=0;return ce(F,function(){ie++}),ie},toArray:function(F){return ce(F,function(ie){return ie})||[]},only:function(F){if(!M(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},ut.Component=g,ut.Fragment=n,ut.Profiler=a,ut.PureComponent=b,ut.StrictMode=r,ut.Suspense=p,ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,ut.act=se,ut.cloneElement=function(F,ie,Le){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Q=w({},F.props),le=F.key,ye=F.ref,me=F._owner;if(ie!=null){if(ie.ref!==void 0&&(ye=ie.ref,me=N.current),ie.key!==void 0&&(le=""+ie.key),F.type&&F.type.defaultProps)var Se=F.type.defaultProps;for(we in ie)W.call(ie,we)&&!I.hasOwnProperty(we)&&(Q[we]=ie[we]===void 0&&Se!==void 0?Se[we]:ie[we])}var we=arguments.length-2;if(we===1)Q.children=Le;else if(1<we){Se=Array(we);for(var Ye=0;Ye<we;Ye++)Se[Ye]=arguments[Ye+2];Q.children=Se}return{$$typeof:o,type:F.type,key:le,ref:ye,props:Q,_owner:me}},ut.createContext=function(F){return F={$$typeof:f,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:u,_context:F},F.Consumer=F},ut.createElement=z,ut.createFactory=function(F){var ie=z.bind(null,F);return ie.type=F,ie},ut.createRef=function(){return{current:null}},ut.forwardRef=function(F){return{$$typeof:d,render:F}},ut.isValidElement=M,ut.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:ne}},ut.memo=function(F,ie){return{$$typeof:m,type:F,compare:ie===void 0?null:ie}},ut.startTransition=function(F){var ie=B.transition;B.transition={};try{F()}finally{B.transition=ie}},ut.unstable_act=se,ut.useCallback=function(F,ie){return ue.current.useCallback(F,ie)},ut.useContext=function(F){return ue.current.useContext(F)},ut.useDebugValue=function(){},ut.useDeferredValue=function(F){return ue.current.useDeferredValue(F)},ut.useEffect=function(F,ie){return ue.current.useEffect(F,ie)},ut.useId=function(){return ue.current.useId()},ut.useImperativeHandle=function(F,ie,Le){return ue.current.useImperativeHandle(F,ie,Le)},ut.useInsertionEffect=function(F,ie){return ue.current.useInsertionEffect(F,ie)},ut.useLayoutEffect=function(F,ie){return ue.current.useLayoutEffect(F,ie)},ut.useMemo=function(F,ie){return ue.current.useMemo(F,ie)},ut.useReducer=function(F,ie,Le){return ue.current.useReducer(F,ie,Le)},ut.useRef=function(F){return ue.current.useRef(F)},ut.useState=function(F){return ue.current.useState(F)},ut.useSyncExternalStore=function(F,ie,Le){return ue.current.useSyncExternalStore(F,ie,Le)},ut.useTransition=function(){return ue.current.useTransition()},ut.version="18.3.1",ut}var Mp;function Ff(){return Mp||(Mp=1,dc.exports=N_()),dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function F_(){if(Ep)return Lo;Ep=1;var o=Ff(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,y={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(y[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)y[v]===void 0&&(y[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:S,props:y,_owner:a.current}}return Lo.Fragment=n,Lo.jsx=f,Lo.jsxs=f,Lo}var Tp;function O_(){return Tp||(Tp=1,fc.exports=F_()),fc.exports}var Ds=O_(),Fn=Ff(),qa={},hc={exports:{}},En={},pc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function k_(){return wp||(wp=1,(function(o){function e(B,fe){var se=B.length;B.push(fe);e:for(;0<se;){var F=se-1>>>1,ie=B[F];if(0<a(ie,fe))B[F]=fe,B[se]=ie,se=F;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var fe=B[0],se=B.pop();if(se!==fe){B[0]=se;e:for(var F=0,ie=B.length,Le=ie>>>1;F<Le;){var Q=2*(F+1)-1,le=B[Q],ye=Q+1,me=B[ye];if(0>a(le,se))ye<ie&&0>a(me,le)?(B[F]=me,B[ye]=se,F=ye):(B[F]=le,B[Q]=se,F=Q);else if(ye<ie&&0>a(me,se))B[F]=me,B[ye]=se,F=ye;else break e}}return fe}function a(B,fe){var se=B.sortIndex-fe.sortIndex;return se!==0?se:B.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,y=null,x=3,S=!1,w=!1,R=!1,g=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var fe=n(m);fe!==null;){if(fe.callback===null)r(m);else if(fe.startTime<=B)r(m),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=n(m)}}function L(B){if(R=!1,P(B),!w)if(n(p)!==null)w=!0,ne(W);else{var fe=n(m);fe!==null&&ue(L,fe.startTime-B)}}function W(B,fe){w=!1,R&&(R=!1,_(z),z=-1),S=!0;var se=x;try{for(P(fe),y=n(p);y!==null&&(!(y.expirationTime>fe)||B&&!A());){var F=y.callback;if(typeof F=="function"){y.callback=null,x=y.priorityLevel;var ie=F(y.expirationTime<=fe);fe=o.unstable_now(),typeof ie=="function"?y.callback=ie:y===n(p)&&r(p),P(fe)}else r(p);y=n(p)}if(y!==null)var Le=!0;else{var Q=n(m);Q!==null&&ue(L,Q.startTime-fe),Le=!1}return Le}finally{y=null,x=se,S=!1}}var N=!1,I=null,z=-1,ae=5,M=-1;function A(){return!(o.unstable_now()-M<ae)}function q(){if(I!==null){var B=o.unstable_now();M=B;var fe=!0;try{fe=I(!0,B)}finally{fe?K():(N=!1,I=null)}}else N=!1}var K;if(typeof b=="function")K=function(){b(q)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ce=re.port2;re.port1.onmessage=q,K=function(){ce.postMessage(null)}}else K=function(){g(q,0)};function ne(B){I=B,N||(N=!0,K())}function ue(B,fe){z=g(function(){B(o.unstable_now())},fe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){w||S||(w=!0,ne(W))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(B){switch(x){case 1:case 2:case 3:var fe=3;break;default:fe=x}var se=x;x=fe;try{return B()}finally{x=se}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,fe){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=x;x=B;try{return fe()}finally{x=se}},o.unstable_scheduleCallback=function(B,fe,se){var F=o.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,B={id:v++,callback:fe,priorityLevel:B,startTime:se,expirationTime:ie,sortIndex:-1},se>F?(B.sortIndex=se,e(m,B),n(p)===null&&B===n(m)&&(R?(_(z),z=-1):R=!0,ue(L,se-F))):(B.sortIndex=ie,e(p,B),w||S||(w=!0,ne(W))),B},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(B){var fe=x;return function(){var se=x;x=fe;try{return B.apply(this,arguments)}finally{x=se}}}})(mc)),mc}var Ap;function z_(){return Ap||(Ap=1,pc.exports=k_()),pc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function B_(){if(Rp)return En;Rp=1;var o=Ff(),e=z_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function x(t){return p.call(y,t)?!0:p.call(v,t)?!1:m.test(t)?y[t]=!0:(v[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,s,l,c,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){g[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];g[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){g[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){g[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){g[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){g[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){g[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){g[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){g[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,b);g[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,b);g[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,b);g[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){g[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),g.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){g[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,s,l){var c=g.hasOwnProperty(i)?g[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var L=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),N=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),A=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),B=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,F;function ie(t){if(F===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var Le=!1;function Q(t,i){if(!t||Le)return"";Le=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var c=te.stack.split(`
`),h=l.stack.split(`
`),E=c.length-1,U=h.length-1;1<=E&&0<=U&&c[E]!==h[U];)U--;for(;1<=E&&0<=U;E--,U--)if(c[E]!==h[U]){if(E!==1||U!==1)do if(E--,U--,0>U||c[E]!==h[U]){var k=`
`+c[E].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=E&&0<=U);break}}}finally{Le=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ie(t):""}function le(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case N:return"Portal";case ae:return"Profiler";case z:return"StrictMode";case K:return"Suspense";case re:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A:return(t.displayName||"Context")+".Consumer";case M:return(t._context.displayName||"Context")+".Provider";case q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case ne:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function me(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function we(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(t){var i=we(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function rt(t){t._valueTracker||(t._valueTracker=Ye(t))}function Ke(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=we(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function O(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ot(t,i){var s=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function st(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Se(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function qe(t,i){ct(t,i);var s=Se(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?je(t,i.type,s):i.hasOwnProperty("defaultValue")&&je(t,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function St(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function je(t,i,s){(i!=="number"||O(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var D=Array.isArray;function T(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Se(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function Z(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function he(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(D(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Se(s)}}function ve(t,i){var s=Se(i.value),l=Se(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function de(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Re(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ne,pt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ne.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(Fe).forEach(function(t){tt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Fe[i]=Fe[t]})});function et(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Fe.hasOwnProperty(t)&&Fe[t]?(""+i).trim():i+"px"}function ke(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=et(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var ft=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(t,i){if(i){if(ft[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Mt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V=null;function be(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oe=null,pe=null,Ce=null;function Ie(t){if(t=mo(t)){if(typeof oe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=la(i),oe(t.stateNode,t.type,i))}}function dt(t){pe?Ce?Ce.push(t):Ce=[t]:pe=t}function Ut(){if(pe){var t=pe,i=Ce;if(Ce=pe=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function rn(t,i){return t(i)}function mt(){}var Zt=!1;function On(t,i,s){if(Zt)return t(i,s);Zt=!0;try{return rn(t,i,s)}finally{Zt=!1,(pe!==null||Ce!==null)&&(mt(),Ut())}}function ki(t,i){var s=t.stateNode;if(s===null)return null;var l=la(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Yr=!1;if(d)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Yr=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Yr=!1}function Ks(t,i,s,l,c,h,E,U,k){var te=Array.prototype.slice.call(arguments,3);try{i.apply(s,te)}catch(_e){this.onError(_e)}}var zi=!1,vr=null,vi=!1,qr=null,jr={onError:function(t){zi=!0,vr=t}};function Go(t,i,s,l,c,h,E,U,k){zi=!1,vr=null,Ks.apply(jr,arguments)}function Wo(t,i,s,l,c,h,E,U,k){if(Go.apply(this,arguments),zi){if(zi){var te=vr;zi=!1,vr=null}else throw Error(n(198));vi||(vi=!0,qr=te)}}function xi(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Xo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Yo(t){if(xi(t)!==t)throw Error(n(188))}function C(t){var i=t.alternate;if(!i){if(i=xi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Yo(c),t;if(h===l)return Yo(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var E=!1,U=c.child;U;){if(U===s){E=!0,s=c,l=h;break}if(U===l){E=!0,l=c,s=h;break}U=U.sibling}if(!E){for(U=h.child;U;){if(U===s){E=!0,s=h,l=c;break}if(U===l){E=!0,l=h,s=c;break}U=U.sibling}if(!E)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function G(t){return t=C(t),t!==null?J(t):null}function J(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=J(t);if(i!==null)return i;t=t.sibling}return null}var ee=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,Te=e.unstable_shouldYield,De=e.unstable_requestPaint,Ae=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,Qe=e.unstable_ImmediatePriority,Je=e.unstable_UserBlockingPriority,Ge=e.unstable_NormalPriority,yt=e.unstable_LowPriority,wt=e.unstable_IdlePriority,At=null,Dt=null;function _t(t){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(At,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Pn,Xt=Math.log,vt=Math.LN2;function Pn(t){return t>>>=0,t===0?32:31-(Xt(t)/vt|0)|0}var qn=64,Qt=4194304;function yi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rt(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,E=s&268435455;if(E!==0){var U=E&~c;U!==0?l=yi(U):(h&=E,h!==0&&(l=yi(h)))}else E=s&~c,E!==0?l=yi(E):h!==0&&(l=yi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-Oe(i),c=1<<s,l|=t[s],i&=~c;return l}function ui(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $s(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Oe(h),U=1<<E,k=c[E];k===-1?((U&s)===0||(U&l)!==0)&&(c[E]=ui(U,i)):k<=i&&(t.expiredLanes|=U),h&=~U}}function ln(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kr(){var t=qn;return qn<<=1,(qn&4194240)===0&&(qn=64),t}function Zs(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Bi(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=s}function ng(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-Oe(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Ul(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Oe(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var Tt=0;function Jf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ed,Nl,td,nd,id,Fl=!1,qo=[],Hi=null,Vi=null,Gi=null,Qs=new Map,Js=new Map,Wi=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rd(t,i){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":Qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function eo(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=mo(i),i!==null&&Nl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function rg(t,i,s,l,c){switch(i){case"focusin":return Hi=eo(Hi,t,i,s,l,c),!0;case"dragenter":return Vi=eo(Vi,t,i,s,l,c),!0;case"mouseover":return Gi=eo(Gi,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return Qs.set(h,eo(Qs.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Js.set(h,eo(Js.get(h)||null,t,i,s,l,c)),!0}return!1}function sd(t){var i=xr(t.target);if(i!==null){var s=xi(i);if(s!==null){if(i=s.tag,i===13){if(i=Xo(s),i!==null){t.blockedOn=i,id(t.priority,function(){td(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=kl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);V=l,s.target.dispatchEvent(l),V=null}else return i=mo(s),i!==null&&Nl(i),t.blockedOn=s,!1;i.shift()}return!0}function od(t,i,s){jo(t)&&s.delete(i)}function sg(){Fl=!1,Hi!==null&&jo(Hi)&&(Hi=null),Vi!==null&&jo(Vi)&&(Vi=null),Gi!==null&&jo(Gi)&&(Gi=null),Qs.forEach(od),Js.forEach(od)}function to(t,i){t.blockedOn===i&&(t.blockedOn=null,Fl||(Fl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sg)))}function no(t){function i(c){return to(c,t)}if(0<qo.length){to(qo[0],t);for(var s=1;s<qo.length;s++){var l=qo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Hi!==null&&to(Hi,t),Vi!==null&&to(Vi,t),Gi!==null&&to(Gi,t),Qs.forEach(i),Js.forEach(i),s=0;s<Wi.length;s++)l=Wi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Wi.length&&(s=Wi[0],s.blockedOn===null);)sd(s),s.blockedOn===null&&Wi.shift()}var $r=L.ReactCurrentBatchConfig,Ko=!0;function og(t,i,s,l){var c=Tt,h=$r.transition;$r.transition=null;try{Tt=1,Ol(t,i,s,l)}finally{Tt=c,$r.transition=h}}function ag(t,i,s,l){var c=Tt,h=$r.transition;$r.transition=null;try{Tt=4,Ol(t,i,s,l)}finally{Tt=c,$r.transition=h}}function Ol(t,i,s,l){if(Ko){var c=kl(t,i,s,l);if(c===null)tu(t,i,l,$o,s),rd(t,l);else if(rg(c,t,i,s,l))l.stopPropagation();else if(rd(t,l),i&4&&-1<ig.indexOf(t)){for(;c!==null;){var h=mo(c);if(h!==null&&ed(h),h=kl(t,i,s,l),h===null&&tu(t,i,l,$o,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else tu(t,i,l,null,s)}}var $o=null;function kl(t,i,s,l){if($o=null,t=be(l),t=xr(t),t!==null)if(i=xi(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Xo(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return $o=t,null}function ad(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case Qe:return 1;case Je:return 4;case Ge:case yt:return 16;case wt:return 536870912;default:return 16}default:return 16}}var Xi=null,zl=null,Zo=null;function ld(){if(Zo)return Zo;var t,i=zl,s=i.length,l,c="value"in Xi?Xi.value:Xi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===c[h-l];l++);return Zo=c.slice(t,1<l?1-l:void 0)}function Qo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function ud(){return!1}function Ln(t){function i(s,l,c,h,E){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(s=t[U],this[U]=s?s(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Jo:ud,this.isPropagationStopped=ud,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),i}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=Ln(Zr),io=se({},Zr,{view:0,detail:0}),lg=Ln(io),Hl,Vl,ro,ea=se({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Hl=t.screenX-ro.screenX,Vl=t.screenY-ro.screenY):Vl=Hl=0,ro=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),cd=Ln(ea),ug=se({},ea,{dataTransfer:0}),cg=Ln(ug),fg=se({},io,{relatedTarget:0}),Gl=Ln(fg),dg=se({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=Ln(dg),pg=se({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mg=Ln(pg),gg=se({},Zr,{data:0}),fd=Ln(gg),_g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=xg[t])?!!i[t]:!1}function Wl(){return yg}var Sg=se({},io,{key:function(t){if(t.key){var i=_g[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mg=Ln(Sg),Eg=se({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dd=Ln(Eg),Tg=se({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),wg=Ln(Tg),Ag=se({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rg=Ln(Ag),Cg=se({},ea,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pg=Ln(Cg),Lg=[9,13,27,32],Xl=d&&"CompositionEvent"in window,so=null;d&&"documentMode"in document&&(so=document.documentMode);var bg=d&&"TextEvent"in window&&!so,hd=d&&(!Xl||so&&8<so&&11>=so),pd=" ",md=!1;function gd(t,i){switch(t){case"keyup":return Lg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _d(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function Dg(t,i){switch(t){case"compositionend":return _d(i);case"keypress":return i.which!==32?null:(md=!0,pd);case"textInput":return t=i.data,t===pd&&md?null:t;default:return null}}function Ig(t,i){if(Qr)return t==="compositionend"||!Xl&&gd(t,i)?(t=ld(),Zo=zl=Xi=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return hd&&i.locale!=="ko"?null:i.data;default:return null}}var Ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ug[t.type]:i==="textarea"}function xd(t,i,s,l){dt(l),i=sa(i,"onChange"),0<i.length&&(s=new Bl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var oo=null,ao=null;function Ng(t){Od(t,0)}function ta(t){var i=is(t);if(Ke(i))return t}function Fg(t,i){if(t==="change")return i}var yd=!1;if(d){var Yl;if(d){var ql="oninput"in document;if(!ql){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),ql=typeof Sd.oninput=="function"}Yl=ql}else Yl=!1;yd=Yl&&(!document.documentMode||9<document.documentMode)}function Md(){oo&&(oo.detachEvent("onpropertychange",Ed),ao=oo=null)}function Ed(t){if(t.propertyName==="value"&&ta(ao)){var i=[];xd(i,ao,t,be(t)),On(Ng,i)}}function Og(t,i,s){t==="focusin"?(Md(),oo=i,ao=s,oo.attachEvent("onpropertychange",Ed)):t==="focusout"&&Md()}function kg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ta(ao)}function zg(t,i){if(t==="click")return ta(i)}function Bg(t,i){if(t==="input"||t==="change")return ta(i)}function Hg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var jn=typeof Object.is=="function"?Object.is:Hg;function lo(t,i){if(jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!jn(t[c],i[c]))return!1}return!0}function Td(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wd(t,i){var s=Td(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Td(s)}}function Ad(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ad(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Rd(){for(var t=window,i=O();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=O(t.document)}return i}function jl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Vg(t){var i=Rd(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Ad(s.ownerDocument.documentElement,s)){if(l!==null&&jl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=wd(s,h);var E=wd(s,l);c&&E&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Gg=d&&"documentMode"in document&&11>=document.documentMode,Jr=null,Kl=null,uo=null,$l=!1;function Cd(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;$l||Jr==null||Jr!==O(l)||(l=Jr,"selectionStart"in l&&jl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),uo&&lo(uo,l)||(uo=l,l=sa(Kl,"onSelect"),0<l.length&&(i=new Bl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Jr)))}function na(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var es={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Zl={},Pd={};d&&(Pd=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function ia(t){if(Zl[t])return Zl[t];if(!es[t])return t;var i=es[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Pd)return Zl[t]=i[s];return t}var Ld=ia("animationend"),bd=ia("animationiteration"),Dd=ia("animationstart"),Id=ia("transitionend"),Ud=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,i){Ud.set(t,i),u(i,[t])}for(var Ql=0;Ql<Nd.length;Ql++){var Jl=Nd[Ql],Wg=Jl.toLowerCase(),Xg=Jl[0].toUpperCase()+Jl.slice(1);Yi(Wg,"on"+Xg)}Yi(Ld,"onAnimationEnd"),Yi(bd,"onAnimationIteration"),Yi(Dd,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(Id,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Fd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Wo(l,i,void 0,t),t.currentTarget=null}function Od(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var U=l[E],k=U.instance,te=U.currentTarget;if(U=U.listener,k!==h&&c.isPropagationStopped())break e;Fd(c,U,te),h=k}else for(E=0;E<l.length;E++){if(U=l[E],k=U.instance,te=U.currentTarget,U=U.listener,k!==h&&c.isPropagationStopped())break e;Fd(c,U,te),h=k}}}if(vi)throw t=qr,vi=!1,qr=null,t}function Pt(t,i){var s=i[au];s===void 0&&(s=i[au]=new Set);var l=t+"__bubble";s.has(l)||(kd(i,t,2,!1),s.add(l))}function eu(t,i,s){var l=0;i&&(l|=4),kd(s,t,l,i)}var ra="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[ra]){t[ra]=!0,r.forEach(function(s){s!=="selectionchange"&&(Yg.has(s)||eu(s,!1,t),eu(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ra]||(i[ra]=!0,eu("selectionchange",!1,i))}}function kd(t,i,s,l){switch(ad(i)){case 1:var c=og;break;case 4:c=ag;break;default:c=Ol}s=c.bind(null,i,s,t),c=void 0,!Yr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function tu(t,i,s,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var U=l.stateNode.containerInfo;if(U===c||U.nodeType===8&&U.parentNode===c)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===c||k.nodeType===8&&k.parentNode===c))return;E=E.return}for(;U!==null;){if(E=xr(U),E===null)return;if(k=E.tag,k===5||k===6){l=h=E;continue e}U=U.parentNode}}l=l.return}On(function(){var te=h,_e=be(s),xe=[];e:{var ge=Ud.get(t);if(ge!==void 0){var Ue=Bl,Be=t;switch(t){case"keypress":if(Qo(s)===0)break e;case"keydown":case"keyup":Ue=Mg;break;case"focusin":Be="focus",Ue=Gl;break;case"focusout":Be="blur",Ue=Gl;break;case"beforeblur":case"afterblur":Ue=Gl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=wg;break;case Ld:case bd:case Dd:Ue=hg;break;case Id:Ue=Rg;break;case"scroll":Ue=lg;break;case"wheel":Ue=Pg;break;case"copy":case"cut":case"paste":Ue=mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=dd}var He=(i&4)!==0,Ht=!He&&t==="scroll",Y=He?ge!==null?ge+"Capture":null:ge;He=[];for(var H=te,j;H!==null;){j=H;var Ee=j.stateNode;if(j.tag===5&&Ee!==null&&(j=Ee,Y!==null&&(Ee=ki(H,Y),Ee!=null&&He.push(ho(H,Ee,j)))),Ht)break;H=H.return}0<He.length&&(ge=new Ue(ge,Be,null,s,_e),xe.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",ge&&s!==V&&(Be=s.relatedTarget||s.fromElement)&&(xr(Be)||Be[Si]))break e;if((Ue||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ue?(Be=s.relatedTarget||s.toElement,Ue=te,Be=Be?xr(Be):null,Be!==null&&(Ht=xi(Be),Be!==Ht||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ue=null,Be=te),Ue!==Be)){if(He=cd,Ee="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(He=dd,Ee="onPointerLeave",Y="onPointerEnter",H="pointer"),Ht=Ue==null?ge:is(Ue),j=Be==null?ge:is(Be),ge=new He(Ee,H+"leave",Ue,s,_e),ge.target=Ht,ge.relatedTarget=j,Ee=null,xr(_e)===te&&(He=new He(Y,H+"enter",Be,s,_e),He.target=j,He.relatedTarget=Ht,Ee=He),Ht=Ee,Ue&&Be)t:{for(He=Ue,Y=Be,H=0,j=He;j;j=ts(j))H++;for(j=0,Ee=Y;Ee;Ee=ts(Ee))j++;for(;0<H-j;)He=ts(He),H--;for(;0<j-H;)Y=ts(Y),j--;for(;H--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=ts(He),Y=ts(Y)}He=null}else He=null;Ue!==null&&zd(xe,ge,Ue,He,!1),Be!==null&&Ht!==null&&zd(xe,Ht,Be,He,!0)}}e:{if(ge=te?is(te):window,Ue=ge.nodeName&&ge.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ge.type==="file")var We=Fg;else if(vd(ge))if(yd)We=Bg;else{We=kg;var $e=Og}else(Ue=ge.nodeName)&&Ue.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(We=zg);if(We&&(We=We(t,te))){xd(xe,We,s,_e);break e}$e&&$e(t,ge,te),t==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&je(ge,"number",ge.value)}switch($e=te?is(te):window,t){case"focusin":(vd($e)||$e.contentEditable==="true")&&(Jr=$e,Kl=te,uo=null);break;case"focusout":uo=Kl=Jr=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,Cd(xe,s,_e);break;case"selectionchange":if(Gg)break;case"keydown":case"keyup":Cd(xe,s,_e)}var Ze;if(Xl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Qr?gd(t,s)&&(nt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(nt="onCompositionStart");nt&&(hd&&s.locale!=="ko"&&(Qr||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Qr&&(Ze=ld()):(Xi=_e,zl="value"in Xi?Xi.value:Xi.textContent,Qr=!0)),$e=sa(te,nt),0<$e.length&&(nt=new fd(nt,t,null,s,_e),xe.push({event:nt,listeners:$e}),Ze?nt.data=Ze:(Ze=_d(s),Ze!==null&&(nt.data=Ze)))),(Ze=bg?Dg(t,s):Ig(t,s))&&(te=sa(te,"onBeforeInput"),0<te.length&&(_e=new fd("onBeforeInput","beforeinput",null,s,_e),xe.push({event:_e,listeners:te}),_e.data=Ze))}Od(xe,i)})}function ho(t,i,s){return{instance:t,listener:i,currentTarget:s}}function sa(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=ki(t,s),h!=null&&l.unshift(ho(t,h,c)),h=ki(t,i),h!=null&&l.push(ho(t,h,c))),t=t.return}return l}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zd(t,i,s,l,c){for(var h=i._reactName,E=[];s!==null&&s!==l;){var U=s,k=U.alternate,te=U.stateNode;if(k!==null&&k===l)break;U.tag===5&&te!==null&&(U=te,c?(k=ki(s,h),k!=null&&E.unshift(ho(s,k,U))):c||(k=ki(s,h),k!=null&&E.push(ho(s,k,U)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var qg=/\r\n?/g,jg=/\u0000|\uFFFD/g;function Bd(t){return(typeof t=="string"?t:""+t).replace(qg,`
`).replace(jg,"")}function oa(t,i,s){if(i=Bd(i),Bd(t)!==i&&s)throw Error(n(425))}function aa(){}var nu=null,iu=null;function ru(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,$g=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(t){return Hd.resolve(null).then(t).catch(Zg)}:su;function Zg(t){setTimeout(function(){throw t})}function ou(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),no(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);no(i)}function qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Vd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),ci="__reactFiber$"+ns,po="__reactProps$"+ns,Si="__reactContainer$"+ns,au="__reactEvents$"+ns,Qg="__reactListeners$"+ns,Jg="__reactHandles$"+ns;function xr(t){var i=t[ci];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Si]||s[ci]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Vd(t);t!==null;){if(s=t[ci])return s;t=Vd(t)}return i}t=s,s=t.parentNode}return null}function mo(t){return t=t[ci]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function la(t){return t[po]||null}var lu=[],rs=-1;function ji(t){return{current:t}}function Lt(t){0>rs||(t.current=lu[rs],lu[rs]=null,rs--)}function Ct(t,i){rs++,lu[rs]=t.current,t.current=i}var Ki={},un=ji(Ki),vn=ji(!1),yr=Ki;function ss(t,i){var s=t.type.contextTypes;if(!s)return Ki;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function xn(t){return t=t.childContextTypes,t!=null}function ua(){Lt(vn),Lt(un)}function Gd(t,i,s){if(un.current!==Ki)throw Error(n(168));Ct(un,i),Ct(vn,s)}function Wd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,me(t)||"Unknown",c));return se({},s,l)}function ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,yr=un.current,Ct(un,t),Ct(vn,vn.current),!0}function Xd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Wd(t,i,yr),l.__reactInternalMemoizedMergedChildContext=t,Lt(vn),Lt(un),Ct(un,t)):Lt(vn),Ct(vn,s)}var Mi=null,fa=!1,uu=!1;function Yd(t){Mi===null?Mi=[t]:Mi.push(t)}function e_(t){fa=!0,Yd(t)}function $i(){if(!uu&&Mi!==null){uu=!0;var t=0,i=Tt;try{var s=Mi;for(Tt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Mi=null,fa=!1}catch(c){throw Mi!==null&&(Mi=Mi.slice(t+1)),ee(Qe,$i),c}finally{Tt=i,uu=!1}}return null}var os=[],as=0,da=null,ha=0,kn=[],zn=0,Sr=null,Ei=1,Ti="";function Mr(t,i){os[as++]=ha,os[as++]=da,da=t,ha=i}function qd(t,i,s){kn[zn++]=Ei,kn[zn++]=Ti,kn[zn++]=Sr,Sr=t;var l=Ei;t=Ti;var c=32-Oe(l)-1;l&=~(1<<c),s+=1;var h=32-Oe(i)+c;if(30<h){var E=c-c%5;h=(l&(1<<E)-1).toString(32),l>>=E,c-=E,Ei=1<<32-Oe(i)+c|s<<c|l,Ti=h+t}else Ei=1<<h|s<<c|l,Ti=t}function cu(t){t.return!==null&&(Mr(t,1),qd(t,1,0))}function fu(t){for(;t===da;)da=os[--as],os[as]=null,ha=os[--as],os[as]=null;for(;t===Sr;)Sr=kn[--zn],kn[zn]=null,Ti=kn[--zn],kn[zn]=null,Ei=kn[--zn],kn[zn]=null}var bn=null,Dn=null,It=!1,Kn=null;function jd(t,i){var s=Gn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Kd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,bn=t,Dn=qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,bn=t,Dn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Sr!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Gn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,bn=t,Dn=null,!0):!1;default:return!1}}function du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hu(t){if(It){var i=Dn;if(i){var s=i;if(!Kd(t,i)){if(du(t))throw Error(n(418));i=qi(s.nextSibling);var l=bn;i&&Kd(t,i)?jd(l,s):(t.flags=t.flags&-4097|2,It=!1,bn=t)}}else{if(du(t))throw Error(n(418));t.flags=t.flags&-4097|2,It=!1,bn=t}}}function $d(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function pa(t){if(t!==bn)return!1;if(!It)return $d(t),It=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ru(t.type,t.memoizedProps)),i&&(i=Dn)){if(du(t))throw Zd(),Error(n(418));for(;i;)jd(t,i),i=qi(i.nextSibling)}if($d(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Dn=qi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Dn=null}}else Dn=bn?qi(t.stateNode.nextSibling):null;return!0}function Zd(){for(var t=Dn;t;)t=qi(t.nextSibling)}function ls(){Dn=bn=null,It=!1}function pu(t){Kn===null?Kn=[t]:Kn.push(t)}var t_=L.ReactCurrentBatchConfig;function go(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var U=c.refs;E===null?delete U[h]:U[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Qd(t){var i=t._init;return i(t._payload)}function Jd(t){function i(Y,H){if(t){var j=Y.deletions;j===null?(Y.deletions=[H],Y.flags|=16):j.push(H)}}function s(Y,H){if(!t)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function l(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function c(Y,H){return Y=rr(Y,H),Y.index=0,Y.sibling=null,Y}function h(Y,H,j){return Y.index=j,t?(j=Y.alternate,j!==null?(j=j.index,j<H?(Y.flags|=2,H):j):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,H,j,Ee){return H===null||H.tag!==6?(H=sc(j,Y.mode,Ee),H.return=Y,H):(H=c(H,j),H.return=Y,H)}function k(Y,H,j,Ee){var We=j.type;return We===I?_e(Y,H,j.props.children,Ee,j.key):H!==null&&(H.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ne&&Qd(We)===H.type)?(Ee=c(H,j.props),Ee.ref=go(Y,H,j),Ee.return=Y,Ee):(Ee=za(j.type,j.key,j.props,null,Y.mode,Ee),Ee.ref=go(Y,H,j),Ee.return=Y,Ee)}function te(Y,H,j,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==j.containerInfo||H.stateNode.implementation!==j.implementation?(H=oc(j,Y.mode,Ee),H.return=Y,H):(H=c(H,j.children||[]),H.return=Y,H)}function _e(Y,H,j,Ee,We){return H===null||H.tag!==7?(H=Lr(j,Y.mode,Ee,We),H.return=Y,H):(H=c(H,j),H.return=Y,H)}function xe(Y,H,j){if(typeof H=="string"&&H!==""||typeof H=="number")return H=sc(""+H,Y.mode,j),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case W:return j=za(H.type,H.key,H.props,null,Y.mode,j),j.ref=go(Y,null,H),j.return=Y,j;case N:return H=oc(H,Y.mode,j),H.return=Y,H;case ne:var Ee=H._init;return xe(Y,Ee(H._payload),j)}if(D(H)||fe(H))return H=Lr(H,Y.mode,j,null),H.return=Y,H;ma(Y,H)}return null}function ge(Y,H,j,Ee){var We=H!==null?H.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return We!==null?null:U(Y,H,""+j,Ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case W:return j.key===We?k(Y,H,j,Ee):null;case N:return j.key===We?te(Y,H,j,Ee):null;case ne:return We=j._init,ge(Y,H,We(j._payload),Ee)}if(D(j)||fe(j))return We!==null?null:_e(Y,H,j,Ee,null);ma(Y,j)}return null}function Ue(Y,H,j,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(j)||null,U(H,Y,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case W:return Y=Y.get(Ee.key===null?j:Ee.key)||null,k(H,Y,Ee,We);case N:return Y=Y.get(Ee.key===null?j:Ee.key)||null,te(H,Y,Ee,We);case ne:var $e=Ee._init;return Ue(Y,H,j,$e(Ee._payload),We)}if(D(Ee)||fe(Ee))return Y=Y.get(j)||null,_e(H,Y,Ee,We,null);ma(H,Ee)}return null}function Be(Y,H,j,Ee){for(var We=null,$e=null,Ze=H,nt=H=0,tn=null;Ze!==null&&nt<j.length;nt++){Ze.index>nt?(tn=Ze,Ze=null):tn=Ze.sibling;var xt=ge(Y,Ze,j[nt],Ee);if(xt===null){Ze===null&&(Ze=tn);break}t&&Ze&&xt.alternate===null&&i(Y,Ze),H=h(xt,H,nt),$e===null?We=xt:$e.sibling=xt,$e=xt,Ze=tn}if(nt===j.length)return s(Y,Ze),It&&Mr(Y,nt),We;if(Ze===null){for(;nt<j.length;nt++)Ze=xe(Y,j[nt],Ee),Ze!==null&&(H=h(Ze,H,nt),$e===null?We=Ze:$e.sibling=Ze,$e=Ze);return It&&Mr(Y,nt),We}for(Ze=l(Y,Ze);nt<j.length;nt++)tn=Ue(Ze,Y,nt,j[nt],Ee),tn!==null&&(t&&tn.alternate!==null&&Ze.delete(tn.key===null?nt:tn.key),H=h(tn,H,nt),$e===null?We=tn:$e.sibling=tn,$e=tn);return t&&Ze.forEach(function(sr){return i(Y,sr)}),It&&Mr(Y,nt),We}function He(Y,H,j,Ee){var We=fe(j);if(typeof We!="function")throw Error(n(150));if(j=We.call(j),j==null)throw Error(n(151));for(var $e=We=null,Ze=H,nt=H=0,tn=null,xt=j.next();Ze!==null&&!xt.done;nt++,xt=j.next()){Ze.index>nt?(tn=Ze,Ze=null):tn=Ze.sibling;var sr=ge(Y,Ze,xt.value,Ee);if(sr===null){Ze===null&&(Ze=tn);break}t&&Ze&&sr.alternate===null&&i(Y,Ze),H=h(sr,H,nt),$e===null?We=sr:$e.sibling=sr,$e=sr,Ze=tn}if(xt.done)return s(Y,Ze),It&&Mr(Y,nt),We;if(Ze===null){for(;!xt.done;nt++,xt=j.next())xt=xe(Y,xt.value,Ee),xt!==null&&(H=h(xt,H,nt),$e===null?We=xt:$e.sibling=xt,$e=xt);return It&&Mr(Y,nt),We}for(Ze=l(Y,Ze);!xt.done;nt++,xt=j.next())xt=Ue(Ze,Y,nt,xt.value,Ee),xt!==null&&(t&&xt.alternate!==null&&Ze.delete(xt.key===null?nt:xt.key),H=h(xt,H,nt),$e===null?We=xt:$e.sibling=xt,$e=xt);return t&&Ze.forEach(function(U_){return i(Y,U_)}),It&&Mr(Y,nt),We}function Ht(Y,H,j,Ee){if(typeof j=="object"&&j!==null&&j.type===I&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case W:e:{for(var We=j.key,$e=H;$e!==null;){if($e.key===We){if(We=j.type,We===I){if($e.tag===7){s(Y,$e.sibling),H=c($e,j.props.children),H.return=Y,Y=H;break e}}else if($e.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ne&&Qd(We)===$e.type){s(Y,$e.sibling),H=c($e,j.props),H.ref=go(Y,$e,j),H.return=Y,Y=H;break e}s(Y,$e);break}else i(Y,$e);$e=$e.sibling}j.type===I?(H=Lr(j.props.children,Y.mode,Ee,j.key),H.return=Y,Y=H):(Ee=za(j.type,j.key,j.props,null,Y.mode,Ee),Ee.ref=go(Y,H,j),Ee.return=Y,Y=Ee)}return E(Y);case N:e:{for($e=j.key;H!==null;){if(H.key===$e)if(H.tag===4&&H.stateNode.containerInfo===j.containerInfo&&H.stateNode.implementation===j.implementation){s(Y,H.sibling),H=c(H,j.children||[]),H.return=Y,Y=H;break e}else{s(Y,H);break}else i(Y,H);H=H.sibling}H=oc(j,Y.mode,Ee),H.return=Y,Y=H}return E(Y);case ne:return $e=j._init,Ht(Y,H,$e(j._payload),Ee)}if(D(j))return Be(Y,H,j,Ee);if(fe(j))return He(Y,H,j,Ee);ma(Y,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,H!==null&&H.tag===6?(s(Y,H.sibling),H=c(H,j),H.return=Y,Y=H):(s(Y,H),H=sc(j,Y.mode,Ee),H.return=Y,Y=H),E(Y)):s(Y,H)}return Ht}var us=Jd(!0),eh=Jd(!1),ga=ji(null),_a=null,cs=null,mu=null;function gu(){mu=cs=_a=null}function _u(t){var i=ga.current;Lt(ga),t._currentValue=i}function vu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function fs(t,i){_a=t,mu=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(yn=!0),t.firstContext=null)}function Bn(t){var i=t._currentValue;if(mu!==t)if(t={context:t,memoizedValue:i,next:null},cs===null){if(_a===null)throw Error(n(308));cs=t,_a.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return i}var Er=null;function xu(t){Er===null?Er=[t]:Er.push(t)}function th(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,xu(i)):(s.next=c.next,c.next=s),i.interleaved=s,wi(t,l)}function wi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Zi=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Qi(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(gt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,wi(t,s)}return c=l.interleaved,c===null?(i.next=i,xu(l)):(i.next=c.next,c.next=i),l.interleaved=i,wi(t,s)}function va(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ul(t,s)}}function ih(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var E={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=E:h=h.next=E,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function xa(t,i,s,l){var c=t.updateQueue;Zi=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,U=c.shared.pending;if(U!==null){c.shared.pending=null;var k=U,te=k.next;k.next=null,E===null?h=te:E.next=te,E=k;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==E&&(U===null?_e.firstBaseUpdate=te:U.next=te,_e.lastBaseUpdate=k))}if(h!==null){var xe=c.baseState;E=0,_e=te=k=null,U=h;do{var ge=U.lane,Ue=U.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ue,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Be=t,He=U;switch(ge=i,Ue=s,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){xe=Be.call(Ue,xe,ge);break e}xe=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ge=typeof Be=="function"?Be.call(Ue,xe,ge):Be,ge==null)break e;xe=se({},xe,ge);break e;case 2:Zi=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ge=c.effects,ge===null?c.effects=[U]:ge.push(U))}else Ue={eventTime:Ue,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(te=_e=Ue,k=xe):_e=_e.next=Ue,E|=ge;if(U=U.next,U===null){if(U=c.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);if(_e===null&&(k=xe),c.baseState=k,c.firstBaseUpdate=te,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do E|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Ar|=E,t.lanes=E,t.memoizedState=xe}}function rh(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var _o={},fi=ji(_o),vo=ji(_o),xo=ji(_o);function Tr(t){if(t===_o)throw Error(n(174));return t}function Su(t,i){switch(Ct(xo,i),Ct(vo,t),Ct(fi,_o),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Re(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Re(i,t)}Lt(fi),Ct(fi,i)}function ds(){Lt(fi),Lt(vo),Lt(xo)}function sh(t){Tr(xo.current);var i=Tr(fi.current),s=Re(i,t.type);i!==s&&(Ct(vo,t),Ct(fi,s))}function Mu(t){vo.current===t&&(Lt(fi),Lt(vo))}var Nt=ji(0);function ya(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Eu=[];function Tu(){for(var t=0;t<Eu.length;t++)Eu[t]._workInProgressVersionPrimary=null;Eu.length=0}var Sa=L.ReactCurrentDispatcher,wu=L.ReactCurrentBatchConfig,wr=0,Ft=null,Yt=null,Jt=null,Ma=!1,yo=!1,So=0,n_=0;function cn(){throw Error(n(321))}function Au(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!jn(t[s],i[s]))return!1;return!0}function Ru(t,i,s,l,c,h){if(wr=h,Ft=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Sa.current=t===null||t.memoizedState===null?o_:a_,t=s(l,c),yo){h=0;do{if(yo=!1,So=0,25<=h)throw Error(n(301));h+=1,Jt=Yt=null,i.updateQueue=null,Sa.current=l_,t=s(l,c)}while(yo)}if(Sa.current=wa,i=Yt!==null&&Yt.next!==null,wr=0,Jt=Yt=Ft=null,Ma=!1,i)throw Error(n(300));return t}function Cu(){var t=So!==0;return So=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Ft.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Hn(){if(Yt===null){var t=Ft.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Jt===null?Ft.memoizedState:Jt.next;if(i!==null)Jt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?Ft.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function Mo(t,i){return typeof i=="function"?i(t):i}function Pu(t){var i=Hn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Yt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var U=E=null,k=null,te=h;do{var _e=te.lane;if((wr&_e)===_e)k!==null&&(k=k.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var xe={lane:_e,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};k===null?(U=k=xe,E=l):k=k.next=xe,Ft.lanes|=_e,Ar|=_e}te=te.next}while(te!==null&&te!==h);k===null?E=l:k.next=U,jn(l,i.memoizedState)||(yn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=k,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Ft.lanes|=h,Ar|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Lu(t){var i=Hn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var E=c=c.next;do h=t(h,E.action),E=E.next;while(E!==c);jn(h,i.memoizedState)||(yn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function oh(){}function ah(t,i){var s=Ft,l=Hn(),c=i(),h=!jn(l.memoizedState,c);if(h&&(l.memoizedState=c,yn=!0),l=l.queue,bu(ch.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||Jt!==null&&Jt.memoizedState.tag&1){if(s.flags|=2048,Eo(9,uh.bind(null,s,l,c,i),void 0,null),en===null)throw Error(n(349));(wr&30)!==0||lh(s,i,c)}return c}function lh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ft.updateQueue,i===null?(i={lastEffect:null,stores:null},Ft.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function uh(t,i,s,l){i.value=s,i.getSnapshot=l,fh(i)&&dh(t)}function ch(t,i,s){return s(function(){fh(i)&&dh(t)})}function fh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!jn(t,s)}catch{return!0}}function dh(t){var i=wi(t,1);i!==null&&Jn(i,t,1,-1)}function hh(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},i.queue=t,t=t.dispatch=s_.bind(null,Ft,t),[i.memoizedState,t]}function Eo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ft.updateQueue,i===null?(i={lastEffect:null,stores:null},Ft.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function ph(){return Hn().memoizedState}function Ea(t,i,s,l){var c=di();Ft.flags|=t,c.memoizedState=Eo(1|i,s,void 0,l===void 0?null:l)}function Ta(t,i,s,l){var c=Hn();l=l===void 0?null:l;var h=void 0;if(Yt!==null){var E=Yt.memoizedState;if(h=E.destroy,l!==null&&Au(l,E.deps)){c.memoizedState=Eo(i,s,h,l);return}}Ft.flags|=t,c.memoizedState=Eo(1|i,s,h,l)}function mh(t,i){return Ea(8390656,8,t,i)}function bu(t,i){return Ta(2048,8,t,i)}function gh(t,i){return Ta(4,2,t,i)}function _h(t,i){return Ta(4,4,t,i)}function vh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function xh(t,i,s){return s=s!=null?s.concat([t]):null,Ta(4,4,vh.bind(null,i,t),s)}function Du(){}function yh(t,i){var s=Hn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Au(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Sh(t,i){var s=Hn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Au(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function Mh(t,i,s){return(wr&21)===0?(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=s):(jn(s,i)||(s=Kr(),Ft.lanes|=s,Ar|=s,t.baseState=!0),i)}function i_(t,i){var s=Tt;Tt=s!==0&&4>s?s:4,t(!0);var l=wu.transition;wu.transition={};try{t(!1),i()}finally{Tt=s,wu.transition=l}}function Eh(){return Hn().memoizedState}function r_(t,i,s){var l=nr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Th(t))wh(i,s);else if(s=th(t,i,s,l),s!==null){var c=gn();Jn(s,t,l,c),Ah(s,i,l)}}function s_(t,i,s){var l=nr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Th(t))wh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,U=h(E,s);if(c.hasEagerState=!0,c.eagerState=U,jn(U,E)){var k=i.interleaved;k===null?(c.next=c,xu(i)):(c.next=k.next,k.next=c),i.interleaved=c;return}}catch{}finally{}s=th(t,i,c,l),s!==null&&(c=gn(),Jn(s,t,l,c),Ah(s,i,l))}}function Th(t){var i=t.alternate;return t===Ft||i!==null&&i===Ft}function wh(t,i){yo=Ma=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Ah(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ul(t,s)}}var wa={readContext:Bn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},o_={readContext:Bn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Bn,useEffect:mh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ea(4194308,4,vh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ea(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ea(4,2,t,i)},useMemo:function(t,i){var s=di();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=di();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=r_.bind(null,Ft,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:hh,useDebugValue:Du,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=hh(!1),i=t[0];return t=i_.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ft,c=di();if(It){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),en===null)throw Error(n(349));(wr&30)!==0||lh(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,mh(ch.bind(null,l,h,t),[t]),l.flags|=2048,Eo(9,uh.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=di(),i=en.identifierPrefix;if(It){var s=Ti,l=Ei;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=So++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=n_++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},a_={readContext:Bn,useCallback:yh,useContext:Bn,useEffect:bu,useImperativeHandle:xh,useInsertionEffect:gh,useLayoutEffect:_h,useMemo:Sh,useReducer:Pu,useRef:ph,useState:function(){return Pu(Mo)},useDebugValue:Du,useDeferredValue:function(t){var i=Hn();return Mh(i,Yt.memoizedState,t)},useTransition:function(){var t=Pu(Mo)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:oh,useSyncExternalStore:ah,useId:Eh,unstable_isNewReconciler:!1},l_={readContext:Bn,useCallback:yh,useContext:Bn,useEffect:bu,useImperativeHandle:xh,useInsertionEffect:gh,useLayoutEffect:_h,useMemo:Sh,useReducer:Lu,useRef:ph,useState:function(){return Lu(Mo)},useDebugValue:Du,useDeferredValue:function(t){var i=Hn();return Yt===null?i.memoizedState=t:Mh(i,Yt.memoizedState,t)},useTransition:function(){var t=Lu(Mo)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:oh,useSyncExternalStore:ah,useId:Eh,unstable_isNewReconciler:!1};function $n(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Iu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:se({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Aa={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=gn(),c=nr(t),h=Ai(l,c);h.payload=i,s!=null&&(h.callback=s),i=Qi(t,h,c),i!==null&&(Jn(i,t,c,l),va(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=gn(),c=nr(t),h=Ai(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Qi(t,h,c),i!==null&&(Jn(i,t,c,l),va(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=gn(),l=nr(t),c=Ai(s,l);c.tag=2,i!=null&&(c.callback=i),i=Qi(t,c,l),i!==null&&(Jn(i,t,l,s),va(i,t,l))}};function Rh(t,i,s,l,c,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!lo(s,l)||!lo(c,h):!0}function Ch(t,i,s){var l=!1,c=Ki,h=i.contextType;return typeof h=="object"&&h!==null?h=Bn(h):(c=xn(i)?yr:un.current,l=i.contextTypes,h=(l=l!=null)?ss(t,c):Ki),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Aa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Ph(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Aa.enqueueReplaceState(i,i.state,null)}function Uu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},yu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Bn(h):(h=xn(i)?yr:un.current,c.context=ss(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Iu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Aa.enqueueReplaceState(c,c.state,null),xa(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,i){try{var s="",l=i;do s+=le(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Nu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Fu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var u_=typeof WeakMap=="function"?WeakMap:Map;function Lh(t,i,s){s=Ai(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Ia||(Ia=!0,Zu=l),Fu(t,i)},s}function bh(t,i,s){s=Ai(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Fu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Fu(t,i),typeof l!="function"&&(er===null?er=new Set([this]):er.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),s}function Dh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new u_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=E_.bind(null,t,i,s),i.then(t,t))}function Ih(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Uh(t,i,s,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ai(-1,1),i.tag=2,Qi(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var c_=L.ReactCurrentOwner,yn=!1;function mn(t,i,s,l){i.child=t===null?eh(i,null,s,l):us(i,t.child,s,l)}function Nh(t,i,s,l,c){s=s.render;var h=i.ref;return fs(i,c),l=Ru(t,i,s,l,h,c),s=Cu(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ri(t,i,c)):(It&&s&&cu(i),i.flags|=1,mn(t,i,l,c),i.child)}function Fh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!rc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Oh(t,i,h,l,c)):(t=za(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var E=h.memoizedProps;if(s=s.compare,s=s!==null?s:lo,s(E,l)&&t.ref===i.ref)return Ri(t,i,c)}return i.flags|=1,t=rr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Oh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(lo(h,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,Ri(t,i,c)}return Ou(t,i,s,l,c)}function kh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(ms,In),In|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ct(ms,In),In|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Ct(ms,In),In|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Ct(ms,In),In|=l;return mn(t,i,c,s),i.child}function zh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Ou(t,i,s,l,c){var h=xn(s)?yr:un.current;return h=ss(i,h),fs(i,c),s=Ru(t,i,s,l,h,c),l=Cu(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ri(t,i,c)):(It&&l&&cu(i),i.flags|=1,mn(t,i,s,c),i.child)}function Bh(t,i,s,l,c){if(xn(s)){var h=!0;ca(i)}else h=!1;if(fs(i,c),i.stateNode===null)Ca(t,i),Ch(i,s,l),Uu(i,s,l,c),l=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var k=E.context,te=s.contextType;typeof te=="object"&&te!==null?te=Bn(te):(te=xn(s)?yr:un.current,te=ss(i,te));var _e=s.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==l||k!==te)&&Ph(i,E,l,te),Zi=!1;var ge=i.memoizedState;E.state=ge,xa(i,l,E,c),k=i.memoizedState,U!==l||ge!==k||vn.current||Zi?(typeof _e=="function"&&(Iu(i,s,_e,l),k=i.memoizedState),(U=Zi||Rh(i,s,U,l,ge,k,te))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),E.props=l,E.state=k,E.context=te,l=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,nh(t,i),U=i.memoizedProps,te=i.type===i.elementType?U:$n(i.type,U),E.props=te,xe=i.pendingProps,ge=E.context,k=s.contextType,typeof k=="object"&&k!==null?k=Bn(k):(k=xn(s)?yr:un.current,k=ss(i,k));var Ue=s.getDerivedStateFromProps;(_e=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==xe||ge!==k)&&Ph(i,E,l,k),Zi=!1,ge=i.memoizedState,E.state=ge,xa(i,l,E,c);var Be=i.memoizedState;U!==xe||ge!==Be||vn.current||Zi?(typeof Ue=="function"&&(Iu(i,s,Ue,l),Be=i.memoizedState),(te=Zi||Rh(i,s,te,l,ge,Be,k)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Be,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Be,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),E.props=l,E.state=Be,E.context=k,l=te):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return ku(t,i,s,l,h,c)}function ku(t,i,s,l,c,h){zh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return c&&Xd(i,s,!1),Ri(t,i,h);l=i.stateNode,c_.current=i;var U=E&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=us(i,t.child,null,h),i.child=us(i,null,U,h)):mn(t,i,U,h),i.memoizedState=l.state,c&&Xd(i,s,!0),i.child}function Hh(t){var i=t.stateNode;i.pendingContext?Gd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Gd(t,i.context,!1),Su(t,i.containerInfo)}function Vh(t,i,s,l,c){return ls(),pu(c),i.flags|=256,mn(t,i,s,l),i.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Bu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gh(t,i,s){var l=i.pendingProps,c=Nt.current,h=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(c&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Ct(Nt,c&1),t===null)return hu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Ba(E,l,0,null),t=Lr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Bu(s),i.memoizedState=zu,t):Hu(i,E));if(c=t.memoizedState,c!==null&&(U=c.dehydrated,U!==null))return f_(t,i,E,l,U,c,s);if(h){h=l.fallback,E=i.mode,c=t.child,U=c.sibling;var k={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=rr(c,k),l.subtreeFlags=c.subtreeFlags&14680064),U!==null?h=rr(U,h):(h=Lr(h,E,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?Bu(s):{baseLanes:E.baseLanes|s,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~s,i.memoizedState=zu,l}return h=t.child,t=h.sibling,l=rr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Hu(t,i){return i=Ba({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ra(t,i,s,l){return l!==null&&pu(l),us(i,t.child,null,s),t=Hu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function f_(t,i,s,l,c,h,E){if(s)return i.flags&256?(i.flags&=-257,l=Nu(Error(n(422))),Ra(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ba({mode:"visible",children:l.children},c,0,null),h=Lr(h,c,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&us(i,t.child,null,E),i.child.memoizedState=Bu(E),i.memoizedState=zu,h);if((i.mode&1)===0)return Ra(t,i,E,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=Nu(h,l,void 0),Ra(t,i,E,l)}if(U=(E&t.childLanes)!==0,yn||U){if(l=en,l!==null){switch(E&-E){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|E))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,wi(t,c),Jn(l,t,c,-1))}return ic(),l=Nu(Error(n(421))),Ra(t,i,E,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=T_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Dn=qi(c.nextSibling),bn=i,It=!0,Kn=null,t!==null&&(kn[zn++]=Ei,kn[zn++]=Ti,kn[zn++]=Sr,Ei=t.id,Ti=t.overflow,Sr=i),i=Hu(i,l.children),i.flags|=4096,i)}function Wh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),vu(t.return,i,s)}function Vu(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Xh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(mn(t,i,l.children,s),l=Nt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wh(t,s,i);else if(t.tag===19)Wh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ct(Nt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&ya(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Vu(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&ya(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Vu(i,!0,s,null,h);break;case"together":Vu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ca(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ri(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Ar|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=rr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=rr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function d_(t,i,s){switch(i.tag){case 3:Hh(i),ls();break;case 5:sh(i);break;case 1:xn(i.type)&&ca(i);break;case 4:Su(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Ct(ga,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ct(Nt,Nt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Gh(t,i,s):(Ct(Nt,Nt.current&1),t=Ri(t,i,s),t!==null?t.sibling:null);Ct(Nt,Nt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Xh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ct(Nt,Nt.current),l)break;return null;case 22:case 23:return i.lanes=0,kh(t,i,s)}return Ri(t,i,s)}var Yh,Gu,qh,jh;Yh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Gu=function(){},qh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Tr(fi.current);var h=null;switch(s){case"input":c=Ot(t,c),l=Ot(t,l),h=[];break;case"select":c=se({},c,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":c=Z(t,c),l=Z(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=aa)}it(s,l);var E;s=null;for(te in c)if(!l.hasOwnProperty(te)&&c.hasOwnProperty(te)&&c[te]!=null)if(te==="style"){var U=c[te];for(E in U)U.hasOwnProperty(E)&&(s||(s={}),s[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in l){var k=l[te];if(U=c!=null?c[te]:void 0,l.hasOwnProperty(te)&&k!==U&&(k!=null||U!=null))if(te==="style")if(U){for(E in U)!U.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(s||(s={}),s[E]="");for(E in k)k.hasOwnProperty(E)&&U[E]!==k[E]&&(s||(s={}),s[E]=k[E])}else s||(h||(h=[]),h.push(te,s)),s=k;else te==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(h=h||[]).push(te,k)):te==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(te,""+k):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(k!=null&&te==="onScroll"&&Pt("scroll",t),h||U===k||(h=[])):(h=h||[]).push(te,k))}s&&(h=h||[]).push("style",s);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},jh=function(t,i,s,l){s!==l&&(i.flags|=4)};function To(t,i){if(!It)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function h_(t,i,s){var l=i.pendingProps;switch(fu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return xn(i.type)&&ua(),fn(i),null;case 3:return l=i.stateNode,ds(),Lt(vn),Lt(un),Tu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(pa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Kn!==null&&(ec(Kn),Kn=null))),Gu(t,i),fn(i),null;case 5:Mu(i);var c=Tr(xo.current);if(s=i.type,t!==null&&i.stateNode!=null)qh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return fn(i),null}if(t=Tr(fi.current),pa(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[ci]=i,l[po]=h,t=(i.mode&1)!==0,s){case"dialog":Pt("cancel",l),Pt("close",l);break;case"iframe":case"object":case"embed":Pt("load",l);break;case"video":case"audio":for(c=0;c<co.length;c++)Pt(co[c],l);break;case"source":Pt("error",l);break;case"img":case"image":case"link":Pt("error",l),Pt("load",l);break;case"details":Pt("toggle",l);break;case"input":st(l,h),Pt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Pt("invalid",l);break;case"textarea":he(l,h),Pt("invalid",l)}it(s,h),c=null;for(var E in h)if(h.hasOwnProperty(E)){var U=h[E];E==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,U,t),c=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,U,t),c=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Pt("scroll",l)}switch(s){case"input":rt(l),St(l,h,!0);break;case"textarea":rt(l),de(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=aa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xe(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(s,{is:l.is}):(t=E.createElement(s),s==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,s),t[ci]=i,t[po]=l,Yh(t,i,!1,!1),i.stateNode=t;e:{switch(E=Mt(s,l),s){case"dialog":Pt("cancel",t),Pt("close",t),c=l;break;case"iframe":case"object":case"embed":Pt("load",t),c=l;break;case"video":case"audio":for(c=0;c<co.length;c++)Pt(co[c],t);c=l;break;case"source":Pt("error",t),c=l;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),c=l;break;case"details":Pt("toggle",t),c=l;break;case"input":st(t,l),c=Ot(t,l),Pt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=se({},l,{value:void 0}),Pt("invalid",t);break;case"textarea":he(t,l),c=Z(t,l),Pt("invalid",t);break;default:c=l}it(s,c),U=c;for(h in U)if(U.hasOwnProperty(h)){var k=U[h];h==="style"?ke(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&pt(t,k)):h==="children"?typeof k=="string"?(s!=="textarea"||k!=="")&&Me(t,k):typeof k=="number"&&Me(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?k!=null&&h==="onScroll"&&Pt("scroll",t):k!=null&&P(t,h,k,E))}switch(s){case"input":rt(t),St(t,l,!1);break;case"textarea":rt(t),de(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Se(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?T(t,!!l.multiple,h,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=aa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(t&&i.stateNode!=null)jh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Tr(xo.current),Tr(fi.current),pa(i)){if(l=i.stateNode,s=i.memoizedProps,l[ci]=i,(h=l.nodeValue!==s)&&(t=bn,t!==null))switch(t.tag){case 3:oa(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oa(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return fn(i),null;case 13:if(Lt(Nt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(It&&Dn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Zd(),ls(),i.flags|=98560,h=!1;else if(h=pa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ci]=i}else ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),h=!1}else Kn!==null&&(ec(Kn),Kn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Nt.current&1)!==0?qt===0&&(qt=3):ic())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return ds(),Gu(t,i),t===null&&fo(i.stateNode.containerInfo),fn(i),null;case 10:return _u(i.type._context),fn(i),null;case 17:return xn(i.type)&&ua(),fn(i),null;case 19:if(Lt(Nt),h=i.memoizedState,h===null)return fn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)To(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=ya(t),E!==null){for(i.flags|=128,To(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Ct(Nt,Nt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ae()>gs&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304)}else{if(!l)if(t=ya(E),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),To(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!It)return fn(i),null}else 2*Ae()-h.renderingStartTime>gs&&s!==1073741824&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(s=h.last,s!==null?s.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ae(),i.sibling=null,s=Nt.current,Ct(Nt,l?s&1|2:s&1),i):(fn(i),null);case 22:case 23:return nc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(In&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function p_(t,i){switch(fu(i),i.tag){case 1:return xn(i.type)&&ua(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ds(),Lt(vn),Lt(un),Tu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Mu(i),null;case 13:if(Lt(Nt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ls()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Lt(Nt),null;case 4:return ds(),null;case 10:return _u(i.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var Pa=!1,dn=!1,m_=typeof WeakSet=="function"?WeakSet:Set,ze=null;function ps(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){kt(t,i,l)}else s.current=null}function Wu(t,i,s){try{s()}catch(l){kt(t,i,l)}}var Kh=!1;function g_(t,i){if(nu=Ko,t=Rd(),jl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var E=0,U=-1,k=-1,te=0,_e=0,xe=t,ge=null;t:for(;;){for(var Ue;xe!==s||c!==0&&xe.nodeType!==3||(U=E+c),xe!==h||l!==0&&xe.nodeType!==3||(k=E+l),xe.nodeType===3&&(E+=xe.nodeValue.length),(Ue=xe.firstChild)!==null;)ge=xe,xe=Ue;for(;;){if(xe===t)break t;if(ge===s&&++te===c&&(U=E),ge===h&&++_e===l&&(k=E),(Ue=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Ue}s=U===-1||k===-1?null:{start:U,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(iu={focusedElem:t,selectionRange:s},Ko=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Ht=Be.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:$n(i.type,He),Ht);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){kt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return Be=Kh,Kh=!1,Be}function wo(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Wu(i,s,h)}c=c.next}while(c!==l)}}function La(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Xu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function $h(t){var i=t.alternate;i!==null&&(t.alternate=null,$h(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[po],delete i[au],delete i[Qg],delete i[Jg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zh(t){return t.tag===5||t.tag===3||t.tag===4}function Qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=aa));else if(l!==4&&(t=t.child,t!==null))for(Yu(t,i,s),t=t.sibling;t!==null;)Yu(t,i,s),t=t.sibling}function qu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(qu(t,i,s),t=t.sibling;t!==null;)qu(t,i,s),t=t.sibling}var sn=null,Zn=!1;function Ji(t,i,s){for(s=s.child;s!==null;)Jh(t,i,s),s=s.sibling}function Jh(t,i,s){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(At,s)}catch{}switch(s.tag){case 5:dn||ps(s,i);case 6:var l=sn,c=Zn;sn=null,Ji(t,i,s),sn=l,Zn=c,sn!==null&&(Zn?(t=sn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):sn.removeChild(s.stateNode));break;case 18:sn!==null&&(Zn?(t=sn,s=s.stateNode,t.nodeType===8?ou(t.parentNode,s):t.nodeType===1&&ou(t,s),no(t)):ou(sn,s.stateNode));break;case 4:l=sn,c=Zn,sn=s.stateNode.containerInfo,Zn=!0,Ji(t,i,s),sn=l,Zn=c;break;case 0:case 11:case 14:case 15:if(!dn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Wu(s,i,E),c=c.next}while(c!==l)}Ji(t,i,s);break;case 1:if(!dn&&(ps(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(U){kt(s,i,U)}Ji(t,i,s);break;case 21:Ji(t,i,s);break;case 22:s.mode&1?(dn=(l=dn)||s.memoizedState!==null,Ji(t,i,s),dn=l):Ji(t,i,s);break;default:Ji(t,i,s)}}function ep(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new m_),i.forEach(function(l){var c=w_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function Qn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:sn=U.stateNode,Zn=!1;break e;case 3:sn=U.stateNode.containerInfo,Zn=!0;break e;case 4:sn=U.stateNode.containerInfo,Zn=!0;break e}U=U.return}if(sn===null)throw Error(n(160));Jh(h,E,c),sn=null,Zn=!1;var k=c.alternate;k!==null&&(k.return=null),c.return=null}catch(te){kt(c,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)tp(i,t),i=i.sibling}function tp(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(i,t),hi(t),l&4){try{wo(3,t,t.return),La(3,t)}catch(He){kt(t,t.return,He)}try{wo(5,t,t.return)}catch(He){kt(t,t.return,He)}}break;case 1:Qn(i,t),hi(t),l&512&&s!==null&&ps(s,s.return);break;case 5:if(Qn(i,t),hi(t),l&512&&s!==null&&ps(s,s.return),t.flags&32){var c=t.stateNode;try{Me(c,"")}catch(He){kt(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,E=s!==null?s.memoizedProps:h,U=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&ct(c,h),Mt(U,E);var te=Mt(U,h);for(E=0;E<k.length;E+=2){var _e=k[E],xe=k[E+1];_e==="style"?ke(c,xe):_e==="dangerouslySetInnerHTML"?pt(c,xe):_e==="children"?Me(c,xe):P(c,_e,xe,te)}switch(U){case"input":qe(c,h);break;case"textarea":ve(c,h);break;case"select":var ge=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ue=h.value;Ue!=null?T(c,!!h.multiple,Ue,!1):ge!==!!h.multiple&&(h.defaultValue!=null?T(c,!!h.multiple,h.defaultValue,!0):T(c,!!h.multiple,h.multiple?[]:"",!1))}c[po]=h}catch(He){kt(t,t.return,He)}}break;case 6:if(Qn(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){kt(t,t.return,He)}}break;case 3:if(Qn(i,t),hi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{no(i.containerInfo)}catch(He){kt(t,t.return,He)}break;case 4:Qn(i,t),hi(t);break;case 13:Qn(i,t),hi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||($u=Ae())),l&4&&ep(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(dn=(te=dn)||_e,Qn(i,t),dn=te):Qn(i,t),hi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!_e&&(t.mode&1)!==0)for(ze=t,_e=t.child;_e!==null;){for(xe=ze=_e;ze!==null;){switch(ge=ze,Ue=ge.child,ge.tag){case 0:case 11:case 14:case 15:wo(4,ge,ge.return);break;case 1:ps(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,s=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){kt(l,s,He)}}break;case 5:ps(ge,ge.return);break;case 22:if(ge.memoizedState!==null){rp(xe);continue}}Ue!==null?(Ue.return=ge,ze=Ue):rp(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,te?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=xe.stateNode,k=xe.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=et("display",E))}catch(He){kt(t,t.return,He)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=te?"":xe.memoizedProps}catch(He){kt(t,t.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Qn(i,t),hi(t),l&4&&ep(t);break;case 21:break;default:Qn(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Zh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Me(c,""),l.flags&=-33);var h=Qh(t);qu(t,h,c);break;case 3:case 4:var E=l.stateNode.containerInfo,U=Qh(t);Yu(t,U,E);break;default:throw Error(n(161))}}catch(k){kt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function __(t,i,s){ze=t,np(t)}function np(t,i,s){for(var l=(t.mode&1)!==0;ze!==null;){var c=ze,h=c.child;if(c.tag===22&&l){var E=c.memoizedState!==null||Pa;if(!E){var U=c.alternate,k=U!==null&&U.memoizedState!==null||dn;U=Pa;var te=dn;if(Pa=E,(dn=k)&&!te)for(ze=c;ze!==null;)E=ze,k=E.child,E.tag===22&&E.memoizedState!==null?sp(c):k!==null?(k.return=E,ze=k):sp(c);for(;h!==null;)ze=h,np(h),h=h.sibling;ze=c,Pa=U,dn=te}ip(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,ze=h):ip(t)}}function ip(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||La(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!dn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:$n(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&rh(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}rh(i,E,s)}break;case 5:var U=i.stateNode;if(s===null&&i.flags&4){s=U;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&s.focus();break;case"img":k.src&&(s.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var _e=te.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&no(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dn||i.flags&512&&Xu(i)}catch(ge){kt(i,i.return,ge)}}if(i===t){ze=null;break}if(s=i.sibling,s!==null){s.return=i.return,ze=s;break}ze=i.return}}function rp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var s=i.sibling;if(s!==null){s.return=i.return,ze=s;break}ze=i.return}}function sp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{La(4,i)}catch(k){kt(i,s,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(k){kt(i,c,k)}}var h=i.return;try{Xu(i)}catch(k){kt(i,h,k)}break;case 5:var E=i.return;try{Xu(i)}catch(k){kt(i,E,k)}}}catch(k){kt(i,i.return,k)}if(i===t){ze=null;break}var U=i.sibling;if(U!==null){U.return=i.return,ze=U;break}ze=i.return}}var v_=Math.ceil,ba=L.ReactCurrentDispatcher,ju=L.ReactCurrentOwner,Vn=L.ReactCurrentBatchConfig,gt=0,en=null,Gt=null,on=0,In=0,ms=ji(0),qt=0,Ao=null,Ar=0,Da=0,Ku=0,Ro=null,Sn=null,$u=0,gs=1/0,Ci=null,Ia=!1,Zu=null,er=null,Ua=!1,tr=null,Na=0,Co=0,Qu=null,Fa=-1,Oa=0;function gn(){return(gt&6)!==0?Ae():Fa!==-1?Fa:Fa=Ae()}function nr(t){return(t.mode&1)===0?1:(gt&2)!==0&&on!==0?on&-on:t_.transition!==null?(Oa===0&&(Oa=Kr()),Oa):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:ad(t.type)),t)}function Jn(t,i,s,l){if(50<Co)throw Co=0,Qu=null,Error(n(185));Bi(t,s,l),((gt&2)===0||t!==en)&&(t===en&&((gt&2)===0&&(Da|=s),qt===4&&ir(t,on)),Mn(t,l),s===1&&gt===0&&(i.mode&1)===0&&(gs=Ae()+500,fa&&$i()))}function Mn(t,i){var s=t.callbackNode;$s(t,i);var l=Rt(t,t===en?on:0);if(l===0)s!==null&&X(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&X(s),i===1)t.tag===0?e_(ap.bind(null,t)):Yd(ap.bind(null,t)),$g(function(){(gt&6)===0&&$i()}),s=null;else{switch(Jf(l)){case 1:s=Qe;break;case 4:s=Je;break;case 16:s=Ge;break;case 536870912:s=wt;break;default:s=Ge}s=mp(s,op.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function op(t,i){if(Fa=-1,Oa=0,(gt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(_s()&&t.callbackNode!==s)return null;var l=Rt(t,t===en?on:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=ka(t,l);else{i=l;var c=gt;gt|=2;var h=up();(en!==t||on!==i)&&(Ci=null,gs=Ae()+500,Cr(t,i));do try{S_();break}catch(U){lp(t,U)}while(!0);gu(),ba.current=h,gt=c,Gt!==null?i=0:(en=null,on=0,i=qt)}if(i!==0){if(i===2&&(c=ln(t),c!==0&&(l=c,i=Ju(t,c))),i===1)throw s=Ao,Cr(t,0),ir(t,l),Mn(t,Ae()),s;if(i===6)ir(t,l);else{if(c=t.current.alternate,(l&30)===0&&!x_(c)&&(i=ka(t,l),i===2&&(h=ln(t),h!==0&&(l=h,i=Ju(t,h))),i===1))throw s=Ao,Cr(t,0),ir(t,l),Mn(t,Ae()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Pr(t,Sn,Ci);break;case 3:if(ir(t,l),(l&130023424)===l&&(i=$u+500-Ae(),10<i)){if(Rt(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){gn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=su(Pr.bind(null,t,Sn,Ci),i);break}Pr(t,Sn,Ci);break;case 4:if(ir(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var E=31-Oe(l);h=1<<E,E=i[E],E>c&&(c=E),l&=~h}if(l=c,l=Ae()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*v_(l/1960))-l,10<l){t.timeoutHandle=su(Pr.bind(null,t,Sn,Ci),l);break}Pr(t,Sn,Ci);break;case 5:Pr(t,Sn,Ci);break;default:throw Error(n(329))}}}return Mn(t,Ae()),t.callbackNode===s?op.bind(null,t):null}function Ju(t,i){var s=Ro;return t.current.memoizedState.isDehydrated&&(Cr(t,i).flags|=256),t=ka(t,i),t!==2&&(i=Sn,Sn=s,i!==null&&ec(i)),t}function ec(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function x_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!jn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ir(t,i){for(i&=~Ku,i&=~Da,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-Oe(i),l=1<<s;t[s]=-1,i&=~l}}function ap(t){if((gt&6)!==0)throw Error(n(327));_s();var i=Rt(t,0);if((i&1)===0)return Mn(t,Ae()),null;var s=ka(t,i);if(t.tag!==0&&s===2){var l=ln(t);l!==0&&(i=l,s=Ju(t,l))}if(s===1)throw s=Ao,Cr(t,0),ir(t,i),Mn(t,Ae()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Pr(t,Sn,Ci),Mn(t,Ae()),null}function tc(t,i){var s=gt;gt|=1;try{return t(i)}finally{gt=s,gt===0&&(gs=Ae()+500,fa&&$i())}}function Rr(t){tr!==null&&tr.tag===0&&(gt&6)===0&&_s();var i=gt;gt|=1;var s=Vn.transition,l=Tt;try{if(Vn.transition=null,Tt=1,t)return t()}finally{Tt=l,Vn.transition=s,gt=i,(gt&6)===0&&$i()}}function nc(){In=ms.current,Lt(ms)}function Cr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Kg(s)),Gt!==null)for(s=Gt.return;s!==null;){var l=s;switch(fu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ua();break;case 3:ds(),Lt(vn),Lt(un),Tu();break;case 5:Mu(l);break;case 4:ds();break;case 13:Lt(Nt);break;case 19:Lt(Nt);break;case 10:_u(l.type._context);break;case 22:case 23:nc()}s=s.return}if(en=t,Gt=t=rr(t.current,null),on=In=i,qt=0,Ao=null,Ku=Da=Ar=0,Sn=Ro=null,Er!==null){for(i=0;i<Er.length;i++)if(s=Er[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var E=h.next;h.next=c,l.next=E}s.pending=l}Er=null}return t}function lp(t,i){do{var s=Gt;try{if(gu(),Sa.current=wa,Ma){for(var l=Ft.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ma=!1}if(wr=0,Jt=Yt=Ft=null,yo=!1,So=0,ju.current=null,s===null||s.return===null){qt=1,Ao=i,Gt=null;break}e:{var h=t,E=s.return,U=s,k=i;if(i=on,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var te=k,_e=U,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ue=Ih(E);if(Ue!==null){Ue.flags&=-257,Uh(Ue,E,U,h,i),Ue.mode&1&&Dh(h,te,i),i=Ue,k=te;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(k),i.updateQueue=He}else Be.add(k);break e}else{if((i&1)===0){Dh(h,te,i),ic();break e}k=Error(n(426))}}else if(It&&U.mode&1){var Ht=Ih(E);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Uh(Ht,E,U,h,i),pu(hs(k,U));break e}}h=k=hs(k,U),qt!==4&&(qt=2),Ro===null?Ro=[h]:Ro.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=Lh(h,k,i);ih(h,Y);break e;case 1:U=k;var H=h.type,j=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(er===null||!er.has(j)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=bh(h,U,i);ih(h,Ee);break e}}h=h.return}while(h!==null)}fp(s)}catch(We){i=We,Gt===s&&s!==null&&(Gt=s=s.return);continue}break}while(!0)}function up(){var t=ba.current;return ba.current=wa,t===null?wa:t}function ic(){(qt===0||qt===3||qt===2)&&(qt=4),en===null||(Ar&268435455)===0&&(Da&268435455)===0||ir(en,on)}function ka(t,i){var s=gt;gt|=2;var l=up();(en!==t||on!==i)&&(Ci=null,Cr(t,i));do try{y_();break}catch(c){lp(t,c)}while(!0);if(gu(),gt=s,ba.current=l,Gt!==null)throw Error(n(261));return en=null,on=0,qt}function y_(){for(;Gt!==null;)cp(Gt)}function S_(){for(;Gt!==null&&!Te();)cp(Gt)}function cp(t){var i=pp(t.alternate,t,In);t.memoizedProps=t.pendingProps,i===null?fp(t):Gt=i,ju.current=null}function fp(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=h_(s,i,In),s!==null){Gt=s;return}}else{if(s=p_(s,i),s!==null){s.flags&=32767,Gt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);qt===0&&(qt=5)}function Pr(t,i,s){var l=Tt,c=Vn.transition;try{Vn.transition=null,Tt=1,M_(t,i,s,l)}finally{Vn.transition=c,Tt=l}return null}function M_(t,i,s,l){do _s();while(tr!==null);if((gt&6)!==0)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(ng(t,h),t===en&&(Gt=en=null,on=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ua||(Ua=!0,mp(Ge,function(){return _s(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=Vn.transition,Vn.transition=null;var E=Tt;Tt=1;var U=gt;gt|=4,ju.current=null,g_(t,s),tp(s,t),Vg(iu),Ko=!!nu,iu=nu=null,t.current=s,__(s),De(),gt=U,Tt=E,Vn.transition=h}else t.current=s;if(Ua&&(Ua=!1,tr=t,Na=c),h=t.pendingLanes,h===0&&(er=null),_t(s.stateNode),Mn(t,Ae()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ia)throw Ia=!1,t=Zu,Zu=null,t;return(Na&1)!==0&&t.tag!==0&&_s(),h=t.pendingLanes,(h&1)!==0?t===Qu?Co++:(Co=0,Qu=t):Co=0,$i(),null}function _s(){if(tr!==null){var t=Jf(Na),i=Vn.transition,s=Tt;try{if(Vn.transition=null,Tt=16>t?16:t,tr===null)var l=!1;else{if(t=tr,tr=null,Na=0,(gt&6)!==0)throw Error(n(331));var c=gt;for(gt|=4,ze=t.current;ze!==null;){var h=ze,E=h.child;if((ze.flags&16)!==0){var U=h.deletions;if(U!==null){for(var k=0;k<U.length;k++){var te=U[k];for(ze=te;ze!==null;){var _e=ze;switch(_e.tag){case 0:case 11:case 15:wo(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,ze=xe;else for(;ze!==null;){_e=ze;var ge=_e.sibling,Ue=_e.return;if($h(_e),_e===te){ze=null;break}if(ge!==null){ge.return=Ue,ze=ge;break}ze=Ue}}}var Be=h.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Ht=He.sibling;He.sibling=null,He=Ht}while(He!==null)}}ze=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,ze=E;else e:for(;ze!==null;){if(h=ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:wo(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,ze=Y;break e}ze=h.return}}var H=t.current;for(ze=H;ze!==null;){E=ze;var j=E.child;if((E.subtreeFlags&2064)!==0&&j!==null)j.return=E,ze=j;else e:for(E=H;ze!==null;){if(U=ze,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:La(9,U)}}catch(We){kt(U,U.return,We)}if(U===E){ze=null;break e}var Ee=U.sibling;if(Ee!==null){Ee.return=U.return,ze=Ee;break e}ze=U.return}}if(gt=c,$i(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(At,t)}catch{}l=!0}return l}finally{Tt=s,Vn.transition=i}}return!1}function dp(t,i,s){i=hs(s,i),i=Lh(t,i,1),t=Qi(t,i,1),i=gn(),t!==null&&(Bi(t,1,i),Mn(t,i))}function kt(t,i,s){if(t.tag===3)dp(t,t,s);else for(;i!==null;){if(i.tag===3){dp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(er===null||!er.has(l))){t=hs(s,t),t=bh(i,t,1),i=Qi(i,t,1),t=gn(),i!==null&&(Bi(i,1,t),Mn(i,t));break}}i=i.return}}function E_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=gn(),t.pingedLanes|=t.suspendedLanes&s,en===t&&(on&s)===s&&(qt===4||qt===3&&(on&130023424)===on&&500>Ae()-$u?Cr(t,0):Ku|=s),Mn(t,i)}function hp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var s=gn();t=wi(t,i),t!==null&&(Bi(t,i,s),Mn(t,s))}function T_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),hp(t,s)}function w_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),hp(t,s)}var pp;pp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||vn.current)yn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return yn=!1,d_(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,It&&(i.flags&1048576)!==0&&qd(i,ha,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ca(t,i),t=i.pendingProps;var c=ss(i,un.current);fs(i,s),c=Ru(null,i,l,t,c,s);var h=Cu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,xn(l)?(h=!0,ca(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,yu(i),c.updater=Aa,i.stateNode=c,c._reactInternals=i,Uu(i,l,t,s),i=ku(null,i,l,!0,h,s)):(i.tag=0,It&&h&&cu(i),mn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ca(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=R_(l),t=$n(l,t),c){case 0:i=Ou(null,i,l,t,s);break e;case 1:i=Bh(null,i,l,t,s);break e;case 11:i=Nh(null,i,l,t,s);break e;case 14:i=Fh(null,i,l,$n(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:$n(l,c),Ou(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:$n(l,c),Bh(t,i,l,c,s);case 3:e:{if(Hh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,nh(t,i),xa(i,l,null,s);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=hs(Error(n(423)),i),i=Vh(t,i,l,s,c);break e}else if(l!==c){c=hs(Error(n(424)),i),i=Vh(t,i,l,s,c);break e}else for(Dn=qi(i.stateNode.containerInfo.firstChild),bn=i,It=!0,Kn=null,s=eh(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ls(),l===c){i=Ri(t,i,s);break e}mn(t,i,l,s)}i=i.child}return i;case 5:return sh(i),t===null&&hu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,E=c.children,ru(l,c)?E=null:h!==null&&ru(l,h)&&(i.flags|=32),zh(t,i),mn(t,i,E,s),i.child;case 6:return t===null&&hu(i),null;case 13:return Gh(t,i,s);case 4:return Su(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=us(i,null,l,s):mn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:$n(l,c),Nh(t,i,l,c,s);case 7:return mn(t,i,i.pendingProps,s),i.child;case 8:return mn(t,i,i.pendingProps.children,s),i.child;case 12:return mn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,E=c.value,Ct(ga,l._currentValue),l._currentValue=E,h!==null)if(jn(h.value,E)){if(h.children===c.children&&!vn.current){i=Ri(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){E=h.child;for(var k=U.firstContext;k!==null;){if(k.context===l){if(h.tag===1){k=Ai(-1,s&-s),k.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var _e=te.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),te.pending=k}}h.lanes|=s,k=h.alternate,k!==null&&(k.lanes|=s),vu(h.return,s,i),U.lanes|=s;break}k=k.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=s,U=E.alternate,U!==null&&(U.lanes|=s),vu(E,s,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}mn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,fs(i,s),c=Bn(c),l=l(c),i.flags|=1,mn(t,i,l,s),i.child;case 14:return l=i.type,c=$n(l,i.pendingProps),c=$n(l.type,c),Fh(t,i,l,c,s);case 15:return Oh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:$n(l,c),Ca(t,i),i.tag=1,xn(l)?(t=!0,ca(i)):t=!1,fs(i,s),Ch(i,l,c),Uu(i,l,c,s),ku(null,i,l,!0,t,s);case 19:return Xh(t,i,s);case 22:return kh(t,i,s)}throw Error(n(156,i.tag))};function mp(t,i){return ee(t,i)}function A_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,i,s,l){return new A_(t,i,s,l)}function rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function R_(t){if(typeof t=="function")return rc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===q)return 11;if(t===ce)return 14}return 2}function rr(t,i){var s=t.alternate;return s===null?(s=Gn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function za(t,i,s,l,c,h){var E=2;if(l=t,typeof t=="function")rc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case I:return Lr(s.children,c,h,i);case z:E=8,c|=8;break;case ae:return t=Gn(12,s,i,c|2),t.elementType=ae,t.lanes=h,t;case K:return t=Gn(13,s,i,c),t.elementType=K,t.lanes=h,t;case re:return t=Gn(19,s,i,c),t.elementType=re,t.lanes=h,t;case ue:return Ba(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M:E=10;break e;case A:E=9;break e;case q:E=11;break e;case ce:E=14;break e;case ne:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Gn(E,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Lr(t,i,s,l){return t=Gn(7,t,l,i),t.lanes=s,t}function Ba(t,i,s,l){return t=Gn(22,t,l,i),t.elementType=ue,t.lanes=s,t.stateNode={isHidden:!1},t}function sc(t,i,s){return t=Gn(6,t,null,i),t.lanes=s,t}function oc(t,i,s){return i=Gn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function C_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ac(t,i,s,l,c,h,E,U,k){return t=new C_(t,i,s,U,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Gn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(h),t}function P_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function gp(t){if(!t)return Ki;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(xn(s))return Wd(t,s,i)}return i}function _p(t,i,s,l,c,h,E,U,k){return t=ac(s,l,!0,t,c,h,E,U,k),t.context=gp(null),s=t.current,l=gn(),c=nr(s),h=Ai(l,c),h.callback=i??null,Qi(s,h,c),t.current.lanes=c,Bi(t,c,l),Mn(t,l),t}function Ha(t,i,s,l){var c=i.current,h=gn(),E=nr(c);return s=gp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ai(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Qi(c,i,E),t!==null&&(Jn(t,c,E,h),va(t,c,E)),E}function Va(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function lc(t,i){vp(t,i),(t=t.alternate)&&vp(t,i)}function L_(){return null}var xp=typeof reportError=="function"?reportError:function(t){console.error(t)};function uc(t){this._internalRoot=t}Ga.prototype.render=uc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ha(t,i,null,null)},Ga.prototype.unmount=uc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Rr(function(){Ha(null,t,null,null)}),i[Si]=null}};function Ga(t){this._internalRoot=t}Ga.prototype.unstable_scheduleHydration=function(t){if(t){var i=nd();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Wi.length&&i!==0&&i<Wi[s].priority;s++);Wi.splice(s,0,t),s===0&&sd(t)}};function cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yp(){}function b_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var te=Va(E);h.call(te)}}var E=_p(i,l,t,0,null,!1,!1,"",yp);return t._reactRootContainer=E,t[Si]=E.current,fo(t.nodeType===8?t.parentNode:t),Rr(),E}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var U=l;l=function(){var te=Va(k);U.call(te)}}var k=ac(t,0,!1,null,null,!1,!1,"",yp);return t._reactRootContainer=k,t[Si]=k.current,fo(t.nodeType===8?t.parentNode:t),Rr(function(){Ha(i,k,s,l)}),k}function Xa(t,i,s,l,c){var h=s._reactRootContainer;if(h){var E=h;if(typeof c=="function"){var U=c;c=function(){var k=Va(E);U.call(k)}}Ha(i,E,t,c)}else E=b_(s,i,t,c,l);return Va(E)}ed=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=yi(i.pendingLanes);s!==0&&(Ul(i,s|1),Mn(i,Ae()),(gt&6)===0&&(gs=Ae()+500,$i()))}break;case 13:Rr(function(){var l=wi(t,1);if(l!==null){var c=gn();Jn(l,t,1,c)}}),lc(t,1)}},Nl=function(t){if(t.tag===13){var i=wi(t,134217728);if(i!==null){var s=gn();Jn(i,t,134217728,s)}lc(t,134217728)}},td=function(t){if(t.tag===13){var i=nr(t),s=wi(t,i);if(s!==null){var l=gn();Jn(s,t,i,l)}lc(t,i)}},nd=function(){return Tt},id=function(t,i){var s=Tt;try{return Tt=t,i()}finally{Tt=s}},oe=function(t,i,s){switch(i){case"input":if(qe(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=la(l);if(!c)throw Error(n(90));Ke(l),qe(l,c)}}}break;case"textarea":ve(t,s);break;case"select":i=s.value,i!=null&&T(t,!!s.multiple,i,!1)}},rn=tc,mt=Rr;var D_={usingClientEntryPoint:!1,Events:[mo,is,la,dt,Ut,tc]},Po={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I_={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||L_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{At=Ya.inject(I_),Dt=Ya}catch{}}return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D_,En.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cc(i))throw Error(n(200));return P_(t,i,null,s)},En.createRoot=function(t,i){if(!cc(t))throw Error(n(299));var s=!1,l="",c=xp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ac(t,1,!1,null,null,s,!1,l,c),t[Si]=i.current,fo(t.nodeType===8?t.parentNode:t),new uc(i)},En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=G(i),t=t===null?null:t.stateNode,t},En.flushSync=function(t){return Rr(t)},En.hydrate=function(t,i,s){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!0,s)},En.hydrateRoot=function(t,i,s){if(!cc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",E=xp;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(E=s.onRecoverableError)),i=_p(i,null,t,1,s??null,c,!1,h,E),t[Si]=i.current,fo(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Ga(i)},En.render=function(t,i,s){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!1,s)},En.unmountComponentAtNode=function(t){if(!Wa(t))throw Error(n(40));return t._reactRootContainer?(Rr(function(){Xa(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},En.unstable_batchedUpdates=tc,En.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Wa(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Xa(t,i,s,!1,l)},En.version="18.3.1-next-f1338f8080-20240426",En}var Cp;function H_(){if(Cp)return hc.exports;Cp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hc.exports=B_(),hc.exports}var Pp;function V_(){if(Pp)return qa;Pp=1;var o=H_();return qa.createRoot=o.createRoot,qa.hydrateRoot=o.hydrateRoot,qa}var G_=V_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="169",W_=0,Lp=1,X_=2,Am=1,Y_=2,Ui=3,mr=0,An=1,ii=2,hr=0,Fs=1,bp=2,Dp=3,Ip=4,q_=5,zr=100,j_=101,K_=102,$_=103,Z_=104,Q_=200,J_=201,ev=202,tv=203,jc=204,Kc=205,nv=206,iv=207,rv=208,sv=209,ov=210,av=211,lv=212,uv=213,cv=214,$c=0,Zc=1,Qc=2,zs=3,Jc=4,ef=5,tf=6,nf=7,Ll=0,fv=1,dv=2,pr=0,hv=1,pv=2,mv=3,gv=4,_v=5,vv=6,xv=7,Rm=300,Bs=301,Hs=302,rf=303,sf=304,bl=306,of=1e3,Hr=1001,af=1002,Yn=1003,yv=1004,ja=1005,ri=1006,gc=1007,Vr=1008,Oi=1009,Cm=1010,Pm=1011,ko=1012,kf=1013,Gr=1014,Ni=1015,zo=1016,zf=1017,Bf=1018,Vs=1020,Lm=35902,bm=1021,Dm=1022,oi=1023,Im=1024,Um=1025,Os=1026,Gs=1027,Nm=1028,Hf=1029,Fm=1030,Vf=1031,Gf=1033,ml=33776,gl=33777,_l=33778,vl=33779,lf=35840,uf=35841,cf=35842,ff=35843,df=36196,hf=37492,pf=37496,mf=37808,gf=37809,_f=37810,vf=37811,xf=37812,yf=37813,Sf=37814,Mf=37815,Ef=37816,Tf=37817,wf=37818,Af=37819,Rf=37820,Cf=37821,xl=36492,Pf=36494,Lf=36495,Om=36283,bf=36284,Df=36285,If=36286,Sv=3200,Mv=3201,Wf=0,Ev=1,dr="",mi="srgb",_r="srgb-linear",Xf="display-p3",Dl="display-p3-linear",Ml="linear",bt="srgb",El="rec709",Tl="p3",vs=7680,Up=519,Tv=512,wv=513,Av=514,km=515,Rv=516,Cv=517,Pv=518,Lv=519,Np=35044,Fp="300 es",Fi=2e3,wl=2001;class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,Uf=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[o&255]+hn[o>>8&255]+hn[o>>16&255]+hn[o>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function wn(o,e,n){return Math.max(e,Math.min(n,o))}function bv(o,e){return(o%e+e)%e}function vc(o,e,n){return(1-n)*o+n*e}function bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Tn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,n=0){ht.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,r,a,u,f,d,p,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],y=r[7],x=r[2],S=r[5],w=r[8],R=a[0],g=a[3],_=a[6],b=a[1],P=a[4],L=a[7],W=a[2],N=a[5],I=a[8];return u[0]=f*R+d*b+p*W,u[3]=f*g+d*P+p*N,u[6]=f*_+d*L+p*I,u[1]=m*R+v*b+y*W,u[4]=m*g+v*P+y*N,u[7]=m*_+v*L+y*I,u[2]=x*R+S*b+w*W,u[5]=x*g+S*P+w*N,u[8]=x*_+S*L+w*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],y=v*f-d*m,x=d*p-v*u,S=m*u-f*p,w=n*y+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=y*R,e[1]=(a*m-v*r)*R,e[2]=(d*r-a*f)*R,e[3]=x*R,e[4]=(v*n-a*p)*R,e[5]=(a*u-d*n)*R,e[6]=S*R,e[7]=(r*p-m*n)*R,e[8]=(f*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(xc.makeScale(e,n)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new at;function zm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Al(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Dv(){const o=Al("canvas");return o.style.display="block",o}const Op={};function yl(o){o in Op||(Op[o]=!0,console.warn(o))}function Iv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Uv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const kp=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zp=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[_r]:{transfer:Ml,primaries:El,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[mi]:{transfer:bt,primaries:El,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Dl]:{transfer:Ml,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(zp),fromReference:o=>o.applyMatrix3(kp)},[Xf]:{transfer:bt,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(zp),fromReference:o=>o.applyMatrix3(kp).convertLinearToSRGB()}},Fv=new Set([_r,Dl]),Et={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Fv.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=Do[e].toReference,a=Do[n].fromReference;return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Do[o].primaries},getTransfer:function(o){return o===dr?Ml:Do[o].transfer},getLuminanceCoefficients:function(o,e=this._workingColorSpace){return o.fromArray(Do[e].luminanceCoefficients)}};function ks(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function yc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xs;class Ov{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Al("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Al("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=ks(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ks(n[r]/255)*255):n[r]=ks(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kv=0;class Bm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Sc(a[f].image)):u.push(Sc(a[f]))}else u=Sc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Sc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ov.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zv=0;class Rn extends Ys{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Hr,a=Hr,u=ri,f=Vr,d=oi,p=Oi,m=Rn.DEFAULT_ANISOTROPY,v=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Bo(),this.name="",this.source=new Bm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case of:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case of:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Rm;Rn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,r=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],v=p[4],y=p[8],x=p[1],S=p[5],w=p[9],R=p[2],g=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(y-R)<.01&&Math.abs(w-g)<.01){if(Math.abs(v+x)<.1&&Math.abs(y+R)<.1&&Math.abs(w+g)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,L=(S+1)/2,W=(_+1)/2,N=(v+x)/4,I=(y+R)/4,z=(w+g)/4;return P>L&&P>W?P<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(P),a=N/r,u=I/r):L>W?L<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(L),r=N/a,u=z/a):W<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(W),r=I/u,a=z/u),this.set(r,a,u,n),this}let b=Math.sqrt((g-w)*(g-w)+(y-R)*(y-R)+(x-v)*(x-v));return Math.abs(b)<.001&&(b=1),this.x=(g-w)/b,this.y=(y-R)/b,this.z=(x-v)/b,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bv extends Ys{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Rn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Bm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends Bv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Hm extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hv extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],y=r[a+3];const x=u[f+0],S=u[f+1],w=u[f+2],R=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=R;return}if(y!==R||p!==x||m!==S||v!==w){let g=1-d;const _=p*x+m*S+v*w+y*R,b=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const W=Math.sqrt(P),N=Math.atan2(W,_*b);g=Math.sin(g*N)/W,d=Math.sin(d*N)/W}const L=d*b;if(p=p*g+x*L,m=m*g+S*L,v=v*g+w*L,y=y*g+R*L,g===1-d){const W=1/Math.sqrt(p*p+m*m+v*v+y*y);p*=W,m*=W,v*=W,y*=W}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],y=u[f],x=u[f+1],S=u[f+2],w=u[f+3];return e[n]=d*w+v*y+p*S-m*x,e[n+1]=p*w+v*x+m*y-d*S,e[n+2]=m*w+v*S+d*x-p*y,e[n+3]=v*w-d*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),y=d(u/2),x=p(r/2),S=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*v*y+m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y-x*S*w;break;case"YXZ":this._x=x*v*y+m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y+x*S*w;break;case"ZXY":this._x=x*v*y-m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y-x*S*w;break;case"ZYX":this._x=x*v*y-m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y+x*S*w;break;case"YZX":this._x=x*v*y+m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y-x*S*w;break;case"XZY":this._x=x*v*y-m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],y=n[10],x=r+d+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(v-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*p,this._y=a*v+f*p+u*d-r*m,this._z=u*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),y=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=f*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),y=2*(u*r-f*n);return this.x=n+p*m+f*y-d*v,this.y=r+p*v+d*m-u*y,this.z=a+p*y+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mc=new $,Bp=new Ho;class Vo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ei):ei.fromBufferAttribute(u,f),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ka.copy(r.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),$a.subVectors(this.max,Io),ys.subVectors(e.a,Io),Ss.subVectors(e.b,Io),Ms.subVectors(e.c,Io),or.subVectors(Ss,ys),ar.subVectors(Ms,Ss),br.subVectors(ys,Ms);let n=[0,-or.z,or.y,0,-ar.z,ar.y,0,-br.z,br.y,or.z,0,-or.x,ar.z,0,-ar.x,br.z,0,-br.x,-or.y,or.x,0,-ar.y,ar.x,0,-br.y,br.x,0];return!Ec(n,ys,Ss,Ms,$a)||(n=[1,0,0,0,1,0,0,0,1],!Ec(n,ys,Ss,Ms,$a))?!1:(Za.crossVectors(or,ar),n=[Za.x,Za.y,Za.z],Ec(n,ys,Ss,Ms,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new $,new $,new $,new $,new $,new $,new $,new $],ei=new $,Ka=new Vo,ys=new $,Ss=new $,Ms=new $,or=new $,ar=new $,br=new $,Io=new $,$a=new $,Za=new $,Dr=new $;function Ec(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Dr.fromArray(o,u);const d=a.x*Math.abs(Dr.x)+a.y*Math.abs(Dr.y)+a.z*Math.abs(Dr.z),p=e.dot(Dr),m=n.dot(Dr),v=r.dot(Dr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const Vv=new Vo,Uo=new $,Tc=new $;class Yf{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Vv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Tc)),this.expandByPoint(Uo.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new $,wc=new $,Qa=new $,lr=new $,Ac=new $,Ja=new $,Rc=new $;class Gv{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){wc.copy(e).add(n).multiplyScalar(.5),Qa.copy(n).sub(e).normalize(),lr.copy(this.origin).sub(wc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Qa),d=lr.dot(this.direction),p=-lr.dot(Qa),m=lr.lengthSq(),v=Math.abs(1-f*f);let y,x,S,w;if(v>0)if(y=f*p-d,x=f*d-p,w=u*v,y>=0)if(x>=-w)if(x<=w){const R=1/v;y*=R,x*=R,S=y*(y+f*x+2*d)+x*(f*y+x+2*p)+m}else x=u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x=-u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x<=-w?(y=Math.max(0,-(-f*u+d)),x=y>0?-u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m):x<=w?(y=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(y=Math.max(0,-(f*u+d)),x=y>0?u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m);else x=f>0?-u:u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(wc).addScaledVector(Qa,x),S}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),a=Li.dot(Li)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),y>=0?(d=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,a,u){Ac.subVectors(n,e),Ja.subVectors(r,e),Rc.crossVectors(Ac,Ja);let f=this.direction.dot(Rc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;lr.subVectors(this.origin,e);const p=d*this.direction.dot(Ja.crossVectors(lr,Ja));if(p<0)return null;const m=d*this.direction.dot(Ac.cross(lr));if(m<0||p+m>f)return null;const v=-d*lr.dot(Rc);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,u,f,d,p,m,v,y,x,S,w,R,g){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,v,y,x,S,w,R,g)}set(e,n,r,a,u,f,d,p,m,v,y,x,S,w,R,g){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=y,_[14]=x,_[3]=S,_[7]=w,_[11]=R,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Es.setFromMatrixColumn(e,0).length(),u=1/Es.setFromMatrixColumn(e,1).length(),f=1/Es.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=f*v,S=f*y,w=d*v,R=d*y;n[0]=p*v,n[4]=-p*y,n[8]=m,n[1]=S+w*m,n[5]=x-R*m,n[9]=-d*p,n[2]=R-x*m,n[6]=w+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*v,S=p*y,w=m*v,R=m*y;n[0]=x+R*d,n[4]=w*d-S,n[8]=f*m,n[1]=f*y,n[5]=f*v,n[9]=-d,n[2]=S*d-w,n[6]=R+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*v,S=p*y,w=m*v,R=m*y;n[0]=x-R*d,n[4]=-f*y,n[8]=w+S*d,n[1]=S+w*d,n[5]=f*v,n[9]=R-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*v,S=f*y,w=d*v,R=d*y;n[0]=p*v,n[4]=w*m-S,n[8]=x*m+R,n[1]=p*y,n[5]=R*m+x,n[9]=S*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,w=d*p,R=d*m;n[0]=p*v,n[4]=R-x*y,n[8]=w*y+S,n[1]=y,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=S*y+w,n[10]=x-R*y}else if(e.order==="XZY"){const x=f*p,S=f*m,w=d*p,R=d*m;n[0]=p*v,n[4]=-y,n[8]=m*v,n[1]=x*y+R,n[5]=f*v,n[9]=S*y-w,n[2]=w*y-S,n[6]=d*v,n[10]=R*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wv,e,Xv)}lookAt(e,n,r){const a=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ur.crossVectors(r,Un),ur.lengthSq()===0&&(Math.abs(r.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ur.crossVectors(r,Un)),ur.normalize(),el.crossVectors(Un,ur),a[0]=ur.x,a[4]=el.x,a[8]=Un.x,a[1]=ur.y,a[5]=el.y,a[9]=Un.y,a[2]=ur.z,a[6]=el.z,a[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],y=r[5],x=r[9],S=r[13],w=r[2],R=r[6],g=r[10],_=r[14],b=r[3],P=r[7],L=r[11],W=r[15],N=a[0],I=a[4],z=a[8],ae=a[12],M=a[1],A=a[5],q=a[9],K=a[13],re=a[2],ce=a[6],ne=a[10],ue=a[14],B=a[3],fe=a[7],se=a[11],F=a[15];return u[0]=f*N+d*M+p*re+m*B,u[4]=f*I+d*A+p*ce+m*fe,u[8]=f*z+d*q+p*ne+m*se,u[12]=f*ae+d*K+p*ue+m*F,u[1]=v*N+y*M+x*re+S*B,u[5]=v*I+y*A+x*ce+S*fe,u[9]=v*z+y*q+x*ne+S*se,u[13]=v*ae+y*K+x*ue+S*F,u[2]=w*N+R*M+g*re+_*B,u[6]=w*I+R*A+g*ce+_*fe,u[10]=w*z+R*q+g*ne+_*se,u[14]=w*ae+R*K+g*ue+_*F,u[3]=b*N+P*M+L*re+W*B,u[7]=b*I+P*A+L*ce+W*fe,u[11]=b*z+P*q+L*ne+W*se,u[15]=b*ae+P*K+L*ue+W*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],y=e[6],x=e[10],S=e[14],w=e[3],R=e[7],g=e[11],_=e[15];return w*(+u*p*y-a*m*y-u*d*x+r*m*x+a*d*S-r*p*S)+R*(+n*p*S-n*m*x+u*f*x-a*f*S+a*m*v-u*p*v)+g*(+n*m*y-n*d*S-u*f*y+r*f*S+u*d*v-r*m*v)+_*(-a*d*v-n*p*y+n*d*x+a*f*y-r*f*x+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],y=e[9],x=e[10],S=e[11],w=e[12],R=e[13],g=e[14],_=e[15],b=y*g*m-R*x*m+R*p*S-d*g*S-y*p*_+d*x*_,P=w*x*m-v*g*m-w*p*S+f*g*S+v*p*_-f*x*_,L=v*R*m-w*y*m+w*d*S-f*R*S-v*d*_+f*y*_,W=w*y*p-v*R*p-w*d*x+f*R*x+v*d*g-f*y*g,N=n*b+r*P+a*L+u*W;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=b*I,e[1]=(R*x*u-y*g*u-R*a*S+r*g*S+y*a*_-r*x*_)*I,e[2]=(d*g*u-R*p*u+R*a*m-r*g*m-d*a*_+r*p*_)*I,e[3]=(y*p*u-d*x*u-y*a*m+r*x*m+d*a*S-r*p*S)*I,e[4]=P*I,e[5]=(v*g*u-w*x*u+w*a*S-n*g*S-v*a*_+n*x*_)*I,e[6]=(w*p*u-f*g*u-w*a*m+n*g*m+f*a*_-n*p*_)*I,e[7]=(f*x*u-v*p*u+v*a*m-n*x*m-f*a*S+n*p*S)*I,e[8]=L*I,e[9]=(w*y*u-v*R*u-w*r*S+n*R*S+v*r*_-n*y*_)*I,e[10]=(f*R*u-w*d*u+w*r*m-n*R*m-f*r*_+n*d*_)*I,e[11]=(v*d*u-f*y*u-v*r*m+n*y*m+f*r*S-n*d*S)*I,e[12]=W*I,e[13]=(v*R*a-w*y*a+w*r*x-n*R*x-v*r*g+n*y*g)*I,e[14]=(w*d*a-f*R*a-w*r*p+n*R*p+f*r*g-n*d*g)*I,e[15]=(f*y*a-v*d*a+v*r*p-n*y*p-f*r*x+n*d*x)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,v=f+f,y=d+d,x=u*m,S=u*v,w=u*y,R=f*v,g=f*y,_=d*y,b=p*m,P=p*v,L=p*y,W=r.x,N=r.y,I=r.z;return a[0]=(1-(R+_))*W,a[1]=(S+L)*W,a[2]=(w-P)*W,a[3]=0,a[4]=(S-L)*N,a[5]=(1-(x+_))*N,a[6]=(g+b)*N,a[7]=0,a[8]=(w+P)*I,a[9]=(g-b)*I,a[10]=(1-(x+R))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Es.set(a[0],a[1],a[2]).length();const f=Es.set(a[4],a[5],a[6]).length(),d=Es.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ti.copy(this);const m=1/u,v=1/f,y=1/d;return ti.elements[0]*=m,ti.elements[1]*=m,ti.elements[2]*=m,ti.elements[4]*=v,ti.elements[5]*=v,ti.elements[6]*=v,ti.elements[8]*=y,ti.elements[9]*=y,ti.elements[10]*=y,n.setFromRotationMatrix(ti),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Fi){const p=this.elements,m=2*u/(n-e),v=2*u/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(d===Fi)S=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===wl)S=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Fi){const p=this.elements,m=1/(n-e),v=1/(r-a),y=1/(f-u),x=(n+e)*m,S=(r+a)*v;let w,R;if(d===Fi)w=(f+u)*y,R=-2*y;else if(d===wl)w=u*y,R=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Es=new $,ti=new Bt,Wv=new $(0,0,0),Xv=new $(1,1,1),ur=new $,el=new $,Un=new $,Hp=new Bt,Vp=new Ho;class ai{constructor(e=0,n=0,r=0,a=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(wn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-wn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(wn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Vm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yv=0;const Gp=new $,Ts=new Ho,bi=new Bt,tl=new $,No=new $,qv=new $,jv=new Ho,Wp=new $(1,0,0),Xp=new $(0,1,0),Yp=new $(0,0,1),qp={type:"added"},Kv={type:"removed"},ws={type:"childadded",child:null},Cc={type:"childremoved",child:null};class an extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new $,n=new ai,r=new Ho,a=new $(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new at}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(Yp,e)}translateOnAxis(e,n){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(Yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?tl.copy(e):tl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(No,tl,this.up):bi.lookAt(tl,No,this.up),this.quaternion.setFromRotationMatrix(bi),a&&(bi.extractRotation(a.matrixWorld),Ts.setFromRotationMatrix(bi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qp),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Kv),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qp),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,qv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),y=f(e.shapes),x=f(e.skeletons),S=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}an.DEFAULT_UP=new $(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new $,Di=new $,Pc=new $,Ii=new $,As=new $,Rs=new $,jp=new $,Lc=new $,bc=new $,Dc=new $,Ic=new zt,Uc=new zt,Nc=new zt;class si{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ni.subVectors(e,n),a.cross(ni);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ni.subVectors(a,n),Di.subVectors(r,n),Pc.subVectors(e,n);const f=ni.dot(ni),d=ni.dot(Di),p=ni.dot(Pc),m=Di.dot(Di),v=Di.dot(Pc),y=f*m-d*d;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(m*p-d*v)*x,w=(f*v-d*p)*x;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Ii)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ii.x),p.addScaledVector(f,Ii.y),p.addScaledVector(d,Ii.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Ic.setScalar(0),Uc.setScalar(0),Nc.setScalar(0),Ic.fromBufferAttribute(e,n),Uc.fromBufferAttribute(e,r),Nc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Ic,u.x),f.addScaledVector(Uc,u.y),f.addScaledVector(Nc,u.z),f}static isFrontFacing(e,n,r,a){return ni.subVectors(r,n),Di.subVectors(e,n),ni.cross(Di).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ni.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return si.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;As.subVectors(a,r),Rs.subVectors(u,r),Lc.subVectors(e,r);const p=As.dot(Lc),m=Rs.dot(Lc);if(p<=0&&m<=0)return n.copy(r);bc.subVectors(e,a);const v=As.dot(bc),y=Rs.dot(bc);if(v>=0&&y<=v)return n.copy(a);const x=p*y-v*m;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(As,f);Dc.subVectors(e,u);const S=As.dot(Dc),w=Rs.dot(Dc);if(w>=0&&S<=w)return n.copy(u);const R=S*m-p*w;if(R<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Rs,d);const g=v*w-S*y;if(g<=0&&y-v>=0&&S-w>=0)return jp.subVectors(u,a),d=(y-v)/(y-v+(S-w)),n.copy(a).addScaledVector(jp,d);const _=1/(g+R+x);return f=R*_,d=x*_,n.copy(r).addScaledVector(As,f).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},nl={h:0,s:0,l:0};function Fc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class lt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=bv(e,1),n=wn(n,0,1),r=wn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Fc(f,u,e+1/3),this.g=Fc(f,u,e),this.b=Fc(f,u,e-1/3)}return Et.toWorkingColorSpace(this,a),this}setStyle(e,n=mi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const r=Gm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=yc(e.r),this.g=yc(e.g),this.b=yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Et.fromWorkingColorSpace(pn.copy(this),e),Math.round(wn(pn.r*255,0,255))*65536+Math.round(wn(pn.g*255,0,255))*256+Math.round(wn(pn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,a=pn.g,u=pn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const y=f-d;switch(m=v<=.5?y/(f+d):y/(2-f-d),f){case r:p=(a-u)/y+(a<u?6:0);break;case a:p=(u-r)/y+2;break;case u:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=mi){Et.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,a=pn.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+n,cr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(cr),e.getHSL(nl);const r=vc(cr.h,nl.h,n),a=vc(cr.s,nl.s,n),u=vc(cr.l,nl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new lt;lt.NAMES=Gm;let $v=0;class qs extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=Fs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Kc,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==jc&&(r.blendSrc=this.blendSrc),this.blendDst!==Kc&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rl extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new $,il=new ht;class _i{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Np,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=bo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Tn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array),u=Tn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}}class Wm extends _i{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Xm extends _i{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class jt extends _i{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Zv=0;const Wn=new Bt,Oc=new an,Cs=new $,Nn=new Vo,Fo=new Vo,nn=new $;class li extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zm(e)?Xm:Wm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new at().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,r){return Wn.makeTranslation(e,n,r),this.applyMatrix4(Wn),this}scale(e,n,r){return Wn.makeScale(e,n,r),this.applyMatrix4(Wn),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new jt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Nn.setFromBufferAttribute(u),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(Nn.min,Fo.min),Nn.expandByPoint(nn),nn.addVectors(Nn.max,Fo.max),Nn.expandByPoint(nn)):(Nn.expandByPoint(Fo.min),Nn.expandByPoint(Fo.max))}Nn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)nn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(nn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)nn.fromBufferAttribute(d,m),p&&(Cs.fromBufferAttribute(e,m),nn.add(Cs)),a=Math.max(a,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let z=0;z<r.count;z++)d[z]=new $,p[z]=new $;const m=new $,v=new $,y=new $,x=new ht,S=new ht,w=new ht,R=new $,g=new $;function _(z,ae,M){m.fromBufferAttribute(r,z),v.fromBufferAttribute(r,ae),y.fromBufferAttribute(r,M),x.fromBufferAttribute(u,z),S.fromBufferAttribute(u,ae),w.fromBufferAttribute(u,M),v.sub(m),y.sub(m),S.sub(x),w.sub(x);const A=1/(S.x*w.y-w.x*S.y);isFinite(A)&&(R.copy(v).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(A),g.copy(y).multiplyScalar(S.x).addScaledVector(v,-w.x).multiplyScalar(A),d[z].add(R),d[ae].add(R),d[M].add(R),p[z].add(g),p[ae].add(g),p[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let z=0,ae=b.length;z<ae;++z){const M=b[z],A=M.start,q=M.count;for(let K=A,re=A+q;K<re;K+=3)_(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const P=new $,L=new $,W=new $,N=new $;function I(z){W.fromBufferAttribute(a,z),N.copy(W);const ae=d[z];P.copy(ae),P.sub(W.multiplyScalar(W.dot(ae))).normalize(),L.crossVectors(N,ae);const A=L.dot(p[z])<0?-1:1;f.setXYZW(z,P.x,P.y,P.z,A)}for(let z=0,ae=b.length;z<ae;++z){const M=b[z],A=M.start,q=M.count;for(let K=A,re=A+q;K<re;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new $,u=new $,f=new $,d=new $,p=new $,m=new $,v=new $,y=new $;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),R=e.getX(x+1),g=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,g),v.subVectors(f,u),y.subVectors(a,u),v.cross(y),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,g),d.add(v),p.add(v),m.add(v),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(g,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,u),y.subVectors(a,u),v.cross(y),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,y=d.normalized,x=new m.constructor(p.length*v);let S=0,w=0;for(let R=0,g=p.length;R<g;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*v;for(let _=0;_<v;_++)x[w++]=m[S++]}return new _i(x,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,y=m.length;v<y;v++){const x=m[v],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];v.push(S.toJSON(e.data))}v.length>0&&(a[p]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],y=u[m];for(let x=0,S=y.length;x<S;x++)v.push(y[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kp=new Bt,Ir=new Gv,rl=new Yf,$p=new $,sl=new $,ol=new $,al=new $,kc=new $,ll=new $,Zp=new $,ul=new $;class Vt extends an{constructor(e=new li,n=new Rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ll.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],y=u[p];v!==0&&(kc.fromBufferAttribute(y,e),f?ll.addScaledVector(kc,v):ll.addScaledVector(kc.sub(n),v))}n.add(ll)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),rl.copy(r.boundingSphere),rl.applyMatrix4(u),Ir.copy(e.ray).recast(e.near),!(rl.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(rl,$p)===null||Ir.origin.distanceToSquared($p)>(e.far-e.near)**2))&&(Kp.copy(u).invert(),Ir.copy(e.ray).applyMatrix4(Kp),!(r.boundingBox!==null&&Ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const g=x[w],_=f[g.materialIndex],b=Math.max(g.start,S.start),P=Math.min(d.count,Math.min(g.start+g.count,S.start+S.count));for(let L=b,W=P;L<W;L+=3){const N=d.getX(L),I=d.getX(L+1),z=d.getX(L+2);a=cl(this,_,e,r,m,v,y,N,I,z),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let g=w,_=R;g<_;g+=3){const b=d.getX(g),P=d.getX(g+1),L=d.getX(g+2);a=cl(this,f,e,r,m,v,y,b,P,L),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const g=x[w],_=f[g.materialIndex],b=Math.max(g.start,S.start),P=Math.min(p.count,Math.min(g.start+g.count,S.start+S.count));for(let L=b,W=P;L<W;L+=3){const N=L,I=L+1,z=L+2;a=cl(this,_,e,r,m,v,y,N,I,z),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let g=w,_=R;g<_;g+=3){const b=g,P=g+1,L=g+2;a=cl(this,f,e,r,m,v,y,b,P,L),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function Qv(o,e,n,r,a,u,f,d){let p;if(e.side===An?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===mr,d),p===null)return null;ul.copy(d),ul.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(ul);return m<n.near||m>n.far?null:{distance:m,point:ul.clone(),object:o}}function cl(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,sl),o.getVertexPosition(p,ol),o.getVertexPosition(m,al);const v=Qv(o,e,n,r,sl,ol,al,Zp);if(v){const y=new $;si.getBarycoord(Zp,sl,ol,al,y),a&&(v.uv=si.getInterpolatedAttribute(a,d,p,m,y,new ht)),u&&(v.uv1=si.getInterpolatedAttribute(u,d,p,m,y,new ht)),f&&(v.normal=si.getInterpolatedAttribute(f,d,p,m,y,new $),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new $,materialIndex:0};si.getNormal(sl,ol,al,x.normal),v.face=x,v.barycoord=y}return v}class Xr extends li{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],y=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(y,2));function w(R,g,_,b,P,L,W,N,I,z,ae){const M=L/I,A=W/z,q=L/2,K=W/2,re=N/2,ce=I+1,ne=z+1;let ue=0,B=0;const fe=new $;for(let se=0;se<ne;se++){const F=se*A-K;for(let ie=0;ie<ce;ie++){const Le=ie*M-q;fe[R]=Le*b,fe[g]=F*P,fe[_]=re,m.push(fe.x,fe.y,fe.z),fe[R]=0,fe[g]=0,fe[_]=N>0?1:-1,v.push(fe.x,fe.y,fe.z),y.push(ie/I),y.push(1-se/z),ue+=1}}for(let se=0;se<z;se++)for(let F=0;F<I;F++){const ie=x+F+ce*se,Le=x+F+ce*(se+1),Q=x+(F+1)+ce*(se+1),le=x+(F+1)+ce*se;p.push(ie,Le,le),p.push(Le,Q,le),B+=6}d.addGroup(S,B,ae),S+=B,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function _n(o){const e={};for(let n=0;n<o.length;n++){const r=Ws(o[n]);for(const a in r)e[a]=r[a]}return e}function Jv(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Ym(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const e0={clone:Ws,merge:_n};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class qm extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new $,Qp=new ht,Jp=new ht;class Xn extends qm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Uf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uf*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,Qp,Jp),n.subVectors(Jp,Qp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_c*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Ls=1;class i0 extends an{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Xn(Ps,Ls,e,n);a.layers=this.layers,this.add(a);const u=new Xn(Ps,Ls,e,n);u.layers=this.layers,this.add(u);const f=new Xn(Ps,Ls,e,n);f.layers=this.layers,this.add(f);const d=new Xn(Ps,Ls,e,n);d.layers=this.layers,this.add(d);const p=new Xn(Ps,Ls,e,n);p.layers=this.layers,this.add(p);const m=new Xn(Ps,Ls,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===wl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(y,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class jm extends Rn{constructor(e,n,r,a,u,f,d,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,r,a,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r0 extends Wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new jm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Xr(5,5,5),u=new gr({name:"CubemapFromEquirect",uniforms:Ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:An,blending:hr});u.uniforms.tEquirect.value=n;const f=new Vt(a,u),d=n.minFilter;return n.minFilter===Vr&&(n.minFilter=ri),new i0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const zc=new $,s0=new $,o0=new at;class Or{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=zc.subVectors(r,n).cross(s0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(zc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||o0.getNormalMatrix(e),a=this.coplanarPoint(zc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Yf,fl=new $;class qf{constructor(e=new Or,n=new Or,r=new Or,a=new Or,u=new Or,f=new Or){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Fi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],y=a[6],x=a[7],S=a[8],w=a[9],R=a[10],g=a[11],_=a[12],b=a[13],P=a[14],L=a[15];if(r[0].setComponents(p-u,x-m,g-S,L-_).normalize(),r[1].setComponents(p+u,x+m,g+S,L+_).normalize(),r[2].setComponents(p+f,x+v,g+w,L+b).normalize(),r[3].setComponents(p-f,x-v,g-w,L-b).normalize(),r[4].setComponents(p-d,x-y,g-R,L-P).normalize(),n===Fi)r[5].setComponents(p+d,x+y,g+R,L+P).normalize();else if(n===wl)r[5].setComponents(d,y,R,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(fl.x=a.normal.x>0?e.max.x:e.min.x,fl.y=a.normal.y>0?e.max.y:e.min.y,fl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Km(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function a0(o){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,y=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const v=p.array,y=p.updateRanges;if(o.bindBuffer(m,d),y.length===0)o.bufferSubData(m,0,v);else{y.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<y.length;S++){const w=y[x],R=y[S];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++x,y[x]=R)}y.length=x+1;for(let S=0,w=y.length;S<w;S++){const R=y[S];o.bufferSubData(m,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class Xs extends li{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,y=e/d,x=n/p,S=[],w=[],R=[],g=[];for(let _=0;_<v;_++){const b=_*x-f;for(let P=0;P<m;P++){const L=P*y-u;w.push(L,-b,0),R.push(0,0,1),g.push(P/d),g.push(1-_/p)}}for(let _=0;_<p;_++)for(let b=0;b<d;b++){const P=b+m*_,L=b+m*(_+1),W=b+1+m*(_+1),N=b+1+m*_;S.push(P,L,N),S.push(L,W,N)}this.setIndex(S),this.setAttribute("position",new jt(w,3)),this.setAttribute("normal",new jt(R,3)),this.setAttribute("uv",new jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var l0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,c0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
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
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
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
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S0=`#ifdef USE_IRIDESCENCE
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
#endif`,M0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,b0=`#define PI 3.141592653589793
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I0=`vec3 transformedNormal = objectNormal;
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
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`
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
}`,B0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
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
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sx=`PhysicalMaterial material;
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
#endif`,ox=`struct PhysicalMaterial {
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
}`,ax=`
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
#endif`,lx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_x=`#if defined( USE_POINTS_UV )
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
#endif`,vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`#ifdef USE_MORPHTARGETS
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
#endif`,Tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lx=`#ifdef USE_NORMALMAP
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
#endif`,bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ux=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yx=`float getShadowMask() {
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
}`,qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jx=`#ifdef USE_SKINNING
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
#endif`,Kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ey=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ty=`#ifdef USE_TRANSMISSION
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
#endif`,ny=`#ifdef USE_TRANSMISSION
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ly=`uniform sampler2D t2D;
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`#include <common>
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
}`,py=`#if DEPTH_PACKING == 3200
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
}`,my=`#define DISTANCE
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
}`,gy=`#define DISTANCE
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`uniform float scale;
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
}`,yy=`uniform vec3 diffuse;
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
}`,Sy=`#include <common>
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
}`,My=`uniform vec3 diffuse;
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
}`,Ey=`#define LAMBERT
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
}`,Ty=`#define LAMBERT
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
}`,wy=`#define MATCAP
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
}`,Ay=`#define MATCAP
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
}`,Ry=`#define NORMAL
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
}`,Cy=`#define NORMAL
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
}`,Py=`#define PHONG
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
}`,Ly=`#define PHONG
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
}`,by=`#define STANDARD
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
}`,Dy=`#define STANDARD
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
}`,Iy=`#define TOON
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
}`,Uy=`#define TOON
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
}`,Ny=`uniform float size;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,ky=`uniform vec3 color;
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
}`,zy=`uniform float rotation;
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
}`,By=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:l0,alphahash_pars_fragment:u0,alphamap_fragment:c0,alphamap_pars_fragment:f0,alphatest_fragment:d0,alphatest_pars_fragment:h0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:_0,begin_vertex:v0,beginnormal_vertex:x0,bsdfs:y0,iridescence_fragment:S0,bumpmap_pars_fragment:M0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:A0,color_fragment:R0,color_pars_fragment:C0,color_pars_vertex:P0,color_vertex:L0,common:b0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:I0,displacementmap_pars_vertex:U0,displacementmap_vertex:N0,emissivemap_fragment:F0,emissivemap_pars_fragment:O0,colorspace_fragment:k0,colorspace_pars_fragment:z0,envmap_fragment:B0,envmap_common_pars_fragment:H0,envmap_pars_fragment:V0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:ex,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:Y0,fog_fragment:q0,fog_pars_fragment:j0,gradientmap_pars_fragment:K0,lightmap_pars_fragment:$0,lights_lambert_fragment:Z0,lights_lambert_pars_fragment:Q0,lights_pars_begin:J0,lights_toon_fragment:tx,lights_toon_pars_fragment:nx,lights_phong_fragment:ix,lights_phong_pars_fragment:rx,lights_physical_fragment:sx,lights_physical_pars_fragment:ox,lights_fragment_begin:ax,lights_fragment_maps:lx,lights_fragment_end:ux,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:fx,logdepthbuf_pars_vertex:dx,logdepthbuf_vertex:hx,map_fragment:px,map_pars_fragment:mx,map_particle_fragment:gx,map_particle_pars_fragment:_x,metalnessmap_fragment:vx,metalnessmap_pars_fragment:xx,morphinstance_vertex:yx,morphcolor_vertex:Sx,morphnormal_vertex:Mx,morphtarget_pars_vertex:Ex,morphtarget_vertex:Tx,normal_fragment_begin:wx,normal_fragment_maps:Ax,normal_pars_fragment:Rx,normal_pars_vertex:Cx,normal_vertex:Px,normalmap_pars_fragment:Lx,clearcoat_normal_fragment_begin:bx,clearcoat_normal_fragment_maps:Dx,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Ux,opaque_fragment:Nx,packing:Fx,premultiplied_alpha_fragment:Ox,project_vertex:kx,dithering_fragment:zx,dithering_pars_fragment:Bx,roughnessmap_fragment:Hx,roughnessmap_pars_fragment:Vx,shadowmap_pars_fragment:Gx,shadowmap_pars_vertex:Wx,shadowmap_vertex:Xx,shadowmask_pars_fragment:Yx,skinbase_vertex:qx,skinning_pars_vertex:jx,skinning_vertex:Kx,skinnormal_vertex:$x,specularmap_fragment:Zx,specularmap_pars_fragment:Qx,tonemapping_fragment:Jx,tonemapping_pars_fragment:ey,transmission_fragment:ty,transmission_pars_fragment:ny,uv_pars_fragment:iy,uv_pars_vertex:ry,uv_vertex:sy,worldpos_vertex:oy,background_vert:ay,background_frag:ly,backgroundCube_vert:uy,backgroundCube_frag:cy,cube_vert:fy,cube_frag:dy,depth_vert:hy,depth_frag:py,distanceRGBA_vert:my,distanceRGBA_frag:gy,equirect_vert:_y,equirect_frag:vy,linedashed_vert:xy,linedashed_frag:yy,meshbasic_vert:Sy,meshbasic_frag:My,meshlambert_vert:Ey,meshlambert_frag:Ty,meshmatcap_vert:wy,meshmatcap_frag:Ay,meshnormal_vert:Ry,meshnormal_frag:Cy,meshphong_vert:Py,meshphong_frag:Ly,meshphysical_vert:by,meshphysical_frag:Dy,meshtoon_vert:Iy,meshtoon_frag:Uy,points_vert:Ny,points_frag:Fy,shadow_vert:Oy,shadow_frag:ky,sprite_vert:zy,sprite_frag:By},Pe={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},gi={basic:{uniforms:_n([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:_n([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:_n([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:_n([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:_n([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new lt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:_n([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:_n([Pe.points,Pe.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:_n([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:_n([Pe.common,Pe.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:_n([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:_n([Pe.sprite,Pe.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:_n([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:_n([Pe.lights,Pe.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};gi.physical={uniforms:_n([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const dl={r:0,b:0,g:0},Nr=new ai,Hy=new Bt;function Vy(o,e,n,r,a,u,f){const d=new lt(0);let p=u===!0?0:1,m,v,y=null,x=0,S=null;function w(b){let P=b.isScene===!0?b.background:null;return P&&P.isTexture&&(P=(b.backgroundBlurriness>0?n:e).get(P)),P}function R(b){let P=!1;const L=w(b);L===null?_(d,p):L&&L.isColor&&(_(L,1),P=!0);const W=o.xr.getEnvironmentBlendMode();W==="additive"?r.buffers.color.setClear(0,0,0,1,f):W==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function g(b,P){const L=w(P);L&&(L.isCubeTexture||L.mapping===bl)?(v===void 0&&(v=new Vt(new Xr(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:Ws(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(W,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Nr.copy(P.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),v.material.uniforms.envMap.value=L,v.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(Nr)),v.material.toneMapped=Et.getTransfer(L.colorSpace)!==bt,(y!==L||x!==L.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,y=L,x=L.version,S=o.toneMapping),v.layers.enableAll(),b.unshift(v,v.geometry,v.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Vt(new Xs(2,2),new gr({name:"BackgroundMaterial",uniforms:Ws(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Et.getTransfer(L.colorSpace)!==bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(y!==L||x!==L.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,y=L,x=L.version,S=o.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function _(b,P){b.getRGB(dl,Ym(o)),r.buffers.color.setClear(dl.r,dl.g,dl.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(b,P=1){d.set(b),p=P,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(b){p=b,_(d,p)},render:R,addToRenderList:g}}function Gy(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(M,A,q,K,re){let ce=!1;const ne=y(K,q,A);u!==ne&&(u=ne,m(u.object)),ce=S(M,K,q,re),ce&&w(M,K,q,re),re!==null&&e.update(re,o.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,L(M,A,q,K),re!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function p(){return o.createVertexArray()}function m(M){return o.bindVertexArray(M)}function v(M){return o.deleteVertexArray(M)}function y(M,A,q){const K=q.wireframe===!0;let re=r[M.id];re===void 0&&(re={},r[M.id]=re);let ce=re[A.id];ce===void 0&&(ce={},re[A.id]=ce);let ne=ce[K];return ne===void 0&&(ne=x(p()),ce[K]=ne),ne}function x(M){const A=[],q=[],K=[];for(let re=0;re<n;re++)A[re]=0,q[re]=0,K[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:q,attributeDivisors:K,object:M,attributes:{},index:null}}function S(M,A,q,K){const re=u.attributes,ce=A.attributes;let ne=0;const ue=q.getAttributes();for(const B in ue)if(ue[B].location>=0){const se=re[B];let F=ce[B];if(F===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(F=M.instanceColor)),se===void 0||se.attribute!==F||F&&se.data!==F.data)return!0;ne++}return u.attributesNum!==ne||u.index!==K}function w(M,A,q,K){const re={},ce=A.attributes;let ne=0;const ue=q.getAttributes();for(const B in ue)if(ue[B].location>=0){let se=ce[B];se===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const F={};F.attribute=se,se&&se.data&&(F.data=se.data),re[B]=F,ne++}u.attributes=re,u.attributesNum=ne,u.index=K}function R(){const M=u.newAttributes;for(let A=0,q=M.length;A<q;A++)M[A]=0}function g(M){_(M,0)}function _(M,A){const q=u.newAttributes,K=u.enabledAttributes,re=u.attributeDivisors;q[M]=1,K[M]===0&&(o.enableVertexAttribArray(M),K[M]=1),re[M]!==A&&(o.vertexAttribDivisor(M,A),re[M]=A)}function b(){const M=u.newAttributes,A=u.enabledAttributes;for(let q=0,K=A.length;q<K;q++)A[q]!==M[q]&&(o.disableVertexAttribArray(q),A[q]=0)}function P(M,A,q,K,re,ce,ne){ne===!0?o.vertexAttribIPointer(M,A,q,re,ce):o.vertexAttribPointer(M,A,q,K,re,ce)}function L(M,A,q,K){R();const re=K.attributes,ce=q.getAttributes(),ne=A.defaultAttributeValues;for(const ue in ce){const B=ce[ue];if(B.location>=0){let fe=re[ue];if(fe===void 0&&(ue==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),ue==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){const se=fe.normalized,F=fe.itemSize,ie=e.get(fe);if(ie===void 0)continue;const Le=ie.buffer,Q=ie.type,le=ie.bytesPerElement,ye=Q===o.INT||Q===o.UNSIGNED_INT||fe.gpuType===kf;if(fe.isInterleavedBufferAttribute){const me=fe.data,Se=me.stride,we=fe.offset;if(me.isInstancedInterleavedBuffer){for(let Ye=0;Ye<B.locationSize;Ye++)_(B.location+Ye,me.meshPerAttribute);M.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ye=0;Ye<B.locationSize;Ye++)g(B.location+Ye);o.bindBuffer(o.ARRAY_BUFFER,Le);for(let Ye=0;Ye<B.locationSize;Ye++)P(B.location+Ye,F/B.locationSize,Q,se,Se*le,(we+F/B.locationSize*Ye)*le,ye)}else{if(fe.isInstancedBufferAttribute){for(let me=0;me<B.locationSize;me++)_(B.location+me,fe.meshPerAttribute);M.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let me=0;me<B.locationSize;me++)g(B.location+me);o.bindBuffer(o.ARRAY_BUFFER,Le);for(let me=0;me<B.locationSize;me++)P(B.location+me,F/B.locationSize,Q,se,F*le,F/B.locationSize*me*le,ye)}}else if(ne!==void 0){const se=ne[ue];if(se!==void 0)switch(se.length){case 2:o.vertexAttrib2fv(B.location,se);break;case 3:o.vertexAttrib3fv(B.location,se);break;case 4:o.vertexAttrib4fv(B.location,se);break;default:o.vertexAttrib1fv(B.location,se)}}}}b()}function W(){z();for(const M in r){const A=r[M];for(const q in A){const K=A[q];for(const re in K)v(K[re].object),delete K[re];delete A[q]}delete r[M]}}function N(M){if(r[M.id]===void 0)return;const A=r[M.id];for(const q in A){const K=A[q];for(const re in K)v(K[re].object),delete K[re];delete A[q]}delete r[M.id]}function I(M){for(const A in r){const q=r[A];if(q[M.id]===void 0)continue;const K=q[M.id];for(const re in K)v(K[re].object),delete K[re];delete q[M.id]}}function z(){ae(),f=!0,u!==a&&(u=a,m(u.object))}function ae(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:z,resetDefaultState:ae,dispose:W,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:g,disableUnusedAttributes:b}}function Wy(o,e,n){let r;function a(m){r=m}function u(m,v){o.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,y){y!==0&&(o.drawArraysInstanced(r,m,v,y),n.update(v,r,y))}function d(m,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,y);let S=0;for(let w=0;w<y;w++)S+=v[w];n.update(S,r,1)}function p(m,v,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)f(m[w],v[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,y);let w=0;for(let R=0;R<y;R++)w+=v[R];for(let R=0;R<x.length;R++)n.update(w,r,x[R])}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Xy(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(I){return!(I!==oi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const z=I===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Oi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ni&&!z)}function p(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const I=e.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),b=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),W=w>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:L,vertexTextures:W,maxSamples:N}}function Yy(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Or,d=new at,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){n=v(y,x,0)},this.setState=function(y,x,S){const w=y.clippingPlanes,R=y.clipIntersection,g=y.clipShadows,_=o.get(y);if(!a||w===null||w.length===0||u&&!g)u?v(null):m();else{const b=u?0:r,P=b*4;let L=_.clippingState||null;p.value=L,L=v(w,x,P,S);for(let W=0;W!==P;++W)L[W]=n[W];_.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,x,S,w){const R=y!==null?y.length:0;let g=null;if(R!==0){if(g=p.value,w!==!0||g===null){const _=S+R*4,b=x.matrixWorldInverse;d.getNormalMatrix(b),(g===null||g.length<_)&&(g=new Float32Array(_));for(let P=0,L=S;P!==R;++P,L+=4)f.copy(y[P]).applyMatrix4(b,d),f.normal.toArray(g,L),g[L+3]=f.constant}p.value=g,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,g}}function qy(o){let e=new WeakMap;function n(f,d){return d===rf?f.mapping=Bs:d===sf&&(f.mapping=Hs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===rf||d===sf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new r0(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class $m extends qm{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,em=[.125,.215,.35,.446,.526,.582],Br=20,Bc=new $m,tm=new lt;let Hc=null,Vc=0,Gc=0,Wc=!1;const kr=(1+Math.sqrt(5))/2,bs=1/kr,nm=[new $(-kr,bs,0),new $(kr,bs,0),new $(-bs,0,kr),new $(bs,0,kr),new $(0,kr,-bs),new $(0,kr,bs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc,Vc,Gc),this._renderer.xr.enabled=Wc,e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:zo,format:oi,colorSpace:_r,depthBuffer:!1},a=rm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jy(u)),this._blurMaterial=Ky(u,e,n)}return a}_compileMaterial(e){const n=new Vt(this._lodPlanes[0],e);this._renderer.compile(n,Bc)}_sceneToCubeUV(e,n,r,a){const d=new Xn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,x=v.toneMapping;v.getClearColor(tm),v.toneMapping=pr,v.autoClear=!1;const S=new Rl({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),w=new Vt(new Xr,S);let R=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,R=!0):(S.color.copy(tm),R=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):b===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const P=this._cubeSize;hl(a,b*P,_>2?P:0,P,P),v.setRenderTarget(a),R&&v.render(w,d),v.render(e,d)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=x,v.autoClear=y,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Bs||e.mapping===Hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Vt(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;hl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Bc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=nm[(a-u-1)%nm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new Vt(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Br-1),R=u/w,g=isFinite(u)?1+Math.floor(v*R):Br;g>Br&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Br}`);const _=[];let b=0;for(let I=0;I<Br;++I){const z=I/R,ae=Math.exp(-z*z/2);_.push(ae),I===0?b+=ae:I<g&&(b+=2*ae)}for(let I=0;I<_.length;I++)_[I]=_[I]/b;x.envMap.value=e.texture,x.samples.value=g,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=w,x.mipInt.value=P-r;const L=this._sizeLods[a],W=3*L*(a>P-Is?a-P+Is:0),N=4*(this._cubeSize-L);hl(n,W,N,3*L,2*L),p.setRenderTarget(n),p.render(y,Bc)}}function jy(o){const e=[],n=[],r=[];let a=o;const u=o-Is+1+em.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Is?p=em[f-o+Is-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,y=1+m,x=[v,v,y,v,y,y,v,v,y,y,v,y],S=6,w=6,R=3,g=2,_=1,b=new Float32Array(R*w*S),P=new Float32Array(g*w*S),L=new Float32Array(_*w*S);for(let N=0;N<S;N++){const I=N%3*2/3-1,z=N>2?0:-1,ae=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];b.set(ae,R*w*N),P.set(x,g*w*N);const M=[N,N,N,N,N,N];L.set(M,_*w*N)}const W=new li;W.setAttribute("position",new _i(b,R)),W.setAttribute("uv",new _i(P,g)),W.setAttribute("faceIndex",new _i(L,_)),e.push(W),a>Is&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function rm(o,e,n){const r=new Wr(o,e,n);return r.texture.mapping=bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function Ky(o,e,n){const r=new Float32Array(Br),a=new $(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:jf(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function sm(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jf(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function om(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function jf(){return`

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
	`}function $y(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===rf||p===sf,v=p===Bs||p===Hs;if(m||v){let y=e.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new im(o)),y=m?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&a(S)?(n===null&&(n=new im(o)),y=m?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",u),y.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Zy(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&yl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Qy(o,e,n,r){const a={},u=new WeakMap;function f(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const R=x.morphAttributes[w];for(let g=0,_=R.length;g<_;g++)e.remove(R[g])}x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(y,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const w in x)e.update(x[w],o.ARRAY_BUFFER);const S=y.morphAttributes;for(const w in S){const R=S[w];for(let g=0,_=R.length;g<_;g++)e.update(R[g],o.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,w=y.attributes.position;let R=0;if(S!==null){const b=S.array;R=S.version;for(let P=0,L=b.length;P<L;P+=3){const W=b[P+0],N=b[P+1],I=b[P+2];x.push(W,N,N,I,I,W)}}else if(w!==void 0){const b=w.array;R=w.version;for(let P=0,L=b.length/3-1;P<L;P+=3){const W=P+0,N=P+1,I=P+2;x.push(W,N,N,I,I,W)}}else return;const g=new(zm(x)?Xm:Wm)(x,1);g.version=R;const _=u.get(y);_&&e.remove(_),u.set(y,g)}function v(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:v}}function Jy(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,S){o.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,w){w!==0&&(o.drawElementsInstanced(r,S,u,x*f,w),n.update(S,r,w))}function v(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,w);let g=0;for(let _=0;_<w;_++)g+=S[_];n.update(g,r,1)}function y(x,S,w,R){if(w===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<x.length;_++)m(x[_]/f,S[_],R[_]);else{g.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,R,0,w);let _=0;for(let b=0;b<w;b++)_+=S[b];for(let b=0;b<R.length;b++)n.update(_,r,R[b])}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function eS(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function tS(o,e,n){const r=new WeakMap,a=new zt;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==y){let M=function(){z.dispose(),r.delete(d),d.removeEventListener("dispose",M)};var S=M;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,g=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let L=0;w===!0&&(L=1),R===!0&&(L=2),g===!0&&(L=3);let W=d.attributes.position.count*L,N=1;W>e.maxTextureSize&&(N=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const I=new Float32Array(W*N*4*y),z=new Hm(I,W,N,y);z.type=Ni,z.needsUpdate=!0;const ae=L*4;for(let A=0;A<y;A++){const q=_[A],K=b[A],re=P[A],ce=W*N*4*A;for(let ne=0;ne<q.count;ne++){const ue=ne*ae;w===!0&&(a.fromBufferAttribute(q,ne),I[ce+ue+0]=a.x,I[ce+ue+1]=a.y,I[ce+ue+2]=a.z,I[ce+ue+3]=0),R===!0&&(a.fromBufferAttribute(K,ne),I[ce+ue+4]=a.x,I[ce+ue+5]=a.y,I[ce+ue+6]=a.z,I[ce+ue+7]=0),g===!0&&(a.fromBufferAttribute(re,ne),I[ce+ue+8]=a.x,I[ce+ue+9]=a.y,I[ce+ue+10]=a.z,I[ce+ue+11]=re.itemSize===4?a.w:1)}}x={count:y,texture:z,size:new ht(W,N)},r.set(d,x),d.addEventListener("dispose",M)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let w=0;for(let g=0;g<m.length;g++)w+=m[g];const R=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function nS(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,v=p.geometry,y=e.get(p,v);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class Zm extends Rn{constructor(e,n,r,a,u,f,d,p,m,v=Os){if(v!==Os&&v!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Os&&(r=Gr),r===void 0&&v===Gs&&(r=Vs),super(null,a,u,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Yn,this.minFilter=p!==void 0?p:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Qm=new Rn,am=new Zm(1,1),Jm=new Hm,eg=new Hv,tg=new jm,lm=[],um=[],cm=new Float32Array(16),fm=new Float32Array(9),dm=new Float32Array(4);function js(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=lm[a];if(u===void 0&&(u=new Float32Array(a),lm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Kt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function $t(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Il(o,e){let n=um[e];n===void 0&&(n=new Int32Array(e),um[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function iS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function rS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2fv(this.addr,e),$t(n,e)}}function sS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;o.uniform3fv(this.addr,e),$t(n,e)}}function oS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4fv(this.addr,e),$t(n,e)}}function aS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Kt(n,r))return;dm.set(r),o.uniformMatrix2fv(this.addr,!1,dm),$t(n,r)}}function lS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Kt(n,r))return;fm.set(r),o.uniformMatrix3fv(this.addr,!1,fm),$t(n,r)}}function uS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Kt(n,r))return;cm.set(r),o.uniformMatrix4fv(this.addr,!1,cm),$t(n,r)}}function cS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function fS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2iv(this.addr,e),$t(n,e)}}function dS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;o.uniform3iv(this.addr,e),$t(n,e)}}function hS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4iv(this.addr,e),$t(n,e)}}function pS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function mS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2uiv(this.addr,e),$t(n,e)}}function gS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;o.uniform3uiv(this.addr,e),$t(n,e)}}function _S(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4uiv(this.addr,e),$t(n,e)}}function vS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(am.compareFunction=km,u=am):u=Qm,n.setTexture2D(e||u,a)}function xS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||eg,a)}function yS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||tg,a)}function SS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Jm,a)}function MS(o){switch(o){case 5126:return iS;case 35664:return rS;case 35665:return sS;case 35666:return oS;case 35674:return aS;case 35675:return lS;case 35676:return uS;case 5124:case 35670:return cS;case 35667:case 35671:return fS;case 35668:case 35672:return dS;case 35669:case 35673:return hS;case 5125:return pS;case 36294:return mS;case 36295:return gS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return vS;case 35679:case 36299:case 36307:return xS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return SS}}function ES(o,e){o.uniform1fv(this.addr,e)}function TS(o,e){const n=js(e,this.size,2);o.uniform2fv(this.addr,n)}function wS(o,e){const n=js(e,this.size,3);o.uniform3fv(this.addr,n)}function AS(o,e){const n=js(e,this.size,4);o.uniform4fv(this.addr,n)}function RS(o,e){const n=js(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function CS(o,e){const n=js(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function PS(o,e){const n=js(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function LS(o,e){o.uniform1iv(this.addr,e)}function bS(o,e){o.uniform2iv(this.addr,e)}function DS(o,e){o.uniform3iv(this.addr,e)}function IS(o,e){o.uniform4iv(this.addr,e)}function US(o,e){o.uniform1uiv(this.addr,e)}function NS(o,e){o.uniform2uiv(this.addr,e)}function FS(o,e){o.uniform3uiv(this.addr,e)}function OS(o,e){o.uniform4uiv(this.addr,e)}function kS(o,e,n){const r=this.cache,a=e.length,u=Il(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Qm,u[f])}function zS(o,e,n){const r=this.cache,a=e.length,u=Il(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||eg,u[f])}function BS(o,e,n){const r=this.cache,a=e.length,u=Il(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||tg,u[f])}function HS(o,e,n){const r=this.cache,a=e.length,u=Il(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Jm,u[f])}function VS(o){switch(o){case 5126:return ES;case 35664:return TS;case 35665:return wS;case 35666:return AS;case 35674:return RS;case 35675:return CS;case 35676:return PS;case 5124:case 35670:return LS;case 35667:case 35671:return bS;case 35668:case 35672:return DS;case 35669:case 35673:return IS;case 5125:return US;case 36294:return NS;case 36295:return FS;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return HS}}class GS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=MS(n.type)}}class WS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VS(n.type)}}class XS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function hm(o,e){o.seq.push(e),o.map[e.id]=e}function YS(o,e,n){const r=o.name,a=r.length;for(Xc.lastIndex=0;;){const u=Xc.exec(r),f=Xc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){hm(n,m===void 0?new GS(d,o,e):new WS(d,o,e));break}else{let y=n.map[d];y===void 0&&(y=new XS(d),hm(n,y)),n=y}}}class Sl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);YS(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function pm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const qS=37297;let jS=0;function KS(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function $S(o){const e=Et.getPrimaries(Et.workingColorSpace),n=Et.getPrimaries(o);let r;switch(e===n?r="":e===Tl&&n===El?r="LinearDisplayP3ToLinearSRGB":e===El&&n===Tl&&(r="LinearSRGBToLinearDisplayP3"),o){case _r:case Dl:return[r,"LinearTransferOETF"];case mi:case Xf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function mm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+KS(o.getShaderSource(e),f)}else return a}function ZS(o,e){const n=$S(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function QS(o,e){let n;switch(e){case hv:n="Linear";break;case pv:n="Reinhard";break;case mv:n="Cineon";break;case gv:n="ACESFilmic";break;case vv:n="AgX";break;case xv:n="Neutral";break;case _v:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pl=new $;function JS(){Et.getLuminanceCoefficients(pl);const o=pl.x.toFixed(4),e=pl.y.toFixed(4),n=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function tM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function nM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Oo(o){return o!==""}function gm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _m(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(o){return o.replace(iM,sM)}const rM=new Map;function sM(o,e){let n=ot[e];if(n===void 0){const r=rM.get(e);if(r!==void 0)n=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Nf(n)}const oM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(o){return o.replace(oM,aM)}function aM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function xm(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function lM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Y_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function uM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Bs:case Hs:e="ENVMAP_TYPE_CUBE";break;case bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function fM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ll:e="ENVMAP_BLENDING_MULTIPLY";break;case fv:e="ENVMAP_BLENDING_MIX";break;case dv:e="ENVMAP_BLENDING_ADD";break}return e}function dM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function hM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=lM(n),m=uM(n),v=cM(n),y=fM(n),x=dM(n),S=eM(n),w=tM(u),R=a.createProgram();let g,_,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Oo).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Oo).join(`
`),_.length>0&&(_+=`
`)):(g=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),_=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pr?"#define TONE_MAPPING":"",n.toneMapping!==pr?ot.tonemapping_pars_fragment:"",n.toneMapping!==pr?QS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,ZS("linearToOutputTexel",n.outputColorSpace),JS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),f=Nf(f),f=gm(f,n),f=_m(f,n),d=Nf(d),d=gm(d,n),d=_m(d,n),f=vm(f),d=vm(d),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",n.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=b+g+f,L=b+_+d,W=pm(a,a.VERTEX_SHADER,P),N=pm(a,a.FRAGMENT_SHADER,L);a.attachShader(R,W),a.attachShader(R,N),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function I(A){if(o.debug.checkShaderErrors){const q=a.getProgramInfoLog(R).trim(),K=a.getShaderInfoLog(W).trim(),re=a.getShaderInfoLog(N).trim();let ce=!0,ne=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(ce=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,R,W,N);else{const ue=mm(a,W,"vertex"),B=mm(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+q+`
`+ue+`
`+B)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(K===""||re==="")&&(ne=!1);ne&&(A.diagnostics={runnable:ce,programLog:q,vertexShader:{log:K,prefix:g},fragmentShader:{log:re,prefix:_}})}a.deleteShader(W),a.deleteShader(N),z=new Sl(a,R),ae=nM(a,R)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let ae;this.getAttributes=function(){return ae===void 0&&I(this),ae};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(R,qS)),M},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jS++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=W,this.fragmentShader=N,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new gM(e),n.set(e,r)),r}}class gM{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}}function _M(o,e,n,r,a,u,f){const d=new Vm,p=new mM,m=new Set,v=[],y=a.logarithmicDepthBuffer,x=a.reverseDepthBuffer,S=a.vertexTextures;let w=a.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return m.add(M),M===0?"uv":`uv${M}`}function _(M,A,q,K,re){const ce=K.fog,ne=re.geometry,ue=M.isMeshStandardMaterial?K.environment:null,B=(M.isMeshStandardMaterial?n:e).get(M.envMap||ue),fe=B&&B.mapping===bl?B.image.height:null,se=R[M.type];M.precision!==null&&(w=a.getMaxPrecision(M.precision),w!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",w,"instead."));const F=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ie=F!==void 0?F.length:0;let Le=0;ne.morphAttributes.position!==void 0&&(Le=1),ne.morphAttributes.normal!==void 0&&(Le=2),ne.morphAttributes.color!==void 0&&(Le=3);let Q,le,ye,me;if(se){const Zt=gi[se];Q=Zt.vertexShader,le=Zt.fragmentShader}else Q=M.vertexShader,le=M.fragmentShader,p.update(M),ye=p.getVertexShaderID(M),me=p.getFragmentShaderID(M);const Se=o.getRenderTarget(),we=re.isInstancedMesh===!0,Ye=re.isBatchedMesh===!0,rt=!!M.map,Ke=!!M.matcap,O=!!B,Ot=!!M.aoMap,st=!!M.lightMap,ct=!!M.bumpMap,qe=!!M.normalMap,St=!!M.displacementMap,je=!!M.emissiveMap,D=!!M.metalnessMap,T=!!M.roughnessMap,Z=M.anisotropy>0,he=M.clearcoat>0,ve=M.dispersion>0,de=M.iridescence>0,Xe=M.sheen>0,Re=M.transmission>0,Ne=Z&&!!M.anisotropyMap,pt=he&&!!M.clearcoatMap,Me=he&&!!M.clearcoatNormalMap,Fe=he&&!!M.clearcoatRoughnessMap,tt=de&&!!M.iridescenceMap,et=de&&!!M.iridescenceThicknessMap,ke=Xe&&!!M.sheenColorMap,ft=Xe&&!!M.sheenRoughnessMap,it=!!M.specularMap,Mt=!!M.specularColorMap,V=!!M.specularIntensityMap,be=Re&&!!M.transmissionMap,oe=Re&&!!M.thicknessMap,pe=!!M.gradientMap,Ce=!!M.alphaMap,Ie=M.alphaTest>0,dt=!!M.alphaHash,Ut=!!M.extensions;let rn=pr;M.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(rn=o.toneMapping);const mt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:Q,fragmentShader:le,defines:M.defines,customVertexShaderID:ye,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:w,batching:Ye,batchingColor:Ye&&re._colorsTexture!==null,instancing:we,instancingColor:we&&re.instanceColor!==null,instancingMorph:we&&re.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Se===null?o.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:_r,alphaToCoverage:!!M.alphaToCoverage,map:rt,matcap:Ke,envMap:O,envMapMode:O&&B.mapping,envMapCubeUVHeight:fe,aoMap:Ot,lightMap:st,bumpMap:ct,normalMap:qe,displacementMap:S&&St,emissiveMap:je,normalMapObjectSpace:qe&&M.normalMapType===Ev,normalMapTangentSpace:qe&&M.normalMapType===Wf,metalnessMap:D,roughnessMap:T,anisotropy:Z,anisotropyMap:Ne,clearcoat:he,clearcoatMap:pt,clearcoatNormalMap:Me,clearcoatRoughnessMap:Fe,dispersion:ve,iridescence:de,iridescenceMap:tt,iridescenceThicknessMap:et,sheen:Xe,sheenColorMap:ke,sheenRoughnessMap:ft,specularMap:it,specularColorMap:Mt,specularIntensityMap:V,transmission:Re,transmissionMap:be,thicknessMap:oe,gradientMap:pe,opaque:M.transparent===!1&&M.blending===Fs&&M.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Ie,alphaHash:dt,combine:M.combine,mapUv:rt&&g(M.map.channel),aoMapUv:Ot&&g(M.aoMap.channel),lightMapUv:st&&g(M.lightMap.channel),bumpMapUv:ct&&g(M.bumpMap.channel),normalMapUv:qe&&g(M.normalMap.channel),displacementMapUv:St&&g(M.displacementMap.channel),emissiveMapUv:je&&g(M.emissiveMap.channel),metalnessMapUv:D&&g(M.metalnessMap.channel),roughnessMapUv:T&&g(M.roughnessMap.channel),anisotropyMapUv:Ne&&g(M.anisotropyMap.channel),clearcoatMapUv:pt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ft&&g(M.sheenRoughnessMap.channel),specularMapUv:it&&g(M.specularMap.channel),specularColorMapUv:Mt&&g(M.specularColorMap.channel),specularIntensityMapUv:V&&g(M.specularIntensityMap.channel),transmissionMapUv:be&&g(M.transmissionMap.channel),thicknessMapUv:oe&&g(M.thicknessMap.channel),alphaMapUv:Ce&&g(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(qe||Z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!ne.attributes.uv&&(rt||Ce),fog:!!ce,useFog:M.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:x,skinning:re.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&q.length>0,shadowMapType:o.shadowMap.type,toneMapping:rn,decodeVideoTexture:rt&&M.map.isVideoTexture===!0&&Et.getTransfer(M.map.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ii,flipSided:M.side===An,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ut&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&M.extensions.multiDraw===!0||Ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return mt.vertexUv1s=m.has(1),mt.vertexUv2s=m.has(2),mt.vertexUv3s=m.has(3),m.clear(),mt}function b(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const q in M.defines)A.push(q),A.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(P(A,M),L(A,M),A.push(o.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function P(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function L(M,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),M.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.alphaToCoverage&&d.enable(20),M.push(d.mask)}function W(M){const A=R[M.type];let q;if(A){const K=gi[A];q=e0.clone(K.uniforms)}else q=M.uniforms;return q}function N(M,A){let q;for(let K=0,re=v.length;K<re;K++){const ce=v[K];if(ce.cacheKey===A){q=ce,++q.usedTimes;break}}return q===void 0&&(q=new hM(o,A,M,u),v.push(q)),q}function I(M){if(--M.usedTimes===0){const A=v.indexOf(M);v[A]=v[v.length-1],v.pop(),M.destroy()}}function z(M){p.remove(M)}function ae(){p.dispose()}return{getParameters:_,getProgramCacheKey:b,getUniforms:W,acquireProgram:N,releaseProgram:I,releaseShaderCache:z,programs:v,dispose:ae}}function vM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function xM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ym(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Sm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(y,x,S,w,R,g){let _=o[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:S,groupOrder:w,renderOrder:y.renderOrder,z:R,group:g},o[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=S,_.groupOrder=w,_.renderOrder=y.renderOrder,_.z=R,_.group=g),e++,_}function d(y,x,S,w,R,g){const _=f(y,x,S,w,R,g);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function p(y,x,S,w,R,g){const _=f(y,x,S,w,R,g);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(y,x){n.length>1&&n.sort(y||xM),r.length>1&&r.sort(x||ym),a.length>1&&a.sort(x||ym)}function v(){for(let y=e,x=o.length;y<x;y++){const S=o[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:v,sort:m}}function yM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new Sm,o.set(r,[f])):a>=u.length?(f=new Sm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function SM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new lt};break;case"SpotLight":n={position:new $,direction:new $,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=n,n}}}function MM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let EM=0;function TM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function wM(o){const e=new SM,n=MM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new $);const a=new $,u=new Bt,f=new Bt;function d(m){let v=0,y=0,x=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let S=0,w=0,R=0,g=0,_=0,b=0,P=0,L=0,W=0,N=0,I=0;m.sort(TM);for(let ae=0,M=m.length;ae<M;ae++){const A=m[ae],q=A.color,K=A.intensity,re=A.distance,ce=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)v+=q.r*K,y+=q.g*K,x+=q.b*K;else if(A.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(A.sh.coefficients[ne],K);I++}else if(A.isDirectionalLight){const ne=e.get(A);if(ne.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const ue=A.shadow,B=n.get(A);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=A.shadow.matrix,b++}r.directional[S]=ne,S++}else if(A.isSpotLight){const ne=e.get(A);ne.position.setFromMatrixPosition(A.matrixWorld),ne.color.copy(q).multiplyScalar(K),ne.distance=re,ne.coneCos=Math.cos(A.angle),ne.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),ne.decay=A.decay,r.spot[R]=ne;const ue=A.shadow;if(A.map&&(r.spotLightMap[W]=A.map,W++,ue.updateMatrices(A),A.castShadow&&N++),r.spotLightMatrix[R]=ue.matrix,A.castShadow){const B=n.get(A);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.spotShadow[R]=B,r.spotShadowMap[R]=ce,L++}R++}else if(A.isRectAreaLight){const ne=e.get(A);ne.color.copy(q).multiplyScalar(K),ne.halfWidth.set(A.width*.5,0,0),ne.halfHeight.set(0,A.height*.5,0),r.rectArea[g]=ne,g++}else if(A.isPointLight){const ne=e.get(A);if(ne.color.copy(A.color).multiplyScalar(A.intensity),ne.distance=A.distance,ne.decay=A.decay,A.castShadow){const ue=A.shadow,B=n.get(A);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,B.shadowCameraNear=ue.camera.near,B.shadowCameraFar=ue.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=ce,r.pointShadowMatrix[w]=A.shadow.matrix,P++}r.point[w]=ne,w++}else if(A.isHemisphereLight){const ne=e.get(A);ne.skyColor.copy(A.color).multiplyScalar(K),ne.groundColor.copy(A.groundColor).multiplyScalar(K),r.hemi[_]=ne,_++}}g>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==S||z.pointLength!==w||z.spotLength!==R||z.rectAreaLength!==g||z.hemiLength!==_||z.numDirectionalShadows!==b||z.numPointShadows!==P||z.numSpotShadows!==L||z.numSpotMaps!==W||z.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=g,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=L+W-N,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=I,z.directionalLength=S,z.pointLength=w,z.spotLength=R,z.rectAreaLength=g,z.hemiLength=_,z.numDirectionalShadows=b,z.numPointShadows=P,z.numSpotShadows=L,z.numSpotMaps=W,z.numLightProbes=I,r.version=EM++)}function p(m,v){let y=0,x=0,S=0,w=0,R=0;const g=v.matrixWorldInverse;for(let _=0,b=m.length;_<b;_++){const P=m[_];if(P.isDirectionalLight){const L=r.directional[y];L.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(g),y++}else if(P.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(g),L.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(g),S++}else if(P.isRectAreaLight){const L=r.rectArea[w];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(g),f.identity(),u.copy(P.matrixWorld),u.premultiply(g),f.extractRotation(u),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),w++}else if(P.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(g),x++}else if(P.isHemisphereLight){const L=r.hemi[R];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(g),R++}}}return{setup:d,setupView:p,state:r}}function Mm(o){const e=new wM(o),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function AM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Mm(o),e.set(a,[d])):u>=f.length?(d=new Mm(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class RM extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CM extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
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
}`;function bM(o,e,n){let r=new qf;const a=new ht,u=new ht,f=new zt,d=new RM({depthPacking:Mv}),p=new CM,m={},v=n.maxTextureSize,y={[mr]:An,[An]:mr,[ii]:ii},x=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:PM,fragmentShader:LM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new li;w.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Vt(w,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Am;let _=this.type;this.render=function(N,I,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const ae=o.getRenderTarget(),M=o.getActiveCubeFace(),A=o.getActiveMipmapLevel(),q=o.state;q.setBlending(hr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const K=_!==Ui&&this.type===Ui,re=_===Ui&&this.type!==Ui;for(let ce=0,ne=N.length;ce<ne;ce++){const ue=N[ce],B=ue.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const fe=B.getFrameExtents();if(a.multiply(fe),u.copy(B.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/fe.x),a.x=u.x*fe.x,B.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/fe.y),a.y=u.y*fe.y,B.mapSize.y=u.y)),B.map===null||K===!0||re===!0){const F=this.type!==Ui?{minFilter:Yn,magFilter:Yn}:{};B.map!==null&&B.map.dispose(),B.map=new Wr(a.x,a.y,F),B.map.texture.name=ue.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const se=B.getViewportCount();for(let F=0;F<se;F++){const ie=B.getViewport(F);f.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),q.viewport(f),B.updateMatrices(ue,F),r=B.getFrustum(),L(I,z,B.camera,ue,this.type)}B.isPointLightShadow!==!0&&this.type===Ui&&b(B,z),B.needsUpdate=!1}_=this.type,g.needsUpdate=!1,o.setRenderTarget(ae,M,A)};function b(N,I){const z=e.update(R);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Wr(a.x,a.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(I,null,z,x,R,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(I,null,z,S,R,null)}function P(N,I,z,ae){let M=null;const A=z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(A!==void 0)M=A;else if(M=z.isPointLight===!0?p:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const q=M.uuid,K=I.uuid;let re=m[q];re===void 0&&(re={},m[q]=re);let ce=re[K];ce===void 0&&(ce=M.clone(),re[K]=ce,I.addEventListener("dispose",W)),M=ce}if(M.visible=I.visible,M.wireframe=I.wireframe,ae===Ui?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:y[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=o.properties.get(M);q.light=z}return M}function L(N,I,z,ae,M){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&M===Ui)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,N.matrixWorld);const K=e.update(N),re=N.material;if(Array.isArray(re)){const ce=K.groups;for(let ne=0,ue=ce.length;ne<ue;ne++){const B=ce[ne],fe=re[B.materialIndex];if(fe&&fe.visible){const se=P(N,fe,ae,M);N.onBeforeShadow(o,N,I,z,K,se,B),o.renderBufferDirect(z,null,K,se,N,B),N.onAfterShadow(o,N,I,z,K,se,B)}}}else if(re.visible){const ce=P(N,re,ae,M);N.onBeforeShadow(o,N,I,z,K,ce,null),o.renderBufferDirect(z,null,K,ce,N,null),N.onAfterShadow(o,N,I,z,K,ce,null)}}const q=N.children;for(let K=0,re=q.length;K<re;K++)L(q[K],I,z,ae,M)}function W(N){N.target.removeEventListener("dispose",W);for(const z in m){const ae=m[z],M=N.target.uuid;M in ae&&(ae[M].dispose(),delete ae[M])}}}const DM={[$c]:Zc,[Qc]:tf,[Jc]:nf,[zs]:ef,[Zc]:$c,[tf]:Qc,[nf]:Jc,[ef]:zs};function IM(o){function e(){let V=!1;const be=new zt;let oe=null;const pe=new zt(0,0,0,0);return{setMask:function(Ce){oe!==Ce&&!V&&(o.colorMask(Ce,Ce,Ce,Ce),oe=Ce)},setLocked:function(Ce){V=Ce},setClear:function(Ce,Ie,dt,Ut,rn){rn===!0&&(Ce*=Ut,Ie*=Ut,dt*=Ut),be.set(Ce,Ie,dt,Ut),pe.equals(be)===!1&&(o.clearColor(Ce,Ie,dt,Ut),pe.copy(be))},reset:function(){V=!1,oe=null,pe.set(-1,0,0,0)}}}function n(){let V=!1,be=!1,oe=null,pe=null,Ce=null;return{setReversed:function(Ie){be=Ie},setTest:function(Ie){Ie?ye(o.DEPTH_TEST):me(o.DEPTH_TEST)},setMask:function(Ie){oe!==Ie&&!V&&(o.depthMask(Ie),oe=Ie)},setFunc:function(Ie){if(be&&(Ie=DM[Ie]),pe!==Ie){switch(Ie){case $c:o.depthFunc(o.NEVER);break;case Zc:o.depthFunc(o.ALWAYS);break;case Qc:o.depthFunc(o.LESS);break;case zs:o.depthFunc(o.LEQUAL);break;case Jc:o.depthFunc(o.EQUAL);break;case ef:o.depthFunc(o.GEQUAL);break;case tf:o.depthFunc(o.GREATER);break;case nf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pe=Ie}},setLocked:function(Ie){V=Ie},setClear:function(Ie){Ce!==Ie&&(o.clearDepth(Ie),Ce=Ie)},reset:function(){V=!1,oe=null,pe=null,Ce=null}}}function r(){let V=!1,be=null,oe=null,pe=null,Ce=null,Ie=null,dt=null,Ut=null,rn=null;return{setTest:function(mt){V||(mt?ye(o.STENCIL_TEST):me(o.STENCIL_TEST))},setMask:function(mt){be!==mt&&!V&&(o.stencilMask(mt),be=mt)},setFunc:function(mt,Zt,On){(oe!==mt||pe!==Zt||Ce!==On)&&(o.stencilFunc(mt,Zt,On),oe=mt,pe=Zt,Ce=On)},setOp:function(mt,Zt,On){(Ie!==mt||dt!==Zt||Ut!==On)&&(o.stencilOp(mt,Zt,On),Ie=mt,dt=Zt,Ut=On)},setLocked:function(mt){V=mt},setClear:function(mt){rn!==mt&&(o.clearStencil(mt),rn=mt)},reset:function(){V=!1,be=null,oe=null,pe=null,Ce=null,Ie=null,dt=null,Ut=null,rn=null}}}const a=new e,u=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},v={},y=new WeakMap,x=[],S=null,w=!1,R=null,g=null,_=null,b=null,P=null,L=null,W=null,N=new lt(0,0,0),I=0,z=!1,ae=null,M=null,A=null,q=null,K=null;const re=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ne=0;const ue=o.getParameter(o.VERSION);ue.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ce=ne>=1):ue.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ce=ne>=2);let B=null,fe={};const se=o.getParameter(o.SCISSOR_BOX),F=o.getParameter(o.VIEWPORT),ie=new zt().fromArray(se),Le=new zt().fromArray(F);function Q(V,be,oe,pe){const Ce=new Uint8Array(4),Ie=o.createTexture();o.bindTexture(V,Ie),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let dt=0;dt<oe;dt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(be,0,o.RGBA,1,1,pe,0,o.RGBA,o.UNSIGNED_BYTE,Ce):o.texImage2D(be+dt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ce);return Ie}const le={};le[o.TEXTURE_2D]=Q(o.TEXTURE_2D,o.TEXTURE_2D,1),le[o.TEXTURE_CUBE_MAP]=Q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[o.TEXTURE_2D_ARRAY]=Q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),le[o.TEXTURE_3D]=Q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ye(o.DEPTH_TEST),u.setFunc(zs),st(!1),ct(Lp),ye(o.CULL_FACE),O(hr);function ye(V){m[V]!==!0&&(o.enable(V),m[V]=!0)}function me(V){m[V]!==!1&&(o.disable(V),m[V]=!1)}function Se(V,be){return v[V]!==be?(o.bindFramebuffer(V,be),v[V]=be,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=be),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=be),!0):!1}function we(V,be){let oe=x,pe=!1;if(V){oe=y.get(be),oe===void 0&&(oe=[],y.set(be,oe));const Ce=V.textures;if(oe.length!==Ce.length||oe[0]!==o.COLOR_ATTACHMENT0){for(let Ie=0,dt=Ce.length;Ie<dt;Ie++)oe[Ie]=o.COLOR_ATTACHMENT0+Ie;oe.length=Ce.length,pe=!0}}else oe[0]!==o.BACK&&(oe[0]=o.BACK,pe=!0);pe&&o.drawBuffers(oe)}function Ye(V){return S!==V?(o.useProgram(V),S=V,!0):!1}const rt={[zr]:o.FUNC_ADD,[j_]:o.FUNC_SUBTRACT,[K_]:o.FUNC_REVERSE_SUBTRACT};rt[$_]=o.MIN,rt[Z_]=o.MAX;const Ke={[Q_]:o.ZERO,[J_]:o.ONE,[ev]:o.SRC_COLOR,[jc]:o.SRC_ALPHA,[ov]:o.SRC_ALPHA_SATURATE,[rv]:o.DST_COLOR,[nv]:o.DST_ALPHA,[tv]:o.ONE_MINUS_SRC_COLOR,[Kc]:o.ONE_MINUS_SRC_ALPHA,[sv]:o.ONE_MINUS_DST_COLOR,[iv]:o.ONE_MINUS_DST_ALPHA,[av]:o.CONSTANT_COLOR,[lv]:o.ONE_MINUS_CONSTANT_COLOR,[uv]:o.CONSTANT_ALPHA,[cv]:o.ONE_MINUS_CONSTANT_ALPHA};function O(V,be,oe,pe,Ce,Ie,dt,Ut,rn,mt){if(V===hr){w===!0&&(me(o.BLEND),w=!1);return}if(w===!1&&(ye(o.BLEND),w=!0),V!==q_){if(V!==R||mt!==z){if((g!==zr||P!==zr)&&(o.blendEquation(o.FUNC_ADD),g=zr,P=zr),mt)switch(V){case Fs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bp:o.blendFunc(o.ONE,o.ONE);break;case Dp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ip:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Fs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Dp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ip:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,b=null,L=null,W=null,N.set(0,0,0),I=0,R=V,z=mt}return}Ce=Ce||be,Ie=Ie||oe,dt=dt||pe,(be!==g||Ce!==P)&&(o.blendEquationSeparate(rt[be],rt[Ce]),g=be,P=Ce),(oe!==_||pe!==b||Ie!==L||dt!==W)&&(o.blendFuncSeparate(Ke[oe],Ke[pe],Ke[Ie],Ke[dt]),_=oe,b=pe,L=Ie,W=dt),(Ut.equals(N)===!1||rn!==I)&&(o.blendColor(Ut.r,Ut.g,Ut.b,rn),N.copy(Ut),I=rn),R=V,z=!1}function Ot(V,be){V.side===ii?me(o.CULL_FACE):ye(o.CULL_FACE);let oe=V.side===An;be&&(oe=!oe),st(oe),V.blending===Fs&&V.transparent===!1?O(hr):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),a.setMask(V.colorWrite);const pe=V.stencilWrite;f.setTest(pe),pe&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),St(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ye(o.SAMPLE_ALPHA_TO_COVERAGE):me(o.SAMPLE_ALPHA_TO_COVERAGE)}function st(V){ae!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),ae=V)}function ct(V){V!==W_?(ye(o.CULL_FACE),V!==M&&(V===Lp?o.cullFace(o.BACK):V===X_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):me(o.CULL_FACE),M=V}function qe(V){V!==A&&(ce&&o.lineWidth(V),A=V)}function St(V,be,oe){V?(ye(o.POLYGON_OFFSET_FILL),(q!==be||K!==oe)&&(o.polygonOffset(be,oe),q=be,K=oe)):me(o.POLYGON_OFFSET_FILL)}function je(V){V?ye(o.SCISSOR_TEST):me(o.SCISSOR_TEST)}function D(V){V===void 0&&(V=o.TEXTURE0+re-1),B!==V&&(o.activeTexture(V),B=V)}function T(V,be,oe){oe===void 0&&(B===null?oe=o.TEXTURE0+re-1:oe=B);let pe=fe[oe];pe===void 0&&(pe={type:void 0,texture:void 0},fe[oe]=pe),(pe.type!==V||pe.texture!==be)&&(B!==oe&&(o.activeTexture(oe),B=oe),o.bindTexture(V,be||le[V]),pe.type=V,pe.texture=be)}function Z(){const V=fe[B];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function he(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(V){ie.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),ie.copy(V))}function ke(V){Le.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Le.copy(V))}function ft(V,be){let oe=p.get(be);oe===void 0&&(oe=new WeakMap,p.set(be,oe));let pe=oe.get(V);pe===void 0&&(pe=o.getUniformBlockIndex(be,V.name),oe.set(V,pe))}function it(V,be){const pe=p.get(be).get(V);d.get(be)!==pe&&(o.uniformBlockBinding(be,pe,V.__bindingPointIndex),d.set(be,pe))}function Mt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},B=null,fe={},v={},y=new WeakMap,x=[],S=null,w=!1,R=null,g=null,_=null,b=null,P=null,L=null,W=null,N=new lt(0,0,0),I=0,z=!1,ae=null,M=null,A=null,q=null,K=null,ie.set(0,0,o.canvas.width,o.canvas.height),Le.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:ye,disable:me,bindFramebuffer:Se,drawBuffers:we,useProgram:Ye,setBlending:O,setMaterial:Ot,setFlipSided:st,setCullFace:ct,setLineWidth:qe,setPolygonOffset:St,setScissorTest:je,activeTexture:D,bindTexture:T,unbindTexture:Z,compressedTexImage2D:he,compressedTexImage3D:ve,texImage2D:Fe,texImage3D:tt,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:pt,texStorage3D:Me,texSubImage2D:de,texSubImage3D:Xe,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ne,scissor:et,viewport:ke,reset:Mt}}function Em(o,e,n,r){const a=UM(r);switch(n){case bm:return o*e;case Im:return o*e;case Um:return o*e*2;case Nm:return o*e/a.components*a.byteLength;case Hf:return o*e/a.components*a.byteLength;case Fm:return o*e*2/a.components*a.byteLength;case Vf:return o*e*2/a.components*a.byteLength;case Dm:return o*e*3/a.components*a.byteLength;case oi:return o*e*4/a.components*a.byteLength;case Gf:return o*e*4/a.components*a.byteLength;case ml:case gl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _l:case vl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case uf:case ff:return Math.max(o,16)*Math.max(e,8)/4;case lf:case cf:return Math.max(o,8)*Math.max(e,8)/2;case df:case hf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case pf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case _f:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case vf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case xf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case yf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case wf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Af:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case xl:case Pf:case Lf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Om:case bf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Df:case If:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function UM(o){switch(o){case Oi:case Cm:return{byteLength:1,components:1};case ko:case Pm:case zo:return{byteLength:2,components:1};case zf:case Bf:return{byteLength:2,components:4};case Gr:case kf:case Ni:return{byteLength:4,components:1};case Lm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function NM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ht,v=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,T){return S?new OffscreenCanvas(D,T):Al("canvas")}function R(D,T,Z){let he=1;const ve=je(D);if((ve.width>Z||ve.height>Z)&&(he=Z/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(he*ve.width),Xe=Math.floor(he*ve.height);y===void 0&&(y=w(de,Xe));const Re=T?w(de,Xe):y;return Re.width=de,Re.height=Xe,Re.getContext("2d").drawImage(D,0,0,de,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+Xe+")."),Re}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==Yn&&D.minFilter!==ri}function _(D){o.generateMipmap(D)}function b(D,T,Z,he,ve=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=T;if(T===o.RED&&(Z===o.FLOAT&&(de=o.R32F),Z===o.HALF_FLOAT&&(de=o.R16F),Z===o.UNSIGNED_BYTE&&(de=o.R8)),T===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(de=o.R8UI),Z===o.UNSIGNED_SHORT&&(de=o.R16UI),Z===o.UNSIGNED_INT&&(de=o.R32UI),Z===o.BYTE&&(de=o.R8I),Z===o.SHORT&&(de=o.R16I),Z===o.INT&&(de=o.R32I)),T===o.RG&&(Z===o.FLOAT&&(de=o.RG32F),Z===o.HALF_FLOAT&&(de=o.RG16F),Z===o.UNSIGNED_BYTE&&(de=o.RG8)),T===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(de=o.RG8UI),Z===o.UNSIGNED_SHORT&&(de=o.RG16UI),Z===o.UNSIGNED_INT&&(de=o.RG32UI),Z===o.BYTE&&(de=o.RG8I),Z===o.SHORT&&(de=o.RG16I),Z===o.INT&&(de=o.RG32I)),T===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(de=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(de=o.RGB16UI),Z===o.UNSIGNED_INT&&(de=o.RGB32UI),Z===o.BYTE&&(de=o.RGB8I),Z===o.SHORT&&(de=o.RGB16I),Z===o.INT&&(de=o.RGB32I)),T===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),Z===o.UNSIGNED_INT&&(de=o.RGBA32UI),Z===o.BYTE&&(de=o.RGBA8I),Z===o.SHORT&&(de=o.RGBA16I),Z===o.INT&&(de=o.RGBA32I)),T===o.RGB&&Z===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),T===o.RGBA){const Xe=ve?Ml:Et.getTransfer(he);Z===o.FLOAT&&(de=o.RGBA32F),Z===o.HALF_FLOAT&&(de=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(de=Xe===bt?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function P(D,T){let Z;return D?T===null||T===Gr||T===Vs?Z=o.DEPTH24_STENCIL8:T===Ni?Z=o.DEPTH32F_STENCIL8:T===ko&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Gr||T===Vs?Z=o.DEPTH_COMPONENT24:T===Ni?Z=o.DEPTH_COMPONENT32F:T===ko&&(Z=o.DEPTH_COMPONENT16),Z}function L(D,T){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Yn&&D.minFilter!==ri?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function W(D){const T=D.target;T.removeEventListener("dispose",W),I(T),T.isVideoTexture&&v.delete(T)}function N(D){const T=D.target;T.removeEventListener("dispose",N),ae(T)}function I(D){const T=r.get(D);if(T.__webglInit===void 0)return;const Z=D.source,he=x.get(Z);if(he){const ve=he[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&z(D),Object.keys(he).length===0&&x.delete(Z)}r.remove(D)}function z(D){const T=r.get(D);o.deleteTexture(T.__webglTexture);const Z=D.source,he=x.get(Z);delete he[T.__cacheKey],f.memory.textures--}function ae(D){const T=r.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let ve=0;ve<T.__webglFramebuffer[he].length;ve++)o.deleteFramebuffer(T.__webglFramebuffer[he][ve]);else o.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)o.deleteFramebuffer(T.__webglFramebuffer[he]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=D.textures;for(let he=0,ve=Z.length;he<ve;he++){const de=r.get(Z[he]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),f.memory.textures--),r.remove(Z[he])}r.remove(D)}let M=0;function A(){M=0}function q(){const D=M;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),M+=1,D}function K(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function re(D,T){const Z=r.get(D);if(D.isVideoTexture&&qe(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const he=D.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(Z,D,T);return}}n.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+T)}function ce(D,T){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Le(Z,D,T);return}n.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+T)}function ne(D,T){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Le(Z,D,T);return}n.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+T)}function ue(D,T){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,T);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+T)}const B={[of]:o.REPEAT,[Hr]:o.CLAMP_TO_EDGE,[af]:o.MIRRORED_REPEAT},fe={[Yn]:o.NEAREST,[yv]:o.NEAREST_MIPMAP_NEAREST,[ja]:o.NEAREST_MIPMAP_LINEAR,[ri]:o.LINEAR,[gc]:o.LINEAR_MIPMAP_NEAREST,[Vr]:o.LINEAR_MIPMAP_LINEAR},se={[Tv]:o.NEVER,[Lv]:o.ALWAYS,[wv]:o.LESS,[km]:o.LEQUAL,[Av]:o.EQUAL,[Pv]:o.GEQUAL,[Rv]:o.GREATER,[Cv]:o.NOTEQUAL};function F(D,T){if(T.type===Ni&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ri||T.magFilter===gc||T.magFilter===ja||T.magFilter===Vr||T.minFilter===ri||T.minFilter===gc||T.minFilter===ja||T.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,B[T.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,B[T.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,B[T.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,fe[T.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,fe[T.minFilter]),T.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Yn||T.minFilter!==ja&&T.minFilter!==Vr||T.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ie(D,T){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",W));const he=T.source;let ve=x.get(he);ve===void 0&&(ve={},x.set(he,ve));const de=K(T);if(de!==D.__cacheKey){ve[de]===void 0&&(ve[de]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),ve[de].usedTimes++;const Xe=ve[D.__cacheKey];Xe!==void 0&&(ve[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&z(T)),D.__cacheKey=de,D.__webglTexture=ve[de].texture}return Z}function Le(D,T,Z){let he=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=o.TEXTURE_3D);const ve=ie(D,T),de=T.source;n.bindTexture(he,D.__webglTexture,o.TEXTURE0+Z);const Xe=r.get(de);if(de.version!==Xe.__version||ve===!0){n.activeTexture(o.TEXTURE0+Z);const Re=Et.getPrimaries(Et.workingColorSpace),Ne=T.colorSpace===dr?null:Et.getPrimaries(T.colorSpace),pt=T.colorSpace===dr||Re===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Me=R(T.image,!1,a.maxTextureSize);Me=St(T,Me);const Fe=u.convert(T.format,T.colorSpace),tt=u.convert(T.type);let et=b(T.internalFormat,Fe,tt,T.colorSpace,T.isVideoTexture);F(he,T);let ke;const ft=T.mipmaps,it=T.isVideoTexture!==!0,Mt=Xe.__version===void 0||ve===!0,V=de.dataReady,be=L(T,Me);if(T.isDepthTexture)et=P(T.format===Gs,T.type),Mt&&(it?n.texStorage2D(o.TEXTURE_2D,1,et,Me.width,Me.height):n.texImage2D(o.TEXTURE_2D,0,et,Me.width,Me.height,0,Fe,tt,null));else if(T.isDataTexture)if(ft.length>0){it&&Mt&&n.texStorage2D(o.TEXTURE_2D,be,et,ft[0].width,ft[0].height);for(let oe=0,pe=ft.length;oe<pe;oe++)ke=ft[oe],it?V&&n.texSubImage2D(o.TEXTURE_2D,oe,0,0,ke.width,ke.height,Fe,tt,ke.data):n.texImage2D(o.TEXTURE_2D,oe,et,ke.width,ke.height,0,Fe,tt,ke.data);T.generateMipmaps=!1}else it?(Mt&&n.texStorage2D(o.TEXTURE_2D,be,et,Me.width,Me.height),V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Fe,tt,Me.data)):n.texImage2D(o.TEXTURE_2D,0,et,Me.width,Me.height,0,Fe,tt,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&Mt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,be,et,ft[0].width,ft[0].height,Me.depth);for(let oe=0,pe=ft.length;oe<pe;oe++)if(ke=ft[oe],T.format!==oi)if(Fe!==null)if(it){if(V)if(T.layerUpdates.size>0){const Ce=Em(ke.width,ke.height,T.format,T.type);for(const Ie of T.layerUpdates){const dt=ke.data.subarray(Ie*Ce/ke.data.BYTES_PER_ELEMENT,(Ie+1)*Ce/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,Ie,ke.width,ke.height,1,Fe,dt,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,0,ke.width,ke.height,Me.depth,Fe,ke.data,0,0)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,oe,et,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,0,ke.width,ke.height,Me.depth,Fe,tt,ke.data):n.texImage3D(o.TEXTURE_2D_ARRAY,oe,et,ke.width,ke.height,Me.depth,0,Fe,tt,ke.data)}else{it&&Mt&&n.texStorage2D(o.TEXTURE_2D,be,et,ft[0].width,ft[0].height);for(let oe=0,pe=ft.length;oe<pe;oe++)ke=ft[oe],T.format!==oi?Fe!==null?it?V&&n.compressedTexSubImage2D(o.TEXTURE_2D,oe,0,0,ke.width,ke.height,Fe,ke.data):n.compressedTexImage2D(o.TEXTURE_2D,oe,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&n.texSubImage2D(o.TEXTURE_2D,oe,0,0,ke.width,ke.height,Fe,tt,ke.data):n.texImage2D(o.TEXTURE_2D,oe,et,ke.width,ke.height,0,Fe,tt,ke.data)}else if(T.isDataArrayTexture)if(it){if(Mt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,be,et,Me.width,Me.height,Me.depth),V)if(T.layerUpdates.size>0){const oe=Em(Me.width,Me.height,T.format,T.type);for(const pe of T.layerUpdates){const Ce=Me.data.subarray(pe*oe/Me.data.BYTES_PER_ELEMENT,(pe+1)*oe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Fe,tt,Ce)}T.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Fe,tt,Me.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,Fe,tt,Me.data);else if(T.isData3DTexture)it?(Mt&&n.texStorage3D(o.TEXTURE_3D,be,et,Me.width,Me.height,Me.depth),V&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Fe,tt,Me.data)):n.texImage3D(o.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,Fe,tt,Me.data);else if(T.isFramebufferTexture){if(Mt)if(it)n.texStorage2D(o.TEXTURE_2D,be,et,Me.width,Me.height);else{let oe=Me.width,pe=Me.height;for(let Ce=0;Ce<be;Ce++)n.texImage2D(o.TEXTURE_2D,Ce,et,oe,pe,0,Fe,tt,null),oe>>=1,pe>>=1}}else if(ft.length>0){if(it&&Mt){const oe=je(ft[0]);n.texStorage2D(o.TEXTURE_2D,be,et,oe.width,oe.height)}for(let oe=0,pe=ft.length;oe<pe;oe++)ke=ft[oe],it?V&&n.texSubImage2D(o.TEXTURE_2D,oe,0,0,Fe,tt,ke):n.texImage2D(o.TEXTURE_2D,oe,et,Fe,tt,ke);T.generateMipmaps=!1}else if(it){if(Mt){const oe=je(Me);n.texStorage2D(o.TEXTURE_2D,be,et,oe.width,oe.height)}V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Fe,tt,Me)}else n.texImage2D(o.TEXTURE_2D,0,et,Fe,tt,Me);g(T)&&_(he),Xe.__version=de.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Q(D,T,Z){if(T.image.length!==6)return;const he=ie(D,T),ve=T.source;n.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+Z);const de=r.get(ve);if(ve.version!==de.__version||he===!0){n.activeTexture(o.TEXTURE0+Z);const Xe=Et.getPrimaries(Et.workingColorSpace),Re=T.colorSpace===dr?null:Et.getPrimaries(T.colorSpace),Ne=T.colorSpace===dr||Xe===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const pt=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!pt&&!Me?Fe[pe]=R(T.image[pe],!0,a.maxCubemapSize):Fe[pe]=Me?T.image[pe].image:T.image[pe],Fe[pe]=St(T,Fe[pe]);const tt=Fe[0],et=u.convert(T.format,T.colorSpace),ke=u.convert(T.type),ft=b(T.internalFormat,et,ke,T.colorSpace),it=T.isVideoTexture!==!0,Mt=de.__version===void 0||he===!0,V=ve.dataReady;let be=L(T,tt);F(o.TEXTURE_CUBE_MAP,T);let oe;if(pt){it&&Mt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,be,ft,tt.width,tt.height);for(let pe=0;pe<6;pe++){oe=Fe[pe].mipmaps;for(let Ce=0;Ce<oe.length;Ce++){const Ie=oe[Ce];T.format!==oi?et!==null?it?V&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,Ie.width,Ie.height,et,Ie.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ft,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,Ie.width,Ie.height,et,ke,Ie.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ft,Ie.width,Ie.height,0,et,ke,Ie.data)}}}else{if(oe=T.mipmaps,it&&Mt){oe.length>0&&be++;const pe=je(Fe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,be,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){it?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,et,ke,Fe[pe].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Fe[pe].width,Fe[pe].height,0,et,ke,Fe[pe].data);for(let Ce=0;Ce<oe.length;Ce++){const dt=oe[Ce].image[pe].image;it?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,dt.width,dt.height,et,ke,dt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ft,dt.width,dt.height,0,et,ke,dt.data)}}else{it?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,ke,Fe[pe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,et,ke,Fe[pe]);for(let Ce=0;Ce<oe.length;Ce++){const Ie=oe[Ce];it?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,et,ke,Ie.image[pe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ft,et,ke,Ie.image[pe])}}}g(T)&&_(o.TEXTURE_CUBE_MAP),de.__version=ve.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function le(D,T,Z,he,ve,de){const Xe=u.convert(Z.format,Z.colorSpace),Re=u.convert(Z.type),Ne=b(Z.internalFormat,Xe,Re,Z.colorSpace);if(!r.get(T).__hasExternalTextures){const Me=Math.max(1,T.width>>de),Fe=Math.max(1,T.height>>de);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?n.texImage3D(ve,de,Ne,Me,Fe,T.depth,0,Xe,Re,null):n.texImage2D(ve,de,Ne,Me,Fe,0,Xe,Re,null)}n.bindFramebuffer(o.FRAMEBUFFER,D),ct(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,ve,r.get(Z).__webglTexture,0,st(T)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,ve,r.get(Z).__webglTexture,de),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ye(D,T,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,D),T.depthBuffer){const he=T.depthTexture,ve=he&&he.isDepthTexture?he.type:null,de=P(T.stencilBuffer,ve),Xe=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=st(T);ct(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Re,de,T.width,T.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,de,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,de,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xe,o.RENDERBUFFER,D)}else{const he=T.textures;for(let ve=0;ve<he.length;ve++){const de=he[ve],Xe=u.convert(de.format,de.colorSpace),Re=u.convert(de.type),Ne=b(de.internalFormat,Xe,Re,de.colorSpace),pt=st(T);Z&&ct(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pt,Ne,T.width,T.height):ct(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pt,Ne,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function me(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),re(T.depthTexture,0);const he=r.get(T.depthTexture).__webglTexture,ve=st(T);if(T.depthTexture.format===Os)ct(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,he,0,ve):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,he,0);else if(T.depthTexture.format===Gs)ct(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,he,0,ve):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Se(D){const T=r.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=he}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");me(T.__webglFramebuffer,D)}else if(Z){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=o.createRenderbuffer(),ye(T.__webglDepthbuffer[he],D,!1);else{const ve=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,de)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ye(T.__webglDepthbuffer,D,!1);else{const he=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ve),o.framebufferRenderbuffer(o.FRAMEBUFFER,he,o.RENDERBUFFER,ve)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function we(D,T,Z){const he=r.get(D);T!==void 0&&le(he.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&Se(D)}function Ye(D){const T=D.texture,Z=r.get(D),he=r.get(T);D.addEventListener("dispose",N);const ve=D.textures,de=D.isWebGLCubeRenderTarget===!0,Xe=ve.length>1;if(Xe||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=T.version,f.memory.textures++),de){Z.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Re]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)Z.__webglFramebuffer[Re][Ne]=o.createFramebuffer()}else Z.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Re=0;Re<T.mipmaps.length;Re++)Z.__webglFramebuffer[Re]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(Xe)for(let Re=0,Ne=ve.length;Re<Ne;Re++){const pt=r.get(ve[Re]);pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture(),f.memory.textures++)}if(D.samples>0&&ct(D)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Re=0;Re<ve.length;Re++){const Ne=ve[Re];Z.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[Re]);const pt=u.convert(Ne.format,Ne.colorSpace),Me=u.convert(Ne.type),Fe=b(Ne.internalFormat,pt,Me,Ne.colorSpace,D.isXRRenderTarget===!0),tt=st(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,tt,Fe,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,Z.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),ye(Z.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){n.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),F(o.TEXTURE_CUBE_MAP,T);for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)le(Z.__webglFramebuffer[Re][Ne],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ne);else le(Z.__webglFramebuffer[Re],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);g(T)&&_(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Re=0,Ne=ve.length;Re<Ne;Re++){const pt=ve[Re],Me=r.get(pt);n.bindTexture(o.TEXTURE_2D,Me.__webglTexture),F(o.TEXTURE_2D,pt),le(Z.__webglFramebuffer,D,pt,o.COLOR_ATTACHMENT0+Re,o.TEXTURE_2D,0),g(pt)&&_(o.TEXTURE_2D)}n.unbindTexture()}else{let Re=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Re=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Re,he.__webglTexture),F(Re,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)le(Z.__webglFramebuffer[Ne],D,T,o.COLOR_ATTACHMENT0,Re,Ne);else le(Z.__webglFramebuffer,D,T,o.COLOR_ATTACHMENT0,Re,0);g(T)&&_(Re),n.unbindTexture()}D.depthBuffer&&Se(D)}function rt(D){const T=D.textures;for(let Z=0,he=T.length;Z<he;Z++){const ve=T[Z];if(g(ve)){const de=D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Xe=r.get(ve).__webglTexture;n.bindTexture(de,Xe),_(de),n.unbindTexture()}}}const Ke=[],O=[];function Ot(D){if(D.samples>0){if(ct(D)===!1){const T=D.textures,Z=D.width,he=D.height;let ve=o.COLOR_BUFFER_BIT;const de=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xe=r.get(D),Re=T.length>1;if(Re)for(let Ne=0;Ne<T.length;Ne++)n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ne]);const pt=r.get(T[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pt,0)}o.blitFramebuffer(0,0,Z,he,0,0,Z,he,ve,o.NEAREST),p===!0&&(Ke.length=0,O.length=0,Ke.push(o.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ke.push(de),O.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,O)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ke))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let Ne=0;Ne<T.length;Ne++){n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ne]);const pt=r.get(T[Ne]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,pt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const T=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function st(D){return Math.min(a.maxSamples,D.samples)}function ct(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(D){const T=f.render.frame;v.get(D)!==T&&(v.set(D,T),D.update())}function St(D,T){const Z=D.colorSpace,he=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==_r&&Z!==dr&&(Et.getTransfer(Z)===bt?(he!==oi||ve!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=A,this.setTexture2D=re,this.setTexture2DArray=ce,this.setTexture3D=ne,this.setTextureCube=ue,this.rebindTextures=we,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ct}function FM(o,e){function n(r,a=dr){let u;const f=Et.getTransfer(a);if(r===Oi)return o.UNSIGNED_BYTE;if(r===zf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Bf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Lm)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Cm)return o.BYTE;if(r===Pm)return o.SHORT;if(r===ko)return o.UNSIGNED_SHORT;if(r===kf)return o.INT;if(r===Gr)return o.UNSIGNED_INT;if(r===Ni)return o.FLOAT;if(r===zo)return o.HALF_FLOAT;if(r===bm)return o.ALPHA;if(r===Dm)return o.RGB;if(r===oi)return o.RGBA;if(r===Im)return o.LUMINANCE;if(r===Um)return o.LUMINANCE_ALPHA;if(r===Os)return o.DEPTH_COMPONENT;if(r===Gs)return o.DEPTH_STENCIL;if(r===Nm)return o.RED;if(r===Hf)return o.RED_INTEGER;if(r===Fm)return o.RG;if(r===Vf)return o.RG_INTEGER;if(r===Gf)return o.RGBA_INTEGER;if(r===ml||r===gl||r===_l||r===vl)if(f===bt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===ml)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===ml)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lf||r===uf||r===cf||r===ff)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===lf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ff)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===df||r===hf||r===pf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===df||r===hf)return f===bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===pf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mf||r===gf||r===_f||r===vf||r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===mf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_f)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ef)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Af)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cf)return f===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xl||r===Pf||r===Lf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===xl)return f===bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Om||r===bf||r===Df||r===If)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===xl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===bf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Df)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===If)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}class OM extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kM={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const g=n.getJointPose(R,r),_=this._getHandJoint(m,R);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=v.position.distanceTo(y.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Us;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const zM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BM=`
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

}`;class HM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Rn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new gr({vertexShader:zM,fragmentShader:BM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vt(new Xs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VM extends Ys{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,y=null,x=null,S=null,w=null;const R=new HM,g=n.getContextAttributes();let _=null,b=null;const P=[],L=[],W=new ht;let N=null;const I=new Xn;I.layers.enable(1),I.viewport=new zt;const z=new Xn;z.layers.enable(2),z.viewport=new zt;const ae=[I,z],M=new OM;M.layers.enable(1),M.layers.enable(2);let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let le=P[Q];return le===void 0&&(le=new Yc,P[Q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Q){let le=P[Q];return le===void 0&&(le=new Yc,P[Q]=le),le.getGripSpace()},this.getHand=function(Q){let le=P[Q];return le===void 0&&(le=new Yc,P[Q]=le),le.getHandSpace()};function K(Q){const le=L.indexOf(Q.inputSource);if(le===-1)return;const ye=P[le];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,m||f),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function re(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",re),a.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<P.length;Q++){const le=L[Q];le!==null&&(L[Q]=null,P[Q].disconnect(le))}A=null,q=null,R.reset(),e.setRenderTarget(_),S=null,x=null,y=null,a=null,b=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",re),a.addEventListener("inputsourceschange",ce),g.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(W),a.renderState.layers===void 0){const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,le),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new Wr(S.framebufferWidth,S.framebufferHeight,{format:oi,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let le=null,ye=null,me=null;g.depth&&(me=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=g.stencil?Gs:Os,ye=g.stencil?Vs:Gr);const Se={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:u};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Se),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new Wr(x.textureWidth,x.textureHeight,{format:oi,type:Oi,depthTexture:new Zm(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Le.setContext(a),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ce(Q){for(let le=0;le<Q.removed.length;le++){const ye=Q.removed[le],me=L.indexOf(ye);me>=0&&(L[me]=null,P[me].disconnect(ye))}for(let le=0;le<Q.added.length;le++){const ye=Q.added[le];let me=L.indexOf(ye);if(me===-1){for(let we=0;we<P.length;we++)if(we>=L.length){L.push(ye),me=we;break}else if(L[we]===null){L[we]=ye,me=we;break}if(me===-1)break}const Se=P[me];Se&&Se.connect(ye)}}const ne=new $,ue=new $;function B(Q,le,ye){ne.setFromMatrixPosition(le.matrixWorld),ue.setFromMatrixPosition(ye.matrixWorld);const me=ne.distanceTo(ue),Se=le.projectionMatrix.elements,we=ye.projectionMatrix.elements,Ye=Se[14]/(Se[10]-1),rt=Se[14]/(Se[10]+1),Ke=(Se[9]+1)/Se[5],O=(Se[9]-1)/Se[5],Ot=(Se[8]-1)/Se[0],st=(we[8]+1)/we[0],ct=Ye*Ot,qe=Ye*st,St=me/(-Ot+st),je=St*-Ot;if(le.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(je),Q.translateZ(St),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Se[10]===-1)Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const D=Ye+St,T=rt+St,Z=ct-je,he=qe+(me-je),ve=Ke*rt/T*D,de=O*rt/T*D;Q.projectionMatrix.makePerspective(Z,he,ve,de,D,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function fe(Q,le){le===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(le.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let le=Q.near,ye=Q.far;R.texture!==null&&(R.depthNear>0&&(le=R.depthNear),R.depthFar>0&&(ye=R.depthFar)),M.near=z.near=I.near=le,M.far=z.far=I.far=ye,(A!==M.near||q!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,q=M.far);const me=Q.parent,Se=M.cameras;fe(M,me);for(let we=0;we<Se.length;we++)fe(Se[we],me);Se.length===2?B(M,I,z):M.projectionMatrix.copy(I.projectionMatrix),se(Q,M,me)};function se(Q,le,ye){ye===null?Q.matrix.copy(le.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(le.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Uf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Q){p=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(M)};let F=null;function ie(Q,le){if(v=le.getViewerPose(m||f),w=le,v!==null){const ye=v.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let me=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let we=0;we<ye.length;we++){const Ye=ye[we];let rt=null;if(S!==null)rt=S.getViewport(Ye);else{const O=y.getViewSubImage(x,Ye);rt=O.viewport,we===0&&(e.setRenderTargetTextures(b,O.colorTexture,x.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(b))}let Ke=ae[we];Ke===void 0&&(Ke=new Xn,Ke.layers.enable(we),Ke.viewport=new zt,ae[we]=Ke),Ke.matrix.fromArray(Ye.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Ye.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(rt.x,rt.y,rt.width,rt.height),we===0&&(M.matrix.copy(Ke.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(Ke)}const Se=a.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const we=y.getDepthInformation(ye[0]);we&&we.isValid&&we.texture&&R.init(e,we,a.renderState)}}for(let ye=0;ye<P.length;ye++){const me=L[ye],Se=P[ye];me!==null&&Se!==void 0&&Se.update(me,le,m||f)}F&&F(Q,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),w=null}const Le=new Km;Le.setAnimationLoop(ie),this.setAnimationLoop=function(Q){F=Q},this.dispose=function(){}}}const Fr=new ai,GM=new Bt;function WM(o,e){function n(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function r(g,_){_.color.getRGB(g.fogColor.value,Ym(o)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function a(g,_,b,P,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(g,_):_.isMeshToonMaterial?(u(g,_),y(g,_)):_.isMeshPhongMaterial?(u(g,_),v(g,_)):_.isMeshStandardMaterial?(u(g,_),x(g,_),_.isMeshPhysicalMaterial&&S(g,_,L)):_.isMeshMatcapMaterial?(u(g,_),w(g,_)):_.isMeshDepthMaterial?u(g,_):_.isMeshDistanceMaterial?(u(g,_),R(g,_)):_.isMeshNormalMaterial?u(g,_):_.isLineBasicMaterial?(f(g,_),_.isLineDashedMaterial&&d(g,_)):_.isPointsMaterial?p(g,_,b,P):_.isSpriteMaterial?m(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,n(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,n(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===An&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,n(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===An&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,n(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,n(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const b=e.get(_),P=b.envMap,L=b.envMapRotation;P&&(g.envMap.value=P,Fr.copy(L),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),g.envMapRotation.value.setFromMatrix4(GM.makeRotationFromEuler(Fr)),g.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,g.aoMapTransform))}function f(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,n(_.map,g.mapTransform))}function d(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function p(g,_,b,P){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*b,g.scale.value=P*.5,_.map&&(g.map.value=_.map,n(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function m(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,n(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function v(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function y(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function x(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function S(g,_,b){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===An&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,_){_.matcap&&(g.matcap.value=_.matcap)}function R(g,_){const b=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function XM(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,P){const L=P.program;r.uniformBlockBinding(b,L)}function m(b,P){let L=a[b.id];L===void 0&&(w(b),L=v(b),a[b.id]=L,b.addEventListener("dispose",g));const W=P.program;r.updateUBOMapping(b,W);const N=e.render.frame;u[b.id]!==N&&(x(b),u[b.id]=N)}function v(b){const P=y();b.__bindingPointIndex=P;const L=o.createBuffer(),W=b.__size,N=b.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,W,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,L),L}function y(){for(let b=0;b<d;b++)if(f.indexOf(b)===-1)return f.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(b){const P=a[b.id],L=b.uniforms,W=b.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let N=0,I=L.length;N<I;N++){const z=Array.isArray(L[N])?L[N]:[L[N]];for(let ae=0,M=z.length;ae<M;ae++){const A=z[ae];if(S(A,N,ae,W)===!0){const q=A.__offset,K=Array.isArray(A.value)?A.value:[A.value];let re=0;for(let ce=0;ce<K.length;ce++){const ne=K[ce],ue=R(ne);typeof ne=="number"||typeof ne=="boolean"?(A.__data[0]=ne,o.bufferSubData(o.UNIFORM_BUFFER,q+re,A.__data)):ne.isMatrix3?(A.__data[0]=ne.elements[0],A.__data[1]=ne.elements[1],A.__data[2]=ne.elements[2],A.__data[3]=0,A.__data[4]=ne.elements[3],A.__data[5]=ne.elements[4],A.__data[6]=ne.elements[5],A.__data[7]=0,A.__data[8]=ne.elements[6],A.__data[9]=ne.elements[7],A.__data[10]=ne.elements[8],A.__data[11]=0):(ne.toArray(A.__data,re),re+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,q,A.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(b,P,L,W){const N=b.value,I=P+"_"+L;if(W[I]===void 0)return typeof N=="number"||typeof N=="boolean"?W[I]=N:W[I]=N.clone(),!0;{const z=W[I];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return W[I]=N,!0}else if(z.equals(N)===!1)return z.copy(N),!0}return!1}function w(b){const P=b.uniforms;let L=0;const W=16;for(let I=0,z=P.length;I<z;I++){const ae=Array.isArray(P[I])?P[I]:[P[I]];for(let M=0,A=ae.length;M<A;M++){const q=ae[M],K=Array.isArray(q.value)?q.value:[q.value];for(let re=0,ce=K.length;re<ce;re++){const ne=K[re],ue=R(ne),B=L%W,fe=B%ue.boundary,se=B+fe;L+=fe,se!==0&&W-se<ue.storage&&(L+=W-se),q.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=L,L+=ue.storage}}}const N=L%W;return N>0&&(L+=W-N),b.__size=L,b.__cache={},this}function R(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),P}function g(b){const P=b.target;P.removeEventListener("dispose",g);const L=f.indexOf(P.__bindingPointIndex);f.splice(L,1),o.deleteBuffer(a[P.id]),delete a[P.id],delete u[P.id]}function _(){for(const b in a)o.deleteBuffer(a[b]);f=[],a={},u={}}return{bind:p,update:m,dispose:_}}class YM{constructor(e={}){const{canvas:n=Dv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const S=new Uint32Array(4),w=new Int32Array(4);let R=null,g=null;const _=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=pr,this.toneMappingExposure=1;const P=this;let L=!1,W=0,N=0,I=null,z=-1,ae=null;const M=new zt,A=new zt;let q=null;const K=new lt(0);let re=0,ce=n.width,ne=n.height,ue=1,B=null,fe=null;const se=new zt(0,0,ce,ne),F=new zt(0,0,ce,ne);let ie=!1;const Le=new qf;let Q=!1,le=!1;const ye=new Bt,me=new Bt,Se=new $,we=new zt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Ke(){return I===null?ue:1}let O=r;function Ot(C,G){return n.getContext(C,G)}try{const C={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Of}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Ce,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),O===null){const G="webgl2";if(O=Ot(G,C),O===null)throw Ot(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let st,ct,qe,St,je,D,T,Z,he,ve,de,Xe,Re,Ne,pt,Me,Fe,tt,et,ke,ft,it,Mt,V;function be(){st=new Zy(O),st.init(),it=new FM(O,st),ct=new Xy(O,st,e,it),qe=new IM(O),ct.reverseDepthBuffer&&qe.buffers.depth.setReversed(!0),St=new eS(O),je=new vM,D=new NM(O,st,qe,je,ct,it,St),T=new qy(P),Z=new $y(P),he=new a0(O),Mt=new Gy(O,he),ve=new Qy(O,he,St,Mt),de=new nS(O,ve,he,St),et=new tS(O,ct,D),Me=new Yy(je),Xe=new _M(P,T,Z,st,ct,Mt,Me),Re=new WM(P,je),Ne=new yM,pt=new AM(st),tt=new Vy(P,T,Z,qe,de,x,p),Fe=new bM(P,de,ct),V=new XM(O,St,ct,qe),ke=new Wy(O,st,St),ft=new Jy(O,st,St),St.programs=Xe.programs,P.capabilities=ct,P.extensions=st,P.properties=je,P.renderLists=Ne,P.shadowMap=Fe,P.state=qe,P.info=St}be();const oe=new VM(P,O);this.xr=oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=st.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=st.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(C){C!==void 0&&(ue=C,this.setSize(ce,ne,!1))},this.getSize=function(C){return C.set(ce,ne)},this.setSize=function(C,G,J=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,ne=G,n.width=Math.floor(C*ue),n.height=Math.floor(G*ue),J===!0&&(n.style.width=C+"px",n.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(ce*ue,ne*ue).floor()},this.setDrawingBufferSize=function(C,G,J){ce=C,ne=G,ue=J,n.width=Math.floor(C*J),n.height=Math.floor(G*J),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(se)},this.setViewport=function(C,G,J,ee){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,G,J,ee),qe.viewport(M.copy(se).multiplyScalar(ue).round())},this.getScissor=function(C){return C.copy(F)},this.setScissor=function(C,G,J,ee){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,G,J,ee),qe.scissor(A.copy(F).multiplyScalar(ue).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){qe.setScissorTest(ie=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){fe=C},this.getClearColor=function(C){return C.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(C=!0,G=!0,J=!0){let ee=0;if(C){let X=!1;if(I!==null){const Te=I.texture.format;X=Te===Gf||Te===Vf||Te===Hf}if(X){const Te=I.texture.type,De=Te===Oi||Te===Gr||Te===ko||Te===Vs||Te===zf||Te===Bf,Ae=tt.getClearColor(),Ve=tt.getClearAlpha(),Qe=Ae.r,Je=Ae.g,Ge=Ae.b;De?(S[0]=Qe,S[1]=Je,S[2]=Ge,S[3]=Ve,O.clearBufferuiv(O.COLOR,0,S)):(w[0]=Qe,w[1]=Je,w[2]=Ge,w[3]=Ve,O.clearBufferiv(O.COLOR,0,w))}else ee|=O.COLOR_BUFFER_BIT}G&&(ee|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Ce,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),Ne.dispose(),pt.dispose(),je.dispose(),T.dispose(),Z.dispose(),de.dispose(),Mt.dispose(),V.dispose(),Xe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ki),oe.removeEventListener("sessionend",Yr),Cn.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const C=St.autoReset,G=Fe.enabled,J=Fe.autoUpdate,ee=Fe.needsUpdate,X=Fe.type;be(),St.autoReset=C,Fe.enabled=G,Fe.autoUpdate=J,Fe.needsUpdate=ee,Fe.type=X}function Ie(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function dt(C){const G=C.target;G.removeEventListener("dispose",dt),Ut(G)}function Ut(C){rn(C),je.remove(C)}function rn(C){const G=je.get(C).programs;G!==void 0&&(G.forEach(function(J){Xe.releaseProgram(J)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,J,ee,X,Te){G===null&&(G=Ye);const De=X.isMesh&&X.matrixWorld.determinant()<0,Ae=xi(C,G,J,ee,X);qe.setMaterial(ee,De);let Ve=J.index,Qe=1;if(ee.wireframe===!0){if(Ve=ve.getWireframeAttribute(J),Ve===void 0)return;Qe=2}const Je=J.drawRange,Ge=J.attributes.position;let yt=Je.start*Qe,wt=(Je.start+Je.count)*Qe;Te!==null&&(yt=Math.max(yt,Te.start*Qe),wt=Math.min(wt,(Te.start+Te.count)*Qe)),Ve!==null?(yt=Math.max(yt,0),wt=Math.min(wt,Ve.count)):Ge!=null&&(yt=Math.max(yt,0),wt=Math.min(wt,Ge.count));const At=wt-yt;if(At<0||At===1/0)return;Mt.setup(X,ee,Ae,J,Ve);let Dt,_t=ke;if(Ve!==null&&(Dt=he.get(Ve),_t=ft,_t.setIndex(Dt)),X.isMesh)ee.wireframe===!0?(qe.setLineWidth(ee.wireframeLinewidth*Ke()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(X.isLine){let Oe=ee.linewidth;Oe===void 0&&(Oe=1),qe.setLineWidth(Oe*Ke()),X.isLineSegments?_t.setMode(O.LINES):X.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else X.isPoints?_t.setMode(O.POINTS):X.isSprite&&_t.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)_t.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))_t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Oe=X._multiDrawStarts,Xt=X._multiDrawCounts,vt=X._multiDrawCount,Pn=Ve?he.get(Ve).bytesPerElement:1,qn=je.get(ee).currentProgram.getUniforms();for(let Qt=0;Qt<vt;Qt++)qn.setValue(O,"_gl_DrawID",Qt),_t.render(Oe[Qt]/Pn,Xt[Qt])}else if(X.isInstancedMesh)_t.renderInstances(yt,At,X.count);else if(J.isInstancedBufferGeometry){const Oe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Xt=Math.min(J.instanceCount,Oe);_t.renderInstances(yt,At,Xt)}else _t.render(yt,At)};function mt(C,G,J){C.transparent===!0&&C.side===ii&&C.forceSinglePass===!1?(C.side=An,C.needsUpdate=!0,jr(C,G,J),C.side=mr,C.needsUpdate=!0,jr(C,G,J),C.side=ii):jr(C,G,J)}this.compile=function(C,G,J=null){J===null&&(J=C),g=pt.get(J),g.init(G),b.push(g),J.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),C!==J&&C.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const ee=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Te=X.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Ae=Te[De];mt(Ae,J,X),ee.add(Ae)}else mt(Te,J,X),ee.add(Te)}),b.pop(),g=null,ee},this.compileAsync=function(C,G,J=null){const ee=this.compile(C,G,J);return new Promise(X=>{function Te(){if(ee.forEach(function(De){je.get(De).currentProgram.isReady()&&ee.delete(De)}),ee.size===0){X(C);return}setTimeout(Te,10)}st.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Zt=null;function On(C){Zt&&Zt(C)}function ki(){Cn.stop()}function Yr(){Cn.start()}const Cn=new Km;Cn.setAnimationLoop(On),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(C){Zt=C,oe.setAnimationLoop(C),C===null?Cn.stop():Cn.start()},oe.addEventListener("sessionstart",ki),oe.addEventListener("sessionend",Yr),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(G),G=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,G,I),g=pt.get(C,b.length),g.init(G),b.push(g),me.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Le.setFromProjectionMatrix(me),le=this.localClippingEnabled,Q=Me.init(this.clippingPlanes,le),R=Ne.get(C,_.length),R.init(),_.push(R),oe.enabled===!0&&oe.isPresenting===!0){const Te=P.xr.getDepthSensingMesh();Te!==null&&Ks(Te,G,-1/0,P.sortObjects)}Ks(C,G,0,P.sortObjects),R.finish(),P.sortObjects===!0&&R.sort(B,fe),rt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,rt&&tt.addToRenderList(R,C),this.info.render.frame++,Q===!0&&Me.beginShadows();const J=g.state.shadowsArray;Fe.render(J,C,G),Q===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=R.opaque,X=R.transmissive;if(g.setupLights(),G.isArrayCamera){const Te=G.cameras;if(X.length>0)for(let De=0,Ae=Te.length;De<Ae;De++){const Ve=Te[De];vr(ee,X,C,Ve)}rt&&tt.render(C);for(let De=0,Ae=Te.length;De<Ae;De++){const Ve=Te[De];zi(R,C,Ve,Ve.viewport)}}else X.length>0&&vr(ee,X,C,G),rt&&tt.render(C),zi(R,C,G);I!==null&&(D.updateMultisampleRenderTarget(I),D.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(P,C,G),Mt.resetDefaultState(),z=-1,ae=null,b.pop(),b.length>0?(g=b[b.length-1],Q===!0&&Me.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function Ks(C,G,J,ee){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Le.intersectsSprite(C)){ee&&we.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const De=de.update(C),Ae=C.material;Ae.visible&&R.push(C,De,Ae,J,we.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Le.intersectsObject(C))){const De=de.update(C),Ae=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),we.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),we.copy(De.boundingSphere.center)),we.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Ae)){const Ve=De.groups;for(let Qe=0,Je=Ve.length;Qe<Je;Qe++){const Ge=Ve[Qe],yt=Ae[Ge.materialIndex];yt&&yt.visible&&R.push(C,De,yt,J,we.z,Ge)}}else Ae.visible&&R.push(C,De,Ae,J,we.z,null)}}const Te=C.children;for(let De=0,Ae=Te.length;De<Ae;De++)Ks(Te[De],G,J,ee)}function zi(C,G,J,ee){const X=C.opaque,Te=C.transmissive,De=C.transparent;g.setupLightsView(J),Q===!0&&Me.setGlobalState(P.clippingPlanes,J),ee&&qe.viewport(M.copy(ee)),X.length>0&&vi(X,G,J),Te.length>0&&vi(Te,G,J),De.length>0&&vi(De,G,J),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function vr(C,G,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ee.id]===void 0&&(g.state.transmissionRenderTarget[ee.id]=new Wr(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?zo:Oi,minFilter:Vr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Te=g.state.transmissionRenderTarget[ee.id],De=ee.viewport||M;Te.setSize(De.z,De.w);const Ae=P.getRenderTarget();P.setRenderTarget(Te),P.getClearColor(K),re=P.getClearAlpha(),re<1&&P.setClearColor(16777215,.5),P.clear(),rt&&tt.render(J);const Ve=P.toneMapping;P.toneMapping=pr;const Qe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),g.setupLightsView(ee),Q===!0&&Me.setGlobalState(P.clippingPlanes,ee),vi(C,J,ee),D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te),st.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ge=0,yt=G.length;Ge<yt;Ge++){const wt=G[Ge],At=wt.object,Dt=wt.geometry,_t=wt.material,Oe=wt.group;if(_t.side===ii&&At.layers.test(ee.layers)){const Xt=_t.side;_t.side=An,_t.needsUpdate=!0,qr(At,J,ee,Dt,_t,Oe),_t.side=Xt,_t.needsUpdate=!0,Je=!0}}Je===!0&&(D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te))}P.setRenderTarget(Ae),P.setClearColor(K,re),Qe!==void 0&&(ee.viewport=Qe),P.toneMapping=Ve}function vi(C,G,J){const ee=G.isScene===!0?G.overrideMaterial:null;for(let X=0,Te=C.length;X<Te;X++){const De=C[X],Ae=De.object,Ve=De.geometry,Qe=ee===null?De.material:ee,Je=De.group;Ae.layers.test(J.layers)&&qr(Ae,G,J,Ve,Qe,Je)}}function qr(C,G,J,ee,X,Te){C.onBeforeRender(P,G,J,ee,X,Te),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(P,G,J,ee,C,Te),X.transparent===!0&&X.side===ii&&X.forceSinglePass===!1?(X.side=An,X.needsUpdate=!0,P.renderBufferDirect(J,G,ee,X,C,Te),X.side=mr,X.needsUpdate=!0,P.renderBufferDirect(J,G,ee,X,C,Te),X.side=ii):P.renderBufferDirect(J,G,ee,X,C,Te),C.onAfterRender(P,G,J,ee,X,Te)}function jr(C,G,J){G.isScene!==!0&&(G=Ye);const ee=je.get(C),X=g.state.lights,Te=g.state.shadowsArray,De=X.state.version,Ae=Xe.getParameters(C,X.state,Te,G,J),Ve=Xe.getProgramCacheKey(Ae);let Qe=ee.programs;ee.environment=C.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(C.isMeshStandardMaterial?Z:T).get(C.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Qe===void 0&&(C.addEventListener("dispose",dt),Qe=new Map,ee.programs=Qe);let Je=Qe.get(Ve);if(Je!==void 0){if(ee.currentProgram===Je&&ee.lightsStateVersion===De)return Wo(C,Ae),Je}else Ae.uniforms=Xe.getUniforms(C),C.onBeforeCompile(Ae,P),Je=Xe.acquireProgram(Ae,Ve),Qe.set(Ve,Je),ee.uniforms=Ae.uniforms;const Ge=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),Wo(C,Ae),ee.needsLights=Yo(C),ee.lightsStateVersion=De,ee.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),ee.currentProgram=Je,ee.uniformsList=null,Je}function Go(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Sl.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Wo(C,G){const J=je.get(C);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function xi(C,G,J,ee,X){G.isScene!==!0&&(G=Ye),D.resetTextureUnits();const Te=G.fog,De=ee.isMeshStandardMaterial?G.environment:null,Ae=I===null?P.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:_r,Ve=(ee.isMeshStandardMaterial?Z:T).get(ee.envMap||De),Qe=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ge=!!J.morphAttributes.position,yt=!!J.morphAttributes.normal,wt=!!J.morphAttributes.color;let At=pr;ee.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(At=P.toneMapping);const Dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=Dt!==void 0?Dt.length:0,Oe=je.get(ee),Xt=g.state.lights;if(Q===!0&&(le===!0||C!==ae)){const ln=C===ae&&ee.id===z;Me.setState(ee,C,ln)}let vt=!1;ee.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Xt.state.version||Oe.outputColorSpace!==Ae||X.isBatchedMesh&&Oe.batching===!1||!X.isBatchedMesh&&Oe.batching===!0||X.isBatchedMesh&&Oe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Oe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Oe.instancing===!1||!X.isInstancedMesh&&Oe.instancing===!0||X.isSkinnedMesh&&Oe.skinning===!1||!X.isSkinnedMesh&&Oe.skinning===!0||X.isInstancedMesh&&Oe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Oe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Oe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Oe.instancingMorph===!1&&X.morphTexture!==null||Oe.envMap!==Ve||ee.fog===!0&&Oe.fog!==Te||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Me.numPlanes||Oe.numIntersection!==Me.numIntersection)||Oe.vertexAlphas!==Qe||Oe.vertexTangents!==Je||Oe.morphTargets!==Ge||Oe.morphNormals!==yt||Oe.morphColors!==wt||Oe.toneMapping!==At||Oe.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,Oe.__version=ee.version);let Pn=Oe.currentProgram;vt===!0&&(Pn=jr(ee,G,X));let qn=!1,Qt=!1,yi=!1;const Rt=Pn.getUniforms(),ui=Oe.uniforms;if(qe.useProgram(Pn.program)&&(qn=!0,Qt=!0,yi=!0),ee.id!==z&&(z=ee.id,Qt=!0),qn||ae!==C){ct.reverseDepthBuffer?(ye.copy(C.projectionMatrix),Uv(ye),Nv(ye),Rt.setValue(O,"projectionMatrix",ye)):Rt.setValue(O,"projectionMatrix",C.projectionMatrix),Rt.setValue(O,"viewMatrix",C.matrixWorldInverse);const ln=Rt.map.cameraPosition;ln!==void 0&&ln.setValue(O,Se.setFromMatrixPosition(C.matrixWorld)),ct.logarithmicDepthBuffer&&Rt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Rt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),ae!==C&&(ae=C,Qt=!0,yi=!0)}if(X.isSkinnedMesh){Rt.setOptional(O,X,"bindMatrix"),Rt.setOptional(O,X,"bindMatrixInverse");const ln=X.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Rt.setValue(O,"boneTexture",ln.boneTexture,D))}X.isBatchedMesh&&(Rt.setOptional(O,X,"batchingTexture"),Rt.setValue(O,"batchingTexture",X._matricesTexture,D),Rt.setOptional(O,X,"batchingIdTexture"),Rt.setValue(O,"batchingIdTexture",X._indirectTexture,D),Rt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Rt.setValue(O,"batchingColorTexture",X._colorsTexture,D));const $s=J.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0)&&et.update(X,J,Pn),(Qt||Oe.receiveShadow!==X.receiveShadow)&&(Oe.receiveShadow=X.receiveShadow,Rt.setValue(O,"receiveShadow",X.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(ui.envMap.value=Ve,ui.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(ui.envMapIntensity.value=G.environmentIntensity),Qt&&(Rt.setValue(O,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&Xo(ui,yi),Te&&ee.fog===!0&&Re.refreshFogUniforms(ui,Te),Re.refreshMaterialUniforms(ui,ee,ue,ne,g.state.transmissionRenderTarget[C.id]),Sl.upload(O,Go(Oe),ui,D)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Sl.upload(O,Go(Oe),ui,D),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Rt.setValue(O,"center",X.center),Rt.setValue(O,"modelViewMatrix",X.modelViewMatrix),Rt.setValue(O,"normalMatrix",X.normalMatrix),Rt.setValue(O,"modelMatrix",X.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const ln=ee.uniformsGroups;for(let Kr=0,Zs=ln.length;Kr<Zs;Kr++){const Bi=ln[Kr];V.update(Bi,Pn),V.bind(Bi,Pn)}}return Pn}function Xo(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Yo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,G,J){je.get(C.texture).__webglTexture=G,je.get(C.depthTexture).__webglTexture=J;const ee=je.get(C);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){const J=je.get(C);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,J=0){I=C,W=G,N=J;let ee=!0,X=null,Te=!1,De=!1;if(C){const Ve=je.get(C);if(Ve.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1;else if(Ve.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Ve.__hasExternalTextures)D.rebindTextures(C,je.get(C.texture).__webglTexture,je.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ge=C.depthTexture;if(Ve.__boundDepthTexture!==Ge){if(Ge!==null&&je.has(Ge)&&(C.width!==Ge.image.width||C.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const Qe=C.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(De=!0);const Je=je.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?X=Je[G][J]:X=Je[G],Te=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?X=je.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?X=Je[J]:X=Je,M.copy(C.viewport),A.copy(C.scissor),q=C.scissorTest}else M.copy(se).multiplyScalar(ue).floor(),A.copy(F).multiplyScalar(ue).floor(),q=ie;if(qe.bindFramebuffer(O.FRAMEBUFFER,X)&&ee&&qe.drawBuffers(C,X),qe.viewport(M),qe.scissor(A),qe.setScissorTest(q),Te){const Ve=je.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ve.__webglTexture,J)}else if(De){const Ve=je.get(C.texture),Qe=G||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ve.__webglTexture,J||0,Qe)}z=-1},this.readRenderTargetPixels=function(C,G,J,ee,X,Te,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Ae=Ae[De]),Ae){qe.bindFramebuffer(O.FRAMEBUFFER,Ae);try{const Ve=C.texture,Qe=Ve.format,Je=Ve.type;if(!ct.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-ee&&J>=0&&J<=C.height-X&&O.readPixels(G,J,ee,X,it.convert(Qe),it.convert(Je),Te)}finally{const Ve=I!==null?je.get(I).__webglFramebuffer:null;qe.bindFramebuffer(O.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,G,J,ee,X,Te,De){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Ae=Ae[De]),Ae){const Ve=C.texture,Qe=Ve.format,Je=Ve.type;if(!ct.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=C.width-ee&&J>=0&&J<=C.height-X){qe.bindFramebuffer(O.FRAMEBUFFER,Ae);const Ge=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ge),O.bufferData(O.PIXEL_PACK_BUFFER,Te.byteLength,O.STREAM_READ),O.readPixels(G,J,ee,X,it.convert(Qe),it.convert(Je),0);const yt=I!==null?je.get(I).__webglFramebuffer:null;qe.bindFramebuffer(O.FRAMEBUFFER,yt);const wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Iv(O,wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ge),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Te),O.deleteBuffer(Ge),O.deleteSync(wt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,G=null,J=0){C.isTexture!==!0&&(yl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1]);const ee=Math.pow(2,-J),X=Math.floor(C.image.width*ee),Te=Math.floor(C.image.height*ee),De=G!==null?G.x:0,Ae=G!==null?G.y:0;D.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,De,Ae,X,Te),qe.unbindTexture()},this.copyTextureToTexture=function(C,G,J=null,ee=null,X=0){C.isTexture!==!0&&(yl("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,C=arguments[1],G=arguments[2],X=arguments[3]||0,J=null);let Te,De,Ae,Ve,Qe,Je;J!==null?(Te=J.max.x-J.min.x,De=J.max.y-J.min.y,Ae=J.min.x,Ve=J.min.y):(Te=C.image.width,De=C.image.height,Ae=0,Ve=0),ee!==null?(Qe=ee.x,Je=ee.y):(Qe=0,Je=0);const Ge=it.convert(G.format),yt=it.convert(G.type);D.setTexture2D(G,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const wt=O.getParameter(O.UNPACK_ROW_LENGTH),At=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Dt=O.getParameter(O.UNPACK_SKIP_PIXELS),_t=O.getParameter(O.UNPACK_SKIP_ROWS),Oe=O.getParameter(O.UNPACK_SKIP_IMAGES),Xt=C.isCompressedTexture?C.mipmaps[X]:C.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Xt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Xt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ve),C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,Qe,Je,Te,De,Ge,yt,Xt.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,Qe,Je,Xt.width,Xt.height,Ge,Xt.data):O.texSubImage2D(O.TEXTURE_2D,X,Qe,Je,Te,De,Ge,yt,Xt),O.pixelStorei(O.UNPACK_ROW_LENGTH,wt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Dt),O.pixelStorei(O.UNPACK_SKIP_ROWS,_t),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Oe),X===0&&G.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),qe.unbindTexture()},this.copyTextureToTexture3D=function(C,G,J=null,ee=null,X=0){C.isTexture!==!0&&(yl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,C=arguments[2],G=arguments[3],X=arguments[4]||0);let Te,De,Ae,Ve,Qe,Je,Ge,yt,wt;const At=C.isCompressedTexture?C.mipmaps[X]:C.image;J!==null?(Te=J.max.x-J.min.x,De=J.max.y-J.min.y,Ae=J.max.z-J.min.z,Ve=J.min.x,Qe=J.min.y,Je=J.min.z):(Te=At.width,De=At.height,Ae=At.depth,Ve=0,Qe=0,Je=0),ee!==null?(Ge=ee.x,yt=ee.y,wt=ee.z):(Ge=0,yt=0,wt=0);const Dt=it.convert(G.format),_t=it.convert(G.type);let Oe;if(G.isData3DTexture)D.setTexture3D(G,0),Oe=O.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)D.setTexture2DArray(G,0),Oe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const Xt=O.getParameter(O.UNPACK_ROW_LENGTH),vt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Pn=O.getParameter(O.UNPACK_SKIP_PIXELS),qn=O.getParameter(O.UNPACK_SKIP_ROWS),Qt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ve),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Je),C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Oe,X,Ge,yt,wt,Te,De,Ae,Dt,_t,At.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Oe,X,Ge,yt,wt,Te,De,Ae,Dt,At.data):O.texSubImage3D(Oe,X,Ge,yt,wt,Te,De,Ae,Dt,_t,At),O.pixelStorei(O.UNPACK_ROW_LENGTH,Xt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pn),O.pixelStorei(O.UNPACK_SKIP_ROWS,qn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qt),X===0&&G.generateMipmaps&&O.generateMipmap(Oe),qe.unbindTexture()},this.initRenderTarget=function(C){je.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),qe.unbindTexture()},this.resetState=function(){W=0,N=0,I=null,qe.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Xf?"display-p3":"srgb",n.unpackColorSpace=Et.workingColorSpace===Dl?"display-p3":"srgb"}}class Cl{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(e),this.density=n}clone(){return new Cl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qM extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Kf extends li{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const u=[],f=[],d=[],p=[],m=new $,v=new ht;f.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let y=0,x=3;y<=n;y++,x+=3){const S=r+y/n*a;m.x=e*Math.cos(S),m.y=e*Math.sin(S),f.push(m.x,m.y,m.z),d.push(0,0,1),v.x=(f[x]/e+1)/2,v.y=(f[x+1]/e+1)/2,p.push(v.x,v.y)}for(let y=1;y<=n;y++)u.push(y,y+1,0);this.setIndex(u),this.setAttribute("position",new jt(f,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pl extends li{constructor(e=1,n=1,r=1,a=32,u=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),u=Math.floor(u);const v=[],y=[],x=[],S=[];let w=0;const R=[],g=r/2;let _=0;b(),f===!1&&(e>0&&P(!0),n>0&&P(!1)),this.setIndex(v),this.setAttribute("position",new jt(y,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(S,2));function b(){const L=new $,W=new $;let N=0;const I=(n-e)/r;for(let z=0;z<=u;z++){const ae=[],M=z/u,A=M*(n-e)+e;for(let q=0;q<=a;q++){const K=q/a,re=K*p+d,ce=Math.sin(re),ne=Math.cos(re);W.x=A*ce,W.y=-M*r+g,W.z=A*ne,y.push(W.x,W.y,W.z),L.set(ce,I,ne).normalize(),x.push(L.x,L.y,L.z),S.push(K,1-M),ae.push(w++)}R.push(ae)}for(let z=0;z<a;z++)for(let ae=0;ae<u;ae++){const M=R[ae][z],A=R[ae+1][z],q=R[ae+1][z+1],K=R[ae][z+1];e>0&&(v.push(M,A,K),N+=3),n>0&&(v.push(A,q,K),N+=3)}m.addGroup(_,N,0),_+=N}function P(L){const W=w,N=new ht,I=new $;let z=0;const ae=L===!0?e:n,M=L===!0?1:-1;for(let q=1;q<=a;q++)y.push(0,g*M,0),x.push(0,M,0),S.push(.5,.5),w++;const A=w;for(let q=0;q<=a;q++){const re=q/a*p+d,ce=Math.cos(re),ne=Math.sin(re);I.x=ae*ne,I.y=g*M,I.z=ae*ce,y.push(I.x,I.y,I.z),x.push(0,M,0),N.x=ce*.5+.5,N.y=ne*.5*M+.5,S.push(N.x,N.y),w++}for(let q=0;q<a;q++){const K=W+q,re=A+q;L===!0?v.push(re,re+1,K):v.push(re+1,re,K),z+=3}m.addGroup(_,z,L===!0?1:2),_+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $f extends li{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const u=[],f=[];d(a),m(r),v(),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(u.slice(),3)),this.setAttribute("uv",new jt(f,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(b){const P=new $,L=new $,W=new $;for(let N=0;N<n.length;N+=3)S(n[N+0],P),S(n[N+1],L),S(n[N+2],W),p(P,L,W,b)}function p(b,P,L,W){const N=W+1,I=[];for(let z=0;z<=N;z++){I[z]=[];const ae=b.clone().lerp(L,z/N),M=P.clone().lerp(L,z/N),A=N-z;for(let q=0;q<=A;q++)q===0&&z===N?I[z][q]=ae:I[z][q]=ae.clone().lerp(M,q/A)}for(let z=0;z<N;z++)for(let ae=0;ae<2*(N-z)-1;ae++){const M=Math.floor(ae/2);ae%2===0?(x(I[z][M+1]),x(I[z+1][M]),x(I[z][M])):(x(I[z][M+1]),x(I[z+1][M+1]),x(I[z+1][M]))}}function m(b){const P=new $;for(let L=0;L<u.length;L+=3)P.x=u[L+0],P.y=u[L+1],P.z=u[L+2],P.normalize().multiplyScalar(b),u[L+0]=P.x,u[L+1]=P.y,u[L+2]=P.z}function v(){const b=new $;for(let P=0;P<u.length;P+=3){b.x=u[P+0],b.y=u[P+1],b.z=u[P+2];const L=g(b)/2/Math.PI+.5,W=_(b)/Math.PI+.5;f.push(L,1-W)}w(),y()}function y(){for(let b=0;b<f.length;b+=6){const P=f[b+0],L=f[b+2],W=f[b+4],N=Math.max(P,L,W),I=Math.min(P,L,W);N>.9&&I<.1&&(P<.2&&(f[b+0]+=1),L<.2&&(f[b+2]+=1),W<.2&&(f[b+4]+=1))}}function x(b){u.push(b.x,b.y,b.z)}function S(b,P){const L=b*3;P.x=e[L+0],P.y=e[L+1],P.z=e[L+2]}function w(){const b=new $,P=new $,L=new $,W=new $,N=new ht,I=new ht,z=new ht;for(let ae=0,M=0;ae<u.length;ae+=9,M+=6){b.set(u[ae+0],u[ae+1],u[ae+2]),P.set(u[ae+3],u[ae+4],u[ae+5]),L.set(u[ae+6],u[ae+7],u[ae+8]),N.set(f[M+0],f[M+1]),I.set(f[M+2],f[M+3]),z.set(f[M+4],f[M+5]),W.copy(b).add(P).add(L).divideScalar(3);const A=g(W);R(N,M+0,b,A),R(I,M+2,P,A),R(z,M+4,L,A)}}function R(b,P,L,W){W<0&&b.x===1&&(f[P]=b.x-1),L.x===0&&L.z===0&&(f[P]=W/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function _(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $f(e.vertices,e.indices,e.radius,e.details)}}class Zf extends $f{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,u=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],f=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(u,f,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Zf(e.radius,e.detail)}}class Ns extends li{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+d,Math.PI);let m=0;const v=[],y=new $,x=new $,S=[],w=[],R=[],g=[];for(let _=0;_<=r;_++){const b=[],P=_/r;let L=0;_===0&&f===0?L=.5/n:_===r&&p===Math.PI&&(L=-.5/n);for(let W=0;W<=n;W++){const N=W/n;y.x=-e*Math.cos(a+N*u)*Math.sin(f+P*d),y.y=e*Math.cos(f+P*d),y.z=e*Math.sin(a+N*u)*Math.sin(f+P*d),w.push(y.x,y.y,y.z),x.copy(y).normalize(),R.push(x.x,x.y,x.z),g.push(N+L,1-P),b.push(m++)}v.push(b)}for(let _=0;_<r;_++)for(let b=0;b<n;b++){const P=v[_][b+1],L=v[_][b],W=v[_+1][b],N=v[_+1][b+1];(_!==0||f>0)&&S.push(P,L,N),(_!==r-1||p<Math.PI)&&S.push(L,W,N)}this.setIndex(S),this.setAttribute("position",new jt(w,3)),this.setAttribute("normal",new jt(R,3)),this.setAttribute("uv",new jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jM extends qs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wf,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pi extends qs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wf,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qf extends an{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class KM extends Qf{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const qc=new Bt,Tm=new $,wm=new $;class $M{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qf,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Tm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tm),wm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wm),n.updateMatrixWorld(),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZM extends $M{constructor(){super(new $m(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class QM extends Qf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new ZM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class JM extends Qf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);function eE(){const o=Fn.useRef(null),[e,n]=Fn.useState(!1),r=Fn.useRef(null),a=Fn.useRef(null),u=Fn.useRef(null),f=Fn.useRef({x:0,y:2,z:0,yaw:0,pitch:0}),d=Fn.useRef(new Set),p=Fn.useRef(new Set),m=Fn.useRef(0),v=Fn.useCallback(S=>{S.background=new lt(8900331),S.fog=new Cl(8900331,.012);const w=new Ns(4,16,16),R=new Rl({color:16777096}),g=new Vt(w,R);g.position.set(80,60,-60),S.add(g);const _=new Ns(1,8,8),b=new Rl({color:16777215}),P=(me,Se,we,Ye=1)=>{const rt=new Us;for(let Ke=0;Ke<5;Ke++){const O=new Vt(_,b);O.position.set(Ke*2.5-5,Math.random()*.8,0),O.scale.setScalar(.8+Math.random()*.6),rt.add(O)}return rt.scale.setScalar(Ye),rt.position.set(me,Se,we),rt};for(let me=0;me<12;me++)S.add(P((Math.random()-.5)*200+50,35+Math.random()*20,(Math.random()-.5)*200-50,2+Math.random()*2));const L=new Xs(300,300,40,40),W=new jM({color:26367,transparent:!0,opacity:.75,shininess:200,specular:8965375}),N=new Vt(L,W);N.rotation.x=-Math.PI/2,N.position.y=.1,S.add(N);const I=L.attributes.position,z=()=>{const me=performance.now()*.001;for(let Se=0;Se<I.count;Se++){const we=I.getX(Se),Ye=I.getZ(Se);I.setY(Se,Math.sin(we*.05+me)*.3+Math.cos(Ye*.05+me*.8)*.3)}I.needsUpdate=!0};p.current.add({mesh:N,vx:0,vy:0,vz:0,_waveAnim:z});const ae=new Pl(40,50,4,32),M=new pi({color:5614148}),A=new Vt(ae,M);A.position.y=-2,S.add(A);const q=new pi({color:4508723});new pi({color:16737945});for(let me=0;me<80;me++){const Se=Math.random()*Math.PI*2,we=Math.random()*38,Ye=Math.cos(Se)*we,rt=Math.sin(Se)*we,Ke=new Vt(new Kf(.4+Math.random()*.8,8),q);if(Ke.rotation.x=-Math.PI/2,Ke.position.set(Ye,.05,rt),S.add(Ke),Math.random()>.5){const O=new Ns(.15,6,6),Ot=new pi({color:new lt().setHSL(Math.random(),.8,.6)}),st=new Vt(O,Ot);st.position.set(Ye+(Math.random()-.5)*.5,.3,rt+(Math.random()-.5)*.5),S.add(st)}}const K=new pi({color:9127187}),re=new pi({color:2263842,side:ii}),ce=new pi({color:16758725,side:ii});for(let me=0;me<35;me++){const Se=Math.random()*Math.PI*2,we=5+Math.random()*30,Ye=Math.cos(Se)*we,rt=Math.sin(Se)*we,Ke=new Us,O=new Pl(.15,.3,4+Math.random()*3,8),Ot=new Vt(O,K);Ot.position.y=2,Ke.add(Ot);const ct=Math.random()>.6?ce:re;for(let qe=0;qe<7;qe++){const St=new Xs(.5,3),je=new Vt(St,ct);je.position.set(0,4.5,0),je.rotation.y=qe/7*Math.PI*2,je.rotation.x=-.4,Ke.add(je)}Ke.position.set(Ye,0,rt),Ke.rotation.y=Math.random()*Math.PI*2,S.add(Ke)}const ne=new pi({color:8947831});for(let me=0;me<25;me++){const Se=Math.random()*Math.PI*2,we=3+Math.random()*32,Ye=Math.cos(Se)*we,rt=Math.sin(Se)*we,Ke=new Zf(.3+Math.random()*.6,0),O=new Vt(Ke,ne);O.position.set(Ye,.2,rt),O.rotation.set(Math.random(),Math.random(),Math.random()),S.add(O)}const ue=new Xr(3,.3,15),B=new pi({color:9127187}),fe=new Vt(ue,B);fe.position.set(35,.3,0),S.add(fe);const se=new Xr(.15,.8,15);for(let me of[-1.4,1.4]){const Se=new Vt(se,K);Se.position.set(35+me,.7,0),S.add(Se)}const F=new Ns(5,16,8,0,Math.PI*2,0,Math.PI/2),ie=new pi({color:5614148}),Le=new Vt(F,ie);Le.position.set(55,-1,-20),S.add(Le);const Q=new JM(13426175,.7);S.add(Q);const le=new QM(16777164,1.2);le.position.set(80,60,-60),S.add(le);const ye=new KM(8900331,4500036,.5);S.add(ye)},[]),y=Fn.useCallback(()=>{if(!o.current)return;const S=new qM;S.background=new lt(8900331),S.fog=new Cl(8900331,.012),r.current=S;const w=new Xn(75,window.innerWidth/window.innerHeight,.1,500);w.position.set(0,2,0),a.current=w;const R=new YM({antialias:!1,powerPreference:"high-performance"});R.setSize(window.innerWidth,window.innerHeight),R.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),R.shadowMap.enabled=!1,o.current.appendChild(R.domElement),u.current=R,v(S),window.addEventListener("resize",()=>{!a.current||!u.current||(a.current.aspect=window.innerWidth/window.innerHeight,a.current.updateProjectionMatrix(),u.current.setSize(window.innerWidth,window.innerHeight))});const g=z=>d.current.add(z.code),_=z=>d.current.delete(z.code);window.addEventListener("keydown",g),window.addEventListener("keyup",_);const b=R.domElement;b.addEventListener("click",()=>b.requestPointerLock());let P=0,L=0;const W=z=>{document.pointerLockElement===b&&(P-=z.movementX*.002,L-=z.movementY*.002,L=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,L)))};document.addEventListener("mousemove",W);let N=0;const I=()=>{performance.now(),m.current=requestAnimationFrame(I);const z=f.current;z.yaw=P,z.pitch=L;const ae=8,M=(d.current.has("KeyD")?1:0)-(d.current.has("KeyA")?1:0),A=(d.current.has("KeyS")?1:0)-(d.current.has("KeyW")?1:0),q=M!==0||A!==0;if(M!==0||A!==0){const ce=P+Math.atan2(M,A);z.x+=Math.sin(ce)*ae*.016,z.z+=Math.cos(ce)*ae*.016}q&&(N+=.016*10);const K=q?Math.sin(N)*.06:0;w.position.set(z.x,2+K,z.z),w.rotation.order="YXZ",w.rotation.y=P,w.rotation.x=L,p.current.forEach(ce=>{ce._waveAnim&&ce._waveAnim()}),R.render(S,w)};return requestAnimationFrame(I),()=>{var z;cancelAnimationFrame(m.current),window.removeEventListener("keydown",g),window.removeEventListener("keyup",_),document.removeEventListener("mousemove",W),R.dispose(),(z=o.current)==null||z.removeChild(R.domElement)}},[v]),x=()=>n(!0);return Fn.useEffect(()=>{if(e)return y()},[e,y]),e?Ds.jsx("div",{ref:o}):Ds.jsxs("div",{id:"enter",onClick:x,children:[Ds.jsx("h1",{children:"SONIC CHAO ISLAND"}),Ds.jsx("p",{children:"WASD · Mouse Look · Click to start"})]})}G_.createRoot(document.getElementById("root")).render(Ds.jsx(Fn.StrictMode,{children:Ds.jsx(eE,{})}));
